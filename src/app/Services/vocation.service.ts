import { Injectable } from '@angular/core';
import { Month, Vocation, Result } from '../Models';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class VocationService {

  private readonly AVERAGE_DAYS_WORK = 29.3;

  constructor() { }

  //Количество дней в полных месяцах
  getCountDaysInFullMonth(months: Month[]): number {
    const countMonths = months.filter(value => value.excludeCountDay === 0).length;
    return this.AVERAGE_DAYS_WORK * countMonths;
  }

  //Количество дней в не полных месяцах
  getCountDaysInNotFullMonth(months: Month[]): number {
    const countDayInMonths = months
      .filter(value => value.excludeCountDay > 0)
      .reduce((acc, value) => {
        //(29.3 * количество рабочих дней)/количество дней в месяце
        const rb = moment(value.month).daysInMonth() - value.excludeCountDay;
        const ret = (this.AVERAGE_DAYS_WORK * rb) / moment(value.month).daysInMonth();
        return acc += ret;
      }, 0)

    return countDayInMonths;
  }

  //Возвращает сумму всех начислений
  getSummTotal(months: Month[]): number {
    const summ = months.reduce((acc, value) => acc += value.summ, 0);
    return summ;
  }

  getResult(vocation: Vocation): Result {
    const ob = vocation.month[vocation.month.length - 1];
    if(vocation.dateFromWork && vocation.dateFromWork.getDate() > 1){
      ob.excludeCountDay = vocation.dateFromWork.getDate();
    }
    const znam = this.getCountDaysInFullMonth(vocation.month) + this.getCountDaysInNotFullMonth(vocation.month);
    const avrgSum = this.getSummTotal(vocation.month) / znam;

    const vocationSum = Math.round((avrgSum * vocation.countDay) * 100) / 100;
    let result = new Result(avrgSum, vocationSum);
    return result;
  }

  getMonths(vocation: Vocation): Month[]{
    const dateFrom = vocation.dateFrom;
    const dateFromWork = vocation.dateFromWork;
    let months:Month[] = [];
    let countMonth = 12;
    const dtEnd = moment(new Date(dateFrom));

    if (dateFrom && dateFromWork) {
      const dtBegin = moment(new Date(dateFromWork));
      countMonth = dtEnd.diff(dtBegin, 'months');
    }

    for (let i = 0; i < countMonth; i++) {
      const d = dtEnd.subtract(1, 'months').toDate();
      const month = new Month(d);
      months.unshift(month);
    }
    return months;
  }
}

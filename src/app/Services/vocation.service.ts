import { Injectable } from '@angular/core';
import { Month, Vocation, Result } from '../Models';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { range } from 'rxjs';
//import { reduce } from 'rxjs/operators';


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

  getResult(vocation: Vocation, month: Month[]): Observable<Result> {

    return Observable.create(observer => {
      if (!vocation || !month) observer.error('Ошибка во время вычисления');
      const { dateFromWork } = vocation;
      const ob = month[month.length - 1];
      if (dateFromWork && dateFromWork.getDate() > 1) {
        ob.excludeCountDay = dateFromWork.getDate();
      }
      const znam = this.getCountDaysInFullMonth(month) + this.getCountDaysInNotFullMonth(month);
      const avrgSum = this.getSummTotal(month) / znam;
      const vocationSum = Math.round((avrgSum * vocation.countDay) * 100) / 100;

      if (isNaN(vocationSum)) observer.error('Ошибка во время вычисления');

      const result = new Result(Math.round(avrgSum * 100) / 100, vocationSum);
      observer.next(result);
      observer.complete();
    });
  }

  getMonths(vocation: Vocation): Observable<Month[]> {
    return Observable.create(observer => {
      const { dateFrom, dateFromWork } = vocation;
      if (!dateFrom) observer.error('Ошибка во время получения списка месяцев');
      const dtEnd = moment(dateFrom);
      const countMonth = (dateFrom && dateFromWork)
        ? dtEnd.diff(moment(dateFromWork), 'months')
        : 12;
      let months: Month[] = [];

      for (let i = 0; i < countMonth; i++) {
        const d = dtEnd.subtract(1, 'months').toDate();
        const month = new Month(d);
        months.unshift(month);
      }
      observer.next(months);
      observer.complete();
    });
  }
}

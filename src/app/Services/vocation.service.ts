import { Injectable } from '@angular/core';
import { Month } from '../Models';
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
}

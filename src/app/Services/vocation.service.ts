import { Injectable } from '@angular/core';
import { Month } from '../Models';

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
}

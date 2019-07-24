import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateToName'
})
export class DateToNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment(value).format('MMMM YYYY').toUpperCase();
  }

}

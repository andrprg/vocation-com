import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToName'
})
export class DateToNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

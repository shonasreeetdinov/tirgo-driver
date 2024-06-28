import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number | string): string {
    const stringValue = String(value).replace(/,/g, '');
    return stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}

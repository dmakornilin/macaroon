import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipeRub'
})
export class CurrencyPipeRub implements PipeTransform {

  transform(value: string  | null): string | null  {
    if (value) {
      return value.replace(',','.').replace('₽', 'руб.');
    } else return value;
  }

}

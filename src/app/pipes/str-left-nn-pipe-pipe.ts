import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strLeftNNPipe'
})
export class StrLeftNNPipe implements PipeTransform {

  transform(value: string, leftNN:number ): string {
    let nn:number =value.length;
    if (nn<=leftNN) {
      return value
    } else {
      return value.substring(0,leftNN) + '...';
    }
  }

}

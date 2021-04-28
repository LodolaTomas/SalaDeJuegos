import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tateti'
})
export class TatetiPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

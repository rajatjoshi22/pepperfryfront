import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {


  transform(value: any, ...args: any[]): any {
    return null;
  }

}

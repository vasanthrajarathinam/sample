import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trippledot'
})
export class TrippledotPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + '...';
  }

}

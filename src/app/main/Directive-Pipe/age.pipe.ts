import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any) {
    let current = new Date().getFullYear();
    let birthday = new Date(value).getFullYear();
    return current - birthday;
  }

}

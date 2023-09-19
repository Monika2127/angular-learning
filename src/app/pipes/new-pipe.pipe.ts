import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe'
})
export class NewPipePipe implements PipeTransform {

  transform(value: String): String {
    if(!value)
      return '';

    let excludedItems = ['of', 'is', 'the']
    let val = value.split(' ');

    for(let item in val) {

      if(+item > 0 && excludedItems.includes(val[item].toLowerCase())) {
        val[item] = val[item].toLowerCase();
      } else {
        val[item] = val[item].substring(0, 1).toUpperCase() + val[item].substring(1).toLowerCase();
      }

    }

    value = val.join(' ');

    return value;
  }

}

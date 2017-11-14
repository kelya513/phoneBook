import { Pipe, PipeTransform } from '@angular/core';
import {first} from "rxjs/operator/first";

@Pipe({
  name: 'phonebook'
})
export class PhonebookPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    //(111-11-11)

    let res = '';
    // if(value.length > 7){
    //   value = value.substring(0,6)
    // }

    let firstSym = true;
    for(let i = 0; i < value.length; i++){
      if(firstSym && i==2){
        res += value.charAt(i) + '-';
        firstSym = false
      }else if (!firstSym && i % 2 == 0 && i !=  value.length-1){
        res += value.charAt(i) + '-';
      }else{
        res += value.charAt(i);
      }
    }

    return res;
  }

}

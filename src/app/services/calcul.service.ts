import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() {


  }
  getNumberOf(list:any[], criteria:string, value:any){
    let result=0;
    for( let i of list){
      if (i[criteria]===value){
        result++;
      }
    }
    return result;
  }


}

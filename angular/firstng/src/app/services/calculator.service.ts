import { NgFor } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
    factorial(n:number){
  let fact:any=1; 
    for(let i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
  }

  power(b:number,e:number){
    let result: any = 1;
    for(var i=1;i<=e;i++){
      result*=b;
    }
    return result; 
  }
  
  constructor() { }
}

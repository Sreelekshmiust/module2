import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {

  number1:any=0;
  result:any=0;
  number2:any=0;
  result1:any;
  number3:any=0;
  result2:any;
  number4:any=0;
  result3:any;
  factorial(number1:number){
      let fact:any=1; 
        for(let i=1;i<=number1;i++){
            fact*=i;
        }
        this.result=fact;
      }
  evenOdd(number2:number){
    if(number2%2==0){
      this.result1="even";
    }
    else{
      this.result1="odd";
    }
  }
  addition(number3:number){
    var add=0;
    for(var i=1;i<=number3;i++){
      add=add+i;
    }
    this.result2=add;
  }   
  fibonacci(number4:number){
    var a=0;
    var b=1;
    var c=0;
    for(var i=1;i<number4;i++){
      c=a+b;
      a=b;
      b=c;
    }
    this.result3=c;
  }
  } 


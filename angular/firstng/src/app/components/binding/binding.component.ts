import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit,OnDestroy,OnChanges{
  ngOnInit(): void {
    console.log('from... ngOnInit()');
    //throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    console.log('from... ngOnDestroy()');
    //throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('from... ngOnchanges()');
    //throw new Error('Method not implemented.');
  }

  productId: number = 127676;
  description = "Apple mac book - Retina eye"
  qty : number = 150;
  price : number = 130000.00;
  available: string = 'green';
  notavailable: string ='red';
  delivery : string ='red';

  orderedQty: number = 0;
  isMember = false;
  isQtyAvail =this.qty>0;
  takeOrder():void{
    console.log(this.orderedQty + ' order placed....');
  }

  items : Item[]=[
    new Item(1,'Iphone','Smart phone',350000,10),
    new Item(2,'Samsung Galaxy','Smart mobile',67000,18),
    new Item(3,'Oneplus+11','adv Smart phone',500000,6)
  ];

  products = [
    {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
    {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
    {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
    {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];



}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from 'src/app/interfaces/product';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss']
})
export class OrdenComponent implements OnInit {
  @Input() orden = {name:'', url:'', price:0, type:'', count: 0, queso:0, huevo:0};

  decreaseProduct(event:Event){
    this.orden.count--;
  }
  increaseProduct(event:Event){
    this.orden.count++;
  }
  delete(event:Event){
    this.orden.count = 0;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

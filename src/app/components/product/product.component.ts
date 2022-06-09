import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product = {name:'', url:'', price:0, type:'', count: 0, queso:0, huevo:0};
  ordenes: Product[] = [{name:'', url:'', price:0, type:'', count: 0, queso:0, huevo:0}];
  @Output() newItemEvent = new EventEmitter<object>();
  constructor() { }

  ngOnInit(): void {
  }
  addProduct(event:Event){
    this.product.count++
    this.newItemEvent.emit(this.product);
  }
  increaseHuevo (event:Event){
    this.product.huevo++;

  }
  increaseQueso (event:Event){
    this.product.queso++;

  }
  onAddNewOrden(orden: Product)
  { this.ordenes.push(orden);
    console.log(this.ordenes)
  }
}

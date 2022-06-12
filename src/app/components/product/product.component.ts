import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import beverages from 'src/app/interfaces/beverages';
import Product from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product = {name:'', url:'', price:0, type:'', count: 0, queso:0, huevo:0};
  cardColor ={class1 : false};
  bedida!: beverages;
  no!: string;

  addProduct(event:Event){
    this.product.count++;
    this.cardColor.class1 = true;
  }
  increaseHuevo (event:Event){
    this.product.huevo++;

  }
  increaseQueso (event:Event){
    this.product.queso++;
  }

  agregarBebida(bebidas: Product)
  {
    this.bedida = bebidas;
  }



  constructor() { }
  ngOnInit(): void {
  }
}

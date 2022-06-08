import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product = {name:'', url:'', price:0, type:'', count: 0, queso:0, huevo:0};
  constructor() { }

  ngOnInit(): void {
  }
  addProduct(event:Event){
    this.product.count++
  }
  increaseHuevo (event:Event){
    this.product.huevo++;

  }
  increaseQueso (event:Event){
    this.product.queso++;

  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from 'src/app/interfaces/product';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss']
})
export class OrdenComponent implements OnInit {
  @Input() ordens: Product[] = [{name:'', url:'', price:0, type:'', count: 0, queso:0, huevo:0}];
  @Output() newOrden = new EventEmitter<Product>()
  constructor() { }

  ngOnInit(): void {
  }

  addNewOrden(value: Product){
    this.newOrden.emit(value);
  }
}

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  @Input() products: any;
  @Input() type: string = '';

  pedidos=[];

  constructor() { }

  ngOnInit(): void {
  }
  typeOfProduct(value: string){
    this.type = value;
  }
  @ViewChild(MatDrawer) drawer: MatDrawer | undefined;
  onToggleCart() {
    this.drawer?.toggle();
  }
}

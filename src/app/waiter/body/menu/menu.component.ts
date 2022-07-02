import { Component, OnInit } from '@angular/core';
import { ProductUserFirebaseService } from 'src/app/services/product-firebase.service';
import {products}  from './products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menu = products;
  constructor(private productFirebase: ProductUserFirebaseService) { }

  ngOnInit(): void {

    this.productFirebase.getProducts().subscribe((products)=>{
      this.menu['burguers'] = products.filter(product=>product.typeProduct === 'Burger');
      this.menu['beverages']=products.filter(product=>product.typeProduct === 'Beverages');
      this.menu['accompaniments']=products.filter(product=>product.typeProduct === 'Accompaniments')

    })
  }

}

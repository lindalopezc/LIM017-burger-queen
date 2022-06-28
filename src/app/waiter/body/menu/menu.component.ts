import { Component, OnInit } from '@angular/core';
import { ProductFirebaseService } from 'src/app/services/product-firebase.service';
import { products } from './products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menu = products;
  constructor(private productFirebase: ProductFirebaseService) { }

  ngOnInit(): void {
    this.productFirebase.getProducts().subscribe((products)=>{
      this.menu['burguers'].push(...products.filter(product=>product.typeProduct === 'Burger'));
      this.menu['beverages'].push(...products.filter(product=>product.typeProduct === 'Beverages'))
      this.menu['accompaniments'].push(...products.filter(product=>product.typeProduct === 'Accompaniments'))
    })
  }
}

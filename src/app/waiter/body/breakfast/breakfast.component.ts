import { Component, OnInit } from '@angular/core';
import { ProductUserFirebaseService } from 'src/app/services/product-firebase.service';
import { breakfasts } from './data-breakfast';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
})
export class BreakfastComponent implements OnInit {
  breakfastProducts = breakfasts;
  constructor(private productFirebase: ProductUserFirebaseService) { }

  ngOnInit(): void {
    this.productFirebase.getProducts().subscribe((products)=>{
      this.breakfastProducts['breakfasts'] = products.filter(product=>product.typeProduct === 'Breakfast');
    })
  }

}

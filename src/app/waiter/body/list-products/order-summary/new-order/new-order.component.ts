import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { FormBuilder } from '@angular/forms';
import { OrderService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
  providers:[OrderService]
})
export class NewOrderComponent implements OnInit {
  @Input() order: Product = {name:'', url:'', price:0, type:'', count:0 , cheese:0, egg:0};
  items:any;
  checkoutForm;

  constructor(public orderService: OrderService,  private formBuilder: FormBuilder){
    this.checkoutForm = this.formBuilder.group({
      nameProduct: '',
      cant: 0
    });
  }

  increaseProduct(event: Event, product:Product){
    product.count++;
  }

  ngOnInit(): void {
    this.items = this.orderService.getOrders();
  }

  onSubmit(customerData:any) {
    // Process checkout data here
    this.items = this.orderService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}

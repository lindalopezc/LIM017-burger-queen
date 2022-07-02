import { Component, OnInit } from '@angular/core';
import { OrdersFirebaseService } from 'src/app/services/orders-firebase.service';
import { UserFirebaseService } from 'src/app/services/user-firebase.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})

export class ListOrdersComponent implements OnInit {
  orders: any[];
  constructor(private UserFirebaseService: UserFirebaseService,
    private orderFirebase : OrdersFirebaseService) {this.orders=[{}]}

  ngOnInit(): void {
    this.orderFirebase.getOrders().subscribe(orders => {
      this.orders = orders;
    })
  }

  changeStatus(index:number, status: string): Promise<any>{
    return this.orderFirebase.updateStatusOrder(this.orders[index],status);
  }
}

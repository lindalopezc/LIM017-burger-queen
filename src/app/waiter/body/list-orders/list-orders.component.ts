import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD:src/app/waiter/list-orders/list-orders.component.ts
import { firebaseService } from 'src/app/services/orden.service';
=======
import { firebaseService, OrderService } from 'src/app/services/orden.service';
>>>>>>> f97992988fdfe9af3aa5468c6490fedd4001ca0b:src/app/waiter/body/list-orders/list-orders.component.ts

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})

export class ListOrdersComponent implements OnInit {
  orders: any[];
<<<<<<< HEAD:src/app/waiter/list-orders/list-orders.component.ts
  constructor(private orderService: firebaseService) { this.orders=[{}]}
=======
  constructor(private firebaseService: firebaseService) { this.orders=[{}]}
>>>>>>> f97992988fdfe9af3aa5468c6490fedd4001ca0b:src/app/waiter/body/list-orders/list-orders.component.ts

  ngOnInit(): void {
    this.firebaseService.getOrdens().subscribe(orders=>{
      this.orders = orders;
    })
  }

}

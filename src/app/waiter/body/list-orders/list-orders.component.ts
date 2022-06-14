import { Component, OnInit } from '@angular/core';
import { firebaseService, OrderService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})

export class ListOrdersComponent implements OnInit {
  orders: any[];
  constructor(private firebaseService: firebaseService) { this.orders=[{}]}

  ngOnInit(): void {
    this.firebaseService.getOrdens().subscribe(orders=>{
      this.orders = orders;
    })
  }

}

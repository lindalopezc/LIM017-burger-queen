import { Component, OnInit } from '@angular/core';
import { firebaseService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {
  orders: any[];
  constructor(private orderService: firebaseService) { this.orders=[{}]}

  ngOnInit(): void {
    this.orderService.getOrdens().subscribe(orders=>{
      this.orders = orders;
    })
  }

}

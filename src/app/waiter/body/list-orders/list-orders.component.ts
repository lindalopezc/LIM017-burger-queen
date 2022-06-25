import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})

export class ListOrdersComponent implements OnInit {
  orders: any[];
  constructor(private firebaseService: FirebaseService) { this.orders=[{}]}

  ngOnInit(): void {
    this.firebaseService.getOrdens().subscribe(orders => {
      this.orders = orders;
    })
  }

  changeStatus(index:number, status: string): Promise<any>{
    return this.firebaseService.updateOrder(this.orders[index],status);
  }
}

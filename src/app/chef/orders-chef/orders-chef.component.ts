import { Component, OnInit } from '@angular/core';
import OrderFirebase from 'src/app/interfaces/orders-firebase';
import { FirebaseService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-orders-chef',
  templateUrl: './orders-chef.component.html',
  styleUrls: ['./orders-chef.component.scss']
})
export class OrdersChefComponent implements OnInit {
  ordersChef!: OrderFirebase[];
  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit(): void {
    this.firebaseService.getOrdens().subscribe(orders=>{
      this.ordersChef = orders;
      console.log(this.ordersChef)
    })


  }
  changeStatus(statusValue: string, index: number){
    return this.firebaseService.updateOrder(this.ordersChef[index],statusValue)
  }

}

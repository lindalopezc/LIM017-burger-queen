import { Component, OnInit, ViewChild } from '@angular/core';
import OrderFirebase from 'src/app/interfaces/orders-firebase';
import { UserFirebaseService } from 'src/app/services/user-firebase.service';
import { Router } from '@angular/router';
import { TimeInterface } from 'angular-cd-timer';
import { OrdersFirebaseService } from '../services/orders-firebase.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss']
})

export class ChefComponent implements OnInit {
  @ViewChild('basicTimer') timer!: TimeInterface;
  ordersChef!: OrderFirebase[];
  timerForEachOrder: Array<number> = Array(10);

  constructor(private UserFirebaseService: UserFirebaseService,
    private router: Router,
    private ordersFirebase: OrdersFirebaseService) {}

  ngOnInit(): void {
    this.ordersFirebase.getOrders().subscribe(orders => {
      this.timerForEachOrder.length = orders.length;
      this.ordersChef = orders;
    })
  }

  changeStatus(statusValue: string, index: number){
    this.upDateAllTimersOrders()
    .then(()=>{
      this.ordersFirebase.updateStatusOrder(this.ordersChef[index], statusValue);
    })
  }

  updateTimer(component: any, index: number){
    this.timerForEachOrder[index] = component.hours*3600 + component.minutes*60 + component.seconds;
  }

  upDateAllTimersOrders(){
    this.ordersChef.forEach((order, index)=>{
      if(this.timerForEachOrder[index]){
        this.ordersFirebase.updateTimerOrder(order, this.timerForEachOrder[index]);
      }
    });
    return Promise.all(this.ordersChef);
  }

  signOut(event:Event){
    this.UserFirebaseService.signOut()
    .then(()=>{
      this.router.navigate(['/login']);
    })
  }
}

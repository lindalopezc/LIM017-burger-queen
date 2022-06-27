import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import OrderFirebase from 'src/app/interfaces/orders-firebase';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';

@Component({
  selector: 'app-orders-chef',
  templateUrl: './orders-chef.component.html',
  styleUrls: ['./orders-chef.component.scss']
})

export class OrdersChefComponent implements OnInit {
  @ViewChild('basicTimer') timer!: TimeInterface;
  ordersChef!: OrderFirebase[];
<<<<<<< HEAD
  constructor(private firebaseService: FirebaseService,
    private userService: FirebaseService,
    private router: Router) {
=======
  timerForEachOrder: Array<number> = Array(10);
>>>>>>> e3de697ba36d0b218784c128c88145646ab03db9

  constructor(private firebaseService: FirebaseService,
    private router: Router) {}

  ngOnInit(): void {
    this.firebaseService.getOrders().subscribe(orders => {
      this.timerForEachOrder.length = orders.length;
      this.ordersChef = orders;
    })
  }

  changeStatus(statusValue: string, index: number){
    this.upDateAllTimersOrders()
    .then(()=>{
      this.firebaseService.updateStatusOrder(this.ordersChef[index], statusValue);
    })
  }

  updateTimer(component: any, index: number){
    this.timerForEachOrder[index] = component.hours*3600 + component.minutes*60 + component.seconds;
  }

  upDateAllTimersOrders(){
    this.ordersChef.forEach((order, index)=>{
      if(this.timerForEachOrder[index]){
        this.firebaseService.updateTimerOrder(order, this.timerForEachOrder[index]);
      }
    });
    return Promise.all(this.ordersChef);
  }

  signOut(event:Event){
    this.firebaseService.signOut()
    .then(()=>{
      this.router.navigate(['/login']);
    })
    .catch((error)=> console.log(error));
  }
}

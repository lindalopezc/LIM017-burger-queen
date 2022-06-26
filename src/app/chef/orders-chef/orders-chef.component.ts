import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import OrderFirebase from 'src/app/interfaces/orders-firebase';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-chef',
  templateUrl: './orders-chef.component.html',
  styleUrls: ['./orders-chef.component.scss']
})

export class OrdersChefComponent implements OnInit {
  @ViewChild('basicTimer') timer: any;
  ordersChef!: OrderFirebase[];
  timerForEachOrder!: Array<number>;

  constructor(private firebaseService: FirebaseService, private router: Router) {}

  ngOnInit(): void {
    this.firebaseService.getOrders().subscribe(orders=>{
      this.ordersChef = orders;
      this.timerForEachOrder = Array(this.ordersChef.length);
      this.timerForEachOrder = this.timerForEachOrder.fill(0);

      this.ordersChef.forEach((order, index) => {
        if(order.Status === 'Preparing'){
          this.timerForEachOrder[index] = order.Timer;
        }
      })
    })
  }

  changeStatus(statusValue: string, index: number){
    this.firebaseService.updateStatusOrder(this.ordersChef[index],statusValue);
    this.updateTimer();
  }

  updateTimer():void{
    this.ordersChef.forEach((order) => {
      if(this.timer.seconds){
        this.firebaseService.updateTimerOrder(order, this.timer.seconds);
      }
    })
  }

  signOut(event:Event){
    this.firebaseService.signOut()
    .then(()=>{
      this.router.navigate(['/login']);
    })
    .catch((error)=> console.log(error));
  }
}

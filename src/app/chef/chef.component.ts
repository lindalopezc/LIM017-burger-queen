import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import OrderFirebase from 'src/app/interfaces/orders-firebase';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss']
})

export class ChefComponent implements OnInit {
  @ViewChild('basicTimer') timer!: TimeInterface;
  ordersChef!: OrderFirebase[];
  timerForEachOrder: Array<number> = Array(10);

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

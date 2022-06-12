import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/orden.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss']
})
export class WaiterComponent implements OnInit {
    constructor(private ordenService: OrderService) { }

  ngOnInit(): void {
  }

}

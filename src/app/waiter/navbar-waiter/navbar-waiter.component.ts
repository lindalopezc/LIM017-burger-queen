import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-waiter',
  templateUrl: './navbar-waiter.component.html',
  styleUrls: ['./navbar-waiter.component.scss']
})
export class NavbarWaiterComponent implements OnInit {

  @Output() toggleCart = new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  handleClickCart(event:Event) {
    this.toggleCart.next(event);
  }

}

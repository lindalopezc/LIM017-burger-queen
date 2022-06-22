import { Component, OnInit } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu = products;
  constructor() { }

  ngOnInit(): void {
  }

}

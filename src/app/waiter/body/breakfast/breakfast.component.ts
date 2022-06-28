import { Component, OnInit } from '@angular/core';
import { breakfasts } from './data-breakfast';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
})
export class BreakfastComponent implements OnInit {
  breakfastProducts = breakfasts;
  constructor() { }

  ngOnInit(): void {

  }

}

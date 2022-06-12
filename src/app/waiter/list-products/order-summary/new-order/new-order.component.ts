import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {


  @Input() orden = {name:'', url:'', price:0, type:'', count: 1, queso:0, huevo:0};

  count = this.orden.count;

  decreaseProduct(event:Event){
    this.count--;
  }
  increaseProduct(event:Event){
    this.count++;
  }
  delete(event:Event){
    this.count=0;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

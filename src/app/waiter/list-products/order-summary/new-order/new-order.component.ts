import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {
  @Input() order: Product = {name:'', url:'', price:0, type:'', count:0 , cheese:0, egg:0};


  ngOnInit(): void {
  }

}

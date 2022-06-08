import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss']
})
export class OrdenComponent implements OnInit {
  @Input() orden = {name:'', url:'', price:0, type:'', count: 0, queso:0, huevo:0};
  constructor() { }

  ngOnInit(): void {
  }

}

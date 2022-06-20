import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Order } from 'src/app/interfaces/order';
import  Product  from 'src/app/interfaces/product';
import { FirebaseService, OrderService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {

  nameMesero = 'Maria Paula';
  table = new FormControl('',[]);
  clientName= new FormControl('',[]);
  title = 'LIM017-burger-queen';
  date = Date().substring(0,34);
  total = 0;
  orderSummary !: Order[];

  constructor(private orderService: OrderService, private firebaseService: FirebaseService){
    this.orderSummary = this.orderService.getOrderSummary();
  }

  ngOnInit(): void {

  }

  addPriceToTotal(price: number){
    this.total+=price
  }
  totalPrice(){
    return this.orderSummary.reduce((previus, current)=>{
      if(current.cheese&&current.egg)
        return current.price+previus+Number(current.egg)+Number(current.cheese);
      return current.price+previus;
    },this.total)
  }
  createOrden(event: Event, orders : Order[]){
    const orden = {
      Mesero: this.nameMesero,
      Cliente: this.clientName.value,
      Mesa: this.table.value,
      Fecha: this.date,
      Hamburguesas: orders,
      Acompanamientos:['papas', 'aros de cebolla'], //esto se debe corregir cuando se adicione la vista de acompañamientos
      Bebidas: ['gaseosa', 'agua'],
      total:this.totalPrice()
    };
    this.firebaseService.addOrderToFirebase(orden); //cambie addOrden por addOrderToFirebase
    this.orderService.clearOrderSummary();
  }
}

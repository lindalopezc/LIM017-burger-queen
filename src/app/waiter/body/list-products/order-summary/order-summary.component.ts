import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import  Product  from 'src/app/interfaces/product';
import { firebaseService, OrderService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {

  nameMesero = 'Maria Paula';
  mesa = 1;
  nombreCliente = 'Jaqueline Ramos';
  title = 'LIM017-burger-queen';
  date = Date().substring(0,34);
  total = 0;

  firebaseService: any;
  createOrden(event: Event, pedidos : any[]){
    const orden = {
      Mesero: this.nameMesero,
      Cliente: this.nombreCliente,
      Mesa: this.mesa,
      Fecha: this.date,
      Hamburguesas: pedidos,
      Acompanamientos:['papas', 'aros de cebolla'], //esto se debe corregir cuando se adicione la vista de acompañamientos
      Bebidas: ['gaseosa', 'agua'],
    };
    this.firebaseService.addOrderToFirebase(orden); //cambie addOrden por addOrderToFirebase
  }

  orderSummary !: Order[];
  constructor(private orderService: OrderService){
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
}

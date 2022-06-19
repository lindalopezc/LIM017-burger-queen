import { Component, OnInit } from '@angular/core';
import { firebaseService, OrderService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  nameMesero = 'Maria Paula'; //Datos que se deben cambiar
  mesa = 1;
  nombreCliente = 'Jaqueline Ramos';
  title = 'LIM017-burger-queen';
  date = Date().substring(0,34);

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

  get orderSummary(){
    console.log('order summary', this.orderService.orderSummary)
    return this.orderService.orderSummary;
  }

  constructor(public orderService: OrderService){}

  ngOnInit(): void {
  }

}

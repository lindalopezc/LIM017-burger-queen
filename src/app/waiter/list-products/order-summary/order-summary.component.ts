import { Component, OnInit } from '@angular/core';

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
  products = {
    hamburguesas:
    [
      {
        name: 'Hamburguesa de res',
        url: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/HamburguesaConQueso_500_540_0.png',
        price: 10,
        type: 'simple',
        huevo: 0,
        queso: 0,
        count: 0,
      },
      {
        name: 'Hamburguesa de pollo',
        url: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/HamburguesaConQueso_500_540_0.png',
        price: 10,
        type: 'simple',
        huevo: 0,
        queso: 0,
        count: 0,
      },
      {
        name: 'Hamburguesa vegetariana',
        url: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/HamburguesaConQueso_500_540_0.png',
        price: 10,
        type: 'simple',
        huevo: 0,
        queso: 0,
        count: 0,
      },
      {
        name: 'Hamburguesa de res',
        url: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/BK_Web_MegaStackerX2_500x540.png',
        price: 15,
        type: 'doble',
        huevo: 0,
        queso: 0,
        count: 0,
      },
      {
        name: 'Hamburguesa de pollo',
        url: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/BK_Web_MegaStackerX2_500x540.png',
        price: 15,
        type: 'doble',
        huevo: 0,
        queso: 0,
        count: 0,
      },
      {
        name: 'Hamburguesa vegetariana',
        url: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/BK_Web_MegaStackerX2_500x540.png',
        price: 15,
        type: 'doble',
        huevo: 0,
        queso: 0,
        count: 0,
      }
    ],
    acompanamientos:
    [
      {
        name: 'Papas fritas',
        price: 5,
        count: 0,
      },
      {
        name: 'Aros de cebolla',
        price: 5,
        count: 0,
      }
    ],
    bebidas:
    [
      {
        name: 'Agua 500ml',
        price: 5,
        count: 0,
      },
      {
        name: 'Agua 750ml',
        price: 7,
        count: 0,
      },
      {
        name: 'Gaseosa 500ml',
        price: 7,
        count: 0,
      },
      {
        name: 'Gaseosa 750ml',
        price: 10,
        count: 0,
      },
    ]

    }
  ordenService: any;
  createOrden(event: Event, pedidos : any[]){
    const orden = {
      Mesero: this.nameMesero,
      Cliente: this.nombreCliente,
      Mesa: this.mesa,
      Fecha: this.date,
      Hamburguesas: pedidos,
      Acompanamientos: this.products.acompanamientos, //esto se debe corregir cuando se adicione la vista de acompañamientos
      Bebidas: this.products.bebidas,
    };
    this.ordenService.addOrden(orden); //El tipado de orden está en product.ts
}
  constructor() { }

  ngOnInit(): void {
  }

}

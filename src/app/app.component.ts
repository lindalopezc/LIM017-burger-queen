import { Component } from '@angular/core';
import Product from './interfaces/product';
import { OrdenService } from './services/orden.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  nombreCliente = '';
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
        price: 5
      },
      {
        name: 'Aros de cebolla',
        price: 5
      }
    ],
    bebidas:
    [
      {
        name: 'Agua 500ml',
        price: 5
      },
      {
        name: 'Agua 750ml',
        price: 7
      },
      {
        name: 'Gaseosa 500ml',
        price: 7
      },
      {
        name: 'Gaseosa 750ml',
        price: 10
      },
    ]

    }
    Arr = [
      {
        name:"string", url:"string", price:34, type:"string", count: 58, queso:58, huevo:58
      },
      {
        name:"string", url:"string", price:58, type:"string", count: 58, queso:58, huevo:58
      }
      ]

    constructor(private ordenService: OrdenService) { }
    decreaseProduct(event:Event, indice: number){
      if(this.products.hamburguesas[indice].count>0)
      {this.products.hamburguesas[indice].count--}
    }
    increaseProduct(event:Event, indice: number){
      if(this.products.hamburguesas[indice].count>0)
      {this.products.hamburguesas[indice].count++}
    }
    delete(event:Event, indice: number){
      this.products.hamburguesas[indice].count=0
    }
    createOrden(event: Event, product: Product[]){
      const orden: Product[] = product;

      this.ordenService.addOrden(orden);
    }
  }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'LIM017-burger-queen';
  date = new Date();
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
        name: 'Hamburguesa de vegetariana',
        url: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/HamburguesaConQueso_500_540_0.png',
        price: 10,
        type: 'simple',
        huevo: 0,
        queso: 0,
        count: 0,
      },
      {
        name: 'Hamburguesa res',
        url: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/BK_Web_MegaStackerX2_500x540.png',
        price: 15,
        type: 'doble',
        huevo: 0,
        queso: 0,
        count: 0,
      },
      {
        name: 'Hamburguesa pollo',
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
  }

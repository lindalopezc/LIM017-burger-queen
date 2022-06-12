import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  products = {
    burguers:
    [
      {
        name: 'Beef Burger',
        url: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/HamburguesaConQueso_500_540_0.png',
        price: 10,
        type: 'simple',
        huevo: 0,
        queso: 0,
        count: 0,
      },
      {
        name: 'Chicken burguer',
        url: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/HamburguesaConQueso_500_540_0.png',
        price: 10,
        type: 'simple',
        huevo: 0,
        queso: 0,
        count: 0,
      },
      {
        name: 'Veggie burger',
        url: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/HamburguesaConQueso_500_540_0.png',
        price: 10,
        type: 'simple',
        huevo: 0,
        queso: 0,
        count: 0,
      },
      {
        name: 'Beef burger',
        url: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/BK_Web_MegaStackerX2_500x540.png',
        price: 15,
        type: 'doble',
        huevo: 0,
        queso: 0,
        count: 0,
      },
      {
        name: 'Chicken burguer',
        url: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/BK_Web_MegaStackerX2_500x540.png',
        price: 15,
        type: 'doble',
        huevo: 0,
        queso: 0,
        count: 0,
      },
      {
        name: 'Veggie burger',
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

  pedidos=[];
  constructor() { }

  ngOnInit(): void {
  }

}

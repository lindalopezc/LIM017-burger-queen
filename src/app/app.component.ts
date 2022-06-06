import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'LIM017-burger-queen';
  products = {
    hamburguesas:
    [
      {
        name: 'Hamburguesa simple',
        price: 10,
        options:['res', 'pollo', 'vegetariana'],
        extra: ['huevo', 'queso']
      },
      {
        name: 'Hamburguesa doble',
        price: 15,
        options:['res', 'pollo', 'vegetariana'],
        extra: ['huevo', 'queso']
      },
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

  }

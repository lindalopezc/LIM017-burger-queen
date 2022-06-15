
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefComponent } from './chef/chef.component';
import { LoginComponent } from './login/login.component';
import { ListOrdersComponent } from './waiter/list-orders/list-orders.component';
import { ListProductsComponent } from './waiter/list-products/list-products.component';
import { TablesComponent } from './waiter/tables/tables.component';
import { WaiterComponent } from './waiter/waiter.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch : 'full'},
  {path: "waiter", component: WaiterComponent, children:[
    {
      path: "tables",
      component: TablesComponent
    },
    {
      path: "list-orders",
      component: ListOrdersComponent
    },
    {
      path: "list-products",
      component: ListProductsComponent
    }
  ]},
  // {path: 'waiter', redirectTo: 'waiter/tables', pathMatch : 'full'},
  // {path: 'waiter/tables', component: TablesComponent},
  // {path: 'waiter/list-orders', component: ListOrdersComponent },
  // {path: 'waiter/list-products', component: ListProductsComponent},
  {path: 'home', component: LoginComponent },
  {path: 'chef', component: ChefComponent },
  {path: '**', redirectTo: 'home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

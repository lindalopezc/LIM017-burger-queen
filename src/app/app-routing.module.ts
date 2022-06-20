
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefComponent } from './chef/chef.component';
import { LoginComponent } from './login/login.component';
import { BreakfastComponent } from './waiter/body/breakfast/breakfast.component';
import { ListOrdersComponent } from './waiter/body/list-orders/list-orders.component';
import { ListProductsComponent } from './waiter/body/list-products/list-products.component';
import { MenuComponent } from './waiter/body/menu/menu.component';
import { TablesComponent } from './waiter/body/tables/tables.component';
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
      path: "menu",
      component: MenuComponent
    },
    {
      path: "breakfast",
      component: BreakfastComponent
    },
  ]},
  {path: 'home', component: LoginComponent },
  {path: 'chef', component: ChefComponent },
  {path: '**', redirectTo: 'home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

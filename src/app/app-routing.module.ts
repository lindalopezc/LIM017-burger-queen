
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefComponent } from './chef/chef.component';
import { LoginComponent } from './login/login.component';
import { BreakfastComponent } from './waiter/body/breakfast/breakfast.component';
import { ListOrdersComponent } from './waiter/body/list-orders/list-orders.component';
import { ListProductsComponent } from './waiter/body/list-products/list-products.component';
import { MenuComponent } from './waiter/body/menu/menu.component';
import { WaiterComponent } from './waiter/waiter.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { map } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { NewProductComponent } from './admin/new-product/new-product.component';
import { ListProductsAdminComponent } from './admin/list-products-admin/list-products-admin.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';

const onlyAdmin = ()=>map((user: any) => !!user && /admin.bq.com/.test(user.email));
const onlyChef= () => map((user: any) => !!user && /chef.bq.com/.test(user.email));
const onlyWaiter= () => map((user: any) => !!user && /waiter.bq.com/.test(user.email));

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch : 'full'},
  {path: 'home', redirectTo: 'login', pathMatch : 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, children:[
    {
      path: "products",
      component: ListProductsAdminComponent,
      ...canActivate(onlyAdmin)
    },
    {
      path: "users",
      component: ListUsersComponent,
      ...canActivate(onlyAdmin)
    }
  ], ...canActivate(onlyAdmin)},
  {path: 'chef', component: ChefComponent, ...canActivate(onlyChef)},
  {path: 'waiter', component: WaiterComponent, children:[
    {
      path: "list-orders",
      component: ListOrdersComponent,
      ...canActivate(onlyWaiter)
    },
    {
      path: "list-products",
      component: ListProductsComponent,
      ...canActivate(onlyWaiter)
    },
    {
      path: "menu",
      component: MenuComponent,
      ...canActivate(onlyWaiter)
    },
    {
      path: "breakfast",
      component: BreakfastComponent,
      ...canActivate(onlyWaiter)
    },
  ],
  ...canActivate(onlyWaiter)
},
  {path: '**', redirectTo: 'login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

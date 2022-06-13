import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { WaiterComponent } from './waiter/waiter.component';
import { ListOrdersComponent } from './waiter/list-orders/list-orders.component';
import { TablesComponent } from './waiter/tables/tables.component';
import { ChefComponent } from './chef/chef.component';
import { SidebarWaiterComponent } from './waiter/sidebar-waiter/sidebar-waiter.component';
import { SidebarChefComponent } from './chef/sidebar-chef/sidebar-chef.component';
import { ListProductsComponent } from './waiter/list-products/list-products.component';
import { ProductCardComponent } from './waiter/list-products/product-card/product-card.component';
import { OrderSummaryComponent } from './waiter/list-products/order-summary/order-summary.component';
import { NewOrderComponent } from './waiter/list-products/order-summary/new-order/new-order.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WaiterComponent,
    NewOrderComponent,
    ListOrdersComponent,
    TablesComponent,
    ChefComponent,
    SidebarWaiterComponent,
    SidebarChefComponent,
    ListProductsComponent,
    ProductCardComponent,
    OrderSummaryComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

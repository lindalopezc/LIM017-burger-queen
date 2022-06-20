import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { WaiterComponent } from './waiter/waiter.component';
import { ListOrdersComponent } from './waiter/body/list-orders/list-orders.component';
import { TablesComponent } from './waiter/body/tables/tables.component';
import { ChefComponent } from './chef/chef.component';
import { SidebarWaiterComponent } from './waiter/sidebar-waiter/sidebar-waiter.component';
import { SidebarChefComponent } from './chef/sidebar-chef/sidebar-chef.component';
import { ListProductsComponent } from './waiter/body/list-products/list-products.component';
import { ProductCardComponent } from './waiter/body/list-products/product-card/product-card.component';
import { OrderSummaryComponent } from './waiter/body/list-products/order-summary/order-summary.component';
import { NewOrderComponent } from './waiter/body/list-products/order-summary/new-order/new-order.component';
import { LoginComponent } from './login/login.component';
import { OrderService } from './services/orden.service';
import { BodyComponent } from './waiter/body/body.component';
import {MatIconModule} from '@angular/material/icon';
import { BreakfastComponent } from './waiter/body/breakfast/breakfast.component';
import { MenuComponent } from './waiter/body/menu/menu.component';

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
    BodyComponent,
    BreakfastComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

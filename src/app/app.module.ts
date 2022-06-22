import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

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
import { DialogElement } from './angular-material/dialog';
import { MenuComponent } from './waiter/body/menu/menu.component';
import { BreakfastComponent } from './waiter/body/breakfast/breakfast.component';
import { NavbarWaiterComponent } from './waiter/navbar-waiter/navbar-waiter.component';
import { OrdersChefComponent } from './chef/orders-chef/orders-chef.component';





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
    DialogElement,
    MenuComponent,
    BreakfastComponent,
    NavbarWaiterComponent,
    OrdersChefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatBadgeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

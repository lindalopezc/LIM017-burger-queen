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
import { MatInputModule } from '@angular/material/input';
import { provideFirestore,getFirestore, enableIndexedDbPersistence } from '@angular/fire/firestore';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { CdTimerModule } from 'angular-cd-timer';

import { WaiterComponent } from './waiter/waiter.component';
import { ListOrdersComponent } from './waiter/body/list-orders/list-orders.component';
import { ChefComponent } from './chef/chef.component';
import { SidebarWaiterComponent } from './waiter/sidebar-waiter/sidebar-waiter.component';
import { ListProductsComponent } from './waiter/body/list-products/list-products.component';
import { ProductCardComponent } from './waiter/body/list-products/product-card/product-card.component';
import { OrderSummaryComponent } from './waiter/body/list-products/order-summary/order-summary.component';
import { NewOrderComponent } from './waiter/body/list-products/order-summary/new-order/new-order.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './waiter/body/body.component';
import { MenuComponent } from './waiter/body/menu/menu.component';
import { BreakfastComponent } from './waiter/body/breakfast/breakfast.component';
import { NavbarWaiterComponent } from './waiter/navbar-waiter/navbar-waiter.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AdminComponent } from './admin/admin.component';
import { NewProductComponent } from './admin/new-product/new-product.component';
import { ListProductsAdminComponent } from './admin/list-products-admin/list-products-admin.component';
import {provideStorage, getStorage} from '@angular/fire/storage'
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NewUserComponent } from './admin/new-user/new-user.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';


@NgModule({
  declarations: [
    AppComponent,
    WaiterComponent,
    NewOrderComponent,
    ListOrdersComponent,
    ChefComponent,
    SidebarWaiterComponent,
    ListProductsComponent,
    ProductCardComponent,
    OrderSummaryComponent,
    LoginComponent,
    BodyComponent,
    MenuComponent,
    BreakfastComponent,
    NavbarWaiterComponent,
    AdminComponent,
    NewProductComponent,
    ListProductsAdminComponent,
    NewUserComponent,
    ListUsersComponent,

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
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CdTimerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => {
      const firestore = getFirestore();
      enableIndexedDbPersistence(firestore);
      return firestore; }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registrationStrategy'
    }),
    provideStorage(()=>getStorage()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

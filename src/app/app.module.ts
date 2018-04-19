import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { ProductsComponent } from './views/products/products.component';
import { CartComponent } from './views/cart/cart.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { FeedbackComponent } from './views/feedback/feedback.component';
import { MyorderComponent } from './views/myorder/myorder.component';
import { GoodsComponent } from './views/seller/goods/goods.component';
import { OrdersComponent } from './views/seller/orders/orders.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { LoginComponent } from './views/login/login.component';
import {routing} from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    FeedbackComponent,
    MyorderComponent,
    GoodsComponent,
    OrdersComponent,
    HomepageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

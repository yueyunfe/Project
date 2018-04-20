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
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import { GoodsformComponent } from './views/seller/goodsform/goodsform.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {AuthGuardSellerService} from './services/auth-guard-seller.service';



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
    LoginComponent,
    GoodsformComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthGuardService, AuthService, UserService, AuthGuardSellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

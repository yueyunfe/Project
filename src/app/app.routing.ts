// for routing
// for example, if the url goes to /login, then load LoginComponent
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './views/homepage/homepage.component';
import {ProductsComponent} from './views/products/products.component';
import {CartComponent} from './views/cart/cart.component';
import {CheckoutComponent} from './views/checkout/checkout.component';
import {FeedbackComponent} from './views/feedback/feedback.component';
import {MyorderComponent} from './views/myorder/myorder.component';
import {LoginComponent} from './views/login/login.component';
import {GoodsComponent} from './views/seller/goods/goods.component';
import {OrdersComponent} from './views/seller/orders/orders.component';
import {ModuleWithProviders} from '@angular/core';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthGuardSellerService} from './services/auth-guard-seller.service';

const APP_ROUTES: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService]},
  {path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuardService]},
  {path: 'myorder', component: MyorderComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'seller/goods', component: GoodsComponent, canActivate: [AuthGuardService, AuthGuardSellerService]},
  {path: 'seller/orders', component: OrdersComponent, canActivate: [AuthGuardService, AuthGuardSellerService]},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

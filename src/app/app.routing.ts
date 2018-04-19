
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

const APP_ROUTES: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'myorder', component: MyorderComponent},
  { path: 'login', component: LoginComponent},
  { path: 'seller/goods', component: GoodsComponent},
  { path: 'seller/orders', component: OrdersComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

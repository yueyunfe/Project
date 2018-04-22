import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavbarComponent} from './views/navbar/navbar.component';
import {ProductsComponent} from './views/products/products.component';
import {CartComponent} from './views/cart/cart.component';
import {CheckoutComponent} from './views/checkout/checkout.component';
import {FeedbackComponent} from './views/feedback/feedback.component';
import {MyorderComponent} from './views/myorder/myorder.component';
import {GoodsComponent} from './views/seller/goods/goods.component';
import {OrdersComponent} from './views/seller/orders/orders.component';
import {HomepageComponent} from './views/homepage/homepage.component';
import {LoginComponent} from './views/login/login.component';
import {routing} from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {GoodsformComponent} from './views/seller/goodsform/goodsform.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {AuthGuardSellerService} from './services/auth-guard-seller.service';
import {GoodsServiceService} from './services/goods-service.service';
import {CategoryServiceService} from './services/category-service.service';
import {CustomFormsModule} from 'ng2-validation';
import {DataTableModule} from 'angular5-data-table';
import {ProductCardComponent} from './views/product-card/product-card.component';
import {ProductQuantityComponent} from './views/product-quantity/product-quantity.component';
import {CartService} from './services/cart.service';
import {ProductFilterComponent} from './views/products/product-filter/product-filter.component';
import {ItemSummaryComponent} from './views/item-summary/item-summary.component';
import {ShippingComponent} from './views/shipping/shipping.component';
import {OrderService} from './services/order.service';
import {FlickrImageSearchComponent} from './views/flickr-image-search/flickr-image-search.component';
import {FlickrService} from './services/flickr.service';
import {HttpModule} from '@angular/http';
import {PixabayImageSearchComponent} from './views/pixabay-image-search/pixabay-image-search.component';
import {PixabayService} from './services/pixabay.service';


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
    GoodsformComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ProductFilterComponent,
    ItemSummaryComponent,
    ShippingComponent,
    FlickrImageSearchComponent,
    PixabayImageSearchComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    CustomFormsModule,
    AngularFireAuthModule,
    DataTableModule,
    HttpModule
  ],
  providers: [AuthGuardService, AuthService, UserService, AuthGuardSellerService, GoodsServiceService,
    CategoryServiceService, CartService, OrderService, FlickrService, PixabayService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

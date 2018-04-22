import { Component, OnInit } from '@angular/core';
import {ShoppingCart} from '../../model/shopping-cart';
import {Observable} from 'rxjs/Observable';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart$: Observable<ShoppingCart>;

  constructor(private shoppingCartService: CartService) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }


}

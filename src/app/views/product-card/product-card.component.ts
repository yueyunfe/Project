import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCart} from '../../model/shopping-cart';
import {Product} from '../../model/Product';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {
  }

}

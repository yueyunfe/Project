import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCart} from '../../model/shopping-cart';

@Component({
  selector: 'item-summary',
  templateUrl: './item-summary.component.html',
  styleUrls: ['./item-summary.component.css']
})
export class ItemSummaryComponent implements OnInit {
  @Input('cart') cart: ShoppingCart;
  constructor() { }

  ngOnInit() {
  }

}

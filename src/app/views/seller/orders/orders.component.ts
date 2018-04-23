import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {async} from 'rxjs/scheduler/async';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$;

  constructor(private orderService: OrderService) {
    this.orders$ = orderService.getOrders();
  }

  ngOnInit() {
  }

  viewOrder(order) {
    localStorage.setItem('order', order.$key);
  }
}

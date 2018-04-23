import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order$;
  items: any;
  shipping: any;
  dates: any;

  constructor(private orderService: OrderService) {
    const id = localStorage.getItem('order');
    this.order$ = this.orderService.getOrderById(id);

    this.order$.subscribe(response => {
      console.log(response);
      this.dates = response[0];
      this.items = response[1];
      this.shipping = response[2];
    });

  }

  ngOnInit() {
  }

}

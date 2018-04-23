import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

  orders$;

  constructor(private authService: AuthService,
              private orderService: OrderService) {

    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }

  ngOnInit() {
  }

  viewOrder(order) {
    localStorage.setItem('order', order.$key);
  }

}

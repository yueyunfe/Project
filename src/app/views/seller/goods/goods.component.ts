import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {GoodsServiceService} from '../../../services/goods-service.service';
import {Goods} from '../../../model/goods';
import {DataTableResource} from 'angular5-data-table';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  goods: Goods[];
  subscription: Subscription;
  tableResource: DataTableResource<Goods>;
  items: Goods[] = [];
  itemCount: number;

  constructor(private goodsService: GoodsServiceService) {
    this.subscription = this.goodsService.getAll()
      .subscribe(goods => {
        this.goods = goods;
        this.initializeTable(goods);
      });
  }

  private initializeTable(goods: Goods[]) {
    this.tableResource = new DataTableResource(goods);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);
  }

  filter(query: string) {
    const filteredGoods = (query) ?
      this.goods.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.goods;

    this.initializeTable(filteredGoods);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}

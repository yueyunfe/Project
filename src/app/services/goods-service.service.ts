import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class GoodsServiceService {

  constructor(private db: AngularFireDatabase) { }

  create(goods) {
    return this.db.list('/products').push(goods);
  }

  getAll() {
    return this.db.list('/products');
  }

  get(goodsId) {
    return this.db.object('/products/' + goodsId);
  }

  update(goodsId, goods) {
    return this.db.object('/products/' + goodsId).update(goods);
  }

  delete(goodsId) {
    return this.db.object('/products/' + goodsId).remove();
  }

}

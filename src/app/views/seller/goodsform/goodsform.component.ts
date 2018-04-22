import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryServiceService} from '../../../services/category-service.service';
import {GoodsServiceService} from '../../../services/goods-service.service';
import {FormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import 'rxjs/add/operator/take';
import {number} from 'ng2-validation/dist/number';


@Component({
  selector: 'app-goodsform',
  templateUrl: './goodsform.component.html',
  styleUrls: ['./goodsform.component.css']
})
export class GoodsformComponent implements OnInit {

  categories$;
  goods: any = {};
  id;
  isSearched = false;
  url = '';
  titles = '';
  price: number;
  category: string;
  isTitled = false;
  isPriced = false;
  isCategory = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private categoryService: CategoryServiceService,
              private goodsService: GoodsServiceService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.goodsService.get(this.id).take(1).subscribe(p => this.goods = p);
    }
  }

  save(goods) {
    if (this.id) {
      this.goodsService.update(this.id, goods);
    } else {
      this.goodsService.create(goods);
    }
    if (this.url) {
      localStorage.removeItem('pic');
    }
    if (this.titles) {
      localStorage.removeItem('title');
    }
    if (this.price) {
      localStorage.removeItem('price');
    }

    if (this.category) {
      localStorage.removeItem('category');
    }

    this.router.navigate(['/seller/goods']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this goods?')) {
      return;
    }
    this.goodsService.delete(this.id);
    this.router.navigate(['/seller/goods']);
  }

  ngOnInit() {
    this.url = localStorage.getItem('pic');
    this.titles = localStorage.getItem('title');
    this.price = parseFloat(localStorage.getItem('price'));
    this.category = localStorage.getItem('category');

    if (this.url) {
      this.goods.imageUrl = this.url;
    }
    if (this.titles) {
      this.goods.title = this.titles;
    }
    if (this.price) {
      this.goods.price = this.price;
    }

    if (this.category) {
      this.goods.category = this.category;
    }

  }

  onSearch() {
    console.log(this.goods.title);

    if (this.goods.title) {
      console.log(this.titles);
      localStorage.setItem('title', this.goods.title);
    }
    if (this.goods.price) {
      console.log(this.goods.price);
      localStorage.setItem('price', this.goods.price);
    }

    if (this.goods.category) {
      console.log(this.category);
      localStorage.setItem('category', this.goods.category);
    }

  }
}

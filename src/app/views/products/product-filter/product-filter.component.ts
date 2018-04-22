import {Component, Input, OnInit} from '@angular/core';
import {CategoryServiceService} from '../../../services/category-service.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryServiceService) {
    this.categories$ = categoryService.getAll();
  }

  ngOnInit() {
  }

}

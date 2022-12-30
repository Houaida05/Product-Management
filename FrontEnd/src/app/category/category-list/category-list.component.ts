import { Component, OnInit } from '@angular/core';
import {Category} from "../../shared/category";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories? : Category[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProductCategories();
  }
  getAllProductCategories(){
    this.productService.getAllCategories().subscribe(
      data => {
        this.categories = data;
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Category} from "../../shared/category";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categoryList: Category[] |undefined;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private productService : ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();

  }

   getCategories() {
    {
      this.productService.ListResource('/categories').subscribe(data => {
        this.categoryList = data._embedded.categories;
        console.log(data);
      });
    }
  }
}

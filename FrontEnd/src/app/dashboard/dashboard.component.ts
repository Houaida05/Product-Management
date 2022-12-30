import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Category} from "../shared/category";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    tmpArray?= [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsByCategory();
  }
  getProductsByCategory() {
    this.productService.getProductCountperCategory().subscribe(data =>{ this.tmpArray = data; console.log(this.tmpArray);})
}
}

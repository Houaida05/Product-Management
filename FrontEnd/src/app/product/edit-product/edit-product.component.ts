import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
 product: Product= new Product();
 id:any;
  constructor(private route:ActivatedRoute, private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(data=>this.product=data)
  }

  editProduct() {
this.productService.updateData(this.id,this.product).subscribe(data=>this.router.navigate(['/product']));

  }
}

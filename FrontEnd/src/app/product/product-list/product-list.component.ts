import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../shared/product";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products?: Product[];

  constructor(private productService: ProductService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.ListResource('products').subscribe(data => {
      this.products = data._embedded.products;
      console.log(this.products);
    });
  }
  confirmDialog(id:any): void {
    const message = `Are you sure you want to do this?`;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult== true){
        this.deleteProduct(id);}
        else{
          this.getProducts();
        }

    });
  }
  deleteProduct(id: any) {
      return this.productService.DeleteProduct(id).subscribe(data => this.getProducts());
  }
}

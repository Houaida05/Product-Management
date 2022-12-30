import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../shared/product";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../confirm-dialog/confirm-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products?: Product[];
  searchMode: boolean = false;
  hasCategoryId: boolean = false;
  oldKeyword: string | null = null;
  currentCategoryId: number = 1;
  oldCategoryId: number = 1;
  pageNumber: number = 1;
  pageSize: number = 3;
  totalElements: number = 0;
  photoUrl=environment.photoUrl;

  constructor(private productService: ProductService,
              private dialog: MatDialog,
              private route: ActivatedRoute) {
  }



  ngOnInit(): void {

    this.route.paramMap.pipe().subscribe(() => {
      this.getProducts();
    })
  }
  getImages() {
    this.products?.forEach(p => {
      this.productService.getPhotosByProduct(p.id).subscribe(data => {
        p.photos = data;
        console.log(p.photos)
      })
    });
  }

  getProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('word');
    this.hasCategoryId = this.route.snapshot.paramMap.has('id');
    if (this.searchMode) {
      this.handleSearchProducts();
    } else if (this.hasCategoryId) {
      this.handleListProducts();
    } else {
      this.handleAllProducts();
    }
  }

  confirmDialog(id: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult == true) {
        this.deleteProduct(id);
      } else {
        this.getProducts();
      }
    });
  }

  deleteProduct(id: any) {
    return this.productService.deleteProduct(id).subscribe(data => this.getProducts());
  }

  private handleSearchProducts() {
    const theKeyword: string | null = this.route.snapshot.paramMap.get('word');
    if (this.oldKeyword != theKeyword) {
      this.pageNumber = 1;
    }
    this.oldKeyword = theKeyword;
    this.productService.searchProductsPaginate(this.pageNumber - 1, this.pageSize, theKeyword).subscribe(
      this.processResult());
  }

  handleListProducts() {
    // @ts-ignore
    this.currentCategoryId = +this.route.snapshot.paramMap.get("id");

    if (this.oldCategoryId != this.currentCategoryId) {
      this.pageNumber = 1;
    }
    this.oldCategoryId = this.currentCategoryId;
    this.productService.getProductListPaginate(this.pageNumber - 1, this.pageSize, this.oldCategoryId)
      .subscribe(this.processResult());
  }

  processResult() {
    return (data: { _embedded: { products: Product[]; }; page: { number: number; size: number; totalElements: number; }; }) => {
      this.products = data._embedded.products;
      this.getImages();
      this.pageNumber = data.page.number + 1;
      this.pageSize = data.page.size;
      this.totalElements = data.page.totalElements;
    };
  }

  private handleAllProducts() {
    this.productService.getProductList(this.pageNumber - 1, this.pageSize)
      .subscribe(this.processResult());

  }
}

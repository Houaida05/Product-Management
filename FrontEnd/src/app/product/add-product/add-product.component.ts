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
  categoryList: Category[] | undefined;
  files:string  []  =  [];

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
  }
  form = this.formBuilder.group({
    title: '',
    description:'',
    files:'',
    category:'1'
  });

  getCategories(){
    this.productService.getAllCategories().subscribe(
      data => {
        this.categoryList = data;
      })
  }
  public upload(event :any) {
    for  (var i=0; i<event.target.files.length; i++)  {
      this.files.push(event.target.files[i]);
    }
  }

   submitForm() {
     const formData = new FormData();
     this.files.forEach((file) => { formData.append('files', file); });
     formData.append('title', this.form.get('title')?.value!);
     formData.append('description', this.form.get('description')?.value!);
     formData.append('category',this.form.get('category')?.value!);
     this.productService.postData(formData).subscribe(data =>this.router.navigate(['/product']));
 }

}

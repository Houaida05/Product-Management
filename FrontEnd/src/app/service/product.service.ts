import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../shared/product";
import {Category} from "../shared/category";
import {Photo} from "../shared/photo";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.productUrl;
  private categoryUrl = environment.categoryUrl;
  private productCategoryUrl=environment.categoryProdUrl;

  constructor(private http: HttpClient) {
  }
  // listResource(url:string): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/${url}`);
  // }
  deleteProduct(id: any): Observable<any> {
    return this.http.delete<any>(this.baseUrl+"/" + id);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/new`, data)
  }
  updateData(id :any, product:Product):Observable<any>{
    return this.http.put<Product>(this.baseUrl+'/'+id, product);
  }

  searchProductsPaginate(thePage: number
    , thePageSize: number, theKeyWord: string | null): Observable<GetResponseProduct>{
    const searchUrl =`${this.baseUrl}/search/findByDescriptionContainingOrTitleContaining?name=${theKeyWord}&title=${theKeyWord}`
      +`&page=${thePage}&size=${thePageSize}`;
    return this.http.get<GetResponseProduct>(searchUrl);
  }
  getProductListPaginate(thePage:number
    ,thePageSize: number, categoryId: number): Observable<GetResponseProduct>{
    const searchUrl =`${this.baseUrl}/search/findByCategoryId?id=${categoryId}`
      +`&page=${thePage}&size=${thePageSize}`;
    return this.http.get<GetResponseProduct>(searchUrl);
  }
  getProductList(thePage:number
    ,thePageSize: number): Observable<GetResponseProduct>{
    const produrl =`${this.baseUrl}/`+`?page=${thePage}&size=${thePageSize}`;
    return this.http.get<GetResponseProduct>(produrl);
  }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<GetResponseCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.categories)
    );
  }

  getProduct(id: any) :Observable<Product>{
    return this.http.get<Product>(this.baseUrl+'/'+id);
  }
  getPhotosByProduct(id:any):Observable<Photo[]>{
    return this.http.get<GetResponsePhoto>(this.baseUrl+'/'+id+'/photos').pipe(
      map(response => response._embedded.photos)
    );
  }

  getProductCountperCategory():Observable<any>{ {
    return this.http.get<any>(this.productCategoryUrl);
  }

  }
}
interface  GetResponsePhoto{
  _embedded:{
    photos: Photo[];
  }
}
interface GetResponseCategory {
  _embedded : {
    categories : Category[];
  }
}
interface GetResponseProduct {
  _embedded :{
    products : Product[];
  },
  page: {
    //size of this page
    size: number,

    totalElements: number,

    //total pages available
    totalPages: number,

    //current page number
    number: number
  }
}

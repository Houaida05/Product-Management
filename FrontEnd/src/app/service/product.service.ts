import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.url;

  constructor(private http: HttpClient) {
  }
  ListResource(url:string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${url}`);
  }
  DeleteProduct(id: any): Observable<any> {
    return this.http.delete<any>(this.baseUrl+"/" + id);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {AddProductComponent} from "./product/add-product/add-product.component";
import {EditProductComponent} from "./product/edit-product/edit-product.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: 'product', component: ProductListComponent},
  {path: 'new', component: AddProductComponent},
  {path: 'edit/:id', component: EditProductComponent},
  {path:'search/:word', component: ProductListComponent},
  {path:'category/:id', component: ProductListComponent},
  {path:'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

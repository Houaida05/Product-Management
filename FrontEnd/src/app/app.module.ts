import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { ProductListComponent } from './product/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AddProductComponent } from './product/add-product/add-product.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { SearchProductComponent } from './product/search-product/search-product.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from "primeng/carousel";
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConfirmDialogComponent,
    AddProductComponent,
    EditProductComponent,
    SearchProductComponent,
    CategoryListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    NgbModule,
    CarouselModule,
    NgxChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

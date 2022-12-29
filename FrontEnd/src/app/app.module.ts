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

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConfirmDialogComponent,
    AddProductComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ListOfProductsComponent,
    DashboardComponent,
    ShoppingCartComponent,
    ProductEditorComponent,
    ProductCreatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'product-detail/:id', component: ProductDetailComponent}, 
  {path: 'list-of-products', component:ListOfProductsComponent},
  {path: 'shopping-cart', component:ShoppingCartComponent},
  {path: 'product-editor', component:ProductEditorComponent},
  {path: 'product-creator', component:ProductCreatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

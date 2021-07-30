import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authGuard';
import { RestrictedComponent } from './restricted/restricted.component';
const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: 'product-detail/:id', component: ProductDetailComponent}, 
  {path: 'list-of-products', component:ListOfProductsComponent},
  {path: 'shopping-cart', component:ShoppingCartComponent},
  {path: 'product-editor', component:ProductEditorComponent,canActivate: [AuthGuard], data: { roles: 'admin'}},
  {path: 'product-creator', component:ProductCreatorComponent,canActivate: [AuthGuard], data: { roles: 'admin'}},
  {path: 'login', component:LoginComponent},
  {path: 'restricted', component:RestrictedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

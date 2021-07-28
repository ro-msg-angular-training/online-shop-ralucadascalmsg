import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'product-detail/:id', component: ProductDetailComponent}, 
  {path: 'list-of-products', component:ListOfProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

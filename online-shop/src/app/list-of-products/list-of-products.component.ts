
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { LoginComponent } from '../login/login.component';
import { User } from '../user';
import { AuthService } from '../services/authService';
@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {
  products?:Product[];
  user!: User;
  constructor(private productService: ProductService,
              private authService: AuthService ){}

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products =products);
  }

}

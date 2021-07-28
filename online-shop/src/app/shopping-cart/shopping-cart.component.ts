import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products!:Product[];
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProductsToShoppingCart();
  }
  
  getProductsToShoppingCart(): void {
    this.products=this.productService.getProductsToShoppingCart();
  }

  checkout(): void{
   
  } 
}

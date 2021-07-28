import { Component, OnInit } from '@angular/core';
import {Product} from '../product'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }
  goBack(): void {
    this.location.back();
  }
  deleteProduct(): void {
    this.location.back();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.deleteProduct(id)
      .subscribe(product => this.product = product);
  }
  addToCart(): void{
    this.productService.addProductToShoppingCart(this.product);
  }

}

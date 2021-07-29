import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import {Product} from '../product'
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: ['./product-creator.component.scss']
})
export class ProductCreatorComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
  });
  
 // product!: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
  }

  save(): void{
  
    const product: Product={id: 0, 
      name:this.onSubmit().get('name')?.value,
      category:this.onSubmit().get('category')?.value, 
      price:this.onSubmit().get('price')?.value,
      image: this.onSubmit().get('image')?.value, 
      description: this.onSubmit().get('description')?.value};
      this.productService.createProduct(product).subscribe(r => console.log(r), r1 => console.log('error:',r1));
  } 
  cancel():void{
    this.location.back();
  }
  onSubmit():FormGroup{

   return this.productForm;
  }


}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<Product> = []; //why dont we use let here? 
  constructor(public productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.loadAllProductDetails().subscribe({
      next: (result: any) => {
        this.products = result
      },
      error: (error: any) => {

      },
      complete: () => {

      }

    })
  }

}

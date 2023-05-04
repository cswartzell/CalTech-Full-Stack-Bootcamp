import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(public ps: ProductService) { //DI for service

  }

  products: Array<Product> = [];

  loadProductData(): void {
    // this.ps.loadProductData();   //calling service method
    this.ps.loadProductData().subscribe({
      next: (data: any) => {
        this.products = data.products;

      },

      error: (error: any) => {
        console.log(error);

      },

      complete: () => {
        console.log("Data Loaded. Obvservable ending.");

      }
    })

  }
}

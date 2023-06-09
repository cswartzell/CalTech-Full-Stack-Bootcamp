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
    this.loadProducts();
  }

  loadProducts() {
    this.productService.loadAllProductDetails().subscribe({
      next: (result: any) => {
        this.products = result
      },
      error: (error: any) => { },
      complete: () => { }
    })
  }

  deleteProduct(pid: any) {
    // console.log(pid);
    let flag = confirm("Delete Product? No Way To Undo");
    if (flag) {
      this.productService.deleteProductById(pid).subscribe({
        next: (result: any) => console.log(result),
        error: (error: any) => console.log(error),
        complete: () => {
          console.log("Product with PID: " + pid + " Deleted")
          this.loadProducts();
        }
      })
    }
  }

  sortByPrice() {
    this.products.sort((p1, p2) => p1.price - p2.price);
  }

}

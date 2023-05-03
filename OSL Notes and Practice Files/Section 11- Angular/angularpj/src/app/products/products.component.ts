import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/modal/product';
import { FormControl } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = this.productService.getProducts();

  //showProducts = false;
.

  categories = [
    { title: "Select Category", total: 1000 },
    { title: "Home & Kitchen", total: 300 },
    { title: "Furniture", total: 600 },
    { title: "Clothing", total: 100 },
  ]

  productForm = new FormGroup(
    {
      pid: new FormControl(0),
      name: new FormControl(''),
      price: new FormControl(0),
      rating: new FormControl(0.0),
      category: new FormControl(this.categories[0])
    }
  );

  constructor(private productService: ProductsService) {

  }


  addProductToDB() {

  }

  ngOnInit(): void {
  }
}

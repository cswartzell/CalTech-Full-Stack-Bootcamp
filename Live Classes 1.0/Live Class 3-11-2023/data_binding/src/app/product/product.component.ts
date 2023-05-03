import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products:Array<Product>=[]
  product = new Product(100, "tv", 230)

  constructor() {
    let p1 = new Product(100, "tv", 230);
    let p2 = new Product(101, "phone", 2230);
    let p3 = new Product(102, "bed", 2330);
    let p4 = new Product(103, "couch", 23220);
    this.products.push(p1);
    this.products.push(p2);
    this.products.push(p3);
    this.products.push(p4);
  }
}

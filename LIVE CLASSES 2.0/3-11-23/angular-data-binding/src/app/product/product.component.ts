import { Component } from '@angular/core';
import { Prodcut } from '../prodcut';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Array<Prodcut> = [];
  product = new Prodcut(100, "tv", 450);

  constructor() {
    let p1 = new Prodcut(100, "tv", 450);
    let p2 = new Prodcut(101, "phone", 850);
    let p3 = new Prodcut(102, "gpu", 1450);
    //append to array
    this.products.push(p1);
    this.products.push(p2);
    this.products.push(p3);
  }
}

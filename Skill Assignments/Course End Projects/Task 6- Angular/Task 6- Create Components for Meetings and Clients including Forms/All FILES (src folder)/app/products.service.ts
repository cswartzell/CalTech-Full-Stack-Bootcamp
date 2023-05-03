import { Injectable } from '@angular/core';
import { Product } from 'src/modal/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    new Product(101, "FDM Print-Small", 40, 4.4),
    new Product(102, "FDM Print-Large", 80, 4.1),
    new Product(201, "SLA Print-Small", 40, 4.9),
    new Product(202, "SLA Print-Large", 80, 4.7),
    new Product(203, "SLA Print-Huge", 120, 4.9)
  ];

  getProducts(){
    return this.products;
  }
  constructor() { }
}

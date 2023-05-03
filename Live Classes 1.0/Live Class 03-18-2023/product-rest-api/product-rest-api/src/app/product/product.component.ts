import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    products: Array<Product> = [];   //create an array of products. 
    constructor(public ps: ProductService) { //DI for ProductService

    }

    loadProductData(): void {
        //   this.ps.loadProductData();    //calling service method

        this.ps.loadProductData().subscribe({ // Subscribing HERE instead
            next: (data: any) => {

            },
            error: (error: any) => {

            },
            complete: () => {
                console.log("Loaded all data");

            }
        });    //HERE we aree loading the data
    }
}

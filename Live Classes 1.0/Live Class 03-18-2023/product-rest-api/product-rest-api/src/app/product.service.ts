import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //needed to manually import all, no hints
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(public http: HttpClient) {   //DI for HttpClient
    }

    // Convertingall json data into model class (ie, array)
    loadProductData(): Observable<Product[]> {   //manual typcasting to array of products
        console.log("Product Data Loaded");
        return this.http.get<Product[]>("https://dummyjson.com/products");
    }



    // loadProductData() { //manual typcasting to array of products
    //     this.http.get("https://dummyjson.com/products");
    //     console.log("Product Data Loaded");

    //     // this.http.get("https://dummyjson.com/products").subscribe({
    //     next: (data: any) => {
    //         console.log(data);
    //     },
    //         error: (error: any) => {
    //             console.log(error);
    //         },
    //             complete: () => {
    //                 console.log("product data loaded...")
    //             
}

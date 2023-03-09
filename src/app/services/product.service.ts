import { Injectable } from '@angular/core';
import {Product} from "../core/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Product[] =[
    {id:"0", title: 'T-shirt 1', price :18,quantity :5, like:25},
    {id:"1", title: 'T-shirt 2', price :2,quantity :0, like:56},
    {id:"2", title: 'T-shirt 3', price :165,quantity :78, like:69}
    ];
  constructor() {}

  addProduct(p:Product){
    this.product.push(p);
  }




}

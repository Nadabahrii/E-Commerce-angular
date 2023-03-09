import { Component, OnInit } from '@angular/core';
import {Product} from "../core/product";
import {ProductService} from "../services/product.service";
import {CalculService} from "../services/calcul.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  criteria !: string ;
  value !: any;

  product!: Product [];
  categorie : string = "Homme";
  price : number=0;


  getColor(){

    if(this.price <20) {
      return 'red';
    }
    else {
      return 'green'
    }
  }

  getSize(){
    if(this.price < 20 )
    {
      return '20px';
    }
      else{
        return '50px';
      }
    }

  getClass(){
    if(this.price){
      return 'style1';
    }
    else {
      return 'style2'
    }
    }


  buy(p:Product){
    let i = this.product.indexOf(p)
    this.product[i].quantity -=1;

  }

  like(p:Product){
    let i = this.product.indexOf(p)
    this.product[i].like +=1;
  }
  constructor(private serviceProduct: ProductService, private serviceCalcul:CalculService) {
  }

  ngOnInit(): void {
    this.product = this.serviceProduct.product;



  }

  getNumber ():number
  {
    let number=0;
    number = this.serviceCalcul.getNumberOf(this.product,this.criteria,this.value)
    return number;
  }


}

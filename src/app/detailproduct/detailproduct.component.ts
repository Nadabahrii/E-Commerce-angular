import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../core/product";

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
  id!:number;
  produit!:Product;
  constructor(private route:ActivatedRoute,private prod:ProductService) { }


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
     this.produit= this.prod.product[this.id];


  }

}

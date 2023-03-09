import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../core/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  @Input() p !:Product;
  @Output() incrementEvent = new EventEmitter()
  @Output() decrementEvent = new EventEmitter()
  constructor() { }


  ngOnInit(): void {
  }

  sendNotif(){
    this.incrementEvent.emit(this.p)
  }

  sendNotif1(){
    this.decrementEvent.emit(this.p)
  }

}

import { Component, OnInit, Input} from '@angular/core';
import {data} from '../models/data'
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: data;
  clicked:boolean;

  constructor(private dataService: DataServiceService) {
    this.product = {
      id:1,
      name:"",
      price:0,
      url:"",
      description:""
    }
    this.clicked=false;
   }

  ngOnInit(): void {
    console.log(this.product)
  }

 add(product:data){
    this.dataService.addToCart(product);
    console.log("here")
 }

}

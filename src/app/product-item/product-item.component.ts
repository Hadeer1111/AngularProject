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
  value:any=0;

  constructor(private dataService: DataServiceService) {
    this.product = {
      id:1,
      name:"",
      price:0,
      url:"",
      description:"",
      quantity:1
    }
    this.clicked=false;


   }

  ngOnInit(): void {
    console.log(this.product)
  }

 add(product:data, value:string){
    this.dataService.addToCart(product, value);
    console.log(product);
 }

}

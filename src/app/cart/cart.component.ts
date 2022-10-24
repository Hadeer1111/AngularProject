import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { data } from '../models/data';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartArray:data[]=[];

  cart:data = {
    id:1,
    name:"",
    price:0,
    url:"",
    description:"",
    quantity:1
  };

  total:number=0;

  constructor(private dataService: DataServiceService) {


  }

  ngOnInit(): void {
    this.cartArray = this.dataService.getCart();
    for(let i=0; i< this.cartArray.length; i++){
      this.total += this.cartArray[i].price * this.cartArray[i].quantity;
    }
    this.dataService.sendPrice(this.total);
    //this.cartArray.push(this.cart);
  }





}

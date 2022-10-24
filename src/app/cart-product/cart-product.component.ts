import { Component, OnInit, Input } from '@angular/core';
import { data } from '../models/data';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {


  @Input() cart:data = {
    id:1,
    name:"",
    price:0,
    url:"",
    description:"",
    quantity:1
  };


  cartArray:data[]=[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    //this.cart = this.dataService.getCart();
    //this.cartArray.push(this.cart);

  }

}

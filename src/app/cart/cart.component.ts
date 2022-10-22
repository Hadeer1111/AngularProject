import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { data } from '../models/data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:data[];


  constructor(private dataService: DataServiceService) {
      this.cart=[];

  }

  ngOnInit(): void {
     this.dataService.getCart().subscribe(
      data =>{
        this.cart=data;
      console.log(this.cart);
      }
     );
  }





}

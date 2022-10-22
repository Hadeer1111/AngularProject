import { Component, OnInit } from '@angular/core';
import { data} from '../models/data'
import {ActivatedRoute} from '@angular/router';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {

  products:any = [];
  product: data;

  constructor(private route: ActivatedRoute, public dataService: DataServiceService)  {
    this.dataService.getData().subscribe(data =>{this.products = data});
    this.product ={
      id:1,
      name: "",
      price:0,
      url: "",
      description:""
    }
  }

  ngOnInit(): void {
    let id: number = parseInt(this.route.snapshot.params['id']);
    console.log(id);
    console.log(this.products);
    // let id: number = parseInt(this.route.snapshot.params['id']);
    // for(let i=0; i< this.products.length; i++){
    //   if(this.products[i].id === id){
    //     this.product = this.products[i];
    //   }
    // }
  }



}

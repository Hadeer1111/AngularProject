import { Component, OnInit } from '@angular/core';
import { data} from '../models/data'
import {ActivatedRoute} from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {

  product: data = {
    id:1,
    name:"",
    url:"",
    price:0,
    description:"",
    quantity:1
  };
  routerSubscription: Subscription;
  productsSubscription?: Subscription;

  constructor(private route: ActivatedRoute, public dataService: DataServiceService)  {
   // let id: number = parseInt(this.route.snapshot.params['id']);
   // this.product = this.dataService.getProductbyId(id);
   this.routerSubscription = this.route.params.subscribe((params) => {
    const id = +params['id'];

    this.productsSubscription = this.dataService.products$.subscribe((products) => {
      if (products.length === 0) {
        this.dataService.fetchProducts();
        return;
      }

      const product = products.find((product) => product.id === id);

      if (product) {
        this.product = product;
      }
    });
  });
  }

  ngOnInit(): void {
  //  let id: number = parseInt(this.route.snapshot.params['id']);
   // this.product = this.dataService.getProductbyId(id);
   // console.log(id);
  }

  add(product:data, value:string){
    this.dataService.addToCart(product, value);
    console.log(product);
 }


}

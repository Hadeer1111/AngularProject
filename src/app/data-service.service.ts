import { Injectable } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { data } from './models/data'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  cart:data[] = [];
  products:data[];
  product:data;
  private Products: data[] = [];
  products$ = new BehaviorSubject<data[]>(this.Products);
  quantity:number[]=[];
  success:object ={
    name:"",
    total:0
  };

  price:number=0;

  constructor(private http: HttpClient) {
    this.products =[]
    this.product={
      id:1,
      name:"",
      price:0,
      url:"",
      description:"",
      quantity:1
    }
   }

   fetchProducts() {
    const subscription = this.http.get<data[]>('../assets/data.json').subscribe((products) => {
      this.Products = products;

      this.products$.next(this.Products);
      subscription.unsubscribe();
    });
  }


   getData(): Observable<data []>{
     return this.http.get<data []>('../assets/data.json')
   }

   addToCart1(payload:data) {
    return this.http.post(`http://localhost:4200/cart`, payload);
  }

   getProductbyId(id:number):data{
    this.getData().subscribe(data =>{this.products = data});
    for(let i=0; i< this.products.length; i++){
        if(this.products[i].id === id){
           this.product = this.products[i];
           break;
         }
       }
       return this.product
   }

  addToCart(product:data, value:string):void {
      product.quantity = Number(value);
      this.cart.push(product);
      console.log(this.cart);
      console.log(value);

  }

  getQuantity():number[]{
   return this.quantity;
  }


  getCart(): data[]{
    return this.cart;
  }

  sendNamePrice(name:string, price:number){
       console.log(name);
       let object ={
        name:name,
        price:price
       }
       this.success = object;
  }

  getNamePrice(): object{
    return this.success;
  }

  sendPrice(price:number){
    this.price=price;
  }

  getPrice():number{
    return this.price;
  }

}

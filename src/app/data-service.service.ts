import { Injectable } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { data } from './models/data'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  cart:data[];

  constructor(private http: HttpClient) {
    this.cart=[]
   }

   getData(): Observable<data []>{
     return this.http.get<data []>('../assets/data.json')
   }

  addToCart(product:data):void {
      this.cart.push(product);
      console.log(this.cart);
  }

  getCart():Observable<data []>{
    return of(this.cart);
  }

}

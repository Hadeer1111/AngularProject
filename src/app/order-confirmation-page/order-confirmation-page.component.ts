import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-order-confirmation-page',
  templateUrl: './order-confirmation-page.component.html',
  styleUrls: ['./order-confirmation-page.component.css']
})
export class OrderConfirmationPageComponent implements OnInit {

  success:any={
    name:"",
    total:0
  }

  price:number=0;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.success = this.dataService.getNamePrice();
    this.price = this.dataService.getPrice();
  }

}

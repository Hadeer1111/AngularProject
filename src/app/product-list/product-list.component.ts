import { Component, OnInit } from '@angular/core';
import { data } from '../models/data'
import {DataServiceService} from '../data-service.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:data[];

  constructor(private dataService: DataServiceService) {
    this.products =[];
  }

  ngOnInit(): void {

    this.dataService.getData().subscribe(data =>{this.products = data});
  }

}


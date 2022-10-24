import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name:string;
  address:string;
  credit:number;

  constructor(private dataservice: DataServiceService) {
    this.name="";
    this.address="";
    this.credit=0;
  }

  ngOnInit(): void {
  }

  submitForm(){
      console.log(this.name);
      this.dataservice.sendNamePrice(this.name,0);
  }

  send(){
    console.log(this.name);
      this.dataservice.sendNamePrice(this.name,0);
  }

}

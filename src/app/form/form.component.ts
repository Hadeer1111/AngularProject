import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name:string;
  address:string;
  credit:number;

  constructor() {
    this.name="";
    this.address="";
    this.credit=0;
  }

  ngOnInit(): void {
  }

  submitForm(){

  }

}

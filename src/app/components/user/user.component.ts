import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];

  constructor() { }

  ngOnInit() {
    this.name = 'Steve Banon';
    this.age = 30;
    this.address = {
      street:'KG7',
      city:'Kigali',
      state:'Kigali'
    }
    this.hobbies = ['write code', 'dance', 'listen to music'];
  }
}

interface Address{
  street:string,
  city:string,
  state:string
}

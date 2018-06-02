import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-my-exp',
  templateUrl: './my-exp.component.html',
  styleUrls: ['./my-exp.component.css']
})
export class MyExpComponent implements OnInit {

  primaryData =[{id:"0",name:"John",debt:150000,paid:0},
                {id:"1",name:"Snow",debt:800000,paid:0},
                {id:"2",name:"Drogo",debt:800000,paid:0}
                ];

  constructor() { }

  ngOnInit() {
  }

  pay(id,paidAmount){
   alert(id+" : "+paidAmount);
   for(let i=0;i<this.primaryData.length;i++){
     if(this.primaryData[i].id===id){
       this.primaryData[i].paid+=parseInt(paidAmount);
       this.primaryData[i].debt-=parseInt(paidAmount);
     }
   }
  }

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

}

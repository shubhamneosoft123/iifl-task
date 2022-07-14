import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  mydata: any;

  constructor() { }

  ngOnInit(): void {

   
  }
//Toggle Accordian
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  name:any;
  
}

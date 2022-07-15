import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  panelName=[
    {
      pname: ["Diamond", 'sd', 'jadb',"asdad","dsdasds","wqwdq"],
      panelData:[
        {
              cname:"Bata India",
              cmp:171.25,
              chg:"	+ 2.35 (1.39%)",
              mcap:	208.62,
              pe:	17.46
        }
      ]
    } ,
    {
      pname: ["Diamond", 'sd', 'jadb',"asdad","dsdasds","wqwdq"],
      panelData:[
        {
              cname:"Bata India",
              cmp:171.25,
              chg:"	+ 2.35 (1.39%)",
              mcap:	208.62,
              pe:	17.46
        }
      ]
    } ,
    {
      pname: ["Diamond", 'sd', 'jadb',"asdad","dsdasds","wqwdq"],
      panelData:[
        {
              cname:"Bata India",
              cmp:171.25,
              chg:"	+ 2.35 (1.39%)",
              mcap:	208.62,
              pe:	17.46
        }
      ]
    } ,
   
  ]

 
  status: boolean;
  clickEvent(data:any){
  
      console.log(data, this.panelName[data]);
      this.panelName[data]

      if(data == data){
        this.status = !this.status;
      }
      
             
    }
  
  
}

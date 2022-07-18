import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.panelName.forEach((element, index) => {
      this.toggle[index] = false
    });
  }

  status: boolean;

  toggle = [];
  panelName=[
    {
      pname: ["Diamond, Gems and Jewelle", 226136, 16,0.44,62.98, 2005500],
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
      pname: ["IT - Hardware", 226136, 16,0.44,62.98, 2005500],
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
      pname: ["Leather", 226136, 16,0.44,62.98, 2005500],
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
      pname: ["Leather", 226136, 16,0.44,62.98, 2005500],
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

 
  toggleIcon(i) {
    this.toggle.forEach((element, index) => {
      if (element == true && index == i) {
        this.toggle[i] = false
      } else if (element == false && index == i) {

        this.toggle[i] = true
      } else if (element == true && index !== i) {
        this.toggle[index] = false
      }
    });
    console.log(this.toggle)

  }
  
  
}

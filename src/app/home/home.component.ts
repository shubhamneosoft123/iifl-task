import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tableData=[
    {
      cname:"Bata India",
      cmp:171.25,
      chg:"	+ 2.35 (1.39%)",
      mcap:	208.62,
      pe:	17.46
    },
    {
      cname:"Bata India",
      cmp:171.25,
      chg:"	+ 2.35 (1.39%)",
      mcap:	208.62,
      pe:	17.46
    },
    {
      cname:"Bata India",
      cmp:171.25,
      chg:"	+ 2.35 (1.39%)",
      mcap:	208.62,
      pe:	17.46
    },
    {
      cname:"Bata India",
      cmp:171.25,
      chg:"	+ 2.35 (1.39%)",
      mcap:	208.62,
      pe:	17.46
    },
    {
      cname:"Bata India",
      cmp:171.25,
      chg:"	+ 2.35 (1.39%)",
      mcap:	208.62,
      pe:	17.46
    },
    {
      cname:"Bata India",
      cmp:171.25,
      chg:"	+ 2.35 (1.39%)",
      mcap:	208.62,
      pe:	17.46
    },
    {
      cname:"Bata India",
      cmp:171.25,
      chg:"	+ 2.35 (1.39%)",
      mcap:	208.62,
      pe:	17.46
    },
  ]
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }




}

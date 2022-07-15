import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dropDownSelector = "Equity";

  ngDropDwonClick(value) {
    this.dropDownSelector = value;
  }
  fundsName=["Equity","Debt","Balanced","ELSS","ETF"]

}

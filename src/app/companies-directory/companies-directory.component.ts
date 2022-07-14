import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-directory',
  templateUrl: './companies-directory.component.html',
  styleUrls: ['./companies-directory.component.scss']
})
export class CompaniesDirectoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  active = 1;
 

  companyList=[
    
    {
      label: "A",
      companyName:[
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        "Apple",
        
      ]
    },

    {
      label: "B",
      companyName:[
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
        "Bata",
      ]
    },

     {
      label: "C",
      companyName:[
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
        "Colgate",
      ]
    },

    {
      label: "D",
      companyName:[
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
        "Ddddddd",
       
      ]
    },

    {
      label: "E",
      companyName:[
        "EEEEE",
        "EEEEE",
        "EEEEE",
        "EEEEE",
        "EEEEE",
        "EEEEE",
        "EEEEE",
        "EEEEE",
        "EEEEE",
        "EEEEE",
        "EEEEE",
        "EEEEE",
        "EEEEE",
       
      ]
    },

    {
      label: "F",
      companyName:[
        "FFFFFF",
        "FFFFFF",
        "FFFFFF",
        "FFFFFF",
        "FFFFFF",
        "FFFFFF",
        "FFFFFF",
        "FFFFFF",
        "FFFFFF",
       
       
      ]
    },

    {
      label: "G",
      companyName:[
        "GGGGGGG",
        "GGGGGGG",
        "GGGGGGG",
        "GGGGGGG",
        "GGGGGGG",
        "GGGGGGG",
        "GGGGGGG",
        "GGGGGGG",
       
       
       
      ]
    },
    {
      label: "H",
      companyName:[
        "HHHHHH",
        "HHHHHH",
        "HHHHHH",
        "HHHHHH",
        "HHHHHH",
        "HHHHHH",
        "HHHHHH",
        "HHHHHH",
        "HHHHHH",
        "HHHHHH",
        "HHHHHH",
      ]
    },
    {
      label: "I",
      companyName:[
        "IIIIII",
        "IIIIII",
        "IIIIII",
        "IIIIII",
        "IIIIII",
        "IIIIII",
        "IIIIII",
        "IIIIII",
      ]
    },
    {
      label: "J",
      companyName:[
        "JJJJJJJ",
        "JJJJJJJ",
        "JJJJJJJ",
        "JJJJJJJ",
        "JJJJJJJ",
        "JJJJJJJ",
        "JJJJJJJ",
        "JJJJJJJ",
      ]
    },
    {
      label: "K",
      companyName:[
        "KKKKKK",
        "KKKKKK",
        "KKKKKK",
        "KKKKKK",
        "KKKKKK",
        "KKKKKK",
        "KKKKKK",
        "KKKKKK",
        
      ]
    },
    {
      label: "L",
      companyName:[
        "LLLLLLL",
        "LLLLLLL",
        "LLLLLLL",
        "LLLLLLL",
        "LLLLLLL",
        "LLLLLLL",
        "LLLLLLL",
        "LLLLLLL",
        "LLLLLLL",
        "LLLLLLL",
       
      ]
    },
    {
      label: "M",
      companyName:[
        "MMMMMM",
        "MMMMMM",
        "MMMMMM",
        "MMMMMM",
        "MMMMMM",
        "MMMMMM",
        "MMMMMM",
        "MMMMMM",
      ]
    },
    {
      label: "N",
      companyName:[
        "NNNNNNN",
        "NNNNNNN",
        "NNNNNNN",
        "NNNNNNN",
        "NNNNNNN",
        "NNNNNNN",
        "NNNNNNN",
        "NNNNNNN",
        "NNNNNNN",
        "NNNNNNN",
       
      ]
    },
    {
      label: "O",
      companyName:[
        "OOOOOOO",
        "OOOOOOO",
        "OOOOOOO",
        "OOOOOOO",
        "OOOOOOO",
        "OOOOOOO",
        "OOOOOOO",
       
      ]
    },
    {
      label: "P",
      companyName:[
        "PPPPPPP",
        "PPPPPPP",
        "PPPPPPP",
        "PPPPPPP",
        "PPPPPPP",
        "PPPPPPP",
        "PPPPPPP",
        
       
      ]
    },
    {
      label: "Q",
      companyName:[
        "QQQQQQQQ",
        "QQQQQQQQ",
        "QQQQQQQQ",
        "QQQQQQQQ",
        "QQQQQQQQ",
        "QQQQQQQQ",
        "QQQQQQQQ",
        "QQQQQQQQ",
        "QQQQQQQQ",
        "QQQQQQQQ",
        
        
       
      ]
    },
    {
      label: "R",
      companyName:[
        "RRRRRRR",
        "RRRRRRR",
        "RRRRRRR",
        "RRRRRRR",
        "RRRRRRR",
        "RRRRRRR",
        "RRRRRRR",
        "RRRRRRR",
        "RRRRRRR",
       
      ]
    },
    {
      label: "S",
      companyName:[
        "SSSSSS",
        "SSSSSS",
        "SSSSSS",
        "SSSSSS",
        "SSSSSS",
        "SSSSSS",
        "SSSSSS",
        "SSSSSS",
        "SSSSSS",
        "SSSSSS",
       
       
      ]
    },
    {
      label: "T",
      companyName:[
        "TTTTTTTTT",
        "TTTTTTTTT",
        "TTTTTTTTT",
        "TTTTTTTTT",
        "TTTTTTTTT",
        "TTTTTTTTT",
        "TTTTTTTTT",
        "TTTTTTTTT",
      
      ]
    },
    {
      label: "U",
      companyName:[
        "UUUUUUUU",
        "UUUUUUUU",
        "UUUUUUUU",
        "UUUUUUUU",
        "UUUUUUUU",
        "UUUUUUUU",
        "UUUUUUUU",
        "UUUUUUUU",
       
      ]
    },
    {
      label: "V",
      companyName:[
        "VVVVVVVV",
        "VVVVVVVV",
        "VVVVVVVV",
        "VVVVVVVV",
        "VVVVVVVV",
        "VVVVVVVV",
        "VVVVVVVV",
        "VVVVVVVV",
        "VVVVVVVV",
       
      ]
    },
    {
      label: "W",
      companyName:[
        "WWWWWWW",
        "WWWWWWW",
        "WWWWWWW",
        "WWWWWWW",
        "WWWWWWW",
        "WWWWWWW",
        "WWWWWWW",
        "WWWWWWW",
        "WWWWWWW",
        
      ]
    },
    {
      label: "X",
      companyName:[
        "XXXXXXX",
        "XXXXXXX",
        "XXXXXXX",
        "XXXXXXX",
        "XXXXXXX",
        "XXXXXXX",
        "XXXXXXX",
       
      ]
    },
    {
      label: "Y",
      companyName:[
        "YYYYYYY",
        "YYYYYYY",
        "YYYYYYY",
        "YYYYYYY",
        "YYYYYYY",
      
      ]
    },
    {
      label: "Z",
      companyName:[
        "ZZZZZZZZ",
        "ZZZZZZZZ",
        "ZZZZZZZZ",
        "ZZZZZZZZ",
        "ZZZZZZZZ",
      ]
    },
    {
      label: "All",
      companyName:[
        "AAAAAA",
        "BBBBB",
        "CCCBC",
        "DDDDDD",
        "EEEEE",
      ]
    },
    {
      label: "1-9",
      companyName:[
        "AAAAAA",
        "BBBBB",
        "CCCBC",
        "DDDDDD",
        "EEEEE",
      ]
    },
  ]
}

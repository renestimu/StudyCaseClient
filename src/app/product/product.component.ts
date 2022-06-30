import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Product List"
  filterText = ""
  products: Product[]=[
    {id:1,name:"Product 1",description:"test2",createDate:Date.now(),price:1000,stock:10},
    {id:2,name:"Product 2",description:"test2",createDate:Date.now(),price:200,stock:20},
  ];

  ngOnInit(): void {
  }

}

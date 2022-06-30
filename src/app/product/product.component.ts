import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router, private alertifyService: AlertifyService, private productService: ProductService, private activatedRoute: ActivatedRoute) { }
  title = "Product List"
  filterText = ""
  products: Product[];
  dataLoaded = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {

      if (param["addRandom"]) {

        this.dataLoaded=false;
       this.setProductRandom();


      } else
        this.getProduct(param["name"])

    })
  }
  getProduct(name: string) {
    this.productService.getProducts(name)
      .subscribe(data => {
        this.dataLoaded = true;
        this.products = data;
      })
  }
  setProductRandom(){
    this.productService.addProductRandom()
    .subscribe(data => {
      this.dataLoaded = true;
      this.alertifyService.success("The data has been successfully added.")
      this.router.navigateByUrl('/products')
    })
  }


}

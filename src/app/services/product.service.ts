import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "https://localhost:7149/api/products"
  getProducts(name: string): Observable<Product[]> {

    let newPath = this.path
    if (name) {
      newPath += "/getbyname?name=" + name
    }else{
        newPath+="/getAll"
    }

    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  addProductRandom(){
    let newPath = this.path+"/addrandom"

    return this.http.post<any>(newPath,{}).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  handleError(handleError: HttpErrorResponse) {
    let errorMessage = '';
    if (handleError.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu " + handleError.error.message
    } else {
      errorMessage = "Sistemsel bir hata oluştu ";
    }
    return throwError(errorMessage);
  }
}

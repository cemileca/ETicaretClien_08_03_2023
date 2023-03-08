import { Injectable } from '@angular/core';
import { CreatProduct } from 'src/app/contracts/products/creat-product';
import { HttpClientMyService } from '../http-client-my.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClientServiceMy: HttpClientMyService) { }

  ProductCreate(newProduct: CreatProduct,successCallBack?:()=>void, errorCallBack?:(errorMessage:string)=>void) {
    this.httpClientServiceMy.post({
      controller: "product"
    }, newProduct).subscribe();
  }
}

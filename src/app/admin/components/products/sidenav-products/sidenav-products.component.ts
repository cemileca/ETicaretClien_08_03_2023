import { Component, EventEmitter, Output } from '@angular/core';
import { CreatProduct } from 'src/app/contracts/products/creat-product';
import { AlertifymainService, AlertifyMessageType, AlertifyPositions } from 'src/app/services/alertifymain.service';
import { ProductsService } from 'src/app/services/models/products.service';

@Component({
  selector: 'app-sidenav-products',
  templateUrl: './sidenav-products.component.html',
  styleUrls: ['./sidenav-products.component.scss']
})
export class SidenavProductsComponent {
constructor(private productServicesMy: ProductsService,
  private alertifyMy:AlertifymainService){}

@Output() createdProduct: EventEmitter<CreatProduct>= new EventEmitter();

CreatingProduct(name: HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement){

const newProduct:CreatProduct=new CreatProduct();
newProduct.Name=name.value;
newProduct.Stock=parseFloat(stock.value);
newProduct.Price=parseFloat(price.value);

this.productServicesMy.ProductCreate(newProduct,()=>{

this.alertifyMy.ShowMessage("Ürün Veritabanına başarı ile Eklendi",{
  messageType:AlertifyMessageType.Success,
  position:AlertifyPositions.TopCenter
})
});
}
}

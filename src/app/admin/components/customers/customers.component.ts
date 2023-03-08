import { Component } from '@angular/core';
import { HttpClientMyService, HttpRequestParameters } from 'src/app/services/http-client-my.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  constructor(private httpServiscikk: HttpClientMyService) { }


  getAllProducts() {
    this.httpServiscikk.get({
      controller: "product"
    }).subscribe({
      next: (result) => alert(result)
    });
  }

  urunEkle(){
   
    this.httpServiscikk.post({
      controller:"product",
      
    },{ 
      name:"Products1", stock:30,price:34}).subscribe();

  }
}

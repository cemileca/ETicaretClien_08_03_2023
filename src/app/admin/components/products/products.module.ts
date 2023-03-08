import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { PaginatorComponent } from './paginator/paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SidenavProductsComponent } from './sidenav-products/sidenav-products.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    ProductsComponent,
    PaginatorComponent,
    SidenavProductsComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatInputModule,
    RouterModule.forChild([
      {path:"",component:ProductsComponent}
      
    ])
  ]
})
export class ProductsModule { }

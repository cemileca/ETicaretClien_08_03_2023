import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsModule } from './dashboards/dashboards.module';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ListComponent } from './list/list.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    DashboardsModule,
    CustomersModule,
    ProductsModule,
    OrdersModule,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ],
  exports:[SidenavComponent,ListComponent]
})
export class ComponentsModule { }

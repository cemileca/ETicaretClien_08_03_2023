import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardsComponent } from './admin/components/dashboards/dashboards.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/home/home.component';

const routes: Routes = [
  {path:"admin", component:LayoutComponent, children:[
    {path:"",component:DashboardsComponent},
    {path:"product",loadChildren:()=>import("./admin/components/products/products.module").then(module=>module.ProductsModule)},
    {path:"customer",loadChildren:()=>import("./admin/components/customers/customers.module").then(module=>module.CustomersModule)},
    {path:"order",loadChildren:()=>import("./admin/components/orders/orders.module").then(module=>module.OrdersModule)}
  ]},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ComponentsModule } from '../admin/components/components.module';
import { ComponentsAdminModule } from './components-admin/components-admin.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ComponentsModule
  ],
  exports:[ComponentsAdminModule]
})
export class UiModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomnerDashboardComponent } from './components/customner-dashboard/customner-dashboard.component';


@NgModule({
  declarations: [
    CustomnerDashboardComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }

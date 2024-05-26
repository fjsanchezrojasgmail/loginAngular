import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomnerDashboardComponent } from './components/customner-dashboard/customner-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: CustomnerDashboardComponent },
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonDashboardComponent } from './Pages/common-dashboard/common-dashboard.component';
import { AuthGuard } from '../core/guard/auth.guard';

const routes: Routes = [
  {
    path: "main",
    component: CommonDashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErpDashboardRoutingModule { }

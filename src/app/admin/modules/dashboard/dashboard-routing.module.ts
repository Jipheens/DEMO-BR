import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { RoutePrivilegeGuard } from "src/app/erp-hr/data/_AccessControlAuthGuard.service";

const routes: Routes = [
  // { path: "", component: DashboardComponent },
  {
    path: '', component: DashboardComponent,
    canActivate: [RoutePrivilegeGuard],
    data: { requiredPrivilege: ['Dashboard'] }
  },];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

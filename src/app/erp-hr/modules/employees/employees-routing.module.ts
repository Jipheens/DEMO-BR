import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { ManageEmployeeDocumentsComponent } from './manage-employee-documents/manage-employee-documents.component';
import { AllEmployeeDocumentsComponent } from './all-employee-documents/all-employee-documents.component';
import { RoutePrivilegeGuard } from '../../data/_AccessControlAuthGuard.service';

const routes: Routes = [
  {
    path: "all-employees",
    component: AllEmployeesComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege: ["Dashboard"],
    },
  },

  {
    path: "manage-employees",
    component: ManageEmployeesComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege: ["Dashboard"],
    },
  },

  {
    path: "all-employee-documents",
    component: AllEmployeeDocumentsComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege: ["Dashboard"],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }

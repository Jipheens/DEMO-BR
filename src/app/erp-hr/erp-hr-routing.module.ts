import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./modules/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: "configurations",
    loadChildren: () =>
      import("./modules/configurations/configurations.module").then(
        (m) => m.ConfigurationsModule
      ),
  },

  {
    path: "employees",
    loadChildren: () =>
      import("./modules/employees/employees.module").then(
        (m) => m.EmployeesModule
      ),
  },

  {
    path: "employee-activities",
    loadChildren: () =>
      import("./modules/employee-activities/employee-activities.module").then(
        (m) => m.EmployeeActivitiesModule
      ),
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErpHrRoutingModule { }

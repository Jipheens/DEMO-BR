import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "./authentication/page404/page404.component";
import { AuthGuard } from "./core/guard/auth.guard";
import { Role } from "./core/models/role";
import { AuthLayoutComponent } from "./layout/app-layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layout/app-layout/main-layout/main-layout.component";
import { MainDashboardComponent } from "./layout/app-layout/main-dashboard/main-dashboard.component";
const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },
      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
      },


      {
        path: "erp-hr",
        loadChildren: () =>
          import("./erp-hr/erp-hr.module").then(
            (m) => m.ErpHrModule
          ),
      },

    ],
  },



  {
    path: "account",
    component: MainDashboardComponent,
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule),
  },

  {
    path: "erp-dashboard",
    component: MainDashboardComponent,
    loadChildren: () =>
      import("./erp-dashboard/erp-dashboard.module").then(
        (m) => m.ErpDashboardModule
      ),
  },

  {
    path: "authentication",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },


  //***************************************************************************************************** */
  // {
  //   path: "administration",
  //  // component: AuthLayoutComponent,
  //   loadChildren: () =>
  //     import("./administration/administration.module").then(
  //       (m) => m.AdministrationModule
  //     ),
  //   // canLoad: [ModuleGuard],
  //   // data: {roles: [Role.Administration_privilege], preload:true },
  // },
  // {
  //   path: "portal",
  //   component: AuthLayoutComponent,
  //   loadChildren: () =>
  //     import("./employee/employee.module").then((m) => m.EmployeeModule),
  //   // canLoad: [ModuleGuard],
  //   // data: {roles: [Role.User], preload:true },
  // },
  // {
  //   path: "applicant",
  //   component: AuthLayoutComponent,
  //   loadChildren: () =>
  //     import("./applicant/applicant.module").then((m) => m.ApplicantModule),
  // },
//***************************************************************************************************** */

  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

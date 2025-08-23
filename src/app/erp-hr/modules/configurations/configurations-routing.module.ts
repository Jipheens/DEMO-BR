import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrganizationComponent } from "./organization/organization.component";
import { AllBranchesComponent } from "./branches/all-branches/all-branches.component";
import { AllDepartmentsComponent } from "./departments/all-departments/all-departments.component";
import { AllHolidaysComponent } from "./holidays/all-holidays/all-holidays.component";
import { AllJobGradesComponent } from "./job-grades/all-job-grades/all-job-grades.component";
import { AllJobRolesComponent } from "./job-roles/all-job-roles/all-job-roles.component";
import { AllKpiAnalysisComponent } from "./kpi-analysis/all-kpi-analysis/all-kpi-analysis.component";
import { AllKpiSchedulesComponent } from "./kpi-schedule/all-kpi-schedules/all-kpi-schedules.component";
import { AllLeaveTypesComponent } from "./leave-types/all-leave-types/all-leave-types.component";
import { OrganizationStructureComponent } from "./organization-structure/organization-structure.component";
import { AllLeaveBandsComponent } from "./annual-leave-bands/all-leave-bands/all-leave-bands.component";
import { RoutePrivilegeGuard } from "../../data/_AccessControlAuthGuard.service";

const routes: Routes = [
  {
    path: "organization-details",
    component: OrganizationComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege: ["View Configuration",
        "Maintain Configuration",
        "Approve Configuration"],
    },
  },
  {
    path: "organization-structure",
    component: OrganizationStructureComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege: ["View Configuration",
        "Maintain Configuration",
        "Approve Configuration"],
    },
  },
  {
    path: "branches",
    component: AllBranchesComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege:[
        "View Configuration",
        "Maintain Configuration",
        "Approve Configuration",
      ],
    },
  },

  {
    path: "departments",
    component: AllDepartmentsComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege: [
        "View Configuration",
        "Maintain Configuration",
        "Approve Configuration",
      ],
    },
  },

  {
    path: "leave-bands",
    component: AllLeaveBandsComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege: [
        "View Configuration",
        "Maintain Configuration",
        "Approve Configuration",
      ],
    },
  },

  {
    path: "holidays",
    component: AllHolidaysComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege: [
        "View Configuration",
        "Maintain Configuration",
        "Approve Configuration",
      ],
    },
  },

  {
    path: "job-grades",
    component: AllJobGradesComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege: [
        "View Configuration",
        "Maintain Configuration",
        "Approve Configuration",
      ],
    },
  },
  {
    path: "job-roles",
    component: AllJobRolesComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege: [
        "View Configuration",
        "Maintain Configuration",
        "Approve Configuration",
      ],
    },
  },

  {
    path: "kpi-analysis",
    component: AllKpiAnalysisComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege: [
        "View Configuration",
        "Maintain Configuration",
        "Approve Configuration",
      ],
    },
  },


  {
    path: "kpi-schedule",
    component: AllKpiSchedulesComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege: [
        "View Configuration",
        "Maintain Configuration",
        "Approve Configuration",
      ],
    },
  },

  {
    path: "leave-types",
    component: AllLeaveTypesComponent,
    canActivate: [RoutePrivilegeGuard],
    data: {
      clientName: "HumanResourceModule",
      requiredPrivilege: [
        "View Configuration",
        "Maintain Configuration",
        "Approve Configuration",
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationsRoutingModule {}

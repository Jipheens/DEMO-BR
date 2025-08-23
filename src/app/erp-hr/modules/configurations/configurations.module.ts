import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { OrganizationComponent } from './organization/organization.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllBranchesComponent } from './branches/all-branches/all-branches.component';
import { ManageBranchesComponent } from './branches/dialogs/manage-branches/manage-branches.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ManageDepartmentsComponent } from './departments/dialogs/manage-departments/manage-departments.component';
import { AllDepartmentsComponent } from './departments/all-departments/all-departments.component';
import { AllJobGradesComponent } from './job-grades/all-job-grades/all-job-grades.component';
import { ManageJobGradesComponent } from './job-grades/dialogs/manage-job-grades/manage-job-grades.component';
import { ManageJobRolesComponent } from './job-roles/dialogs/manage-job-roles/manage-job-roles.component';
import { AllJobRolesComponent } from './job-roles/all-job-roles/all-job-roles.component';
import { AllHolidaysComponent } from './holidays/all-holidays/all-holidays.component';
import { AllLeaveTypesComponent } from './leave-types/all-leave-types/all-leave-types.component';
import { ManageLeaveTypesComponent } from './leave-types/dialogs/manage-leave-types/manage-leave-types.component';
import { ManageKpiScheduleComponent } from './kpi-schedule/dialogs/manage-kpi-schedule/manage-kpi-schedule.component';
import { AllKpiAnalysisComponent } from './kpi-analysis/all-kpi-analysis/all-kpi-analysis.component';
import { ManageHolidaysComponent } from './holidays/dialogs/manage-holidays/manage-holidays.component';
import { ManageKpiAnalysisComponent } from './kpi-analysis/dialogs/manage-kpi-analysis/manage-kpi-analysis.component';
import { AllKpiSchedulesComponent } from './kpi-schedule/all-kpi-schedules/all-kpi-schedules.component';
import { OrganizationStructureComponent } from './organization-structure/organization-structure.component';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { AllLeaveBandsComponent } from './annual-leave-bands/all-leave-bands/all-leave-bands.component';
import { ManageLeaveBandsComponent } from './annual-leave-bands/dialogs/manage-leave-bands/manage-leave-bands.component';


@NgModule({
  declarations: [
    OrganizationComponent,
    AllBranchesComponent,
    ManageBranchesComponent,
    ManageDepartmentsComponent,
    AllDepartmentsComponent,
    AllJobGradesComponent,
    ManageJobGradesComponent,
    ManageJobRolesComponent,
    AllJobRolesComponent,
    AllHolidaysComponent,
    AllLeaveTypesComponent,
    ManageLeaveTypesComponent,
    ManageKpiScheduleComponent,
    AllKpiAnalysisComponent,
    AllKpiSchedulesComponent,
    ManageHolidaysComponent,
    ManageKpiAnalysisComponent,
    OrganizationStructureComponent,
    AllLeaveBandsComponent,
    ManageLeaveBandsComponent
  ],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule,
    DashboardModule,
    ComponentsModule,
    SharedModule,
    NgxOrgChartModule
  ],
  providers: [DatePipe]

})
export class ConfigurationsModule { }

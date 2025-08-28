import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErpHrRoutingModule } from './erp-hr-routing.module';
import { EmployeesLookupComponent } from './hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/shared.module';
import { BranchesLookupComponent } from './hr-lookups/configurations-lookups/branches-lookup/branches-lookup.component';
import { DepartmentsLookupComponent } from './hr-lookups/configurations-lookups/departments-lookup/departments-lookup.component';
import { HolidaysLookupComponent } from './hr-lookups/configurations-lookups/holidays-lookup/holidays-lookup.component';
import { JobGradesLookupComponent } from './hr-lookups/configurations-lookups/job-grades-lookup/job-grades-lookup.component';
import { JobRolesLookupComponent } from './hr-lookups/configurations-lookups/job-roles-lookup/job-roles-lookup.component';
import { KpiAnalysisLookupComponent } from './hr-lookups/configurations-lookups/kpi-analysis-lookup/kpi-analysis-lookup.component';
import { KpiScheduleLookupComponent } from './hr-lookups/configurations-lookups/kpi-schedule-lookup/kpi-schedule-lookup.component';
import { LeaveTypesLookupComponent } from './hr-lookups/configurations-lookups/leave-types-lookup/leave-types-lookup.component';
import { FringeBenefitLookupComponent } from './hr-lookups/deductions-lookups/fringe-benefit-lookup/fringe-benefit-lookup.component';
import { HouseLevyLookupComponent } from './hr-lookups/deductions-lookups/house-levy-lookup/house-levy-lookup.component';
import { NhifLookupComponent } from './hr-lookups/deductions-lookups/nhif-lookup/nhif-lookup.component';
import { PayeLookupComponent } from './hr-lookups/deductions-lookups/paye-lookup/paye-lookup.component';
import { PayeReliefLookupComponent } from './hr-lookups/deductions-lookups/paye-relief-lookup/paye-relief-lookup.component';
import { JobLookupComponent } from './hr-lookups/jobs-lookups/job-lookup/job-lookup.component';
import { AnnualLeaveBandsLookupComponent } from './hr-lookups/configurations-lookups/annual-leave-bands-lookup/annual-leave-bands-lookup.component';
import { JobApplicationLookupComponent } from './hr-lookups/jobs-lookups/job-application-lookup/job-application-lookup.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    EmployeesLookupComponent,
    BranchesLookupComponent,
    DepartmentsLookupComponent,
    HolidaysLookupComponent,
    JobGradesLookupComponent,
    JobRolesLookupComponent,
    KpiAnalysisLookupComponent,
    KpiScheduleLookupComponent,
    LeaveTypesLookupComponent,
    FringeBenefitLookupComponent,
    HouseLevyLookupComponent,
    NhifLookupComponent,
    PayeLookupComponent,
    PayeReliefLookupComponent,
    JobLookupComponent,
    AnnualLeaveBandsLookupComponent,
    JobApplicationLookupComponent
  ],
  imports: [
    CommonModule,
    ErpHrRoutingModule,

    ComponentsModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [
    EmployeesLookupComponent
  ]
})
export class ErpHrModule { }

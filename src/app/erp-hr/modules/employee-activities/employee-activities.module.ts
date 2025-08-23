import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeActivitiesRoutingModule } from './employee-activities-routing.module';

import { AllEmployeeDemotionsComponent } from './demotion/all-employee-demotions/all-employee-demotions.component';
import { ManageEmployeeDemotionsComponent } from './demotion/manage-employee-demotions/manage-employee-demotions.component';
import { ManageEmployeePromotionsComponent } from './promotion/manage-employee-promotions/manage-employee-promotions.component';
import { AllEmployeePromotionsComponent } from './promotion/all-employee-promotions/all-employee-promotions.component';
import { AllEmployeeTransfersComponent } from './transfer/all-employee-transfers/all-employee-transfers.component';
import { ManageEmployeeTransfersComponent } from './transfer/manage-employee-transfers/manage-employee-transfers.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { AllEmployeeJobRoleTransferComponent } from './employee-job-role-transfer/all-employee-job-role-transfer/all-employee-job-role-transfer.component';
import { ManageEmployeeJobRoleTransferComponent } from './employee-job-role-transfer/manage-employee-job-role-transfer/manage-employee-job-role-transfer.component';


@NgModule({
  declarations: [
    AllEmployeePromotionsComponent,
    AllEmployeeDemotionsComponent,
    AllEmployeeDemotionsComponent,
    ManageEmployeeDemotionsComponent,
    ManageEmployeePromotionsComponent,
    AllEmployeePromotionsComponent,
    AllEmployeeTransfersComponent,
    ManageEmployeeTransfersComponent,
    AllEmployeeJobRoleTransferComponent,
    ManageEmployeeJobRoleTransferComponent
  ],
  imports: [
    CommonModule,
    EmployeeActivitiesRoutingModule,

    DashboardModule,
    ComponentsModule,
    SharedModule,
  ]
})
export class EmployeeActivitiesModule { }

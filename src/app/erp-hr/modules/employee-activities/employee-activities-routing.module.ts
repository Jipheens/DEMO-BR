import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeePromotionsComponent } from './promotion/all-employee-promotions/all-employee-promotions.component';
import { AllEmployeeDemotionsComponent } from './demotion/all-employee-demotions/all-employee-demotions.component';
import { AllEmployeeTransfersComponent } from './transfer/all-employee-transfers/all-employee-transfers.component';
import { AllEmployeeJobRoleTransferComponent } from './employee-job-role-transfer/all-employee-job-role-transfer/all-employee-job-role-transfer.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeActivitiesRoutingModule { }

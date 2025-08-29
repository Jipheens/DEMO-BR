import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { ManageEmployeeDocumentsComponent } from './manage-employee-documents/manage-employee-documents.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { AllEmployeeDocumentsComponent } from './all-employee-documents/all-employee-documents.component';
import { CreateEmployeePortalAccountComponent } from './create-employee-portal-account/create-employee-portal-account.component';
import { DocumentPreviewDialogComponent } from './document-preview-dialog/document-preview-dialog.component';


@NgModule({
  declarations: [
    AllEmployeesComponent,
    ManageEmployeesComponent,
    ManageEmployeeDocumentsComponent,
    AllEmployeeDocumentsComponent,
    CreateEmployeePortalAccountComponent,
    DocumentPreviewDialogComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,

    DashboardModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [DatePipe]
})
export class EmployeesModule { }

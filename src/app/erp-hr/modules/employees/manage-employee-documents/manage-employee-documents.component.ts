import { SelectionModel } from "@angular/cdk/collections";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Subject, takeUntil, Subscription } from "rxjs";
import { NotificationServiceService } from "src/@core/Models/Notification/notification-service.service";
import { JobApplicationAPIService } from "src/app/erp-hr/data/job-services/job-applications.service";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
import Swal from "sweetalert2";
import { EmployeeService } from "src/app/erp-hr/data/employee-services/employee-management.service";
import { HttpParams } from "@angular/common/http";
import { FormBuilder } from "@angular/forms";
import { EmployeeDocumentsService } from "src/app/erp-hr/data/employee-services/employee-documents.service";

@Component({
  selector: "app-manage-employee-documents",
  templateUrl: "./manage-employee-documents.component.html",
  styleUrls: ["./manage-employee-documents.component.scss"],
})
export class ManageEmployeeDocumentsComponent implements OnInit {

  constructor(
   
  ) {}

  ngOnInit(): void {
   
  }

}

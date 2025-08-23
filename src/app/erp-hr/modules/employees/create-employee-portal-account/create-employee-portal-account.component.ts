import { SelectionModel } from "@angular/cdk/collections";
import { HttpParams } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
  MatDialog,
} from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Subject, Subscription, takeUntil } from "rxjs";
import { DocumentManagementSystemService } from "src/app/erp-hr/data/job-services/document-management-system.service";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
import { EmployeeService } from "src/app/erp-hr/data/employee-services/employee-management.service";

@Component({
  selector: "app-create-employee-portal-account",
  templateUrl: "./create-employee-portal-account.component.html",
  styleUrls: ["./create-employee-portal-account.component.sass"],
})
export class CreateEmployeePortalAccountComponent implements OnInit {
  Data: any;

  displayedColumns: string[] = ["index", "filename", "filetype", "action"];

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  destroy$: Subject<boolean> = new Subject<boolean>();

  selection = new SelectionModel<any>(true, []);

  downloadLoading: boolean = false;
  pageFunction: any = "Add";

  mngForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private employeeService: EmployeeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.pageFunction = this.data.action;
    this.Data = this.data.record;

    this.mngForm = this.fb.group({
      empNo: [this.Data.empNo],
      roleName: ["", Validators.required],
    });
  }

  input: any;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.input = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  posting: Boolean = false;
  submit() {
    this.posting = true;

    // let params = {empNo: this.mngForm.value.empNo, roleName: this.mngForm.value.roleName}

    const params = new HttpParams()
      .set("empNo", this.mngForm.controls.empNo.value)
      .set("roleName", this.mngForm.controls.roleName.value);

    console.log("params: ", params);

    this.employeeService
      .createPortal(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          console.log("res: ", res);

          if (res.statusCode == 201) {
            this.snackbar.showNotification("snackbar-success", res.message);
            this.onNoClick();
          } else {
            this.snackbar.showNotification("snackbar-danger", res.message);
          }
        },
        error: (err) => {
          this.snackbar.showNotification("snackbar-danger", err.message);
          this.posting = false;
        },
        complete: () => {
          this.posting = false;
        },
      }),
      Subscription;
  }
  response: any;
  onNoClick(): void {
    //this.dialogRef.close({ event: "close", data: this.response });
  }
}

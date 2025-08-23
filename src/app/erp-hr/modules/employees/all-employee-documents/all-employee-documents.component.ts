import { SelectionModel } from "@angular/cdk/collections";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Subject, Subscription, takeUntil } from "rxjs";
import { NotificationServiceService } from "src/@core/Models/Notification/notification-service.service";
import { EmployeeService } from "src/app/erp-hr/data/employee-services/employee-management.service";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
import { EmployeeDocumentsService } from "src/app/erp-hr/data/employee-services/employee-documents.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TokenStorageService } from "src/app/core/service/token-storage.service";
import Swal from "sweetalert2";
import { EmployeesLookupComponent } from "src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component";
import { HttpParams } from "@angular/common/http";
import { AccessControlService } from "src/app/erp-hr/data/_AccessControlService.service";

@Component({
  selector: "app-all-employee-documents",
  templateUrl: "./all-employee-documents.component.html",
  styleUrls: ["./all-employee-documents.component.scss"],
})
export class AllEmployeeDocumentsComponent implements OnInit {
  displayedColumns: string[] = [
    "select",
    "index",
    "employeeNationalId",
    "documentType",
    "filename",
    "status",
    "action",
  ];

  loading: boolean = false;
  data: any;
  error: any;
  dialogConfig: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selection = new SelectionModel<any>(true, []);

  downloadLoading: boolean = false;
  posting: boolean = false;
  showForm: boolean = false;

  Form: FormGroup;

  currentUser: any;

  constructor(
    private dialog: MatDialog,
    private notificationAPI: NotificationServiceService,
    private employeeDocumentsService: EmployeeDocumentsService,
    private snackbar: SnackbarService,
    private fb: FormBuilder,
    private tokenStorageService: TokenStorageService,
    private accessControlService: AccessControlService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();

    this.Form = this.fb.group({
      nationalId: ["NA", Validators.required],
      employeeName: ["NA", Validators.required],
      status: ["ALL"],
    });
    this.Form.valueChanges.subscribe(() => {
      this.getData();
    });

    this.getData();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  //************************************************************************************************ */
  reqStatuses: any[] = [
    { name: "ALL" },
    { name: "PENDING" },
    { name: "APPROVED" },
    { name: "RETURNED" },
    { name: "REJECTED" },
  ];
  selectedStatus: string = "ALL";

  getSelectSelectedStatus() {
    // this.getData();
  }
  getSelectedStatus(status: any) {
    this.Form.patchValue({
      status: status,
    });

    //  this.getData();
  }
  getData() {
    this.loading = true;
    this.dataSource = new MatTableDataSource([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.selectedStatus = this.Form.value.status;

    let params = {
      nationalId: this.Form.value.nationalId,
      status: this.Form.value.status,
    };

    this.employeeDocumentsService
      .readByStatusAndEmpNationalId(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.statusCode === 302) {
            this.data = res.entity;
            console.log("Employee Documents displayed on table", this.data);

            this.loading = false;
            this.dataSource = new MatTableDataSource(this.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          } else {
            this.loading = false;
          }
        },
        error: (err) => {
          this.loading = false;
          this.notificationAPI.alertWarning("Server Error:  " + err.message);
        },
        complete: () => { },
      });
  }
  refresh() {
    this.getData();
  }

  mngRecord(action: any, record?: any) {
    console.log("this.action:; ", action);
    console.log("this.record:; ", record);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "800px";
    dialogConfig.data = {
      action: action,
      record: record,
    };
    const dialogRef = this.dialog.open(
      AllEmployeeDocumentsComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((result) => {
      console.log("result:::", result);

      this.getData();
    });
  }
  deleteRecord(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "HOLIDAY RECORD WILL BE DELETED PERMANENTLY!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;
        this.employeeDocumentsService
          .delete(id)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              if (res.statusCode == 200) {
                this.getData();
                this.loading = false;
                this.notificationAPI.alertSuccess(
                  "HOLIDAY RECORD DELETED SUCCESSFULLY"
                );
              } else {
                this.getData();
                this.loading = false;
                this.notificationAPI.alertWarning(res.message);
              }
            },
            error: (err) => {
              this.loading = false;
              this.notificationAPI.alertSuccess("Server Error: " + err.message);
            },
            complete: () => { },
          });
      }
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
  //******************************************************************************************************************************** */

  employeeLookup(type: any) {
    if (type === "Search") {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.disableClose = true;
      dialogConfig.width = "800px";
      dialogConfig.data = {
        action: "SingleEmployee",
      };
      const dialogRef = this.dialog.open(
        EmployeesLookupComponent,
        dialogConfig
      );
      dialogRef.afterClosed().subscribe((res) => {
        if (res && res.data && res.data.length > 0) {
          this.Form.patchValue({
            nationalId: res.data[0].nationalId,
            employeeName: res.data[0].firstName + " " + res.data[0].firstName + " " + res.data[0].firstName,
          });
        }
      });
    } else if (type === "ALL") {
      this.Form.patchValue({
        nationalId: "ALL",
        employeeName: "ALL"
      });

      this.getData();
    }
  }
  // ****************************************************************************************************************************
  selectedRows: any[] = [];
  atleastOneSelected: boolean = false;
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? "deselect" : "select"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${row.position + 1
      }`;
  }

  expSelected() {
    this.atleastOneSelected = true;
    this.selectedRows = this.selection.selected;

    console.log("this.selectedRows: ", this.selectedRows);
  }


  hasAccess: boolean = false;
  processMultipleRows(status: any) {
    let privilege = "Approve Employee Management";

    this.hasAccess = this.accessControlService.hasPrivilege("HumanResourceModule", [
      privilege,
    ]);

    if (this.hasAccess) {
      Swal.fire({
        title: '<span style="font-size: 20px;">Enter Verifier Remarks</span>',
        input: "textarea",
        inputPlaceholder: "Type your remarks here...",
        confirmButtonText: "Submit",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        icon: "info",

        inputValidator: (value) => {
          if (!value) {
            return "Please enter your remarks";
          }
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const verifierRemarks = result.value;

          const processedRows = this.selectedRows.map((element) => {
            return {
              id: element.id,
              status: status,
              verifierRemarks: verifierRemarks,
            };
          });

          console.log("LOG: ", processedRows);

          this.employeeDocumentsService
            .verify(processedRows)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: (res) => {
                console.log("res: ", res);
                if (res.statusCode == 201 || 200 || 302) {
                  this.snackbar.showNotification(
                    "snackbar-success",
                    res.message
                  );

                  this.selection = new SelectionModel<any>(true, []);
                  this.selection.clear();
                } else {
                  this.snackbar.showNotification(
                    "snackbar-danger",
                    res.message
                  );
                }
              },
              error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
              },
              complete: () => {
                this.getData();
              },
            }),
            Subscription;
        } else {
          this.selection = new SelectionModel<any>(true, []);
          this.selection.clear();
        }
      });
    }
  }

  // ****************************************************************************************************************************

  getDocById(id) {
    let param = new HttpParams().set("id", id);
    this.employeeDocumentsService.readById(param).subscribe({
      next: (res) => {
        console.log("res:: ", res);

        this.data = res.entity;
        this.downloadDocument(this.data);
      },

      error: (err) => {
        this.notificationAPI.alertWarning(err.message);
      },
      complete: () => { },
    });
  }

  downloadDocument(row: any) {
    let file = row.attachment;
    let filename = row.fileName;
    let employeeNationalId = row.employeenationalid;

    const source = `${file}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${employeeNationalId}_${filename}`;
    link.click();
  }
}

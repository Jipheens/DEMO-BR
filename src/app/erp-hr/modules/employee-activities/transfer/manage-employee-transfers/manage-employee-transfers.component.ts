import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject, takeUntil, Subscription } from 'rxjs';
import { DepartmentsLookupComponent } from 'src/app/erp-hr/hr-lookups/configurations-lookups/departments-lookup/departments-lookup.component';
import { EmployeesLookupComponent } from 'src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component';
import { FilesService } from 'src/app/shared/services/files.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { AllEmployeesComponent } from '../../../employees/all-employees/all-employees.component';
import { EmployeeTransferService } from 'src/app/erp-hr/data/employee-activities/employee-transfers.service';
import { BranchesLookupComponent } from 'src/app/erp-hr/hr-lookups/configurations-lookups/branches-lookup/branches-lookup.component';
import { EmployeeService } from 'src/app/erp-hr/data/employee-services/employee-management.service';
import { HttpParams } from '@angular/common/http';
import { JobRolesLookupComponent } from 'src/app/erp-hr/hr-lookups/configurations-lookups/job-roles-lookup/job-roles-lookup.component';

@Component({
  selector: 'app-manage-employee-transfers',
  templateUrl: './manage-employee-transfers.component.html',
  styleUrls: ['./manage-employee-transfers.component.sass']
})
export class ManageEmployeeTransfersComponent implements OnInit {

  mngForm: FormGroup;

  destroy$: Subject<boolean> = new Subject<boolean>();

  downloadLoading: boolean = false;

  pageFunction: string = "Add";

  hideSubmit: boolean = false;
  isLoading: boolean = true;

  currentUserPf: any;


  constructor(
    public dialogRef: MatDialogRef<AllEmployeesComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private employeeTransferService: EmployeeTransferService, 
    private dialog: MatDialog,
    private filesService: FilesService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    console.log("LOG DATA = ", this.data);
    this.pageFunction = this.data.action;
    this.formData = this.data.record;
    this.generateForm(this.formData);

    this.currentUserPf = this.data.currentUserPf;
    if (this.pageFunction === "Add" || this.pageFunction === "Add My") {
      this.getEmployeeDetailsByEmpf();
    }

    this.getPage();
  }
  ngAfterViewInit() {
    if (this.data.action !== "Add") {
      this.generateForm(this.formData);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  disableTransactionType: boolean = true;
  getPage() {
    this.disableTransactionType = true;
    console.log("this.data.action :", this.data.action);
    if (this.data.action === "Add" || this.data.action === "Add My") {
      this.isLoading = false;
      this.generateForm(this.data.record);
    } else if (
      this.data.action === "Update" ||
      this.data.action === "Update My"
    ) {
      this.generateForm(this.data.record);
    } else if (this.data.action === "View" || this.data.action === "View My") {
      this.generateForm(this.data.record);
      this.activateViewMode();
    }
    this.isLoading = false;
  }

  formData: any;

  generateForm(formData?): void {
    console.log("generateForm formData :: ", formData);
    this.mngForm = this.fb.group({
      id: [formData?.id ?? ""],
      newBranchName: [formData?.newBranchName ?? "", Validators.required],
      newDepartmentFk: [formData?.newDepartmentFk ?? ""],
      newDepartmentName: [formData?.newDepartmentName ?? ""],
      newBranchFk: [formData?.newBranchFk ?? ""],
      newBranchCode:[formData?.newBranchCode ?? ""],
      newDepartmentCode:[formData?.newDepartmentCode ?? ""],
      empPf: [this.currentUserPf || formData?.empPf || "", Validators.required],
      reason: [formData?.reason ?? "", Validators.required],
      newOrganizationRole: [formData?.newOrganizationRole ?? "", Validators.required],
      newOrganizationFk: [formData.newOrganizationFk ?? "", Validators.required],
      newCostCenterName: [formData?.newCostCenterName ?? "", Validators.required],
      newCostCenterCode: [formData?.newCostCenterCode ?? "", Validators.required],
      newReportingToName: [formData?.newReportingToName ?? "", Validators.required],
      newReportingToPF: [formData?.newReportingToPF ?? "", Validators.required],
      });
  }

  viewMode: boolean = false;
  activateViewMode() {
    this.viewMode = true;
  }

  getEmployeeDetailsByEmpf() {
    this.isLoading = true;
    const params = new HttpParams().set("empNo", this.currentUserPf);
    this.employeeService
      .readByEmployeePf(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.entity) {
            this.patchEmployeeDetails(res.entity)
          } else {
            this.snackbar.showNotification("snackbar-danger", res.message);
          }
          this.isLoading = false;
        },
        error: (err) => {
          this.snackbar.showNotification("snackbar-danger", err.message);
          this.isLoading = false;
        },
        complete: () => { this.isLoading = false; },
      });
  }

  //   {
  //     "message": "CREATED SUCCESSFULLY!",
  //     "entity": {
  //         "id": 2,
  //         "status": "PENDING",
  //         "postedFlag": "Y",
  //         "postedBy": "KBUser",
  //         "postedTime": "2024-06-24T11:08:47.394825412",
  //         "modifiedFlag": "N",
  //         "modifiedBy": null,
  //         "modifiedTime": null,
  //         "verifiedFlag": "N",
  //         "verifiedBy": null,
  //         "verifiedTime": null,
  //         "verifierStatus": "PENDING",
  //         "verifierRemarks": null,
  //         "supervisorVerifierBy": null,
  //         "supervisorVerifiedFlag": "N",
  //         "supervisorVerifierTime": null,
  //         "supervisorVerifierStatus": "PENDING",
  //         "supervisorVerifierRemarks": null,
  //         "hrVerifierBy": null,
  //         "hrVerifiedFlag": "N",
  //         "hrVerifierTime": null,
  //         "hrVerifierStatus": "PENDING",
  //         "hrVerifierRemarks": null,
  //         "seniorHrVerifierBy": null,
  //         "seniorHrVerifiedFlag": "N",
  //         "seniorHrVerifierTime": null,
  //         "seniorHrVerifierStatus": "PENDING",
  //         "seniorHrVerifierRemarks": null,
  //         "hodVerifierBy": null,
  //         "hodVerifiedFlag": "N",
  //         "hodVerifierTime": null,
  //         "hodVerifierStatus": "PENDING",
  //         "hodVerifierRemarks": null,
  //         "deletedFlag": "N",
  //         "deletedBy": null,
  //         "deletedTime": null,
  //         "empPf": "4",
  //         "currentDepartmentFk": 30,
  //         "currentDepartmentName": "ICT",
  //         "currentDepartmentCode": null,
  //         "newDepartmentFk": 30,
  //         "newDepartmentName": "ICT",
  //         "newDepartmentCode": null,
  //         "reason": "test",
  //         "currentBranchFk": 27,
  //         "currentBranchName": null,
  //         "currentBranchCode": "u1w3g",
  //         "newBranchFk": 68,
  //         "newBranchName": "MOMBASA",
  //         "newBranchCode": null
  //     },
  //     "statusCode": 201
  // }
  posting: boolean = false;

  response: any;
  submit() {
    console.log("this.mngForm.value: ", this.mngForm.value);
    this.posting = true;
    if (this.pageFunction === "Add" || this.pageFunction === "Add My") {
      this.employeeTransferService
        .create(this.mngForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.response = res;
            console.log("res: ", res);
            if (res.statusCode == 201) {
              this.snackbar.showNotification(
                "snackbar-success",
                res.message
              );
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
            this.posting = false;
            setTimeout(() => {
              this.onNoClick();
            }, 3000);
          },
        }),
        Subscription;
    } else if (this.pageFunction === "Update" || this.pageFunction === "Update My") {
      this.employeeTransferService
        .update(this.mngForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.response = res;
            console.log("resres:: ", res);
            if (res.statusCode == 200) {
              this.snackbar.showNotification(
                "snackbar-success",
                res.message
              );
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
            this.posting = false;
            setTimeout(() => {
              this.onNoClick();
            }, 3000);
          },
        }),
        Subscription;
    }
  }

  onNoClick(): void {
    this.dialogRef.close({ event: "close", data: this.response });
  }

  //********************************************************************************************************************** */
  // Lookup
  //********************************************************************************************************************** */

  selectedItem: any;
 
  employeeLookup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "800px";
    dialogConfig.data = {
      action: "SingleEmployee",
      selected: this.selectedItem,
    };
    const dialogRef = this.dialog.open(EmployeesLookupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res && res.data && res.data.length > 0) {
        this.patchEmployeeDetails(res.data[0])
      }
    });
  }

  patchEmployeeDetails(details: any) {
    this.mngForm.patchValue({
      empPf: details.empNo,
      newBranchFk: details.branchId,
      newBranchName: details.branchName,
      newDepartmentFk: details.departmentId,
      newDepartmentName: details.departmentName,
      newDepartmentCode: details.departmentCode,
      newOrganizationRole: details.organizationRole,
      newOrganizationFk: details.organizationRoleId,
      newCostCenterCode: details.costCenterCode,
      newCostCenterName: details.costCenterName,
      newReportingToName: details.reportingToFullname,
      newReportingToPF: details.reportingToPf,
       });
  }
  branchLookup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "800px";
    dialogConfig.data = {
      action: "SingleBranch",
      selected: this.selectedItem,
    };
    const dialogRef = this.dialog.open(BranchesLookupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res && res.data && res.data.length > 0) {
        this.mngForm.patchValue({
          newBranchCode: res.data[0].branchCode,
          newBranchName: res.data[0].branchName,
          newBranchFk: res.data[0].id,
        });

      }
    });
  }
  departmentLookup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "800px";
    dialogConfig.data = {
      action: "SingleDepartment",
      selected: this.selectedItem,
    };
    const dialogRef = this.dialog.open(
      DepartmentsLookupComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((res) => {
      if (res && res.data && res.data.length > 0) {
        this.mngForm.patchValue({
          newDepartmentCode: res.data[0].departmentCode,
          newDepartmentName: res.data[0].departmentName,
          newDepartmentFk: res.data[0].id,
          
        });

      }
    });
  }

  costCentreLookup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "800px";
    dialogConfig.data = {
      action: "SingleDepartment",
      selected: this.selectedItem,
    };

  }

  supervisorLookup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "800px";
    dialogConfig.data = {
      action: "SingleEmployee",
      selected: this.selectedItem,
    };
    const dialogRef = this.dialog.open(EmployeesLookupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      this.mngForm.patchValue({
        newReportingToName: res.data[0].firstName +
        " " +
        res.data[0].middleName +
        " " +
        res.data[0].lastName,
        newReportingToPF: res.data[0].empNo,
         });
         console.log('The employee data',res.data)
    });
  }

  organizationLookup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "800px";
    dialogConfig.data = {
      action: "SingleJobRole",
      selected: this.selectedItem,
    };
    const dialogRef = this.dialog.open(
      JobRolesLookupComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((res) => {
      console.log('data',res.data[0].roleName)
      if (res && res.data && res.data.length > 0) {
        this.mngForm.patchValue({
          newOrganizationRole: res.data[0].roleName,
          newOrganizationFk: res.data[0].id,          
        });

      }
    });
  }
}

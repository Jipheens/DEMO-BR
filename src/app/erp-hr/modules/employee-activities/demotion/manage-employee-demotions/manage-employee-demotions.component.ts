import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject, takeUntil, Subscription } from 'rxjs';
import { DepartmentsLookupComponent } from 'src/app/erp-hr/hr-lookups/configurations-lookups/departments-lookup/departments-lookup.component';
import { EmployeesLookupComponent } from 'src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component';
import { FilesService } from 'src/app/shared/services/files.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { AllEmployeesComponent } from '../../../employees/all-employees/all-employees.component';
import { EmployeeDemotionService } from 'src/app/erp-hr/data/employee-activities/employee-demotions.service';
import { JobRolesLookupComponent } from 'src/app/erp-hr/hr-lookups/configurations-lookups/job-roles-lookup/job-roles-lookup.component';
import { JobGradesLookupComponent } from 'src/app/erp-hr/hr-lookups/configurations-lookups/job-grades-lookup/job-grades-lookup.component';
import { BranchesLookupComponent } from 'src/app/erp-hr/hr-lookups/configurations-lookups/branches-lookup/branches-lookup.component';

@Component({
  selector: 'app-manage-employee-demotions',
  templateUrl: './manage-employee-demotions.component.html',
  styleUrls: ['./manage-employee-demotions.component.sass']
})
export class ManageEmployeeDemotionsComponent implements OnInit {

  mngForm: FormGroup;

  destroy$: Subject<boolean> = new Subject<boolean>();

  downloadLoading: boolean = false;

  pageFunction: string = "Add";

  hideSubmit: boolean = false;
  isLoading: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<AllEmployeesComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private employeeDemotionService: EmployeeDemotionService,
    private dialog: MatDialog,
    private filesService: FilesService
  ) {}

  ngOnInit(): void {
    console.log("LOG DATA = ", this.data);
    this.pageFunction = this.data.action;
    this.formData = this.data.record;
    this.generateForm(this.formData);

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
    if (this.data.action === "Add") {
      this.isLoading = false;
      this.generateForm(this.data.record);
    } else if (this.data.action === "Update") {
      this.generateForm(this.data.record);
    } else if (this.data.action === "View") {
      this.generateForm(this.data.record);
      this.activateViewMode();
    }
    this.isLoading = false;
  }

  formData: any;

  generateForm(formData?): void {
    this.mngForm = this.fb.group({
      id: [formData?.id ?? ''],
      empNo: [formData?.empNo ?? '', Validators.required],
      employeeName: [formData?.employeeName ?? '', Validators.required],
      newPosition: [formData?.newPosition ?? '', Validators.required],
      prevPosition: [formData?.prevPosition ?? '', Validators.required],
      newBasicPay: [formData?.newBasicPay ?? '', Validators.required],
      prevBasicPay: [formData?.prevBasicPay ?? '', Validators.required],
     
      demotionReason: [formData?.demotionReason ?? '', Validators.required],
      effectiveDate: [formData?.effectiveDate ?? new Date(), Validators.required],
      jobGroupName: [formData?.jobGroupName ?? '', Validators.required]
    });
  }
  
  viewMode: boolean = false;
  activateViewMode() {
    this.viewMode = true;
  }

  posting: boolean = false;

  response: any;
  submit() {
    console.log("this.mngForm.value: ", this.mngForm.value);
    this.posting = true;
    if (this.pageFunction === "Add") {
      this.employeeDemotionService
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
    } else if (this.pageFunction === "Update") {
      this.employeeDemotionService
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
  jobRoleLookup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "800px";
    dialogConfig.data = {
      action: "SingleJobRole",
      selected: this.selectedItem,
    };
    const dialogRef = this.dialog.open(JobRolesLookupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res && res.data && res.data.length > 0) {
        this.mngForm.patchValue({
          newBasicPay: res.data[0].minSalary,
          newPosition: res.data[0].roleName,
        });
      }
    });
  }

  jobGradeLookup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "800px";
    dialogConfig.data = {
      action: "SingleJobGrade",
      selected: this.selectedItem,
    };
    const dialogRef = this.dialog.open(JobGradesLookupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res && res.data && res.data.length > 0) {
        this.mngForm.patchValue({
          jobGroupName: res.data[0].jobGroupName
        });
      }
    });
  }


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
        this.mngForm.patchValue({
          empNo: res.data[0].empNo,
          employeeName: res.data[0].firstName + " " + res.data[0].lastName,
          departmentName: res.data[0].departmentname,
          departmentId: res.data[0].departmentId,
          initialBranchName: res.data[0].branchName,

          prevPosition: res.data[0].organizationRole,
          prevBasicPay: res.data[0].basicSalary
        });
      }
    });
  }
  branchLookup(type: any) {
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
        if (type === "Initial") {
          this.mngForm.patchValue({
            initialBranchName: res.data[0].branchName,
          });
        } else if (type === "New") {
          this.mngForm.patchValue({
            newBranchName: res.data[0].branchName,
          });
        }
      }
    });
  }
  departmentLookup(type: any) {
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
        if (type === "Initial") {
          this.mngForm.patchValue({
            departmentId: res.data[0].id,
            departmentName: res.data[0].departmentName,
          });
        } else if (type === "New") {
          this.mngForm.patchValue({
            newDepartmentId: res.data[0].id,
            newDepartmentName: res.data[0].departmentName,
          });
        }
      }
    });
  }
}

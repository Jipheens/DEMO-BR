import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject, takeUntil, Subscription } from 'rxjs';
import { BranchService } from 'src/app/erp-hr/data/configuration-services/branch.service';
import { LeaveTypeService } from 'src/app/erp-hr/data/configuration-services/leave-type.service';
import { EmployeesLookupComponent } from 'src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component';
import { AllEmployeesComponent } from 'src/app/erp-hr/modules/employees/all-employees/all-employees.component';
import { FilesService } from 'src/app/shared/services/files.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-manage-leave-types',
  templateUrl: './manage-leave-types.component.html',
  styleUrls: ['./manage-leave-types.component.sass']
})
export class ManageLeaveTypesComponent implements OnInit {

  mngForm: FormGroup;

  destroy$: Subject<boolean> = new Subject<boolean>();

  downloadLoading: boolean = false;

  pageFunction: string = "Add";

  hideSubmit: boolean = false;
  isLoading: boolean = true;

  leaveTypes: string[]=[
    "Annual_Leave",
    "Compassionate_Leave",
    "Compulsory_Leave",
    "Leave_of_Absence",
    "Unpaid_Leave",
    "Maternity_Leave",
    "Paternity_Leave",
    "Sick_Leave",
    "Education_Leave",
    "Other"
  ];

  constructor(
    public dialogRef: MatDialogRef<AllEmployeesComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private leaveTypeService: LeaveTypeService,
    private dialog: MatDialog,
    private filesService: FilesService
  ) { }

  ngOnInit(): void {
    console.log("LOG DATA = ", this.data);
    this.pageFunction = this.data.action;
    this.formData = this.data.record
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
    console.log("generateForm formData :: ", formData);
    this.mngForm = this.fb.group({
      id: [formData?.id ?? ''],
      leaveType: [formData?.leaveType ?? '', Validators.required],
     
       hasPeriod: [formData?.hasPeriod ?? '', Validators.required],
       durationAllowed: [formData?.durationAllowed ?? '', [Validators.pattern('[0-9]*')]],
       leaveDescription: [formData?.leaveDescription ?? ''],
      incurDeduction: [formData?.incurDeduction ?? '', Validators.required],
      fullpaymentFirstmonth: [formData?.fullpaymentFirstmonth ?? ''],
      hasAllowance: [formData?.hasAllowance ?? '', Validators.required],
      thresholdDays: [formData?.thresholdDays ?? '', [Validators.pattern('[0-9]*')]],
      allowanceAmount: [formData?.allowanceAmount ?? '', [Validators.pattern('^[0-9]+(\.[0-9]{0,2})?$')]],
      monthlyRate: [formData?.monthlyRate ?? '', [Validators.pattern('[0-9]*')]]
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
      this.leaveTypeService.create(this.mngForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.response = res;
            console.log("res: ", res);
            if (res.statusCode === 201) {
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
      this.leaveTypeService.update(this.mngForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.response = res;
            console.log("resres:: ", res);
            if (res.statusCode === 200) {
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

  selectedItem: any
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
          headOfBranchId: res.data[0].id,
          headOfBranchName: res.data[0].firstName + " " + res.data[0].lastName,
          headOfBranchPhoneNum: res.data[0].personal_phone,
          headOfBranchEmail: res.data[0].personal_email,
        });
      }
    });
  }

}

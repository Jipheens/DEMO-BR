import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
} from "@angular/material/dialog";
import { Subject, takeUntil, Subscription } from "rxjs";
import { BranchService } from "src/app/erp-hr/data/configuration-services/branch.service";
import { EmployeesLookupComponent } from "src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component";
import { AllEmployeesComponent } from "src/app/erp-hr/modules/employees/all-employees/all-employees.component";
import { FilesService } from "src/app/shared/services/files.service";
import { SnackbarService } from "src/app/shared/services/snackbar.service";

@Component({
  selector: "app-manage-branches",
  templateUrl: "./manage-branches.component.html",
  styleUrls: ["./manage-branches.component.sass"],
})
export class ManageBranchesComponent implements OnInit {
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
    private branchAPI: BranchService,
    private dialog: MatDialog,
    private filesService: FilesService
  ) {}

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
      branchName: [formData?.branchName ?? '', Validators.required],
      branchCode: [formData?.branchCode ?? '', Validators.required],
      postalAddress: [formData?.postalAddress ?? ''],
      postalCode: [formData?.postalCode ?? ''],
      city: [formData?.city ?? ''],
      county: [formData?.county ?? '', Validators.required],
      subCounty: [formData?.subCounty ?? ''],
      headOfBranchId: [formData?.headOfBranchId ?? ''],
      headOfBranchName: [formData?.headOfBranchName ?? ''],
      headOfBranchEmail: [formData?.headOfBranchEmail ?? ''],
      headOfBranchPhoneNum: [formData?.headOfBranchPhoneNum ?? '']
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
      this.branchAPI.create(this.mngForm.value)
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
      this.branchAPI.update(this.mngForm.value)
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

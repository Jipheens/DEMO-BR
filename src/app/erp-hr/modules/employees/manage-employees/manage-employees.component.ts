import { DatePipe } from "@angular/common";
import { HttpParams } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router, ActivatedRoute } from "@angular/router";
import { Subject, takeUntil, Subscription } from "rxjs";
import { TokenStorageService } from "src/app/core/service/token-storage.service";
import { EmployeeService } from "src/app/erp-hr/data/employee-services/employee-management.service";
import { EmployeesLookupComponent } from "src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component";
import { SnackbarService } from "src/app/shared/services/snackbar.service";

@Component({
  selector: "app-manage-employees",
  templateUrl: "./manage-employees.component.html",
  styleUrls: ["./manage-employees.component.sass"],
})
export class ManageEmployeesComponent implements OnInit {
  showForm = true;
  isLoading = true;
  pageFunction = "Add";
  mngForm: FormGroup;
  currentUser: any;
  currentUserCode: any;
  formData: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  downloadLoading: boolean = false;
  hideSubmit = false;
  hideApprovals: boolean = true;
  approvalVisible: boolean = false;
  disableActions = false;
  requestCode: any;
  requestId: any

  religionArray: any = [
    "Christian",
    "Islam",
    "Irreligion",
    "Atheist",
    "Hindu",
    "Other",
  ];

  maritalStatusArray: any = [
    "Single",
    "Married",
    "Divorced",
    "Separated",
    "Widow",
    "Widower",
    "Prefer not to say",
  ];
  previousAllocation: any;
  constructor(
    private fb: FormBuilder,
    private tokenStorageService: TokenStorageService,
    private snackbar: SnackbarService,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private dialog: MatDialog,
    private datePipe: DatePipe
  ) {
    // this.currentUser = this.tokenStorageService.getUser().username;
    // this.currentUserCode = this.tokenStorageService.getUser().empPfNo;
    this.currentUser = 'Jipheens';
    this.currentUserCode = 'CSK-00280';
    this.generateSubForm1();
    this.generateSubForm4();
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.getPage();

    if (
      this.route.queryParams &&
      typeof this.route.queryParams.subscribe === "function"
    ) {
      this.route.queryParams.subscribe((params) => {
        console.log("params: ", params);
        if (params.requestId) {
          this.requestCode = params.requestCode;
          this.requestId = params.requestId;
          this.getDataById();
          this.pageFunction = params.action;
        }
      });
      this.showForm = true;
    } else {
      this.showForm = true;
    }
  }
  ngAfterViewInit() { }

  getDataById() {
    const params = new HttpParams().set("id", this.requestId);
    this.employeeService
      .readByEmployeeId(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.entity) {
            this.formData = res.entity;
            console.log("getDataById this.formData: ", this.formData);
            if (this.pageFunction === "View") {
              this.activateViewMode();
            }

            this.onPopulateTables(res);

            this.getPage();

            this.showForm = true;
          } else {
            this.snackbar.showNotification("snackbar-danger", res.message);
          }
        },
        error: (err) => {
          this.snackbar.showNotification("snackbar-danger", err.message);
        },
        complete: () => { },
      });
  }
  onPopulateTables(res) {
    if (res) {
      if (res.entity) {
        if (res.entity.nextOfKins) {
          this.dataSource1.data = res.entity.nextOfKins;
          this.refresh1();
        }
        if (res.entity.employeeEducations) {
          this.dataSource3.data = res.entity.employeeEducations;
          this.refresh3();
        }
        if (res.entity.employeeWorkExperiences) {
          this.dataSource4.data = res.entity.employeeWorkExperiences;
          this.refresh4();
        }

      } else {
        if (res.nextOfKins) {
          this.dataSource1.data = res.nextOfKins;
          this.refresh1();
        }
        if (res.employeeEducations) {
          this.dataSource3.data = res.employeeEducations;
          this.refresh3();
        }
        if (res.employeeWorkExperiences) {
          this.dataSource4.data = res.employeeWorkExperiences;
          this.refresh4();
        }

      }
    }
  }

  getPage(): void {
    if (this.pageFunction === "Add") {
      this.generateForm();

      this.hideApprovals = true;
    } else if (this.pageFunction === "Update") {
      this.generateForm(this.formData);
      this.generateSubForm1();
      this.hideApprovals = true;
    } else if (this.pageFunction === "View") {
      this.generateForm(this.formData);
      this.generateSubForm1();
      this.hideSubmit = true;
      this.hideApprovals = true;
    }
  }

  viewMode: boolean = false;
  activateViewMode() {
    this.viewMode = true;
  }

  generateForm(formData?): void {
    console.log("generateForm formData :: ", formData);
    this.mngForm = this.fb.group({
      id: [formData?.id ?? ""],

      //Basic Info
      empNo: [formData?.empNo ?? null],
      firstName: [
        formData?.firstName ?? "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
      middleName: [
        formData?.middleName ?? "",
        [Validators.minLength(3), Validators.maxLength(40)],
      ],
      lastName: [
        formData?.lastName ?? "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
      dob: [formData?.dob ?? "", Validators.required],
      nationalId: [
        formData?.nationalId ?? "",
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(10),
          Validators.pattern("[0-9]+"),
        ],
      ],
      religion: [formData?.religion ?? "", Validators.required],
      gender: [formData?.gender ?? "male", Validators.required],
      maritalStatus: [formData?.maritalStatus ?? "", Validators.required],
      disabled: [formData?.disabled ?? false],
      disabledRegNo: [
        formData?.disabledRegNo ?? ""

      ],
      marriageCertificate: [""],

      //Home Address
      nationality: [
        formData?.nationality ?? "Kenyan",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
      county: [
        formData?.county ?? ""

      ],
      subCounty: [
        formData?.subCounty ?? ""

      ],
      residentialCountry: [
        formData?.residentialCountry ?? "Kenya"

      ],
      residentialCounty: [
        formData?.residentialCounty ?? ""

      ],
      residentialSubCounty: [
        formData?.residentialSubCounty ?? ""

      ],
      city: [
        formData?.city ?? ""

      ],
      postalAddress: [formData?.postalAddress ?? ""],
      postalCode: [formData?.postalCode ?? ""],

      //Contact Info
      personalPhone: [
        formData?.personalPhone ?? ""

      ],
      alternativePhone: [
        formData?.alternativePhone ?? "",
        [
          Validators.minLength(10),
          Validators.maxLength(12),
          Validators.pattern("[0-9]+"),
        ],
      ],
      personalEmail: [
        formData?.personalEmail ?? "",
        [
          Validators.required,
          Validators.pattern(
            "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
          ),
        ],
      ],
      alternativeEmail: [
        formData?.alternativeEmail ?? "",
        [
          Validators.pattern(
            "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
          ),
        ],
      ],

      nextOfKins: [formData?.nextOfKins ?? []],

     employeeWorkExperiences: [formData?.employeeWorkExperiences ?? []],


      kraNo: [
        formData?.kraNo ?? "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      
    });
 
    if (this.pageFunction === "Add") {
      const storedData = localStorage.getItem("mngFormDataEmployee");
      if (storedData) {
        this.mngForm.patchValue(JSON.parse(storedData));

        this.onPopulateTables(JSON.parse(storedData));

        console.log("storedData:: ", storedData);
      }
      this.mngForm.valueChanges.subscribe((value) => {
        localStorage.setItem("mngFormDataEmployee", JSON.stringify(value));
      });
    }
  }

generateTempId(): string {
  return 'temp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

  nextOfKinForm: FormGroup;
  dataSource1 = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator1!: MatPaginator;
  @ViewChild(MatSort) sort1!: MatSort;

  displayedColumns1: string[] = [
    "id",
    "name",
    "phoneNumber",
    "email",
    "address",
    "relationship",
     "percentageAllocation",
    "action",
  ];
  showParTranForm1 = false;
  parTranAction1: string = "";
  selectedParTranIndex1: number;

  input1: any;
  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.input1 = filterValue;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

generateSubForm1(formData?, isEdit = false): void {
  this.nextOfKinForm = this.fb.group({
    name: [formData?.name ?? "", [Validators.required]],
    phoneNumber: [
      formData?.phoneNumber ?? "",
      [Validators.minLength(10), Validators.maxLength(12), Validators.pattern("[0-9]+")],
    ],
    email: [
      formData?.email ?? "",
      [Validators.pattern("[a-zA-Z0-9.-_]+@[a-zA-Z.-]+\\.[a-zA-Z]{2,}")],
    ],
    address: [
      formData?.address ?? "",
      [Validators.minLength(5), Validators.maxLength(50)],
    ],
    relationship: [formData?.relationship ?? "", [Validators.required]],
    percentageAllocation: [
      formData?.percentageAllocation ?? 0,
      [Validators.required, Validators.min(0), Validators.max(100)],
    ],
    remainingAllocation: [{ value: formData?.remainingAllocation ?? 100, disabled: true }],
  });

  this.nextOfKinForm.get("percentageAllocation")?.valueChanges.subscribe(() => {
    this.calculateRemainingAllocation(isEdit);
  });

  this.calculateRemainingAllocation(isEdit);
}


 calculateRemainingAllocation(isEdit: boolean = false): void {
  const currentAllocation = this.nextOfKinForm.get('percentageAllocation')?.value || 0;

  let totalAllocated = this.dataSource1.data.reduce((sum, kin, index) => {
    if (isEdit && index === this.selectedParTranIndex1) {
      return sum;
    }
    return sum + (kin.percentageAllocation || 0);
  }, 0);

  const remaining = 100 - totalAllocated - currentAllocation;

  const control = this.nextOfKinForm.get('remainingAllocation');
  if (control) {
    control.setValue(remaining >= 0 ? remaining : 0);
  }

  if ((totalAllocated + currentAllocation) > 100) {
    
  }
}
  resetFormAndHide1() {
    this.mngForm.patchValue({
      nextOfKins: this.dataSource1.data,
    });
    this.nextOfKinForm.reset();
    this.showParTranForm1 = false;
  }

  addParTran1() {
    this.parTranAction1 = "Add";
    this.showParTranForm1 = true;
  }

  refresh1() {
    this.dataSource1.data = [...this.dataSource1.data];
    this.dataSource1.paginator = this.paginator1;
    this.dataSource1.sort = this.sort1;
  }

  editParTran1(data: any, index: number) {
  this.parTranAction1 = "Update";
  this.selectedParTranIndex1 = index;
  this.previousAllocation = data.percentageAllocation || 0; 
  this.generateSubForm1(data,true);
  this.showParTranForm1 = true;
}


  pushToDataSource1() {
    if (this.parTranAction1 === "Add") {
      this.dataSource1.data.push(this.nextOfKinForm.value);
    } else if (this.parTranAction1 === "Update") {
      let indexToUpdate: number;

      if (this.nextOfKinForm.value.id) {
        indexToUpdate = this.dataSource1.data.findIndex(
          (item) => item.id === this.nextOfKinForm.value.id
        );
      } else {
        indexToUpdate = this.selectedParTranIndex1;
      }

      if (indexToUpdate !== -1) {
        this.dataSource1.data[indexToUpdate] = this.nextOfKinForm.value;
      }
    }

    this.resetFormAndHide1();
    this.refresh1();
  }

  cancelParTran1() {
    this.resetFormAndHide1();
  }

  deleteParTran1(index: number) {
    this.dataSource1.data.splice(index, 1);
    this.refresh1();
  }

  dataSource2 = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  @ViewChild(MatSort) sort2!: MatSort;

  showParTranForm2 = false;
  parTranAction2: string = "";
  selectedParTranIndex2: number;

  input2: any;
  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.input1 = filterValue;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }

  addParTran2() {
    this.parTranAction2 = "Add";
    this.showParTranForm2 = true;
  }

  refresh2() {
    this.dataSource2.data = [...this.dataSource2.data];
    this.dataSource2.paginator = this.paginator2;
    this.dataSource2.sort = this.sort2;
  }

  editParTran2(data: any, index: number) {
    this.parTranAction2 = "Update";
    this.selectedParTranIndex2 = index;
    this.showParTranForm2 = true;
  }

  dataSource3 = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator3!: MatPaginator;
  @ViewChild(MatSort) sort3!: MatSort;

  displayedColumns3: string[] = [
    "id",
    "institutionName",
    "awardCertificate",
    "certNo",
    "gpaScore",
    "enrollOn",
    "graduatedOn",
    "action",
  ];
  showParTranForm3 = false;
  parTranAction3: string = "";
  selectedParTranIndex3: number;

  input3: any;
  applyFilter3(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.input1 = filterValue;
    this.dataSource3.filter = filterValue.trim().toLowerCase();
    if (this.dataSource3.paginator) {
      this.dataSource3.paginator.firstPage();
    }
  }

  addParTran3() {
    this.parTranAction3 = "Add";
    this.showParTranForm3 = true;
  }

  refresh3() {
    this.dataSource3.data = [...this.dataSource3.data];
    this.dataSource3.paginator = this.paginator3;
    this.dataSource3.sort = this.sort3;
  }

  editParTran3(data: any, index: number) {
    this.parTranAction3 = "Update";
    this.selectedParTranIndex3 = index;
    this.showParTranForm3 = true;
  }

  workExpForm: FormGroup;
  dataSource4 = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator4!: MatPaginator;
  @ViewChild(MatSort) sort4!: MatSort;

  displayedColumns4: string[] = [
    "id",
    "companyName",
    "workPosition",
    "startDate",
    "endDate",
    "action",
  ];
  showParTranForm4 = false;
  parTranAction4: string = "";
  selectedParTranIndex4: number;

  input4: any;
  applyFilter4(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.input1 = filterValue;
    this.dataSource4.filter = filterValue.trim().toLowerCase();
    if (this.dataSource4.paginator) {
      this.dataSource4.paginator.firstPage();
    }
  }

  generateSubForm4(formData?): void {
    this.workExpForm = this.fb.group({
      companyName: [formData?.companyName ?? "", Validators.required],
      workPosition: [formData?.workPosition ?? "", Validators.required],
      startDate: [formData?.startDate ?? "", Validators.required],
      endDate: [formData?.endDate ?? "", Validators.required],
    });
  }

  resetFormAndHide4() {
    this.mngForm.patchValue({
      employeeWorkExperiences: this.dataSource4.data,
    });
    this.workExpForm.reset();
    this.showParTranForm4 = false;
  }

  addParTran4() {
    this.parTranAction4 = "Add";
    this.showParTranForm4 = true;
  }

  refresh4() {
    this.dataSource4.data = [...this.dataSource4.data];
    this.dataSource4.paginator = this.paginator4;
    this.dataSource4.sort = this.sort4;
  }

  editParTran4(data: any, index: number) {
    this.parTranAction4 = "Update";
    this.selectedParTranIndex4 = index;
    this.generateSubForm4(data);
    this.showParTranForm4 = true;
  }

  pushToDataSource4() {
    if (this.parTranAction4 === "Add") {
      this.dataSource4.data.push(this.workExpForm.value);
    } else if (this.parTranAction4 === "Update") {
      let indexToUpdate: number;

      if (this.workExpForm.value.id) {
        indexToUpdate = this.dataSource4.data.findIndex(
          (item) => item.id === this.workExpForm.value.id
        );
      } else {
        indexToUpdate = this.selectedParTranIndex4;
      }

      if (indexToUpdate !== -1) {
        this.dataSource4.data[indexToUpdate] = this.workExpForm.value;
      }
    }

    this.resetFormAndHide4();
    this.refresh4();
  }

  cancelParTran4() {
    this.resetFormAndHide4();
  }

  deleteParTran4(index: number) {
    this.dataSource4.data.splice(index, 1);
    this.resetFormAndHide4();
    this.refresh4();
  }
  file_name: any;
  base64File: string;
  loading: boolean = false;
  handleFileInput(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.base64File = reader.result as string;
      this.file_name = file.name;
      this.mngForm.patchValue({
        marriageCertificate: this.base64File,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  getDocument() {

  }

  downloadDocument() {
    let fileName = "Document";

    fetch(this.formData.marriageCertificate)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${fileName}`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
          reportingToPf: res.data[0].empNo,
          reportingToFullname:
            res.data[0].firstName +
            " " +
            res.data[0].middleName +
            " " +
            res.data[0].lastName,
        });
      }
    });
  }
  posting: boolean = false;
 
  onSubmit() {
  this.posting = true;

  const totalAllocation = this.dataSource1.data.reduce((sum, kin) => {
    return sum + (kin.percentageAllocation || 0);
  }, 0);

  if (totalAllocation !== 100) {
    this.snackbar.showNotification("snackbar-danger", "Next Of Kin Total percentage allocation must be exactly 100%.");
    this.posting = false; 
    return; 
  }

  let formValue = this.mngForm.value;
  if (!formValue.empNo) {
    delete formValue.empNo;
  }

  console.log("this.mngForm.value: ", formValue);

  if (this.mngForm.valid) {
    const formattedRequest = {
      RequestID: this.generateRandomId(), 
      //RequestData: JSON.stringify(formValue), 
      RequestData: formValue,
      RequestTime: new Date().toISOString(), 
      AppName: "CLIENT_DATA" 
    };

    console.log("Formatted Request: ", formattedRequest);

    if (this.pageFunction == "Add") {
      this.employeeService
        .create(formattedRequest) 
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            console.log("res: ", res);

            if (res.statusCode == 201) {
              this.snackbar.showNotification("snackbar-success", res.message);
              this.cancel();
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
        });
    } else if (this.pageFunction == "Update") {
      this.employeeService
        .update(formattedRequest) 
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            if (res.statusCode == 200) {
              this.snackbar.showNotification("snackbar-success", res.message);
              this.cancel();
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
        });
    }
  } else {
    this.displayInvalidFields();
    this.posting = false;
  }
}

generateRandomId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}
  displayInvalidFields() {
    const invalidFields = [];
    const controls = this.mngForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalidFields.push(name);
      }
    }
    const message = `Please fill in the following fields: ${invalidFields.join(
      ", "
    )}`;
    this.snackbar.showNotification("snackbar-danger", message);
  }


  cancel() {
    this.router.navigate(["/erp-hr/employees/all-employees"]);
  }


}
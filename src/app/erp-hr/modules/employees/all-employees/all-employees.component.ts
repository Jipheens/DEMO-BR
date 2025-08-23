import { SelectionModel } from "@angular/cdk/collections";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Subject, takeUntil, Subscription } from "rxjs";
import { NotificationServiceService } from "src/@core/Models/Notification/notification-service.service";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
import Swal from "sweetalert2";
import { ManageEmployeesComponent } from "../manage-employees/manage-employees.component";
import { EmployeeService } from "src/app/erp-hr/data/employee-services/employee-management.service";
import { PrivilegeService } from "src/app/erp-hr/data/PrivilegeService";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CreateEmployeePortalAccountComponent } from "../create-employee-portal-account/create-employee-portal-account.component";
import { BranchesLookupComponent } from "src/app/erp-hr/hr-lookups/configurations-lookups/branches-lookup/branches-lookup.component";
import { DepartmentsLookupComponent } from "src/app/erp-hr/hr-lookups/configurations-lookups/departments-lookup/departments-lookup.component";
import { ReportService } from "src/app/erp-hr/data/payroll-services/report.service";
import { AccessControlService } from "src/app/erp-hr/data/_AccessControlService.service";

@Component({
  selector: "app-all-employees",
  templateUrl: "./all-employees.component.html",
  styleUrls: ["./all-employees.component.sass"],
})
export class AllEmployeesComponent implements OnInit {
  displayedColumns: string[] = [
    "select",
    "empNo",
    "fullName",
    "nationalId",
    "personalPhone",
    "personalEmail",
    "gender",
    //"age",
    //"enrollmentStatus",
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

  constructor(
    private dialog: MatDialog,
    private notificationAPI: NotificationServiceService,
    private employeeService: EmployeeService,
    private snackbar: SnackbarService,
    private router: Router,
    private privilegeService: PrivilegeService,
    private fb: FormBuilder,
    private accessControlService: AccessControlService,
    private reportService: ReportService
  ) { }


  // ngOnInit(): void {
  //   this.Form = this.fb.group({
  //     status: ["ALL"],
  //     enrollmentStatus: ["ALL"],
  //     departmentCode: ["ALL"],
  //     branchCode: ["ALL"],
  //   });
  //   this.Form.valueChanges.subscribe(() => {
  //     this.getData();
  //   });
  // }


  ngOnInit(): void {
  this.Form = this.fb.group({
    status: ["ALL"],
    enrollmentStatus: ["ALL"],
    departmentCode: ["ALL"],
    branchCode: ["ALL"],
  });
  
  // Call getData initially to load the hardcoded data
  this.getData();
  
  // Remove or comment out the valueChanges subscription since we're using hardcoded data
  // this.Form.valueChanges.subscribe(() => {
  //   this.getData();
  // });
}
  // hasPrivilege(componentName: string): boolean {
  //   return this.privilegeService.checkPrivilege(componentName);
  // }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  calculateAge(dateOfBirth: string): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
  //****************************************************************************************** */
  reqStatuses: any[] = [
    { name: "ALL" },
    { name: "PENDING" },
    { name: "APPROVED" },
    // { name: "RETURNED" },
    // { name: "REJECTED" },
    { name: "DELETED" },
    { name: "EXITED" },
  ];
  enrollmentStatusArray: any = [
    { name: "ALL" },
    { name: "CONTRACT" },
    { name: "PERMANENT" },
    { name: "CONTRACT(INTERNSHIP)" },
    { name: "ATTACHMENT" },
    { name: "SECONDMENT" },
    { name: "DIRECT SALES REPRESENTATIVE" },
  ];

  selectedStatus: string = "ALL";
  getSelectSelectedStatus() {
    this.getData();
  }
  getSelectedStatus(status: any) {
    this.Form.patchValue({
      status: status,
    });
  }

  selectedEnrollmentStatus: string = "ALL";
  // getSelectedEnrollMentStatus(enrollmentStatus: any) {
  //   this.Form.patchValue({
  //     enrollmentStatus: enrollmentStatus,
  //   });
  // }

  getSelectedEnrollMentStatus(enrollmentStatus: any) {
    this.selectedEnrollmentStatus = enrollmentStatus; // Ensure this line is present
    this.Form.patchValue({
      enrollmentStatus: enrollmentStatus,
    });
  }
  // getData() {
  //   this.loading = true;
  //   this.dataSource = new MatTableDataSource([]);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;

  //   this.selectedStatus = this.Form.value.status;
  //   this.selectedEnrollmentStatus = this.Form.value.enrollmentStatus;

  //   console.log(
  //     "this.selectedEnrollmentStatus:: ",
  //     this.selectedEnrollmentStatus
  //   );
  //   let params = {
  //     status: this.Form.value.status,
  //     enrollmentStatus: this.Form.value.enrollmentStatus,
  //     branchCode: this.Form.value.branchCode,
  //     departmentCode: this.Form.value.departmentCode,
  //   };

  //   this.employeeService
  //     .readByStatusAndEnrollment(params)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe({
  //       next: (res) => {
  //         if (res.statusCode === 302) {
  //           this.data = res.entity;
  //           console.log("Data displayed on table", this.data);

  //           this.loading = false;
  //           this.dataSource = new MatTableDataSource(this.data);
  //           this.dataSource.paginator = this.paginator;
  //           this.dataSource.sort = this.sort;
  //         } else {
  //           this.loading = false;
  //         }
  //       },
  //       error: (err) => {
  //         this.loading = false;
  //         this.notificationAPI.alertWarning("Server Error: " + err.message);
  //       },
  //       complete: () => {
  //         this.selection = new SelectionModel<any>(true, []);
  //         this.selection.clear();
  //       },
  //     });
  // }

getData() {
  this.loading = true;
  this.dataSource = new MatTableDataSource([]);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;

  this.selectedStatus = this.Form.value.status;
  this.selectedEnrollmentStatus = this.Form.value.enrollmentStatus;

  // Hardcoded response data with 5 records
  const hardcodedResponse = {
    "employees": [
      {
        "id": 1,
        "RequestID": "7z6ez9rvrt9beh8j5pb0g",
        "RequestData": {
          "id": "",
          "firstName": "Mark",
          "middleName": "Wah",
          "lastName": "Wahome",
          "dob": "1990-08-17T21:00:00.000Z",
          "postalAddress": "",
          "postalCode": "",
          "gender": "MALE",
          "personalPhone": "0708586099",
          "alternativePhone": "",
          "personalEmail": "jipheens.wahome@example.com",
          "alternativeEmail": "jipheens.wahome@example.com",
          "nextOfKins": [],
          "dependants": [],
          "employeeWorkExperiences": [],
          "kraNo": "A123456789"
        },
        "RequestTime": "2025-08-22T17:13:27.347Z",
        "AppName": "CLIENT_DATA"
      },
      {
        "id": 2,
        "RequestID": "8a7bc6def7g8h9i0j1k2l",
        "RequestData": {
          "id": "",
          "firstName": "Sa",
          "middleName": "Mut",
          "lastName": "Kamau",
          "dob": "1985-03-12T21:00:00.000Z",
          "postalAddress": "",
          "postalCode": "",
          "gender": "FEMALE",
          "personalPhone": "0712345678",
          "alternativePhone": "",
          "personalEmail": "sarah.kamau@example.com",
          "alternativeEmail": "sarah.kamau@example.com",
          "nextOfKins": [],
          "dependants": [],
          "employeeWorkExperiences": [],
          "kraNo": "B987654321"
        },
        "RequestTime": "2025-08-22T18:14:28.348Z",
        "AppName": "CLIENT_DATA"
      },
      {
        "id": 3,
        "RequestID": "3m4n5o6p7q8r9s0t1u2v",
        "RequestData": {
          "id": "",
          "firstName": "Dave",
          "middleName": "Kip",
          "lastName": "Korir",
          "dob": "1992-11-25T21:00:00.000Z",
          "postalAddress": "",
          "postalCode": "",
          "gender": "MALE",
          "personalPhone": "0723456789",
          "alternativePhone": "",
          "personalEmail": "david.korir@example.com",
          "alternativeEmail": "david.korir@example.com",
          "nextOfKins": [],
          "dependants": [],
          "employeeWorkExperiences": [],
          "kraNo": "C456789123"
        },
        "RequestTime": "2025-08-22T19:15:29.349Z",
        "AppName": "CLIENT_DATA"
      },
      {
        "id": 4,
        "RequestID": "4w5x6y7z8a9b0c1d2e3f",
        "RequestData": {
          "id": "",
          "firstName": "Gate",
          "middleName": "Wan",
          "lastName": "Njoroge",
          "dob": "1988-07-08T21:00:00.000Z",
          "postalAddress": "",
          "postalCode": "",
          "gender": "FEMALE",
          "personalPhone": "0734567890",
          "alternativePhone": "",
          "personalEmail": "grace.njoroge@example.com",
          "alternativeEmail": "grace.njoroge@example.com",
          "nextOfKins": [],
          "dependants": [],
          "employeeWorkExperiences": [],
          "kraNo": "D789123456"
        },
        "RequestTime": "2025-08-22T20:16:30.350Z",
        "AppName": "CLIENT_DATA"
      },
      {
        "id": 5,
        "RequestID": "5g6h7i8j9k0l1m2n3o4p",
        "RequestData": {
          "id": "",
          "firstName": "Mike",
          "middleName": "Odh",
          "lastName": "Ochieng",
          "dob": "1995-02-14T21:00:00.000Z",
          "postalAddress": "",
          "postalCode": "",
          "gender": "MALE",
          "personalPhone": "0745678901",
          "alternativePhone": "",
          "personalEmail": "michael.ochieng@example.com",
          "alternativeEmail": "michael.ochieng@example.com",
          "nextOfKins": [],
          "dependants": [],
          "employeeWorkExperiences": [],
          "kraNo": "E321654987"
        },
        "RequestTime": "2025-08-22T21:17:31.351Z",
        "AppName": "CLIENT_DATA"
      }
    ]
  };

  // Map the data to match your table structure
  this.data = hardcodedResponse.employees.map(employee => ({
    id: employee.id,
    empNo: `CSK-00${280 + employee.id}`, // Generate unique employee numbers
    fullName: `${employee.RequestData.firstName} ${employee.RequestData.middleName}`.trim(),    nationalId: employee.RequestData.kraNo,
    personalPhone: employee.RequestData.personalPhone,
    personalEmail: employee.RequestData.personalEmail,
    gender: employee.RequestData.gender,
    age: this.calculateAge(employee.RequestData.dob),
    enrollmentStatus: employee.id % 2 === 0 ? 'PERMANENT' : 'CONTRACT',
    status: employee.id % 3 === 0 ? 'PENDING' : 'APPROVED',
    pensionable: employee.id % 2 === 0
  }));

  console.log("Data displayed on table", this.data);

  this.loading = false;
  this.dataSource = new MatTableDataSource(this.data);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;

  this.selection = new SelectionModel<any>(true, []);
  this.selection.clear();
}
  refresh() {
    this.getData();
  }

  mngRecord(action: any, record?: any) {
    console.log("this.action:; ", action);
    console.log("this.record:; ", record);
    if (action === "CreatePortal") {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.disableClose = true;
      dialogConfig.width = "800px";
      dialogConfig.data = {
        action: action,
        record: record,
      };
      const dialogRef = this.dialog.open(
        CreateEmployeePortalAccountComponent,
        dialogConfig
      );
      dialogRef.afterClosed().subscribe((result) => {
        console.log("result:::", result);

        this.getData();
      });
    } else {
      let route = "/erp-hr/employees/manage-employees";
      this.router.navigate([route], {
        queryParams: {
          requestCode: record.empNo,
          requestId: record.id,
          action: action,
        },
      });
    }
  }

  deleteRecord(id: number) {
    let params = { id: id };
    Swal.fire({
      title: "Are you sure?",
      text: "THIS RECORD WILL BE DELETED PERMANENTLY!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;
        this.employeeService
          .delete(params)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              if (res.statusCode == 200) {
                this.getData();
                this.loading = false;
                this.notificationAPI.alertSuccess(
                  "RECORD DELETED SUCCESSFULLY"
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

  restoreDeletedRecord(id: number) {
    let params = { id: id };
    Swal.fire({
      title: "Are you sure?",
      text: "THIS RECORD WILL BE RESTORED!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#2ecc71",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, restore it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;
        this.employeeService
          .restore(params)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              if (res.statusCode == 200) {
                this.getData();
                this.loading = false;
                this.notificationAPI.alertSuccess(
                  "RECORD RESTORED SUCCESSFULLY"
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

  // restoreExitedEmployee(empPfNo: number) {
  //   let params = { empPfNo: empPfNo };
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "THIS EMPLOYEE WILL BE RESTORED!",
  //     icon: "info",
  //     showCancelButton: true,
  //     confirmButtonColor: "#2ecc71",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, restore it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.loading = true;
  //       this.employeeService
  //         .restoreEmployee(params)
  //         .pipe(takeUntil(this.destroy$))
  //         .subscribe({
  //           next: (res) => {
  //             if (res.statusCode == 200) {
  //               this.getData();
  //               this.loading = false;
  //               this.notificationAPI.alertSuccess(
  //                 "RECORD RESTORED SUCCESSFULLY"
  //               );
  //             }
  //           },
  //           error: (err) => {
  //             this.loading = false;
  //             this.notificationAPI.alertSuccess("Server Error: " + err.message);
  //           },
  //           complete: () => { },
  //         });
  //     }
  //   });
  // }



  input: any;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.input = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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
          this.loading = true;
          const verifierRemarks = result.value;

          const processedRows = this.selectedRows.map((element) => {
            return {
              id: element.id,
              status: status,
              verifierRemarks: verifierRemarks,
            };
          });

          console.log("LOG: ", processedRows);

          this.employeeService
            .validateBulkEmployees(processedRows)
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
                this.loading = false;
              },
              complete: () => {
                this.getData();
                this.loading = false;
              },
            }),
            Subscription;
        } else {
          this.selection = new SelectionModel<any>(true, []);
          this.selection.clear();
          this.loading = false;
        }
      });
    }
  }

  enrollToPension(): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to enroll the selected employees to pension.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, enroll them!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;

        const processedRows = this.selectedRows.map((element) => {
          return {
            id: element.id,
            status: "ENROLL PENSION",
            verifierRemarks: "ENROLLED",
          };
        });

        console.log("LOG: ", processedRows);

        this.employeeService
          .validateBulkPensionEnrollment(processedRows)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              console.log("res: ", res);
              if (res.statusCode == 200) {
                this.snackbar.showNotification("snackbar-success", res.message);

                this.selection = new SelectionModel<any>(true, []);
                this.selection.clear();
              } else {
                this.snackbar.showNotification("snackbar-danger", res.message);
              }
            },
            error: (err) => {
              this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => {
              this.getData();
              this.loading = false;
            },
          }),
          Subscription;
      } else {
        this.selection = new SelectionModel<any>(true, []);
        this.selection.clear();
        this.loading = false;
      }
    });
  }
  bulkUpdateUserManagement() {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to update user management details for the selected users.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;


        console.log("this.selection: ", this.selection.selected);

        this.employeeService
          .updateBulkEmployeesToUserManagement(this.selection.selected)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              console.log("res: ", res);
              if (res.statusCode == 200) {
                this.snackbar.showNotification("snackbar-success", res.message);

                this.selection = new SelectionModel<any>(true, []);
                this.selection.clear();
              } else {
                this.snackbar.showNotification("snackbar-danger", res.message);
              }
            },
            error: (err) => {
              this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => {
              this.getData();
              this.loading = false;
            },
          }),
          Subscription;
      } else {
        this.selection = new SelectionModel<any>(true, []);
        this.selection.clear();
        this.loading = false;
      }
    });
  }


  restoreEmployees(status: any) {
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
          this.loading = true;
          const verifierRemarks = result.value;

          const processedRows = this.selectedRows.map((element) => {
            return {
              empPfNo: element.empNo
            };
          });

          console.log("LOG: ", processedRows);

          this.employeeService
            .restore(processedRows)
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
                this.snackbar.showNotification("snackbar-danger", err.error.message?? "An error occurred");
                this.loading = false;
              },
              complete: () => {
                this.getData();
                this.loading = false;
              },
            }),
            Subscription;
        } else {
          this.selection = new SelectionModel<any>(true, []);
          this.selection.clear();
          this.loading = false;
        }
      });
    }
  }
  //*************************************************************************************************************** */
  //LOOKUPS

  branchLookup(type: any) {
    if (type === "Search") {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.disableClose = true;
      dialogConfig.width = "800px";
      dialogConfig.data = {
        action: "SingleBranch",
      };
      const dialogRef = this.dialog.open(BranchesLookupComponent, dialogConfig);
      dialogRef.afterClosed().subscribe((res) => {
        if (res && res.data && res.data.length > 0) {
          this.Form.patchValue({
            branchCode: res.data[0].branchCode,
          });
        }
      });
    } else if (type === "ALL") {
      this.Form.patchValue({
        branchCode: "ALL",
      });

      this.getData();
    }
  }
  departmentLookup(type: any) {
    if (type === "Search") {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.disableClose = true;
      dialogConfig.width = "800px";
      dialogConfig.data = {
        action: "SingleDepartment",
      };
      const dialogRef = this.dialog.open(
        DepartmentsLookupComponent,
        dialogConfig
      );
      dialogRef.afterClosed().subscribe((res) => {
        if (res && res.data && res.data.length > 0) {
          this.Form.patchValue({
            departmentCode: res.data[0].departmentCode,
          });
        }
      });
    } else if (type === "ALL") {
      this.Form.patchValue({
        departmentCode: "ALL",
      });
      this.getData();
    }
  }

  downloadingEmployeeDetails: boolean = false;
  subscription: Subscription;
  downloadEmployeesDetails() {
    this.downloadingEmployeeDetails = true;

    this.subscription = this.reportService
      .downloadEmployeesDetails()
      .subscribe(
        (response) => {
          const a = document.createElement("a");
          document.body.appendChild(a);
          const blob: any = new Blob([response.data], {
            type: "octet/stream",
          });
          const url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = "Employee Details.xlsx";
          a.click();
          window.URL.revokeObjectURL(url);

          this.downloadingEmployeeDetails = false;

          this.snackbar.showNotification(
            "snackbar-success",
            "Report generated successfully"
          );
        },
        (err) => {
          this.downloadingEmployeeDetails = false;

          this.snackbar.showNotification("snackbar-danger", err.message);
        }
      );

  }
  //


}

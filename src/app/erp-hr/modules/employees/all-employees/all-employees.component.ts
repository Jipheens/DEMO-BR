import { SelectionModel } from "@angular/cdk/collections";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Subject, takeUntil, Subscription, debounceTime, distinctUntilChanged } from "rxjs";
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
import { MockDataService } from "../mock-data.service";

@Component({
  selector: "app-all-employees",
  templateUrl: "./all-employees.component.html",
  styleUrls: ["./all-employees.component.sass"],
})
export class AllEmployeesComponent implements OnInit {
  displayedColumns: string[] = [
    "select",
    "clientId",
    "fullName",
    "nationalId",
    "clientType",
    "personalEmail",
    "gender",
    "age",
    "status",
    "action",
  ];

  loading: boolean = false;
  data: any[];
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
    private reportService: ReportService,
    private mockDataService: MockDataService,
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
    clientIdFilter: [""]
  });
  
  // Call getData initially to load the hardcoded data
  this.getData();
  
      this.Form.get('clientIdFilter')?.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(clientId => {
        this.applyClientIdFilter(clientId);
      });
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

  calculateAge(dob: string): number {
    const today = new Date();
    const birthDate = new Date(dob);
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

  // getData() {
  //   this.loading = true;
  //   this.dataSource = new MatTableDataSource([]);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;

  //   this.selectedStatus = this.Form.value.status;

  //   console.log(
  //     "this.selectedEnrollmentStatus:: ",
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
  //         if (res.ResponseCode === 302) {
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
      const formattedRequest = {
      RequestID: this.generateRandomId(),
      RequestData: {
        SearchID: "clientId",
        Filter: `ClientTypeID = 'I'`,
        WhereStmt: `clientId like '%%'`,
        SortBy: "clientId asc",
        PrevOrNext: "1",
        Reference: "",
        LoggedInUserId: "jipheens",
        ModuleID: 1000,
        OurBranchID: "002"
      },
      RequestTime: new Date().toISOString(),
      AppName: "CLIENT_DATA"
    };
    this.employeeService.searchClients(formattedRequest).subscribe({
    next: (res) => {
    console.log("this is the res: ", res);
    let results = res?.Details?.SearchResults;
    if (!Array.isArray(results)) {
    results = results ? [results] : [];
  }
  if (results.length === 0) {
    this.snackbar.showNotification("snackbar-info", "Client not found or does not exist");
    this.data = [];
    this.dataSource = new MatTableDataSource([]);
  } else {
    this.data = results.map(item => ({
      clientId: item.ClientID || item.clientId || '',
      fullName: item.Name || item.fullName || '',
      nationalId: item.IDNumber || item.IDNumber || '',
      clientType: item.ClientType || item.clientType || '',
      personalEmail: item.PersonalEmail || item.personalEmail || '',
      gender: item.Gender || item.gender || '',
      dob: item.DOB || item.dob || '',
      status: item.Status || item.status || '',
      age: item.DOB ? this.calculateAge(item.DOB) : (item.dob ? this.calculateAge(item.dob) : ''),
      ...item
    }));
    console.log("Table data after search:", this.data);
    this.dataSource = new MatTableDataSource(this.data);
  }
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.loading = false;
    },
    error: (err) => {
      this.snackbar.showNotification("snackbar-danger", err.message);
      this.loading = false;
    }
  });
}

  applyClientIdFilter(clientId: string) {
    if (!clientId || clientId.trim() === '') {
      this.dataSource.filter = '';
      return;
    }
    
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.clientId.toLowerCase().includes(filter.toLowerCase());
    };
    
    this.dataSource.filter = clientId.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clientIdExists(clientId: string): boolean {
    return this.data.some(item => item.clientId === clientId);
  }


searchClient() {
  const clientId = this.Form.get('clientIdFilter')?.value?.trim();
  if (clientId) {
    const formattedRequest = {
      RequestID: this.generateRandomId(),
      RequestData: {
        SearchID: "clientId",
        Filter: `ClientTypeID = 'I'`,
        WhereStmt: `clientId like '%${clientId}%'`,
        SortBy: "clientId asc",
        PrevOrNext: "1",
        Reference: "",
        LoggedInUserId: "jipheens",
        ModuleID: 1000,
        OurBranchID: "002"
      },
      RequestTime: new Date().toISOString(),
      AppName: "CLIENT_DATA"
    };
    console.log("Formatted Request: ", formattedRequest);
    this.loading = true;
    this.employeeService.searchClients(formattedRequest).subscribe({
    next: (res) => {
    console.log("this is the res: ", res);
    let results = res?.Details?.SearchResults;
    if (!Array.isArray(results)) {
    results = results ? [results] : [];
  }
  if (results.length === 0) {
    this.snackbar.showNotification("snackbar-info", "Client not found or does not exist");
    this.data = [];
    this.dataSource = new MatTableDataSource([]);
  } else {
    this.data = results.map(item => ({
      clientId: item.ClientID || item.clientId || '',
      fullName: item.Name || item.fullName || '',
      nationalId: item.IDNumber || item.IDNumber || '',
      clientType: item.ClientType || item.clientType || '',
      personalEmail: item.PersonalEmail || item.personalEmail || '',
      gender: item.Gender || item.gender || '',
      dob: item.DOB || item.dob || '',
      status: item.Status || item.status || '',
      age: item.DOB ? this.calculateAge(item.DOB) : (item.dob ? this.calculateAge(item.dob) : ''),
      ...item
    }));
    console.log("Table data after search:", this.data);
    this.dataSource = new MatTableDataSource(this.data);
  }
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.loading = false;
},
      error: (err) => {
        this.snackbar.showNotification("snackbar-danger", err.message || "Search failed");
        this.data = [];
        this.dataSource = new MatTableDataSource([]);
        this.loading = false;
      }
    });
  }
}
generateRandomId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

  quickAddClient() {
    const clientId = this.Form.get('clientIdFilter')?.value;
    if (clientId && clientId.trim() !== '') {
      if (this.clientIdExists(clientId)) {
        this.snackbar.showNotification("snackbar-warning", "Client ID already exists. Use edit instead.");
      } else {
        this.mngRecord('Add');
      }
    } else {
      this.snackbar.showNotification("snackbar-warning", "Please enter a Client ID first.");
    }
  }

  refresh() {
    this.Form.get('clientIdFilter')?.setValue('');
    this.Form.get('status')?.setValue('ALL');
    this.selectedStatus = 'ALL';
    this.getData();
  }

//  mngRecord(action: any, record?: any) {
//     console.log("this.action:; ", action);
//     console.log("this.record:; ", record);
//       let route = "/erp-hr/employees/manage-employees";
//       this.router.navigate([route], {
//         queryParams: {
//           requestCode: record.clientId,
//           requestId: record.id,
//           action: action,
//         },
//       });
    
//   }
  mngRecord(action: any, record?: any) {
    console.log("Action:", action);
    console.log("Record:", record);
    
    let route = "/erp-hr/employees/manage-employees";
    let queryParams: any = { action: action };
    
    if (record && record.clientId) {
      queryParams.requestCode = record.clientId;
      queryParams.requestId = record.id || '';
      queryParams.ClientTypeID = record.ClientTypeID || '';
    } else if (action === 'Add') {
      const typedClientId = this.Form.get('clientIdFilter')?.value;
      if (typedClientId && typedClientId.trim() !== '') {
        queryParams.requestCode = typedClientId;
        queryParams.prefillClientId = true; 
      }
    }
    
    this.router.navigate([route], { queryParams: queryParams });
  }

  // deleteRecord(id: number) {
  //   let params = { id: id };
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "THIS RECORD WILL BE DELETED PERMANENTLY!!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.loading = true;
  //       this.employeeService
  //         .delete(params)
  //         .pipe(takeUntil(this.destroy$))
  //         .subscribe({
  //           next: (res) => {
  //             if (res.statusCode == 200) {
  //               this.getData();
  //               this.loading = false;
  //               this.notificationAPI.alertSuccess(
  //                 "RECORD DELETED SUCCESSFULLY"
  //               );
  //             } else {
  //               this.getData();
  //               this.loading = false;
  //               this.notificationAPI.alertWarning(res.message);
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

deleteRecordByClientId(clientId: string) {
  Swal.fire({
    title: "Are you sure?",
    text: "THIS RECORD WILL BE DELETED PERMANENTLY!!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.loading = true;

      this.mockDataService.deleteByClientId(clientId).subscribe({
        next: (res) => {
          this.snackbar.showNotification("snackbar-success", res.message);
          this.getData();
          this.loading = false;
        },
        error: (err) => {
          this.snackbar.showNotification("snackbar-danger", err.message);
          this.loading = false;
        }
      });
    }
  });
}


  // input: any;
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.input = filterValue;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
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

}

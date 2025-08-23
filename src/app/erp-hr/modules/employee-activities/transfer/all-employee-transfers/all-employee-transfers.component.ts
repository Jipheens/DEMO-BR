import { SelectionModel } from "@angular/cdk/collections";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Subject, takeUntil, Subscription } from "rxjs";
import { NotificationServiceService } from "src/@core/Models/Notification/notification-service.service";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
import Swal from "sweetalert2";
import { EmployeeTransferService } from "src/app/erp-hr/data/employee-activities/employee-transfers.service";
import { ManageEmployeeTransfersComponent } from "../manage-employee-transfers/manage-employee-transfers.component";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EmployeeService } from "src/app/erp-hr/data/employee-services/employee-management.service";
import { HttpParams } from "@angular/common/http";
import { ReportService } from "src/app/erp-hr/data/payroll-services/report.service";
import * as XLSX from 'xlsx';
import { AccessControlService } from "src/app/erp-hr/data/_AccessControlService.service";

@Component({
  selector: "app-all-employee-transfers",
  templateUrl: "./all-employee-transfers.component.html",
  styleUrls: ["./all-employee-transfers.component.sass"],
})
export class AllEmployeeTransfersComponent implements OnInit {
  displayedColumns: string[] = [
    "select",
    "empNo",
    "empName",
    // "currentDepartmentFk",
    "currentDepartmentName",
    // "newDepartmentFk",
    "newDepartmentName",

    //  "currentBranchFk",
    "currentBranchName",
    // "newBranchFk",
    "newBranchName",
    "currentRole",
    "newRole",
    "supervisorApproval",
    "hrApproval",
    "postedTime",
    "status",
    ////"verifiedFlag",
    //"deletedFlag",
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
  empPF: any;

  constructor(
    private dialog: MatDialog,
    private notificationAPI: NotificationServiceService,
    private employeeTransferService: EmployeeTransferService,
    private snackbar: SnackbarService,
    private fb: FormBuilder,
    private accessControlService: AccessControlService,
    private employeeService: EmployeeService,
    private reportAPI: ReportService,
  ) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
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

  //****************************************************************************************** */
  reqStatuses: any[] = [
    { name: "ALL" },
    { name: "PENDING" },
    { name: "APPROVED" },
    { name: "RETURNED" },
    { name: "REJECTED" },
    // { name: "FILTERBYMONTH" },
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
      status: this.Form.value.status,
    };
    this.employeeTransferService
      .getTransferByEmpName(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.statusCode === 302) {
            this.data = res.entity;
            console.log("Employee Transfers displayed on table", this.data);

            this.loading = false;
            this.dataSource = new MatTableDataSource(this.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          } else {
            this.loading = false;
            this.notificationAPI.alertWarning(res.message);
          }
        },
        error: (err) => {
          this.loading = false;
          this.notificationAPI.alertWarning("Server Error: " + err.message);
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
      ManageEmployeeTransfersComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((result) => {
      console.log("result:::", result);

      this.getData();
    });
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
        this.employeeTransferService
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


  filterByDateAndMonth() {
    Swal.fire({
      title: "Select Year and Month",
      html: `
      <input type="number" id="year" class="swal2-input" placeholder="Enter year" min="1900" max="2100">
      <select id="month" class="swal2-input">
        <option value="">Select month</option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    `,
      preConfirm: () => {
        const year = (<HTMLInputElement>document.getElementById("year")).value;
        const month = (<HTMLSelectElement>document.getElementById("month")).value;

        if (!year || !month) {
          Swal.showValidationMessage("Both year and month are required");
          return;
        }

        return { year, month };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { year, month } = result.value;

        const filteredData = this.data.filter((item) => {
          const date = new Date(item.posted_time);
          return (
            date.getFullYear() === parseInt(year) &&
            (date.getMonth() + 1).toString().padStart(2, '0') === month
          );
        });


        this.dataSource = new MatTableDataSource(filteredData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log("Filtered data for", filteredData)

        this.notificationAPI.alertSuccess(`Filtered data for ${month}/${year}`);
      }
    });
  }




  // hasAccess: boolean = true;
  // processMultipleRows(status: any) {
  //   let privilege = "Validate Expenses";

  //   // this.hasAccess = this.accessControlService.hasPrivilege("FinanceModule", [
  //   //   privilege,
  //   // ]);

  //   if (this.hasAccess) {
  //     Swal.fire({
  //   title: '<span style="font-size: 20px;">Enter Verifier Remarks</span>',
  //   input: "textarea",
  //   inputPlaceholder: "Type your remarks here...",
  //   confirmButtonText: "Submit",
  //   showCancelButton: true,
  //   cancelButtonText: "Cancel",
  //   icon: "info",

  //   inputValidator: (value) => {
  //         if (!value) {
  //           return "Please enter your remarks";
  //         }
  //       },
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         const verifierRemarks = result.value;

  //         const processedRows = this.selectedRows.map((element) => {
  //           return {
  //             id: element.id,
  //             status: status,
  //             verifierRemarks: verifierRemarks,
  //           };
  //         });

  //         console.log("LOG: ", processedRows);

  //         this.employeeTransferService
  //           .verify(processedRows)
  //           .pipe(takeUntil(this.destroy$))
  //           .subscribe({
  //             next: (res) => {
  //               console.log("res: ", res);
  //               if (res.statusCode == 201 || 200 || 302) {
  //                 this.snackbar.showNotification(
  //                   "snackbar-success",
  //                   res.message
  //                 );

  //                 this.selection = new SelectionModel<any>(true, []);
  //                 this.selection.clear();
  //               } else {
  //                 this.snackbar.showNotification(
  //                   "snackbar-danger",
  //                   res.message
  //                 );
  //               }
  //             },
  //             error: (err) => {
  //               this.snackbar.showNotification("snackbar-danger", err.message);
  //             },
  //             complete: () => {
  //               this.getData();
  //             },
  //           }),
  //           Subscription;
  //       } else {
  //         this.selection = new SelectionModel<any>(true, []);
  //         this.selection.clear();
  //       }
  //     });
  //   }
  // }


  hasAccess: boolean = false;
  processMultipleRows(status: any) {
    let privilege = "Approve Employee Transfer";

    this.hasAccess = this.accessControlService.hasPrivilege("HumanResourceModule", [
      privilege,
    ]);

    if (this.hasAccess) {

      Swal.fire({
        title: '<span style="font-size: 20px;">Enter Details Below: </span>',
        html:
          '<select id="approverSelect" class="swal2-select">' +
          '<option value="" disabled selected>Select Approver</option>' +
          '<option value="Supervisor Transfer Approver">Supervisor Transfer Approver</option>' +
          '<option value="Human Resource Transfer Approver">Human Resource Transfer Approver</option>' +
          '</select>' +
          '<textarea id="remarks" class="swal2-textarea" placeholder="Type your remarks here..." style="margin-top: 15px;"></textarea>',
        icon: "info",
        confirmButtonText: "Submit",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        preConfirm: () => {
          const approverSelect = Swal.getPopup().querySelector('#approverSelect') as HTMLSelectElement;
          const approver = approverSelect.value;

          const remarksTextarea = Swal.getPopup().querySelector('#remarks') as HTMLTextAreaElement;
          const verifierRemarks = remarksTextarea.value;

          if (!approver) {
            Swal.showValidationMessage('Please select an approver');
          }
          if (!verifierRemarks) {
            Swal.showValidationMessage('Please enter your remarks');
          }

          return { approver, verifierRemarks };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const { approver, verifierRemarks } = result.value;
          console.log('Selected rows:', this.selectedRows);
          const processedRows = this.selectedRows.map((element) => {
            return {
              id: element.id,
              status: status,
              verifierRemarks: verifierRemarks,
            };
          });

          let params = { approver: approver }
          this.employeeTransferService
            .verify(params, processedRows)
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
                this.selection = new SelectionModel<any>(true, []);
                this.selection.clear();
              },
              complete: () => {
                this.getData();
              },
            });
        } else {
          this.selection = new SelectionModel<any>(true, []);
          this.selection.clear();
        }
      });

    }
  }

  transferCriteria = [
    { label: "Branch Transfers", value: "branch" },
    { label: "Department Transfers", value: "department" },
    { label: "Cost Center Transfers", value: "cost_center" },
    { label: "Reporting To Transfers", value: "reporting_to" },
    { label: "Job Role Transfers", value: "role" },
    { label: "All Transfers", value: "all" }
  ];

  selectedTransferCriteriaLabel: string;
  selectedTransferCriteria: string;
  selectedNssfType: string;
  year: number;
  month: number;
  btnText: string = "Download";


  async onDownloadTransferReports() {
    const { value: formValues } = await Swal.fire({
      title: "<h5><strong>Select Report Criteria And Date Range</strong></h5>",
      html: `
<select id="transferCriteria" 
    style="width: 80%; 
           display: block; 
           box-sizing: border-box; 
           padding: 10px 12px; 
           margin-left: 50px; /* pushes it from the left */
           border: 2px solid #e2e8f0; 
           border-radius: 6px; 
           font-size: 0.9rem; 
           background: white; 
           transition: all 0.2s ease; 
           appearance: none; 
           background-image: url('data:image/svg+xml;utf8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;12&quot; height=&quot;8&quot; viewBox=&quot;0 0 12 8&quot;><path d=&quot;M1 1l5 5 5-5&quot; stroke=&quot;%23666&quot; stroke-width=&quot;2&quot; fill=&quot;none&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/></svg>');
           background-repeat: no-repeat; 
           background-position: right 10px center; 
           padding-right: 30px;"
    onfocus="this.style.borderColor='#3b82f6'; this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)'"
    onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
  ${this.transferCriteria
          .map(term => `<option value="${term.value}">${term.label}</option>`)
          .join("")}
</select>

<div style="display: flex;  margin-top: 16px;">
  <div style="flex: 1; min-width: 0;">
    <label for="fromDate" style="display: block; text-align: left; font-weight: 600; font-size: 0.85rem; color: #374151; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; margin-left: 50px;">From Date:</label>
    <input type="date" id="fromDate" 
        style="width: 80%; height: 40px; padding: 8px 10px; font-size: 0.85rem; border: 2px solid #e2e8f0; border-radius: 6px; background: white; transition: all 0.2s ease; box-sizing: border-box;margin-left: 50px;"
        onfocus="this.style.borderColor='#3b82f6'; this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)'"
        onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
  </div>
  
  <div style="flex: 1; min-width: 0;">
    <label for="toDate" style="display: block; text-align: left; font-weight: 600; font-size: 0.85rem; color: #374151; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; margin-left: 50px;">To Date:</label>
    <input type="date" id="toDate"
        style="width: 80%; height: 40px; padding: 8px 10px; font-size: 0.85rem; border: 2px solid #e2e8f0; border-radius: 6px; background: white; transition: all 0.2s ease; box-sizing: border-box;"
        onfocus="this.style.borderColor='#3b82f6'; this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)'"
        onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
  </div>
</div>
`,
      focusConfirm: false,
      icon: "info",
      preConfirm: () => {
        const transferCriteria = (document.getElementById("transferCriteria") as HTMLSelectElement).value;
        const fromDate = (document.getElementById("fromDate") as HTMLInputElement).value;
        const toDate = (document.getElementById("toDate") as HTMLInputElement).value;

        if (!fromDate || !toDate) {
          Swal.showValidationMessage("Both From Date and To Date are required");
          return;
        }

        if (new Date(fromDate) > new Date(toDate)) {
          Swal.showValidationMessage("From Date cannot be after To Date");
          return;
        }

        return {
          transferCriteria,
          fromDate,
          toDate
        };
      },
    });

    if (formValues) {
      this.selectedTransferCriteria = formValues.transferCriteria;

      const selectedOption = this.transferCriteria.find(
        t => t.value === this.selectedTransferCriteria
      );
      this.selectedTransferCriteriaLabel = selectedOption?.label ?? this.selectedTransferCriteria;

      this.downloadTransferReport(formValues.fromDate, formValues.toDate);
    }
  }

  downloadTransferReport(fromDate: string, toDate: string) {
    const transferCriteriaValue = this.selectedTransferCriteria;

    const formatDate = (dateStr: string) => {
      const date = new Date(dateStr);
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
      return date.toLocaleDateString('en-GB', options).replace(/ /g, '_');
    };

    const fromDateFormatted = formatDate(fromDate);
    const toDateFormatted = formatDate(toDate);

    const filename = `TRANSFER_REPORT_FOR_${this.selectedTransferCriteriaLabel}_FROM_${fromDateFormatted}_TO_${toDateFormatted}`;

    if (!this.selectedTransferCriteria) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "You must provide Transfer Criteria for the report to be generated!",
      });
    } else {
      let params = new HttpParams()
        .set("transferCriteria", transferCriteriaValue)
        .set("fromDate", fromDate)
        .set("toDate", toDate);

      this.loading = true;

      this.reportAPI.transferReports(params).subscribe((res: any) => {
        try {
          // Try to decode response (if it's ArrayBuffer or JSON string)
          const text = new TextDecoder().decode(res);
          const json = JSON.parse(text);

          if (json.statusCode === 404) {
            Swal.fire({
              icon: "warning",
              title: "Warning",
              text: json.message,
            });
            this.loading = false;
            return;
          }

          // ✅ Apply date range filtering on parsed JSON data
          const filteredData = this.filterByDateRange(json, fromDate, toDate);

          // If you want to save filtered data as Excel:
          const worksheet = XLSX.utils.json_to_sheet(filteredData);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Transfers');
          XLSX.writeFile(workbook, filename + ".xlsx");

        } catch (e) {
          let extension = "xlsx";
          this.saveToFileSystem(filename, res, extension);
        }

        this.loading = false;
      });
    }
  }


  private saveToFileSystem(
    filename: string,
    response: any,
    extension: string
  ) {
    const blob = new Blob([response], { type: "application/vnd.ms-excel" });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.download = filename + "." + extension;
    anchor.href = url;
    anchor.click();
  }

  filterByDateRange(data: any[], fromDate: string, toDate: string) {
    const filteredData = data.filter((item) => {
      const postedDate = new Date(item.posted_time);
      const from = new Date(fromDate);
      const to = new Date(toDate);

      to.setHours(23, 59, 59, 999);

      return postedDate >= from && postedDate <= to;
    });

    return filteredData;
  }
}

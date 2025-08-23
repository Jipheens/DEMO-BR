import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { NHIFConfigurationService } from 'src/app/erp-hr/data/deductions-services/nhifconfiguration.service';
import { ManageBranchesComponent } from 'src/app/erp-hr/modules/configurations/branches/dialogs/manage-branches/manage-branches.component';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-nhif-lookup',
  templateUrl: './nhif-lookup.component.html',
  styleUrls: ['./nhif-lookup.component.sass']
})
export class NhifLookupComponent implements OnInit {

  displayedColumns: string[] = [
    "select",
    "maxThreshold",
    "nhifDeduction",
    "postedTime",
  ];

  dataSource!: MatTableDataSource<any>;
  // @ViewChild("paginator") paginator: MatPaginator;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  contextMenu: MatMenuTrigger;

  selection = new SelectionModel<any>(false, []);

  currencyDetails: any;
  selectedRows: any[] = [];
  atleastOneSelected: boolean = false;

  dataSourceFilteredList: any[] = [];
  currenciesArray: any[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  downloadLoading: boolean = false;

  isLoading: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<ManageBranchesComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private nhifConfigurationService: NHIFConfigurationService,
  ) {}

  ngOnInit(): void {
    if (this.data.action === "SingleBranch") {
      this.selection = new SelectionModel<any>(false, []);
    } else {
      this.selection = new SelectionModel<any>(true, []);
    }

    this.getData();
  }
  ngAfterViewInit() {
    console.log("Finally: ", this.dataSourceFilteredList);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  filter() {
    //let storeId = [1, 2, 3];
    this.dataSource.data.forEach((element) => {
      this.currenciesArray.forEach((item) => {
        if (item === element.id) {
          // this.dataSourceFilteredList.push(this.dataSource.data.indexOf(element));
          this.selection.select(element);
        }
      });
    });

    console.log("dataSourceFilteredList ", this.dataSourceFilteredList);
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
  //******************************************************************************************************
  //Select expense

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? "deselect" : "select"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.position + 1
    }`;
  }

  expSelected() {
    this.atleastOneSelected = true;
    this.selectedRows = this.selection.selected;

    console.log("this.selectedRows: ", this.selectedRows);
  }
  proceed() {
    this.dialogRef.close({ event: "close", data: this.selectedRows });

    //   console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close({ event: "close", data: this.selectedRows });
  }
  public confirmAdd(): void {}

  //  **************************************************************************
  currentPage = 0;
  totalPages = 0;
  totalItems = 0;
  pageSize = 5;
  pageSizeOptions = [2, 5, 10, 20, 30, 40, 50, 100];

  getData(page?: number, size?: number) {
    this.isLoading = true;
    this.dataSource = new MatTableDataSource([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    let params = {
      page: page,
      size: size,
      status: "APPROVED",
    };

    this.nhifConfigurationService
      .readByStatus(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          console.log("this.res :", res);
          if (res.statusCode === 302) {
            this.data = res;
            this.isLoading = false;
            this.dataSource = new MatTableDataSource(this.data.entity);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

            this.totalItems = this.data.totalItems;
            this.currentPage = this.data.currentPage;
            this.totalPages = this.data.totalPages;

            console.log("this.data :", this.data);
          } else {
            this.snackbar.showNotification(
              "snackbar-danger",
              res.message
            );
          }
        },
        error: (err) => {
          this.snackbar.showNotification("snackbar-danger", err.message);
          this.isLoading = false;
        },
        complete: () => {},
      });
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getData(this.currentPage, this.pageSize);
  }
}

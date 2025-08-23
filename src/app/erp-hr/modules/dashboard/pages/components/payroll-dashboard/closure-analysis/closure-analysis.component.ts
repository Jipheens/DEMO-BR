import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MonthsService } from 'src/@core/Models/months/months.service';
import { NotificationServiceService } from 'src/@core/Models/Notification/notification-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayrollAnalysisService } from 'src/app/erp-hr/data/payroll-services/payroll-analysis.service';
import { PayrollCircleService } from 'src/app/erp-hr/data/payroll-services/payroll-circle.service';


@Component({
  selector: 'app-closure-analysis',
  templateUrl: './closure-analysis.component.html',
  styleUrls: ['./closure-analysis.component.scss']
})
export class ClosureAnalysisComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    "category",
    "prevPayroll",
    "currPayroll",
    "turnOverRate"
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  loading: boolean;
  data: any;
  monthsArray: any[];
  yearsArray: any[];
  month: any;
  currentYear: any;
  currentMonth: any;
  numRows: number;
  departmentArray = new Array();
  departmentId = 0;
  jobGroupFk = 0;
  jobGroupArray = new Array();
  formData: FormGroup;
  dataResp: any;
  fmData: any;
  currPeriodY = new Date().getFullYear();
  currPeriodM = new Date(Date.UTC(0, new Date().getMonth())).toLocaleString('en-US', { month: 'long' }).toUpperCase();
  currIsFinal = 'N'
  prevPeriodY = this.currPeriodY - 1;
  prevMonthINT = (new Date().getMonth() === 0) ? 11 : new Date().getMonth() - 1;
  prevPeriodM = new Date(Date.UTC(0, this.prevMonthINT)).toLocaleString('en-US', { month: 'long' }).toUpperCase();
  prevIsFinal = 'Y'
  constructor(
    private monthAPI: MonthsService,
    private payrollAnalysisAPI:PayrollAnalysisService,
    private router: Router,
    private notificationAPI: NotificationServiceService,
    private payrollCircleAPi: PayrollCircleService,
    private fb: FormBuilder
  ) {
    // this.fmData = this.router.getCurrentNavigation().extras.queryParams.fmData;
    this.initDates();
    this.getYears();
    this.getMonths();
   }
  ngOnDestroy(): void {
  }
  ngOnInit() {
    this.getPayrollData();
    this.initFormData();
  }
  initDates(){
    // this.currPeriodY = this.fmData.periodY;
    // this.currPeriodM = this.fmData.periodM;
    this.currIsFinal = 'N'
    this.prevMonthINT = (new Date().getMonth() === 0) ? 11 : new Date().getMonth() - 1;
    this.prevPeriodM = new Date(Date.UTC(0, this.prevMonthINT)).toLocaleString('en-US', { month: 'long' }).toUpperCase();
    this.prevIsFinal = 'Y'
    if(this.prevPeriodM == "DECEMBER"){
      this.prevPeriodY = this.currPeriodY - 1;
    }else{
      this.prevPeriodY = this.currPeriodY;
    }
  }

 
  initFormData(){
    this.formData = this.fb.group({
      remarks:['', Validators.required],
      validsignature:['', Validators.required]
    })
  }
  selected_date = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  
  getMonths() {
    this.monthsArray = this.monthAPI.months();
    this.month = this.monthsArray[new Date().getMonth()].name
  }
  getYears() {
    this.yearsArray = Array();
    this.currentYear = new Date().getFullYear();
    for (let i = (this.currentYear - 5);
      i < (this.currentYear + 1); i++) {
      this.yearsArray.push(i);
    }
  }
  onSelectedYear(event: any) {
    this.prevPeriodY = event.target.value;
    this.getPayrollData();
  }
  onSelectedMonth(event: any) {
    this.prevPeriodM = event.target.value;
    this.getPayrollData();
  }

  getPayrollData(){
    let param = new HttpParams()
    .set('prevPeriodY', this.prevPeriodY)
    .set('prevPeriodM',this.prevPeriodM)
    .set('prevIsFinal', this.prevIsFinal)
    .set('currPeriodY', this.currPeriodY)
    .set('currPeriodM', this.currPeriodM)
    .set('currIsFinal', this.currIsFinal);
    this.payrollAnalysisAPI.findAll(param).subscribe(res=>{
      this.dataResp = res;
      this.dataResp = this.dataResp.entity;
      this.dataSource = new MatTableDataSource(this.dataResp);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSubmit(){
    console.log(this.fmData)
    this.loading = true;
    if (window.confirm('Are you sure you want to close payroll for this period?')) {
    if(this.formData.valid){
      if (this.formData.controls.validsignature.value === 'FINAL ENTRY') {
        let param = new HttpParams()
        .set('payrollCircleCode',this.fmData.payrollCircleCode)
        .set('closingRemarks',this.formData.controls.remarks.value);
        this.payrollCircleAPi.close(param).subscribe(res=>{
          this.loading = false;
          this.dataResp = res;
          if(this.dataResp.statusCode == 200){
            this.loading = false;
            this.notificationAPI.alertSuccess(this.dataResp.message);
            this.router.navigate([`/administration/payroll/close`], { skipLocationChange: true });
          }else{
            this.loading = false;
            this.notificationAPI.alertSuccess(this.dataResp.message);
          }
        })
      }else{
        this.loading = false;
        this.notificationAPI.alertWarning("YOU MUST ENTER THE CORRECT APPROVAL")
      }
    }else{
      this.loading = false;
      this.notificationAPI.alertWarning("INVALID FORM DATA")
    }
  }
  }
}

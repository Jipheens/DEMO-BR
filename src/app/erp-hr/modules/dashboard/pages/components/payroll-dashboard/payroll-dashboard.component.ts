import { HttpParams } from "@angular/common/http";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MonthsService } from "src/@core/Models/months/months.service";
import { NotificationServiceService } from "src/@core/Models/Notification/notification-service.service";
import { PayrollService } from "src/app/erp-hr/data/payroll-services/payroll.service";
import { DepartmentService } from "src/app/erp-hr/data/configuration-services/department.service";
import { JobgroupService } from "src/app/erp-hr/data/configuration-services/jobgroup.service";
import { ReportService } from "src/app/erp-hr/data/payroll-services/report.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexFill,
  ApexGrid,
  ApexResponsive,
} from "ng-apexcharts";

export type chartOptions = {
  series: ApexAxisChartSeries;
  radialseries: ApexNonAxisChartSeries;
  series2: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: string[];
  responsive: ApexResponsive[];
  labels: string[];
};

@Component({
  selector: "app-payroll-dashboard",
  templateUrl: "./payroll-dashboard.component.html",
  styleUrls: ["./payroll-dashboard.component.scss"],
})
export class PayrollDashboardComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    //"index",
    "payrollId",
    "employeeId",
    "name",
    "empStartDate",
    "workingDays",
    "basicSalary",
    "grossSalary",
    "shif",
    //"nssf",
    "chargeablePay",
    //"taxableCharge",
    "insuranceRelief",
    "personalRelief",
    "paye",
    //"housingLevy",
    "netSalary",
    "status",
  ];

  displayedColumnsAnalysis: string[] = [
    "category",
    "prevPayroll",
    "currPayroll",
    "changeRate",
  ];

  employeeStates: string[] = ["EXISTED", "EXITED", "JOINED"];

  dataSource!: MatTableDataSource<any>;
  dataSourceAnalysis!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  loading: boolean;
  data: any;

  monthsArray: any[];
  // year = new Date().getFullYear();
  currentMonthIndex = new Date().getMonth();
  // month: any;
  currentYear = new Date().getFullYear();
  currentMonth: any;
  prevYear = new Date().getFullYear();
  prevMonth: any;
  numRows: number;
  departmentArray = new Array();
  departmentId = 0;
  jobGroupFk = 0;
  jobGroupArray = new Array();
  // isFinal = "Y";
  // currIsFinal = "Y";
  // prevIsFinal = "Y";
  // category = "EXISTED";
  dataResp: any;

  active: any = 0;
  exited: any = 0;
  joined: any = 0;

  Form: FormGroup;
  months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // public employeeChartOptions: Partial<chartOptions>;

  // public salaryChartOptions: Partial<chartOptions>;

  constructor(
    private monthAPI: MonthsService,
    private payrollService: PayrollService,
    private departmentAPI: DepartmentService,
    private jobGroupAPI: JobgroupService,
    private notificationAPI: NotificationServiceService,
    private reportService: ReportService,
    private fb: FormBuilder
  ) {
    // this.getDepartments();
    // this.getJobGroups();
    // this.getData();
    
  }
  ngOnDestroy(): void {}
  ngOnInit() {
    const currentYear = new Date().getFullYear();
    const currentMonthIndex = new Date().getMonth();
    const currentMonthName = this.months[currentMonthIndex];
    this.Form = this.fb.group({
      prevPeriodY: [currentYear],
      prevPeriodM: [currentMonthName],
      prevIsFinal: ["Y"],
      currPeriodY: [currentYear],
      currPeriodM: [currentMonthName],
      currIsFinal: ["Y"],
      employeeState: ["EXISTED"],
    });
    this.Form.valueChanges.subscribe(() => {
      this.getData();
    });
    this.getData();
  }

  @Output() initialize = new EventEmitter<void>();

  init() {
    // Fetch data or perform initialization tasks here
    this.initialize.emit();
  }

  ngAfterViewInit(): void {
    this.getData();
  }

  // getMonths() {
  //   this.monthsArray = this.monthAPI.months();
  //   this.currentMonth = this.monthsArray[new Date().getMonth()].name;
  // }
  // getDepartments() {
  //   let params = { status: "APPROVED" };
  //   this.departmentAPI.readByStatus(params).subscribe((res) => {
  //     let departmentKey = {
  //       id: 0,
  //       name: "All",
  //     };
  //     this.departmentArray.push(departmentKey);
  //     for (let i = 0; i < res.entity.length; i++) {
  //       let departmentKey = {
  //         id: res.entity[i].id,
  //         name: res.entity[i].departmentName,
  //       };
  //       this.departmentArray.push(departmentKey);
  //     }
  //   });
  // }
  // getJobGroups() {
  //   this.jobGroupAPI.read().subscribe((res) => {
  //     let itemKey = {
  //       id: 0,
  //       name: "All",
  //     };
  //     this.jobGroupArray.push(itemKey);
  //     for (let i = 0; i < res.entity.length; i++) {
  //       let itemKey = {
  //         id: res.entity[i].id,
  //         name: res.entity[i].jobGroupName,
  //       };
  //       this.jobGroupArray.push(itemKey);
  //     }
  //   });
  // }
  // isValidYear(input: any): boolean {
  //   const year = parseInt(input, 10);
  //   return year >= 1000 && year <= 9999;
  // }
  // onSelectCurrYear(event: any) {
  //   if (this.isValidYear(event.target.value)) {
  //     this.currentYear = event.target.value;
  //     this.getData();
  //   } else {
  //     this.notificationAPI.alertWarning("Invalid Year");
  //   }
  // }
  // onSelectedCurrMonth(event: any) {
  //   this.currentMonth = event.target.value;
  //   this.getData();
  // }
  // onSelectPrevYear(event: any) {
  //   if (this.isValidYear(event.target.value)) {
  //     this.prevYear = event.target.value;
  //     this.getData();
  //   } else {
  //     this.notificationAPI.alertWarning("Invalid Year");
  //   }
  // }
  // onSelectedPrevMonth(event: any) {
  //   this.prevMonth = event.target.value;
  //   this.getData();
  // }
  // onSelectedDepartment(event: any) {
  //   this.departmentId = event.target.value;
  //   this.getData();
  // }
  // onSelectedJobGroup(event: any) {
  //   this.jobGroupFk = event.target.value;
  //   this.getData();
  // }
  // onSelectedEmployeeState(event: any) {
  //   this.category = event.target.value;
  //   this.getData();
  // }
  countsData: any;
  chartdata: any;
  payrollAnalaysis: any;
  payrolllist: any;

  loadingPayrollAnalysis: boolean = true;
  showCharts: boolean = false;

  getData() {
    this.loadingPayrollAnalysis = true;
    this.loadingShowEmployeeChart = true;
    this.loadingShowSalaryChart= true;

    let params = new HttpParams()
      .set("prevYear", this.Form.value.prevPeriodY)
      .set("prevMonth", this.Form.value.prevPeriodM)
      .set("prevIsFinal", this.Form.value.prevIsFinal)
      .set("currYear", this.Form.value.currPeriodY)
      .set("currMonth", this.Form.value.currPeriodM)
      .set("currIsFinal", this.Form.value.currIsFinal)
      .set("category", this.Form.value.employeeState);
    this.payrollService.getPayrollsAnalysis(params).subscribe(
      (res) => {
        //console.log("this.res :: ", res);
        if (res.statusCode == 200) {
          this.data = res.entity;
          this.countsData = this.data.payrollcategoriescounts;
          this.chartdata = this.data.chartdata;
          this.payrollAnalaysis = this.data.payrollAnalaysis;
          this.payrolllist = this.data.payrolllist;

          if (this.countsData) {
            //console.log("this.countsData :: ", this.countsData);
            this.active = this.countsData.active ?? 0;
            this.exited = this.countsData.exited ?? 0;
            this.joined = this.countsData.joined ?? 0;
          }
          if (this.payrollAnalaysis) {
            //console.log("this.payrollAnalaysis :: ", this.payrollAnalaysis);
            this.getPayrollData(this.payrollAnalaysis);
            this.loadingPayrollAnalysis = false;
          }

          if (this.chartdata) {
            //console.log("this.chartdata :: ", this.chartdata);
            this.showEmployeeChart(this.chartdata);
            this.showSalaryChart(this.chartdata);
          }

          // if (this.data && (this.data.length != null || this.data.length > 0)) {
          //   if (this.departmentId != 0) {
          //     this.data = this.data.filter(
          //       (item: any) => item.department_id == this.departmentId
          //     );
          //   }
          //   if (this.jobGroupFk != 0) {
          //     this.data = this.data.filter(
          //       (item: any) => item.jobGroupFk == this.jobGroupFk
          //     );
          //   }
          //   this.dataSource = new MatTableDataSource(this.data);
          //   this.dataSource.paginator = this.paginator;
          //   this.dataSource.sort = this.sort;
          // }
          if (this.payrolllist) {
            this.dataSource = new MatTableDataSource(this.payrolllist);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        } else {
          this.notificationAPI.alertWarning(this.data.message);
          this.dataSource = new MatTableDataSource(this.data.entity);
        }
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  loadingShowEmployeeChart: boolean = true;
  employeeChartOptions: any; 
  
  showEmployeeChart(originalData: any) {
    const categories = originalData.map((data: any) => data.periodm);
    const employeeCounts = originalData.map((data: any) => parseInt(data.employeeCount, 10));
  
    this.employeeChartOptions = {
      series: [
        {
          name: "Employee Count",
          data: employeeCounts,
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        foreColor: "#9aa0ac",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          colors: {
            // Set color for each bar here
            ranges: [{
              from: 0,
              to: 1000,
              color: '#4CAF50' // Green color
            }]
          }
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: categories,
        labels: {
          style: {
            colors: "#9aa0ac",
          },
        },
        title: {
          text: "Period",
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#9aa0ac',
          },
        },
      },
      yaxis: {
        title: {
          text: "Employee Count",
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#9aa0ac',
          },
        },
      },
      fill: {
        opacity: 1,
        colors: ['#7e0000'], 
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  
    this.loadingShowEmployeeChart = false;
  }
  
  
  loadingShowSalaryChart: boolean = true;
  salaryChartOptions: any; 
  
  showSalaryChart(originalData: any) {
    const categories = originalData.map((data: any) => data.periodm);
    const grossPays = originalData.map((data: any) => parseFloat(data.grosspay));
  
    this.salaryChartOptions = {
      series: [
        {
          name: "Gross Pay",
          data: grossPays,
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        foreColor: "#9aa0ac",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: categories,
        labels: {
          style: {
            colors: "#9aa0ac",
          },
        },
        title: {
          text: "Period",
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#9aa0ac',
          },
        },
      },
      yaxis: {
        title: {
          text: "Gross Pay",
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#9aa0ac',
          },
        },
        labels: {
          formatter: (value: number) => `KES ${value.toFixed(2)}`, 
        },
      },
      fill: {
        opacity: 1,
        colors: ['#4CAF50'], 
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
        y: {
          formatter: (val: number) => `KES ${val.toFixed(2)}`,
        },
      },
    };
  
    this.loadingShowSalaryChart = false;
  }
  

  getPayrollData(data: any) {
    //console.log("getPayrollData:: ", data);
    this.dataSourceAnalysis = new MatTableDataSource(data);
    this.dataSourceAnalysis.paginator = this.paginator;
    this.dataSourceAnalysis.sort = this.sort;
  }

  inputs: any;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.inputs = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  employeeChartoptions: Highcharts.Options;

  downloadAnalysis() {
    let params = new HttpParams()
      .set("prevYear", this.Form.value.prevYear)
      .set("prevMonth", this.Form.value.prevMonth)
      .set("currYear", this.Form.value.currYear)
      .set("currMonth", this.Form.value.currMonth)
      .set("category", this.Form.value.employeeState)
      .set("prevIsFinal", this.Form.value.prevIsFinal)
      .set("currIsFinal", this.Form.value.catecurrIsFinalgory);
    let filename = "Report for " + this.Form.value.category;
    this.reportService.generateAnalysis(params).subscribe((data) => {
      if (data.statusCode == "404") {
        this.notificationAPI.alertWarning(data.message);
      } else {
        this.saveToFileSystem(
          filename,
          data,
          this.currentYear,
          this.currentMonth
        );
      }
      this.loading = false;
    });
  }
  private saveToFileSystem(filename: any, response: any, year, month) {
    const blob = new Blob([response], { type: "application/vnd.ms-excel" });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.download = filename + "_for_" + year + "_" + month + ".xlsx";
    anchor.href = url;
    anchor.click();
  }
}

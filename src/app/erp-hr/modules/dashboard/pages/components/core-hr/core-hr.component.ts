import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as Highcharts from 'highcharts';
import { NotificationServiceService } from 'src/@core/Models/Notification/notification-service.service';
import { AnalysisService } from 'src/app/erp-hr/data/configuration-services/analysis.service';

@Component({
  selector: 'app-core-hr',
  templateUrl: './core-hr.component.html',
  styleUrls: ['./core-hr.component.scss']
})
export class CoreHrComponent implements OnInit {
  displayedColumns: string[] = [
    "index",
    "departmentname",
    "totalEmployees",
    "turnoverrate"
  ];
  dataSource!: MatTableDataSource<any>;
  displayedColumns2: string[] = [
    "index",
    "goalsno",
    "classification"
  ];
  dataSource2!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  maleVsFemaleOptions: any;
  male: any;
  female: number;
  activeEmployees: any;
  leaveRequest: any;
  newEmployees: any;
  newOpenings: any;
  employeeLeaveChart: any;
  currentDate = new Date();
  dataResp: any;
  genderDetails: any;
  femaleCount: any;
  maleCount: any;
  activeEmpPerDepartmentChart: any;
  joinersAndLeaversChart: any;
  kpigoalstatusChart: any;
  year = this.currentDate.getFullYear();
  loading: boolean;
  perfomancePerDepartment: any;
  ageDistribuition: any;
  dataAgeDistrib: any;
  constructor(
    private analysisAPI: AnalysisService,
    private notificationAPI: NotificationServiceService
  ) {

  }


  @Output() initialize = new EventEmitter<void>();

  ngOnInit() {
    // Emit initialization event if needed
  }

  init() {
    // Fetch data or perform initialization tasks here
    this.initialize.emit();
  }
  ngAfterViewInit(): void {
    this.getData();
  }
  showCharts: boolean = false;
  getData() {
    this.showCharts = false
    let params = new HttpParams()
      .set('Year', this.year);
    this.analysisAPI.getAdminAnalysis(params).subscribe(res => {
      this.dataResp = res;
      const xKpiAxis: string[] = [];
      const seriesKpi1Array: number[] = [];
      const series2KpiArray: number[] = [];
      for (const item of this.dataResp.kpigoalstatus) {
        xKpiAxis.push(item.departmentname);
        seriesKpi1Array.push(item.submittedcount);
        series2KpiArray.push(item.pendingcount);
      }
      this.showKpigoalstatus(xKpiAxis, seriesKpi1Array, series2KpiArray);

      this.activeEmployees = this.dataResp.activeEmployees;
      this.leaveRequest = this.dataResp.leaveRequest;
      this.genderDetails = this.dataResp.genderDetails;
      this.newEmployees = this.dataResp.newEmployees;
      this.newOpenings = this.dataResp.newOpenings;
      this.dataAgeDistrib = this.dataResp.ageDistributions;


      const employeeCount: number[] = [];
      const ageGroup: string[] = [];
      for (const item of this.dataAgeDistrib) {
        employeeCount.push(item.count);
        ageGroup.push(item.agerange);
      }
      this.showAgeDistribution(employeeCount, ageGroup);

      console.log("this.genderDetails: ", this.genderDetails)


      this.showWorkTypeDistribution(this.dataResp.employeeenrollments);

      this.showMaleVsFemaleOptions(this.genderDetails.female, this.genderDetails.male)
      const activeArray: number[] = [];
      const departmentArray: string[] = [];
      for (const item of this.dataResp.activeEmployeePerDepartment) {
        activeArray.push(item.active);
        departmentArray.push(item.departmentname);
      }
      this.showActiveEmployeePerDepartment(activeArray, departmentArray);
      const xAxis: number[] = [];
      const series1Array: string[] = [];
      const series2Array: string[] = [];
      for (const item of this.dataResp.joinersandLeavers) {
        xAxis.push(item.monthname);
        series1Array.push(item.joinerscount);
        series2Array.push(item.leaverscount);
      }
      this.showJoinersAndLeaversChart(xAxis, series1Array, series2Array);
      this.showTurnOverRate(this.dataResp.employeeTurnOverRate);
      this.showKpiAnaysis(this.dataResp.kpiClassifications);
      this.showPerfomancePerDepartment(activeArray, departmentArray);

      this.showCharts = true
    })
  }
  barChartoptions: any;
  employeeMainDash: any;
  showTurnOverRate(dtDetails) {
    this.dataSource = new MatTableDataSource(dtDetails);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  showKpiAnaysis(dtDetails) {
    this.dataSource2 = new MatTableDataSource(dtDetails);
    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  transformMonths(originalData) {
    const periodmArray = [];
    for (const item of originalData) {
      const periodm = item.periodm.trim();
      periodmArray.push(periodm);
    }
    return periodmArray;
  }
  transformEmployeeData(originalData: any) {
    let employeeArray = new Array<any>();
    for (const item of originalData) {
      employeeArray.push(Number(item.employeeCount));
    }
    return employeeArray;
  }
  transformSalaryData(originalData: any) {
    let salaryArray = new Array<any>();
    for (const item of originalData) {
      salaryArray.push(item.grosspay);
    }
    return salaryArray;
  }
  isValidYear(input: any): boolean {
    const year = parseInt(input, 10);
    return year >= 1000 && year <= 9999;
  }
  onSelectedYear(event: any) {
    if (this.isValidYear(event.target.value)) {
      this.year = event.target.value;
      this.getData();
    } else {
    }
  }
  showJoinersAndLeaversChart(yAxisData, series1, series2) {
    this.joinersAndLeaversChart = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Joiners and Leavers Per Month in an Year',
      },
      subtitle: {
        text: 'ERP ANALYTICS',
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: yAxisData,
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Employee Number',
        },
      },
      tooltip: {
        headerFormat:
          '<span style = "font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
          '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Joiners",
          color: '#4CAF50',
          data: series1
        }, {
          name: "Leavers",
          color: '#fc5203',
          data: series2
        },
      ],
    };
    Highcharts.chart('joinersAndLeaversChart', this.joinersAndLeaversChart);
  }
  showActiveEmployeePerDepartment(yAxisData, xAxisData) {
    this.activeEmpPerDepartmentChart = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Average Number of Active Employee per Department',
      },
      subtitle: {
        text: 'ERP ANALYTICS',
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: xAxisData,
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Employee Number',
        },
      },
      tooltip: {
        headerFormat:
          '<span style = "font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
          '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Employees",
          color: '#4CAF50',
          data: yAxisData
        },
      ],
    };
    Highcharts.chart('activeEmpPerDepartmentChart', this.activeEmpPerDepartmentChart);
  }
  showMaleVsFemaleOptions(fm, mm) {
    let total = fm + mm;
    this.male = Math.round((mm / total) * 100);
    this.female = Math.round((fm / total) * 100);
    this.maleVsFemaleOptions = {
      chart: {
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Employee Gender Ratio'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',

          dataLabels: {
            enabled: true
          },
          showInLegend: true
        }
      },
      series: [{
        type: 'pie',
        name: 'Gender Ratio',
        data: [
          {
            name: 'Male Employees - ' + this.male + '%',
            y: this.male,
            color: '#4CAF50',
          },
          {
            name: 'Female Employees - ' + this.female + '%',
            y: this.female,
            color: '#000000',
          },
        ]
      }]
    };
    Highcharts.chart('maleVsFemaleOptions', this.maleVsFemaleOptions);
  }
  showPerfomancePerDepartment(yAxisData, xAxisData) {
    this.perfomancePerDepartment = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Distribution Graph based on Average Score per Department',
      },
      subtitle: {
        text: 'ERP ANALYTICS',
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: xAxisData,
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Avg. Score',
        },
      },
      tooltip: {
        headerFormat:
          '<span style = "font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
          '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Departments",
          color: '#4CAF50',
          data: yAxisData
        },
      ],
    };
    Highcharts.chart('perfomancePerDepartment', this.perfomancePerDepartment);
  }
  showAgeDistribution(yAxisData, xAxisData) {
    this.ageDistribuition = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Employee Age Distribution (Employee vs Age Group)',
      },
      subtitle: {
        text: 'ERP ANALYTICS',
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: xAxisData,
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Employee Count',
        },
      },
      tooltip: {
        headerFormat:
          '<span style = "font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
          '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Age Group",
          color: '#4CAF50',
          data: yAxisData
        },
      ],
    };
    Highcharts.chart('ageDistribuition', this.ageDistribuition);
  }

  workTypeDistribuition: any;
  showWorkTypeDistribution(workTypeData) {
    const xAxisData = workTypeData.map(item => item.enrollmentstatus);
    const yAxisData = workTypeData.map(item => item.count);

    this.workTypeDistribuition = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Employee Work Type Distribution',
      },
      subtitle: {
        text: 'ERP ANALYTICS',
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: xAxisData,
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Employee Count',
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Work Type',
          color: '#4CAF50',
          data: yAxisData
        },
      ],
    };

    // Render the chart
    Highcharts.chart('workTypeDistribuition', this.workTypeDistribuition);
  }


  showKpigoalstatus(yAxisData, series1, series2) {
    this.kpigoalstatusChart = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'KPI Goals - Submited and Unsubmitted per Departments',
      },
      subtitle: {
        text: 'ERP ANALYTICS',
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: yAxisData,
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Department',
        },
      },
      tooltip: {
        headerFormat:
          '<span style = "font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
          '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Submitted",
          color: '#4CAF50',
          data: series1
        }, {
          name: "Unsubmmitted",
          color: '#fc5203',
          data: series2
        },
      ],
    };
    Highcharts.chart('kpigoalstatusChart', this.kpigoalstatusChart);
  }
}



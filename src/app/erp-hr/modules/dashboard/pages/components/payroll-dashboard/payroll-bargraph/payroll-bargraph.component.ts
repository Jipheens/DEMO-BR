import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as Highcharts from 'highcharts';
import { Subject, takeUntil } from 'rxjs';
import { SalaryService } from 'src/app/erp-hr/data/payroll-services/salary.service';

@Component({
  selector: 'app-payroll-bargraph',
  templateUrl: './payroll-bargraph.component.html',
  styleUrls: ['./payroll-bargraph.component.scss']
})
export class PayrollBargraphComponent implements OnInit {
  highcharts = Highcharts;
  year: any;
  params: any;
  $destroy: Subject<any> = new Subject<any>();
  resData: any;
  options: any;
  barChartoptions: any;
  years: Object | undefined;
  needYear = false;
  needMonth = false;
  chartDispType: any = ['Year-wise', 'Month-wise', 'Date-wise']
  monthsArray: any = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  currentYear = new Date().getFullYear()
  currentMonth = this.monthsArray[new Date().getMonth()];
  month: any;
  yearArray: any;
  selectedYear: any;
  constructor(
    private fb: FormBuilder,
    private salaryAPI: SalaryService,
  ) { }
  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.complete();
  }
  ngOnInit(): void {
    this.getYears();
    this.getYearWiseData(2021);
    this.showChart();
  }
  datewiseForm = this.fb.group({
    period: [''],
    year: ['2023'],
    month: [this.currentMonth],
  })
  onSelectedYear(e: any){

  }
  getYears() {
    this.salaryAPI.getPayrollYears().pipe(takeUntil(this.$destroy)).subscribe(
      {
        next: (
          (res) => {
            this.yearArray = res;
          }
        ),
        error: (
          (err) => {

          }
        ), complete: (
          () => {

          }
        )
      }
    )
  }
  onSelectPeriod(event: any) {
    this.getYearWiseData(event.value)
  }
  getYearWiseData(year: any) {
    this.selectedYear = year;
    const monthsArray = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
  ]
    let params = new HttpParams()
      .set('period_y', year)
    this.salaryAPI.getYearSalarySummary(params).pipe(takeUntil(this.$destroy)).subscribe(
      {
        next: (
          (res) => {
          }
        ),
        error: (
          (err) => {

          }
        ), complete: (
          () => {

          }
        )
      }
    );

  }


  showChart(){
    this.barChartoptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Average Numer of Employee per Month',
      },
      subtitle: {
        text: 'API Internal Server',
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul',
        'Aug','Sep','Oct','Nov','Dec'],
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
          name: 'Period in Months',
          data:  [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6,
            148.5, 216.4, 194.1, 95.6, 54.4]
        },
      ],
    };
    Highcharts.chart('Account-chart', this.barChartoptions);
  }
}

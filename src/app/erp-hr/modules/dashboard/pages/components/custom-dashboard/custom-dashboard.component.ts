import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as Highcharts from 'highcharts';
import { NotificationServiceService } from 'src/@core/Models/Notification/notification-service.service';
import { AnalysisService } from 'src/app/erp-hr/data/configuration-services/analysis.service';
import { TokenCookieService } from 'src/app/core/service/token-storage-cookies.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import {  takeUntil, Subject } from "rxjs";

@Component({
  selector: 'app-custom-dashboard',
  templateUrl: './custom-dashboard.component.html',
  styleUrls: ['./custom-dashboard.component.sass']
})
export class CustomDashboardComponent implements OnInit {

   displayedColumns: string[] = [
      "index",
      "roleName",
      "userCount",
         ];
    dataSource!: MatTableDataSource<any>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    currentDate = new Date();
    year = this.currentDate.getFullYear();
    loading: boolean;
    currentUser: any;
    lineChartOptions: any;
    pieChartOptions: any;
    data: any;
    destroy$: Subject<boolean> = new Subject<boolean>();
    
    constructor(
      private analysisAPI: AnalysisService,
      private notificationAPI: NotificationServiceService,
      private tokenCookieService : TokenCookieService,
      private snackbar : SnackbarService
    ) {
  
    }
    
    ngOnInit() {
      this.currentUser = this.tokenCookieService.getUser().username;
      // Emit initialization event if needed
      this.getLoginSessions();
      this.getData();
        }
  
 
    ngAfterViewInit(): void {
      //this.getData();
    }

    ngOnDestroy(): void {
      this.destroy$.next(true);
      this.destroy$.complete();
    }
    showCharts: boolean = false;

    getLoginSessions(){

      this.analysisAPI.getWeeklyLoginSessions().subscribe({
        next: (res) => {
          const xAxisCategories = Object.keys(res);
          const series1Data = Object.values(res);
          
        this.showLineChart(xAxisCategories, series1Data);
        console.log('Line chart response', res)
        },
        error: (err) => {
        this.snackbar.showNotification("snackbar-danger", err.message);
        }
      })
  
    }

    showLineChart(xAxisCategories: string[], series1Data: number[]) {
      this.lineChartOptions = {
        chart: {
          type: 'line',
        },
        title: {
          text: 'Weekly Login Sessions',
        },
        subtitle: {
          text: 'ERP ANALYTICS',
        },
        credits: {
          enabled: false,
        },
        xAxis: {
          title: {
            text: 'Day Of Week'
          },
          categories: xAxisCategories,
          crosshair: true,
        },
        yAxis: {
          title: {
            text: 'Login Sessions',
          },
        },
        tooltip: {
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: [
          {
            name: 'Login Sessions',
            color: '#4CAF50',
            data: series1Data,
          },
                ],
      };
  
      Highcharts.chart('lineChartContainer', this.lineChartOptions);
    }

     getData() {
        this.loading = true;
        this.dataSource = new MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
               
        this.analysisAPI.getUsersByRole()
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              console.log('response',res)
              if (res.statusCode == 302) {
                this.data = res.entity;
                console.log("House Levy displayed on table", this.data);
    
                this.loading = false;
                this.dataSource = new MatTableDataSource(this.data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
              } else {
                this.loading = false;
              }
            },
            error: (err) => {
              this.loading = false;
              this.notificationAPI.alertWarning(
                "Server Error:  " + err.message
              );
            },
            complete: () => {},
          });
      }
        
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
     isValidYear(input: any): boolean {
      const year = parseInt(input, 10);
      return year >= 1000 && year <= 9999;
    }
    onSelectedYear(event: any) {
      if (this.isValidYear(event.target.value)) {
        this.year = event.target.value;
        //this.getData();
      } else {
      }
    }
      
  
  }
  
  
  
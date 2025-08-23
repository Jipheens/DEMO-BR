import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GenWidgetsComponent } from './pages/gen-widgets/gen-widgets.component';




import { NgxEchartsModule } from "ngx-echarts";
import { ChartsModule as chartjsModule } from "ng2-charts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { GaugeModule } from "angular-gauge";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { NgxGaugeModule } from "ngx-gauge";


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AnalyticsComponent } from './pages/components/analytics/analytics.component';
import { CoreHrComponent } from './pages/components/core-hr/core-hr.component';
import { PayrollBargraphComponent } from './pages/components/payroll-dashboard/payroll-bargraph/payroll-bargraph.component';
import { ClosureAnalysisComponent } from './pages/components/payroll-dashboard/closure-analysis/closure-analysis.component';
import { PayrollDashboardComponent } from './pages/components/payroll-dashboard/payroll-dashboard.component';
import { CustomDashboardComponent } from './pages/components/custom-dashboard/custom-dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GenWidgetsComponent,

    AnalyticsComponent,
    CoreHrComponent,

    ClosureAnalysisComponent, PayrollBargraphComponent, PayrollDashboardComponent, CustomDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    SharedModule,
    MatProgressBarModule,
    chartjsModule,

    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    NgApexchartsModule,    
 
    
  ],
  exports: [GenWidgetsComponent,PayrollDashboardComponent]
})
export class DashboardModule { }

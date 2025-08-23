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

import { ResetPasswordComponent } from './pages/components/reset-password/reset-password.component';
import { AnalyticsComponent } from './pages/components/analytics/analytics.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GenWidgetsComponent,

    ResetPasswordComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    SharedModule,

    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    chartjsModule,
    NgxChartsModule,
    NgApexchartsModule,
    MatMenuModule,
    MatIconModule,
    GaugeModule.forRoot(),
    NgxGaugeModule,
    ComponentsModule,
    NgApexchartsModule,

    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
 
    
  ],
  exports: [GenWidgetsComponent]
})
export class DashboardModule { }

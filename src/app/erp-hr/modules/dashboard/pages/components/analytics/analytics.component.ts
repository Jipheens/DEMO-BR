import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { MatTabGroup } from "@angular/material/tabs";

import { TokenCookieService } from "src/app/core/service/token-storage-cookies.service";
import { PayrollDashboardComponent } from "../payroll-dashboard/payroll-dashboard.component";
import { CoreHrComponent } from "../core-hr/core-hr.component";



@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.sass']
})
export class AnalyticsComponent implements OnInit {

  currentUser: any;

  constructor(private tokenCookieService: TokenCookieService,) { }
  ngOnInit() {
    this.currentUser = this.tokenCookieService.getUser().username;

  }



  @ViewChild(CoreHrComponent) coreHRComponent: CoreHrComponent;
  @ViewChild(PayrollDashboardComponent) payrollDashboardComponent: PayrollDashboardComponent;

  @Output() tabChange = new EventEmitter<number>();

  onTabChange(event: any) {
    this.tabChange.emit(event.index);

    // Call init methods based on tab index
    if (event.index === 0) {
      this.coreHRComponent.init();
    } else if (event.index === 1) {
      this.payrollDashboardComponent.init();
    }
  }
  initializeCoreHR(event: any) {
    if (this.coreHRComponent) {
      this.coreHRComponent.getData();
    }
  }

  initializePayrollDashboard(event: any) {
    if (this.payrollDashboardComponent) {
      this.payrollDashboardComponent.getData();
    }
  }
}

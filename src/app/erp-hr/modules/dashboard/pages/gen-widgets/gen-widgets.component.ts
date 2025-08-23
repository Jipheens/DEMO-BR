import { HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, Subscription } from "rxjs";
import { MonthsService } from "src/@core/Models/months/months.service";
import { AnalysisService } from "src/app/erp-hr/data/configuration-services/analysis.service";

@Component({
  selector: "app-gen-widgets",
  templateUrl: "./gen-widgets.component.html",
  styleUrls: ["./gen-widgets.component.scss"],
})
export class GenWidgetsComponent implements OnInit {
  currentDate = new Date();
  activeAccounts = 0;
  totalAccounts = 0;
  activeAccountGrowth = 0;
  activeAccountsPercentage = 0; // Added for progress calculation

  loanRequests = 0;
  loanApprovalRate = 0;

  newAccounts = 0;
  accountOpenGrowth = 0;

  monthlyRevenue = 0;
  monthlyTarget = 1000000; // Example target
  revenuePercentage = 0; // Added for progress calculation

  constructor(
    private analysisAPI: AnalysisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBankingAnalytics();
  }

  getBankingAnalytics() {
    const res = {
      activeAccounts: 8500,
      totalAccounts: 10000,
      activeAccountGrowth: 3.2,

      loanRequests: 120,
      loanApprovalRate: 75,

      newAccounts: 450,
      accountOpenGrowth: 8.5,

      monthlyRevenue: 785000
    };

    this.activeAccounts = res.activeAccounts || 0;
    this.totalAccounts = res.totalAccounts || 1;
    this.activeAccountGrowth = res.activeAccountGrowth || 0;
    this.activeAccountsPercentage = (this.activeAccounts / this.totalAccounts) * 100; // Calculate percentage

    this.loanRequests = res.loanRequests || 0;
    this.loanApprovalRate = res.loanApprovalRate || 0;

    this.newAccounts = res.newAccounts || 0;
    this.accountOpenGrowth = res.accountOpenGrowth || 0;

    this.monthlyRevenue = res.monthlyRevenue || 0;
    this.revenuePercentage = (this.monthlyRevenue / this.monthlyTarget) * 100; // Calculate percentage
  }

  onAccounts() {
    this.router.navigate(['/core-banking/accounts']);
  }

  onLoanRequests() {
    this.router.navigate(['/core-banking/loans']);
  }

  onNewAccounts() {
    this.router.navigate(['/core-banking/accounts/new']);
  }

  onRevenue() {
    this.router.navigate(['/core-banking/finance/revenue']);
  }
}
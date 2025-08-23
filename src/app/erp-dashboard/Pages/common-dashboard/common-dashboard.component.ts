import { Component, HostListener, OnInit, OnDestroy } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ResetPasswordComponent } from "src/app/authentication/reset-password/reset-password.component";
import { AuthService } from "src/app/core/service/auth.service";
import { TokenCookieService } from "src/app/core/service/token-storage-cookies.service";
import { NotificationService } from "src/app/erp-hr/data/notification.service";

@Component({
  selector: "app-common-dashboard",
  templateUrl: "./common-dashboard.component.html",
  styleUrls: ["./common-dashboard.component.scss"],
})
export class CommonDashboardComponent implements OnInit, OnDestroy {
  currentUser: any;
  passwordFlag = "N";
  currentYear: number = new Date().getFullYear();

  

  constructor(
    private router: Router,
    private notificationAPI: NotificationService,
    private tokenCookieService: TokenCookieService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    // const userId = this.currentUser.id;
    // localStorage.setItem(`selectedModule_${userId}`, JSON.stringify("Main Dashboard"));
    // // Check if the component has been reloaded already
    // const hasReloaded = sessionStorage.getItem('hasMainDashboardReloaded');

    // if (!hasReloaded) {
    //   sessionStorage.setItem('hasReloaded', 'true'); // Set the flag
    //   location.reload(); // Reload the whole application
    // } else {
    //   // Proceed with normal initialization
      
    // }

    this.currentUser = this.tokenCookieService.getUser();
      this.passwordFlag = this.currentUser.isSystemGenPassword;
      console.log("currentUser Main dashboard: ", this.currentUser);
      this.getProfileImage();

      console.log("passwordFlag: ", this.passwordFlag);

      if (this.passwordFlag === "Y") {
        this.resetPassword();
      }
  }
  hasPrivileges(moduleName: string): boolean {
    //const client = this.currentUser?.role.clients.find(client => client.name === moduleName);
    //return client && client.privileges.length > 0;
    return true;
  }
  resetPassword() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.data = {
      test: "username",
    };

    const dialogRef = this.dialog.open(ResetPasswordComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {});
  }

  // openModule(module: string) {
  //   const userId = this.currentUser.id;
  //   localStorage.setItem(`selectedModule_${userId}`, JSON.stringify(module));
  //   console.log("module: ", module);

  //   const moduleRoutes = {
  //     AdminModule: "/erp-admin/dashboard",
  //     ProcurementModule: "/erp-procurement/dashboard",
  //     HumanResourceModule: "/erp-hr/dashboard",
  //     EmployeeSelfServiceModule: "/erp-hr-self-service/dashboard",
  //     FinanceModule: "/erp-finance/dashboard",
  //     FixedAssetsModule: "/erp-fixed-assets/dashboard",
  //     SuppliersManagementModule: "/erp-suppliers-management/dashboard",
  //     BudgetModule: "/erp-budget/dashboard",
  //     ImprestModule: "/erp-imprest/dashboard",
  //     PrepaymentModule: "/erp-prepayment/dashboard",
  //     InventoryModule: "/erp-inventory/dashboard",
  //     ERPReportsModule: "/erp-reports/dashboard",
  //   };

  //   const route = moduleRoutes[module];
  //   if (route) {
  //     this.router.navigate([route]);
  //     console.log(`${module} module selected.`);
  //   } else {
  //     console.log("Invalid module selected.");
  //   }
  // }

  openModule(){
    const route ='/erp-hr/dashboard'
    this.router.navigate([route])
  }
  @HostListener("window:beforeunload")
  onBackButton() {
    return;
  }

  profileImage: string | ArrayBuffer | null = null;

  getProfileImage() {
    let params = {
      empPf: this.currentUser.empPfNo,
    };
    this.authService.getUserProfileImage(params).subscribe(
      (res) => {
        if (res.entity && res.entity.imageFile) {
          this.profileImage = res.entity.imageFile;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {
    // Cleanup logic if needed
    sessionStorage.removeItem('hasReloaded'); // Clear the flag if needed, e.g., on logout
  }
}

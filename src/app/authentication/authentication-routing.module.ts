import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LockedComponent } from "./locked/locked.component";
import { Page404Component } from "./page404/page404.component";
import { Page500Component } from "./page500/page500.component";
import { OtpComponent } from "./otp/otp.component";
import { CommonDashboardComponent } from "../erp-dashboard/Pages/common-dashboard/common-dashboard.component";
import { AuthGuard } from "../core/guard/auth.guard";
import { PasswordResetComponent } from "./password-reset/password-reset.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "signin",
    pathMatch: "full",
  },
  {
    path: "signin",
    component: SigninComponent,
  },
  {
    path: "OTP",
    component: OtpComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "common-dashboard",
    component: CommonDashboardComponent,
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
  },
  {
    path: "password-reset/:token",
    component: PasswordResetComponent,
  },
  {
    path: "locked",
    component: LockedComponent,
  },
  {
    path: "page404",
    component: Page404Component,
  },
  {
    path: "page500",
    component: Page500Component,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }

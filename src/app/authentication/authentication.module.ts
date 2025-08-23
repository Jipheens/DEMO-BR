import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { Page500Component } from "./page500/page500.component";
import { Page404Component } from "./page404/page404.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { LockedComponent } from "./locked/locked.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { OtpComponent } from './otp/otp.component';
import { CommonDashboardComponent } from '../erp-dashboard/Pages/common-dashboard/common-dashboard.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';




@NgModule({
  declarations: [
    Page500Component,
    Page404Component,
    SigninComponent,
    SignupComponent,
    LockedComponent,
    ForgotPasswordComponent,
    OtpComponent,
    CommonDashboardComponent,
    ResetPasswordComponent,
    PasswordResetComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    // MatDialogModule

  ],



})
export class AuthenticationModule { }

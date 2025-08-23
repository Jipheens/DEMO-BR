import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { DashboardComponent } from "src/app/admin/modules/dashboard/pages/dashboard/dashboard.component";
import { AuthService } from "src/app/core/service/auth.service";
import { TokenCookieService } from "src/app/core/service/token-storage-cookies.service";
import { NotificationService } from "src/app/erp-hr/data/notification.service";
import { SnackbarService } from "src/app/shared/services/snackbar.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.sass"],
})
export class ResetPasswordComponent implements OnInit {
  isSuccessful = false;
  isUploadFailed = false;
  errorMessage = "";

  action: string;
  dialogTitle: string;
  //employeesForm: FormGroup;
  sender: any;

  Data?: any;
  message?: any;
  Form!: FormGroup;

  //categorys = [{ name: "Company" }, { name: "Individual" }];

  selectFeedback: " ";

  currentUserName: any;
  hide1 = true;
  hide2 = true;

  hide = true;

  loading: boolean = false;

  constructor(
    private notificationAPI: NotificationService,
    private router: Router,
    private tokenStorage: TokenCookieService,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private authService: AuthService
  ) {
    this.Data = data.test;
  }

  updatePasswordForm: FormGroup;

  currentUser: any;
  showForm: boolean = false;

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
    this.currentUserName = this.tokenStorage.getUser().username;

    console.log("this.currentUser: ", this.currentUser.email);
    this.createForm();
    this.showForm = true;
  }

  createForm() {
    this.updatePasswordForm = this.fb.group({
      emailAddress: [this.currentUser.email, [Validators.required]],
      // currentPassword: ["", [Validators.required]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[(){}\[\]@$!%*?&\-._])[A-Za-z\d(){}\[\]@$!%*?&\-._]*$/),
          Validators.minLength(12),
          Validators.maxLength(35),
        ],
      ],

      confirmPassword: [
        "",
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[(){}\[\]@$!%*?&\-._])[A-Za-z\d(){}\[\]@$!%*?&\-._]*$/),
          Validators.minLength(12),
          Validators.maxLength(35),
        ],
      ],
    });
  }

  // {
  //   "statusCode": 200,
  //   "message": "User Password updated successfully"
  // }

  resetPassword() {
    if (this.updatePasswordForm.invalid) {
      console.log("Form errors:", this.updatePasswordForm.errors);
      console.log(
        "Password errors:",
        this.updatePasswordForm.controls.password.errors
      );
      console.log(
        "Confirm Password errors:",
        this.updatePasswordForm.controls.confirmPassword.errors
      );
    }

    if (
      this.updatePasswordForm.value.password !==
      this.updatePasswordForm.value.confirmPassword
    ) {
      this.snackbar.showNotification(
        "snackbar-danger",
        "Passwords don't match, please check and retry!"
      );
    } else if (
      this.updatePasswordForm.value.password.includes(this.currentUserName)
    ) {
      this.notificationAPI.alertWarning(
        "Password policy not met. Use a different password!"
      );
    } else {
      this.loading = true;
      this.authService.updatePassword(this.updatePasswordForm.value).subscribe(
        (res) => {
          console.log("res: ", res);

          this.loading = false;
          if (res.statusCode === 200) {
            this.dialogRef.close({ event: "close", data: "Password reset" });
            this.notificationAPI.alertSuccess(res.message);
          } else {
            this.notificationAPI.alertWarning(res.message);
          }
        },
        (err) => {
          this.loading = false;
          this.notificationAPI.alertWarning(err.message);
        }
      );
    }
  }

  onClose(): void {
    this.tokenStorage
      .signOut(this.tokenStorage.getUser().refreshToken)
      .subscribe(
        (res) => {
          console.log("res: ", res);
          if (res.statusCode === 200) {
            this.router.navigate(["/authentication/signin"]);
            this.notificationAPI.alertSuccess(res.message);
          } else {
            this.notificationAPI.alertWarning(res.message);
            this.router.navigate(["/authentication/signin"]);
          }
        },
        (err) => {
          console.log(err);
          this.dialogRef.close();
          this.router.navigate(["/authentication/signin"]);
          this.notificationAPI.alertWarning(err.message);
        }
      );
  }
}

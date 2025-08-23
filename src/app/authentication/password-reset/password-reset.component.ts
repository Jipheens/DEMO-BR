import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/service/auth.service";
import { Subject, takeUntil, Subscription } from "rxjs";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
import { TokenCookieService } from "src/app/core/service/token-storage-cookies.service";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.sass']
})
export class PasswordResetComponent implements OnInit {

  authForm: FormGroup;
  submitted = false;
  returnUrl: string;

  loading = false;
  error = "";
  hide = true;

  token: string | null = null;

  tokenExpiredMessage: string | null = null;


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private snackbar: SnackbarService,
    private tokenCookieService: TokenCookieService


  ) { }
  ngOnInit() {

    //get token from the url

    this.token = this.route.snapshot.paramMap.get('token');
    console.log('Token:', this.token);
    this.verifyToken(this.token)
    //verify if token is valid
    //if valid form else show an invalid toke message

    this.authForm = this.formBuilder.group({
      token: [this.token],
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
      ]

    });

    

  }
  get f() {
    return this.authForm.controls;
  }
  destroy$: Subject<boolean> = new Subject<boolean>();

  downloadLoading: boolean = false;


  verifyToken(token: string) {
    // localStorage.clear();
    this.tokenCookieService.deleteUser();
    this.authService
      .verifyToken(token)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          console.log("res: ", res);

          if (res.statusCode == 200) {

            this.snackbar.showNotification(
              "snackbar-success",
              res.message
            );
          } else {
            this.tokenExpiredMessage=res.message;
          }

          this.loading = false;
        },
        error: (err) => {
          console.log("err::: ", err)
          this.tokenExpiredMessage="An error occurred while verifying token";
          
          this.loading = false;
        },
        complete: () => { },
      }),
      Subscription;
  }

  //reset password

  resetPassword() {
    // localStorage.clear();
    console.log("form : ",this.authForm.value)
    this.tokenCookieService.deleteUser();

    this.submitted = true;
    this.loading = true;
    this.error = "";
    if (this.authForm.valid) {
      this.authService
        .resetPassword(this.authForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            console.log("res: ", res);

            if (res.statusCode == 200) {

              this.snackbar.showNotification(
                "snackbar-success",
                res.message
              );
              this.router.navigate(["/authentication/signin"]);
            } else {
              this.snackbar.showNotification("snackbar-danger", res.message);
            }

            this.loading = false;
          },
          error: (err) => {
            console.log("err::: ", err)
            if (err.status === 401) {
              this.snackbar.showNotification(
                "snackbar-danger",
                "Failed: Please check your email and try again."
              );
            } else {
              this.snackbar.showNotification(
                "snackbar-danger",
                err.message
              );
            }

            this.loading = false;
          },
          complete: () => { },
        }),
        Subscription;

      console.log(this.authForm.value);
    }
  }

  onSubmit() {
    // localStorage.clear();
    this.tokenCookieService.deleteUser();

    this.submitted = true;
    this.loading = true;
    this.error = "";
    if (this.authForm.valid) {

      this.authService
        .forgotPassword(this.authForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            console.log("res: ", res);

            if (res.statusCode == 200) {

              this.snackbar.showNotification(
                "snackbar-success",
                res.message
              );
              this.router.navigate(["/authentication/signin"]);
            } else {
              this.snackbar.showNotification("snackbar-danger", res.message);
            }

            this.loading = false;
          },
          error: (err) => {
            console.log("err::: ", err)
            if (err.status === 401) {
              this.snackbar.showNotification(
                "snackbar-danger",
                "Failed: Please check your email and try again."
              );
            } else {
              this.snackbar.showNotification(
                "snackbar-danger",
                err.message
              );
            }

            this.loading = false;
          },
          complete: () => { },
        }),
        Subscription;

      console.log(this.authForm.value);
    }
  }
}

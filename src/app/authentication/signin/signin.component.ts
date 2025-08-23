import { Component, HostListener, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/service/auth.service";
import { Role } from "src/app/core/models/role";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { TokenCookieService } from "src/app/core/service/token-storage-cookies.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ResetPasswordComponent } from "src/app/admin/modules/dashboard/pages/components/reset-password/reset-password.component";
import { Subject, takeUntil, Subscription } from "rxjs";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  authForm: FormGroup;
  submitted = false;
  loading = false;
  error = "";
  hide = true;
  branches: any[] = [];
  branchLoading = false;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];

  passwordFlag: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  downloadLoading: boolean = false;
  private reloadExecuted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private tokenCookieService: TokenCookieService,
    private dialog: MatDialog,
    private snackbar: SnackbarService
  ) {
    super();
  }

  ngOnInit() {
    const hasReloaded = sessionStorage.getItem('hasSignInReloaded');

    if (!hasReloaded) {
      sessionStorage.setItem('hasSignInReloaded', 'true'); 
      //location.reload(); 
    }

    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      branchID: ['00', Validators.required]
    });

    this.tokenCookieService.deleteUser();
    
    this.loadBranches();
  }

  loadBranches() {
    this.branchLoading = true;
    this.authService.getBranches()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.statusCode === 302) {
            this.branches = res.entity;
            if (this.branches.length > 0) {
              this.authForm.patchValue({
                branchID: this.branches[0].OurBranchID
              });
            }
          } else {
            this.snackbar.showNotification("snackbar-warning", "Could not load branches");
          }
          this.branchLoading = false;
        },
        error: (err) => {
          console.error("Error loading branches:", err);
          this.snackbar.showNotification("snackbar-danger", "Failed to load branches");
          this.branchLoading = false;
        }
      });
  }

  onBranchDropdownOpen() {
    if (this.branches.length === 0) {
      this.loadBranches();
    }
  }

  // onSubmit() {
  //   this.tokenCookieService.deleteUser();
  //   this.submitted = true;
  //   this.loading = true;
  //   this.error = "";
    
  //   if (this.authForm.invalid) {
  //     this.error = "Please fill all required fields!";
  //     this.loading = false;
  //     return;
  //   }
    
  //   const loginData = {
  //     operatorID: this.authForm.value.username,
  //     password: this.authForm.value.password,
  //     branchID: this.authForm.value.branchID
  //   };

  //   this.authService.login(loginData)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe({
  //       next: (res) => {
  //         console.log("res: ", res.body);

  //         if (res.body.statusCode == 200) {
  //           this.tokenCookieService.saveUser(res.body.entity);
            
  //           this.snackbar.showNotification(
  //             "snackbar-success",
  //             res.body.message
  //           );
  //           this.router.navigate(["/erp-dashboard/main"]);
  //         } else {
  //           this.snackbar.showNotification("snackbar-danger", res.body.message);
  //         }

  //         this.loading = false;
  //       },
  //       error: (err) => {
  //         console.log("err::: ", err)
  //         if (err.status === 401) {
  //           this.snackbar.showNotification(
  //               "snackbar-danger",
  //               "Authentication failed: Please check your credentials and try again."
  //           );
  //         } else if (err.status === 500) {
  //           this.snackbar.showNotification(
  //               "snackbar-danger",
  //               "Please ensure the username is valid or contact the System Administrator for assistance!"
  //           );
  //         } else {
  //           this.snackbar.showNotification(
  //             "snackbar-danger",
  //             err.message
  //           );
  //         }
          
  //         this.loading = false;
  //       }
  //     });
  // }

    onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = "";
  
    const hardcodedUsername = "admin";
    const hardcodedPassword = "password123";
    const hardcodedbranchID = "00";

    const enteredUsername = this.authForm.value.username;
    const enteredPassword = this.authForm.value.password;
    const enteredbranchID = this.authForm.value.branchID;
    if (enteredUsername === hardcodedUsername && enteredPassword === hardcodedPassword) {
      console.log("Login successful");
  
      
      const res = {
        status: 200,
        body: {
          entity: {
            message: "Login successful",
            
          }
        }
      };
  
      
      if (res.status === 200) {
        this.tokenCookieService.saveUser(res.body.entity); 
        this.snackbar.showNotification("snackbar-success", res.body.entity.message);
         this.router.navigate(["/erp-dashboard/main"]); 
        this.loading = false;
      } else {
        this.error = res.body.entity.message; 
        this.snackbar.showNotification("snackbar-danger", res.body.entity.message);
        this.loading = false;
      }
    } else {
      this.error = "Invalid Username or Password!";
      this.snackbar.showNotification("snackbar-danger", this.error);
      this.loading = false;
    }
  }
}
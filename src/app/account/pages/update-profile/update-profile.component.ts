import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { takeUntil } from "rxjs";
import { TokenStorageService } from "src/app/core/service/token-storage.service";
import { BaseComponent } from "src/app/shared/components/base/base.component";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
import { AccountService } from "../../data/services/account.service";
import { User } from "../../data/types/user";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/service/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-update-profile",
  templateUrl: "./update-profile.component.html",
  styleUrls: ["./update-profile.component.scss"],
})
export class UpdateProfileComponent extends BaseComponent implements OnInit {
  hide = true;
  userId: number;
  user: User;
  updatePasswordForm: FormGroup;
  profilePicForm: FormGroup;

  currentUser: any;
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private snackbar: SnackbarService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private authService: AuthService //private userService: UserService
  ) {
    super();
    this.currentUser = this.tokenStorage.getUser();
    console.log("this.tokenStorage.getUser(): ", this.tokenStorage.getUser());
  }

  //   {
  //   "confirmPassword": "string",
  //   "emailAddress": "string",
  //   "password": "string"
  // }

  ngOnInit(): void {
    this.getProfileImage();
    // Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character (As defined by the REGEX Below)
    // The password defined must be have between 10 - 25 characters
    this.updatePasswordForm = this.fb.group({
      emailAddress: [this.currentUser.email, [Validators.required]],
      // currentPassword: ["", [Validators.required]],
 

      password: [
        "",
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[(){}\[\]@$!%*?&\-._])[A-Za-z\d(){}\[\]@$!%*?&\-._]*$/),
          Validators.minLength(12),
          Validators.maxLength(25),
        ],
      ],

      confirmPassword: [
        "",
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[(){}\[\]@$!%*?&\-._])[A-Za-z\d(){}\[\]@$!%*?&\-._]*$/),
          Validators.minLength(12),
          Validators.maxLength(25),
        ],
      ],
    });

    this.profilePicForm = this.fb.group({
      empPf: [this.currentUser.empPfNo, [Validators.required]],
      imageFile: ["", [Validators.required]],
    });
  }

  updatePassword() {
    console.log(this.updatePasswordForm.value);
    if (
      this.updatePasswordForm.value.password !==
      this.updatePasswordForm.value.confirmPassword
    ) {
      this.snackbar.showNotification(
        "snackbar-danger",
        "Passwords don't match, Please check and retry!"
      );
    } else {
      this.authService
        .updatePassword(this.updatePasswordForm.value)
        .pipe(takeUntil(this.subject))
        .subscribe(
          (res) => {
            this.snackbar.showNotification("snackbar-success", res.message);
            console.log(res);

            this.router.navigate(["/erp-dashboard/main"]);
          },
          (err) => {
            console.log(err);

            this.snackbar.showNotification("snackbar-danger", err.message);
          }
        );
    }
  }


  profileImage: string | ArrayBuffer | null = null;
  showProfileImage: boolean = false;
  getProfileImage() {
    let params = {
      empPf: this.currentUser.empPfNo,
    };
    this.authService
      .getUserProfileImage(params)
      .pipe(takeUntil(this.subject))
      .subscribe(
        (res) => {

          // console.log("Res:: ", res)
          // this.snackbar.showNotification("snackbar-success", res.message);
          this.profileImage = res.entity.imageFile;
          if (res.entity.imageFile !== null && res.entity.imageFile !== undefined && res.entity.imageFile !== "") {
            this.profileImage = res.entity.imageFile;
          }else{
            this.snackbar.showNotification("snackbar-danger", 'No profile image exists for this user!');
          }
          
        },
        (err) => {
          console.log(err);

          this.snackbar.showNotification("snackbar-danger", err.message);
        }
      );
  }


  //************************************************************************************* */


  file_name = "";
  base64File: string;
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (!file) {
      Swal.fire("Error", "Please select an image file.", "error");
      return;
    }

    if (!file.type.startsWith("image/")) {
      Swal.fire("Error", "Please select an image file.", "error");
      return;
    }

    const img = new Image();
    img.src = window.URL.createObjectURL(file);

    img.onload = () => {
      const minWidth = 100; 
      const minHeight = 100; 
      const requiredResolution = 300; 

      if (img.width < minWidth || img.height < minHeight) {
        Swal.fire("Error", "Image dimensions are too small.", "error");
        return;
      }

      const resolution = img.width * img.height;
      if (resolution < requiredResolution) {
        Swal.fire("Error", "Image resolution is too low.", "error");
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        this.base64File = reader.result as string;
        this.file_name = file.name;
        this.profileImage = this.base64File;
        this.profilePicForm.patchValue({
          imageFile: this.base64File,
        });

        Swal.fire({
          title: "Change Profile Image?",
          text: "Are you sure you want to change your profile image?",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            this.uploadProfileImage();
          }
        });
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    };

    img.onerror = () => {
      // Handle case when image loading fails
      Swal.fire("Error", "Failed to load the image.", "error");
    };
  }


  uploadProfileImage() {
    console.log("this.profilePicForm: ", this.profilePicForm.value);

    this.authService
      .postProfileImage(this.profilePicForm.value)
      .pipe(takeUntil(this.subject))
      .subscribe(
        (res: any) => {
          this.snackbar.showNotification("snackbar-success", res.message);
          console.log(res);
          this.getProfileImage();
        },
        (err) => {
          console.log(err);
          this.snackbar.showNotification("snackbar-danger", err.message);
        }
      );
  }

  resetProfileImage(): void {
    this.profileImage = null;

    this.profilePicForm.patchValue({
      imageFile: "",
    });

    Swal.fire({
      title: "Reset Profile Image?",
      text: "Are you sure you want to reset your profile image?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        this.uploadProfileImage();
      }
    });
  }
  home(){ this.router.navigate(["/erp-dashboard/main"]);}

}

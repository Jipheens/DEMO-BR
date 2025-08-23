"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_account_account_module_ts"],{

/***/ 34742:
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountRoutingModule": () => (/* binding */ AccountRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/update-profile/update-profile.component */ 51818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "update-profile",
        component: _pages_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_0__.UpdateProfileComponent
    }
];
class AccountRoutingModule {
}
AccountRoutingModule.ɵfac = function AccountRoutingModule_Factory(t) { return new (t || AccountRoutingModule)(); };
AccountRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AccountRoutingModule });
AccountRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 63879:
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModule": () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 34742);
/* harmony import */ var _pages_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/update-profile/update-profile.component */ 51818);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);










class AccountModule {
}
AccountModule.ɵfac = function AccountModule_Factory(t) { return new (t || AccountModule)(); };
AccountModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AccountModule });
AccountModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AccountModule, { declarations: [_pages_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_1__.UpdateProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule] }); })();


/***/ }),

/***/ 6438:
/*!**********************************************************!*\
  !*** ./src/app/account/data/services/account.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class AccountService {
    constructor(http) {
        this.http = http;
    }
    // /soa/otherusers/find/{id}
    getUserById(userId) {
        const getUserByIdUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlAdmin}/soa/otherusers/find/${userId}`;
        return this.http.get(getUserByIdUrl);
    }
    updateProfile(profileBody) {
        const updatePasswordUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlAdmin}/soa/otherusers/updateprofile`;
        return this.http.put(updatePasswordUrl, profileBody);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 51818:
/*!**************************************************************************!*\
  !*** ./src/app/account/pages/update-profile/update-profile.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProfileComponent": () => (/* binding */ UpdateProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/base/base.component */ 15324);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _data_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/services/account.service */ 6438);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 87317);

















function UpdateProfileComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " About Me ");
} }
function UpdateProfileComponent_ng_template_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Settings ");
} }
function UpdateProfileComponent_mat_error_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " EmailAddress is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " New password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter atleast 10 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Characters must not exceed 25. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter atleast 10 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Characters must not exceed 25. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class UpdateProfileComponent extends src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(fb, accountService, snackbar, tokenStorage, router, authService //private userService: UserService
    ) {
        super();
        this.fb = fb;
        this.accountService = accountService;
        this.snackbar = snackbar;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.authService = authService;
        this.hide = true;
        this.profileImage = null;
        // uploadProfileImage() {
        //   this.authService
        //     .postProfileImage(this.updatePasswordForm.value)
        //     .pipe(takeUntil(this.subject))
        //     .subscribe(
        //       (res) => {
        //         this.snackbar.showNotification("snackbar-success", res.message);
        //         console.log(res);
        //         this.getProfileImage();
        //       },
        //       (err) => {
        //         console.log(err);
        //         this.snackbar.showNotification("snackbar-danger", err.message);
        //       }
        //     );
        // }
        //************************************************************************************* */
        // file_name = "";
        // base64File: string;
        // onFileSelected(event: any) {
        //   const file: File = event.target.files[0];
        //   const reader = new FileReader();
        //   reader.onloadend = () => {
        //     this.base64File = reader.result as string;
        //     this.file_name = file.name;
        //     this.profileImage = this.base64File;
        //     this.profilePicForm.patchValue({
        //       imageFile: this.base64File,
        //     });
        //   };
        //   if (file) {
        //     reader.readAsDataURL(file);
        //   }
        //   Swal.fire({
        //     title: "Change Profile Image?",
        //     text: "Are you sure you want to change your profile image?",
        //     icon: "question",
        //     showCancelButton: true,
        //     confirmButtonText: "Yes",
        //     cancelButtonText: "No",
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       this.uploadProfileImage();
        //     }
        //   });
        // }
        this.file_name = "";
        this.currentUser = this.tokenStorage.getUser();
        console.log("this.tokenStorage.getUser(): ", this.tokenStorage.getUser());
    }
    //   {
    //   "confirmPassword": "string",
    //   "emailAddress": "string",
    //   "password": "string"
    // }
    ngOnInit() {
        this.getProfileImage();
        // Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character (As defined by the REGEX Below)
        // The password defined must be have between 10 - 25 characters
        this.updatePasswordForm = this.fb.group({
            emailAddress: [this.currentUser.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            // currentPassword: ["", [Validators.required]],
            password: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(25),
                ],
            ],
            confirmPassword: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(25),
                ],
            ],
        });
        this.profilePicForm = this.fb.group({
            empPf: [this.currentUser.empPfNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            imageFile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        });
    }
    updatePassword() {
        console.log(this.updatePasswordForm.value);
        if (this.updatePasswordForm.value.password !==
            this.updatePasswordForm.value.confirmPassword) {
            this.snackbar.showNotification("snackbar-danger", "Passwords don't match, Please check and retry!");
        }
        else {
            this.authService
                .updatePassword(this.updatePasswordForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.subject))
                .subscribe((res) => {
                this.snackbar.showNotification("snackbar-success", res.message);
                console.log(res);
                this.router.navigate(["/erp-dashboard/main"]);
            }, (err) => {
                console.log(err);
                this.snackbar.showNotification("snackbar-danger", err.message);
            });
        }
    }
    getProfileImage() {
        let params = {
            empPf: this.currentUser.empPfNo,
        };
        this.authService
            .getUserProfileImage(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.subject))
            .subscribe((res) => {
            this.snackbar.showNotification("snackbar-success", res.message);
            if (res.entity.imageFile) {
                this.profileImage = res.entity.imageFile;
            }
        }, (err) => {
            console.log(err);
            this.snackbar.showNotification("snackbar-danger", err.message);
        });
    }
    onFileSelected(event) {
        const file = event.target.files[0];
        // Check if a file was selected
        if (!file) {
            // Handle case when no file is selected
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error", "Please select an image file.", "error");
            return;
        }
        // Check if the selected file is an image
        if (!file.type.startsWith("image/")) {
            // Handle case when selected file is not an image
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error", "Please select an image file.", "error");
            return;
        }
        // Create a new image object to check dimensions
        const img = new Image();
        img.src = window.URL.createObjectURL(file);
        img.onload = () => {
            // Check dimensions (e.g., width and height)
            const minWidth = 100; // Example minimum width
            const minHeight = 100; // Example minimum height
            const requiredResolution = 300; // Example required resolution
            if (img.width < minWidth || img.height < minHeight) {
                // Handle case when image dimensions are not met
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error", "Image dimensions are too small.", "error");
                return;
            }
            // Additional checks for resolution
            const resolution = img.width * img.height;
            if (resolution < requiredResolution) {
                // Handle case when image resolution is not met
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error", "Image resolution is too low.", "error");
                return;
            }
            // Proceed with reading the file
            const reader = new FileReader();
            reader.onloadend = () => {
                this.base64File = reader.result;
                this.file_name = file.name;
                this.profileImage = this.base64File;
                this.profilePicForm.patchValue({
                    imageFile: this.base64File,
                });
                // Show confirmation dialog after validating the image
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error", "Failed to load the image.", "error");
        };
    }
    uploadProfileImage() {
        console.log("this.profilePicForm: ", this.profilePicForm.value);
        this.authService
            .postProfileImage(this.profilePicForm.value)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.subject))
            .subscribe((res) => {
            this.snackbar.showNotification("snackbar-success", res.message);
            console.log(res);
            this.getProfileImage();
        }, (err) => {
            console.log(err);
            this.snackbar.showNotification("snackbar-danger", err.message);
        });
    }
    // Helper function to convert base64 to Blob
    // dataURItoBlob(dataURI: string) {
    //   const byteString = atob(dataURI.split(',')[1]);
    //   const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    //   const ab = new ArrayBuffer(byteString.length);
    //   const ia = new Uint8Array(ab);
    //   for (let i = 0; i < byteString.length; i++) {
    //     ia[i] = byteString.charCodeAt(i);
    //   }
    //   return new Blob([ab], { type: mimeString });
    // }
    home() { this.router.navigate(["/erp-dashboard/main"]); }
}
UpdateProfileComponent.ɵfac = function UpdateProfileComponent_Factory(t) { return new (t || UpdateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_data_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_4__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService)); };
UpdateProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UpdateProfileComponent, selectors: [["app-update-profile"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 231, vars: 38, consts: [[1, "dashboard"], [1, "container"], [1, "breadcrumb-banner", "bg-kingdom"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "click"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "clearfix", "my-4"], [1, "col-lg-4", "col-md-4", "col-sm-12", "col-xs-12"], [1, "card"], [1, "m-b-20"], [1, "contact-grid"], [1, "profile-header", "bg-dark"], [1, "user-name"], [1, "name-center"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["fileInput", ""], ["alt", "", 1, "user-img", 3, "src", "click"], [1, "phone"], [1, "material-icons"], [1, "col-lg-8", "col-md-12"], ["mat-tab-label", ""], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "project_widget"], [1, "header"], [1, "body"], [1, "row"], [1, "col-md-3", "col-6", "b-r", "mt-2", "mb-4"], [1, "text-muted"], [3, "formGroup"], [1, "example-container"], [1, "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12"], [1, "form-group"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "formControlName", "emailAddress", "required", "", "readonly", ""], [4, "ngIf"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled", "click"], [1, "footer"], [1, "col-md-2", "text-right", "client-logo"], ["src", "/assets/images/PBlogo.png", "alt", "Kingdom Bank logo", "height", "80px", "width", "80px"], [1, "col-md-6"], [1, "animated", "fadeInLeft"], [1, "animated", "fadeInRight"], [1, "col-md-4"], [1, "list-unstyled", "social-icons", "animated", "fadeInRight"], ["target", "_blank", "href", "https://facebook.com/kingdombank"], ["target", "_blank", "href", "https://twitter.com/kingdombank"], [1, "fab", "fa-twitter"], ["target", "_blank", "href", "https://linkedin.com/company/kingdombank"], [1, "col-md-2", "text-left", "vendor-logo"], ["src", "/assets/images/em2.png", "alt", "E&M Technology House logo", "height", "80px", "width", "80px", 1, "p-3"], ["target", "_blank", "href", "https://facebook.com/emtechhouse"], ["target", "_blank", "href", "https://twitter.com/emtechhouse"], ["target", "_blank", "href", "https://linkedin.com/company/emtechhouse"], [1, "animated", "bounceIn"], [1, "col-md-12", "text-center"], [1, "copyright", "animated", "pulse"], [1, "example-tab-icon", "msr-2"]], template: function UpdateProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Enterprise Resource Planning Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_a_click_8_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " User Account Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UpdateProfileComponent_Template_input_change_22_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_img_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Hurlingham Court, Argwings Kodhek Rd, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Nairobi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div")(30, "span", 19)(31, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "254...");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div")(35, "span", 19)(36, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 21)(40, "div", 10)(41, "mat-tab-group")(42, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, UpdateProfileComponent_ng_template_43_Template, 3, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 23)(45, "div", 24)(46, "div", 25)(47, "h2")(48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 26)(51, "div", 27)(52, "div", 28)(53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 28)(59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Second Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 28)(65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 28)(71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 28)(77, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "EmpPfNo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 28)(83, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "BranchCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 28)(89, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "DepartmentCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 28)(95, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, "CostCenterCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 28)(101, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div", 28)(107, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "Last Login Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](112, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "div", 28)(114, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "Browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "div", 28)(120, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, "OS");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](127, UpdateProfileComponent_ng_template_127_Template, 3, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "div", 25)(129, "h2")(130, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "div", 26)(134, "form", 30)(135, "div", 31)(136, "div", 27)(137, "div", 32)(138, "div", 33)(139, "mat-form-field", 34)(140, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, "EmailAddress");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](142, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](143, UpdateProfileComponent_mat_error_143_Template, 2, 0, "mat-error", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](144, "div", 32)(145, "div", 33)(146, "mat-form-field", 34)(147, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](148, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](149, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_150_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](153, UpdateProfileComponent_mat_error_153_Template, 2, 0, "mat-error", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](154, UpdateProfileComponent_mat_error_154_Template, 2, 0, "mat-error", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](155, UpdateProfileComponent_mat_error_155_Template, 2, 0, "mat-error", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](156, UpdateProfileComponent_mat_error_156_Template, 2, 0, "mat-error", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "div", 32)(158, "div", 33)(159, "mat-form-field", 34)(160, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](161, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](162, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_163_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](166, UpdateProfileComponent_mat_error_166_Template, 2, 0, "mat-error", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](167, UpdateProfileComponent_mat_error_167_Template, 2, 0, "mat-error", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](168, UpdateProfileComponent_mat_error_168_Template, 2, 0, "mat-error", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](169, UpdateProfileComponent_mat_error_169_Template, 2, 0, "mat-error", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_170_listener() { return ctx.updatePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](171, " Update Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "footer", 42)(173, "div", 1)(174, "div", 27)(175, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](176, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "div", 45)(178, "h4", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](179, "About Kingdom Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](181, " Kingdom Bank is a leading financial institution that provides a wide range of banking products and services to individuals and businesses. We are committed to providing our customers with the highest level of service and support. We are proud to be a trusted partner of E&M Technology House. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "div", 48)(183, "h4", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](184, "Connect with Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](185, "ul", 49)(186, "li")(187, "a", 50)(188, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](189, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](190, "Kingdom Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](191, "li")(192, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](193, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](194, "Kingdom Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](195, "li")(196, "a", 53)(197, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](198, "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](199, "Kingdom Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](200, "div", 27)(201, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](202, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](203, "div", 45)(204, "h4", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](205, "About E&M Technology House");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](206, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](207, " E&M Technology House is a leading provider of innovative IT solutions for businesses of all sizes. We offer a wide range of services, including software development, web design, and IT consulting. We are committed to providing our clients with high-quality, cost-effective solutions that help them achieve their business goals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](208, "div", 48)(209, "h4", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](210, "Connect with Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](211, "ul", 49)(212, "li")(213, "a", 56)(214, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](215, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](216, "E&M Technology House");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](217, "li")(218, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](219, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](220, "E&M Technology House");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](221, "li")(222, "a", 58)(223, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](224, "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](225, "E&M Technology House");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](226, "hr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](227, "div", 27)(228, "div", 60)(229, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](230, " \u00A9 2024 E&M ERP. All Rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentUser.emailAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentUser.role.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.profileImage || "assets/images/user/usrbig3.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentUser.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentUser.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentUser.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentUser.role.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentUser.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentUser.empPfNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentUser.branchCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.currentUser.departmentCode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.currentUser.costCenterCode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentUser.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](112, 35, ctx.currentUser.loginAt, "medium"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentUser.browser);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentUser.os);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.updatePasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.updatePasswordForm.get("emailAddress").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.updatePasswordForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.updatePasswordForm.get("password").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.updatePasswordForm.get("password").hasError("minLength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.updatePasswordForm.get("password").hasError("maxLength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.updatePasswordForm.get("confirmPassword").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.updatePasswordForm.get("confirmPassword").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.updatePasswordForm.get("confirmPassword").hasError("minLength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.updatePasswordForm.get("confirmPassword").hasError("maxLength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.updatePasswordForm.valid);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".breadcrumb-banner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  background-image: linear-gradient(to right, #1a1a1a, #354b2e);\n  border-radius: 10px;\n  transition: background-image 0.5s ease-in-out;\n}\n\n.breadcrumb-banner[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(to right, #3d392d, #1a1a1a);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n}\n\nnav[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n\nol.breadcrumb[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 10px;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n  transition: color 0.3s ease-in-out;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #9789de;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: calc(50% - 5px);\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #9789de transparent;\n}\n\n.user-det-box[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #003300, #270227);\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  padding: 10px;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.user-det-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: hidden;\n}\n\n.user-det-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {\n  flex: 1;\n  border-right: 1px solid #ffffff;\n}\n\n.user-det-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.user-det-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  color: #ffffff;\n}\n\n.user-det-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.user-det-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);\n}\n\n.content-animation[_ngcontent-%COMP%] {\n  animation: moving 10s linear infinite;\n}\n\n@keyframes moving {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.col-md-3[_ngcontent-%COMP%]:first-child   .content-animation[_ngcontent-%COMP%] {\n  animation-delay: -5s;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  padding: 15px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  padding-bottom: 10px;\n  margin-bottom: 0;\n  border-bottom: 2px solid #27ae60;\n}\n\n.custom-font[_ngcontent-%COMP%] {\n  color: #5b346a;\n  font-family: \"Dancing Script\", cursive;\n}\n\n.col-green[_ngcontent-%COMP%] {\n  color: #27ae60;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.6;\n  color: #333;\n}\n\n.table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  border: 1px solid #dcdcdc;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: 14px;\n  color: #555;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  display: inline-block;\n  font-weight: bold;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: 60px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n  font-weight: bold;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n@media (max-width: 1199px) {\n  .dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n}\n\n@media (max-width: 767px) {\n  .dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s, box-shadow 0.3s;\n  cursor: pointer;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 15px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #333;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 14px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 20px;\n  color: #007bff;\n  font-size: 14px;\n  text-decoration: none;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);\n  background: linear-gradient(rgba(234, 234, 234, 0.9), rgba(243, 243, 243, 0.6));\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  color: #555;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #333;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 14px;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1900px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.icon-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.view-details-icon[_ngcontent-%COMP%] {\n  color: #777;\n}\n\n.view-details-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.arrow-box-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: #f2f2f2;\n  width: 50px;\n  height: 50px;\n}\n\n.arrow-box-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 15px;\n  margin: auto;\n}\n\n.green-button[_ngcontent-%COMP%]:hover {\n  background-color: #4CAF50;\n}\n\n.custom-font[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.footer[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(to right, #100210, #1a1a1a);\n  \n}\n\n.footer[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #1a1a1a, #253221);\n  color: #fff;\n  padding: 30px 0;\n  border-radius: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  font-family: \"Merriweather\", serif;\n  margin-bottom: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n  font-family: \"Lato\", sans-serif;\n  line-height: 1.5;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  font-family: \"Lato\", sans-serif;\n  transition: color 0.3s ease-in-out;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #9789de;\n}\n\n.social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #444;\n  text-decoration: none;\n  transition: color 0.3s ease-in-out;\n}\n\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #9789de;\n}\n\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 10px;\n}\n\nhr[_ngcontent-%COMP%] {\n  border-top: 1px solid #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Lato\", sans-serif;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-top: 20px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.vendor-logo[_ngcontent-%COMP%], .client-logo[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.vendor-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .client-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.vendor-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 50%;\n  padding: 8px;\n}\n\n.client-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 50%;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFHQTtFQUNFLDZEQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGtDQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQUFGOztBQUtBO0VBQ0UsNkRBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtRUFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0FBSEY7O0FBS0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFLSTtFQUNFLE9BQUE7RUFDQSwrQkFBQTtBQUhOOztBQUtNO0VBQ0Usa0JBQUE7QUFIUjs7QUFNTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFKUjs7QUFPTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBTFI7O0FBVUU7RUFDRSwyQkFBQTtFQUNBLHlDQUFBO0FBUko7O0FBWUE7RUFDRSxxQ0FBQTtBQVRGOztBQVlBO0VBQ0U7SUFDRSx3QkFBQTtFQVRGO0VBV0E7SUFDRSw0QkFBQTtFQVRGO0FBQ0Y7O0FBWUE7RUFDRSxvQkFBQTtBQVZGOztBQWVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFaRjs7QUFjRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFaSjs7QUFlSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBYk47O0FBZU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFiUjs7QUFxQkE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBbEJGOztBQXFCQTtFQUNFLGNBQUE7RUFDQSxzQ0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxjQUFBO0FBbEJGOztBQXFCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFsQkY7O0FBcUJBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQWxCRjs7QUF5QkE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUF0QkY7O0FBd0JFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQXRCSjs7QUF3Qkk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBdEJOOztBQTBCRTtFQUNFLG1CQUFBO0FBeEJKOztBQTJCTTtFQURGO0lBRUksZUFBQTtJQUNBLGNBQUE7RUF4Qk47QUFDRjs7QUEwQk07RUFORjtJQU9JLGdCQUFBO0lBQ0EsZUFBQTtFQXZCTjtBQUNGOztBQTBCSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtBQXhCTjs7QUEwQk07RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUF4QlI7O0FBNEJRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBMUJWOztBQStCUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBN0JWOztBQWlDTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBL0JSOztBQWlDUTtFQUNFLDBCQUFBO0FBL0JWOztBQXFDSTtFQUNFLDJCQUFBO0VBQ0EseUNBQUE7RUFDQSwrRUFBQTtBQW5DTjs7QUEwQ0k7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQXhDTjs7QUEyQ0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUF6Q047O0FBNENJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUExQ047O0FBbURBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWhERjs7QUFtREE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQWhERjs7QUFtREE7RUFDRSxXQUFBO0FBaERGOztBQW1EQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBaERGOztBQXNEQTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQW5ERjs7QUFzREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFuREY7O0FBdURBO0VBQ0UseUJBQUE7QUFwREY7O0FBd0RBO0VBQ0UsaUNBQUE7QUFyREY7O0FBOERBO0VBQ0UsNkRBQUE7RUFBK0QsbUJBQUE7QUExRGpFOztBQTREQTtFQUNFLDZEQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXpERjs7QUE0REE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUF6REY7O0FBNERBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBekRGOztBQTREQTtFQUNFLG1CQUFBO0FBekRGOztBQTREQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7QUF6REY7O0FBNERBO0VBQ0UsY0FBQTtBQXpERjs7QUFzRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFuRkY7O0FBc0ZBO0VBQ0Usa0JBQUE7QUFuRkY7O0FBc0ZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7QUFuRkY7O0FBc0ZBO0VBQ0UsY0FBQTtBQW5GRjs7QUFzRkE7O0VBRUUsZUFBQTtFQUNBLGtCQUFBO0FBbkZGOztBQXNGQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQW5GRjs7QUFzRkE7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUFuRkY7O0FBc0ZBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUFuRkY7O0FBc0ZBO0VBQ0UscUJBQUE7QUFuRkY7O0FBcUZBO0VBQ0Usa0JBQUE7QUFsRkY7O0FBcUZBO0VBQ0UsY0FBQTtBQWxGRjs7QUFxRkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWxGRjs7QUFxRkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWxGRiIsImZpbGUiOiJ1cGRhdGUtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi5icmVhZGNydW1iLWJhbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxYTFhMWEsICMzNTRiMmUpOyBcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnJlYWRjcnVtYi1iYW5uZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZDM5MmQsICMxYTFhMWEpOyBcbn1cblxuaDEge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxubmF2IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyOyBcbn1cblxub2wuYnJlYWRjcnVtYiB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xuICBjb2xvcjogIzk3ODlkZTtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmU6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNXB4KTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAxMHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5Nzg5ZGUgdHJhbnNwYXJlbnQ7XG59XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4udXNlci1kZXQtYm94IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAzMzAwLCAjMjcwMjI3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBjb2xvcjogI2ZmZmZmZjtcblxuICAucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICAgIC5jb2wtbWQtMyB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZmZmZjtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgfVxuXG4gICAgICBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjsgXG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmOyBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIH1cbn1cblxuLmNvbnRlbnQtYW5pbWF0aW9uIHtcbiAgYW5pbWF0aW9uOiBtb3ZpbmcgMTBzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBtb3Zpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn1cblxuLmNvbC1tZC0zOmZpcnN0LWNoaWxkIC5jb250ZW50LWFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTVzO1xufVxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAuY29sLWxnLTYge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgIC5jYXJkIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7IFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyN2FlNjA7IFxufVxuXG4uY3VzdG9tLWZvbnQge1xuICBjb2xvcjogIzViMzQ2YTsgXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xufVxuXG4uY29sLWdyZWVuIHtcbiAgY29sb3I6ICMyN2FlNjA7IFxufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBjb2xvcjogIzMzMztcbn1cblxuLnRhYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcbn1cblxudGJvZHkgdHIgdGQge1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTU1OyBcbn1cblxudGJvZHkgdHIgdGQgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cblxuLy8gRGFzaGJvYXJkIHN0eWxlc1xuLmRhc2hib2FyZCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIFxuICAuYmxvY2staGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBcbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuICBcbiAgLnJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBcbiAgICAuY29sLWxnLTQge1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ib3gtcGFydCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAudGV4dCB7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBjb2xvcjogIzAwN2JmZjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuIFxuICAgIC5ib3gtcGFydDpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgcmdiYSgyMzQsIDIzNCwgMjM0LCAwLjkpLFxuICAgICAgICByZ2JhKDI0MywgMjQzLCAyNDMsIDAuNilcbiAgICAgICk7XG4gICAgfVxuICBcbiAgXG4gICAgLmJveC1wYXJ0IGkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICB9XG4gIFxuICAgIC5ib3gtcGFydCAudGl0bGUgaDMge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICBcbiAgICAuYm94LXBhcnQgLnRleHQgc3BhbiB7XG4gICAgICBjb2xvcjogIzc3NztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIFxuXG5cbiAgfVxufVxuXG4vLyBDb250YWluZXIgc3R5bGVzXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxOTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5pY29uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi52aWV3LWRldGFpbHMtaWNvbiB7XG4gIGNvbG9yOiAjNzc3OyBcbn1cblxuLnZpZXctZGV0YWlscy1pY29uIGkge1xuICBmb250LXNpemU6IDE0cHg7IFxuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5cblxuXG4uYXJyb3ctYm94LWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICB3aWR0aDogNTBweDsgXG4gIGhlaWdodDogNTBweDsgXG59XG5cbi5hcnJvdy1ib3gtaWNvbiBpIHtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5cbi5ncmVlbi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xufVxuXG5cbi5jdXN0b20tZm9udCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuXG5cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLmZvb3Rlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzEwMDIxMCwgIzFhMWExYSk7IC8qIFVwZGF0ZWQgY29sb3JzICovXG59XG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWExYTFhLCAjMjUzMjIxKTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmZvb3RlciBoNCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb290ZXIgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5mb290ZXIgdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9vdGVyIHVsIGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9vdGVyIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzk3ODlkZTtcbn1cblxuLy8gLnNvY2lhbC1pY29ucyB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyB9XG5cbi8vIC5zb2NpYWwtaWNvbnMgbGkge1xuLy8gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4vLyB9XG5cbi8vIC5zb2NpYWwtaWNvbnMgbGkgYSB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgIGNvbG9yOiAjNDQ0O1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4vLyB9XG5cbi8vIC5zb2NpYWwtaWNvbnMgbGkgYTpob3ZlciB7XG4vLyAgIGNvbG9yOiAjOTc4OWRlO1xuLy8gfVxuXG4vLyAuc29jaWFsLWljb25zIGxpIGEgbWF0LWljb24ge1xuLy8gICBmb250LXNpemU6IDI0cHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMTBweDtcbi8vIH1cblxuLnNvY2lhbC1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbnMgbGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zb2NpYWwtaWNvbnMgbGkgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5zb2NpYWwtaWNvbnMgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjOTc4OWRlO1xufVxuXG4uc29jaWFsLWljb25zIGxpIGEgbWF0LWljb24sXG4uc29jaWFsLWljb25zIGxpIGEgaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5ociB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5sb2dvOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLnZlbmRvci1sb2dvLCAuY2xpZW50LWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52ZW5kb3ItbG9nbyBpbWcsIC5jbGllbnQtbG9nbyBpbWcge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnZlbmRvci1sb2dvIGltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY2xpZW50LWxvZ28gaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAycHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 96358:
/*!*******************************************************!*\
  !*** ./src/app/core/service/token-storage.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenStorageService": () => (/* binding */ TokenStorageService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";
class TokenStorageService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("Content-Type", "application/json");
        this.horizontalPosition = "end";
        this.verticalPosition = "top";
    }
    getToken() {
        // get the name of the cookie to retrieve
        const name = "accessToken";
        // split the document.cookie string into an array of individual cookies
        const cookieArray = document.cookie.split(";");
        // loop through the cookies to find the one with the matching name
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            //console.log("cookieArray: ", cookieArray)
            // remove any leading spaces from the cookie string
            while (cookie.charAt(0) === " ") {
                cookie = cookie.substring(1);
            }
            // if the cookie name matches the desired name, return the cookie value
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        // if the cookie was not found, return null
        return null;
    }
    saveUser(user) {
        window.localStorage.removeItem(USER_KEY);
        window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        const user = window.localStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }
    getEmppf() {
        return this.getUser().empPfNo;
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
TokenStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_account_account_module_ts.js.map
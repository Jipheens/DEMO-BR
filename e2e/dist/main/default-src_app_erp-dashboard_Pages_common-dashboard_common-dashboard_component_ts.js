"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["default-src_app_erp-dashboard_Pages_common-dashboard_common-dashboard_component_ts"],{

/***/ 63431:
/*!***************************************************************************!*\
  !*** ./src/app/authentication/reset-password/reset-password.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-procurement/data/services/notification.service */ 67879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);















function ResetPasswordComponent_div_12_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " EmailAddress is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_12_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " New password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_12_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_12_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please enter atleast 10 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_12_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Characters must not exceed 25. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_12_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_12_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_12_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please enter atleast 10 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_12_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Characters must not exceed 25. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Kindly reset your password using the registered email, in order to proceed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 13)(6, "div", 14)(7, "div", 15)(8, "div", 16)(9, "mat-form-field", 17)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "EmailAddress");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ResetPasswordComponent_div_12_mat_error_13_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 15)(15, "div", 16)(16, "mat-form-field", 17)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResetPasswordComponent_div_12_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.hide = !ctx_r10.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ResetPasswordComponent_div_12_mat_error_23_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ResetPasswordComponent_div_12_mat_error_24_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ResetPasswordComponent_div_12_mat_error_25_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ResetPasswordComponent_div_12_mat_error_26_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 15)(28, "div", 16)(29, "mat-form-field", 17)(30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResetPasswordComponent_div_12_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.hide = !ctx_r12.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, ResetPasswordComponent_div_12_mat_error_36_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, ResetPasswordComponent_div_12_mat_error_37_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, ResetPasswordComponent_div_12_mat_error_38_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, ResetPasswordComponent_div_12_mat_error_39_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 24)(41, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResetPasswordComponent_div_12_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.resetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " Reset Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.updatePasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.updatePasswordForm.get("emailAddress").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r0.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r0.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.hide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.updatePasswordForm.get("password").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.updatePasswordForm.get("password").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.updatePasswordForm.get("password").hasError("minLength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.updatePasswordForm.get("password").hasError("maxLength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r0.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r0.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.hide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.updatePasswordForm.get("confirmPassword").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.updatePasswordForm.get("confirmPassword").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.updatePasswordForm.get("confirmPassword").hasError("minLength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.updatePasswordForm.get("confirmPassword").hasError("maxLength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("auth-spinner", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.loading)("disabled", !ctx_r0.updatePasswordForm.valid);
} }
class ResetPasswordComponent {
    constructor(notificationAPI, router, tokenStorage, fb, snackbar, dialogRef, data, authService) {
        this.notificationAPI = notificationAPI;
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.fb = fb;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.isSuccessful = false;
        this.isUploadFailed = false;
        this.errorMessage = "";
        this.hide1 = true;
        this.hide2 = true;
        this.hide = true;
        this.loading = false;
        this.showForm = false;
        this.Data = data.test;
    }
    ngOnInit() {
        this.currentUser = this.tokenStorage.getUser();
        this.currentUserName = this.tokenStorage.getUser().username;
        console.log("this.currentUser: ", this.currentUser.email);
        this.createForm();
        this.showForm = true;
    }
    createForm() {
        this.updatePasswordForm = this.fb.group({
            emailAddress: [this.currentUser.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            // currentPassword: ["", [Validators.required]],
            password: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(25),
                ],
            ],
            confirmPassword: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(25),
                ],
            ],
        });
    }
    // {
    //   "statusCode": 200,
    //   "message": "User Password updated successfully"
    // }
    resetPassword() {
        if (this.updatePasswordForm.value.password !== this.updatePasswordForm.value.confirmPassword) {
            this.snackbar.showNotification("snackbar-danger", "Passwords don't match, please check and retry!");
        }
        else if (this.updatePasswordForm.value.password.includes(this.currentUserName)) {
            this.notificationAPI.alertWarning("Password policy not met. Use a different password!");
        }
        else {
            this.loading = true;
            this.authService.updatePassword(this.updatePasswordForm.value).subscribe((res) => {
                console.log("res: ", res);
                this.loading = false;
                if (res.statusCode === 200) {
                    this.dialogRef.close({ event: "close", data: "Password reset" });
                    this.notificationAPI.alertSuccess(res.message);
                }
                else {
                    this.notificationAPI.alertWarning(res.message);
                }
            }, (err) => {
                this.loading = false;
                this.notificationAPI.alertWarning(err.message);
            });
        }
    }
    onClose() {
        this.tokenStorage.signOut(this.tokenStorage.getUser().refreshToken).subscribe((res) => {
            console.log("res: ", res);
            if (res.statusCode === 200) {
                this.router.navigate(["/authentication/signin"]);
                this.notificationAPI.alertSuccess(res.message);
            }
            else {
                this.notificationAPI.alertWarning(res.message);
                this.router.navigate(["/authentication/signin"]);
            }
        }, (err) => {
            console.log(err);
            this.dialogRef.close();
            this.router.navigate(["/authentication/signin"]);
            this.notificationAPI.alertWarning(err.message);
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 13, vars: 1, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/PBlogo.png", "width", "50px", "height", "50px", "alt", "avatar"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], [1, "mb-1", "text-dark", "text-center"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", "", 4, "ngIf"], ["mat-dialog-content", ""], [1, "card-body", "my-3"], [1, "text-dark"], [3, "formGroup"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "form-group"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "formControlName", "emailAddress", "required", "", "readonly", ""], [4, "ngIf"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "d-grid", "my-2"], ["mat-raised-button", "", "color", "primary", 1, "auth-form-btn", 3, "disabled", "click"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_9_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ResetPasswordComponent_div_12_Template, 43, 22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showForm);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 43356:
/*!************************************************************************************!*\
  !*** ./src/app/erp-dashboard/Pages/common-dashboard/common-dashboard.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonDashboardComponent": () => (/* binding */ CommonDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_app_authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/authentication/reset-password/reset-password.component */ 63431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/notification.service */ 67879);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);










function CommonDashboardComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Enterprise Resource Planning Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nav", 4)(6, "ol", 5)(7, "li", 6)(8, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Main Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "h4", 14)(19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Welcome back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 19)(26, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Our ERP system is designed to provide comprehensive solutions for your business processes. From managing operations to optimizing workflows, our system empowers your organization with efficiency and control. For any inquiries or assistance, our team is here to support you. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Thank you for choosing E&M Technology. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 9)(31, "div", 10)(32, "div", 11)(33, "div", 12)(34, "div", 13)(35, "h4", 14)(36, "div", 15)(37, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " User Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 19)(42, "table", 22)(43, "tbody")(44, "tr")(45, "td")(46, "span", 23)(47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "td")(52, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "tr")(55, "td")(56, "span", 23)(57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "tr")(64, "td")(65, "span", 23)(66, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "td")(71, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "tr")(74, "td")(75, "span", 23)(76, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 25)(83, "div", 12)(84, "div", 26)(85, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Branch Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 26)(91, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Department Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 26)(97, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Cost Center Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 28)(103, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Member Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 12)(109, "div", 29)(110, "div", 30)(111, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_div_click_113_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r1.openModule("EmployeeSelfServiceModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 35)(117, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Employee Self Service Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "div", 36)(120, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, " E&M's Employee Self Service Portal revolutionizes employee interactions, enabling efficiency and excellence. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_button_click_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.openModule("EmployeeSelfServiceModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, " Click to Proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "div", 29)(125, "div", 30)(126, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](127, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "span", 39)(129, "div", 40)(130, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_i_click_130_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.openModule("AdminModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](131, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "div", 35)(133, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "Admin Module");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "div", 36)(136, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, " E&M's Admin Module offers centralized control of system settings and user permissions for streamlined management. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_button_click_138_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.openModule("AdminModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, " Click to Proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "div", 29)(141, "div", 30)(142, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](143, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_div_click_144_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.openModule("ProcurementModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](145, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](146, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "div", 35)(148, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "Procurement Module");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "div", 36)(151, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, " E&M's Procurement Module streamlines procurement with suppliers, optimized decisions, and cost savings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_button_click_153_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.openModule("ProcurementModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, " Click to Proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "div", 29)(156, "div", 30)(157, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](158, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_div_click_159_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.openModule("HumanResourceModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](160, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](161, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "div", 35)(163, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, "HR Module");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "div", 36)(166, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, " E&M's HR Module empowers businesses with comprehensive features for streamlined workforce management. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_button_click_168_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.openModule("HumanResourceModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](169, " Click to Proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "div", 29)(171, "div", 30)(172, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](173, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_div_click_174_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.openModule("FinanceModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](175, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](176, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "div", 35)(178, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179, "Finance Module");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "div", 36)(181, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, " E&M's Finance Module offers powerful tools for accurate financial operations and informed decision-making. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_button_click_183_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.openModule("FinanceModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](184, " Click to Proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "div", 29)(186, "div", 30)(187, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](188, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_div_click_189_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.openModule("FixedAssetsModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](190, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](191, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "div", 35)(193, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, "Fixed Assets Module");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "div", 36)(196, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](197, " The Fixed Assets module provides comprehensive tracking, valuation, and reporting for efficient asset management. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_button_click_198_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.openModule("FixedAssetsModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](199, " Click to Proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "div", 29)(201, "div", 30)(202, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](203, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_div_click_204_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.openModule("SuppliersManagementModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](205, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](206, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "div", 35)(208, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, "Suppliers Portal Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](210, "div", 36)(211, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, " E&M's Supplier Management Module revolutionizes supplier interactions, enabling efficiency and excellence. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_button_click_213_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.openModule("SuppliersManagementModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](214, " Click to Proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](215, "div", 29)(216, "div", 30)(217, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](218, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_div_click_219_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.openModule("BudgetModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](220, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](221, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "div", 35)(223, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](224, "Budget Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "div", 36)(226, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](227, " Efficiently manage budget funds for optimal financial management and resource allocation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](228, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_button_click_228_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.openModule("BudgetModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](229, " Click to Proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "div", 29)(231, "div", 30)(232, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](233, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](234, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_div_click_234_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.openModule("ImprestModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](235, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](236, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](237, "div", 35)(238, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](239, "Imprest Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "div", 36)(241, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](242, " Centralized control optimizes imprest fund management for efficient operations and oversight. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](243, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_button_click_243_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.openModule("ImprestModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](244, " Click to Proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "div", 29)(246, "div", 30)(247, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](248, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](249, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_div_click_249_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.openModule("InventoryModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](250, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](251, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](252, "div", 35)(253, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](254, "Inventory Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](255, "div", 36)(256, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](257, " Efficiently manage inventory transactions and streamline payment processes for better financial control. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](258, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_button_click_258_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.openModule("InventoryModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](259, " Click to Proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](260, "div", 29)(261, "div", 30)(262, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](263, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_div_click_264_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.openModule("ERPReportsModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](265, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](266, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](267, "div", 35)(268, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](269, "ERP Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](270, "div", 36)(271, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](272, " Access comprehensive reports and analytics tailored to your ERP data for informed decision-making. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommonDashboardComponent_section_0_Template_button_click_273_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.openModule("ERPReportsModule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](274, " Click to Proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](275, "footer", 51)(276, "div", 2)(277, "div", 12)(278, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](279, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](280, "div", 54)(281, "h4", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](282, "About Kingdom Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](283, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](284, " Kingdom Bank is a leading financial institution that provides a wide range of banking products and services to individuals and businesses. We are committed to providing our customers with the highest level of service and support. We are proud to be a trusted partner of E&M Technology House. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](285, "div", 57)(286, "h4", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](287, "Connect with Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](288, "ul", 58)(289, "li")(290, "a", 59)(291, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](292, "facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](293, "Kingdom Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](294, "li")(295, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](296, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](297, "Kingdom Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](298, "li")(299, "a", 62)(300, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](301, "linkedin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](302, "Kingdom Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](303, "div", 12)(304, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](305, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](306, "div", 54)(307, "h4", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](308, "About E&M Technology House");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](309, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](310, " E&M Technology House is a leading provider of innovative IT solutions for businesses of all sizes. We offer a wide range of services, including software development, web design, and IT consulting. We are committed to providing our clients with high-quality, cost-effective solutions that help them achieve their business goals. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](311, "div", 57)(312, "h4", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](313, "Connect with Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](314, "ul", 58)(315, "li")(316, "a", 65)(317, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](318, "facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](319, "E&M Technology House");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](320, "li")(321, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](322, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](323, "E&M Technology House");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](324, "li")(325, "a", 67)(326, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](327, "linkedin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](328, "E&M Technology House");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](329, "hr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](330, "div", 12)(331, "div", 69)(332, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](333, " \u00A9 2024 E&M ERP. All Rights Reserved. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.currentUser.username, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.profileImage || "assets/images/user/profile_img.png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.currentUser.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentUser.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentUser.role.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentUser.branchCode || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentUser.departmentCode || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentUser.costCenterCode || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentUser.empPfNo || "-");
} }
class CommonDashboardComponent {
    constructor(router, notificationAPI, tokenCookieService, authService, dialog) {
        this.router = router;
        this.notificationAPI = notificationAPI;
        this.tokenCookieService = tokenCookieService;
        this.authService = authService;
        this.dialog = dialog;
        this.passwordFlag = "N";
        this.privileges = [];
        this.profileImage = null;
    }
    ngOnInit() {
        this.passwordFlag = this.tokenCookieService.getUser().isSystemGenPassword;
        this.currentUser = this.tokenCookieService.getUser();
        console.log("currentUser Main dashboard: ", this.currentUser);
        this.getProfileImage();
        if (this.currentUser !== null && this.currentUser !== undefined) {
            this.performTokenRefresh();
        }
        console.log("passwordFlag: ", this.passwordFlag);
        if (this.passwordFlag === "Y") {
            this.resetPassword();
        }
        else if (!this.passwordFlag) {
        }
    }
    //isSystemGenPassword
    resetPassword() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "600px";
        dialogConfig.data = {
            test: "username",
        };
        const dialogRef = this.dialog.open(src_app_authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => { });
    }
    ngOnDestroy() {
        if (this.tokenRefreshSubscription) {
            this.tokenRefreshSubscription.unsubscribe();
        }
    }
    performTokenRefresh() {
        const refreshToken = this.tokenCookieService.getSharedRefreshTokenFromCookie();
        console.log("retrived refreshToken: ", refreshToken);
        if (refreshToken) {
            this.tokenRefreshSubscription = this.authService
                .refreshAccessToken(refreshToken)
                .subscribe((response) => {
                // Token refreshed successfully, update user session details
                this.tokenCookieService.saveUser(response.entity);
            }, (error) => {
                // Token refresh failed, redirect user to login page
                this.router.navigate(["/authentication/signin"]);
            });
        }
        else {
            this.router.navigate(["/authentication/signin"]);
        }
    }
    ngAfterViewInit() { }
    openModule(module) {
        this.currentUser = this.tokenCookieService.getUser();
        const userId = this.currentUser.id;
        localStorage.setItem(`selectedModule_${userId}`, JSON.stringify(module));
        console.log("module: ", module);
        const moduleRoutes = {
            AdminModule: "/erp-admin/dashboard",
            ProcurementModule: "/erp-procurement/dashboard",
            HumanResourceModule: "/erp-hr/dashboard",
            EmployeeSelfServiceModule: "/erp-hr-self-service/dashboard",
            FinanceModule: "/erp-finance/dashboard",
            FixedAssetsModule: "/erp-fixed-assets/dashboard",
            SuppliersManagementModule: "/erp-suppliers-management/dashboard",
            BudgetModule: "/erp-budget/dashboard",
            ImprestModule: "/erp-imprest/dashboard",
            PrepaymentModule: "/erp-prepayment/dashboard",
            InventoryModule: "/erp-inventory/dashboard",
            ERPReportsModule: "/erp-reports/dashboard",
        };
        const route = moduleRoutes[module];
        if (route) {
            this.router.navigate([route]);
            console.log(`${module} module selected.`);
        }
        else {
            console.log("Invalid module selected.");
        }
        // if (
        //   module === "HumanResourceModule" ||
        //   module === "EmployeeSelfServiceModule"
        // ) {
        //   // Navigate to external dashboard for specific modules
        //   this.tokenCookieService.navigateToExternalDashboard(module).subscribe({
        //     next: (res) => {
        //       console.log("res: ", res.body);
        //       if (res.body.statusCode == 200) {
        //         // Handle success if needed
        //       } else {
        //         // Handle error if needed
        //       }
        //     },
        //     error: (err) => {
        //       // Handle error if needed
        //     },
        //     complete: () => {
        //       // Handle completion if needed
        //     },
        //   });
        // } else {
        //   // Navigate to internal module route for all other modules
        //   const route = moduleRoutes[module];
        //   if (route) {
        //     this.router.navigate([route]);
        //     console.log(`${module} module selected.`);
        //   } else {
        //     console.log("Invalid module selected.");
        //   }
        // }
    }
    onBackButton() {
        return;
    }
    getProfileImage() {
        let params = {
            empPf: this.currentUser.empPfNo,
        };
        this.authService.getUserProfileImage(params).subscribe((res) => {
            //this.snackbar.showNotification("snackbar-success", res.message);
            // console.log("getProfileImage res: ", res);
            if (res.entity && res.entity.imageFile) {
                this.profileImage = res.entity.imageFile;
            }
        }, (err) => {
            console.log(err);
            // this.snackbar.showNotification("snackbar-danger", err.message);
        });
    }
}
CommonDashboardComponent.ɵfac = function CommonDashboardComponent_Factory(t) { return new (t || CommonDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_2__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
CommonDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CommonDashboardComponent, selectors: [["app-common-dashboard"]], hostBindings: function CommonDashboardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("beforeunload", function CommonDashboardComponent_beforeunload_HostBindingHandler() { return ctx.onBackButton(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, decls: 1, vars: 1, consts: [["class", "dashboard", 4, "ngIf"], [1, "dashboard"], [1, "container"], [1, "breadcrumb-banner", "bg-kingdom"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "mt-2"], [1, "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "card-header"], [1, "custom-font"], [1, "col-green", "pt-1"], [1, "col-lg-2", "col-md-4", "col-sm-12", "col-xs-12", "p-2", "mt-3", "mb-1"], ["src", "assets/images/pngegg8.png", "alt", "", "width", "100%", "height", "auto", 1, "px-2", "mx-2"], [1, "col-lg-10", "col-md-8", "col-sm-12", "col-xs-12", "mt-3", "mb-1"], [1, "card-content"], ["width", "100%", "height", "auto", "alt", "", 1, "px-2", "mx-2", 3, "src"], [1, "table"], [1, "w-50"], [1, "badge", "col-purple"], [1, "user-det-box", "mb-2"], [1, "col-md-3", "col-6", "b-r", "content-animation"], [1, "text-muted"], [1, "col-md-3", "col-6", "content-animation"], [1, "col-lg-3", "col-md-6", "col-sm-12", "col-xs-12"], [1, "box-part"], [1, "icon-wrapper"], [1, "fas", "fa-user", "fa-3x", "col-green"], [1, "arrow-box-icon", 3, "click"], [1, "fas", "fa-sign-in-alt", "fa-3x"], [1, "title"], [1, "text"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1", "green-button", 3, "click"], [1, "fas", "fa-users", "fa-3x", "col-green"], [1, "view-details-icon"], [1, "arrow-box-icon"], [1, "fas", "fa-sign-in-alt", "fa-3x", 3, "click"], [1, "fas", "fa-shopping-cart", "fa-3x", "col-green"], [1, "fas", "fa-sign-in-alt", "fa-3x", "fa-3x"], [1, "fas", "fa-money-bill-wave", "fa-3x", "col-green"], [1, "fas", "fa-building", "fa-3x", "col-green"], [1, "fas", "fa-truck", "fa-3x", "col-green"], [1, "fas", "fa-money-bill-alt", "fa-3x", "col-green"], [1, "fas", "fa-money-check", "fa-3x", "col-green"], [1, "fas", "fa-credit-card", "fa-3x", "col-green"], [1, "fas", "fa-chart-bar", "fa-3x", "col-green"], [1, "footer"], [1, "col-md-2", "text-right", "client-logo"], ["src", "/assets/images/PBlogo.png", "alt", "Kingdom Bank logo", "height", "80px", "width", "80px"], [1, "col-md-6"], [1, "animated", "fadeInLeft"], [1, "animated", "fadeInRight"], [1, "col-md-4"], [1, "list-unstyled", "social-icons", "animated", "fadeInRight"], ["target", "_blank", "href", "https://facebook.com/kingdombank"], ["target", "_blank", "href", "https://twitter.com/kingdombank"], [1, "fab", "fa-twitter"], ["target", "_blank", "href", "https://linkedin.com/company/kingdombank"], [1, "col-md-2", "text-left", "vendor-logo"], ["src", "/assets/images/em2.png", "alt", "E&M Technology House logo", "height", "80px", "width", "80px", 1, "p-3"], ["target", "_blank", "href", "https://facebook.com/emtechhouse"], ["target", "_blank", "href", "https://twitter.com/emtechhouse"], ["target", "_blank", "href", "https://linkedin.com/company/emtechhouse"], [1, "animated", "bounceIn"], [1, "col-md-12", "text-center"], [1, "copyright", "animated", "pulse"]], template: function CommonDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CommonDashboardComponent_section_0_Template, 334, 10, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon], styles: [".breadcrumb-banner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  background-image: linear-gradient(to right, #1a1a1a, #354b2e);\n  border-radius: 10px;\n  transition: background-image 0.5s ease-in-out;\n}\n\n.breadcrumb-banner[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(to right, #3d392d, #1a1a1a);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n}\n\nnav[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n\nol.breadcrumb[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 10px;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n  transition: color 0.3s ease-in-out;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #9789de;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: calc(50% - 5px);\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #9789de transparent;\n}\n\n.user-det-box[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #003300, #270227);\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  padding: 10px;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.user-det-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: hidden;\n}\n\n.user-det-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {\n  flex: 1;\n  border-right: 1px solid #ffffff;\n}\n\n.user-det-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.user-det-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  color: #ffffff;\n}\n\n.user-det-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.user-det-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);\n}\n\n.content-animation[_ngcontent-%COMP%] {\n  animation: moving 10s linear infinite;\n}\n\n@keyframes moving {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.col-md-3[_ngcontent-%COMP%]:first-child   .content-animation[_ngcontent-%COMP%] {\n  animation-delay: -5s;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  padding: 15px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  padding-bottom: 10px;\n  margin-bottom: 0;\n  border-bottom: 2px solid #27ae60;\n}\n\n.custom-font[_ngcontent-%COMP%] {\n  color: #5b346a;\n  font-family: \"Dancing Script\", cursive;\n}\n\n.col-green[_ngcontent-%COMP%] {\n  color: #27ae60;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.6;\n  color: #333;\n}\n\n.table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  border: 1px solid #dcdcdc;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: 14px;\n  color: #555;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  display: inline-block;\n  font-weight: bold;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: 60px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n  font-weight: bold;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n@media (max-width: 1199px) {\n  .dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n}\n\n@media (max-width: 767px) {\n  .dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s, box-shadow 0.3s;\n  cursor: pointer;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 15px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #333;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 14px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 20px;\n  color: #007bff;\n  font-size: 14px;\n  text-decoration: none;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);\n  background: linear-gradient(rgba(234, 234, 234, 0.9), rgba(243, 243, 243, 0.6));\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  color: #555;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #333;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box-part[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 14px;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1800px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.icon-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.view-details-icon[_ngcontent-%COMP%] {\n  color: #777;\n}\n\n.view-details-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.arrow-box-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: #f2f2f2;\n  width: 50px;\n  height: 50px;\n}\n\n.arrow-box-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 15px;\n  margin: auto;\n}\n\n.green-button[_ngcontent-%COMP%]:hover {\n  background-color: #4CAF50;\n}\n\n.custom-font[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.footer[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(to right, #100210, #1a1a1a);\n  \n}\n\n.footer[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #1a1a1a, #253221);\n  color: #fff;\n  padding: 30px 0;\n  border-radius: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  font-family: \"Merriweather\", serif;\n  margin-bottom: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n  font-family: \"Lato\", sans-serif;\n  line-height: 1.5;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  font-family: \"Lato\", sans-serif;\n  transition: color 0.3s ease-in-out;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #9789de;\n}\n\n.social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #444;\n  text-decoration: none;\n  transition: color 0.3s ease-in-out;\n}\n\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #9789de;\n}\n\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 10px;\n}\n\nhr[_ngcontent-%COMP%] {\n  border-top: 1px solid #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Lato\", sans-serif;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-top: 20px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.vendor-logo[_ngcontent-%COMP%], .client-logo[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.vendor-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .client-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.vendor-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 50%;\n  padding: 8px;\n}\n\n.client-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 50%;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQUFGOztBQUdBO0VBQ0UsNkRBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0NBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0FBQUY7O0FBS0E7RUFDRSw2REFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1FQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7QUFIRjs7QUFLRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUhKOztBQUtJO0VBQ0UsT0FBQTtFQUNBLCtCQUFBO0FBSE47O0FBS007RUFDRSxrQkFBQTtBQUhSOztBQU1NO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpSOztBQU9NO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFMUjs7QUFVRTtFQUNFLDJCQUFBO0VBQ0EseUNBQUE7QUFSSjs7QUFZQTtFQUNFLHFDQUFBO0FBVEY7O0FBWUE7RUFDRTtJQUNFLHdCQUFBO0VBVEY7RUFXQTtJQUNFLDRCQUFBO0VBVEY7QUFDRjs7QUFZQTtFQUNFLG9CQUFBO0FBVkY7O0FBZUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQVpGOztBQWNFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVpKOztBQWVJO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFiTjs7QUFlTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQWJSOztBQXFCQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQWxCRjs7QUFxQkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLHNDQUFBO0FBbEJGOztBQXFCQTtFQUNFLGNBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBbEJGOztBQXlCQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQXRCRjs7QUF3QkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBdEJKOztBQXdCSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF0Qk47O0FBMEJFO0VBQ0UsbUJBQUE7QUF4Qko7O0FBMkJNO0VBREY7SUFFSSxlQUFBO0lBQ0EsY0FBQTtFQXhCTjtBQUNGOztBQTBCTTtFQU5GO0lBT0ksZ0JBQUE7SUFDQSxlQUFBO0VBdkJOO0FBQ0Y7O0FBMEJJO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0FBeEJOOztBQTBCTTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQXhCUjs7QUE0QlE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUExQlY7O0FBK0JRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUE3QlY7O0FBaUNNO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUEvQlI7O0FBaUNRO0VBQ0UsMEJBQUE7QUEvQlY7O0FBcUNJO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtFQUNBLCtFQUFBO0FBbkNOOztBQTBDSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBeENOOztBQTJDSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQXpDTjs7QUE0Q0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQTFDTjs7QUFpREE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBOUNGOztBQWlEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBOUNGOztBQWlEQTtFQUNFLFdBQUE7QUE5Q0Y7O0FBaURBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUE5Q0Y7O0FBb0RBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBakRGOztBQW9EQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWpERjs7QUFxREE7RUFDRSx5QkFBQTtBQWxERjs7QUFzREE7RUFDRSxpQ0FBQTtBQW5ERjs7QUE0REE7RUFDRSw2REFBQTtFQUErRCxtQkFBQTtBQXhEakU7O0FBMERBO0VBQ0UsNkRBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBdkRGOztBQTBEQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQXZERjs7QUEwREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUF2REY7O0FBMERBO0VBQ0UsbUJBQUE7QUF2REY7O0FBMERBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtBQXZERjs7QUEwREE7RUFDRSxjQUFBO0FBdkRGOztBQW9GQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWpGRjs7QUFvRkE7RUFDRSxrQkFBQTtBQWpGRjs7QUFvRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtBQWpGRjs7QUFvRkE7RUFDRSxjQUFBO0FBakZGOztBQW9GQTs7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7QUFqRkY7O0FBb0ZBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBakZGOztBQW9GQTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtBQWpGRjs7QUFvRkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQWpGRjs7QUFvRkE7RUFDRSxxQkFBQTtBQWpGRjs7QUFtRkE7RUFDRSxrQkFBQTtBQWhGRjs7QUFtRkE7RUFDRSxjQUFBO0FBaEZGOztBQW1GQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBaEZGOztBQW1GQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBaEZGIiwiZmlsZSI6ImNvbW1vbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4uYnJlYWRjcnVtYi1iYW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWExYTFhLCAjMzU0YjJlKTsgXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmJyZWFkY3J1bWItYmFubmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2QzOTJkLCAjMWExYTFhKTsgXG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxub2wuYnJlYWRjcnVtYiB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xuICBjb2xvcjogIzk3ODlkZTtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmU6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNXB4KTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAxMHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5Nzg5ZGUgdHJhbnNwYXJlbnQ7XG59XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4udXNlci1kZXQtYm94IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAzMzAwLCAjMjcwMjI3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBjb2xvcjogI2ZmZmZmZjtcblxuICAucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICAgIC5jb2wtbWQtMyB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZmZmZjtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgfVxuXG4gICAgICBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjsgXG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmOyBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIH1cbn1cblxuLmNvbnRlbnQtYW5pbWF0aW9uIHtcbiAgYW5pbWF0aW9uOiBtb3ZpbmcgMTBzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBtb3Zpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn1cblxuLmNvbC1tZC0zOmZpcnN0LWNoaWxkIC5jb250ZW50LWFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTVzO1xufVxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAuY29sLWxnLTYge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgIC5jYXJkIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7IFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyN2FlNjA7IFxufVxuXG4uY3VzdG9tLWZvbnQge1xuICBjb2xvcjogIzViMzQ2YTsgXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xufVxuXG4uY29sLWdyZWVuIHtcbiAgY29sb3I6ICMyN2FlNjA7IFxufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBjb2xvcjogIzMzMztcbn1cblxuLnRhYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcbn1cblxudGJvZHkgdHIgdGQge1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTU1OyBcbn1cblxudGJvZHkgdHIgdGQgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cblxuLy8gRGFzaGJvYXJkIHN0eWxlc1xuLmRhc2hib2FyZCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIFxuICAuYmxvY2staGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBcbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuICBcbiAgLnJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBcbiAgICAuY29sLWxnLTQge1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ib3gtcGFydCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAudGV4dCB7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBjb2xvcjogIzAwN2JmZjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuIFxuICAgIC5ib3gtcGFydDpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgcmdiYSgyMzQsIDIzNCwgMjM0LCAwLjkpLFxuICAgICAgICByZ2JhKDI0MywgMjQzLCAyNDMsIDAuNilcbiAgICAgICk7XG4gICAgfVxuICBcbiAgXG4gICAgLmJveC1wYXJ0IGkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICB9XG4gIFxuICAgIC5ib3gtcGFydCAudGl0bGUgaDMge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICBcbiAgICAuYm94LXBhcnQgLnRleHQgc3BhbiB7XG4gICAgICBjb2xvcjogIzc3NztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIFxuICB9XG59XG5cbi8vIENvbnRhaW5lciBzdHlsZXNcbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmljb24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZpZXctZGV0YWlscy1pY29uIHtcbiAgY29sb3I6ICM3Nzc7IFxufVxuXG4udmlldy1kZXRhaWxzLWljb24gaSB7XG4gIGZvbnQtc2l6ZTogMTRweDsgXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cblxuXG5cbi5hcnJvdy1ib3gtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHdpZHRoOiA1MHB4OyBcbiAgaGVpZ2h0OiA1MHB4OyBcbn1cblxuLmFycm93LWJveC1pY29uIGkge1xuICBjb2xvcjogIzc3NztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cblxuLmdyZWVuLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG59XG5cblxuLmN1c3RvbS1mb250IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5cblxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIFxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4uZm9vdGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTAwMjEwLCAjMWExYTFhKTsgLyogVXBkYXRlZCBjb2xvcnMgKi9cbn1cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxYTFhMWEsICMyNTMyMjEpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMzBweCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZm9vdGVyIGg0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvb3RlciBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmZvb3RlciB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb290ZXIgdWwgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb290ZXIgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjOTc4OWRlO1xufVxuXG4vLyAuc29jaWFsLWljb25zIHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vIH1cblxuLy8gLnNvY2lhbC1pY29ucyBsaSB7XG4vLyAgIG1hcmdpbi1yaWdodDogMTBweDtcbi8vIH1cblxuLy8gLnNvY2lhbC1pY29ucyBsaSBhIHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgY29sb3I6ICM0NDQ7XG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbi8vIH1cblxuLy8gLnNvY2lhbC1pY29ucyBsaSBhOmhvdmVyIHtcbi8vICAgY29sb3I6ICM5Nzg5ZGU7XG4vLyB9XG5cbi8vIC5zb2NpYWwtaWNvbnMgbGkgYSBtYXQtaWNvbiB7XG4vLyAgIGZvbnQtc2l6ZTogMjRweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuLy8gfVxuXG4uc29jaWFsLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNvY2lhbC1pY29ucyBsaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnNvY2lhbC1pY29ucyBsaSBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnNvY2lhbC1pY29ucyBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICM5Nzg5ZGU7XG59XG5cbi5zb2NpYWwtaWNvbnMgbGkgYSBtYXQtaWNvbixcbi5zb2NpYWwtaWNvbnMgbGkgYSBpIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmxvZ286aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4udmVuZG9yLWxvZ28sIC5jbGllbnQtbG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnZlbmRvci1sb2dvIGltZywgLmNsaWVudC1sb2dvIGltZyB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udmVuZG9yLWxvZ28gaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jbGllbnQtbG9nbyBpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDJweDtcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_erp-dashboard_Pages_common-dashboard_common-dashboard_component_ts.js.map
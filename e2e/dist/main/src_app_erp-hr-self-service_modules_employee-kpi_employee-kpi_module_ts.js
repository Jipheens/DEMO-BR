"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-hr-self-service_modules_employee-kpi_employee-kpi_module_ts"],{

/***/ 93539:
/*!***********************************************************************!*\
  !*** ./src/@core/Models/Notification/notification-service.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationServiceService": () => (/* binding */ NotificationServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);


class NotificationServiceService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.horizontalPosition = 'end';
        this.verticalPosition = 'top';
    }
    showSuccessNotification(arg0) {
        throw new Error('Method not implemented.');
    }
    showSuccess(arg0) {
        throw new Error('Method not implemented.');
    }
    showError(message) {
        throw new Error('Method not implemented.');
    }
    alertSuccess(message) {
        this.snackBar.open(message, "OK", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000,
            panelClass: ['mat-toolbar', 'snackbar-success']
        });
    }
    alertWarning(message) {
        this.snackBar.open(message, "X", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000,
            panelClass: ['mat-toolbar', 'snackbar-danger']
        });
    }
    alertWarningByDuration(message, duration) {
        this.snackBar.open(message, "X", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: duration,
            panelClass: ['mat-toolbar', 'snackbar-danger']
        });
    }
}
NotificationServiceService.ɵfac = function NotificationServiceService_Factory(t) { return new (t || NotificationServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar)); };
NotificationServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationServiceService, factory: NotificationServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 89877:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-kpi/dialogs/manage-kpi-goal-achievement/manage-kpi-goal-achievement.component.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageKpiGoalAchievementComponent": () => (/* binding */ ManageKpiGoalAchievementComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_hr_data_kpi_services_kpi_goal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-hr/data/kpi-services/kpi-goal.service */ 88067);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 43365);


















function ManageKpiGoalAchievementComponent_div_1_div_38_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageKpiGoalAchievementComponent_div_1_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "mat-form-field", 18)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Non-Quantitative Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ManageKpiGoalAchievementComponent_div_1_div_38_mat_error_5_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("nonQuantitativeAchieved").hasError("required"));
} }
function ManageKpiGoalAchievementComponent_div_1_div_39_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageKpiGoalAchievementComponent_div_1_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "mat-form-field", 18)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Employee Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ManageKpiGoalAchievementComponent_div_1_div_39_Template_input_blur_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.onScore($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ManageKpiGoalAchievementComponent_div_1_div_39_mat_error_5_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.mngForm.get("employeeScore").hasError("required"));
} }
function ManageKpiGoalAchievementComponent_div_1_div_40_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageKpiGoalAchievementComponent_div_1_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "mat-form-field", 18)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Quantitative Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ManageKpiGoalAchievementComponent_div_1_div_40_mat_error_5_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.mngForm.get("quantitativeAchieved").hasError("required"));
} }
function ManageKpiGoalAchievementComponent_div_1_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "div", 17)(2, "div", 23)(3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageKpiGoalAchievementComponent_div_1_div_41_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r10.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageKpiGoalAchievementComponent_div_1_div_41_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r12.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("auth-spinner", ctx_r4.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r4.mngForm.valid || ctx_r4.posting);
} }
function ManageKpiGoalAchievementComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Goal Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageKpiGoalAchievementComponent_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Strategic Objective:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Tactical Performance:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 8)(23, "div", 12)(24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Weight:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Max Score:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Results & Scores");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "form", 14)(37, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, ManageKpiGoalAchievementComponent_div_1_div_38_Template, 6, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, ManageKpiGoalAchievementComponent_div_1_div_39_Template, 6, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ManageKpiGoalAchievementComponent_div_1_div_40_Template, 6, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, ManageKpiGoalAchievementComponent_div_1_div_41_Template, 7, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.strategicObjective);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.tacticalPerfomance);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.maxScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.quantitative == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.quantitative == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.quantitative == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.viewMode);
} }
class ManageKpiGoalAchievementComponent {
    constructor(dialogRef, data, fb, snackbar, kpiGoalService, dialog, notificationAPI) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.kpiGoalService = kpiGoalService;
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.displayedColumns = ["index", "filename", "filetype", "action"];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        this.downloadLoading = false;
        this.pageFunction = "Add";
        this.quantitative = 'Y';
        this.posting = false;
    }
    ngOnInit() {
        this.pageFunction = this.data.action;
        this.Data = this.data.record;
        this.quantitative = this.Data.isQuantitative;
        this.strategicObjective = this.Data.strategicObjective;
        this.tacticalPerfomance = this.Data.tacticalPerfomance;
        this.weight = this.Data.weight;
        this.maxScore = this.weight * 2;
        this.mngForm = this.fb.group({
            id: [this.Data.id],
            nonQuantitativeAchieved: ['N/A'],
            employeeScore: [''],
            quantitativeAchieved: ['0']
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.input = filterValue;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    percentageValidator(control) {
        const value = control.value;
        const maxAchieved = this.weight * 2;
        if (value && (isNaN(value) || value < 0 || value > maxAchieved)) {
            this.notificationAPI.alertWarning("You maximum value for this is " + maxAchieved);
            return { 'invalidPercentage': true };
        }
        return null;
    }
    onScore($event) {
        this.percentageValidator(this.mngForm.controls.score);
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        this.posting = true;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams()
            .set('id', this.mngForm.controls.id.value)
            .set('nonQuantitativeAchieved', this.mngForm.controls.nonQuantitativeAchieved.value)
            .set('employeeScore', this.mngForm.controls.employeeScore.value)
            .set('quantitativeAchieved', this.mngForm.controls.quantitativeAchieved.value);
        this.kpiGoalService
            .appraisal(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res: ", res);
                if (res.statusCode == 200) {
                    this.snackbar.showNotification("snackbar-success", res.message);
                    this.onNoClick();
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
                this.posting = false;
            },
            complete: () => {
                this.posting = false;
            },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription;
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.response });
    }
}
ManageKpiGoalAchievementComponent.ɵfac = function ManageKpiGoalAchievementComponent_Factory(t) { return new (t || ManageKpiGoalAchievementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_hr_data_kpi_services_kpi_goal_service__WEBPACK_IMPORTED_MODULE_1__.KpiGoalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_2__.NotificationServiceService)); };
ManageKpiGoalAchievementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ManageKpiGoalAchievementComponent, selectors: [["app-manage-kpi-goal-achievement"]], viewQuery: function ManageKpiGoalAchievementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 2, vars: 1, consts: [[1, "addContainer"], ["class", "contact-details", 4, "ngIf"], [1, "contact-details"], [1, "modalHeader"], [1, "contact-details-name", "mb-1"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "row", "mt-1", 2, "width", "98%", "margin-left", "20px"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], [1, "row", "justify-content-center"], [1, "col-5", "m-b-10"], [1, "col-7", "pro-left", "m-b-10"], [1, "row"], [1, "mx-2"], [1, "register-form", "mx-2", 3, "formGroup"], ["class", "col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-1", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "nonQuantitativeAchieved", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "employeeScore", "type", "number", 3, "blur"], ["matInput", "", "formControlName", "quantitativeAchieved", "type", "number"], ["align", "end", 1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]], template: function ManageKpiGoalAchievementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManageKpiGoalAchievementComponent_div_1_Template, 42, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2Uta3BpLWdvYWwtYWNoaWV2ZW1lbnQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 12844:
/*!***************************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-kpi/dialogs/manage-kpi-goal/manage-kpi-goal.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageKpiGoalComponent": () => (/* binding */ ManageKpiGoalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_hr_data_kpi_services_kpi_goal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-hr/data/kpi-services/kpi-goal.service */ 88067);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ 68390);



















function ManageKpiGoalComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-bar", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageKpiGoalComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Employee PF is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageKpiGoalComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Department Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageKpiGoalComponent_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quarter_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", quarter_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](quarter_r12);
} }
function ManageKpiGoalComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Quarter is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageKpiGoalComponent_mat_error_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select an option for Is Quantitative ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageKpiGoalComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "mat-form-field", 14)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Non-Quantitative Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "compare_arrows");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
function ManageKpiGoalComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "mat-form-field", 14)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Quantitative Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "compare_arrows");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
function ManageKpiGoalComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Strategic Objective is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageKpiGoalComponent_mat_error_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Tactical Performance is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageKpiGoalComponent_mat_error_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Weight is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageKpiGoalComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div", 36)(2, "div", 37)(3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageKpiGoalComponent_div_80_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageKpiGoalComponent_div_80_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("auth-spinner", ctx_r11.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r11.mngForm.valid || ctx_r11.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r11.pageFunction, " Goal ");
} }
class ManageKpiGoalComponent {
    constructor(dialogRef, data, fb, snackbar, kpiGoalService, dialog, filesService, tokenStorageService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.kpiGoalService = kpiGoalService;
        this.dialog = dialog;
        this.filesService = filesService;
        this.tokenStorageService = tokenStorageService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.downloadLoading = false;
        this.pageFunction = "Add";
        this.hideSubmit = false;
        this.isLoading = true;
        this.quarterArray = ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'];
        this.disableTransactionType = true;
        this.viewMode = false;
        this.posting = false;
    }
    ngOnInit() {
        console.log("LOG DATA = ", this.data);
        this.pageFunction = this.data.action;
        this.formData = this.data.record;
        this.generateForm(this.formData);
        this.getPage();
    }
    ngAfterViewInit() {
        if (this.data.action !== "Add") {
            this.generateForm(this.formData);
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getPage() {
        this.disableTransactionType = true;
        console.log("this.data.action :", this.data.action);
        if (this.data.action === "Add") {
            this.isLoading = false;
            this.generateForm(this.data.record);
        }
        else if (this.data.action === "Update") {
            this.generateForm(this.data.record);
        }
        else if (this.data.action === "View") {
            this.generateForm(this.data.record);
            this.activateViewMode();
        }
        this.isLoading = false;
    }
    quantitativeChange(event) {
        if (event.value == 'Y') {
            this.mngForm.controls.nonQuantitativeTarget.setValue('');
        }
        else {
            this.mngForm.controls.quantitativeTarget.setValue('');
        }
    }
    generateForm(formData) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        console.log("generateForm formData :: ", formData);
        this.mngForm = this.fb.group({
            departmentCode: [(_a = formData === null || formData === void 0 ? void 0 : formData.departmentCode) !== null && _a !== void 0 ? _a : this.tokenStorageService.getUser().departmentCode, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            costcentercode: [(_b = formData === null || formData === void 0 ? void 0 : formData.departmentCode) !== null && _b !== void 0 ? _b : this.tokenStorageService.getUser().costCenterCode, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            empPf: [(_c = formData === null || formData === void 0 ? void 0 : formData.empPf) !== null && _c !== void 0 ? _c : this.tokenStorageService.getEmppf(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            isQuantitative: [(_d = formData === null || formData === void 0 ? void 0 : formData.isQuantitative) !== null && _d !== void 0 ? _d : 'Y', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            nonQuantitativeTarget: [(_e = formData === null || formData === void 0 ? void 0 : formData.nonQuantitativeTarget) !== null && _e !== void 0 ? _e : ''],
            quantitativeTarget: [(_f = formData === null || formData === void 0 ? void 0 : formData.quantitativeTarget) !== null && _f !== void 0 ? _f : 0],
            quarter: [(_g = formData === null || formData === void 0 ? void 0 : formData.quarter) !== null && _g !== void 0 ? _g : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            strategicObjective: [(_h = formData === null || formData === void 0 ? void 0 : formData.strategicObjective) !== null && _h !== void 0 ? _h : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            tacticalPerfomance: [(_j = formData === null || formData === void 0 ? void 0 : formData.tacticalPerfomance) !== null && _j !== void 0 ? _j : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            weight: [(_k = formData === null || formData === void 0 ? void 0 : formData.weight) !== null && _k !== void 0 ? _k : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
    }
    activateViewMode() {
        this.viewMode = true;
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        this.posting = true;
        if (this.pageFunction === "Add") {
            this.kpiGoalService.create(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    this.response = res;
                    console.log("res: ", res);
                    if (res.statusCode == 201) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                },
                complete: () => {
                    this.posting = false;
                    setTimeout(() => {
                        this.onNoClick();
                    }, 3000);
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.kpiGoalService.update(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    this.response = res;
                    console.log("resres:: ", res);
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                },
                complete: () => {
                    this.posting = false;
                    setTimeout(() => {
                        this.onNoClick();
                    }, 3000);
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription;
        }
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.response });
    }
}
ManageKpiGoalComponent.ɵfac = function ManageKpiGoalComponent_Factory(t) { return new (t || ManageKpiGoalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_hr_data_kpi_services_kpi_goal_service__WEBPACK_IMPORTED_MODULE_1__.KpiGoalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_2__.FilesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService)); };
ManageKpiGoalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ManageKpiGoalComponent, selectors: [["app-manage-kpi-goal"]], decls: 81, vars: 14, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/em.png", "width", "30px", "height", "30px", "alt", ""], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], ["class", "m-2", 4, "ngIf"], [1, "mx-2"], [1, "register-form", "mx-2", 3, "formGroup"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "mb-1"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "empPf", "required", "", "readonly", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "departmentCode", "required", "", "readonly", ""], ["formControlName", "quarter", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-section"], [1, "example-margin"], ["formControlName", "isQuantitative", 3, "change"], ["value", "Y", 1, "example-margin"], ["value", "N", 1, "example-margin"], ["class", "col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-1", 4, "ngIf"], ["matInput", "", "formControlName", "strategicObjective", "required", ""], ["matInput", "", "formControlName", "tacticalPerfomance", "required", ""], ["matInput", "", "formControlName", "weight", "required", ""], ["class", "row", 4, "ngIf"], [1, "m-2"], ["color", "primary", "mode", "indeterminate"], [3, "value"], ["matInput", "", "formControlName", "nonQuantitativeTarget"], ["matInput", "", "formControlName", "quantitativeTarget"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["align", "end", 1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]], template: function ManageKpiGoalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageKpiGoalComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ManageKpiGoalComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Goal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "form", 11)(18, "div", 12)(19, "div", 13)(20, "mat-form-field", 14)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Employee PF");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "compare_arrows");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ManageKpiGoalComponent_mat_error_26_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 13)(28, "mat-form-field", 14)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Department Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "compare_arrows");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ManageKpiGoalComponent_mat_error_34_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 13)(36, "mat-form-field", 14)(37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Quarter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ManageKpiGoalComponent_mat_option_40_Template, 2, 2, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "compare_arrows");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, ManageKpiGoalComponent_mat_error_43_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 13)(45, "section", 21)(46, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Is Quantitative?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-radio-group", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ManageKpiGoalComponent_Template_mat_radio_group_change_48_listener($event) { return ctx.quantitativeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-radio-button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-radio-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, ManageKpiGoalComponent_mat_error_53_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, ManageKpiGoalComponent_div_54_Template, 7, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, ManageKpiGoalComponent_div_55_Template, 7, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 13)(57, "mat-form-field", 14)(58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Strategic Objective");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "compare_arrows");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, ManageKpiGoalComponent_mat_error_63_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 13)(65, "mat-form-field", 14)(66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Tactical Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "compare_arrows");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](71, ManageKpiGoalComponent_mat_error_71_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 13)(73, "mat-form-field", 14)(74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "compare_arrows");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, ManageKpiGoalComponent_mat_error_79_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, ManageKpiGoalComponent_div_80_Template, 7, 4, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("empPf").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("departmentCode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.quarterArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("quarter").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("isQuantitative").invalid && ctx.mngForm.get("isQuantitative").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("isQuantitative").value === "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("isQuantitative").value === "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("strategicObjective").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("tacticalPerfomance").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("weight").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.viewMode);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2Uta3BpLWdvYWwuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 84268:
/*!*****************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-kpi/employee-kpi-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeKpiRoutingModule": () => (/* binding */ EmployeeKpiRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _kpi_details_page_kpi_details_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kpi-details-page/kpi-details-page.component */ 52533);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: "",
        component: _kpi_details_page_kpi_details_page_component__WEBPACK_IMPORTED_MODULE_0__.KpiDetailsPageComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: {
            clientName: "EmployeePortalModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
];
class EmployeeKpiRoutingModule {
}
EmployeeKpiRoutingModule.ɵfac = function EmployeeKpiRoutingModule_Factory(t) { return new (t || EmployeeKpiRoutingModule)(); };
EmployeeKpiRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmployeeKpiRoutingModule });
EmployeeKpiRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmployeeKpiRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 81690:
/*!*********************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-kpi/employee-kpi.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeKpiModule": () => (/* binding */ EmployeeKpiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _employee_kpi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-kpi-routing.module */ 84268);
/* harmony import */ var _kpi_details_page_kpi_details_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kpi-details-page/kpi-details-page.component */ 52533);
/* harmony import */ var _dialogs_manage_kpi_goal_manage_kpi_goal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/manage-kpi-goal/manage-kpi-goal.component */ 12844);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 25490);
/* harmony import */ var _dialogs_manage_kpi_goal_achievement_manage_kpi_goal_achievement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/manage-kpi-goal-achievement/manage-kpi-goal-achievement.component */ 89877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);









class EmployeeKpiModule {
}
EmployeeKpiModule.ɵfac = function EmployeeKpiModule_Factory(t) { return new (t || EmployeeKpiModule)(); };
EmployeeKpiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: EmployeeKpiModule });
EmployeeKpiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _employee_kpi_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeKpiRoutingModule,
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](EmployeeKpiModule, { declarations: [_kpi_details_page_kpi_details_page_component__WEBPACK_IMPORTED_MODULE_1__.KpiDetailsPageComponent,
        _dialogs_manage_kpi_goal_manage_kpi_goal_component__WEBPACK_IMPORTED_MODULE_2__.ManageKpiGoalComponent,
        _dialogs_manage_kpi_goal_achievement_manage_kpi_goal_achievement_component__WEBPACK_IMPORTED_MODULE_6__.ManageKpiGoalAchievementComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _employee_kpi_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeKpiRoutingModule,
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 52533:
/*!*********************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-kpi/kpi-details-page/kpi-details-page.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KpiDetailsPageComponent": () => (/* binding */ KpiDetailsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/ccentre-lookup/ccentre-lookup.component */ 64622);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dialogs_manage_kpi_goal_manage_kpi_goal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialogs/manage-kpi-goal/manage-kpi-goal.component */ 12844);
/* harmony import */ var _dialogs_manage_kpi_goal_achievement_manage_kpi_goal_achievement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs/manage-kpi-goal-achievement/manage-kpi-goal-achievement.component */ 89877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_kpi_services_kpi_goal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-hr/data/kpi-services/kpi-goal.service */ 88067);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_erp_hr_data_payroll_services_report_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/erp-hr/data/payroll-services/report.service */ 89430);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dashboard/pages/gen-widgets/gen-widgets.component */ 28368);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);







































function KpiDetailsPageComponent_li_38_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li")(1, "div", 88)(2, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_li_38_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r51.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
} }
function KpiDetailsPageComponent_li_39_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li")(1, "div", 90)(2, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_li_39_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r53.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
} }
function KpiDetailsPageComponent_mat_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", reqStatus_r55.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", reqStatus_r55.name, " ");
} }
function KpiDetailsPageComponent_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Please select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_option_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quarter_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", quarter_r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", quarter_r56, " ");
} }
function KpiDetailsPageComponent_mat_error_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Please select quarter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_error_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Please Enter Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_header_cell_127_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 93)(1, "mat-checkbox", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function KpiDetailsPageComponent_mat_header_cell_127_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return $event ? ctx_r57.masterToggle() : null; })("change", function KpiDetailsPageComponent_mat_header_cell_127_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r59.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", ctx_r10.selection.hasValue() && ctx_r10.isAllSelected())("indeterminate", ctx_r10.selection.hasValue() && !ctx_r10.isAllSelected())("ngClass", "tbl-checkbox");
} }
function KpiDetailsPageComponent_mat_cell_128_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 93)(1, "mat-checkbox", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_mat_cell_128_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function KpiDetailsPageComponent_mat_cell_128_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r63); const row_r60 = restoredCtx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return $event ? ctx_r62.selection.toggle(row_r60) : null; })("change", function KpiDetailsPageComponent_mat_cell_128_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r63); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r64.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r60 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", ctx_r11.selection.isSelected(row_r60))("ngClass", "tbl-checkbox")("aria-label", ctx_r11.checkboxLabel(row_r60));
} }
function KpiDetailsPageComponent_mat_header_cell_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r65.id, " ");
} }
function KpiDetailsPageComponent_mat_header_cell_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Employee PF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r66.empPf, " ");
} }
function KpiDetailsPageComponent_mat_header_cell_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r67.year, " ");
} }
function KpiDetailsPageComponent_mat_header_cell_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Quarter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r68.quarter, " ");
} }
function KpiDetailsPageComponent_mat_header_cell_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Strategic Objective ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r69.strategicObjective, " ");
} }
function KpiDetailsPageComponent_mat_header_cell_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Tactical Performance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r70.tacticalPerfomance, " ");
} }
function KpiDetailsPageComponent_mat_header_cell_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Is Quantitative ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r71.isQuantitative, " ");
} }
function KpiDetailsPageComponent_mat_header_cell_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Target ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_152_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r72.nonQuantitativeTarget, " ");
} }
function KpiDetailsPageComponent_mat_cell_152_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r72.quantitativeTarget, " ");
} }
function KpiDetailsPageComponent_mat_cell_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, KpiDetailsPageComponent_mat_cell_152_span_1_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, KpiDetailsPageComponent_mat_cell_152_span_2_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r72.isQuantitative == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r72.isQuantitative == "Y");
} }
function KpiDetailsPageComponent_mat_header_cell_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r77.weight, " ");
} }
function KpiDetailsPageComponent_mat_header_cell_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Goal Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r78.goalSubmited, " ");
} }
function KpiDetailsPageComponent_mat_header_cell_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Appraisal Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r79.appraisalSubmited, " ");
} }
function KpiDetailsPageComponent_mat_header_cell_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Achieved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_164_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r80.nonQuantitativeAchieved, " ");
} }
function KpiDetailsPageComponent_mat_cell_164_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r80.quantitativeAchieved, " ");
} }
function KpiDetailsPageComponent_mat_cell_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, KpiDetailsPageComponent_mat_cell_164_span_1_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, KpiDetailsPageComponent_mat_cell_164_span_2_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r80.isQuantitative == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r80.isQuantitative == "Y");
} }
function KpiDetailsPageComponent_mat_header_cell_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Employee Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r85.employeeScore, " ");
} }
function KpiDetailsPageComponent_mat_header_cell_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Final Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r86.finalScore, " ");
} }
function KpiDetailsPageComponent_mat_header_cell_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Appraised Approved By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r87.appraisedApprovedBy || "N.A", " ");
} }
function KpiDetailsPageComponent_mat_header_cell_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_176_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0 ", row_r88.status, " ");
} }
function KpiDetailsPageComponent_mat_cell_176_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0 ", row_r88.status, " ");
} }
function KpiDetailsPageComponent_mat_cell_176_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0 ", row_r88.status, " ");
} }
function KpiDetailsPageComponent_mat_cell_176_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0 ", row_r88.status, " ");
} }
function KpiDetailsPageComponent_mat_cell_176_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0 ", row_r88.status, " ");
} }
function KpiDetailsPageComponent_mat_cell_176_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0 ", row_r88.status, " ");
} }
function KpiDetailsPageComponent_mat_cell_176_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0 ", row_r88.status, " ");
} }
function KpiDetailsPageComponent_mat_cell_176_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0 ", row_r88.status, " ");
} }
function KpiDetailsPageComponent_mat_cell_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_mat_cell_176_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](1, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, KpiDetailsPageComponent_mat_cell_176_button_2_Template, 3, 1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, KpiDetailsPageComponent_mat_cell_176_button_3_Template, 3, 1, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, KpiDetailsPageComponent_mat_cell_176_button_4_Template, 3, 1, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, KpiDetailsPageComponent_mat_cell_176_button_5_Template, 3, 1, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, KpiDetailsPageComponent_mat_cell_176_button_6_Template, 3, 1, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, KpiDetailsPageComponent_mat_cell_176_button_7_Template, 3, 1, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, KpiDetailsPageComponent_mat_cell_176_button_8_Template, 3, 1, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, KpiDetailsPageComponent_mat_cell_176_button_9_Template, 3, 1, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitch", row_r88.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "SUBMITTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "APPRAISAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "COMPLETED");
} }
function KpiDetailsPageComponent_mat_header_cell_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-header-cell", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_mat_cell_179_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-cell", 125)(1, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_mat_cell_179_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function KpiDetailsPageComponent_mat_cell_179_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r111); const row_r107 = restoredCtx.$implicit; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r110.mngRecord("View", row_r107); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "app-feather-icons", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_mat_cell_179_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function KpiDetailsPageComponent_mat_cell_179_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r111); const row_r107 = restoredCtx.$implicit; const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r113.mngRecord("Upload Results", row_r107); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", "eye");
} }
function KpiDetailsPageComponent_mat_header_row_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "mat-header-row");
} }
function KpiDetailsPageComponent_mat_row_181_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-row", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_mat_row_181_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r116); const row_r114 = restoredCtx.$implicit; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r115.viewRecord(row_r114); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("cursor", "pointer");
} }
function KpiDetailsPageComponent_tr_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("colspan", ctx_r48.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r48.input, "\"");
} }
function KpiDetailsPageComponent_div_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-progress-bar", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function KpiDetailsPageComponent_div_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-progress-spinner", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["KPI Goals"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class KpiDetailsPageComponent {
    constructor(dialog, notificationAPI, kpiGoalService, snackbar, fb, router, tokenStorageService, reportAPI) {
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.kpiGoalService = kpiGoalService;
        this.snackbar = snackbar;
        this.fb = fb;
        this.router = router;
        this.tokenStorageService = tokenStorageService;
        this.reportAPI = reportAPI;
        this.displayedColumns = [
            //"select",
            // "id",
            "empPf",
            "year",
            "quarter",
            "strategicObjective",
            "tacticalPerfomance",
            "isQuantitative",
            "target",
            "weight",
            "goalSubmited",
            "appraisalSubmited",
            "achieved",
            "employeeScore",
            "finalScore",
            "appraisedApprovedBy",
            // "status",
            "action",
        ];
        this.loading = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__.SelectionModel(true, []);
        this.downloadLoading = false;
        this.posting = false;
        this.showForm = false;
        this.months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        //************************************************************************************************ */
        this.reqStatuses = [
            { name: "ALL" },
            { name: "PENDING" },
            { name: "SUBMITTED" },
            { name: "APPROVED" },
            { name: "RETURNED" },
            { name: "REJECTED" },
            { name: "APPRAISAL" },
            { name: "COMPLETED" },
        ];
        this.quarterArray = ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];
        this.selectedStatus = "ALL";
        // ****************************************************************************************************************************
        this.downloadingQuarterly = false;
        this.downloadingAnnual = false;
    }
    ngOnInit() {
        const currentYear = new Date().getFullYear();
        const currentMonthIndex = new Date().getMonth();
        const currentMonthName = this.months[currentMonthIndex];
        this.currentUser = this.tokenStorageService.getUser();
        this.Form = this.fb.group({
            empPf: [this.currentUser.empPfNo, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            year: [currentYear.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            quarter: ["Quarter 1"],
            status: ["PENDING"],
        });
        this.Form.valueChanges.subscribe(() => {
            this.getData();
        });
        this.getData();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getSelectSelectedStatus() {
        //this.getData();
    }
    getSelectedStatus(status) {
        this.Form.patchValue({
            status: status,
        });
        //this.getData();
    }
    getData() {
        this.loading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selectedStatus = this.Form.value.status;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpParams()
            .set("empPf", this.Form.value.empPf)
            .set("year", this.Form.value.year)
            .set("quarter", this.Form.value.quarter)
            .set("status", this.Form.value.status);
        console.log("this.params:: ", params);
        this.kpiGoalService
            .getEmployeeKPIsData(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    console.log("KPI Goals displayed on table", this.data);
                    this.loading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(this.data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                else {
                    this.loading = false;
                }
            },
            error: (err) => {
                this.loading = false;
                this.notificationAPI.alertWarning("Server Error:  " + err.message);
            },
            complete: () => { },
        });
    }
    refresh() {
        this.getData();
    }
    mngRecord(action, record) {
        console.log("this.action:; ", action);
        console.log("this.record:; ", record);
        if (action === "Upload Results") {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.disableClose = true;
            dialogConfig.width = "800px";
            dialogConfig.data = {
                action: action,
                record: record,
            };
            const dialogRef = this.dialog.open(_dialogs_manage_kpi_goal_achievement_manage_kpi_goal_achievement_component__WEBPACK_IMPORTED_MODULE_3__.ManageKpiGoalAchievementComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                console.log("result:::", result);
                this.getData();
            });
        }
        else {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.disableClose = true;
            dialogConfig.width = "800px";
            dialogConfig.data = {
                action: action,
                record: record,
            };
            const dialogRef = this.dialog.open(_dialogs_manage_kpi_goal_manage_kpi_goal_component__WEBPACK_IMPORTED_MODULE_2__.ManageKpiGoalComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                console.log("result:::", result);
                this.getData();
            });
        }
    }
    deleteRecord(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Are you sure?",
            text: "RECORD WILL BE DELETED PERMANENTLY!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                this.loading = true;
                this.kpiGoalService
                    .deleteKPI(id)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        if (res.statusCode == 200) {
                            this.getData();
                            this.loading = false;
                            this.notificationAPI.alertSuccess("RECORD DELETED SUCCESSFULLY");
                        }
                        else {
                            this.getData();
                            this.loading = false;
                            this.notificationAPI.alertWarning(res.message);
                        }
                    },
                    error: (err) => {
                        this.loading = false;
                        this.notificationAPI.alertSuccess("Server Error: " + err.message);
                    },
                    complete: () => { },
                });
            }
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.input = filterValue;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    //******************************************************************************************************************************** */
    onCostCenterLookup(type) {
        if (type === "Search") {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.disableClose = true;
            dialogConfig.width = "800px";
            dialogConfig.data = {
                action: "SingleCostCenter",
            };
            const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_0__.CcentreLookupComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((res) => {
                if (res && res.data && res.data.length > 0) {
                    this.Form.patchValue({
                        costCenterCode: res.data[0].costCenterCode,
                    });
                }
            });
        }
        else if (type === "All") {
            this.Form.patchValue({
                costCenterCode: "All",
            });
            this.getData();
        }
    }
    // ****************************************************************************************************************************
    onSubmit() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Are you sure?",
            text: "Are you sure you want to submit the goals for this quarter?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, submit!",
            cancelButtonText: "No, cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpParams()
                    .set("empPf", this.Form.value.empPf)
                    .set("quarter", this.Form.value.quarter);
                this.kpiGoalService.submit(params).subscribe((res) => {
                    if (res.statusCode === 200) {
                        this.notificationAPI.alertSuccess(res.message);
                        this.getData();
                    }
                    else {
                        this.notificationAPI.alertWarning(res.message);
                    }
                }, (err) => {
                    this.notificationAPI.alertWarning("Server error: " + err.message);
                });
            }
        });
    }
    downloadQuarterlyKpiGoals() {
        this.downloadingQuarterly = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpParams()
            .set("empPf", this.Form.value.empPf)
            .set("year", this.Form.value.year)
            .set("quarter", this.Form.value.quarter)
            .set("status", this.selectedStatus);
        this.reportAPI.employeeKPIQuarterly(params).subscribe({
            next: (value) => {
                this.downloadingQuarterly = false;
                this.notificationAPI.alertSuccess("Downloading KPI Report");
                let url = window.URL.createObjectURL(value.data);
                let a = document.createElement("a");
                document.body.appendChild(a);
                a.setAttribute("style", "display: none");
                a.setAttribute("target", "blank");
                a.href = url;
                a.download = value.filename;
                a.click();
                window.URL.revokeObjectURL(url);
                a.remove();
            },
            error: (err) => {
                this.downloadingQuarterly = false;
                this.notificationAPI.alertWarning("NO REPORT FOUND");
            },
            complete: () => { },
        });
    }
    downloadAnnualyKpiGoals() {
        this.downloadingAnnual = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpParams()
            .set("empPf", this.Form.value.empPf)
            .set("year", this.Form.value.year);
        this.reportAPI.employeeKPIAnnualy(params).subscribe({
            next: (value) => {
                this.downloadingAnnual = false;
                this.notificationAPI.alertSuccess("Downloading Annual KPI Report");
                let url = window.URL.createObjectURL(value.data);
                let a = document.createElement("a");
                document.body.appendChild(a);
                a.setAttribute("style", "display: none");
                a.setAttribute("target", "blank");
                a.href = url;
                a.download = value.filename;
                a.click();
                window.URL.revokeObjectURL(url);
                a.remove();
            },
            error: (err) => {
                this.downloadingAnnual = false;
                this.notificationAPI.alertWarning("NO REPORT FOUND");
            },
            complete: () => { },
        });
    }
}
KpiDetailsPageComponent.ɵfac = function KpiDetailsPageComponent_Factory(t) { return new (t || KpiDetailsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_4__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_erp_hr_data_kpi_services_kpi_goal_service__WEBPACK_IMPORTED_MODULE_5__.KpiGoalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_7__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_erp_hr_data_payroll_services_report_service__WEBPACK_IMPORTED_MODULE_8__.ReportService)); };
KpiDetailsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: KpiDetailsPageComponent, selectors: [["app-kpi-details-page"]], viewQuery: function KpiDetailsPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 186, vars: 43, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], ["matTooltip", "SUBMIT GOALS", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [3, "formGroup"], [1, "col-2"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "status", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-10"], [1, "button-container", "mt-1"], ["mat-raised-button", "", 1, "mat-button", "verified", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "pending", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "submitted", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "approved", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "rejected", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "appraisal", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "completed", 3, "click"], ["formControlName", "quarter", 3, "selectionChange"], ["matInput", "", "formControlName", "year"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", "col-12", 3, "disabled", "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "empPf"], ["matColumnDef", "year"], ["matColumnDef", "quarter"], ["matColumnDef", "strategicObjective"], ["matColumnDef", "tacticalPerfomance"], ["matColumnDef", "isQuantitative"], ["matColumnDef", "target"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-7", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-7", 4, "matCellDef"], ["matColumnDef", "weight"], ["matColumnDef", "goalSubmited"], ["matColumnDef", "appraisalSubmited"], ["matColumnDef", "achieved"], ["matColumnDef", "employeeScore"], ["matColumnDef", "finalScore"], ["matColumnDef", "appraisedApprovedBy"], ["matColumnDef", "status"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [3, "value"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-7"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-7"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge custom-badge-solid-yellow btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge custom-badge-solid-purple btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge custom-badge-solid-teal btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "badge", "custom-badge-solid-yellow", "btn", "btn-sm", "m-1"], [1, "fas", "fa-paper-plane"], [1, "badge", "custom-badge-solid-purple", "btn", "btn-sm", "m-1"], [1, "fas", "fa-clipboard-check"], [1, "badge", "custom-badge-solid-teal", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-double"], [1, "fas", "fa-question-circle"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matRipple", "", 3, "click"], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function KpiDetailsPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Employees with KPI Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function KpiDetailsPageComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_button_click_25_listener() { return ctx.mngRecord("Add", ""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "li")(29, "div", 21)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_button_click_30_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "li")(34, "div", 22)(35, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_button_click_35_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, KpiDetailsPageComponent_li_38_Template, 5, 0, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, KpiDetailsPageComponent_li_39_Template, 5, 0, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 25)(41, "ul", 26)(42, "li")(43, "div", 27)(44, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_img_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r117); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](125); return _r9.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "li")(46, "div", 29)(47, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_img_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r117); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](125); return _r9.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "li")(49, "div", 31)(50, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_img_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r117); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](125); return _r9.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "li")(52, "div", 33)(53, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_img_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r117); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](125); return _r9.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 35)(55, "form", 36)(56, "div", 4)(57, "div", 37)(58, "form", 36)(59, "mat-form-field", 38)(60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "mat-select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function KpiDetailsPageComponent_Template_mat_select_selectionChange_62_listener() { return ctx.getSelectSelectedStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](63, KpiDetailsPageComponent_mat_option_63_Template, 2, 2, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](64, KpiDetailsPageComponent_mat_error_64_Template, 2, 0, "mat-error", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "div", 41)(66, "div", 42)(67, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_button_click_67_listener() { return ctx.getSelectedStatus("ALL"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](69, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70, " ALL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_button_click_71_listener() { return ctx.getSelectedStatus("Pending"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, "pending_actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](74, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](75, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_button_click_75_listener() { return ctx.getSelectedStatus("SUBMITTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78, " SUBMITTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_button_click_79_listener() { return ctx.getSelectedStatus("APPROVED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](81, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](82, " APPROVED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](83, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_button_click_83_listener() { return ctx.getSelectedStatus("REJECTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](85, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86, " REJECTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_button_click_87_listener() { return ctx.getSelectedStatus("APPRAISAL"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](88, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](89, "assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](90, " APPRAISAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](91, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_button_click_91_listener() { return ctx.getSelectedStatus("COMPLETED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](93, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](94, " COMPLETED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](95, "div", 35)(96, "form", 36)(97, "div", 4)(98, "div", 37)(99, "form", 36)(100, "mat-form-field", 38)(101, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102, "Quarter Selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](103, "mat-select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function KpiDetailsPageComponent_Template_mat_select_selectionChange_103_listener() { return ctx.getSelectSelectedStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](104, KpiDetailsPageComponent_mat_option_104_Template, 2, 2, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](105, KpiDetailsPageComponent_mat_error_105_Template, 2, 0, "mat-error", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](106, "div", 37)(107, "div", 4)(108, "mat-form-field", 38)(109, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](110, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](111, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](112, KpiDetailsPageComponent_mat_error_112_Template, 2, 0, "mat-error", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](113, "div", 37)(114, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_button_click_114_listener() { return ctx.downloadQuarterlyKpiGoals(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](115, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](116, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](117, " Quarterly KPI Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](118, "div", 37)(119, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function KpiDetailsPageComponent_Template_button_click_119_listener() { return ctx.downloadAnnualyKpiGoals(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](120, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](121, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](122, " Annual KPI Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](123, "mat-table", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](126, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](127, KpiDetailsPageComponent_mat_header_cell_127_Template, 2, 4, "mat-header-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](128, KpiDetailsPageComponent_mat_cell_128_Template, 2, 4, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](129, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](130, KpiDetailsPageComponent_mat_header_cell_130_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](131, KpiDetailsPageComponent_mat_cell_131_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](132, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](133, KpiDetailsPageComponent_mat_header_cell_133_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](134, KpiDetailsPageComponent_mat_cell_134_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](135, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](136, KpiDetailsPageComponent_mat_header_cell_136_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](137, KpiDetailsPageComponent_mat_cell_137_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](138, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](139, KpiDetailsPageComponent_mat_header_cell_139_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](140, KpiDetailsPageComponent_mat_cell_140_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](141, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](142, KpiDetailsPageComponent_mat_header_cell_142_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](143, KpiDetailsPageComponent_mat_cell_143_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](144, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](145, KpiDetailsPageComponent_mat_header_cell_145_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](146, KpiDetailsPageComponent_mat_cell_146_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](147, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](148, KpiDetailsPageComponent_mat_header_cell_148_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](149, KpiDetailsPageComponent_mat_cell_149_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](150, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](151, KpiDetailsPageComponent_mat_header_cell_151_Template, 2, 0, "mat-header-cell", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](152, KpiDetailsPageComponent_mat_cell_152_Template, 3, 2, "mat-cell", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](153, 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](154, KpiDetailsPageComponent_mat_header_cell_154_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](155, KpiDetailsPageComponent_mat_cell_155_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](156, 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](157, KpiDetailsPageComponent_mat_header_cell_157_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](158, KpiDetailsPageComponent_mat_cell_158_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](159, 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](160, KpiDetailsPageComponent_mat_header_cell_160_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](161, KpiDetailsPageComponent_mat_cell_161_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](162, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](163, KpiDetailsPageComponent_mat_header_cell_163_Template, 2, 0, "mat-header-cell", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](164, KpiDetailsPageComponent_mat_cell_164_Template, 3, 2, "mat-cell", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](165, 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](166, KpiDetailsPageComponent_mat_header_cell_166_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](167, KpiDetailsPageComponent_mat_cell_167_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](168, 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](169, KpiDetailsPageComponent_mat_header_cell_169_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](170, KpiDetailsPageComponent_mat_cell_170_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](171, 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](172, KpiDetailsPageComponent_mat_header_cell_172_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](173, KpiDetailsPageComponent_mat_cell_173_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](174, 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](175, KpiDetailsPageComponent_mat_header_cell_175_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](176, KpiDetailsPageComponent_mat_cell_176_Template, 10, 8, "mat-cell", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](177, 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](178, KpiDetailsPageComponent_mat_header_cell_178_Template, 2, 0, "mat-header-cell", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](179, KpiDetailsPageComponent_mat_cell_179_Template, 6, 3, "mat-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](180, KpiDetailsPageComponent_mat_header_row_180_Template, 1, 0, "mat-header-row", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](181, KpiDetailsPageComponent_mat_row_181_Template, 1, 2, "mat-row", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](182, KpiDetailsPageComponent_tr_182_Template, 3, 2, "tr", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](183, KpiDetailsPageComponent_div_183_Template, 2, 0, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](184, KpiDetailsPageComponent_div_184_Template, 2, 1, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](185, "mat-paginator", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", "All KPI Goals")("items", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](41, _c0))("active_item", "All KPI Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.Form.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx.selectedStatus === "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx.selectedStatus === "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx.selectedStatus === "SUBMITTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx.selectedStatus === "APPROVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx.selectedStatus === "REJECTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx.selectedStatus === "APPRAISAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx.selectedStatus === "COMPLETED");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.quarterArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.Form.get("quarter").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.Form.get("year").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("auth-spinner", ctx.downloadingQuarterly);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.downloadingQuarterly);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("auth-spinner", ctx.downloadingAnnual);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.downloadingAnnual);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](42, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_10__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_30__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_31__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_11__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrcGktZGV0YWlscy1wYWdlLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 89430:
/*!****************************************************************!*\
  !*** ./src/app/erp-hr/data/payroll-services/report.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportService": () => (/* binding */ ReportService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class ReportService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json');
        this.baseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/reports`;
        this.baseExcelURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/reports/export`;
    }
    generate(params) {
        let API_URL = `${this.baseExcelURL}/generate`;
        return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false });
    }
    generateRegister(params) {
        let API_URL = `${this.baseExcelURL}/generate/company-register`;
        return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false });
    }
    generateMasterRegister(params) {
        let API_URL = `${this.baseExcelURL}/generate/master-register`;
        return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false });
    }
    generateAnalysis(params) {
        let API_URL = `${this.baseExcelURL}/generate/analysis`;
        return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false });
    }
    payslip(id) {
        let API_URL = `${this.baseURL}/payslip/${id}`;
        return this.http.get(API_URL, { headers: this.headers, responseType: 'blob', withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: 'payslip.pdf',
                data: new Blob([response], { type: 'application/pdf' })
            };
        }));
    }
    employeeKPIQuarterly(params) {
        let API_URL = `${this.baseURL}/kpi/employee`;
        return this.http.get(API_URL, { params: params, headers: this.headers, responseType: 'blob', withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: 'Quarterly KPI Report.pdf',
                data: new Blob([response], { type: 'application/pdf' })
            };
        }));
    }
    employeeKPIAnnualy(params) {
        let API_URL = `${this.baseURL}/kpi/employee/annual`;
        return this.http.get(API_URL, { params: params, headers: this.headers, responseType: 'blob', withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: 'Annualy KPI Report.pdf',
                data: new Blob([response], { type: 'application/pdf' })
            };
        }));
    }
    generateP9form(id) {
        let API_URL = `${this.baseURL}/p9form/${id}`;
        return this.http.get(API_URL, { headers: this.headers, responseType: 'blob', withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: 'Employee_P9_Form.pdf',
                data: new Blob([response], { type: 'application/pdf' })
            };
        }));
    }
    generateEmployeeP9form(params) {
        let API_URL = `${this.baseURL}/employee/p9form`;
        return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'blob', withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: 'Employee_P9_Form.pdf',
                data: new Blob([response], { type: 'application/pdf' })
            };
        }));
    }
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `${error.error.message}`;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
    }
}
ReportService.ɵfac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ReportService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ReportService, factory: ReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 17687:
/*!**************************************************!*\
  !*** ./src/app/shared/services/files.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesService": () => (/* binding */ FilesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 47367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class FilesService {
    constructor() { }
    toBase64(files, selectedFiles) {
        var _a;
        const result = new rxjs__WEBPACK_IMPORTED_MODULE_0__.AsyncSubject();
        if (files === null || files === void 0 ? void 0 : files.length) {
            (_a = Object.keys(files)) === null || _a === void 0 ? void 0 : _a.forEach((file, i) => {
                const url = URL.createObjectURL(files[i]);
                const reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onload = (e) => {
                    var _a;
                    selectedFiles = selectedFiles === null || selectedFiles === void 0 ? void 0 : selectedFiles.filter(f => { var _a; return (f === null || f === void 0 ? void 0 : f.name) != ((_a = files[i]) === null || _a === void 0 ? void 0 : _a.name); });
                    selectedFiles.push({ name: (_a = files[i]) === null || _a === void 0 ? void 0 : _a.name, file: files[i], base64: reader === null || reader === void 0 ? void 0 : reader.result, url: url });
                    result.next(selectedFiles);
                    if ((files === null || files === void 0 ? void 0 : files.length) === (i + 1)) {
                        result.complete(); // Hoàn tất toàn bộ quá trình convert, trả về mảng selectedFiles có chứa base64 
                    }
                };
            });
            return result;
        }
        else {
            result.next([]);
            result.complete();
            return result;
        }
    }
}
FilesService.ɵfac = function FilesService_Factory(t) { return new (t || FilesService)(); };
FilesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FilesService, factory: FilesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 47367:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/AsyncSubject.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSubject": () => (/* binding */ AsyncSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 80228);

class AsyncSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
    constructor() {
        super(...arguments);
        this._value = null;
        this._hasValue = false;
        this._isComplete = false;
    }
    _checkFinalizedStatuses(subscriber) {
        const { hasError, _hasValue, _value, thrownError, isStopped, _isComplete } = this;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped || _isComplete) {
            _hasValue && subscriber.next(_value);
            subscriber.complete();
        }
    }
    next(value) {
        if (!this.isStopped) {
            this._value = value;
            this._hasValue = true;
        }
    }
    complete() {
        const { _hasValue, _value, _isComplete } = this;
        if (!_isComplete) {
            this._isComplete = true;
            _hasValue && super.next(_value);
            super.complete();
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=src_app_erp-hr-self-service_modules_employee-kpi_employee-kpi_module_ts.js.map
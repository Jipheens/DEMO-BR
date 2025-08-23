"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-hr-self-service_modules_employee-jobs_employee-jobs_module_ts"],{

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

/***/ 45222:
/*!*******************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-jobs/employee-jobs-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeJobsRoutingModule": () => (/* binding */ EmployeeJobsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _jobs_applied_page_jobs_applied_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs-applied-page/jobs-applied-page.component */ 74786);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _jobs_openings_page_jobs_openings_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobs-openings-page/jobs-openings-page.component */ 11039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: "openings",
        component: _jobs_openings_page_jobs_openings_page_component__WEBPACK_IMPORTED_MODULE_2__.JobsOpeningsPageComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: {
            clientName: "EmployeePortalModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
    {
        path: "applied",
        component: _jobs_applied_page_jobs_applied_page_component__WEBPACK_IMPORTED_MODULE_0__.JobsAppliedPageComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: {
            clientName: "EmployeePortalModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
];
class EmployeeJobsRoutingModule {
}
EmployeeJobsRoutingModule.ɵfac = function EmployeeJobsRoutingModule_Factory(t) { return new (t || EmployeeJobsRoutingModule)(); };
EmployeeJobsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EmployeeJobsRoutingModule });
EmployeeJobsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EmployeeJobsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 97982:
/*!***********************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-jobs/employee-jobs.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeJobsModule": () => (/* binding */ EmployeeJobsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _employee_jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-jobs-routing.module */ 45222);
/* harmony import */ var _jobs_openings_page_jobs_openings_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs-openings-page/jobs-openings-page.component */ 11039);
/* harmony import */ var _jobs_applied_page_jobs_applied_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobs-applied-page/jobs-applied-page.component */ 74786);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 25490);
/* harmony import */ var _manage_job_opening_manage_job_opening_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-job-opening/manage-job-opening.component */ 5010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);









class EmployeeJobsModule {
}
EmployeeJobsModule.ɵfac = function EmployeeJobsModule_Factory(t) { return new (t || EmployeeJobsModule)(); };
EmployeeJobsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: EmployeeJobsModule });
EmployeeJobsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _employee_jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeJobsRoutingModule,
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](EmployeeJobsModule, { declarations: [_jobs_openings_page_jobs_openings_page_component__WEBPACK_IMPORTED_MODULE_1__.JobsOpeningsPageComponent,
        _jobs_applied_page_jobs_applied_page_component__WEBPACK_IMPORTED_MODULE_2__.JobsAppliedPageComponent,
        _manage_job_opening_manage_job_opening_component__WEBPACK_IMPORTED_MODULE_6__.ManageJobOpeningComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _employee_jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeJobsRoutingModule,
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 74786:
/*!************************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-jobs/jobs-applied-page/jobs-applied-page.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsAppliedPageComponent": () => (/* binding */ JobsAppliedPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_job_services_job_applications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/data/job-services/job-applications.service */ 6138);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_hr_data_employee_services_employee_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-hr/data/employee-services/employee-management.service */ 63059);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dashboard/pages/gen-widgets/gen-widgets.component */ 28368);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);































function JobsAppliedPageComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 69)(2, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobsAppliedPageComponent_li_33_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r51.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function JobsAppliedPageComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 71)(2, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobsAppliedPageComponent_li_34_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r53.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function JobsAppliedPageComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 73)(2, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobsAppliedPageComponent_li_35_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r55.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function JobsAppliedPageComponent_mat_header_cell_54_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 75)(1, "mat-checkbox", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function JobsAppliedPageComponent_mat_header_cell_54_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return $event ? ctx_r57.masterToggle() : null; })("change", function JobsAppliedPageComponent_mat_header_cell_54_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r59.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r6.selection.hasValue() && ctx_r6.isAllSelected())("indeterminate", ctx_r6.selection.hasValue() && !ctx_r6.isAllSelected())("ngClass", "tbl-checkbox");
} }
function JobsAppliedPageComponent_mat_cell_55_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 75)(1, "mat-checkbox", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobsAppliedPageComponent_mat_cell_55_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function JobsAppliedPageComponent_mat_cell_55_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r63); const row_r60 = restoredCtx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return $event ? ctx_r62.selection.toggle(row_r60) : null; })("change", function JobsAppliedPageComponent_mat_cell_55_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r63); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r64.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r60 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r7.selection.isSelected(row_r60))("ngClass", "tbl-checkbox")("aria-label", ctx_r7.checkboxLabel(row_r60));
} }
function JobsAppliedPageComponent_mat_header_cell_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r65.id, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r66.status, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Posted Flag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r67.postedFlag, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Posted By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r68.postedBy, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Posted Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r69.postedTime, "short"), " ");
} }
function JobsAppliedPageComponent_mat_header_cell_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Job Ref Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r70.jobRefNumber, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Application Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r71.applicationNumber, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r72.firstName, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r73.lastName, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Middle Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r74.middleName, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r75.emailAddress, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r76.phoneNumber, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " National ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r77.nationalId, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Job Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r78.jobTitle, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Application Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r79.applicationType, " ");
} }
function JobsAppliedPageComponent_mat_header_cell_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_103_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r80.status, " ");
} }
function JobsAppliedPageComponent_mat_cell_103_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r80.status, " ");
} }
function JobsAppliedPageComponent_mat_cell_103_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r80.status, " ");
} }
function JobsAppliedPageComponent_mat_cell_103_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r80.status, " ");
} }
function JobsAppliedPageComponent_mat_cell_103_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r80.status, " ");
} }
function JobsAppliedPageComponent_mat_cell_103_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r80.status, " ");
} }
function JobsAppliedPageComponent_mat_cell_103_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r80.status, " ");
} }
function JobsAppliedPageComponent_mat_cell_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobsAppliedPageComponent_mat_cell_103_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](1, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, JobsAppliedPageComponent_mat_cell_103_button_2_Template, 3, 1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, JobsAppliedPageComponent_mat_cell_103_button_3_Template, 3, 1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, JobsAppliedPageComponent_mat_cell_103_button_4_Template, 3, 1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, JobsAppliedPageComponent_mat_cell_103_button_5_Template, 3, 1, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, JobsAppliedPageComponent_mat_cell_103_button_6_Template, 3, 1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, JobsAppliedPageComponent_mat_cell_103_button_7_Template, 3, 1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, JobsAppliedPageComponent_mat_cell_103_button_8_Template, 3, 1, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitch", row_r80.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "SHORTLISTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "INTERVIEWING");
} }
function JobsAppliedPageComponent_mat_header_cell_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_106_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\u00A0 Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_106_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0 Not Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, JobsAppliedPageComponent_mat_cell_106_ng_container_1_Template, 4, 0, "ng-container", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, JobsAppliedPageComponent_mat_cell_106_ng_template_2_Template, 3, 0, "ng-template", null, 105, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r97 = ctx.$implicit;
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", row_r97.verifiedFlag === "Y")("ngIfElse", _r99);
} }
function JobsAppliedPageComponent_mat_header_cell_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Deleted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_109_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\u00A0 Deleted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_109_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0 Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, JobsAppliedPageComponent_mat_cell_109_ng_container_1_Template, 4, 0, "ng-container", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, JobsAppliedPageComponent_mat_cell_109_ng_template_2_Template, 3, 0, "ng-template", null, 107, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r101 = ctx.$implicit;
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", row_r101.deletedFlag === "Y")("ngIfElse", _r103);
} }
function JobsAppliedPageComponent_mat_header_cell_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_mat_cell_112_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 109)(1, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobsAppliedPageComponent_mat_cell_112_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function JobsAppliedPageComponent_mat_cell_112_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r109); const row_r105 = restoredCtx.$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r108.deleteRecord(row_r105.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-feather-icons", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", "trash-2");
} }
function JobsAppliedPageComponent_mat_header_row_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-header-row");
} }
function JobsAppliedPageComponent_mat_row_114_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-row", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobsAppliedPageComponent_mat_row_114_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r112); const row_r110 = restoredCtx.$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r111.viewRecord(row_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("cursor", "pointer");
} }
function JobsAppliedPageComponent_tr_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("colspan", ctx_r48.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r48.input, "\"");
} }
function JobsAppliedPageComponent_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-bar", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function JobsAppliedPageComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-spinner", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Job Applications"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class JobsAppliedPageComponent {
    constructor(dialog, notificationAPI, jobApplicationAPIService, snackbar, fb, router, employeeService, tokenStorageService) {
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.jobApplicationAPIService = jobApplicationAPIService;
        this.snackbar = snackbar;
        this.fb = fb;
        this.router = router;
        this.employeeService = employeeService;
        this.tokenStorageService = tokenStorageService;
        this.displayedColumns = [
            // "select",
            "id",
            'jobTitle',
            'applicationType',
            'jobRefNumber',
            'applicationNumber',
            // 'postedFlag',
            // 'postedBy',
            'postedTime',
            'firstName',
            'lastName',
            // 'middleName',
            'emailAddress',
            'phoneNumber',
            //'nationalId',
            'status',
            "action",
        ];
        this.loading = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__.SelectionModel(true, []);
        this.downloadLoading = false;
        this.posting = false;
        this.showForm = false;
        //****************************************************************************************** */
        this.reqStatuses = [
            { name: "ALL" },
            { name: "PENDING" },
            { name: "SHORTLISTED" },
            { name: "INTERVIEWING" },
            { name: "APPROVED" },
            { name: "RETURNED" },
            { name: "REJECTED" },
        ];
        this.selectedStatus = "ALL";
        // ****************************************************************************************************************************
        this.selectedRows = [];
        this.atleastOneSelected = false;
        this.hasAccess = true;
        this.getDataByEmpfCode();
    }
    ngOnInit() {
        this.currentUserCode = this.tokenStorageService.getUser().empPfNo;
        this.Form = this.fb.group({
            nationalId: ['']
        });
        // this.Form.valueChanges.subscribe(() => {
        //   this.getData();
        // });
        //this.getData();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getDataByEmpfCode() {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams().set("empNo", this.currentUserCode);
        this.employeeService
            .readByEmployeePf(param)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.entity) {
                    this.currentUser = res.entity;
                    console.log("getDataById this.formData: ", this.currentUser);
                    this.Form.patchValue({
                        nationalId: this.currentUser.nationalId
                    });
                    this.getData();
                }
                else {
                    //this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                //this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => { },
        });
    }
    getSelectSelectedStatus() {
        this.getData();
    }
    getSelectedStatus(status) {
        this.Form.patchValue({
            status: status,
        });
        this.getData();
    }
    getData() {
        this.loading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selectedStatus = this.Form.value.status;
        let params = {
            nationalId: this.Form.value.nationalId,
        };
        this.jobApplicationAPIService
            .readByNationalId(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    console.log("Data displayed on table", this.data);
                    this.loading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(this.data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                else {
                    this.loading = false;
                    this.notificationAPI.alertWarning(res.message);
                }
            },
            error: (err) => {
                this.loading = false;
                this.notificationAPI.alertWarning("Server Error: " + err.message);
            },
            complete: () => { },
        });
    }
    refresh() {
        this.getData();
    }
    mngRecord(action, record) {
        let route = "/erp-hr-self-service/employee-jobs/openings";
        this.router.navigate([route], {
            queryParams: {
                requestCode: record.refNumber,
                action: action,
            },
        });
    }
    deleteRecord(id) {
        let params = { id: id };
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you sure?",
            text: "THIS RECORD WILL BE DELETED PERMANENTLY!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                this.loading = true;
                this.jobApplicationAPIService
                    .delete(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
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
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? "deselect" : "select"} all`;
        }
        return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${row.position + 1}`;
    }
    expSelected() {
        this.atleastOneSelected = true;
        this.selectedRows = this.selection.selected;
        console.log("this.selectedRows: ", this.selectedRows);
    }
    processMultipleRows(status) {
        let privilege = "Validate Expenses";
        // this.hasAccess = this.accessControlService.hasPrivilege("FinanceModule", [
        //   privilege,
        // ]);
        if (this.hasAccess) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: '<span style="font-size: 20px;">Enter Verifier Remarks</span>',
                input: "textarea",
                inputPlaceholder: "Type your remarks here...",
                confirmButtonText: "Submit",
                showCancelButton: true,
                cancelButtonText: "Cancel",
                icon: "info",
                inputValidator: (value) => {
                    if (!value) {
                        return "Please enter your remarks";
                    }
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    const verifierRemarks = result.value;
                    const processedRows = this.selectedRows.map((element) => {
                        return {
                            id: element.id,
                            status: status,
                            verifierRemarks: verifierRemarks,
                        };
                    });
                    console.log("LOG: ", processedRows);
                    this.jobApplicationAPIService
                        .verify(processedRows)
                        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
                        .subscribe({
                        next: (res) => {
                            console.log("res: ", res);
                            if (res.statusCode == 201 || 200 || 0) {
                                this.snackbar.showNotification("snackbar-success", res.message);
                                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__.SelectionModel(true, []);
                                this.selection.clear();
                            }
                            else {}
                        },
                        error: (err) => {
                            this.snackbar.showNotification("snackbar-danger", err.message);
                        },
                        complete: () => {
                            this.getData();
                        },
                    }),
                        rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription;
                }
                else {
                    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__.SelectionModel(true, []);
                    this.selection.clear();
                }
            });
        }
    }
}
JobsAppliedPageComponent.ɵfac = function JobsAppliedPageComponent_Factory(t) { return new (t || JobsAppliedPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_1__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_erp_hr_data_job_services_job_applications_service__WEBPACK_IMPORTED_MODULE_2__.JobApplicationAPIService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_erp_hr_data_employee_services_employee_management_service__WEBPACK_IMPORTED_MODULE_4__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_5__.TokenCookieService)); };
JobsAppliedPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: JobsAppliedPageComponent, selectors: [["app-jobs-applied-page"]], viewQuery: function JobsAppliedPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 119, vars: 15, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "postedFlag"], ["matColumnDef", "postedBy"], ["matColumnDef", "postedTime"], ["matColumnDef", "jobRefNumber"], ["matColumnDef", "applicationNumber"], ["matColumnDef", "firstName"], ["matColumnDef", "lastName"], ["matColumnDef", "middleName"], ["matColumnDef", "emailAddress"], ["matColumnDef", "phoneNumber"], ["matColumnDef", "nationalId"], ["matColumnDef", "jobTitle"], ["matColumnDef", "applicationType"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 3, "click", 4, "matCellDef"], ["matColumnDef", "verifiedFlag"], ["matColumnDef", "deletedFlag"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-orange btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-purple btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "badge", "badge-solid-orange", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check"], [1, "badge", "badge-solid-purple", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-calendar-alt"], [1, "fas", "fa-question-circle"], [4, "ngIf", "ngIfElse"], ["notVerified", ""], [1, "fas", "fa-times"], ["notDeleted", ""], [1, "fas", "fa-trash"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matRipple", "", 3, "click"], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function JobsAppliedPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Job Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function JobsAppliedPageComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobsAppliedPageComponent_Template_button_click_25_listener() { return ctx.mngRecord("Add", ""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "li")(29, "div", 21)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobsAppliedPageComponent_Template_button_click_30_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, JobsAppliedPageComponent_li_33_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, JobsAppliedPageComponent_li_34_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, JobsAppliedPageComponent_li_35_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 23)(37, "ul", 24)(38, "li")(39, "div", 25)(40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobsAppliedPageComponent_Template_img_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r113); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](52); return _r5.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "li")(42, "div", 27)(43, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobsAppliedPageComponent_Template_img_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r113); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](52); return _r5.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "li")(45, "div", 29)(46, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobsAppliedPageComponent_Template_img_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r113); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](52); return _r5.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "li")(48, "div", 31)(49, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobsAppliedPageComponent_Template_img_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r113); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](52); return _r5.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "mat-table", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](53, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, JobsAppliedPageComponent_mat_header_cell_54_Template, 2, 4, "mat-header-cell", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, JobsAppliedPageComponent_mat_cell_55_Template, 2, 4, "mat-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](56, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](57, JobsAppliedPageComponent_mat_header_cell_57_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, JobsAppliedPageComponent_mat_cell_58_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](59, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, JobsAppliedPageComponent_mat_header_cell_60_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, JobsAppliedPageComponent_mat_cell_61_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](62, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](63, JobsAppliedPageComponent_mat_header_cell_63_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](64, JobsAppliedPageComponent_mat_cell_64_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](65, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](66, JobsAppliedPageComponent_mat_header_cell_66_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](67, JobsAppliedPageComponent_mat_cell_67_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](68, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](69, JobsAppliedPageComponent_mat_header_cell_69_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](70, JobsAppliedPageComponent_mat_cell_70_Template, 3, 4, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](71, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, JobsAppliedPageComponent_mat_header_cell_72_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](73, JobsAppliedPageComponent_mat_cell_73_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](74, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](75, JobsAppliedPageComponent_mat_header_cell_75_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](76, JobsAppliedPageComponent_mat_cell_76_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](77, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](78, JobsAppliedPageComponent_mat_header_cell_78_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](79, JobsAppliedPageComponent_mat_cell_79_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](80, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](81, JobsAppliedPageComponent_mat_header_cell_81_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](82, JobsAppliedPageComponent_mat_cell_82_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](83, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](84, JobsAppliedPageComponent_mat_header_cell_84_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](85, JobsAppliedPageComponent_mat_cell_85_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](86, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](87, JobsAppliedPageComponent_mat_header_cell_87_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](88, JobsAppliedPageComponent_mat_cell_88_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](89, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](90, JobsAppliedPageComponent_mat_header_cell_90_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](91, JobsAppliedPageComponent_mat_cell_91_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](92, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](93, JobsAppliedPageComponent_mat_header_cell_93_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](94, JobsAppliedPageComponent_mat_cell_94_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](95, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](96, JobsAppliedPageComponent_mat_header_cell_96_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](97, JobsAppliedPageComponent_mat_cell_97_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](98, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](99, JobsAppliedPageComponent_mat_header_cell_99_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](100, JobsAppliedPageComponent_mat_cell_100_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](101, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](102, JobsAppliedPageComponent_mat_header_cell_102_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](103, JobsAppliedPageComponent_mat_cell_103_Template, 9, 7, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](104, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](105, JobsAppliedPageComponent_mat_header_cell_105_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](106, JobsAppliedPageComponent_mat_cell_106_Template, 4, 2, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](107, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](108, JobsAppliedPageComponent_mat_header_cell_108_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](109, JobsAppliedPageComponent_mat_cell_109_Template, 4, 2, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](110, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](111, JobsAppliedPageComponent_mat_header_cell_111_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](112, JobsAppliedPageComponent_mat_cell_112_Template, 3, 3, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](113, JobsAppliedPageComponent_mat_header_row_113_Template, 1, 0, "mat-header-row", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](114, JobsAppliedPageComponent_mat_row_114_Template, 1, 2, "mat-row", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](115, JobsAppliedPageComponent_tr_115_Template, 3, 2, "tr", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](116, JobsAppliedPageComponent_div_116_Template, 2, 0, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](117, JobsAppliedPageComponent_div_117_Template, 2, 1, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](118, "mat-paginator", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "All Job Applications")("items", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](13, _c0))("active_item", "All Job Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](14, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_7__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_25__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2JzLWFwcGxpZWQtcGFnZS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 11039:
/*!**************************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-jobs/jobs-openings-page/jobs-openings-page.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsOpeningsPageComponent": () => (/* binding */ JobsOpeningsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _manage_job_opening_manage_job_opening_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manage-job-opening/manage-job-opening.component */ 5010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_job_services_job_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-hr/data/job-services/job-management.service */ 77417);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_erp_hr_data_employee_services_employee_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/erp-hr/data/employee-services/employee-management.service */ 63059);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dashboard/pages/gen-widgets/gen-widgets.component */ 28368);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);



































function JobsOpeningsPageComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li")(1, "div", 74)(2, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_li_28_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r37.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function JobsOpeningsPageComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li")(1, "div", 76)(2, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_li_29_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r39.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function JobsOpeningsPageComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li")(1, "div", 78)(2, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_li_30_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r41.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function JobsOpeningsPageComponent_mat_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", reqStatus_r43.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", reqStatus_r43.name, " ");
} }
function JobsOpeningsPageComponent_mat_error_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function JobsOpeningsPageComponent_mat_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqJobType_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", reqJobType_r44.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", reqJobType_r44.name, " ");
} }
function JobsOpeningsPageComponent_mat_error_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please select job type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function JobsOpeningsPageComponent_mat_header_cell_83_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 81)(1, "mat-checkbox", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function JobsOpeningsPageComponent_mat_header_cell_83_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return $event ? ctx_r45.masterToggle() : null; })("change", function JobsOpeningsPageComponent_mat_header_cell_83_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r47.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx_r10.selection.hasValue() && ctx_r10.isAllSelected())("indeterminate", ctx_r10.selection.hasValue() && !ctx_r10.isAllSelected())("ngClass", "tbl-checkbox");
} }
function JobsOpeningsPageComponent_mat_cell_84_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 81)(1, "mat-checkbox", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_mat_cell_84_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function JobsOpeningsPageComponent_mat_cell_84_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r51); const row_r48 = restoredCtx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return $event ? ctx_r50.selection.toggle(row_r48) : null; })("change", function JobsOpeningsPageComponent_mat_cell_84_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r52.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r48 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx_r11.selection.isSelected(row_r48))("ngClass", "tbl-checkbox")("aria-label", ctx_r11.checkboxLabel(row_r48));
} }
function JobsOpeningsPageComponent_mat_header_cell_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function JobsOpeningsPageComponent_mat_cell_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r53.id, " ");
} }
function JobsOpeningsPageComponent_mat_header_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Ref Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function JobsOpeningsPageComponent_mat_cell_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r54.jobRefNumber, " ");
} }
function JobsOpeningsPageComponent_mat_header_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function JobsOpeningsPageComponent_mat_cell_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r55.jobTitle, " ");
} }
function JobsOpeningsPageComponent_mat_header_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Vacant Pos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function JobsOpeningsPageComponent_mat_cell_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r56.vacantPositions, " ");
} }
function JobsOpeningsPageComponent_mat_header_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function JobsOpeningsPageComponent_mat_cell_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r57.jobLevel, " ");
} }
function JobsOpeningsPageComponent_mat_header_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Term ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function JobsOpeningsPageComponent_mat_cell_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r58.jobTerm, " ");
} }
function JobsOpeningsPageComponent_mat_header_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function JobsOpeningsPageComponent_mat_cell_105_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r59.status, " ");
} }
function JobsOpeningsPageComponent_mat_cell_105_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r59.status, " ");
} }
function JobsOpeningsPageComponent_mat_cell_105_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r59.status, " ");
} }
function JobsOpeningsPageComponent_mat_cell_105_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r59.status, " ");
} }
function JobsOpeningsPageComponent_mat_cell_105_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r59.status, " ");
} }
function JobsOpeningsPageComponent_mat_cell_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_mat_cell_105_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](1, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, JobsOpeningsPageComponent_mat_cell_105_button_2_Template, 3, 1, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, JobsOpeningsPageComponent_mat_cell_105_button_3_Template, 3, 1, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, JobsOpeningsPageComponent_mat_cell_105_button_4_Template, 3, 1, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, JobsOpeningsPageComponent_mat_cell_105_button_5_Template, 3, 1, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, JobsOpeningsPageComponent_mat_cell_105_button_6_Template, 3, 1, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", row_r59.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function JobsOpeningsPageComponent_mat_header_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Deadline Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function JobsOpeningsPageComponent_mat_cell_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, row_r72.deadlineDate), " ");
} }
function JobsOpeningsPageComponent_mat_header_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function JobsOpeningsPageComponent_mat_cell_111_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 88)(1, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_mat_cell_111_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function JobsOpeningsPageComponent_mat_cell_111_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r76); const row_r73 = restoredCtx.$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r75.mngRecord("Update", row_r73); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-feather-icons", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", "edit");
} }
function JobsOpeningsPageComponent_mat_header_cell_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "HR Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function JobsOpeningsPageComponent_mat_cell_114_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 88)(1, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_mat_cell_114_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const row_r77 = restoredCtx.$implicit; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r78.mngRecord("View", row_r77); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_mat_cell_114_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const row_r77 = restoredCtx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r80.deleteRecord(row_r77.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} }
function JobsOpeningsPageComponent_mat_header_row_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-header-row");
} }
function JobsOpeningsPageComponent_mat_row_116_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-row", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_mat_row_116_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r83); const row_r81 = restoredCtx.$implicit; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r82.viewRecord(row_r81); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("cursor", "pointer");
} }
function JobsOpeningsPageComponent_tr_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("colspan", ctx_r34.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r34.input, "\" ");
} }
function JobsOpeningsPageComponent_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-progress-bar", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function JobsOpeningsPageComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-progress-spinner", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Jobs Openings"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class JobsOpeningsPageComponent {
    constructor(dialog, notificationAPI, jobManagementService, snackbar, router, fb, tokenStorageService, employeeService) {
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.jobManagementService = jobManagementService;
        this.snackbar = snackbar;
        this.router = router;
        this.fb = fb;
        this.tokenStorageService = tokenStorageService;
        this.employeeService = employeeService;
        this.displayedColumns = [
            // "select",
            "jobRefNumber",
            "title",
            "vacantPositions",
            "jobLevel",
            "jobTerm",
            "status",
            "deadlineDate",
            //"hodAction",
            "action",
        ];
        this.loading = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__.SelectionModel(true, []);
        this.downloadLoading = false;
        this.posting = false;
        this.showForm = false;
        //****************************************************************************************** */
        this.reqStatuses = [
            // { name: "ALL" },
            // { name: "PENDING" },
            { name: "APPROVED" },
            // { name: "RETURNED" },
            // { name: "REJECTED" },
        ];
        this.reqJobTypes = [
            // { name: "ALL" },
            // { name: "OPEN-JOB" },
            { name: "EXTERNAL-JOB" },
            { name: "INTERNAL-JOB" },
        ];
        this.selectedStatus = "APPROVED";
        this.selectedJobType = "INTERNAL-JOB";
        // ****************************************************************************************************************************
        this.selectedRows = [];
        this.atleastOneSelected = false;
        this.hasAccess = true;
    }
    ngOnInit() {
        this.currentUserCode = this.tokenStorageService.getUser().empPfNo;
        this.Form = this.fb.group({
            status: ['APPROVED'],
            jobType: ['INTERNAL-JOB']
        });
        this.Form.valueChanges.subscribe(() => {
            this.getData();
        });
        this.getData();
        this.getDataByEmpfCode();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getDataByEmpfCode() {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpParams().set("empNo", this.currentUserCode);
        this.employeeService
            .readByEmployeePf(param)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.entity) {
                    this.currentUser = res.entity;
                    console.log("getDataById this.formData: ", this.currentUser);
                }
                else {
                    //this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                //this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => { },
        });
    }
    getSelectSelectedStatus() {
        this.getData();
    }
    getSelectedStatus(status) {
        this.Form.patchValue({
            status: status,
        });
    }
    getSelectedType(type) {
        this.Form.patchValue({
            jobType: type,
        });
    }
    getData() {
        this.loading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selectedStatus = this.Form.value.status;
        this.selectedJobType = this.Form.value.jobType;
        let params = {
            status: this.Form.value.status,
            applicationType: this.Form.value.jobType,
        };
        this.jobManagementService
            .readByStatusAndApplicationType(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    console.log("Data displayed on table", this.data);
                    this.loading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource(this.data);
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
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "500px";
        dialogConfig.data = {
            action: action,
            record: record,
            currentUser: this.currentUser
        };
        const dialogRef = this.dialog.open(_manage_job_opening_manage_job_opening_component__WEBPACK_IMPORTED_MODULE_1__.ManageJobOpeningComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            this.getData();
        });
    }
    deleteRecord(id) {
        let params = { id: id };
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you sure?",
            text: "THIS RECORD WILL BE DELETED PERMANENTLY!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                this.loading = true;
                this.jobManagementService
                    .delete(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
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
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? "deselect" : "select"} all`;
        }
        return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${row.position + 1}`;
    }
    expSelected() {
        this.atleastOneSelected = true;
        this.selectedRows = this.selection.selected;
        console.log("this.selectedRows: ", this.selectedRows);
    }
    processMultipleRows(status) {
        let privilege = "Validate Expenses";
        // this.hasAccess = this.accessControlService.hasPrivilege("FinanceModule", [
        //   privilege,
        // ]);
        if (this.hasAccess) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: '<span style="font-size: 20px;">Enter Verifier Remarks</span>',
                input: "textarea",
                inputPlaceholder: "Type your remarks here...",
                confirmButtonText: "Submit",
                showCancelButton: true,
                cancelButtonText: "Cancel",
                icon: "info",
                inputValidator: (value) => {
                    if (!value) {
                        return "Please enter your remarks";
                    }
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    const verifierRemarks = result.value;
                    const processedRows = this.selectedRows.map((element) => {
                        return {
                            id: element.id,
                            status: status,
                            verifierRemarks: verifierRemarks,
                        };
                    });
                    console.log("LOG: ", processedRows);
                    this.jobManagementService
                        .verify(processedRows)
                        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
                        .subscribe({
                        next: (res) => {
                            console.log("res: ", res);
                            if (res.statusCode == 201 || 200 || 0) {
                                this.snackbar.showNotification("snackbar-success", res.message);
                                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__.SelectionModel(true, []);
                                this.selection.clear();
                            }
                            else {}
                        },
                        error: (err) => {
                            this.snackbar.showNotification("snackbar-danger", err.message);
                        },
                        complete: () => {
                            this.getData();
                        },
                    }),
                        rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription;
                }
                else {
                    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__.SelectionModel(true, []);
                    this.selection.clear();
                }
            });
        }
    }
}
JobsOpeningsPageComponent.ɵfac = function JobsOpeningsPageComponent_Factory(t) { return new (t || JobsOpeningsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_2__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_erp_hr_data_job_services_job_management_service__WEBPACK_IMPORTED_MODULE_3__.JobManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_5__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_erp_hr_data_employee_services_employee_management_service__WEBPACK_IMPORTED_MODULE_6__.EmployeeService)); };
JobsOpeningsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: JobsOpeningsPageComponent, selectors: [["app-jobs-openings-page"]], viewQuery: function JobsOpeningsPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 121, vars: 27, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "REFRESH", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [1, "col-2"], [3, "formGroup"], ["appearance", "fill", 1, "example-full-width"], ["formControlName", "status"], [3, "value", 4, "ngFor", "ngForOf"], [1, "button-container", "mt-1"], ["mat-raised-button", "", 1, "mat-button", "approved", 3, "click"], ["formControlName", "jobType"], ["mat-raised-button", "", 1, "mat-button", "returned", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "jobRefNumber"], ["class", "column-nowrap psl-3 tbl-col-width-per-8", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-8", 4, "matCellDef"], ["matColumnDef", "title"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matCellDef"], ["matColumnDef", "vacantPositions"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["matColumnDef", "jobLevel"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "jobTerm"], ["matColumnDef", "status"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 3, "click", 4, "matCellDef"], ["matColumnDef", "deadlineDate"], ["matColumnDef", "action"], ["matColumnDef", "hrAction"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [3, "value"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-8"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-30"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["matRipple", "", 3, "click"], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function JobsOpeningsPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Job Openings");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function JobsOpeningsPageComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_Template_button_click_25_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, JobsOpeningsPageComponent_li_28_Template, 5, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, JobsOpeningsPageComponent_li_29_Template, 5, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, JobsOpeningsPageComponent_li_30_Template, 5, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 22)(32, "ul", 23)(33, "li")(34, "div", 24)(35, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_Template_img_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r84); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](81); return _r9.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "li")(37, "div", 26)(38, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_Template_img_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r84); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](81); return _r9.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "li")(40, "div", 28)(41, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_Template_img_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r84); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](81); return _r9.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "li")(43, "div", 30)(44, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_Template_img_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r84); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](81); return _r9.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 32)(46, "div", 4)(47, "div", 33)(48, "form", 34)(49, "mat-form-field", 35)(50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "mat-select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](53, JobsOpeningsPageComponent_mat_option_53_Template, 2, 2, "mat-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](54, JobsOpeningsPageComponent_mat_error_54_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 22)(56, "div", 38)(57, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_Template_button_click_57_listener() { return ctx.getSelectedStatus("APPROVED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, " APPROVED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 33)(62, "form", 34)(63, "mat-form-field", 35)(64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "mat-select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](67, JobsOpeningsPageComponent_mat_option_67_Template, 2, 2, "mat-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](68, JobsOpeningsPageComponent_mat_error_68_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 22)(70, "div", 38)(71, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_Template_button_click_71_listener() { return ctx.getSelectedType("OPEN-JOB"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, " OPEN-JOB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsOpeningsPageComponent_Template_button_click_75_listener() { return ctx.getSelectedType("INTERNAL-JOB"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, " INTERNAL-JOB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "mat-table", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](82, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](83, JobsOpeningsPageComponent_mat_header_cell_83_Template, 2, 4, "mat-header-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](84, JobsOpeningsPageComponent_mat_cell_84_Template, 2, 4, "mat-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](85, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](86, JobsOpeningsPageComponent_mat_header_cell_86_Template, 2, 0, "mat-header-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](87, JobsOpeningsPageComponent_mat_cell_87_Template, 2, 1, "mat-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](88, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](89, JobsOpeningsPageComponent_mat_header_cell_89_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](90, JobsOpeningsPageComponent_mat_cell_90_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](91, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](92, JobsOpeningsPageComponent_mat_header_cell_92_Template, 2, 0, "mat-header-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](93, JobsOpeningsPageComponent_mat_cell_93_Template, 2, 1, "mat-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](94, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](95, JobsOpeningsPageComponent_mat_header_cell_95_Template, 2, 0, "mat-header-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](96, JobsOpeningsPageComponent_mat_cell_96_Template, 2, 1, "mat-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](97, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](98, JobsOpeningsPageComponent_mat_header_cell_98_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](99, JobsOpeningsPageComponent_mat_cell_99_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](100, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](101, JobsOpeningsPageComponent_mat_header_cell_101_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](102, JobsOpeningsPageComponent_mat_cell_102_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](103, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](104, JobsOpeningsPageComponent_mat_header_cell_104_Template, 2, 0, "mat-header-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](105, JobsOpeningsPageComponent_mat_cell_105_Template, 7, 5, "mat-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](106, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](107, JobsOpeningsPageComponent_mat_header_cell_107_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](108, JobsOpeningsPageComponent_mat_cell_108_Template, 3, 3, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](109, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](110, JobsOpeningsPageComponent_mat_header_cell_110_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](111, JobsOpeningsPageComponent_mat_cell_111_Template, 3, 3, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](112, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](113, JobsOpeningsPageComponent_mat_header_cell_113_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](114, JobsOpeningsPageComponent_mat_cell_114_Template, 7, 0, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](115, JobsOpeningsPageComponent_mat_header_row_115_Template, 1, 0, "mat-header-row", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](116, JobsOpeningsPageComponent_mat_row_116_Template, 1, 2, "mat-row", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](117, JobsOpeningsPageComponent_tr_117_Template, 3, 2, "tr", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](118, JobsOpeningsPageComponent_div_118_Template, 2, 0, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](119, JobsOpeningsPageComponent_div_119_Template, 2, 1, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](120, "mat-paginator", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", "All Job Openings")("items", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](25, _c0))("active_item", "All Jobs Openings");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Form.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedStatus === "APPROVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.reqJobTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Form.get("jobType").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedJobType === "OPEN-JOB");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedJobType === "INTERNAL-JOB");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](26, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_8__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_29__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_9__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2JzLW9wZW5pbmdzLXBhZ2UuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 5010:
/*!**************************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-jobs/manage-job-opening/manage-job-opening.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageJobOpeningComponent": () => (/* binding */ ManageJobOpeningComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_hr_data_job_services_document_management_system_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-hr/data/job-services/document-management-system.service */ 84624);
/* harmony import */ var src_app_erp_hr_data_job_services_job_applications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/data/job-services/job-applications.service */ 6138);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 11961);















function ManageJobOpeningComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Submit Job Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageJobOpeningComponent_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "First Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Last Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Middle Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Email Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Phone Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "ID Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Job Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Job Ref Num:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 12)(48, "div", 13)(49, "div", 14)(50, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageJobOpeningComponent_div_1_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Submit Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageJobOpeningComponent_div_1_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currentUser.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currentUser.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currentUser.middleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currentUser.personalEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currentUser.personalPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currentUser.nationalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.Data.jobTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.Data.jobRefNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("auth-spinner", ctx_r0.posting);
} }
class ManageJobOpeningComponent {
    constructor(dialogRef, data, fb, snackbar, dmsAPI, jobApplicationAPIService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.dmsAPI = dmsAPI;
        this.jobApplicationAPIService = jobApplicationAPIService;
        this.displayedColumns = ["index", "filename", "filetype", "action"];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        this.downloadLoading = false;
        this.pageFunction = "Add";
        this.posting = false;
    }
    ngOnInit() {
        this.pageFunction = this.data.action;
        this.Data = this.data.record;
        this.currentUser = this.data.currentUser;
        console.log("this.currentUser : ", this.currentUser);
        console.log("this.Data : ", this.Data);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.input = filterValue;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    submit() {
        let body = {
            jobRefNumber: this.Data.jobRefNumber,
            jobTitle: this.Data.jobTitle,
            firstName: this.currentUser.firstName,
            lastName: this.currentUser.lastName,
            middleName: this.currentUser.middleName,
            emailAddress: this.currentUser.personalEmail,
            phoneNumber: this.currentUser.personalPhone,
            nationalId: this.currentUser.nationalId,
        };
        this.posting = true;
        this.jobApplicationAPIService.create(body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$))
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
            rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription;
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.response });
    }
}
ManageJobOpeningComponent.ɵfac = function ManageJobOpeningComponent_Factory(t) { return new (t || ManageJobOpeningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_hr_data_job_services_document_management_system_service__WEBPACK_IMPORTED_MODULE_1__.DocumentManagementSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_hr_data_job_services_job_applications_service__WEBPACK_IMPORTED_MODULE_2__.JobApplicationAPIService)); };
ManageJobOpeningComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ManageJobOpeningComponent, selectors: [["app-manage-job-opening"]], viewQuery: function ManageJobOpeningComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 2, vars: 1, consts: [[1, "addContainer"], ["class", "contact-details", 4, "ngIf"], [1, "contact-details"], [1, "modalHeader"], [1, "contact-details-name", "mb-1"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "row", "mt-1", 2, "width", "98%", "margin-left", "20px"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "justify-content-center"], [1, "col-5", "m-b-10"], [1, "col-7", "pro-left", "m-b-10"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["align", "end", 1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]], template: function ManageJobOpeningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManageJobOpeningComponent_div_1_Template, 54, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2Utam9iLW9wZW5pbmcuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 63059:
/*!******************************************************************************!*\
  !*** ./src/app/erp-hr/data/employee-services/employee-management.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeService": () => (/* binding */ EmployeeService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






class EmployeeService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Content-Type", "application/json");
        this.baseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/employee`;
    }
    create(data) {
        let API_URL = `${this.baseURL}/add`;
        ///api/v1/employee/add
        return this.http.post(API_URL, data, { headers: this.headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    createMultiple(data) {
        let API_URL = `${this.baseURL}/migrate`;
        return this.http.post(API_URL, data, { headers: this.headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    headOfDepartments() {
        let API_URL = `${this.baseURL}/heads/of/departments`;
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    read() {
        let API_URL = `${this.baseURL}/all`;
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readByStatus(params) {
        let API_URL = `${this.baseURL}/fetchbyStatus`;
        return this.http
            .get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readActive() {
        let API_URL = `${this.baseURL}/all/approved`;
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readByEmployeePf(params) {
        let API_URL = `${this.baseURL}/find/by/emp_no`;
        return this.http
            .get(API_URL, {
            params: params,
            headers: this.headers,
            withCredentials: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readActiveEmployeesWithMoreDetails() {
        let API_URL = `${this.baseURL}/all/active/employees`;
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readPending() {
        let API_URL = `${this.baseURL}/all/pending`;
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readDormant() {
        let API_URL = `${this.baseURL}/all/dormant`;
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readHold() {
        let API_URL = `${this.baseURL}/all/onHold`;
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    restoreDormant(id) {
        let API_URL = `${this.baseURL}/restoreDormant/${id}`;
        return this.http.put(API_URL, { withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    restoreRemoved(id) {
        let API_URL = `${this.baseURL}/restoreOnHold/${id}`;
        return this.http.put(API_URL, { withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    approve(id) {
        let API_URL = `${this.baseURL}/approve/${id}`;
        return this.http.put(API_URL, { withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    hrmApproval(id) {
        let API_URL = `${this.baseURL}/hrm/approval/${id}`;
        return this.http.put(API_URL, { withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    supervisorApproval(id) {
        let API_URL = `${this.baseURL}/supervisor/approval/${id}`;
        return this.http.put(API_URL, { withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    directorApproval(id) {
        let API_URL = `${this.baseURL}/director/approval/${id}`;
        return this.http.put(API_URL, { withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    tempDelete(id) {
        let API_URL = `${this.baseURL}/temp/delete/${id}`;
        return this.http.put(API_URL, { withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    tempHold(id) {
        let API_URL = `${this.baseURL}/temp/hold/${id}`;
        return this.http.put(API_URL, { withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    //Permanently Delete Employee Completely
    permanentDelete(id) {
        let API_URL = `${this.baseURL}/permanent/delete/${id}`;
        return this.http.delete(API_URL, { withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    countEmployees() {
        let API_URL = `${this.baseURL}/count`;
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    countClosedEmployees() {
        let API_URL = `${this.baseURL}/count/closed/salary`;
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    countSalary() {
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/payroll/count/salary`;
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    findById(id) {
        let API_URL = `${this.baseURL}/find/by/id/${id}`;
        return this.http.get(API_URL, { withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    findByEmpNo(empNo) {
        let API_URL = `${this.baseURL}/find/by/emp_no/?empNo=${empNo}`;
        return this.http.get(API_URL, { withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            console.log(res);
            console.log("empno", empNo);
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    update(data) {
        let API_URL = `${this.baseURL}/update`;
        return this.http
            .put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            console.log("On Update Employee JSON", res);
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    createPortal(params) {
        let API_URL = `${this.baseURL}/create/portal`;
        return this.http
            .put(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    delete(params) {
        let API_URL = `${this.baseURL}/delete`;
        return this.http.delete(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    validateBulkEmployees(processedRows) {
        const expenseUrl = `${this.baseURL}/update/state`;
        return this.http.put(expenseUrl, processedRows);
    }
    // /api/v1/employee/get_org_structure
    readStructureByEmpf(params) {
        let API_URL = `${this.baseURL}/get_org_structure`;
        return this.http.get(API_URL, { params: params, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    errorMgmt(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `${error.error.message}`;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
    }
}
EmployeeService.ɵfac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
EmployeeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_erp-hr-self-service_modules_employee-jobs_employee-jobs_module_ts.js.map
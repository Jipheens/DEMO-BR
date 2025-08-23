"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-hr-self-service_modules_employee-leave_employee-leave_module_ts"],{

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

/***/ 9706:
/*!*********************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-leave/employee-leave-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeLeaveRoutingModule": () => (/* binding */ EmployeeLeaveRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _leave_requests_page_leave_requests_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-requests-page/leave-requests-page.component */ 54852);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _leave_plans_page_leave_plans_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-plans-page/leave-plans-page.component */ 2249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: "requests",
        component: _leave_requests_page_leave_requests_page_component__WEBPACK_IMPORTED_MODULE_0__.LeaveRequestsPageComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: {
            clientName: "EmployeePortalModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
    {
        path: "plan",
        component: _leave_plans_page_leave_plans_page_component__WEBPACK_IMPORTED_MODULE_2__.LeavePlansPageComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: {
            clientName: "EmployeePortalModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
];
class EmployeeLeaveRoutingModule {
}
EmployeeLeaveRoutingModule.ɵfac = function EmployeeLeaveRoutingModule_Factory(t) { return new (t || EmployeeLeaveRoutingModule)(); };
EmployeeLeaveRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EmployeeLeaveRoutingModule });
EmployeeLeaveRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EmployeeLeaveRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 33648:
/*!*************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-leave/employee-leave.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeLeaveModule": () => (/* binding */ EmployeeLeaveModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _employee_leave_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-leave-routing.module */ 9706);
/* harmony import */ var _leave_requests_page_leave_requests_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-requests-page/leave-requests-page.component */ 54852);
/* harmony import */ var _leave_plans_page_leave_plans_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-plans-page/leave-plans-page.component */ 2249);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 25490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








class EmployeeLeaveModule {
}
EmployeeLeaveModule.ɵfac = function EmployeeLeaveModule_Factory(t) { return new (t || EmployeeLeaveModule)(); };
EmployeeLeaveModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: EmployeeLeaveModule });
EmployeeLeaveModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _employee_leave_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeLeaveRoutingModule,
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](EmployeeLeaveModule, { declarations: [_leave_requests_page_leave_requests_page_component__WEBPACK_IMPORTED_MODULE_1__.LeaveRequestsPageComponent,
        _leave_plans_page_leave_plans_page_component__WEBPACK_IMPORTED_MODULE_2__.LeavePlansPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _employee_leave_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeLeaveRoutingModule,
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 2249:
/*!***********************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-leave/leave-plans-page/leave-plans-page.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeavePlansPageComponent": () => (/* binding */ LeavePlansPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_hr_hr_lookups_configurations_lookups_departments_lookup_departments_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-hr/hr-lookups/configurations-lookups/departments-lookup/departments-lookup.component */ 45528);
/* harmony import */ var src_app_erp_hr_hr_lookups_configurations_lookups_job_roles_lookup_job_roles_lookup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-hr/hr-lookups/configurations-lookups/job-roles-lookup/job-roles-lookup.component */ 37577);
/* harmony import */ var src_app_erp_hr_modules_leave_management_leave_planner_manage_leave_planner_manage_leave_planner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/modules/leave-management/leave-planner/manage-leave-planner/manage-leave-planner.component */ 57259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_leave_services_leave_planner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-hr/data/leave-services/leave-planner.service */ 98589);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dashboard/pages/gen-widgets/gen-widgets.component */ 28368);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);

































function LeavePlansPageComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li")(1, "div", 63)(2, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_li_33_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r37.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} }
function LeavePlansPageComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li")(1, "div", 65)(2, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_li_34_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r39.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} }
function LeavePlansPageComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li")(1, "div", 67)(2, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_li_35_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r41.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} }
function LeavePlansPageComponent_mat_header_cell_54_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 69)(1, "mat-checkbox", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function LeavePlansPageComponent_mat_header_cell_54_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return $event ? ctx_r43.masterToggle() : null; })("change", function LeavePlansPageComponent_mat_header_cell_54_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r45.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r6.selection.hasValue() && ctx_r6.isAllSelected())("indeterminate", ctx_r6.selection.hasValue() && !ctx_r6.isAllSelected())("ngClass", "tbl-checkbox");
} }
function LeavePlansPageComponent_mat_cell_55_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 69)(1, "mat-checkbox", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_mat_cell_55_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function LeavePlansPageComponent_mat_cell_55_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49); const row_r46 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return $event ? ctx_r48.selection.toggle(row_r46) : null; })("change", function LeavePlansPageComponent_mat_cell_55_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r50.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r46 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r7.selection.isSelected(row_r46))("ngClass", "tbl-checkbox")("aria-label", ctx_r7.checkboxLabel(row_r46));
} }
function LeavePlansPageComponent_mat_header_cell_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LeavePlansPageComponent_mat_cell_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r51.id, " ");
} }
function LeavePlansPageComponent_mat_header_cell_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Employee PF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LeavePlansPageComponent_mat_cell_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r52.empPf, " ");
} }
function LeavePlansPageComponent_mat_header_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LeavePlansPageComponent_mat_cell_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r53.name, " ");
} }
function LeavePlansPageComponent_mat_header_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Leave Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LeavePlansPageComponent_mat_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r54.leaveType, " ");
} }
function LeavePlansPageComponent_mat_header_cell_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Department Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LeavePlansPageComponent_mat_cell_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r55.departmentName, " ");
} }
function LeavePlansPageComponent_mat_header_cell_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Roles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LeavePlansPageComponent_mat_cell_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r56.roles, " ");
} }
function LeavePlansPageComponent_mat_header_cell_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LeavePlansPageComponent_mat_cell_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r57.year, " ");
} }
function LeavePlansPageComponent_mat_header_cell_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " From Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LeavePlansPageComponent_mat_cell_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, row_r58.fromDate, "mediumDate"), " ");
} }
function LeavePlansPageComponent_mat_header_cell_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " To Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LeavePlansPageComponent_mat_cell_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, row_r59.toDate, "mediumDate"), " ");
} }
function LeavePlansPageComponent_mat_header_cell_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LeavePlansPageComponent_mat_cell_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r60.days, " ");
} }
function LeavePlansPageComponent_mat_header_cell_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LeavePlansPageComponent_mat_cell_88_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00A0 ", row_r61.status, " ");
} }
function LeavePlansPageComponent_mat_cell_88_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00A0 ", row_r61.status, " ");
} }
function LeavePlansPageComponent_mat_cell_88_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00A0 ", row_r61.status, " ");
} }
function LeavePlansPageComponent_mat_cell_88_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00A0 ", row_r61.status, " ");
} }
function LeavePlansPageComponent_mat_cell_88_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00A0 ", row_r61.status, " ");
} }
function LeavePlansPageComponent_mat_cell_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_mat_cell_88_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, LeavePlansPageComponent_mat_cell_88_button_2_Template, 3, 1, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, LeavePlansPageComponent_mat_cell_88_button_3_Template, 3, 1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, LeavePlansPageComponent_mat_cell_88_button_4_Template, 3, 1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, LeavePlansPageComponent_mat_cell_88_button_5_Template, 3, 1, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, LeavePlansPageComponent_mat_cell_88_button_6_Template, 3, 1, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitch", row_r61.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function LeavePlansPageComponent_mat_header_cell_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LeavePlansPageComponent_mat_cell_91_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 92)(1, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_mat_cell_91_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function LeavePlansPageComponent_mat_cell_91_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r78); const row_r74 = restoredCtx.$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r77.mngRecord("Update", row_r74); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-feather-icons", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_mat_cell_91_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function LeavePlansPageComponent_mat_cell_91_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r78); const row_r74 = restoredCtx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r80.mngRecord("View", row_r74); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-feather-icons", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_mat_cell_91_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function LeavePlansPageComponent_mat_cell_91_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r78); const row_r74 = restoredCtx.$implicit; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r82.deleteRecord(row_r74.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "app-feather-icons", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "trash-2");
} }
function LeavePlansPageComponent_mat_header_row_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-header-row");
} }
function LeavePlansPageComponent_mat_row_93_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-row", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_mat_row_93_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r85); const row_r83 = restoredCtx.$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r84.viewRecord(row_r83); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("cursor", "pointer");
} }
function LeavePlansPageComponent_tr_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("colspan", ctx_r34.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r34.input, "\"");
} }
function LeavePlansPageComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-bar", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LeavePlansPageComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-spinner", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Leave Planners"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class LeavePlansPageComponent {
    constructor(dialog, notificationAPI, leavePlannerService, snackbar, fb, tokenStorageService) {
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.leavePlannerService = leavePlannerService;
        this.snackbar = snackbar;
        this.fb = fb;
        this.tokenStorageService = tokenStorageService;
        this.displayedColumns = [
            //  "select",
            "id",
            "empPf",
            "name",
            "leaveType",
            "departmentName",
            "roles",
            "year",
            "fromDate",
            "toDate",
            "days",
            "action",
        ];
        this.loading = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__.SelectionModel(true, []);
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
        //**************************************************************************************************************** */
        this.selectedStatus = "PENDING";
        this.selectedApprover = "Hr Payroll Verifier";
        this.reqStatuses = [
            { name: "ALL" },
            { name: "PENDING" },
            { name: "APPROVED" },
            { name: "RETURNED" },
            { name: "REJECTED" },
        ];
        this.reqApprovers = [
            { name: "Hr Payroll Verifier" },
            { name: "Senior Hr Payroll Verifier" },
        ];
        // ****************************************************************************************************************************
        this.selectedRows = [];
        this.atleastOneSelected = false;
        this.hasAccess = true;
    }
    ngOnInit() {
        const currentYear = new Date().getFullYear();
        const currentMonthIndex = new Date().getMonth();
        const currentMonthName = this.months[currentMonthIndex];
        this.currentUserEmpf = this.tokenStorageService.getEmppf();
        this.Form = this.fb.group({
            // year: [currentYear.toString(), Validators.required],
            // month: [currentMonthName, Validators.required],
            // department: ["ALL"],
            // jobGroup: ["ALL"],
            // status: ["ALL"],
            empf: [this.currentUserEmpf || 'NA'],
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
        this.getData();
    }
    getSelectedStatus(status) {
        this.Form.patchValue({
            status: status,
        });
        this.getData();
    }
    getSelectedApprover(approver) {
        this.Form.patchValue({
            approver: approver,
        });
        this.getData();
    }
    getData() {
        this.loading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpParams()
            // .set('year', this.year)
            // .set("DepartmentName", this.Form.value.department)
            // .set("Roles", this.Form.value.groupRole)
            .set("EmpPf", this.Form.value.empf);
        // .set("Status", this.Form.value.status)
        // .set("Month", this.Form.value.month);
        this.leavePlannerService
            .readLeavePlannerByEmpNo(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    console.log("Leave Planners displayed on table", this.data);
                    this.loading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(this.data);
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
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: action,
            record: record,
        };
        const dialogRef = this.dialog.open(src_app_erp_hr_modules_leave_management_leave_planner_manage_leave_planner_manage_leave_planner_component__WEBPACK_IMPORTED_MODULE_2__.ManageLeavePlannerComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            this.getData();
        });
    }
    deleteRecord(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: "Are you sure?",
            text: "HOLIDAY RECORD WILL BE DELETED PERMANENTLY!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                this.loading = true;
                this.leavePlannerService
                    .deletePlanner(id)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        if (res.statusCode == 200) {
                            this.getData();
                            this.loading = false;
                            this.notificationAPI.alertSuccess("HOLIDAY RECORD DELETED SUCCESSFULLY");
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
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
                    this.leavePlannerService
                        .validateBulkLeavePlanners(processedRows)
                        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$))
                        .subscribe({
                        next: (res) => {
                            console.log("res: ", res);
                            if (res.statusCode == 201 || 200 || 0) {
                                this.snackbar.showNotification("snackbar-success", res.message);
                                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__.SelectionModel(true, []);
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
                        rxjs__WEBPACK_IMPORTED_MODULE_18__.Subscription;
                }
                else {
                    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__.SelectionModel(true, []);
                    this.selection.clear();
                }
            });
        }
    }
    //*********************************************************************************************************************** */
    jobRoleLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "SingleEmployee",
        };
        const dialogRef = this.dialog.open(src_app_erp_hr_hr_lookups_configurations_lookups_job_roles_lookup_job_roles_lookup_component__WEBPACK_IMPORTED_MODULE_1__.JobRolesLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.Form.patchValue({
                    jobGroup: res.data[0].id,
                });
            }
        });
    }
    departmentLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "SingleDepartment",
        };
        const dialogRef = this.dialog.open(src_app_erp_hr_hr_lookups_configurations_lookups_departments_lookup_departments_lookup_component__WEBPACK_IMPORTED_MODULE_0__.DepartmentsLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.Form.patchValue({
                    department: res.data[0].id,
                });
            }
        });
    }
}
LeavePlansPageComponent.ɵfac = function LeavePlansPageComponent_Factory(t) { return new (t || LeavePlansPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_4__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_hr_data_leave_services_leave_planner_service__WEBPACK_IMPORTED_MODULE_5__.LeavePlannerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_7__.TokenStorageService)); };
LeavePlansPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: LeavePlansPageComponent, selectors: [["app-leave-plans-page"]], viewQuery: function LeavePlansPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 98, vars: 15, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "empPf"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-25", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-25", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "leaveType"], ["matColumnDef", "departmentName"], ["matColumnDef", "roles"], ["matColumnDef", "year"], ["matColumnDef", "fromDate"], ["matColumnDef", "toDate"], ["matColumnDef", "days"], ["matColumnDef", "status"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-25"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-25"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function LeavePlansPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Employee Leave Planners");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function LeavePlansPageComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_Template_button_click_25_listener() { return ctx.mngRecord("Add", ""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "li")(29, "div", 21)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_Template_button_click_30_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, LeavePlansPageComponent_li_33_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, LeavePlansPageComponent_li_34_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, LeavePlansPageComponent_li_35_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 23)(37, "ul", 24)(38, "li")(39, "div", 25)(40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_Template_img_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r86); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](52); return _r5.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "li")(42, "div", 27)(43, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_Template_img_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r86); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](52); return _r5.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "li")(45, "div", 29)(46, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_Template_img_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r86); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](52); return _r5.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "li")(48, "div", 31)(49, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LeavePlansPageComponent_Template_img_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r86); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](52); return _r5.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "mat-table", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](53, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](54, LeavePlansPageComponent_mat_header_cell_54_Template, 2, 4, "mat-header-cell", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, LeavePlansPageComponent_mat_cell_55_Template, 2, 4, "mat-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](56, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](57, LeavePlansPageComponent_mat_header_cell_57_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](58, LeavePlansPageComponent_mat_cell_58_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](59, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](60, LeavePlansPageComponent_mat_header_cell_60_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](61, LeavePlansPageComponent_mat_cell_61_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](62, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](63, LeavePlansPageComponent_mat_header_cell_63_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](64, LeavePlansPageComponent_mat_cell_64_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](65, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, LeavePlansPageComponent_mat_header_cell_66_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](67, LeavePlansPageComponent_mat_cell_67_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](68, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](69, LeavePlansPageComponent_mat_header_cell_69_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](70, LeavePlansPageComponent_mat_cell_70_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](71, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](72, LeavePlansPageComponent_mat_header_cell_72_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](73, LeavePlansPageComponent_mat_cell_73_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](74, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](75, LeavePlansPageComponent_mat_header_cell_75_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](76, LeavePlansPageComponent_mat_cell_76_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](77, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, LeavePlansPageComponent_mat_header_cell_78_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](79, LeavePlansPageComponent_mat_cell_79_Template, 3, 4, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](80, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](81, LeavePlansPageComponent_mat_header_cell_81_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](82, LeavePlansPageComponent_mat_cell_82_Template, 3, 4, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](83, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](84, LeavePlansPageComponent_mat_header_cell_84_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](85, LeavePlansPageComponent_mat_cell_85_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](86, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](87, LeavePlansPageComponent_mat_header_cell_87_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](88, LeavePlansPageComponent_mat_cell_88_Template, 7, 5, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](89, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](90, LeavePlansPageComponent_mat_header_cell_90_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](91, LeavePlansPageComponent_mat_cell_91_Template, 7, 9, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](92, LeavePlansPageComponent_mat_header_row_92_Template, 1, 0, "mat-header-row", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](93, LeavePlansPageComponent_mat_row_93_Template, 1, 2, "mat-row", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](94, LeavePlansPageComponent_tr_94_Template, 3, 2, "tr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](95, LeavePlansPageComponent_div_95_Template, 2, 0, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](96, LeavePlansPageComponent_div_96_Template, 2, 1, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](97, "mat-paginator", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Employee Leave Planners")("items", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](13, _c0))("active_item", "Employee Leave Planners");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](14, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_9__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_26__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_10__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWF2ZS1wbGFucy1wYWdlLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 54852:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-leave/leave-requests-page/leave-requests-page.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveRequestsPageComponent": () => (/* binding */ LeaveRequestsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/ccentre-lookup/ccentre-lookup.component */ 64622);
/* harmony import */ var src_app_erp_hr_modules_leave_management_leave_requests_manage_leave_requests_manage_leave_requests_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-hr/modules/leave-management/leave-requests/manage-leave-requests/manage-leave-requests.component */ 52966);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_leave_services_leave_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-hr/data/leave-services/leave-requests.service */ 25095);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dashboard/pages/gen-widgets/gen-widgets.component */ 28368);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);



































function LeaveRequestsPageComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li")(1, "div", 82)(2, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_li_33_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r47.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function LeaveRequestsPageComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li")(1, "div", 84)(2, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_li_34_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r49.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function LeaveRequestsPageComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li")(1, "div", 86)(2, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_li_35_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r51.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function LeaveRequestsPageComponent_mat_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", reqStatus_r53.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", reqStatus_r53.name, " ");
} }
function LeaveRequestsPageComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_error_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please Enter Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_error_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please Enter Cost Center Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_header_cell_102_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 89)(1, "mat-checkbox", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function LeaveRequestsPageComponent_mat_header_cell_102_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return $event ? ctx_r54.masterToggle() : null; })("change", function LeaveRequestsPageComponent_mat_header_cell_102_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r55); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r56.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx_r10.selection.hasValue() && ctx_r10.isAllSelected())("indeterminate", ctx_r10.selection.hasValue() && !ctx_r10.isAllSelected())("ngClass", "tbl-checkbox");
} }
function LeaveRequestsPageComponent_mat_cell_103_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 89)(1, "mat-checkbox", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_mat_cell_103_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function LeaveRequestsPageComponent_mat_cell_103_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r60); const row_r57 = restoredCtx.$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return $event ? ctx_r59.selection.toggle(row_r57) : null; })("change", function LeaveRequestsPageComponent_mat_cell_103_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r60); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r61.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r57 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx_r11.selection.isSelected(row_r57))("ngClass", "tbl-checkbox")("aria-label", ctx_r11.checkboxLabel(row_r57));
} }
function LeaveRequestsPageComponent_mat_header_cell_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r62.id, " ");
} }
function LeaveRequestsPageComponent_mat_header_cell_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Employee PF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r63.empPf, " ");
} }
function LeaveRequestsPageComponent_mat_header_cell_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Employee Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r64.employeeName, " ");
} }
function LeaveRequestsPageComponent_mat_header_cell_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Department Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r65.departmentName, " ");
} }
function LeaveRequestsPageComponent_mat_header_cell_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Leave Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r66.leavetype, " ");
} }
function LeaveRequestsPageComponent_mat_header_cell_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " From Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, row_r67.fromdate, "mediumDate"), " ");
} }
function LeaveRequestsPageComponent_mat_header_cell_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " To Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, row_r68.todate, "mediumDate"), " ");
} }
function LeaveRequestsPageComponent_mat_header_cell_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Handover To Employee PF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r69.handovertoemppf, " ");
} }
function LeaveRequestsPageComponent_mat_header_cell_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Handover To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r70.handoverto, " ");
} }
function LeaveRequestsPageComponent_mat_header_cell_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Days Applied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r71.daysapplied, " ");
} }
function LeaveRequestsPageComponent_mat_header_cell_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " On Leave ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r72.on_leave, " ");
} }
function LeaveRequestsPageComponent_mat_header_cell_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Supervisor Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r73.supervisorstatus, " ");
} }
function LeaveRequestsPageComponent_mat_header_cell_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " HR Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r74.hrstatus, " ");
} }
function LeaveRequestsPageComponent_mat_header_cell_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_145_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r75.status, " ");
} }
function LeaveRequestsPageComponent_mat_cell_145_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r75.status, " ");
} }
function LeaveRequestsPageComponent_mat_cell_145_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r75.status, " ");
} }
function LeaveRequestsPageComponent_mat_cell_145_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r75.status, " ");
} }
function LeaveRequestsPageComponent_mat_cell_145_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r75.status, " ");
} }
function LeaveRequestsPageComponent_mat_cell_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_mat_cell_145_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](1, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, LeaveRequestsPageComponent_mat_cell_145_button_2_Template, 3, 1, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, LeaveRequestsPageComponent_mat_cell_145_button_3_Template, 3, 1, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, LeaveRequestsPageComponent_mat_cell_145_button_4_Template, 3, 1, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, LeaveRequestsPageComponent_mat_cell_145_button_5_Template, 3, 1, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, LeaveRequestsPageComponent_mat_cell_145_button_6_Template, 3, 1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", row_r75.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function LeaveRequestsPageComponent_mat_header_cell_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_mat_cell_148_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 112)(1, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_mat_cell_148_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function LeaveRequestsPageComponent_mat_cell_148_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r92); const row_r88 = restoredCtx.$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r91.mngRecord("Update My", row_r88); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-feather-icons", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_mat_cell_148_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function LeaveRequestsPageComponent_mat_cell_148_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r92); const row_r88 = restoredCtx.$implicit; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r94.mngRecord("View My", row_r88); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-feather-icons", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_mat_cell_148_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function LeaveRequestsPageComponent_mat_cell_148_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r92); const row_r88 = restoredCtx.$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r96.deleteRecord(row_r88.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "app-feather-icons", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", "trash-2");
} }
function LeaveRequestsPageComponent_mat_header_row_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-header-row");
} }
function LeaveRequestsPageComponent_mat_row_150_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-row", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_mat_row_150_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r99); const row_r97 = restoredCtx.$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r98.viewRecord(row_r97); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("cursor", "pointer");
} }
function LeaveRequestsPageComponent_tr_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("colspan", ctx_r44.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r44.input, "\"");
} }
function LeaveRequestsPageComponent_div_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-progress-bar", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaveRequestsPageComponent_div_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-progress-spinner", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Leave Requests"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class LeaveRequestsPageComponent {
    constructor(dialog, notificationAPI, leaveRequestService, snackbar, fb, tokenStorageService) {
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.leaveRequestService = leaveRequestService;
        this.snackbar = snackbar;
        this.fb = fb;
        this.tokenStorageService = tokenStorageService;
        this.displayedColumns = [
            //"select",
            "id",
            "empPf",
            "employeeName",
            "departmentName",
            "leavetype",
            "fromdate",
            "todate",
            "handovertoemppf",
            "handoverto",
            "daysapplied",
            "on_leave",
            "supervisorstatus",
            "hrstatus",
            "status",
            "action",
        ];
        this.loading = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__.SelectionModel(true, []);
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
            { name: "APPROVED" },
            { name: "RETURNED" },
            { name: "REJECTED" },
        ];
        this.selectedStatus = "ALL";
        // ****************************************************************************************************************************
        this.selectedRows = [];
        this.atleastOneSelected = false;
        this.hasAccess = true;
    }
    ngOnInit() {
        const currentYear = new Date().getFullYear();
        const currentMonthIndex = new Date().getMonth();
        const currentMonthName = this.months[currentMonthIndex];
        this.currentUser = this.tokenStorageService.getUser();
        this.Form = this.fb.group({
            empPf: [this.currentUser.empNo || 'NA', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            year: [currentYear.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            status: ['ALL']
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
            empPf: this.Form.value.empPf,
            Status: this.Form.value.status,
            year: this.Form.value.year,
        };
        this.leaveRequestService
            .getEmployeesLeavesByPfNumber(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    console.log("Leave Requests displayed on table", this.data);
                    this.loading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(this.data);
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
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: action,
            record: record,
            currentUserPf: this.currentUser.empPfNo
        };
        const dialogRef = this.dialog.open(src_app_erp_hr_modules_leave_management_leave_requests_manage_leave_requests_manage_leave_requests_component__WEBPACK_IMPORTED_MODULE_1__.ManageLeaveRequestsComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            this.getData();
        });
    }
    deleteRecord(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
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
                this.leaveRequestService
                    .delete(id)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
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
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogConfig();
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
        // if (this.hasAccess) {
        //   Swal.fire({
        // title: '<span style="font-size: 20px;">Enter Verifier Remarks</span>',
        // input: "textarea",
        // inputPlaceholder: "Type your remarks here...",
        // confirmButtonText: "Submit",
        // showCancelButton: true,
        // cancelButtonText: "Cancel",
        // icon: "info",
        // inputValidator: (value) => {
        //       if (!value) {
        //         return "Please enter your remarks";
        //       }
        //     },
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       const verifierRemarks = result.value;
        //       const processedRows = this.selectedRows.map((element) => {
        //         return {
        //           id: element.id,
        //           status: status,
        //           verifierRemarks: verifierRemarks,
        //         };
        //       });
        //       console.log("LOG: ", processedRows);
        //       this.leaveRequestService
        //         .updateState(processedRows)
        //         .pipe(takeUntil(this.destroy$))
        //         .subscribe({
        //           next: (res) => {
        //             console.log("res: ", res);
        //             if (res.statusCode == 201 || 200 || 302) {
        //               this.snackbar.showNotification(
        //                 "snackbar-success",
        //                 res.message
        //               );
        //               this.selection = new SelectionModel<any>(true, []);
        //               this.selection.clear();
        //             } else {
        //               this.snackbar.showNotification(
        //                 "snackbar-danger",
        //                 res.message
        //               );
        //             }
        //           },
        //           error: (err) => {
        //             this.snackbar.showNotification("snackbar-danger", err.message);
        //           },
        //           complete: () => {
        //             this.getData();
        //           },
        //         }),
        //         Subscription;
        //     } else {
        //       this.selection = new SelectionModel<any>(true, []);
        //       this.selection.clear();
        //     }
        //   });
        // }
    }
}
LeaveRequestsPageComponent.ɵfac = function LeaveRequestsPageComponent_Factory(t) { return new (t || LeaveRequestsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_3__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_erp_hr_data_leave_services_leave_requests_service__WEBPACK_IMPORTED_MODULE_4__.LeaveRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__.TokenStorageService)); };
LeaveRequestsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: LeaveRequestsPageComponent, selectors: [["app-leave-requests-page"]], viewQuery: function LeaveRequestsPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 155, vars: 32, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [3, "formGroup"], [1, "col-2"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "status", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-5"], [1, "button-container", "mt-1"], ["mat-raised-button", "", 1, "mat-button", "verified", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "pending", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "approved", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "returned", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "rejected", 3, "click"], ["matInput", "", "formControlName", "year"], ["matInput", "", "formControlName", "empPf", "readonly", ""], [1, "col-1"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "empPf"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "employeeName"], ["matColumnDef", "departmentName"], ["matColumnDef", "leavetype"], ["matColumnDef", "fromdate"], ["matColumnDef", "todate"], ["matColumnDef", "handovertoemppf"], ["matColumnDef", "handoverto"], ["matColumnDef", "daysapplied"], ["matColumnDef", "on_leave"], ["matColumnDef", "supervisorstatus"], ["matColumnDef", "hrstatus"], ["matColumnDef", "status"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [3, "value"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function LeaveRequestsPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Leave Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function LeaveRequestsPageComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_Template_button_click_25_listener() { return ctx.mngRecord("Add My", ""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "li")(29, "div", 21)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_Template_button_click_30_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, LeaveRequestsPageComponent_li_33_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, LeaveRequestsPageComponent_li_34_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, LeaveRequestsPageComponent_li_35_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 23)(37, "ul", 24)(38, "li")(39, "div", 25)(40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_Template_img_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r100); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](100); return _r9.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "li")(42, "div", 27)(43, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_Template_img_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r100); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](100); return _r9.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "li")(45, "div", 29)(46, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_Template_img_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r100); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](100); return _r9.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "li")(48, "div", 31)(49, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_Template_img_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r100); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](100); return _r9.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 33)(51, "form", 34)(52, "div", 4)(53, "div", 35)(54, "form", 34)(55, "mat-form-field", 36)(56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "mat-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function LeaveRequestsPageComponent_Template_mat_select_selectionChange_58_listener() { return ctx.getSelectSelectedStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](59, LeaveRequestsPageComponent_mat_option_59_Template, 2, 2, "mat-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](60, LeaveRequestsPageComponent_mat_error_60_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 39)(62, "div", 40)(63, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_Template_button_click_63_listener() { return ctx.getSelectedStatus("ALL"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, " ALL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_Template_button_click_67_listener() { return ctx.getSelectedStatus("PENDING"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, " PENDING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_Template_button_click_71_listener() { return ctx.getSelectedStatus("APPROVED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, " APPROVED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_Template_button_click_75_listener() { return ctx.getSelectedStatus("RETURNED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, " RETURNED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaveRequestsPageComponent_Template_button_click_79_listener() { return ctx.getSelectedStatus("REJECTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82, " REJECTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "div", 35)(84, "div", 4)(85, "mat-form-field", 36)(86, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](88, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](89, LeaveRequestsPageComponent_mat_error_89_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "div", 35)(91, "form", 34)(92, "mat-form-field", 36)(93, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, "Emp Pf");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](95, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](96, LeaveRequestsPageComponent_mat_error_96_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](97, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "mat-table", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](101, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](102, LeaveRequestsPageComponent_mat_header_cell_102_Template, 2, 4, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](103, LeaveRequestsPageComponent_mat_cell_103_Template, 2, 4, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](104, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](105, LeaveRequestsPageComponent_mat_header_cell_105_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](106, LeaveRequestsPageComponent_mat_cell_106_Template, 2, 1, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](107, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](108, LeaveRequestsPageComponent_mat_header_cell_108_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](109, LeaveRequestsPageComponent_mat_cell_109_Template, 2, 1, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](110, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](111, LeaveRequestsPageComponent_mat_header_cell_111_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](112, LeaveRequestsPageComponent_mat_cell_112_Template, 2, 1, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](113, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](114, LeaveRequestsPageComponent_mat_header_cell_114_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](115, LeaveRequestsPageComponent_mat_cell_115_Template, 2, 1, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](116, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](117, LeaveRequestsPageComponent_mat_header_cell_117_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](118, LeaveRequestsPageComponent_mat_cell_118_Template, 2, 1, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](119, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](120, LeaveRequestsPageComponent_mat_header_cell_120_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](121, LeaveRequestsPageComponent_mat_cell_121_Template, 3, 4, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](122, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](123, LeaveRequestsPageComponent_mat_header_cell_123_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](124, LeaveRequestsPageComponent_mat_cell_124_Template, 3, 4, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](125, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](126, LeaveRequestsPageComponent_mat_header_cell_126_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](127, LeaveRequestsPageComponent_mat_cell_127_Template, 2, 1, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](128, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](129, LeaveRequestsPageComponent_mat_header_cell_129_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](130, LeaveRequestsPageComponent_mat_cell_130_Template, 2, 1, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](131, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](132, LeaveRequestsPageComponent_mat_header_cell_132_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](133, LeaveRequestsPageComponent_mat_cell_133_Template, 2, 1, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](134, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](135, LeaveRequestsPageComponent_mat_header_cell_135_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](136, LeaveRequestsPageComponent_mat_cell_136_Template, 2, 1, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](137, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](138, LeaveRequestsPageComponent_mat_header_cell_138_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](139, LeaveRequestsPageComponent_mat_cell_139_Template, 2, 1, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](140, 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](141, LeaveRequestsPageComponent_mat_header_cell_141_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](142, LeaveRequestsPageComponent_mat_cell_142_Template, 2, 1, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](143, 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](144, LeaveRequestsPageComponent_mat_header_cell_144_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](145, LeaveRequestsPageComponent_mat_cell_145_Template, 7, 5, "mat-cell", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](146, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](147, LeaveRequestsPageComponent_mat_header_cell_147_Template, 2, 0, "mat-header-cell", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](148, LeaveRequestsPageComponent_mat_cell_148_Template, 7, 9, "mat-cell", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](149, LeaveRequestsPageComponent_mat_header_row_149_Template, 1, 0, "mat-header-row", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](150, LeaveRequestsPageComponent_mat_row_150_Template, 1, 2, "mat-row", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](151, LeaveRequestsPageComponent_tr_151_Template, 3, 2, "tr", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](152, LeaveRequestsPageComponent_div_152_Template, 2, 0, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](153, LeaveRequestsPageComponent_div_153_Template, 2, 1, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](154, "mat-paginator", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", "All Leave Requests")("items", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](30, _c0))("active_item", "All Leave Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Form.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedStatus === "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedStatus === "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedStatus === "APPROVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedStatus === "RETURNED");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedStatus === "REJECTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Form.get("year").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Form.get("empPf").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](31, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_8__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_27__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_9__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWF2ZS1yZXF1ZXN0cy1wYWdlLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_erp-hr-self-service_modules_employee-leave_employee-leave_module_ts.js.map
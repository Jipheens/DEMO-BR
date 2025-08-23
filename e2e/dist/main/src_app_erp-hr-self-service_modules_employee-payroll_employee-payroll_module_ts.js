"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-hr-self-service_modules_employee-payroll_employee-payroll_module_ts"],{

/***/ 37178:
/*!*************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-payroll/employee-payroll-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePayrollRoutingModule": () => (/* binding */ EmployeePayrollRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _payroll_details_page_payroll_details_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payroll-details-page/payroll-details-page.component */ 24371);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: "",
        component: _payroll_details_page_payroll_details_page_component__WEBPACK_IMPORTED_MODULE_0__.PayrollDetailsPageComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: {
            clientName: "EmployeePortalModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
];
class EmployeePayrollRoutingModule {
}
EmployeePayrollRoutingModule.ɵfac = function EmployeePayrollRoutingModule_Factory(t) { return new (t || EmployeePayrollRoutingModule)(); };
EmployeePayrollRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmployeePayrollRoutingModule });
EmployeePayrollRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmployeePayrollRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 54069:
/*!*****************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-payroll/employee-payroll.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePayrollModule": () => (/* binding */ EmployeePayrollModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _employee_payroll_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-payroll-routing.module */ 37178);
/* harmony import */ var _payroll_details_page_payroll_details_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payroll-details-page/payroll-details-page.component */ 24371);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 25490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class EmployeePayrollModule {
}
EmployeePayrollModule.ɵfac = function EmployeePayrollModule_Factory(t) { return new (t || EmployeePayrollModule)(); };
EmployeePayrollModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: EmployeePayrollModule });
EmployeePayrollModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _employee_payroll_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeePayrollRoutingModule,
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](EmployeePayrollModule, { declarations: [_payroll_details_page_payroll_details_page_component__WEBPACK_IMPORTED_MODULE_1__.PayrollDetailsPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _employee_payroll_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeePayrollRoutingModule,
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ }),

/***/ 24371:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-payroll/payroll-details-page/payroll-details-page.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollDetailsPageComponent": () => (/* binding */ PayrollDetailsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/ccentre-lookup/ccentre-lookup.component */ 64622);
/* harmony import */ var src_app_erp_hr_modules_leave_management_leave_requests_manage_leave_requests_manage_leave_requests_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-hr/modules/leave-management/leave-requests/manage-leave-requests/manage-leave-requests.component */ 52966);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_payroll_services_payroll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-hr/data/payroll-services/payroll.service */ 13317);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_erp_hr_data_payroll_services_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/erp-hr/data/payroll-services/report.service */ 89430);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dashboard/pages/gen-widgets/gen-widgets.component */ 28368);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);




































function PayrollDetailsPageComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li")(1, "div", 74)(2, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PayrollDetailsPageComponent_li_33_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r52.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} }
function PayrollDetailsPageComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li")(1, "div", 76)(2, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PayrollDetailsPageComponent_li_34_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r54.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} }
function PayrollDetailsPageComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li")(1, "div", 78)(2, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PayrollDetailsPageComponent_li_35_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r56.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} }
function PayrollDetailsPageComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please Enter Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_header_cell_62_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 80)(1, "mat-checkbox", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function PayrollDetailsPageComponent_mat_header_cell_62_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return $event ? ctx_r58.masterToggle() : null; })("change", function PayrollDetailsPageComponent_mat_header_cell_62_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r60.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r7.selection.hasValue() && ctx_r7.isAllSelected())("indeterminate", ctx_r7.selection.hasValue() && !ctx_r7.isAllSelected())("ngClass", "tbl-checkbox");
} }
function PayrollDetailsPageComponent_mat_cell_63_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 80)(1, "mat-checkbox", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PayrollDetailsPageComponent_mat_cell_63_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function PayrollDetailsPageComponent_mat_cell_63_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64); const row_r61 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return $event ? ctx_r63.selection.toggle(row_r61) : null; })("change", function PayrollDetailsPageComponent_mat_cell_63_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r65.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r61 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r8.selection.isSelected(row_r61))("ngClass", "tbl-checkbox")("aria-label", ctx_r8.checkboxLabel(row_r61));
} }
function PayrollDetailsPageComponent_mat_header_cell_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r66.id, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Payroll ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r67.payrollId, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Employee ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r68.employeeId, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate3"](" ", row_r69.firstName, " ", row_r69.middleName, " ", row_r69.lastName, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Employee Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r70.empStartDate, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Working Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r71.workingDays, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Basic Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r72.basicSalary, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Gross Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r73.grossPay, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " NHIF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r74.nhif, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " NSSF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r75.nssfEmployee, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Chargeable Pay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r76.chargeablePay, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Taxable Charge ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r77.taxCharge, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Ins. Relief ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r78.insuranceRelief, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Pers. Relief ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r79.personalRelief, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " PAYE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r80.paye, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Hse Levy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r81.employeeHouseLevy, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Net Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r82.netSalary, " ");
} }
function PayrollDetailsPageComponent_mat_header_cell_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_117_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00A0 ", row_r83.status, " ");
} }
function PayrollDetailsPageComponent_mat_cell_117_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00A0 ", row_r83.status, " ");
} }
function PayrollDetailsPageComponent_mat_cell_117_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00A0 ", row_r83.status, " ");
} }
function PayrollDetailsPageComponent_mat_cell_117_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00A0 ", row_r83.status, " ");
} }
function PayrollDetailsPageComponent_mat_cell_117_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00A0 ", row_r83.status, " ");
} }
function PayrollDetailsPageComponent_mat_cell_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PayrollDetailsPageComponent_mat_cell_117_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](1, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, PayrollDetailsPageComponent_mat_cell_117_button_2_Template, 3, 1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, PayrollDetailsPageComponent_mat_cell_117_button_3_Template, 3, 1, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PayrollDetailsPageComponent_mat_cell_117_button_4_Template, 3, 1, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, PayrollDetailsPageComponent_mat_cell_117_button_5_Template, 3, 1, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, PayrollDetailsPageComponent_mat_cell_117_button_6_Template, 3, 1, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitch", row_r83.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function PayrollDetailsPageComponent_mat_header_cell_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_mat_cell_120_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 103)(1, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PayrollDetailsPageComponent_mat_cell_120_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function PayrollDetailsPageComponent_mat_cell_120_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r100); const row_r96 = restoredCtx.$implicit; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r99.getPayslip(row_r96.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-feather-icons", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-download-pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "download");
} }
function PayrollDetailsPageComponent_mat_header_row_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-header-row");
} }
function PayrollDetailsPageComponent_mat_row_122_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-row", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PayrollDetailsPageComponent_mat_row_122_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r103); const row_r101 = restoredCtx.$implicit; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r102.viewRecord(row_r101); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("cursor", "pointer");
} }
function PayrollDetailsPageComponent_tr_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("colspan", ctx_r49.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r49.input, "\"");
} }
function PayrollDetailsPageComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-bar", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PayrollDetailsPageComponent_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-spinner", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Payroll Details"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class PayrollDetailsPageComponent {
    constructor(dialog, notificationAPI, payrollService, snackbar, fb, tokenStorageService, reportAPI) {
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.payrollService = payrollService;
        this.snackbar = snackbar;
        this.fb = fb;
        this.tokenStorageService = tokenStorageService;
        this.reportAPI = reportAPI;
        this.displayedColumns = [
            // "select",
            // "id",
            'payrollId',
            //'employeeId',
            'name',
            'empStartDate',
            'workingDays',
            'basicSalary',
            'grossSalary',
            'nhif',
            'nssf',
            'chargeablePay',
            'taxableCharge',
            'insuranceRelief',
            'personalRelief',
            'paye',
            'housingLevy',
            'netSalary',
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
        this.currentUserPf = this.tokenStorageService.getEmppf();
        this.Form = this.fb.group({
            year: [currentYear.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            status: ["ALL"],
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
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selectedStatus = this.Form.value.status;
        let params = {
            periody: this.Form.value.year,
            empPF: this.currentUserPf,
        };
        this.payrollService
            .getPayslipPerEmpPF(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    console.log("Leave Requests displayed on table", this.data);
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
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: action,
            record: record,
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
            text: "HOLIDAY RECORD WILL BE DELETED PERMANENTLY!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            // if (result.isConfirmed) {
            //   this.loading = true;
            //   this.payrollService
            //     .delete(id)
            //     .pipe(takeUntil(this.destroy$))
            //     .subscribe({
            //       next: (res) => {
            //         if (res.statusCode == 200) {
            //           this.getData();
            //           this.loading = false;
            //           this.notificationAPI.alertSuccess(
            //             "HOLIDAY RECORD DELETED SUCCESSFULLY"
            //           );
            //         } else {
            //           this.getData();
            //           this.loading = false;
            //           this.notificationAPI.alertWarning(res.message);
            //         }
            //       },
            //       error: (err) => {
            //         this.loading = false;
            //         this.notificationAPI.alertSuccess("Server Error: " + err.message);
            //       },
            //       complete: () => {},
            //     });
            // }
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
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogConfig();
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
        if (this.hasAccess) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
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
                    // this.payrollService
                    //   .validateBulkLeaveRequests(processedRows)
                    //   .pipe(takeUntil(this.destroy$))
                    //   .subscribe({
                    //     next: (res) => {
                    //       console.log("res: ", res);
                    //       if (res.statusCode == 201 || 200 || 302) {
                    //         this.snackbar.showNotification(
                    //           "snackbar-success",
                    //           res.message
                    //         );
                    //         this.selection = new SelectionModel<any>(true, []);
                    //         this.selection.clear();
                    //       } else {
                    //         this.snackbar.showNotification(
                    //           "snackbar-danger",
                    //           res.message
                    //         );
                    //       }
                    //     },
                    //     error: (err) => {
                    //       this.snackbar.showNotification("snackbar-danger", err.message);
                    //     },
                    //     complete: () => {
                    //       this.getData();
                    //     },
                    //   }),
                    //   Subscription;
                }
                else {
                    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__.SelectionModel(true, []);
                    this.selection.clear();
                }
            });
        }
    }
    //*************************************************************************************************************** */
    downloadP9() {
        this.loading = true;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpParams()
            .set("period_y", this.Form.value.year)
            .set("empPF", this.tokenStorageService.getUser().empPfNo);
        this.reportAPI.generateEmployeeP9form(params).subscribe((res) => {
            this.loading = false;
            if (res.statusCode == 404) {
                this.notificationAPI.alertWarning(res.message);
            }
            else {
                this.notificationAPI.alertSuccess("Downloading Employee P9-FORM");
                let url = window.URL.createObjectURL(res.data);
                let a = document.createElement("a");
                document.body.appendChild(a);
                a.setAttribute("style", "display: none");
                a.setAttribute("target", "blank");
                a.href = url;
                a.download = res.filename;
                a.click();
                window.URL.revokeObjectURL(url);
                a.remove();
            }
        }, (err) => {
            this.loading = false;
            this.notificationAPI.alertWarning(err.message);
        });
    }
    getPayslip(id) {
        this.loading = true;
        this.reportAPI.payslip(id).subscribe({
            next: (value) => {
                this.loading = false;
                this.notificationAPI.alertSuccess("Downloading Payslip Report");
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
                this.loading = false;
                this.notificationAPI.alertWarning("NO PAYSLIP REPORT FOUND");
            },
            complete: () => { },
        });
    }
}
PayrollDetailsPageComponent.ɵfac = function PayrollDetailsPageComponent_Factory(t) { return new (t || PayrollDetailsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_3__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_hr_data_payroll_services_payroll_service__WEBPACK_IMPORTED_MODULE_4__.PayrollService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_hr_data_payroll_services_report_service__WEBPACK_IMPORTED_MODULE_7__.ReportService)); };
PayrollDetailsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: PayrollDetailsPageComponent, selectors: [["app-payroll-details-page"]], viewQuery: function PayrollDetailsPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 127, vars: 17, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-6"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "DOWNLOAD P9", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [4, "ngIf"], [1, "col-2"], [3, "formGroup"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "year"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "payrollId"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "employeeId"], ["matColumnDef", "name"], ["matColumnDef", "empStartDate"], ["matColumnDef", "workingDays"], ["matColumnDef", "basicSalary"], ["matColumnDef", "grossSalary"], ["matColumnDef", "nhif"], ["matColumnDef", "nssf"], ["matColumnDef", "chargeablePay"], ["matColumnDef", "taxableCharge"], ["matColumnDef", "insuranceRelief"], ["matColumnDef", "personalRelief"], ["matColumnDef", "paye"], ["matColumnDef", "housingLevy"], ["matColumnDef", "netSalary"], ["matColumnDef", "status"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["matTooltip", "DOWNLOAD PAYSLIP", "mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matRipple", "", 3, "click"], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function PayrollDetailsPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Payroll Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function PayrollDetailsPageComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PayrollDetailsPageComponent_Template_button_click_25_listener() { return ctx.downloadP9(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "li")(29, "div", 21)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PayrollDetailsPageComponent_Template_button_click_30_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, PayrollDetailsPageComponent_li_33_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, PayrollDetailsPageComponent_li_34_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, PayrollDetailsPageComponent_li_35_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 23)(37, "form", 24)(38, "div", 4)(39, "mat-form-field", 25)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](42, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, PayrollDetailsPageComponent_mat_error_43_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 27)(45, "ul", 28)(46, "li")(47, "div", 29)(48, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PayrollDetailsPageComponent_Template_img_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r104); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](60); return _r6.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "li")(50, "div", 31)(51, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PayrollDetailsPageComponent_Template_img_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r104); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](60); return _r6.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "li")(53, "div", 33)(54, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PayrollDetailsPageComponent_Template_img_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r104); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](60); return _r6.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "li")(56, "div", 35)(57, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PayrollDetailsPageComponent_Template_img_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r104); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](60); return _r6.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "mat-table", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](61, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](62, PayrollDetailsPageComponent_mat_header_cell_62_Template, 2, 4, "mat-header-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](63, PayrollDetailsPageComponent_mat_cell_63_Template, 2, 4, "mat-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](64, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, PayrollDetailsPageComponent_mat_header_cell_65_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, PayrollDetailsPageComponent_mat_cell_66_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](67, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](68, PayrollDetailsPageComponent_mat_header_cell_68_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](69, PayrollDetailsPageComponent_mat_cell_69_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](70, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](71, PayrollDetailsPageComponent_mat_header_cell_71_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](72, PayrollDetailsPageComponent_mat_cell_72_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](73, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](74, PayrollDetailsPageComponent_mat_header_cell_74_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](75, PayrollDetailsPageComponent_mat_cell_75_Template, 2, 3, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](76, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](77, PayrollDetailsPageComponent_mat_header_cell_77_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, PayrollDetailsPageComponent_mat_cell_78_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](79, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](80, PayrollDetailsPageComponent_mat_header_cell_80_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](81, PayrollDetailsPageComponent_mat_cell_81_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](82, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](83, PayrollDetailsPageComponent_mat_header_cell_83_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](84, PayrollDetailsPageComponent_mat_cell_84_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](85, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](86, PayrollDetailsPageComponent_mat_header_cell_86_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](87, PayrollDetailsPageComponent_mat_cell_87_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](88, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](89, PayrollDetailsPageComponent_mat_header_cell_89_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](90, PayrollDetailsPageComponent_mat_cell_90_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](91, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](92, PayrollDetailsPageComponent_mat_header_cell_92_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](93, PayrollDetailsPageComponent_mat_cell_93_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](94, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](95, PayrollDetailsPageComponent_mat_header_cell_95_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](96, PayrollDetailsPageComponent_mat_cell_96_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](97, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](98, PayrollDetailsPageComponent_mat_header_cell_98_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](99, PayrollDetailsPageComponent_mat_cell_99_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](100, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](101, PayrollDetailsPageComponent_mat_header_cell_101_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](102, PayrollDetailsPageComponent_mat_cell_102_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](103, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](104, PayrollDetailsPageComponent_mat_header_cell_104_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](105, PayrollDetailsPageComponent_mat_cell_105_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](106, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](107, PayrollDetailsPageComponent_mat_header_cell_107_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](108, PayrollDetailsPageComponent_mat_cell_108_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](109, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](110, PayrollDetailsPageComponent_mat_header_cell_110_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](111, PayrollDetailsPageComponent_mat_cell_111_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](112, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](113, PayrollDetailsPageComponent_mat_header_cell_113_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](114, PayrollDetailsPageComponent_mat_cell_114_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](115, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](116, PayrollDetailsPageComponent_mat_header_cell_116_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](117, PayrollDetailsPageComponent_mat_cell_117_Template, 7, 5, "mat-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](118, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](119, PayrollDetailsPageComponent_mat_header_cell_119_Template, 2, 0, "mat-header-cell", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, PayrollDetailsPageComponent_mat_cell_120_Template, 3, 3, "mat-cell", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](121, PayrollDetailsPageComponent_mat_header_row_121_Template, 1, 0, "mat-header-row", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](122, PayrollDetailsPageComponent_mat_row_122_Template, 1, 2, "mat-row", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](123, PayrollDetailsPageComponent_tr_123_Template, 3, 2, "tr", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](124, PayrollDetailsPageComponent_div_124_Template, 2, 0, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](125, PayrollDetailsPageComponent_div_125_Template, 2, 1, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](126, "mat-paginator", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Payroll Details")("items", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](15, _c0))("active_item", "Payroll Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.Form.get("year").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](16, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_9__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_27__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_10__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlyb2xsLWRldGFpbHMtcGFnZS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_erp-hr-self-service_modules_employee-payroll_employee-payroll_module_ts.js.map
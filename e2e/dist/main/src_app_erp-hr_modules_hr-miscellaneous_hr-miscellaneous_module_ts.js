"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-hr_modules_hr-miscellaneous_hr-miscellaneous_module_ts"],{

/***/ 81675:
/*!****************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/hr-miscellaneous/bulk-uploads/bulk-uploads.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BulkUploadsComponent": () => (/* binding */ BulkUploadsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_configuration_services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/data/configuration-services/branch.service */ 7902);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_erp_hr_data_payroll_services_staff_loan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-hr/data/payroll-services/staff-loan.service */ 3545);
/* harmony import */ var src_app_erp_hr_data_payroll_services_salaryincrement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-hr/data/payroll-services/salaryincrement.service */ 74560);
/* harmony import */ var src_app_erp_hr_data_payroll_services_custom_deduction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/erp-hr/data/payroll-services/custom-deduction.service */ 19429);
/* harmony import */ var src_app_erp_hr_data_payroll_services_custom_allowance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/erp-hr/data/payroll-services/custom-allowance.service */ 78121);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dashboard/pages/gen-widgets/gen-widgets.component */ 44912);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/file-upload/file-upload.component */ 67082);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);

































function BulkUploadsComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const uploadType_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", uploadType_r60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", uploadType_r60, " ");
} }
function BulkUploadsComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please select Upload Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_header_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Employee PF No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r61.employeePfNo, " ");
} }
function BulkUploadsComponent_mat_header_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Allowance Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r62.allowanceType, " ");
} }
function BulkUploadsComponent_mat_header_cell_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r63.amount, " ");
} }
function BulkUploadsComponent_mat_header_cell_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r64.description, " ");
} }
function BulkUploadsComponent_mat_header_cell_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Is Taxable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r65.isTaxable, " ");
} }
function BulkUploadsComponent_mat_header_cell_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Period M ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r66.periodM, " ");
} }
function BulkUploadsComponent_mat_header_cell_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Period Y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r67.periodY, " ");
} }
function BulkUploadsComponent_mat_header_cell_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r68.status, " ");
} }
function BulkUploadsComponent_mat_header_cell_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Employee PF No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r69.employeePfNo, " ");
} }
function BulkUploadsComponent_mat_header_cell_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r70.amount, " ");
} }
function BulkUploadsComponent_mat_header_cell_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r71.description, " ");
} }
function BulkUploadsComponent_mat_header_cell_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Period M ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r72.periodM, " ");
} }
function BulkUploadsComponent_mat_header_cell_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Period Y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r73.periodY, " ");
} }
function BulkUploadsComponent_mat_header_cell_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Deduction Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r74.deductionType, " ");
} }
function BulkUploadsComponent_mat_header_cell_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Deduction Before Tax ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r75.deductionBeforeTax, " ");
} }
function BulkUploadsComponent_mat_header_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Employee PF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r76.empPf, " ");
} }
function BulkUploadsComponent_mat_header_cell_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " New Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r77.newSalary, " ");
} }
function BulkUploadsComponent_mat_header_cell_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r78.status, " ");
} }
function BulkUploadsComponent_mat_header_cell_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Employee PF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r79.empPf, " ");
} }
function BulkUploadsComponent_mat_header_cell_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Loan Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r80.loanAmount, " ");
} }
function BulkUploadsComponent_mat_header_cell_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Interest Rate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r81.interestRate, " ");
} }
function BulkUploadsComponent_mat_header_cell_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Loan Account Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r82.loanAccountNumber, " ");
} }
function BulkUploadsComponent_mat_header_cell_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " From Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r83.fromDate, " ");
} }
function BulkUploadsComponent_mat_header_cell_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " To Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r84.toDate, " ");
} }
function BulkUploadsComponent_mat_header_cell_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_mat_cell_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r85.description, " ");
} }
function BulkUploadsComponent_mat_header_row_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-header-row");
} }
function BulkUploadsComponent_mat_row_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-row", 75);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("cursor", "pointer");
} }
function BulkUploadsComponent_tr_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("colspan", ctx_r57.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r57.input, "\"");
} }
function BulkUploadsComponent_div_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-bar", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BulkUploadsComponent_div_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-spinner", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Uploads"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class BulkUploadsComponent {
    constructor(dialog, notificationAPI, branchAPI, snackbar, fb, http, staffLoanService, salaryIncrementService, customDeductionAPI, customAllowanceAPI) {
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.branchAPI = branchAPI;
        this.snackbar = snackbar;
        this.fb = fb;
        this.http = http;
        this.staffLoanService = staffLoanService;
        this.salaryIncrementService = salaryIncrementService;
        this.customDeductionAPI = customDeductionAPI;
        this.customAllowanceAPI = customAllowanceAPI;
        this.displayedColumns = [
            "employeePfNo",
            "allowanceType",
            "amount",
            "description",
            "isTaxable",
            "periodM",
            "periodY",
            "status",
        ];
        this.loading = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__.SelectionModel(true, []);
        this.downloadLoading = false;
        this.posting = false;
        this.showForm = false;
        // ****************************************************************************************************************************
        this.uploadTypes = [
            "Employees Upload",
            "Allowance Upload",
            "Deductions Upload",
            "Salary Increment Upload",
            "Staff Loans Upload",
        ];
    }
    ngOnInit() {
        this.Form = this.fb.group({
            uploadType: ["Allowance Upload"],
        });
        this.Form.valueChanges.subscribe(() => {
            this.resetDisplayColumns();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    resetDisplayColumns() {
        var _a;
        const selectedUploadType = (_a = this.Form.get("uploadType")) === null || _a === void 0 ? void 0 : _a.value;
        switch (selectedUploadType) {
            case "Employees Upload":
                this.displayedColumns = [];
                break;
            case "Allowance Upload":
                this.displayedColumns = [
                    "employeePfNo",
                    "allowanceType",
                    "amount",
                    "description",
                    "isTaxable",
                    "periodM",
                    "periodY",
                    "status",
                ];
                break;
            case "Deductions Upload":
                this.displayedColumns = [
                    "employeePfNo",
                    "amount",
                    "description",
                    "periodM",
                    "periodY",
                    "deductionType",
                    "deductionBeforeTax",
                ];
                break;
            case "Salary Increment Upload":
                this.displayedColumns = ["empPf", "newSalary", "status"];
                break;
            case "Staff Loans Upload":
                this.displayedColumns = [
                    "empPf",
                    "loanAmount",
                    "interestRate",
                    "loanAccountNumber",
                    "fromDate",
                    "toDate",
                    "description",
                ];
                break;
            // default:
            //   this.displayedColumns = []
        }
    }
    //****************************************************************************************** */
    refresh() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.input = filterValue;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    // ****************************************************************************************************************************
    handleFileInput(event) { }
    downloadTemplate() {
        var _a;
        const selectedUploadType = (_a = this.Form.get("uploadType")) === null || _a === void 0 ? void 0 : _a.value;
        switch (selectedUploadType) {
            case "Employees Upload":
                this.downloadEmployeeCreationTemplate();
                break;
            case "Allowance Upload":
                this.downloadAllowanceTemplate();
                break;
            case "Deductions Upload":
                this.downloadDeductionsTemplate();
                break;
            case "Salary Increment Upload":
                this.downloadSalaryIncrementTemplate();
                break;
            case "Staff Loans Upload":
                this.downloadStaffLoansTemplate();
                break;
            default:
                console.error("Unknown upload type:", selectedUploadType);
        }
    }
    downloadEmployeeCreationTemplate() {
        this.downloadFile("../../../../../../assets/excel_templates/EmployeeCreationTemplate.xlsx", "EmployeeCreationTemplate.xlsx");
    }
    downloadAllowanceTemplate() {
        this.downloadFile("../../../../../../assets/excel_templates/Allowances_custom_upload_file.xlsx", "Allowances_custom_upload_file.xlsx");
    }
    downloadDeductionsTemplate() {
        this.downloadFile("../../../../../../assets/excel_templates/Deductions_custom_upload_file.xlsx", "Deductions_custom_upload_file" + new Date().toISOString() + ".xlsx");
    }
    downloadSalaryIncrementTemplate() {
        this.downloadFile("../../../../../../assets/excel_templates/Salary_review_upload_file.xlsx", "Salary_review_upload_file.xlsx");
    }
    downloadStaffLoansTemplate() {
        this.downloadFile("../../../../../../assets/excel_templates/Staff_loans_upload_file.xlsx", "Staff_loans_upload_file.xlsx");
    }
    downloadFile(templateUrl, filename) {
        const a = document.createElement("a");
        a.href = templateUrl;
        a.download = filename;
        a.click();
    }
    onFileSelected(event) {
        this.loading = true;
        this.selectedFile = event.target.files[0];
        let URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/upload/extract/excel`;
        if (this.selectedFile) {
            const formData = new FormData();
            formData.append("file", this.selectedFile);
            this.http.post(URL, formData).subscribe((response) => {
                this.loading = false;
                this.results = response;
                this.dataRes = [];
                for (let i = 0; i < this.results.length; i++) {
                    this.dataRes.push(this.results[i]);
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(this.results);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }, (error) => {
                this.loading = false;
            });
        }
    }
    //*************************************************************************************************************************** */
    submit() {
        var _a;
        if (this.dataSource && this.dataSource.data.length > 0) {
            this.loading = true;
            const selectedUploadType = (_a = this.Form.get("uploadType")) === null || _a === void 0 ? void 0 : _a.value;
            switch (selectedUploadType) {
                case "Employees Upload":
                    this.downloadEmployeeCreationTemplate();
                    break;
                case "Allowance Upload":
                    this.customAllowanceAPI
                        .createMultile(this.dataSource.data)
                        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
                        .subscribe({
                        next: (res) => {
                            if (res.statusCode === 302) {
                                this.loading = false;
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
                    break;
                case "Deductions Upload":
                    this.customDeductionAPI
                        .createBulk(this.dataSource.data)
                        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
                        .subscribe({
                        next: (res) => {
                            if (res.statusCode === 302) {
                                this.loading = false;
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
                    break;
                case "Salary Increment Upload":
                    this.salaryIncrementService
                        .create(this.dataSource.data)
                        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
                        .subscribe({
                        next: (res) => {
                            if (res.statusCode === 302) {
                                this.loading = false;
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
                    break;
                case "Staff Loans Upload":
                    this.staffLoanService
                        .createBulk(this.dataSource.data)
                        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
                        .subscribe({
                        next: (res) => {
                            if (res.statusCode === 302) {
                                this.loading = false;
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
                    break;
                default:
                    console.error("Unknown upload type:", selectedUploadType);
            }
        }
        else {
            this.notificationAPI.alertWarning("No data found for upload!!");
        }
    }
}
BulkUploadsComponent.ɵfac = function BulkUploadsComponent_Factory(t) { return new (t || BulkUploadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_1__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_hr_data_configuration_services_branch_service__WEBPACK_IMPORTED_MODULE_2__.BranchService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_hr_data_payroll_services_staff_loan_service__WEBPACK_IMPORTED_MODULE_4__.StaffLoanService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_hr_data_payroll_services_salaryincrement_service__WEBPACK_IMPORTED_MODULE_5__.SalaryIncrementService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_hr_data_payroll_services_custom_deduction_service__WEBPACK_IMPORTED_MODULE_6__.CustomDeductionService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_hr_data_payroll_services_custom_allowance_service__WEBPACK_IMPORTED_MODULE_7__.CustomAllowanceService)); };
BulkUploadsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: BulkUploadsComponent, selectors: [["app-bulk-uploads"]], viewQuery: function BulkUploadsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 146, vars: 15, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-6"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], [1, "col-2"], [3, "formGroup"], ["appearance", "fill", 1, "example-full-width"], ["formControlName", "uploadType"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "row", "align-items-center", "mx-4", "mt-2"], [1, "col-xl-10", "col-lg-10", "col-md-8", "col-sm-6"], [3, "change"], [1, "col-xl-1", "col-lg-1", "col-md-4", "col-sm-6"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fa", "fa-download"], ["mat-raised-button", "", "color", "primary", 1, "mx-2", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "employeePfNo"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "allowanceType"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "amount"], ["matColumnDef", "description"], ["matColumnDef", "isTaxable"], ["matColumnDef", "periodM"], ["matColumnDef", "periodY"], ["matColumnDef", "status"], ["matColumnDef", "deductionType"], ["matColumnDef", "deductionBeforeTax"], ["matColumnDef", "empPf"], ["matColumnDef", "newSalary"], ["matColumnDef", "loanAmount"], ["matColumnDef", "interestRate"], ["matColumnDef", "loanAccountNumber"], ["matColumnDef", "fromDate"], ["matColumnDef", "toDate"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [3, "value"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], ["matRipple", ""], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function BulkUploadsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Bulk Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function BulkUploadsComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 18)(24, "form", 19)(25, "mat-form-field", 20)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Upload Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, BulkUploadsComponent_mat_option_29_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, BulkUploadsComponent_mat_error_30_Template, 2, 0, "mat-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 24)(32, "ul", 25)(33, "li")(34, "div", 26)(35, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BulkUploadsComponent_Template_img_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r87); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](60); return _r4.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "li")(37, "div", 28)(38, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BulkUploadsComponent_Template_img_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r87); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](60); return _r4.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "li")(40, "div", 30)(41, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BulkUploadsComponent_Template_img_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r87); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](60); return _r4.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "li")(43, "div", 32)(44, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BulkUploadsComponent_Template_img_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r87); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](60); return _r4.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div", 34)(46, "div", 35)(47, "app-file-upload", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function BulkUploadsComponent_Template_app_file_upload_change_47_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 37)(49, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BulkUploadsComponent_Template_button_click_49_listener() { return ctx.downloadTemplate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](50, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, " Download Template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 37)(53, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BulkUploadsComponent_Template_button_click_53_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56, " Submit Records ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](57, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "mat-table", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](61)(62, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](63, BulkUploadsComponent_mat_header_cell_63_Template, 2, 0, "mat-header-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](64, BulkUploadsComponent_mat_cell_64_Template, 2, 1, "mat-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](65, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, BulkUploadsComponent_mat_header_cell_66_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](67, BulkUploadsComponent_mat_cell_67_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](68, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](69, BulkUploadsComponent_mat_header_cell_69_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](70, BulkUploadsComponent_mat_cell_70_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](71, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](72, BulkUploadsComponent_mat_header_cell_72_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](73, BulkUploadsComponent_mat_cell_73_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](74, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](75, BulkUploadsComponent_mat_header_cell_75_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](76, BulkUploadsComponent_mat_cell_76_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](77, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, BulkUploadsComponent_mat_header_cell_78_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](79, BulkUploadsComponent_mat_cell_79_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](80, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](81, BulkUploadsComponent_mat_header_cell_81_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](82, BulkUploadsComponent_mat_cell_82_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](83, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](84, BulkUploadsComponent_mat_header_cell_84_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](85, BulkUploadsComponent_mat_cell_85_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](86)(87, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](88, BulkUploadsComponent_mat_header_cell_88_Template, 2, 0, "mat-header-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](89, BulkUploadsComponent_mat_cell_89_Template, 2, 1, "mat-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](90, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](91, BulkUploadsComponent_mat_header_cell_91_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](92, BulkUploadsComponent_mat_cell_92_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](93, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](94, BulkUploadsComponent_mat_header_cell_94_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](95, BulkUploadsComponent_mat_cell_95_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](96, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](97, BulkUploadsComponent_mat_header_cell_97_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](98, BulkUploadsComponent_mat_cell_98_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](99, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](100, BulkUploadsComponent_mat_header_cell_100_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](101, BulkUploadsComponent_mat_cell_101_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](102, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](103, BulkUploadsComponent_mat_header_cell_103_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](104, BulkUploadsComponent_mat_cell_104_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](105, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](106, BulkUploadsComponent_mat_header_cell_106_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](107, BulkUploadsComponent_mat_cell_107_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](108)(109, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](110, BulkUploadsComponent_mat_header_cell_110_Template, 2, 0, "mat-header-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](111, BulkUploadsComponent_mat_cell_111_Template, 2, 1, "mat-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](112, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](113, BulkUploadsComponent_mat_header_cell_113_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](114, BulkUploadsComponent_mat_cell_114_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](115, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](116, BulkUploadsComponent_mat_header_cell_116_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](117, BulkUploadsComponent_mat_cell_117_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](118)(119, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, BulkUploadsComponent_mat_header_cell_120_Template, 2, 0, "mat-header-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](121, BulkUploadsComponent_mat_cell_121_Template, 2, 1, "mat-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](122, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](123, BulkUploadsComponent_mat_header_cell_123_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](124, BulkUploadsComponent_mat_cell_124_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](125, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](126, BulkUploadsComponent_mat_header_cell_126_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](127, BulkUploadsComponent_mat_cell_127_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](128, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](129, BulkUploadsComponent_mat_header_cell_129_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](130, BulkUploadsComponent_mat_cell_130_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](131, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](132, BulkUploadsComponent_mat_header_cell_132_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](133, BulkUploadsComponent_mat_cell_133_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](134, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](135, BulkUploadsComponent_mat_header_cell_135_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](136, BulkUploadsComponent_mat_cell_136_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](137, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](138, BulkUploadsComponent_mat_header_cell_138_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](139, BulkUploadsComponent_mat_cell_139_Template, 2, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](140, BulkUploadsComponent_mat_header_row_140_Template, 1, 0, "mat-header-row", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](141, BulkUploadsComponent_mat_row_141_Template, 1, 2, "mat-row", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](142, BulkUploadsComponent_tr_142_Template, 3, 2, "tr", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](143, BulkUploadsComponent_div_143_Template, 2, 0, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](144, BulkUploadsComponent_div_144_Template, 2, 1, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](145, "mat-paginator", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Bulk Uploads")("items", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](13, _c0))("active_item", "Bulk Uploads");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.uploadTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.Form.get("uploadType").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](14, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_9__.GenWidgetsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatError, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltip, _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_10__.FileUploadComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_28__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWxrLXVwbG9hZHMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 19980:
/*!************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/hr-miscellaneous/hr-miscellaneous-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HrMiscellaneousRoutingModule": () => (/* binding */ HrMiscellaneousRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _bulk_uploads_bulk_uploads_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bulk-uploads/bulk-uploads.component */ 81675);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: "bulk-uploads",
        component: _bulk_uploads_bulk_uploads_component__WEBPACK_IMPORTED_MODULE_0__.BulkUploadsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: {
            clientName: "HumanResourceModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
];
class HrMiscellaneousRoutingModule {
}
HrMiscellaneousRoutingModule.ɵfac = function HrMiscellaneousRoutingModule_Factory(t) { return new (t || HrMiscellaneousRoutingModule)(); };
HrMiscellaneousRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HrMiscellaneousRoutingModule });
HrMiscellaneousRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HrMiscellaneousRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 77035:
/*!****************************************************************************!*\
  !*** ./src/app/erp-hr/modules/hr-miscellaneous/hr-miscellaneous.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HrMiscellaneousModule": () => (/* binding */ HrMiscellaneousModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _hr_miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hr-miscellaneous-routing.module */ 19980);
/* harmony import */ var _bulk_uploads_bulk_uploads_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bulk-uploads/bulk-uploads.component */ 81675);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 27970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class HrMiscellaneousModule {
}
HrMiscellaneousModule.ɵfac = function HrMiscellaneousModule_Factory(t) { return new (t || HrMiscellaneousModule)(); };
HrMiscellaneousModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: HrMiscellaneousModule });
HrMiscellaneousModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _hr_miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_0__.HrMiscellaneousRoutingModule,
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HrMiscellaneousModule, { declarations: [_bulk_uploads_bulk_uploads_component__WEBPACK_IMPORTED_MODULE_1__.BulkUploadsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _hr_miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_0__.HrMiscellaneousRoutingModule,
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_erp-hr_modules_hr-miscellaneous_hr-miscellaneous_module_ts.js.map
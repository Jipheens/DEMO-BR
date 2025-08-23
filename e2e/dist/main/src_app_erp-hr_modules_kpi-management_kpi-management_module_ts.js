"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-hr_modules_kpi-management_kpi-management_module_ts"],{

/***/ 5257:
/*!**************************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/kpi-management/kpi-goals/all-kpi-goals/all-kpi-goals.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllKpiGoalsComponent": () => (/* binding */ AllKpiGoalsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/ccentre-lookup/ccentre-lookup.component */ 64622);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_kpi_services_kpi_goal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-hr/data/kpi-services/kpi-goal.service */ 88067);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 44912);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);




































function AllKpiGoalsComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 72)(2, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllKpiGoalsComponent_li_28_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r31.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function AllKpiGoalsComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 74)(2, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllKpiGoalsComponent_li_29_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r33.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function AllKpiGoalsComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 76)(2, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllKpiGoalsComponent_li_30_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r35.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function AllKpiGoalsComponent_mat_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quarter_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", quarter_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", quarter_r37, " ");
} }
function AllKpiGoalsComponent_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please select quarter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllKpiGoalsComponent_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please Enter Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllKpiGoalsComponent_mat_error_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please Enter Cost Center Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllKpiGoalsComponent_mat_header_cell_86_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 79)(1, "mat-checkbox", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllKpiGoalsComponent_mat_header_cell_86_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return $event ? ctx_r38.masterToggle() : null; })("change", function AllKpiGoalsComponent_mat_header_cell_86_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r40.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r10.selection.hasValue() && ctx_r10.isAllSelected())("indeterminate", ctx_r10.selection.hasValue() && !ctx_r10.isAllSelected())("ngClass", "tbl-checkbox");
} }
function AllKpiGoalsComponent_mat_cell_87_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 79)(1, "mat-checkbox", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllKpiGoalsComponent_mat_cell_87_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function AllKpiGoalsComponent_mat_cell_87_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44); const row_r41 = restoredCtx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return $event ? ctx_r43.selection.toggle(row_r41) : null; })("change", function AllKpiGoalsComponent_mat_cell_87_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r45.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r41 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r11.selection.isSelected(row_r41))("ngClass", "tbl-checkbox")("aria-label", ctx_r11.checkboxLabel(row_r41));
} }
function AllKpiGoalsComponent_mat_header_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllKpiGoalsComponent_mat_cell_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r46.id, " ");
} }
function AllKpiGoalsComponent_mat_header_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Employee PF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllKpiGoalsComponent_mat_cell_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r47.empPf, " ");
} }
function AllKpiGoalsComponent_mat_header_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllKpiGoalsComponent_mat_cell_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r48.fullname, " ");
} }
function AllKpiGoalsComponent_mat_header_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Employee PF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllKpiGoalsComponent_mat_cell_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r49.emppf, " ");
} }
function AllKpiGoalsComponent_mat_header_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllKpiGoalsComponent_mat_cell_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r50.department, " ");
} }
function AllKpiGoalsComponent_mat_header_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllKpiGoalsComponent_mat_cell_105_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r51.status, " ");
} }
function AllKpiGoalsComponent_mat_cell_105_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r51.status, " ");
} }
function AllKpiGoalsComponent_mat_cell_105_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r51.status, " ");
} }
function AllKpiGoalsComponent_mat_cell_105_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r51.status, " ");
} }
function AllKpiGoalsComponent_mat_cell_105_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r51.status, " ");
} }
function AllKpiGoalsComponent_mat_cell_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllKpiGoalsComponent_mat_cell_105_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](1, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AllKpiGoalsComponent_mat_cell_105_button_2_Template, 3, 1, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, AllKpiGoalsComponent_mat_cell_105_button_3_Template, 3, 1, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, AllKpiGoalsComponent_mat_cell_105_button_4_Template, 3, 1, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, AllKpiGoalsComponent_mat_cell_105_button_5_Template, 3, 1, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, AllKpiGoalsComponent_mat_cell_105_button_6_Template, 3, 1, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitch", row_r51.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function AllKpiGoalsComponent_mat_header_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllKpiGoalsComponent_mat_cell_108_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 104)(1, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllKpiGoalsComponent_mat_cell_108_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllKpiGoalsComponent_mat_cell_108_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r68); const row_r64 = restoredCtx.$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r67.mngRecord("View", row_r64); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-feather-icons", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", "eye");
} }
function AllKpiGoalsComponent_mat_header_row_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-header-row");
} }
function AllKpiGoalsComponent_mat_row_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-row", 107);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllKpiGoalsComponent_tr_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("colspan", ctx_r28.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r28.input, "\"");
} }
function AllKpiGoalsComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-bar", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllKpiGoalsComponent_div_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-spinner", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["KPI Goals"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class AllKpiGoalsComponent {
    constructor(dialog, notificationAPI, kpiGoalService, snackbar, fb, router, tokenStorageService) {
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.kpiGoalService = kpiGoalService;
        this.snackbar = snackbar;
        this.fb = fb;
        this.router = router;
        this.tokenStorageService = tokenStorageService;
        this.displayedColumns = [
            //"select",
            // "id",
            "fullname",
            "emppf",
            "department",
            // "status",
            "action",
        ];
        this.loading = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__.SelectionModel(true, []);
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
        this.quarterArray = ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];
        this.selectedStatus = "ALL";
    }
    ngOnInit() {
        const currentYear = new Date().getFullYear();
        const currentMonthIndex = new Date().getMonth();
        const currentMonthName = this.months[currentMonthIndex];
        this.currentUser = this.tokenStorageService.getUser();
        this.Form = this.fb.group({
            costCenterCode: [this.currentUser.costCenterCode, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            year: [currentYear.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            quarter: ["Quarter 1"],
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
        // this.getData();
    }
    getSelectedStatus(status) {
        this.Form.patchValue({
            status: status,
        });
        //  this.getData();
    }
    getData() {
        this.loading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selectedStatus = this.Form.value.status;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams()
            .set("costcentercode", this.Form.value.costCenterCode)
            .set("year", this.Form.value.year)
            .set("quarter", this.Form.value.quarter);
        console.log("this.params:: ", params);
        this.kpiGoalService
            .getKPIEmployeesByCostCenter(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    console.log("KPI Goals displayed on table", this.data);
                    this.loading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(this.data);
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
        let route = "/erp-hr/kpi-management/manage-kpi-goals";
        this.router.navigate([route], {
            queryParams: {
                action: action,
                empPf: record.emppf,
                quarter: this.Form.value.quarter,
                year: this.Form.value.year,
                costCenterCode: this.Form.value.costCenterCode,
            },
        });
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
}
AllKpiGoalsComponent.ɵfac = function AllKpiGoalsComponent_Factory(t) { return new (t || AllKpiGoalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_2__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_erp_hr_data_kpi_services_kpi_goal_service__WEBPACK_IMPORTED_MODULE_3__.KpiGoalService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_5__.TokenStorageService)); };
AllKpiGoalsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AllKpiGoalsComponent, selectors: [["app-all-kpi-goals"]], viewQuery: function AllKpiGoalsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 115, vars: 22, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "REFRESH", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [3, "formGroup"], [1, "col-2"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "quarter", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "year"], [1, "col-9"], ["matInput", "", "formControlName", "costCenterCode", "readonly", ""], [1, "col-3", "imp"], ["matTooltip", "Search Cost Center", 1, "m-l-10"], ["matTooltip", "From All Cost Centers", 1, "m-l-10"], [1, "col-1"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "empPf"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "fullname"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-33", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-33", 4, "matCellDef"], ["matColumnDef", "emppf"], ["matColumnDef", "department"], ["matColumnDef", "status"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [3, "value"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-33"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-33"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matRipple", ""], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllKpiGoalsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Employees with KPI Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function AllKpiGoalsComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllKpiGoalsComponent_Template_button_click_25_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, AllKpiGoalsComponent_li_28_Template, 5, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, AllKpiGoalsComponent_li_29_Template, 5, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, AllKpiGoalsComponent_li_30_Template, 5, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 22)(32, "ul", 23)(33, "li")(34, "div", 24)(35, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllKpiGoalsComponent_Template_img_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r70); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](84); return _r9.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "li")(37, "div", 26)(38, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllKpiGoalsComponent_Template_img_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r70); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](84); return _r9.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "li")(40, "div", 28)(41, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllKpiGoalsComponent_Template_img_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r70); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](84); return _r9.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "li")(43, "div", 30)(44, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllKpiGoalsComponent_Template_img_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r70); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](84); return _r9.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 32)(46, "form", 33)(47, "div", 4)(48, "div", 34)(49, "form", 33)(50, "mat-form-field", 35)(51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Quarter Selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "mat-select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function AllKpiGoalsComponent_Template_mat_select_selectionChange_53_listener() { return ctx.getSelectSelectedStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, AllKpiGoalsComponent_mat_option_54_Template, 2, 2, "mat-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, AllKpiGoalsComponent_mat_error_55_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 34)(57, "div", 4)(58, "mat-form-field", 35)(59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](61, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](62, AllKpiGoalsComponent_mat_error_62_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 34)(64, "form", 33)(65, "div", 4)(66, "div", 39)(67, "mat-form-field", 35)(68, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "costCenterCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](70, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](71, AllKpiGoalsComponent_mat_error_71_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "div", 41)(73, "div", 42)(74, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllKpiGoalsComponent_Template_button_click_74_listener() { return ctx.onCostCenterLookup("Search"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "div", 43)(78, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllKpiGoalsComponent_Template_button_click_78_listener() { return ctx.onCostCenterLookup("All"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "all_inclusive");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](81, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "mat-table", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](85, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](86, AllKpiGoalsComponent_mat_header_cell_86_Template, 2, 4, "mat-header-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](87, AllKpiGoalsComponent_mat_cell_87_Template, 2, 4, "mat-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](88, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](89, AllKpiGoalsComponent_mat_header_cell_89_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](90, AllKpiGoalsComponent_mat_cell_90_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](91, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](92, AllKpiGoalsComponent_mat_header_cell_92_Template, 2, 0, "mat-header-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](93, AllKpiGoalsComponent_mat_cell_93_Template, 2, 1, "mat-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](94, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](95, AllKpiGoalsComponent_mat_header_cell_95_Template, 2, 0, "mat-header-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](96, AllKpiGoalsComponent_mat_cell_96_Template, 2, 1, "mat-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](97, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](98, AllKpiGoalsComponent_mat_header_cell_98_Template, 2, 0, "mat-header-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](99, AllKpiGoalsComponent_mat_cell_99_Template, 2, 1, "mat-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](100, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](101, AllKpiGoalsComponent_mat_header_cell_101_Template, 2, 0, "mat-header-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](102, AllKpiGoalsComponent_mat_cell_102_Template, 2, 1, "mat-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](103, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](104, AllKpiGoalsComponent_mat_header_cell_104_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](105, AllKpiGoalsComponent_mat_cell_105_Template, 7, 5, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](106, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](107, AllKpiGoalsComponent_mat_header_cell_107_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](108, AllKpiGoalsComponent_mat_cell_108_Template, 3, 3, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](109, AllKpiGoalsComponent_mat_header_row_109_Template, 1, 0, "mat-header-row", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](110, AllKpiGoalsComponent_mat_row_110_Template, 1, 2, "mat-row", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](111, AllKpiGoalsComponent_tr_111_Template, 3, 2, "tr", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](112, AllKpiGoalsComponent_div_112_Template, 2, 0, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](113, AllKpiGoalsComponent_div_113_Template, 2, 1, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](114, "mat-paginator", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "All KPI Goals")("items", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](20, _c0))("active_item", "All KPI Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.quarterArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Form.get("quarter").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Form.get("year").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Form.get("costCenterCode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](21, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_7__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_28__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator], styles: [".imp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1rcGktZ29hbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImFsbC1rcGktZ29hbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 35445:
/*!********************************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/kpi-management/kpi-goals/manage-kpi-goals/manage-kpi-goals.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageKpiGoalsComponent": () => (/* binding */ ManageKpiGoalsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/ccentre-lookup/ccentre-lookup.component */ 64622);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _leave_management_leave_requests_manage_leave_requests_manage_leave_requests_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../leave-management/leave-requests/manage-leave-requests/manage-leave-requests.component */ 52966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_kpi_services_kpi_goal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-hr/data/kpi-services/kpi-goal.service */ 88067);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 44912);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);





































function ManageKpiGoalsComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li")(1, "div", 89)(2, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_li_33_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r56.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function ManageKpiGoalsComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li")(1, "div", 91)(2, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_li_34_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r58.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function ManageKpiGoalsComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li")(1, "div", 93)(2, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_li_35_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r60.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function ManageKpiGoalsComponent_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please Enter CostCenterCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please Enter empPf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_error_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please Enter quarter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_error_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please Enter Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_error_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please Enter Cost Center Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_option_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", status_r62.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", status_r62.name, " ");
} }
function ManageKpiGoalsComponent_mat_error_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please select status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_header_cell_135_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 96)(1, "mat-checkbox", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ManageKpiGoalsComponent_mat_header_cell_135_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return $event ? ctx_r63.masterToggle() : null; })("change", function ManageKpiGoalsComponent_mat_header_cell_135_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r65.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx_r13.selection.hasValue() && ctx_r13.isAllSelected())("indeterminate", ctx_r13.selection.hasValue() && !ctx_r13.isAllSelected())("ngClass", "tbl-checkbox");
} }
function ManageKpiGoalsComponent_mat_cell_136_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 96)(1, "mat-checkbox", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_mat_cell_136_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function ManageKpiGoalsComponent_mat_cell_136_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r69); const row_r66 = restoredCtx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return $event ? ctx_r68.selection.toggle(row_r66) : null; })("change", function ManageKpiGoalsComponent_mat_cell_136_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r70.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r66 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx_r14.selection.isSelected(row_r66))("ngClass", "tbl-checkbox")("aria-label", ctx_r14.checkboxLabel(row_r66));
} }
function ManageKpiGoalsComponent_mat_header_cell_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r71.id, " ");
} }
function ManageKpiGoalsComponent_mat_header_cell_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Employee PF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r72.empPf, " ");
} }
function ManageKpiGoalsComponent_mat_header_cell_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r73.year, " ");
} }
function ManageKpiGoalsComponent_mat_header_cell_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Quarter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r74.quarter, " ");
} }
function ManageKpiGoalsComponent_mat_header_cell_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Strategic Objective ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r75.strategicObjective, " ");
} }
function ManageKpiGoalsComponent_mat_header_cell_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Tactical Perfomance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r76.tacticalPerfomance, " ");
} }
function ManageKpiGoalsComponent_mat_header_cell_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Is Quantitative ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r77.isQuantitative, " ");
} }
function ManageKpiGoalsComponent_mat_header_cell_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Target ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_160_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r78.nonQuantitativeTarget, " ");
} }
function ManageKpiGoalsComponent_mat_cell_160_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r78.quantitativeTarget, " ");
} }
function ManageKpiGoalsComponent_mat_cell_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ManageKpiGoalsComponent_mat_cell_160_span_1_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ManageKpiGoalsComponent_mat_cell_160_span_2_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", row_r78.isQuantitative == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", row_r78.isQuantitative == "Y");
} }
function ManageKpiGoalsComponent_mat_header_cell_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r83.weight, " ");
} }
function ManageKpiGoalsComponent_mat_header_cell_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Goal Submited ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r84.goalSubmited, " ");
} }
function ManageKpiGoalsComponent_mat_header_cell_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Appraisal Submited ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r85.appraisalSubmited, " ");
} }
function ManageKpiGoalsComponent_mat_header_cell_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Achieved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_172_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r86.nonQuantitativeAchieved, " ");
} }
function ManageKpiGoalsComponent_mat_cell_172_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r86.quantitativeAchieved, " ");
} }
function ManageKpiGoalsComponent_mat_cell_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ManageKpiGoalsComponent_mat_cell_172_span_1_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ManageKpiGoalsComponent_mat_cell_172_span_2_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", row_r86.isQuantitative == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", row_r86.isQuantitative == "Y");
} }
function ManageKpiGoalsComponent_mat_header_cell_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Employee Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r91.employeeScore, " ");
} }
function ManageKpiGoalsComponent_mat_header_cell_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Final Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r92.finalScore, " ");
} }
function ManageKpiGoalsComponent_mat_header_cell_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Approved By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r93.appraisedApprovedBy, " ");
} }
function ManageKpiGoalsComponent_mat_header_cell_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_184_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r94.status, " ");
} }
function ManageKpiGoalsComponent_mat_cell_184_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r94.status, " ");
} }
function ManageKpiGoalsComponent_mat_cell_184_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r94.status, " ");
} }
function ManageKpiGoalsComponent_mat_cell_184_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r94.status, " ");
} }
function ManageKpiGoalsComponent_mat_cell_184_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r94.status, " ");
} }
function ManageKpiGoalsComponent_mat_cell_184_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r94.status, " ");
} }
function ManageKpiGoalsComponent_mat_cell_184_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r94.status, " ");
} }
function ManageKpiGoalsComponent_mat_cell_184_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r94.status, " ");
} }
function ManageKpiGoalsComponent_mat_cell_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_mat_cell_184_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](1, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ManageKpiGoalsComponent_mat_cell_184_button_2_Template, 3, 1, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ManageKpiGoalsComponent_mat_cell_184_button_3_Template, 3, 1, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ManageKpiGoalsComponent_mat_cell_184_button_4_Template, 3, 1, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ManageKpiGoalsComponent_mat_cell_184_button_5_Template, 3, 1, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ManageKpiGoalsComponent_mat_cell_184_button_6_Template, 3, 1, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ManageKpiGoalsComponent_mat_cell_184_button_7_Template, 3, 1, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ManageKpiGoalsComponent_mat_cell_184_button_8_Template, 3, 1, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ManageKpiGoalsComponent_mat_cell_184_button_9_Template, 3, 1, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", row_r94.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "SUBMITTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "APPRAISAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "COMPLETED");
} }
function ManageKpiGoalsComponent_mat_header_cell_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Goal Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_187_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 128)(1, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_mat_cell_187_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ManageKpiGoalsComponent_mat_cell_187_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r117); const row_r113 = restoredCtx.$implicit; const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r116.generateValidateSwal("Approve Goal", row_r113); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-feather-icons", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_mat_cell_187_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function ManageKpiGoalsComponent_mat_cell_187_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r117); const row_r113 = restoredCtx.$implicit; const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r119.generateValidateSwal("Reject Goal", row_r113); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-feather-icons", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", "check-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", "x-circle");
} }
function ManageKpiGoalsComponent_mat_header_cell_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Appraisal Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_mat_cell_190_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 128)(1, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_mat_cell_190_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ManageKpiGoalsComponent_mat_cell_190_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r124); const row_r120 = restoredCtx.$implicit; const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r123.appraisalMngt("Approve Appraisal", row_r120); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-feather-icons", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_mat_cell_190_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function ManageKpiGoalsComponent_mat_cell_190_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r124); const row_r120 = restoredCtx.$implicit; const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r126.appraisalMngt("Moderate Appraisal", row_r120); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-feather-icons", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", "check-square");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", "activity");
} }
function ManageKpiGoalsComponent_mat_header_row_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-header-row");
} }
function ManageKpiGoalsComponent_mat_row_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-row", 134);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ManageKpiGoalsComponent_tr_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("colspan", ctx_r53.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r53.input, "\"");
} }
function ManageKpiGoalsComponent_div_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-progress-bar", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageKpiGoalsComponent_div_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-progress-spinner", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["KPI Goals"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class ManageKpiGoalsComponent {
    constructor(dialog, notificationAPI, kpiGoalService, snackbar, fb, route, tokenStorageService) {
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.kpiGoalService = kpiGoalService;
        this.snackbar = snackbar;
        this.fb = fb;
        this.route = route;
        this.tokenStorageService = tokenStorageService;
        this.displayedColumns = [
            // "select",
            // "id",
            // "empPf",
            // "year",
            //  "quarter",
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
            "status",
            "goalAction",
            "appraisalAction"
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
            { name: "SUBMITTED" },
            { name: "APPROVED" },
            { name: "RETURNED" },
            { name: "REJECTED" },
            { name: "APPRAISAL" },
            { name: "COMPLETED" },
        ];
        this.quarterArray = ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];
        this.selectedStatus = "ALL";
        this.quantitative = 'Y';
    }
    ngOnInit() {
        // action: action,
        if (this.route.queryParams &&
            typeof this.route.queryParams.subscribe === "function") {
            this.route.queryParams.subscribe((params) => {
                console.log("params: ", params);
                if (params.empPf) {
                    this.empPf = params.empPf;
                    this.quarter = params.quarter;
                    this.year = params.year;
                    this.costCenterCode = params.costCenterCode;
                }
            });
            this.showForm = true;
        }
        this.Form = this.fb.group({
            status: ["PENDING"],
            costCenterCode: [this.costCenterCode || "", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            year: [this.year || ""],
            empPf: [this.empPf || ""],
            quarter: [this.quarter || ""],
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
        // this.getData();
    }
    getSelectedStatus(status) {
        this.Form.patchValue({
            status: status,
        });
        //  this.getData();
    }
    getData() {
        this.loading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selectedStatus = this.Form.value.status;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpParams()
            .set("empPf", this.Form.value.empPf)
            .set("year", this.Form.value.year)
            .set("quarter", this.Form.value.quarter)
            .set("status", this.Form.value.status);
        this.kpiGoalService
            .getEmployeeKPIsData(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    console.log("KPI Goals displayed on table", this.data);
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
    //*********************************************************************************************** */
    generateValidateSwal(action, row) {
        let initialStatus = "";
        if (action === "Approve Goal") {
            initialStatus = "APPROVED";
        }
        else if (action === "Reject Goal") {
            initialStatus = "REJECTED";
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: `${action}`,
            html: `<input id="status" class="swal2-input" placeholder="Status" value="${initialStatus}" readonly>` +
                `<input id="verifierRemarks" class="swal2-input" placeholder="Verifier Remarks">`,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: "Submit",
            cancelButtonText: "Cancel",
            preConfirm: () => {
                return {
                    status: initialStatus,
                    verifierRemarks: document.getElementById("verifierRemarks").value,
                };
            },
        }).then((result) => {
            if (result.isConfirmed) {
                const { status, verifierRemarks } = result.value;
                const body = { status, verifierRemarks, id: row.id };
                console.log('body:: ', body);
                this.kpiGoalService
                    .updateState([body])
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        if (res.statusCode == 200) {
                            this.getData();
                            this.loading = false;
                            this.notificationAPI.alertSuccess(res.message);
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
    appraisalMngt(action, row) {
        let finalAction = "";
        if (action === "Approve Appraisal") {
            finalAction = "APPROVE";
        }
        else if (action === "Moderate Appraisal") {
            finalAction = "MODERATE";
        }
        this.quantitative = row.isQuantitative;
        this.strategicObjective = row.strategicObjective;
        this.tacticalPerformance = row.tacticalPerfomance;
        this.weight = row.weight;
        this.maxScore = this.weight * 2;
        let supervisorScoreInput = "";
        if (finalAction === "MODERATE") {
            supervisorScoreInput = '<input type="number" id="supervisorScore" placeholder="Enter Supervisor Score">';
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Appraisal Details",
            html: `<div>
                <p><strong>Quantitative:</strong> ${this.quantitative}</p>
                <p><strong>Strategic Objective:</strong> ${this.strategicObjective}</p>
                <p><strong>Tactical Performance:</strong> ${this.tacticalPerformance}</p>
                <p><strong>Weight:</strong> ${this.weight}</p>
                <p><strong>Max Score:</strong> ${this.maxScore}</p>
                ${supervisorScoreInput} <!-- Display supervisorScore input if MODERATE action -->
            </div>`,
            confirmButtonText: "Submit",
            showCancelButton: true,
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                let supervisorScoreValue = 0;
                if (finalAction === "MODERATE") {
                    const supervisorScoreInputElem = document.getElementById("supervisorScore");
                    supervisorScoreValue = parseFloat(supervisorScoreInputElem.value);
                    if (isNaN(supervisorScoreValue)) {
                        supervisorScoreValue = 0;
                    }
                }
                let body = {
                    id: row.id,
                    action: finalAction,
                    supervisorScore: supervisorScoreValue
                };
                console.log("body:  ", body);
                let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpParams()
                    .set('id', row.id)
                    .set('action', finalAction)
                    .set('supervisorScore', supervisorScoreValue.toString());
                this.kpiGoalService.appraisalApprove(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        if (res.statusCode == 200) {
                            this.getData();
                            this.loading = false;
                            this.notificationAPI.alertSuccess(res.message);
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
            else {
            }
        });
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
        const dialogRef = this.dialog.open(_leave_management_leave_requests_manage_leave_requests_manage_leave_requests_component__WEBPACK_IMPORTED_MODULE_2__.ManageLeaveRequestsComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            this.getData();
        });
    }
    deleteRecord(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                this.kpiGoalService
                    .deleteKPI(id)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$))
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
}
ManageKpiGoalsComponent.ɵfac = function ManageKpiGoalsComponent_Factory(t) { return new (t || ManageKpiGoalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_3__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_erp_hr_data_kpi_services_kpi_goal_service__WEBPACK_IMPORTED_MODULE_4__.KpiGoalService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__.TokenStorageService)); };
ManageKpiGoalsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ManageKpiGoalsComponent, selectors: [["app-manage-kpi-goals"]], viewQuery: function ManageKpiGoalsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 197, vars: 40, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [3, "formGroup"], [1, "col-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "costCenterCode", "readonly", ""], ["matInput", "", "formControlName", "empPf", "readonly", ""], ["matInput", "", "formControlName", "quarter", "readonly", ""], ["matInput", "", "formControlName", "year", "readonly", ""], [1, "col-9"], ["formControlName", "status", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-10"], [1, "button-container", "mt-1"], ["mat-raised-button", "", 1, "mat-button", "verified", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "pending", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "submitted", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "approved", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "rejected", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "appraisal", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "completed", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "empPf"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-7", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-7", 4, "matCellDef"], ["matColumnDef", "year"], ["matColumnDef", "quarter"], ["matColumnDef", "strategicObjective"], ["matColumnDef", "tacticalPerfomance"], ["matColumnDef", "isQuantitative"], ["matColumnDef", "target"], ["matColumnDef", "weight"], ["matColumnDef", "goalSubmited"], ["matColumnDef", "appraisalSubmited"], ["matColumnDef", "achieved"], ["matColumnDef", "employeeScore"], ["matColumnDef", "finalScore"], ["matColumnDef", "appraisedApprovedBy"], ["matColumnDef", "status"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "goalAction"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], ["matColumnDef", "appraisalAction"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [3, "value"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-7"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-7"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge custom-badge-solid-yellow btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge custom-badge-solid-purple btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge custom-badge-solid-teal btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "badge", "custom-badge-solid-yellow", "btn", "btn-sm", "m-1"], [1, "fas", "fa-paper-plane"], [1, "badge", "custom-badge-solid-purple", "btn", "btn-sm", "m-1"], [1, "fas", "fa-clipboard-check"], [1, "badge", "custom-badge-solid-teal", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-double"], [1, "fas", "fa-question-circle"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["matTooltip", "Approve Goal", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matTooltip", "Reject Goal", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "Approve Appraisal", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "Moderate Appraisal", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", ""], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function ManageKpiGoalsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "KPI Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function ManageKpiGoalsComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_Template_button_click_25_listener() { return ctx.mngRecord("Add", ""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "li")(29, "div", 21)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_Template_button_click_30_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, ManageKpiGoalsComponent_li_33_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, ManageKpiGoalsComponent_li_34_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, ManageKpiGoalsComponent_li_35_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 23)(37, "ul", 24)(38, "li")(39, "div", 25)(40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_Template_img_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r128); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](133); return _r12.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "li")(42, "div", 27)(43, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_Template_img_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r128); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](133); return _r12.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "li")(45, "div", 29)(46, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_Template_img_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r128); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](133); return _r12.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "li")(48, "div", 31)(49, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_Template_img_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r128); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](133); return _r12.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 33)(51, "form", 34)(52, "div", 4)(53, "div", 35)(54, "div", 4)(55, "mat-form-field", 36)(56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "CostCenterCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](58, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](59, ManageKpiGoalsComponent_mat_error_59_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 35)(61, "div", 4)(62, "mat-form-field", 36)(63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "Emp Pf");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](65, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, ManageKpiGoalsComponent_mat_error_66_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 35)(68, "div", 4)(69, "mat-form-field", 36)(70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "Quarter");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](72, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](73, ManageKpiGoalsComponent_mat_error_73_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "div", 35)(75, "div", 4)(76, "mat-form-field", 36)(77, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](79, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](80, ManageKpiGoalsComponent_mat_error_80_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 35)(82, "form", 34)(83, "div", 4)(84, "div", 41)(85, "mat-form-field", 36)(86, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "costCenterCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](88, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](89, ManageKpiGoalsComponent_mat_error_89_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "div", 33)(91, "form", 34)(92, "div", 4)(93, "div", 35)(94, "form", 34)(95, "mat-form-field", 36)(96, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "mat-select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function ManageKpiGoalsComponent_Template_mat_select_selectionChange_98_listener() { return ctx.getSelectSelectedStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](99, ManageKpiGoalsComponent_mat_option_99_Template, 2, 2, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](100, ManageKpiGoalsComponent_mat_error_100_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "div", 44)(102, "div", 45)(103, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_Template_button_click_103_listener() { return ctx.getSelectedStatus("ALL"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](105, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, " ALL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_Template_button_click_107_listener() { return ctx.getSelectedStatus("Pending"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109, "pending_actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_Template_button_click_111_listener() { return ctx.getSelectedStatus("SUBMITTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](114, " SUBMITTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](115, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_Template_button_click_115_listener() { return ctx.getSelectedStatus("APPROVED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, " APPROVED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_Template_button_click_119_listener() { return ctx.getSelectedStatus("REJECTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](121, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, " REJECTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_Template_button_click_123_listener() { return ctx.getSelectedStatus("APPRAISAL"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](125, "assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](126, " APPRAISAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](127, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageKpiGoalsComponent_Template_button_click_127_listener() { return ctx.getSelectedStatus("COMPLETED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](130, " COMPLETED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "mat-table", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](134, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](135, ManageKpiGoalsComponent_mat_header_cell_135_Template, 2, 4, "mat-header-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](136, ManageKpiGoalsComponent_mat_cell_136_Template, 2, 4, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](137, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](138, ManageKpiGoalsComponent_mat_header_cell_138_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](139, ManageKpiGoalsComponent_mat_cell_139_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](140, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](141, ManageKpiGoalsComponent_mat_header_cell_141_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](142, ManageKpiGoalsComponent_mat_cell_142_Template, 2, 1, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](143, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](144, ManageKpiGoalsComponent_mat_header_cell_144_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](145, ManageKpiGoalsComponent_mat_cell_145_Template, 2, 1, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](146, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](147, ManageKpiGoalsComponent_mat_header_cell_147_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](148, ManageKpiGoalsComponent_mat_cell_148_Template, 2, 1, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](149, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](150, ManageKpiGoalsComponent_mat_header_cell_150_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](151, ManageKpiGoalsComponent_mat_cell_151_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](152, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](153, ManageKpiGoalsComponent_mat_header_cell_153_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](154, ManageKpiGoalsComponent_mat_cell_154_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](155, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](156, ManageKpiGoalsComponent_mat_header_cell_156_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](157, ManageKpiGoalsComponent_mat_cell_157_Template, 2, 1, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](158, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](159, ManageKpiGoalsComponent_mat_header_cell_159_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](160, ManageKpiGoalsComponent_mat_cell_160_Template, 3, 2, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](161, 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](162, ManageKpiGoalsComponent_mat_header_cell_162_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](163, ManageKpiGoalsComponent_mat_cell_163_Template, 2, 1, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](164, 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](165, ManageKpiGoalsComponent_mat_header_cell_165_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](166, ManageKpiGoalsComponent_mat_cell_166_Template, 2, 1, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](167, 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](168, ManageKpiGoalsComponent_mat_header_cell_168_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](169, ManageKpiGoalsComponent_mat_cell_169_Template, 2, 1, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](170, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](171, ManageKpiGoalsComponent_mat_header_cell_171_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](172, ManageKpiGoalsComponent_mat_cell_172_Template, 3, 2, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](173, 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](174, ManageKpiGoalsComponent_mat_header_cell_174_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](175, ManageKpiGoalsComponent_mat_cell_175_Template, 2, 1, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](176, 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](177, ManageKpiGoalsComponent_mat_header_cell_177_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](178, ManageKpiGoalsComponent_mat_cell_178_Template, 2, 1, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](179, 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](180, ManageKpiGoalsComponent_mat_header_cell_180_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](181, ManageKpiGoalsComponent_mat_cell_181_Template, 2, 1, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](182, 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](183, ManageKpiGoalsComponent_mat_header_cell_183_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](184, ManageKpiGoalsComponent_mat_cell_184_Template, 10, 8, "mat-cell", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](185, 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](186, ManageKpiGoalsComponent_mat_header_cell_186_Template, 2, 0, "mat-header-cell", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](187, ManageKpiGoalsComponent_mat_cell_187_Template, 5, 6, "mat-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](188, 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](189, ManageKpiGoalsComponent_mat_header_cell_189_Template, 2, 0, "mat-header-cell", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](190, ManageKpiGoalsComponent_mat_cell_190_Template, 5, 6, "mat-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](191, ManageKpiGoalsComponent_mat_header_row_191_Template, 1, 0, "mat-header-row", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](192, ManageKpiGoalsComponent_mat_row_192_Template, 1, 2, "mat-row", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](193, ManageKpiGoalsComponent_tr_193_Template, 3, 2, "tr", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](194, ManageKpiGoalsComponent_div_194_Template, 2, 0, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](195, ManageKpiGoalsComponent_div_195_Template, 2, 1, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](196, "mat-paginator", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", "View KPI Goals")("items", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](38, _c0))("active_item", "View KPI Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Form.get("costCenterCode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Form.get("empPf").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Form.get("quarter").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Form.get("year").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Form.get("costCenterCode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedStatus === "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedStatus === "SUBMITTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedStatus === "APPROVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedStatus === "REJECTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedStatus === "APPRAISAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.selectedStatus === "COMPLETED");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](39, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_8__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_29__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_9__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator], styles: [".imp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1rcGktZ29hbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6Im1hbmFnZS1rcGktZ29hbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 57302:
/*!********************************************************************************!*\
  !*** ./src/app/erp-hr/modules/kpi-management/kpi-management-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KpiManagementRoutingModule": () => (/* binding */ KpiManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _kpi_goals_all_kpi_goals_all_kpi_goals_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kpi-goals/all-kpi-goals/all-kpi-goals.component */ 5257);
/* harmony import */ var _kpi_results_kpi_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kpi-results/kpi-results.component */ 49713);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _kpi_goals_manage_kpi_goals_manage_kpi_goals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kpi-goals/manage-kpi-goals/manage-kpi-goals.component */ 35445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: "all-kpi-goals",
        component: _kpi_goals_all_kpi_goals_all_kpi_goals_component__WEBPACK_IMPORTED_MODULE_0__.AllKpiGoalsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: {
            clientName: "HumanResourceModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
    {
        path: "manage-kpi-goals",
        component: _kpi_goals_manage_kpi_goals_manage_kpi_goals_component__WEBPACK_IMPORTED_MODULE_3__.ManageKpiGoalsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: {
            clientName: "HumanResourceModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
    {
        path: "kpi-results",
        component: _kpi_results_kpi_results_component__WEBPACK_IMPORTED_MODULE_1__.KpiResultsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: {
            clientName: "HumanResourceModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
];
class KpiManagementRoutingModule {
}
KpiManagementRoutingModule.ɵfac = function KpiManagementRoutingModule_Factory(t) { return new (t || KpiManagementRoutingModule)(); };
KpiManagementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: KpiManagementRoutingModule });
KpiManagementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](KpiManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 4299:
/*!************************************************************************!*\
  !*** ./src/app/erp-hr/modules/kpi-management/kpi-management.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KpiManagementModule": () => (/* binding */ KpiManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _kpi_management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kpi-management-routing.module */ 57302);
/* harmony import */ var _kpi_goals_all_kpi_goals_all_kpi_goals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kpi-goals/all-kpi-goals/all-kpi-goals.component */ 5257);
/* harmony import */ var _kpi_goals_manage_kpi_goals_manage_kpi_goals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kpi-goals/manage-kpi-goals/manage-kpi-goals.component */ 35445);
/* harmony import */ var _kpi_results_kpi_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kpi-results/kpi-results.component */ 49713);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 27970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);









class KpiManagementModule {
}
KpiManagementModule.ɵfac = function KpiManagementModule_Factory(t) { return new (t || KpiManagementModule)(); };
KpiManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: KpiManagementModule });
KpiManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _kpi_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.KpiManagementRoutingModule,
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__.DashboardModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](KpiManagementModule, { declarations: [_kpi_goals_all_kpi_goals_all_kpi_goals_component__WEBPACK_IMPORTED_MODULE_1__.AllKpiGoalsComponent,
        _kpi_goals_manage_kpi_goals_manage_kpi_goals_component__WEBPACK_IMPORTED_MODULE_2__.ManageKpiGoalsComponent,
        _kpi_results_kpi_results_component__WEBPACK_IMPORTED_MODULE_3__.KpiResultsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _kpi_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.KpiManagementRoutingModule,
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__.DashboardModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule] }); })();


/***/ }),

/***/ 49713:
/*!************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/kpi-management/kpi-results/kpi-results.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KpiResultsComponent": () => (/* binding */ KpiResultsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/ccentre-lookup/ccentre-lookup.component */ 64622);
/* harmony import */ var _leave_management_leave_requests_manage_leave_requests_manage_leave_requests_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../leave-management/leave-requests/manage-leave-requests/manage-leave-requests.component */ 52966);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_kpi_services_kpi_goal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-hr/data/kpi-services/kpi-goal.service */ 88067);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_hr_data_payroll_services_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-hr/data/payroll-services/report.service */ 89430);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dashboard/pages/gen-widgets/gen-widgets.component */ 44912);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);




































function KpiResultsComponent_mat_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quarter_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", quarter_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", quarter_r32, " ");
} }
function KpiResultsComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please select quarter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please Enter Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_mat_error_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please Enter Cost Center Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_mat_header_cell_88_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 72)(1, "mat-checkbox", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function KpiResultsComponent_mat_header_cell_88_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return $event ? ctx_r33.masterToggle() : null; })("change", function KpiResultsComponent_mat_header_cell_88_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r35.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx_r7.selection.hasValue() && ctx_r7.isAllSelected())("indeterminate", ctx_r7.selection.hasValue() && !ctx_r7.isAllSelected())("ngClass", "tbl-checkbox");
} }
function KpiResultsComponent_mat_cell_89_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 72)(1, "mat-checkbox", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function KpiResultsComponent_mat_cell_89_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function KpiResultsComponent_mat_cell_89_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const row_r36 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return $event ? ctx_r38.selection.toggle(row_r36) : null; })("change", function KpiResultsComponent_mat_cell_89_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r40.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r36 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx_r8.selection.isSelected(row_r36))("ngClass", "tbl-checkbox")("aria-label", ctx_r8.checkboxLabel(row_r36));
} }
function KpiResultsComponent_mat_header_cell_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Index ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_mat_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r42 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", i_r42 + 1, " ");
} }
function KpiResultsComponent_mat_header_cell_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Employee Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_mat_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r43.employeeName, " ");
} }
function KpiResultsComponent_mat_header_cell_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Employee Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_mat_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r44.empNo, " ");
} }
function KpiResultsComponent_mat_header_cell_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Department Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_mat_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r45.departmentName, " ");
} }
function KpiResultsComponent_mat_header_cell_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Quarter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_mat_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r46.quarter, " ");
} }
function KpiResultsComponent_mat_header_cell_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_mat_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r47.score, " ");
} }
function KpiResultsComponent_mat_header_cell_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_mat_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r48.score, " ");
} }
function KpiResultsComponent_mat_header_cell_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Grade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_mat_cell_113_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r49.grade, " ");
} }
function KpiResultsComponent_mat_cell_113_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r49.grade, " ");
} }
function KpiResultsComponent_mat_cell_113_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r49.grade, " ");
} }
function KpiResultsComponent_mat_cell_113_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r49.grade, " ");
} }
function KpiResultsComponent_mat_cell_113_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", row_r49.grade, " ");
} }
function KpiResultsComponent_mat_cell_113_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00A0 No Grade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_mat_cell_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function KpiResultsComponent_mat_cell_113_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](1, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, KpiResultsComponent_mat_cell_113_button_2_Template, 3, 1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, KpiResultsComponent_mat_cell_113_button_3_Template, 3, 1, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, KpiResultsComponent_mat_cell_113_button_4_Template, 3, 1, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, KpiResultsComponent_mat_cell_113_button_5_Template, 3, 1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, KpiResultsComponent_mat_cell_113_button_6_Template, 3, 1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, KpiResultsComponent_mat_cell_113_button_7_Template, 3, 0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", row_r49.grade);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Exceptional");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Exceeds Targets");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Met Targets");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Needs Improvement");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Unsatisfactory");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !row_r49.grade);
} }
function KpiResultsComponent_mat_header_cell_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_mat_cell_116_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-cell", 96)(1, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function KpiResultsComponent_mat_cell_116_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function KpiResultsComponent_mat_cell_116_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r67); const row_r63 = restoredCtx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r66.downloadQuarterReport(row_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-feather-icons", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function KpiResultsComponent_mat_cell_116_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function KpiResultsComponent_mat_cell_116_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r67); const row_r63 = restoredCtx.$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r69.downloadAnnualReport(row_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-feather-icons", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("tbl-fav-download");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("tbl-fav-download");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", "download");
} }
function KpiResultsComponent_mat_header_row_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-header-row");
} }
function KpiResultsComponent_mat_row_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-row", 100);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("cursor", "pointer");
} }
function KpiResultsComponent_tr_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("colspan", ctx_r29.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r29.input, "\"");
} }
function KpiResultsComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-progress-bar", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function KpiResultsComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-progress-spinner", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["KPI Results"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class KpiResultsComponent {
    constructor(dialog, notificationAPI, kpiGoalService, snackbar, fb, reportAPI, tokenStorageService) {
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.kpiGoalService = kpiGoalService;
        this.snackbar = snackbar;
        this.fb = fb;
        this.reportAPI = reportAPI;
        this.tokenStorageService = tokenStorageService;
        this.displayedColumns = [
            // "select",
            "index",
            "employeeName",
            "empNo",
            "departmentName",
            "quarter",
            "score",
            "grade",
            //"status",
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
        this.quarterArray = ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];
        this.selectedStatus = "ALL";
    }
    ngOnInit() {
        const currentYear = new Date().getFullYear();
        const currentMonthIndex = new Date().getMonth();
        const currentMonthName = this.months[currentMonthIndex];
        this.currentUser = this.tokenStorageService.getUser();
        this.Form = this.fb.group({
            costCenterCode: [this.currentUser.costCenterCode, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            year: [currentYear.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            quarter: ['Quarter 1']
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
        // this.getData();
    }
    getSelectedStatus(status) {
        this.Form.patchValue({
            status: status,
        });
        //  this.getData();
    }
    getData() {
        this.loading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selectedStatus = this.Form.value.status;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpParams()
            .set('year', this.Form.value.year)
            .set('quarter', this.Form.value.quarter)
            .set('costcentercode', this.Form.value.costCenterCode);
        this.kpiGoalService.getEmployeeKPIsScoreData(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    console.log("KPI Results displayed on table", this.data);
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
        const dialogRef = this.dialog.open(_leave_management_leave_requests_manage_leave_requests_manage_leave_requests_component__WEBPACK_IMPORTED_MODULE_1__.ManageLeaveRequestsComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            this.getData();
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
    // ****************************************************************************************************************************
    downloadReport() {
        let filename = "FINAL_KPI_SCORES_" + this.Form.value.quarter;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpParams()
            .set('year', this.Form.value.year)
            .set('quarter', this.Form.value.quarter)
            .set('costcentercode', this.Form.value.costCenterCode);
        this.loading = true;
        this.kpiGoalService.generateScoreExcel(params).subscribe(data => {
            if (data.statusCode == "404") {
                this.notificationAPI.alertWarning(data.message);
                this.loading = false;
            }
            else {
                let extension = 'xlsx';
                this.saveToFileSystem(filename, data, this.Form.value.year, extension);
                this.loading = false;
            }
            this.loading = false;
        });
    }
    downloadQuarterReport(row) {
        this.loading = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpParams()
            .set('empPf', row.empNo)
            .set('year', this.Form.value.year)
            .set('quarter', this.Form.value.quarter)
            .set('status', this.selectedStatus);
        this.reportAPI.employeeKPIQuarterly(params).subscribe({
            next: (value) => {
                this.loading = false;
                this.notificationAPI.alertSuccess("Downloading KPI Report");
                let url = window.URL.createObjectURL(value.data);
                let a = document.createElement('a');
                document.body.appendChild(a);
                a.setAttribute('style', 'display: none');
                a.setAttribute('target', 'blank');
                a.href = url;
                a.download = value.filename;
                a.click();
                window.URL.revokeObjectURL(url);
                a.remove();
            },
            error: (err) => {
                this.loading = false;
                this.notificationAPI.alertWarning("NO REPORT FOUND");
            },
            complete: () => {
            },
        });
    }
    downloadAnnualReport(row) {
        this.loading = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpParams()
            .set('empPf', row.empNo)
            .set('year', this.Form.value.year);
        this.reportAPI.employeeKPIAnnualy(params).subscribe({
            next: (value) => {
                this.loading = false;
                this.notificationAPI.alertSuccess("Downloading Annual KPI Report");
                let url = window.URL.createObjectURL(value.data);
                let a = document.createElement('a');
                document.body.appendChild(a);
                a.setAttribute('style', 'display: none');
                a.setAttribute('target', 'blank');
                a.href = url;
                a.download = value.filename;
                a.click();
                window.URL.revokeObjectURL(url);
                a.remove();
            },
            error: (err) => {
                this.loading = false;
                this.notificationAPI.alertWarning("NO REPORT FOUND");
            },
            complete: () => {
            },
        });
    }
    saveToFileSystem(filename, response, year, extension) {
        const blob = new Blob([response], { type: 'application/vnd.ms-excel' });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.download = filename + '_for_' + year + '.' + extension;
        anchor.href = url;
        anchor.click();
    }
}
KpiResultsComponent.ɵfac = function KpiResultsComponent_Factory(t) { return new (t || KpiResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_2__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_erp_hr_data_kpi_services_kpi_goal_service__WEBPACK_IMPORTED_MODULE_3__.KpiGoalService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_erp_hr_data_payroll_services_report_service__WEBPACK_IMPORTED_MODULE_5__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__.TokenStorageService)); };
KpiResultsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: KpiResultsComponent, selectors: [["app-kpi-results"]], viewQuery: function KpiResultsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 123, vars: 19, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "REFRESH", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "Generate Report", 1, "m-l-10"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [3, "formGroup"], [1, "col-2"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "quarter", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "formControlName", "year"], [1, "col-9"], ["matInput", "", "formControlName", "costCenterCode", "readonly", ""], [1, "col-3", "imp"], ["matTooltip", "Search Cost Center", 1, "m-l-10"], ["matTooltip", "From All Cost Centers", 1, "m-l-10"], [1, "col-1"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "index"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "employeeName"], ["matColumnDef", "empNo"], ["matColumnDef", "departmentName"], ["matColumnDef", "quarter"], ["matColumnDef", "score"], ["matColumnDef", "grade"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [3, "value"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-purple btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngIf"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-purple", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-question-circle"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["matTooltip", "Quarterly Report", "mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matTooltip", "Annual Report", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", ""], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function KpiResultsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "KPI Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function KpiResultsComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function KpiResultsComponent_Template_button_click_25_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "li")(29, "div", 21)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function KpiResultsComponent_Template_button_click_30_listener() { return ctx.downloadReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 22)(34, "ul", 23)(35, "li")(36, "div", 24)(37, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function KpiResultsComponent_Template_img_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r71); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](86); return _r6.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "li")(39, "div", 26)(40, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function KpiResultsComponent_Template_img_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r71); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](86); return _r6.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "li")(42, "div", 28)(43, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function KpiResultsComponent_Template_img_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r71); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](86); return _r6.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "li")(45, "div", 30)(46, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function KpiResultsComponent_Template_img_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r71); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](86); return _r6.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 32)(48, "form", 33)(49, "div", 4)(50, "div", 34)(51, "form", 33)(52, "mat-form-field", 35)(53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Quarter");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "mat-select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function KpiResultsComponent_Template_mat_select_selectionChange_55_listener() { return ctx.getSelectSelectedStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](56, KpiResultsComponent_mat_option_56_Template, 2, 2, "mat-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, KpiResultsComponent_mat_error_57_Template, 2, 0, "mat-error", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 34)(59, "div", 4)(60, "mat-form-field", 35)(61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, KpiResultsComponent_mat_error_64_Template, 2, 0, "mat-error", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 34)(66, "form", 33)(67, "div", 4)(68, "div", 40)(69, "mat-form-field", 35)(70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "costCenterCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](72, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](73, KpiResultsComponent_mat_error_73_Template, 2, 0, "mat-error", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "div", 42)(75, "div", 43)(76, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function KpiResultsComponent_Template_button_click_76_listener() { return ctx.onCostCenterLookup("Search"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 44)(80, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function KpiResultsComponent_Template_button_click_80_listener() { return ctx.onCostCenterLookup("All"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82, "all_inclusive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](83, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "mat-table", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](87, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](88, KpiResultsComponent_mat_header_cell_88_Template, 2, 4, "mat-header-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](89, KpiResultsComponent_mat_cell_89_Template, 2, 4, "mat-cell", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](90, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](91, KpiResultsComponent_mat_header_cell_91_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](92, KpiResultsComponent_mat_cell_92_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](93, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](94, KpiResultsComponent_mat_header_cell_94_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](95, KpiResultsComponent_mat_cell_95_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](96, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](97, KpiResultsComponent_mat_header_cell_97_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](98, KpiResultsComponent_mat_cell_98_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](99, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](100, KpiResultsComponent_mat_header_cell_100_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](101, KpiResultsComponent_mat_cell_101_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](102, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](103, KpiResultsComponent_mat_header_cell_103_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](104, KpiResultsComponent_mat_cell_104_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](105, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](106, KpiResultsComponent_mat_header_cell_106_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](107, KpiResultsComponent_mat_cell_107_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](108, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](109, KpiResultsComponent_mat_header_cell_109_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](110, KpiResultsComponent_mat_cell_110_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](111, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](112, KpiResultsComponent_mat_header_cell_112_Template, 2, 0, "mat-header-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](113, KpiResultsComponent_mat_cell_113_Template, 8, 7, "mat-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](114, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](115, KpiResultsComponent_mat_header_cell_115_Template, 2, 0, "mat-header-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](116, KpiResultsComponent_mat_cell_116_Template, 5, 6, "mat-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](117, KpiResultsComponent_mat_header_row_117_Template, 1, 0, "mat-header-row", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](118, KpiResultsComponent_mat_row_118_Template, 1, 2, "mat-row", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](119, KpiResultsComponent_tr_119_Template, 3, 2, "tr", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](120, KpiResultsComponent_div_120_Template, 2, 0, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](121, KpiResultsComponent_div_121_Template, 2, 1, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](122, "mat-paginator", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", "All KPI Results")("items", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](17, _c0))("active_item", "All KPI Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.quarterArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Form.get("quarter").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Form.get("year").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Form.get("costCenterCode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](18, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_8__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_28__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitchCase, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_9__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator], styles: [".imp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtwaS1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJrcGktcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_erp-hr_modules_kpi-management_kpi-management_module_ts.js.map
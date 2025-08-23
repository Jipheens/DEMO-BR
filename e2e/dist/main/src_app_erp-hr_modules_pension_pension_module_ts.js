"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-hr_modules_pension_pension_module_ts"],{

/***/ 73950:
/*!************************************************************************!*\
  !*** ./src/app/erp-hr/data/pension-services/pension-scheme.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PensionSchemeService": () => (/* binding */ PensionSchemeService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






class PensionSchemeService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Content-Type", "application/json");
        this.baseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/pension`;
    }
    create(data) {
        let API_URL = `${this.baseURL}/create`;
        return this.http
            .post(API_URL, data, { headers: this.headers, withCredentials: false })
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
            .get(API_URL, {
            params: params,
            headers: this.headers,
            withCredentials: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readById(id) {
        let API_URL = `${this.baseURL}/find/by/id`;
        return this.http.get(API_URL, { withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    update(data) {
        let API_URL = `${this.baseURL}/update`;
        return this.http
            .put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    delete(params) {
        let API_URL = `${this.baseURL}/delete`;
        return this.http
            .delete(API_URL, {
            params: params,
            headers: this.headers,
            withCredentials: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    verify(processedRows) {
        const expenseUrl = `${this.baseURL}/update/state`;
        return this.http.put(expenseUrl, processedRows);
    }
    readContributions(params) {
        let API_URL = `${this.baseURL}/all/contributions`;
        return this.http
            .get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    errorMgmt(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `${error.error.message}`;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
    }
}
PensionSchemeService.ɵfac = function PensionSchemeService_Factory(t) { return new (t || PensionSchemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
PensionSchemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PensionSchemeService, factory: PensionSchemeService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 44884:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/pension/pension-contribution/all-pension-contribution/all-pension-contribution.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPensionContributionComponent": () => (/* binding */ AllPensionContributionComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_pension_services_pension_scheme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/data/pension-services/pension-scheme.service */ 73950);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 44912);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
































function AllPensionContributionComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "div", 70)(2, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllPensionContributionComponent_li_28_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r44.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} }
function AllPensionContributionComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "div", 72)(2, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllPensionContributionComponent_li_29_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r46.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} }
function AllPensionContributionComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "div", 74)(2, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllPensionContributionComponent_li_30_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r48.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} }
function AllPensionContributionComponent_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_option_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", month_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](month_r50);
} }
function AllPensionContributionComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Please select a month");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_header_cell_68_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 77)(1, "mat-checkbox", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AllPensionContributionComponent_mat_header_cell_68_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r51.masterToggle() : null; })("change", function AllPensionContributionComponent_mat_header_cell_68_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r53.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r9.selection.hasValue() && ctx_r9.isAllSelected())("indeterminate", ctx_r9.selection.hasValue() && !ctx_r9.isAllSelected())("ngClass", "tbl-checkbox");
} }
function AllPensionContributionComponent_mat_cell_69_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 77)(1, "mat-checkbox", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllPensionContributionComponent_mat_cell_69_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function AllPensionContributionComponent_mat_cell_69_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r57); const row_r54 = restoredCtx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r56.selection.toggle(row_r54) : null; })("change", function AllPensionContributionComponent_mat_cell_69_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r58.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r54 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r10.selection.isSelected(row_r54))("ngClass", "tbl-checkbox")("aria-label", ctx_r10.checkboxLabel(row_r54));
} }
function AllPensionContributionComponent_mat_header_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " EMP PF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r59.empPf, " ");
} }
function AllPensionContributionComponent_mat_header_cell_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Employee Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r60.employeeName, " ");
} }
function AllPensionContributionComponent_mat_header_cell_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Period Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r61.periody, " ");
} }
function AllPensionContributionComponent_mat_header_cell_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Period Month ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r62.periodm, " ");
} }
function AllPensionContributionComponent_mat_header_cell_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Employee Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r63.employeeamount, " ");
} }
function AllPensionContributionComponent_mat_header_cell_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Employer Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r64.employeramount, " ");
} }
function AllPensionContributionComponent_mat_header_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Employee Voluntary Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r65.employeevoluntaryamount, " ");
} }
function AllPensionContributionComponent_mat_header_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Balance to Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r66.balancetodate, " ");
} }
function AllPensionContributionComponent_mat_header_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Payroll Circle Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r67.payrollCirclecode, " ");
} }
function AllPensionContributionComponent_mat_header_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Contribution Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, row_r68.contributiondate, "short"), " ");
} }
function AllPensionContributionComponent_mat_header_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_102_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r69.status, " ");
} }
function AllPensionContributionComponent_mat_cell_102_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r69.status, " ");
} }
function AllPensionContributionComponent_mat_cell_102_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r69.status, " ");
} }
function AllPensionContributionComponent_mat_cell_102_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r69.status, " ");
} }
function AllPensionContributionComponent_mat_cell_102_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r69.status, " ");
} }
function AllPensionContributionComponent_mat_cell_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllPensionContributionComponent_mat_cell_102_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AllPensionContributionComponent_mat_cell_102_button_2_Template, 3, 1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AllPensionContributionComponent_mat_cell_102_button_3_Template, 3, 1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AllPensionContributionComponent_mat_cell_102_button_4_Template, 3, 1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AllPensionContributionComponent_mat_cell_102_button_5_Template, 3, 1, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AllPensionContributionComponent_mat_cell_102_button_6_Template, 3, 1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", row_r69.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function AllPensionContributionComponent_mat_header_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_105_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A0 Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function AllPensionContributionComponent_mat_cell_105_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u00A0 Not Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AllPensionContributionComponent_mat_cell_105_ng_container_1_Template, 4, 0, "ng-container", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AllPensionContributionComponent_mat_cell_105_ng_template_2_Template, 3, 0, "ng-template", null, 99, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r82 = ctx.$implicit;
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r82.verifiedFlag === "Y")("ngIfElse", _r84);
} }
function AllPensionContributionComponent_mat_header_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Deleted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_108_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A0 Deleted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function AllPensionContributionComponent_mat_cell_108_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u00A0 Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AllPensionContributionComponent_mat_cell_108_ng_container_1_Template, 4, 0, "ng-container", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AllPensionContributionComponent_mat_cell_108_ng_template_2_Template, 3, 0, "ng-template", null, 102, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r86 = ctx.$implicit;
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r86.deletedFlag === "Y")("ngIfElse", _r88);
} }
function AllPensionContributionComponent_mat_header_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_mat_cell_111_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 104)(1, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllPensionContributionComponent_mat_cell_111_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllPensionContributionComponent_mat_cell_111_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94); const row_r90 = restoredCtx.$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r93.mngRecord("Update", row_r90); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-feather-icons", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllPensionContributionComponent_mat_cell_111_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllPensionContributionComponent_mat_cell_111_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94); const row_r90 = restoredCtx.$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r96.mngRecord("View", row_r90); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-feather-icons", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllPensionContributionComponent_mat_cell_111_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllPensionContributionComponent_mat_cell_111_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94); const row_r90 = restoredCtx.$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r98.deleteRecord(row_r90.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-feather-icons", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "trash-2");
} }
function AllPensionContributionComponent_mat_header_row_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
} }
function AllPensionContributionComponent_mat_row_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-row", 108);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllPensionContributionComponent_tr_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("colspan", ctx_r41.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r41.input, "\"");
} }
function AllPensionContributionComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-bar", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllPensionContributionComponent_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-spinner", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Pension Contribution"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class AllPensionContributionComponent {
    constructor(dialog, notificationAPI, pensionSchemeService, snackbar, fb) {
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.pensionSchemeService = pensionSchemeService;
        this.snackbar = snackbar;
        this.fb = fb;
        this.displayedColumns = [
            // "select",
            "empPf",
            "employeeName",
            "periody",
            "periodm",
            "employeeamount",
            "employeramount",
            "employeevoluntaryamount",
            "balancetodate",
            "payrollCirclecode",
            "contributiondate",
            // "action",
        ];
        this.loading = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.SelectionModel(true, []);
        this.downloadLoading = false;
        this.posting = false;
        this.showForm = false;
        this.months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
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
        this.Form = this.fb.group({
            year: [currentYear.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            month: [currentMonthName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
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
    getSelectedMonth() {
    }
    getData() {
        this.loading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams()
            .set('periodY', this.Form.value.year)
            .set('periodM', this.Form.value.month);
        this.pensionSchemeService
            .readContributions(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    console.log("Pension Contribution displayed on table", this.data);
                    this.loading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(this.data);
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
                this.pensionSchemeService
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
        // if (this.hasAccess) {
        //   Swal.fire({
        //     title: '<span style="font-size: 20px;">Enter Verifier Remarks</span>',
        //     input: "textarea",
        //     inputPlaceholder: "Type your remarks here...",
        //     confirmButtonText: "Submit",
        //     showCancelButton: true,
        //     cancelButtonText: "Cancel",
        //     inputValidator: (value) => {
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
        //       this.pensionSchemeService
        //         .validateBulkPensionSchemes(processedRows)
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
AllPensionContributionComponent.ɵfac = function AllPensionContributionComponent_Factory(t) { return new (t || AllPensionContributionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_1__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_hr_data_pension_services_pension_scheme_service__WEBPACK_IMPORTED_MODULE_2__.PensionSchemeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder)); };
AllPensionContributionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AllPensionContributionComponent, selectors: [["app-all-pension-contribution"]], viewQuery: function AllPensionContributionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 118, vars: 20, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "REFRESH", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [1, "col-2"], [3, "formGroup"], [1, "col-9"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "formControlName", "year"], ["formControlName", "month", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "empPf"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "employeeName"], ["matColumnDef", "periody"], ["matColumnDef", "periodm"], ["matColumnDef", "employeeamount"], ["matColumnDef", "employeramount"], ["matColumnDef", "employeevoluntaryamount"], ["matColumnDef", "balancetodate"], ["matColumnDef", "payrollCirclecode"], ["matColumnDef", "contributiondate"], ["matColumnDef", "status"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 3, "click", 4, "matCellDef"], ["matColumnDef", "verifiedFlag"], ["matColumnDef", "deletedFlag"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [3, "value"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], [4, "ngIf", "ngIfElse"], ["notVerified", ""], [1, "fas", "fa-check"], [1, "fas", "fa-times"], ["notDeleted", ""], [1, "fas", "fa-trash"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", ""], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllPensionContributionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Pension Contribution");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function AllPensionContributionComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllPensionContributionComponent_Template_button_click_25_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, AllPensionContributionComponent_li_28_Template, 5, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, AllPensionContributionComponent_li_29_Template, 5, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, AllPensionContributionComponent_li_30_Template, 5, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 22)(32, "ul", 23)(33, "li")(34, "div", 24)(35, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllPensionContributionComponent_Template_img_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r100); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](66); return _r8.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "li")(37, "div", 26)(38, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllPensionContributionComponent_Template_img_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r100); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](66); return _r8.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "li")(40, "div", 28)(41, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllPensionContributionComponent_Template_img_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r100); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](66); return _r8.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "li")(43, "div", 30)(44, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllPensionContributionComponent_Template_img_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r100); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](66); return _r8.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 32)(46, "div", 4)(47, "div", 33)(48, "form", 34)(49, "div", 4)(50, "div", 35)(51, "mat-form-field", 36)(52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, AllPensionContributionComponent_mat_error_55_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 33)(57, "form", 34)(58, "mat-form-field", 36)(59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "mat-select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function AllPensionContributionComponent_Template_mat_select_selectionChange_61_listener() { return ctx.getSelectedMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, AllPensionContributionComponent_mat_option_62_Template, 2, 2, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, AllPensionContributionComponent_mat_error_63_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "mat-table", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](67, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, AllPensionContributionComponent_mat_header_cell_68_Template, 2, 4, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, AllPensionContributionComponent_mat_cell_69_Template, 2, 4, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](70, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, AllPensionContributionComponent_mat_header_cell_71_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, AllPensionContributionComponent_mat_cell_72_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](73, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, AllPensionContributionComponent_mat_header_cell_74_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, AllPensionContributionComponent_mat_cell_75_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](76, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](77, AllPensionContributionComponent_mat_header_cell_77_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, AllPensionContributionComponent_mat_cell_78_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](79, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, AllPensionContributionComponent_mat_header_cell_80_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, AllPensionContributionComponent_mat_cell_81_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](82, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, AllPensionContributionComponent_mat_header_cell_83_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](84, AllPensionContributionComponent_mat_cell_84_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](85, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](86, AllPensionContributionComponent_mat_header_cell_86_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](87, AllPensionContributionComponent_mat_cell_87_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](88, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, AllPensionContributionComponent_mat_header_cell_89_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](90, AllPensionContributionComponent_mat_cell_90_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](91, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](92, AllPensionContributionComponent_mat_header_cell_92_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](93, AllPensionContributionComponent_mat_cell_93_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](94, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](95, AllPensionContributionComponent_mat_header_cell_95_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](96, AllPensionContributionComponent_mat_cell_96_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](97, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](98, AllPensionContributionComponent_mat_header_cell_98_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](99, AllPensionContributionComponent_mat_cell_99_Template, 3, 4, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](100, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](101, AllPensionContributionComponent_mat_header_cell_101_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](102, AllPensionContributionComponent_mat_cell_102_Template, 7, 5, "mat-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](103, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](104, AllPensionContributionComponent_mat_header_cell_104_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](105, AllPensionContributionComponent_mat_cell_105_Template, 4, 2, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](106, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](107, AllPensionContributionComponent_mat_header_cell_107_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](108, AllPensionContributionComponent_mat_cell_108_Template, 4, 2, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](109, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](110, AllPensionContributionComponent_mat_header_cell_110_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](111, AllPensionContributionComponent_mat_cell_111_Template, 7, 9, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](112, AllPensionContributionComponent_mat_header_row_112_Template, 1, 0, "mat-header-row", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](113, AllPensionContributionComponent_mat_row_113_Template, 1, 2, "mat-row", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](114, AllPensionContributionComponent_tr_114_Template, 3, 2, "tr", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](115, AllPensionContributionComponent_div_115_Template, 2, 0, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](116, AllPensionContributionComponent_div_116_Template, 2, 1, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](117, "mat-paginator", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "All Pension Contribution")("items", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](18, _c0))("active_item", "All Pension Contribution");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("year").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("month").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](19, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_25__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe], styles: [".col-3.imp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1wZW5zaW9uLWNvbnRyaWJ1dGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiYWxsLXBlbnNpb24tY29udHJpYnV0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC0zLmltcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 79336:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/pension/pension-enrolment/all-pension-enrolment/all-pension-enrolment.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPensionEnrolmentComponent": () => (/* binding */ AllPensionEnrolmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _manage_pension_enrolment_manage_pension_enrolment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manage-pension-enrolment/manage-pension-enrolment.component */ 24950);
/* harmony import */ var src_app_erp_hr_hr_lookups_configurations_lookups_departments_lookup_departments_lookup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/hr-lookups/configurations-lookups/departments-lookup/departments-lookup.component */ 45528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_pension_services_pension_scheme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-hr/data/pension-services/pension-scheme.service */ 73950);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 44912);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
































function AllPensionEnrolmentComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 75)(2, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_li_33_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r37.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function AllPensionEnrolmentComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 77)(2, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_li_34_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r39.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function AllPensionEnrolmentComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 79)(2, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_li_35_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r41.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function AllPensionEnrolmentComponent_mat_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", reqStatus_r43.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", reqStatus_r43.name, " ");
} }
function AllPensionEnrolmentComponent_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_header_cell_86_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 82)(1, "mat-checkbox", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllPensionEnrolmentComponent_mat_header_cell_86_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return $event ? ctx_r44.masterToggle() : null; })("change", function AllPensionEnrolmentComponent_mat_header_cell_86_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r46.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r8.selection.hasValue() && ctx_r8.isAllSelected())("indeterminate", ctx_r8.selection.hasValue() && !ctx_r8.isAllSelected())("ngClass", "tbl-checkbox");
} }
function AllPensionEnrolmentComponent_mat_cell_87_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 82)(1, "mat-checkbox", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_mat_cell_87_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function AllPensionEnrolmentComponent_mat_cell_87_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50); const row_r47 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return $event ? ctx_r49.selection.toggle(row_r47) : null; })("change", function AllPensionEnrolmentComponent_mat_cell_87_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r51.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r47 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r9.selection.isSelected(row_r47))("ngClass", "tbl-checkbox")("aria-label", ctx_r9.checkboxLabel(row_r47));
} }
function AllPensionEnrolmentComponent_mat_header_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r52.id, " ");
} }
function AllPensionEnrolmentComponent_mat_header_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Employee Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r53.employeeName, " ");
} }
function AllPensionEnrolmentComponent_mat_header_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " EMP PF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r54.empPf, " ");
} }
function AllPensionEnrolmentComponent_mat_header_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " National ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r55.nationalId, " ");
} }
function AllPensionEnrolmentComponent_mat_header_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Pension Derivation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r56.pensionDerivation, " ");
} }
function AllPensionEnrolmentComponent_mat_header_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Pension Rate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r57.pensionRate, " ");
} }
function AllPensionEnrolmentComponent_mat_header_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Effective From Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r58.effectiveFromDate, "short"), " ");
} }
function AllPensionEnrolmentComponent_mat_header_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_111_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r59.status, " ");
} }
function AllPensionEnrolmentComponent_mat_cell_111_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r59.status, " ");
} }
function AllPensionEnrolmentComponent_mat_cell_111_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r59.status, " ");
} }
function AllPensionEnrolmentComponent_mat_cell_111_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r59.status, " ");
} }
function AllPensionEnrolmentComponent_mat_cell_111_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r59.status, " ");
} }
function AllPensionEnrolmentComponent_mat_cell_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_mat_cell_111_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](1, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AllPensionEnrolmentComponent_mat_cell_111_button_2_Template, 3, 1, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, AllPensionEnrolmentComponent_mat_cell_111_button_3_Template, 3, 1, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, AllPensionEnrolmentComponent_mat_cell_111_button_4_Template, 3, 1, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, AllPensionEnrolmentComponent_mat_cell_111_button_5_Template, 3, 1, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, AllPensionEnrolmentComponent_mat_cell_111_button_6_Template, 3, 1, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitch", row_r59.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function AllPensionEnrolmentComponent_mat_header_cell_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_114_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\u00A0 Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_114_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0 Not Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AllPensionEnrolmentComponent_mat_cell_114_ng_container_1_Template, 4, 0, "ng-container", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AllPensionEnrolmentComponent_mat_cell_114_ng_template_2_Template, 3, 0, "ng-template", null, 106, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", row_r72.verifiedFlag === "Y")("ngIfElse", _r74);
} }
function AllPensionEnrolmentComponent_mat_header_cell_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Deleted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_117_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\u00A0 Deleted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_117_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0 Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AllPensionEnrolmentComponent_mat_cell_117_ng_container_1_Template, 4, 0, "ng-container", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AllPensionEnrolmentComponent_mat_cell_117_ng_template_2_Template, 3, 0, "ng-template", null, 109, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = ctx.$implicit;
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", row_r76.deletedFlag === "Y")("ngIfElse", _r78);
} }
function AllPensionEnrolmentComponent_mat_header_cell_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_mat_cell_120_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 111)(1, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_mat_cell_120_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllPensionEnrolmentComponent_mat_cell_120_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r84); const row_r80 = restoredCtx.$implicit; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r83.mngRecord("Update", row_r80); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-feather-icons", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_mat_cell_120_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllPensionEnrolmentComponent_mat_cell_120_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r84); const row_r80 = restoredCtx.$implicit; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r86.mngRecord("View", row_r80); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-feather-icons", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_mat_cell_120_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllPensionEnrolmentComponent_mat_cell_120_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r84); const row_r80 = restoredCtx.$implicit; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r88.deleteRecord(row_r80.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-feather-icons", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", "trash-2");
} }
function AllPensionEnrolmentComponent_mat_header_row_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-header-row");
} }
function AllPensionEnrolmentComponent_mat_row_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-row", 115);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllPensionEnrolmentComponent_tr_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("colspan", ctx_r34.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r34.input, "\"");
} }
function AllPensionEnrolmentComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-bar", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllPensionEnrolmentComponent_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-spinner", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Pension Enrolment"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class AllPensionEnrolmentComponent {
    constructor(dialog, notificationAPI, pensionSchemeService, snackbar, fb) {
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.pensionSchemeService = pensionSchemeService;
        this.snackbar = snackbar;
        this.fb = fb;
        this.displayedColumns = [
            "select",
            "employeeName",
            "empPf",
            "nationalId",
            "pensionDerivation",
            "pensionRate",
            "effectiveFromDate",
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
        // this.Form = this.fb.group({
        //   status: ["Voluntary", Validators.required],
        //   department: ["", Validators.required],
        // });
        this.Form = this.fb.group({
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
        // this.getData();
    }
    getSelectedStatus(status) {
        this.Form.patchValue({
            status: status,
        });
        //  this.getData();
    }
    getData(currentPage, pageSize) {
        this.loading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selectedStatus = this.Form.value.status;
        // let params = new HttpParams()
        //   .set("departmentId", this.Form.value.department)
        //   .set("pensiontype", this.Form.value.status);
        let params = {
            status: this.Form.value.status,
        };
        this.pensionSchemeService
            .readByStatus(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    console.log("Pension Enrolment displayed on table", this.data);
                    this.loading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.data);
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
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: action,
            record: record,
        };
        const dialogRef = this.dialog.open(_manage_pension_enrolment_manage_pension_enrolment_component__WEBPACK_IMPORTED_MODULE_1__.ManagePensionEnrolmentComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            this.getData();
        });
    }
    deleteRecord(id) {
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
                this.pensionSchemeService
                    .delete(id)
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
    // ****************************************************************************************************************************
    // Look Up
    // ****************************************************************************************************************************
    departmentsLookUp(type) {
        if (type === "Search") {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.width = "800px";
            dialogConfig.data = {
                action: "view Cost Centres",
            };
            const dialogRef = this.dialog.open(src_app_erp_hr_hr_lookups_configurations_lookups_departments_lookup_departments_lookup_component__WEBPACK_IMPORTED_MODULE_2__.DepartmentsLookupComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                if (result && result.data.length != 0) {
                    this.Form.patchValue({
                        department: result.data[0].id,
                    });
                    this.getData();
                }
            });
        }
        else if (type === "All") {
            this.Form.patchValue({
                department: "All",
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
                    this.pensionSchemeService
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
AllPensionEnrolmentComponent.ɵfac = function AllPensionEnrolmentComponent_Factory(t) { return new (t || AllPensionEnrolmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_3__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_erp_hr_data_pension_services_pension_scheme_service__WEBPACK_IMPORTED_MODULE_4__.PensionSchemeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder)); };
AllPensionEnrolmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AllPensionEnrolmentComponent, selectors: [["app-all-pension-enrolment"]], viewQuery: function AllPensionEnrolmentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 127, vars: 28, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [1, "col-2"], [3, "formGroup"], ["appearance", "fill", 1, "example-full-width"], ["formControlName", "status"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-10"], [1, "button-container", "mt-1"], ["mat-raised-button", "", 1, "mat-button", "verified", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "pending", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "approved", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "returned", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "rejected", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "employeeName"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "empPf"], ["matColumnDef", "nationalId"], ["matColumnDef", "pensionDerivation"], ["matColumnDef", "pensionRate"], ["matColumnDef", "effectiveFromDate"], ["matColumnDef", "status"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 3, "click", 4, "matCellDef"], ["matColumnDef", "verifiedFlag"], ["matColumnDef", "deletedFlag"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [3, "value"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], [4, "ngIf", "ngIfElse"], ["notVerified", ""], [1, "fas", "fa-check"], [1, "fas", "fa-times"], ["notDeleted", ""], [1, "fas", "fa-trash"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", ""], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllPensionEnrolmentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Pension Enrolment");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function AllPensionEnrolmentComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_Template_button_click_25_listener() { return ctx.mngRecord("Add", ""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "li")(29, "div", 21)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_Template_button_click_30_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, AllPensionEnrolmentComponent_li_33_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, AllPensionEnrolmentComponent_li_34_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, AllPensionEnrolmentComponent_li_35_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 23)(37, "ul", 24)(38, "li")(39, "div", 25)(40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_Template_img_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r90); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](84); return _r7.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "li")(42, "div", 27)(43, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_Template_img_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r90); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](84); return _r7.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "li")(45, "div", 29)(46, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_Template_img_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r90); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](84); return _r7.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "li")(48, "div", 31)(49, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_Template_img_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r90); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](84); return _r7.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 33)(51, "div", 4)(52, "div", 34)(53, "form", 35)(54, "mat-form-field", 36)(55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "mat-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, AllPensionEnrolmentComponent_mat_option_58_Template, 2, 2, "mat-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, AllPensionEnrolmentComponent_mat_error_59_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 39)(61, "div", 40)(62, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_Template_button_click_62_listener() { return ctx.getSelectedStatus("ALL"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, " ALL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_Template_button_click_66_listener() { return ctx.getSelectedStatus("PENDING"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, " PENDING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_Template_button_click_70_listener() { return ctx.getSelectedStatus("APPROVED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, " APPROVED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_Template_button_click_74_listener() { return ctx.getSelectedStatus("RETURNED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, " RETURNED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllPensionEnrolmentComponent_Template_button_click_78_listener() { return ctx.getSelectedStatus("REJECTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81, " REJECTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "mat-table", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](85, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](86, AllPensionEnrolmentComponent_mat_header_cell_86_Template, 2, 4, "mat-header-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](87, AllPensionEnrolmentComponent_mat_cell_87_Template, 2, 4, "mat-cell", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](88, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](89, AllPensionEnrolmentComponent_mat_header_cell_89_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](90, AllPensionEnrolmentComponent_mat_cell_90_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](91, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](92, AllPensionEnrolmentComponent_mat_header_cell_92_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](93, AllPensionEnrolmentComponent_mat_cell_93_Template, 2, 1, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](94, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](95, AllPensionEnrolmentComponent_mat_header_cell_95_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](96, AllPensionEnrolmentComponent_mat_cell_96_Template, 2, 1, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](97, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](98, AllPensionEnrolmentComponent_mat_header_cell_98_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](99, AllPensionEnrolmentComponent_mat_cell_99_Template, 2, 1, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](100, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](101, AllPensionEnrolmentComponent_mat_header_cell_101_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](102, AllPensionEnrolmentComponent_mat_cell_102_Template, 2, 1, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](103, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](104, AllPensionEnrolmentComponent_mat_header_cell_104_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](105, AllPensionEnrolmentComponent_mat_cell_105_Template, 2, 1, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](106, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](107, AllPensionEnrolmentComponent_mat_header_cell_107_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](108, AllPensionEnrolmentComponent_mat_cell_108_Template, 3, 4, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](109, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](110, AllPensionEnrolmentComponent_mat_header_cell_110_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](111, AllPensionEnrolmentComponent_mat_cell_111_Template, 7, 5, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](112, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](113, AllPensionEnrolmentComponent_mat_header_cell_113_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](114, AllPensionEnrolmentComponent_mat_cell_114_Template, 4, 2, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](115, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](116, AllPensionEnrolmentComponent_mat_header_cell_116_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](117, AllPensionEnrolmentComponent_mat_cell_117_Template, 4, 2, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](118, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](119, AllPensionEnrolmentComponent_mat_header_cell_119_Template, 2, 0, "mat-header-cell", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](120, AllPensionEnrolmentComponent_mat_cell_120_Template, 7, 9, "mat-cell", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](121, AllPensionEnrolmentComponent_mat_header_row_121_Template, 1, 0, "mat-header-row", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](122, AllPensionEnrolmentComponent_mat_row_122_Template, 1, 2, "mat-row", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](123, AllPensionEnrolmentComponent_tr_123_Template, 3, 2, "tr", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](124, AllPensionEnrolmentComponent_div_124_Template, 2, 0, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](125, AllPensionEnrolmentComponent_div_125_Template, 2, 1, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](126, "mat-paginator", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "All Pension Enrolment")("items", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](26, _c0))("active_item", "All Pension Enrolment");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Form.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "APPROVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "RETURNED");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "REJECTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](27, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_7__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_26__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe], styles: [".col-3.imp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1wZW5zaW9uLWVucm9sbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiYWxsLXBlbnNpb24tZW5yb2xtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC0zLmltcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 24950:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/pension/pension-enrolment/manage-pension-enrolment/manage-pension-enrolment.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagePensionEnrolmentComponent": () => (/* binding */ ManagePensionEnrolmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_hr_hr_lookups_configurations_lookups_employees_lookup_employees_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component */ 27979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_hr_data_pension_services_pension_scheme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/data/pension-services/pension-scheme.service */ 73950);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);


















function ManagePensionEnrolmentComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-bar", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManagePensionEnrolmentComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " EMP PF is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManagePensionEnrolmentComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r8);
} }
function ManagePensionEnrolmentComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Pension Derivation is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManagePensionEnrolmentComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Pension Rate is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManagePensionEnrolmentComponent_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Effective From Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManagePensionEnrolmentComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "div", 28)(2, "div", 29)(3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagePensionEnrolmentComponent_div_49_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagePensionEnrolmentComponent_div_49_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("auth-spinner", ctx_r7.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r7.mngForm.valid || ctx_r7.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.pageFunction, " Pension Enrolment ");
} }
class ManagePensionEnrolmentComponent {
    constructor(dialogRef, data, fb, snackbar, pensionSchemeService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.pensionSchemeService = pensionSchemeService;
        this.dialog = dialog;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.downloadLoading = false;
        this.pageFunction = "Add";
        this.hideSubmit = false;
        this.isLoading = true;
        this.derivationArray = ['FIXED', 'PERCENT'];
        this.disableTransactionType = true;
        // {
        //   "id": 0,
        //   "empPf": "string",
        //   "employeeName": "string",
        //   "pensionType": "Occupational",
        //   "departmentId": 0,
        //   "pensionDerivation": "FIXED",
        //   "pensionRate": 0,
        //   "effectiveFromDate": "2024-05-23T13:21:40.973Z"
        // }
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
    generateForm(formData) {
        var _a, _b, _c, _d, _e;
        console.log("generateForm formData :: ", formData);
        this.mngForm = this.fb.group({
            id: [(_a = formData === null || formData === void 0 ? void 0 : formData.id) !== null && _a !== void 0 ? _a : ''],
            empPf: [(_b = formData === null || formData === void 0 ? void 0 : formData.empPf) !== null && _b !== void 0 ? _b : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            pensionDerivation: [(_c = formData === null || formData === void 0 ? void 0 : formData.pensionDerivation) !== null && _c !== void 0 ? _c : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            pensionRate: [(_d = formData === null || formData === void 0 ? void 0 : formData.pensionRate) !== null && _d !== void 0 ? _d : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            effectiveFromDate: [(_e = formData === null || formData === void 0 ? void 0 : formData.effectiveFromDate) !== null && _e !== void 0 ? _e : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    activateViewMode() {
        this.viewMode = true;
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        this.posting = true;
        if (this.pageFunction === "Add") {
            this.pensionSchemeService.create(this.mngForm.value)
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
        else if (this.pageFunction === "Update") {
            this.pensionSchemeService.update(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$))
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
                rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription;
        }
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.response });
    }
    employeeLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "SingleEmployee",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_hr_hr_lookups_configurations_lookups_employees_lookup_employees_lookup_component__WEBPACK_IMPORTED_MODULE_0__.EmployeesLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.mngForm.patchValue({
                    empPf: res.data[0].empNo,
                });
            }
        });
    }
}
ManagePensionEnrolmentComponent.ɵfac = function ManagePensionEnrolmentComponent_Factory(t) { return new (t || ManagePensionEnrolmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_hr_data_pension_services_pension_scheme_service__WEBPACK_IMPORTED_MODULE_2__.PensionSchemeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
ManagePensionEnrolmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ManagePensionEnrolmentComponent, selectors: [["app-manage-pension-enrolment"]], decls: 50, vars: 11, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/em.png", "width", "30px", "height", "30px", "alt", ""], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], ["class", "m-2", 4, "ngIf"], [1, "mx-2"], [1, "register-form", "mx-2", 3, "formGroup"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "mb-1"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "empPf", "required", ""], ["matSuffix", "", 3, "click"], [4, "ngIf"], ["formControlName", "pensionDerivation", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "pensionRate", "required", ""], ["matInput", "", "formControlName", "effectiveFromDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["class", "row", 4, "ngIf"], [1, "m-2"], ["color", "primary", "mode", "indeterminate"], [3, "value"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["align", "end", 1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]], template: function ManagePensionEnrolmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagePensionEnrolmentComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ManagePensionEnrolmentComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Pension Enrolment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "form", 11)(18, "div", 12)(19, "div", 13)(20, "mat-form-field", 14)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "EMP PF");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagePensionEnrolmentComponent_Template_mat_icon_click_24_listener() { return ctx.employeeLookup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ManagePensionEnrolmentComponent_mat_error_26_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 13)(28, "mat-form-field", 14)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Pension Derivation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ManagePensionEnrolmentComponent_mat_option_32_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ManagePensionEnrolmentComponent_mat_error_33_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 13)(35, "mat-form-field", 14)(36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Pension Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, ManagePensionEnrolmentComponent_mat_error_39_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 13)(41, "mat-form-field", 14)(42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Effective From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 21)(45, "mat-datepicker-toggle", 22)(46, "mat-datepicker", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ManagePensionEnrolmentComponent_mat_error_48_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, ManagePensionEnrolmentComponent_div_49_Template, 7, 4, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Pension Enrolment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mngForm.get("empPf").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.derivationArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mngForm.get("pensionDerivation").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mngForm.get("pensionRate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mngForm.get("effectiveFromDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.viewMode);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtcGVuc2lvbi1lbnJvbG1lbnQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 10443:
/*!******************************************************************!*\
  !*** ./src/app/erp-hr/modules/pension/pension-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PensionRoutingModule": () => (/* binding */ PensionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pension_contribution_all_pension_contribution_all_pension_contribution_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pension-contribution/all-pension-contribution/all-pension-contribution.component */ 44884);
/* harmony import */ var _pension_enrolment_all_pension_enrolment_all_pension_enrolment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pension-enrolment/all-pension-enrolment/all-pension-enrolment.component */ 79336);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: "all-pension-contributions",
        component: _pension_contribution_all_pension_contribution_all_pension_contribution_component__WEBPACK_IMPORTED_MODULE_0__.AllPensionContributionComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: {
            clientName: "HumanResourceModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
    {
        path: "all-pension-enrolment",
        component: _pension_enrolment_all_pension_enrolment_all_pension_enrolment_component__WEBPACK_IMPORTED_MODULE_1__.AllPensionEnrolmentComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: {
            clientName: "HumanResourceModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
];
class PensionRoutingModule {
}
PensionRoutingModule.ɵfac = function PensionRoutingModule_Factory(t) { return new (t || PensionRoutingModule)(); };
PensionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PensionRoutingModule });
PensionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PensionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 16445:
/*!**********************************************************!*\
  !*** ./src/app/erp-hr/modules/pension/pension.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PensionModule": () => (/* binding */ PensionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _pension_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pension-routing.module */ 10443);
/* harmony import */ var _pension_enrolment_all_pension_enrolment_all_pension_enrolment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pension-enrolment/all-pension-enrolment/all-pension-enrolment.component */ 79336);
/* harmony import */ var _pension_enrolment_manage_pension_enrolment_manage_pension_enrolment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pension-enrolment/manage-pension-enrolment/manage-pension-enrolment.component */ 24950);
/* harmony import */ var _pension_contribution_all_pension_contribution_all_pension_contribution_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pension-contribution/all-pension-contribution/all-pension-contribution.component */ 44884);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 27970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);









class PensionModule {
}
PensionModule.ɵfac = function PensionModule_Factory(t) { return new (t || PensionModule)(); };
PensionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PensionModule });
PensionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _pension_routing_module__WEBPACK_IMPORTED_MODULE_0__.PensionRoutingModule,
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__.DashboardModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PensionModule, { declarations: [_pension_enrolment_all_pension_enrolment_all_pension_enrolment_component__WEBPACK_IMPORTED_MODULE_1__.AllPensionEnrolmentComponent,
        _pension_enrolment_manage_pension_enrolment_manage_pension_enrolment_component__WEBPACK_IMPORTED_MODULE_2__.ManagePensionEnrolmentComponent,
        _pension_contribution_all_pension_contribution_all_pension_contribution_component__WEBPACK_IMPORTED_MODULE_3__.AllPensionContributionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _pension_routing_module__WEBPACK_IMPORTED_MODULE_0__.PensionRoutingModule,
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__.DashboardModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_erp-hr_modules_pension_pension_module_ts.js.map
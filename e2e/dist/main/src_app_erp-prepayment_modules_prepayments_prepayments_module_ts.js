"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-prepayment_modules_prepayments_prepayments_module_ts"],{

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


/***/ }),

/***/ 94562:
/*!***********************************************************!*\
  !*** ./src/app/erp-prepayment/data/prepayment.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrepaymentsService": () => (/* binding */ PrepaymentsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class PrepaymentsService {
    constructor(http) {
        this.http = http;
    }
    getPrepayments() {
        const PrepaymentssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlPrepayments}/api/v1/prepayment-records/all`;
        return this.http.get(PrepaymentssUrl);
    }
    getPrepaymentsById(params) {
        const PrepaymentssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlPrepayments}/api/v1/prepayment-records/fetchById`;
        return this.http.get(PrepaymentssUrl, { params: params });
    }
    getPrepaymentsByCode(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlPrepayments}/api/v1/prepayment-records/fetchByCode`);
    }
    addPrepayments(data) {
        const PrepaymentssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlPrepayments}/api/v1/prepayment-records/save`;
        return this.http.post(PrepaymentssUrl, data);
    }
    updatePrepayments(PrepaymentsDetails) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlPrepayments}/api/v1/prepayment-records/update`;
        return this.http.put(updateBillUrl, PrepaymentsDetails);
    }
    deletePrepaymentsTemporarily(params) {
        const PrepaymentssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlPrepayments}/api/v1/prepayment-records/delete`;
        return this.http.put(PrepaymentssUrl, { params });
    }
    generateReport(prepaymentRecordIds) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append('Accept', 'application/octet-stream');
        let requestOptions = { headers: headers, responseType: 'blob', withCredentials: false };
        const idsParam = prepaymentRecordIds.join(',');
        const PrepaymentssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlPrepayments}/api/v1/prepayment-records/report?prepaymentRecordIds=${idsParam}`;
        // let API_URL = `${environment.baseUrl}/api/v1/reports/directtransfer/all/excel`;
        return this.http.get(PrepaymentssUrl, requestOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                data: new Blob([response], { type: 'octet/stream' }),
            };
        }));
    }
    getPrepaymentsReportByIds(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlPrepayments}/api/v1/prepayment-records/report`);
    }
    getMonthlyReportByStatusAndMonth(params) {
        const PrepaymentssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlPrepayments}/api/v1/prepayment-records/monthly-reports-status`;
        return this.http.get(PrepaymentssUrl, { params: params });
    }
    getMonthlyExcelReportByStatusAndMonth(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append('Accept', 'application/octet-stream');
        let requestOptions = { params: params, headers: headers, responseType: 'blob', withCredentials: false };
        const PrepaymentssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlPrepayments}/api/v1/prepayment-records/monthly-reports-status-excel`;
        return this.http.get(PrepaymentssUrl, requestOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                data: new Blob([response], { type: 'octet/stream' }),
            };
        }));
    }
    updateMonthlyRecordsStatus(updateStatusBody) {
        const PrepaymentssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlPrepayments}/api/v1/prepayment-records/update-monthly-status`;
        return this.http.put(PrepaymentssUrl, updateStatusBody);
    }
}
PrepaymentsService.ɵfac = function PrepaymentsService_Factory(t) { return new (t || PrepaymentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
PrepaymentsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PrepaymentsService, factory: PrepaymentsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 27997:
/*!*******************************************************************************************************!*\
  !*** ./src/app/erp-prepayment/modules/prepayments/pages/all-prepayments/all-prepayments.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPrepaymentsComponent": () => (/* binding */ AllPrepaymentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dialogs_monthly_report_by_status_monthly_report_by_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialogs/monthly-report-by-status/monthly-report-by-status.component */ 79841);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_prepayment_data_prepayment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-prepayment/data/prepayment.service */ 94562);
/* harmony import */ var src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-procurement/data/services/notification.service */ 67879);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 82884);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);





























function AllPrepaymentsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-progress-bar", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllPrepaymentsComponent_mat_header_cell_62_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 63)(1, "mat-checkbox", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AllPrepaymentsComponent_mat_header_cell_62_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return $event ? ctx_r30.masterToggle() : null; })("change", function AllPrepaymentsComponent_mat_header_cell_62_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r32.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r4.selection.hasValue() && ctx_r4.isAllSelected())("indeterminate", ctx_r4.selection.hasValue() && !ctx_r4.isAllSelected())("ngClass", "tbl-checkbox");
} }
function AllPrepaymentsComponent_mat_cell_63_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 63)(1, "mat-checkbox", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllPrepaymentsComponent_mat_cell_63_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function AllPrepaymentsComponent_mat_cell_63_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36); const row_r33 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return $event ? ctx_r35.selection.toggle(row_r33) : null; })("change", function AllPrepaymentsComponent_mat_cell_63_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r37.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r5.selection.isSelected(row_r33))("ngClass", "tbl-checkbox")("aria-label", ctx_r5.checkboxLabel(row_r33));
} }
function AllPrepaymentsComponent_mat_header_cell_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllPrepaymentsComponent_mat_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](row_r38.id);
} }
function AllPrepaymentsComponent_mat_header_cell_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "prepaymentName");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllPrepaymentsComponent_mat_cell_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r39.prepaymentName, "");
} }
function AllPrepaymentsComponent_mat_header_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllPrepaymentsComponent_mat_cell_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r40.description, " ");
} }
function AllPrepaymentsComponent_mat_header_cell_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllPrepaymentsComponent_mat_cell_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r41.amount, "");
} }
function AllPrepaymentsComponent_mat_header_cell_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "startDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllPrepaymentsComponent_mat_cell_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, row_r42.startDate, "MM/dd/yyyy"), "");
} }
function AllPrepaymentsComponent_mat_header_cell_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "endDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllPrepaymentsComponent_mat_cell_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, row_r43.endDate, "MM/dd/yyyy"), "");
} }
function AllPrepaymentsComponent_mat_header_cell_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "numberOfPeriods");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllPrepaymentsComponent_mat_cell_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r44.numberOfPeriods, "");
} }
function AllPrepaymentsComponent_mat_header_cell_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "debitAccount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllPrepaymentsComponent_mat_cell_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r45.debitAccount, "");
} }
function AllPrepaymentsComponent_mat_header_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "creditAccount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllPrepaymentsComponent_mat_cell_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r46.creditAccount, "");
} }
function AllPrepaymentsComponent_mat_header_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllPrepaymentsComponent_mat_cell_93_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 69)(1, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllPrepaymentsComponent_mat_cell_93_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllPrepaymentsComponent_mat_cell_93_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51); const row_r47 = restoredCtx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r50.editPrepayment(row_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-feather-icons", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllPrepaymentsComponent_mat_cell_93_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllPrepaymentsComponent_mat_cell_93_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51); const row_r47 = restoredCtx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r53.viewPrepayment(row_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-feather-icons", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllPrepaymentsComponent_mat_cell_93_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllPrepaymentsComponent_mat_cell_93_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51); const row_r47 = restoredCtx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r55.deletePrepayment(row_r47.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-feather-icons", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "trash-2");
} }
function AllPrepaymentsComponent_mat_header_row_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-header-row");
} }
function AllPrepaymentsComponent_mat_row_95_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-row", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllPrepaymentsComponent_mat_row_95_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r58); const row_r56 = restoredCtx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r57.viewPrepayment(row_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllPrepaymentsComponent_mat_cell_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r28.input.value, "\"");
} }
function AllPrepaymentsComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-progress-spinner", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Prepayments"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class AllPrepaymentsComponent {
    constructor(router, snackbar, prepaymentsService, nootificationService, dialog) {
        this.router = router;
        this.snackbar = snackbar;
        this.prepaymentsService = prepaymentsService;
        this.nootificationService = nootificationService;
        this.dialog = dialog;
        this.displayedColumns = ['select', 'id', 'prepaymentName', 'description', 'amount', 'startDate', 'endDate', 'numberOfPeriods', 'debitAccount', 'creditAccount', 'action'];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.SelectionModel(true, []);
        this.isLoading = true;
        this.pageFunction = "Update";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.downloadLoading = false;
        this.selectedRows = [];
        this.atleastOneSelected = false;
    }
    ngOnInit() {
        this.getData();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getData() {
        this.prepaymentsService.getPrepayments().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
            next: (res) => {
                console.log("this.res :", res);
                if (res) {
                    this.data = res;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    console.log("this.data :", this.data);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res);
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => {
            }
        }), rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription;
    }
    addPrepayment() {
        this.router.navigate(["/erp-prepayment/prepayments/manage-prepayment"]);
    }
    refresh() {
        this.getData();
    }
    editPrepayment(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        let route = '/erp-prepayment/prepayments/manage-prepayment';
        this.router.navigate([route], { queryParams: { id: data.id, action: 'Update' } });
    }
    viewPrepayment(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        let route = '/erp-prepayment/prepayments/manage-prepayment';
        this.router.navigate([route], { queryParams: { id: data.id, action: 'View' } });
    }
    deletePrepayment(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you sure?",
            text: "Do you really want to delete this Prepayment?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete Prepayment!",
        }).then((result) => {
            if (result.isConfirmed) {
                this.prepaymentsService.deletePrepaymentsTemporarily(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
                    next: (res) => {
                        this.snackbar.showNotification("snackbar-success", "Prepayment Deleted Successfully");
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getData();
                    }
                }), rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription;
            }
        });
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
    /** The label for the checkbox on the passed row */
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
    generatePrepaymentReport() {
        if (this.selectedRows.length === 0) {
            this.nootificationService.alertWarning("Select atleast one Prepayment...!!");
            return;
        }
        else {
            let prepaymentRecordIds = [];
            this.selectedRows.forEach(element => {
                prepaymentRecordIds.push(element.id);
            });
            this.subscription = this.prepaymentsService
                .generateReport(prepaymentRecordIds)
                .subscribe((response) => {
                const a = document.createElement("a");
                document.body.appendChild(a);
                const blob = new Blob([response.data], {
                    type: "octet/stream",
                });
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = "PrepaymentReport.xlsx";
                a.click();
                window.URL.revokeObjectURL(url);
                this.snackbar.showNotification("snackbar-success", "Report generated successfully");
            }, (err) => {
                this.error = err;
                this.snackbar.showNotification("snackbar-danger", "Excel File could not be generated successfully");
            });
        }
    }
    //*************************************************************************************************************** */
    generatePendingPrepaymentsReport() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "500px";
        dialogConfig.data = {
            action: "view requsitions",
            selected: ""
        };
        const dialogRef = this.dialog.open(_dialogs_monthly_report_by_status_monthly_report_by_status_component__WEBPACK_IMPORTED_MODULE_1__.MonthlyReportByStatusComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            if (result && result.data.length != 0) {
                console.log("result: ", result.data);
            }
        });
    }
}
AllPrepaymentsComponent.ɵfac = function AllPrepaymentsComponent_Factory(t) { return new (t || AllPrepaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_erp_prepayment_data_prepayment_service__WEBPACK_IMPORTED_MODULE_3__.PrepaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog)); };
AllPrepaymentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AllPrepaymentsComponent, selectors: [["app-all-prepayments"]], viewQuery: function AllPrepaymentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 99, vars: 12, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], ["matTooltip", "Generate Report", 1, "m-l-10"], ["matTooltip", "Generate Pending Prepayment Report", 1, "m-l-10"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "table-img tbl-col-width-per-9", 4, "matHeaderCellDef"], ["class", "table-img tbl-col-width-per-9", 4, "matCellDef"], ["matColumnDef", "prepaymentName"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "amount"], ["matColumnDef", "startDate"], ["matColumnDef", "endDate"], ["matColumnDef", "numberOfPeriods"], ["matColumnDef", "debitAccount"], ["matColumnDef", "creditAccount"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "table-img", "tbl-col-width-per-9"], [1, "table-img", "tbl-col-width-per-9"], ["mat-sort-header", ""], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllPrepaymentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, AllPrepaymentsComponent_div_8_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 4)(13, "div", 11)(14, "ul", 12)(15, "li", 13)(16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Prepayments");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "li", 14)(19, "label", 15)(20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function AllPrepaymentsComponent_Template_input_keyup_22_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "li")(25, "div", 19)(26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllPrepaymentsComponent_Template_button_click_26_listener() { return ctx.addPrepayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "li")(30, "div", 22)(31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllPrepaymentsComponent_Template_button_click_31_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "li")(35, "div", 23)(36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllPrepaymentsComponent_Template_button_click_36_listener() { return ctx.generatePrepaymentReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "li")(40, "div", 24)(41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllPrepaymentsComponent_Template_button_click_41_listener() { return ctx.generatePendingPrepaymentsReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 25)(45, "ul", 26)(46, "li")(47, "div", 27)(48, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllPrepaymentsComponent_Template_img_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](60); return _r3.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "li")(50, "div", 29)(51, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllPrepaymentsComponent_Template_img_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](60); return _r3.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "li")(53, "div", 31)(54, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllPrepaymentsComponent_Template_img_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](60); return _r3.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "li")(56, "div", 33)(57, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllPrepaymentsComponent_Template_img_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](60); return _r3.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "mat-table", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](61, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, AllPrepaymentsComponent_mat_header_cell_62_Template, 2, 4, "mat-header-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, AllPrepaymentsComponent_mat_cell_63_Template, 2, 4, "mat-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](64, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, AllPrepaymentsComponent_mat_header_cell_65_Template, 2, 0, "mat-header-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, AllPrepaymentsComponent_mat_cell_66_Template, 2, 1, "mat-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](67, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, AllPrepaymentsComponent_mat_header_cell_68_Template, 2, 0, "mat-header-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, AllPrepaymentsComponent_mat_cell_69_Template, 2, 1, "mat-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](70, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, AllPrepaymentsComponent_mat_header_cell_71_Template, 2, 0, "mat-header-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, AllPrepaymentsComponent_mat_cell_72_Template, 2, 1, "mat-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](73, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, AllPrepaymentsComponent_mat_header_cell_74_Template, 2, 0, "mat-header-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, AllPrepaymentsComponent_mat_cell_75_Template, 2, 1, "mat-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](76, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, AllPrepaymentsComponent_mat_header_cell_77_Template, 2, 0, "mat-header-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, AllPrepaymentsComponent_mat_cell_78_Template, 3, 4, "mat-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](79, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](80, AllPrepaymentsComponent_mat_header_cell_80_Template, 2, 0, "mat-header-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](81, AllPrepaymentsComponent_mat_cell_81_Template, 3, 4, "mat-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](82, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](83, AllPrepaymentsComponent_mat_header_cell_83_Template, 2, 0, "mat-header-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](84, AllPrepaymentsComponent_mat_cell_84_Template, 2, 1, "mat-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](85, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, AllPrepaymentsComponent_mat_header_cell_86_Template, 2, 0, "mat-header-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, AllPrepaymentsComponent_mat_cell_87_Template, 2, 1, "mat-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](88, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](89, AllPrepaymentsComponent_mat_header_cell_89_Template, 2, 0, "mat-header-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](90, AllPrepaymentsComponent_mat_cell_90_Template, 2, 1, "mat-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](91, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](92, AllPrepaymentsComponent_mat_header_cell_92_Template, 2, 0, "mat-header-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](93, AllPrepaymentsComponent_mat_cell_93_Template, 7, 9, "mat-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](94, AllPrepaymentsComponent_mat_header_row_94_Template, 1, 0, "mat-header-row", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](95, AllPrepaymentsComponent_mat_row_95_Template, 1, 2, "mat-row", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](96, AllPrepaymentsComponent_mat_cell_96_Template, 2, 1, "mat-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](97, AllPrepaymentsComponent_div_97_Template, 2, 1, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](98, "mat-paginator", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "All Prepayments")("items", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c0))("active_item", "All Prepayments");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](11, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_6__.GenWidgetsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_23__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_7__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtcHJlcGF5bWVudHMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 79841:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/erp-prepayment/modules/prepayments/pages/dialogs/monthly-report-by-status/monthly-report-by-status.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthlyReportByStatusComponent": () => (/* binding */ MonthlyReportByStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_erp_prepayment_data_prepayment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-prepayment/data/prepayment.service */ 94562);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);


















function MonthlyReportByStatusComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", reqStatus_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", reqStatus_r4.name, " ");
} }
function MonthlyReportByStatusComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "status is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MonthlyReportByStatusComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class MonthlyReportByStatusComponent {
    constructor(dialogRef, data, fb, prepaymentsService, snackbar, datepipe) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.prepaymentsService = prepaymentsService;
        this.snackbar = snackbar;
        this.datepipe = datepipe;
        this.reqStatuses = [{ name: "PENDING" }, { name: "POSTED" }];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.downloadLoading = false;
        this.error = '';
    }
    ngOnInit() {
        this.mngForm = this.fb.group({
            status: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            currentDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onSubmit() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
            .set("status", this.mngForm.value.status)
            .set("currentDate", this.datepipe.transform(this.mngForm.value.currentDate, 'yyyy-MM-dd'));
        console.log("params: ", params);
        this.subscription = this.prepaymentsService
            .getMonthlyExcelReportByStatusAndMonth(params)
            .subscribe((response) => {
            const a = document.createElement("a");
            document.body.appendChild(a);
            const blob = new Blob([response.data], {
                type: "octet/stream",
            });
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = "PrepaymentReport.xlsx";
            a.click();
            window.URL.revokeObjectURL(url);
            this.snackbar.showNotification("snackbar-success", "Report generated successfully");
        }, (err) => {
            this.error = err;
            this.snackbar.showNotification("snackbar-danger", "Excel File could not be generated successfully");
        });
    }
}
MonthlyReportByStatusComponent.ɵfac = function MonthlyReportByStatusComponent_Factory(t) { return new (t || MonthlyReportByStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_erp_prepayment_data_prepayment_service__WEBPACK_IMPORTED_MODULE_0__.PrepaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe)); };
MonthlyReportByStatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MonthlyReportByStatusComponent, selectors: [["app-monthly-report-by-status"]], decls: 39, vars: 7, consts: [[1, "addContainer"], [1, "contact-details"], [1, "modalHeader"], [1, "contact-details-name", "mb-1"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "body"], [1, "m-4", 3, "formGroup"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "fill", 1, "example-full-width"], ["formControlName", "status"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "formControlName", "currentDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["align", "end", 1, "example-button-row"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], [3, "value"]], template: function MonthlyReportByStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Generate Monthly Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MonthlyReportByStatusComponent_Template_button_click_5_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "mat-card-content")(10, "div", 6)(11, "form", 7)(12, "div", 8)(13, "div", 9)(14, "mat-form-field", 10)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MonthlyReportByStatusComponent_mat_option_18_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, MonthlyReportByStatusComponent_mat_error_19_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9)(21, "mat-form-field", 10)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "CurrentDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 14)(25, "mat-datepicker-toggle", 15)(26, "mat-datepicker", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, MonthlyReportByStatusComponent_mat_error_28_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 8)(30, "div", 17)(31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MonthlyReportByStatusComponent_Template_button_click_31_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MonthlyReportByStatusComponent_Template_button_click_35_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mngForm.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mngForm.get("currentDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.mngForm.valid);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepicker], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb250aGx5LXJlcG9ydC1ieS1zdGF0dXMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 87734:
/*!*************************************************************************************************************!*\
  !*** ./src/app/erp-prepayment/modules/prepayments/pages/manage-prepayments/manage-prepayments.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagePrepaymentsComponent": () => (/* binding */ ManagePrepaymentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 42258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_app_erp_prepayment_data_prepayment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-prepayment/data/prepayment.service */ 94562);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);

































function ManagePrepaymentsComponent_div_7_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Prepayment Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Start Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "End Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Number of Months is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Debit Account is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_mat_error_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Credit Account is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_form_6_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Closing Balance is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_form_6_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Credit is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_form_6_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Debit is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_form_6_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Month is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_form_6_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Opening Balance is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_form_6_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_form_6_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r51.addToArray(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " + Add Monthly details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r49.bgtForm.invalid);
} }
function ManagePrepaymentsComponent_div_7_div_61_form_6_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_form_6_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r53.updateMonthlyDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " + Update Monthly details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r50.bgtForm.invalid);
} }
function ManagePrepaymentsComponent_div_7_div_61_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 11)(1, "div", 10)(2, "div", 12)(3, "mat-form-field", 13)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Closing Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ManagePrepaymentsComponent_div_7_div_61_form_6_mat_error_7_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 12)(9, "mat-form-field", 13)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ManagePrepaymentsComponent_div_7_div_61_form_6_mat_error_13_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 12)(15, "mat-form-field", 13)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ManagePrepaymentsComponent_div_7_div_61_form_6_mat_error_19_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 12)(21, "mat-form-field", 13)(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ManagePrepaymentsComponent_div_7_div_61_form_6_mat_error_25_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 12)(27, "mat-form-field", 13)(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Opening Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ManagePrepaymentsComponent_div_7_div_61_form_6_mat_error_31_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 86)(33, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, ManagePrepaymentsComponent_div_7_div_61_form_6_button_34_Template, 2, 1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ManagePrepaymentsComponent_div_7_div_61_form_6_button_35_Template, 2, 1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_form_6_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r55.clearForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r12.bgtForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.bgtForm.get("closingBalance").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.bgtForm.get("credit").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.bgtForm.get("debit").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.bgtForm.get("month").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.bgtForm.get("openingBalance").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.addButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.editButton);
} }
function ManagePrepaymentsComponent_div_7_div_61_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_li_21_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r57.onChangeStatus("POSTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 92)(3, "mat-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
function ManagePrepaymentsComponent_div_7_div_61_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "div", 94)(2, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_li_22_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r59.onChangeStatus("PENDING"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_41_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 96)(1, "mat-checkbox", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_41_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return $event ? ctx_r61.masterToggle() : null; })("change", function ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_41_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r63.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r18.selection.hasValue() && ctx_r18.isAllSelected())("indeterminate", ctx_r18.selection.hasValue() && !ctx_r18.isAllSelected())("ngClass", "tbl-checkbox");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_42_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 96)(1, "mat-checkbox", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_mat_cell_42_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function ManagePrepaymentsComponent_div_7_div_61_mat_cell_42_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r67); const row_r64 = restoredCtx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return $event ? ctx_r66.selection.toggle(row_r64) : null; })("change", function ManagePrepaymentsComponent_div_7_div_61_mat_cell_42_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r68.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r64 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r19.selection.isSelected(row_r64))("ngClass", "tbl-checkbox")("aria-label", ctx_r19.checkboxLabel(row_r64));
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_45_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " #");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManagePrepaymentsComponent_div_7_div_61_mat_cell_45_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", row_r69.id);
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "month ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 102)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r71.month, "");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "startDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, row_r72.startDate, "MM/dd/yyyy"), "");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "endDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, row_r73.endDate, "MM/dd/yyyy"), "");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "openingBalance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 102)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 1, row_r74.openingBalance, ".2-2"), "");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "closingBalance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 102)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 1, row_r75.closingBalance, ".2-2"), "");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "credit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 102)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 1, row_r76.credit, ".2-2"), "");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "debit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 102)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 1, row_r77.debit, ".2-2"));
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_69_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0 ", row_r78.status, " ");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_69_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0 ", row_r78.status, " ");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_69_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0 ", row_r78.status, " ");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_69_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0 ", row_r78.status, " ");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_69_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0 ", row_r78.status, " ");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_mat_cell_69_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManagePrepaymentsComponent_div_7_div_61_mat_cell_69_button_2_Template, 3, 1, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ManagePrepaymentsComponent_div_7_div_61_mat_cell_69_button_3_Template, 3, 1, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManagePrepaymentsComponent_div_7_div_61_mat_cell_69_button_4_Template, 3, 1, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ManagePrepaymentsComponent_div_7_div_61_mat_cell_69_button_5_Template, 3, 1, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ManagePrepaymentsComponent_div_7_div_61_mat_cell_69_button_6_Template, 3, 1, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", row_r78.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "POSTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_cell_72_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 121)(1, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_mat_cell_72_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r94); const row_r91 = restoredCtx.$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r93.onEditMonthlyDetails(row_r91); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-feather-icons", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_mat_cell_72_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r94); const i_r92 = restoredCtx.index; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r95.onDeleteMonthlyDetails(i_r92); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-feather-icons", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r39.disableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r39.disableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "trash-2");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_header_row_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
} }
function ManagePrepaymentsComponent_div_7_div_61_mat_row_74_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-row", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_mat_row_74_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r99); const row_r96 = restoredCtx.$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r98.onEditMonthlyDetails(row_r96); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ManagePrepaymentsComponent_div_7_div_61_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return [2, 6, 10, 20, 30, 40, 50, 100]; };
function ManagePrepaymentsComponent_div_7_div_61_mat_paginator_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-paginator", 127);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
} }
function ManagePrepaymentsComponent_div_7_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 9)(3, "div", 10)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Monthly Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ManagePrepaymentsComponent_div_7_div_61_form_6_Template, 38, 8, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 32)(8, "div", 33)(9, "div", 10)(10, "div", 34)(11, "ul", 35)(12, "li", 36)(13, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Monthly Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "li", 37)(16, "label", 38)(17, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function ManagePrepaymentsComponent_div_7_div_61_Template_input_keyup_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r100.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ManagePrepaymentsComponent_div_7_div_61_li_21_Template, 5, 0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ManagePrepaymentsComponent_div_7_div_61_li_22_Template, 5, 0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 42)(24, "ul", 43)(25, "li")(26, "div", 44)(27, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_Template_img_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r101); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](39); return _r17.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "li")(29, "div", 46)(30, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_Template_img_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r101); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](39); return _r17.exportTable("csv"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "li")(32, "div", 48)(33, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_Template_img_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r101); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](39); return _r17.exportTable("json"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "li")(35, "div", 50)(36, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_div_61_Template_img_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r101); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](39); return _r17.exportTable("txt"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-table", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](40, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_41_Template, 2, 4, "mat-header-cell", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ManagePrepaymentsComponent_div_7_div_61_mat_cell_42_Template, 2, 4, "mat-cell", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](43, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_44_Template, 2, 0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, ManagePrepaymentsComponent_div_7_div_61_mat_cell_45_Template, 2, 1, "mat-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](46, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_47_Template, 2, 0, "mat-header-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, ManagePrepaymentsComponent_div_7_div_61_mat_cell_48_Template, 3, 1, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](49, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_50_Template, 2, 0, "mat-header-cell", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, ManagePrepaymentsComponent_div_7_div_61_mat_cell_51_Template, 3, 4, "mat-cell", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](52, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_53_Template, 2, 0, "mat-header-cell", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, ManagePrepaymentsComponent_div_7_div_61_mat_cell_54_Template, 3, 4, "mat-cell", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](55, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_56_Template, 2, 0, "mat-header-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, ManagePrepaymentsComponent_div_7_div_61_mat_cell_57_Template, 4, 4, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](58, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_59_Template, 2, 0, "mat-header-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, ManagePrepaymentsComponent_div_7_div_61_mat_cell_60_Template, 4, 4, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](61, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_62_Template, 2, 0, "mat-header-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, ManagePrepaymentsComponent_div_7_div_61_mat_cell_63_Template, 4, 4, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](64, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_65_Template, 2, 0, "mat-header-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, ManagePrepaymentsComponent_div_7_div_61_mat_cell_66_Template, 4, 4, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](67, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_68_Template, 2, 0, "mat-header-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, ManagePrepaymentsComponent_div_7_div_61_mat_cell_69_Template, 7, 5, "mat-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](70, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, ManagePrepaymentsComponent_div_7_div_61_mat_header_cell_71_Template, 2, 0, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, ManagePrepaymentsComponent_div_7_div_61_mat_cell_72_Template, 5, 8, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, ManagePrepaymentsComponent_div_7_div_61_mat_header_row_73_Template, 1, 0, "mat-header-row", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, ManagePrepaymentsComponent_div_7_div_61_mat_row_74_Template, 1, 2, "mat-row", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, ManagePrepaymentsComponent_div_7_div_61_div_75_Template, 2, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, ManagePrepaymentsComponent_div_7_div_61_mat_paginator_76_Template, 1, 3, "mat-paginator", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.showMonthlyDistibutionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.selectedRows.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.selectedRows.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r11.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r11.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r11.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.showForm);
} }
function ManagePrepaymentsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 11)(6, "div", 10)(7, "div", 12)(8, "mat-form-field", 13)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Prepayment Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ManagePrepaymentsComponent_div_7_mat_error_12_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 12)(14, "mat-form-field", 13)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ManagePrepaymentsComponent_div_7_mat_error_18_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 12)(20, "mat-form-field", 13)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function ManagePrepaymentsComponent_div_7_Template_input_dateChange_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r106.calculateMonthlyPeriods(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "mat-datepicker-toggle", 18)(25, "mat-datepicker", null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ManagePrepaymentsComponent_div_7_mat_error_27_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 12)(29, "mat-form-field", 13)(30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function ManagePrepaymentsComponent_div_7_Template_input_dateChange_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r107); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r108.calculateMonthlyPeriods(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "mat-datepicker-toggle", 18)(34, "mat-datepicker", null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, ManagePrepaymentsComponent_div_7_mat_error_36_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 12)(38, "mat-form-field", 13)(39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Number of Months");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ManagePrepaymentsComponent_div_7_mat_error_42_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 12)(44, "mat-form-field", 13)(45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Debit Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, ManagePrepaymentsComponent_div_7_mat_error_48_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 12)(50, "mat-form-field", 13)(51, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Credit Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, ManagePrepaymentsComponent_div_7_mat_error_54_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 12)(56, "mat-form-field", 13)(57, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, ManagePrepaymentsComponent_div_7_mat_error_60_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, ManagePrepaymentsComponent_div_7_div_61_Template, 77, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 26)(63, "div", 27)(64, "div", 28)(65, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_Template_button_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r107); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r109.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagePrepaymentsComponent_div_7_Template_button_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r107); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r110.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](26);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](35);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.pageFunction, " Prepayment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("prepaymentName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("description").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("startDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("endDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("numberOfPeriods").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("debitAccount").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("creditAccount").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("amount").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.pageFunction !== "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.mngForm.valid)("hidden", ctx_r0.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.pageFunction, " Prepayment ");
} }
const _c1 = function () { return ["Prepayments"]; };
class ManagePrepaymentsComponent {
    constructor(fb, tokenStorageService, snackbar, router, route, accessControlService, dialog, prepaymentsService) {
        this.fb = fb;
        this.tokenStorageService = tokenStorageService;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.accessControlService = accessControlService;
        this.dialog = dialog;
        this.prepaymentsService = prepaymentsService;
        this.displayedColumns = [
            "select",
            "id",
            "month",
            "startDate",
            "endDate",
            "openingBalance",
            "closingBalance",
            "credit",
            "debit",
            "status",
            "actions",
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource([]);
        this.showForm = false;
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.downloadLoading = false;
        this.disableActions = false;
        this.showMonthlyDistibutionForm = false;
        this.pageAction = "Add";
        this.isLoading = true;
        this.hideSubmit = false;
        //***************************************************************************************************************** */
        this.editButton = false;
        this.addButton = true;
        this.selectedRowIndex = -1; // Track the index of the selected row
        this.selectedRows = [];
        this.atleastOneSelected = false;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.SelectionModel(true, []);
    }
    ngOnInit() {
        this.getPage();
        if (this.route.queryParams &&
            typeof this.route.queryParams.subscribe === "function") {
            this.route.queryParams.subscribe((params) => {
                console.log("params: ", params);
                if (params.id) {
                    this.prepaymentId = params.id;
                    console.log("ID:", this.prepaymentId);
                    this.getDataById();
                    this.pageAction = params.action;
                }
            });
            this.showForm = true;
        }
        else {
            this.showForm = true;
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    ngAfterViewInit() {
        if (this.pageAction !== "Add") {
            this.getDataById();
        }
    }
    getDataById() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpParams().set("id", this.prepaymentId);
        this.prepaymentsService
            .getPrepaymentsById(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                if (res) {
                    this.formData = res;
                    this.isLoading = false;
                    if (this.pageAction === "Update") {
                        this.pageFunction = "Update";
                    }
                    else if (this.pageAction === "View") {
                        this.pageFunction = "View";
                        this.disableActions = true;
                    }
                    else if (this.pageAction === "Validate") {
                        this.pageFunction = "Validate";
                        this.disableActions = true;
                    }
                    // this.formData = JSON.parse(params.additionalData);
                    if (this.formData.monthlyReports.length > 0) {
                        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.formData.monthlyReports);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                    }
                    this.showForm = true;
                    console.log("ID:", this.prepaymentId);
                    console.log("Additional Data:", this.formData);
                    this.getPage();
                    console.log("this.formData :", this.formData);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", "No Data Available for the Id provided");
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", "No Monthly Matching these parameters!");
            },
            complete: () => { },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription;
    }
    getPage() {
        if (this.pageFunction === "Add") {
            this.generateEmptyForm();
            this.generateMonthlyForm();
            // this.calculateMonthlyPeriods();
        }
        else if (this.pageFunction === "Update") {
            this.generateFormWithData();
            this.generateMonthlyForm();
            // this.calculateMonthlyPeriods();
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.generateDisabledMonthlyForm();
            this.hideSubmit = true;
        }
        else if (this.pageFunction === "Validate") {
            this.generateFormWithData();
            this.generateDisabledMonthlyForm();
        }
    }
    generateEmptyForm() {
        this.mngForm = this.fb.group({
            amount: [
                0,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
            ],
            creditAccount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            debitAccount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            endDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            numberOfPeriods: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            prepaymentName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            startDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        });
    }
    generateFormWithData() {
        this.mngForm = this.fb.group({
            id: [this.formData.id, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            amount: [
                this.formData.amount,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
            ],
            creditAccount: [this.formData.creditAccount, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            debitAccount: [this.formData.debitAccount, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            description: [this.formData.description, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            endDate: [this.formData.endDate, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            numberOfPeriods: [this.formData.numberOfPeriods, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            prepaymentName: [this.formData.prepaymentName, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            startDate: [this.formData.startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            monthlyReports: [this.formData.monthlyReports],
            // monthlyAmount: [
            //   this.formData.monthlyAmount,
            //   [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
            // ],
            // currentMonthCreditChanged: [false],
            // currentMonthCredit: [0],
        });
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            amount: { value: this.formData.amount, disabled: true },
            creditAccount: { value: this.formData.creditAccount, disabled: true },
            debitAccount: { value: this.formData.debitAccount, disabled: true },
            description: { value: this.formData.description, disabled: true },
            endDate: { value: this.formData.endDate, disabled: true },
            numberOfPeriods: { value: this.formData.numberOfPeriods, disabled: true },
            prepaymentName: { value: this.formData.prepaymentName, disabled: true },
            startDate: { value: this.formData.startDate, disabled: true },
        });
    }
    generateMonthlyForm() {
        this.bgtForm = this.fb.group({
            id: [""],
            closingBalance: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            credit: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            debit: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            month: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            openingBalance: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            status: [""],
        });
    }
    generateDisabledMonthlyForm() {
        this.bgtForm = this.fb.group({
            id: { value: "", disabled: true },
            closingBalance: { value: 0, disabled: true },
            credit: { value: 0, disabled: true },
            debit: { value: 0, disabled: true },
            month: { value: "", disabled: true },
            openingBalance: { value: 0, disabled: true },
            status: { value: "", disabled: true },
        });
    }
    calculateMonthlyPeriods() {
        const startDate = this.mngForm.value.startDate;
        const endDate = this.mngForm.value.endDate;
        if (startDate && endDate) {
            const monthsDiff = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(endDate, startDate);
            const numberOfPeriods = Math.abs(monthsDiff) + 1;
            this.mngForm.patchValue({
                numberOfPeriods: numberOfPeriods,
            });
            return numberOfPeriods;
        }
        this.mngForm.patchValue({
            numberOfPeriods: 0,
        });
        return 0;
    }
    addToArray() {
        if (this.bgtForm.valid) {
            console.log("this.bgtForm: ", this.bgtForm.value);
            const newRecord = {
                closingBalance: this.bgtForm.value.closingBalance,
                credit: this.bgtForm.value.credit,
                debit: this.bgtForm.value.debit,
                month: this.bgtForm.value.month,
                openingBalance: this.bgtForm.value.openingBalance,
                status: "PENDING",
            };
            this.dataSource.data.push(newRecord);
            this.dataSource.data = this.dataSource.data.slice();
            this.bgtForm.reset();
            this.patchItems();
        }
    }
    updateMonthlyDetails() {
        if (this.bgtForm.valid) {
            console.log("this.bgtForm: ", this.bgtForm.value);
            const updatedRecord = {
                id: this.bgtForm.value.id,
                closingBalance: this.bgtForm.value.closingBalance,
                credit: this.bgtForm.value.credit,
                debit: this.bgtForm.value.debit,
                month: this.bgtForm.value.month,
                openingBalance: this.bgtForm.value.openingBalance,
                status: this.bgtForm.value.status,
            };
            this.mngForm.patchValue({
            // currentMonthCreditChanged: true,
            // currentMonthCredit:  this.bgtForm.value.credit,
            });
            this.dataSource.data[this.selectedRowIndex] = updatedRecord;
            this.dataSource.data = this.dataSource.data.slice();
            this.bgtForm.reset();
            this.editButton = false;
            this.addButton = true;
            this.selectedRowIndex = -1; // Reset the selected row index
        }
    }
    onEditMonthlyDetails(row) {
        this.editButton = true;
        this.addButton = false;
        this.selectedRowIndex = this.dataSource.data.indexOf(row);
        this.bgtForm.patchValue({
            id: row.id,
            closingBalance: row.closingBalance,
            credit: row.credit,
            debit: row.debit,
            month: row.month,
            openingBalance: row.openingBalance,
            status: row.status,
        });
        this.patchItems();
    }
    onDeleteMonthlyDetails(index) {
        this.dataSource.data.splice(index, 1);
        this.dataSource.data = this.dataSource.data.slice();
    }
    clearForm() {
        this.bgtForm.reset();
        this.editButton = false;
        this.addButton = true;
        this.selectedRowIndex = -1; // Reset the selected row index
    }
    patchItems() {
        this.mngForm.patchValue({
            monthlyReports: this.dataSource.data,
        });
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
    /** The label for the checkbox on the passed row */
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
    //************************************************************************************************* */
    // private destroy$: Subject<void> = new Subject<void>(); // Create a subject to handle unsubscribe
    onChangeStatus(status) {
        let selectedRecordIds = [];
        this.selectedRows.forEach((element) => {
            selectedRecordIds.push(element.id);
        });
        let updateStatusBody = {
            monthlyReportIds: selectedRecordIds,
            status: status,
        };
        console.log("updateStatusBody: ", updateStatusBody);
        this.prepaymentsService
            .updateMonthlyRecordsStatus(updateStatusBody)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res) {
                    this.snackbar.showNotification("snackbar-success", "Status Updated Successfully");
                    this.getDataById();
                    // Reset selectedRows after the update is complete
                    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.SelectionModel(true, []);
                    // Update the data source with the modified data
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.formData.monthlyReports);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", "Error creating Prepayment");
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err);
            },
            complete: () => { },
        });
    }
    onSubmit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        if (this.pageFunction === "Add") {
            this.prepaymentsService
                .addPrepayments(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res) {
                        this.snackbar.showNotification("snackbar-success", "Prepayment Added Successfully");
                        console.log("res: ", res);
                        this.prepaymentId = res.id;
                        this.pageFunction = "Update";
                        this.getDataById();
                        //this.ngAfterViewInit();
                        // this.router.navigate([
                        //   "/erp-prepayment/prepayments/all-prepayments",
                        // ]);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", "Error creating Prepayment");
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err);
                },
                complete: () => { },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.prepaymentsService
                .updatePrepayments(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res) {
                        this.snackbar.showNotification("snackbar-success", "Prepayment Updated Successfully");
                        this.getDataById();
                        // this.router.navigate([
                        //   "/erp-prepayment/prepayments/all-prepayments",
                        // ]);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                },
                complete: () => { },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription;
        }
    }
    cancel() {
        this.router.navigate(["/erp-prepayment/prepayments/all-prepayments"]);
    }
}
ManagePrepaymentsComponent.ɵfac = function ManagePrepaymentsComponent_Factory(t) { return new (t || ManagePrepaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_2__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_prepayment_data_prepayment_service__WEBPACK_IMPORTED_MODULE_3__.PrepaymentsService)); };
ManagePrepaymentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ManagePrepaymentsComponent, selectors: [["app-manage-prepayments"]], viewQuery: function ManagePrepaymentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 8, vars: 5, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], ["class", "body", 4, "ngIf"], [1, "body"], [1, "header"], [1, "row"], [1, "mx-4", 3, "formGroup"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width", "mb-1"], ["matInput", "", "formControlName", "prepaymentName", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "description", "required", ""], ["matInput", "", "formControlName", "startDate", "required", "", 3, "matDatepicker", "dateChange"], ["matSuffix", "", 3, "for"], ["startDatePicker", ""], ["matInput", "", "formControlName", "endDate", "required", "", 3, "matDatepicker", "dateChange"], ["endDatePicker", ""], ["matInput", "", "type", "number", "formControlName", "numberOfPeriods", "required", ""], ["matInput", "", "formControlName", "debitAccount", "required", ""], ["matInput", "", "formControlName", "creditAccount", "required", ""], ["matInput", "", "formControlName", "amount", "mask", "separator", "thousandSeparator", ",", "required", ""], [1, "row", "m-t-25"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["align", "end", 1, "example-button-row"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "hidden", "click"], ["class", "mx-4", 3, "formGroup", 4, "ngIf"], [1, "mx-4", "my-4"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-2", 4, "matHeaderCellDef"], ["class", "psl-3 tbl-col-width-per-2", 4, "matCellDef"], ["matColumnDef", "month"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-28", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-28", 4, "matCellDef"], ["matColumnDef", "startDate"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "endDate"], ["matColumnDef", "openingBalance"], ["matColumnDef", "closingBalance"], ["matColumnDef", "credit"], ["matColumnDef", "debit"], ["matColumnDef", "status"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions", 4, "ngIf"], ["matInput", "", "formControlName", "closingBalance"], ["matInput", "", "formControlName", "credit"], ["matInput", "", "formControlName", "debit"], ["matInput", "", "formControlName", "month", "readonly", ""], ["matInput", "", "formControlName", "openingBalance"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1", "float-left"], [1, "float-right"], ["class", "btn-space", "mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["matTooltip", "POST", 1, "m-l-10", 3, "click"], ["mat-mini-fab", "", "color", "primary"], [1, "col-white"], ["matTooltip", "PENDING", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-2"], [1, "psl-3", "tbl-col-width-per-2"], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-28"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-28"], ["mat-sort-header", ""], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "disabled", "click"], [3, "icon"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"]], template: function ManagePrepaymentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ManagePrepaymentsComponent_div_7_Template, 73, 18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Manage Prepayment")("items", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c1))("active_item", "Manage Prepayment");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showForm);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatError, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, ngx_mask__WEBPACK_IMPORTED_MODULE_23__.MaskDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_27__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtcHJlcGF5bWVudHMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 2111:
/*!**********************************************************************************!*\
  !*** ./src/app/erp-prepayment/modules/prepayments/prepayments-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrepaymentsRoutingModule": () => (/* binding */ PrepaymentsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_all_prepayments_all_prepayments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/all-prepayments/all-prepayments.component */ 27997);
/* harmony import */ var _pages_manage_prepayments_manage_prepayments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/manage-prepayments/manage-prepayments.component */ 87734);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    //Prepayments
    {
        path: "all-prepayments",
        component: _pages_all_prepayments_all_prepayments_component__WEBPACK_IMPORTED_MODULE_0__.AllPrepaymentsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: { clientName: 'PrepaymentModule', requiredPrivilege: ["All Prepayments"] },
    },
    {
        path: "manage-prepayment",
        component: _pages_manage_prepayments_manage_prepayments_component__WEBPACK_IMPORTED_MODULE_1__.ManagePrepaymentsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: { clientName: 'PrepaymentModule', requiredPrivilege: ["Manage Prepayment"] },
    },
];
class PrepaymentsRoutingModule {
}
PrepaymentsRoutingModule.ɵfac = function PrepaymentsRoutingModule_Factory(t) { return new (t || PrepaymentsRoutingModule)(); };
PrepaymentsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PrepaymentsRoutingModule });
PrepaymentsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PrepaymentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 83260:
/*!**************************************************************************!*\
  !*** ./src/app/erp-prepayment/modules/prepayments/prepayments.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrepaymentsModule": () => (/* binding */ PrepaymentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _prepayments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prepayments-routing.module */ 2111);
/* harmony import */ var _pages_all_prepayments_all_prepayments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/all-prepayments/all-prepayments.component */ 27997);
/* harmony import */ var _pages_manage_prepayments_manage_prepayments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/manage-prepayments/manage-prepayments.component */ 87734);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 55158);
/* harmony import */ var _pages_dialogs_monthly_report_by_status_monthly_report_by_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dialogs/monthly-report-by-status/monthly-report-by-status.component */ 79841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);


































class PrepaymentsModule {
}
PrepaymentsModule.ɵfac = function PrepaymentsModule_Factory(t) { return new (t || PrepaymentsModule)(); };
PrepaymentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PrepaymentsModule });
PrepaymentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _prepayments_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrepaymentsRoutingModule,
            //Additional imports
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBarModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule,
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_22__.MatTableExporterModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__.MatStepperModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_33__.NgxMaskModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PrepaymentsModule, { declarations: [_pages_all_prepayments_all_prepayments_component__WEBPACK_IMPORTED_MODULE_1__.AllPrepaymentsComponent,
        _pages_manage_prepayments_manage_prepayments_component__WEBPACK_IMPORTED_MODULE_2__.ManagePrepaymentsComponent,
        _pages_dialogs_monthly_report_by_status_monthly_report_by_status_component__WEBPACK_IMPORTED_MODULE_6__.MonthlyReportByStatusComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _prepayments_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrepaymentsRoutingModule,
        //Additional imports
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBarModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule,
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_22__.MatTableExporterModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__.MatStepperModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_33__.NgxMaskModule] }); })();


/***/ }),

/***/ 31170:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ 66579:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ 19480:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ 42258:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ 19480);
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ 66579);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ 21807);





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result;

  // Check for the difference of less than month
  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }
    dateLeft.setMonth(dateLeft.getMonth() - sign * difference);

    // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign;

    // Check for cases of one full calendar month
    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }
    result = sign * (difference - Number(isLastMonthNotFull));
  }

  // Prevent negative zero
  return result === 0 ? 0 : result;
}

/***/ }),

/***/ 33200:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 51618:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 21807:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ 33200);
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ 51618);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
}

/***/ }),

/***/ 18325:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ 43445);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ 43445:
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

}]);
//# sourceMappingURL=src_app_erp-prepayment_modules_prepayments_prepayments_module_ts.js.map
"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["default-src_app_erp-hr_hr-lookups_configurations-lookups_employees-lookup_employees-lookup_co-450ef7"],{

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


/***/ }),

/***/ 27979:
/*!*********************************************************************************************************!*\
  !*** ./src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeesLookupComponent": () => (/* binding */ EmployeesLookupComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_hr_data_employee_services_employee_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-hr/data/employee-services/employee-management.service */ 63059);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 26439);






















const _c0 = ["paginator"];
function EmployeesLookupComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function EmployeesLookupComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 35)(2, "div", 36)(3, "div", 37)(4, "div", 38)(5, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function EmployeesLookupComponent_ng_container_17_Template_input_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 37)(8, "div", 38)(9, "div", 41)(10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployeesLookupComponent_ng_container_17_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.proceed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "done_all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r1.selection.hasValue());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("auth-spinner", ctx_r1.multimodifyloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.multimodifyloading);
} }
function EmployeesLookupComponent_mat_header_cell_22_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EmployeesLookupComponent_mat_header_cell_22_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r23.masterToggle() : null; })("change", function EmployeesLookupComponent_mat_header_cell_22_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "tbl-col-width-per-8");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r4.selection.hasValue() && ctx_r4.isAllSelected())("indeterminate", ctx_r4.selection.hasValue() && !ctx_r4.isAllSelected())("ngClass", "tbl-checkbox");
} }
function EmployeesLookupComponent_mat_cell_23_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 44)(1, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployeesLookupComponent_mat_cell_23_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function EmployeesLookupComponent_mat_cell_23_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const row_r26 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r28.selection.toggle(row_r26) : null; })("change", function EmployeesLookupComponent_mat_cell_23_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "tbl-col-width-per-8");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r5.selection.isSelected(row_r26))("ngClass", "tbl-checkbox")("aria-label", ctx_r5.checkboxLabel(row_r26));
} }
function EmployeesLookupComponent_mat_header_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " PF No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EmployeesLookupComponent_mat_cell_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r31.empNo, " ");
} }
function EmployeesLookupComponent_mat_header_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EmployeesLookupComponent_mat_cell_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", row_r32.firstName, " ", row_r32.middleName, " ", row_r32.lastName, " ");
} }
function EmployeesLookupComponent_mat_header_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EmployeesLookupComponent_mat_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r33.departmentName, " ");
} }
function EmployeesLookupComponent_mat_header_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " National ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EmployeesLookupComponent_mat_cell_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r34.nationalId, " ");
} }
function EmployeesLookupComponent_mat_header_row_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-header-row");
} }
function EmployeesLookupComponent_mat_row_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-row", 53);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("cursor", "pointer");
} }
function EmployeesLookupComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("colspan", ctx_r16.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r16.input, "\"");
} }
function EmployeesLookupComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-bar", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EmployeesLookupComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-spinner", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 40);
} }
class EmployeesLookupComponent {
    constructor(dialogRef, data, fb, snackbar, employeeAPI) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.employeeAPI = employeeAPI;
        this.displayedColumns = [
            "select",
            "empNo",
            "fullName",
            "currDep",
            "nationalId",
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(false, []);
        this.selectedRows = [];
        this.atleastOneSelected = false;
        this.dataSourceFilteredList = [];
        this.currenciesArray = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.downloadLoading = false;
        this.isLoading = true;
        //  **************************************************************************
        this.currentPage = 0;
        this.totalPages = 0;
        this.totalItems = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [2, 5, 10, 20, 30, 40, 50, 100];
    }
    ngOnInit() {
        if (this.data.action === "SingleEmployee") {
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(false, []);
        }
        else {
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(true, []);
        }
        this.getData();
    }
    ngAfterViewInit() {
        console.log("Finally: ", this.dataSourceFilteredList);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    filter() {
        //let storeId = [1, 2, 3];
        this.dataSource.data.forEach((element) => {
            this.currenciesArray.forEach((item) => {
                if (item === element.id) {
                    // this.dataSourceFilteredList.push(this.dataSource.data.indexOf(element));
                    this.selection.select(element);
                }
            });
        });
        console.log("dataSourceFilteredList ", this.dataSourceFilteredList);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.input = filterValue;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    //******************************************************************************************************
    //Select expense
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
    proceed() {
        this.dialogRef.close({ event: "close", data: this.selectedRows });
        //   console.log(data);
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.selectedRows });
    }
    confirmAdd() { }
    getData(page, size) {
        this.isLoading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        let params = { status: "APPROVED" };
        this.employeeAPI
            .readByStatus(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.res :", res);
                if (res.statusCode === 302) {
                    this.data = res;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.data.entity);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    this.totalItems = this.data.totalItems;
                    this.currentPage = this.data.currentPage;
                    this.totalPages = this.data.totalPages;
                    console.log("this.data :", this.data);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
                this.isLoading = false;
            },
            complete: () => { },
        });
    }
    onPageChange(event) {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        this.getData(this.currentPage, this.pageSize);
    }
}
EmployeesLookupComponent.ɵfac = function EmployeesLookupComponent_Factory(t) { return new (t || EmployeesLookupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_erp_hr_data_employee_services_employee_management_service__WEBPACK_IMPORTED_MODULE_1__.EmployeeService)); };
EmployeesLookupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EmployeesLookupComponent, selectors: [["app-employees-lookup"]], viewQuery: function EmployeesLookupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 42, vars: 11, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/em.png", "width", "30px", "height", "30px", "alt", ""], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [4, "ngIf"], [1, "body"], [1, "table-responsi", "m-t-5"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "empNo"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matCellDef"], ["matColumnDef", "fullName"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-35", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-35", 4, "matCellDef"], ["matColumnDef", "currDep"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matCellDef"], ["matColumnDef", "nationalId"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "pageSizeOptions", "length", "pageIndex", "pageSize", "page"], [1, "d-flex", "justify-content-center"], ["src", "assets/images/loading.gif", 2, "display", "block", "margin", "auto", "width", "60px", "height", "60px"], [1, "table-header", "py-3", 2, "background-color", "rgba(219, 218, 218, 0.836)", "margin", "5px"], [1, "row"], [1, "col-6", "px-4"], [1, "mx-auto"], ["placeholder", "Filter...", 1, "pull-left", "search", "form-control", 3, "keyup"], ["input", ""], [1, "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "primary", 3, "disabled", "click"], [1, "col-white"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-35"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-35"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-30"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-30"], ["matRipple", ""], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function EmployeesLookupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Select Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployeesLookupComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, EmployeesLookupComponent_div_14_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, EmployeesLookupComponent_ng_container_17_Template, 13, 4, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-table", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, EmployeesLookupComponent_mat_header_cell_22_Template, 2, 4, "mat-header-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, EmployeesLookupComponent_mat_cell_23_Template, 2, 4, "mat-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, EmployeesLookupComponent_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, EmployeesLookupComponent_mat_cell_26_Template, 2, 1, "mat-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](27, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, EmployeesLookupComponent_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, EmployeesLookupComponent_mat_cell_29_Template, 2, 3, "mat-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](30, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, EmployeesLookupComponent_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, EmployeesLookupComponent_mat_cell_32_Template, 2, 1, "mat-cell", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](33, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, EmployeesLookupComponent_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, EmployeesLookupComponent_mat_cell_35_Template, 2, 1, "mat-cell", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, EmployeesLookupComponent_mat_header_row_36_Template, 1, 0, "mat-header-row", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, EmployeesLookupComponent_mat_row_37_Template, 1, 2, "mat-row", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, EmployeesLookupComponent_tr_38_Template, 3, 2, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, EmployeesLookupComponent_div_39_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, EmployeesLookupComponent_div_40_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-paginator", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function EmployeesLookupComponent_Template_mat_paginator_page_41_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("length", ctx.totalItems)("pageIndex", ctx.currentPage)("pageSize", ctx.pageSize);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_14__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZXMtbG9va3VwLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_erp-hr_hr-lookups_configurations-lookups_employees-lookup_employees-lookup_co-450ef7.js.map
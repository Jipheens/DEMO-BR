"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-procurement_modules_needs_needs_module_ts"],{

/***/ 64608:
/*!************************************************************!*\
  !*** ./src/app/erp-budget/data/services/budget.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetsService": () => (/* binding */ BudgetsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class BudgetsService {
    constructor(http) {
        this.http = http;
    }
    getBudgets() {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/all`;
        return this.http.get(BudgetManagementUrl);
    }
    getBudgetsByHodAndFinanceStatus(params) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/fetchbyhodandfinancestatus`;
        return this.http.get(BudgetManagementUrl, { params });
    }
    getBudgetsByStatus(params) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/fetchbyStatus`;
        return this.http.get(BudgetManagementUrl, { params });
    }
    getBudgetsByCostCenterCodeAndStatus(params) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/fetchbycostcentercodeandstatus`;
        return this.http.get(BudgetManagementUrl, { params });
    }
    getBudgetsByYear(params) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/all-by-year`;
        return this.http.get(BudgetManagementUrl, { params });
    }
    getBudgetsById(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/find/by/id`, { params });
    }
    getBudget() {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/all`;
        return this.http.get(BudgetManagementUrl);
    }
    addBudget(data) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/create`;
        return this.http.post(BudgetManagementUrl, data);
    }
    extractBulkBudgets(params, data) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/excel`;
        return this.http.post(BudgetManagementUrl, data, { params });
    }
    addBudgets(data) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/create/bulk`;
        return this.http.post(BudgetManagementUrl, data);
    }
    updateBudgets(BudgetDetails) {
        const updateBudgetUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/expenses/update-expense`;
        return this.http.put(updateBudgetUrl, BudgetDetails);
    }
    updateBudgetExps(BudgetDetails) {
        const updateBudgetUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/update-expense`;
        return this.http.put(updateBudgetUrl, BudgetDetails);
    }
    deleteBudgetTemporarily(params) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/delete`;
        return this.http.delete(BudgetManagementUrl, { params });
    }
    validateBudgets(params, dataToValidate) {
        const imprestUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/update/state`;
        return this.http.put(imprestUrl, dataToValidate, { params });
    }
    budgetCheck(data) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/check`;
        return this.http.post(BudgetManagementUrl, data);
    }
    uploadExcelPath(excelFilePath) {
        return this.http.post('http://localhost:9191/generateBudget', { excelFilePath });
    }
    generateBudget(file) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(`http://localhost:9191/generateBudget`, formData);
    }
}
BudgetsService.ɵfac = function BudgetsService_Factory(t) { return new (t || BudgetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BudgetsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BudgetsService, factory: BudgetsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 11644:
/*!******************************************************************!*\
  !*** ./src/app/erp-finance/data/services/gl-accounts.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlAccountsService": () => (/* binding */ GlAccountsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class GlAccountsService {
    constructor(http) {
        this.http = http;
    }
    getGLAccounts() {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/gls/all`;
        return this.http.get(GLAccountManagementUrl);
    }
    getGLAccountsByStatus(params) {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/gls/fetchbyStatus`;
        return this.http.get(GLAccountManagementUrl, { params });
    }
    getGLAccountsByFilterParameters(params) {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/gls/findByFilter`;
        return this.http.get(GLAccountManagementUrl, { params });
    }
    getGLAccountsById(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/gls/find/by/id`, { params });
    }
    getGLAccountByGlName(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/gls/find/by/acdescription`, { params });
    }
    getGLAccountByExpAndCostCenter(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/expenses/find/by/costcenter/and/expensecode`, { params });
    }
    addGLAccount(data) {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/gls/create`;
        return this.http.post(GLAccountManagementUrl, data);
    }
    addGLAccounts(data) {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/gls/create/mock/bulk`;
        return this.http.post(GLAccountManagementUrl, data);
    }
    addNewGLAccounts(data) {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/gls/map-budget`;
        return this.http.post(GLAccountManagementUrl, data);
    }
    updateGLAccounts(GLAccountDetails) {
        const updateGLAccountUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/gls/update`;
        return this.http.put(updateGLAccountUrl, GLAccountDetails);
    }
    deleteGLAccountTemporarily(params) {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/gls/delete`;
        return this.http.delete(GLAccountManagementUrl, { params });
    }
    validateAccounts(dataToValidate) {
        const imprestUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/gls/update/state`;
        return this.http.put(imprestUrl, dataToValidate);
    }
    // ********************************************************************************************************************
    initiateCoreSynchronization() {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/gls/balances/synchronize`;
        return this.http.post(GLAccountManagementUrl, {});
    }
}
GlAccountsService.ɵfac = function GlAccountsService_Factory(t) { return new (t || GlAccountsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
GlAccountsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GlAccountsService, factory: GlAccountsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 92878:
/*!***************************************************************!*\
  !*** ./src/app/erp-procurement/data/services/need.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeedService": () => (/* binding */ NeedService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class NeedService {
    constructor(http) {
        this.http = http;
    }
    getNeeds() {
        const NeedssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/requisition/need/all`;
        return this.http.get(NeedssUrl);
    }
    getNeedsByStatus(params) {
        const NeedssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/requisition/need/all/by/hod_status/procurement_status`;
        return this.http.get(NeedssUrl, {
            params: params,
        });
    }
    getNeedsById(params) {
        const NeedssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/requisition/need/find/by/id`;
        return this.http.get(NeedssUrl, { params: params, });
    }
    addNeeds(data) {
        const NeedssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/requisition/need/add`;
        return this.http.post(NeedssUrl, data);
    }
    updateNeeds(NeedsDetails) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/requisition/need/update`;
        return this.http.put(updateBillUrl, NeedsDetails);
    }
    deleteNeedsTemporarily(params) {
        const NeedssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/requisition/need/delete`;
        return this.http.delete(NeedssUrl, { params });
    }
    validateNeed(params) {
        const API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/requisition/need/update/state`;
        return this.http.put(API_URL, {}, {
            params: params,
        });
    }
    // ********************************************************************************************************************
    donwloadRequsitionReport(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/report/download/need_requisition`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Hey this is download Requsitition Report", response);
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
}
NeedService.ɵfac = function NeedService_Factory(t) { return new (t || NeedService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
NeedService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NeedService, factory: NeedService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 84325:
/*!************************************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/needs/dialogs/validate-need/validate-need.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidateNeedComponent": () => (/* binding */ ValidateNeedComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_erp_procurement_data_services_need_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-procurement/data/services/need.service */ 92878);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);


















function ValidateNeedComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-bar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ValidateNeedComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateNeedComponent_div_31_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 19)(6, "div", 20)(7, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateNeedComponent_div_31_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.return(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 19)(10, "div", 20)(11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateNeedComponent_div_31_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.canVerify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.canVerify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.canVerify);
} }
function ValidateNeedComponent_form_32_div_1_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Reason is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ValidateNeedComponent_form_32_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 26)(2, "mat-form-field", 27)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Reason for rejection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ValidateNeedComponent_form_32_div_1_mat_error_6_Template, 2, 0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 30)(8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateNeedComponent_form_32_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.changeStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.statusForm.get("reason").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r7.statusForm.invalid);
} }
function ValidateNeedComponent_form_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ValidateNeedComponent_form_32_div_1_Template, 10, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.statusForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.rejected);
} }
class ValidateNeedComponent {
    constructor(dialogRef, data, fb, snackbar, tokenCookieService, needService, router, datepipe) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.tokenCookieService = tokenCookieService;
        this.needService = needService;
        this.router = router;
        this.datepipe = datepipe;
        this.horizontalPosition = "end";
        this.verticalPosition = "top";
        this.rejected = false;
        this.approved = false;
        this.canVerify = false;
        this.validationIsLoading = false;
        this.hideValidation = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.downloadLoading = false;
        this.Data = this.data.data;
    }
    ngOnInit() {
        this.currentUser = this.tokenCookieService.getUser().username;
        if (this.data.action === 'deletedOrRejected') {
            this.hideValidation = true;
        }
        this.postedBy = this.Data.postedBy;
        this.canVerify = true;
        // if (this.postedBy === this.currentUser) {
        //   this.snackbar.showNotification("snackbar-danger", "You cannot verify this transaction!");
        //   this.canVerify = false;
        // } else {
        //   this.canVerify = true;
        // }
        console.log("this.billDet: ", this.data);
        console.log("Data: ", this.Data);
        this.statusForm = this.createStatusForm();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    createStatusForm() {
        return this.fb.group({
            reason: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    reject() {
        this.rejected = true;
        this.approved = false;
        this.status = "REJECTED";
        if (!this.statusForm.value == null) {
            this.changeStatus();
        }
    }
    return() {
        this.rejected = true;
        this.approved = false;
        this.status = "RETURNED";
        if (!this.statusForm.value == null) {
            this.changeStatus();
        }
    }
    approve() {
        this.approved = true;
        this.rejected = false;
        this.status = "APPROVED";
        this.statusForm.patchValue({
            reason: "NA"
        });
        this.changeStatus();
    }
    changeStatus() {
        this.validationIsLoading = true;
        let todayDate = this.datepipe.transform(new Date(), "yyyy-MM-ddTHH:mm:ss");
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams()
            .set("id", this.Data.id)
            .set("userType", this.data.userType)
            .set("action", this.status)
            .set("reason", this.statusForm.value.reason);
        console.log("Form = ", params);
        this.needService
            .validateNeed(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    this.snackbar.showNotification("snackbar-success", "Need validated successfully");
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                console.log("err = ", err);
                this.snackbar.showNotification("snackbar-danger", "Server Error: " + err.message);
            },
            complete: () => {
                this.dialogRef.close();
                this.router.navigate(["/erp-procurement/needs/all-needs"]);
            }
        });
    }
}
ValidateNeedComponent.ɵfac = function ValidateNeedComponent_Factory(t) { return new (t || ValidateNeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_need_service__WEBPACK_IMPORTED_MODULE_2__.NeedService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe)); };
ValidateNeedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ValidateNeedComponent, selectors: [["app-validate-need"]], decls: 33, vars: 6, consts: [[1, "addContainer"], [1, "contact-details"], ["class", "m-10", 4, "ngIf"], [1, "modalHeader"], [1, "contact-details-name", "mb-1"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "row"], [1, "col", "text-center", "my-2"], [1, "fas", "fa-check-circle", "fa-6x", "col-green"], [1, "col-8", "my-2"], [1, "dl-horizontal"], [1, "pull-left", "me-2"], [1, ""], ["class", "row", "style", "margin-top: 10px", 4, "ngIf"], ["class", "register-form m-4", 3, "formGroup", 4, "ngIf"], [1, "m-10"], ["color", "primary", "mode", "indeterminate"], [1, "row", 2, "margin-top", "10px"], [1, "col-4"], [1, "row", "m-1"], ["type", "button", 1, "badge", "badge-solid-green", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], ["type", "button", 1, "badge", "badge-solid-brown", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], ["type", "button", 1, "badge", "badge-solid-red", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], [1, "register-form", "m-4", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "col-10", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "reason", "matInput", ""], [4, "ngIf"], [1, "col-2", "d-flex", "align-items-center", "justify-content-center", "mb-2"], ["mat-raised-button", "", "color", "primary", "tabindex", "-1", 3, "disabled", "click"]], template: function ValidateNeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ValidateNeedComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Validate Need");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateNeedComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "mat-card-content")(12, "div", 7)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "dl", 11)(17, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "NeedCode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "NeedTitle:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ValidateNeedComponent_div_31_Template, 13, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ValidateNeedComponent_form_32_Template, 2, 2, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.validationIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.Data.needCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.Data.needTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.Data.needDescription, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideValidation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxpZGF0ZS1uZWVkLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 96768:
/*!***********************************************************************!*\
  !*** ./src/app/erp-procurement/modules/needs/needs-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeedsRoutingModule": () => (/* binding */ NeedsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_all_needs_all_needs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/all-needs/all-needs.component */ 26431);
/* harmony import */ var _pages_manage_need_manage_need_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/manage-need/manage-need.component */ 99719);
/* harmony import */ var _data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: "all-needs",
        component: _pages_all_needs_all_needs_component__WEBPACK_IMPORTED_MODULE_0__.AllNeedsComponent,
        canActivate: [_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: { clientName: 'ProcurementModule', requiredPrivilege: ["All Needs"] },
    },
    {
        path: "manage-need",
        component: _pages_manage_need_manage_need_component__WEBPACK_IMPORTED_MODULE_1__.ManageNeedComponent,
        canActivate: [_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: { clientName: 'ProcurementModule', requiredPrivilege: ["Manage Needs"] },
    },
];
class NeedsRoutingModule {
}
NeedsRoutingModule.ɵfac = function NeedsRoutingModule_Factory(t) { return new (t || NeedsRoutingModule)(); };
NeedsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NeedsRoutingModule });
NeedsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NeedsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 48953:
/*!***************************************************************!*\
  !*** ./src/app/erp-procurement/modules/needs/needs.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeedsModule": () => (/* binding */ NeedsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _needs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./needs-routing.module */ 96768);
/* harmony import */ var _pages_all_needs_all_needs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/all-needs/all-needs.component */ 26431);
/* harmony import */ var _pages_manage_need_manage_need_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/manage-need/manage-need.component */ 99719);
/* harmony import */ var _dialogs_validate_need_validate_need_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/validate-need/validate-need.component */ 84325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/badge */ 70178);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 43672);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/slider */ 61859);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 79091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);











































class NeedsModule {
}
NeedsModule.ɵfac = function NeedsModule_Factory(t) { return new (t || NeedsModule)(); };
NeedsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: NeedsModule });
NeedsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _needs_routing_module__WEBPACK_IMPORTED_MODULE_0__.NeedsRoutingModule,
            //Additional imports
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__.DashboardModule,
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
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__.MatStepperModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_33__.NgxMaskModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__.MatChipsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__.MatBadgeModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__.MatAutocompleteModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_38__.MatListModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__.MatSidenavModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__.MatExpansionModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__.MatSliderModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__.NgbModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NeedsModule, { declarations: [_pages_all_needs_all_needs_component__WEBPACK_IMPORTED_MODULE_1__.AllNeedsComponent,
        _pages_manage_need_manage_need_component__WEBPACK_IMPORTED_MODULE_2__.ManageNeedComponent,
        _dialogs_validate_need_validate_need_component__WEBPACK_IMPORTED_MODULE_3__.ValidateNeedComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _needs_routing_module__WEBPACK_IMPORTED_MODULE_0__.NeedsRoutingModule,
        //Additional imports
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__.DashboardModule,
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
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__.MatStepperModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_33__.NgxMaskModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__.MatChipsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__.MatBadgeModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__.MatAutocompleteModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_38__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__.MatSidenavModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__.MatExpansionModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__.MatSliderModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__.NgbModule] }); })();


/***/ }),

/***/ 26431:
/*!**************************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/needs/pages/all-needs/all-needs.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllNeedsComponent": () => (/* binding */ AllNeedsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_procurement_data_services_need_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-procurement/data/services/need.service */ 92878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 9748);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ 26439);































const _c0 = ["paginator"];
function AllNeedsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-bar", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const requisitionType_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", requisitionType_r40.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", requisitionType_r40.name, " ");
} }
function AllNeedsComponent_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", reqStatus_r41.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", reqStatus_r41.name, " ");
} }
function AllNeedsComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select HOD Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", reqStatus_r42.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", reqStatus_r42.name, " ");
} }
function AllNeedsComponent_mat_error_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select Procurement Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_error_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select From Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_error_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select To Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_header_cell_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_cell_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r43.id);
} }
function AllNeedsComponent_mat_header_cell_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "RequisitionCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_cell_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r44.needCode, "");
} }
function AllNeedsComponent_mat_header_cell_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "RequisitionTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_cell_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r45.needTitle, " ");
} }
function AllNeedsComponent_mat_header_cell_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "RequisitionDescription");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_cell_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r46.needDescription, " ");
} }
function AllNeedsComponent_mat_header_cell_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "PostedBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_cell_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r47.postedBy, " ");
} }
function AllNeedsComponent_mat_header_cell_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "PostedTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_cell_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, row_r48.postedTime, "MM/dd/yyyy"), "");
} }
function AllNeedsComponent_mat_header_cell_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_cell_115_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r49.status, " ");
} }
function AllNeedsComponent_mat_cell_115_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r49.status, " ");
} }
function AllNeedsComponent_mat_cell_115_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r49.status, " ");
} }
function AllNeedsComponent_mat_cell_115_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r49.status, " ");
} }
function AllNeedsComponent_mat_cell_115_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r49.status, " ");
} }
function AllNeedsComponent_mat_cell_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AllNeedsComponent_mat_cell_115_button_2_Template, 3, 1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AllNeedsComponent_mat_cell_115_button_3_Template, 3, 1, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AllNeedsComponent_mat_cell_115_button_4_Template, 3, 1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AllNeedsComponent_mat_cell_115_button_5_Template, 3, 1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AllNeedsComponent_mat_cell_115_button_6_Template, 3, 1, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", row_r49.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function AllNeedsComponent_mat_header_cell_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "HOD Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_cell_118_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r60.hodStatus, " ");
} }
function AllNeedsComponent_mat_cell_118_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r60.hodStatus, " ");
} }
function AllNeedsComponent_mat_cell_118_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r60.hodStatus, " ");
} }
function AllNeedsComponent_mat_cell_118_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r60.hodStatus, " ");
} }
function AllNeedsComponent_mat_cell_118_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r60.hodStatus, " ");
} }
function AllNeedsComponent_mat_cell_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_mat_cell_118_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AllNeedsComponent_mat_cell_118_button_2_Template, 3, 1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AllNeedsComponent_mat_cell_118_button_3_Template, 3, 1, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AllNeedsComponent_mat_cell_118_button_4_Template, 3, 1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AllNeedsComponent_mat_cell_118_button_5_Template, 3, 1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AllNeedsComponent_mat_cell_118_button_6_Template, 3, 1, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", row_r60.hodStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function AllNeedsComponent_mat_header_cell_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Procurement Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_cell_121_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r73.procurementStatus, " ");
} }
function AllNeedsComponent_mat_cell_121_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r73.procurementStatus, " ");
} }
function AllNeedsComponent_mat_cell_121_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r73.procurementStatus, " ");
} }
function AllNeedsComponent_mat_cell_121_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r73.procurementStatus, " ");
} }
function AllNeedsComponent_mat_cell_121_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r73.procurementStatus, " ");
} }
function AllNeedsComponent_mat_cell_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_mat_cell_121_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AllNeedsComponent_mat_cell_121_button_2_Template, 3, 1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AllNeedsComponent_mat_cell_121_button_3_Template, 3, 1, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AllNeedsComponent_mat_cell_121_button_4_Template, 3, 1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AllNeedsComponent_mat_cell_121_button_5_Template, 3, 1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AllNeedsComponent_mat_cell_121_button_6_Template, 3, 1, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", row_r73.procurementStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function AllNeedsComponent_mat_header_cell_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "DownloadReport");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_cell_124_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_mat_cell_124_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_mat_cell_124_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90); const row_r86 = restoredCtx.$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r89.downloadReqReport(row_r86); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A0 Download.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r33.downloadLoading);
} }
function AllNeedsComponent_mat_header_cell_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllNeedsComponent_mat_cell_127_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 104)(1, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_mat_cell_127_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllNeedsComponent_mat_cell_127_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r95); const row_r91 = restoredCtx.$implicit; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r94.editNeed(row_r91); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-feather-icons", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_mat_cell_127_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllNeedsComponent_mat_cell_127_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r95); const row_r91 = restoredCtx.$implicit; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r97.validateNeed(row_r91); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-feather-icons", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_mat_cell_127_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllNeedsComponent_mat_cell_127_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r95); const row_r91 = restoredCtx.$implicit; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r99.viewNeed(row_r91); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-feather-icons", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_mat_cell_127_Template_button_click_7_listener($event) { return $event.stopPropagation(); })("click", function AllNeedsComponent_mat_cell_127_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r95); const row_r91 = restoredCtx.$implicit; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r101.deleteNeed(row_r91.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-feather-icons", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", row_r91.hodStatus === "APPROVED" || row_r91.procurementStatus === "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "check-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "trash-2");
} }
function AllNeedsComponent_mat_header_row_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
} }
function AllNeedsComponent_mat_row_129_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-row", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_mat_row_129_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r104); const row_r102 = restoredCtx.$implicit; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r103.viewNeed(row_r102); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllNeedsComponent_tr_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("colspan", ctx_r38.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r38.input, "\"");
} }
function AllNeedsComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-spinner", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 40);
} }
const _c1 = function () { return ["Requisitions"]; };
class AllNeedsComponent {
    constructor(router, snackbar, needService, fb, datepipe, tokenStorageService) {
        this.router = router;
        this.snackbar = snackbar;
        this.needService = needService;
        this.fb = fb;
        this.datepipe = datepipe;
        this.tokenStorageService = tokenStorageService;
        this.displayedColumns = [
            "id",
            "needCode",
            "needTitle",
            "needDescription",
            "status",
            "postedBy",
            "postedTime",
            "hodApproval",
            "procurementApproval",
            "downloadNeedReport",
            "action",
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(true, []);
        this.isLoading = true;
        this.pageFunction = "Update";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.downloadLoading = false;
        this.currentDate = new Date();
        this.dateTomorrow = new Date(this.currentDate.getTime() + 1 * 24 * 60 * 60 * 1000);
        this.oneWeekAgo = new Date(this.currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        this.reqStatuses = [
            { name: "PENDING" },
            { name: "APPROVED" },
            { name: "RETURNED" },
            { name: "REJECTED" },
        ];
        this.requisitionTypes = [{ name: "RFQ" }, { name: "RFP" }];
        // getData() {
        //   this.dataSource = new MatTableDataSource([]);
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        //   this.isLoading = true;
        //   let fromDate = this.datepipe.transform(
        //     this.Form.value.fromDate,
        //     "YYYY-MM-dd"
        //   );
        //   let toDate = this.datepipe.transform(
        //     this.Form.value.toDate,
        //     "YYYY-MM-dd"
        //   );
        //   const params = new HttpParams()
        //    .set("needType", this.Form.value.requisitionType)
        //     .set("hod_status", this.Form.value.hodStatus)
        //     .set("procurement_status", this.Form.value.procurementStatus)
        //     .set("fromDate", fromDate)
        //     .set("toDate", toDate)
        //   this.needService.getNeedsByStatus(params).pipe(takeUntil(this.destroy$)).subscribe(
        //     {
        //       next: (res) => {
        //         if (res.entity) {
        //           this.data = res.entity;
        //           this.isLoading = false;
        //           this.dataSource = new MatTableDataSource(this.data);
        //           this.dataSource.paginator = this.paginator;
        //           this.dataSource.sort = this.sort;
        //           console.log("this.data :", this.data)
        //         } else {
        //           this.snackbar.showNotification(
        //             "snackbar-danger",
        //             "No Data Available"
        //           )
        //         }
        //       },
        //       error: (err) => {
        //         this.snackbar.showNotification(
        //           "snackbar-danger",
        //           "No Needs Matching these parameters!"
        //         );
        //       },
        //       complete: () => {
        //       }
        //     }
        //   ), Subscription;
        // }
        this.currentPage = 0;
        this.totalPages = 0;
        this.totalItems = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [2, 5, 10, 20, 30, 40, 50, 100];
        this.sampleRecords = [
            {
                id: 1,
                NeedCode: "ABC123",
                operatingUnit: "Operating Unit 1",
                description: "Description 1",
                status: "Incomplete",
                preparer: "Preparer 1",
                number: "Number 1",
                total: 100,
                currency: "USD",
                requester: "Requester 1",
                organization: "Organization 1",
                location: "Location 1",
                supplierName: "Supplier 1",
                supplierPhone: "1234567890",
                createdDate: "2023-06-15T13:05:41.206224",
                NeedAttachments: [
                    {
                        file: "currFile1",
                        filename: "currFilename1",
                        filetype: "currFiletype1",
                    },
                    {
                        file: "currFile2",
                        filename: "currFilename2",
                        filetype: "currFiletype2",
                    },
                ],
                NeedItems: [
                    {
                        type: "Type 1",
                        category: "Category 1",
                        itemDescription: "Item Description 1",
                        unitOfMeasure: "Unit 1",
                        quantity: "10",
                        unitPrice: "10",
                        needByDate: "2023-06-14",
                        accountNumber: "Account 1",
                        taxRate: "10%",
                        taxName: "Tax 1",
                    },
                ],
            },
            {
                id: 2,
                NeedCode: "DEF456",
                operatingUnit: "Operating Unit 2",
                description: "Description 2",
                status: "Approved",
                preparer: "Preparer 2",
                number: "Number 2",
                total: 200,
                currency: "EUR",
                requester: "Requester 2",
                organization: "Organization 2",
                location: "Location 2",
                supplierName: "Supplier 2",
                supplierPhone: "9876543210",
                createdDate: "2023-06-15T13:05:41.206224",
                NeedAttachments: [
                    {
                        file: "currFile3",
                        filename: "currFilename3",
                        filetype: "currFiletype3",
                    },
                    {
                        file: "currFile4",
                        filename: "currFilename4",
                        filetype: "currFiletype4",
                    },
                ],
                NeedItems: [
                    {
                        type: "Type 2",
                        category: "Category 2",
                        itemDescription: "Item Description 2",
                        unitOfMeasure: "Unit 2",
                        quantity: "20",
                        unitPrice: "20",
                        needByDate: "2023-06-15",
                        accountNumber: "Account 2",
                        taxRate: "15%",
                        taxName: "Tax 2",
                    },
                ],
            },
            {
                id: 3,
                NeedCode: "GHI789",
                operatingUnit: "Operating Unit 3",
                description: "Description 3",
                status: "Rejected",
                preparer: "Preparer 3",
                number: "Number 3",
                total: 300,
                currency: "GBP",
                requester: "Requester 3",
                organization: "Organization 3",
                location: "Location 3",
                supplierName: "Supplier 3",
                supplierPhone: "0123456789",
                createdDate: "2023-06-15T13:05:41.206224",
                NeedAttachments: [
                    {
                        file: "currFile5",
                        filename: "currFilename5",
                        filetype: "currFiletype5",
                    },
                    {
                        file: "currFile6",
                        filename: "currFilename6",
                        filetype: "currFiletype6",
                    },
                ],
                NeedItems: [
                    {
                        type: "Type 3",
                        category: "Category 3",
                        itemDescription: "Item Description 3",
                        unitOfMeasure: "Unit 3",
                        quantity: "30",
                        unitPrice: "30",
                        needByDate: "2023-06-16",
                        accountNumber: "Account 3",
                        taxRate: "20%",
                        taxName: "Tax 3",
                    },
                ],
            },
            {
                id: 3,
                NeedCode: "GHI789",
                operatingUnit: "Operating Unit 3",
                description: "Description 3",
                status: "Returned",
                preparer: "Preparer 3",
                number: "Number 3",
                total: 300,
                currency: "GBP",
                requester: "Requester 3",
                organization: "Organization 3",
                location: "Location 3",
                supplierName: "Supplier 3",
                supplierPhone: "0123456789",
                createdDate: "2023-06-15T13:05:41.206224",
                NeedAttachments: [
                    {
                        file: "currFile5",
                        filename: "currFilename5",
                        filetype: "currFiletype5",
                    },
                    {
                        file: "currFile6",
                        filename: "currFilename6",
                        filetype: "currFiletype6",
                    },
                ],
                NeedItems: [
                    {
                        type: "Type 3",
                        category: "Category 3",
                        itemDescription: "Item Description 3",
                        unitOfMeasure: "Unit 3",
                        quantity: "30",
                        unitPrice: "30",
                        needByDate: "2023-06-16",
                        accountNumber: "Account 3",
                        taxRate: "20%",
                        taxName: "Tax 3",
                    },
                ],
            },
        ];
    }
    ngOnInit() {
        this.currentUser = this.tokenStorageService.getUser().username;
        this.Form = this.fb.group({
            requisitionType: ["RFQ", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            hodStatus: ["PENDING", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            procurementStatus: ["PENDING", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            fromDate: [this.oneWeekAgo, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            toDate: [this.dateTomorrow, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
        });
        this.getData(this.currentPage, this.pageSize);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.input = filterValue;
        this.getData(this.currentPage, this.pageSize);
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    // data: any;
    getData(page, size) {
        this.isLoading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (!this.input) {
            this.input = "%";
        }
        // let params = {
        //   pageNo: page,
        //   pageSize: size,
        //   searchTerm: this.input,
        //   status: this.Form.value.status,
        // };
        let fromDate = this.datepipe.transform(this.Form.value.fromDate, "YYYY-MM-dd");
        let toDate = this.datepipe.transform(this.Form.value.toDate, "YYYY-MM-dd");
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams()
            .set("pageNo", page)
            .set("pageSize", size)
            .set("searchTerm", this.input)
            .set("needType", this.Form.value.requisitionType)
            .set("hod_status", this.Form.value.hodStatus)
            .set("procurement_status", this.Form.value.procurementStatus)
            .set("fromDate", fromDate)
            .set("toDate", toDate);
        this.needService
            .getNeedsByStatus(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res:: ", res);
                console.log("res.entity:: ", res.entity);
                console.log("res.entity.content:: ", res.entity.content);
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(this.data.content);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    this.totalItems = this.data.totalElements;
                    this.currentPage = this.data.number;
                    this.totalPages = this.data.totalPages;
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
                this.isLoading = false;
            },
            complete: () => {
                this.isLoading = false;
            },
        });
    }
    onPageChange(event) {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        this.getData(this.currentPage, this.pageSize);
    }
    refresh() {
        this.getData(this.currentPage, this.pageSize);
    }
    getSelectedStatus(event) {
        this.getData(this.currentPage, this.pageSize);
    }
    addNeed() {
        this.router.navigate(["/erp-procurement/needs/manage-need"]);
    }
    editNeed(data) {
        const additionalData = data;
        //const serializedData = JSON.stringify(additionalData);
        let route = "/erp-procurement/needs/manage-need";
        this.router.navigate([route], {
            queryParams: { id: data.id, action: "Update" },
        });
    }
    viewNeed(data) {
        const additionalData = data;
        //const serializedData = JSON.stringify(additionalData);
        let route = "/erp-procurement/needs/manage-need";
        this.router.navigate([route], {
            queryParams: { id: data.id, action: "View" },
        });
    }
    validateNeed(data) {
        const additionalData = data;
        // const serializedData = JSON.stringify(additionalData);
        let route = "/erp-procurement/needs/manage-need";
        this.router.navigate([route], {
            queryParams: { id: data.id, action: "Validate" },
        });
    }
    downloadReqReport(row) {
        this.downloadLoading = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams().set("needCode", row.needCode);
        this.needService
            .donwloadRequsitionReport(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                let url = window.URL.createObjectURL(res.data);
                // if you want to open PDF in new tab
                window.open(url);
                let a = document.createElement("a");
                document.body.appendChild(a);
                a.setAttribute("style", "display: none");
                a.setAttribute("target", "blank");
                a.href = url;
                // a.download = ".pdf";
                a.download = `RequsitionReport_${row.needCode}.pdf`;
                a.click();
                window.URL.revokeObjectURL(url);
                a.remove();
                this.downloadLoading = false;
                this.snackbar.showNotification("snackbar-success", "Report generated successfully");
                // if (res.statusCode === 200) {
                // } else {
                //   this.snackbar.showNotification("snackbar-danger", res.message);
                // }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", "Error doanloading PO!");
                this.downloadLoading = false;
            },
            complete: () => {
                this.downloadLoading = false;
            },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription;
    }
    deleteNeed(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you sure?",
            text: "Do you really want to delete this Need?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete Need!",
        }).then((result) => {
            if (result.isConfirmed) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams()
                    .set("id", id)
                    .set("username", this.currentUser);
                this.needService
                    .deleteNeedsTemporarily(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        this.snackbar.showNotification("snackbar-success", "Need Deleted Successfully");
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getData(this.currentPage, this.pageSize);
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription;
            }
        });
    }
}
AllNeedsComponent.ɵfac = function AllNeedsComponent_Factory(t) { return new (t || AllNeedsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_need_service__WEBPACK_IMPORTED_MODULE_2__.NeedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService)); };
AllNeedsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AllNeedsComponent, selectors: [["app-all-needs"]], viewQuery: function AllNeedsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 133, vars: 26, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [1, "col-10"], [3, "formGroup"], [1, "col-2"], ["appearance", "fill", 1, "example-full-width"], ["formControlName", "requisitionType", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "hodStatus", 3, "selectionChange"], ["formControlName", "procurementStatus", 3, "selectionChange"], ["matInput", "", "formControlName", "fromDate", "required", "", 3, "matDatepicker", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "toDate", "required", "", 3, "matDatepicker", "dateChange"], ["picker2", ""], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "table-img tbl-col-width-per-6", 4, "matHeaderCellDef"], ["class", "table-img tbl-col-width-per-6", 4, "matCellDef"], ["matColumnDef", "needCode"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-12", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-12", 4, "matCellDef"], ["matColumnDef", "needTitle"], ["matColumnDef", "needDescription"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matCellDef"], ["matColumnDef", "postedBy"], ["matColumnDef", "postedTime"], ["matColumnDef", "status"], ["matColumnDef", "hodApproval"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "procurementApproval"], ["matColumnDef", "downloadNeedReport"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "pageSizeOptions", "length", "pageIndex", "pageSize", "page"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [3, "value"], ["mat-sort-header", "", 1, "table-img", "tbl-col-width-per-6"], [1, "table-img", "tbl-col-width-per-6"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-12"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-12"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [1, "badge", "badge-solid-purple", "btn", "btn", "btn-sm", "m-1", 3, "disabled", "click"], [1, "fas", "fa-download"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "disabled", "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], [3, "colspan"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllNeedsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AllNeedsComponent_div_8_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 4)(13, "div", 11)(14, "ul", 12)(15, "li", 13)(16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Requisitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "li", 14)(19, "label", 15)(20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function AllNeedsComponent_Template_input_keyup_22_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "li")(25, "div", 19)(26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_Template_button_click_26_listener() { return ctx.addNeed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "li")(30, "div", 22)(31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_Template_button_click_31_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 23)(35, "ul", 24)(36, "li")(37, "div", 25)(38, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_Template_img_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r105); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](94); return _r13.exportTable("xlsx", { fileName: "Requisition-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "li")(40, "div", 27)(41, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_Template_img_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r105); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](94); return _r13.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "li")(43, "div", 29)(44, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_Template_img_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r105); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](94); return _r13.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "li")(46, "div", 31)(47, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllNeedsComponent_Template_img_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r105); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](94); return _r13.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 33)(49, "div", 4)(50, "div", 34)(51, "form", 35)(52, "div", 4)(53, "div", 36)(54, "mat-form-field", 37)(55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "RequisitionType");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "mat-select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function AllNeedsComponent_Template_mat_select_selectionChange_57_listener($event) { return ctx.getSelectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, AllNeedsComponent_mat_option_58_Template, 2, 2, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, AllNeedsComponent_mat_error_59_Template, 2, 0, "mat-error", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 36)(61, "mat-form-field", 37)(62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "HOD Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "mat-select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function AllNeedsComponent_Template_mat_select_selectionChange_64_listener($event) { return ctx.getSelectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, AllNeedsComponent_mat_option_65_Template, 2, 2, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, AllNeedsComponent_mat_error_66_Template, 2, 0, "mat-error", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 36)(68, "mat-form-field", 37)(69, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Procurement Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "mat-select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function AllNeedsComponent_Template_mat_select_selectionChange_71_listener($event) { return ctx.getSelectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, AllNeedsComponent_mat_option_72_Template, 2, 2, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, AllNeedsComponent_mat_error_73_Template, 2, 0, "mat-error", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 36)(75, "mat-form-field", 37)(76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dateChange", function AllNeedsComponent_Template_input_dateChange_78_listener($event) { return ctx.getSelectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "mat-datepicker-toggle", 44)(80, "mat-datepicker", null, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, AllNeedsComponent_mat_error_82_Template, 2, 0, "mat-error", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 36)(84, "mat-form-field", 37)(85, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dateChange", function AllNeedsComponent_Template_input_dateChange_87_listener($event) { return ctx.getSelectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](88, "mat-datepicker-toggle", 44)(89, "mat-datepicker", null, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, AllNeedsComponent_mat_error_91_Template, 2, 0, "mat-error", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "mat-table", 48, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](95, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](96, AllNeedsComponent_mat_header_cell_96_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](97, AllNeedsComponent_mat_cell_97_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](98, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](99, AllNeedsComponent_mat_header_cell_99_Template, 2, 0, "mat-header-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](100, AllNeedsComponent_mat_cell_100_Template, 2, 1, "mat-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](101, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](102, AllNeedsComponent_mat_header_cell_102_Template, 2, 0, "mat-header-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](103, AllNeedsComponent_mat_cell_103_Template, 2, 1, "mat-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](104, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](105, AllNeedsComponent_mat_header_cell_105_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](106, AllNeedsComponent_mat_cell_106_Template, 2, 1, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](107, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](108, AllNeedsComponent_mat_header_cell_108_Template, 2, 0, "mat-header-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](109, AllNeedsComponent_mat_cell_109_Template, 2, 1, "mat-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](110, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](111, AllNeedsComponent_mat_header_cell_111_Template, 2, 0, "mat-header-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](112, AllNeedsComponent_mat_cell_112_Template, 3, 4, "mat-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](113, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](114, AllNeedsComponent_mat_header_cell_114_Template, 2, 0, "mat-header-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](115, AllNeedsComponent_mat_cell_115_Template, 7, 5, "mat-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](116, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](117, AllNeedsComponent_mat_header_cell_117_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](118, AllNeedsComponent_mat_cell_118_Template, 7, 5, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](119, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](120, AllNeedsComponent_mat_header_cell_120_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](121, AllNeedsComponent_mat_cell_121_Template, 7, 5, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](122, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](123, AllNeedsComponent_mat_header_cell_123_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](124, AllNeedsComponent_mat_cell_124_Template, 4, 1, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](125, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](126, AllNeedsComponent_mat_header_cell_126_Template, 2, 0, "mat-header-cell", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](127, AllNeedsComponent_mat_cell_127_Template, 9, 13, "mat-cell", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](128, AllNeedsComponent_mat_header_row_128_Template, 1, 0, "mat-header-row", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](129, AllNeedsComponent_mat_row_129_Template, 1, 2, "mat-row", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](130, AllNeedsComponent_tr_130_Template, 3, 2, "tr", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](131, AllNeedsComponent_div_131_Template, 2, 1, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "mat-paginator", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function AllNeedsComponent_Template_mat_paginator_page_132_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](81);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "All Requisitions")("items", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](25, _c1))("active_item", "All Requisitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.requisitionTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("requisitionType").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("hodStatus").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("procurementStatus").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("fromDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("toDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("length", ctx.totalItems)("pageIndex", ctx.currentPage)("pageSize", ctx.pageSize);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__.GenWidgetsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepicker, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_27__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtbmVlZHMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 99719:
/*!******************************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/needs/pages/manage-need/manage-need.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageNeedComponent": () => (/* binding */ ManageNeedComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _dialogs_validate_need_validate_need_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialogs/validate-need/validate-need.component */ 84325);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_erp_inventory_data_lookups_catalogue_lookup_catalogue_lookup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-inventory/data/lookups/catalogue-lookup/catalogue-lookup.component */ 55670);
/* harmony import */ var src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/ccentre-lookup/ccentre-lookup.component */ 64622);
/* harmony import */ var src_app_erp_finance_data_lookups_expense_lookup_expense_lookup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/expense-lookup/expense-lookup.component */ 30417);
/* harmony import */ var src_app_erp_fixedassets_data_lookups_asset_catalog_lookup_asset_catalog_lookup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-fixedassets/data/lookups/asset-catalog-lookup/asset-catalog-lookup.component */ 69518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_erp_procurement_data_services_need_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/erp-procurement/data/services/need.service */ 92878);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var src_app_erp_budget_data_services_budget_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/erp-budget/data/services/budget.service */ 64608);
/* harmony import */ var src_app_erp_finance_data_services_gl_accounts_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/erp-finance/data/services/gl-accounts.service */ 11644);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);











































const _c0 = ["fileInput"];
function ManageNeedComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 105)(1, "div", 106)(2, "div", 107)(3, "div", 108)(4, "div", 109)(5, "div", 13)(6, "div", 110)(7, "div", 13)(8, "div", 110)(9, "div", 111)(10, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "HOD Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 113)(13, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 110)(16, "div", 111)(17, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "HOD Approved By");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 113)(20, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 13)(23, "div", 116)(24, "div", 117)(25, "div", 118)(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "HOD Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 110)(31, "div", 13)(32, "div", 110)(33, "div", 111)(34, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35, " Procurement Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 113)(37, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "div", 110)(40, "div", 111)(41, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, " Procurement Approved By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 113)(44, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 13)(47, "div", 116)(48, "div", 117)(49, "div", 118)(50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51, "Procurement Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.formData.hodStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.formData.hodApprovedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r2.formData.hodRemarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.formData.procurementStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.formData.procurementApprovedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r2.formData.procurementRemarks);
} }
function ManageNeedComponent_div_8_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const requisitionType_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", requisitionType_r64.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](requisitionType_r64.name);
} }
function ManageNeedComponent_div_8_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const requisitionCategory_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", requisitionCategory_r65.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](requisitionCategory_r65.name);
} }
function ManageNeedComponent_div_8_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Requisition Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "CostCenterCode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "ExpenseCode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Requisition Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Description must not exceed 300 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Requisition Items ");
} }
function ManageNeedComponent_div_8_form_59_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "ItemName is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "UnitOfMeasure is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "ItemName is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "UnitOfMeasure is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "ItemQuantity is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "ItemQuantity cannot be 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "ItemQuantity allows numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Please enter unit amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Please ensure amount does not exceed 2 decimal values! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Please ensure amount does not exceed 1 billion! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "ItemDescription is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_mat_error_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "ItemDescription must not exceed 300 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_mat_error_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Need by Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Enter a Valid Need by Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_form_59_button_65_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_form_59_button_65_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r83.addToArray(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " + Add Need details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r81.bgtForm.invalid);
} }
function ManageNeedComponent_div_8_form_59_button_66_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_form_59_button_66_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r85.updateNeedDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " + Update Need details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r82.bgtForm.invalid);
} }
function ManageNeedComponent_div_8_form_59_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "form", 15)(1, "div", 13)(2, "div", 123)(3, "mat-form-field", 17)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "ItemName");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_form_59_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r87.catalogueLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ManageNeedComponent_div_8_form_59_mat_error_9_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 123)(11, "mat-form-field", 17)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "UnitOfMeasure");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, ManageNeedComponent_div_8_form_59_mat_error_15_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 123)(17, "mat-form-field", 17)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "ItemName");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_form_59_Template_mat_icon_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r88); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r89.catalogueLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, ManageNeedComponent_div_8_form_59_mat_error_23_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 123)(25, "mat-form-field", 17)(26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "UnitOfMeasure");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, ManageNeedComponent_div_8_form_59_mat_error_29_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 128)(31, "mat-form-field", 17)(32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "ItemQuantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](34, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, ManageNeedComponent_div_8_form_59_mat_error_35_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, ManageNeedComponent_div_8_form_59_mat_error_36_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](37, ManageNeedComponent_div_8_form_59_mat_error_37_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 128)(39, "mat-form-field", 130)(40, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41, "Estimated Unit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](42, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, ManageNeedComponent_div_8_form_59_mat_error_43_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](44, ManageNeedComponent_div_8_form_59_mat_error_44_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](45, ManageNeedComponent_div_8_form_59_mat_error_45_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 128)(47, "mat-form-field", 17)(48, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "ItemDescription");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](50, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](51, ManageNeedComponent_div_8_form_59_mat_error_51_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](52, ManageNeedComponent_div_8_form_59_mat_error_52_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "div", 128)(54, "mat-form-field", 17)(55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](56, "Need By Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](57, "input", 133)(58, "mat-datepicker-toggle", 134)(59, "mat-datepicker", null, 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](61, ManageNeedComponent_div_8_form_59_mat_error_61_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](62, ManageNeedComponent_div_8_form_59_mat_error_62_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "div", 136)(64, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](65, ManageNeedComponent_div_8_form_59_button_65_Template, 2, 1, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](66, ManageNeedComponent_div_8_form_59_button_66_Template, 2, 1, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_form_59_Template_button_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r88); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r90.clearForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](68, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](60);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r13.bgtForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r13.isCatalogueItemsReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("itemName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r13.isCatalogueItemsReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("unitOfMeasure").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r13.isCatalogueItemsReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("itemName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r13.isCatalogueItemsReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("unitOfMeasure").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("itemQuantity").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("itemQuantity").hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("itemQuantity").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("estimatedPrice").hasError("required") && ctx_r13.bgtForm.get("estimatedPrice").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("estimatedPrice").hasError("pattern") && ctx_r13.bgtForm.get("estimatedPrice").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("estimatedPrice").hasError("max") && ctx_r13.bgtForm.get("estimatedPrice").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("itemDescription").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("itemDescription").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matDatepicker", _r78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("for", _r78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("needByDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.bgtForm.get("needByDate").hasError("pastDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.addButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.editButton);
} }
function ManageNeedComponent_div_8_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 105)(1, "div", 141)(2, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_div_60_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r91.downloadTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "i", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " Download Excel Template ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 136)(6, "div", 137)(7, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_div_60_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r92); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r93.clearImports(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
} }
function ManageNeedComponent_div_8_mat_header_cell_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_104_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " #");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageNeedComponent_div_8_mat_cell_104_span_1_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r94.id);
} }
function ManageNeedComponent_div_8_mat_header_cell_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "ItemCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_107_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r96.itemCode, "");
} }
function ManageNeedComponent_div_8_mat_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageNeedComponent_div_8_mat_cell_107_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r96.itemCode);
} }
function ManageNeedComponent_div_8_mat_header_cell_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "ItemName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_110_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r99.itemName, "");
} }
function ManageNeedComponent_div_8_mat_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageNeedComponent_div_8_mat_cell_110_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r99.itemName);
} }
function ManageNeedComponent_div_8_mat_header_cell_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "ItemQuantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_113_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r102.itemQuantity, "");
} }
function ManageNeedComponent_div_8_mat_cell_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageNeedComponent_div_8_mat_cell_113_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r102.itemQuantity);
} }
function ManageNeedComponent_div_8_mat_header_cell_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "UnitOfMeasure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_116_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r105.unitOfMeasure, "");
} }
function ManageNeedComponent_div_8_mat_cell_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageNeedComponent_div_8_mat_cell_116_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r105.unitOfMeasure);
} }
function ManageNeedComponent_div_8_mat_header_cell_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "EstimatedPrice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_119_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind4"](2, 1, row_r108.estimatedPrice, "KSH ", "symbol", "1.2-2"), " ");
} }
function ManageNeedComponent_div_8_mat_cell_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageNeedComponent_div_8_mat_cell_119_span_1_Template, 3, 6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r108.estimatedPrice);
} }
function ManageNeedComponent_div_8_mat_header_cell_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "NeedByDate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_122_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, row_r111.needByDate, "short"), "");
} }
function ManageNeedComponent_div_8_mat_cell_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageNeedComponent_div_8_mat_cell_122_span_1_Template, 3, 4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r111.needByDate);
} }
function ManageNeedComponent_div_8_mat_header_cell_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "ItemDescription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_125_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r114.itemDescription, "");
} }
function ManageNeedComponent_div_8_mat_cell_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageNeedComponent_div_8_mat_cell_125_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r114.itemDescription);
} }
function ManageNeedComponent_div_8_mat_header_cell_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "BudgetCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_128_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "\u00A0 Fail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_128_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "\u00A0 Pass ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_128_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0 ", "-", " ");
} }
function ManageNeedComponent_div_8_mat_cell_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_mat_cell_128_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](1, 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ManageNeedComponent_div_8_mat_cell_128_button_2_Template, 3, 0, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ManageNeedComponent_div_8_mat_cell_128_button_3_Template, 3, 0, "button", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ManageNeedComponent_div_8_mat_cell_128_button_4_Template, 3, 1, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", row_r117.budgetFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", "Y");
} }
function ManageNeedComponent_div_8_mat_header_cell_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "OverrideBgt");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_131_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "\u00A0 Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_131_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "\u00A0 No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_131_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0 ", "-", " ");
} }
function ManageNeedComponent_div_8_mat_cell_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_mat_cell_131_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](1, 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ManageNeedComponent_div_8_mat_cell_131_button_2_Template, 3, 0, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ManageNeedComponent_div_8_mat_cell_131_button_3_Template, 3, 0, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ManageNeedComponent_div_8_mat_cell_131_button_4_Template, 3, 1, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", row_r123.allowOverride);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", "N");
} }
function ManageNeedComponent_div_8_mat_header_cell_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_134_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 165)(1, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_mat_cell_134_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r132); const row_r129 = restoredCtx.$implicit; const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r131.onEditNeedDetails(row_r129); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "app-feather-icons", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_mat_cell_134_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r132); const i_r130 = restoredCtx.index; const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r133.onDeleteNeedDetails(i_r130); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "app-feather-icons", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r39.disableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r39.disableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", "trash-2");
} }
function ManageNeedComponent_div_8_mat_header_row_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "mat-header-row");
} }
function ManageNeedComponent_div_8_mat_row_136_Template(rf, ctx) { if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-row", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_mat_row_136_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r137); const row_r134 = restoredCtx.$implicit; const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r136.onEditNeedDetails(row_r134); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ManageNeedComponent_div_8_div_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-progress-spinner", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("diameter", 40);
} }
function ManageNeedComponent_div_8_ng_template_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Upload Requisition Attachments ");
} }
function ManageNeedComponent_div_8_mat_header_cell_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r139 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r139);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", index_r139 + 1, " ");
} }
function ManageNeedComponent_div_8_mat_header_cell_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Filename");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 174)(1, "mat-form-field", 175)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Filename");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r141 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r141);
} }
function ManageNeedComponent_div_8_mat_header_cell_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Filetype");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 174)(1, "mat-form-field", 175)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Filetype");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "input", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r143 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r143);
} }
function ManageNeedComponent_div_8_mat_header_cell_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_177_Template(rf, ctx) { if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 179)(1, "input", 180, 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ManageNeedComponent_div_8_mat_cell_177_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r148); const row_r144 = restoredCtx.$implicit; const index_r145 = restoredCtx.index; const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](2); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r147.onSelectFile(_r146.files, row_r144, index_r145); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r145 = ctx.index;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r145);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 3, ctx_r54.isLoading))("multiple", "multiple");
} }
function ManageNeedComponent_div_8_mat_header_cell_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_180_Template(rf, ctx) { if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 182)(1, "button", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_mat_cell_180_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ManageNeedComponent_div_8_mat_cell_180_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r153); const row_r149 = restoredCtx.$implicit; const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r152.downloadDocument(row_r149); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} }
function ManageNeedComponent_div_8_mat_header_cell_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageNeedComponent_div_8_mat_cell_183_Template(rf, ctx) { if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 182)(1, "button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_mat_cell_183_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ManageNeedComponent_div_8_mat_cell_183_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r158); const row_r154 = restoredCtx.$implicit; const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r157.deleteCall(row_r154); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "app-feather-icons", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", "trash-2");
} }
function ManageNeedComponent_div_8_mat_header_row_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "mat-header-row");
} }
function ManageNeedComponent_div_8_mat_row_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "mat-row", 186);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ManageNeedComponent_div_8_mat_cell_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r61.input.value, "\"");
} }
function ManageNeedComponent_div_8_div_187_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-progress-spinner", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("diameter", 40);
} }
function ManageNeedComponent_div_8_ng_container_196_Template(rf, ctx) { if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_ng_container_196_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r162); const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r161.onValidate("HOD"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "done_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " HOD Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_ng_container_196_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r162); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r163.onValidate("PROCUREMENT"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, " Procurement Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r63.formData.approvedByHOD);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r63.formData.approvedByHOD || ctx_r63.formData.approvedByProcurement);
} }
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
function ManageNeedComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ManageNeedComponent_div_8_div_5_Template, 54, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "form", 15)(7, "div", 13)(8, "div", 16)(9, "mat-form-field", 17)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "Requisition Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, ManageNeedComponent_div_8_mat_option_13_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, ManageNeedComponent_div_8_mat_error_14_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 16)(16, "mat-form-field", 17)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "RequisitionCategory");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selectionChange", function ManageNeedComponent_div_8_Template_mat_select_selectionChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165); const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r164.getSelectedPurchaseOrderCategory($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, ManageNeedComponent_div_8_mat_option_20_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, ManageNeedComponent_div_8_mat_error_21_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 16)(23, "mat-form-field", 17)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "RequisitionTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, ManageNeedComponent_div_8_mat_error_27_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 16)(29, "mat-form-field", 17)(30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "CostCenterCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_Template_mat_icon_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165); const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r166.costCenterLookUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, ManageNeedComponent_div_8_mat_error_35_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 16)(37, "mat-form-field", 17)(38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, "ExpenseCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](40, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_Template_mat_icon_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165); const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r167.expenseLookUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, ManageNeedComponent_div_8_mat_error_43_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "div", 26)(45, "mat-form-field", 17)(46, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47, "RequisitionDescription");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](48, "textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](49, ManageNeedComponent_div_8_mat_error_49_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](50, ManageNeedComponent_div_8_mat_error_50_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "mat-tab-group")(52, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, ManageNeedComponent_div_8_ng_template_53_Template, 3, 0, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "div", 29)(55, "div", 12)(56, "div", 13)(57, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58, "Requisition Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, ManageNeedComponent_div_8_form_59_Template, 69, 23, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, ManageNeedComponent_div_8_div_60_Template, 9, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "div", 31)(62, "div", 32)(63, "div", 13)(64, "div", 33)(65, "ul", 34)(66, "li", 35)(67, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](68, "Requisition Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "li", 36)(70, "label", 37)(71, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](72, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function ManageNeedComponent_div_8_Template_input_keyup_73_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165); const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r168.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "li")(76, "div", 41)(77, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_Template_button_click_77_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r169.manualItemsEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](79, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "li")(81, "div", 44)(82, "button", 45)(83, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](84, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "div", 46)(86, "ul", 47)(87, "li")(88, "div", 48)(89, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_Template_img_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](101); return _r17.exportTable("xlsx", { fileName: "Requisition-items-list", sheet: "sheet1" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "li")(91, "div", 50)(92, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_Template_img_click_92_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](101); return _r17.exportTable("csv"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](93, "li")(94, "div", 52)(95, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_Template_img_click_95_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](101); return _r17.exportTable("json"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](96, "li")(97, "div", 54)(98, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_Template_img_click_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](101); return _r17.exportTable("txt"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](99, "mat-table", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](102, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](103, ManageNeedComponent_div_8_mat_header_cell_103_Template, 2, 0, "mat-header-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](104, ManageNeedComponent_div_8_mat_cell_104_Template, 2, 1, "mat-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](105, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](106, ManageNeedComponent_div_8_mat_header_cell_106_Template, 2, 0, "mat-header-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](107, ManageNeedComponent_div_8_mat_cell_107_Template, 2, 1, "mat-cell", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](108, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](109, ManageNeedComponent_div_8_mat_header_cell_109_Template, 2, 0, "mat-header-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](110, ManageNeedComponent_div_8_mat_cell_110_Template, 2, 1, "mat-cell", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](111, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](112, ManageNeedComponent_div_8_mat_header_cell_112_Template, 2, 0, "mat-header-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](113, ManageNeedComponent_div_8_mat_cell_113_Template, 2, 1, "mat-cell", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](114, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](115, ManageNeedComponent_div_8_mat_header_cell_115_Template, 2, 0, "mat-header-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](116, ManageNeedComponent_div_8_mat_cell_116_Template, 2, 1, "mat-cell", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](117, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](118, ManageNeedComponent_div_8_mat_header_cell_118_Template, 2, 0, "mat-header-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](119, ManageNeedComponent_div_8_mat_cell_119_Template, 2, 1, "mat-cell", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](120, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](121, ManageNeedComponent_div_8_mat_header_cell_121_Template, 2, 0, "mat-header-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](122, ManageNeedComponent_div_8_mat_cell_122_Template, 2, 1, "mat-cell", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](123, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](124, ManageNeedComponent_div_8_mat_header_cell_124_Template, 2, 0, "mat-header-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](125, ManageNeedComponent_div_8_mat_cell_125_Template, 2, 1, "mat-cell", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](126, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](127, ManageNeedComponent_div_8_mat_header_cell_127_Template, 2, 0, "mat-header-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](128, ManageNeedComponent_div_8_mat_cell_128_Template, 5, 3, "mat-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](129, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](130, ManageNeedComponent_div_8_mat_header_cell_130_Template, 2, 0, "mat-header-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](131, ManageNeedComponent_div_8_mat_cell_131_Template, 5, 3, "mat-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](132, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](133, ManageNeedComponent_div_8_mat_header_cell_133_Template, 2, 0, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](134, ManageNeedComponent_div_8_mat_cell_134_Template, 5, 8, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](135, ManageNeedComponent_div_8_mat_header_row_135_Template, 1, 0, "mat-header-row", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](136, ManageNeedComponent_div_8_mat_row_136_Template, 1, 2, "mat-row", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](137, ManageNeedComponent_div_8_div_137_Template, 2, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](138, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](139, ManageNeedComponent_div_8_ng_template_139_Template, 3, 0, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](140, "div", 29)(141, "form", 80)(142, "div", 81)(143, "div", 82)(144, "div", 32)(145, "div", 13)(146, "div", 33)(147, "ul", 34)(148, "li", 35)(149, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](150, "Upload Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](151, "li", 36)(152, "label", 37)(153, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](154, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](155, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function ManageNeedComponent_div_8_Template_input_keyup_155_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165); const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r174.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](157, "li")(158, "div", 41)(159, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_Template_button_click_159_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165); const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r175.addFileRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](160, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](161, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](162, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](163, "mat-table", 83, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](166, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](167, ManageNeedComponent_div_8_mat_header_cell_167_Template, 2, 0, "mat-header-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](168, ManageNeedComponent_div_8_mat_cell_168_Template, 2, 2, "mat-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](169, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](170, ManageNeedComponent_div_8_mat_header_cell_170_Template, 2, 0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](171, ManageNeedComponent_div_8_mat_cell_171_Template, 5, 1, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](172, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](173, ManageNeedComponent_div_8_mat_header_cell_173_Template, 2, 0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](174, ManageNeedComponent_div_8_mat_cell_174_Template, 5, 1, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](175, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](176, ManageNeedComponent_div_8_mat_header_cell_176_Template, 2, 0, "mat-header-cell", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](177, ManageNeedComponent_div_8_mat_cell_177_Template, 4, 5, "mat-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](178, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](179, ManageNeedComponent_div_8_mat_header_cell_179_Template, 2, 0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](180, ManageNeedComponent_div_8_mat_cell_180_Template, 4, 0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](181, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](182, ManageNeedComponent_div_8_mat_header_cell_182_Template, 2, 0, "mat-header-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](183, ManageNeedComponent_div_8_mat_cell_183_Template, 3, 3, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](184, ManageNeedComponent_div_8_mat_header_row_184_Template, 1, 0, "mat-header-row", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](185, ManageNeedComponent_div_8_mat_row_185_Template, 1, 2, "mat-row", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](186, ManageNeedComponent_div_8_mat_cell_186_Template, 2, 1, "mat-cell", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](187, ManageNeedComponent_div_8_div_187_Template, 2, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](188, "mat-paginator", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](189, "div", 100)(190, "div", 101)(191, "div", 102)(192, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_Template_button_click_192_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r176.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](193, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](194, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](195, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](196, ManageNeedComponent_div_8_ng_container_196_Template, 9, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](197, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageNeedComponent_div_8_Template_button_click_197_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r177.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](198, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](199, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](200);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r1.pageFunction, " Requisition");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.pageFunction !== "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.requisitionTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("needType").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.requisitionCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("requisitionCategory").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("needTitle").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("costcentercode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("expenseCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("needDescription").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("needDescription").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.showItemsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.enterManually);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.documentsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", ctx_r1.attachementsDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isFileDataLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](31, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.hideApprovals);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("auth-spinner", ctx_r1.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r1.mngForm.valid || ctx_r1.dataSource.data.length === 0)("hidden", ctx_r1.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.pageFunction, " Requisition ");
} }
const _c2 = function () { return ["Requisitions"]; };
class ManageNeedComponent {
    constructor(fb, filesService, tokenStorageService, needService, snackbar, router, route, accessControlService, dialog, budgetService, accountService) {
        this.fb = fb;
        this.filesService = filesService;
        this.tokenStorageService = tokenStorageService;
        this.needService = needService;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.accessControlService = accessControlService;
        this.dialog = dialog;
        this.budgetService = budgetService;
        this.accountService = accountService;
        this.showForm = false;
        this.pageFunction = "Add";
        this.displayedColumns = [
            "id",
            "itemCode",
            "itemName",
            "unitOfMeasure",
            "itemQuantity",
            "estimatedPrice",
            "itemDescription",
            "needByDate",
            // "budgetFlag",
            // "allowOverride",
            "actions",
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource([]);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.hideApprovals = true;
        this.approvalVisible = false;
        this.disableActions = false;
        this.NeedStatuses = [
            { name: "Incomplete" },
            { name: "Approved" },
            { name: "Rejected" },
            { name: "Returned" },
        ];
        this.itemTypes = [{ name: "Goods" }, { name: "Services" }];
        this.subTotalAmount = 0;
        this.totalTax = 0;
        this.grandtotalAmount = 0;
        this.requisitionTypes = [{ name: "RFQ" }, { name: "RFP" }];
        this.requisitionCategories = [
            { name: "Stock" },
            { name: "FixedAsset" },
            { name: "Expense" },
            //{ name: "Prepayment" },
        ];
        this.pageAction = "Add";
        this.enterManually = true;
        this.isCatalogueItemsReadOnly = true;
        this.items = []; // Array to store
        this.itemErrors = [];
        this.templateFilename = "requisitionItemsTemplate.xlsx";
        this.editButton = false;
        this.addButton = true;
        this.selectedRowIndex = -1; // Track the index of the selected row
        this.showItemsForm = false;
        // **************************************************************************************************
        //UploadDocuments
        this.attachementsDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        this.displayColumns = [
            "id",
            "filename",
            "filetype",
            "selectFile",
            "download",
            "action",
        ];
        this.rows = this.fb.array([]);
        this.documentsForm = this.fb.group({ filedetails: this.rows });
        this.isFileDataLoading = true;
        this.selectedFiles = [];
        this.isFileLoading = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(false);
        // ****************************************************************************************************************************
        //Expense Look Up
        this.expenseIsSelected = false;
        this.selectedExpense = [];
        this.expenseArray = [];
        this.expenseGlCode = "";
        this.selectedCostCenter = [];
        // **********************************************************************************************************************************************************
        //Budget Check:
        //**************************************************************************************************** */
        // performBudgetCheck() {
        //   console.log("this.dataSource.data: ", this.dataSource.data);
        //   if (this.dataSource.data.length > 0) {
        //     // Transform the data to match the API format
        //     const transformedData = this.dataSource.data.map((item) => ({
        //       allowOverride: item.allowOverride,
        //       amount: item.estimatedPrice,
        //       budgetFlag: item.budgetFlag,
        //       costCenterCode: item.costCenterCode,
        //       expenseCode: item.expenseCode,
        //     }));
        //     this.budgetService
        //       .budgetCheck(transformedData)
        //       .pipe(takeUntil(this.destroy$))
        //       .subscribe({
        //         next: (res) => {
        //           if (res.entity) {
        //             this.dataSource.data.forEach((item, index) => {
        //               // Assuming res.entity has the same structure as the sample response
        //               if (res.entity[index]) {
        //                 item.allowOverride = res.entity[index].allowOverride;
        //                 item.budgetFlag = res.entity[index].budgetFlag;
        //               }
        //             });
        //             this.dataSource.data = this.dataSource.data.slice();
        //             this.snackbar.showNotification("snackbar-success", res.message);
        //           } else {
        //             this.snackbar.showNotification("snackbar-danger", res.message);
        //           }
        //         },
        //         error: (err) => {
        //           this.snackbar.showNotification("snackbar-danger", err.message);
        //         },
        //         complete: () => {
        //           this.updateOverallBudgetStatus();
        //         },
        //       });
        //   } else {
        //     this.snackbar.showNotification(
        //       "snackbar-danger",
        //       "Please enter the required data to perform the budget check."
        //     );
        //   }
        // }
        // budgetPassed: boolean = false;
        // updateOverallBudgetStatus() {
        //   let budgetPassed = false;
        //   for (const item of this.dataSource.data) {
        //     if (item.budgetFlag === "N" && item.allowOverride === "N") {
        //       budgetPassed = false;
        //       this.snackbar.showNotification(
        //         "snackbar-danger",
        //         "Some records do not meet budget allocation!"
        //       );
        //       break;
        //     }
        //     if (item.budgetFlag === "Y" && item.allowOverride === "Y") {
        //       budgetPassed = true;
        //     }
        //     if (item.budgetFlag === "Y" && item.allowOverride === "N") {
        //       budgetPassed = true;
        //     }
        //     if (item.budgetFlag === "N" && item.allowOverride === "Y") {
        //       budgetPassed = true;
        //     }
        //   }
        //   this.budgetPassed = budgetPassed;
        //   if (budgetPassed) {
        //     this.snackbar.showNotification(
        //       "snackbar-success",
        //       "Budget allocations met!"
        //     );
        //   }
        // }
        // ****************************************************************************************************************************************
        this.catalogueArray = [];
        this.selectedItem = [];
        //********************************************************************************************************************************** */
        this.posting = false;
        this.currentUser = this.tokenStorageService.getUser();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    ngOnInit() {
        this.getPage();
        if (this.route.queryParams &&
            typeof this.route.queryParams.subscribe === "function") {
            this.route.queryParams.subscribe((params) => {
                console.log("params: ", params);
                if (params.id) {
                    this.needId = params.id;
                    console.log("ID:", this.needId);
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
    ngAfterViewInit() {
        let event = { value: this.mngForm.value.requisitionCategory };
        this.getSelectedPurchaseOrderCategory(event);
    }
    getDataById() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpParams().set("id", this.needId);
        this.needService
            .getNeedsById(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                if (res.entity) {
                    this.formData = res.entity;
                    // this.isLoading = false;
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
                        this.approvalVisible = true;
                    }
                    // this.formData = JSON.parse(params.additionalData);
                    if (this.formData.needItems.length > 0) {
                        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource(this.formData.needItems);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                    }
                    if (this.formData.needAttachments.length > 0) {
                        this.isFileDataLoading = false;
                        this.formData.needAttachments.forEach((element) => {
                            const newRow = this.fb.group({
                                file: [element.file],
                                filename: [element.filename],
                                filetype: [element.filetype],
                            });
                            this.rows.push(newRow);
                        });
                        this.updateView();
                    }
                    this.showForm = true;
                    console.log("ID:", this.needId);
                    console.log("Additional Data:", this.formData);
                    this.getPage();
                    console.log("this.formData :", this.formData);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", "No Data Available for the Id provided");
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", "No Need Matching these parameters!");
            },
            complete: () => { },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_20__.Subscription;
    }
    getPage() {
        if (this.pageFunction === "Add") {
            this.generateEmptyForm();
            this.generateNeedForm();
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "Update") {
            this.generateFormWithData();
            this.generateNeedForm();
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.generateDisabledNeedForm();
            this.hideSubmit = true;
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "Validate") {
            this.generateFormWithData();
            this.generateDisabledNeedForm();
            this.hideApprovals = false;
            this.hideSubmit = true;
        }
    }
    generateEmptyForm() {
        this.mngForm = this.fb.group({
            needCode: [""],
            needType: ["RFQ", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            requisitionCategory: ["Stock", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            needTitle: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            needDescription: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.maxLength(300)]],
            needItems: [[]],
            needAttachments: [[]],
            costcentercode: [this.currentUser.costcentercode, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            expenseCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            // budgetFlag:["", [Validators.required]],
        });
        let event = { value: this.mngForm.value.requisitionCategory };
        this.getSelectedPurchaseOrderCategory(event);
    }
    generateFormWithData() {
        this.mngForm = this.fb.group({
            id: [this.formData.id],
            needCode: [this.formData.needCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            needType: [this.formData.needType, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            requisitionCategory: [
                this.formData.requisitionCategory,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            ],
            needTitle: [this.formData.needTitle, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            needDescription: [
                this.formData.needDescription,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.maxLength(300)],
            ],
            // status: [this.formData.status, [Validators.required]],
            needItems: [this.formData.needItems],
            needAttachments: [this.formData.needAttachments],
            costcentercode: [this.formData.costcentercode, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            expenseCode: [this.formData.expenseCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            //  budgetFlag: [this.formData.budgetFlag, [Validators.required]],
        });
        let event = { value: this.mngForm.value.requisitionCategory };
        this.getSelectedPurchaseOrderCategory(event);
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            needCode: [this.formData.needCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            needType: [this.formData.needType, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            requisitionCategory: [
                this.formData.requisitionCategory,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            ],
            needTitle: [this.formData.needTitle, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            needDescription: [this.formData.needDescription, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            // status: [this.formData.status, [Validators.required]],
            needItems: [this.formData.needItems],
            needAttachments: [this.formData.needAttachments],
            costcentercode: [this.formData.costcentercode],
            expenseCode: [this.formData.expenseCode],
            //budgetFlag: [this.formData.budgetFlag],
        });
    }
    getNeedPeriod(event) {
        console.log("event: ", event.value);
    }
    manualItemsEntry() {
        this.showItemsForm = true;
        this.enterManually = true;
        let event = { value: this.mngForm.value.requisitionCategory };
        this.getSelectedPurchaseOrderCategory(event);
        console.log("event: ", event);
    }
    getSelectedPurchaseOrderCategory(event) {
        console.log("event.value: ", event.value);
        if (event.value == "Stock" || event.value == "FixedAsset") {
            this.isCatalogueItemsReadOnly = true;
            console.log("Stock: ", this.isCatalogueItemsReadOnly);
        }
        else {
            this.isCatalogueItemsReadOnly = false;
            console.log("!Stock: ", this.isCatalogueItemsReadOnly);
        }
        if (this.bgtForm) {
            this.bgtForm.reset();
        }
    }
    importExcel() {
        this.enterManually = false;
        this.fileInput.nativeElement.click();
    }
    handleFileInput(files) {
        const file = files.item(0);
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_22__.read(arrayBuffer, { type: "array" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = xlsx__WEBPACK_IMPORTED_MODULE_22__.utils.sheet_to_json(worksheet, { raw: true });
                this.items = jsonData;
                // this.items = [
                //   {
                //     itemName: "Sample Item 1",
                //     itemQuantity: 5,
                //     itemDescription: "Sample description for Item 1",
                //     unitOfMeasure: "pcs",
                //     needByDate: "2023-06-23",
                //   },
                //  
                // ];
                console.log(" this.items :", this.items);
                // Initialize the form
                this.itemsForm = this.fb.group({
                    items: this.fb.array([]), // Array of items
                });
                // Call the function to validate the items
                this.validateItems();
            };
            fileReader.readAsArrayBuffer(file);
        }
    }
    validateItems() {
        this.itemErrors = []; // Clear previous errors
        const items = this.items;
        const itemsFormArray = this.itemsForm.get("items"); // Create a separate FormArray variable
        for (const item of items) {
            const formGroup = this.fb.group({
                itemName: [{ value: item.itemName }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
                itemQuantity: [{ value: item.itemQuantity }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
                itemDescription: [
                    { value: item.itemDescription },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
                ],
                unitOfMeasure: [{ value: item.unitOfMeasure }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
                needByDate: [{ value: item.needByDate }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            });
            itemsFormArray.push(formGroup); // Use push method on the FormArray variable
            this.collectErrors(formGroup);
            if (formGroup.valid) {
                // Rest of the code remains the same
                this.bgtForm.patchValue({
                    itemName: item.itemName,
                    itemQuantity: item.itemQuantity,
                    itemDescription: item.itemDescription,
                    unitOfMeasure: item.unitOfMeasure,
                    needByDate: item.needByDate,
                });
                // Rest of the code remains the same
                this.dataSource.data.push(this.bgtForm.value);
                this.dataSource.data = this.dataSource.data.slice();
                this.bgtForm.reset();
            }
        }
    }
    collectErrors(control, path = "") {
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormGroup) {
            Object.keys(control.controls).forEach((key) => {
                const subControl = control.get(key);
                const subPath = this.getErrorPath(path, key);
                this.collectErrors(subControl, subPath);
            });
        }
        else {
            const errors = control.errors;
            if (errors) {
                const itemError = {
                    field: path,
                    message: this.getErrorMessage(errors),
                };
                this.itemErrors.push(itemError);
            }
        }
    }
    getErrorPath(path, key) {
        return path ? `${path}.${key}` : key;
    }
    getErrorMessage(errors) {
        if (errors.required) {
            return "This field is required.";
        }
        else if (errors.pattern) {
            return "Invalid value.";
        }
        return "";
    }
    addImportsToArray() { }
    clearImports() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.patchItems();
    }
    downloadTemplate() {
        const link = document.createElement("a");
        link.setAttribute("type", "hidden");
        link.href = `/assets/templates/${this.templateFilename}`;
        link.download = this.templateFilename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    //***********************************************************************************************************************************8 */
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    generateDisabledNeedForm() {
        this.bgtForm = this.fb.group({
            itemName: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            estimatedPrice: [
                0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.max(1000000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                ],
            ],
            itemQuantity: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            itemDescription: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            unitOfMeasure: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            needByDate: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            // costCenterCode: [{ value: "", disabled: true }, [Validators.required]],
            // expenseCode: [{ value: "", disabled: true }, [Validators.required]],
            // allowOverride: [""],
            // budgetFlag: [""],
        });
    }
    generateNeedForm() {
        this.bgtForm = this.fb.group({
            id: [""],
            itemCode: [""],
            itemName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            estimatedPrice: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            itemQuantity: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.min(0.01),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.pattern("^[0-9]+(\\.[0-9]{1,2})?$"),
                ],
            ],
            itemDescription: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.maxLength(300)]],
            unitOfMeasure: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            needByDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required, this.dateValidator]],
        });
        let event = { value: this.mngForm.value.requisitionCategory };
        this.getSelectedPurchaseOrderCategory(event);
    }
    dateValidator(control) {
        const selectedDate = control.value;
        const today = new Date();
        if (selectedDate < today) {
            return { pastDate: true };
        }
        return null;
    }
    addToArray() {
        if (this.bgtForm.valid) {
            console.log("this.bgtForm: ", this.bgtForm.value);
            const newRecord = {
                itemName: this.bgtForm.value.itemName,
                itemCode: this.bgtForm.value.itemCode,
                estimatedPrice: this.bgtForm.value.estimatedPrice,
                itemDescription: this.bgtForm.value.itemDescription,
                unitOfMeasure: this.bgtForm.value.unitOfMeasure,
                itemQuantity: this.bgtForm.value.itemQuantity,
                needByDate: this.bgtForm.value.needByDate,
                // costCenterCode: this.bgtForm.value.costCenterCode,
                // expenseCode: this.bgtForm.value.expenseCode,
                // allowOverride: this.bgtForm.value.allowOverride,
                // budgetFlag: this.bgtForm.value.budgetFlag,
            };
            this.dataSource.data.push(newRecord);
            this.dataSource.data = this.dataSource.data.slice();
            this.bgtForm.reset();
            this.showItemsForm = false;
            this.patchItems();
        }
    }
    updateNeedDetails() {
        if (this.bgtForm.valid) {
            console.log("this.bgtForm: ", this.bgtForm.value);
            const updatedRecord = {
                id: this.bgtForm.value.id,
                itemName: this.bgtForm.value.itemName,
                estimatedPrice: this.bgtForm.value.estimatedPrice,
                itemCode: this.bgtForm.value.itemCode,
                itemDescription: this.bgtForm.value.itemDescription,
                unitOfMeasure: this.bgtForm.value.unitOfMeasure,
                itemQuantity: this.bgtForm.value.itemQuantity,
                needByDate: this.bgtForm.value.needByDate,
                // costCenterCode: this.bgtForm.value.costCenterCode,
                // expenseCode: this.bgtForm.value.expenseCode,
                // allowOverride: this.bgtForm.value.allowOverride,
                // budgetFlag: this.bgtForm.value.budgetFlag,
            };
            this.dataSource.data[this.selectedRowIndex] = updatedRecord;
            this.dataSource.data = this.dataSource.data.slice();
            this.bgtForm.reset();
            this.showItemsForm = false;
            this.editButton = false;
            this.addButton = true;
            this.selectedRowIndex = -1; // Reset the selected row index
        }
    }
    onEditNeedDetails(row) {
        this.editButton = true;
        this.addButton = false;
        this.selectedRowIndex = this.dataSource.data.indexOf(row);
        this.bgtForm.patchValue({
            id: row.id,
            itemName: row.itemName,
            estimatedPrice: row.estimatedPrice,
            itemCode: row.itemCode,
            itemDescription: row.itemDescription,
            unitOfMeasure: row.unitOfMeasure,
            itemQuantity: row.itemQuantity,
            needByDate: row.needByDate,
            // costCenterCode: row.costCenterCode,
            // expenseCode: row.expenseCode,
            // allowOverride: row.allowOverride,
            // budgetFlag: row.budgetFlag,
        });
        this.enterManually = true;
        this.patchItems();
    }
    onDeleteNeedDetails(index) {
        this.dataSource.data.splice(index, 1);
        this.dataSource.data = this.dataSource.data.slice();
    }
    clearForm() {
        this.bgtForm.reset();
        this.editButton = false;
        this.addButton = true;
        this.selectedRowIndex = -1; // Reset the selected row index
        this.showItemsForm = false;
    }
    patchItems() {
        this.mngForm.patchValue({
            needItems: this.dataSource.data,
        });
    }
    createFileForm() {
        this.fileForm = this.fb.group({
            files: this.fb.array([]),
        });
        //this.fileInputs = this.fileForm.get('files') as FormArray;
        this.addFileRow();
    }
    // file: trerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrtysdfxzdgjr634racxzvcnfgerewrsa,
    // filename: currFilename,
    // filetype: currFiletype},
    addFileRow() {
        this.isFileDataLoading = false;
        const row = this.fb.group({
            file: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            filetype: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            filename: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
        });
        //this.fileInputs.push(row);
        this.rows.push(row);
        this.attachementsDataSource.next(this.rows.controls);
    }
    updateView() {
        this.attachementsDataSource.next(this.rows.controls);
        this.mngForm.patchValue({
            needAttachments: this.documentsForm.value.filedetails,
        });
    }
    // deleteCall(index){
    //   this.dataSource.splice(index, 1);
    // }
    deleteCall(row) {
        const dataArray = this.attachementsDataSource.getValue(); // Get the underlying array
        const index = dataArray.indexOf(row); // Find the index of the row
        if (index !== -1) {
            dataArray.splice(index, 1); // Remove 1 item at the specified index
            this.attachementsDataSource.next(dataArray); // Update the BehaviorSubject with the modified array
        }
    }
    onSelectFile(files, selectedRow, index) {
        console.log("row: ", selectedRow.value, index);
        this.isFileLoading.next(true);
        this.selectedFiles = [];
        this.filesService.toBase64(files, this.selectedFiles).subscribe((res) => {
            if (res) {
                this.isFileLoading.next(false);
                this.selectedFiles = res;
                console.log("selectedFiles: ", this.selectedFiles);
                console.log("this.selectedFiles[0].name: ", this.selectedFiles[0].name);
                this.currFile = this.selectedFiles[0].base64;
                const fileName = this.selectedFiles[0].name;
                const fileParts = fileName.split(".");
                const name = fileParts.slice(0, -1).join("."); // Join all parts except the last one
                const extension = fileParts[fileParts.length - 1];
                console.log("Name:", name); // Output: Lease Armotization (3)
                console.log("Extension:", extension); // Output: xlsx
                this.currFilename = name;
                this.currType = extension;
                this.rows.at(index).patchValue({
                    file: this.currFile,
                    filename: this.currFilename,
                    filetype: this.currType,
                });
                console.log("this.documentsForm.value.filedetails: ", this.selectedFiles);
                this.updateView();
            }
        });
    }
    downloadDocument(row) {
        let file = row.value.file;
        let filename = row.value.filename;
        let filetype = row.value.filetype;
        // Download PDF in Chrome etc.
        const source = `${file}`;
        const link = document.createElement("a");
        link.href = source;
        link.download = `${filename}.${filetype}`;
        link.click();
    }
    expenseLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "Single Expense",
            selected: this.selectedExpense,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_expense_lookup_expense_lookup_component__WEBPACK_IMPORTED_MODULE_3__.ExpenseLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("lookupresonse: ", result.data);
            this.mngForm.patchValue({
                expenseCode: result.data[0].expenseCode,
            });
        });
    }
    costCenterLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "Single CostCenter",
            selected: this.selectedCostCenter,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_2__.CcentreLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("lookupresonse: ", result.data);
            this.mngForm.patchValue({
                costcentercode: result.data[0].costCenterCode,
            });
        });
    }
    getAccountNumberByExpAndCostCenter() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpParams()
            .set("costCenterCode", this.mngForm.value.costcentercode)
            .set("expenseCode", this.mngForm.value.expenseCode);
        console.log("params:: ", params);
        this.accountService
            .getGLAccountByExpAndCostCenter(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("resres:: ", res);
                if (res.entity) {
                    this.mngForm.patchValue({
                        accountNumber: res.entity.glaccount,
                    });
                    this.snackbar.showNotification("snackbar-success", res.message);
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
            rxjs__WEBPACK_IMPORTED_MODULE_20__.Subscription;
    }
    catalogueLookup() {
        if (this.mngForm.value.requisitionCategory === "Stock") {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.disableClose = true;
            dialogConfig.width = "880px";
            dialogConfig.data = {
                action: "single item",
                selected: this.selectedItem,
            };
            const dialogRef = this.dialog.open(src_app_erp_inventory_data_lookups_catalogue_lookup_catalogue_lookup_component__WEBPACK_IMPORTED_MODULE_1__.CatalogueLookupComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                console.log("Result:", result);
                if (result && result.data && result.data.length > 0) {
                    const firstItem = result.data[0];
                    console.log("Name:", firstItem);
                    this.bgtForm.patchValue({
                        itemCode: firstItem.itemCode,
                        itemName: firstItem.name,
                        unitOfMeasure: firstItem.unit,
                        itemQuantity: firstItem.quantity,
                        itemDescription: firstItem.description,
                        // expenseCode: firstItem.expenseCode
                    });
                }
            });
        }
        else if (this.mngForm.value.requisitionCategory === "FixedAsset") {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.disableClose = true;
            dialogConfig.width = "880px";
            dialogConfig.data = {
                action: "single item",
                selected: this.selectedItem,
            };
            const dialogRef = this.dialog.open(src_app_erp_fixedassets_data_lookups_asset_catalog_lookup_asset_catalog_lookup_component__WEBPACK_IMPORTED_MODULE_4__.AssetCatalogLookupComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                console.log("Result:", result);
                if (result && result.data && result.data.length > 0) {
                    const firstItem = result.data[0];
                    console.log("Name:", firstItem);
                    this.bgtForm.patchValue({
                        itemCode: firstItem.itemCode,
                        itemName: firstItem.name,
                        unitOfMeasure: firstItem.unit,
                        itemQuantity: firstItem.quantity,
                        itemDescription: firstItem.description,
                        // expenseCode: firstItem.expenseCode
                    });
                }
            });
        }
        else {
            this.snackbar.showNotification("snackbar-danger", "Catalogue can only be used for Stock and Fixed Asset Items!");
        }
    }
    onSubmit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        this.posting = true;
        if (this.mngForm.value.needItems &&
            this.mngForm.value.needItems.length > 0) {
            if (this.pageFunction == "Add") {
                this.needService
                    .addNeeds(this.mngForm.value)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        console.log("res: ", res);
                        if (res.statusCode == 200) {
                            this.snackbar.showNotification("snackbar-success", "Need added successfully");
                            this.router.navigate(["/erp-procurement/needs/all-needs"]);
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
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_20__.Subscription;
            }
            else if (this.pageFunction == "Update") {
                this.needService
                    .updateNeeds(this.mngForm.value)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        if (res.statusCode == 200) {
                            this.snackbar.showNotification("snackbar-success", "Need updated successfully");
                            this.router.navigate(["/erp-procurement/needs/all-needs"]);
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
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_20__.Subscription;
            }
        }
        else {
            this.snackbar.showNotification("snackbar-danger", "Requisition Items cannot be null!!");
        }
    }
    cancel() {
        this.router.navigate(["/erp-procurement/needs/all-needs"]);
    }
    onValidate(userType) {
        let privilege = "";
        switch (userType) {
            case "HOD":
                privilege = "HOD Need Validation";
                break;
            case "PROCUREMENT":
                privilege = "Procurement Need Validation";
                break;
            default:
                return;
        }
        this.hasAccess = this.accessControlService.hasPrivilege("ProcurementModule", [privilege]);
        if (this.hasAccess) {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.width = "650px";
            dialogConfig.data = {
                data: this.formData,
                userType: userType,
            };
            const dialogRef = this.dialog.open(_dialogs_validate_need_validate_need_component__WEBPACK_IMPORTED_MODULE_0__.ValidateNeedComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                this.router.navigate(["/erp-procurement/needs/all-needs"]);
            });
        }
    }
}
ManageNeedComponent.ɵfac = function ManageNeedComponent_Factory(t) { return new (t || ManageNeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_5__.FilesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_need_service__WEBPACK_IMPORTED_MODULE_7__.NeedService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_9__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_erp_budget_data_services_budget_service__WEBPACK_IMPORTED_MODULE_10__.BudgetsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_erp_finance_data_services_gl_accounts_service__WEBPACK_IMPORTED_MODULE_11__.GlAccountsService)); };
ManageNeedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: ManageNeedComponent, selectors: [["app-manage-need"]], viewQuery: function ManageNeedComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 9, vars: 6, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], ["class", "mb-3", 4, "ngIf"], ["class", "body", 4, "ngIf"], [1, "mb-3"], ["color", "primary", "mode", "indeterminate"], [1, "body"], [1, "header"], [1, "row"], ["class", "row mx-2", 4, "ngIf"], [1, "mx-4", 3, "formGroup"], [1, "col-xl-3", "col-lg-3", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width", "mb-0"], ["formControlName", "needType"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "requisitionCategory", 3, "selectionChange"], ["matInput", "", "formControlName", "needTitle", "required", ""], ["matInput", "", "formControlName", "costcentercode"], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "expenseCode"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "needDescription", "required", ""], ["mat-tab-label", ""], [1, "mt-3"], ["class", "mx-4", 3, "formGroup", 4, "ngIf"], [1, "mx-4", "my-4"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-2", 4, "matHeaderCellDef"], ["class", "psl-3 tbl-col-width-per-2", 4, "matCellDef"], ["matColumnDef", "itemCode"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-28", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-28", 4, "matCellDef"], ["matColumnDef", "itemName"], ["matColumnDef", "itemQuantity"], ["matColumnDef", "unitOfMeasure"], ["matColumnDef", "estimatedPrice"], ["matColumnDef", "needByDate"], ["matColumnDef", "itemDescription"], ["matColumnDef", "budgetFlag"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "allowOverride"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], [3, "formGroup"], [2, "margin", "20px"], [1, "table-responsive"], ["matTableExporter", "", "formArrayName", "filedetails", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-6", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-6", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "filename"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-50 filename-cell", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-50 filename-cell", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "filetype"], ["matColumnDef", "selectFile"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-50 selectfile-cell", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-50 selectfile-cell", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "download"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matCellDef"], ["matColumnDef", "action"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [1, "row", "m-t-25"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["align", "end", 1, "example-button-row"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "hidden", "click"], [1, "row", "mx-2"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "bg-color"], [1, "chat"], [1, "chat-header", "clearfix"], [1, "col-6"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages", "mt-2"], [1, "badge", "badge-hod"], [1, "badge", "badge-hod-approved"], [1, "col-12"], [1, "chat-about", "mt-2", "remarks-container"], [1, "chat-with", "remarks"], [1, "remarks-content", "mx-2"], [1, "badge", "badge-procurement"], [1, "badge", "badge-procurement-approved"], [3, "value"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12", "mb-1", 3, "hidden"], ["matInput", "", "formControlName", "itemName", "readonly", ""], ["matInput", "", "formControlName", "unitOfMeasure", "readonly", ""], ["matInput", "", "formControlName", "itemName"], ["matInput", "", "formControlName", "unitOfMeasure"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "itemQuantity"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "estimatedPrice", "mask", "separator", "thousandSeparator", ","], ["matInput", "", "formControlName", "itemDescription"], ["matInput", "", "formControlName", "needByDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1", "float-left"], [1, "float-right"], ["class", "btn-space", "mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], [1, "my-3"], [1, "download-button", 3, "click"], [1, "fa", "fa-download"], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-2"], [1, "psl-3", "tbl-col-width-per-2"], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-28"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-28"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "disabled", "click"], [3, "icon"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-6"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-6", 3, "formGroupName"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "filename-cell"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "filename-cell", 3, "formGroupName"], ["appearance", "fill", 1, "example-full-width", "mt-2", "mr-5"], ["matInput", "", "type", "text", "formControlName", "filename", "placeholder", "Filename", "maxlength", "50"], ["matInput", "", "type", "text", "formControlName", "filetype", "placeholder", "Filetype", "maxlength", "50"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "selectfile-cell"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "selectfile-cell", 3, "formGroupName"], ["type", "file", 3, "disabled", "multiple", "change"], ["file", ""], [1, "column-nowrap", "psl-3", "tbl-col-width-per-30"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["aria-label", "Download"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matRipple", ""], ["colspan", "4"]], template: function ManageNeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ManageNeedComponent_div_7_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ManageNeedComponent_div_8_Template, 201, 32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("title", "Manage Requisitions")("items", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c2))("active_item", "Manage Requisitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.showForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showForm);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_32__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.RequiredValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatSuffix, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabLabel, ngx_mask__WEBPACK_IMPORTED_MODULE_35__.MaskDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__.MatDatepicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_39__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_13__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__.MatProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.MaxLengthValidator, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_27__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_27__.AsyncPipe], styles: [".error-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n}\n\n.error-item[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 10px;\n  border-radius: 20px;\n  padding: 5px 10px;\n}\n\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n  padding: 15px;\n  background-color: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.3s ease;\n}\n\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .chat-with[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333;\n  margin-bottom: 6px;\n}\n\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .chat-num-messages[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 15px;\n  border-radius: 5px;\n  display: inline-block;\n  margin-right: 10px;\n  color: #fff;\n}\n\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .chat-num-messages[_ngcontent-%COMP%]   .badge-hod[_ngcontent-%COMP%] {\n  background-color: #007bff;\n}\n\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .chat-num-messages[_ngcontent-%COMP%]   .badge-hod-approved[_ngcontent-%COMP%] {\n  background-color: #28a745;\n}\n\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .chat-num-messages[_ngcontent-%COMP%]   .badge-procurement[_ngcontent-%COMP%] {\n  background-color: #c99c14;\n}\n\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .chat-num-messages[_ngcontent-%COMP%]   .badge-procurement-approved[_ngcontent-%COMP%] {\n  background-color: #28a745;\n}\n\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .remarks[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .remarks[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .remarks[_ngcontent-%COMP%]   .remarks-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #777;\n  margin-top: 5px;\n}\n\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n.remarks-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n  padding: 15px;\n  background-color: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.3s ease;\n}\n\n.remarks-container[_ngcontent-%COMP%]   .chat-with[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333;\n  margin-bottom: 6px;\n}\n\n.remarks-container[_ngcontent-%COMP%]   .remarks-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #777;\n  margin-top: 5px;\n}\n\n.remarks-container[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1uZWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFQRjs7QUF5Q0U7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXRDSjs7QUE2Q2M7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0NBQUE7QUEzQ2hCOztBQTZDZ0I7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBM0NsQjs7QUErQ2tCO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtBQTlDcEI7O0FBa0RrQjtFQUNFLHlCQWpERjtBQUNsQjs7QUFtRGtCO0VBQ0UseUJBcERPO0FBRzNCOztBQW9Ea0I7RUFDRSx5QkFyRE07QUFHMUI7O0FBcURrQjtFQUNFLHlCQXhEZTtBQUtuQzs7QUF1RGdCO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBckRsQjs7QUF1RGtCO0VBRUUsaUJBQUE7QUF0RHBCOztBQXlEa0I7RUFDRSxlQUFBO0VBQ0EsV0FwRUE7RUFxRUEsZUFBQTtBQXZEcEI7O0FBMkRnQjtFQUNFLHlCQUFBO0FBekRsQjs7QUFtRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0NBQUE7QUFoRUY7O0FBa0VFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWhFSjs7QUFtRUU7RUFDRSxlQUFBO0VBQ0EsV0FyR2dCO0VBc0doQixlQUFBO0FBakVKOztBQW9FRTtFQUNFLHlCQUFBO0FBbEVKIiwiZmlsZSI6Im1hbmFnZS1uZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKjhcclxuLy8gLmVycm9yLWxpc3Qge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC13cmFwOiB3cmFwO1xyXG4vLyB9XHJcblxyXG4uZXJyb3ItbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmVycm9yLWl0ZW0ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gLyogQ3VzdG9tIHN0eWxlIGZvciBIT0QgUmVtYXJrcyAqL1xyXG4vLyAucmVtYXJrcyB7XHJcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgLyogUmVtb3ZlIGJvbGQgc3R5bGUgKi9cclxuLy8gICBjb2xvcjogIzFhMjM3ZTsgLyogRGFyayBibHVlIGNvbG9yIHN1aXRhYmxlIGZvciBhIGJhbmsgRVJQIHN5c3RlbSAqL1xyXG4vLyAgIGZvbnQtc2l6ZTogMThweDsgLyogQWRqdXN0IHRoZSBmb250IHNpemUgYXMgbmVlZGVkICovXHJcbi8vICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogQWRkIHNvbWUgc3BhY2luZyBhdCB0aGUgYm90dG9tIGZvciBhIGNsZWFuIGxvb2sgKi9cclxuLy8gfVxyXG5cclxuLy8gLnJlbWFya3MtY29udGVudCB7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4OyAvKiBBZGp1c3QgdGhlIGZvbnQgc2l6ZSBvZiB0aGUgY29udGVudCBhcyBuZWVkZWQgKi9cclxuLy8gICBjb2xvcjogIzk4MmMyYzsgLyogRGFyayBncmV5IGNvbG9yIGZvciB0aGUgY29udGVudCAqL1xyXG4vLyAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgLyogSXRhbGljaXplIHRoZSBjb250ZW50ICovXHJcbi8vICAgLyogQWRkIGFueSBvdGhlciBzcGVjaWZpYyBzdHlsZXMgZm9yIHRoZSBjb250ZW50IHdpdGhpbiB0aGUgXCJIT0QgUmVtYXJrc1wiIHNlY3Rpb24gKi9cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gQmFkZ2UgQ29sb3JzXHJcbiRiYWRnZS1jb2xvci1ob2Q6ICMwMDdiZmY7IC8vIEJsdWUgZm9yIEhPRFxyXG4kYmFkZ2UtY29sb3ItaG9kLWFwcHJvdmVkOiAjMjhhNzQ1OyAvLyBHcmVlbiBmb3IgSE9EIEFwcHJvdmVkXHJcbiRiYWRnZS1jb2xvci1maW5hbmNlOiAjZTgxYzYyOyAvLyBQaW5rIGZvciBGaW5hbmNlXHJcbiRiYWRnZS1jb2xvci1maW5hbmNlLWFwcHJvdmVkOiAjMjhhNzQ1OyAvLyBHcmVlbiBmb3IgRmluYW5jZSBBcHByb3ZlZFxyXG4kYmFkZ2UtY29sb3ItcHJvY3VyZW1lbnQ6ICNjOTljMTQ7IC8vIFllbGxvdyBmb3IgUHJvY3VyZW1lbnRcclxuJGJhZGdlLWNvbG9yLXByb2N1cmVtZW50LWFwcHJvdmVkOiAjMjhhNzQ1OyAvLyBHcmVlbiBmb3IgUHJvY3VyZW1lbnQgQXBwcm92ZWRcclxuXHJcbi8vIFJlbWFyayBUZXh0IENvbG9yc1xyXG4kcmVtYXJrLXRleHQtY29sb3I6ICM3Nzc7IC8vIEdyYXkgZm9yIHJlbWFyayB0ZXh0XHJcbi8vIERlZmluZSBzdHlsZXMgZm9yIHRoZSBjaGF0IGhlYWRlciBzZWN0aW9uXHJcbi5jb2wteHMtMTIuY29sLXNtLTEyLmNvbC1tZC0xMi5jb2wtbGctMTIge1xyXG4gIC5iZy1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAuY2hhdC1oZWFkZXIge1xyXG4gICAgICAucm93IHtcclxuICAgICAgICAuY29sLTYge1xyXG4gICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIC5jb2wtNiB7XHJcbiAgICAgICAgICAgICAgLmNoYXQtYWJvdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNoYXQtd2l0aCB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2hhdC1udW0tbWVzc2FnZXMge1xyXG4gICAgICAgICAgICAgICAgICAuYmFkZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmOyAvLyBXaGl0ZSB0ZXh0IGZvciBiZXR0ZXIgdmlzaWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyBEZWZpbmUgYmFkZ2UgY29sb3JzIGFuZCBjbGFzcyBuYW1lc1xyXG4gICAgICAgICAgICAgICAgICAuYmFkZ2UtaG9kIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFkZ2UtY29sb3ItaG9kOyAvLyBCbHVlIGZvciBIT0QgQXBwcm92YWxcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmJhZGdlLWhvZC1hcHByb3ZlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhZGdlLWNvbG9yLWhvZC1hcHByb3ZlZDsgLy8gR3JlZW4gZm9yIEhPRCBBcHByb3ZlZFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuYmFkZ2UtcHJvY3VyZW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWRnZS1jb2xvci1wcm9jdXJlbWVudDsgLy8gWWVsbG93IGZvciBQcm9jdXJlbWVudCBBcHByb3ZhbFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuYmFkZ2UtcHJvY3VyZW1lbnQtYXBwcm92ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWRnZS1jb2xvci1wcm9jdXJlbWVudC1hcHByb3ZlZDsgLy8gR3JlZW4gZm9yIFByb2N1cmVtZW50IEFwcHJvdmVkXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmVtYXJrcyB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAucmVtYXJrcy1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZW1hcmstdGV4dC1jb2xvcjsgLy8gR3JheSB0ZXh0IGNvbG9yIGZvciByZW1hcmtzXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4OyAvLyBBZGQgc29tZSBzcGFjaW5nXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnJlbWFya3MtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuXHJcbiAgLmNoYXQtd2l0aCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcblxyXG4gIC5yZW1hcmtzLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICRyZW1hcmstdGV4dC1jb2xvcjsgLy8gVXNlIHRoZSBkZWZpbmVkIHRleHQgY29sb3IgZm9yIHJlbWFya3NcclxuICAgIG1hcmdpbi10b3A6IDVweDsgLy8gQWRkIHNvbWUgc3BhY2luZ1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
//# sourceMappingURL=src_app_erp-procurement_modules_needs_needs_module_ts.js.map
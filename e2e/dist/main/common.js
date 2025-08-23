"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["common"],{

/***/ 93090:
/*!*********************************************************************!*\
  !*** ./src/app/erp-finance/data/services/payment-method.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodService": () => (/* binding */ PaymentMethodService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class PaymentMethodService {
    constructor(http) {
        this.http = http;
    }
    getAllPaymentMethods() {
        const paymentMethodUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/PaymentMethod/all`;
        return this.http.get(paymentMethodUrl);
    }
    getPaymentMethodsByStatus(params) {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/PaymentMethod/fetchbyStatus`;
        return this.http.get(GLAccountManagementUrl, { params });
    }
    getPaymentMethodById(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/PaymentMethod/find/by/id`, { params });
    }
    addPaymentMethods(body) {
        const paymentMethodUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/PaymentMethod/create`;
        return this.http.post(paymentMethodUrl, body);
    }
    deletePaymentMethod(params) {
        const paymentMethodUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/PaymentMethod/delete`;
        return this.http.delete(paymentMethodUrl, { params });
    }
    updatePaymentMethod(dataBody) {
        const paymentMethodUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/PaymentMethod/update`;
        return this.http.put(paymentMethodUrl, dataBody);
    }
    // validatePaymentMethod(params: any): Observable<any> {
    //   const paymentMethodUrl = `${environment.baseUrlFinance}/api/v1/PaymentMethod/modifyStatus`;
    //   return this.http.put<any>(
    //     paymentMethodUrl,
    //     {},
    //     {
    //       params: params,
    //     })
    // }
    uploadBatchPaymentMethods(items) {
        const paymentMethodUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/PaymentMethod/create/bulk`;
        return this.http.post(paymentMethodUrl, items);
    }
    validateBulkPaymentMethods(processedRows) {
        const expenseUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/PaymentMethod/update/state`;
        return this.http.put(expenseUrl, processedRows);
    }
    //*************************************************************************************************
    //Customer Types */
    getAllCustomerTypes() {
        const paymentMethodUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/customertypes/all`;
        return this.http.get(paymentMethodUrl);
    }
    getCustomerTypesByStatus(params) {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/customertypes/fetchbyStatus`;
        return this.http.get(GLAccountManagementUrl, { params });
    }
    getCustomerTypeById(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/customertypes/find/by/id`, { params });
    }
    addCustomerTypes(dataBody) {
        const paymentMethodUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/customertypes/create`;
        return this.http.post(paymentMethodUrl, dataBody);
    }
    deleteCustomerType(params) {
        const paymentMethodUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/customertypes/delete`;
        return this.http.delete(paymentMethodUrl, { params });
    }
    updateCustomerType(dataBody) {
        const paymentMethodUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/customertypes/update`;
        return this.http.put(paymentMethodUrl, dataBody);
    }
    uploadCustomerTypes(items) {
        const paymentMethodUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/customertypes/create/bulk`;
        return this.http.post(paymentMethodUrl, items);
    }
    validateBulkCustomerTypes(processedRows) {
        const expenseUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/customertypes/update/state`;
        return this.http.put(expenseUrl, processedRows);
    }
}
PaymentMethodService.ɵfac = function PaymentMethodService_Factory(t) { return new (t || PaymentMethodService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PaymentMethodService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PaymentMethodService, factory: PaymentMethodService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 99878:
/*!******************************************************************************************!*\
  !*** ./src/app/erp-finance/modules/dashboard/pages/gen-widgets/gen-widgets.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenWidgetsComponent": () => (/* binding */ GenWidgetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_suppliersmanagement_data_supplier_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-suppliersmanagement/data/supplier-categories.service */ 23324);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);




class GenWidgetsComponent {
    constructor(router, SupplierCategoryService) {
        this.router = router;
        this.SupplierCategoryService = SupplierCategoryService;
        this.payablesCount = 3;
        this.receivablesCount = 0;
        this.transactionsCount = 0;
        this.invoicesCount = 0;
    }
    ngOnInit() {
        // this.payables();
        // this.receivables();
        // this.transactions();
        // this.invoices();
    }
    payables() {
        this.router.navigateByUrl('/erp-finance/finance-management/allAccountsPayable');
    }
    salaries() {
        this.router.navigateByUrl('/erp-finance/finance-management/all-salaries');
    }
    transactions() {
        this.router.navigateByUrl('/erp-finance/finance-management/all-system-transactions');
    }
    invoices() {
        this.router.navigateByUrl('/erp-finance/finance-management/allSupplierInvoices');
    }
}
GenWidgetsComponent.ɵfac = function GenWidgetsComponent_Factory(t) { return new (t || GenWidgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_erp_suppliersmanagement_data_supplier_categories_service__WEBPACK_IMPORTED_MODULE_0__.SupplierCategoriesService)); };
GenWidgetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GenWidgetsComponent, selectors: [["app-gen-widgets"]], decls: 65, vars: 4, consts: [[1, "row"], [1, "col-xl-3", "col-lg-6", 3, "click"], [1, "card", "bg-kingdom"], [1, "card-statistic-3"], [1, "card-icon", "card-icon-large"], [1, "fas", "fa-user-plus"], [1, "card-content"], [1, "card-title"], [1, "data-1"], ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow", "l-orange-progress", "mt-2", "mb-2"], [1, "mb-0", "text-sm"], [1, "mr-2"], [1, "fa", "fa-arrow-up"], [1, "text-nowrap"], [1, "fab", "fa-buromobelexperte"], ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow", "l-purple-progress", "mt-2", "mb-2"], [1, "fas", "fa-coins"], ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow", "l-green-progress", "mt-2", "mb-2"], [1, "fas", "fa-users"], ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow", "l-sky-progress", "mt-2", "mb-2"]], template: function GenWidgetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_1_listener() { return ctx.payables(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Payables");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 10)(13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_17_listener() { return ctx.salaries(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2)(19, "div", 3)(20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6)(23, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Salaries");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mat-progress-bar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 10)(29, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_33_listener() { return ctx.transactions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 2)(35, "div", 3)(36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 6)(39, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "mat-progress-bar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 10)(45, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_49_listener() { return ctx.invoices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 2)(51, "div", 3)(52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 6)(55, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "mat-progress-bar", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 10)(61, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.payablesCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.receivablesCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.transactionsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.invoicesCount);
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBar], styles: [".bg-kingdom[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #1f162d, #005700);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbi13aWRnZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdURBQUE7QUFDRiIsImZpbGUiOiJnZW4td2lkZ2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1raW5nZG9tIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWYxNjJkLCAjMDA1NzAwKTtcbn1cblxuXG4vLyAuYmcta2luZ2RvbSB7XG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjM2Q4NWMxLCAjMTA0MTc5KTtcblxuLy8gfVxuIl19 */"] });


/***/ }),

/***/ 23267:
/*!*****************************************************************************************************!*\
  !*** ./src/app/erp-finance/modules/finance-management/finance-reports/finance-reports.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinanceReportsComponent": () => (/* binding */ FinanceReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard/pages/gen-widgets/gen-widgets.component */ 99878);



const _c0 = function () { return ["Reports"]; };
class FinanceReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
FinanceReportsComponent.ɵfac = function FinanceReportsComponent_Factory(t) { return new (t || FinanceReportsComponent)(); };
FinanceReportsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FinanceReportsComponent, selectors: [["app-finance-reports"]], decls: 5, vars: 4, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"]], template: function FinanceReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Reports")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0))("active_item", "Reports");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_1__.GenWidgetsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5hbmNlLXJlcG9ydHMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 57416:
/*!*****************************************************************************!*\
  !*** ./src/app/erp-hr/data/employee-services/employee-documents.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDocumentsService": () => (/* binding */ EmployeeDocumentsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);





class EmployeeDocumentsService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Content-Type", "application/json");
        this.baseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/employee_documents`;
    }
    create(data) {
        let API_URL = `${this.baseURL}/create`;
        return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    read() {
        let API_URL = `${this.baseURL}/all`;
        return this.http.get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readByStatusAndEmpId(params) {
        let API_URL = `${this.baseURL}/fetch_by_empid_and_status`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readById(id) {
        let API_URL = `${this.baseURL}/find/by/id`;
        return this.http.get(API_URL, { withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    update(data) {
        let API_URL = `${this.baseURL}/update`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    delete(params) {
        let API_URL = `${this.baseURL}/delete`;
        return this.http.delete(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    verify(processedRows) {
        const expenseUrl = `${this.baseURL}/update/state`;
        return this.http.put(expenseUrl, processedRows);
    }
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `${error.error.message}`;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
    }
}
EmployeeDocumentsService.ɵfac = function EmployeeDocumentsService_Factory(t) { return new (t || EmployeeDocumentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
EmployeeDocumentsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: EmployeeDocumentsService, factory: EmployeeDocumentsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 77417:
/*!********************************************************************!*\
  !*** ./src/app/erp-hr/data/job-services/job-management.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobManagementService": () => (/* binding */ JobManagementService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






class JobManagementService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Content-Type", "application/json");
        this.baseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/job/management`;
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
    readByStatusAndApplicationType(params) {
        let API_URL = `${this.baseURL}/fetchbyStatusAndApplicationType`;
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
    readByStatusAndJobNumber(params) {
        let API_URL = `${this.baseURL}/by_jobrefnumber_and_status`;
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
    readById(params) {
        let API_URL = `${this.baseURL}/find/by/id`;
        return this.http
            .get(API_URL, { params: params, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
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
JobManagementService.ɵfac = function JobManagementService_Factory(t) { return new (t || JobManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
JobManagementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: JobManagementService, factory: JobManagementService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 88067:
/*!**************************************************************!*\
  !*** ./src/app/erp-hr/data/kpi-services/kpi-goal.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KpiGoalService": () => (/* binding */ KpiGoalService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






class KpiGoalService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json');
        this.baseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/kpi/goals`;
    }
    create(data) {
        let API_URL = `${this.baseURL}/create`;
        return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getKPIsData() {
        let API_URL = `${this.baseURL}/all`;
        return this.http.get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getEmployeeKPIsData(params) {
        let API_URL = `${this.baseURL}/all/by/employee`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getEmployeeKPIsScoreData(params) {
        let API_URL = `${this.baseURL}/find/scores`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    generateScoreExcel(params) {
        let API_URL = `${this.baseURL}/report/excel`;
        return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false });
    }
    getKPIEmployeesByCostCenter(params) {
        let API_URL = `${this.baseURL}/employee-kpi-by-cost-center`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getKPIEmployees(params) {
        let API_URL = `${this.baseURL}/employeekpi`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getKPIScores(params) {
        let API_URL = `${this.baseURL}/employeekpi`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    update(data) {
        let API_URL = `${this.baseURL}/update`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    submit(params) {
        let API_URL = `${this.baseURL}/submit`;
        return this.http.put(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    sentToFinance(params) {
        let API_URL = `${this.baseURL}/submit/to/finance`;
        return this.http.put(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getFinanceSalaryStatus(params) {
        let API_URL = `${this.baseURL}/find/all/from/finance`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getPayslips(params) {
        let API_URL = `${this.baseURL}/find/payslip/by/year/month/status/state`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getKPIsPerEmpPF(params) {
        let API_URL = `${this.baseURL}/find/by/empf/year`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getPayslipPerEmpPF(params) {
        let API_URL = `${this.baseURL}/find/payslip/by/empf/year`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getKPIsAnalysis(params) {
        let API_URL = `${this.baseURL}/find/KPI/analysis`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    approvedSelectedKPIs(data) {
        let API_URL = `${this.baseURL}/verify`;
        return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    find(id) {
        let API_URL = `${this.baseURL}/find/${id}`;
        return this.http.get(API_URL, { withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    updateState(data) {
        let API_URL = `${this.baseURL}/update/state`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    appraisalApprove(params) {
        let API_URL = `${this.baseURL}/appraisal/approve`;
        return this.http.put(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    rerunKPI(data) {
        let API_URL = `${this.baseURL}/revise`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    updateKPI(data) {
        let API_URL = `${this.baseURL}/update/`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    deleteKPI(param) {
        var API_URL = `${this.baseURL}/delete`;
        return this.http.delete(API_URL, { params: param, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    appraisal(params) {
        let API_URL = `${this.baseURL}/appraisal`;
        return this.http.put(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `${error.error.message}`;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
    }
}
KpiGoalService.ɵfac = function KpiGoalService_Factory(t) { return new (t || KpiGoalService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
KpiGoalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: KpiGoalService, factory: KpiGoalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 65912:
/*!************************************************************************************!*\
  !*** ./src/app/erp-procurement/data/services/_procurement-calculations.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculationService": () => (/* binding */ CalculationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CalculationService {
    calculateTax(quantity, finalPrice, taxRate) {
        const subTotal = Number(quantity) * Number(finalPrice);
        const taxAmount = (subTotal * Number(taxRate)) / 100;
        const totalAmount = subTotal + taxAmount;
        console.log("subTotal: ", subTotal);
        console.log("taxAmount: ", taxAmount);
        console.log("totalAmount: ", totalAmount);
        return {
            subTotal: subTotal,
            taxAmount: taxAmount,
            totalAmount: totalAmount,
        };
    }
    calculateTotals(data) {
        let subTotalAmount = 0;
        let totalTax = 0;
        let grandtotalAmount = 0;
        for (const element of data) {
            subTotalAmount += Number(element.subTotal);
            totalTax += Number(element.taxAmount);
            grandtotalAmount += Number(element.totalAmount);
        }
        return {
            number: data.length,
            totalTax: totalTax,
            subTotalAmount: subTotalAmount,
            totalAmount: grandtotalAmount,
            purchaseRequisitionItems: data.slice(),
        };
    }
}
CalculationService.ɵfac = function CalculationService_Factory(t) { return new (t || CalculationService)(); };
CalculationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalculationService, factory: CalculationService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 19513:
/*!******************************************************************************!*\
  !*** ./src/app/erp-procurement/data/services/applications-matrix.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationMatrixService": () => (/* binding */ ApplicationMatrixService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class ApplicationMatrixService {
    constructor(http) {
        this.http = http;
    }
    getApplicationMatrix() {
        const ApplicationMatrixUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rankingmatrix/all`;
        return this.http.get(ApplicationMatrixUrl);
    }
    getApplicationMatrixById(params) {
        const ApplicationMatrixssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rankingmatrix/find/by/id`;
        return this.http.get(ApplicationMatrixssUrl, { params: params, });
    }
    addApplicationMatrix(data) {
        const ApplicationMatrixUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rankingmatrix/add`;
        return this.http.post(ApplicationMatrixUrl, data);
    }
    updateApplicationMatrix(ApplicationMatrixDetails) {
        const ApplicationMatrix = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rankingmatrix/modify`;
        return this.http.put(ApplicationMatrix, ApplicationMatrixDetails);
    }
    deleteApplicationMatrixTemporarily(params) {
        const ApplicationMatrixUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rankingmatrix/delete`;
        return this.http.delete(ApplicationMatrixUrl, { params });
    }
    getApplicationMatrixByCode(params) {
        const ApplicationMatrixssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rankingmatrix/find/by/refcode`;
        return this.http.get(ApplicationMatrixssUrl, { params: params, });
    }
}
ApplicationMatrixService.ɵfac = function ApplicationMatrixService_Factory(t) { return new (t || ApplicationMatrixService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ApplicationMatrixService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApplicationMatrixService, factory: ApplicationMatrixService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map
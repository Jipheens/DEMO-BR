"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["default-src_app_erp-hr_modules_dashboard_dashboard_module_ts"],{

/***/ 84651:
/*!***************************************************!*\
  !*** ./src/@core/Models/months/months.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthsService": () => (/* binding */ MonthsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MonthsService {
    constructor() { }
    months() {
        return [
            {
                value: 1,
                name: 'JANUARY'
            },
            {
                value: 2,
                name: 'FEBRUARY'
            },
            {
                value: 3,
                name: 'MARCH'
            },
            {
                value: 4,
                name: 'APRIL'
            },
            {
                value: 5,
                name: 'MAY'
            },
            {
                value: 6,
                name: 'JUNE'
            },
            {
                value: 7,
                name: 'JULY'
            },
            {
                value: 8,
                name: 'AUGUST'
            },
            {
                value: 9,
                name: 'SEPTEMBER'
            },
            {
                value: 10,
                name: 'OCTOBER'
            }, {
                value: 11,
                name: 'NOVEMBER'
            },
            {
                value: 12,
                name: 'DECEMBER'
            },
        ];
    }
}
MonthsService.ɵfac = function MonthsService_Factory(t) { return new (t || MonthsService)(); };
MonthsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MonthsService, factory: MonthsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 37831:
/*!**************************************************************************!*\
  !*** ./src/app/erp-hr/data/payroll-services/payroll-analysis.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollAnalysisService": () => (/* binding */ PayrollAnalysisService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






class PayrollAnalysisService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json');
        this.baseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v2/payroll/analysis`;
    }
    findAll(params) {
        let API_URL = `${this.baseURL}/all`;
        return this.http.get(API_URL, { params: params, withCredentials: false })
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
PayrollAnalysisService.ɵfac = function PayrollAnalysisService_Factory(t) { return new (t || PayrollAnalysisService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
PayrollAnalysisService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PayrollAnalysisService, factory: PayrollAnalysisService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 34237:
/*!************************************************************************!*\
  !*** ./src/app/erp-hr/data/payroll-services/payroll-circle.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollCircleService": () => (/* binding */ PayrollCircleService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






class PayrollCircleService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json');
        this.baseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v2/payroll/circle`;
    }
    open(params) {
        let API_URL = `${this.baseURL}/open`;
        return this.http.post(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    findAll() {
        let API_URL = `${this.baseURL}/all`;
        return this.http.get(API_URL, { withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    close(params) {
        let API_URL = `${this.baseURL}/close`;
        return this.http.post(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    reopen(params) {
        let API_URL = `${this.baseURL}/reopen`;
        return this.http.post(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
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
PayrollCircleService.ɵfac = function PayrollCircleService_Factory(t) { return new (t || PayrollCircleService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
PayrollCircleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PayrollCircleService, factory: PayrollCircleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 85598:
/*!****************************************************************!*\
  !*** ./src/app/erp-hr/data/payroll-services/salary.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalaryService": () => (/* binding */ SalaryService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






class SalaryService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json');
        this.baseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v2/payroll/`;
    }
    getSalarySummary(params) {
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v2/payroll/summary/per/month&year`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getYearSalarySummary(params) {
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v2/payroll/summary/per/year`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getEmployeeSalarySummary(params) {
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v2/payroll/employee/summary/per/year`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getPayrollYears() {
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v2/payroll/years`;
        return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    commitEmployeeSalary(id) {
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/hr/commit//${id}`;
        return this.http.put(API_URL, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    commitAllEmployeeSalary() {
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/payroll/commit/all/employee/salary`;
        return this.http.put(API_URL, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getEmployeeLastMonthsSalary(employee_id) {
        let API_URL = `${this.baseURL}employee/list/six/months/${employee_id}`;
        return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            console.log(API_URL);
            console.log(res);
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getSalaryByYearAndMonth(params) {
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/payroll/salary/detail/per/year/month`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getSalary() {
        let API_URL = `${this.baseURL}`;
        return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    countPaidEmployees(department_id) {
        console.log("hey server", department_id);
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/payroll/count/paid/department/employees/${department_id}`;
        return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getCurrentMonthSalaryDetail() {
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/payroll/salary/current/month/salary/detail`;
        return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getUnCommitedSalary() {
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/payroll/salary/not/commited`;
        return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getMonthlySalary() {
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/payroll/yearly/salary`;
        return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getDepartmentMonthlySalary(department_id) {
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/payroll/yearly/salary/by/department/${department_id}`;
        return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getEmployees() {
        let API_URL = `${this.baseURL}/all`;
        return this.http.get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    find(id) {
        let API_URL = `${this.baseURL}/find/${id}`;
        return this.http
            .get(API_URL, {
            headers: this.headers,
            withCredentials: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getEmployeeId(id) {
        let API_URL = `${this.baseURL}/find/${id}`;
        return this.http.get(API_URL, { withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    updateEmployee(id, data) {
        return this.http.put(this.baseURL, data, { headers: this.headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    updateBasicSalary(id, params) {
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/payroll/update/${id}`;
        return this.http.put(API_URL, {}, { params: params, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    deleteEmployee(id) {
        var API_URL = `${this.baseURL}/delete/${id}`;
        return this.http.delete(API_URL, { withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
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
SalaryService.ɵfac = function SalaryService_Factory(t) { return new (t || SalaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
SalaryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SalaryService, factory: SalaryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 79998:
/*!**********************************************************************!*\
  !*** ./src/app/erp-hr/modules/dashboard/dashboard-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 55864);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    // { path: "", component: DashboardComponent },
    { path: '', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard], data: { clientName: "HumanResourceModule", requiredPrivilege: ['Dashboard'] } },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 27970:
/*!**************************************************************!*\
  !*** ./src/app/erp-hr/modules/dashboard/dashboard.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 79998);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 55864);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/gen-widgets/gen-widgets.component */ 44912);
/* harmony import */ var _pages_components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/components/analytics/analytics.component */ 82102);
/* harmony import */ var _pages_components_core_hr_core_hr_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/components/core-hr/core-hr.component */ 17873);
/* harmony import */ var _pages_components_payroll_dashboard_payroll_bargraph_payroll_bargraph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/components/payroll-dashboard/payroll-bargraph/payroll-bargraph.component */ 19311);
/* harmony import */ var _pages_components_payroll_dashboard_closure_analysis_closure_analysis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/components/payroll-dashboard/closure-analysis/closure-analysis.component */ 30548);
/* harmony import */ var _pages_components_payroll_dashboard_payroll_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/components/payroll-dashboard/payroll-dashboard.component */ 63298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);












class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        _pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__.GenWidgetsComponent,
        _pages_components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_5__.AnalyticsComponent,
        _pages_components_core_hr_core_hr_component__WEBPACK_IMPORTED_MODULE_6__.CoreHrComponent,
        _pages_components_payroll_dashboard_closure_analysis_closure_analysis_component__WEBPACK_IMPORTED_MODULE_8__.ClosureAnalysisComponent, _pages_components_payroll_dashboard_payroll_bargraph_payroll_bargraph_component__WEBPACK_IMPORTED_MODULE_7__.PayrollBargraphComponent, _pages_components_payroll_dashboard_payroll_dashboard_component__WEBPACK_IMPORTED_MODULE_9__.PayrollDashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule], exports: [_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__.GenWidgetsComponent, _pages_components_payroll_dashboard_payroll_dashboard_component__WEBPACK_IMPORTED_MODULE_9__.PayrollDashboardComponent] }); })();


/***/ }),

/***/ 82102:
/*!********************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/dashboard/pages/components/analytics/analytics.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsComponent": () => (/* binding */ AnalyticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _core_hr_core_hr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core-hr/core-hr.component */ 17873);
/* harmony import */ var _payroll_dashboard_payroll_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payroll-dashboard/payroll-dashboard.component */ 63298);






function AnalyticsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Core HR Statistics ");
} }
function AnalyticsComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "monetization_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Payroll Statistics ");
} }
class AnalyticsComponent {
    constructor(tokenCookieService) {
        this.tokenCookieService = tokenCookieService;
    }
    ngOnInit() {
        this.currentUser = this.tokenCookieService.getUser().username;
    }
}
AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) { return new (t || AnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__.TokenCookieService)); };
AnalyticsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AnalyticsComponent, selectors: [["app-analytics"]], decls: 24, vars: 1, consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "body"], [1, "row", "align-items-center"], [1, "col-md-2", "p-2"], ["src", "assets/images/pngegg8.png", "alt", "", "width", "250px", "height", "170px", 1, "px-2", "mx-2"], [1, "col-md-10"], [1, "font-20", "weight-500", "mb-2"], [1, "weight-600", "font-30", "col-green", "pt-1"], [1, "font-18", "max-width-600"], ["mat-tab-label", ""], [1, ""]], template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7)(8, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Welcome back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "We strive to offer a seamless payment and invoicing experience to meet your needs. For any inquiries or concerns, please don't hesitate to reach out to us. Thank you for choosing our finance system..");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 2)(15, "mat-tab-group")(16, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AnalyticsComponent_ng_template_17_Template, 3, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "app-core-hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, AnalyticsComponent_ng_template_21_Template, 3, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "app-payroll-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.currentUser, "!");
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _core_hr_core_hr_component__WEBPACK_IMPORTED_MODULE_1__.CoreHrComponent, _payroll_dashboard_payroll_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.PayrollDashboardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFseXRpY3MuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 17873:
/*!****************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/dashboard/pages/components/core-hr/core-hr.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreHrComponent": () => (/* binding */ CoreHrComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 75972);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_erp_hr_data_configuration_services_analysis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-hr/data/configuration-services/analysis.service */ 91781);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);













function CoreHrComponent_mat_header_cell_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CoreHrComponent_mat_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r25 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r25 + 1);
} }
function CoreHrComponent_mat_header_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Department Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CoreHrComponent_mat_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r26.departmentname, " ");
} }
function CoreHrComponent_mat_header_cell_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Total Employees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CoreHrComponent_mat_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r27.totalEmployees, " ");
} }
function CoreHrComponent_mat_header_cell_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Turnover Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CoreHrComponent_mat_cell_39_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r28.turnoverrate);
} }
function CoreHrComponent_mat_cell_39_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r28.turnoverrate);
} }
function CoreHrComponent_mat_cell_39_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r28.turnoverrate);
} }
function CoreHrComponent_mat_cell_39_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r28.turnoverrate);
} }
function CoreHrComponent_mat_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreHrComponent_mat_cell_39_span_1_Template, 2, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CoreHrComponent_mat_cell_39_span_2_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CoreHrComponent_mat_cell_39_span_3_Template, 2, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CoreHrComponent_mat_cell_39_span_4_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r28.turnoverrate < 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r28.turnoverrate >= 30 && row_r28.turnoverrate < 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r28.turnoverrate >= 50 && row_r28.turnoverrate < 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r28.turnoverrate >= 70);
} }
function CoreHrComponent_mat_header_row_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
} }
function CoreHrComponent_mat_row_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
} }
function CoreHrComponent_mat_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
function CoreHrComponent_mat_header_cell_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CoreHrComponent_mat_cell_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r39 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r39 + 1);
} }
function CoreHrComponent_mat_header_cell_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No. of Employees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CoreHrComponent_mat_cell_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r40.goalsno, " ");
} }
function CoreHrComponent_mat_header_cell_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Turnover Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CoreHrComponent_mat_cell_63_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r41.classification);
} }
function CoreHrComponent_mat_cell_63_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r41.classification);
} }
function CoreHrComponent_mat_cell_63_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r41.classification);
} }
function CoreHrComponent_mat_cell_63_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r41.classification);
} }
function CoreHrComponent_mat_cell_63_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r41.classification);
} }
function CoreHrComponent_mat_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreHrComponent_mat_cell_63_span_1_Template, 2, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CoreHrComponent_mat_cell_63_span_2_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CoreHrComponent_mat_cell_63_span_3_Template, 2, 1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CoreHrComponent_mat_cell_63_span_4_Template, 2, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CoreHrComponent_mat_cell_63_span_5_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r41.classification == "Exceptional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r41.classification == "Exceeds Targets");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r41.classification == "Met Targets");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r41.classification == "Needs Improvement");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r41.classification == "Unsatisfactory");
} }
function CoreHrComponent_mat_header_row_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
} }
function CoreHrComponent_mat_row_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
} }
function CoreHrComponent_mat_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
const _c0 = function () { return [5, 10, 20, 30, 40, 50, 100]; };
class CoreHrComponent {
    constructor(analysisAPI, notificationAPI) {
        this.analysisAPI = analysisAPI;
        this.notificationAPI = notificationAPI;
        this.displayedColumns = [
            "index",
            "departmentname",
            "totalEmployees",
            "turnoverrate"
        ];
        this.displayedColumns2 = [
            "index",
            "goalsno",
            "classification"
        ];
        this.currentDate = new Date();
        this.year = this.currentDate.getFullYear();
        this.showCharts = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getData();
    }
    getData() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams()
            .set('Year', this.year);
        this.analysisAPI.getAdminAnalysis(params).subscribe(res => {
            this.dataResp = res;
            const xKpiAxis = [];
            const seriesKpi1Array = [];
            const series2KpiArray = [];
            for (const item of this.dataResp.kpigoalstatus) {
                xKpiAxis.push(item.departmentname);
                seriesKpi1Array.push(item.submittedcount);
                series2KpiArray.push(item.pendingcount);
            }
            this.showKpigoalstatus(xKpiAxis, seriesKpi1Array, series2KpiArray);
            this.activeEmployees = this.dataResp.activeEmployees;
            this.leaveRequest = this.dataResp.leaveRequest;
            this.genderDetails = this.dataResp.genderDetails;
            this.newEmployees = this.dataResp.newEmployees;
            this.newOpenings = this.dataResp.newOpenings;
            this.dataAgeDistrib = this.dataResp.ageDistributions;
            const employeeCount = [];
            const ageGroup = [];
            for (const item of this.dataAgeDistrib) {
                employeeCount.push(item.count);
                ageGroup.push(item.agerange);
            }
            this.showAgeDistribution(employeeCount, ageGroup);
            this.showMaleVsFemaleOptions(this.genderDetails.female, this.genderDetails.male);
            const activeArray = [];
            const departmentArray = [];
            for (const item of this.dataResp.activeEmployeePerDepartment) {
                activeArray.push(item.active);
                departmentArray.push(item.departmentname);
            }
            this.showActiveEmployeePerDepartment(activeArray, departmentArray);
            const xAxis = [];
            const series1Array = [];
            const series2Array = [];
            for (const item of this.dataResp.joinersandLeavers) {
                xAxis.push(item.monthname);
                series1Array.push(item.joinerscount);
                series2Array.push(item.leaverscount);
            }
            this.showJoinersAndLeaversChart(xAxis, series1Array, series2Array);
            this.showTurnOverRate(this.dataResp.employeeTurnOverRate);
            this.showKpiAnaysis(this.dataResp.kpiClassifications);
            this.showPerfomancePerDepartment(activeArray, departmentArray);
            this.showCharts = true;
        });
    }
    showTurnOverRate(dtDetails) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(dtDetails);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    showKpiAnaysis(dtDetails) {
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(dtDetails);
        this.dataSource2.paginator = this.paginator;
        this.dataSource2.sort = this.sort;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    transformMonths(originalData) {
        const periodmArray = [];
        for (const item of originalData) {
            const periodm = item.periodm.trim();
            periodmArray.push(periodm);
        }
        return periodmArray;
    }
    transformEmployeeData(originalData) {
        let employeeArray = new Array();
        for (const item of originalData) {
            employeeArray.push(Number(item.employeeCount));
        }
        return employeeArray;
    }
    transformSalaryData(originalData) {
        let salaryArray = new Array();
        for (const item of originalData) {
            salaryArray.push(item.grosspay);
        }
        return salaryArray;
    }
    isValidYear(input) {
        const year = parseInt(input, 10);
        return year >= 1000 && year <= 9999;
    }
    onSelectedYear(event) {
        if (this.isValidYear(event.target.value)) {
            this.year = event.target.value;
            this.getData();
        }
        else {
        }
    }
    showJoinersAndLeaversChart(yAxisData, series1, series2) {
        this.joinersAndLeaversChart = {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Joiners and Leavers Per Month in an Year',
            },
            subtitle: {
                text: 'API ERP Server',
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: yAxisData,
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Employee Number',
                },
            },
            tooltip: {
                headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Joiners",
                    color: '#157d05',
                    data: series1
                }, {
                    name: "Leavers",
                    color: '#fc5203',
                    data: series2
                },
            ],
        };
        highcharts__WEBPACK_IMPORTED_MODULE_0__.chart('joinersAndLeaversChart', this.joinersAndLeaversChart);
    }
    showActiveEmployeePerDepartment(yAxisData, xAxisData) {
        this.activeEmpPerDepartmentChart = {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Average Number of Active Employee per Department',
            },
            subtitle: {
                text: 'API ERP Server',
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: xAxisData,
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Employee Number',
                },
            },
            tooltip: {
                headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Employees",
                    color: '#157d05',
                    data: yAxisData
                },
            ],
        };
        highcharts__WEBPACK_IMPORTED_MODULE_0__.chart('activeEmpPerDepartmentChart', this.activeEmpPerDepartmentChart);
    }
    showMaleVsFemaleOptions(fm, mm) {
        let total = fm + mm;
        this.male = Math.round((mm / total) * 100);
        this.female = Math.round((fm / total) * 100);
        this.maleVsFemaleOptions = {
            chart: {
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Employee Gender Ratio'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            credits: {
                enabled: false,
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: true
                }
            },
            series: [{
                    type: 'pie',
                    name: 'Gender Ratio',
                    data: [
                        {
                            name: 'Male Employees - ' + this.male + '%',
                            y: this.male,
                            color: '#157d05',
                        },
                        {
                            name: 'Female Employees - ' + this.female + '%',
                            y: this.female,
                            color: '#000000',
                        },
                    ]
                }]
        };
        highcharts__WEBPACK_IMPORTED_MODULE_0__.chart('maleVsFemaleOptions', this.maleVsFemaleOptions);
    }
    showPerfomancePerDepartment(yAxisData, xAxisData) {
        this.perfomancePerDepartment = {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Distribution Graph based on Average Score per Department',
            },
            subtitle: {
                text: 'API ERP Server',
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: xAxisData,
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Avg. Score',
                },
            },
            tooltip: {
                headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Departments",
                    color: '#157d05',
                    data: yAxisData
                },
            ],
        };
        highcharts__WEBPACK_IMPORTED_MODULE_0__.chart('perfomancePerDepartment', this.perfomancePerDepartment);
    }
    showAgeDistribution(yAxisData, xAxisData) {
        this.ageDistribuition = {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Employee Age Distribution (Employee vs Age Group)',
            },
            subtitle: {
                text: 'API ERP Server',
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: xAxisData,
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Employee Count',
                },
            },
            tooltip: {
                headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Age Group",
                    color: '#157d05',
                    data: yAxisData
                },
            ],
        };
        highcharts__WEBPACK_IMPORTED_MODULE_0__.chart('ageDistribuition', this.ageDistribuition);
    }
    showKpigoalstatus(yAxisData, series1, series2) {
        this.kpigoalstatusChart = {
            chart: {
                type: 'column',
            },
            title: {
                text: 'KPI Goals - Submited and Unsubmitted per Departments',
            },
            subtitle: {
                text: 'API ERP Server',
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: yAxisData,
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Department',
                },
            },
            tooltip: {
                headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Submitted",
                    color: '#157d05',
                    data: series1
                }, {
                    name: "Unsubmmitted",
                    color: '#fc5203',
                    data: series2
                },
            ],
        };
        highcharts__WEBPACK_IMPORTED_MODULE_0__.chart('kpigoalstatusChart', this.kpigoalstatusChart);
    }
}
CoreHrComponent.ɵfac = function CoreHrComponent_Factory(t) { return new (t || CoreHrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_hr_data_configuration_services_analysis_service__WEBPACK_IMPORTED_MODULE_1__.AnalysisService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_2__.NotificationServiceService)); };
CoreHrComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CoreHrComponent, selectors: [["app-core-hr"]], viewQuery: function CoreHrComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 74, vars: 10, consts: [[1, "row", "mx-2"], [1, "col-md-6", "col-sm-12", "card"], [1, "row"], [1, "col-md-4", "col-sm-12", 2, "font-size", "8px"], ["placeholder", "Year", 1, "pull-right", "form-control", 3, "keyup"], ["input", ""], [1, "col-md-8", "col-sm-12"], [1, "col-md-12", "col-sm-12"], ["id", "joinersAndLeaversChart"], ["id", "maleVsFemaleOptions", 1, "mat-elevation-z1"], ["id", "activeEmpPerDepartmentChart"], [1, "header"], [1, "title"], [1, "filter"], ["placeholder", "Filter...", 1, "form-control", 3, "keyup"], [1, "content"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "index"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "departmentname"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-40", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-40", 4, "matCellDef"], ["matColumnDef", "totalEmployees"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matCellDef"], ["matColumnDef", "turnoverrate"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-25", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-25", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["aria-label", "Select page", 3, "pageSizeOptions"], ["matColumnDef", "goalsno"], ["matColumnDef", "classification"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-45", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-45", 4, "matCellDef"], ["id", "kpigoalstatusChart"], ["id", "ageDistribuition", 1, "mat-elevation-z1"], [1, "col-md-6", "col-sm-12"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-40"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-40"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-25"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-25"], ["class", "badge badge-pill badge-success", 4, "ngIf"], ["class", "badge badge-pill badge-primary", 4, "ngIf"], ["class", "badge badge-pill badge-warning", 4, "ngIf"], ["class", "badge badge-pill badge-danger", 4, "ngIf"], [1, "badge", "badge-pill", "badge-success"], [1, "badge", "badge-pill", "badge-primary"], [1, "badge", "badge-pill", "badge-warning"], [1, "badge", "badge-pill", "badge-danger"], ["colspan", "4"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-45"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-45"], ["class", "badge badge-pill badge-info", 4, "ngIf"], [1, "badge", "badge-pill", "badge-info"]], template: function CoreHrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CoreHrComponent_Template_input_keyup_5_listener($event) { return ctx.onSelectedYear($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 2)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 0)(15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 1)(18, "div", 11)(19, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Employee Turnover Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 13)(22, "input", 14, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CoreHrComponent_Template_input_keyup_22_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15)(26, "mat-table", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](28, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, CoreHrComponent_mat_header_cell_29_Template, 2, 0, "mat-header-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CoreHrComponent_mat_cell_30_Template, 2, 1, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](31, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, CoreHrComponent_mat_header_cell_32_Template, 2, 0, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CoreHrComponent_mat_cell_33_Template, 2, 1, "mat-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](34, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, CoreHrComponent_mat_header_cell_35_Template, 2, 0, "mat-header-cell", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, CoreHrComponent_mat_cell_36_Template, 2, 1, "mat-cell", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](37, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, CoreHrComponent_mat_header_cell_38_Template, 2, 0, "mat-header-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, CoreHrComponent_mat_cell_39_Template, 5, 4, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, CoreHrComponent_mat_header_row_40_Template, 1, 0, "mat-header-row", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, CoreHrComponent_mat_row_41_Template, 1, 0, "mat-row", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, CoreHrComponent_mat_cell_42_Template, 2, 1, "mat-cell", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "mat-paginator", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 2)(45, "div", 1)(46, "div", 11)(47, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "KPI Classification");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 13)(50, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CoreHrComponent_Template_input_keyup_50_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 15)(53, "mat-table", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](55, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, CoreHrComponent_mat_header_cell_56_Template, 2, 0, "mat-header-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, CoreHrComponent_mat_cell_57_Template, 2, 1, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](58, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, CoreHrComponent_mat_header_cell_59_Template, 2, 0, "mat-header-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, CoreHrComponent_mat_cell_60_Template, 2, 1, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](61, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, CoreHrComponent_mat_header_cell_62_Template, 2, 0, "mat-header-cell", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, CoreHrComponent_mat_cell_63_Template, 6, 5, "mat-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, CoreHrComponent_mat_header_row_64_Template, 1, 0, "mat-header-row", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, CoreHrComponent_mat_row_65_Template, 1, 0, "mat-row", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, CoreHrComponent_mat_cell_66_Template, 2, 1, "mat-cell", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "mat-paginator", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 2)(71, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_8__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator], styles: [".row[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n}\n\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  transition: border-color 0.15s ease-in-out;\n}\n\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n}\n\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.card[_ngcontent-%COMP%]   .mat-paginator[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUtaHIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDSTtFQUNFLFNBQUE7QUFDTjs7QUFHTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBRFI7O0FBR1E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFEVjs7QUFPRTtFQUNFLGFBQUE7QUFMSjs7QUFRRTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFOSiIsImZpbGUiOiJjb3JlLWhyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuXG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLmZpbHRlciB7XG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3Ige1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 30548:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/dashboard/pages/components/payroll-dashboard/closure-analysis/closure-analysis.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClosureAnalysisComponent": () => (/* binding */ ClosureAnalysisComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_core_Models_months_months_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@core/Models/months/months.service */ 84651);
/* harmony import */ var src_app_erp_hr_data_payroll_services_payroll_analysis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-hr/data/payroll-services/payroll-analysis.service */ 37831);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_payroll_services_payroll_circle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-hr/data/payroll-services/payroll-circle.service */ 34237);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 11961);


















function ClosureAnalysisComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p")(2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading, please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-progress-bar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ClosureAnalysisComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClosureAnalysisComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r12.category, " ");
} }
function ClosureAnalysisComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Previous Payroll for ", ctx_r3.prevPeriodY, " ", ctx_r3.prevPeriodM, " ");
} }
function ClosureAnalysisComponent_td_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r13.prevPayroll, " ");
} }
function ClosureAnalysisComponent_td_21_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, row_r13.prevPayroll, "Ksh."), " ");
} }
function ClosureAnalysisComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ClosureAnalysisComponent_td_21_ng_container_1_Template, 2, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ClosureAnalysisComponent_td_21_ng_container_2_Template, 3, 4, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", row_r13.category === "Employee")("ngIfElse", ctx_r4.otherStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", row_r13.category != "Employee")("ngIfElse", ctx_r4.otherStatus);
} }
function ClosureAnalysisComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Current Payroll for ", ctx_r5.currPeriodY, " ", ctx_r5.currPeriodM, " ");
} }
function ClosureAnalysisComponent_td_24_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r18.currPayroll, " ");
} }
function ClosureAnalysisComponent_td_24_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, row_r18.currPayroll, "Ksh."), " ");
} }
function ClosureAnalysisComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ClosureAnalysisComponent_td_24_ng_container_1_Template, 2, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ClosureAnalysisComponent_td_24_ng_container_2_Template, 3, 4, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", row_r18.category === "Employee")("ngIfElse", ctx_r6.otherStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", row_r18.category != "Employee")("ngIfElse", ctx_r6.otherStatus);
} }
function ClosureAnalysisComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Turnover Rate(%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClosureAnalysisComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r23.turnOverRate, " % ");
} }
function ClosureAnalysisComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 30);
} }
function ClosureAnalysisComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 31);
} }
function ClosureAnalysisComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 32)(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r11.input.value, "\"");
} }
const _c0 = function () { return [10, 20, 30, 40, 50, 100]; };
class ClosureAnalysisComponent {
    constructor(monthAPI, payrollAnalysisAPI, router, notificationAPI, payrollCircleAPi, fb) {
        this.monthAPI = monthAPI;
        this.payrollAnalysisAPI = payrollAnalysisAPI;
        this.router = router;
        this.notificationAPI = notificationAPI;
        this.payrollCircleAPi = payrollCircleAPi;
        this.fb = fb;
        this.displayedColumns = [
            "category",
            "prevPayroll",
            "currPayroll",
            "turnOverRate"
        ];
        this.departmentArray = new Array();
        this.departmentId = 0;
        this.jobGroupFk = 0;
        this.jobGroupArray = new Array();
        this.currPeriodY = new Date().getFullYear();
        this.currPeriodM = new Date(Date.UTC(0, new Date().getMonth())).toLocaleString('en-US', { month: 'long' }).toUpperCase();
        this.currIsFinal = 'N';
        this.prevPeriodY = this.currPeriodY - 1;
        this.prevMonthINT = (new Date().getMonth() === 0) ? 11 : new Date().getMonth() - 1;
        this.prevPeriodM = new Date(Date.UTC(0, this.prevMonthINT)).toLocaleString('en-US', { month: 'long' }).toUpperCase();
        this.prevIsFinal = 'Y';
        this.selected_date = (d) => {
            const day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
        // this.fmData = this.router.getCurrentNavigation().extras.queryParams.fmData;
        this.initDates();
        this.getYears();
        this.getMonths();
    }
    ngOnDestroy() {
    }
    ngOnInit() {
        this.getPayrollData();
        this.initFormData();
    }
    initDates() {
        // this.currPeriodY = this.fmData.periodY;
        // this.currPeriodM = this.fmData.periodM;
        this.currIsFinal = 'N';
        this.prevMonthINT = (new Date().getMonth() === 0) ? 11 : new Date().getMonth() - 1;
        this.prevPeriodM = new Date(Date.UTC(0, this.prevMonthINT)).toLocaleString('en-US', { month: 'long' }).toUpperCase();
        this.prevIsFinal = 'Y';
        if (this.prevPeriodM == "DECEMBER") {
            this.prevPeriodY = this.currPeriodY - 1;
        }
        else {
            this.prevPeriodY = this.currPeriodY;
        }
    }
    initFormData() {
        this.formData = this.fb.group({
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            validsignature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    getMonths() {
        this.monthsArray = this.monthAPI.months();
        this.month = this.monthsArray[new Date().getMonth()].name;
    }
    getYears() {
        this.yearsArray = Array();
        this.currentYear = new Date().getFullYear();
        for (let i = (this.currentYear - 5); i < (this.currentYear + 1); i++) {
            this.yearsArray.push(i);
        }
    }
    onSelectedYear(event) {
        this.prevPeriodY = event.target.value;
        this.getPayrollData();
    }
    onSelectedMonth(event) {
        this.prevPeriodM = event.target.value;
        this.getPayrollData();
    }
    getPayrollData() {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams()
            .set('prevPeriodY', this.prevPeriodY)
            .set('prevPeriodM', this.prevPeriodM)
            .set('prevIsFinal', this.prevIsFinal)
            .set('currPeriodY', this.currPeriodY)
            .set('currPeriodM', this.currPeriodM)
            .set('currIsFinal', this.currIsFinal);
        this.payrollAnalysisAPI.findAll(param).subscribe(res => {
            this.dataResp = res;
            this.dataResp = this.dataResp.entity;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.dataResp);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    onSubmit() {
        console.log(this.fmData);
        this.loading = true;
        if (window.confirm('Are you sure you want to close payroll for this period?')) {
            if (this.formData.valid) {
                if (this.formData.controls.validsignature.value === 'FINAL ENTRY') {
                    let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams()
                        .set('payrollCircleCode', this.fmData.payrollCircleCode)
                        .set('closingRemarks', this.formData.controls.remarks.value);
                    this.payrollCircleAPi.close(param).subscribe(res => {
                        this.loading = false;
                        this.dataResp = res;
                        if (this.dataResp.statusCode == 200) {
                            this.loading = false;
                            this.notificationAPI.alertSuccess(this.dataResp.message);
                            this.router.navigate([`/administration/payroll/close`], { skipLocationChange: true });
                        }
                        else {
                            this.loading = false;
                            this.notificationAPI.alertSuccess(this.dataResp.message);
                        }
                    });
                }
                else {
                    this.loading = false;
                    this.notificationAPI.alertWarning("YOU MUST ENTER THE CORRECT APPROVAL");
                }
            }
            else {
                this.loading = false;
                this.notificationAPI.alertWarning("INVALID FORM DATA");
            }
        }
    }
}
ClosureAnalysisComponent.ɵfac = function ClosureAnalysisComponent_Factory(t) { return new (t || ClosureAnalysisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_core_Models_months_months_service__WEBPACK_IMPORTED_MODULE_0__.MonthsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_hr_data_payroll_services_payroll_analysis_service__WEBPACK_IMPORTED_MODULE_1__.PayrollAnalysisService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_2__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_hr_data_payroll_services_payroll_circle_service__WEBPACK_IMPORTED_MODULE_3__.PayrollCircleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
ClosureAnalysisComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ClosureAnalysisComponent, selectors: [["app-closure-analysis"]], viewQuery: function ClosureAnalysisComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 32, vars: 6, consts: [[1, "mat-elevation-z1"], [1, "row"], [4, "ngIf"], [1, "breadcrumb"], ["routerLink", "/administration/", "skipLocationChange", ""], ["routerLink", " ", "skipLocationChange", ""], [1, "row", "mb-2"], [1, "col-md-12"], [1, "table-row"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "category"], ["mat-header-cell", "", "mat-sort-header", "", "class", "p-3 mb-2 bg-success text-white", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "p-3 mb-2 bg-success text-white", 4, "matCellDef"], ["matColumnDef", "prevPayroll"], ["mat-cell", "", "class", "p-3 mb-2 bg-primary text-white", 4, "matCellDef"], ["matColumnDef", "currPayroll"], ["mat-cell", "", "class", "p-3 mb-2 bg-secondary text-white", 4, "matCellDef"], ["matColumnDef", "turnOverRate"], ["mat-cell", "", "class", "p-3 mb-2 bg-warning text-black", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of Payroll", 3, "pageSizeOptions"], ["mode", "query"], ["mat-header-cell", "", "mat-sort-header", "", 1, "p-3", "mb-2", "bg-success", "text-white"], ["mat-cell", "", 1, "p-3", "mb-2", "bg-success", "text-white"], ["mat-cell", "", 1, "p-3", "mb-2", "bg-primary", "text-white"], [4, "ngIf", "ngIfElse"], ["mat-cell", "", 1, "p-3", "mb-2", "bg-secondary", "text-white"], ["mat-cell", "", 1, "p-3", "mb-2", "bg-warning", "text-black"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function ClosureAnalysisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ClosureAnalysisComponent_div_2_Template, 6, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card-header", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Dashboard / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Payroll / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6)(12, "div", 1)(13, "div", 7)(14, "div", 8)(15, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ClosureAnalysisComponent_th_17_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ClosureAnalysisComponent_td_18_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ClosureAnalysisComponent_th_20_Template, 2, 2, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ClosureAnalysisComponent_td_21_Template, 3, 4, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ClosureAnalysisComponent_th_23_Template, 2, 2, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ClosureAnalysisComponent_td_24_Template, 3, 4, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ClosureAnalysisComponent_th_26_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ClosureAnalysisComponent_td_27_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ClosureAnalysisComponent_tr_28_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ClosureAnalysisComponent_tr_29_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ClosureAnalysisComponent_tr_30_Template, 3, 1, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "mat-paginator", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBar, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardHeader, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe], styles: [".bg-success[_ngcontent-%COMP%] {\n  background-color: #1d8802;\n}\n\n.monitorIconSize[_ngcontent-%COMP%] {\n  font-size: 50px;\n  height: 50px;\n  width: 50px;\n}\n\n.img-card[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n\n.mb-2[_ngcontent-%COMP%] {\n  padding: 5px !important;\n  margin: 5px auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3N1cmUtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0M7RUFDRyx5QkFBQTtBQUpKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSEo7O0FBS0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUlFO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQURKIiwiZmlsZSI6ImNsb3N1cmUtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiBcblxuXG5cbiAuYmctc3VjY2Vzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEzNiwgMik7XG4gfVxuLm1vbml0b3JJY29uU2l6ZSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGhlaWdodDogNTBweCA7XG4gICAgd2lkdGg6IDUwcHggO1xuICB9XG4gIC5pbWctY2FyZHtcbiAgICBoZWlnaHQ6IDUwcHggO1xuICAgIHdpZHRoOiA1MHB4IDtcbiAgfVxuICAubWItMntcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuIl19 */"] });


/***/ }),

/***/ 19311:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/dashboard/pages/components/payroll-dashboard/payroll-bargraph/payroll-bargraph.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollBargraphComponent": () => (/* binding */ PayrollBargraphComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 75972);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_erp_hr_data_payroll_services_salary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-hr/data/payroll-services/salary.service */ 85598);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 88133);












function PayrollBargraphComponent_form_20_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", item_r4.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.year);
} }
function PayrollBargraphComponent_form_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 12)(1, "p")(2, "mat-form-field")(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Select Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function PayrollBargraphComponent_form_20_Template_mat_select_selectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.getMonthWise($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PayrollBargraphComponent_form_20_mat_option_6_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.datewiseForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.years);
} }
function PayrollBargraphComponent_form_21_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", item_r9.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.year);
} }
function PayrollBargraphComponent_form_21_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", item_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r10);
} }
function PayrollBargraphComponent_form_21_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 12)(1, "div", 1)(2, "div", 8)(3, "p")(4, "mat-form-field")(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Select Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function PayrollBargraphComponent_form_21_Template_mat_select_selectionChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.getDateWise($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PayrollBargraphComponent_form_21_mat_option_8_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "p")(11, "mat-form-field")(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Select Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function PayrollBargraphComponent_form_21_Template_mat_select_selectionChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.getDateWise($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PayrollBargraphComponent_form_21_mat_option_15_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.datewiseForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.years);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.monthsArray);
} }
class PayrollBargraphComponent {
    constructor(fb, salaryAPI) {
        this.fb = fb;
        this.salaryAPI = salaryAPI;
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
        this.$destroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.needYear = false;
        this.needMonth = false;
        this.chartDispType = ['Year-wise', 'Month-wise', 'Date-wise'];
        this.monthsArray = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
        this.currentYear = new Date().getFullYear();
        this.currentMonth = this.monthsArray[new Date().getMonth()];
        this.datewiseForm = this.fb.group({
            period: [''],
            year: ['2023'],
            month: [this.currentMonth],
        });
    }
    ngOnDestroy() {
        this.$destroy.next(true);
        this.$destroy.complete();
    }
    ngOnInit() {
        this.getYears();
        this.getYearWiseData(2021);
        this.showChart();
    }
    onSelectedYear(e) {
    }
    getYears() {
        this.salaryAPI.getPayrollYears().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.$destroy)).subscribe({
            next: ((res) => {
                this.yearArray = res;
            }),
            error: ((err) => {
            }), complete: (() => {
            })
        });
    }
    onSelectPeriod(event) {
        this.getYearWiseData(event.value);
    }
    getYearWiseData(year) {
        this.selectedYear = year;
        const monthsArray = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
            .set('period_y', year);
        this.salaryAPI.getYearSalarySummary(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.$destroy)).subscribe({
            next: ((res) => {
            }),
            error: ((err) => {
            }), complete: (() => {
            })
        });
    }
    showChart() {
        this.barChartoptions = {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Average Numer of Employee per Month',
            },
            subtitle: {
                text: 'API Internal Server',
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Employee Number',
                },
            },
            tooltip: {
                headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: 'Period in Months',
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6,
                        148.5, 216.4, 194.1, 95.6, 54.4]
                },
            ],
        };
        highcharts__WEBPACK_IMPORTED_MODULE_0__.chart('Account-chart', this.barChartoptions);
    }
}
PayrollBargraphComponent.ɵfac = function PayrollBargraphComponent_Factory(t) { return new (t || PayrollBargraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_erp_hr_data_payroll_services_salary_service__WEBPACK_IMPORTED_MODULE_1__.SalaryService)); };
PayrollBargraphComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PayrollBargraphComponent, selectors: [["app-payroll-bargraph"]], decls: 24, vars: 3, consts: [[1, "mat-elevation-z1", "bg-white"], [1, "row"], [1, "breadcrumb"], ["routerLink", "/administration/", "skipLocationChange", ""], ["routerLink", " ", "skipLocationChange", ""], [1, "col-md-3"], ["type", "number", "placeholder", "Year", 1, "pull-right", "form-control", 3, "blur"], ["input", ""], [1, "col-md-6"], [1, "col-md-8"], [3, "formGroup", 4, "ngIf"], ["id", "Account-chart", 1, "mat-elevation-z1", "bg-white"], [3, "formGroup"], ["formControlName", "year", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "month", 3, "selectionChange"]], template: function PayrollBargraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card-header", 2)(3, "div")(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Dashboard / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Payroll / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 1)(12, "div", 5)(13, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blur", function PayrollBargraphComponent_Template_input_blur_13_listener($event) { return ctx.onSelectedYear($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 5)(17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, PayrollBargraphComponent_form_20_Template, 7, 2, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, PayrollBargraphComponent_form_21_Template, 16, 3, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "hr")(23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Data for: ", ctx.selectedYear, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.needYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.needMonth);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlyb2xsLWJhcmdyYXBoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 63298:
/*!************************************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/dashboard/pages/components/payroll-dashboard/payroll-dashboard.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollDashboardComponent": () => (/* binding */ PayrollDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 75972);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_core_Models_months_months_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@core/Models/months/months.service */ 84651);
/* harmony import */ var src_app_erp_hr_data_payroll_services_payroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/data/payroll-services/payroll.service */ 13317);
/* harmony import */ var src_app_erp_hr_data_configuration_services_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-hr/data/configuration-services/department.service */ 72365);
/* harmony import */ var src_app_erp_hr_data_configuration_services_jobgroup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-hr/data/configuration-services/jobgroup.service */ 54646);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_payroll_services_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/erp-hr/data/payroll-services/report.service */ 89430);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);

























function PayrollDashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p")(2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading, please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-progress-bar", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function PayrollDashboardComponent_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter previous period year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_option_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", month_r66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](month_r66);
} }
function PayrollDashboardComponent_mat_error_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Please select a previous Period Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter Current period year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_option_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", month_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](month_r67);
} }
function PayrollDashboardComponent_mat_error_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Please select a current Period Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_header_cell_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r68.category, " ");
} }
function PayrollDashboardComponent_mat_header_cell_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Previous Payroll ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r69.prevPayroll, " ");
} }
function PayrollDashboardComponent_mat_header_cell_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Current Payroll ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r70.currPayroll, " ");
} }
function PayrollDashboardComponent_mat_header_cell_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Change Rate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r71.changeRate, " ");
} }
function PayrollDashboardComponent_mat_header_row_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
} }
function PayrollDashboardComponent_mat_row_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-row", 99);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("cursor", "pointer");
} }
function PayrollDashboardComponent_tr_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("colspan", ctx_r20.displayedColumnsAnalysis.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r20.inputs, "\" ");
} }
function PayrollDashboardComponent_div_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p")(2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading, please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-progress-bar", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function PayrollDashboardComponent_option_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", element_r73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r73, " ");
} }
function PayrollDashboardComponent_mat_header_cell_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Index ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r74.index + 1, " ");
} }
function PayrollDashboardComponent_mat_header_cell_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Payroll ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r75.payrollId, " ");
} }
function PayrollDashboardComponent_mat_header_cell_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Employee ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r76.employeeId, " ");
} }
function PayrollDashboardComponent_mat_header_cell_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r77.name, " ");
} }
function PayrollDashboardComponent_mat_header_cell_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r78.empStartDate, " ");
} }
function PayrollDashboardComponent_mat_header_cell_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Working Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r79.workingDays, " ");
} }
function PayrollDashboardComponent_mat_header_cell_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Basic Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r80.basicSalary, " ");
} }
function PayrollDashboardComponent_mat_header_cell_197_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " GrossSalary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_198_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r81.grossSalary, " ");
} }
function PayrollDashboardComponent_mat_header_cell_200_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " NHIF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r82.nhif, " ");
} }
function PayrollDashboardComponent_mat_header_cell_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " NSSF");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_204_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r83.nssf, " ");
} }
function PayrollDashboardComponent_mat_header_cell_206_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ChargeablePay");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_207_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r84.chargeablePay, " ");
} }
function PayrollDashboardComponent_mat_header_cell_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " TaxableCharge ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r85.taxableCharge, " ");
} }
function PayrollDashboardComponent_mat_header_cell_212_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " InsuranceRelief ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_213_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r86.insuranceRelief, " ");
} }
function PayrollDashboardComponent_mat_header_cell_215_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " PersonalRelief ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_216_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r87.personalRelief, " ");
} }
function PayrollDashboardComponent_mat_header_cell_218_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " PAYE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_219_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r88.paye, " ");
} }
function PayrollDashboardComponent_mat_header_cell_221_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " HousingLevy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_222_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r89.housingLevy, " ");
} }
function PayrollDashboardComponent_mat_header_cell_224_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " NetSalary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r90.netSalary, " ");
} }
function PayrollDashboardComponent_mat_header_cell_227_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PayrollDashboardComponent_mat_cell_228_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r91.status, " ");
} }
function PayrollDashboardComponent_mat_header_row_229_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
} }
function PayrollDashboardComponent_mat_row_230_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-row", 99);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("cursor", "pointer");
} }
function PayrollDashboardComponent_tr_231_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("colspan", ctx_r64.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r64.inputs, "\" ");
} }
function PayrollDashboardComponent_div_232_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p")(2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading, please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-progress-bar", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
const _c0 = function () { return [10, 20, 30, 40, 50, 100]; };
const _c1 = function () { return [7, 20, 30, 40, 50, 100]; };
class PayrollDashboardComponent {
    constructor(monthAPI, payrollService, departmentAPI, jobGroupAPI, notificationAPI, reportService, fb) {
        this.monthAPI = monthAPI;
        this.payrollService = payrollService;
        this.departmentAPI = departmentAPI;
        this.jobGroupAPI = jobGroupAPI;
        this.notificationAPI = notificationAPI;
        this.reportService = reportService;
        this.fb = fb;
        this.displayedColumns = [
            "index",
            "payrollId",
            "employeeId",
            "name",
            "empStartDate",
            "workingDays",
            "basicSalary",
            "grossSalary",
            "nhif",
            "nssf",
            "chargeablePay",
            "taxableCharge",
            "insuranceRelief",
            "personalRelief",
            "paye",
            "housingLevy",
            "netSalary",
            "status",
        ];
        this.displayedColumnsAnalysis = [
            "category",
            "prevPayroll",
            "currPayroll",
            "changeRate",
        ];
        this.employeeState = ["EXITED", "EXISTED", "JOINED"];
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
        // year = new Date().getFullYear();
        this.currentMonthIndex = new Date().getMonth();
        // month: any;
        this.currentYear = new Date().getFullYear();
        this.prevYear = new Date().getFullYear();
        this.departmentArray = new Array();
        this.departmentId = 0;
        this.jobGroupFk = 0;
        this.jobGroupArray = new Array();
        this.isFinal = "Y";
        this.currIsFinal = "Y";
        this.prevIsFinal = "Y";
        this.category = "EXISTED";
        this.active = 0;
        this.exited = 0;
        this.joined = 0;
        this.months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        // this.getDepartments();
        // this.getJobGroups();
        // this.getData();
    }
    ngOnDestroy() { }
    ngOnInit() {
        // this.getMonths();
        const currentYear = new Date().getFullYear();
        const currentMonthIndex = new Date().getMonth();
        const currentMonthName = this.months[currentMonthIndex];
        this.Form = this.fb.group({
            prevPeriodY: [currentYear],
            prevPeriodM: [currentMonthName],
            prevIsFinal: ['N'],
            currPeriodY: [currentYear],
            currPeriodM: [currentMonthName],
            currIsFinal: ['N'],
        });
        this.Form.valueChanges.subscribe(() => {
            this.getData();
        });
    }
    ngAfterViewInit() {
        this.getData();
    }
    // getMonths() {
    //   this.monthsArray = this.monthAPI.months();
    //   this.currentMonth = this.monthsArray[new Date().getMonth()].name;
    // }
    // getDepartments() {
    //   let params = { status: "APPROVED" };
    //   this.departmentAPI.readByStatus(params).subscribe((res) => {
    //     let departmentKey = {
    //       id: 0,
    //       name: "All",
    //     };
    //     this.departmentArray.push(departmentKey);
    //     for (let i = 0; i < res.entity.length; i++) {
    //       let departmentKey = {
    //         id: res.entity[i].id,
    //         name: res.entity[i].departmentName,
    //       };
    //       this.departmentArray.push(departmentKey);
    //     }
    //   });
    // }
    // getJobGroups() {
    //   this.jobGroupAPI.read().subscribe((res) => {
    //     let itemKey = {
    //       id: 0,
    //       name: "All",
    //     };
    //     this.jobGroupArray.push(itemKey);
    //     for (let i = 0; i < res.entity.length; i++) {
    //       let itemKey = {
    //         id: res.entity[i].id,
    //         name: res.entity[i].jobGroupName,
    //       };
    //       this.jobGroupArray.push(itemKey);
    //     }
    //   });
    // }
    // isValidYear(input: any): boolean {
    //   const year = parseInt(input, 10);
    //   return year >= 1000 && year <= 9999;
    // }
    // onSelectCurrYear(event: any) {
    //   if (this.isValidYear(event.target.value)) {
    //     this.currentYear = event.target.value;
    //     this.getData();
    //   } else {
    //     this.notificationAPI.alertWarning("Invalid Year");
    //   }
    // }
    // onSelectedCurrMonth(event: any) {
    //   this.currentMonth = event.target.value;
    //   this.getData();
    // }
    // onSelectPrevYear(event: any) {
    //   if (this.isValidYear(event.target.value)) {
    //     this.prevYear = event.target.value;
    //     this.getData();
    //   } else {
    //     this.notificationAPI.alertWarning("Invalid Year");
    //   }
    // }
    // onSelectedPrevMonth(event: any) {
    //   this.prevMonth = event.target.value;
    //   this.getData();
    // }
    // onSelectedDepartment(event: any) {
    //   this.departmentId = event.target.value;
    //   this.getData();
    // }
    // onSelectedJobGroup(event: any) {
    //   this.jobGroupFk = event.target.value;
    //   this.getData();
    // }
    // onSelectedEmployeeState(event: any) {
    //   this.category = event.target.value;
    //   this.getData();
    // }
    getData() {
        this.loading = true;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams()
            .set("prevPeriodY", this.Form.value.prevPeriodY)
            .set("prevPeriodM", this.Form.value.prevPeriodM)
            .set("prevIsFinal", this.Form.value.prevIsFinal)
            .set("currPeriodY", this.Form.value.currPeriodY)
            .set("currPeriodM", this.Form.value.currPeriodM)
            .set("currIsFinal", this.Form.value.currIsFinal);
        this.payrollService.getAllPayrollsAnalysis(params).subscribe((res) => {
            var _a, _b, _c;
            console.log("this.datathis.data:: ", this.data);
            this.data = res;
            if (this.data.statusCode == "200" || this.data.statusCode == "302") {
                this.data = this.data.entity;
                if (this.data && this.data.payrollcategoriescounts) {
                    this.active = (_a = this.data.payrollcategoriescounts.active) !== null && _a !== void 0 ? _a : 0;
                    this.exited = (_b = this.data.payrollcategoriescounts.exited) !== null && _b !== void 0 ? _b : 0;
                    this.joined = (_c = this.data.payrollcategoriescounts.joined) !== null && _c !== void 0 ? _c : 0;
                }
                if (this.data && this.data.chartdata) {
                    this.showEmployeeChart(this.data.chartdata);
                    this.showSalaryChart(this.data.chartdata);
                }
                if (this.data && this.data.payrollAnalaysis) {
                    this.getPayrollData(this.data.payrollAnalaysis);
                }
                this.data = this.data.payrolllist;
                if (this.data && (this.data.length != null || this.data.length > 0)) {
                    if (this.departmentId != 0) {
                        this.data = this.data.filter((item) => item.department_id == this.departmentId);
                    }
                    if (this.jobGroupFk != 0) {
                        this.data = this.data.filter((item) => item.jobGroupFk == this.jobGroupFk);
                    }
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
            }
            else {
                this.notificationAPI.alertWarning(this.data.message);
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.data.entity);
            }
            this.loading = false;
        }, (err) => {
            this.loading = false;
        });
    }
    getPayrollData(data) {
        this.dataSourceAnalysis = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(data);
        this.dataSourceAnalysis.paginator = this.paginator;
        this.dataSourceAnalysis.sort = this.sort;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.inputs = filterValue;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    transformMonths(originalData) {
        const periodmArray = [];
        for (const item of originalData) {
            const periodm = item.periodm.trim();
            periodmArray.push(periodm);
        }
        return periodmArray;
    }
    transformEmployeeData(originalData) {
        let employeeArray = new Array();
        for (const item of originalData) {
            employeeArray.push(Number(item.employeeCount));
        }
        return employeeArray;
    }
    transformSalaryData(originalData) {
        let salaryArray = new Array();
        for (const item of originalData) {
            salaryArray.push(item.grosspay);
        }
        return salaryArray;
    }
    showEmployeeChart(originalData) {
        this.employeeChartoptions = {
            chart: {
                type: "column",
            },
            title: {
                text: "Average Numer of Employee per Month",
            },
            subtitle: {
                text: "API Internal Server",
            },
            credits: {
                enabled: false,
            },
            xAxis: {
                categories: this.transformMonths(originalData),
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Employee Number",
                },
            },
            tooltip: {
                headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: "</table>",
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Employee",
                    data: this.transformEmployeeData(originalData),
                },
            ],
        };
        highcharts__WEBPACK_IMPORTED_MODULE_0__.chart("employeeChartoptions", this.employeeChartoptions);
    }
    showSalaryChart(originalData) {
        this.barChartoptions = {
            chart: {
                type: "column",
            },
            title: {
                text: "Average Gross Pay of Employee per Month",
            },
            subtitle: {
                text: "API Internal Server",
            },
            credits: {
                enabled: false,
            },
            xAxis: {
                categories: this.transformMonths(originalData),
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Amount",
                },
            },
            tooltip: {
                headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: "</table>",
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Salary",
                    data: this.transformSalaryData(originalData),
                },
            ],
        };
        highcharts__WEBPACK_IMPORTED_MODULE_0__.chart("Account-chart", this.barChartoptions);
    }
    downloadAnalysis() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams()
            .set("prevYear", this.prevYear)
            .set("prevMonth", this.prevMonth)
            .set("currYear", this.currentYear)
            .set("currMonth", this.currentMonth)
            .set("category", this.category)
            .set("prevIsFinal", this.prevIsFinal)
            .set("currIsFinal", this.currIsFinal);
        let filename = "Report for " + this.category;
        this.reportService.generateAnalysis(params).subscribe((data) => {
            if (data.statusCode == "404") {
                this.notificationAPI.alertWarning(data.message);
            }
            else {
                this.saveToFileSystem(filename, data, this.currentYear, this.currentMonth);
            }
            this.loading = false;
        });
    }
    saveToFileSystem(filename, response, year, month) {
        const blob = new Blob([response], { type: "application/vnd.ms-excel" });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.download = filename + "_for_" + year + "_" + month + ".xlsx";
        anchor.href = url;
        anchor.click();
    }
}
PayrollDashboardComponent.ɵfac = function PayrollDashboardComponent_Factory(t) { return new (t || PayrollDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_core_Models_months_months_service__WEBPACK_IMPORTED_MODULE_1__.MonthsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_hr_data_payroll_services_payroll_service__WEBPACK_IMPORTED_MODULE_2__.PayrollService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_hr_data_configuration_services_department_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_hr_data_configuration_services_jobgroup_service__WEBPACK_IMPORTED_MODULE_4__.JobgroupService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_5__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_hr_data_payroll_services_report_service__WEBPACK_IMPORTED_MODULE_6__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder)); };
PayrollDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PayrollDashboardComponent, selectors: [["app-payroll-dashboard"]], viewQuery: function PayrollDashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 234, vars: 24, consts: [[1, "card"], [1, "mx-4"], [1, "row"], [4, "ngIf"], [1, "row", "mt-2"], [1, "col-xl-4", "col-lg-6"], [1, "card", "l-bg-green-dark"], [1, "card-statistic-3"], [1, "card-icon", "card-icon-large"], [1, "fa", "fa-briefcase"], [1, "card-content"], [1, "card-title"], [1, "data-1"], ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow", "l-orange-progress", "mt-2", "mb-2"], [1, "mb-0", "text-sm"], [1, "mr-2"], [1, "fa", "fa-arrow-up"], [1, "text-nowrap"], [1, "card", "l-bg-cyan-dark"], [1, "fas", "fa-users"], ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow", "l-purple-progress", "mt-2", "mb-2"], [1, "card", "l-bg-purple-dark"], [1, "fa", "fa-globe"], ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow", "l-green-progress", "mt-2", "mb-2"], [1, "table-responsive"], [1, "materialTableHeader", "mt-0"], [3, "formGroup"], [1, "col-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "prevPeriodY"], ["formControlName", "prevPeriodM"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "currPeriodY"], ["formControlName", "currPeriodM"], [1, "materialTableHeader", "mt-2"], [1, "col-5"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], [1, "col-3"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "category"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "prevPayroll"], ["matColumnDef", "currPayroll"], ["matColumnDef", "changeRate"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["aria-label", "Select page of Payroll", 3, "pageSizeOptions"], [1, "materialTableHeader"], ["aria-label", "Default select example", 1, "form-select"], ["selected", ""], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-small", "btn-block", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["matColumnDef", "index"], ["class", "tbl-col-width-per-5", 4, "matHeaderCellDef"], ["class", "tbl-col-width-per-5", 4, "matCellDef"], ["matColumnDef", "payrollId"], ["class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matCellDef"], ["matColumnDef", "employeeId"], ["matColumnDef", "name"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["matColumnDef", "empStartDate"], ["matColumnDef", "workingDays"], ["class", "tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "basicSalary"], ["matColumnDef", "grossSalary"], ["matColumnDef", "nhif"], ["matColumnDef", "nssf"], ["matColumnDef", "chargeablePay"], ["matColumnDef", "taxableCharge"], ["matColumnDef", "insuranceRelief"], ["matColumnDef", "personalRelief"], ["matColumnDef", "paye"], ["matColumnDef", "housingLevy"], ["matColumnDef", "netSalary"], ["matColumnDef", "status"], ["mode", "query"], [3, "value"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], ["matRipple", ""], [3, "colspan"], [1, "tbl-col-width-per-5"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], [1, "tbl-col-width-per-10"]], template: function PayrollDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, PayrollDashboardComponent_div_3_Template, 6, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 10)(11, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Employees who Joined");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "mat-progress-bar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "p", 14)(17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 5)(22, "div", 18)(23, "div", 7)(24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 10)(27, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Active Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "mat-progress-bar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "p", 14)(33, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 5)(38, "div", 21)(39, "div", 7)(40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 10)(43, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Employees who Exited");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "mat-progress-bar", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "p", 14)(49, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, " Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 24)(54, "div", 25)(55, "form", 26)(56, "div", 2)(57, "div", 27)(58, "mat-form-field", 28)(59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Prev Period Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, PayrollDashboardComponent_mat_error_62_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 27)(64, "mat-form-field", 28)(65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Previous Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "mat-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, PayrollDashboardComponent_mat_option_68_Template, 2, 2, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, PayrollDashboardComponent_mat_error_69_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 27)(71, "mat-form-field", 28)(72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "Current Period Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](74, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, PayrollDashboardComponent_mat_error_75_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 27)(77, "mat-form-field", 28)(78, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "Current Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "mat-select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, PayrollDashboardComponent_mat_option_81_Template, 2, 2, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, PayrollDashboardComponent_mat_error_82_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 34)(84, "div", 2)(85, "div", 35)(86, "ul", 36)(87, "li", 37)(88, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "Payroll Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "li", 38)(91, "label", 39)(92, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "input", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function PayrollDashboardComponent_Template_input_keyup_94_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](96, "div", 27)(97, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 43)(99, "ul", 44)(100, "li")(101, "div", 45)(102, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PayrollDashboardComponent_Template_img_click_102_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](114); return _r9.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "li")(104, "div", 47)(105, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PayrollDashboardComponent_Template_img_click_105_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](114); return _r9.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "li")(107, "div", 49)(108, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PayrollDashboardComponent_Template_img_click_108_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](114); return _r9.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "li")(110, "div", 51)(111, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PayrollDashboardComponent_Template_img_click_111_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](114); return _r9.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "mat-table", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](115, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](116, PayrollDashboardComponent_mat_header_cell_116_Template, 2, 0, "mat-header-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](117, PayrollDashboardComponent_mat_cell_117_Template, 2, 1, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](118, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](119, PayrollDashboardComponent_mat_header_cell_119_Template, 2, 0, "mat-header-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](120, PayrollDashboardComponent_mat_cell_120_Template, 2, 1, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](121, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](122, PayrollDashboardComponent_mat_header_cell_122_Template, 2, 0, "mat-header-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](123, PayrollDashboardComponent_mat_cell_123_Template, 2, 1, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](124, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](125, PayrollDashboardComponent_mat_header_cell_125_Template, 2, 0, "mat-header-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](126, PayrollDashboardComponent_mat_cell_126_Template, 2, 1, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](127, PayrollDashboardComponent_mat_header_row_127_Template, 1, 0, "mat-header-row", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](128, PayrollDashboardComponent_mat_row_128_Template, 1, 2, "mat-row", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](129, PayrollDashboardComponent_tr_129_Template, 3, 2, "tr", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](130, PayrollDashboardComponent_div_130_Template, 6, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](131, "mat-paginator", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](132, "br")(133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "div", 24)(135, "div", 65)(136, "div", 2)(137, "div", 35)(138, "ul", 36)(139, "li", 37)(140, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](141, "Pension Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "li", 38)(143, "label", 39)(144, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](145, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "input", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function PayrollDashboardComponent_Template_input_keyup_146_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "div", 27)(149, "select", 66)(150, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](151, "Select Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](152, PayrollDashboardComponent_option_152_Template, 2, 2, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](153, "div", 27)(154, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PayrollDashboardComponent_Template_button_click_154_listener() { return ctx.downloadAnalysis(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](155, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](156, "DOWNLOAD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "div", 43)(158, "ul", 44)(159, "li")(160, "div", 45)(161, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PayrollDashboardComponent_Template_img_click_161_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](114); return _r9.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "li")(163, "div", 47)(164, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PayrollDashboardComponent_Template_img_click_164_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](114); return _r9.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](165, "li")(166, "div", 49)(167, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PayrollDashboardComponent_Template_img_click_167_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](114); return _r9.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](168, "li")(169, "div", 51)(170, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PayrollDashboardComponent_Template_img_click_170_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](114); return _r9.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](171, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](172, "mat-table", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](175, 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](176, PayrollDashboardComponent_mat_header_cell_176_Template, 2, 0, "mat-header-cell", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](177, PayrollDashboardComponent_mat_cell_177_Template, 2, 1, "mat-cell", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](178, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](179, PayrollDashboardComponent_mat_header_cell_179_Template, 2, 0, "mat-header-cell", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](180, PayrollDashboardComponent_mat_cell_180_Template, 2, 1, "mat-cell", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](181, 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](182, PayrollDashboardComponent_mat_header_cell_182_Template, 2, 0, "mat-header-cell", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](183, PayrollDashboardComponent_mat_cell_183_Template, 2, 1, "mat-cell", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](184, 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](185, PayrollDashboardComponent_mat_header_cell_185_Template, 2, 0, "mat-header-cell", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](186, PayrollDashboardComponent_mat_cell_186_Template, 2, 1, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](187, 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](188, PayrollDashboardComponent_mat_header_cell_188_Template, 2, 0, "mat-header-cell", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](189, PayrollDashboardComponent_mat_cell_189_Template, 2, 1, "mat-cell", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](190, 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](191, PayrollDashboardComponent_mat_header_cell_191_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](192, PayrollDashboardComponent_mat_cell_192_Template, 2, 1, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](193, 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](194, PayrollDashboardComponent_mat_header_cell_194_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](195, PayrollDashboardComponent_mat_cell_195_Template, 2, 1, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](196, 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](197, PayrollDashboardComponent_mat_header_cell_197_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](198, PayrollDashboardComponent_mat_cell_198_Template, 2, 1, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](199, 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](200, PayrollDashboardComponent_mat_header_cell_200_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](201, PayrollDashboardComponent_mat_cell_201_Template, 2, 1, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](202, 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](203, PayrollDashboardComponent_mat_header_cell_203_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](204, PayrollDashboardComponent_mat_cell_204_Template, 2, 1, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](205, 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](206, PayrollDashboardComponent_mat_header_cell_206_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](207, PayrollDashboardComponent_mat_cell_207_Template, 2, 1, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](208, 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](209, PayrollDashboardComponent_mat_header_cell_209_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](210, PayrollDashboardComponent_mat_cell_210_Template, 2, 1, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](211, 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](212, PayrollDashboardComponent_mat_header_cell_212_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](213, PayrollDashboardComponent_mat_cell_213_Template, 2, 1, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](214, 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](215, PayrollDashboardComponent_mat_header_cell_215_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](216, PayrollDashboardComponent_mat_cell_216_Template, 2, 1, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](217, 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](218, PayrollDashboardComponent_mat_header_cell_218_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](219, PayrollDashboardComponent_mat_cell_219_Template, 2, 1, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](220, 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](221, PayrollDashboardComponent_mat_header_cell_221_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](222, PayrollDashboardComponent_mat_cell_222_Template, 2, 1, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](223, 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](224, PayrollDashboardComponent_mat_header_cell_224_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](225, PayrollDashboardComponent_mat_cell_225_Template, 2, 1, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](226, 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](227, PayrollDashboardComponent_mat_header_cell_227_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](228, PayrollDashboardComponent_mat_cell_228_Template, 2, 1, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](229, PayrollDashboardComponent_mat_header_row_229_Template, 1, 0, "mat-header-row", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](230, PayrollDashboardComponent_mat_row_230_Template, 1, 2, "mat-row", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](231, PayrollDashboardComponent_tr_231_Template, 3, 2, "tr", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](232, PayrollDashboardComponent_div_232_Template, 6, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](233, "mat-paginator", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.joined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.exited);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("prevPeriodY").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("prevPeriodM").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("currPeriodY").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("currPeriodM").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSourceAnalysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsAnalysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsAnalysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.employeeState);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](23, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_20__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton], styles: [".bg-success[_ngcontent-%COMP%] {\n  background-color: #1d8802;\n}\n\n.monitorIconSize[_ngcontent-%COMP%] {\n  font-size: 50px;\n  height: 50px;\n  width: 50px;\n}\n\n.img-card[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n\n.mb-2[_ngcontent-%COMP%] {\n  padding: 5px !important;\n  margin: 5px auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXJvbGwtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBRTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUFHSiIsImZpbGUiOiJwYXlyb2xsLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJnLXN1Y2Nlc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMzYsIDIpO1xuIH1cbi5tb25pdG9ySWNvblNpemUge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHggO1xuICAgIHdpZHRoOiA1MHB4IDtcbiAgfVxuICAuaW1nLWNhcmR7XG4gICAgaGVpZ2h0OiA1MHB4IDtcbiAgICB3aWR0aDogNTBweCA7XG4gIH1cbiAgLm1iLTJ7XG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggYXV0byAhaW1wb3J0YW50O1xuICB9XG4iXX0= */"] });


/***/ }),

/***/ 55864:
/*!*********************************************************************************!*\
  !*** ./src/app/erp-hr/modules/dashboard/pages/dashboard/dashboard.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-inventory/data/services/item-category.service */ 42053);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gen-widgets/gen-widgets.component */ 44912);
/* harmony import */ var _components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/analytics/analytics.component */ 82102);







const _c0 = function () { return ["Home"]; };
class DashboardComponent {
    constructor(tokenCookieService, dialog, itemCatMan) {
        this.tokenCookieService = tokenCookieService;
        this.dialog = dialog;
        this.itemCatMan = itemCatMan;
        this.isPageReloaded = false;
    }
    ngOnInit() {
        this.passwordFlag = this.tokenCookieService.getUser().systemGenPassword;
        this.currentUser = this.tokenCookieService.getUser().username;
    }
    reLoadPage() {
        // Perform password reset logic here
        location.reload();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_1__.ItemCategoryService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 7, vars: 4, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Dashboard")("items", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c0))("active_item", "Dashboard");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_3__.GenWidgetsComponent, _components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__.AnalyticsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 44912:
/*!*************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/dashboard/pages/gen-widgets/gen-widgets.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenWidgetsComponent": () => (/* binding */ GenWidgetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_core_Models_months_months_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@core/Models/months/months.service */ 84651);
/* harmony import */ var src_app_erp_hr_data_configuration_services_analysis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-hr/data/configuration-services/analysis.service */ 91781);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);






class GenWidgetsComponent {
    constructor(monthAPI, analysisAPI) {
        this.monthAPI = monthAPI;
        this.analysisAPI = analysisAPI;
        this.currentDate = new Date();
        this.$destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.loading = false;
        this.activeEmployees = 0;
        this.leaveRequest = 0;
        this.newEmployees = 0;
        this.newOpenings = 0;
        this.getYear = this.currentDate.getFullYear();
        this.getMonth = this.monthAPI.months()[this.currentDate.getMonth()];
    }
    ngOnDestroy() {
        this.$destroy.next(true);
        this.$destroy.complete();
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams()
            .set('Year', this.currentDate.getFullYear());
        this.analysisAPI.getAdminAnalysis(params).subscribe(res => {
            this.dataResp = res;
            this.activeEmployees = this.dataResp.activeEmployees || 0;
            this.leaveRequest = this.dataResp.leaveRequest || 0;
            this.newEmployees = this.dataResp.newEmployees || 0;
            this.newOpenings = this.dataResp.newOpenings || 0;
        });
    }
    onEmployees() {
        console.log("Employees card clicked");
    }
    onLeaveRequests() {
        console.log("Leave Requests card clicked");
    }
    onNewEmployees() {
        console.log("New Employees card clicked");
    }
    onNewOpenings() {
        console.log("New Openings card clicked");
    }
}
GenWidgetsComponent.ɵfac = function GenWidgetsComponent_Factory(t) { return new (t || GenWidgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_core_Models_months_months_service__WEBPACK_IMPORTED_MODULE_0__.MonthsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_hr_data_configuration_services_analysis_service__WEBPACK_IMPORTED_MODULE_1__.AnalysisService)); };
GenWidgetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GenWidgetsComponent, selectors: [["app-gen-widgets"]], decls: 65, vars: 4, consts: [[1, "row"], [1, "col-xl-3", "col-lg-6", 3, "click"], [1, "card", "bg-better-green"], [1, "card-statistic-3"], [1, "card-icon", "card-icon-large"], [1, "fas", "fa-users"], [1, "card-content"], [1, "card-title"], [1, "data-1"], ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow", "l-orange-progress", "mt-2", "mb-2"], [1, "mb-0", "text-sm"], [1, "mr-2"], [1, "fa", "fa-arrow-up"], [1, "text-nowrap"], [1, "far", "fa-calendar-check"], [1, "fas", "fa-user-plus"], [1, "fas", "fa-briefcase"]], template: function GenWidgetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_1_listener() { return ctx.onEmployees(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 10)(13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_17_listener() { return ctx.onLeaveRequests(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 2)(19, "div", 3)(20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 6)(23, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Leave Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p", 10)(29, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_33_listener() { return ctx.onNewEmployees(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 2)(35, "div", 3)(36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 6)(39, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "New Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "p", 10)(45, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_49_listener() { return ctx.onNewOpenings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 2)(51, "div", 3)(52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 6)(55, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "New Openings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "p", 10)(61, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, " Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.activeEmployees);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.leaveRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.newEmployees);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.newOpenings);
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar], styles: [".bg-better-green[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #153b15, #349555);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbi13aWRnZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdURBQUE7QUFDRiIsImZpbGUiOiJnZW4td2lkZ2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1iZXR0ZXItZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNTNiMTUsICMzNDk1NTUpO1xufSJdfQ== */"] });


/***/ }),

/***/ 42053:
/*!**********************************************************************!*\
  !*** ./src/app/erp-inventory/data/services/item-category.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemCategoryService": () => (/* binding */ ItemCategoryService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class ItemCategoryService {
    constructor(http) {
        this.http = http;
    }
    getItemCategories() {
        const ItemCatUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/ItemCategory/all`;
        return this.http.get(ItemCatUrl);
    }
    getItemCategoriesId(id) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/ItemCategory/getById/${id}`);
    }
    addItemCategories(data) {
        const ItemCatUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/ItemCategory/create`;
        return this.http.post(ItemCatUrl, data);
    }
    updateItemCategories(TaxesDetails) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/ItemCategory/update/`;
        return this.http.put(updateBillUrl, TaxesDetails);
    }
    deleteItemCategoriesPemanently(params) {
        const ItemCatUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/ItemCategory/delete`;
        return this.http.delete(ItemCatUrl, { params });
    }
    uploadBatchItemCats(excelUpload) {
        const ItemCatUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/ItemCategory/uploadBulk`;
        return this.http.post(ItemCatUrl, excelUpload);
    }
}
ItemCategoryService.ɵfac = function ItemCategoryService_Factory(t) { return new (t || ItemCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ItemCategoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ItemCategoryService, factory: ItemCategoryService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_erp-hr_modules_dashboard_dashboard_module_ts.js.map
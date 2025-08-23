"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-reports_erp-reports_module_ts-src_app_erp-suppliersmanagement_data_supplier-categ-c89d48"],{

/***/ 47720:
/*!**********************************************************************!*\
  !*** ./src/app/erp-reports/data/services/finance-reports.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinanceReportsService": () => (/* binding */ FinanceReportsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class FinanceReportsService {
    constructor(http) {
        this.http = http;
    }
    downloadAccountStatementReport(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/report/download/account_statement`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
    downloadTrialBalanceReport(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/report/download/trial_balance`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
    downloadProfitAndLossReport(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        //http://52.15.152.26:8199/api/v1/report/download/profit_loss?fromDate=2024-01-18&toDate=2024-03-18
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/report/download/profit_loss`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
    downloadBalanceSheetReport(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/report/download/balance_sheet`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
    //************************************************************************************************************************ */
    getBalanceSheetReportData(params) {
        const TransactionsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/report/preview/balancesheet`;
        return this.http.get(TransactionsUrl, { params });
    }
    getProfitAndLossReportData(params) {
        const TransactionsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/report/preview/proft_and_loss`;
        return this.http.get(TransactionsUrl, { params });
    }
    getTrialBalanceReportData(params) {
        const TransactionsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/report/preview/trial_balance`;
        return this.http.get(TransactionsUrl, { params });
    }
    getFsClassData(params) {
        const TransactionsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/report/preview/financialGrouping`;
        return this.http.get(TransactionsUrl, { params });
    }
}
FinanceReportsService.ɵfac = function FinanceReportsService_Factory(t) { return new (t || FinanceReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
FinanceReportsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FinanceReportsService, factory: FinanceReportsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 48063:
/*!**************************************************************************!*\
  !*** ./src/app/erp-reports/data/services/reports-procurement.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcurementReportsService": () => (/* binding */ ProcurementReportsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class ProcurementReportsService {
    constructor(http) {
        this.http = http;
    }
    downloadPOStatusReport(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/report/download/po_statement_per_delivery`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
    downloadPODeliveryReport(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/report/download/po_delivery_report`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
    downloadSupplierStatementReport(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/report/download/supplier_statement`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
    downloadGeneralSupplierStatementReport(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/report/download/supplier_statement`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
    ///api/v1/report/download/invoice_report
    downloadInvoiceDetailsReport(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/report/download/invoice_report`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
}
ProcurementReportsService.ɵfac = function ProcurementReportsService_Factory(t) { return new (t || ProcurementReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProcurementReportsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProcurementReportsService, factory: ProcurementReportsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 84255:
/*!***********************************************************!*\
  !*** ./src/app/erp-reports/erp-reports-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpReportsRoutingModule": () => (/* binding */ ErpReportsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _modules_preview_reports_balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/preview-reports/balance-sheet/balance-sheet.component */ 22685);
/* harmony import */ var _modules_preview_reports_fs_class_data_fs_class_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/preview-reports/fs-class-data/fs-class-data.component */ 24594);
/* harmony import */ var _modules_preview_reports_gl_account_statement_gl_account_statement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/preview-reports/gl-account-statement/gl-account-statement.component */ 33953);
/* harmony import */ var _modules_preview_reports_profit_loss_profit_loss_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/preview-reports/profit-loss/profit-loss.component */ 26427);
/* harmony import */ var _modules_preview_reports_trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/preview-reports/trial-balance/trial-balance.component */ 77119);
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ 64602);
/* harmony import */ var _erp_finance_modules_finance_management_finance_reports_finance_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../erp-finance/modules/finance-management/finance-reports/finance-reports.component */ 23267);
/* harmony import */ var _modules_procurement_reports_procurement_reports_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/procurement-reports/procurement-reports.component */ 49544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);












const routes = [
    {
        path: "dashboard",
        component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent,
        canActivate: [],
    },
    {
        path: "procurement-reports",
        component: _modules_procurement_reports_procurement_reports_component__WEBPACK_IMPORTED_MODULE_8__.ProcurementReportsComponent,
        canActivate: [_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_0__.RoutePrivilegeGuard],
        data: { clientName: 'ProcurementModule', requiredPrivilege: ["Dashboard"] },
    },
    {
        path: "finance-reports",
        component: _erp_finance_modules_finance_management_finance_reports_finance_reports_component__WEBPACK_IMPORTED_MODULE_7__.FinanceReportsComponent,
        canActivate: [_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_0__.RoutePrivilegeGuard],
        data: { clientName: 'ProcurementModule', requiredPrivilege: ["Dashboard"] },
    },
    {
        path: "preview-balance-sheet",
        component: _modules_preview_reports_balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_1__.BalanceSheetComponent,
        canActivate: [_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_0__.RoutePrivilegeGuard],
        data: {
            clientName: "FinanceModule",
            requiredPrivilege: [
                // "All Transactions",
                "All Currencies",
            ],
        },
    },
    {
        path: "preview-profit-loss",
        component: _modules_preview_reports_profit_loss_profit_loss_component__WEBPACK_IMPORTED_MODULE_4__.ProfitLossComponent,
        canActivate: [_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_0__.RoutePrivilegeGuard],
        data: {
            clientName: "FinanceModule",
            requiredPrivilege: [
                // "All Transactions",
                "All Currencies",
            ],
        },
    },
    {
        path: "preview-trial-balance",
        component: _modules_preview_reports_trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_5__.TrialBalanceComponent,
        canActivate: [_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_0__.RoutePrivilegeGuard],
        data: {
            clientName: "FinanceModule",
            requiredPrivilege: [
                // "All Transactions",
                "All Currencies",
            ],
        },
    },
    {
        path: "fs-class-data",
        component: _modules_preview_reports_fs_class_data_fs_class_data_component__WEBPACK_IMPORTED_MODULE_2__.FsClassDataComponent,
        canActivate: [_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_0__.RoutePrivilegeGuard],
        data: {
            clientName: "FinanceModule",
            requiredPrivilege: [
                // "All Transactions",
                "All Currencies",
            ],
        },
    },
    {
        path: "gl-account-statements",
        component: _modules_preview_reports_gl_account_statement_gl_account_statement_component__WEBPACK_IMPORTED_MODULE_3__.GlAccountStatementComponent,
        canActivate: [_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_0__.RoutePrivilegeGuard],
        data: {
            clientName: "FinanceModule",
            requiredPrivilege: [
                // "All Transactions",
                "All Currencies",
            ],
        },
    },
];
class ErpReportsRoutingModule {
}
ErpReportsRoutingModule.ɵfac = function ErpReportsRoutingModule_Factory(t) { return new (t || ErpReportsRoutingModule)(); };
ErpReportsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ErpReportsRoutingModule });
ErpReportsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ErpReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 87902:
/*!***************************************************!*\
  !*** ./src/app/erp-reports/erp-reports.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpReportsModule": () => (/* binding */ ErpReportsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _erp_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erp-reports-routing.module */ 84255);
/* harmony import */ var _modules_procurement_reports_procurement_reports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/procurement-reports/procurement-reports.component */ 49544);
/* harmony import */ var _modules_finance_reports_finance_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/finance-reports/finance-reports.component */ 96222);
/* harmony import */ var _modules_inventory_reports_inventory_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/inventory-reports/inventory-reports.component */ 34907);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _admin_modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/modules/dashboard/dashboard.module */ 42661);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _modules_dialogs_generate_finance_report_generate_finance_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/dialogs/generate-finance-report/generate-finance-report.component */ 49411);
/* harmony import */ var _modules_dialogs_generate_procurement_report_generate_procurement_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/dialogs/generate-procurement-report/generate-procurement-report.component */ 38749);
/* harmony import */ var _modules_preview_reports_balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/preview-reports/balance-sheet/balance-sheet.component */ 22685);
/* harmony import */ var _modules_preview_reports_fs_class_data_fs_class_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/preview-reports/fs-class-data/fs-class-data.component */ 24594);
/* harmony import */ var _modules_preview_reports_gl_account_statement_gl_account_statement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/preview-reports/gl-account-statement/gl-account-statement.component */ 33953);
/* harmony import */ var _modules_preview_reports_profit_loss_profit_loss_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/preview-reports/profit-loss/profit-loss.component */ 26427);
/* harmony import */ var _modules_preview_reports_trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/preview-reports/trial-balance/trial-balance.component */ 77119);
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ 64602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);










































class ErpReportsModule {
}
ErpReportsModule.ɵfac = function ErpReportsModule_Factory(t) { return new (t || ErpReportsModule)(); };
ErpReportsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: ErpReportsModule });
ErpReportsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
            _erp_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpReportsRoutingModule,
            //Additional imports
            _admin_modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_18__.NgApexchartsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__.MatProgressBarModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__.MatTabsModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__.MatCheckboxModule,
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_30__.MatTableExporterModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormFieldModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__.MatDialogModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatDatepickerModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_36__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__.MatSnackBarModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__.MatStepperModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_41__.NgxMaskModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](ErpReportsModule, { declarations: [_modules_procurement_reports_procurement_reports_component__WEBPACK_IMPORTED_MODULE_1__.ProcurementReportsComponent,
        _modules_finance_reports_finance_reports_component__WEBPACK_IMPORTED_MODULE_2__.FinanceReportsComponent,
        _modules_inventory_reports_inventory_reports_component__WEBPACK_IMPORTED_MODULE_3__.InventoryReportsComponent,
        _modules_dialogs_generate_finance_report_generate_finance_report_component__WEBPACK_IMPORTED_MODULE_7__.GenerateFinanceReportComponent,
        _modules_dialogs_generate_procurement_report_generate_procurement_report_component__WEBPACK_IMPORTED_MODULE_8__.GenerateProcurementReportComponent,
        _modules_preview_reports_balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_9__.BalanceSheetComponent,
        _modules_preview_reports_fs_class_data_fs_class_data_component__WEBPACK_IMPORTED_MODULE_10__.FsClassDataComponent,
        _modules_preview_reports_gl_account_statement_gl_account_statement_component__WEBPACK_IMPORTED_MODULE_11__.GlAccountStatementComponent,
        _modules_preview_reports_profit_loss_profit_loss_component__WEBPACK_IMPORTED_MODULE_12__.ProfitLossComponent,
        _modules_preview_reports_trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_13__.TrialBalanceComponent,
        _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _erp_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpReportsRoutingModule,
        //Additional imports
        _admin_modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_18__.NgApexchartsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__.MatProgressBarModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__.MatTabsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__.MatCheckboxModule,
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_30__.MatTableExporterModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__.MatDialogModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatDatepickerModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_36__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__.MatStepperModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_41__.NgxMaskModule] }); })();


/***/ }),

/***/ 64602:
/*!**********************************************************************!*\
  !*** ./src/app/erp-reports/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _finance_reports_finance_reports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../finance-reports/finance-reports.component */ 96222);
/* harmony import */ var _procurement_reports_procurement_reports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../procurement-reports/procurement-reports.component */ 49544);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 65590);





class DashboardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    home() { this.router.navigate(["/erp-dashboard/main"]); }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 73, vars: 0, consts: [[1, "dashboard"], [1, "container"], [1, "breadcrumb-banner", "bg-kingdom"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "click"], [1, "breadcrumb-item", "active"], [1, "footer"], [1, "row"], [1, "col-md-2", "text-right", "client-logo"], ["src", "/assets/images/PBlogo.png", "alt", "Kingdom Bank logo", "height", "80px", "width", "80px"], [1, "col-md-6"], [1, "animated", "fadeInLeft"], [1, "animated", "fadeInRight"], [1, "col-md-4"], [1, "list-unstyled", "social-icons", "animated", "fadeInRight"], ["target", "_blank", "href", "https://facebook.com/kingdombank"], ["target", "_blank", "href", "https://twitter.com/kingdombank"], [1, "fab", "fa-twitter"], ["target", "_blank", "href", "https://linkedin.com/company/kingdombank"], [1, "col-md-2", "text-left", "vendor-logo"], ["src", "/assets/images/em2.png", "alt", "E&M Technology House logo", "height", "80px", "width", "80px", 1, "p-3"], ["target", "_blank", "href", "https://facebook.com/emtechhouse"], ["target", "_blank", "href", "https://twitter.com/emtechhouse"], ["target", "_blank", "href", "https://linkedin.com/company/emtechhouse"], [1, "animated", "bounceIn"], [1, "col-md-12", "text-center"], [1, "copyright", "animated", "pulse"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Enterprise Resource Planning Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_8_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " ERP Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-finance-reports")(13, "app-procurement-reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "footer", 8)(15, "div", 1)(16, "div", 9)(17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "About Kingdom Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Kingdom Bank is a leading financial institution that provides a wide range of banking products and services to individuals and businesses. We are committed to providing our customers with the highest level of service and support. We are proud to be a trusted partner of E&M Technology House. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 15)(25, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Connect with Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ul", 16)(28, "li")(29, "a", 17)(30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Kingdom Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "li")(34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Kingdom Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "li")(38, "a", 20)(39, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Kingdom Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 9)(43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 12)(46, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "About E&M Technology House");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " E&M Technology House is a leading provider of innovative IT solutions for businesses of all sizes. We offer a wide range of services, including software development, web design, and IT consulting. We are committed to providing our clients with high-quality, cost-effective solutions that help them achieve their business goals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 15)(51, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Connect with Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "ul", 16)(54, "li")(55, "a", 23)(56, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "E&M Technology House");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "li")(60, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "E&M Technology House");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "li")(64, "a", 25)(65, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "E&M Technology House");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "hr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 9)(70, "div", 27)(71, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " \u00A9 2024 E&M ERP. All Rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } }, directives: [_finance_reports_finance_reports_component__WEBPACK_IMPORTED_MODULE_0__.FinanceReportsComponent, _procurement_reports_procurement_reports_component__WEBPACK_IMPORTED_MODULE_1__.ProcurementReportsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: [".breadcrumb-banner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  background-image: linear-gradient(to right, #1a1a1a, #354b2e);\n  border-radius: 10px;\n  transition: background-image 0.5s ease-in-out;\n}\n\n.breadcrumb-banner[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(to right, #3d392d, #1a1a1a);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n}\n\nnav[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n\nol.breadcrumb[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 10px;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n  transition: color 0.3s ease-in-out;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #9789de;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: calc(50% - 5px);\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #9789de transparent;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: 60px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n  font-weight: bold;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.footer[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(to right, #100210, #1a1a1a);\n  \n}\n\n.footer[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #1a1a1a, #253221);\n  color: #fff;\n  padding: 30px 0;\n  border-radius: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  font-family: \"Merriweather\", serif;\n  margin-bottom: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n  font-family: \"Lato\", sans-serif;\n  line-height: 1.5;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  font-family: \"Lato\", sans-serif;\n  transition: color 0.3s ease-in-out;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #9789de;\n}\n\n.social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #444;\n  text-decoration: none;\n  transition: color 0.3s ease-in-out;\n}\n\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #9789de;\n}\n\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 10px;\n}\n\nhr[_ngcontent-%COMP%] {\n  border-top: 1px solid #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Lato\", sans-serif;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-top: 20px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.vendor-logo[_ngcontent-%COMP%], .client-logo[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.vendor-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .client-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.vendor-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 50%;\n  padding: 8px;\n}\n\n.client-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 50%;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsNkRBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FBQUY7O0FBR0E7RUFDRSw2REFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQ0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EseURBQUE7QUFBRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUxGOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQU9JO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUxOOztBQVdBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVJGOztBQWNBO0VBQ0UsNkRBQUE7RUFJRyxtQkFBQTtBQWRMOztBQWdCQTtFQUNFLDZEQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWJGOztBQWdCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQWJGOztBQWdCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQWJGOztBQWdCQTtFQUNFLG1CQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtBQWJGOztBQWdCQTtFQUNFLGNBQUE7QUFiRjs7QUEwQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUF2Q0Y7O0FBMENBO0VBQ0Usa0JBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UsY0FBQTtBQXZDRjs7QUEwQ0E7O0VBRUUsZUFBQTtFQUNBLGtCQUFBO0FBdkNGOztBQTBDQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXZDRjs7QUEwQ0E7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UscUJBQUE7QUF2Q0Y7O0FBeUNBOztFQUVFLGtCQUFBO0FBdENGOztBQXlDQTs7RUFFRSxjQUFBO0FBdENGOztBQXlDQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBdENGOztBQXlDQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBdENGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi5icmVhZGNydW1iLWJhbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxYTFhMWEsICMzNTRiMmUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5icmVhZGNydW1iLWJhbm5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNkMzkyZCwgIzFhMWExYSk7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxub2wuYnJlYWRjcnVtYiB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xuICBjb2xvcjogIzk3ODlkZTtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmU6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSA1cHgpO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzk3ODlkZSB0cmFuc3BhcmVudDtcbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vIERhc2hib2FyZCBzdHlsZXNcbi5kYXNoYm9hcmQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuXG4gIC5ibG9jay1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQ29udGFpbmVyIHN0eWxlc1xuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi5mb290ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgIzEwMDIxMCxcbiAgICAjMWExYTFhXG4gICk7IC8qIFVwZGF0ZWQgY29sb3JzICovXG59XG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWExYTFhLCAjMjUzMjIxKTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmZvb3RlciBoNCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiLCBzZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvb3RlciBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uZm9vdGVyIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvb3RlciB1bCBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9vdGVyIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzk3ODlkZTtcbn1cblxuLy8gLnNvY2lhbC1pY29ucyB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyB9XG5cbi8vIC5zb2NpYWwtaWNvbnMgbGkge1xuLy8gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4vLyB9XG5cbi8vIC5zb2NpYWwtaWNvbnMgbGkgYSB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgIGNvbG9yOiAjNDQ0O1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4vLyB9XG5cbi8vIC5zb2NpYWwtaWNvbnMgbGkgYTpob3ZlciB7XG4vLyAgIGNvbG9yOiAjOTc4OWRlO1xuLy8gfVxuXG4vLyAuc29jaWFsLWljb25zIGxpIGEgbWF0LWljb24ge1xuLy8gICBmb250LXNpemU6IDI0cHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMTBweDtcbi8vIH1cblxuLnNvY2lhbC1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbnMgbGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zb2NpYWwtaWNvbnMgbGkgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5zb2NpYWwtaWNvbnMgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjOTc4OWRlO1xufVxuXG4uc29jaWFsLWljb25zIGxpIGEgbWF0LWljb24sXG4uc29jaWFsLWljb25zIGxpIGEgaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5ociB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmxvZ286aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4udmVuZG9yLWxvZ28sXG4uY2xpZW50LWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52ZW5kb3ItbG9nbyBpbWcsXG4uY2xpZW50LWxvZ28gaW1nIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi52ZW5kb3ItbG9nbyBpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmNsaWVudC1sb2dvIGltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMnB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 49411:
/*!**********************************************************************************************************!*\
  !*** ./src/app/erp-reports/modules/dialogs/generate-finance-report/generate-finance-report.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateFinanceReportComponent": () => (/* binding */ GenerateFinanceReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_finance_data_lookups_gls_lookup_gls_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/gls-lookup/gls-lookup.component */ 83163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_erp_reports_data_services_finance_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-reports/data/services/finance-reports.service */ 47720);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 88133);




















function GenerateFinanceReportComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-bar", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GenerateFinanceReportComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select From Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GenerateFinanceReportComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select To Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GenerateFinanceReportComponent_div_34_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Account No is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GenerateFinanceReportComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 13)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Account No");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GenerateFinanceReportComponent_div_34_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.glsLookUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, GenerateFinanceReportComponent_div_34_mat_error_7_Template, 2, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.mngForm.get("accountNo").hasError("required"));
} }
function GenerateFinanceReportComponent_div_35_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const glType_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", glType_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", glType_r16.name, " ");
} }
function GenerateFinanceReportComponent_div_35_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " GlType is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GenerateFinanceReportComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 13)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Gl types");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GenerateFinanceReportComponent_div_35_mat_option_5_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GenerateFinanceReportComponent_div_35_mat_error_6_Template, 2, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.glTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.mngForm.get("glType").hasError("required"));
} }
function GenerateFinanceReportComponent_div_36_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", type_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", type_r19.name, " ");
} }
function GenerateFinanceReportComponent_div_36_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Imprest Type is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GenerateFinanceReportComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 13)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Imprest Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GenerateFinanceReportComponent_div_36_mat_option_5_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GenerateFinanceReportComponent_div_36_mat_error_6_Template, 2, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r7.imprestTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.mngForm.get("imprestType").hasError("required"));
} }
function GenerateFinanceReportComponent_div_37_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const accounting_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", accounting_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", accounting_r22.name, " ");
} }
function GenerateFinanceReportComponent_div_37_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Imprest Accounting is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GenerateFinanceReportComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 13)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Imprest Accounting");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GenerateFinanceReportComponent_div_37_mat_option_5_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GenerateFinanceReportComponent_div_37_mat_error_6_Template, 2, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r8.imprestAccountings);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.mngForm.get("imprestAccounting").hasError("required"));
} }
function GenerateFinanceReportComponent_div_38_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", stat_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", stat_r25.name, " ");
} }
function GenerateFinanceReportComponent_div_38_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Status is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GenerateFinanceReportComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 13)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GenerateFinanceReportComponent_div_38_mat_option_5_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GenerateFinanceReportComponent_div_38_mat_error_6_Template, 2, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.imprestStatuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.mngForm.get("status").hasError("required"));
} }
function GenerateFinanceReportComponent_div_39_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transStatus_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", transStatus_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", transStatus_r28.name, " ");
} }
function GenerateFinanceReportComponent_div_39_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Transaction Status is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GenerateFinanceReportComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 13)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Transaction Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GenerateFinanceReportComponent_div_39_mat_option_5_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GenerateFinanceReportComponent_div_39_mat_error_6_Template, 2, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.transactionStatuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.mngForm.get("transactionStatus").hasError("required"));
} }
class GenerateFinanceReportComponent {
    constructor(dialogRef, data, fb, snackbar, dialog, filesService, datepipe, reportService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.filesService = filesService;
        this.datepipe = datepipe;
        this.reportService = reportService;
        this.hide3 = true;
        this.agree3 = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.downloadLoading = false;
        this.pageFunction = "Add";
        this.hideSubmit = false;
        this.posting = false;
        this.types = [{ name: "PDF" }];
        // , { name: "EXCEL" }
        this.glTypes = [{ name: "Transaction Gls" }, { name: "All Gls" }];
        this.imprestTypes = [{ name: "Apply" }, { name: "Accounting" }, { name: "Claim" }];
        this.imprestAccountings = [{ name: "Y" }, { name: "N" }];
        this.imprestStatuses = [
            { name: "APPROVED" },
            { name: "PENDING" },
        ];
        this.transactionStatuses = [{ name: "SUCCESS" }, { name: "FAILED" }];
        //******************************************************************************************************************************************************** */
        // Look ups
        this.selectedItem = [];
    }
    ngOnInit() {
        this.mngForm = this.createReportForm();
    }
    createReportForm() {
        return this.fb.group({
            type: ["PDF", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            fromDate: [""],
            toDate: [""],
            accountNo: [""],
            month: [""],
            year: [""],
            glType: [""],
            imprestType: ["Apply"],
            imprestAccounting: ["Y"],
            status: ["APPROVED"],
            transactionStatus: ["SUCCESS"],
        });
    }
    ngAfterViewInit() { }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    glsLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "700px";
        dialogConfig.data = {
            action: "Single GL Account",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_gls_lookup_gls_lookup_component__WEBPACK_IMPORTED_MODULE_0__.GlsLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            result.data.forEach((element) => {
                this.mngForm.patchValue({
                    accountNo: element.accountID,
                });
            });
        });
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        this.posting = true;
        // ProfitAndLoss
        // BalanceSheet
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams();
        const fromDate = this.datepipe.transform(this.mngForm.value.fromDate, "YYYY-MM-dd");
        const toDate = this.datepipe.transform(this.mngForm.value.toDate, "YYYY-MM-dd");
        if (this.data.type === "ProfitAndLoss") {
            let type = this.mngForm.value.type;
            params = params.set("fromDate", fromDate).set("toDate", toDate);
            if (type == "PDF") {
                this.reportService
                    .downloadProfitAndLossReport(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
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
                        // Append row.code to the download URL
                        a.download = `ProfitAndLoss.pdf`;
                        a.click();
                        window.URL.revokeObjectURL(url);
                        a.remove();
                        this.snackbar.showNotification("snackbar-success", res.message);
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                        this.posting = false;
                    },
                    complete: () => {
                        this.posting = false;
                        this.onNoClick();
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription;
            }
            else if (type == "EXCEL") {
            }
        }
        else if (this.data.type === "BalanceSheet") {
            let type = this.mngForm.value.type;
            if (type == "PDF") {
                this.reportService
                    .downloadBalanceSheetReport(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
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
                        // Append row.code to the download URL
                        a.download = `BalanceSheet.pdf`;
                        a.click();
                        window.URL.revokeObjectURL(url);
                        a.remove();
                        this.snackbar.showNotification("snackbar-success", res.message);
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                        this.posting = false;
                    },
                    complete: () => {
                        this.posting = false;
                        this.onNoClick();
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription;
            }
            else if (type == "EXCEL") {
            }
        }
        else if (this.data.type === "TrialBalance") {
            let type = this.mngForm.value.type;
            let fromDate = this.datepipe.transform(this.mngForm.value.fromDate, "YYYY-MM-dd");
            let toDate = this.datepipe.transform(this.mngForm.value.toDate, "YYYY-MM-dd");
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams()
                .set("fromDate", fromDate)
                .set("toDate", toDate)
                .set("reportType", this.mngForm.value.glType);
            if (type == "PDF") {
                this.reportService
                    .downloadTrialBalanceReport(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
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
                        // Append row.code to the download URL
                        a.download = `TrialBalance.pdf`;
                        a.click();
                        window.URL.revokeObjectURL(url);
                        a.remove();
                        this.snackbar.showNotification("snackbar-success", res.message);
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                        this.posting = false;
                    },
                    complete: () => {
                        this.posting = false;
                        this.onNoClick();
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription;
            }
            else if (type == "EXCEL") {
            }
        }
        else if (this.data.type === "StatementOfAccount") {
            let type = this.mngForm.value.type;
            let fromDate = this.datepipe.transform(this.mngForm.value.fromDate, "YYYY-MM-dd");
            let toDate = this.datepipe.transform(this.mngForm.value.toDate, "YYYY-MM-dd");
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams()
                .set("accountNo", this.mngForm.value.accountNo)
                .set("fromDate", fromDate)
                .set("toDate", toDate);
            if (type == "PDF") {
                this.reportService
                    .downloadAccountStatementReport(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
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
                        // Append row.code to the download URL
                        a.download = `StatementOfAccounts.pdf`;
                        a.click();
                        window.URL.revokeObjectURL(url);
                        a.remove();
                        this.snackbar.showNotification("snackbar-success", res.message);
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                        this.posting = false;
                    },
                    complete: () => {
                        this.posting = false;
                        this.onNoClick();
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription;
            }
            else if (type == "EXCEL") {
            }
        }
        else if (this.data.type === "ImprestAnalysis") {
            let type = this.mngForm.value.type;
            let fromDate = this.datepipe.transform(this.mngForm.value.fromDate, "YYYY-MM-dd");
            let toDate = this.datepipe.transform(this.mngForm.value.toDate, "YYYY-MM-dd");
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams()
                .set("accountNo", this.mngForm.value.accountNo)
                .set("fromDate", fromDate)
                .set("toDate", toDate);
            if (type == "PDF") {
                this.reportService
                    .downloadAccountStatementReport(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
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
                        // Append row.code to the download URL
                        a.download = `StatementOfAccounts.pdf`;
                        a.click();
                        window.URL.revokeObjectURL(url);
                        a.remove();
                        this.snackbar.showNotification("snackbar-success", res.message);
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                        this.posting = false;
                    },
                    complete: () => {
                        this.posting = false;
                        this.onNoClick();
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription;
            }
            else if (type == "EXCEL") {
            }
        }
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.response });
    }
}
GenerateFinanceReportComponent.ɵfac = function GenerateFinanceReportComponent_Factory(t) { return new (t || GenerateFinanceReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_2__.FilesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_reports_data_services_finance_reports_service__WEBPACK_IMPORTED_MODULE_3__.FinanceReportsService)); };
GenerateFinanceReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GenerateFinanceReportComponent, selectors: [["app-generate-finance-report"]], decls: 47, vars: 17, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/em.png", "width", "30px", "height", "30px", "alt", ""], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], ["class", "m-2", 4, "ngIf"], [1, "register-form", "mx-2", 3, "formGroup"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "fromDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["matInput", "", "formControlName", "toDate", "required", "", 3, "matDatepicker"], ["picker2", ""], ["class", "col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2", 4, "ngIf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["align", "end", 1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], [1, "m-2"], ["color", "primary", "mode", "indeterminate"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "accountNo", "required", ""], ["matSuffix", "", 3, "click"], ["formControlName", "glType", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "imprestType", "required", ""], ["formControlName", "imprestAccounting", "required", ""], ["formControlName", "status", "required", ""], ["formControlName", "transactionStatus", "required", ""]], template: function GenerateFinanceReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Set Report Parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GenerateFinanceReportComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, GenerateFinanceReportComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "form", 10)(15, "div", 11)(16, "div", 12)(17, "mat-form-field", 13)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 14)(21, "mat-datepicker-toggle", 15)(22, "mat-datepicker", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, GenerateFinanceReportComponent_mat_error_24_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 12)(26, "mat-form-field", 13)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 18)(30, "mat-datepicker-toggle", 15)(31, "mat-datepicker", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, GenerateFinanceReportComponent_mat_error_33_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, GenerateFinanceReportComponent_div_34_Template, 8, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, GenerateFinanceReportComponent_div_35_Template, 7, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, GenerateFinanceReportComponent_div_36_Template, 7, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, GenerateFinanceReportComponent_div_37_Template, 7, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, GenerateFinanceReportComponent_div_38_Template, 7, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, GenerateFinanceReportComponent_div_39_Template, 7, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 11)(41, "div", 21)(42, "div", 22)(43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GenerateFinanceReportComponent_Template_button_click_43_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " Generate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GenerateFinanceReportComponent_Template_button_click_45_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("fromDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("toDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.type === "StatementOfAccount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.type === "TrialBalance");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.type === "ImprestAnalysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.type === "ImprestAnalysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.type === "ImprestAnalysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.type === "ImprestAnalysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("auth-spinner", ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.mngForm.valid || ctx.posting);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmF0ZS1maW5hbmNlLXJlcG9ydC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 38749:
/*!******************************************************************************************************************!*\
  !*** ./src/app/erp-reports/modules/dialogs/generate-procurement-report/generate-procurement-report.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateProcurementReportComponent": () => (/* binding */ GenerateProcurementReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_erp_finance_data_lookups_gls_lookup_gls_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/gls-lookup/gls-lookup.component */ 83163);
/* harmony import */ var src_app_erp_finance_data_lookups_purchase_requisition_look_up_purchase_requisition_look_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/purchase-requisition-look-up/purchase-requisition-look-up.component */ 86240);
/* harmony import */ var src_app_erp_procurement_modules_parameters_pages_lookups_suppliers_lookup_suppliers_lookup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-procurement/modules/parameters/pages/lookups/suppliers-lookup/suppliers-lookup.component */ 62275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_erp_reports_data_services_reports_procurement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-reports/data/services/reports-procurement.service */ 48063);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 88133);






















function GenerateProcurementReportComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-bar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function GenerateProcurementReportComponent_ng_container_16_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please select From Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function GenerateProcurementReportComponent_ng_container_16_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please select To Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function GenerateProcurementReportComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 20)(2, "mat-form-field", 21)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "From Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 22)(6, "mat-datepicker-toggle", 23)(7, "mat-datepicker", null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, GenerateProcurementReportComponent_ng_container_16_mat_error_9_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 20)(11, "mat-form-field", 21)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "To Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "input", 25)(15, "mat-datepicker-toggle", 23)(16, "mat-datepicker", null, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, GenerateProcurementReportComponent_ng_container_16_mat_error_18_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](17);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("fromDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("toDate").hasError("required"));
} }
function GenerateProcurementReportComponent_div_17_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", status_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](status_r13.name);
} }
function GenerateProcurementReportComponent_div_17_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Invoice Status is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function GenerateProcurementReportComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 21)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Invoice Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function GenerateProcurementReportComponent_div_17_Template_mat_select_selectionChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r14.selectInvoiceStatus($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, GenerateProcurementReportComponent_div_17_mat_option_5_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, GenerateProcurementReportComponent_div_17_mat_error_6_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.invoiceStatuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.mngForm.get("invoiceStatus").hasError("required"));
} }
function GenerateProcurementReportComponent_div_18_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transactionStatus_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", transactionStatus_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](transactionStatus_r18.name);
} }
function GenerateProcurementReportComponent_div_18_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Transaction Status is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function GenerateProcurementReportComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 21)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Transaction Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, GenerateProcurementReportComponent_div_18_mat_option_5_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, GenerateProcurementReportComponent_div_18_mat_error_6_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.transactionStatuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.mngForm.get("transactionStatus").hasError("required"));
} }
function GenerateProcurementReportComponent_div_19_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", status_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](status_r21.name);
} }
function GenerateProcurementReportComponent_div_19_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " PO Status is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function GenerateProcurementReportComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 21)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "PO Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, GenerateProcurementReportComponent_div_19_mat_option_5_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, GenerateProcurementReportComponent_div_19_mat_error_6_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.poStatuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.mngForm.get("poStatus").hasError("required"));
} }
function GenerateProcurementReportComponent_div_20_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " PR Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function GenerateProcurementReportComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 21)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "PR Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GenerateProcurementReportComponent_div_20_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.purchaseRequisitionLookUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, GenerateProcurementReportComponent_div_20_mat_error_7_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.mngForm.get("prCode").hasError("required"));
} }
function GenerateProcurementReportComponent_div_21_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Supplier Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function GenerateProcurementReportComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 21)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Supplier Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GenerateProcurementReportComponent_div_21_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.suppliersLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, GenerateProcurementReportComponent_div_21_mat_error_7_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.mngForm.get("supplierCode").hasError("required"));
} }
class GenerateProcurementReportComponent {
    constructor(dialogRef, data, fb, snackbar, dialog, filesService, datepipe, reportService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.filesService = filesService;
        this.datepipe = datepipe;
        this.reportService = reportService;
        this.hide3 = true;
        this.agree3 = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.downloadLoading = false;
        this.pageFunction = "Add";
        this.hideSubmit = false;
        this.posting = false;
        this.types = [{ name: "PDF" }];
        // , { name: "EXCEL" }
        this.poStatuses = [{ name: "PARTIAL" }, { name: "COMPLETE" }];
        this.invoiceStatuses = [
            { name: "APPROVED" },
            { name: "PENDING" },
            { name: "OVERDUE" },
        ];
        this.transactionStatuses = [{ name: "SUCCESS" }, { name: "FAILED" }];
        this.hideTranStatus = false;
        //******************************************************************************************************************************************************** */
        // Look ups
        this.selectedItem = [];
        this.supplierIsSelected = false;
        this.selectedSuppliers = [];
    }
    ngOnInit() {
        this.mngForm = this.createReportForm();
    }
    createReportForm() {
        return this.fb.group({
            type: ["PDF", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            fromDate: [""],
            toDate: [""],
            poStatus: ["PARTIAL"],
            prCode: [""],
            invoiceStatus: ["APPROVED"],
            supplierCode: [""],
            transactionStatus: ["SUCCESS"],
        });
    }
    ngAfterViewInit() { }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    selectInvoiceStatus(status) {
        if (status === "OVERDUE") {
            this.hideTranStatus = true;
        }
        else {
            this.hideTranStatus = false;
        }
        console.log("this.hideTranStatus:: ", this.hideTranStatus);
    }
    glsLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "700px";
        dialogConfig.data = {
            action: "Single GL Account",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_gls_lookup_gls_lookup_component__WEBPACK_IMPORTED_MODULE_0__.GlsLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            result.data.forEach((element) => {
                this.mngForm.patchValue({
                    accountNo: element.accountID,
                });
            });
        });
    }
    purchaseRequisitionLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "single purchaseorder",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_purchase_requisition_look_up_purchase_requisition_look_up_component__WEBPACK_IMPORTED_MODULE_1__.PurchaseRequisitionLookUpComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            res.data.forEach((element) => {
                this.mngForm.patchValue({
                    prCode: element.purchaseRequisitionCode,
                });
            });
        });
    }
    suppliersLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "single supplier",
            selected: this.selectedSuppliers,
            category: "Open",
        };
        const dialogRef = this.dialog.open(src_app_erp_procurement_modules_parameters_pages_lookups_suppliers_lookup_suppliers_lookup_component__WEBPACK_IMPORTED_MODULE_2__.SuppliersLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            if (result && result.data.length != 0) {
                console.log("result: ", result.data);
                this.supplierIsSelected = true;
                this.mngForm.patchValue({
                    supplierCode: result.data[0].supplierCode,
                });
            }
        });
    }
    submit() {
        this.posting = true;
        const type = this.mngForm.value.type;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpParams();
        let reportName = "";
        const fromDate = this.datepipe.transform(this.mngForm.value.fromDate, "YYYY-MM-dd");
        const toDate = this.datepipe.transform(this.mngForm.value.toDate, "YYYY-MM-dd");
        switch (this.data.type) {
            case "POsByStatus":
                params = params
                    .set("fromDate", fromDate)
                    .set("toDate", toDate)
                    .set("status", this.mngForm.value.poStatus);
                reportName = "PO Status";
                if (type === "PDF") {
                    this.downloadPOStatusReport(params, reportName);
                }
                else if (type === "EXCEL") {
                }
                break;
            case "PoDeliveryReport":
                params = params
                    .set("fromDate", fromDate)
                    .set("toDate", toDate)
                    .set("prCode", this.mngForm.value.prCode);
                reportName = "PO Delivery";
                if (type === "PDF") {
                    this.downloadPODeliveryReport(params, reportName);
                }
                else if (type === "EXCEL") {
                }
                break;
            case "GeneralPoDeliveryReport":
                params = params
                    .set("fromDate", fromDate)
                    .set("toDate", toDate)
                    .set("prCode", '%');
                reportName = "General PO Delivery";
                if (type === "PDF") {
                    this.downloadPODeliveryReport(params, reportName);
                }
                else if (type === "EXCEL") {
                }
                break;
            case "SupplierAccountStatement":
                params = params
                    .set("fromDate", fromDate)
                    .set("toDate", toDate)
                    .set("supplierCode", this.mngForm.value.supplierCode);
                reportName = "Supplier Statement";
                if (type === "PDF") {
                    this.downloadSupplierStatementReport(params, reportName);
                }
                else if (type === "EXCEL") {
                }
                break;
            case "GeneralSupplierStatementReport":
                params = params
                    .set("supplierCode", "%")
                    .set("fromDate", fromDate)
                    .set("toDate", toDate);
                reportName = "General Suppliers Statement";
                if (type === "PDF") {
                    this.downloadGeneralSupplierStatementReport(params, reportName);
                }
                else if (type === "EXCEL") {
                }
                break;
            case "InvoiceReportDetailsByStatus":
                params = params
                    .set("status", this.mngForm.value.invoiceStatus)
                    .set("transactionStatus", this.mngForm.value.transactionStatus)
                    .set("supplierCode", this.mngForm.value.supplierCode)
                    .set("fromDate", fromDate)
                    .set("toDate", toDate);
                reportName = "Invoice Report";
                if (type === "PDF") {
                    this.downloadInvoiceDetailsReport(params, reportName);
                }
                else if (type === "EXCEL") {
                }
                break;
            case "GeneralInvoiceReportDetailsByStatus":
                params = params
                    .set("status", this.mngForm.value.invoiceStatus)
                    .set("transactionStatus", this.mngForm.value.transactionStatus)
                    .set("supplierCode", "%")
                    .set("fromDate", fromDate)
                    .set("toDate", toDate);
                reportName = "General Invoice Report";
                if (type === "PDF") {
                    this.downloadInvoiceDetailsReport(params, reportName);
                }
                else if (type === "EXCEL") {
                }
                break;
            //
            default:
                break;
        }
    }
    downloadPOStatusReport(params, reportName) {
        this.reportService
            .downloadPOStatusReport(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                this.downloadReport(res, reportName);
            },
            error: (err) => {
                this.handleError(err);
            },
        });
    }
    downloadPODeliveryReport(params, reportName) {
        this.reportService
            .downloadPODeliveryReport(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                this.downloadReport(res, reportName);
            },
            error: (err) => {
                this.handleError(err);
            },
        });
    }
    downloadSupplierStatementReport(params, reportName) {
        this.reportService
            .downloadSupplierStatementReport(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                this.downloadReport(res, reportName);
            },
            error: (err) => {
                this.handleError(err);
            },
        });
    }
    downloadGeneralSupplierStatementReport(params, reportName) {
        this.reportService
            .downloadGeneralSupplierStatementReport(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                this.downloadReport(res, reportName);
            },
            error: (err) => {
                this.handleError(err);
            },
        });
    }
    downloadInvoiceDetailsReport(params, reportName) {
        this.reportService
            .downloadInvoiceDetailsReport(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                this.downloadReport(res, reportName);
            },
            error: (err) => {
                this.handleError(err);
            },
        });
    }
    downloadReport(res, reportName) {
        const url = window.URL.createObjectURL(res.data);
        window.open(url);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.setAttribute("style", "display: none");
        a.setAttribute("target", "_blank");
        a.href = url;
        a.download = `${reportName}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
        this.snackbar.showNotification("snackbar-success", res.message);
        this.onNoClick();
    }
    handleError(err) {
        this.snackbar.showNotification("snackbar-danger", err.message);
        this.posting = false;
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.response });
    }
}
GenerateProcurementReportComponent.ɵfac = function GenerateProcurementReportComponent_Factory(t) { return new (t || GenerateProcurementReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_4__.FilesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_reports_data_services_reports_procurement_service__WEBPACK_IMPORTED_MODULE_5__.ProcurementReportsService)); };
GenerateProcurementReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: GenerateProcurementReportComponent, selectors: [["app-generate-procurement-report"]], decls: 29, vars: 11, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/em.png", "width", "30px", "height", "30px", "alt", ""], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], ["class", "m-2", 4, "ngIf"], [1, "register-form", "mx-2", 3, "formGroup"], [1, "row"], [4, "ngIf"], ["class", "col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2", 4, "ngIf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["align", "end", 1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], [1, "m-2"], ["color", "primary", "mode", "indeterminate"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "fromDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "toDate", "required", "", 3, "matDatepicker"], ["picker2", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "invoiceStatus", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "transactionStatus", "required", ""], ["formControlName", "poStatus", "required", ""], ["matInput", "", "formControlName", "prCode", "required", ""], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "supplierCode", "required", ""]], template: function GenerateProcurementReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Set Report Parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GenerateProcurementReportComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, GenerateProcurementReportComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "form", 10)(15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, GenerateProcurementReportComponent_ng_container_16_Template, 19, 6, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, GenerateProcurementReportComponent_div_17_Template, 7, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, GenerateProcurementReportComponent_div_18_Template, 7, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, GenerateProcurementReportComponent_div_19_Template, 7, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, GenerateProcurementReportComponent_div_20_Template, 8, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, GenerateProcurementReportComponent_div_21_Template, 8, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 11)(23, "div", 14)(24, "div", 15)(25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GenerateProcurementReportComponent_Template_button_click_25_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Generate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GenerateProcurementReportComponent_Template_button_click_27_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data.type === "POsByStatus" || ctx.data.type === "GeneralSupplierStatementReport" || ctx.data.type === "SupplierAccountStatement" || ctx.data.type === "InvoiceReportDetailsByStatus" || ctx.data.type === "GeneralInvoiceReportDetailsByStatus" || ctx.data.type === "PoDeliveryReport" || ctx.data.type === "GeneralPoDeliveryReport");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data.type === "InvoiceReportDetailsByStatus" || ctx.data.type === "GeneralInvoiceReportDetailsByStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.data.type === "InvoiceReportDetailsByStatus" || ctx.data.type === "GeneralInvoiceReportDetailsByStatus") && !ctx.hideTranStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data.type === "POsByStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data.type === "PoDeliveryReport");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data.type === "SupplierAccountStatement" || ctx.data.type === "InvoiceReportDetailsByStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("auth-spinner", ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.mngForm.valid || ctx.posting);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmF0ZS1wcm9jdXJlbWVudC1yZXBvcnQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 96222:
/*!**********************************************************************************!*\
  !*** ./src/app/erp-reports/modules/finance-reports/finance-reports.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinanceReportsComponent": () => (/* binding */ FinanceReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _dialogs_generate_finance_report_generate_finance_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialogs/generate-finance-report/generate-finance-report.component */ 49411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);





class FinanceReportsComponent {
    constructor(dialog, router) {
        this.dialog = dialog;
        this.router = router;
    }
    ngOnInit() {
    }
    generateReport(type) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "600px";
        dialogConfig.data = {
            type: type,
        };
        const dialogRef = this.dialog.open(_dialogs_generate_finance_report_generate_finance_report_component__WEBPACK_IMPORTED_MODULE_0__.GenerateFinanceReportComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            // result.data.forEach((element) => {
            // });
        });
    }
    previewReport(type) {
        if (type === "ProfitAndLoss") {
            let route = "/erp-reports/preview-profit-loss";
            this.router.navigate([route], {
                queryParams: {
                    action: "View",
                },
            });
        }
        else if (type === "BalanceSheet") {
            let route = "/erp-reports/preview-balance-sheet";
            this.router.navigate([route], {
                queryParams: {
                    action: "View",
                },
            });
        }
        else if (type === "TrialBalance") {
            let route = "/erp-reports/preview-trial-balance";
            this.router.navigate([route], {
                queryParams: {
                    action: "View",
                },
            });
        }
    }
}
FinanceReportsComponent.ɵfac = function FinanceReportsComponent_Factory(t) { return new (t || FinanceReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
FinanceReportsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FinanceReportsComponent, selectors: [["app-finance-reports"]], decls: 62, vars: 0, consts: [[1, "row", "mt-3"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card"], [1, "header"], [1, "body"], [1, "doc-file-type"], [1, "list-unstyled"], [1, "d-flex", "mb-3"], [1, "msr-3", "align-self-center", "img-icon", "primary-rgba", "text-primary"], [1, "far", "fa-file-word"], [1, "set-flex"], [1, "font-16", "mb-1"], [1, "ms-auto"], [1, "far", "fa-eye", "ms-2", 3, "click"], [1, "far", "fa-arrow-alt-circle-down", 3, "click"], [1, "msr-3", "align-self-center", "img-icon", "success-rgba", "text-success"], [1, "far", "fa-file-excel"], [1, "msr-3", "align-self-center", "img-icon", "danger-rgba", "text-danger"], [1, "far", "fa-file-pdf"], [1, "d-flex", "mb-3", 3, "click"], [1, "msr-3", "align-self-center", "img-icon", "info-rgba", "text-info"], [1, "far", "fa-file-archive"], [1, "far", "fa-arrow-alt-circle-down"]], template: function FinanceReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Finance Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "ul", 6)(9, "li", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Profit and Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12)(18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinanceReportsComponent_Template_i_click_18_listener() { return ctx.previewReport("ProfitAndLoss"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinanceReportsComponent_Template_i_click_19_listener() { return ctx.generateReport("ProfitAndLoss"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 7)(21, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10)(24, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Balance Sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12)(29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinanceReportsComponent_Template_i_click_29_listener() { return ctx.previewReport("BalanceSheet"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinanceReportsComponent_Template_i_click_30_listener() { return ctx.generateReport("BalanceSheet"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "li", 7)(32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 10)(35, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Trial Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 12)(40, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinanceReportsComponent_Template_i_click_40_listener() { return ctx.previewReport("TrialBalance"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinanceReportsComponent_Template_i_click_41_listener() { return ctx.generateReport("TrialBalance"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinanceReportsComponent_Template_li_click_42_listener() { return ctx.generateReport("StatementOfAccount"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 10)(46, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "GL Account Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinanceReportsComponent_Template_li_click_52_listener() { return ctx.generateReport("ImprestAnalysis"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 10)(56, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Imprest Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 12)(61, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinanceReportsComponent_Template_i_click_61_listener() { return ctx.generateReport("ImprestAnalysis"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    } }, styles: [".list-unstyled[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: stretch;\n  padding: 20px;\n  background-color: #EBEBEE;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 48%;\n  margin-bottom: 20px;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease-in-out;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .msr-3[_ngcontent-%COMP%] {\n  color: #008000;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .set-flex[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #333;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .set-flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ms-auto[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 5px;\n  color: #333;\n  cursor: pointer;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ms-auto[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover {\n  background-color: #ccc;\n}\n\n\n\n@media (max-width: 768px) {\n  .list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-right: unset;\n  }\n}\n\n@keyframes icon-pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.ms-auto[_ngcontent-%COMP%]   .far.fa-eye[_ngcontent-%COMP%], .ms-auto[_ngcontent-%COMP%]   .far.fa-arrow-alt-circle-down[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n\n.ms-auto[_ngcontent-%COMP%]   .far.fa-eye[_ngcontent-%COMP%]:hover, .ms-auto[_ngcontent-%COMP%]   .far.fa-arrow-alt-circle-down[_ngcontent-%COMP%]:hover {\n  animation: icon-pulse 1s infinite;\n}\n\nli[_ngcontent-%COMP%]   .fa-arrow-alt-circle-down[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   .fa-eye[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nli[_ngcontent-%COMP%]   .fa-arrow-alt-circle-down[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmFuY2UtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQ0FBQTtBQUFGOztBQUdBO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtBQUFGOztBQUdBLGtCQUFBOztBQUNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsbUJBQUE7RUFBRjtBQUNGOztBQUlBO0VBQ0U7SUFDRSxtQkFBQTtFQUZGO0VBSUE7SUFDRSxxQkFBQTtFQUZGO0VBSUE7SUFDRSxtQkFBQTtFQUZGO0FBQ0Y7O0FBT0U7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUFMSjs7QUFRRTtFQUNFLGlDQUFBO0FBTko7O0FBZUU7RUFDRSxlQUpRO0FBUlo7O0FBZUU7RUFDRSxpQkFBQTtBQWJKIiwiZmlsZSI6ImZpbmFuY2UtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LXVuc3R5bGVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVFO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5cbi5saXN0LXVuc3R5bGVkIGxpIHtcbiAgd2lkdGg6IDQ4JTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5saXN0LXVuc3R5bGVkIGxpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGlzdC11bnN0eWxlZCBsaSAubXNyLTMge1xuICBjb2xvcjogIzAwODAwMDtcbn1cblxuLmxpc3QtdW5zdHlsZWQgbGkgLnNldC1mbGV4IGg1IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5saXN0LXVuc3R5bGVkIGxpIC5zZXQtZmxleCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmxpc3QtdW5zdHlsZWQgbGkgLm1zLWF1dG8gdGQge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzMzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGlzdC11bnN0eWxlZCBsaSAubXMtYXV0byB0ZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi8qIE1lZGlhIFF1ZXJpZXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubGlzdC11bnN0eWxlZCBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgfVxufVxuXG4vLyBEZWZpbmUgdGhlIGFuaW1hdGlvbiBrZXlmcmFtZXNcbkBrZXlmcmFtZXMgaWNvbi1wdWxzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuLy8gQXBwbHkgdGhlIGFuaW1hdGlvbiB0byB0aGUgaWNvbnNcbi5tcy1hdXRvIHtcbiAgLmZhci5mYS1leWUsIC5mYXIuZmEtYXJyb3ctYWx0LWNpcmNsZS1kb3duIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgfVxuXG4gIC5mYXIuZmEtZXllOmhvdmVyLCAuZmFyLmZhLWFycm93LWFsdC1jaXJjbGUtZG93bjpob3ZlciB7XG4gICAgYW5pbWF0aW9uOiBpY29uLXB1bHNlIDFzIGluZmluaXRlO1xuICB9XG59XG5cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiRpY29uLXNpemU6IDIwcHg7IFxuXG5saSB7XG4gIC5mYS1hcnJvdy1hbHQtY2lyY2xlLWRvd24sIC5mYS1leWUge1xuICAgIGZvbnQtc2l6ZTogJGljb24tc2l6ZTsgXG4gIH1cblxuICAuZmEtYXJyb3ctYWx0LWNpcmNsZS1kb3duIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDsgXG4gIH1cbn1cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIl19 */"] });


/***/ }),

/***/ 34907:
/*!**************************************************************************************!*\
  !*** ./src/app/erp-reports/modules/inventory-reports/inventory-reports.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryReportsComponent": () => (/* binding */ InventoryReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class InventoryReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
InventoryReportsComponent.ɵfac = function InventoryReportsComponent_Factory(t) { return new (t || InventoryReportsComponent)(); };
InventoryReportsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InventoryReportsComponent, selectors: [["app-inventory-reports"]], decls: 2, vars: 0, template: function InventoryReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "inventory-reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRvcnktcmVwb3J0cy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 22685:
/*!**********************************************************************************************!*\
  !*** ./src/app/erp-reports/modules/preview-reports/balance-sheet/balance-sheet.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceSheetComponent": () => (/* binding */ BalanceSheetComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_reports_data_services_finance_reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-reports/data/services/finance-reports.service */ 47720);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);














function BalanceSheetComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-bar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BalanceSheetComponent_ng_container_38_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " From Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BalanceSheetComponent_ng_container_38_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Enter a Valid Account By Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BalanceSheetComponent_ng_container_38_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " To Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BalanceSheetComponent_ng_container_38_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Enter a Valid Account By Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BalanceSheetComponent_ng_container_38_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 49)(6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalanceSheetComponent_ng_container_38_tr_44_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const asset_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.viewDetails(asset_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const asset_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", asset_r11.financial_grouping, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", asset_r11.ac_balance, " ");
} }
function BalanceSheetComponent_ng_container_38_tr_63_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 49)(6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalanceSheetComponent_ng_container_38_tr_63_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const liability_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.viewDetails(liability_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const liability_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", liability_r14.financial_grouping, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", liability_r14.ac_balance, " ");
} }
function BalanceSheetComponent_ng_container_38_tr_82_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 49)(6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalanceSheetComponent_ng_container_38_tr_82_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const shareholder_r17 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.viewDetails(shareholder_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const shareholder_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", shareholder_r17.financial_grouping, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", shareholder_r17.ac_balance, " ");
} }
function BalanceSheetComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14)(2, "div", 24)(3, "div", 25)(4, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "BALANCE SHEET REPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 27)(7, "div", 28)(8, "div", 29)(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "From Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 30)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "From Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 31)(16, "mat-datepicker-toggle", 32)(17, "mat-datepicker", null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, BalanceSheetComponent_ng_container_38_mat_error_19_Template, 2, 0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, BalanceSheetComponent_ng_container_38_mat_error_20_Template, 2, 0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 29)(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "To Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-form-field", 30)(26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "To Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 34)(29, "mat-datepicker-toggle", 32)(30, "mat-datepicker", null, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, BalanceSheetComponent_ng_container_38_mat_error_32_Template, 2, 0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, BalanceSheetComponent_ng_container_38_mat_error_33_Template, 2, 0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 36)(35, "div", 37)(36, "div", 38)(37, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 39)(40, "div", 40)(41, "table", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, BalanceSheetComponent_ng_container_38_tr_44_Template, 8, 2, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tfoot")(46, "tr")(47, "td")(48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Totals:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "td")(51, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 36)(55, "div", 37)(56, "div", 38)(57, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Liabilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 39)(60, "div", 40)(61, "table", 41)(62, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, BalanceSheetComponent_ng_container_38_tr_63_Template, 8, 2, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "tfoot")(65, "tr")(66, "td")(67, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Totals:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "td")(70, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 36)(74, "div", 37)(75, "div", 38)(76, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "SHAREHOLDER'S FUNDS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 39)(79, "div", 40)(80, "table", 41)(81, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, BalanceSheetComponent_ng_container_38_tr_82_Template, 8, 2, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "tfoot")(84, "tr")(85, "td")(86, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Totals:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "td")(89, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 43)(94, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalanceSheetComponent_ng_container_38_Template_button_click_94_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, " Print ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.Form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.Form.get("fromDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.Form.get("fromDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.Form.get("toDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.Form.get("toDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.data.assets);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.data.totals.totalAssets);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.data.liabilities);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.data.totals.totalLiabilities);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.data.shareholders);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.data.totals.totalShareholderfunds);
} }
class BalanceSheetComponent {
    constructor(router, route, reportService, fb, snackbar, datePipe) {
        this.router = router;
        this.route = route;
        this.reportService = reportService;
        this.fb = fb;
        this.snackbar = snackbar;
        this.datePipe = datePipe;
        this.goodsDetails = [];
        this.payWayInfo = [];
        this.taxDetails = [];
        this.loading = true;
        this.pageFunction = "View";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.isLoading = false;
        this.posting = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (params.action) {
                const action = params.action;
                this.pageFunction = params.action;
            }
        });
        const today = new Date();
        const toDateDefault = today.toISOString().split("T")[0];
        const fromDateDefault = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())
            .toISOString()
            .split("T")[0];
        this.Form = this.fb.group({
            fromDate: [fromDateDefault, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            toDate: [toDateDefault, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        this.Form.valueChanges.subscribe(() => {
            this.getData();
        });
        this.getData();
    }
    getData() {
        this.isLoading = true;
        this.data = {};
        let params = {
            fromDate: this.datePipe.transform(this.Form.value.fromDate, 'yyyy-MM-dd'),
            toDate: this.datePipe.transform(this.Form.value.toDate, 'yyyy-MM-dd'),
        };
        this.reportService
            .getBalanceSheetReportData(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.data :", res);
                if (res.entity) {
                    this.data = res.entity;
                    this.isLoading = false;
                    console.log("this.data :", this.data);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => { this.isLoading = false; },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription;
    }
    viewDetails(data) {
        let route = "/erp-reports/fs-class-data";
        this.router.navigate([route], {
            queryParams: {
                fsClass: data.financial_grouping,
                fromDate: this.datePipe.transform(this.Form.value.fromDate, 'yyyy-MM-dd'),
                toDate: this.datePipe.transform(this.Form.value.toDate, 'yyyy-MM-dd'),
                action: "View",
            },
        });
    }
    downloadDoc() {
        this.posting = true;
        let type = this.Form.value.type;
        let fromDate = this.datePipe.transform(this.Form.value.fromDate, "YYYY-MM-dd");
        let toDate = this.datePipe.transform(this.Form.value.toDate, "YYYY-MM-dd");
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams()
            .set("fromDate", fromDate)
            .set("toDate", toDate);
        if (type == "PDF") {
            this.reportService
                .downloadBalanceSheetReport(params)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
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
                    // Append row.code to the download URL
                    a.download = `ProfitAndLoss.pdf`;
                    a.click();
                    window.URL.revokeObjectURL(url);
                    a.remove();
                    this.snackbar.showNotification("snackbar-success", res.message);
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                    this.posting = false;
                },
                complete: () => {
                    this.posting = false;
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription;
        }
        else if (type == "EXCEL") {
        }
    }
    home() { this.router.navigate(["/erp-dashboard/main"]); }
    reportDashboard() {
        this.router.navigate(["/erp-reports/dashboard"]);
    }
    cancel() {
        this.router.navigate(["/erp-reports/dashboard"]);
    }
}
BalanceSheetComponent.ɵfac = function BalanceSheetComponent_Factory(t) { return new (t || BalanceSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_erp_reports_data_services_finance_reports_service__WEBPACK_IMPORTED_MODULE_0__.FinanceReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe)); };
BalanceSheetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BalanceSheetComponent, selectors: [["app-balance-sheet"]], decls: 39, vars: 2, consts: [[1, "dashboard"], [1, "container"], [1, "breadcrumb-banner", "bg-kingdom"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "click"], [1, "breadcrumb-item", "active"], [1, "card", "mt-2"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "body"], [1, "px-5"], [1, "row"], [1, "col-md-12"], [1, "row", "justify-content-center", "mt-2"], [1, "col-xs-12", "col-sm-12", "col-md-5", "col-lg-5", "text-center"], ["src", "assets/images/KB-logo.png", "width", "400px", "height", "100px", "alt", ""], [1, "float-end", "mt-3"], [1, "m-l-5"], [1, "col-xs-12", "col-sm-12", "col-md-2", "col-lg-2", "text-center"], [1, "horizontal-line"], [4, "ngIf"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "col-9", "text-center"], [1, "green-card"], [1, "white-text"], [3, "formGroup"], [1, "row", "justify-content-center", "mt-4"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], ["appearance", "fill", 1, "example-full-width", "mb-0"], ["matInput", "", "formControlName", "fromDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "toDate", "required", "", 3, "matDatepicker"], ["picker2", ""], [1, "row", "clearfix", "justify-content-center"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "header"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "text-end", "mt-2"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-flat-button", "", "color", "primary"], [1, "fas", "fa-print"], [1, "category-column", "truncate"], [1, "bank-column", "truncate"], [1, "action-column"], [1, "fas", "fa-eye"]], template: function BalanceSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Enterprise Resource Planning Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalanceSheetComponent_Template_a_click_8_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 5)(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalanceSheetComponent_Template_a_click_11_listener() { return ctx.reportDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " ERP Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Balance Sheet Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, BalanceSheetComponent_div_16_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 15)(25, "div", 17)(26, "address")(27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " P. O. Box 22741- 00400 Nairobi, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " info@kingdombankltd.co.ke ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Landline: 020-221 0339, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Mobile: 0709933456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "div", 19)(36, "div", 20)(37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, BalanceSheetComponent_ng_container_38_Template, 99, 15, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton], styles: [".breadcrumb-banner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  background-image: linear-gradient(to right, #1a1a1a, #354b2e);\n  border-radius: 10px;\n  transition: background-image 0.5s ease-in-out;\n}\n\n.breadcrumb-banner[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(to right, #3d392d, #1a1a1a);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n}\n\nnav[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n\nol.breadcrumb[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 10px;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n  transition: color 0.3s ease-in-out;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #9789de;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: calc(50% - 5px);\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #9789de transparent;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: 60px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n  font-weight: bold;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.table[_ngcontent-%COMP%]   th.truncate[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.truncate[_ngcontent-%COMP%] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.action-column[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.category-column[_ngcontent-%COMP%], .bank-column[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.date-range[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.date-range[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.horizontal-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3px;\n  background-color: #000;\n  margin-top: 2px;\n  margin-bottom: 5px;\n}\n\n.green-card[_ngcontent-%COMP%] {\n  background-color: #074507;\n  display: inline-block;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGFuY2Utc2hlZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQUFGOztBQUdBO0VBQ0UsNkRBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0NBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0FBQUY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFPSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFMTjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFSRjs7QUE4Q0E7RUFDRSxXQUFBO0FBM0NGOztBQTRDRTs7RUFFRSxzQkFBQTtBQTFDSjs7QUEyQ0k7O0VBWEYsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUE1QkY7O0FBMENBO0VBQ0UsVUFBQTtBQXZDRjs7QUEwQ0E7O0VBRUUsVUFBQTtBQXZDRjs7QUEyQ0U7RUFDRSxpQkFBQTtBQXhDSjs7QUE4Q0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQTNDRjs7QUE4Q0E7RUFDRSxTQUFBO0FBM0NGOztBQWdEQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUE3Q0Y7O0FBa0RBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQS9DRjs7QUFrREE7RUFDRSxZQUFBO0FBL0NGIiwiZmlsZSI6ImJhbGFuY2Utc2hlZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4uYnJlYWRjcnVtYi1iYW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWExYTFhLCAjMzU0YjJlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnJlYWRjcnVtYi1iYW5uZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZDM5MmQsICMxYTFhMWEpO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG5uYXYge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm9sLmJyZWFkY3J1bWIge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0uYWN0aXZlIHtcbiAgY29sb3I6ICM5Nzg5ZGU7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0uYWN0aXZlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0uYWN0aXZlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNXB4KTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAxMHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5Nzg5ZGUgdHJhbnNwYXJlbnQ7XG59XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyBEYXNoYm9hcmQgc3R5bGVzXG4uZGFzaGJvYXJkIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcblxuICAuYmxvY2staGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG5cbi8vIENvbnRhaW5lciBzdHlsZXNcbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vL1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiB0cnVuY2F0ZS10ZXh0IHtcbiAgbWF4LXdpZHRoOiAxNTBweDsgXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGgsXG4gIHRkIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICYudHJ1bmNhdGUge1xuICAgICAgQGluY2x1ZGUgdHJ1bmNhdGUtdGV4dDtcbiAgICB9XG4gIH1cbn1cblxuLmFjdGlvbi1jb2x1bW4ge1xuICB3aWR0aDogMTAlO1xufVxuXG4uY2F0ZWdvcnktY29sdW1uLFxuLmJhbmstY29sdW1uIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxudGZvb3Qge1xuICB0ZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuLy8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi5kYXRlLXJhbmdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRhdGUtcmFuZ2UgaDYge1xuICBtYXJnaW46IDA7XG59XG5cbi8vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4uaG9yaXpvbnRhbC1saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyBcbiAgbWFyZ2luLXRvcDogMnB4OyBcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyBcbn1cblxuLy8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi5ncmVlbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDY5LCA3KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ud2hpdGUtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 24594:
/*!**********************************************************************************************!*\
  !*** ./src/app/erp-reports/modules/preview-reports/fs-class-data/fs-class-data.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FsClassDataComponent": () => (/* binding */ FsClassDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_reports_data_services_finance_reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-reports/data/services/finance-reports.service */ 47720);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);





















function FsClassDataComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-bar", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FsClassDataComponent_mat_header_cell_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Account Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FsClassDataComponent_mat_cell_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 70)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r20.accountid);
} }
function FsClassDataComponent_mat_header_cell_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FsClassDataComponent_mat_cell_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 72)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r21.description);
} }
function FsClassDataComponent_mat_header_cell_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Account Balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FsClassDataComponent_mat_cell_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 74)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](3, 1, row_r22.ac_balance, "KES: ", "symbol", "1.2-2"));
} }
function FsClassDataComponent_mat_header_cell_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "GL Account Type ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FsClassDataComponent_mat_cell_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 76)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r23.gl_account_typeid);
} }
function FsClassDataComponent_mat_header_cell_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Financial Grouping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FsClassDataComponent_mat_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 72)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r24.financial_grouping);
} }
function FsClassDataComponent_mat_header_cell_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FsClassDataComponent_mat_cell_92_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 77)(1, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FsClassDataComponent_mat_cell_92_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function FsClassDataComponent_mat_cell_92_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const row_r25 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.viewGlStatements(row_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-feather-icons", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "eye");
} }
function FsClassDataComponent_mat_header_row_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
} }
function FsClassDataComponent_mat_row_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row", 80);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("cursor", "pointer");
} }
function FsClassDataComponent_mat_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r18.input.value, "\"");
} }
function FsClassDataComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-spinner", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class FsClassDataComponent {
    constructor(route, reportService, snackbar, router) {
        this.route = route;
        this.reportService = reportService;
        this.snackbar = snackbar;
        this.router = router;
        this.displayedColumns = [
            "acNumber",
            "acBalance",
            "glAccountTypeId",
            "financialGrouping",
            "description",
            "action",
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
        this.isLoading = false;
        this.pageFunction = "View";
        this.fsClass = "";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.fromDate = "";
        this.toDate = "";
        this.posting = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (params.fsClass) {
                const action = params.action;
                this.pageFunction = params.action;
                this.fsClass = params.fsClass;
                this.fromDate = params.fromDate;
                this.toDate = params.toDate;
            }
        });
        this.getData();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getData() {
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = true;
        let params = {
            financialGrouping: this.fsClass,
            fromDate: this.fromDate,
            toDate: this.toDate,
        };
        // this.alignTableColumns();
        this.reportService
            .getFsClassData(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.data :", res);
                if (res.entity) {
                    this.data = res;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.data.entity);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    console.log("this.data :", this.data);
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
            rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription;
    }
    refresh() {
        this.getData();
    }
    viewGlStatements(data) {
        let route = "/erp-reports/gl-account-statements";
        this.router.navigate([route], {
            queryParams: {
                glAccount: data.accountid,
                action: "View",
            },
        });
    }
    home() { this.router.navigate(["/erp-dashboard/main"]); }
    reportDashboard() {
        this.router.navigate(["/erp-reports/dashboard"]);
    }
    downloadFsClassReport() { }
}
FsClassDataComponent.ɵfac = function FsClassDataComponent_Factory(t) { return new (t || FsClassDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_reports_data_services_finance_reports_service__WEBPACK_IMPORTED_MODULE_0__.FinanceReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
FsClassDataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FsClassDataComponent, selectors: [["app-fs-class-data"]], viewQuery: function FsClassDataComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 98, vars: 9, consts: [[1, "dashboard"], [1, "container"], [1, "breadcrumb-banner", "bg-kingdom"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "click"], [1, "breadcrumb-item", "active"], [1, "card", "mt-2"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "body"], [1, "px-5"], [1, "row"], [1, "col-md-12"], [1, "row", "justify-content-center", "mt-2"], [1, "col-xs-12", "col-sm-12", "col-md-5", "col-lg-5", "text-center"], ["src", "assets/images/KB-logo.png", "width", "400px", "height", "100px", "alt", ""], [1, "float-end", "mt-3"], [1, "m-l-5"], [1, "col-xs-12", "col-sm-12", "col-md-2", "col-lg-2", "text-center"], [1, "horizontal-line"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "REFRESH", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "acNumber"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-25", 4, "matHeaderCellDef"], ["class", "column-nowrap column-nowrap psl-3 tbl-col-width-per-25", 4, "matCellDef"], ["matColumnDef", "acBalance"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matHeaderCellDef"], ["class", "column-nowrap column-nowrap psl-3 tbl-col-width-per-15", 4, "matCellDef"], ["matColumnDef", "glAccountTypeId"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "financialGrouping"], ["matColumnDef", "action"], ["class", "column-nowrap column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "column-nowrap", "psl-3", "tbl-col-width-per-20"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-25"], [1, "column-nowrap", "column-nowrap", "psl-3", "tbl-col-width-per-25"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], [1, "column-nowrap", "column-nowrap", "psl-3", "tbl-col-width-per-15"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matRipple", ""], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function FsClassDataComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Enterprise Resource Planning Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FsClassDataComponent_Template_a_click_8_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 5)(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FsClassDataComponent_Template_a_click_11_listener() { return ctx.reportDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " ERP Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Data Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, FsClassDataComponent_div_16_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15)(25, "div", 17)(26, "address")(27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " P. O. Box 22741- 00400 Nairobi, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " info@kingdombankltd.co.ke ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Landline: 020-221 0339, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Mobile: 0709933456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "div", 19)(36, "div", 20)(37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 10)(39, "div", 21)(40, "div", 22)(41, "div", 12)(42, "div", 23)(43, "ul", 24)(44, "li", 25)(45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "li", 26)(48, "label", 27)(49, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function FsClassDataComponent_Template_input_keyup_51_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "li")(54, "div", 31)(55, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FsClassDataComponent_Template_button_click_55_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "mat-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 34)(59, "ul", 35)(60, "li")(61, "div", 36)(62, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FsClassDataComponent_Template_img_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](74); return _r3.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "li")(64, "div", 38)(65, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FsClassDataComponent_Template_img_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](74); return _r3.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "li")(67, "div", 40)(68, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FsClassDataComponent_Template_img_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](74); return _r3.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "li")(70, "div", 42)(71, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FsClassDataComponent_Template_img_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](74); return _r3.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "mat-table", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](75, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, FsClassDataComponent_mat_header_cell_76_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](77, FsClassDataComponent_mat_cell_77_Template, 3, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](78, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, FsClassDataComponent_mat_header_cell_79_Template, 2, 0, "mat-header-cell", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, FsClassDataComponent_mat_cell_80_Template, 3, 1, "mat-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](81, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, FsClassDataComponent_mat_header_cell_82_Template, 2, 0, "mat-header-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, FsClassDataComponent_mat_cell_83_Template, 4, 6, "mat-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](84, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, FsClassDataComponent_mat_header_cell_85_Template, 2, 0, "mat-header-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, FsClassDataComponent_mat_cell_86_Template, 3, 1, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](87, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](88, FsClassDataComponent_mat_header_cell_88_Template, 2, 0, "mat-header-cell", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, FsClassDataComponent_mat_cell_89_Template, 3, 1, "mat-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](90, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](91, FsClassDataComponent_mat_header_cell_91_Template, 2, 0, "mat-header-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](92, FsClassDataComponent_mat_cell_92_Template, 3, 3, "mat-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](93, FsClassDataComponent_mat_header_row_93_Template, 1, 0, "mat-header-row", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](94, FsClassDataComponent_mat_row_94_Template, 1, 2, "mat-row", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, FsClassDataComponent_mat_cell_95_Template, 2, 1, "mat-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, FsClassDataComponent_div_96_Template, 2, 1, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "mat-paginator", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.fsClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_17__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CurrencyPipe], styles: [".breadcrumb-banner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  background-image: linear-gradient(to right, #1a1a1a, #354b2e);\n  border-radius: 10px;\n  transition: background-image 0.5s ease-in-out;\n}\n\n.breadcrumb-banner[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(to right, #3d392d, #1a1a1a);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n}\n\nnav[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n\nol.breadcrumb[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 10px;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n  transition: color 0.3s ease-in-out;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #9789de;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: calc(50% - 5px);\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #9789de transparent;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: 60px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n  font-weight: bold;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.table[_ngcontent-%COMP%]   th.truncate[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.truncate[_ngcontent-%COMP%] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.action-column[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.category-column[_ngcontent-%COMP%], .bank-column[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.date-range[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.date-range[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.horizontal-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3px;\n  background-color: #000;\n  margin-top: 2px;\n  margin-bottom: 5px;\n}\n\n.green-card[_ngcontent-%COMP%] {\n  background-color: #074507;\n  display: inline-block;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZzLWNsYXNzLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQUFGOztBQUdBO0VBQ0UsNkRBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0NBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0FBQUY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFPSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFMTjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFSRjs7QUE4Q0E7RUFDRSxXQUFBO0FBM0NGOztBQTRDRTs7RUFFRSxzQkFBQTtBQTFDSjs7QUEyQ0k7O0VBWEYsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUE1QkY7O0FBMENBO0VBQ0UsVUFBQTtBQXZDRjs7QUEwQ0E7O0VBRUUsVUFBQTtBQXZDRjs7QUEyQ0U7RUFDRSxpQkFBQTtBQXhDSjs7QUE4Q0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQTNDRjs7QUE4Q0E7RUFDRSxTQUFBO0FBM0NGOztBQWdEQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUE3Q0Y7O0FBa0RBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQS9DRjs7QUFrREE7RUFDRSxZQUFBO0FBL0NGIiwiZmlsZSI6ImZzLWNsYXNzLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4uYnJlYWRjcnVtYi1iYW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWExYTFhLCAjMzU0YjJlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnJlYWRjcnVtYi1iYW5uZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZDM5MmQsICMxYTFhMWEpO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG5uYXYge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm9sLmJyZWFkY3J1bWIge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0uYWN0aXZlIHtcbiAgY29sb3I6ICM5Nzg5ZGU7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0uYWN0aXZlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0uYWN0aXZlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNXB4KTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAxMHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5Nzg5ZGUgdHJhbnNwYXJlbnQ7XG59XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyBEYXNoYm9hcmQgc3R5bGVzXG4uZGFzaGJvYXJkIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcblxuICAuYmxvY2staGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG5cbi8vIENvbnRhaW5lciBzdHlsZXNcbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vL1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiB0cnVuY2F0ZS10ZXh0IHtcbiAgbWF4LXdpZHRoOiAxNTBweDsgXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGgsXG4gIHRkIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICYudHJ1bmNhdGUge1xuICAgICAgQGluY2x1ZGUgdHJ1bmNhdGUtdGV4dDtcbiAgICB9XG4gIH1cbn1cblxuLmFjdGlvbi1jb2x1bW4ge1xuICB3aWR0aDogMTAlO1xufVxuXG4uY2F0ZWdvcnktY29sdW1uLFxuLmJhbmstY29sdW1uIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxudGZvb3Qge1xuICB0ZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuLy8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi5kYXRlLXJhbmdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRhdGUtcmFuZ2UgaDYge1xuICBtYXJnaW46IDA7XG59XG5cbi8vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4uaG9yaXpvbnRhbC1saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyBcbiAgbWFyZ2luLXRvcDogMnB4OyBcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyBcbn1cblxuLy8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi5ncmVlbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDY5LCA3KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ud2hpdGUtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 33953:
/*!************************************************************************************************************!*\
  !*** ./src/app/erp-reports/modules/preview-reports/gl-account-statement/gl-account-statement.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlAccountStatementComponent": () => (/* binding */ GlAccountStatementComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_reports_data_services_finance_reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-reports/data/services/finance-reports.service */ 47720);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_finance_data_services_middlware_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-finance/data/services/middlware.service */ 71096);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);






















function GlAccountStatementComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-bar", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GlAccountStatementComponent_mat_header_cell_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "TrxDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GlAccountStatementComponent_mat_cell_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 71)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r26.TrxDate);
} }
function GlAccountStatementComponent_mat_header_cell_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "ValueDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GlAccountStatementComponent_mat_cell_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 71)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r27.ValueDate);
} }
function GlAccountStatementComponent_mat_header_cell_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GlAccountStatementComponent_mat_cell_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 73)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r28.Particulars);
} }
function GlAccountStatementComponent_mat_header_cell_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GlAccountStatementComponent_mat_cell_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 75)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r29.Debit);
} }
function GlAccountStatementComponent_mat_header_cell_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GlAccountStatementComponent_mat_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 75)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r30.Credit);
} }
function GlAccountStatementComponent_mat_header_cell_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Closing");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GlAccountStatementComponent_mat_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 71)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r31.Closing);
} }
function GlAccountStatementComponent_mat_header_cell_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "OperatorID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GlAccountStatementComponent_mat_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 75)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r32.OperatorID);
} }
function GlAccountStatementComponent_mat_header_cell_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "SupervisorID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GlAccountStatementComponent_mat_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 71)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r33.SupervisorID);
} }
function GlAccountStatementComponent_mat_header_cell_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GlAccountStatementComponent_mat_cell_101_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 76)(1, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GlAccountStatementComponent_mat_cell_101_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function GlAccountStatementComponent_mat_cell_101_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const row_r34 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r37.viewGlTransactions(row_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-feather-icons", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "eye");
} }
function GlAccountStatementComponent_mat_header_row_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-header-row");
} }
function GlAccountStatementComponent_mat_row_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-row", 79);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("cursor", "pointer");
} }
function GlAccountStatementComponent_mat_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r24.input.value, "\"");
} }
function GlAccountStatementComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-spinner", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class GlAccountStatementComponent {
    constructor(route, reportService, snackbar, middlewareService, router) {
        this.route = route;
        this.reportService = reportService;
        this.snackbar = snackbar;
        this.middlewareService = middlewareService;
        this.router = router;
        this.displayedColumns = [
            "TrxDate",
            "ValueDate",
            "Particulars",
            "Debit",
            "Credit",
            "Closing",
            "OperatorID",
            "SupervisorID"
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        this.isLoading = false;
        this.pageFunction = "View";
        this.glAccount = "";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.fromDate = "";
        this.toDate = "";
        this.posting = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (params.glAccount) {
                const action = params.action;
                this.pageFunction = params.action;
                this.glAccount = params.glAccount;
                this.fromDate = params.fromDate;
                this.toDate = params.toDate;
            }
        });
        this.getData();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getData() {
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = true;
        let body = {
            ourBranchID: "",
            accountID: this.glAccount,
            fromDate: this.fromDate,
            toDate: this.toDate,
            chargeID: "",
            topCountTrx: ""
        };
        this.middlewareService
            .getGlAccountStatements(body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.data :", res);
                if (res.length > 0) {
                    this.data = res;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    console.log("this.data :", this.data);
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
            rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription;
    }
    refresh() {
        this.getData();
    }
    downloadGLStatementReport() { }
    home() { this.router.navigate(["/erp-dashboard/main"]); }
    reportDashboard() {
        this.router.navigate(["/erp-reports/dashboard"]);
    }
    cancel() {
        this.router.navigate(["/erp-reports/dashboard"]);
    }
}
GlAccountStatementComponent.ɵfac = function GlAccountStatementComponent_Factory(t) { return new (t || GlAccountStatementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_reports_data_services_finance_reports_service__WEBPACK_IMPORTED_MODULE_0__.FinanceReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_finance_data_services_middlware_service__WEBPACK_IMPORTED_MODULE_2__.MiddlewareService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
GlAccountStatementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GlAccountStatementComponent, selectors: [["app-gl-account-statement"]], viewQuery: function GlAccountStatementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 107, vars: 9, consts: [[1, "dashboard"], [1, "container"], [1, "breadcrumb-banner", "bg-kingdom"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "click"], [1, "breadcrumb-item", "active"], [1, "card", "mt-2"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "body"], [1, "px-5"], [1, "row"], [1, "col-md-12"], [1, "row", "justify-content-center", "mt-2"], [1, "col-xs-12", "col-sm-12", "col-md-5", "col-lg-5", "text-center"], ["src", "assets/images/KB-logo.png", "width", "400px", "height", "100px", "alt", ""], [1, "float-end", "mt-3"], [1, "m-l-5"], [1, "col-xs-12", "col-sm-12", "col-md-2", "col-lg-2", "text-center"], [1, "horizontal-line"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "REFRESH", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "TrxDate"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matCellDef"], ["matColumnDef", "ValueDate"], ["matColumnDef", "Particulars"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "Debit"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "Credit"], ["matColumnDef", "Closing"], ["matColumnDef", "OperatorID"], ["matColumnDef", "SupervisorID"], ["matColumnDef", "action"], ["class", "column-nowrap column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matRipple", ""], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function GlAccountStatementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Enterprise Resource Planning Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GlAccountStatementComponent_Template_a_click_8_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li", 5)(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GlAccountStatementComponent_Template_a_click_11_listener() { return ctx.reportDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " ERP Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Data Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, GlAccountStatementComponent_div_16_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 15)(25, "div", 17)(26, "address")(27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " P. O. Box 22741- 00400 Nairobi, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " info@kingdombankltd.co.ke ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Landline: 020-221 0339, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Mobile: 0709933456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "div", 19)(36, "div", 20)(37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 10)(39, "div", 21)(40, "div", 22)(41, "div", 12)(42, "div", 23)(43, "ul", 24)(44, "li", 25)(45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "li", 26)(48, "label", 27)(49, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function GlAccountStatementComponent_Template_input_keyup_51_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "li")(54, "div", 31)(55, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GlAccountStatementComponent_Template_button_click_55_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "mat-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 34)(59, "ul", 35)(60, "li")(61, "div", 36)(62, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GlAccountStatementComponent_Template_img_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](74); return _r3.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "li")(64, "div", 38)(65, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GlAccountStatementComponent_Template_img_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](74); return _r3.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "li")(67, "div", 40)(68, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GlAccountStatementComponent_Template_img_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](74); return _r3.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "li")(70, "div", 42)(71, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GlAccountStatementComponent_Template_img_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](74); return _r3.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "mat-table", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](75, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, GlAccountStatementComponent_mat_header_cell_76_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, GlAccountStatementComponent_mat_cell_77_Template, 3, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](78, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, GlAccountStatementComponent_mat_header_cell_79_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, GlAccountStatementComponent_mat_cell_80_Template, 3, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](81, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](82, GlAccountStatementComponent_mat_header_cell_82_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](83, GlAccountStatementComponent_mat_cell_83_Template, 3, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](84, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, GlAccountStatementComponent_mat_header_cell_85_Template, 2, 0, "mat-header-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, GlAccountStatementComponent_mat_cell_86_Template, 3, 1, "mat-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](87, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](88, GlAccountStatementComponent_mat_header_cell_88_Template, 2, 0, "mat-header-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](89, GlAccountStatementComponent_mat_cell_89_Template, 3, 1, "mat-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](90, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](91, GlAccountStatementComponent_mat_header_cell_91_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](92, GlAccountStatementComponent_mat_cell_92_Template, 3, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](93, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](94, GlAccountStatementComponent_mat_header_cell_94_Template, 2, 0, "mat-header-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](95, GlAccountStatementComponent_mat_cell_95_Template, 3, 1, "mat-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](96, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](97, GlAccountStatementComponent_mat_header_cell_97_Template, 2, 0, "mat-header-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](98, GlAccountStatementComponent_mat_cell_98_Template, 3, 1, "mat-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](99, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](100, GlAccountStatementComponent_mat_header_cell_100_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](101, GlAccountStatementComponent_mat_cell_101_Template, 3, 3, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](102, GlAccountStatementComponent_mat_header_row_102_Template, 1, 0, "mat-header-row", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](103, GlAccountStatementComponent_mat_row_103_Template, 1, 2, "mat-row", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](104, GlAccountStatementComponent_mat_cell_104_Template, 2, 1, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](105, GlAccountStatementComponent_div_105_Template, 2, 1, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](106, "mat-paginator", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Statements for GL: ", ctx.glAccount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_18__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator], styles: [".breadcrumb-banner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  background-image: linear-gradient(to right, #1a1a1a, #354b2e);\n  border-radius: 10px;\n  transition: background-image 0.5s ease-in-out;\n}\n\n.breadcrumb-banner[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(to right, #3d392d, #1a1a1a);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n}\n\nnav[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n\nol.breadcrumb[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 10px;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n  transition: color 0.3s ease-in-out;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #9789de;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: calc(50% - 5px);\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #9789de transparent;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: 60px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n  font-weight: bold;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.table[_ngcontent-%COMP%]   th.truncate[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.truncate[_ngcontent-%COMP%] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.action-column[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.category-column[_ngcontent-%COMP%], .bank-column[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.date-range[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.date-range[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.horizontal-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3px;\n  background-color: #000;\n  margin-top: 2px;\n  margin-bottom: 5px;\n}\n\n.green-card[_ngcontent-%COMP%] {\n  background-color: #074507;\n  display: inline-block;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsLWFjY291bnQtc3RhdGVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFHQTtFQUNFLDZEQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGtDQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQUFGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBT0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBT0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBTE47O0FBV0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUkY7O0FBOENBO0VBQ0UsV0FBQTtBQTNDRjs7QUE0Q0U7O0VBRUUsc0JBQUE7QUExQ0o7O0FBMkNJOztFQVhGLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBNUJGOztBQTBDQTtFQUNFLFVBQUE7QUF2Q0Y7O0FBMENBOztFQUVFLFVBQUE7QUF2Q0Y7O0FBMkNFO0VBQ0UsaUJBQUE7QUF4Q0o7O0FBOENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUEzQ0Y7O0FBOENBO0VBQ0UsU0FBQTtBQTNDRjs7QUFnREE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBN0NGOztBQWtEQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUEvQ0Y7O0FBa0RBO0VBQ0UsWUFBQTtBQS9DRiIsImZpbGUiOiJnbC1hY2NvdW50LXN0YXRlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi5icmVhZGNydW1iLWJhbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxYTFhMWEsICMzNTRiMmUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5icmVhZGNydW1iLWJhbm5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNkMzkyZCwgIzFhMWExYSk7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxub2wuYnJlYWRjcnVtYiB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xuICBjb2xvcjogIzk3ODlkZTtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmU6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSA1cHgpO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzk3ODlkZSB0cmFuc3BhcmVudDtcbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vIERhc2hib2FyZCBzdHlsZXNcbi5kYXNoYm9hcmQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuXG4gIC5ibG9jay1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQ29udGFpbmVyIHN0eWxlc1xuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuQG1peGluIHRydW5jYXRlLXRleHQge1xuICBtYXgtd2lkdGg6IDE1MHB4OyBcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0aCxcbiAgdGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgJi50cnVuY2F0ZSB7XG4gICAgICBAaW5jbHVkZSB0cnVuY2F0ZS10ZXh0O1xuICAgIH1cbiAgfVxufVxuXG4uYWN0aW9uLWNvbHVtbiB7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5jYXRlZ29yeS1jb2x1bW4sXG4uYmFuay1jb2x1bW4ge1xuICB3aWR0aDogNDUlO1xufVxuXG50Zm9vdCB7XG4gIHRkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4vLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLmRhdGUtcmFuZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF0ZS1yYW5nZSBoNiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLy8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi5ob3Jpem9udGFsLWxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IFxuICBtYXJnaW4tdG9wOiAycHg7IFxuICBtYXJnaW4tYm90dG9tOiA1cHg7IFxufVxuXG4vLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLmdyZWVuLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgNjksIDcpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi53aGl0ZS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"] });


/***/ }),

/***/ 26427:
/*!******************************************************************************************!*\
  !*** ./src/app/erp-reports/modules/preview-reports/profit-loss/profit-loss.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfitLossComponent": () => (/* binding */ ProfitLossComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_reports_data_services_finance_reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-reports/data/services/finance-reports.service */ 47720);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);













function ProfitLossComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-bar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_ng_container_38_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " From Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_ng_container_38_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Enter a Valid Account By Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_ng_container_38_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " To Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_ng_container_38_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Enter a Valid Account By Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_ng_container_38_tr_43_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 49)(6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfitLossComponent_ng_container_38_tr_43_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const incomeDatum_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.viewDetails(incomeDatum_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const incomeDatum_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", incomeDatum_r11.financial_grouping, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", incomeDatum_r11.ac_balance, " ");
} }
function ProfitLossComponent_ng_container_38_tr_62_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 49)(6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfitLossComponent_ng_container_38_tr_62_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const operatingIncomeDatum_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.viewDetails(operatingIncomeDatum_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const operatingIncomeDatum_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", operatingIncomeDatum_r14.financial_grouping, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", operatingIncomeDatum_r14.ac_balance, " ");
} }
function ProfitLossComponent_ng_container_38_tr_81_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 49)(6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfitLossComponent_ng_container_38_tr_81_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const profitBeforeTaxDatum_r17 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.viewDetails(profitBeforeTaxDatum_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const profitBeforeTaxDatum_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", profitBeforeTaxDatum_r17.financial_grouping, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", profitBeforeTaxDatum_r17.ac_balance, " ");
} }
function ProfitLossComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14)(2, "div", 24)(3, "div", 25)(4, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "PROFIT AND LOSS REPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 27)(7, "div", 28)(8, "div", 29)(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "From Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 30)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "From Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 31)(16, "mat-datepicker-toggle", 32)(17, "mat-datepicker", null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProfitLossComponent_ng_container_38_mat_error_19_Template, 2, 0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ProfitLossComponent_ng_container_38_mat_error_20_Template, 2, 0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 29)(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "To Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-form-field", 30)(26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "To Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 34)(29, "mat-datepicker-toggle", 32)(30, "mat-datepicker", null, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ProfitLossComponent_ng_container_38_mat_error_32_Template, 2, 0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ProfitLossComponent_ng_container_38_mat_error_33_Template, 2, 0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 36)(35, "div", 37)(36, "div", 38)(37, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "INCOME");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 39)(40, "div", 40)(41, "table", 41)(42, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ProfitLossComponent_ng_container_38_tr_43_Template, 8, 2, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "tfoot")(45, "tr")(46, "td")(47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "TOTALS:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "td")(50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 36)(54, "div", 37)(55, "div", 38)(56, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "OPERATING INCOME");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 39)(59, "div", 40)(60, "table", 41)(61, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, ProfitLossComponent_ng_container_38_tr_62_Template, 8, 2, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "tfoot")(64, "tr")(65, "td")(66, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "TOTALS:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "td")(69, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 36)(73, "div", 37)(74, "div", 38)(75, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "PROFIT BEFORE TAX");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 39)(78, "div", 40)(79, "table", 41)(80, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, ProfitLossComponent_ng_container_38_tr_81_Template, 8, 2, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "tfoot")(83, "tr")(84, "td")(85, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "TOTALS:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "td")(88, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 43)(93, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfitLossComponent_ng_container_38_Template_button_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfitLossComponent_ng_container_38_Template_button_click_95_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.downloadDoc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, " Print ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.Form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.Form.get("fromDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.Form.get("fromDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.Form.get("toDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.Form.get("toDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.data.incomeData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.data.totals.totalIncomeData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.data.operatingIncomeData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.data.totals.totalOperatingIncomeData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.data.profitBeforeTaxData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.data.totals.totalProfitBeforeTaxData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("auth-spinner", ctx_r1.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.posting);
} }
class ProfitLossComponent {
    constructor(router, route, reportService, fb, snackbar, datePipe) {
        this.router = router;
        this.route = route;
        this.reportService = reportService;
        this.fb = fb;
        this.snackbar = snackbar;
        this.datePipe = datePipe;
        this.goodsDetails = [];
        this.payWayInfo = [];
        this.taxDetails = [];
        this.loading = true;
        this.pageFunction = "View";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.isLoading = false;
        this.posting = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (params.action) {
                const action = params.action;
                this.pageFunction = params.action;
            }
        });
        const today = new Date();
        const toDateDefault = today.toISOString().split("T")[0];
        const fromDateDefault = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())
            .toISOString()
            .split("T")[0];
        this.Form = this.fb.group({
            type: "PDF",
            fromDate: [fromDateDefault, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            toDate: [toDateDefault, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        this.Form.valueChanges.subscribe(() => {
            this.getData();
        });
        this.getData();
    }
    getData() {
        this.isLoading = true;
        this.data = {};
        let params = {
            fromDate: this.datePipe.transform(this.Form.value.fromDate, "yyyy-MM-dd"),
            toDate: this.datePipe.transform(this.Form.value.toDate, "yyyy-MM-dd"),
        };
        this.reportService
            .getProfitAndLossReportData(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.data :", res);
                if (res.entity) {
                    this.data = res.entity;
                    this.isLoading = false;
                    console.log("this.data :", this.data);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => {
                this.isLoading = false;
            },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription;
    }
    viewDetails(data) {
        let route = "/erp-reports/fs-class-data";
        this.router.navigate([route], {
            queryParams: {
                fsClass: data.financial_grouping,
                fromDate: this.datePipe.transform(this.Form.value.fromDate, "yyyy-MM-dd"),
                toDate: this.datePipe.transform(this.Form.value.toDate, "yyyy-MM-dd"),
                action: "View",
            },
        });
    }
    downloadDoc() {
        this.posting = true;
        let type = this.Form.value.type;
        let fromDate = this.datePipe.transform(this.Form.value.fromDate, "YYYY-MM-dd");
        let toDate = this.datePipe.transform(this.Form.value.toDate, "YYYY-MM-dd");
        let params = { fromDate: fromDate, toDate: toDate };
        // const params = new HttpParams()
        //   .set("fromDate", fromDate)
        //   .set("toDate", toDate);
        console.log("params :", params);
        if (type == "PDF") {
            this.reportService
                .downloadProfitAndLossReport(params)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
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
                    // Append row.code to the download URL
                    a.download = `ProfitAndLoss.pdf`;
                    a.click();
                    window.URL.revokeObjectURL(url);
                    a.remove();
                    this.snackbar.showNotification("snackbar-success", res.message);
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                    this.posting = false;
                },
                complete: () => {
                    this.posting = false;
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription;
        }
        else if (type == "EXCEL") {
        }
    }
    home() {
        this.router.navigate(["/erp-dashboard/main"]);
    }
    reportDashboard() {
        this.router.navigate(["/erp-reports/dashboard"]);
    }
    cancel() {
        this.router.navigate(["/erp-reports/dashboard"]);
    }
}
ProfitLossComponent.ɵfac = function ProfitLossComponent_Factory(t) { return new (t || ProfitLossComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_erp_reports_data_services_finance_reports_service__WEBPACK_IMPORTED_MODULE_0__.FinanceReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe)); };
ProfitLossComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfitLossComponent, selectors: [["app-profit-loss"]], decls: 39, vars: 2, consts: [[1, "dashboard"], [1, "container"], [1, "breadcrumb-banner", "bg-kingdom"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "click"], [1, "breadcrumb-item", "active"], [1, "card", "mt-2"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "body"], [1, "px-5"], [1, "row"], [1, "col-md-12"], [1, "row", "justify-content-center", "mt-2"], [1, "col-xs-12", "col-sm-12", "col-md-5", "col-lg-5", "text-center"], ["src", "assets/images/KB-logo.png", "width", "400px", "height", "100px", "alt", ""], [1, "float-end", "mt-3"], [1, "m-l-5"], [1, "col-xs-12", "col-sm-12", "col-md-2", "col-lg-2", "text-center"], [1, "horizontal-line"], [4, "ngIf"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "col-9", "text-center"], [1, "green-card"], [1, "white-text"], [3, "formGroup"], [1, "row", "justify-content-center", "mt-4"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], ["appearance", "fill", 1, "example-full-width", "mb-0"], ["matInput", "", "formControlName", "fromDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "toDate", "required", "", 3, "matDatepicker"], ["picker2", ""], [1, "row", "clearfix", "justify-content-center"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "header"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "text-end", "mt-2"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [1, "fas", "fa-print"], [1, "category-column", "truncate"], [1, "bank-columntruncate"], [1, "action-column"], [1, "fas", "fa-eye"], [1, "bank-column", "truncate"]], template: function ProfitLossComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Enterprise Resource Planning Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfitLossComponent_Template_a_click_8_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 5)(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfitLossComponent_Template_a_click_11_listener() { return ctx.reportDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " ERP Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Profit and Loss Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProfitLossComponent_div_16_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 15)(25, "div", 17)(26, "address")(27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " P. O. Box 22741- 00400 Nairobi, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " info@kingdombankltd.co.ke ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Landline: 020-221 0339, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Mobile: 0709933456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "div", 19)(36, "div", 20)(37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ProfitLossComponent_ng_container_38_Template, 98, 18, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton], styles: [".breadcrumb-banner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  background-image: linear-gradient(to right, #1a1a1a, #354b2e);\n  border-radius: 10px;\n  transition: background-image 0.5s ease-in-out;\n}\n\n.breadcrumb-banner[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(to right, #3d392d, #1a1a1a);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n}\n\nnav[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n\nol.breadcrumb[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 10px;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n  transition: color 0.3s ease-in-out;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #9789de;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: calc(50% - 5px);\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #9789de transparent;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: 60px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n  font-weight: bold;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.table[_ngcontent-%COMP%]   th.truncate[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.truncate[_ngcontent-%COMP%] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.action-column[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.category-column[_ngcontent-%COMP%], .bank-column[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.date-range[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.date-range[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.horizontal-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3px;\n  background-color: #000;\n  margin-top: 2px;\n  margin-bottom: 5px;\n}\n\n.green-card[_ngcontent-%COMP%] {\n  background-color: #074507;\n  display: inline-block;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpdC1sb3NzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFHQTtFQUNFLDZEQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGtDQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQUFGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBT0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBT0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBTE47O0FBV0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUkY7O0FBOENBO0VBQ0UsV0FBQTtBQTNDRjs7QUE0Q0U7O0VBRUUsc0JBQUE7QUExQ0o7O0FBMkNJOztFQVhGLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBNUJGOztBQTBDQTtFQUNFLFVBQUE7QUF2Q0Y7O0FBMENBOztFQUVFLFVBQUE7QUF2Q0Y7O0FBMkNFO0VBQ0UsaUJBQUE7QUF4Q0o7O0FBOENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUEzQ0Y7O0FBOENBO0VBQ0UsU0FBQTtBQTNDRjs7QUFnREE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBN0NGOztBQWtEQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUEvQ0Y7O0FBa0RBO0VBQ0UsWUFBQTtBQS9DRiIsImZpbGUiOiJwcm9maXQtbG9zcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi5icmVhZGNydW1iLWJhbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxYTFhMWEsICMzNTRiMmUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5icmVhZGNydW1iLWJhbm5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNkMzkyZCwgIzFhMWExYSk7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxub2wuYnJlYWRjcnVtYiB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xuICBjb2xvcjogIzk3ODlkZTtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmU6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSA1cHgpO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzk3ODlkZSB0cmFuc3BhcmVudDtcbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vIERhc2hib2FyZCBzdHlsZXNcbi5kYXNoYm9hcmQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuXG4gIC5ibG9jay1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQ29udGFpbmVyIHN0eWxlc1xuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuQG1peGluIHRydW5jYXRlLXRleHQge1xuICBtYXgtd2lkdGg6IDE1MHB4OyBcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0aCxcbiAgdGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgJi50cnVuY2F0ZSB7XG4gICAgICBAaW5jbHVkZSB0cnVuY2F0ZS10ZXh0O1xuICAgIH1cbiAgfVxufVxuXG4uYWN0aW9uLWNvbHVtbiB7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5jYXRlZ29yeS1jb2x1bW4sXG4uYmFuay1jb2x1bW4ge1xuICB3aWR0aDogNDUlO1xufVxuXG50Zm9vdCB7XG4gIHRkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4vLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLmRhdGUtcmFuZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF0ZS1yYW5nZSBoNiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLy8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi5ob3Jpem9udGFsLWxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IFxuICBtYXJnaW4tdG9wOiAycHg7IFxuICBtYXJnaW4tYm90dG9tOiA1cHg7IFxufVxuXG4vLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLmdyZWVuLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgNjksIDcpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi53aGl0ZS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"] });


/***/ }),

/***/ 77119:
/*!**********************************************************************************************!*\
  !*** ./src/app/erp-reports/modules/preview-reports/trial-balance/trial-balance.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrialBalanceComponent": () => (/* binding */ TrialBalanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_reports_data_services_finance_reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-reports/data/services/finance-reports.service */ 47720);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);


























function TrialBalanceComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-bar", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " From Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Enter a Valid Account By Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_mat_error_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " To Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_mat_error_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Enter a Valid Account By Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_mat_option_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const glType_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", glType_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", glType_r12.name, " ");
} }
function TrialBalanceComponent_mat_error_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " GlType is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_ng_container_86_mat_header_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Account ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_ng_container_86_mat_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r35.accountid);
} }
function TrialBalanceComponent_ng_container_86_mat_header_cell_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Account Type ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_ng_container_86_mat_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r36.accounttypeid);
} }
function TrialBalanceComponent_ng_container_86_mat_header_cell_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Account Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_ng_container_86_mat_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r37.accountname);
} }
function TrialBalanceComponent_ng_container_86_mat_header_cell_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Opening Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_ng_container_86_mat_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r38.openingBalance);
} }
function TrialBalanceComponent_ng_container_86_mat_header_cell_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_ng_container_86_mat_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r39.debit);
} }
function TrialBalanceComponent_ng_container_86_mat_header_cell_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_ng_container_86_mat_cell_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r40.credit);
} }
function TrialBalanceComponent_ng_container_86_mat_header_cell_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Closing Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_ng_container_86_mat_cell_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r41.closingBalance);
} }
function TrialBalanceComponent_ng_container_86_mat_header_cell_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrialBalanceComponent_ng_container_86_mat_cell_54_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 91)(1, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrialBalanceComponent_ng_container_86_mat_cell_54_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function TrialBalanceComponent_ng_container_86_mat_cell_54_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const row_r42 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r45.viewDetails(row_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-feather-icons", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "eye");
} }
function TrialBalanceComponent_ng_container_86_mat_header_row_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
} }
function TrialBalanceComponent_ng_container_86_mat_row_56_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-row", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrialBalanceComponent_ng_container_86_mat_row_56_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49); const row_r47 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r48.viewDetails(row_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("cursor", "pointer");
} }
function TrialBalanceComponent_ng_container_86_mat_cell_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r34.input.value, "\" ");
} }
function TrialBalanceComponent_ng_container_86_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 49)(2, "div", 12)(3, "div", 50)(4, "ul", 51)(5, "li", 52)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 53)(9, "label", 54)(10, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function TrialBalanceComponent_ng_container_86_Template_input_keyup_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r50.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 58)(15, "ul", 59)(16, "li")(17, "div", 60)(18, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrialBalanceComponent_ng_container_86_Template_img_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](30); return _r15.exportTable("xlsx", { fileName: "Suppliers-list", sheet: "sheet1" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li")(20, "div", 62)(21, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrialBalanceComponent_ng_container_86_Template_img_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](30); return _r15.exportTable("csv"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li")(23, "div", 64)(24, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrialBalanceComponent_ng_container_86_Template_img_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](30); return _r15.exportTable("json"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li")(26, "div", 66)(27, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrialBalanceComponent_ng_container_86_Template_img_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](30); return _r15.exportTable("txt"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-table", 68, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](31, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, TrialBalanceComponent_ng_container_86_mat_header_cell_32_Template, 2, 0, "mat-header-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, TrialBalanceComponent_ng_container_86_mat_cell_33_Template, 2, 1, "mat-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](34, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, TrialBalanceComponent_ng_container_86_mat_header_cell_35_Template, 2, 0, "mat-header-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, TrialBalanceComponent_ng_container_86_mat_cell_36_Template, 2, 1, "mat-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](37, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, TrialBalanceComponent_ng_container_86_mat_header_cell_38_Template, 2, 0, "mat-header-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, TrialBalanceComponent_ng_container_86_mat_cell_39_Template, 2, 1, "mat-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](40, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, TrialBalanceComponent_ng_container_86_mat_header_cell_41_Template, 2, 0, "mat-header-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, TrialBalanceComponent_ng_container_86_mat_cell_42_Template, 2, 1, "mat-cell", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](43, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, TrialBalanceComponent_ng_container_86_mat_header_cell_44_Template, 2, 0, "mat-header-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, TrialBalanceComponent_ng_container_86_mat_cell_45_Template, 2, 1, "mat-cell", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](46, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, TrialBalanceComponent_ng_container_86_mat_header_cell_47_Template, 2, 0, "mat-header-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, TrialBalanceComponent_ng_container_86_mat_cell_48_Template, 2, 1, "mat-cell", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](49, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, TrialBalanceComponent_ng_container_86_mat_header_cell_50_Template, 2, 0, "mat-header-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, TrialBalanceComponent_ng_container_86_mat_cell_51_Template, 2, 1, "mat-cell", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](52, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, TrialBalanceComponent_ng_container_86_mat_header_cell_53_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, TrialBalanceComponent_ng_container_86_mat_cell_54_Template, 3, 3, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, TrialBalanceComponent_ng_container_86_mat_header_row_55_Template, 1, 0, "mat-header-row", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, TrialBalanceComponent_ng_container_86_mat_row_56_Template, 1, 2, "mat-row", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, TrialBalanceComponent_ng_container_86_mat_cell_57_Template, 2, 1, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r9.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r9.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r9.displayedColumns);
} }
function TrialBalanceComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-spinner", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 40);
} }
function TrialBalanceComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 98)(1, "div", 99)(2, "span")(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Totals:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Opening Balance: ", ctx_r11.calculateTotal("openingBalance"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Debit: ", ctx_r11.calculateTotal("debit"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Credit: ", ctx_r11.calculateTotal("credit"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Closing Balance: ", ctx_r11.calculateTotal("closingBalance"), "");
} }
const _c0 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class TrialBalanceComponent {
    constructor(router, route, reportService, fb, snackbar, datePipe) {
        this.router = router;
        this.route = route;
        this.reportService = reportService;
        this.fb = fb;
        this.snackbar = snackbar;
        this.datePipe = datePipe;
        this.goodsDetails = [];
        this.payWayInfo = [];
        this.taxDetails = [];
        this.loading = true;
        this.glTypes = [{ name: "Transaction Gls" }, { name: "All Gls" }];
        this.displayedColumns = ['accountname', 'openingBalance', 'debit', 'credit', 'closingBalance', 'action'];
        this.pageFunction = "View";
        //************************************************************************************** */
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.isLoading = false;
        this.posting = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (params.action) {
                const action = params.action;
                this.pageFunction = params.action;
            }
        });
        const today = new Date();
        const toDateDefault = today.toISOString().split("T")[0];
        const fromDateDefault = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())
            .toISOString()
            .split("T")[0];
        this.Form = this.fb.group({
            type: ["PDF", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            fromDate: [fromDateDefault, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            toDate: [toDateDefault, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            glType: ["Transaction Gls"],
        });
        this.Form.valueChanges.subscribe(() => {
            this.getData();
        });
        this.getData();
    }
    //************************************************************************************** */
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getData() {
        this.data = {};
        this.isLoading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        let params = {
            fromDate: this.datePipe.transform(this.Form.value.fromDate, "yyyy-MM-dd"),
            toDate: this.datePipe.transform(this.Form.value.toDate, "yyyy-MM-dd"),
            reportType: this.Form.value.glType,
        };
        console.log("params :", params);
        this.reportService
            .getTrialBalanceReportData(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.data :", res);
                if (res.entity) {
                    this.data = res.entity;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    this.isLoading = false;
                    console.log("this.data :", this.data);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => {
                this.isLoading = false;
            },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription;
    }
    // totals = {
    //   openingBalance: 0,
    //   debit: 0,
    //   credit: 0,
    //   closingBalance: 0
    // };
    // calculateTotals() {
    //   this.totals.openingBalance = this.data.reduce((total, item) => total + item.openingBalance, 0);
    //   this.totals.debit = this.data.reduce((total, item) => total + item.debit, 0);
    //   this.totals.credit = this.data.reduce((total, item) => total + item.credit, 0);
    //   this.totals.closingBalance = this.data.reduce((total, item) => total + item.closingBalance, 0);
    // }
    calculateTotal(field) {
        return this.data.reduce((total, item) => total + item[field], 0);
    }
    viewDetails(data) {
        let route = "/erp-reports/fs-class-data";
        this.router.navigate([route], {
            queryParams: {
                fsClass: data.financial_grouping,
                fromDate: this.datePipe.transform(this.Form.value.fromDate, "yyyy-MM-dd"),
                toDate: this.datePipe.transform(this.Form.value.toDate, "yyyy-MM-dd"),
                action: "View",
            },
        });
    }
    cancel() {
        this.router.navigate(["/erp-reports/dashboard"]);
    }
    downloadDoc() {
        this.posting = true;
        let type = this.Form.value.type;
        let fromDate = this.datePipe.transform(this.Form.value.fromDate, "YYYY-MM-dd");
        let toDate = this.datePipe.transform(this.Form.value.toDate, "YYYY-MM-dd");
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams()
            .set("fromDate", fromDate)
            .set("toDate", toDate)
            .set("reportType", this.Form.value.glType);
        if (type == "PDF") {
            this.reportService
                .downloadTrialBalanceReport(params)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
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
                    // Append row.code to the download URL
                    a.download = `TrialBalance.pdf`;
                    a.click();
                    window.URL.revokeObjectURL(url);
                    a.remove();
                    this.snackbar.showNotification("snackbar-success", res.message);
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                    this.posting = false;
                },
                complete: () => {
                    this.posting = false;
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription;
        }
        else if (type == "EXCEL") {
        }
    }
    home() {
        this.router.navigate(["/erp-dashboard/main"]);
    }
    reportDashboard() {
        this.router.navigate(["/erp-reports/dashboard"]);
    }
}
TrialBalanceComponent.ɵfac = function TrialBalanceComponent_Factory(t) { return new (t || TrialBalanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_reports_data_services_finance_reports_service__WEBPACK_IMPORTED_MODULE_0__.FinanceReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe)); };
TrialBalanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TrialBalanceComponent, selectors: [["app-trial-balance"]], viewQuery: function TrialBalanceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 97, vars: 21, consts: [[1, "dashboard"], [1, "container"], [1, "breadcrumb-banner", "bg-kingdom"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "click"], [1, "breadcrumb-item", "active"], [1, "card", "mt-2"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "body"], [1, "px-5"], [1, "row"], [1, "col-md-12"], [1, "row", "justify-content-center", "mt-2"], [1, "col-xs-12", "col-sm-12", "col-md-5", "col-lg-5", "text-center"], ["src", "assets/images/KB-logo.png", "width", "400px", "height", "100px", "alt", ""], [1, "float-end", "mt-3"], [1, "m-l-5"], [1, "col-xs-12", "col-sm-12", "col-md-2", "col-lg-2", "text-center"], [1, "horizontal-line"], [1, "col-9", "text-center"], [1, "green-card"], [1, "white-text"], [3, "formGroup"], [1, "row", "justify-content-center", "mt-4"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], ["appearance", "fill", 1, "example-full-width", "mb-0"], ["matInput", "", "formControlName", "fromDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["matInput", "", "formControlName", "toDate", "required", "", 3, "matDatepicker"], ["picker2", ""], ["formControlName", "glType", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "clearfix", "justify-content-center"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "table-responsive"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["class", "table-footer", 4, "ngIf"], [1, "text-end", "mt-2"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [1, "fas", "fa-print"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [3, "value"], [1, "materialTableHeader", "mt-0"], [1, "col-6"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "accountid"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-25", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-25", 4, "matCellDef"], ["matColumnDef", "accounttypeid"], ["matColumnDef", "accountname"], ["matColumnDef", "openingBalance"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-35", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-35", 4, "matCellDef"], ["matColumnDef", "debit"], ["matColumnDef", "credit"], ["matColumnDef", "closingBalance"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-25 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-25 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-25"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-25"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-35"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-35"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-25", "pr-0"], ["matTooltip", "View Record", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matRipple", "", 3, "click"], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], [1, "table-footer"], [1, "footer-totals"]], template: function TrialBalanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Enterprise Resource Planning Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrialBalanceComponent_Template_a_click_8_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 5)(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrialBalanceComponent_Template_a_click_11_listener() { return ctx.reportDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " ERP Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Trail Balance Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, TrialBalanceComponent_div_16_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15)(25, "div", 17)(26, "address")(27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " P. O. Box 22741- 00400 Nairobi, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " info@kingdombankltd.co.ke ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Landline: 020-221 0339, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Mobile: 0709933456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "div", 19)(36, "div", 20)(37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 14)(40, "div", 21)(41, "div", 22)(42, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "TRIAL BALANCE REPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "form", 24)(45, "div", 25)(46, "div", 26)(47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "mat-form-field", 27)(51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "From Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 28)(54, "mat-datepicker-toggle", 29)(55, "mat-datepicker", null, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, TrialBalanceComponent_mat_error_57_Template, 2, 0, "mat-error", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, TrialBalanceComponent_mat_error_58_Template, 2, 0, "mat-error", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 26)(60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "mat-form-field", 27)(64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "To Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "input", 32)(67, "mat-datepicker-toggle", 29)(68, "mat-datepicker", null, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, TrialBalanceComponent_mat_error_70_Template, 2, 0, "mat-error", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, TrialBalanceComponent_mat_error_71_Template, 2, 0, "mat-error", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 26)(73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Gl Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "mat-form-field", 27)(77, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Gl types");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, TrialBalanceComponent_mat_option_80_Template, 2, 2, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, TrialBalanceComponent_mat_error_81_Template, 2, 0, "mat-error", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 36)(83, "div", 37)(84, "div", 10)(85, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, TrialBalanceComponent_ng_container_86_Template, 58, 3, "ng-container", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](87, TrialBalanceComponent_div_87_Template, 2, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "mat-paginator", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, TrialBalanceComponent_div_89_Template, 13, 4, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 42)(92, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrialBalanceComponent_Template_button_click_92_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrialBalanceComponent_Template_button_click_94_listener() { return ctx.downloadDoc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " Print ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](56);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.get("fromDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.Form.get("fromDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.get("toDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.Form.get("toDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.glTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.get("glType").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("auth-spinner", ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.posting);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_21__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator], styles: [".table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1rem;\n}\n\n.footer-totals[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  \n}\n\n.footer-totals[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  \n}\n\n.breadcrumb-banner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  background-image: linear-gradient(to right, #1a1a1a, #354b2e);\n  border-radius: 10px;\n  transition: background-image 0.5s ease-in-out;\n}\n\n.breadcrumb-banner[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(to right, #3d392d, #1a1a1a);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n}\n\nnav[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n\nol.breadcrumb[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 10px;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n  transition: color 0.3s ease-in-out;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #9789de;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: calc(50% - 5px);\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #9789de transparent;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: 60px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.dashboard[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n  font-weight: bold;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.table[_ngcontent-%COMP%]   th.truncate[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.truncate[_ngcontent-%COMP%] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.action-column[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.category-column[_ngcontent-%COMP%], .bank-column[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.date-range[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.date-range[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.horizontal-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3px;\n  background-color: #000;\n  margin-top: 2px;\n  margin-bottom: 5px;\n}\n\n.green-card[_ngcontent-%COMP%] {\n  background-color: #074507;\n  display: inline-block;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaWFsLWJhbGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUFpQix1Q0FBQTtBQUVyQjs7QUFDRTtFQUNFLGtCQUFBO0VBQW9CLG9DQUFBO0FBR3hCOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFERjs7QUFJQTtFQUNFLDZEQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGtDQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQURGOztBQVNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBTkY7O0FBUUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBUUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBTk47O0FBWUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBVEY7O0FBK0NBO0VBQ0UsV0FBQTtBQTVDRjs7QUE2Q0U7O0VBRUUsc0JBQUE7QUEzQ0o7O0FBNENJOztFQVhGLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBN0JGOztBQTJDQTtFQUNFLFVBQUE7QUF4Q0Y7O0FBMkNBOztFQUVFLFVBQUE7QUF4Q0Y7O0FBNENFO0VBQ0UsaUJBQUE7QUF6Q0o7O0FBK0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUE1Q0Y7O0FBK0NBO0VBQ0UsU0FBQTtBQTVDRjs7QUFpREE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBOUNGOztBQW1EQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFoREY7O0FBbURBO0VBQ0UsWUFBQTtBQWhERiIsImZpbGUiOiJ0cmlhbC1iYWxhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG4gIFxuICAuZm9vdGVyLXRvdGFscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7IC8qIEFsbG93IHdyYXBwaW5nIGlmIHNwYWNlIGlzIGxpbWl0ZWQgKi9cbiAgfVxuICBcbiAgLmZvb3Rlci10b3RhbHMgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyAvKiBBZGQgc29tZSBzcGFjaW5nIGJldHdlZW4gdG90YWxzICovXG4gIH1cbiAgXG5cblxuXG4gIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi5icmVhZGNydW1iLWJhbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxYTFhMWEsICMzNTRiMmUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5icmVhZGNydW1iLWJhbm5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNkMzkyZCwgIzFhMWExYSk7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxub2wuYnJlYWRjcnVtYiB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xuICBjb2xvcjogIzk3ODlkZTtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmU6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSA1cHgpO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzk3ODlkZSB0cmFuc3BhcmVudDtcbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vIERhc2hib2FyZCBzdHlsZXNcbi5kYXNoYm9hcmQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuXG4gIC5ibG9jay1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQ29udGFpbmVyIHN0eWxlc1xuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuQG1peGluIHRydW5jYXRlLXRleHQge1xuICBtYXgtd2lkdGg6IDE1MHB4OyBcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0aCxcbiAgdGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgJi50cnVuY2F0ZSB7XG4gICAgICBAaW5jbHVkZSB0cnVuY2F0ZS10ZXh0O1xuICAgIH1cbiAgfVxufVxuXG4uYWN0aW9uLWNvbHVtbiB7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5jYXRlZ29yeS1jb2x1bW4sXG4uYmFuay1jb2x1bW4ge1xuICB3aWR0aDogNDUlO1xufVxuXG50Zm9vdCB7XG4gIHRkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4vLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLmRhdGUtcmFuZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF0ZS1yYW5nZSBoNiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLy8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi5ob3Jpem9udGFsLWxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IFxuICBtYXJnaW4tdG9wOiAycHg7IFxuICBtYXJnaW4tYm90dG9tOiA1cHg7IFxufVxuXG4vLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLmdyZWVuLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgNjksIDcpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi53aGl0ZS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"] });


/***/ }),

/***/ 49544:
/*!******************************************************************************************!*\
  !*** ./src/app/erp-reports/modules/procurement-reports/procurement-reports.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcurementReportsComponent": () => (/* binding */ ProcurementReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _dialogs_generate_procurement_report_generate_procurement_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialogs/generate-procurement-report/generate-procurement-report.component */ 38749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class ProcurementReportsComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    generateReport(type) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "600px";
        dialogConfig.data = {
            type: type,
        };
        const dialogRef = this.dialog.open(_dialogs_generate_procurement_report_generate_procurement_report_component__WEBPACK_IMPORTED_MODULE_0__.GenerateProcurementReportComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            // result.data.forEach((element) => {
            // });
        });
    }
}
ProcurementReportsComponent.ɵfac = function ProcurementReportsComponent_Factory(t) { return new (t || ProcurementReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog)); };
ProcurementReportsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProcurementReportsComponent, selectors: [["app-procurement-reports"]], decls: 80, vars: 0, consts: [[1, "row", "mt-3"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card"], [1, "header"], [1, "body"], [1, "doc-file-type"], [1, "list-unstyled"], [1, "d-flex", "mb-3", 3, "click"], [1, "msr-3", "align-self-center", "img-icon", "primary-rgba", "text-primary"], [1, "far", "fa-file-word"], [1, "set-flex"], [1, "font-16", "mb-1"], [1, "ms-auto"], [1, "far", "fa-arrow-alt-circle-down"], [1, "d-flex", "mb-3"], [1, "msr-3", "align-self-center", "img-icon", "success-rgba", "text-success"], [1, "far", "fa-file-excel"], [1, "msr-3", "align-self-center", "img-icon", "danger-rgba", "text-danger"], [1, "far", "fa-file-pdf"], [1, "msr-3", "align-self-center", "img-icon", "info-rgba", "text-info"], [1, "far", "fa-file-archive"]], template: function ProcurementReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Procurement Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "ul", 6)(9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcurementReportsComponent_Template_li_click_9_listener() { return ctx.generateReport("POsByStatus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "POs by Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcurementReportsComponent_Template_li_click_20_listener() { return ctx.generateReport("PoDeliveryReport"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10)(24, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "PO Delivery Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcurementReportsComponent_Template_li_click_30_listener() { return ctx.generateReport("GeneralPoDeliveryReport"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 10)(34, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "General PO Delivery Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcurementReportsComponent_Template_li_click_40_listener() { return ctx.generateReport("SupplierAccountStatement"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 10)(44, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Supplier Account Statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcurementReportsComponent_Template_li_click_50_listener() { return ctx.generateReport("GeneralSupplierStatementReport"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 10)(54, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "General Supplier Statement Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcurementReportsComponent_Template_li_click_60_listener() { return ctx.generateReport("InvoiceReportDetailsByStatus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 10)(64, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Invoice Details Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcurementReportsComponent_Template_li_click_70_listener() { return ctx.generateReport("GeneralInvoiceReportDetailsByStatus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 10)(74, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "General Invoice Details Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } }, styles: [".list-unstyled[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: stretch;\n  padding: 20px;\n  background-color: #EBEBEE;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 48%;\n  margin-bottom: 20px;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease-in-out;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .msr-3[_ngcontent-%COMP%] {\n  color: #008000;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .set-flex[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #333;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .set-flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ms-auto[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 5px;\n  color: #333;\n  cursor: pointer;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ms-auto[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover {\n  background-color: #ccc;\n}\n\n\n\n@media (max-width: 768px) {\n  .list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-right: unset;\n  }\n}\n\n@keyframes icon-pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.ms-auto[_ngcontent-%COMP%]   .far.fa-eye[_ngcontent-%COMP%], .ms-auto[_ngcontent-%COMP%]   .far.fa-arrow-alt-circle-down[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n\n.ms-auto[_ngcontent-%COMP%]   .far.fa-eye[_ngcontent-%COMP%]:hover, .ms-auto[_ngcontent-%COMP%]   .far.fa-arrow-alt-circle-down[_ngcontent-%COMP%]:hover {\n  animation: icon-pulse 1s infinite;\n}\n\nli[_ngcontent-%COMP%]   .fa-arrow-alt-circle-down[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   .fa-eye[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nli[_ngcontent-%COMP%]   .fa-arrow-alt-circle-down[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2N1cmVtZW50LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0NBQUE7QUFBRjs7QUFHQTtFQUNFLHdDQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFHQSxrQkFBQTs7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VBQUY7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsbUJBQUE7RUFGRjtFQUlBO0lBQ0UscUJBQUE7RUFGRjtFQUlBO0lBQ0UsbUJBQUE7RUFGRjtBQUNGOztBQU9FO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FBTEo7O0FBUUU7RUFDRSxpQ0FBQTtBQU5KOztBQWVFO0VBQ0UsZUFKUTtBQVJaOztBQWVFO0VBQ0UsaUJBQUE7QUFiSiIsImZpbGUiOiJwcm9jdXJlbWVudC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtdW5zdHlsZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cblxuLmxpc3QtdW5zdHlsZWQgbGkge1xuICB3aWR0aDogNDglO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmxpc3QtdW5zdHlsZWQgbGk6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saXN0LXVuc3R5bGVkIGxpIC5tc3ItMyB7XG4gIGNvbG9yOiAjMDA4MDAwO1xufVxuXG4ubGlzdC11bnN0eWxlZCBsaSAuc2V0LWZsZXggaDUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmxpc3QtdW5zdHlsZWQgbGkgLnNldC1mbGV4IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ubGlzdC11bnN0eWxlZCBsaSAubXMtYXV0byB0ZCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saXN0LXVuc3R5bGVkIGxpIC5tcy1hdXRvIHRkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLyogTWVkaWEgUXVlcmllcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5saXN0LXVuc3R5bGVkIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICB9XG59XG5cbi8vIERlZmluZSB0aGUgYW5pbWF0aW9uIGtleWZyYW1lc1xuQGtleWZyYW1lcyBpY29uLXB1bHNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG4vLyBBcHBseSB0aGUgYW5pbWF0aW9uIHRvIHRoZSBpY29uc1xuLm1zLWF1dG8ge1xuICAuZmFyLmZhLWV5ZSwgLmZhci5mYS1hcnJvdy1hbHQtY2lyY2xlLWRvd24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICB9XG5cbiAgLmZhci5mYS1leWU6aG92ZXIsIC5mYXIuZmEtYXJyb3ctYWx0LWNpcmNsZS1kb3duOmhvdmVyIHtcbiAgICBhbmltYXRpb246IGljb24tcHVsc2UgMXMgaW5maW5pdGU7XG4gIH1cbn1cblxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuJGljb24tc2l6ZTogMjBweDsgXG5cbmxpIHtcbiAgLmZhLWFycm93LWFsdC1jaXJjbGUtZG93biwgLmZhLWV5ZSB7XG4gICAgZm9udC1zaXplOiAkaWNvbi1zaXplOyBcbiAgfVxuXG4gIC5mYS1hcnJvdy1hbHQtY2lyY2xlLWRvd24ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyBcbiAgfVxufVxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXX0= */"] });


/***/ }),

/***/ 23324:
/*!*****************************************************************************!*\
  !*** ./src/app/erp-suppliersmanagement/data/supplier-categories.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierCategoriesService": () => (/* binding */ SupplierCategoriesService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class SupplierCategoriesService {
    constructor(http) {
        this.http = http;
    }
    getCategories() {
        const SupplierCatUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/supplierCategory/view`;
        return this.http.get(SupplierCatUrl);
    }
    getCategoriesById(id) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/supplierCategory/view_byId/${id}`);
    }
    addCategories(data) {
        const SupplierCatUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/supplierCategory/add`;
        return this.http.post(SupplierCatUrl, data);
    }
    updateCategories(CategoryDetails) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/supplierCategory/update/`;
        return this.http.put(updateBillUrl, CategoryDetails);
    }
    deleteCurrencyPemanently(id) {
        const SupplierCatUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/supplierCategory/delete/${id}`;
        return this.http.delete(SupplierCatUrl, id);
    }
}
SupplierCategoriesService.ɵfac = function SupplierCategoriesService_Factory(t) { return new (t || SupplierCategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SupplierCategoriesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SupplierCategoriesService, factory: SupplierCategoriesService.ɵfac, providedIn: 'root' });


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
//# sourceMappingURL=src_app_erp-reports_erp-reports_module_ts-src_app_erp-suppliersmanagement_data_supplier-categ-c89d48.js.map
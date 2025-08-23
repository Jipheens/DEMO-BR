"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-budget_erp-budget_module_ts"],{

/***/ 18612:
/*!*********************************************************!*\
  !*** ./src/app/erp-budget/erp-budget-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpBudgetRoutingModule": () => (/* binding */ ErpBudgetRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: "dashboard",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-budget_modules_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/dashboard/dashboard.module */ 95374)).then((m) => m.DashboardModule),
    },
    {
        path: "budget",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-finance_data_lookups_ccentr-1d5d8d"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_expense-lookup_expense-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-budget_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_department-lookup_department-lookup_component_ts"), __webpack_require__.e("src_app_erp-budget_modules_budget_budget_module_ts-src_app_erp-finance_data_services_expense--1bca86")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/budget/budget.module */ 91161)).then((m) => m.BudgetModule),
    },
];
class ErpBudgetRoutingModule {
}
ErpBudgetRoutingModule.ɵfac = function ErpBudgetRoutingModule_Factory(t) { return new (t || ErpBudgetRoutingModule)(); };
ErpBudgetRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ErpBudgetRoutingModule });
ErpBudgetRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErpBudgetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 61269:
/*!*************************************************!*\
  !*** ./src/app/erp-budget/erp-budget.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpBudgetModule": () => (/* binding */ ErpBudgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _erp_budget_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erp-budget-routing.module */ 18612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ErpBudgetModule {
}
ErpBudgetModule.ɵfac = function ErpBudgetModule_Factory(t) { return new (t || ErpBudgetModule)(); };
ErpBudgetModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ErpBudgetModule });
ErpBudgetModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _erp_budget_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpBudgetRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ErpBudgetModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _erp_budget_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpBudgetRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_erp-budget_erp-budget_module_ts.js.map
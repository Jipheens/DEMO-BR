"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-admin_erp-admin_module_ts"],{

/***/ 46140:
/*!*******************************************************!*\
  !*** ./src/app/erp-admin/erp-admin-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpAdminRoutingModule": () => (/* binding */ ErpAdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: "dashboard",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-admin_modules_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/dashboard/dashboard.module */ 61329)).then((m) => m.DashboardModule),
    },
    {
        path: "admin",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-finance_data_lookups_ccentr-1d5d8d"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_employees-lookup_employees-lookup_co-450ef7"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_departments-lookup_departments-looku-f3e4e9"), __webpack_require__.e("default-src_app_erp-admin_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_branches-lookup_branches-lookup_comp-2883d8"), __webpack_require__.e("default-src_app_erp-admin_modules_admin_pages_roles_dialogs_roles-lookup_roles-lookup_component_ts"), __webpack_require__.e("src_app_erp-admin_modules_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/admin/admin.module */ 5515)).then((m) => m.AdminModule),
    },
];
class ErpAdminRoutingModule {
}
ErpAdminRoutingModule.ɵfac = function ErpAdminRoutingModule_Factory(t) { return new (t || ErpAdminRoutingModule)(); };
ErpAdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ErpAdminRoutingModule });
ErpAdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErpAdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 32621:
/*!***********************************************!*\
  !*** ./src/app/erp-admin/erp-admin.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpAdminModule": () => (/* binding */ ErpAdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _erp_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erp-admin-routing.module */ 46140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ErpAdminModule {
}
ErpAdminModule.ɵfac = function ErpAdminModule_Factory(t) { return new (t || ErpAdminModule)(); };
ErpAdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ErpAdminModule });
ErpAdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _erp_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpAdminRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ErpAdminModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _erp_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpAdminRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_erp-admin_erp-admin_module_ts.js.map
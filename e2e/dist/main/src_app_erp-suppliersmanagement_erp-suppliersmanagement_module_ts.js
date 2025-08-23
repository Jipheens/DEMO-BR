"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-suppliersmanagement_erp-suppliersmanagement_module_ts"],{

/***/ 69894:
/*!***********************************************************************************!*\
  !*** ./src/app/erp-suppliersmanagement/erp-suppliersmanagement-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpSuppliersmanagementRoutingModule": () => (/* binding */ ErpSuppliersmanagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: "dashboard",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-suppliersmanagement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("src_app_erp-suppliersmanagement_data_supplier-maintenance_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/dashboard/dashboard.module */ 72497)).then((m) => m.DashboardModule),
    },
    {
        path: "supplier-parameters",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-suppliersmanagement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("src_app_erp-suppliersmanagement_data_supplier-maintenance_service_ts-src_app_erp-suppliersman-dccf0c")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/suppliers-parameters/suppliers-parameters.module */ 53448)).then((m) => m.SuppliersParametersModule),
    },
    {
        path: "suppliers-maintenance",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_supplier-categories-lookup_s-aa659f"), __webpack_require__.e("default-src_app_erp-suppliersmanagement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("src_app_erp-suppliersmanagement_data_supplier-categories_service_ts-src_app_erp-suppliersmana-3bfb6c")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/suppliers-maintenance/suppliers-maintenance.module */ 87189)).then((m) => m.SuppliersMaintenanceModule),
    },
    {
        path: "supplier-profiles",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-suppliersmanagement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("src_app_erp-suppliersmanagement_modules_supplier-profile-maintenance_supplier-profile-mainten-5df864")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/supplier-profile-maintenance/supplier-profile-maintenance.module */ 3582)).then((m) => m.SupplierProfileMaintenanceModule),
    },
];
class ErpSuppliersmanagementRoutingModule {
}
ErpSuppliersmanagementRoutingModule.ɵfac = function ErpSuppliersmanagementRoutingModule_Factory(t) { return new (t || ErpSuppliersmanagementRoutingModule)(); };
ErpSuppliersmanagementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ErpSuppliersmanagementRoutingModule });
ErpSuppliersmanagementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErpSuppliersmanagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 36516:
/*!***************************************************************************!*\
  !*** ./src/app/erp-suppliersmanagement/erp-suppliersmanagement.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpSuppliersmanagementModule": () => (/* binding */ ErpSuppliersmanagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _erp_suppliersmanagement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erp-suppliersmanagement-routing.module */ 69894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ErpSuppliersmanagementModule {
}
ErpSuppliersmanagementModule.ɵfac = function ErpSuppliersmanagementModule_Factory(t) { return new (t || ErpSuppliersmanagementModule)(); };
ErpSuppliersmanagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ErpSuppliersmanagementModule });
ErpSuppliersmanagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _erp_suppliersmanagement_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpSuppliersmanagementRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ErpSuppliersmanagementModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _erp_suppliersmanagement_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpSuppliersmanagementRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_erp-suppliersmanagement_erp-suppliersmanagement_module_ts.js.map
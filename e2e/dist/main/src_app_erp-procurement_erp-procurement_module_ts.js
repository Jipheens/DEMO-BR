"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-procurement_erp-procurement_module_ts"],{

/***/ 92913:
/*!*******************************************************************!*\
  !*** ./src/app/erp-procurement/erp-procurement-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpProcurementRoutingModule": () => (/* binding */ ErpProcurementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: "dashboard",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-procurement_modules_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/dashboard/dashboard.module */ 79091)).then((m) => m.DashboardModule),
    },
    {
        path: "parameters",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-procurement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_supplier-categories-lookup_s-aa659f"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_suppliers-lookup_suppliers-l-be4329"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-procurement_modules_paramet-48b278"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_rfps-lookup_rfps-lookup_comp-de1895"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_rfqs-lookup_rfqs-lookup_comp-05f0c6"), __webpack_require__.e("src_app_erp-procurement_modules_parameters_parameters_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/parameters/parameters.module */ 20958)).then((m) => m.ParametersModule),
    },
    {
        path: "needs",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-finance_data_lookups_ccentr-1d5d8d"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_erp-procurement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_expense-lookup_expense-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-fixedassets_data_lookups_asset-catalog-lookup_asset-catalog-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-finance_data_services_expense-management_service_ts-src_app_erp-inventory-6cac46"), __webpack_require__.e("src_app_erp-procurement_modules_needs_needs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/needs/needs.module */ 48953)).then((m) => m.NeedsModule),
    },
    {
        path: "requisitions",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-finance_data_lookups_ccentr-1d5d8d"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_erp-procurement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_gls-lookup_gls-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_expense-lookup_expense-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-finance_modules_finance-management_transactions_dialogs_accounting-journa-16bbf9"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_maintained-currencies-look-up_maintained-currencies--e3758e"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_supplier-categories-lookup_s-aa659f"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_tax-lookup_tax-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_suppliers-lookup_suppliers-l-be4329"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_rfps-lookup_rfps-lookup_comp-de1895"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_rfqs-lookup_rfqs-lookup_comp-05f0c6"), __webpack_require__.e("default-src_app_erp-fixedassets_data_lookups_asset-catalog-lookup_asset-catalog-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-finance_data_services_expense-management_service_ts-src_app_erp-inventory-6cac46"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_exp-c-centre-lookup_exp-c-centre-lookup_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_erp-procurement_modules_requisition_requisition_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/requisition/requisition.module */ 15775)).then((m) => m.RequisitionModule),
    },
    {
        path: "rfqs",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-procurement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_supplier-categories-lookup_s-aa659f"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_tax-lookup_tax-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_suppliers-lookup_suppliers-l-be4329"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-procurement_modules_paramet-48b278"), __webpack_require__.e("default-src_app_erp-procurement_modules_rfqs_pages_rfqs-pending-committee_rfqs-pending-commit-6e095e"), __webpack_require__.e("common"), __webpack_require__.e("src_app_erp-procurement_modules_rfqs_rfqs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/rfqs/rfqs.module */ 74518)).then((m) => m.RfqsModule),
    },
    {
        path: "rfq-applications",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-procurement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_rfqs-lookup_rfqs-lookup_comp-05f0c6"), __webpack_require__.e("default-src_app_erp-procurement_modules_rfqs_pages_rfqs-pending-committee_rfqs-pending-commit-6e095e"), __webpack_require__.e("common"), __webpack_require__.e("src_app_erp-procurement_modules_recieverfqapplication_recieverfqapplication_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/recieverfqapplication/recieverfqapplication.module */ 18820)).then((m) => m.RecieverfqapplicationModule),
    },
    {
        path: "received",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_erp-procurement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_gls-lookup_gls-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-finance_modules_finance-management_transactions_dialogs_accounting-journa-16bbf9"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_maintained-currencies-look-up_maintained-currencies--e3758e"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_purchase-requisition-look-up_purchase-requisition-lo-855856"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_maintained-suppliers-look-up_maintained-suppliers-lo-f07cd8"), __webpack_require__.e("src_app_erp-procurement_modules_recievefrompurchaseorder_recievefrompurchaseorder_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/recievefrompurchaseorder/recievefrompurchaseorder.module */ 67324)).then((m) => m.RecievefrompurchaseorderModule),
    },
    {
        path: "rfps",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-procurement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_supplier-categories-lookup_s-aa659f"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_tax-lookup_tax-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_suppliers-lookup_suppliers-l-be4329"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-procurement_modules_paramet-48b278"), __webpack_require__.e("common"), __webpack_require__.e("src_app_erp-procurement_modules_rfps_rfps_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/rfps/rfps.module */ 72765)).then((m) => m.RfpsModule),
    },
    {
        path: "rfp-applications",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-procurement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_rfps-lookup_rfps-lookup_comp-de1895"), __webpack_require__.e("common"), __webpack_require__.e("src_app_erp-procurement_modules_recieverfpapplication_recieverfpapplication_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/recieverfpapplication/recieverfpapplication.module */ 10272)).then((m) => m.RecieverfpapplicationModule),
    },
    {
        path: "receivable",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-finance_data_lookups_ccentr-1d5d8d"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_erp-procurement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_gls-lookup_gls-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_expense-lookup_expense-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-finance_modules_finance-management_transactions_dialogs_accounting-journa-16bbf9"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_maintained-currencies-look-up_maintained-currencies--e3758e"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_tax-lookup_tax-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_customer-lookup_customer-lookup_component_ts-src_app-c88ec5"), __webpack_require__.e("common"), __webpack_require__.e("src_app_erp-finance_data_services_expense-management_service_ts-src_app_erp-procurement_modul-6e2b7c")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/recievables/recievables.module */ 77212)).then((m) => m.RecievablesModule),
    },
    {
        path: "reports",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-procurement_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("src_app_erp-procurement_modules_reports_reports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/reports/reports.module */ 47142)).then((m) => m.ReportsModule),
    },
    // {
    //   path: "rfps",
    //   loadChildren: () =>
    //     import("./modules/RFPs/rfps.module").then(
    //       (m) => m.RFPsModule
    //     ),
    // },
];
class ErpProcurementRoutingModule {
}
ErpProcurementRoutingModule.ɵfac = function ErpProcurementRoutingModule_Factory(t) { return new (t || ErpProcurementRoutingModule)(); };
ErpProcurementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ErpProcurementRoutingModule });
ErpProcurementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErpProcurementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 7272:
/*!***********************************************************!*\
  !*** ./src/app/erp-procurement/erp-procurement.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpProcurementModule": () => (/* binding */ ErpProcurementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _erp_procurement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erp-procurement-routing.module */ 92913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ErpProcurementModule {
}
ErpProcurementModule.ɵfac = function ErpProcurementModule_Factory(t) { return new (t || ErpProcurementModule)(); };
ErpProcurementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ErpProcurementModule });
ErpProcurementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _erp_procurement_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpProcurementRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ErpProcurementModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _erp_procurement_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpProcurementRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_erp-procurement_erp-procurement_module_ts.js.map
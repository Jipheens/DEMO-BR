"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-hr-self-service_erp-hr-self-service_module_ts"],{

/***/ 45784:
/*!***************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/erp-hr-self-service-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpHrSelfServiceRoutingModule": () => (/* binding */ ErpHrSelfServiceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: "dashboard",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_erp-hr_data_configuration-services_analysis_service_ts-src_app_erp-procuremen-867da8"), __webpack_require__.e("default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("src_app_core_service_token-storage_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/dashboard/dashboard.module */ 25490)).then((m) => m.DashboardModule),
    },
    {
        path: "employee-profile",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_erp-hr_data_configuration-services_analysis_service_ts-src_app_erp-procuremen-867da8"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-finance_data_lookups_ccentr-1d5d8d"), __webpack_require__.e("default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_employees-lookup_employees-lookup_co-450ef7"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_departments-lookup_departments-looku-f3e4e9"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_job-roles-lookup_job-roles-lookup_co-e885d5"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_branches-lookup_branches-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_job-grades-lookup_job-grades-lookup_-67d815"), __webpack_require__.e("common"), __webpack_require__.e("src_app_erp-hr-self-service_modules_employee-profile_employee-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/employee-profile/employee-profile.module */ 35926)).then((m) => m.EmployeeProfileModule),
    },
    {
        path: "employee-payroll",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_erp-hr_data_configuration-services_analysis_service_ts-src_app_erp-procuremen-867da8"), __webpack_require__.e("default-src_core_Models_Notification_notification-service_service_ts-src_app_erp-hr_data_payr-5c3fb4"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-finance_data_lookups_ccentr-1d5d8d"), __webpack_require__.e("default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_employees-lookup_employees-lookup_co-450ef7"), __webpack_require__.e("default-src_app_erp-hr_modules_leave-management_leave-requests_manage-leave-requests_manage-l-e2b108"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_leave-types-lookup_leave-types-looku-0f1aa2"), __webpack_require__.e("src_app_erp-hr-self-service_modules_employee-payroll_employee-payroll_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/employee-payroll/employee-payroll.module */ 54069)).then((m) => m.EmployeePayrollModule),
    },
    {
        path: "employee-kpi",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_erp-hr_data_configuration-services_analysis_service_ts-src_app_erp-procuremen-867da8"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-finance_data_lookups_ccentr-1d5d8d"), __webpack_require__.e("default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_erp-hr-self-service_modules_employee-kpi_employee-kpi_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/employee-kpi/employee-kpi.module */ 81690)).then((m) => m.EmployeeKpiModule),
    },
    {
        path: "employee-leave",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_erp-hr_data_configuration-services_analysis_service_ts-src_app_erp-procuremen-867da8"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-finance_data_lookups_ccentr-1d5d8d"), __webpack_require__.e("default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_employees-lookup_employees-lookup_co-450ef7"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_departments-lookup_departments-looku-f3e4e9"), __webpack_require__.e("default-src_app_erp-hr_modules_leave-management_leave-requests_manage-leave-requests_manage-l-e2b108"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_job-roles-lookup_job-roles-lookup_co-e885d5"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_leave-types-lookup_leave-types-looku-0f1aa2"), __webpack_require__.e("default-src_app_erp-hr_modules_leave-management_leave-planner_manage-leave-planner_manage-lea-35cca8"), __webpack_require__.e("src_app_erp-hr-self-service_modules_employee-leave_employee-leave_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/employee-leave/employee-leave.module */ 33648)).then((m) => m.EmployeeLeaveModule),
    },
    {
        path: "employee-learning",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_erp-hr_data_configuration-services_analysis_service_ts-src_app_erp-procuremen-867da8"), __webpack_require__.e("default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_employees-lookup_employees-lookup_co-450ef7"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-hr_modules_learning-and-tra-417a82"), __webpack_require__.e("src_app_erp-hr-self-service_modules_employee-learning_employee-learning_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/employee-learning/employee-learning.module */ 11387)).then((m) => m.EmployeeLearningModule),
    },
    {
        path: "employee-case",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_erp-hr_data_configuration-services_analysis_service_ts-src_app_erp-procuremen-867da8"), __webpack_require__.e("default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_employees-lookup_employees-lookup_co-450ef7"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_departments-lookup_departments-looku-f3e4e9"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-hr_modules_case-management_-7385bf"), __webpack_require__.e("src_app_erp-hr-self-service_modules_employee-case_employee-case_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/employee-case/employee-case.module */ 6646)).then((m) => m.EmployeeCaseModule),
    },
    {
        path: "employee-search",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_erp-hr_data_configuration-services_analysis_service_ts-src_app_erp-procuremen-867da8"), __webpack_require__.e("default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-hr_data_PrivilegeService_ts-node_modules_ngx-org-chart___ivy_ngcc___fesm2-dfd48d"), __webpack_require__.e("src_app_core_service_token-storage_service_ts-src_app_erp-hr-self-service_modules_employee-se-aaeefc")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/employee-search/employee-search.module */ 72279)).then((m) => m.EmployeeSearchModule),
    },
    {
        path: "employee-shared-documents",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_erp-hr_data_configuration-services_analysis_service_ts-src_app_erp-procuremen-867da8"), __webpack_require__.e("default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_employees-lookup_employees-lookup_co-450ef7"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_departments-lookup_departments-looku-f3e4e9"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-hr_modules_shared-documents-fca62a"), __webpack_require__.e("src_app_erp-hr-self-service_modules_employee-shared-documents_employee-shared-documents_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/employee-shared-documents/employee-shared-documents.module */ 3488)).then((m) => m.EmployeeSharedDocumentsModule),
    },
    {
        path: "employee-jobs",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_erp-hr_data_configuration-services_analysis_service_ts-src_app_erp-procuremen-867da8"), __webpack_require__.e("default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-hr_data_job-services_docume-b05fb2"), __webpack_require__.e("common"), __webpack_require__.e("src_app_erp-hr-self-service_modules_employee-jobs_employee-jobs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/employee-jobs/employee-jobs.module */ 97982)).then((m) => m.EmployeeJobsModule),
    },
    {
        path: "employee-exit",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_erp-hr_data_configuration-services_analysis_service_ts-src_app_erp-procuremen-867da8"), __webpack_require__.e("default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_employees-lookup_employees-lookup_co-450ef7"), __webpack_require__.e("default-src_app_core_service_token-storage_service_ts-src_app_erp-hr_modules_exit-management_-5cad54"), __webpack_require__.e("src_app_erp-hr-self-service_modules_employee-exit_employee-exit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/employee-exit/employee-exit.module */ 14268)).then((m) => m.EmployeeExitModule),
    },
    {
        path: "employee-miscellaneous",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_erp-hr_data_configuration-services_analysis_service_ts-src_app_erp-procuremen-867da8"), __webpack_require__.e("default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("src_app_core_service_token-storage_service_ts-src_app_erp-hr-self-service_modules_employee-mi-9e33bb")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/employee-miscellaneous/employee-miscellaneous.module */ 26037)).then((m) => m.EmployeeMiscellaneousModule),
    },
];
class ErpHrSelfServiceRoutingModule {
}
ErpHrSelfServiceRoutingModule.ɵfac = function ErpHrSelfServiceRoutingModule_Factory(t) { return new (t || ErpHrSelfServiceRoutingModule)(); };
ErpHrSelfServiceRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ErpHrSelfServiceRoutingModule });
ErpHrSelfServiceRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErpHrSelfServiceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 12141:
/*!*******************************************************************!*\
  !*** ./src/app/erp-hr-self-service/erp-hr-self-service.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpHrSelfServiceModule": () => (/* binding */ ErpHrSelfServiceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _erp_hr_self_service_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erp-hr-self-service-routing.module */ 45784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ErpHrSelfServiceModule {
}
ErpHrSelfServiceModule.ɵfac = function ErpHrSelfServiceModule_Factory(t) { return new (t || ErpHrSelfServiceModule)(); };
ErpHrSelfServiceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ErpHrSelfServiceModule });
ErpHrSelfServiceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _erp_hr_self_service_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpHrSelfServiceRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ErpHrSelfServiceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _erp_hr_self_service_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpHrSelfServiceRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_erp-hr-self-service_erp-hr-self-service_module_ts.js.map
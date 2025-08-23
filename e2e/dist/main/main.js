"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/page404/page404.component */ 1991);
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guard/auth.guard */ 19390);
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ 17050);
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ 9899);
/* harmony import */ var _layout_app_layout_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/app-layout/main-dashboard/main-dashboard.component */ 25772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: "",
        component: _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__.MainLayoutComponent,
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        children: [
            { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },
            {
                path: "admin",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 77095)).then((m) => m.AdminModule),
            },
            {
                path: "erp-admin",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_erp-admin_erp-admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./erp-admin/erp-admin.module */ 32621)).then((m) => m.ErpAdminModule),
            },
            {
                path: "erp-budget",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_erp-budget_erp-budget_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./erp-budget/erp-budget.module */ 61269)).then((m) => m.ErpBudgetModule),
            },
            {
                path: "erp-hr",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_employees-lookup_employees-lookup_co-450ef7"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_departments-lookup_departments-looku-f3e4e9"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_job-roles-lookup_job-roles-lookup_co-e885d5"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_leave-types-lookup_leave-types-looku-0f1aa2"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_job-grades-lookup_job-grades-lookup_-67d815"), __webpack_require__.e("default-src_app_erp-hr_hr-lookups_configurations-lookups_branches-lookup_branches-lookup_comp-2883d8"), __webpack_require__.e("common"), __webpack_require__.e("src_app_erp-hr_erp-hr_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./erp-hr/erp-hr.module */ 34103)).then((m) => m.ErpHrModule),
            },
            {
                path: "erp-hr-self-service",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_erp-hr-self-service_erp-hr-self-service_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./erp-hr-self-service/erp-hr-self-service.module */ 12141)).then((m) => m.ErpHrSelfServiceModule),
            },
            {
                path: "erp-finance",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_purchase-requisition-look-up_purchase-requisition-lo-855856"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_branches-lookup_branches-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_customer-lookup_customer-lookup_component_ts-src_app-c88ec5"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_maintained-suppliers-look-up_maintained-suppliers-lo-f07cd8"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_department-lookup_department-lookup_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_erp-finance_erp-finance_module_ts-src_app_erp-suppliersmanagement_data_supplier-categ-1bb652")]).then(__webpack_require__.bind(__webpack_require__, /*! ./erp-finance/erp-finance.module */ 3378)).then((m) => m.ErpFinanceModule),
            },
            {
                path: "erp-fixed-assets",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-fixedassets_data_lookups_asset-catalog-lookup_asset-catalog-lookup_component_ts"), __webpack_require__.e("src_app_erp-fixedassets_erp-fixedassets_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./erp-fixedassets/erp-fixedassets.module */ 8386)).then((m) => m.ErpFixedassetsModule),
            },
            {
                path: "erp-imprest",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-imprest_data_services_imprest-management_service_ts-src_app_erp-imprest_d-8f5f0b"), __webpack_require__.e("src_app_erp-finance_data_services_customer-management_service_ts-src_app_erp-imprest_erp-impr-ad4460")]).then(__webpack_require__.bind(__webpack_require__, /*! ./erp-imprest/erp-imprest.module */ 53544)).then((m) => m.ErpImprestModule),
            },
            {
                path: "erp-procurement",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_erp-procurement_erp-procurement_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./erp-procurement/erp-procurement.module */ 7272)).then((m) => m.ErpProcurementModule),
            },
            {
                path: "erp-suppliers-management",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_erp-suppliersmanagement_erp-suppliersmanagement_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./erp-suppliersmanagement/erp-suppliersmanagement.module */ 36516)).then((m) => m.ErpSuppliersmanagementModule),
            },
            {
                path: "erp-prepayment",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_erp-prepayment_erp-prepayment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./erp-prepayment/erp-prepayment.module */ 30871)).then((m) => m.ErpPrepaymentModule),
            },
            {
                path: "erp-inventory",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-finance_data_services_expense-management_service_ts-src_app_erp-inventory-6cac46"), __webpack_require__.e("src_app_erp-inventory_erp-inventory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./erp-inventory/erp-inventory.module */ 89015)).then((m) => m.ErpInventoryModule),
            },
        ],
    },
    {
        path: "erp-reports",
        component: _layout_app_layout_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.MainDashboardComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-procurement_data_services__AccessControlAuthGuard_service_ts-node_modules-0f5cd9"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_gls-lookup_gls-lookup_component_ts"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_supplier-categories-lookup_s-aa659f"), __webpack_require__.e("default-src_app_erp-procurement_modules_parameters_pages_lookups_suppliers-lookup_suppliers-l-be4329"), __webpack_require__.e("default-src_app_erp-finance_data_lookups_purchase-requisition-look-up_purchase-requisition-lo-855856"), __webpack_require__.e("default-src_app_admin_modules_dashboard_dashboard_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_erp-reports_erp-reports_module_ts-src_app_erp-suppliersmanagement_data_supplier-categ-c89d48")]).then(__webpack_require__.bind(__webpack_require__, /*! ./erp-reports/erp-reports.module */ 87902)).then((m) => m.ErpReportsModule),
    },
    {
        path: "account",
        component: _layout_app_layout_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.MainDashboardComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("src_app_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 63879)).then((m) => m.AccountModule),
    },
    {
        path: "erp-dashboard",
        component: _layout_app_layout_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.MainDashboardComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-src_app_erp-dashboard_Pages_common-dashboard_common-dashboard_component_ts"), __webpack_require__.e("src_app_erp-dashboard_erp-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./erp-dashboard/erp-dashboard.module */ 30743)).then((m) => m.ErpDashboardModule),
    },
    {
        path: "authentication",
        component: _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_erp-dashboard_Pages_common-dashboard_common-dashboard_component_ts"), __webpack_require__.e("src_app_authentication_authentication_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 41082)).then((m) => m.AuthenticationModule),
    },
    //***************************************************************************************************** */
    // {
    //   path: "administration",
    //  // component: AuthLayoutComponent,
    //   loadChildren: () =>
    //     import("./administration/administration.module").then(
    //       (m) => m.AdministrationModule
    //     ),
    //   // canLoad: [ModuleGuard],
    //   // data: {roles: [Role.Administration_privilege], preload:true },
    // },
    // {
    //   path: "portal",
    //   component: AuthLayoutComponent,
    //   loadChildren: () =>
    //     import("./employee/employee.module").then((m) => m.EmployeeModule),
    //   // canLoad: [ModuleGuard],
    //   // data: {roles: [Role.User], preload:true },
    // },
    // {
    //   path: "applicant",
    //   component: AuthLayoutComponent,
    //   loadChildren: () =>
    //     import("./applicant/applicant.module").then((m) => m.ApplicantModule),
    // },
    //***************************************************************************************************** */
    { path: "**", component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 28653);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var _core_service_idletime_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/service/idletime.service */ 28052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/service/auth.service */ 41782);
/* harmony import */ var _erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./erp-procurement/data/services/notification.service */ 67879);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 66105);











class AppComponent {
    constructor(tokenCookieService, snackBar, idleTimer, router, route, authService, notificationAPI) {
        this.tokenCookieService = tokenCookieService;
        this.snackBar = snackBar;
        this.idleTimer = idleTimer;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.notificationAPI = notificationAPI;
        this.horizontalPosition = "end";
        this.verticalPosition = "top";
        this.snackBar.dismiss();
        this.currentUser = this.tokenCookieService.getUser();
        if (this.currentUser !== null && this.currentUser !== undefined) {
            this.idleTimer.start({
                timeout: 60 * 5,
                onTimeout: () => {
                    // Perform the action to be executed on timeout
                    this.logout();
                },
            });
            this.startTokenRefresh(); // Start token refresh
        }
        this.routerEventsSubscription = this.router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationStart) {
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf("/") + 1);
            }
        });
    }
    handleKeyboardEvent(event) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
        }
    }
    ngOnInit() { }
    startTokenRefresh() {
        const REFRESH_INTERVAL = 30 * 60 * 1000; // Refresh token every 30 minutes
        this.tokenRefreshSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(REFRESH_INTERVAL)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.authService.refreshAccessToken(this.currentUser.refreshToken)))
            .subscribe((response) => {
            // Token refreshed successfully, update user session details
            this.tokenCookieService.saveUser(response);
        }, (error) => {
            // Token refresh failed, redirect user to login page
            this.router.navigate(["/authentication/signin"]);
        });
    }
    ngOnDestroy() {
        if (this.tokenRefreshSubscription) {
            this.tokenRefreshSubscription.unsubscribe();
        }
        this.routerEventsSubscription.unsubscribe();
    }
    logout() {
        this.tokenCookieService.signOut(this.tokenCookieService.getUser().refreshToken).subscribe((res) => {
            console.log("res: ", res);
            if (res.statusCode === 200) {
                this.router.navigate(["/authentication/signin"]);
                this.notificationAPI.alertSuccess(res.message);
            }
            else {
                this.notificationAPI.alertWarning(res.message);
                this.router.navigate(["/authentication/signin"]);
            }
        }, (err) => {
            console.log(err);
            this.router.navigate(["/authentication/signin"]);
            this.notificationAPI.alertWarning(err.message);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_service_idletime_service__WEBPACK_IMPORTED_MODULE_0__.IdleTimer), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function AppComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveDocument"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([_core_service_idletime_service__WEBPACK_IMPORTED_MODULE_0__.IdleTimer])], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-page-loader")(1, "router-outlet");
    } }, directives: [_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__.PageLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/header/header.component */ 17876);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 66105);
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ 20129);
/* harmony import */ var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/right-sidebar/right-sidebar.component */ 72325);
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ 17050);
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ 9899);
/* harmony import */ var _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/interceptor/fake-backend */ 43867);
/* harmony import */ var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/interceptor/error.interceptor */ 56300);
/* harmony import */ var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/interceptor/jwt.interceptor */ 72624);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ 75347);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-click-outside */ 53530);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-loading-bar/router */ 94296);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _layout_app_layout_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/app-layout/main-dashboard/main-dashboard.component */ 25772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);


























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false,
};
if (src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__.environment.production) {
    // // disable all console output in production mode
    // console.log = function() {};
    // console.warn = function() {};
    // console.error = function() {};
}
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__.TranslateHttpLoader(http, "assets/i18n/", ".json");
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__.HashLocationStrategy },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HTTP_INTERCEPTORS, useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__.JwtInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HTTP_INTERCEPTORS, useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__.ErrorInterceptor, multi: true },
        _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_10__.fakeBackendProvider,
        //AutoLogoutService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_13__.ClickOutsideModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClient],
                },
            }),
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_24__.LoadingBarRouterModule,
            // core & shared
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__.PageLoaderComponent,
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent,
        _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.RightSidebarComponent,
        _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__.AuthLayoutComponent,
        _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__.MainLayoutComponent,
        _layout_app_layout_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_15__.MainDashboardComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_13__.ClickOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_24__.LoadingBarRouterModule,
        // core & shared
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 1991:
/*!*************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404Component": () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 87317);




class Page404Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    dashboard() {
        this.router.navigate(["/admin/dashboard"]);
    }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
Page404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 22, vars: 0, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "d-flex", "align-items-center", "justify-content-center", "h-100"], ["src", "assets/images/pages/p_404.jpg", "width", "95%", "height", "75%", "alt", "", 1, "px-2", "mx-2"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "error-header", "p-b-45"], [1, "error-subheader", "p-b-5"], [1, "error-subheader2", "p-b-5"], [1, "container-auth-form-btn", "mt-5"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "click"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["routerLink", "/authentication/signin", 1, "txt1"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "form")(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Looks Like You're Lost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " The Page You Are Looking For Not Available! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page404Component_Template_button_click_16_listener() { return ctx.dashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Go To Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13)(19, "div")(20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Need Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8696:
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ConfigService {
    constructor() {
        this.setConfigData();
    }
    setConfigData() {
        this.configData = {
            layout: {
                rtl: false,
                variant: "light",
                theme_color: "white",
                logo_bg_color: "white",
                sidebar: {
                    collapsed: false,
                    backgroundColor: "light", // options:  light & dark
                },
            },
        };
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/rightsidebar.service */ 74930);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/auth.guard */ 19390);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ 41782);
/* harmony import */ var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/dynamic-script-loader.service */ 77431);
/* harmony import */ var _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guard/module-import.guard */ 6785);
/* harmony import */ var _service_direction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/direction.service */ 40849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _service_idletime_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/idletime.service */ 28052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);










class CoreModule {
    constructor(parentModule) {
        (0,_guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__.throwIfAlreadyLoaded)(parentModule, "CoreModule");
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](CoreModule, 12)); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__.RightSidebarService,
        _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard,
        _service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__.DynamicScriptLoaderService,
        _service_direction_service__WEBPACK_IMPORTED_MODULE_5__.DirectionService,
        _service_idletime_service__WEBPACK_IMPORTED_MODULE_6__.IdleTimer
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule] }); })();


/***/ }),

/***/ 19390:
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/token-storage-cookies.service */ 55770);




class AuthGuard {
    constructor(authService, router, tokenCookieService) {
        this.authService = authService;
        this.router = router;
        this.tokenCookieService = tokenCookieService;
    }
    canActivate(route, state) {
        const currentUser = this.tokenCookieService.getUser();
        if (currentUser) {
            return true;
        }
        // User is not authenticated, redirect to the login page with the return URL
        this.router.navigate(['/authentication/signin']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__.TokenCookieService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: "root" });


/***/ }),

/***/ 6785:
/*!***************************************************!*\
  !*** ./src/app/core/guard/module-import.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwIfAlreadyLoaded": () => (/* binding */ throwIfAlreadyLoaded)
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`);
    }
}


/***/ }),

/***/ 56300:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/error.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/token-storage-cookies.service */ 55770);





class ErrorInterceptor {
    constructor(router, tokenCookieService) {
        this.router = router;
        this.tokenCookieService = tokenCookieService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            // if (err.status === 401) {
            //   // auto logout if 401 response returned from api
            //   this.router.navigate(["/authentication/signin"]);
            //   //location.reload();
            // }
            const error = err;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__.TokenCookieService)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 43867:
/*!**************************************************!*\
  !*** ./src/app/core/interceptor/fake-backend.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeBackendInterceptor": () => (/* binding */ FakeBackendInterceptor),
/* harmony export */   "fakeBackendProvider": () => (/* binding */ fakeBackendProvider)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);




const users = [];
class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(handleRoute));
        function handleRoute() {
            switch (true) {
                case url.endsWith("/authenticate") && method === "POST":
                    return authenticate();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find((x) => x.username === username && x.password === password);
            if (!user) {
                return error("Username or password is incorrect");
            }
            return ok({
                id: user.id,
                img: user.img,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: user.token,
            });
        }
        // helper functions
        function ok(body) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body }));
        }
        function error(message) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ error: { message } });
        }
        function unauthorized() {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: "Unauthorised" } });
        }
        function isLoggedIn() {
            return headers.get("Authorization") === "Bearer fake-jwt-token";
        }
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true,
};


/***/ }),

/***/ 72624:
/*!*****************************************************!*\
  !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/token-storage-cookies.service */ 55770);



class JwtInterceptor {
    constructor(tokenCookieService) {
        this.tokenCookieService = tokenCookieService;
    }
    intercept(request, next) {
        let currentUser = this.tokenCookieService.getUser();
        if (currentUser) {
            const accessToken = currentUser.token;
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                Authorization: `${"Bearer " + accessToken}`,
                UserName: `${currentUser.username}`,
                DepartmentCode: `${currentUser.departmentCode}`,
                BranchCode: `${currentUser.branchCode}`,
                CostCenterCode: `${currentUser.costCenterCode}`,
                MemberCode: `${currentUser.empPfNo}`,
            });
            const cloneReq = request.clone({ headers, withCredentials: false });
            // console.log("cloneReq: ", cloneReq);
            return next.handle(cloneReq);
        }
        if (!currentUser) {
            // clone the request and add the Authorization header
            const cloneReq = request.clone({
                withCredentials: false,
            });
            // send the modified request
            return next.handle(cloneReq);
        }
        return next.handle(request.clone());
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__.TokenCookieService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 41782:
/*!**********************************************!*\
  !*** ./src/app/core/service/auth.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Content-Type": "application/json" }),
    withCredentials: true,
};
// /auth/signin
class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Content-Type", "application/json");
    }
    login(data) {
        let CREATE_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlAdmin}/api/v1/auth/signin`;
        return this.http
            .post(CREATE_URL, data, {
            observe: "response",
            headers: this.headers,
            withCredentials: true,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }));
    }
    verifyOTP(params) {
        const OTP_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlAdmin}/api/v1/auth/otp/verify`;
        return this.http.get(OTP_URL, {
            params,
        });
    }
    // resetPassword(resetPasswordDetails): Observable<{ message: string }> {
    //   const resetPasswordUrl = `${environment.baseUrlAdmin}/api/v1/auth/reset-password`;
    //   return this.http.post<{ message: string }>(
    //     resetPasswordUrl,
    //     resetPasswordDetails
    //   );
    // }
    updatePassword(resetPasswordDetails) {
        const updatePasswordUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlAdmin}/api/v1/auth/reset-password`;
        return this.http.post(updatePasswordUrl, resetPasswordDetails);
    }
    forgotPassword(email) {
        const resetPasswordUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlAdmin}/api/v1/auth/forgot-password`;
        return this.http.post(resetPasswordUrl, email);
    }
    forgotPasswordForSupplierSelfService(email) {
        const resetPasswordUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlSupplierManagement}/erp/suppliers/auth/forgot-password`;
        const requestBody = { emailAddress: email }; // Update the property name to match the backend
        return this.http.post(resetPasswordUrl, requestBody);
    }
    refreshAccessToken(refreshToken) {
        // Endpoint URL for refreshing the access token
        const REFRESH_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlAdmin}/api/v1/auth/refreshtoken`;
        console.log("Checking for: ", refreshToken);
        let refreshTokenReq = { refreshToken: refreshToken };
        return this.http.post(REFRESH_URL, refreshTokenReq);
    }
    logout(refreshToken) {
        const LOGOUT_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlAdmin}/api/v1/auth/logout`;
        // Define request parameters including the refresh token
        const requestParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set("refreshToken", refreshToken);
        // Make the PUT request to log out using the refresh token
        return this.http.put(LOGOUT_URL, {}, { params: requestParams });
    }
    postProfileImage(imageBody) {
        const postProfileImageUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlAdmin}/api/v1/users/image/maintain`;
        return this.http.post(postProfileImageUrl, imageBody);
    }
    getUserProfileImage(params) {
        const postProfileImageUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlAdmin}/api/v1/users/image/find-by-emppf`;
        return this.http.get(postProfileImageUrl, { params });
    }
    // Error handling
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 40849:
/*!***************************************************!*\
  !*** ./src/app/core/service/direction.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectionService": () => (/* binding */ DirectionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class DirectionService {
    constructor() {
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.currentData = this.data.asObservable();
    }
    updateDirection(item) {
        this.data.next(item);
    }
}
DirectionService.ɵfac = function DirectionService_Factory(t) { return new (t || DirectionService)(); };
DirectionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DirectionService, factory: DirectionService.ɵfac });


/***/ }),

/***/ 77431:
/*!***************************************************************!*\
  !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptStore": () => (/* binding */ ScriptStore),
/* harmony export */   "DynamicScriptLoaderService": () => (/* binding */ DynamicScriptLoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const ScriptStore = [];
class DynamicScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            if (!this.scripts[name].loaded) {
                // load script
                let script = document.createElement("script");
                script.type = "text/javascript";
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    // IE
                    script.onreadystatechange = () => {
                        if (script.readyState === "loaded" ||
                            script.readyState === "complete") {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: "Loaded" });
                        }
                    };
                }
                else {
                    // Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: "Loaded" });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: "Loaded" });
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: "Already Loaded" });
            }
        });
    }
}
DynamicScriptLoaderService.ɵfac = function DynamicScriptLoaderService_Factory(t) { return new (t || DynamicScriptLoaderService)(); };
DynamicScriptLoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DynamicScriptLoaderService, factory: DynamicScriptLoaderService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 28052:
/*!**************************************************!*\
  !*** ./src/app/core/service/idletime.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdleTimer": () => (/* binding */ IdleTimer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-storage-cookies.service */ 55770);



class IdleTimer {
    constructor(snackBar, tokenCookieService) {
        this.snackBar = snackBar;
        this.tokenCookieService = tokenCookieService;
        this.eventHandler = () => {
            this.updateExpiredTime();
        };
    }
    start({ timeout, onTimeout }) {
        const { getUser, getToken } = this.tokenCookieService;
        const currentUser = getUser();
        const token = getToken();
        if (currentUser) {
            this.timeout = timeout;
            this.onTimeout = onTimeout;
            this.eventHandler = this.updateExpiredTime.bind(this);
            this.tracker();
            this.startInterval();
        }
    }
    startInterval() {
        this.updateExpiredTime();
        this.interval = setInterval(() => {
            const expiredTime = parseInt(localStorage.getItem("_expiredTime"), 10);
            const timeLeft = (expiredTime - Date.now()) / 1000;
            if (timeLeft <= this.timeout * 0.1) {
                this.showSnackBar(`The system will sign you out in the next ${timeLeft.toFixed(0)} seconds!`);
            }
            if (expiredTime < Date.now()) {
                if (this.onTimeout) {
                    this.onTimeout();
                    this.clear();
                }
            }
        }, 1000);
    }
    updateExpiredTime() {
        if (this.timeoutTracker) {
            clearTimeout(this.timeoutTracker);
        }
        this.timeoutTracker = setTimeout(() => {
            localStorage.setItem("_expiredTime", (Date.now() + this.timeout * 1000).toString());
        }, 300);
    }
    tracker() {
        window.addEventListener("mousemove", this.eventHandler);
        window.addEventListener("scroll", this.eventHandler);
        window.addEventListener("keydown", this.eventHandler);
    }
    clear() {
        clearInterval(this.interval);
        window.removeEventListener("mousemove", this.eventHandler);
        window.removeEventListener("scroll", this.eventHandler);
        window.removeEventListener("keydown", this.eventHandler);
        localStorage.removeItem("_expiredTime");
    }
    showSnackBar(message) {
        const horizontalPosition = "end";
        const verticalPosition = "top";
        const duration = 10000;
        const panelClass = ["snackbar-danger", "login-snackbar"];
        this.snackBar.open(message, "X", {
            horizontalPosition,
            verticalPosition,
            duration,
            panelClass,
        });
    }
}
IdleTimer.ɵfac = function IdleTimer_Factory(t) { return new (t || IdleTimer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__.TokenCookieService)); };
IdleTimer.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IdleTimer, factory: IdleTimer.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9964:
/*!**************************************************!*\
  !*** ./src/app/core/service/language.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 87514);


class LanguageService {
    constructor(translate) {
        this.translate = translate;
        this.languages = ["en", "es", "de"];
        let browserLang;
        translate.addLangs(this.languages);
        if (localStorage.getItem("lang")) {
            browserLang = localStorage.getItem("lang");
        }
        else {
            browserLang = translate.getBrowserLang();
        }
        translate.use(browserLang.match(/en|es|de/) ? browserLang : "en");
    }
    setLanguage(lang) {
        this.translate.use(lang);
        localStorage.setItem("lang", lang);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 74930:
/*!******************************************************!*\
  !*** ./src/app/core/service/rightsidebar.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSidebarService": () => (/* binding */ RightSidebarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class RightSidebarService {
    constructor() {
        this.sidebarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidebarState = this.sidebarSubject.asObservable();
        this.setRightSidebar = (value) => {
            this.sidebarSubject.next(value);
        };
    }
}
RightSidebarService.ɵfac = function RightSidebarService_Factory(t) { return new (t || RightSidebarService)(); };
RightSidebarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RightSidebarService, factory: RightSidebarService.ɵfac });


/***/ }),

/***/ 55770:
/*!***************************************************************!*\
  !*** ./src/app/core/service/token-storage-cookies.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenCookieService": () => (/* binding */ TokenCookieService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);








const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";
class TokenCookieService {
    constructor(document, http, router, _snackBar, tokenCookieService) {
        this.document = document;
        this.http = http;
        this.router = router;
        this._snackBar = _snackBar;
        this.tokenCookieService = tokenCookieService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Content-Type", "application/json");
        this.horizontalPosition = "end";
        this.verticalPosition = "top";
    }
    signOut(refreshToken) {
        const SIGNOUT_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlAdmin}/api/v1/auth/logout`;
        const requestParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set("refreshToken", refreshToken);
        // Show a message to the user indicating that the page is reloading
        const snackBarRef = this._snackBar.open("Logging out... Please wait.", null, {
            horizontalPosition: "end",
            verticalPosition: "top",
            panelClass: ["snackbar-success", "snackbar-success"],
        });
        return this.http
            .put(SIGNOUT_URL, "data", {
            params: requestParams,
            observe: "response",
            headers: this.headers,
            withCredentials: true,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
            // clear local storage
            //localStorage.clear();
            this.deleteUser();
            // clear cookies
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i];
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
            // Hide the snackbar after a delay of 1.5 seconds
            setTimeout(() => {
                snackBarRef.dismiss();
            }, 1500);
            // Reload the current page after a delay of 2 seconds
            setTimeout(() => {
                location.reload();
            }, 2000);
        }));
    }
    getToken() {
        // get the name of the cookie to retrieve
        const name = "accessToken";
        // split the document.cookie string into an array of individual cookies
        const cookieArray = document.cookie.split(";");
        // loop through the cookies to find the one with the matching name
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            //console.log("cookieArray: ", cookieArray)
            // remove any leading spaces from the cookie string
            while (cookie.charAt(0) === " ") {
                cookie = cookie.substring(1);
            }
            // if the cookie name matches the desired name, return the cookie value
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        // if the cookie was not found, return null
        return null;
    }
    saveUser(user) {
        window.localStorage.removeItem(USER_KEY);
        window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    deleteUser() {
        window.localStorage.removeItem(USER_KEY);
    }
    getUser() {
        const user = window.localStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }
    clearCookies() {
        this.document.cookie.split(";").forEach((c) => {
            console.log("Cookie: ", c);
            console.log("this.document.cookie: ", this.document.cookie);
            this.document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
    }
    navigateToExternalDashboard(userDomain) {
        const userJSON = window.localStorage.getItem(USER_KEY);
        let externalUrl = "";
        if (userJSON) {
            switch (userDomain) {
                case "HumanResourceModule":
                    externalUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.clientUrlHR;
                    break;
                case "EmployeeSelfServiceModule":
                    externalUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.selfServiceUrlHR;
                    break;
                default:
                    this.throwError();
                    break;
            }
            if (externalUrl) {
                this.setSharedRefreshTokenToCookie(JSON.parse(userJSON).refreshToken);
                // Redirect to the external URL
                window.location.href = externalUrl;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
                    body: { statusCode: 200, entity: {}, message: "Success" },
                });
            }
            else {
                this.throwError();
            }
        }
        else {
            this.throwError();
        }
    }
    setSharedRefreshTokenToCookie(userJSON) {
        const jsonString = JSON.stringify(userJSON);
        const bytes = new TextEncoder().encode(jsonString).length;
        console.log(`Size of userJSON in bytes: ${bytes}`);
        const cookieName = "sharedUserData";
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + 3600 * 1000); // 1 hour
        // Create the cookie string
        const cookieValue = `${cookieName}=${encodeURIComponent(userJSON)}; expires=${expirationDate.toUTCString()}; path=/`;
        // Set the cookie in the browser
        document.cookie = cookieValue;
    }
    getSharedRefreshTokenFromCookie() {
        const cookieName = "sharedUserData";
        const cookieValue = `; ${document.cookie}`;
        const parts = cookieValue.split(`; ${cookieName}=`);
        if (parts.length === 2) {
            const value = decodeURIComponent(parts.pop().split(";").shift());
            return value;
        }
        return null;
    }
    clearSharedTokenOrCookie() {
        const cookieName = "sharedUserData";
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
    throwError() {
        this._snackBar.open("You do not have the necessary permissions to access this resource!", "X", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 20000,
            panelClass: ["snackbar-danger"],
        });
    }
}
TokenCookieService.ɵfac = function TokenCookieService_Factory(t) { return new (t || TokenCookieService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](TokenCookieService)); };
TokenCookieService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TokenCookieService, factory: TokenCookieService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 67879:
/*!***********************************************************************!*\
  !*** ./src/app/erp-procurement/data/services/notification.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);


class NotificationService {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.horizontalPosition = 'end';
        this.verticalPosition = 'top';
    }
    alertSuccess(message) {
        this._snackBar.open(message, "OK", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000,
            panelClass: ["snackbar-success"]
        });
    }
    alertWarning(message) {
        this._snackBar.open(message, "X", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000,
            panelClass: ["snackbar-danger"]
        });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 17050:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/auth-layout/auth-layout.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class AuthLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 25772:
/*!******************************************************************************!*\
  !*** ./src/app/layout/app-layout/main-dashboard/main-dashboard.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainDashboardComponent": () => (/* binding */ MainDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_direction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/direction.service */ 40849);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/header.component */ 17876);
/* harmony import */ var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../right-sidebar/right-sidebar.component */ 72325);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);






class MainDashboardComponent {
    constructor(directoryService) {
        this.directoryService = directoryService;
        this.config = {};
        this.directoryService.currentData.subscribe((currentData) => {
            if (currentData) {
                this.direction = currentData;
            }
            else {
                if (localStorage.getItem("isRtl")) {
                    if (localStorage.getItem("isRtl") === "true") {
                        this.direction = "rtl";
                    }
                    else if (localStorage.getItem("isRtl") === "false") {
                        this.direction = "ltr";
                    }
                }
                else {
                    if (this.config.layout.rtl == true) {
                        this.direction = "rtl";
                    }
                    else {
                        this.direction = "ltr";
                    }
                }
            }
        });
    }
    ngOnInit() { }
}
MainDashboardComponent.ɵfac = function MainDashboardComponent_Factory(t) { return new (t || MainDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_direction_service__WEBPACK_IMPORTED_MODULE_0__.DirectionService)); };
MainDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainDashboardComponent, selectors: [["app-main-dashboard"]], decls: 4, vars: 1, consts: [[3, "dir"]], template: function MainDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header")(1, "app-right-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", ctx.direction);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.RightSidebarComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Dir, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 9899:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutComponent": () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_direction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/direction.service */ 40849);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/header.component */ 17876);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ 20129);
/* harmony import */ var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../right-sidebar/right-sidebar.component */ 72325);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);







class MainLayoutComponent {
    constructor(directoryService) {
        this.directoryService = directoryService;
        this.config = {};
        this.directoryService.currentData.subscribe((currentData) => {
            if (currentData) {
                this.direction = currentData;
            }
            else {
                if (localStorage.getItem("isRtl")) {
                    if (localStorage.getItem("isRtl") === "true") {
                        this.direction = "rtl";
                    }
                    else if (localStorage.getItem("isRtl") === "false") {
                        this.direction = "ltr";
                    }
                }
                else {
                    if (this.config.layout.rtl == true) {
                        this.direction = "rtl";
                    }
                    else {
                        this.direction = "ltr";
                    }
                }
            }
        });
    }
    ngOnInit() { }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_direction_service__WEBPACK_IMPORTED_MODULE_0__.DirectionService)); };
MainLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 5, vars: 1, consts: [[3, "dir"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header")(1, "app-sidebar")(2, "app-right-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.direction);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.RightSidebarComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Dir, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 17876:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/config.service */ 8696);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/language.service */ 9964);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-procurement/data/services/notification.service */ 67879);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);














const document = window.document;
class HeaderComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(document, renderer, elementRef, configService, authService, router, languageService, 
    // private tokenStorage: TokenStorageService,
    tokenCookieService, notificationAPI, snackbar) {
        super();
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.configService = configService;
        this.authService = authService;
        this.router = router;
        this.languageService = languageService;
        this.tokenCookieService = tokenCookieService;
        this.notificationAPI = notificationAPI;
        this.snackbar = snackbar;
        this.config = {};
        this.isNavbarCollapsed = true;
        this.currentUrl = window.location.href;
        this.listLang = [
            { text: "English", flag: "assets/images/flags/us.jpg", lang: "en" },
            { text: "Spanish", flag: "assets/images/flags/spain.jpg", lang: "es" },
            { text: "German", flag: "assets/images/flags/germany.jpg", lang: "de" },
        ];
        this.notifications = [
            {
                message: "Please check your mail",
                time: "14 mins ago",
                icon: "mail",
                color: "nfc-green",
                status: "msg-unread",
            },
            {
                message: "New Employee Added..",
                time: "22 mins ago",
                icon: "person_add",
                color: "nfc-blue",
                status: "msg-read",
            },
            {
                message: "Your leave is approved!! ",
                time: "3 hours ago",
                icon: "event_available",
                color: "nfc-orange",
                status: "msg-read",
            },
            {
                message: "Lets break for lunch...",
                time: "5 hours ago",
                icon: "lunch_dining",
                color: "nfc-blue",
                status: "msg-read",
            },
            {
                message: "Employee report generated",
                time: "14 mins ago",
                icon: "description",
                color: "nfc-green",
                status: "msg-read",
            },
            {
                message: "Please check your mail",
                time: "22 mins ago",
                icon: "mail",
                color: "nfc-red",
                status: "msg-read",
            },
            {
                message: "Salary credited...",
                time: "3 hours ago",
                icon: "paid",
                color: "nfc-purple",
                status: "msg-read",
            },
        ];
        this.moduleName = "";
        this.profileImage = null;
        this.currentUser = this.tokenCookieService.getUser();
        this.getProfileImage();
    }
    ngOnInit() {
        this.config = this.configService.configData;
        // const userRole = this.tokenCookieService.getUser().roles[0];
        this.userName = this.tokenCookieService.getUser().username;
        this.userImg = "assets/images/user/profile_img.png";
        this.homePage = "admin/dashboard";
        console.log("currentUrl: ", this.currentUrl);
        // if (userRole === "ROLE_ADMIN") {
        //   this.homePage = "admin/dashboard";
        // } else if (userRole === "ROLE_USER") {
        //   this.homePage = "user/dashboard";
        // } else {
        //   // 404?
        //   this.homePage = "page-not-found";
        // }
        this.langStoreValue = localStorage.getItem("lang");
        const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
        this.countryName = val.map((element) => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.defaultFlag = "assets/images/flags/us.jpg";
            }
        }
        else {
            this.flagvalue = val.map((element) => element.flag);
        }
    }
    ngAfterViewInit() {
        // set theme on startup
        if (localStorage.getItem("theme")) {
            this.renderer.removeClass(this.document.body, this.config.layout.variant);
            this.renderer.addClass(this.document.body, localStorage.getItem("theme"));
        }
        else {
            this.renderer.addClass(this.document.body, this.config.layout.variant);
        }
        if (localStorage.getItem("menuOption")) {
            this.renderer.addClass(this.document.body, localStorage.getItem("menuOption"));
        }
        else {
            this.renderer.addClass(this.document.body, "menu_" + this.config.layout.sidebar.backgroundColor);
        }
        if (localStorage.getItem("choose_logoheader")) {
            this.renderer.addClass(this.document.body, localStorage.getItem("choose_logoheader"));
        }
        else {
            this.renderer.addClass(this.document.body, "logo-" + this.config.layout.logo_bg_color);
        }
        if (localStorage.getItem("sidebar_status")) {
            if (localStorage.getItem("sidebar_status") === "close") {
                this.renderer.addClass(this.document.body, "side-closed");
                this.renderer.addClass(this.document.body, "submenu-closed");
            }
            else {
                this.renderer.removeClass(this.document.body, "side-closed");
                this.renderer.removeClass(this.document.body, "submenu-closed");
            }
        }
        else {
            if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, "side-closed");
                this.renderer.addClass(this.document.body, "submenu-closed");
            }
        }
        const userId = this.currentUser.id;
        const module = JSON.parse(localStorage.getItem(`selectedModule_${userId}`) || '{}');
        if (module) {
            switch (module) {
                case 'AdminModule':
                    this.moduleName = 'Admin Module';
                    break;
                case 'ProcurementModule':
                    this.moduleName = 'Procurement Module';
                    break;
                case 'HumanResourceModule':
                    this.moduleName = 'Human Resource Module';
                    break;
                case 'FinanceModule':
                    this.moduleName = 'Finance Module';
                    break;
                case 'FixedAssetsModule':
                    this.moduleName = 'Fixed Assets Module';
                    break;
                case 'SuppliersManagementModule':
                    this.moduleName = 'Suppliers Management Module';
                    break;
                case 'BudgetModule':
                    this.moduleName = 'Budget Module';
                    break;
                case 'ImprestModule':
                    this.moduleName = 'Imprest Module';
                    break;
                case 'PrepaymentModule':
                    this.moduleName = 'Prepayment Module';
                    break;
                case 'InventoryModule':
                    this.moduleName = 'Inventory Module';
                    break;
                default:
                    // No match 
                    break;
            }
        }
    }
    callFullscreen() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.langStoreValue = lang;
        this.languageService.setLanguage(lang);
    }
    mobileMenuSidebarOpen(event, className) {
        const hasClass = event.target.classList.contains(className);
        if (hasClass) {
            this.renderer.removeClass(this.document.body, className);
        }
        else {
            this.renderer.addClass(this.document.body, className);
        }
    }
    callSidemenuCollapse() {
        const hasClass = this.document.body.classList.contains("side-closed");
        if (hasClass) {
            this.renderer.removeClass(this.document.body, "side-closed");
            this.renderer.removeClass(this.document.body, "submenu-closed");
        }
        else {
            this.renderer.addClass(this.document.body, "side-closed");
            this.renderer.addClass(this.document.body, "submenu-closed");
        }
    }
    getProfileImage() {
        let params = {
            empPf: this.currentUser.empPfNo,
        };
        this.authService.getUserProfileImage(params).subscribe((res) => {
            //this.snackbar.showNotification("snackbar-success", res.message);
            // console.log("getProfileImage res: ", res);
            if (res.entity && res.entity.imageFile) {
                this.profileImage = res.entity.imageFile;
            }
        }, (err) => {
            console.log(err);
            // this.snackbar.showNotification("snackbar-danger", err.message);
        });
    }
    backToDashboard() {
        this.router.navigate(["/erp-dashboard/main"]);
    }
    logout() {
        this.tokenCookieService
            .signOut(this.tokenCookieService.getUser().refreshToken)
            .subscribe((res) => {
            console.log("res: ", res);
            if (res.statusCode === 200) {
                this.router.navigate(["/authentication/signin"]);
                this.notificationAPI.alertSuccess(res.message);
            }
            else {
                this.notificationAPI.alertWarning(res.message);
                this.router.navigate(["/authentication/signin"]);
            }
        }, (err) => {
            console.log(err);
            this.router.navigate(["/authentication/signin"]);
            this.notificationAPI.alertWarning(err.message);
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_4__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 46, vars: 20, consts: [[1, "navbar", "active"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", "onClick", "return false;", "aria-expanded", "false", 1, "navbar-toggle", "collapsed", 3, "click"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/em.png", "width", "35px", "height", "35px", "alt", ""], [1, "logo-name", 2, "font-size", "20px"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "float-start", "collapse-menu-icon"], ["mat-icon-button", "", 1, "sidemenu-collapse", 3, "click"], [3, "icon"], [2, "font-size", "20px"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], ["ngbDropdown", "", 1, "nav-item", "user_profile", "btnUserDropdown"], ["ngbDropdownToggle", "", 1, "nav-notification-icons", "pt-0"], ["width", "32", "height", "32", "alt", "", 1, "user_img", 3, "src"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "pullDown"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "300px", 3, "perfectScrollbar"], [1, "menu"], [1, "body"], [1, "user_dw_menu"], ["routerLink", "/account/update-profile", "onClick", "return false;"], ["href", "javascript:void(0);", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nav", 0, 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.isNavbarCollapsed = !ctx.isNavbarCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener($event) { return ctx.mobileMenuSidebarOpen($event, "overlay-open"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 8)(9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Kingdom Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 9)(12, "ul", 10)(13, "li")(14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_14_listener() { return ctx.callSidemenuCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_16_listener() { return ctx.callSidemenuCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span", 13)(18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "ul", 14)(21, "li", 15)(22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_22_listener() { return ctx.callFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "li", 17)(25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 20)(30, "div", 21)(31, "ul", 22)(32, "li", 23)(33, "ul", 24)(34, "li")(35, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](36, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "li")(39, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_39_listener() { return ctx.backToDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Back to Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "li")(43, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_43_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("routerLink", ctx.homePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("header-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.moduleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("header-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "maximize");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.profileImage || "assets/images/user/profile_img.png", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("user-menu-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("user-menu-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("user-menu-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "log-out");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbCollapse, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_7__.FeatherIconsComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 66105:
/*!*************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLoaderComponent": () => (/* binding */ PageLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-loading-bar/core */ 79464);


class PageLoaderComponent {
    constructor() { }
    ngOnInit() { }
}
PageLoaderComponent.ɵfac = function PageLoaderComponent_Factory(t) { return new (t || PageLoaderComponent)(); };
PageLoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLoaderComponent, selectors: [["app-page-loader"]], decls: 1, vars: 0, consts: [["color", "#3173D6"]], template: function PageLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-loading-bar", 0);
    } }, directives: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__.LoadingBarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 72325:
/*!*****************************************************************!*\
  !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSidebarComponent": () => (/* binding */ RightSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ 74930);
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/config.service */ 8696);
/* harmony import */ var src_app_core_service_direction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/direction.service */ 40849);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);











const _c0 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
const _c1 = function (a0) { return { "active": a0 }; };
class RightSidebarComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(document, renderer, elementRef, rightSidebarService, configService, directionService) {
        super();
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.rightSidebarService = rightSidebarService;
        this.configService = configService;
        this.directionService = directionService;
        this.selectedBgColor = "white";
        this.showpanel = false;
        this.isDarkSidebar = false;
        this.isDarTheme = false;
        this.isRtl = false;
        this.config = {};
    }
    ngOnInit() {
        this.config = this.configService.configData;
        this.subs.sink = this.rightSidebarService.sidebarState.subscribe((isRunning) => {
            this.isOpenSidebar = isRunning;
        });
        this.setRightSidebarWindowHeight();
    }
    ngAfterViewInit() {
        // set header color on startup
        if (localStorage.getItem("choose_skin")) {
            this.renderer.addClass(this.document.body, localStorage.getItem("choose_skin"));
            this.selectedBgColor = localStorage.getItem("choose_skin_active");
        }
        else {
            this.renderer.addClass(this.document.body, "theme-" + this.config.layout.theme_color);
            this.selectedBgColor = this.config.layout.theme_color;
        }
        if (localStorage.getItem("menuOption")) {
            if (localStorage.getItem("menuOption") === "menu_dark") {
                this.isDarkSidebar = true;
            }
            else if (localStorage.getItem("menuOption") === "menu_light") {
                this.isDarkSidebar = false;
            }
            else {
                this.isDarkSidebar =
                    this.config.layout.sidebar.backgroundColor === "dark" ? true : false;
            }
        }
        else {
            this.isDarkSidebar =
                this.config.layout.sidebar.backgroundColor === "dark" ? true : false;
        }
        if (localStorage.getItem("theme")) {
            if (localStorage.getItem("theme") === "dark") {
                this.isDarTheme = true;
            }
            else if (localStorage.getItem("theme") === "light") {
                this.isDarTheme = false;
            }
            else {
                this.isDarTheme = this.config.layout.variant === "dark" ? true : false;
            }
        }
        else {
            this.isDarTheme = this.config.layout.variant === "dark" ? true : false;
        }
        if (localStorage.getItem("isRtl")) {
            if (localStorage.getItem("isRtl") === "true") {
                this.setRTLSettings();
            }
            else if (localStorage.getItem("isRtl") === "false") {
                this.setLTRSettings();
            }
        }
        else {
            if (this.config.layout.rtl == true) {
                this.setRTLSettings();
            }
            else {
                this.setLTRSettings();
            }
        }
    }
    selectTheme(e) {
        this.selectedBgColor = e;
        const prevTheme = this.elementRef.nativeElement
            .querySelector(".settingSidebar .choose-theme li.active")
            .getAttribute("data-theme");
        this.renderer.removeClass(this.document.body, "theme-" + prevTheme);
        this.renderer.addClass(this.document.body, "theme-" + this.selectedBgColor);
        localStorage.setItem("choose_skin", "theme-" + this.selectedBgColor);
        localStorage.setItem("choose_skin_active", this.selectedBgColor);
    }
    lightSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, "menu_dark");
        this.renderer.removeClass(this.document.body, "logo-black");
        this.renderer.addClass(this.document.body, "menu_light");
        this.renderer.addClass(this.document.body, "logo-white");
        const menuOption = "menu_light";
        localStorage.setItem("choose_logoheader", "logo-white");
        localStorage.setItem("menuOption", menuOption);
    }
    darkSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, "menu_light");
        this.renderer.removeClass(this.document.body, "logo-white");
        this.renderer.addClass(this.document.body, "menu_dark");
        this.renderer.addClass(this.document.body, "logo-black");
        const menuOption = "menu_dark";
        localStorage.setItem("choose_logoheader", "logo-black");
        localStorage.setItem("menuOption", menuOption);
    }
    lightThemeBtnClick() {
        this.renderer.removeClass(this.document.body, "dark");
        this.renderer.removeClass(this.document.body, "submenu-closed");
        this.renderer.removeClass(this.document.body, "menu_dark");
        this.renderer.removeClass(this.document.body, "logo-black");
        if (localStorage.getItem("choose_skin")) {
            this.renderer.removeClass(this.document.body, localStorage.getItem("choose_skin"));
        }
        else {
            this.renderer.removeClass(this.document.body, "theme-" + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, "light");
        this.renderer.addClass(this.document.body, "submenu-closed");
        this.renderer.addClass(this.document.body, "menu_light");
        this.renderer.addClass(this.document.body, "logo-white");
        this.renderer.addClass(this.document.body, "theme-white");
        const theme = "light";
        const menuOption = "menu_light";
        this.selectedBgColor = "white";
        this.isDarkSidebar = false;
        localStorage.setItem("choose_logoheader", "logo-white");
        localStorage.setItem("choose_skin", "theme-white");
        localStorage.setItem("theme", theme);
        localStorage.setItem("menuOption", menuOption);
    }
    darkThemeBtnClick() {
        this.renderer.removeClass(this.document.body, "light");
        this.renderer.removeClass(this.document.body, "submenu-closed");
        this.renderer.removeClass(this.document.body, "menu_light");
        this.renderer.removeClass(this.document.body, "logo-white");
        if (localStorage.getItem("choose_skin")) {
            this.renderer.removeClass(this.document.body, localStorage.getItem("choose_skin"));
        }
        else {
            this.renderer.removeClass(this.document.body, "theme-" + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, "dark");
        this.renderer.addClass(this.document.body, "submenu-closed");
        this.renderer.addClass(this.document.body, "menu_dark");
        this.renderer.addClass(this.document.body, "logo-black");
        this.renderer.addClass(this.document.body, "theme-black");
        const theme = "dark";
        const menuOption = "menu_dark";
        this.selectedBgColor = "black";
        this.isDarkSidebar = true;
        localStorage.setItem("choose_logoheader", "logo-black");
        localStorage.setItem("choose_skin", "theme-black");
        localStorage.setItem("theme", theme);
        localStorage.setItem("menuOption", menuOption);
    }
    setRightSidebarWindowHeight() {
        const height = window.innerHeight - 60;
        this.maxHeight = height + "";
        this.maxWidth = "500px";
    }
    onClickedOutside(event) {
        const button = event.target;
        if (button.id !== "settingBtn") {
            if (this.isOpenSidebar === true) {
                this.toggleRightSidebar();
            }
        }
    }
    toggleRightSidebar() {
        this.rightSidebarService.setRightSidebar((this.isOpenSidebar = !this.isOpenSidebar));
    }
    switchDirection(event) {
        var isrtl = String(event.checked);
        if (isrtl === "false" &&
            document.getElementsByTagName("html")[0].hasAttribute("dir")) {
            document.getElementsByTagName("html")[0].removeAttribute("dir");
            this.renderer.removeClass(this.document.body, "rtl");
            this.directionService.updateDirection("ltr");
        }
        else if (isrtl === "true" &&
            !document.getElementsByTagName("html")[0].hasAttribute("dir")) {
            document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
            this.renderer.addClass(this.document.body, "rtl");
            this.directionService.updateDirection("rtl");
        }
        localStorage.setItem("isRtl", isrtl);
        this.isRtl = event.checked;
    }
    setRTLSettings() {
        document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
        this.renderer.addClass(this.document.body, "rtl");
        this.isRtl = true;
        localStorage.setItem("isRtl", "true");
    }
    setLTRSettings() {
        document.getElementsByTagName("html")[0].removeAttribute("dir");
        this.renderer.removeClass(this.document.body, "rtl");
        this.isRtl = false;
        localStorage.setItem("isRtl", "false");
    }
}
RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) { return new (t || RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_direction_service__WEBPACK_IMPORTED_MODULE_3__.DirectionService)); };
RightSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RightSidebarComponent, selectors: [["app-right-sidebar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 54, vars: 33, consts: [[1, "settingSidebar", 3, "ngClass"], ["href", "javascript:void(0)", 1, "settingPanelToggle", 3, "click"], [3, "icon"], [1, "settingSidebar-body", "ps-container", "ps-theme-default", 3, "ngStyle", "perfectScrollbar"], [1, "fade", "show", "active"], [1, "setting-panel-header"], [1, "p-15", "border-bottom"], [1, "font-medium", "m-b-10"], [1, "flex", "flex-wrap", "hiddenradio"], [1, "flex", "flex-col"], ["type", "radio", "name", "value", "value", "light", 3, "checked", "click"], ["src", "assets/images/light.png"], [1, "mt-1", "text-md", "text-center"], [1, "flex", "flex-col", "mt-3"], ["type", "radio", "name", "value", "value", "dark", 3, "checked", "click"], ["src", "assets/images/dark.png"], [1, "rightSetting"], [1, "mt-2", 3, "value"], ["value", "light", 3, "click"], ["value", "dark", 3, "click"], [1, "theme-setting-options"], [1, "choose-theme", "list-unstyled", "mb-0"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green"], ["data-theme", "blue", 3, "ngClass", "click"], [1, "blue"], [1, "mt-2", 3, "checked", "change"]], template: function RightSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_a_click_1_listener() { return ctx.toggleRightSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-feather-icons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Setting Panel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Select Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "label")(13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_input_click_13_listener() { return ctx.lightThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13)(18, "label")(19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_input_click_19_listener() { return ctx.darkThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 16)(24, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Sidebar Menu Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-button-toggle-group", 17)(27, "mat-button-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_27_listener() { return ctx.lightSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-button-toggle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_29_listener() { return ctx.darkSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 6)(32, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Color Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 20)(35, "ul", 21)(36, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_36_listener() { return ctx.selectTheme("white"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_38_listener() { return ctx.selectTheme("black"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_40_listener() { return ctx.selectTheme("purple"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_42_listener() { return ctx.selectTheme("orange"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_44_listener() { return ctx.selectTheme("cyan"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_46_listener() { return ctx.selectTheme("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_48_listener() { return ctx.selectTheme("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 16)(51, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "RTL Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-slide-toggle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RightSidebarComponent_Template_mat_slide_toggle_change_53_listener($event) { return ctx.switchDirection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.isOpenSidebar ? "showSettingPanel" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("setting-sidebar-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](16, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isDarTheme == false ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isDarTheme == true ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.isDarkSidebar ? "dark" : "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c1, ctx.selectedBgColor === "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](21, _c1, ctx.selectedBgColor === "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](23, _c1, ctx.selectedBgColor === "purple"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](25, _c1, ctx.selectedBgColor === "orange"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](27, _c1, ctx.selectedBgColor === "cyan"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](29, _c1, ctx.selectedBgColor === "green"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](31, _c1, ctx.selectedBgColor === "blue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isRtl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggle, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 39617:
/*!*************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule),
/* harmony export */   "HumanResourceModule": () => (/* binding */ HumanResourceModule),
/* harmony export */   "HumanResourceSelfServiceModule": () => (/* binding */ HumanResourceSelfServiceModule),
/* harmony export */   "ProcurementModule": () => (/* binding */ ProcurementModule),
/* harmony export */   "FinanceModule": () => (/* binding */ FinanceModule),
/* harmony export */   "FixedAssetsModule": () => (/* binding */ FixedAssetsModule),
/* harmony export */   "ImprestModule": () => (/* binding */ ImprestModule),
/* harmony export */   "BudgetModule": () => (/* binding */ BudgetModule),
/* harmony export */   "SuppliersManagementModule": () => (/* binding */ SuppliersManagementModule),
/* harmony export */   "PrepaymentModule": () => (/* binding */ PrepaymentModule),
/* harmony export */   "InventoryModule": () => (/* binding */ InventoryModule)
/* harmony export */ });
const AdminModule = [
    //************************************************************************************************************************* */
    //ADMIN MODULE
    //************************************************************************************************************************* */
    {
        path: "",
        title: "MENUITEMS.MAIN.TEXT",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-admin/dashboard",
        title: "Dashboard",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "monitor",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    // {
    //   path: "",
    //   title: "Parameters",
    //   moduleName: "",
    //   iconType: "",
    //   icon: "",
    //   class: "",
    //   groupTitle: true,
    //   badge: "",
    //   badgeClass: "",
    //   role: ["All"],
    //   privilege: ["All Departements", "Manage Department"],
    //   submenu: [],
    // },
    // {
    //   path: "",
    //   title: "Departments",
    //   moduleName: "departments",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["All Departments", "Manage Department"],
    //   submenu: [
    //     {
    //       path: "/erp-admin/admin-parameters/all-departments",
    //       title: "All Departments",
    //       moduleName: "departments",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["All Departments"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-admin/admin-parameters/manage-departments",
    //       title: "Manage Departemnt",
    //       moduleName: "departments",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Manage Department"],
    //       submenu: [],
    //     },
    //   ],
    // },
    {
        path: "",
        title: "Admin Sub-Modules",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-admin/admin/email-configuration",
        title: "Email Configuration",
        moduleName: "email-configuration",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-admin/admin/all-privileges",
        title: "Privileges",
        moduleName: "Privileges",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-admin/admin/all-delegations",
        title: "Privilege Delegation",
        moduleName: "Privileges",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All Privilege Delegations", "Dashboard"],
        submenu: [],
    },
    {
        path: "",
        title: "Roles",
        moduleName: "admins",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Roles", "Manage Role"],
        submenu: [
            {
                path: "/erp-admin/admin/all-roles",
                title: "All Roles",
                moduleName: "admin",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Roles"],
                submenu: [],
            },
            {
                path: "/erp-admin/admin/manage-role",
                title: "Manage Role",
                moduleName: "admin",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Role"],
                submenu: [],
            },
        ],
    },
    // "All Requests",
    // "Manage Request",
    // {
    //   path: "",
    //   title: "Initiate Requests",
    //   moduleName: "admin",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["All Requests", "Manage Request"],
    //   submenu: [
    //     {
    //       path: "/erp-admin/admin/all-requests",
    //       title: "All Requests",
    //       moduleName: "admin",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["All Requests"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-admin/admin/manage-request",
    //       title: "Manage Request",
    //       moduleName: "admin",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Manage Request"],
    //       submenu: [],
    //     },
    //   ],
    // },
    // {
    //   path: "/erp-admin/admin/access-request",
    //   title: "Access Request",
    //   moduleName: "admin",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: ["All"],
    //   privilege: ["Access Request"],
    //   submenu: [],
    // },
    {
        path: "/erp-admin/admin/all-users",
        title: "User Management",
        moduleName: "user-management",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Login session"],
        submenu: [],
    },
    {
        path: "/erp-admin/admin/login-session",
        title: "Login session",
        moduleName: "admin",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Login session"],
        submenu: [],
    },
    // {
    //   path: "/erp-admin/admin/application-logs",
    //   title: "Application Logs",
    //   moduleName: "admin",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: ["All"],
    //   privilege: ["Application Logs"],
    //   submenu: [],
    // },
];
const HumanResourceModule = [
    {
        path: "",
        title: "MENUITEMS.MAIN.TEXT",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-hr/dashboard",
        title: "Dashboard",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "monitor",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-hr/configurations/",
        title: "Configurations",
        moduleName: "configurations",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [
            {
                path: "/erp-hr/configurations/organization-details",
                title: "Organization",
                moduleName: "configurations",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/configurations/organization-structure",
                title: "Organization Structure",
                moduleName: "configurations",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/configurations/branches",
                title: "Branches",
                moduleName: "configurations",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/configurations/departments",
                title: "Departments",
                moduleName: "configurations",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/configurations/job-grades",
                title: "Job Groups",
                moduleName: "configurations",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/configurations/job-roles",
                title: "Job Role",
                moduleName: "configurations",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/configurations/holidays",
                title: "Holiday",
                moduleName: "configurations",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/configurations/leave-types",
                title: "Leave Types",
                moduleName: "configurations",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/configurations/kpi-schedule",
                title: "KPI Schedules",
                moduleName: "configurations",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/configurations/kpi-analysis",
                title: "KPI Analysis",
                moduleName: "configurations",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Statutory Deductions",
        moduleName: "deductions",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [
            {
                path: "/erp-hr/deductions/nhif",
                title: "NHIF",
                moduleName: "deductions",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/deductions/nssf",
                title: "NSSF",
                moduleName: "deductions",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/deductions/paye",
                title: "PAYE",
                moduleName: "deductions",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/deductions/fringe-benefit",
                title: "FRINGE BENEFIT",
                moduleName: "deductions",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/deductions/paye-relief",
                title: "PAYE RELIEF",
                moduleName: "deductions",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/deductions/house-levy",
                title: "HOUSE LEVY",
                moduleName: "deductions",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Job Management",
        moduleName: "jobs",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [
            {
                path: "/erp-hr/jobs/all-jobs",
                title: "All Jobs",
                moduleName: "jobs",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/jobs/all-job-applications",
                title: "Job Applications",
                moduleName: "jobs",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            // {
            //   path: "/erp-hr/jobs/all-job-interviews",
            //   title: "Job Interviews",
            //   moduleName: "jobs",
            //   iconType: "",
            //   icon: "",
            //   class: "ml-menu",
            //   groupTitle: false,
            //   badge: "",
            //   badgeClass: "",
            //   role: [""],
            //   privilege: ["Dashboard"],
            //   submenu: [],
            // },
        ],
    },
    {
        path: "",
        title: "Employee Management",
        moduleName: "employees",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [
            {
                path: "/erp-hr/employees/all-employees",
                title: "All Employees",
                moduleName: "employees",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/employees/manage-employees",
                title: "Manage Employees",
                moduleName: "employees",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/employees/all-employee-documents",
                title: "Employee Documents",
                moduleName: "employees",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
        ],
    },
    {
        path: "/erp-hr/employee-activities/all-employee-promotions",
        title: "Employee Promotions",
        moduleName: "promotions",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-hr/employee-activities/all-employee-demotions",
        title: "Employee Demotions",
        moduleName: "demotions",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-hr/employee-activities/all-employee-transfers",
        title: "Employee Transfer",
        moduleName: "transfers",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "",
        title: "Pension Scheme",
        moduleName: "pension",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [
            {
                path: "/erp-hr/pension/all-pension-enrolment",
                title: "Pension Enrollment",
                moduleName: "pension",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/pension/all-pension-contributions",
                title: "Pension Contributions",
                moduleName: "pension",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Payroll Management",
        moduleName: "payroll",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [
            {
                path: "/erp-hr/payroll/payroll-dashboard",
                title: "Payroll Dashboard",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/open-payroll",
                title: "1. Open Payroll",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/salary-increment-payroll",
                title: "2. Salary Increment",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/allowance-payroll",
                title: "3. Upload Allowance",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/deductions-payroll",
                title: "4. Other Deductions",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/staff-loans-payroll",
                title: "5. Staff Loans",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/generate-payroll",
                title: "6. Generate Payroll",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/reconcile-payroll",
                title: "7. Reconcile Payroll",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/close-payroll",
                title: "8. Close Payroll",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/reports-payroll",
                title: "9. Payroll Reports",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/to-finance-payroll",
                title: "10. To Finance",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/manage-payslips-payroll",
                title: "11. Manage Payslip",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/process-payslips-payroll",
                title: "12. Process Payslips",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/process-p-9-payroll",
                title: "13. Payroll P9s",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/payroll/gratuity-payroll",
                title: "14. Gratuity",
                moduleName: "payroll",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Leave Management",
        moduleName: "leave",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [
            {
                path: "/erp-hr/leave-management/all-leave-requests",
                title: "Leave Requests",
                moduleName: "leave",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            // {
            //   path: "/erp-hr/leave-management/all-leave-planners",
            //   title: "Employee Leave Plan",
            //   moduleName: "leave",
            //   iconType: "",
            //   icon: "",
            //   class: "ml-menu",
            //   groupTitle: false,
            //   badge: "",
            //   badgeClass: "",
            //   role: [""],
            //   privilege: ["Dashboard"],
            //   submenu: [],
            // },
            {
                path: "/erp-hr/leave-management/leave-reports",
                title: "Leave Reports",
                moduleName: "leave",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "KPI Management",
        moduleName: "performance",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [
            {
                path: "/erp-hr/kpi-management/all-kpi-goals",
                title: "KPI Goal",
                moduleName: "performance",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/kpi-management/kpi-results",
                title: "KPI Results",
                moduleName: "performance",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
        ],
    },
    {
        path: "/erp-hr/exit-management/all-exit-requests",
        title: "Exit Management",
        moduleName: "exit",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "",
        title: "Case Management",
        moduleName: "case",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [
            {
                path: "/erp-hr/case-management/all-cases-raised",
                title: "Cases Raised",
                moduleName: "case",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-hr/case-management/all-case-investigations",
                title: "Case Investigations",
                moduleName: "case",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
        ],
    },
    {
        path: "/erp-hr/shared-documents/all-shared-documents",
        title: "Shared Documents",
        moduleName: "documents",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-hr/learning-and-training/all-learning-and-training",
        title: "Learning And Training",
        moduleName: "learning",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-hr/hr-miscellaneous/bulk-uploads",
        title: "Bulk Uploads",
        moduleName: "bulk-uploads",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
];
const HumanResourceSelfServiceModule = [
    //************************************************************************************************************************* */
    //HumanResourceSelfServiceModule
    //************************************************************************************************************************* */
    {
        path: "",
        title: "MENUITEMS.MAIN.TEXT",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All"],
        submenu: [],
    },
    {
        path: "/erp-hr-self-service/dashboard",
        title: "Dashboard",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "monitor",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All"],
        submenu: [],
    },
    {
        path: "/erp-hr-self-service/employee-profile/my-profile",
        title: "My Profile",
        moduleName: "profile",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All"],
        submenu: [],
    },
    {
        path: "/erp-hr-self-service/employee-profile/all-employee-documents",
        title: "Employee Documents",
        moduleName: "profile",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-hr-self-service/employee-payroll",
        title: "Payroll Details",
        moduleName: "payroll",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All"],
        submenu: [],
    },
    {
        path: "/erp-hr-self-service/employee-kpi",
        title: "KPI Details",
        moduleName: "KPI",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All"],
        submenu: [],
    },
    {
        path: "",
        title: "Leave Details",
        moduleName: "leave",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All"],
        submenu: [
            {
                path: "/erp-hr-self-service/employee-leave/requests",
                title: "Applied Leaves",
                moduleName: "leaves",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All"],
                submenu: [],
            },
            // {
            //   path: "/erp-hr-self-service/employee-leave/plan",
            //   title: "Planned Leaves",
            //   moduleName: "leaves",
            //   iconType: "",
            //   icon: "",
            //   class: "ml-menu",
            //   groupTitle: false,
            //   badge: "",
            //   badgeClass: "",
            //   role: [""],
            //   privilege: ["All"],
            //   submenu: [],
            // },
            // {
            //   path: "/erp-hr-self-service/dashboard",
            //   title: "Leave Reports",
            //   moduleName: "leaves",
            //   iconType: "",
            //   icon: "",
            //   class: "ml-menu",
            //   groupTitle: false,
            //   badge: "",
            //   badgeClass: "",
            //   role: [""],
            //   privilege: ["All"],
            //   submenu: [],
            // },
        ],
    },
    {
        path: "/erp-hr-self-service/employee-learning",
        title: "Learning And Training",
        moduleName: "KPI",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All"],
        submenu: [],
    },
    {
        path: "/erp-hr-self-service/employee-case",
        title: "Disciplinary Cases",
        moduleName: "cases",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All"],
        submenu: [],
    },
    {
        path: "/erp-hr-self-service/employee-search/employees",
        title: "Search Employee",
        moduleName: "search",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All"],
        submenu: [],
    },
    {
        path: "/erp-hr-self-service/employee-shared-documents",
        title: "Shared Documents",
        moduleName: "documents",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All"],
        submenu: [],
    },
    {
        path: "",
        title: "Job Vacancies",
        moduleName: "job",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All"],
        submenu: [
            {
                path: "/erp-hr-self-service/employee-jobs/openings",
                title: "Job Openings",
                moduleName: "job",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All"],
                submenu: [],
            },
            {
                path: "/erp-hr-self-service/employee-jobs/applied",
                title: "Jobs Applied",
                moduleName: "job",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All"],
                submenu: [],
            },
        ],
    },
    {
        path: "/erp-hr-self-service/employee-exit",
        title: "Exit Request",
        moduleName: "exit",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All"],
        submenu: [],
    },
    {
        path: "/erp-hr-self-service/employee-miscellaneous/staff-loans",
        title: "Staff Loans",
        moduleName: "employee-miscellaneous",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All"],
        submenu: [],
    },
];
const ProcurementModule = [
    //************************************************************************************************************************* */
    //PROCURMENT
    //************************************************************************************************************************* */
    {
        path: "",
        title: "MENUITEMS.MAIN.TEXT",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-procurement/dashboard",
        title: "Dashboard",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "monitor",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    // {
    //   path: "",
    //   title: "PARAMETER SETTINGS",
    //   moduleName: "",
    //   iconType: "",
    //   icon: "",
    //   class: "",
    //   groupTitle: true,
    //   badge: "",
    //   badgeClass: "",
    //   role: ["All"],
    //   privilege: [
    //     "Add Budget Categories",
    //     "Manage Budget Categories",
    //     "All Budgets",
    //     "Manage Budgets",
    //     "All Procurement Committees",
    //     "Manage Procurement Committees",
    //     "All Suppliers",
    //     "Manage Suppliers",
    //     "All Currencies",
    //     "Manage Currencies",
    //     "Approved RFPS",
    //     "All Branch Stores",
    //     "Manage Branch Stores",
    //   ],
    //   submenu: [],
    // },
    //Budget
    // {
    //   path: "",
    //   title: "Budget",
    //   moduleName: "budget",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["All Budgets", "Manage Budgets"],
    //   submenu: [
    //     {
    //       path: "/erp-procurement/parameters/all-budgets",
    //       title: "All Budgets",
    //       moduleName: "budgets",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["All Budgets"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-procurement/parameters/manage-budgets",
    //       title: "Manage Budgets",
    //       moduleName: "lease",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Manage Budgets"],
    //       submenu: [],
    //     },
    //   ],
    // },
    //Sub modules
    {
        path: "",
        title: "Procurement Sub-modules",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All Needs", "Manage Needs"],
        submenu: [],
    },
    {
        path: "",
        title: "Procurement Committee",
        moduleName: "procurement-module",
        iconType: "feather",
        icon: "list",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Committees", "Manage Committee"],
        submenu: [
            {
                path: "/erp-procurement/parameters/all-procurement-committees",
                title: "All Committees",
                moduleName: "procurement-module",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Committees"],
                submenu: [],
            },
            {
                path: "/erp-procurement/parameters/manage-procurement-committees",
                title: "Manage Committee",
                moduleName: "procurement-module",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Committee"],
                submenu: [],
            },
        ],
    },
    //Needs
    {
        path: "",
        title: "Requisition",
        moduleName: "needs",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Needs", "Manage Needs"],
        submenu: [
            {
                path: "/erp-procurement/needs/all-needs",
                title: "All Requisitions",
                moduleName: "needs",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Needs"],
                submenu: [],
            },
            {
                path: "/erp-procurement/needs/manage-need",
                title: "Manage Requisitions",
                moduleName: "needs",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Needs"],
                submenu: [],
            },
        ],
    },
    //RFQs
    {
        path: "",
        title: "RFQs",
        moduleName: "RFQs",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Rfqs", "Manage Rfqs"],
        submenu: [
            {
                path: "/erp-procurement/rfqs/all-rfqs",
                title: "All RFQs",
                moduleName: "RFPs",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Rfqs"],
                submenu: [],
            },
            {
                path: "/erp-procurement/rfqs/manage-rfqs",
                title: "Manage RFQ",
                moduleName: "RFQs",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Rfqs"],
                submenu: [],
            },
        ],
    },
    //Recieve RFQ Appications
    {
        path: "/erp-procurement/rfq-applications/analyse-rfq-applications",
        title: "Recieve Rfq Applications",
        moduleName: "recieverfqapplication",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Rfq Applications"],
        submenu: [
        // {
        //   path: "/erp-procurement/rfq-applications/all-rfq-appications",
        //   title: "All Rfq Applications",
        //   moduleName: "recieverfqapplication",
        //   iconType: "",
        //   icon: "",
        //   class: "ml-menu",
        //   groupTitle: false,
        //   badge: "",
        //   badgeClass: "",
        //   role: [""],
        //   privilege: ["All Rfq Applications"],
        //   submenu: [],
        // },
        // {
        //   path: "/erp-procurement/rfq-applications/analyse-rfq-applications",
        //   title: "Analyse Rfq Applications",
        //   moduleName: "recieverfqapplication",
        //   iconType: "",
        //   icon: "",
        //   class: "ml-menu",
        //   groupTitle: false,
        //   badge: "",
        //   badgeClass: "",
        //   role: [""],
        //   privilege: ["Analyse Rfq Applications"],
        //   submenu: [],
        // },
        ],
    },
    //RFPs
    {
        path: "",
        title: "RFPs",
        moduleName: "RFPs",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All RFPs", "Manage RFPs"],
        submenu: [
            {
                path: "/erp-procurement/rfps/all-rfps",
                title: "All RFPs",
                moduleName: "RFPs",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All RFPs"],
                submenu: [],
            },
            {
                path: "/erp-procurement/rfps/manage-rfp",
                title: "Manage RFP",
                moduleName: "RFPs",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage RFPs"],
                submenu: [],
            },
        ],
    },
    //Recieve RFP Appications
    {
        path: "/erp-procurement/rfp-applications/analyse-rfp-applications",
        title: "Recieve RFP Applications",
        moduleName: "recieverfpapplication",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Rfp Applications", "Analyse Rfp Applications"],
        submenu: [
        // {
        //   path: "/erp-procurement/rfp-applications/all-rfp-appications",
        //   title: "All RFP Applications",
        //   moduleName: "recieverfpapplication",
        //   iconType: "",
        //   icon: "",
        //   class: "ml-menu",
        //   groupTitle: false,
        //   badge: "",
        //   badgeClass: "",
        //   role: [""],
        //   privilege: ["All Rfp Applications"],
        //   submenu: [],
        // },
        // {
        //   path: "/erp-procurement/rfp-applications/analyse-rfp-applications",
        //   title: "Analyse RFP Applications",
        //   moduleName: "recieverfpapplication",
        //   iconType: "",
        //   icon: "",
        //   class: "ml-menu",
        //   groupTitle: false,
        //   badge: "",
        //   badgeClass: "",
        //   role: [""],
        //   privilege: ["Analyse Rfp Applications"],
        //   submenu: [],
        // },
        ],
    },
    // {
    //   path: "",
    //   title: "RFP's Management",
    //   moduleName: "rfps",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["All RFPs", "Manage RFPs", "Approved RFPS"],
    //   submenu: [
    //     {
    //       path: "/erp-procurement/rfqs/all-rfqs",
    //       title: "All RFP's",
    //       moduleName: "rfps",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["All RFPs"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-procurement/rfps/manage-rfps",
    //       title: "Manage RFP's",
    //       moduleName: "lease",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Manage RFPs"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-procurement/rfps/approved-rfps",
    //       title: "Approved RFP's",
    //       moduleName: "lease",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Approved RFPS"],
    //       submenu: [],
    //     },
    //   ],
    // },
    //Purchase Order
    {
        path: "",
        title: "Purchase Order",
        moduleName: "requisition",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Requisitions", "Manage Requisitions"],
        submenu: [
            {
                path: "/erp-procurement/requisitions/all-requisitions",
                title: "All Purchase Orders",
                moduleName: "requisition",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Requisitions"],
                submenu: [],
            },
            {
                path: "/erp-procurement/requisitions/manage-requisitions",
                title: "Manage Purchase Order",
                moduleName: "requisition",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Requisitions"],
                submenu: [],
            },
        ],
    },
    // {
    //   path: "/erp-procurement/received/all-received-items",
    //   title: "Received Items",
    //   moduleName: "received-items",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["All Received Items"],
    //   submenu: [],
    // },
    // Add this Privileges kwa procurement:
    // Receive Purchase Order Items
    // Received Stocks
    // Received Fixed Assets
    // Received Expenses
    // Received Prepayments
    {
        path: "",
        title: "Received Items",
        moduleName: "received-items",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: [
            "Received Stocks",
            "Received Fixed Assets",
            "Received Expenses",
            "Received Prepayments",
        ],
        submenu: [
            {
                path: "/erp-procurement/received/received-stocks",
                title: "Stocks",
                moduleName: "received-items",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Received Stocks"],
                submenu: [],
            },
            {
                path: "/erp-procurement/received/received-fixed-assets",
                title: "Fixed Assets",
                moduleName: "received-items",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Received Fixed Assets"],
                submenu: [],
            },
            {
                path: "/erp-procurement/received/received-expenses",
                title: "Expenses",
                moduleName: "received-items",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Received Expenses"],
                submenu: [],
            },
            // {
            //   path: "/erp-procurement/received/received-prepayments",
            //   title: "Prepayments",
            //   moduleName: "received-items",
            //   iconType: "",
            //   icon: "",
            //   class: "ml-menu",
            //   groupTitle: false,
            //   badge: "",
            //   badgeClass: "",
            //   role: [""],
            //   privilege: ["Received Prepayments"],
            //   submenu: [],
            // },
        ],
    },
    {
        path: "",
        title: "Supplier Invoices",
        moduleName: "SupplierInvoices",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: [
            "All Supplier Invoices",
            "Manage Supplier Invoices",
            "Dashboard",
        ],
        submenu: [
            {
                path: "/erp-procurement/received/all-supplier-invoices",
                title: "All Supplier Invoices",
                moduleName: "SupplierInvoices",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Supplier Invoices", "Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-procurement/received/manage-supplier-invoice",
                title: "Manage Supplier Invoices",
                moduleName: "SupplierInvoices",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Supplier Invoices", "Dashboard"],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Customer Invoices",
        moduleName: "Receivables",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: [
            "All Customer Invoices",
            "Manage Customer Invoices",
            "Dashboard",
        ],
        submenu: [
            {
                path: "/erp-procurement/receivable/all-customer-invoices",
                title: "All Customer Invoices",
                moduleName: "Receivables",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Customer Invoices", "Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-procurement/receivable/manage-customer-invoices",
                title: "Manage Customer Invoices",
                moduleName: "Receivables",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Customer Invoices", "Dashboard"],
                submenu: [],
            },
        ],
    },
    // {
    //   path: "",
    //   title: "Customer Invoices",
    //   moduleName: "Receivables",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "",
    //   groupTitle: true,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["Dashboard","All Customer Invoices", "Manage Customer Invoices"],
    //   submenu: [
    //     {
    //       path: "/erp-procurement/receivable/all-customer-invoices",
    //       title: "All Customer Invoices",
    //       moduleName: "Receivables",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Manage Customer Invoices"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-procurement/receivable/manage-customer-invoices",
    //       title: "Manage Customer Invoices",
    //       moduleName: "Receivables",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Manage Customer Invoices"],
    //       submenu: [],
    //     },
    //   ],
    // },
    // {
    //   path: "/erp-procurement/reports/reports",
    //   title: "Reports",
    //   moduleName: "dashboard",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: ["All"],
    //   privilege: ["Dashboard"],
    //   submenu: [],
    // },
];
const FinanceModule = [
    //************************************************************************************************************************* */
    //FINANCE
    //************************************************************************************************************************* */
    {
        path: "",
        title: "MENUITEMS.MAIN.TEXT",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-finance/dashboard",
        title: "Dashboard",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "monitor",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "",
        title: "PARAMETER SETTINGS",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All Currencies", "Manage Currencies"],
        submenu: [],
    },
    {
        path: "",
        title: "Finance Elements",
        moduleName: "multilevel",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        privilege: ["Dashboard"],
        submenu: [
            // GL Accounts
            {
                path: "",
                title: "GL Accounts",
                moduleName: "GL's",
                iconType: "feather",
                icon: "grid",
                class: "ml-sub-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All GL-Accounts", "Manage GL-Accounts"],
                submenu: [
                    {
                        path: "/erp-finance/finance-parameters/all-GLs",
                        title: "All GL Accounts",
                        moduleName: "GL'S",
                        iconType: "",
                        icon: "",
                        class: "ml-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        privilege: ["All GL-Accounts"],
                        submenu: [],
                    },
                    {
                        path: "/erp-finance/finance-parameters/manage-GLs",
                        title: "Manage GL Accounts",
                        moduleName: "GL'S",
                        iconType: "",
                        icon: "",
                        class: "ml-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        privilege: ["Manage GL-Accounts"],
                        submenu: [],
                    },
                ],
            },
            {
                path: "/erp-finance/finance-parameters/manage-gl-mapping-for-accounting",
                title: "GL Mapping (Accounting)",
                moduleName: "gl-mapping",
                iconType: "feather",
                icon: "grid",
                class: "ml-sub-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            //Cost Centres
            {
                path: "",
                title: "Cost Centres",
                moduleName: "costcentres",
                iconType: "feather",
                icon: "grid",
                class: "ml-sub-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Costcenters", "Manage Costcenters"],
                submenu: [
                    {
                        path: "/erp-finance/finance-parameters/all-CCentres",
                        title: "All Cost Centres",
                        moduleName: "budgets",
                        iconType: "",
                        icon: "",
                        class: "ml-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        privilege: ["All Costcenters"],
                        submenu: [],
                    },
                    {
                        path: "/erp-finance/finance-parameters/manage-CCentres",
                        title: "Manage Cost Centres",
                        moduleName: "budgets",
                        iconType: "",
                        icon: "",
                        class: "ml-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        privilege: ["Manage Costcenters"],
                        submenu: [],
                    },
                ],
            },
            //Expenses
            {
                path: "",
                title: "Expenses",
                moduleName: "expenses",
                iconType: "feather",
                icon: "grid",
                class: "ml-sub-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Expenses", "Manage Expenses"],
                submenu: [
                    {
                        path: "/erp-finance/finance-parameters/all-expenses",
                        title: "All Expenses",
                        moduleName: "expenses",
                        iconType: "",
                        icon: "",
                        class: "ml-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        privilege: ["All Expenses"],
                        submenu: [],
                    },
                    {
                        path: "/erp-finance/finance-parameters/manage-expenses",
                        title: "Manage Expenses",
                        moduleName: "expenses",
                        iconType: "",
                        icon: "",
                        class: "ml-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        privilege: ["Manage Expenses"],
                        submenu: [],
                    },
                ],
            },
            // Currency Management
            {
                path: "",
                title: "Currencies",
                moduleName: "currencies",
                iconType: "feather",
                icon: "grid",
                class: "ml-sub-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Currencies"],
                submenu: [
                    {
                        path: "/erp-finance/finance-parameters/all-currency",
                        title: "All Currencies",
                        moduleName: "currency-management",
                        iconType: "",
                        icon: "",
                        class: "ml-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        privilege: ["All Currencies", "Manage Currencies"],
                        submenu: [],
                    },
                    {
                        path: "/erp-finance/finance-parameters/manage-currency",
                        title: "Manage Currencies",
                        moduleName: "currency-management",
                        iconType: "",
                        icon: "",
                        class: "ml-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        privilege: ["Manage Currencies"],
                        submenu: [],
                    },
                ],
            },
            //All taxes
            {
                path: "",
                title: "Taxes",
                moduleName: "tax",
                iconType: "feather",
                icon: "grid",
                class: "ml-sub-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Taxes", "Manage Taxes"],
                submenu: [
                    {
                        path: "/erp-finance/finance-parameters/all-taxes",
                        title: "All Taxes",
                        moduleName: "tax",
                        iconType: "",
                        icon: "",
                        class: "ml-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        privilege: ["All Taxes"],
                        submenu: [],
                    },
                    {
                        path: "/erp-finance/finance-parameters/manage-taxes",
                        title: "Manage Taxes",
                        moduleName: "tax",
                        iconType: "",
                        icon: "",
                        class: "ml-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        privilege: ["Manage Taxes"],
                        submenu: [],
                    },
                ],
            },
            //Approval Limits
            {
                path: "/erp-finance/finance-parameters/all-approval-limits",
                title: "Approval Limits",
                moduleName: "approval-limits",
                iconType: "feather",
                icon: "grid",
                class: "",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: [
                    "All Approval Limits",
                    "Manage Approval Limits",
                    "Dashboard",
                ],
                submenu: [
                // {
                //   path: "/erp-finance/finance-parameters/all-approval-limits",
                //   title: "All Approval Limits",
                //   moduleName: "tax",
                //   iconType: "",
                //   icon: "",
                //   class: "ml-menu",
                //   groupTitle: false,
                //   badge: "",
                //   badgeClass: "",
                //   role: [""],
                //   privilege: ["All Approval Limits", "Dashboard"],
                //   submenu: [],
                // },
                // {
                //   path: "/erp-finance/finance-parameters/manage-approval-limits",
                //   title: "Manage Approval Limits",
                //   moduleName: "tax",
                //   iconType: "",
                //   icon: "",
                //   class: "ml-menu",
                //   groupTitle: false,
                //   badge: "",
                //   badgeClass: "",
                //   role: [""],
                //   privilege: ["Manage Approval Limits", "Dashboard"],
                //   submenu: [],
                // },
                ],
            },
        ],
    },
    //payment Methods
    // {
    //   path: "",
    //   title: "Payment Methods",
    //   moduleName: "payment",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["All Customers", "Manage Customers"],
    //   submenu: [
    //     {
    //       path: "/erp-finance/finance-parameters/all-PaymentMethods",
    //       title: "All Payment Methods",
    //       moduleName: "currency-management",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["All Customers"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-finance/finance-parameters/manage-PaymentMethods",
    //       title: "Manage Payment Methods",
    //       moduleName: "payment-management",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Manage Customers"],
    //       submenu: [],
    //     },
    //   ],
    // },
    // Customer Types
    // {
    //   path: "",
    //   title: "Customer Types",
    //   moduleName: "customer-types",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["All Customers", "Manage Customers"],
    //   submenu: [
    //   ],
    // },
    //  Customer Management
    {
        path: "",
        title: "Customer Management",
        moduleName: "customers",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Customers", "Manage Customers"],
        submenu: [
            {
                path: "/erp-finance/finance-parameters/all-CustomerTypes",
                title: "Customer Types",
                moduleName: "customers",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Customers"],
                submenu: [],
            },
            {
                path: "/erp-finance/finance-parameters/manage-CustomerTypes",
                title: "Manage Types",
                moduleName: "customers",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Customers"],
                submenu: [],
            },
            {
                path: "/erp-finance/finance-management/all-customers",
                title: "All Customers",
                moduleName: "customers",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Customers"],
                submenu: [],
            },
            {
                path: "/erp-finance/finance-management/manage-customers",
                title: "Manage Customer",
                moduleName: "customers",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Customers"],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Finance Sub-modules",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    // SUBMODULES
    {
        path: "/erp-finance/finance-management/all-imprests",
        title: "Imprest Management",
        moduleName: "imprest-management",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Imprest", "Manage Imprest", "Imprest Validation"],
        submenu: [
        // {
        //   path: "/erp-finance/finance-management/all-imprests",
        //   title: "All Imprests",
        //   moduleName: "imprest-management",
        //   iconType: "",
        //   icon: "",
        //   class: "ml-menu",
        //   groupTitle: false,
        //   badge: "",
        //   badgeClass: "",
        //   role: [""],
        //   privilege: ["All Imprest"],
        //   submenu: [],
        // },
        ],
    },
    // SUBMODULES
    // Supplier Invoices
    {
        path: "/erp-finance/finance-management/allSupplierInvoices",
        title: "Supplier Invoices",
        moduleName: "Account-Payable",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Supplier Invoices", "Manage Supplier Invoices"],
        submenu: [
        // {
        //   path: "/erp-finance/finance-management/allSupplierInvoices",
        //   title: "All Supplier Invoices",
        //   moduleName: "Finance-management",
        //   iconType: "",
        //   icon: "",
        //   class: "ml-menu",
        //   groupTitle: false,
        //   badge: "",
        //   badgeClass: "",
        //   role: [""],
        //   privilege: ["All Supplier Invoices"],
        //   submenu: [],
        // },
        // {
        //   path: "/erp-finance/finance-management/manageSupplierInvoices",
        //   title: "Manage Supplier Invoices",
        //   moduleName: "Finance-management",
        //   iconType: "",
        //   icon: "",
        //   class: "ml-menu",
        //   groupTitle: false,
        //   badge: "",
        //   badgeClass: "",
        //   role: [""],
        //   privilege: ["Manage Supplier Invoices"],
        //   submenu: [],
        // },
        ],
    },
    // Payable Payments
    {
        path: "",
        title: "Payable Payment",
        moduleName: "Accounts-Payable",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Accounts Payable", "Manage Accounts Payable"],
        submenu: [
            {
                path: "/erp-finance/finance-management/allAccountsPayable",
                title: "All Payable Payments",
                moduleName: "Finance-management",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Accounts Payable"],
                submenu: [],
            },
            {
                path: "/erp-finance/finance-management/manageAccountsPayable",
                title: "Manage Payable Payment",
                moduleName: "Finance-management",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Accounts Payable"],
                submenu: [],
            },
        ],
    },
    //Sub-Module (Accounts Receivables)
    //Customer invoices
    {
        path: "",
        title: "Customer Invoices",
        moduleName: "customer-invoices",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Customer Invoices", "Manage Customer Invoices"],
        submenu: [
            {
                path: "/erp-finance/finance-management/all-cusInvoices",
                title: "All Customer Invoices",
                moduleName: "Finance-management",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Customer Invoices"],
                submenu: [],
            },
            {
                path: "/erp-finance/finance-management/manage-cusInvoices",
                title: "Manage Customer Invoices",
                moduleName: "Finance-management",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Customer Invoices"],
                submenu: [],
            },
        ],
    },
    // Receivable Payments
    // {
    //   path: "",
    //   title: "Receivable Payments",
    //   moduleName: "Account-Receivable",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["All Receivable Payments", "Manage Receivable Payments"],
    //   submenu: [
    //     {
    //       path: "/erp-finance/finance-management/all-recPayments",
    //       title: "All Receivable Payments",
    //       moduleName: "Finance-management",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["All Receivable Payments"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-finance/finance-management/manage-recPayments",
    //       title: "Manage Receivable Payments",
    //       moduleName: "Finance-management",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Manage Receivable Payments"],
    //       submenu: [],
    //     },
    //   ],
    // },
    {
        path: "",
        title: "Salary Management",
        moduleName: "salaries",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Salaries", "Manage Salaries", "Salary Validation"],
        submenu: [
            {
                path: "/erp-finance/finance-management/all-salaries",
                title: "All Salaries",
                moduleName: "salaries",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Salaries"],
                submenu: [],
            },
            {
                path: "/erp-finance/finance-management/salary-analytics",
                title: "Salary Analytics",
                moduleName: "salaries",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Salaries"],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Transactions",
        moduleName: "Transactions",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: [
            "All Transactions",
            "Manage Transaction",
            "All System Transactions",
            "View System Transactions",
            "Validate System Transactions",
            "Delete System Transactions",
        ],
        submenu: [
            {
                path: "/erp-finance/finance-management/all-journals",
                title: "System Journals",
                moduleName: "Transactions",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Transactions"],
                submenu: [],
            },
            {
                path: "/erp-finance/finance-management/all-system-transactions",
                title: "System Transactions",
                moduleName: "Transactions",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: [
                    "All Transactions",
                    "Manage Transaction",
                    "All System Transactions",
                    "View System Transactions",
                    "Validate System Transactions",
                    "Delete System Transactions",
                ],
                submenu: [],
            },
        ],
    },
    // {
    //   path: "/erp-finance/finance-management/system-reports",
    //   title: "Reports",
    //   moduleName: "dashboard",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: ["All"],
    //   privilege: ["Dashboard"],
    //   submenu: [],
    // },
    {
        path: "/erp-finance/finance-management/core-synchronization",
        title: "Core Synchronization",
        moduleName: "synchronization",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
];
const FixedAssetsModule = [
    {
        path: "",
        title: "MENUITEMS.MAIN.TEXT",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-fixed-assets/dashboard",
        title: "Dashboard",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "monitor",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    // Parameters
    {
        path: "",
        title: "PARAMETER SETTINGS",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "",
        title: "Asset Categories",
        moduleName: "inventory-parameters",
        iconType: "feather",
        icon: "list",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [
            {
                path: "/erp-fixed-assets/fixed-assets-parameters/assets-categories",
                title: "All Categories",
                moduleName: "fixed-assets-parameters",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-fixed-assets/fixed-assets-parameters/manage-assets-categories",
                title: "Manage Categories",
                moduleName: "fixed-assets-parameters",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Asset Catalogue",
        moduleName: "fixed-assets-parameter",
        iconType: "feather",
        icon: "list",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Dashboard"],
        submenu: [
            {
                path: "/erp-fixed-assets/fixed-assets-parameters/all-asset-catalogues",
                title: "Catalogue Items",
                moduleName: "fixed-assets-parameters",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
            {
                path: "/erp-fixed-assets/fixed-assets-parameters/manage-asset-catalogue",
                title: "Manage Catalogue",
                moduleName: "fixed-assets-parameters",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Dashboard"],
                submenu: [],
            },
        ],
    },
    // {
    //   path: "all-asset-catalogues",
    //   component: AllAssetCatalogueComponent,
    //   canActivate: [RoutePrivilegeGuard],
    //   data: { clientName: "FixedAssetsModule", requiredPrivilege: ["Dashboard"] },
    // },
    // {
    //   path: "manage-asset-catalogue",
    //   component: AssetCatalogueComponent,
    //   canActivate: [RoutePrivilegeGuard],
    //   data: { clientName: "FixedAssetsModule", requiredPrivilege: ["Dashboard"] },
    // },
    //Sub Modules
    {
        path: "",
        title: "Fixed Assets Sub-modules",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        // privilege: ["All Fixed Assets", "Manage Fixed Assets"],
        submenu: [],
    },
    //**************************************************************************************************** */
    {
        path: "/erp-fixed-assets/fixed-assets-management/assets-received",
        title: "Received Assets",
        moduleName: "fixed-assets-management",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        // privilege: ["All Fixed Assets", "Manage Fixed Assets"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-fixed-assets/fixed-assets-management/assets-record",
        title: "All Fixed Assets",
        moduleName: "fixed-assets-management",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        // privilege: ["All Fixed Assets", "Manage Fixed Assets"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-fixed-assets/fixed-assets-management/assets-register",
        title: "Manage Fixed Assets",
        moduleName: "fixed-assets-management",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        // privilege: ["All Fixed Assets", "Manage Fixed Assets"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    // {
    //   path: "/erp-fixed-assets/fixed-assets-management/add-asset",
    //   title: "Add Fixed Assets",
    //   moduleName: "fixed-assets-management",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   // privilege: ["All Fixed Assets", "Manage Fixed Assets"],
    //   privilege: ["Dashboard"],
    //   submenu: [
    //   ],
    // },
    // {
    //   path: "/erp-fixed-assets/fixed-assets-management/accounting",
    //   title: "Accounting",
    //   moduleName: "fixed-assets-management",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   // privilege: ["All Fixed Assets", "Manage Fixed Assets"],
    //   privilege: ["Dashboard"],
    //   submenu: [
    //   ],
    // },
    //Fixed assets management
    // {
    //   path: "",
    //   title: "Fixed Assets Management",
    //   moduleName: "fixed-assets-management",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   // privilege: ["All Fixed Assets", "Manage Fixed Assets"],
    //   privilege: ["Dashboard"],
    //   submenu: [
    //     {
    //       path: "/erp-fixed-assets/fixed-assets-management/assets-record",
    //       title: "All Fixed Assets",
    //       moduleName: "fixed-assets-management",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       // privilege: ["All Fixed Assets"],
    //       privilege: ["Dashboard"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-fixed-assets/fixed-assets-management/assets-register",
    //       title: "Manage Fixed Assets",
    //       moduleName: "fixed-assets-management",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       // privilege: ["Manage Fixed Assets"],
    //       privilege: ["Dashboard"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-fixed-assets/fixed-assets-management/add-asset",
    //       title: "Add Fixed Assets",
    //       moduleName: "fixed-assets-management",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       // privilege: ["Manage Fixed Assets"],
    //       privilege: ["Dashboard"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-fixed-assets/fixed-assets-management/accounting",
    //       title: "Accounting",
    //       moduleName: "fixed-assets-management",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       // privilege: ["Manage Fixed Assets"],
    //       privilege: ["Dashboard"],
    //       submenu: [],
    //     },
    //   ],
    // },
];
const ImprestModule = [
    {
        path: "",
        title: "MENUITEMS.MAIN.TEXT",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    //Dashboard
    {
        path: "/erp-imprest/dashboard",
        title: "Dashboard",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "monitor",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    //Sub Modules
    {
        path: "",
        title: "Imprest Sub-modules",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All Imprest", "Manage Imprest"],
        submenu: [],
    },
    {
        path: "/erp-imprest/imprest-management/all-imprest",
        title: "My Imprests",
        moduleName: "Imprest-Management",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All Imprest", "Manage Imprest"],
        submenu: [],
    },
    {
        path: "/erp-imprest/imprest-management/manage-imprest",
        title: "Imprest Management",
        moduleName: "Imprest-Management",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All Imprest", "Manage Imprest"],
        submenu: [],
    },
    //imprest management
    // {
    //   path: "",
    //   title: "Imprest Management",
    //   moduleName: "imprest-management",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["All Imprest", "Manage Imprest"],
    //   submenu: [
    //     {
    //       path: "/erp-imprest/imprest-management/all-imprest",
    //       title: "All Imprest",
    //       moduleName: "imprest-management",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["All Imprest"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-imprest/imprest-management/manage-imprest",
    //       title: "Manage Imprest",
    //       moduleName: "imprest-management",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Manage Imprest"],
    //       submenu: [],
    //     },
    //   ],
    // },
];
const BudgetModule = [
    //************************************************************************************************************************* */
    //BUDGET
    //************************************************************************************************************************* */
    {
        path: "",
        title: "MENUITEMS.MAIN.TEXT",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-budget/dashboard",
        title: "Dashboard",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "monitor",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    //Budget
    // {
    //   path: "",
    //   title: "Budget",
    //   moduleName: "budget",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["All Budgets", "Manage Budgets"],
    //   submenu: [
    //     {
    //       path: "/erp-budget/budget/all-budgets",
    //       title: "All Budgets",
    //       moduleName: "budgets",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["All Budgets"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-budget/budget/manage-budgets",
    //       title: "Manage Budgets",
    //       moduleName: "lease",
    //       iconType: "",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Manage Budgets"],
    //       submenu: [],
    //     },
    //   ],
    // },
    {
        path: "",
        title: "Budget Sub-modules",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All Budgets", "Manage Budgets"],
        submenu: [],
    },
    {
        path: "/erp-budget/budget/all-budgets",
        title: "All Budgets",
        moduleName: "Budget-Management",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All Budgets"],
        submenu: [],
    },
    {
        path: "/erp-budget/budget/manage-budgets",
        title: "Budget Management",
        moduleName: "Budget-Management",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Manage Budgets"],
        submenu: [],
    },
    {
        path: "/erp-budget/budget/budget-reports",
        title: "Budget Reports",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
];
const SuppliersManagementModule = [
    //Dashboard
    {
        path: "/erp-suppliers-management/dashboard",
        title: "Dashboard",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "monitor",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    //Parameters
    {
        path: "",
        title: "PARAMETER SETTINGS",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All Suppliers Categories", "Manage Supplier Category"],
        submenu: [],
    },
    // Supplier Categories
    {
        path: "",
        title: "Supplier Categories",
        moduleName: "supplier-categories",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Suppliers Categories", "Manage Supplier Category"],
        submenu: [
            {
                path: "/erp-suppliers-management/supplier-parameters/all-supplier-categories",
                title: "All Supplier Categories",
                moduleName: "supplier-categories",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Suppliers Categories"],
                submenu: [],
            },
            {
                path: "/erp-suppliers-management/supplier-parameters/manage-supplier-category",
                title: "Manage Supplier Category",
                moduleName: "supplier-categories",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Supplier Category"],
                submenu: [],
            },
        ],
    },
    //Sub modules
    {
        path: "",
        title: "Management Sub-modules",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All Suppliers", "Manage Suppliers"],
        submenu: [],
    },
    //Suppliers management
    {
        path: "",
        title: "Suppliers Management",
        moduleName: "suppliers-maintenance",
        iconType: "feather",
        icon: "database",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Suppliers", "Manage Suppliers"],
        submenu: [
            {
                path: "/erp-suppliers-management/suppliers-maintenance/all-suppliers",
                title: "All Suppliers",
                moduleName: "suppliers-maintenance",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Suppliers"],
                submenu: [],
            },
            {
                path: "/erp-suppliers-management/suppliers-maintenance/manage-supplier",
                title: "Manage Supplier",
                moduleName: "suppliers-maintenance",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Supplier"],
                submenu: [],
            },
        ],
    },
    //Supplier Profiles
    {
        path: "/erp-suppliers-management/supplier-profiles/all",
        title: "Company Profiles",
        moduleName: "supplier-profile-maintenance",
        iconType: "feather",
        icon: "database",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Supplier Profiles", "Manage Supplier Profile"],
        submenu: [],
    },
];
const PrepaymentModule = [
    //************************************************************************************************************************* */
    //PREPAYMENTS MODULE
    //************************************************************************************************************************* */
    {
        path: "",
        title: "MENUITEMS.MAIN.TEXT",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-prepayment/dashboard",
        title: "Dashboard",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "monitor",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "",
        title: "Prepayments Management",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All Prepayments", "Manage Prepayment"],
        submenu: [],
    },
    {
        path: "",
        title: "Prepayments",
        moduleName: "prepayments",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Prepayments", "Manage Prepayment"],
        submenu: [
            {
                path: "/erp-prepayment/prepayments/all-prepayments",
                title: "All Prepayments",
                moduleName: "prepayments",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Prepayments"],
                submenu: [],
            },
            {
                path: "/erp-prepayment/prepayments/manage-prepayment",
                title: "Manage Prepayment",
                moduleName: "prepayments",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Prepayment"],
                submenu: [],
            },
        ],
    },
];
const InventoryModule = [
    //************************************************************************************************************************* */
    //PREPAYMENTS MODULE
    //************************************************************************************************************************* */
    {
        path: "",
        title: "MENUITEMS.MAIN.TEXT",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "/erp-inventory/dashboard",
        title: "Dashboard",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "monitor",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["Dashboard"],
        submenu: [],
    },
    {
        path: "",
        title: "PARAMETER SETTINGS",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All Units", "Manage Units"],
        submenu: [],
    },
    //units of measure
    {
        path: "",
        title: "Units of Measure",
        moduleName: "inventory-paraeters",
        iconType: "feather",
        icon: "list",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Units", "Manage Units"],
        submenu: [
            {
                path: "/erp-inventory/inventory-parameters/all-UnitOfMeasure",
                title: "All Units",
                moduleName: "inventory-paraeters",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Units"],
                submenu: [],
            },
            {
                path: "/erp-inventory/inventory-parameters/manage-UnitOfMeasure",
                title: "Manage Units",
                moduleName: "inventory-paraeters",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Units"],
                submenu: [],
            },
        ],
    },
    //item categories
    {
        path: "",
        title: "Item Categories",
        moduleName: "inventory-parameters",
        iconType: "feather",
        icon: "list",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Item Categories", "Manage Item Categories"],
        submenu: [
            {
                path: "/erp-inventory/inventory-parameters/all-itemcat",
                title: "All categories",
                moduleName: "inventory-parameters",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Item Categories"],
                submenu: [],
            },
            {
                path: "/erp-inventory/inventory-parameters/manage-itemcat",
                title: "Manage Category",
                moduleName: "inventory-parameters",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Item Categories"],
                submenu: [],
            },
        ],
    },
    //master catalogue
    {
        path: "",
        title: "Master Catalogue",
        moduleName: "inventory-parmeters",
        iconType: "feather",
        icon: "list",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Catalogue", "Manage Catalogue"],
        submenu: [
            {
                path: "/erp-inventory/inventory-parameters/all-catalogue",
                title: "All Catalogue",
                moduleName: "inventory-parmeters",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Catalogue"],
                submenu: [],
            },
            {
                path: "/erp-inventory/inventory-parameters/manage-catalogue",
                title: "Manage Catalogue",
                moduleName: "inventory-parmeters",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Catalogue"],
                submenu: [],
            },
        ],
    },
    //Main Store Management
    {
        path: "",
        title: "Main Store Management",
        moduleName: "inventory-params",
        iconType: "feather",
        icon: "list",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Main Stores", "Manage Main Stores"],
        submenu: [
            {
                path: "/erp-inventory/inventory-parameters/all-mainstores",
                title: "All Main Stores",
                moduleName: "inventory-params",
                iconType: "",
                icon: "grid",
                class: "mat-menu-item",
                groupTitle: true,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Main Stores"],
                submenu: [],
            },
            {
                path: "/erp-inventory/inventory-parameters/manage-mainstores",
                title: "Manage Main Stores",
                moduleName: "mainstores",
                iconType: "matArrowRightRound",
                icon: "",
                class: "matArrowRightRound",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Main Stores"],
                submenu: [],
            },
        ],
    },
    //Branchstores
    // {
    //   path: "",
    //   title: "Branch Stores Management",
    //   moduleName: "inventory-parameter",
    //   iconType: "feather",
    //   icon: "list",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["All Branch Stores", "Manage Branch Stores", ,],
    //   submenu: [
    //     {
    //       path: "/erp-inventory/inventory-parameters/all-branchstores",
    //       title: "All Branch Stores",
    //       moduleName: "inventory-parameter",
    //       iconType: "",
    //       icon: "grid",
    //       class: "mat-menu-item",
    //       groupTitle: true,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["All Branch Stores"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-inventory/inventory-parameters/manage-branchstores",
    //       title: "Manage Branch Stores",
    //       moduleName: "inventory-mangement",
    //       iconType: "",
    //       icon: "",
    //       class: "matArrowRightRound",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Manage Branch Stores"],
    //       submenu: [],
    //     },
    //   ],
    // },
    //Branch Stores ROLS   Manage Branch ROLS
    // {
    //   path: "",
    //   title: "Branch Store ROLs",
    //   moduleName: "inventory-parmeter",
    //   iconType: "feather",
    //   icon: "list",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["All Branch ROLS", "Manage Branch ROLS"],
    //   submenu: [
    //     {
    //       path: "/erp-inventory/inventory-parameters/all-rols",
    //       title: "All Branch ROLs",
    //       moduleName: "inventory-parameter",
    //       iconType: "",
    //       icon: "grid",
    //       class: "mat-menu-item",
    //       groupTitle: true,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["All Branch Stores"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-inventory/inventory-parameters/manage-rols",
    //       title: "Manage Branch ROLs",
    //       moduleName: "inventory-mangement",
    //       iconType: "",
    //       icon: "",
    //       class: "matArrowRightRound",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Manage Branch Stores"],
    //       submenu: [],
    //     },
    //   ],
    // },
    {
        path: "",
        title: "Inventory Sub-Modules",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        privilege: ["All Catalogue", "Manage Catalogue"],
        submenu: [],
    },
    //Main Store Items Management
    {
        path: "",
        title: "Main Store Items",
        moduleName: "inventory-management",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["All Stock", "Manage Stock"],
        submenu: [
            {
                path: "/erp-inventory/inventory/all-stock",
                title: "All Items",
                moduleName: "inventory-management",
                iconType: "",
                icon: "grid",
                class: "mat-menu-item",
                groupTitle: true,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["All Stock"],
                submenu: [],
            },
            {
                path: "/erp-inventory/inventory/manage-stock",
                title: "Manage Items",
                moduleName: "inventory-management",
                iconType: "matArrowRightRound",
                icon: "",
                class: "matArrowRightRound",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                privilege: ["Manage Stock"],
                submenu: [],
            },
        ],
    },
    //Branch Items Management
    // {
    //   path: "",
    //   title: "Branch Store Items",
    //   moduleName: "invenory-management",
    //   iconType: "feather",
    //   icon: "grid",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   privilege: ["All Branch Stock", "Manage Branch Stock"],
    //   submenu: [
    //     {
    //       path: "/erp-inventory/inventory/all-branchItems",
    //       title: "All Branch Items",
    //       moduleName: "inventory-management",
    //       iconType: "",
    //       icon: "grid",
    //       class: "mat-menu-item",
    //       groupTitle: true,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["All Branch Stock"],
    //       submenu: [],
    //     },
    //     {
    //       path: "/erp-inventory/inventory/manage-branchItems",
    //       title: "Manage Branch Items",
    //       moduleName: "invenory-management",
    //       iconType: "matArrowRightRound",
    //       icon: "",
    //       class: "matArrowRightRound",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: [""],
    //       privilege: ["Manage Branch Stock"],
    //       submenu: [],
    //     },
    //   ],
    // },
    //request items
    {
        path: "/erp-inventory/inventory/request-stock-directly",
        title: "Manage Requisition",
        moduleName: "inventory-managmnt",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["Request Stock Main", "Request Stock Branch"],
        submenu: [],
    },
    //view requisitions
    {
        path: "/erp-inventory/inventory/view-user-direct-requisition",
        title: "All Requisitions",
        moduleName: "inventoy-managmnt",
        iconType: "feather",
        icon: "grid",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        privilege: ["View Branch Requisitions", "View User Requisitions"],
        submenu: [],
    },
];


/***/ }),

/***/ 20129:
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _sidebar_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-items */ 39617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-procurement/data/services/notification.service */ 67879);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-feather */ 55810);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);












function SidebarComponent_li_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, sidebarItem_r1.title));
} }
const _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_13_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, sidebarItem_r1.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](sidebarItem_r1.badge);
} }
function SidebarComponent_li_13_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_13_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.callLevel1Toggle($event, sidebarItem_r1.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i-feather", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_13_a_2_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", sidebarItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, sidebarItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, sidebarItem_r1.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", sidebarItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, sidebarItem_r1.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", sidebarItem_r1.badge != "");
} }
function SidebarComponent_li_13_ul_3_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 25)(1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_13_ul_3_li_1_ul_4_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const sidebarSubsubItem_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5); return ctx_r17.callLevel3Toggle($event, sidebarSubsubItem_r16.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarSubsubItem_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r15.level3Menu === sidebarSubsubItem_r16.moduleName ? "activeSubSub" : "")("routerLinkActive", sidebarSubsubItem_r16.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", sidebarSubsubItem_r16.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, sidebarSubsubItem_r16.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, sidebarSubsubItem_r16.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, sidebarSubsubItem_r16.title), " ");
} }
function SidebarComponent_li_13_ul_3_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_ul_4_li_1_Template, 4, 11, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", sidebarSubItem_r13.submenu);
} }
function SidebarComponent_li_13_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 25)(1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_13_ul_3_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const sidebarSubItem_r13 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r20.callLevel2Toggle($event, sidebarSubItem_r13.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_ul_3_li_1_ul_4_Template, 2, 1, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r12.level2Menu === sidebarSubItem_r13.moduleName ? "activeSub" : "")("routerLinkActive", sidebarSubItem_r13.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", sidebarSubItem_r13.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, sidebarSubItem_r13.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, sidebarSubItem_r13.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 6, sidebarSubItem_r13.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", sidebarSubItem_r13.submenu.length > 0);
} }
function SidebarComponent_li_13_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_Template, 5, 12, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", sidebarItem_r1.submenu);
} }
function SidebarComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_13_div_1_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_li_13_a_2_Template, 6, 11, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_li_13_ul_3_Template, 2, 1, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r0.level1Menu === sidebarItem_r1.moduleName && sidebarItem_r1.submenu.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActive", sidebarItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", sidebarItem_r1.groupTitle === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !sidebarItem_r1.groupTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", sidebarItem_r1.submenu.length > 0);
} }
const _c1 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
class SidebarComponent {
    // private myPrivileges = privileges;
    constructor(document, renderer, elementRef, authService, 
    // private tokenStorageService: TokenStorageService,
    tokenCookieService, router, notificationService) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.authService = authService;
        this.tokenCookieService = tokenCookieService;
        this.router = router;
        this.notificationService = notificationService;
        this.level1Menu = "";
        this.level2Menu = "";
        this.level3Menu = "";
        this.headerHeight = 60;
        this.routerObj = null;
        this.userName = "";
        this.userRole = "";
        this.privileges = [];
        this.profileImage = null;
        this.currentUser = this.tokenCookieService.getUser();
        this.getProfileImage();
        const body = this.elementRef.nativeElement.closest("body");
        this.routerObj = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                // logic for select active menu in dropdown
                const role = ["ROLE_ADMIN", "ROLE_CLERK"];
                const currenturl = event.url.split("?")[0];
                const firstString = currenturl.split("/").slice(1)[0];
                if (role.indexOf(firstString) !== -1) {
                    this.level1Menu = event.url.split("/")[2];
                    this.level2Menu = event.url.split("/")[3];
                }
                else {
                    this.level1Menu = event.url.split("/")[1];
                    this.level2Menu = event.url.split("/")[2];
                }
                // close sidebar on mobile screen after menu select
                this.renderer.removeClass(this.document.body, "overlay-open");
            }
        });
    }
    windowResizecall(event) {
        this.setMenuHeight();
        this.checkStatuForResize(false);
    }
    onGlobalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.document.body, "overlay-open");
        }
    }
    callLevel1Toggle(event, element) {
        if (element === this.level1Menu) {
            this.level1Menu = "0";
        }
        else {
            this.level1Menu = element;
        }
        const hasClass = event.target.classList.contains("toggled");
        if (hasClass) {
            this.renderer.removeClass(event.target, "toggled");
        }
        else {
            this.renderer.addClass(event.target, "toggled");
        }
    }
    callLevel2Toggle(event, element) {
        if (element === this.level2Menu) {
            this.level2Menu = "0";
        }
        else {
            this.level2Menu = element;
        }
    }
    callLevel3Toggle(event, element) {
        if (element === this.level3Menu) {
            this.level3Menu = "0";
        }
        else {
            this.level3Menu = element;
        }
    }
    ngOnInit() {
        // const role = this.currentUser.roles[0];
        if (this.currentUser) {
            console.log("this.currentUser:::: ", this.currentUser);
            this.userName = this.currentUser.username;
            this.userRole = this.currentUser.role.name;
            // const userRole = this.currentUser.roles[0];
            this.userFullName = this.currentUser.username;
            this.userImg = "assets/images/user/profile_img.png";
            console.log("this.currentUser : ", this.currentUser);
            const userId = this.currentUser.id;
            const module = JSON.parse(localStorage.getItem(`selectedModule_${userId}`) || "{}");
            if (module) {
                console.log("this.module : ", module);
                if (module === "EmployeeSelfServiceModule") {
                    this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.HumanResourceSelfServiceModule;
                }
                else {
                    const selectedModule = this.currentUser.role.clients.find((client) => client.name === module);
                    console.log("this.selectedModule : ", selectedModule);
                    if (selectedModule) {
                        const moduleMapping = {
                            AdminModule: _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.AdminModule,
                            ProcurementModule: _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.ProcurementModule,
                            HumanResourceModule: _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.HumanResourceModule,
                            EmployeeSelfServiceModule: _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.HumanResourceSelfServiceModule,
                            FinanceModule: _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.FinanceModule,
                            FixedAssetsModule: _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.FixedAssetsModule,
                            SuppliersManagementModule: _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.SuppliersManagementModule,
                            BudgetModule: _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.BudgetModule,
                            ImprestModule: _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.ImprestModule,
                            PrepaymentModule: _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.PrepaymentModule,
                            InventoryModule: _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.InventoryModule,
                        };
                        if (module in moduleMapping) {
                            const modulePrivileges = selectedModule.privileges;
                            this.sidebarItems = moduleMapping[module].filter((route) => {
                                const isRouteVisible = route.privilege.some((privilege) => modulePrivileges.includes(privilege));
                                if (!isRouteVisible) {
                                    return false;
                                }
                                if (route.submenu.length === 0) {
                                    return true;
                                }
                                route.submenu = route.submenu.filter((submenu) => submenu.privilege.some((privilege) => modulePrivileges.includes(privilege)));
                                return route.submenu.length > 0;
                            });
                        }
                        else {
                            this.notificationService.alertWarning("No sidebar items available for this module...!!");
                        }
                    }
                    else {
                        this.notificationService.alertWarning("Invalid module selected...!!");
                    }
                }
            }
        }
        // if (this.currentUser) {
        //   console.log("this.currentUser:::: ", this.currentUser);
        //   this.userName = this.currentUser.username;
        //   this.userRole = this.currentUser.role.name;
        //   // const userRole = this.currentUser.roles[0];
        //   this.userFullName = this.currentUser.username;
        //   this.userImg = "assets/images/user/profile_img.png";
        //   console.log("this.currentUser : ", this.currentUser);
        //   // const userId = this.currentUser.id;
        //   // const module = JSON.parse(localStorage.getItem(`selectedModule_${userId}`) || '{}');
        //   // const myPrivileges = JSON.parse(localStorage.getItem(`userPrivileges_${userId}`) || '{}');
        //   const userId = this.currentUser.id;
        //   const module = JSON.parse(
        //     localStorage.getItem(`selectedModule_${userId}`) || "{}"
        //   );
        //   const myPrivileges = JSON.parse(
        //     localStorage.getItem(`userPrivileges_${userId}`) || "{}"
        //   );
        //   console.log("module ::: ", module);
        //   console.log("myPrivileges :::: ", myPrivileges);
        //   const moduleMapping = {
        //     AdminModule: AdminModule,
        //     ProcurementModule: ProcurementModule,
        //     HumanResourceModule: HumanResourceModule,
        //     FinanceModule: FinanceModule,
        //     FixedAssetsModule: FixedAssetsModule,
        //     SuppliersManagementModule: SuppliersManagementModule,
        //     BudgetModule: BudgetModule,
        //     ImprestModule: ImprestModule,
        //     PrepaymentModule: PrepaymentModule,
        //     InventoryModule: InventoryModule,
        //   };
        //   if (module in moduleMapping) {
        //     this.sidebarItems = moduleMapping[module].filter((route) => {
        //       const isRouteVisible = route.privilege.some((privilege) =>
        //         myPrivileges.includes(privilege)
        //       );
        //       if (!isRouteVisible) {
        //         return false;
        //       }
        //       if (route.submenu.length === 0) {
        //         return true;
        //       }
        //       route.submenu = route.submenu.filter((submenu) =>
        //         submenu.privilege.some((privilege) =>
        //           myPrivileges.includes(privilege)
        //         )
        //       );
        //       return route.submenu.length > 0;
        //     });
        //     console.log("myPrivileges: ", myPrivileges);
        //   } else {
        //     this.notificationService.alertWarning(
        //       "No sidebar items available for this module...!!"
        //     );
        //   }
        // }
        // this.sidebarItems = ROUTES.filter((sidebarItem) => sidebarItem);
        this.initLeftSidebar();
        this.bodyTag = this.document.body;
    }
    ngOnDestroy() {
        this.routerObj.unsubscribe();
    }
    initLeftSidebar() {
        const _this = this;
        // Set menu height
        _this.setMenuHeight();
        _this.checkStatuForResize(true);
    }
    setMenuHeight() {
        this.innerHeight = window.innerHeight;
        const height = this.innerHeight - this.headerHeight;
        this.listMaxHeight = height + "";
        this.listMaxWidth = "500px";
    }
    isOpen() {
        return this.bodyTag.classList.contains("overlay-open");
    }
    checkStatuForResize(firstTime) {
        if (window.innerWidth < 1170) {
            this.renderer.addClass(this.document.body, "ls-closed");
        }
        else {
            this.renderer.removeClass(this.document.body, "ls-closed");
        }
    }
    mouseHover(e) {
        const body = this.elementRef.nativeElement.closest("body");
        if (body.classList.contains("submenu-closed")) {
            this.renderer.addClass(this.document.body, "side-closed-hover");
            this.renderer.removeClass(this.document.body, "submenu-closed");
        }
    }
    mouseOut(e) {
        const body = this.elementRef.nativeElement.closest("body");
        if (body.classList.contains("side-closed-hover")) {
            this.renderer.removeClass(this.document.body, "side-closed-hover");
            this.renderer.addClass(this.document.body, "submenu-closed");
        }
    }
    getProfileImage() {
        let params = {
            empPf: this.currentUser.empPfNo,
        };
        this.authService.getUserProfileImage(params).subscribe((res) => {
            //this.snackbar.showNotification("snackbar-success", res.message);
            // console.log("getProfileImage res: ", res);
            if (res.entity && res.entity.imageFile) {
                this.profileImage = res.entity.imageFile;
            }
        }, (err) => {
            console.log(err);
            // this.snackbar.showNotification("snackbar-danger", err.message);
        });
    }
    logout() {
        this.router.navigate(["/authentication/signin"]);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_2__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) { return ctx.windowResizecall($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) { return ctx.onGlobalClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
    } }, decls: 19, vars: 8, consts: [["id", "leftsidebar", 1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "menu"], [1, "list", 3, "ngStyle", "perfectScrollbar"], [1, "sidebar-user-panel"], [1, "user-panel"], [1, "image"], ["alt", "", 1, "img-circle", 3, "src"], [1, "profile-usertitle"], [1, "sidebar-userpic-name"], [1, "profile-usertitle-job"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "menu-top", 3, "click"], ["name", "log-out", 1, "sidebarIcon"], [1, "hide-menu"], [3, "routerLinkActive"], ["class", "header", 4, "ngIf"], ["class", "menu-top", 3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "ml-menu", 4, "ngIf"], [1, "header"], [1, "menu-top", 3, "routerLink", "ngClass", "click"], [1, "sidebarIcon", 3, "name"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "ml-menu"], [3, "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive"], [3, "routerLink", "ngClass", "click"], ["class", "ml-menu-2", 4, "ngIf"], [1, "ml-menu-2"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) { return ctx.mouseHover($event); })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) { return ctx.mouseOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "ul", 2)(4, "li", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, SidebarComponent_li_13_Template, 4, 6, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li")(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i-feather", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c1, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.profileImage || "assets/images/user/profile_img.png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.userName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.userRole, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sidebarItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, angular_feather__WEBPACK_IMPORTED_MODULE_8__.FeatherComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 7868:
/*!*******************************************************!*\
  !*** ./src/app/shared/UnsubscribeOnDestroyAdapter.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeOnDestroyAdapter": () => (/* binding */ UnsubscribeOnDestroyAdapter)
/* harmony export */ });
/* harmony import */ var _sub_sink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-sink */ 12822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 * A class that automatically unsubscribes all observables when the object gets destroyed
 */
class UnsubscribeOnDestroyAdapter {
    constructor() {
        /**
         * The subscription sink object that stores all subscriptions
         */
        this.subs = new _sub_sink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    }
    /**
     * The lifecycle hook that unsubscribes all subscriptions when the component / object gets destroyed
     */
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
UnsubscribeOnDestroyAdapter.ɵfac = function UnsubscribeOnDestroyAdapter_Factory(t) { return new (t || UnsubscribeOnDestroyAdapter)(); };
UnsubscribeOnDestroyAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnsubscribeOnDestroyAdapter, factory: UnsubscribeOnDestroyAdapter.ɵfac });


/***/ }),

/***/ 61676:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/feather-icons/feather-icons.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconsComponent": () => (/* binding */ FeatherIconsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-feather */ 55810);


class FeatherIconsComponent {
    constructor() { }
    ngOnInit() { }
}
FeatherIconsComponent.ɵfac = function FeatherIconsComponent_Factory(t) { return new (t || FeatherIconsComponent)(); };
FeatherIconsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatherIconsComponent, selectors: [["app-feather-icons"]], inputs: { icon: "icon", class: "class" }, decls: 1, vars: 3, consts: [[3, "name"]], template: function FeatherIconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.icon);
    } }, directives: [angular_feather__WEBPACK_IMPORTED_MODULE_1__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0aGVyLWljb25zLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 27545:
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/feather-icons/feather-icons.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconsModule": () => (/* binding */ FeatherIconsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feather-icons.component */ 61676);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 55810);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather/icons */ 73903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);






class FeatherIconsModule {
}
FeatherIconsModule.ɵfac = function FeatherIconsModule_Factory(t) { return new (t || FeatherIconsModule)(); };
FeatherIconsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeatherIconsModule });
FeatherIconsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_4__.allIcons)], angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeatherIconsModule, { declarations: [_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule], exports: [_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule] }); })();


/***/ }),

/***/ 94872:
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ 84128);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/overlay */ 54244);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ 24476);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/scrolling */ 95752);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/stepper */ 21780);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/table */ 33865);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/badge */ 70178);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 43672);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ 61859);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ 63346);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/tree */ 38205);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tree */ 34972);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/core */ 3184);


















































const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
    ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule.forRoot(),
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.A11yModule,
    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_12__.CdkStepperModule,
    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_13__.CdkTableModule,
    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_14__.CdkTreeModule,
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.DragDropModule,
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule,
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__.MatBadgeModule,
    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__.MatBottomSheetModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChipsModule,
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__.MatStepperModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__.MatExpansionModule,
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__.MatGridListModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule,
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule,
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__.MatRadioModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__.MatSelectModule,
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__.MatSliderModule,
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__.MatSortModule,
    _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabsModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule,
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule,
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule,
    _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
    mat_table_exporter__WEBPACK_IMPORTED_MODULE_43__.MatTableExporterModule,
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__.OverlayModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_45__.FormsModule,
    _angular_common_http__WEBPACK_IMPORTED_MODULE_46__.HttpClientModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_45__.ReactiveFormsModule,
    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_47__.PerfectScrollbarModule,
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_48__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_48__["ɵɵdefineInjector"]({ imports: [[materialModules], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.A11yModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_12__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_13__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_14__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_43__.MatTableExporterModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__.OverlayModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_46__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__.ReactiveFormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_47__.PerfectScrollbarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_48__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.A11yModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_12__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_13__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_14__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_43__.MatTableExporterModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__.OverlayModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_46__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__.ReactiveFormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_47__.PerfectScrollbarModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.A11yModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_12__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_13__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_14__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_43__.MatTableExporterModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__.OverlayModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_46__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__.ReactiveFormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_47__.PerfectScrollbarModule] }); })();


/***/ }),

/***/ 81059:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/snackbar.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarService": () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);


class SnackbarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    open(arg0, arg1, arg2) {
        throw new Error('Method not implemented.');
    }
    showNotification(colorName, text) {
        this.snackBar.open(text, "", {
            duration: 5000,
            verticalPosition: "top",
            horizontalPosition: "center",
            panelClass: colorName,
        });
    }
}
SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar)); };
SnackbarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackbarService, factory: SnackbarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 94872);
/* harmony import */ var _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/feather-icons/feather-icons.module */ 27545);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);








class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule] }); })();


/***/ }),

/***/ 12822:
/*!************************************!*\
  !*** ./src/app/shared/sub-sink.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubSink": () => (/* binding */ SubSink)
/* harmony export */ });
/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
class SubSink {
    /**
     * Subscription sink that holds Observable subscriptions
     * until you call unsubscribe on it in ngOnDestroy.
     *
     * @example
     * In Angular:
     * ```
     *   private subs = new SubSink();
     *   ...
     *   this.subs.sink = observable$.subscribe(
     *   this.subs.add(observable$.subscribe(...));
     *   ...
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     * ```
     */
    constructor() {
        this._subs = [];
    }
    /**
     * Add subscriptions to the tracked subscriptions
     * @example
     *  this.subs.add(observable$.subscribe(...));
     */
    add(...subscriptions) {
        this._subs = this._subs.concat(subscriptions);
    }
    /**
     * Assign subscription to this sink to add it to the tracked subscriptions
     * @example
     *  this.subs.sink = observable$.subscribe(...);
     */
    set sink(subscription) {
        this._subs.push(subscription);
    }
    /**
     * Unsubscribe to all subscriptions in ngOnDestroy()
     * @example
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     */
    unsubscribe() {
        this._subs.forEach((sub) => sub && sub.unsubscribe());
        this._subs = [];
    }
}


/***/ }),

/***/ 89019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    //Kingdom test servers
    baseUrlAdmin: "http://10.0.1.144:6003",
    baseUrlHR: "http://10.0.1.144:6008",
    baseUrlApplicant: 'http://10.0.1.144:6400',
    baseUrlProcurement: "http://10.0.1.144:6005",
    baseUrlSupplierManagement: "http://10.0.1.144:6009",
    baseUrlFixedAssets: "http://10.0.1.144:6004",
    baseUrlPrepayments: "http://10.0.1.144:8099",
    baseUrlFinance: "http://10.0.1.144:6004",
    baseUrlMiddleware: "http://10.0.1.144:6011",
    clientUrlHR: "http://10.0.1.144:6008/administration",
    selfServiceUrlHR: "http://10.0.1.144:6008/portal",
    // //Emtech test server
    // baseUrlAdmin: "http://52.15.152.26:6200",
    // baseUrlHR: "http://52.15.152.26:6300",
    // baseUrlApplicant: 'http://52.15.152.26:6400', 
    // baseUrlProcurement: "http://52.15.152.26:9090",
    // baseUrlBudget: "http://52.15.152.26:9090",
    // baseUrlSupplierManagement: "http://52.15.152.26:9099",
    // baseUrlFixedAssets: "http://52.15.152.26:9090",
    // baseUrlPrepayments: "http://52.15.152.26:8099",
    // baseUrlFinance: "http://52.15.152.26:8199",
    // baseUrlMiddleware: "http://localhost:9191",
    // clientUrlHR: "http://52.15.152.26:6301/administration",
    // selfServiceUrlHR: "http://52.15.152.26:6301/portal",
    //Localhost
    // baseUrlAdmin: "http://127.0.0.1:6200",
    // baseUrlHR: "http://127.0.0.1:6300",
    // baseUrlBudget: "http://127.0.0.1:9090",
    // baseUrlProcurement: "http://127.0.0.1:9090",
    // baseUrlSupplierManagement: "http://127.0.0.1:9099",
    // baseUrlFixedAssets: "http://127.0.0.1:9090",
    // baseUrlPrepayments: "http://127.0.0.1:8099",
    // baseUrlFinance: "http://127.0.0.1:8199",
    // Simon Finance
    // baseUrlFinance: "http://192.168.100.31:8199",
    // baseUrlFinance: "http://192.168.202.157:8199",
    // clientUrlHR: "http://10.0.1.144:6008/administration",
    // selfServiceUrlHR: "http://10.0.1.144:6008/portal",
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    // apiUrl: "http://52.15.152.26:9051",
    // baseUrl: "http://52.15.152.26:9051",
    // serverAPI: "http://52.15.152.26:9051",
    // AUTH_URL: "http://52.15.152.26:9051",
    // uraUrl: "http://52.15.152.26:9051",
    // authUrl: "http://52.15.152.26:9051",
    // baseUrl: "http://52.15.152.26:1905",
    // baseUrl: "http://127.0.0.1:9090",
    //apiUrl: 'http://52.15.152.26:6300'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
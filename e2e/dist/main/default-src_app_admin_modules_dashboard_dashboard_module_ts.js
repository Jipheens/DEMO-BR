"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["default-src_app_admin_modules_dashboard_dashboard_module_ts"],{

/***/ 95708:
/*!*********************************************************************!*\
  !*** ./src/app/admin/modules/dashboard/dashboard-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 67784);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    // { path: "", component: DashboardComponent },
    {
        path: '', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { requiredPrivilege: ['Dashboard'] }
    },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 42661:
/*!*************************************************************!*\
  !*** ./src/app/admin/modules/dashboard/dashboard.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 95708);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 67784);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/gen-widgets/gen-widgets.component */ 67028);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-echarts */ 45877);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 2277);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ 49458);
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-gauge */ 44010);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-gauge */ 65383);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _pages_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/components/reset-password/reset-password.component */ 15048);
/* harmony import */ var _pages_components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/components/analytics/analytics.component */ 79116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);





















class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            ngx_echarts__WEBPACK_IMPORTED_MODULE_9__.NgxEchartsModule.forRoot({
                echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 72750)),
            }),
            ng2_charts__WEBPACK_IMPORTED_MODULE_10__.ChartsModule,
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__.NgxChartsModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            angular_gauge__WEBPACK_IMPORTED_MODULE_15__.GaugeModule.forRoot(),
            ngx_gauge__WEBPACK_IMPORTED_MODULE_16__.NgxGaugeModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        _pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__.GenWidgetsComponent,
        _pages_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__.ResetPasswordComponent,
        _pages_components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_6__.AnalyticsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_9__.NgxEchartsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.ChartsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__.NgxChartsModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, angular_gauge__WEBPACK_IMPORTED_MODULE_15__.GaugeModule, ngx_gauge__WEBPACK_IMPORTED_MODULE_16__.NgxGaugeModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule], exports: [_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__.GenWidgetsComponent] }); })();


/***/ }),

/***/ 79116:
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/modules/dashboard/pages/components/analytics/analytics.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsComponent": () => (/* binding */ AnalyticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 20054);



class AnalyticsComponent {
    constructor(tokenCookieService) {
        this.tokenCookieService = tokenCookieService;
    }
    ngOnInit() {
        this.currentUser = this.tokenCookieService.getUser().username;
        this.chart1();
        this.chart2();
        this.chart4();
    }
    chart1() {
        this.lineChartOptions = {
            series: [
                {
                    name: "Supplier 1",
                    data: [70, 200, 80, 180, 170, 105, 210, 0, 250, 30, 120, 260],
                },
                {
                    name: "Supplier 2",
                    data: [80, 250, 30, 120, 260, 100, 180, 5, 130, 85, 225, 80],
                },
                {
                    name: "Supplier 3",
                    data: [85, 130, 85, 225, 80, 190, 120, 130, 85, 225, 80, 190],
                },
            ],
            chart: {
                height: 350,
                type: "line",
                foreColor: "#9aa0ac",
                dropShadow: {
                    enabled: true,
                    color: "#000",
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ["#A5A5A5", "#875692", "#4CB5AC"],
            stroke: {
                curve: "smooth",
            },
            grid: {
                row: {
                    colors: ["transparent", "transparent"],
                    opacity: 0.5,
                },
            },
            markers: {
                size: 3,
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                title: {
                    text: "Month",
                },
            },
            yaxis: {
                // opposite: true,
                title: {
                    text: "Payment Amount",
                },
            },
            legend: {
                position: "top",
                horizontalAlign: "right",
                floating: true,
                offsetY: -25,
                offsetX: -5,
            },
            tooltip: {
                theme: "dark",
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
            },
        };
    }
    chart2() {
        this.pieChartOptions = {
            series: [44, 55, 13, 43, 22],
            chart: {
                type: "donut",
                width: 225,
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            labels: ["Science", "Mathes", "Economics", "History", "Music"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {},
                },
            ],
        };
    }
    chart4() {
        this.performanceRateChartOptions = {
            series: [
                {
                    name: "Invoice Amount",
                    data: [0, 20, 12, 6, 15, 25, 0],
                },
            ],
            chart: {
                height: 380,
                type: "line",
                dropShadow: {
                    enabled: true,
                    color: "#000",
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2,
                },
                foreColor: "#9aa0ac",
                toolbar: {
                    show: false,
                },
            },
            colors: ["#545454"],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: "smooth",
            },
            markers: {
                size: 1,
            },
            xaxis: {
                categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                title: {
                    text: "Weekday",
                },
            },
            yaxis: {
                title: {
                    text: "Invoice Amount($)",
                },
            },
            tooltip: {
                theme: "dark",
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
            },
        };
    }
}
AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) { return new (t || AnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__.TokenCookieService)); };
AnalyticsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnalyticsComponent, selectors: [["app-analytics"]], decls: 35, vars: 26, consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "body"], [1, "row", "align-items-center"], [1, "col-md-2", "p-2"], ["src", "assets/images/pngegg8.png", "alt", "", "width", "300px", "height", "170px", 1, "px-2", "mx-2"], [1, "col-md-10"], [1, "font-20", "weight-500", "mb-2"], [1, "weight-600", "font-30", "col-green", "pt-1"], [1, "font-18", "max-width-600"], [1, "row", "clearfix"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [1, "card", 2, "position", "relative", "height", "490px"], [1, "header"], [1, "recent-report__chart"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "tooltip", "markers", "grid", "yaxis", "title", "fill"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "card-body"], [1, "float-start"], [1, "text-muted"], [1, "text-muted", "font-12"], [1, "mb-5"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "markers", "grid", "yaxis", "tooltip", "title"]], template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Welcome back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "We strive to offer a seamless payment and invoicing experience to meet your needs. For any inquiries or concerns, please don't hesitate to reach out to us. Thank you for choosing our finance system..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Supplier Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3)(21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "apx-chart", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17)(24, "div", 2)(25, "div", 18)(26, "div", 19)(27, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Average Daily Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "12 Invoices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "(Average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "apx-chart", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.currentUser, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.lineChartOptions.series)("chart", ctx.lineChartOptions.chart)("xaxis", ctx.lineChartOptions.xaxis)("stroke", ctx.lineChartOptions.stroke)("colors", ctx.lineChartOptions.colors)("dataLabels", ctx.lineChartOptions.dataLabels)("legend", ctx.lineChartOptions.legend)("tooltip", ctx.lineChartOptions.tooltip)("markers", ctx.lineChartOptions.markers)("grid", ctx.lineChartOptions.grid)("yaxis", ctx.lineChartOptions.yaxis)("title", ctx.lineChartOptions.title)("fill", ctx.lineChartOptions.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.performanceRateChartOptions.series)("chart", ctx.performanceRateChartOptions.chart)("xaxis", ctx.performanceRateChartOptions.xaxis)("stroke", ctx.performanceRateChartOptions.stroke)("colors", ctx.performanceRateChartOptions.colors)("dataLabels", ctx.performanceRateChartOptions.dataLabels)("legend", ctx.performanceRateChartOptions.legend)("markers", ctx.performanceRateChartOptions.markers)("grid", ctx.performanceRateChartOptions.grid)("yaxis", ctx.performanceRateChartOptions.yaxis)("tooltip", ctx.performanceRateChartOptions.tooltip)("title", ctx.performanceRateChartOptions.title);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFseXRpY3MuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 15048:
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/modules/dashboard/pages/components/reset-password/reset-password.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);













function ResetPasswordComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter a valid username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " New password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter atleast 10 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Characters must not exceed 25. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Confirm password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter atleast 10 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Characters must not exceed 25. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ResetPasswordComponent {
    constructor(router, tokenStorage, fb, snackbar, dialogRef, data) {
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.fb = fb;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.isSuccessful = false;
        this.isUploadFailed = false;
        this.errorMessage = "";
        this.hide1 = true;
        this.hide2 = true;
        this.loading = false;
        this.Data = data.test;
    }
    ngOnInit() {
        this.currentUserName = this.tokenStorage.getUser().username;
        this.Form = this.createForm();
    }
    createForm() {
        return this.fb.group({
            username: [this.currentUserName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(25),
                ],
            ],
            confirmpassword: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(25),
                ],
            ],
            // password: ["", [Validators.required]],
            // confirmpassword: ["", [Validators.required]],
        });
    }
    // {
    //   "headers": {
    //     "normalizedNames": {},
    //     "lazyUpdate": null
    //   },
    //   "status": 200,
    //   "statusText": "OK",
    //   "url": "https://uraintegration-auth.postbank.co.ug/soa/auth/logout",
    //   "ok": true,
    //   "type": 4,
    //   "body": {
    //     "name": null,
    //     "account_no": null,
    //     "scheme_code": null,
    //     "scheme_type": null,
    //     "message": "Logged Out Successfully!",
    //     "entity": null,
    //     "statusCode": 200
    //   }
    // }
    // resetPassword() {
    //   if (this.Form.value.password !== this.Form.value.confirmpassword) {
    //     this.snackbar.showNotification(
    //       "snackbar-danger",
    //       "Passwords don't match, please check and retry!"
    //     );
    //   } else {
    //     this.loading = true;
    //     this.staticsService.firstTimeResetPassword(this.Form.value).subscribe(
    //       (res) => {
    //         console.log("res: ", res);
    //         this.loading = false;
    //         if (res.message) {
    //           this.dialogRef.close({ event: "close", data: "Password reset" });
    //           this.notificationAPI.alertSuccess(res.message);
    //         } else {
    //           this.notificationAPI.alertWarning("Password reset was not succesful");
    //         }
    //       },
    //       (err) => {
    //         this.loading = false;
    //         // this.notificationAPI.alertWarning(err);
    //         this.notificationAPI.alertWarning(
    //           "Password policy not met. Use a different password!"
    //         );
    //       }
    //     );
    //   }
    // }
    resetPassword() {
        // if (this.Form.value.password !== this.Form.value.confirmpassword) {
        //   this.snackbar.showNotification(
        //     "snackbar-danger",
        //     "Passwords don't match, please check and retry!"
        //   );
        // } else if (this.Form.value.password.includes(this.currentUserName)) {
        //   this.notificationAPI.alertWarning(
        //     "Password policy not met. Use a different password!"
        //   );
        // } else {
        //   this.loading = true;
        // }
    }
    onClose() {
        // this.tokenStorage.signOut().subscribe(
        //   (res) => {
        //     console.log("res: ", res);
        //     if (res) {
        //       this.dialogRef.close();
        //       this.router.navigate(["/authentication/signin"]);
        //       this.notificationAPI.alertWarning(
        //         "Password reset required before proceeding!"
        //       );
        //     }
        //   },
        //   (err) => {
        //     console.log(err);
        //     this.dialogRef.close();
        //     this.router.navigate(["/authentication/signin"]);
        //     this.notificationAPI.alertWarning(err);
        //   }
        // );
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 52, vars: 22, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/emtec.png", "alt", "avatar"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], [1, "mb-1", "text-dark", "text-center"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "card-body", "my-3"], [1, "text-dark"], [3, "formGroup"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username", "required", "", 1, "text-dark"], [4, "ngIf"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "confirmpassword", "required", "", 3, "type"], [1, "d-grid", "my-2"], ["mat-raised-button", "", "color", "primary", 1, "auth-form-btn", 3, "disabled", "click"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_9_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Please use this form to reset your password using the registered username. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "form", 12)(18, "div", 13)(19, "div", 14)(20, "mat-form-field", 15)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ResetPasswordComponent_mat_error_24_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 14)(26, "mat-form-field", 15)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_30_listener() { return ctx.hide1 = !ctx.hide1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ResetPasswordComponent_mat_error_33_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ResetPasswordComponent_mat_error_34_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ResetPasswordComponent_mat_error_35_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ResetPasswordComponent_mat_error_36_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 14)(38, "mat-form-field", 15)(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_42_listener() { return ctx.hide2 = !ctx.hide2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, ResetPasswordComponent_mat_error_45_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, ResetPasswordComponent_mat_error_46_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, ResetPasswordComponent_mat_error_47_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, ResetPasswordComponent_mat_error_48_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 21)(50, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_50_listener() { return ctx.resetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Reset Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.get("username").hasError("required") || ctx.Form.get("username").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide1 ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide1 ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.get("password").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.get("password").hasError("minLength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.get("password").hasError("maxLength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide2 ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide2 ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.get("confirmpassword").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.get("confirmpassword").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.get("confirmpassword").hasError("minLength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.get("confirmpassword").hasError("maxLength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("auth-spinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading)("disabled", !ctx.Form.valid);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 67784:
/*!********************************************************************************!*\
  !*** ./src/app/admin/modules/dashboard/pages/dashboard/dashboard.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/reset-password/reset-password.component */ 15048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gen-widgets/gen-widgets.component */ 67028);
/* harmony import */ var _components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/analytics/analytics.component */ 79116);








const _c0 = ["chart"];
const _c1 = function () { return ["Home"]; };
class DashboardComponent {
    constructor(tokenCookieService, dialog) {
        this.tokenCookieService = tokenCookieService;
        this.dialog = dialog;
        this.isPageReloaded = false;
    }
    //
    // ngOnInit(): void {
    //   this.passwordFlag = this.tokenCookieService.getUser().systemGenPassword;
    //   if (this.passwordFlag && !this.isPageReloaded) {
    //     this.resetPassword();
    //     this.isPageReloaded = true;
    //   }
    //   this.chart1();
    //   this.chart2();
    //   this.gaugechart();
    //   this.stackChart();
    // }
    // reLoadPage() {
    //   // Perform password reset logic here
    //   location.reload();
    // }
    ngOnInit() {
        this.currentUser = this.tokenCookieService.getUser().username;
        this.chart1();
        this.chart2();
        this.gaugechart();
        this.stackChart();
        //     var calcAmt = "10"; 
        // var waiverAmt = "5"; 
        // // Set cookies for calcAmt and waiverAmt
        // document.cookie = "calcAmt=" + encodeURIComponent(calcAmt);
        // document.cookie = "waiverAmt=" + encodeURIComponent(waiverAmt);
        // // Split cookies by "; " to get individual cookies
        // var cookies = document.cookie.split("; ");
        // // Loop through cookies and retrieve values for calcAmt and waiverAmt
        // for (var i = 0; i < cookies.length; i++) {
        // var cookie = cookies[i].split("=");
        // if (cookie[0].trim() === "calcAmt") {
        // var decodedCalcAmt = decodeURIComponent(cookie[1]);
        // document.forms[0].calcAmt.value = decodedCalcAmt;
        // console.log("decodedCalcAmt: ", decodedCalcAmt)
        // }
        // if (cookie[0].trim() === "waiverAmt") {
        // var decodedWaiverAmt = decodeURIComponent(cookie[1]);
        // document.forms[0].waiverAmt.value = decodedWaiverAmt;
        // console.log("decodedWaiverAmt: ", decodedWaiverAmt)
        // }
        // }
    }
    getPage() {
        if (this.passwordFlag && this.currentUser !== 'soaadmin') {
            this.resetPassword();
        }
        else if (!this.passwordFlag) {
            //this.resetPassword();
        }
    }
    reLoadPage() {
        // Perform password reset logic here
        location.reload();
    }
    resetPassword() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "600px";
        dialogConfig.data = {
            test: "username",
        };
        const dialogRef = this.dialog.open(_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => { });
    }
    chart1() {
        this.barChartOptions = {
            series: [
                {
                    name: "Work Hours",
                    data: [6.3, 5.5, 4.1, 6.7, 2.2, 4.3],
                },
                {
                    name: "Break Hours",
                    data: [1.3, 2.3, 2.0, 0.8, 1.3, 2.7],
                },
            ],
            chart: {
                type: "bar",
                height: 350,
                stacked: true,
                stackType: "100%",
                foreColor: "#9aa0ac",
            },
            colors: ["#674EC9", "#C1C1C1"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "35%",
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: "bottom",
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            xaxis: {
                categories: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
            },
            fill: {
                opacity: 1,
            },
            legend: {
                position: "bottom",
                offsetX: 0,
                offsetY: 0,
            },
            tooltip: {
                theme: "dark",
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
            },
        };
    }
    chart2() {
        this.radialChartOptions = {
            radialseries: [44, 55, 67],
            chart: {
                height: 290,
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: "22px",
                        },
                        value: {
                            fontSize: "16px",
                        },
                        total: {
                            show: true,
                            label: "Total",
                            formatter: function (w) {
                                return "52%";
                            },
                        },
                    },
                },
            },
            labels: ["Project 1", "Project 2", "Project 3"],
        };
    }
    gaugechart() {
        this.gaugeChartOptions = {
            series2: [72],
            chart: {
                height: 310,
                type: "radialBar",
                offsetY: -10,
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: "22px",
                            fontWeight: 600,
                            color: "#6777EF",
                            offsetY: 120,
                        },
                        value: {
                            offsetY: 76,
                            fontSize: "22px",
                            color: "#9aa0ac",
                            formatter: function (val) {
                                return val + "%";
                            },
                        },
                    },
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91],
                },
            },
            stroke: {
                dashArray: 4,
            },
            labels: ["Closed Ticket"],
        };
    }
    stackChart() {
        this.stackBarChart = {
            series: [
                {
                    name: "Project 1",
                    data: [44, 55, 41, 67, 22, 43],
                },
                {
                    name: "Project 2",
                    data: [13, 23, 20, 8, 13, 27],
                },
                {
                    name: "Project 3",
                    data: [11, 17, 15, 15, 21, 14],
                },
                {
                    name: "Project 4",
                    data: [21, 7, 25, 13, 22, 8],
                },
            ],
            chart: {
                type: "bar",
                height: 300,
                foreColor: "#9aa0ac",
                stacked: true,
                toolbar: {
                    show: false,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: "bottom",
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "30%",
                },
            },
            dataLabels: {
                enabled: false,
            },
            grid: {
                borderColor: "#9aa0ac",
            },
            xaxis: {
                type: "category",
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            },
            legend: {
                show: false,
            },
            fill: {
                opacity: 1,
                colors: ["#F0457D", "#704DAD", "#FFC107", "#a5a5a5"],
            },
        };
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 7, vars: 4, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Dashboard")("items", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c1))("active_item", "Dashboard");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_3__.GenWidgetsComponent, _components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__.AnalyticsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 67028:
/*!************************************************************************************!*\
  !*** ./src/app/admin/modules/dashboard/pages/gen-widgets/gen-widgets.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenWidgetsComponent": () => (/* binding */ GenWidgetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class GenWidgetsComponent {
    constructor(router) {
        this.router = router;
        this.suppliersCount = 0;
        this.expenseCount = 0;
        this.costCentersCount = 0;
        this.usersCount = 0;
    }
    ngOnInit() {
        this.getSuppliers();
        this.getExpenses();
        this.getCostCenters();
        this.getAllUsers();
    }
    suppliers() {
        this.router.navigateByUrl('/admin/supplier/suppliers-management/all');
    }
    expenses() {
        this.router.navigateByUrl('/admin/supplier/expenses-management/all');
    }
    costCenters() {
        this.router.navigateByUrl('/admin/supplier/cost-centers-management/all');
    }
    userManagement() {
        this.router.navigateByUrl('/admin/user-accounts/all');
    }
    getExpenses() {
        // this.expenseService.getExpenses
        // ()
        // .subscribe(
        //   (res) => {
        //     this.expenseCount = res.length;
        //   },
        //   (err) => {
        //     console.log(err);
        //   })
    }
    getSuppliers() {
        // this.supplierService
        //   .getSuppliers()
        //   .subscribe(
        //     (res) => {
        //       this.suppliersCount = res.length;
        //     },
        //     (err) => {
        //       console.log(err);
        //     }
        //   );
    }
    getCostCenters() {
        // this.costCenterService
        //   .getCostCenters()
        //   .subscribe(
        //     (res) => {
        //       this.costCentersCount = res.length;
        //     },
        //     (err) => {
        //       console.log(err);
        //     }
        //   );
    }
    getAllUsers() {
        // this.accountService
        //   .listActiveAccounts()
        //   .subscribe(
        //     (res) => {
        //       this.usersCount = res.length;          
        //     },
        //     (err) => {
        //       console.log(err);
        //     }
        //   );
    }
}
GenWidgetsComponent.ɵfac = function GenWidgetsComponent_Factory(t) { return new (t || GenWidgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
GenWidgetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenWidgetsComponent, selectors: [["app-gen-widgets"]], decls: 45, vars: 4, consts: [[1, "row"], [1, "col-lg-3", "col-sm-6", 3, "click"], [1, "info-box7", "bg-kingdom", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-20"], [1, "text-end"], [1, "float-start"], [1, "fas", "fa-user-plus"], [1, "m-b-0"], [1, "fab", "fa-buromobelexperte"], [1, "fas", "fa-coins"], [1, "fas", "fa-users"]], template: function GenWidgetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_1_listener() { return ctx.suppliers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Suppliers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5)(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_12_listener() { return ctx.expenses(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2)(14, "div", 3)(15, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Requisitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 5)(18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_23_listener() { return ctx.costCenters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2)(25, "div", 3)(26, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "RFPs and RFQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 5)(29, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_34_listener() { return ctx.userManagement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2)(36, "div", 3)(37, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2", 5)(40, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.suppliersCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.expenseCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.costCentersCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usersCount);
    } }, styles: [".bg-kingdom[_ngcontent-%COMP%] {\n  background: linear-gradient(to left, #004400, #002200);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbi13aWRnZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQUE7QUFDRiIsImZpbGUiOiJnZW4td2lkZ2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1raW5nZG9tIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMDQ0MDAsICMwMDIyMDApO1xufVxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_modules_dashboard_dashboard_module_ts.js.map
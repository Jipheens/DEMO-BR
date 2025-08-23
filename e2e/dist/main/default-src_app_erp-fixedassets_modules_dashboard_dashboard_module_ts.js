"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["default-src_app_erp-fixedassets_modules_dashboard_dashboard_module_ts"],{

/***/ 310:
/*!***************************************************************************!*\
  !*** ./src/app/erp-finance/data/services/fixed-assets-service.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedAssetsServiceService": () => (/* binding */ FixedAssetsServiceService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class FixedAssetsServiceService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        const fxAssetUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/fixedAssetsMaintenance/getAssetsToUpdate`;
        return this.http.get(fxAssetUrl);
    }
    // Update asset manually
    updateAsset(data) {
        const fxAssetUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/fixedAssetsMaintenance/modify`;
        return this.http.put(fxAssetUrl, data);
    }
    modifyAsset(data) {
        const fxAssetUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/fixedAssetsMaintenance/modify`;
        return this.http.put(fxAssetUrl, data);
    }
    getAllUpdatedAssets() {
        const fxAssetUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/fixedAssetsMaintenance/getUpdatedAssets`;
        return this.http.get(fxAssetUrl);
    }
    // add asset manually
    addAsset(data) {
        const RfqUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/fixedAssetsMaintenance/create`;
        return this.http.post(RfqUrl, data);
    }
    // add bulk assets using excel upload
    addBulkAssets(data) {
        const RfqUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/fixedAssetsMaintenance/upload/bulk`;
        return this.http.post(RfqUrl, data);
    }
    receiveAssets() {
        const RfqUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/fixedAssetsMaintenance/getAssetsToUpdate`;
        return this.http.get(RfqUrl);
    }
    getUpdatedAssets(params) {
        const RfqUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/fixedAssetsMaintenance/getUpdatedAssets`;
        return this.http.get(RfqUrl, { params });
    }
    validateAssets(body, params) {
        const imprestUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/fixedAssetsMaintenance/bulkyApproval`;
        return this.http.put(imprestUrl, body, { params: params });
    }
    validateasset(body, params) {
        const receivablePaymentUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/fixedAssetsMaintenance/approveOrRejectOrReturn`;
        return this.http.post(receivablePaymentUrl, body, { params: params });
    }
    deleteAsset(params) {
        const deleteAssetUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/fixedAssetsMaintenance/delete`;
        return this.http.delete(deleteAssetUrl, { params: params, });
    }
}
FixedAssetsServiceService.ɵfac = function FixedAssetsServiceService_Factory(t) { return new (t || FixedAssetsServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
FixedAssetsServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FixedAssetsServiceService, factory: FixedAssetsServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 77238:
/*!*******************************************************************************!*\
  !*** ./src/app/erp-fixedassets/modules/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/components/dashboard/dashboard.component */ 63495);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [{
        path: '',
        component: _pages_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard], data: { clientName: 'FixedAssetsModule', requiredPrivilege: ['Dashboard'] }
    }];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 84327:
/*!***********************************************************************!*\
  !*** ./src/app/erp-fixedassets/modules/dashboard/dashboard.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 77238);
/* harmony import */ var _pages_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/components/dashboard/dashboard.component */ 63495);
/* harmony import */ var _pages_components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/components/analytics/analytics.component */ 47418);
/* harmony import */ var _pages_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/components/reset-password/reset-password.component */ 94770);
/* harmony import */ var _pages_components_stats_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/components/stats/stats.component */ 46537);
/* harmony import */ var _pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/gen-widgets/gen-widgets.component */ 7566);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-echarts */ 45877);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 2277);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ 49458);
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-gauge */ 44010);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-gauge */ 65383);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);






















class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
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
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_pages_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        _pages_components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_2__.AnalyticsComponent,
        _pages_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordComponent,
        _pages_components_stats_stats_component__WEBPACK_IMPORTED_MODULE_4__.StatsComponent,
        _pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__.GenWidgetsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_9__.NgxEchartsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.ChartsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__.NgxChartsModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, angular_gauge__WEBPACK_IMPORTED_MODULE_15__.GaugeModule, ngx_gauge__WEBPACK_IMPORTED_MODULE_16__.NgxGaugeModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule], exports: [_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__.GenWidgetsComponent] }); })();


/***/ }),

/***/ 47418:
/*!*****************************************************************************************************!*\
  !*** ./src/app/erp-fixedassets/modules/dashboard/pages/components/analytics/analytics.component.ts ***!
  \*****************************************************************************************************/
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

/***/ 63495:
/*!*****************************************************************************************************!*\
  !*** ./src/app/erp-fixedassets/modules/dashboard/pages/components/dashboard/dashboard.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reset-password/reset-password.component */ 94770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/services/item-category.service */ 42053);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../gen-widgets/gen-widgets.component */ 7566);
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../analytics/analytics.component */ 47418);









const _c0 = ["chart"];
const _c1 = function () { return ["Home"]; };
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
        this.getPage();
        // this.resetPassword();
        this.chart1();
        this.chart2();
        this.gaugechart();
        this.stackChart();
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
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "600px";
        dialogConfig.data = {
            test: "username",
        };
        const dialogRef = this.dialog.open(_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordComponent, dialogConfig);
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
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_2__.ItemCategoryService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 7, vars: 4, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Dashboard")("items", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](3, _c1))("active_item", "Dashboard");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__.GenWidgetsComponent, _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_5__.AnalyticsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 94770:
/*!***************************************************************************************************************!*\
  !*** ./src/app/erp-fixedassets/modules/dashboard/pages/components/reset-password/reset-password.component.ts ***!
  \***************************************************************************************************************/
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
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);











function ResetPasswordComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter a valid username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " New password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter atleast 10 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Characters must not exceed 25. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Confirm password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter atleast 10 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_50_Template(rf, ctx) { if (rf & 1) {
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
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 54, vars: 22, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/emtec.png", "alt", "avatar"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], [1, "mb-1", "text-dark", "text-center"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "card-body", "my-3"], [1, "text-dark"], [3, "formGroup"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username", "required", "", 1, "text-dark"], [4, "ngIf"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "confirmpassword", "required", "", 3, "type"], [1, "d-grid", "my-2"], ["mat-raised-button", "", "color", "primary", 1, "auth-form-btn", 3, "disabled", "click"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "reset-password works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_11_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Please use this form to reset your password using the registered username. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "form", 12)(20, "div", 13)(21, "div", 14)(22, "mat-form-field", 15)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ResetPasswordComponent_mat_error_26_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 14)(28, "mat-form-field", 15)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_32_listener() { return ctx.hide1 = !ctx.hide1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ResetPasswordComponent_mat_error_35_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ResetPasswordComponent_mat_error_36_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, ResetPasswordComponent_mat_error_37_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ResetPasswordComponent_mat_error_38_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 14)(40, "mat-form-field", 15)(41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_44_listener() { return ctx.hide2 = !ctx.hide2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, ResetPasswordComponent_mat_error_47_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, ResetPasswordComponent_mat_error_48_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, ResetPasswordComponent_mat_error_49_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, ResetPasswordComponent_mat_error_50_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 21)(52, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_52_listener() { return ctx.resetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Reset Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
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
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 46537:
/*!*********************************************************************************************!*\
  !*** ./src/app/erp-fixedassets/modules/dashboard/pages/components/stats/stats.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsComponent": () => (/* binding */ StatsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-inventory/data/services/item-category.service */ 42053);
/* harmony import */ var src_app_erp_inventory_data_services_stock_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-inventory/data/services/stock-management.service */ 90307);
/* harmony import */ var src_app_erp_inventory_data_services_mainstore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/services/mainstore.service */ 14280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-apexcharts */ 20054);











function StatsComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4);
} }
function StatsComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.name);
} }
function StatsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "apx-chart", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("series", ctx_r2.barChartOptions.series)("chart", ctx_r2.barChartOptions.chart)("dataLabels", ctx_r2.barChartOptions.dataLabels)("plotOptions", ctx_r2.barChartOptions.plotOptions)("responsive", ctx_r2.barChartOptions.responsive)("xaxis", ctx_r2.barChartOptions.xaxis)("tooltip", ctx_r2.barChartOptions.tooltip)("legend", ctx_r2.barChartOptions.legend)("fill", ctx_r2.barChartOptions.fill);
} }
function StatsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class StatsComponent {
    constructor(itemCatMan, stockManService, mainStoreManService) {
        this.itemCatMan = itemCatMan;
        this.stockManService = stockManService;
        this.mainStoreManService = mainStoreManService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.downloadLoading = false;
        this.currentYear = new Date().getFullYear();
        this.monthsArray = [
            { name: 'January', value: 1 },
            { name: 'February', value: 2 },
            { name: 'March', value: 3 },
            { name: 'April', value: 4 },
            { name: 'May', value: 5 },
            { name: 'June', value: 6 },
            { name: 'July', value: 7 },
            { name: 'August', value: 8 },
            { name: 'September', value: 9 },
            { name: 'October', value: 10 },
            { name: 'Novembar', value: 11 },
            { name: 'December', value: 12 },
        ];
        this.currentMonth = this.monthsArray[new Date().getMonth()];
        this.scales = [];
        this.categories = [];
        this.chartDispType = ['Year-wise', 'Month-wise'];
        this.observable = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            const response = {
                names: [],
                values: [],
            };
            observer.next(response);
        });
        // super();
        this.barChartOptions =
            {
                series: [{
                        name: 'category',
                        data: this.scales,
                    }
                ],
                chart: {
                    type: 'bar',
                    height: 350,
                    foreColor: 'green',
                    stacked: false,
                    toolbar: {
                        show: false,
                    },
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: 'bottom',
                                offsetX: -10,
                                offsetY: 0,
                            },
                        },
                    },
                ],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '30%',
                    },
                },
                xaxis: {
                    type: 'category',
                    categories: this.categories,
                },
                legend: {
                    show: false,
                },
                fill: {
                    opacity: 1,
                    colors: [
                        '#177147', '#397157', '#2D7152', '#22714D'
                    ]
                },
                tooltip: {
                    marker: {
                        show: true,
                    },
                    x: {
                        show: true,
                    },
                },
            };
    }
    ngOnInit() {
        this.getItemCountPerCategory();
        this.getCategories();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getItemCountPerCategory() {
        this.mainStoreManService
            .getTotalStockPerCategory()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            const names = response.names;
            const values = response.values;
            return { names, values };
        }))
            .subscribe((res) => {
            this.scales = res.values,
                this.categories = res.names;
            console.log(res.names);
            console.log(res.values);
        });
    }
    getCategories() {
        this.itemCatMan.getItemCategories()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            if (res.statusCode == 200) {
                if (res.entity.length) {
                    // categories = res.entity.categoryName
                    res.entity.forEach(element => {
                        this.categories.push(element.categoryName);
                    });
                }
                else {
                    this.categories = [];
                }
            }
            this.isLoading = false;
        }, (err) => {
            console.log(err);
        });
    }
}
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_0__.ItemCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_stock_management_service__WEBPACK_IMPORTED_MODULE_1__.StockManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_mainstore_service__WEBPACK_IMPORTED_MODULE_2__.MainstoreService)); };
StatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], decls: 21, vars: 4, consts: [[1, "card"], [1, "header"], [1, "row", "p-3"], [1, "row", "mx-3"], [1, "col-4"], ["appearance", "legacy"], ["formControlName", "year"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "body", 4, "ngIf"], [4, "ngIf"], [3, "value"], [1, "body"], [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "tooltip", "legend", "fill"]], template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Item Count Per Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "form")(6, "div", 3)(7, "div", 4)(8, "mat-form-field", 5)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Select year");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, StatsComponent_mat_option_12_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 4)(14, "mat-form-field", 5)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Select month");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, StatsComponent_mat_option_18_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, StatsComponent_div_19_Template, 2, 9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, StatsComponent_div_20_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.chartDispType);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.monthsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.ChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0cy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 7566:
/*!**********************************************************************************************!*\
  !*** ./src/app/erp-fixedassets/modules/dashboard/pages/gen-widgets/gen-widgets.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenWidgetsComponent": () => (/* binding */ GenWidgetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_finance_data_services_fixed_assets_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/services/fixed-assets-service.service */ 310);
/* harmony import */ var src_app_erp_fixedassets_data_services_asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-fixedassets/data/services/asset.service */ 89634);




class GenWidgetsComponent {
    constructor(router, fixedAssetsService, assetService) {
        this.router = router;
        this.fixedAssetsService = fixedAssetsService;
        this.assetService = assetService;
        this.assetCategories = 0;
        this.assetCount = 0;
        this.totalCost = 0;
        this.usersCount = 0;
    }
    ngOnInit() {
        this.getAllCategories();
        this.getAssetCount();
        this.getTotalCost();
        this.getAllUsers();
    }
    categories() {
        this.router.navigateByUrl('/erp-fixed-assets/fixed-assets-parameters/assets-categories');
    }
    assets() {
        this.router.navigateByUrl('/erp-fixed-assets/fixed-assets-management/add-asset');
    }
    amount() {
        this.router.navigateByUrl('/erp-fixed-assets/fixed-assets-management/accounting');
    }
    userManagement() {
        this.router.navigateByUrl('/admin/user-accounts/all');
    }
    // getData() {
    //   const mockData = [
    //     {
    //       "id": 1,
    //       "itemCategory": "FixedAssets",
    //       "itemCode": "E12345",
    //       "name": "Laptop",
    //       "description": "High-performance laptop with SSD",
    //       "quantity": 5,
    //       "totalCost": 5000.00,
    //       "unit": "Each",
    //       "unitCost": 1000.00,
    //       "assetCode": "AC#1",
    //       "assetName": "Device",
    //       "purchaseDate": "11/3/2023",
    //       "totalCost": 45000,
    //       "salvageValue": 15000,
    //       "depreciationMethod": "Decay",
    //       "depreciationRate": 4,
    //       "currentValue": 450000,
    //     },
    //     {
    //       "id": 2,
    //       "itemCategory": "FixedAssets",
    //       "itemCode": "O98765",
    //       "name": "Printer",
    //       "description": "Color laser printer with Wi-Fi",
    //       "quantity": 2,
    //       "totalCost": 1200.00,
    //       "unit": "Each",
    //       "unitCost": 600.00,
    //       "assetCode": "AC#1",
    //       "assetName": "Device",
    //       "purchaseDate": "11/3/2023",
    //       "totalCost": 45000,
    //       "salvageValue": 15000,
    //       "depreciationMethod": "Decay",
    //       "depreciationRate": 4,
    //       "currentValue": 450000,
    //     },
    //     {
    //       "id": 3,
    //       "itemCategory": "FixedAssets",
    //       "itemCode": "F56789",
    //       "name": "Desk",
    //       "description": "Wooden office desk with drawers",
    //       "quantity": 3,
    //       "totalCost": 1500.00,
    //       "unit": "Each",
    //       "unitCost": 500.00,
    //       "assetCode": "AC#1",
    //       "assetName": "Device",
    //       "purchaseDate": "11/3/2023",
    //       "totalCost": 45000,
    //       "salvageValue": 15000,
    //       "depreciationMethod": "Decay",
    //       "depreciationRate": 4,
    //       "currentValue": 450000,
    //     }
    //   ]
    //   return mockData;
    //   //  this.data =mockData;
    //   // this.isLoading = false;
    //   // this.dataSource = new MatTableDataSource(this.data);
    //   // this.dataSource.paginator = this.paginator;
    //   // this.dataSource.sort = this.sort;
    // }
    getAllCategories() {
        // const params = new HttpParams().set("supplierCode", this.currentUser);
        // console.log("this.params :", params);
        // this.assetService.getAllCategories().subscribe({
        //   next: (res) => {
        //     console.log("this.data :", res);
        //     if (res.statusCode === 200) {
        //       this.data = res.entity;
        //       const categories = new Set<string>(); // Using Set to store unique categories
        //       // Iterate through each object and add its itemCategory to the Set
        //       this.data.forEach(item => {
        //         categories.add(item.categoryName);
        //       });
        //       this.assetCategories = categories.size;
        //       console.log("assetCategories:", this.assetCategories);
        //     }
        //   },
        //   error: (err) => {
        //     console.log("this.err :", err);
        //   },
        //   complete: () => { },
        // }),
        //   Subscription;
    }
    getAssetCount() {
        // const params = new HttpParams().set("supplierCode", this.currentUser);
        // console.log("this.params :", params);
        // this.fixedAssetsService.getUpdatedAssets(params).subscribe({
        //   next: (res) => {
        //     console.log("this.data :", res);
        //     if (res.statusCode === 302) {
        //       this.data = res.entity;
        //       this.assetCount = res.entity.length;
        //       console.log("this.data :", this.data);
        //       console.log("assetCount:", this.assetCount);
        //     }
        //   },
        //   error: (err) => {
        //     console.log("this.err :", err);
        //   },
        //   complete: () => { },
        // }),
        //   Subscription;
    }
    getTotalCost() {
        // const params = new HttpParams().set("supplierCode", this.currentUser);
        // console.log("this.params :", params);
        // this.fixedAssetsService.getUpdatedAssets(params).subscribe({
        //   next: (res) => {
        //     console.log("this.data :", res);
        //     if (res.statusCode === 302) {
        //       this.data = res.entity;
        //       this.data.forEach(item => {
        //         this.totalCost += item.totalCost;
        //       });
        //       console.log("totalCost:", this.totalCost);
        //     }
        //   },
        //   error: (err) => {
        //     console.log("this.err :", err);
        //   },
        //   complete: () => { },
        // }),
        //   Subscription;
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
GenWidgetsComponent.ɵfac = function GenWidgetsComponent_Factory(t) { return new (t || GenWidgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_erp_finance_data_services_fixed_assets_service_service__WEBPACK_IMPORTED_MODULE_0__.FixedAssetsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_erp_fixedassets_data_services_asset_service__WEBPACK_IMPORTED_MODULE_1__.AssetService)); };
GenWidgetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GenWidgetsComponent, selectors: [["app-gen-widgets"]], decls: 45, vars: 4, consts: [[1, "row", "body"], [1, "col-lg-3", "col-sm-6", 3, "click"], [1, "info-box7", "bg-kingdom", "order-info-box7", "table-style"], [1, "info-box7-block"], [1, "m-b-20"], [1, "text-end"], [1, "float-start"], [1, "fas", "fa-user-plus"], [1, "m-b-0"], [1, "fab", "fa-buromobelexperte"], [1, "fas", "fa-coins"], [1, "fas", "fa-users"]], template: function GenWidgetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_1_listener() { return ctx.categories(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Asset Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 5)(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_12_listener() { return ctx.assets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 2)(14, "div", 3)(15, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h2", 5)(18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Click to add an asset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_23_listener() { return ctx.amount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 2)(25, "div", 3)(26, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Total Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h2", 5)(29, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_34_listener() { return ctx.userManagement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 2)(36, "div", 3)(37, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h2", 5)(40, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Click for more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.assetCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.assetCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.totalCost);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.usersCount);
    } }, styles: [".bg-kingdom[_ngcontent-%COMP%] {\n  background: linear-gradient(to left, #004400, #002200);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbi13aWRnZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQUE7QUFDRiIsImZpbGUiOiJnZW4td2lkZ2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1raW5nZG9tIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMDQ0MDAsICMwMDIyMDApO1xufVxuIl19 */"] });


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


/***/ }),

/***/ 14280:
/*!******************************************************************!*\
  !*** ./src/app/erp-inventory/data/services/mainstore.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainstoreService": () => (/* binding */ MainstoreService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class MainstoreService {
    constructor(http) {
        this.http = http;
    }
    getMainStore() {
        const mainStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/main_stores/allStores`;
        return this.http.get(mainStoreUrl);
    }
    addMainStore(data) {
        const mainStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/main_stores/add`;
        return this.http.post(mainStoreUrl, data);
    }
    updateMainStore(rfpDetails) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/main_stores/update`;
        return this.http.put(updateBillUrl, rfpDetails);
    }
    getItemsInTransit() {
        const mainStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/main_stores/allInTransitItems`;
        return this.http.get(mainStoreUrl);
    }
    deleteMainStorePemanently(params) {
        const mainStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/main_stores/delete`;
        return this.http.delete(mainStoreUrl, { params });
    }
    //*********************************************************************************************************** */
    // requistions from the branch 
    // http://localhost:9090/api/main_stores/fetchAllRequisitions
    fetchAllRequisitions() {
        const mainStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/main_stores/fetchAllRequisitions`;
        return this.http.get(mainStoreUrl);
    }
    //fetch all branch store requsitions
    // http://localhost:9090/api/main_stores/requestedGoods
    getAllBranchRequsitions() {
        const mainStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/main_stores/requestedGoods`;
        return this.http.get(mainStoreUrl);
    }
    //filter through branch requisitions by branch
    // http://localhost:9090/api/main_stores/fetchAllRequisitionsByBranchCode?branchCode=11111
    filterRequisitionsByBranch(params) {
        const mainStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/main_stores/fetchAllRequisitionsByBranchCode`;
        return this.http.get(mainStoreUrl, { params });
    }
    //filter all requisitions by status 
    // http://localhost:9090/api/main_stores/allRequisitions?status=InProgress
    filterAllRequisitionsByStatus(params) {
        const mainStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/main_stores/allRequisitions`;
        return this.http.get(mainStoreUrl, { params });
    }
    //realize a requisition to the branch store
    // http://localhost:9090/api/main_stores/issueInventoryItemsToBranchStore?branchCode=11&requisitionCode=111
    issueInventoryItemsToBranchStore(requestBody, params) {
        const mainStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/main_stores/issueInventoryItemsToBranchStore`;
        return this.http.post(mainStoreUrl, requestBody, { params });
    }
    //*********************************************************************************************************** */
    // Statistics
    // http://52.15.152.26:9090/api/main_stores/delete?storeId=1
    genReport(id) {
        const mainStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/main_stores/MainStoreReports/${id}`;
        return this.http.post(mainStoreUrl, id);
    }
    // http://localhost:9090/api/main_stores/inventory-items/total-stock-per-category
    getTotalStockPerCategory() {
        const mainStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/main_stores/inventory-items/total-stock-per-category`;
        return this.http.get(mainStoreUrl);
    }
}
MainstoreService.ɵfac = function MainstoreService_Factory(t) { return new (t || MainstoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
MainstoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MainstoreService, factory: MainstoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 90307:
/*!*************************************************************************!*\
  !*** ./src/app/erp-inventory/data/services/stock-management.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockManagementService": () => (/* binding */ StockManagementService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class StockManagementService {
    constructor(http) {
        this.http = http;
    }
    getStock() {
        const invItemUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/inventory-items/all`;
        return this.http.get(invItemUrl);
    }
    getStockById(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}//api/v1/inventory-items/find/inventory/by/id`, { params });
    }
    addStock(params, details) {
        const invItemUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/inventory-items/add`;
        return this.http.post(invItemUrl, details, { params });
    }
    updateStock(CategoryDetails) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/inventory-items/update`;
        return this.http.put(updateBillUrl, CategoryDetails);
    }
    calculateTotalCost() {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/inventory-items/cost`);
    }
    deleteStockPemanently(params) {
        const invItemUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/inventory-items/delete`;
        return this.http.delete(invItemUrl, { params });
    }
    checkStockAvailability(dataToValidate) {
        const invItemUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/inventory-items/check/availability/of/items`;
        return this.http.post(invItemUrl, dataToValidate);
    }
    // ********************************************************************************************************************
    // Requistions
    //transfer items to branchstores
    transfer2BranchStore(params, details) {
        const invItemUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/main_stores/issueInventoryItemsToBranchStore`;
        return this.http.post(invItemUrl, details, { params });
    }
    //********************************************************************************************************************** */
    getStocksFromProcurement() {
        const invItemUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/inventory-items/register/items/all`;
        return this.http.get(invItemUrl);
    }
    getStockFromProcurementById(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/inventory-items/register/find/by/id`, { params });
    }
    getStockFromProcurementByStatus(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/inventory-items/register/items/all/by/status`, { params });
    }
    addStockFromProcurement(params, details) {
        const invItemUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/inventory-items/add`;
        return this.http.post(invItemUrl, details, { params });
    }
    updateStockFromProcurement(CategoryDetails) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/inventory-items/register/update`;
        return this.http.put(updateBillUrl, CategoryDetails);
    }
    deleteStockFromProcurementPemanently(params) {
        const invItemUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/inventory-items/delete`;
        return this.http.delete(invItemUrl, { params });
    }
    validateStocksFromProcurement(dataToValidate) {
        const imprestUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/inventory-items/register/push/to/inventory`;
        return this.http.put(imprestUrl, dataToValidate);
    }
}
StockManagementService.ɵfac = function StockManagementService_Factory(t) { return new (t || StockManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
StockManagementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StockManagementService, factory: StockManagementService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_erp-fixedassets_modules_dashboard_dashboard_module_ts.js.map
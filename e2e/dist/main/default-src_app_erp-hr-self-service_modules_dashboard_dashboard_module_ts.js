"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts"],{

/***/ 70217:
/*!***********************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/dashboard/dashboard-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 15740);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    // { path: "", component: DashboardComponent },
    { path: '', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard], data: { clientName: 'EmployeePortalModule', requiredPrivilege: ['Dashboard'] } },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 25490:
/*!***************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/dashboard/dashboard.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 70217);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 15740);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/gen-widgets/gen-widgets.component */ 28368);
/* harmony import */ var _pages_components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/components/analytics/analytics.component */ 35821);
/* harmony import */ var _pages_components_detail_leave_grid_detail_leave_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/components/detail-leave-grid/detail-leave-grid.component */ 99980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);









class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        _pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__.GenWidgetsComponent,
        _pages_components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_5__.AnalyticsComponent,
        _pages_components_detail_leave_grid_detail_leave_grid_component__WEBPACK_IMPORTED_MODULE_6__.DetailLeaveGridComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule], exports: [_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__.GenWidgetsComponent] }); })();


/***/ }),

/***/ 35821:
/*!*********************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/dashboard/pages/components/analytics/analytics.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsComponent": () => (/* binding */ AnalyticsComponent)
/* harmony export */ });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 75972);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var _detail_leave_grid_detail_leave_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detail-leave-grid/detail-leave-grid.component */ 99980);




class AnalyticsComponent {
    constructor(tokenCookieService) {
        this.tokenCookieService = tokenCookieService;
        this.monthsArray = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        this.employeesArray = [
            49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6,
            54.4,
        ];
        this.currentUser = tokenCookieService.getUser().username;
    }
    ngOnInit() {
        this.showEmployeeChart();
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
    showEmployeeChart() {
        this.leaveDaysDash = {
            chart: {
                type: "column",
            },
            title: {
                text: "Your average on-Leave days per Month",
            },
            subtitle: {
                text: "ERP",
            },
            credits: {
                enabled: false,
            },
            xAxis: {
                categories: this.monthsArray,
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: "LEAVE Days",
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
                    color: "#157d05",
                    data: this.employeesArray,
                },
            ],
        };
        highcharts__WEBPACK_IMPORTED_MODULE_0__.chart("leaveDaysDash", this.leaveDaysDash);
    }
}
AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) { return new (t || AnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__.TokenCookieService)); };
AnalyticsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AnalyticsComponent, selectors: [["app-analytics"]], decls: 20, vars: 1, consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "body"], [1, "row", "align-items-center"], [1, "col-md-2", "p-2"], ["src", "assets/images/pngegg8.png", "alt", "", "width", "250px", "height", "170px", 1, "px-2", "mx-2"], [1, "col-md-10"], [1, "font-20", "weight-500", "mb-2"], [1, "weight-600", "font-30", "col-green", "pt-1"], [1, "font-18", "max-width-600"], [1, "row", "clearfix"], [1, "col-md-6", "col-sm-12", "card"], ["id", "leaveDaysDash", 1, "m-2"]], template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7)(8, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Welcome back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " We strive to offer a seamless payment and invoicing experience to meet your needs. For any inquiries or concerns, please don't hesitate to reach out to us. Thank you for choosing our finance system.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "div", 0)(16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "app-detail-leave-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.currentUser, "! ");
    } }, directives: [_detail_leave_grid_detail_leave_grid_component__WEBPACK_IMPORTED_MODULE_2__.DetailLeaveGridComponent], styles: [".row[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n}\n\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  transition: border-color 0.15s ease-in-out;\n}\n\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n}\n\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.card[_ngcontent-%COMP%]   .mat-paginator[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5dGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FBQ0o7O0FBRUU7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNOOztBQUNNO0VBQ0UsU0FBQTtBQUNSOztBQUdRO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFEVjs7QUFHVTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQURaOztBQU9JO0VBQ0UsYUFBQTtBQUxOOztBQVFJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQU5OIiwiZmlsZSI6ImFuYWx5dGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICBcbiAgICAuaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgXG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gIFxuICAgICAgLmZpbHRlciB7XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcbiAgXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gIFxuICAgIC5tYXQtcGFnaW5hdG9yIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gIH1cbiAgIl19 */"] });


/***/ }),

/***/ 99980:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/dashboard/pages/components/detail-leave-grid/detail-leave-grid.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailLeaveGridComponent": () => (/* binding */ DetailLeaveGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_erp_hr_data_configuration_services_analysis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-hr/data/configuration-services/analysis.service */ 91781);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);













function DetailLeaveGridComponent_mat_header_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailLeaveGridComponent_mat_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r19 + 1);
} }
function DetailLeaveGridComponent_mat_header_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "From Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailLeaveGridComponent_mat_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, row_r20.fromDate), " ");
} }
function DetailLeaveGridComponent_mat_header_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "To Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailLeaveGridComponent_mat_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, row_r21.toDate), " ");
} }
function DetailLeaveGridComponent_mat_header_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailLeaveGridComponent_mat_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r22.days, " ");
} }
function DetailLeaveGridComponent_mat_header_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Remaining days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailLeaveGridComponent_mat_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r23.remainingdays, " ");
} }
function DetailLeaveGridComponent_mat_header_cell_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " HandOver To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailLeaveGridComponent_mat_cell_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r24.handOverPF, " ");
} }
function DetailLeaveGridComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p")(2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading, please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-progress-bar", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function DetailLeaveGridComponent_mat_header_row_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-header-row");
} }
function DetailLeaveGridComponent_mat_row_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-row");
} }
function DetailLeaveGridComponent_mat_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
const _c0 = function () { return [5, 10, 20, 30, 40, 50, 100]; };
class DetailLeaveGridComponent {
    constructor(analysisAPI, tokenStorageService) {
        this.analysisAPI = analysisAPI;
        this.tokenStorageService = tokenStorageService;
        this.displayedColumns = [
            'index',
            'fromDate',
            'toDate',
            'days',
            'remainingdays',
            'handOverPF'
        ];
        this.year = new Date().getFullYear();
    }
    ngOnDestroy() {
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams()
            .set("empPf", this.tokenStorageService.getEmppf())
            .set("Year", this.year);
        this.analysisAPI
            .getEmployeeAnalysis(params).subscribe(res => {
            this.resData = res;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(this.resData.onLeaveDays);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, err => {
        });
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
            // this.notificationAPI.alertWarning("Invalid Year")
        }
    }
    // getData() {
    //   this.loading = true;
    //   let params = new HttpParams()
    //   .set('empPF',this.tokenService.getUser().empPfNo)
    //   .set('periody',this.year);
    //   this.payrollService.getPayslipPerEmpPF(params).subscribe(res=>{
    //     this.loading = false;
    //     this.data = res;
    //     if(this.data.statusCode == '302'){
    //       this.data = this.data.entity
    //       if(this.data.length != null || this.data.length>0) {
    //       this.dataSource = new MatTableDataSource(this.data);
    //       this.dataSource.paginator = this.paginator;
    //       this.dataSource.sort = this.sort;
    //       }
    //     }else{
    //       this.notificationAPI.alertWarning(this.data.message);
    //       this.dataSource = new MatTableDataSource(this.data.entity);
    //     }
    //   }, err=>{
    //   });
    // }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
DetailLeaveGridComponent.ɵfac = function DetailLeaveGridComponent_Factory(t) { return new (t || DetailLeaveGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_erp_hr_data_configuration_services_analysis_service__WEBPACK_IMPORTED_MODULE_0__.AnalysisService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService)); };
DetailLeaveGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailLeaveGridComponent, selectors: [["app-detail-leave-grid"]], viewQuery: function DetailLeaveGridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 33, vars: 6, consts: [[1, "header"], [1, "title"], [1, "filter"], ["placeholder", "Filter...", 1, "form-control", 3, "keyup"], ["input", ""], [1, ""], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "index"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "fromDate"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "toDate"], ["matColumnDef", "days"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matCellDef"], ["matColumnDef", "remainingdays"], ["matColumnDef", "handOverPF"], [4, "ngIf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["aria-label", "Select page", 3, "pageSizeOptions"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], ["mode", "query"], ["colspan", "4"]], template: function DetailLeaveGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Leave days details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function DetailLeaveGridComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "mat-table", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DetailLeaveGridComponent_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DetailLeaveGridComponent_mat_cell_12_Template, 2, 1, "mat-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, DetailLeaveGridComponent_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DetailLeaveGridComponent_mat_cell_15_Template, 3, 3, "mat-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DetailLeaveGridComponent_mat_header_cell_17_Template, 2, 0, "mat-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DetailLeaveGridComponent_mat_cell_18_Template, 3, 3, "mat-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](19, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, DetailLeaveGridComponent_mat_header_cell_20_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, DetailLeaveGridComponent_mat_cell_21_Template, 2, 1, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, DetailLeaveGridComponent_mat_header_cell_23_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DetailLeaveGridComponent_mat_cell_24_Template, 2, 1, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](25, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, DetailLeaveGridComponent_mat_header_cell_26_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DetailLeaveGridComponent_mat_cell_27_Template, 2, 1, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, DetailLeaveGridComponent_div_28_Template, 6, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, DetailLeaveGridComponent_mat_header_row_29_Template, 1, 0, "mat-header-row", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, DetailLeaveGridComponent_mat_row_30_Template, 1, 0, "mat-row", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, DetailLeaveGridComponent_mat_cell_31_Template, 2, 1, "mat-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "mat-paginator", 24);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_7__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtbGVhdmUtZ3JpZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 15740:
/*!**********************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/dashboard/pages/dashboard/dashboard.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gen-widgets/gen-widgets.component */ 28368);
/* harmony import */ var _components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/analytics/analytics.component */ 35821);





const _c0 = function () { return ["Home"]; };
class DashboardComponent {
    constructor(tokenCookieService) {
        this.tokenCookieService = tokenCookieService;
        this.isPageReloaded = false;
    }
    ngOnInit() {
        this.passwordFlag = this.tokenCookieService.getUser().systemGenPassword;
        this.currentUser = this.tokenCookieService.getUser().username;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_0__.TokenCookieService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 7, vars: 4, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Dashboard")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("active_item", "Dashboard");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_2__.GenWidgetsComponent, _components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_3__.AnalyticsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 28368:
/*!**************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/dashboard/pages/gen-widgets/gen-widgets.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenWidgetsComponent": () => (/* binding */ GenWidgetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_erp_hr_data_configuration_services_analysis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-hr/data/configuration-services/analysis.service */ 91781);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);






class GenWidgetsComponent {
    constructor(analysisAPI, tokenStorageService) {
        this.analysisAPI = analysisAPI;
        this.tokenStorageService = tokenStorageService;
        this.currentDate = new Date();
        this.$destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.loading = false;
        this.totalLeaveDays = 0;
        this.annualLeaveDaysBal = 0;
        this.avgAppraisalScore = 0;
        this.currQuarterAppraisalScore = 0;
    }
    ngOnDestroy() { }
    ngOnInit() {
        this.getAnalysisSummary();
    }
    getAnalysisSummary() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams()
            .set("empPf", this.tokenStorageService.getEmppf())
            .set("Year", this.currentDate.getFullYear());
        this.analysisAPI.getEmployeeAnalysis(params).subscribe((res) => {
            this.resData = res;
            this.totalLeaveDays = this.resData.totalLeaveDays || 0;
            this.annualLeaveDaysBal = this.resData.annualLeaveDaysBal || 0;
            this.avgAppraisalScore = this.resData.avgAppraisalScore || 0;
            this.currQuarterAppraisalScore =
                this.resData.currQuarterAppraisalScore || 0;
        }, (err) => { });
    }
    onTotalLeaveDays() {
        console.log("onTotalLeaveDays card clicked");
    }
    leaveDaysBalance() {
        console.log("leaveDaysBalance card clicked");
    }
    averageAppraisalBalance() {
        console.log("averageAppraisalBalance card clicked");
    }
    currentAppraisal() {
        console.log("currentAppraisal card clicked");
    }
}
GenWidgetsComponent.ɵfac = function GenWidgetsComponent_Factory(t) { return new (t || GenWidgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_hr_data_configuration_services_analysis_service__WEBPACK_IMPORTED_MODULE_0__.AnalysisService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService)); };
GenWidgetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GenWidgetsComponent, selectors: [["app-gen-widgets"]], decls: 65, vars: 4, consts: [[1, "row"], [1, "col-xl-3", "col-lg-6", 3, "click"], [1, "card", "bg-better-green"], [1, "card-statistic-3"], [1, "card-icon", "card-icon-large"], [1, "far", "fa-calendar-alt"], [1, "card-content"], [1, "card-title"], [1, "data-1"], ["mode", "determinate", "value", "40", 1, "progress-m", "progress-round", "progress-shadow", "l-orange-progress", "mt-2", "mb-2"], [1, "mb-0", "text-sm"], [1, "mr-2"], [1, "fa", "fa-arrow-up"], [1, "text-nowrap"], [1, "fas", "fa-balance-scale"], [1, "fas", "fa-chart-line"], [1, "fas", "fa-star"]], template: function GenWidgetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_1_listener() { return ctx.onTotalLeaveDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Total Leave Days Taken");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_17_listener() { return ctx.leaveDaysBalance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 2)(19, "div", 3)(20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 6)(23, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Leave Days Balance P.A");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_33_listener() { return ctx.averageAppraisalBalance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 2)(35, "div", 3)(36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 6)(39, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Avg. Appraisal Score P.A");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GenWidgetsComponent_Template_div_click_49_listener() { return ctx.currentAppraisal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 2)(51, "div", 3)(52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 6)(55, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Curr. Quarter Appraisal Score");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.totalLeaveDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.annualLeaveDaysBal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.avgAppraisalScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.currQuarterAppraisalScore);
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar], styles: [".bg-better-green[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #153b15, #349555);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbi13aWRnZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdURBQUE7QUFDRiIsImZpbGUiOiJnZW4td2lkZ2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1iZXR0ZXItZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNTNiMTUsICMzNDk1NTUpO1xufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_erp-hr-self-service_modules_dashboard_dashboard_module_ts.js.map
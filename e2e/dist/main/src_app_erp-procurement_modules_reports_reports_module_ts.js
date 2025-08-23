"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-procurement_modules_reports_reports_module_ts"],{

/***/ 8938:
/*!************************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/reports/pages/reports/reports.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsComponent": () => (/* binding */ ReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 9748);



const _c0 = function () { return ["Reports"]; };
class ReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(); };
ReportsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["app-reports"]], decls: 11, vars: 4, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card"], [1, "header"]], template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Procurement Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Reports")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0))("active_item", "Reports");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_1__.GenWidgetsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 48821:
/*!***************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/reports/reports-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsRoutingModule": () => (/* binding */ ReportsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/reports/reports.component */ 8938);
/* harmony import */ var _data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: "reports",
        component: _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_0__.ReportsComponent,
        canActivate: [_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'ProcurementModule', requiredPrivilege: ["Dashboard"] },
    },
];
class ReportsRoutingModule {
}
ReportsRoutingModule.ɵfac = function ReportsRoutingModule_Factory(t) { return new (t || ReportsRoutingModule)(); };
ReportsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ReportsRoutingModule });
ReportsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 47142:
/*!*******************************************************************!*\
  !*** ./src/app/erp-procurement/modules/reports/reports.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsModule": () => (/* binding */ ReportsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports-routing.module */ 48821);
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/reports/reports.component */ 8938);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 79091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
































class ReportsModule {
}
ReportsModule.ɵfac = function ReportsModule_Factory(t) { return new (t || ReportsModule)(); };
ReportsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ReportsModule });
ReportsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportsRoutingModule,
            //Additional imports
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.NgApexchartsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBarModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_20__.MatTableExporterModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__.MatToolbarModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_31__.NgxMaskModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ReportsModule, { declarations: [_pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_1__.ReportsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportsRoutingModule,
        //Additional imports
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.NgApexchartsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBarModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_20__.MatTableExporterModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__.MatToolbarModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_31__.NgxMaskModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_erp-procurement_modules_reports_reports_module_ts.js.map
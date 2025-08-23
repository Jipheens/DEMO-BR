"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-budget_modules_budget_budget_module_ts-src_app_erp-finance_data_services_expense--1bca86"],{

/***/ 30077:
/*!********************************************************************!*\
  !*** ./src/app/erp-budget/data/services/budget-reports.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetReportsService": () => (/* binding */ BudgetReportsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class BudgetReportsService {
    constructor(http) {
        this.http = http;
    }
    // Download variance Excel report
    downloadVarianceExcelReport(params) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        const requestOptions = {
            params: params,
            headers: headers,
            responseType: 'arraybuffer',
            withCredentials: false,
        };
        const API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/report/download/budget/variance`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: 'Variance_Report.xlsx',
                data: new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }),
            };
        }));
    }
    // Download budget balance Excel report
    downloadBudgetBalanceReport(params) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        const requestOptions = {
            params: params,
            headers: headers,
            responseType: 'arraybuffer',
            withCredentials: false,
        };
        const API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/report/download/budget/balance`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: 'Budget_Balance_Report.xlsx',
                data: new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }),
            };
        }));
    }
}
BudgetReportsService.ɵfac = function BudgetReportsService_Factory(t) { return new (t || BudgetReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
BudgetReportsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BudgetReportsService, factory: BudgetReportsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 15359:
/*!********************************************************************!*\
  !*** ./src/app/erp-budget/modules/budget/budget-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetRoutingModule": () => (/* binding */ BudgetRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _pages_budget_all_budgets_all_budgets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/budget/all-budgets/all-budgets.component */ 63920);
/* harmony import */ var _pages_budget_manage_budgets_manage_budgets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/budget/manage-budgets/manage-budgets.component */ 12859);
/* harmony import */ var _pages_budget_reports_budget_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/budget-reports/budget-reports.component */ 29245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    //Budgets
    {
        path: "all-budgets",
        component: _pages_budget_all_budgets_all_budgets_component__WEBPACK_IMPORTED_MODULE_1__.AllBudgetsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_0__.RoutePrivilegeGuard],
        data: { clientName: 'BudgetModule', requiredPrivilege: ["All Budgets"] },
    },
    {
        path: "manage-budgets",
        component: _pages_budget_manage_budgets_manage_budgets_component__WEBPACK_IMPORTED_MODULE_2__.ManageBudgetsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_0__.RoutePrivilegeGuard],
        data: { clientName: 'BudgetModule', requiredPrivilege: ["Manage Budgets"] },
    },
    {
        path: "budget-reports",
        component: _pages_budget_reports_budget_reports_component__WEBPACK_IMPORTED_MODULE_3__.BudgetReportsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_0__.RoutePrivilegeGuard],
        data: { clientName: 'BudgetModule', requiredPrivilege: ["Dashboard"] },
    },
];
class BudgetRoutingModule {
}
BudgetRoutingModule.ɵfac = function BudgetRoutingModule_Factory(t) { return new (t || BudgetRoutingModule)(); };
BudgetRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BudgetRoutingModule });
BudgetRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BudgetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 91161:
/*!************************************************************!*\
  !*** ./src/app/erp-budget/modules/budget/budget.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetModule": () => (/* binding */ BudgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _budget_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget-routing.module */ 15359);
/* harmony import */ var _pages_budget_manage_budgets_manage_budgets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/budget/manage-budgets/manage-budgets.component */ 12859);
/* harmony import */ var _pages_budget_all_budgets_all_budgets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/budget/all-budgets/all-budgets.component */ 63920);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/badge */ 70178);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 43672);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/slider */ 61859);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 95374);
/* harmony import */ var _pages_dialogs_budget_validation_budget_validation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dialogs/budget-validation/budget-validation.component */ 11601);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _pages_budget_imports_budget_budget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/budget-imports/budget/budget.component */ 46986);
/* harmony import */ var _pages_budget_imports_budget_exp_budget_exp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/budget-imports/budget-exp/budget-exp.component */ 66013);
/* harmony import */ var _pages_budget_imports_mng_budget_dialog_mng_budget_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/budget-imports/mng-budget-dialog/mng-budget-dialog.component */ 66746);
/* harmony import */ var _pages_budget_reports_budget_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/budget-reports/budget-reports.component */ 29245);
/* harmony import */ var _pages_dialogs_budget_report_dialog_budget_report_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/dialogs/budget-report-dialog/budget-report-dialog.component */ 41978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);


























































class BudgetModule {
}
BudgetModule.ɵfac = function BudgetModule_Factory(t) { return new (t || BudgetModule)(); };
BudgetModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: BudgetModule });
BudgetModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _budget_routing_module__WEBPACK_IMPORTED_MODULE_0__.BudgetRoutingModule,
            //Additional imports
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__.NgApexchartsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTabsModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatCheckboxModule,
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_28__.MatTableExporterModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinnerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormFieldModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__.MatDatepickerModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_34__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__.MatSnackBarModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__.MatToolbarModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__.MatStepperModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_39__.NgxMaskModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_40__.MatChipsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_41__.MatBadgeModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__.MatAutocompleteModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_43__.MatBottomSheetModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_44__.MatListModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_45__.MatSidenavModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_46__.MatExpansionModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_47__.MatSliderModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_48__.NgbModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__.MatRadioModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](BudgetModule, { declarations: [_pages_budget_all_budgets_all_budgets_component__WEBPACK_IMPORTED_MODULE_2__.AllBudgetsComponent,
        _pages_budget_manage_budgets_manage_budgets_component__WEBPACK_IMPORTED_MODULE_1__.ManageBudgetsComponent,
        _pages_dialogs_budget_validation_budget_validation_component__WEBPACK_IMPORTED_MODULE_6__.BudgetValidationComponent,
        _pages_budget_imports_budget_budget_component__WEBPACK_IMPORTED_MODULE_7__.BudgetComponent,
        _pages_budget_imports_budget_exp_budget_exp_component__WEBPACK_IMPORTED_MODULE_8__.BudgetExpComponent,
        _pages_budget_imports_mng_budget_dialog_mng_budget_dialog_component__WEBPACK_IMPORTED_MODULE_9__.MngBudgetDialogComponent,
        _pages_budget_reports_budget_reports_component__WEBPACK_IMPORTED_MODULE_10__.BudgetReportsComponent,
        _pages_dialogs_budget_report_dialog_budget_report_dialog_component__WEBPACK_IMPORTED_MODULE_11__.BudgetReportDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _budget_routing_module__WEBPACK_IMPORTED_MODULE_0__.BudgetRoutingModule,
        //Additional imports
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__.NgApexchartsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTabsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatCheckboxModule,
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_28__.MatTableExporterModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__.MatDatepickerModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_34__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__.MatToolbarModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__.MatStepperModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_39__.NgxMaskModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_40__.MatChipsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_41__.MatBadgeModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__.MatAutocompleteModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_43__.MatBottomSheetModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_44__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_45__.MatSidenavModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_46__.MatExpansionModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_47__.MatSliderModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_48__.NgbModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__.MatRadioModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetComponentScope"](_pages_budget_all_budgets_all_budgets_component__WEBPACK_IMPORTED_MODULE_2__.AllBudgetsComponent, [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTabLabel, _pages_budget_imports_budget_budget_component__WEBPACK_IMPORTED_MODULE_7__.BudgetComponent], []);


/***/ }),

/***/ 66013:
/*!***************************************************************************************************!*\
  !*** ./src/app/erp-budget/modules/budget/pages/budget-imports/budget-exp/budget-exp.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetExpComponent": () => (/* binding */ BudgetExpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function BudgetExpComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const distribution_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", distribution_r1.month, " ", distribution_r1.year, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](distribution_r1.amount);
} }
class BudgetExpComponent {
    constructor() { }
    ngOnInit() {
        console.log("budgetExp: ", this.budgetExp);
    }
}
BudgetExpComponent.ɵfac = function BudgetExpComponent_Factory(t) { return new (t || BudgetExpComponent)(); };
BudgetExpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetExpComponent, selectors: [["app-budget-exp"]], inputs: { budgetExp: "budgetExp" }, decls: 5, vars: 2, consts: [[1, "budget-exp"], [4, "ngFor", "ngForOf"]], template: function BudgetExpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BudgetExpComponent_li_4_Template, 5, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.budgetExp.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.budgetExp.budgetdistributions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".budget-exp[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.budget-exp[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.budget-exp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n.budget-exp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.budget-exp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1ZGdldC1leHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxtQkFBQTtBQUNOO0FBRUk7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFBTjtBQUVNO0VBQ0Usa0JBQUE7QUFBUjtBQUVRO0VBQ0Usa0JBQUE7QUFBViIsImZpbGUiOiJidWRnZXQtZXhwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1ZGdldC1leHAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIFxuICAgIGgzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICBcbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwO1xuICBcbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 46986:
/*!*******************************************************************************************!*\
  !*** ./src/app/erp-budget/modules/budget/pages/budget-imports/budget/budget.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetComponent": () => (/* binding */ BudgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _mng_budget_dialog_mng_budget_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mng-budget-dialog/mng-budget-dialog.component */ 66746);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);









function BudgetComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const year_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r7);
} }
function BudgetComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const month_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](month_r8);
} }
function BudgetComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function BudgetComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const date_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 1, date_r10, "short"));
} }
function BudgetComponent_ng_container_45_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function BudgetComponent_ng_container_45_ng_container_12_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const month_r20 = ctx.$implicit;
    const budgetexp_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r19.getAmountForMonth(budgetexp_r17, month_r20));
} }
function BudgetComponent_ng_container_45_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "th")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BudgetComponent_ng_container_45_ng_container_12_ng_container_9_Template, 3, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 4)(11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BudgetComponent_ng_container_45_ng_container_12_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const budgetexp_r17 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.mngBudgetRecord(budgetexp_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const budgetexp_r17 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](budgetexp_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](budgetexp_r17.allowOverride);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.months);
} }
function BudgetComponent_ng_container_45_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const month_r24 = ctx.$implicit;
    const budget_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.calculateCategoryTotal(budget_r11, month_r24));
} }
function BudgetComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Budget Exp Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Override?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BudgetComponent_ng_container_45_ng_container_10_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BudgetComponent_ng_container_45_ng_container_12_Template, 14, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "th")(15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "th")(19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, BudgetComponent_ng_container_45_ng_container_20_Template, 3, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const budget_r11 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](budget_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.months);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", budget_r11.budgetexps);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.months);
} }
function BudgetComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function BudgetComponent_ng_container_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const month_r27 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.calculateGrandTotal(month_r27));
} }
class BudgetComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.refreshData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.displayedColumns = ["name", "budgetexps"];
        this.months = [
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
    }
    ngOnInit() {
        console.log("budgets: ", this.budgets);
    }
    ngAfterViewInit() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.budgets);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
    getAmountForMonth(budgetItem, month) {
        if (budgetItem && budgetItem.budgetdistributions) {
            const budgetDistribution = budgetItem.budgetdistributions.find((distribution) => distribution.month === month);
            return budgetDistribution
                ? parseFloat(budgetDistribution.amount.toFixed(4))
                : 0;
        }
        else {
            return 0;
        }
    }
    calculateTotal(budgetexps, index, month) {
        let total = 0;
        for (let i = 0; i <= index; i++) {
            total += this.getAmountForMonth(budgetexps[i], month);
        }
        return total;
    }
    calculateCategoryTotal(budget, month) {
        let total = 0;
        if (budget && budget.budgetexps) {
            for (const budgetexp of budget.budgetexps) {
                const budgetDistribution = budgetexp.budgetdistributions.find((distribution) => distribution.month === month);
                if (budgetDistribution) {
                    total += budgetDistribution.amount;
                }
            }
        }
        return total;
    }
    calculateGrandTotal(month) {
        let grandTotal = 0;
        this.budgets.forEach((budget) => {
            budget.budgetexps.forEach((budgetexp) => {
                budgetexp.budgetdistributions.forEach((distribution) => {
                    if (distribution.month === month) {
                        grandTotal += distribution.amount;
                    }
                });
            });
        });
        return grandTotal;
    }
    getYears() {
        const years = [];
        if (this.budgets && this.budgets.length > 0) {
            this.budgets[0].budgetexps[0].budgetdistributions.forEach((distribution) => {
                years.push(distribution.year);
            });
        }
        return years;
    }
    //
    getDates() {
        const dates = [];
        if (this.budgets && this.budgets.length > 0) {
            this.budgets[0].budgetexps[0].budgetdistributions.forEach((distribution) => {
                dates.push(distribution.date);
            });
        }
        return dates;
    }
    mngBudgetRecord(selectedRecord) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "700px";
        dialogConfig.data = {
            action: "Edit Budget",
            selected: selectedRecord,
        };
        const dialogRef = this.dialog.open(_mng_budget_dialog_mng_budget_dialog_component__WEBPACK_IMPORTED_MODULE_0__.MngBudgetDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            this.refreshData.emit();
        });
    }
}
BudgetComponent.ɵfac = function BudgetComponent_Factory(t) { return new (t || BudgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
BudgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BudgetComponent, selectors: [["app-budget"]], viewQuery: function BudgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { budgets: "budgets" }, outputs: { refreshData: "refreshData" }, decls: 63, vars: 7, consts: [["id", "new-orders", 1, "budget-table", "media-list", 2, "position", "relative", "max-height", "800px"], ["id", "new-orders-table", 1, "table", "table-hover", "table-xl", "mb-0"], [1, "sticky-row"], [4, "ngFor", "ngForOf"], ["scope", "col", 1, "sticky-column"], [1, "totals-row"], [1, "edit-button", 3, "click"], [1, "fas", "fa-edit"]], template: function BudgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "table", 1)(2, "tbody")(3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "P&L BUDGET");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "th")(8, "th")(9, "th")(10, "th")(11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BudgetComponent_ng_container_12_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "th")(17, "th")(18, "th")(19, "th")(20, "th")(21, "th")(22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, BudgetComponent_ng_container_23_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "th")(27, "th")(28, "th")(29, "th")(30, "th")(31, "th")(32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, BudgetComponent_ng_container_33_Template, 2, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "th")(37, "th")(38, "th")(39, "th")(40, "th")(41, "th")(42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, BudgetComponent_ng_container_43_Template, 4, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, BudgetComponent_ng_container_45_Template, 22, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "th")(48, "th")(49, "th")(50, "th")(51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, BudgetComponent_ng_container_52_Template, 2, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Grand Totals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "th")(59, "th")(60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, BudgetComponent_ng_container_61_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getYears());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getDates());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.budgets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.months);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: [".budget-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: auto;\n  border-collapse: collapse;\n  font-family: Arial, sans-serif;\n}\n.budget-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .budget-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n.budget-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  font-weight: bold;\n}\n.budget-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n.budget-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n}\n.budget-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .totals-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #b7b7b7;\n  color: #fff;\n  font-weight: bold;\n}\n.budget-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .totals-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 8px;\n}\n.budget-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .totals-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 8px;\n}\n.budget-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .totals-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.budget-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .budget-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.budget-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .totals-row[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.budget-table[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  background-color: #4CAF50;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 10px;\n}\n.budget-table[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]:hover {\n  background-color: #45a049;\n}\n.budget-table[_ngcontent-%COMP%]   .sticky-column[_ngcontent-%COMP%] {\n  position: sticky;\n  right: 0;\n  z-index: 1;\n  background-color: #fff;\n}\n.budget-table[_ngcontent-%COMP%]   .sticky-row[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n.budget-table[_ngcontent-%COMP%]   .sticky-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1ZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSUk7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQWxJTjtBQW9JTTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBbElSO0FBcUlNO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQW5JUjtBQXNJTTtFQUNFLHlCQUFBO0FBcElSO0FBdUlNO0VBQ0UseUJBQUE7QUFySVI7QUF3SU07RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXRJUjtBQXlJTTtFQUNFLDJCQUFBO0FBdklSO0FBMElNO0VBQ0UsNEJBQUE7QUF4SVI7QUEySU07RUFDRSxpQkFBQTtBQXpJUjtBQTRJTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQTFJUjtBQTZJTTtFQUNFLHlCQUFBO0FBM0lSO0FBeUpJO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQXZKTjtBQTBKTTtFQUNFLHlCQUFBO0FBeEpSO0FBNEpNO0VBQ0UsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBMUpSO0FBK0pNO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBN0pSO0FBZ0tJO0VBQ0ksdUJBQUE7QUE5SlIiLCJmaWxlIjoiYnVkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmJ1ZGdldC10YWJsZSB7XG4vLyAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBcbi8vICAgICB0YWJsZSB7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4vLyAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIFxuLy8gICAgICAgdGgsIHRkIHtcbi8vICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbi8vICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbi8vICAgICAgICAgcGFkZGluZzogOHB4O1xuLy8gICAgICAgfVxuICBcbi8vICAgICAgIHRoIHtcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICB9XG4gIFxuLy8gICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbi8vICAgICAgIH1cbiAgXG4vLyAgICAgICB0cjpob3ZlciB7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4vLyAgICAgICB9XG4gIFxuLy8gICAgICAgLnRvdGFscy1yb3cgdGgge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdiN2I3O1xuLy8gICAgICAgICBjb2xvcjogI2ZmZjsgXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgIH1cbiAgXG4vLyAgICAgICAudG90YWxzLXJvdyB0aDpmaXJzdC1jaGlsZCB7XG4vLyAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbi8vICAgICAgIH1cbiAgXG4vLyAgICAgICAudG90YWxzLXJvdyB0aDpsYXN0LWNoaWxkIHtcbi8vICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbi8vICAgICAgIH1cbiAgXG4vLyAgICAgICAudG90YWxzLXJvdyB0ZCB7XG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgIH1cbiAgXG4vLyAgICAgICB0aCwgdGQge1xuLy8gICAgICAgICBwYWRkaW5nOiA4cHg7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuLy8gICAgICAgfVxuICBcbi8vICAgICAgIC50b3RhbHMtcm93IHtcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbiAgXG5cblxuXG4vLyAuYnVkZ2V0LXRhYmxlIHtcbi8vICAgICB0YWJsZSB7XG4vLyAgICAgICB3aWR0aDogYXV0bzsgLyogQ2hhbmdlIHRoaXMgdG8gJ2F1dG8nICovXG4vLyAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuLy8gICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBcbi8vICAgICAgIHRoLCB0ZCB7XG4vLyAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAgICAgICAgIHBhZGRpbmc6IDhweDtcbi8vICAgICAgIH1cbiAgXG4vLyAgICAgICB0aCB7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgfVxuICBcbi8vICAgICAgIHRyOm50aC1jaGlsZChldmVuKSB7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4vLyAgICAgICB9XG4gIFxuLy8gICAgICAgdHI6aG92ZXIge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuLy8gICAgICAgfVxuICBcbi8vICAgICAgIC50b3RhbHMtcm93IHRoIHtcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I3YjdiNztcbi8vICAgICAgICAgY29sb3I6ICNmZmY7IFxuLy8gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIH1cbiAgXG4vLyAgICAgICAudG90YWxzLXJvdyB0aDpmaXJzdC1jaGlsZCB7XG4vLyAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbi8vICAgICAgIH1cbiAgXG4vLyAgICAgICAudG90YWxzLXJvdyB0aDpsYXN0LWNoaWxkIHtcbi8vICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbi8vICAgICAgIH1cbiAgXG4vLyAgICAgICAudG90YWxzLXJvdyB0ZCB7XG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgfVxuICBcbi8vICAgICAgIHRoLCB0ZCB7XG4vLyAgICAgICAgIHBhZGRpbmc6IDhweDtcbi8vICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbi8vICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbi8vICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4vLyAgICAgICB9XG4gIFxuLy8gICAgICAgLnRvdGFscy1yb3cge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbiAgXG4vLyAgICAgb3ZlcmZsb3cteDogYXV0byAhaW1wb3J0YW50OyBcbi8vICAgfVxuICBcblxuXG5cblxuXG4uYnVkZ2V0LXRhYmxlIHtcbiAgIC8vIG92ZXJmbG93LXg6IGF1dG8gIWltcG9ydGFudDtcbiAgXG4gICAgdGFibGUge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBcbiAgICAgIHRoLCB0ZCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIH1cbiAgXG4gICAgICB0aCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICBcbiAgICAgIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICB9XG4gIFxuICAgICAgdHI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgfVxuICBcbiAgICAgIC50b3RhbHMtcm93IHRoIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I3YjdiNztcbiAgICAgICAgY29sb3I6ICNmZmY7IFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgXG4gICAgICAudG90YWxzLXJvdyB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgICAgIH1cbiAgXG4gICAgICAudG90YWxzLXJvdyB0aDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICAgIH1cbiAgXG4gICAgICAudG90YWxzLXJvdyB0ZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICBcbiAgICAgIHRoLCB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9XG4gIFxuICAgICAgLnRvdGFscy1yb3cge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gLmVkaXQtYnV0dG9uIHtcbiAgICAvLyAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgLy8gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyAgICAgYm9yZGVyOiBub25lO1xuICAgIC8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvLyAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vICAgfVxuICAgIC5lZGl0LWJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgXG4gICAgICAuZWRpdC1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xuICAgICAgfVxuXG5cbiAgICAgIC5zdGlja3ktY29sdW1uIHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICB6LWluZGV4OiAxOyBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXG4gICAgICB9XG5cblxuXG4gICAgICAuc3RpY2t5LXJvdyB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgei1pbmRleDogMjsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICB9XG4gICAgXG4gICAgLnN0aWNreS1yb3cgdGgge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgfVxuICAgIFxuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 66746:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/erp-budget/modules/budget/pages/budget-imports/mng-budget-dialog/mng-budget-dialog.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MngBudgetDialogComponent": () => (/* binding */ MngBudgetDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_finance_data_lookups_expense_lookup_expense_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/expense-lookup/expense-lookup.component */ 30417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_erp_budget_data_services_budget_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-budget/data/services/budget.service */ 64608);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ 68390);














function MngBudgetDialogComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-bar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class MngBudgetDialogComponent {
    constructor(dialogRef, data, fb, budgetService, snackbar, accessControlService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.budgetService = budgetService;
        this.snackbar = snackbar;
        this.accessControlService = accessControlService;
        this.dialog = dialog;
        this.pageFunction = "Update";
        this.selectedExpenseItem = [];
        this.hasOverridePrivilege = true;
        this.isLoading = false;
        this.posting = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        this.formData = this.data.selected;
        this.generateForm(this.formData);
    }
    generateForm(formData) {
        this.mngForm = this.fb.group({
            id: [(formData === null || formData === void 0 ? void 0 : formData.id) || ""],
            // expCode: [formData?.expenseCode || "", [Validators.required]],
            // expName: [formData?.expenseName || ""],
            allowOverride: [(formData === null || formData === void 0 ? void 0 : formData.allowOverride) || ""],
        });
    }
    expenseLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "Single Expense",
            selected: this.selectedExpenseItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_expense_lookup_expense_lookup_component__WEBPACK_IMPORTED_MODULE_0__.ExpenseLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            res.data.forEach((element) => {
                this.mngForm.patchValue({
                    expCode: element.expenseCode,
                    expName: element.expenseName,
                });
            });
        });
    }
    budgetOverride(event) {
        if (event.value == "Yes") {
        }
    }
    checkBudgetOverridePrivilege() {
        let privilege = "Manage Budget Override";
        this.hasAccess = this.accessControlService.hasPrivilege("BudgetModule", [
            privilege,
        ]);
        if (this.hasAccess) {
            this.hasOverridePrivilege = true;
        }
        else {
            this.hasOverridePrivilege = false;
        }
    }
    submit() {
        this.posting = true;
        if (this.pageFunction === "Update") {
            console.log("this.mngForm.value :: ", this.mngForm.value);
            this.budgetService
                .updateBudgets(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    this.response = res;
                    console.log("resres:: ", res);
                    if (res.statusCode == 201 || 200 || 0) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                    }
                    else {}
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                },
                complete: () => {
                    this.posting = false;
                    this.onNoClick();
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription;
        }
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.response });
    }
}
MngBudgetDialogComponent.ɵfac = function MngBudgetDialogComponent_Factory(t) { return new (t || MngBudgetDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_budget_data_services_budget_service__WEBPACK_IMPORTED_MODULE_1__.BudgetsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
MngBudgetDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MngBudgetDialogComponent, selectors: [["app-mng-budget-dialog"]], decls: 34, vars: 9, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/em.png", "width", "30px", "height", "30px", "alt", ""], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], ["class", "m-2", 4, "ngIf"], [1, "register-form", "mx-2", 3, "formGroup"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "example-section"], [1, "example-margin"], ["formControlName", "allowOverride", 3, "change"], ["value", "Y", 1, "example-margin", 3, "disabled"], ["value", "N", 1, "example-margin", 3, "disabled"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["align", "end", 1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], [1, "m-2"], ["color", "primary", "mode", "indeterminate"]], template: function MngBudgetDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MngBudgetDialogComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MngBudgetDialogComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "form", 10)(16, "div", 11)(17, "div", 12)(18, "section", 13)(19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Allow Override? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-radio-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function MngBudgetDialogComponent_Template_mat_radio_group_change_21_listener($event) { return ctx.budgetOverride($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-radio-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 11)(27, "div", 18)(28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MngBudgetDialogComponent_Template_button_click_30_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MngBudgetDialogComponent_Template_button_click_32_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Budget Record");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.hasOverridePrivilege);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.hasOverridePrivilege);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("auth-spinner", ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.mngForm.valid || ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.pageFunction, " Budget Line ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtbmctYnVkZ2V0LWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 29245:
/*!********************************************************************************************!*\
  !*** ./src/app/erp-budget/modules/budget/pages/budget-reports/budget-reports.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetReportsComponent": () => (/* binding */ BudgetReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _dialogs_budget_report_dialog_budget_report_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialogs/budget-report-dialog/budget-report-dialog.component */ 41978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 10630);







const _c0 = function () { return ["Reports"]; };
class BudgetReportsComponent {
    constructor(dialog, router) {
        this.dialog = dialog;
        this.router = router;
    }
    ngOnInit() { }
    generateReport(type) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "600px";
        dialogConfig.data = {
            type: type,
        };
        const dialogRef = this.dialog.open(_dialogs_budget_report_dialog_budget_report_dialog_component__WEBPACK_IMPORTED_MODULE_0__.BudgetReportDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            // result.data.forEach((element) => {
            // });
        });
    }
    previewReport(type) {
        if (type === "ProfitAndLoss") {
            let route = "/erp-finance/finance-management/preview-profit-loss";
            this.router.navigate([route], {
                queryParams: {
                    action: "View",
                },
            });
        }
        else if (type === "BalanceSheet") {
            let route = "/erp-finance/finance-management/preview-balance-sheet";
            this.router.navigate([route], {
                queryParams: {
                    action: "View",
                },
            });
        }
        else if (type === "TrialBalance") {
            let route = "/erp-finance/finance-management/preview-trial-balance";
            this.router.navigate([route], {
                queryParams: {
                    action: "View",
                },
            });
        }
    }
}
BudgetReportsComponent.ɵfac = function BudgetReportsComponent_Factory(t) { return new (t || BudgetReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
BudgetReportsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BudgetReportsComponent, selectors: [["app-budget-reports"]], decls: 35, vars: 4, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card"], [1, "header"], [1, "body"], [1, "doc-file-type"], [1, "list-unstyled"], [1, "d-flex", "mb-3", 3, "click"], [1, "msr-3", "align-self-center", "img-icon", "primary-rgba", "text-primary"], [1, "far", "fa-file-word"], [1, "set-flex"], [1, "font-16", "mb-1"], [1, "ms-auto"], [1, "far", "fa-arrow-alt-circle-down", 3, "click"], [1, "msr-3", "align-self-center", "img-icon", "success-rgba", "text-success"], [1, "far", "fa-file-excel"]], template: function BudgetReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Budget Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "ul", 10)(14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BudgetReportsComponent_Template_li_click_14_listener() { return ctx.generateReport("BudgetVariance"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14)(18, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Budget Variance");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 16)(23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BudgetReportsComponent_Template_i_click_23_listener() { return ctx.generateReport("BudgetVariance"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BudgetReportsComponent_Template_li_click_24_listener() { return ctx.generateReport("BudgetBalance"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 14)(28, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Budget Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, ".pdf document");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 16)(33, "td")(34, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BudgetReportsComponent_Template_i_click_34_listener() { return ctx.generateReport("BalanceSheet"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Budget Reports")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("active_item", "Reports");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_2__.GenWidgetsComponent], styles: [".list-unstyled[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: stretch;\n  padding: 20px;\n  background-color: #EBEBEE;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 48%;\n  margin-bottom: 20px;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease-in-out;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .msr-3[_ngcontent-%COMP%] {\n  color: #008000;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .set-flex[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #333;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .set-flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ms-auto[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 5px;\n  color: #333;\n  cursor: pointer;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ms-auto[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover {\n  background-color: #ccc;\n}\n\n\n\n@media (max-width: 768px) {\n  .list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-right: unset;\n  }\n}\n\nli[_ngcontent-%COMP%]   .fa-arrow-alt-circle-down[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   .fa-eye[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nli[_ngcontent-%COMP%]   .fa-arrow-alt-circle-down[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1ZGdldC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdDQUFBO0FBQUY7O0FBR0E7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0FBQUY7O0FBR0Esa0JBQUE7O0FBQ0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQUFGO0FBQ0Y7O0FBU0U7RUFDRSxlQUpRO0FBSFo7O0FBVUU7RUFDRSxpQkFBQTtBQVJKIiwiZmlsZSI6ImJ1ZGdldC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtdW5zdHlsZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cblxuLmxpc3QtdW5zdHlsZWQgbGkge1xuICB3aWR0aDogNDglO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmxpc3QtdW5zdHlsZWQgbGk6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saXN0LXVuc3R5bGVkIGxpIC5tc3ItMyB7XG4gIGNvbG9yOiAjMDA4MDAwO1xufVxuXG4ubGlzdC11bnN0eWxlZCBsaSAuc2V0LWZsZXggaDUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmxpc3QtdW5zdHlsZWQgbGkgLnNldC1mbGV4IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ubGlzdC11bnN0eWxlZCBsaSAubXMtYXV0byB0ZCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saXN0LXVuc3R5bGVkIGxpIC5tcy1hdXRvIHRkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLyogTWVkaWEgUXVlcmllcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5saXN0LXVuc3R5bGVkIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICB9XG59XG5cblxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuJGljb24tc2l6ZTogMjBweDsgXG5cbmxpIHtcbiAgLmZhLWFycm93LWFsdC1jaXJjbGUtZG93biwgLmZhLWV5ZSB7XG4gICAgZm9udC1zaXplOiAkaWNvbi1zaXplOyBcbiAgfVxuXG4gIC5mYS1hcnJvdy1hbHQtY2lyY2xlLWRvd24ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyBcbiAgfVxufVxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiJdfQ== */"] });


/***/ }),

/***/ 63920:
/*!*********************************************************************************************!*\
  !*** ./src/app/erp-budget/modules/budget/pages/budget/all-budgets/all-budgets.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllBudgetsComponent": () => (/* binding */ AllBudgetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_budget_data_services_budget_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-budget/data/services/budget.service */ 64608);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);













function AllBudgetsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-bar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllBudgetsComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Please enter year");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllBudgetsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Budget ");
} }
function AllBudgetsComponent_app_budget_33_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-budget", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("refreshData", function AllBudgetsComponent_app_budget_33_Template_app_budget_refreshData_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.refreshData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("budgets", ctx_r3.budgets);
} }
const _c0 = function () { return ["Budgets"]; };
class AllBudgetsComponent {
    constructor(router, snackbar, budgetsService, accessControlService, dialog, fb) {
        this.router = router;
        this.snackbar = snackbar;
        this.budgetsService = budgetsService;
        this.accessControlService = accessControlService;
        this.dialog = dialog;
        this.fb = fb;
        this.displayedColumns = [
            "select",
            "id",
            "budgetCode",
            "expenseCategory",
            "expenseCode",
            "expenseName",
            "expenseBudgetAmount",
            "status",
            "action",
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        this.isLoading = true;
        this.pageFunction = "Update";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.downloadLoading = false;
        // ****************************************************************************************************************************
        this.budgets = [];
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
        this.Form = this.fb.group({
            year: [this.currentYear, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        });
        this.getData();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getData() {
        this.isLoading = true;
        let params = { year: this.Form.value.year };
        this.budgetsService
            .getBudgetsByYear(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.data :", res);
                if (res.statusCode === 302) {
                    this.data = res;
                    this.budgets = this.data.entity;
                    this.isLoading = false;
                    console.log("this.data :", this.data);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => {
                this.isLoading = false;
            },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription;
    }
    refresh() {
        this.getData();
    }
    refreshData() {
        this.getData();
    }
    // ****************************************************************************************************************************
    addBudget() {
        this.router.navigate(["/erp-budget/budget/manage-budgets"]);
    }
    editBudget(data) {
        let route = "/erp-budget/budget/manage-budgets";
        this.router.navigate([route], {
            queryParams: { id: data.id, action: "Update" },
        });
    }
    viewBudget(data) {
        let route = "/erp-budget/budget/manage-budgets";
        this.router.navigate([route], {
            queryParams: { id: data.id, action: "View" },
        });
    }
    //verify Budget
    validateBudget(data) {
        let route = "/erp-budget/budget/manage-budgets";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                action: "Verify",
            },
        });
    }
    deleteBudget(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you sure?",
            text: "Do you really want to delete this Budget?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete Budget!",
        }).then((result) => {
            if (result.isConfirmed) {
                let params = { id: id };
                this.budgetsService
                    .deleteBudgetTemporarily(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        this.snackbar.showNotification("snackbar-success", res.message);
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getData();
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription;
            }
        });
    }
}
AllBudgetsComponent.ɵfac = function AllBudgetsComponent_Factory(t) { return new (t || AllBudgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_budget_data_services_budget_service__WEBPACK_IMPORTED_MODULE_2__.BudgetsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder)); };
AllBudgetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AllBudgetsComponent, selectors: [["app-all-budgets"]], viewQuery: function AllBudgetsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 34, vars: 11, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "header"], [1, "body"], [1, "materialTableHeaderCustom", "mx-0", "mt-1"], [1, "row", "mx-2"], [1, "col-lg-1", "col-md-4", "col-sm-12", "col-xs-12", "mb-0"], [1, "col-lg-11", "col-md-8", "col-sm-12", "col-xs-12", "mb-0"], [3, "formGroup"], [1, "row", "mt-2"], [1, "col-2"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "formControlName", "year", "required", ""], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["mat-tab-label", ""], ["class", "m-2", 3, "budgets", "refreshData", 4, "ngIf"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], ["src", "assets/images/user/user1.jpg", "alt", "user"], [1, "m-2", 3, "budgets", "refreshData"]], template: function AllBudgetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AllBudgetsComponent_div_6_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Budget Allocations");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Fetch By Year:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12)(17, "form", 13)(18, "div", 14)(19, "div", 15)(20, "mat-form-field", 16)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, AllBudgetsComponent_mat_error_24_Template, 2, 0, "mat-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 15)(26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllBudgetsComponent_Template_button_click_26_listener() { return ctx.getData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Fetch Budget ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-tab-group")(31, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, AllBudgetsComponent_ng_template_32_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, AllBudgetsComponent_app_budget_33_Template, 1, 1, "app-budget", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "All Budgets")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0))("active_item", "All Budgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.get("year").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("auth-spinner", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.budgets.length > 0);
    } }, styles: [".materialTableHeaderCustom[_ngcontent-%COMP%] {\n  background-color: #ebebee;\n  padding: 8px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  \n  \n  \n  \n  \n  \n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #535353;\n  margin-top: 10px;\n  text-align: start;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.all-payables[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #701c, rgba(78, 0, 12, 0.8));\n  color: white;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.finance-manager[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #4caf50, #8bc34a);\n  \n  color: white;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.senior-finance-manager[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #2196f3, #42a5f5);\n  \n  color: white;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.head-of-finance-strategy[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #00bcd4, #009688);\n  \n  color: white;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.managing-director-ceo[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #3f51b5, #673ab7);\n  \n  color: white;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.active[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #333333, #555555);\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%], .materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.active[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.2s ease-in-out;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.26);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1idWRnZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQVNBLGlCQUFBO0VBTUEsb0JBQUE7RUFVQSwyQkFBQTtFQVVBLGlDQUFBO0VBVUEsOEJBQUE7RUFVQSxvQ0FBQTtBQWhERjtBQUxFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBT0o7QUFIRTtFQUNFLGtFQUFBO0VBQ0EsWUFBQTtBQUtKO0FBREU7RUFDRSx1REFBQTtFQUlHLHVDQUFBO0VBQ0gsWUFBQTtBQUFKO0FBSUU7RUFDRSx1REFBQTtFQUlHLHVDQUFBO0VBQ0gsWUFBQTtBQUxKO0FBU0U7RUFDRSx1REFBQTtFQUlHLHVDQUFBO0VBQ0gsWUFBQTtBQVZKO0FBY0U7RUFDRSx1REFBQTtFQUlHLHVDQUFBO0VBQ0gsWUFBQTtBQWZKO0FBb0JFO0VBQ0UsdURBQUE7QUFsQko7QUFxQkU7O0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQ0FBQTtBQW5CSjtBQXNCRTtFQUNFLHFCQUFBO0VBQ0EsMkNBQUE7QUFwQkoiLCJmaWxlIjoiYWxsLWJ1ZGdldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0ZXJpYWxUYWJsZUhlYWRlckN1c3RvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjNTM1MzUzO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIH1cblxuICAvKiBBbGwgUGF5YWJsZXMgKi9cbiAgLm1hdC1idXR0b24uYWxsLXBheWFibGVzIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3MDFjLCByZ2JhKDc4LCAwLCAxMiwgMC44KSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogRmluYW5jZSBNYW5hZ2VyICovXG4gIC5tYXQtYnV0dG9uLmZpbmFuY2UtbWFuYWdlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gcmlnaHQsXG4gICAgICAjNGNhZjUwLFxuICAgICAgIzhiYzM0YVxuICAgICk7IC8qIEV4YW1wbGUgZ3JhZGllbnQsIGFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAvKiBTZW5pb3IgRmluYW5jZSBNYW5hZ2VyICovXG4gIC5tYXQtYnV0dG9uLnNlbmlvci1maW5hbmNlLW1hbmFnZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgIzIxOTZmMyxcbiAgICAgICM0MmE1ZjVcbiAgICApOyAvKiBFeGFtcGxlIGdyYWRpZW50LCBhZGp1c3QgYXMgbmVlZGVkICovXG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogSGVhZCBvZiBGaW5hbmNlIGFuZCBTdHJhdGVneSAqL1xuICAubWF0LWJ1dHRvbi5oZWFkLW9mLWZpbmFuY2Utc3RyYXRlZ3kge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgIzAwYmNkNCxcbiAgICAgICMwMDk2ODhcbiAgICApOyAvKiBFeGFtcGxlIGdyYWRpZW50LCBhZGp1c3QgYXMgbmVlZGVkICovXG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogTWFuYWdpbmcgRGlyZWN0b3IgYW5kIENFTyAqL1xuICAubWF0LWJ1dHRvbi5tYW5hZ2luZy1kaXJlY3Rvci1jZW8ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgIzNmNTFiNSxcbiAgICAgICM2NzNhYjdcbiAgICApOyAvKiBFeGFtcGxlIGdyYWRpZW50LCBhZGp1c3QgYXMgbmVlZGVkICovXG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogQWRkIG90aGVyIGJ1dHRvbiBzdHlsZXMgaGVyZS4uLiAqL1xuXG4gIC5tYXQtYnV0dG9uLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzMzMzMzLCAjNTU1NTU1KTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLFxuICAubWF0LWJ1dHRvbi5hY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 12859:
/*!***************************************************************************************************!*\
  !*** ./src/app/erp-budget/modules/budget/pages/budget/manage-budgets/manage-budgets.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageBudgetsComponent": () => (/* binding */ ManageBudgetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _dialogs_budget_validation_budget_validation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialogs/budget-validation/budget-validation.component */ 11601);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_erp_finance_data_lookups_expense_lookup_expense_lookup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/expense-lookup/expense-lookup.component */ 30417);
/* harmony import */ var src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/ccentre-lookup/ccentre-lookup.component */ 64622);
/* harmony import */ var src_app_erp_finance_data_lookups_department_lookup_department_lookup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/department-lookup/department-lookup.component */ 52039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_erp_budget_data_services_budget_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-budget/data/services/budget.service */ 64608);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/erp-procurement/data/services/notification.service */ 67879);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/file-upload/file-upload.component */ 67082);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 87317);



























const _c0 = ["fileInput"];
function ManageBudgetsComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "div", 18)(5, "div", 14)(6, "div", 19)(7, "div", 14)(8, "div", 20)(9, "div", 21)(10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "HOD Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 23)(13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 20)(16, "div", 21)(17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "HOD Approved By");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 23)(20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 14)(23, "div", 26)(24, "div", 27)(25, "div", 28)(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "HOD Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 19)(31, "div", 14)(32, "div", 20)(33, "div", 21)(34, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "Finance Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 23)(37, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div", 20)(40, "div", 21)(41, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "Finance Approved By");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div", 23)(44, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "div", 14)(47, "div", 26)(48, "div", 27)(49, "div", 28)(50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "Finance Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.hodApprovalStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.hodApprovedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.formData.hodApprovalReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.financeApprovalStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.financeApprovedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.formData.financeApprovalReason);
} }
function ManageBudgetsComponent_div_7_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-tab", 32)(1, "div", 33)(2, "div", 34)(3, "div", 35)(4, "div", 4)(5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Upload Excel File");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 36)(8, "div", 37)(9, "app-file-upload", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ManageBudgetsComponent_div_7_mat_tab_5_Template_app_file_upload_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r4.onFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 39)(11, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ManageBudgetsComponent_div_7_mat_tab_5_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r6.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ManageBudgetsComponent_div_7_mat_tab_5_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r7.submitBatch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, " Submit Batch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx_r3.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("auth-spinner", ctx_r3.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx_r3.hideSubmit)("disabled", ctx_r3.posting);
} }
function ManageBudgetsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ManageBudgetsComponent_div_7_div_1_Template, 54, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 10)(3, "mat-tab-group", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, ManageBudgetsComponent_div_7_mat_tab_5_Template, 16, 5, "mat-tab", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.pageFunction !== "Add" && ctx_r0.formData);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.pageFunction === "Add");
} }
const _c1 = function () { return ["Budgets"]; };
class ManageBudgetsComponent {
    constructor(fb, router, tokenStorageService, budgetManService, snackbar, route, dialog, accessControlService, notificationAPI, http) {
        this.fb = fb;
        this.router = router;
        this.tokenStorageService = tokenStorageService;
        this.budgetManService = budgetManService;
        this.snackbar = snackbar;
        this.route = route;
        this.dialog = dialog;
        this.accessControlService = accessControlService;
        this.notificationAPI = notificationAPI;
        this.http = http;
        // ****************************************************************************************************************************
        // define the needed variables
        this.showForm = false;
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.disableActions = false;
        this.hideApprovals = false;
        // ****************************************************************************************************************************
        //displayed Columns for monthly distributions table
        this.displayedColumns = ["id", "month", "amount", "actions"];
        //table binding
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource([]);
        //months datasource
        this.dataSourceMonths = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource([]);
        // ************************************************************
        //excel upload variables
        this.excelFileAccepted = false;
        //excel columns
        this.excelHeaderRef = ["expenseGlCode", "expenseName", "expenseType"];
        this.hasOverridePrivilege = true;
        // ****************************************************************************************************************************
        this.expenseCategories = [
            { name: "INTEREST INCOME" },
            { name: "INTEREST EXPENSE" },
            { name: "PROCESSING FEES" },
            { name: "Other Fees And Commissions" },
            { name: "Forex Income" },
            { name: "Other Income" },
            { name: "Staff Cost" },
            { name: "Directors’ emoluments- fees" },
            { name: "Administration Costs" },
            { name: "Rent Exp (IFRS 16)" },
            { name: "Legal and professional fees" },
            { name: "Consultancy & Audit Fees" },
            { name: "Depreciation and Amortization" },
            { name: "Loan Loss Provision" },
        ];
        this.budgets = [];
        // ****************************************************************************************************************************
        //mnhForm management variables
        this.selectedRowIndex = -1;
        this.showAddButton = false;
        this.showUpdateButton = false;
        this.showEditForm = false;
        this.items = []; // Array to store
        this.itemErrors = [];
        this.templateFilename = "BudgetTemplate.xlsx";
        // ****************************************************************************************************************************
        // Loook Ups
        this.selectedCostCenterItem = [];
        this.selectedExpenseItem = [];
        this.selectedDepartmentItem = [];
        // ****************************************************************************************************************************
        // submit button function
        this.posting = false;
        this.currentUser = this.tokenStorageService.getUser().username;
    }
    // ****************************************************************************************************************************
    //define actions on component initiaalization
    ngOnInit() {
        this.getPage();
        this.showForm = true;
        this.route.queryParams.subscribe((params) => {
            //  Confirm the received params from the parent component in path
            console.log("res", params);
            if (params.hasOwnProperty("id")) {
                const action = params["action"];
                if (action == "Update") {
                    this.pageFunction = "Update";
                }
                else if (action == "View") {
                    this.pageFunction = "View";
                }
                else if (action === "Verify") {
                    this.pageFunction = "Verify";
                    this.disableActions = true;
                }
                this.id = params["id"];
                this.getDataById();
            }
        });
        this.checkBudgetOverridePrivilege();
    }
    //
    checkBudgetOverridePrivilege() {
        let privilege = "Manage Budget Override";
        this.hasAccess = this.accessControlService.hasPrivilege("BudgetModule", [
            privilege,
        ]);
        if (this.hasAccess) {
            this.hasOverridePrivilege = true;
        }
        else {
            this.hasOverridePrivilege = false;
        }
    }
    // ****************************************************************************************************************************
    //definition of data destruction ones data utility is complete
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getDataById() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams().set("id", this.id);
        this.budgetManService
            .getBudgetsById(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                if (res.entity) {
                    this.budgets = res.entity;
                    this.showForm = true;
                    this.getPage();
                    console.log("this.budgets :", this.budgets);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => { },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription;
    }
    //definition of necessary functions based on action in params
    getPage() {
        console.log("RES", this.formData);
        if (this.pageFunction === "Add") {
            this.generateForm();
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "Update") {
            this.generateForm(this.formData);
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.hideSubmit = true;
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "Verify") {
            this.generateDisabledFormWithData();
            this.hideApprovals = false;
            this.hideSubmit = true;
        }
    }
    // ****************************************************************************************************************************
    //defining the pages behaviour based on action in params
    generateForm(formData) {
        var _a;
        this.mngForm = this.fb.group({
            id: (_a = formData === null || formData === void 0 ? void 0 : formData.id) !== null && _a !== void 0 ? _a : "",
            year: [formData === null || formData === void 0 ? void 0 : formData.year, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            expenseCategory: [formData === null || formData === void 0 ? void 0 : formData.expenseCategory, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            expenseCode: [formData === null || formData === void 0 ? void 0 : formData.expenseCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            expenseName: [formData === null || formData === void 0 ? void 0 : formData.expenseName, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            expenseBudgetAmount: [
                formData === null || formData === void 0 ? void 0 : formData.expenseBudgetAmount,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
            ],
            allowOverride: [(formData === null || formData === void 0 ? void 0 : formData.allowOverride) || "N", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
        });
        this.mnhForm = this.fb.group({
            month: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            amount: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
            ],
        });
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            id: [{ value: this.formData.id, disabled: true }],
            year: [{ value: this.formData.id, disabled: true }],
            expenseName: [{ value: this.formData.year, disabled: true }],
            expenseCode: [{ value: this.formData.expenseCode, disabled: true }],
            expenseCategory: [{ value: this.formData.expenseCode, disabled: true }],
            expenseBudgetName: [
                { value: this.formData.expenseBudgetName, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            ],
            expenseBudgetAmount: [
                { value: this.formData.expenseBudgetAmount, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
            ],
        });
        this.mnhForm = this.fb.group({
            month: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            amount: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
            ],
        });
        this.dataSource.data = this.formData.monthlyDistributions;
    }
    //****************************************************************************************************************************** */
    // onDateChange(event: MatDatepickerInputEvent<Date>) {
    //   const date = event.value;
    //   this.getMonths();
    //   console.log("monthsArray: ", this.months);
    // }
    // months: string[] = [];
    // getMonths() {
    //   const fromDate = new Date(this.mngForm.value.fromDate);
    //   const toDate = new Date(this.mngForm.value.toDate);
    //   if (fromDate <= toDate) {
    //     while (fromDate < toDate) {
    //       const month = fromDate.toLocaleString("default", { month: "long" });
    //       // Check if the month already exists in the dataSource
    //       const existingRecord = this.dataSource.data.find(
    //         (record) => record.month === month
    //       );
    //       if (existingRecord) {
    //         // If the month already exists, do nothing
    //         console.log(`Month ${month} already exists in the dataSource`);
    //       } else {
    //         // If the month doesn't exist, create a new record with amount 0
    //         const monthlyRecord = { id: "", month: month, amount: 0.0 };
    //         this.dataSource.data.push(monthlyRecord);
    //         this.dataSource.data = this.dataSource.data.slice();
    //         console.log(`Added new record for month ${month} to the dataSource`);
    //       }
    //       fromDate.setMonth(fromDate.getMonth() + 1);
    //     }
    //   }
    // }
    budgetOverride(event) {
        if (event.value == "Yes") {
        }
    }
    addToMonthlyDistribution() {
        this.showEditForm = true;
        this.showAddButton = true;
        this.showUpdateButton = false;
    }
    //adding the monthly distribution values to an array
    onAddMonthlyDistribution() {
        if (this.mnhForm.valid) {
            const newRecord = {
                amount: this.mnhForm.value.amount,
                month: this.mnhForm.value.month,
            };
            console.log("newRecord: ", newRecord);
            //push the array into a table
            this.dataSource.data.push(newRecord);
            this.dataSource.data = this.dataSource.data.slice();
            this.mnhForm.reset();
            this.showEditForm = false;
            this.showAddButton = true;
            this.showEditForm = false;
        }
    }
    updateMonthlyDistribution() {
        if (this.mnhForm.valid) {
            console.log("this.bgtForm: ", this.mnhForm.value);
            const updatedRecord = {
                id: this.mnhForm.value.id,
                month: this.mnhForm.value.month,
                amount: this.mnhForm.value.amount,
            };
            this.dataSource.data[this.selectedRowIndex] = updatedRecord;
            this.dataSource.data = this.dataSource.data.slice();
            this.mnhForm.reset();
            this.showEditForm = false;
            this.selectedRowIndex = -1;
        }
    }
    onEditMonthlyDistribution(row) {
        this.showEditForm = true;
        this.showAddButton = false;
        this.showUpdateButton = true;
        this.selectedRowIndex = this.dataSource.data.indexOf(row);
        this.mnhForm.patchValue({
            id: row.id,
            month: row.month,
            amount: row.amount,
        });
    }
    //filtering through the array
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    onDeleteMonthlyDistribution(index) {
        this.dataSource.data.splice(index, 1);
        this.dataSource.data = this.dataSource.data.slice();
    }
    //clearing the form
    clearForm() {
        this.mnhForm.reset();
        this.selectedRowIndex = -1; //resets the selected row index
    }
    // ****************************************************************************************************************************
    //cancel button function
    cancel() {
        this.router.navigate(["/erp-budget/budget/all-budgets"]);
    }
    handleFileInput(files) {
        const file = files.item(0);
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_18__.read(arrayBuffer, { type: "array" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = xlsx__WEBPACK_IMPORTED_MODULE_18__.utils.sheet_to_json(worksheet, { raw: true });
                this.items = jsonData;
                // this.items = [
                //   {
                //     costCenterName: "rrewrew",
                //     costCenterCode: "33343",
                //   },
                // ];
                console.log(" this.items :", this.items);
                this.itemsForm = this.fb.group({
                    items: this.fb.array([]), // Array of items
                });
                this.validateItems();
            };
            fileReader.readAsArrayBuffer(file);
        }
    }
    validateItems() {
        this.itemErrors = [];
        const items = this.items;
        // {
        //   "expenseCategory": "string",
        //   "expenseCode": "string",
        //   "expenseBudgetName": "string",
        //   "january": 0,
        //   "february": 0,
        //   "march": 0,
        //   "april": 0,
        //   "may": 0,
        //   "june": 0,
        //   "july": 0,
        //   "august": 0,
        //   "september": 0,
        //   "october": 0,
        //   "november": 0,
        //   "december": 0,
        //   "expenseBudgetAmount": 0
        // }
        const itemsFormArray = this.itemsForm.get("items");
        for (const item of items) {
            const formGroup = this.fb.group({
                // costCenterCode: [item.costCenterCode, [Validators.required]],
                // departmentCode: [item.departmentCode, [Validators.required]],
                // departmentName: [item.departmentName, [Validators.required]],
                //expenseBudgetName: [item.expenseBudgetName, [Validators.required]],
                expenseName: [item.expenseName, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
                expenseCategory: [item.expenseCategory, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
                expenseCode: [item.expenseCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
                expenseBudgetAmount: [
                    item.expenseBudgetAmount,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                january: [
                    item.january,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                february: [
                    item.february,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                march: [
                    item.march,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                april: [
                    item.april,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                may: [
                    item.may,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                june: [
                    item.june,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                july: [
                    item.july,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                august: [
                    item.august,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                september: [
                    item.september,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                october: [
                    item.october,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                november: [
                    item.november,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                december: [
                    item.december,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
            });
            itemsFormArray.push(formGroup);
            this.collectErrors(formGroup);
            if (formGroup.valid) {
            }
        }
    }
    collectErrors(control, path = "") {
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup) {
            Object.keys(control.controls).forEach((key) => {
                const subControl = control.get(key);
                const subPath = this.getErrorPath(path, key);
                this.collectErrors(subControl, subPath);
            });
        }
        else {
            const errors = control.errors;
            if (errors) {
                const itemError = {
                    field: path,
                    message: this.getErrorMessage(errors),
                };
                this.itemErrors.push(itemError);
            }
        }
    }
    getErrorPath(path, key) {
        return path ? `${path}.${key}` : key;
    }
    getErrorMessage(errors) {
        if (errors.required) {
            return "This field is required.";
        }
        else if (errors.pattern) {
            return "Invalid value.";
        }
        return "";
    }
    downloadTemplate() {
        const link = document.createElement("a");
        link.setAttribute("type", "hidden");
        link.href = `/assets/templates/${this.templateFilename}`;
        link.download = this.templateFilename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    onValidate(userType) {
        let privilege = "";
        switch (userType) {
            case "HOD":
                privilege = "HOD Budget Validation";
                break;
            case "Finance":
                privilege = "Finance Budget Validation";
                break;
            default:
                return;
        }
        this.hasAccess = this.accessControlService.hasPrivilege("BudgetModule", [
            privilege,
        ]);
        if (this.hasAccess) {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.width = "800px";
            dialogConfig.data = {
                data: this.formData,
                userType: userType,
            };
            const dialogRef = this.dialog.open(_dialogs_budget_validation_budget_validation_component__WEBPACK_IMPORTED_MODULE_0__.BudgetValidationComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                this.router.navigate(["/erp-budget/budget/all-budgets"]);
            });
        }
    }
    costCenterLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "600px";
        dialogConfig.data = {
            action: "View CostCenters",
            selected: this.selectedCostCenterItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_2__.CcentreLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            res.data.forEach((element) => {
                this.mngForm.patchValue({
                    costCenterCode: element.costCenterCode,
                });
            });
        });
    }
    expenseLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "View Expense",
            selected: this.selectedExpenseItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_expense_lookup_expense_lookup_component__WEBPACK_IMPORTED_MODULE_1__.ExpenseLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            res.data.forEach((element) => {
                this.mngForm.patchValue({
                    expenseCode: element.expenseCode,
                    expenseName: element.expenseName,
                });
            });
        });
    }
    departmentLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "View Departments",
            selected: this.selectedDepartmentItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_department_lookup_department_lookup_component__WEBPACK_IMPORTED_MODULE_3__.DepartmentLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            res.data.forEach((element) => {
                this.mngForm.patchValue({
                    departmentCode: element.departmentCode,
                });
            });
        });
    }
    submit() {
        this.posting = true;
        let upload = this.mngForm.value;
        upload.monthlyDistributions = this.dataSource.data;
        console.log(upload);
        if (this.pageFunction === "Add") {
            this.budgetManService
                .addBudget(upload)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    console.log("RESPONSE:: => ", res);
                    if (res.statusCode === 201) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                        this.router.navigate(["/erp-budget/budget/all-budgets"]);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                },
                complete: () => {
                    this.posting = false;
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.budgetManService
                .updateBudgets(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 201 || 200 || 0) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                        this.router.navigate(["/erp-budget/budget/all-budgets"]);
                    }
                    else {}
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                },
                complete: () => {
                    this.posting = false;
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription;
        }
    }
    //Uploading a batch of items
    submitBatch() {
        this.posting = true;
        if (this.pageFunction === "Add" && this.selectedFile) {
            let params = { sheetIndex: 4 };
            const formData = new FormData();
            formData.append("file", this.selectedFile);
            this.budgetManService
                .extractBulkBudgets(params, formData)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    console.log("resresres::: ", res);
                    if (res.statusCode == 201 ||
                        res.statusCode == 200 ||
                        res.statusCode == 302) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                },
                complete: () => {
                    this.posting = false;
                },
            });
        }
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
}
ManageBudgetsComponent.ɵfac = function ManageBudgetsComponent_Factory(t) { return new (t || ManageBudgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_4__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_budget_data_services_budget_service__WEBPACK_IMPORTED_MODULE_5__.BudgetsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_7__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient)); };
ManageBudgetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ManageBudgetsComponent, selectors: [["app-manage-budgets"]], viewQuery: function ManageBudgetsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginatorMonths = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sortMonths = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 8, vars: 5, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], ["class", "body", 4, "ngIf"], [1, "body"], ["class", "row", 4, "ngIf"], [1, "mx-2"], ["animationDuration", "1000ms"], ["tabGroup", ""], ["label", "UPLOAD BUDGET", 4, "ngIf"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "bg-color"], [1, "chat"], [1, "chat-header", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "col-6"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages", "mt-2"], [1, "badge", "badge-hod"], [1, "badge", "badge-hod-approved"], [1, "col-12"], [1, "chat-about", "mt-2"], [1, "chat-with", "remarks"], [1, "remarks-content", "mx-2"], [1, "badge", "badge-finance"], [1, "badge", "badge-finance-approved"], ["label", "UPLOAD BUDGET"], [3, "hidden"], [1, "row", "clearfix", "mx-2"], [1, "mt-4"], [1, "row", "align-items-center"], [1, "col-xl-10", "col-lg-10", "col-md-8", "col-sm-6"], [3, "change"], [1, "col-xl-1", "col-lg-1", "col-md-4", "col-sm-6"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", "mb-1", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "hidden", "disabled", "click"]], template: function ManageBudgetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ManageBudgetsComponent_div_7_Template, 6, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Manage Budgets")("items", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c1))("active_item", "Manage Budgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showForm);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTab, _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_10__.FileUploadComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtYnVkZ2V0cy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 41978:
/*!****************************************************************************************************************!*\
  !*** ./src/app/erp-budget/modules/budget/pages/dialogs/budget-report-dialog/budget-report-dialog.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetReportDialogComponent": () => (/* binding */ BudgetReportDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_erp_budget_data_services_budget_reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-budget/data/services/budget-reports.service */ 30077);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
















function BudgetReportDialogComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-bar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BudgetReportDialogComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", month_r5.viewValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", month_r5.viewValue, " ");
} }
function BudgetReportDialogComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please select Month ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BudgetReportDialogComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please select Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BudgetReportDialogComponent_div_29_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const glType_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", glType_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", glType_r8.name, " ");
} }
function BudgetReportDialogComponent_div_29_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " GlType is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BudgetReportDialogComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "mat-form-field", 13)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Gl types");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BudgetReportDialogComponent_div_29_mat_option_5_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, BudgetReportDialogComponent_div_29_mat_error_6_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.glTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.mngForm.get("glType").hasError("required"));
} }
class BudgetReportDialogComponent {
    constructor(dialogRef, data, fb, budgetReportsService, snackbar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.budgetReportsService = budgetReportsService;
        this.snackbar = snackbar;
        this.hide3 = true;
        this.agree3 = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.downloadposting = false;
        this.pageFunction = "Add";
        this.hideSubmit = false;
        this.posting = false;
        this.types = [{ name: "PDF" }];
        // , { name: "EXCEL" }
        this.months = [
            { value: 1, viewValue: 'January' },
            { value: 2, viewValue: 'February' },
            { value: 3, viewValue: 'March' },
            { value: 4, viewValue: 'April' },
            { value: 5, viewValue: 'May' },
            { value: 6, viewValue: 'June' },
            { value: 7, viewValue: 'July' },
            { value: 8, viewValue: 'August' },
            { value: 9, viewValue: 'September' },
            { value: 10, viewValue: 'October' },
            { value: 11, viewValue: 'November' },
            { value: 12, viewValue: 'December' }
        ];
    }
    ngOnInit() {
        this.mngForm = this.createReportForm();
    }
    createReportForm() {
        return this.fb.group({
            type: ["EXCEL", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            month: [""],
            year: [""],
        });
    }
    ngAfterViewInit() { }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        this.posting = true;
        let params = {
            year: this.mngForm.value.year,
            month: this.mngForm.value.month
        };
        if (this.data.type === "BudgetVariance") {
            let type = this.mngForm.value.type;
            if (type == "EXCEL") {
                this.subscription = this.budgetReportsService
                    .downloadVarianceExcelReport(params)
                    .subscribe((response) => {
                    const a = document.createElement('a');
                    document.body.appendChild(a);
                    const blob = new Blob([response.data], { type: 'octet/stream' });
                    const url = window.URL.createObjectURL(blob);
                    a.href = url;
                    a.download = "BudgetVariance.xlsx";
                    a.click();
                    window.URL.revokeObjectURL(url);
                    this.posting = false;
                    this.dialogRef.close();
                    this.snackbar.showNotification("snackbar-success", "Report generated successfully");
                }, (err) => {
                    this.posting = false;
                    this.dialogRef.close();
                    this.snackbar.showNotification("snackbar-danger", err.message);
                });
            }
        }
        else if (this.data.type === "BudgetBalance") {
            let type = this.mngForm.value.type;
            if (type == "EXCEL") {
                this.subscription = this.budgetReportsService
                    .downloadBudgetBalanceReport(params)
                    .subscribe((response) => {
                    const a = document.createElement('a');
                    document.body.appendChild(a);
                    const blob = new Blob([response.data], { type: 'octet/stream' });
                    const url = window.URL.createObjectURL(blob);
                    a.href = url;
                    a.download = "BudgetBalance.xlsx";
                    a.click();
                    window.URL.revokeObjectURL(url);
                    this.posting = false;
                    this.dialogRef.close();
                    this.snackbar.showNotification("snackbar-success", "Report generated successfully");
                }, (err) => {
                    this.posting = false;
                    this.dialogRef.close();
                    this.snackbar.showNotification("snackbar-danger", err.message);
                });
            }
        }
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.response });
    }
}
BudgetReportDialogComponent.ɵfac = function BudgetReportDialogComponent_Factory(t) { return new (t || BudgetReportDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_erp_budget_data_services_budget_reports_service__WEBPACK_IMPORTED_MODULE_0__.BudgetReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService)); };
BudgetReportDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BudgetReportDialogComponent, selectors: [["app-budget-report-dialog"]], decls: 37, vars: 9, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/em.png", "width", "30px", "height", "30px", "alt", ""], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], ["class", "m-2", 4, "ngIf"], [1, "register-form", "mx-2", 3, "formGroup"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "month", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "type", "number", "min", "1900", "max", "2100", "formControlName", "year", "required", ""], ["class", "col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2", 4, "ngIf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["align", "end", 1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], [1, "m-2"], ["color", "primary", "mode", "indeterminate"], [3, "value"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "glType", "required", ""]], template: function BudgetReportDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Set Report Parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BudgetReportDialogComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BudgetReportDialogComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 10)(15, "div", 11)(16, "div", 12)(17, "mat-form-field", 13)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, BudgetReportDialogComponent_mat_option_21_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, BudgetReportDialogComponent_mat_error_22_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12)(24, "mat-form-field", 13)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, BudgetReportDialogComponent_mat_error_28_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, BudgetReportDialogComponent_div_29_Template, 7, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 11)(31, "div", 19)(32, "div", 20)(33, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BudgetReportDialogComponent_Template_button_click_33_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Generate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BudgetReportDialogComponent_Template_button_click_35_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mngForm.get("month").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mngForm.get("year").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.type === "TrialBalance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("auth-spinner", ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.mngForm.valid || ctx.posting);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWRnZXQtcmVwb3J0LWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 11601:
/*!**********************************************************************************************************!*\
  !*** ./src/app/erp-budget/modules/budget/pages/dialogs/budget-validation/budget-validation.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetValidationComponent": () => (/* binding */ BudgetValidationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_erp_budget_data_services_budget_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-budget/data/services/budget.service */ 64608);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);


















function BudgetValidationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-bar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BudgetValidationComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BudgetValidationComponent_div_31_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 19)(6, "div", 20)(7, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BudgetValidationComponent_div_31_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.return(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 19)(10, "div", 20)(11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BudgetValidationComponent_div_31_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.canVerify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.canVerify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.canVerify);
} }
function BudgetValidationComponent_form_32_div_1_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Reason is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BudgetValidationComponent_form_32_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 26)(2, "mat-form-field", 27)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Reason for rejection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BudgetValidationComponent_form_32_div_1_mat_error_6_Template, 2, 0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 30)(8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BudgetValidationComponent_form_32_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.changeStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.statusForm.get("reason").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r7.statusForm.invalid);
} }
function BudgetValidationComponent_form_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BudgetValidationComponent_form_32_div_1_Template, 10, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.statusForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.rejected);
} }
class BudgetValidationComponent {
    constructor(dialogRef, data, fb, snackbar, tokenCookieService, budgetManService, router, datepipe) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.tokenCookieService = tokenCookieService;
        this.budgetManService = budgetManService;
        this.router = router;
        this.datepipe = datepipe;
        this.horizontalPosition = "end";
        this.verticalPosition = "top";
        this.rejected = false;
        this.approved = false;
        this.returned = false;
        this.canVerify = false;
        this.validationIsLoading = false;
        this.hideValidation = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.downloadLoading = false;
        this.Data = this.data.data;
    }
    //***************************************************************************************************** */
    ngOnInit() {
        this.currentUser = this.tokenCookieService.getUser().username;
        if (this.data.action === 'deletedOrRejected') {
            this.hideValidation = true;
        }
        this.postedBy = this.Data.postedBy;
        if (this.postedBy === this.currentUser) {
            this.snackbar.showNotification("snackbar-danger", "You cannot verify this transaction!");
            this.canVerify = false;
        }
        else {
            this.canVerify = true;
        }
        console.log("this.billDet: ", this.data);
        console.log("Data: ", this.Data);
        this.statusForm = this.createStatusForm();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    createStatusForm() {
        return this.fb.group({
            reason: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    reject() {
        this.rejected = true;
        this.approved = false;
        this.action = "REJECTED";
        if (!this.statusForm.value == null) {
            this.changeStatus();
        }
    }
    return() {
        this.rejected = true;
        this.approved = false;
        this.action = "RETURNED";
        if (!this.statusForm.value == null) {
            this.changeStatus();
        }
    }
    approve() {
        this.approved = true;
        this.rejected = false;
        this.action = "APPROVED";
        this.statusForm.patchValue({
            reason: "NA"
        });
        this.changeStatus();
    }
    changeStatus() {
        this.validationIsLoading = true;
        let todayDate = this.datepipe.transform(new Date(), "yyyy-MM-ddTHH:mm:ss");
        //     userType *
        // string
        // (query)	
        // userType
        // userType - userType
        // remarks *
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams()
            // .set("id", this.Data.id)
            // .set("postedBy", this.currentUser)
            // .set("action", this.action)
            // .set("approvedDate", todayDate)
            .set("remarks", this.statusForm.value.reason)
            .set("userType", this.data.userType);
        //   id": 0,
        // "status": "string"
        let body = [{ id: this.Data.id, status: this.action }];
        console.log("Form = ", params);
        console.log("body = ", body);
        // this.budgetManService
        //   .validateBudget(params,body)
        //   .pipe(takeUntil(this.destroy$))
        //   .subscribe({
        //     next: (res) => {
        //       this.snackbar.showNotification(
        //         "snackbar-success",
        //         "Updates successfully"
        //       );
        //       if (res) {
        //       }
        //     },
        //     error: (err) => {
        //       console.log("err = ", err);
        //       this.snackbar.showNotification(
        //         "snackbar-danger",
        //         "Server Error: " + err.message
        //       );
        //     },
        //     complete: () => {
        //       this.dialogRef.close();
        //       this.router.navigate(["/erp-budget/budget/all-budgets"]);
        //     }
        //   });
    }
}
BudgetValidationComponent.ɵfac = function BudgetValidationComponent_Factory(t) { return new (t || BudgetValidationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_budget_data_services_budget_service__WEBPACK_IMPORTED_MODULE_2__.BudgetsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe)); };
BudgetValidationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BudgetValidationComponent, selectors: [["app-budget-validation"]], decls: 33, vars: 6, consts: [[1, "addContainer"], [1, "contact-details"], ["class", "m-10", 4, "ngIf"], [1, "modalHeader"], [1, "contact-details-name", "mb-1"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "row"], [1, "col", "text-center", "my-2"], [1, "fas", "fa-check-circle", "fa-6x", "col-green"], [1, "col-8", "my-2"], [1, "dl-horizontal"], [1, "pull-left", "me-2"], [1, ""], ["class", "row", "style", "margin-top: 10px", 4, "ngIf"], ["class", "register-form m-4", 3, "formGroup", 4, "ngIf"], [1, "m-10"], ["color", "primary", "mode", "indeterminate"], [1, "row", 2, "margin-top", "10px"], [1, "col-4"], [1, "row", "m-1"], ["type", "button", 1, "badge", "badge-solid-green", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], ["type", "button", 1, "badge", "badge-solid-brown", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], ["type", "button", 1, "badge", "badge-solid-red", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], [1, "register-form", "m-4", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "col-10", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "reason", "matInput", ""], [4, "ngIf"], [1, "col-2", "d-flex", "align-items-center", "justify-content-center", "mb-2"], ["mat-raised-button", "", "color", "primary", "tabindex", "-1", 3, "disabled", "click"]], template: function BudgetValidationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BudgetValidationComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Validate Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BudgetValidationComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "mat-card-content")(12, "div", 7)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "dl", 11)(17, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Budget Code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Budget Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Expense Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, BudgetValidationComponent_div_31_Template, 13, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, BudgetValidationComponent_form_32_Template, 2, 2, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.validationIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.Data.budgetCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.Data.budgetName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.Data.expenseName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideValidation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWRnZXQtdmFsaWRhdGlvbi5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 89415:
/*!*************************************************************************!*\
  !*** ./src/app/erp-finance/data/services/expense-management.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseManagementService": () => (/* binding */ ExpenseManagementService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class ExpenseManagementService {
    constructor(http) {
        this.http = http;
    }
    // ****************************************************************************************************************************
    getExpenses() {
        const expenseUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/expenses/all`;
        return this.http.get(expenseUrl);
    }
    addExpense(data) {
        const expenseUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/expenses/create`;
        return this.http.post(expenseUrl, data);
    }
    updateExpense(data) {
        const expenseUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/expenses/update`;
        return this.http.put(expenseUrl, data);
    }
    deleteExpenseTemporarily(params) {
        const expenseUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/expenses/delete`;
        return this.http.delete(expenseUrl, { params });
    }
    uploadBatchExpenses(data) {
        const expenseUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/expenses/create/bulk`;
        return this.http.post(expenseUrl, data);
    }
    getCostCentersByExpenseCode(expenseGlCode) {
        const expenseUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/expenses/allCostCenters?expenseCode=${expenseGlCode}`;
        return this.http.get(expenseUrl, expenseGlCode);
    }
    getExpensesByStatus(params) {
        const expenseUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/expenses/fetchbyStatus`;
        return this.http.get(expenseUrl, { params });
    }
    getExpenseById(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/expenses/find/by/id`, { params });
    }
    validateBulkExpense(processedRows) {
        const expenseUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/expenses/update/state`;
        return this.http.put(expenseUrl, processedRows);
    }
}
ExpenseManagementService.ɵfac = function ExpenseManagementService_Factory(t) { return new (t || ExpenseManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ExpenseManagementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExpenseManagementService, factory: ExpenseManagementService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_erp-budget_modules_budget_budget_module_ts-src_app_erp-finance_data_services_expense--1bca86.js.map
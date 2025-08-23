"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-finance_data_services_expense-management_service_ts-src_app_erp-procurement_modul-6e2b7c"],{

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


/***/ }),

/***/ 4337:
/*!********************************************************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/recievables/pages/all-customer-invoices/all-customer-invoices.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllCustomerInvoicesComponent": () => (/* binding */ AllCustomerInvoicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_finance_modules_finance_management_transactions_dialogs_accounting_journal_transactions_accounting_journal_transactions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/modules/finance-management/transactions/dialogs/accounting-journal-transactions/accounting-journal-transactions.component */ 46322);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_finance_data_services_customer_invoices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-finance/data/services/customer-invoices.service */ 86734);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var src_app_erp_finance_data_services_transactions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-finance/data/services/transactions.service */ 45441);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 9748);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
































const _c0 = ["paginator"];
function AllCustomerInvoicesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-bar", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r43.getApprovalTypeSelectedStatus("Finance Manager"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " FINANCE MANAGER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r1.selectedApprovalType === "Finance Manager");
} }
function AllCustomerInvoicesComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r45.getApprovalTypeSelectedStatus("Senior Finance Manager"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " SENIOR MANAGER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r2.selectedApprovalType === "Senior Finance Manager");
} }
function AllCustomerInvoicesComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r47.getApprovalTypeSelectedStatus("Head of Finance And Strategy"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "supervisor_account");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " HEAD OF FINANCE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r3.selectedApprovalType === "Head of Finance And Strategy");
} }
function AllCustomerInvoicesComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r49.getApprovalTypeSelectedStatus("Managing Director And CEO"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "person_pin");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " MANAGING DIRECTOR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r4.selectedApprovalType === "Managing Director And CEO");
} }
function AllCustomerInvoicesComponent_ng_container_76_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "li")(2, "div", 90)(3, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_ng_container_76_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r51.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "li")(7, "div", 92)(8, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_ng_container_76_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r53.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "li")(12, "div", 94)(13, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_ng_container_76_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r52); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r54.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "li")(17, "div", 96)(18, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_ng_container_76_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r52); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r55.accountingCheckboxActive("View"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function AllCustomerInvoicesComponent_mat_header_cell_95_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 97)(1, "mat-checkbox", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllCustomerInvoicesComponent_mat_header_cell_95_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return $event ? ctx_r56.masteraccountingTableToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r9.accountingTableSelection.hasValue() && ctx_r9.isAllaccountingTableSelected())("indeterminate", ctx_r9.accountingTableSelection.hasValue() && !ctx_r9.isAllaccountingTableSelected())("ngClass", "tbl-checkbox");
} }
function AllCustomerInvoicesComponent_mat_cell_96_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 97)(1, "mat-checkbox", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_mat_cell_96_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function AllCustomerInvoicesComponent_mat_cell_96_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r61); const row_r58 = restoredCtx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return $event ? ctx_r60.accountingTableSelection.toggle(row_r58) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r58 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r10.accountingTableSelection.isSelected(row_r58))("ngClass", "tbl-checkbox")("aria-label", ctx_r10.checkboxaccountingTableLabel(row_r58));
} }
function AllCustomerInvoicesComponent_mat_header_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r62.id, " ");
} }
function AllCustomerInvoicesComponent_mat_header_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Invoice Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r63.invoiceCode, " ");
} }
function AllCustomerInvoicesComponent_mat_header_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Customer Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r64.customerCode, " ");
} }
function AllCustomerInvoicesComponent_mat_header_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Customer Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r65.customerName, " ");
} }
function AllCustomerInvoicesComponent_mat_header_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Invoice Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r66.invoiceDate, "short"), " ");
} }
function AllCustomerInvoicesComponent_mat_header_cell_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Due Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r67.dueDate, "short"), " ");
} }
function AllCustomerInvoicesComponent_mat_header_cell_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Invoice Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind4"](2, 1, row_r68.totalAmount, "KSH ", "symbol", "1.2-2"), " ");
} }
function AllCustomerInvoicesComponent_mat_header_cell_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " TranCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r69.tranCode || "-", " ");
} }
function AllCustomerInvoicesComponent_mat_header_cell_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " TranStatus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_123_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r70.transactionStatus, " ");
} }
function AllCustomerInvoicesComponent_mat_cell_123_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r70.transactionStatus, " ");
} }
function AllCustomerInvoicesComponent_mat_cell_123_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " N.A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](1, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AllCustomerInvoicesComponent_mat_cell_123_button_2_Template, 3, 1, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, AllCustomerInvoicesComponent_mat_cell_123_button_3_Template, 3, 1, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, AllCustomerInvoicesComponent_mat_cell_123_ng_container_4_Template, 2, 0, "ng-container", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitch", row_r70.transactionStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "POSTED");
} }
function AllCustomerInvoicesComponent_mat_header_cell_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Tran Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r76.tranDate ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r76.tranDate, "short") : "N.A", " ");
} }
function AllCustomerInvoicesComponent_mat_header_cell_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Download Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_129_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_mat_cell_129_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_mat_cell_129_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r81); const row_r77 = restoredCtx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r80.downloadInvoice(row_r77); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\u00A0 Download.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r32.downloadLoading);
} }
function AllCustomerInvoicesComponent_mat_header_cell_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Send Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_132_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_mat_cell_132_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_mat_cell_132_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r86); const row_r82 = restoredCtx.$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r85.sendInvoice(row_r82); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\u00A0 Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r34.sendLoading);
} }
function AllCustomerInvoicesComponent_mat_header_cell_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_135_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r87.status, " ");
} }
function AllCustomerInvoicesComponent_mat_cell_135_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r87.status, " ");
} }
function AllCustomerInvoicesComponent_mat_cell_135_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r87.status, " ");
} }
function AllCustomerInvoicesComponent_mat_cell_135_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r87.status, " ");
} }
function AllCustomerInvoicesComponent_mat_cell_135_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r87.status, " ");
} }
function AllCustomerInvoicesComponent_mat_cell_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_mat_cell_135_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](1, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AllCustomerInvoicesComponent_mat_cell_135_button_2_Template, 3, 1, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, AllCustomerInvoicesComponent_mat_cell_135_button_3_Template, 3, 1, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, AllCustomerInvoicesComponent_mat_cell_135_button_4_Template, 3, 1, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, AllCustomerInvoicesComponent_mat_cell_135_button_5_Template, 3, 1, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, AllCustomerInvoicesComponent_mat_cell_135_button_6_Template, 3, 1, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitch", row_r87.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function AllCustomerInvoicesComponent_mat_header_cell_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllCustomerInvoicesComponent_mat_cell_138_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 127)(1, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_mat_cell_138_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllCustomerInvoicesComponent_mat_cell_138_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r104); const row_r100 = restoredCtx.$implicit; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r103.updateCustomerInvoice(row_r100); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-feather-icons", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_mat_cell_138_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllCustomerInvoicesComponent_mat_cell_138_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r104); const row_r100 = restoredCtx.$implicit; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r106.viewCustomerInvoice(row_r100); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-feather-icons", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_mat_cell_138_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllCustomerInvoicesComponent_mat_cell_138_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r104); const row_r100 = restoredCtx.$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r108.deleteCustomerInvoice(row_r100.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-feather-icons", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", "trash-2");
} }
function AllCustomerInvoicesComponent_mat_header_row_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-header-row");
} }
function AllCustomerInvoicesComponent_mat_row_140_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-row", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_mat_row_140_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r111); const row_r109 = restoredCtx.$implicit; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r110.viewCustomerInvoice(row_r109); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllCustomerInvoicesComponent_tr_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("colspan", ctx_r41.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r41.input, "\"");
} }
function AllCustomerInvoicesComponent_div_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-spinner", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("diameter", 40);
} }
const _c1 = function () { return ["Customer Invoices"]; };
class AllCustomerInvoicesComponent {
    // ****************************************************************************************************************************
    //dependency injection
    constructor(router, snackbar, customerInvoiceManService, accessControlService, dialog, transactionService, fb) {
        this.router = router;
        this.snackbar = snackbar;
        this.customerInvoiceManService = customerInvoiceManService;
        this.accessControlService = accessControlService;
        this.dialog = dialog;
        this.transactionService = transactionService;
        this.fb = fb;
        this.displayedColumns = [
            //"accountingSelect",
            "id",
            "invoiceCode",
            "customerCode",
            "customerName",
            "invoiceDate",
            "dueDate",
            "invoiceAmount",
            // "tranCode",
            // "transactionStatus",
            // "tranDate",
            "downloadInvoice",
            "sendInvoice",
            "status",
            "action",
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.SelectionModel(true, []);
        this.isLoading = true;
        this.pageFunction = "ADD"; //default value
        //management of data destruction upon usage
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        this.downloadLoading = false;
        this.reqStatuses = [
            { name: "PENDING" },
            // { name: "VERIFIED" },
            { name: "APPROVED" },
            { name: "RETURNED" },
            { name: "REJECTED" },
        ];
        this.selectedStatus = "PENDING";
        this.selectedApprovalType = "HOD";
        // getData() {
        //   this.selection = new SelectionModel<any>(true, []);
        //   this.dataSource = new MatTableDataSource([]);
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        //   this.isLoading = true;
        //   this.selectedStatus = this.Form.value.status;
        //   this.selectedApprovalType = this.Form.value.approvalType;
        //   let params = {
        //     status: this.Form.value.status,
        //     approvalType: this.Form.value.approvalType,
        //   };
        //   // this.alignTableColumns();
        //   this.customerInvoiceManService
        //     .getCustomerInvoicesByStatusAndApprovalType(params)
        //     .pipe(takeUntil(this.destroy$))
        //     .subscribe({
        //       next: (res) => {
        //         console.log("this.data :", res);
        //         if (res.entity) {
        //           this.data = res;
        //           this.isLoading = false;
        //           this.dataSource = new MatTableDataSource(this.data.entity);
        //           this.dataSource.paginator = this.paginator;
        //           this.dataSource.sort = this.sort;
        //           console.log("this.data :", this.data);
        //         } else {
        //           this.snackbar.showNotification("snackbar-danger", res.message);
        //         }
        //       },
        //       error: (err) => {
        //         this.snackbar.showNotification("snackbar-danger", err.message);
        //         this.isLoading = false;
        //       },
        //       complete: () => {
        //         this.isLoading = false;
        //       },
        //     }),
        //     Subscription;
        // }
        // refresh() {
        //   this.getData(this.currentPage, this.pageSize);
        // }
        this.currentPage = 0;
        this.totalPages = 0;
        this.totalItems = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [2, 5, 10, 20, 30, 40, 50, 100];
        //********************************************************************************************************************** */
        //accounting Select
        //********************************************************************************************************************** */
        // New selection for a different MatTable
        this.accountingTableSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.SelectionModel(false, []);
        this.accountingSelectItemsSelected = false;
        this.transactionAction = "";
        // ****************************************************************************************************************************
        this.transactionType = "CustomerInvoice";
        // ****************************************************************************************************************************
        this.selectedRows = [];
        this.sendLoading = false;
    }
    ngOnInit() {
        this.Form = this.fb.group({
            status: ["PENDING", _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            approvalType: ["AllInvoices", _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
        });
        this.getData(this.currentPage, this.pageSize);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.input = filterValue;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getSelectSelectedStatus() {
        this.getData(this.currentPage, this.pageSize);
    }
    getSelectedStatus(status) {
        this.Form.patchValue({
            status: status,
        });
        this.getData(this.currentPage, this.pageSize);
    }
    getApprovalTypeSelectSelectedStatus() {
        this.getData(this.currentPage, this.pageSize);
    }
    getApprovalTypeSelectedStatus(approvalType) {
        this.Form.patchValue({
            approvalType: approvalType,
        });
        this.getData(this.currentPage, this.pageSize);
    }
    // data: any;
    getData(page, size) {
        this.isLoading = true;
        this.selectedStatus = this.Form.value.status;
        this.selectedApprovalType = this.Form.value.approvalType;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (!this.input) {
            this.input = "%";
        }
        let params = {
            status: this.Form.value.status,
            approvalType: this.Form.value.approvalType,
            searchTerm: this.input,
            pageNo: page,
            pageSize: size,
        };
        this.customerInvoiceManService
            .getCustomerInvoicesByStatusAndApprovalType(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res:: ", res);
                console.log("res.entity:: ", res.entity);
                console.log("res.entity.content:: ", res.entity.content);
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(this.data.content);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    this.totalItems = this.data.totalElements;
                    this.currentPage = this.data.number;
                    this.totalPages = this.data.totalPages;
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
                this.isLoading = false;
            },
            complete: () => {
                this.isLoading = false;
            },
        });
    }
    onPageChange(event) {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        this.getData(this.currentPage, this.pageSize);
    }
    refresh() {
        this.getData(this.currentPage, this.pageSize);
    }
    // ****************************************************************************************************************************
    //adding Customer Invoices
    addCustomerInvoice() {
        this.router.navigate([
            "/erp-procurement/receivable/manage-customer-invoices",
        ]);
    }
    //Updating the payments
    updateCustomerInvoice(data) {
        // const additionalData = data;
        // const serializedData = JSON.stringify(additionalData);
        // console.log("Stringfied: ", data); //checks the stringified JS value
        let route = "/erp-procurement/receivable/manage-customer-invoices";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                // additionalData: serializedData,
                action: "Update",
            },
        });
    }
    //Viewing the payments
    viewCustomerInvoice(data) {
        // const additionalData = data;
        // const serializedData = JSON.stringify(additionalData);
        let route = "/erp-procurement/receivable/manage-customer-invoices";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                //  additionalData: serializedData,
                action: "View",
            },
        });
    }
    //Validating a single customer
    validateCustomerInvoice(data) {
        // const additionalData = data;
        // const serializedData = JSON.stringify(additionalData);
        let route = "/erp-procurement/receivable/manage-customer-invoices";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                //  additionalData: serializedData,
                action: "Verify",
            },
        });
    }
    //deleting Customer Invoices
    deleteCustomerInvoice(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Are you Sure?",
            text: "This Customer Invoice will be deleted!!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete this Customer Invoice ",
        }).then((result) => {
            if (result.isConfirmed) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpParams().set("id", id);
                this.customerInvoiceManService
                    .deleteCustomerInvoice(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        if (res.statusCode == 200) {
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
                        this.getData(this.currentPage, this.pageSize);
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription;
            }
        });
    }
    isAllaccountingTableSelected() {
        const numSelected = this.accountingTableSelection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masteraccountingTableToggle() {
        if (this.isAllaccountingTableSelected()) {
            this.accountingTableSelection.clear();
            return;
        }
        this.accountingTableSelection.select(...this.dataSource.data);
    }
    checkboxaccountingTableLabel(row) {
        if (!row) {
            return `${this.isAllaccountingTableSelected() ? "deselect" : "select"} all`;
        }
        return `${this.accountingTableSelection.isSelected(row) ? "deselect" : "select"} row ${row.position + 1}`;
    }
    checkaccountingTableSelection() {
        const numSelected = this.accountingTableSelection.selected.length;
        const numRows = this.dataSource.data.length;
        if (numSelected === numRows) {
            this.accountingSelectItemsSelected = true;
        }
        else if (numSelected !== numRows) {
            this.accountingSelectItemsSelected = false;
        }
        this.selectedRows = [];
        this.selectedRows = this.selection.selected;
        console.log("accountingSelectItemsSelected: ", this.accountingSelectItemsSelected);
    }
    accountingCheckboxActive(action) {
        //this.accountingCheckboxSelectedRows = this.accountingTableSelection.selected;
        this.transactionAction = action;
        console.log("this.accountingSelectItemsSelected:: ", this.accountingTableSelection.selected[0].tranCode);
        if (this.transactionAction !== "Add" &&
            (this.accountingTableSelection.selected[0].tranCode === null ||
                this.accountingTableSelection.selected[0].tranCode === undefined)) {
            this.snackbar.showNotification("snackbar-danger", "No transaction added for this record!!");
        }
        else {
            this.transactionLookUp();
        }
    }
    transactionLookUp() {
        console.log("this.accountingTableSelection:: ", this.accountingTableSelection.selected[0]);
        let addBody = {};
        if (this.transactionAction === "Add") {
            addBody = {
                transactionType: this.transactionType,
                prCode: this.accountingTableSelection.selected[0].prCode,
                referenceCode: this.accountingTableSelection.selected[0].invoiceCode,
                itemCode: "",
                parttrans: [
                    {
                        accountNo: "",
                        amount: this.accountingTableSelection.selected[0].invoiceAmount,
                        partTranstype: "Debit",
                    },
                ],
            };
        }
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "1200px";
        dialogConfig.data = {
            action: this.transactionAction,
            transactionType: this.transactionType,
            selected: this.accountingTableSelection.selected[0],
            bodyForAdd: addBody,
            tranCode: this.accountingTableSelection.selected[0].tranCode,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_modules_finance_management_transactions_dialogs_accounting_journal_transactions_accounting_journal_transactions_component__WEBPACK_IMPORTED_MODULE_0__.AccountingJournalTransactionsComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            if (result.data && result.data.statusCode === 201) {
                this.transactionResponse = result.data.entity;
                this.snackbar.showNotification("snackbar-success", result.data.message);
                this.updateReceivedTransactionStatus();
            }
            else if (result.data && result.data.statusCode !== 201) {
                this.snackbar.showNotification("snackbar-danger", result.data.message);
            }
            else {
                this.snackbar.showNotification("snackbar-danger", "Transaction details not captured!");
            }
        });
    }
    updateReceivedTransactionStatus() {
        let params = {
            transactionType: this.transactionResponse.transactionType,
            tranCode: this.transactionResponse.tranCode,
            tranDate: this.transactionResponse.tranDate,
            referenceCode: this.transactionResponse.referenceCode,
        };
        this.transactionService
            .updateAccountingTransactionDetailsStatus(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res: ", res);
                if (res.statusCode == 200) {
                    this.snackbar.showNotification("snackbar-success", res.message);
                    this.getData(this.currentPage, this.pageSize);
                    // this.router.navigate([
                    //   "/erp-procurement/requisitions/all-requisitions",
                    // ]);
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
    processMultipleRows(status) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Select User Type",
            input: "select",
            inputOptions: {
                //HOD: "HOD",
                FinanceManager: "Finance Manager",
                SeniorFinanceManager: "Senior Finance Manager",
                HeadofFinanceAndStrategy: "Head of Finance And Strategy",
                ManagingDirectorAndCEO: "Managing Director And CEO",
            },
            inputPlaceholder: "Select User Type",
            confirmButtonText: "Submit",
            showCancelButton: true,
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                const selectedUserType = result.value;
                // Use selectedUserType as needed
                let privilege = "";
                if (selectedUserType === "FinanceManager") {
                    privilege = "Finance Manager";
                }
                else if (selectedUserType === "SeniorFinanceManager") {
                    privilege = "Senior Finance Manager";
                }
                else if (selectedUserType === "HeadofFinanceAndStrategy") {
                    privilege = "Head of Finance And Strategy";
                }
                else if (selectedUserType === "ManagingDirectorAndCEO") {
                    privilege = "Managing Director And CEO";
                }
                this.hasAccess = this.accessControlService.hasPrivilege("FinanceModule", [privilege]);
                if (this.hasAccess) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        title: '<span style="font-size: 20px;">Enter Verifier Remarks</span>',
                        input: "textarea",
                        inputPlaceholder: "Type your remarks here...",
                        confirmButtonText: "Submit",
                        showCancelButton: true,
                        cancelButtonText: "Cancel",
                        inputValidator: (value) => {
                            if (!value) {
                                return "Please enter your remarks";
                            }
                        },
                    }).then((result) => {
                        if (result.isConfirmed) {
                            const verifierRemarks = result.value;
                            const processedRows = this.accountingTableSelection.selected.map((element) => {
                                return {
                                    id: element.id,
                                    status: status,
                                    verifierRemarks: verifierRemarks,
                                };
                            });
                            console.log("LOG: ", processedRows);
                            let newSelectedUserType = "";
                            if (selectedUserType === "FinanceManager") {
                                newSelectedUserType = "Finance Manager";
                            }
                            else if (selectedUserType === "SeniorFinanceManager") {
                                newSelectedUserType = "Senior Finance Manager";
                            }
                            else if (selectedUserType === "HeadofFinanceAndStrategy") {
                                newSelectedUserType = "Head of Finance And Strategy";
                            }
                            else if (selectedUserType === "ManagingDirectorAndCEO") {
                                newSelectedUserType = "Managing Director And CEO";
                            }
                            let params = { approvalType: newSelectedUserType };
                            this.customerInvoiceManService
                                .validateCustomerInvoices(params, processedRows)
                                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
                                .subscribe({
                                next: (res) => {
                                    console.log("res: ", res);
                                    if (res.statusCode == 201 ||
                                        res.statusCode == 200 ||
                                        res.statusCode == 302) {
                                        this.snackbar.showNotification("snackbar-success", res.message);
                                        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.SelectionModel(true, []);
                                        this.selection.clear();
                                    }
                                    else {
                                        this.snackbar.showNotification("snackbar-danger", res.message);
                                    }
                                },
                                error: (err) => {
                                    this.snackbar.showNotification("snackbar-danger", err.message);
                                },
                                complete: () => {
                                    this.getData(this.currentPage, this.pageSize);
                                },
                            });
                        }
                        else {
                            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.SelectionModel(true, []);
                            this.selection.clear();
                        }
                    });
                }
            }
        });
    }
    //****************************************************************************************** */
    downloadInvoice(row) {
        this.downloadLoading = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpParams().set("invoiceCode", row.invoiceCode);
        this.customerInvoiceManService
            .downloadInvoices(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                let url = window.URL.createObjectURL(res.data);
                // if you want to open PDF in new tab
                window.open(url);
                let a = document.createElement("a");
                document.body.appendChild(a);
                a.setAttribute("style", "display: none");
                a.setAttribute("target", "blank");
                a.href = url;
                // Append row.code to the download URL
                a.download = `PurchaseOrder_${row.purchaseRequisitionCode}.pdf`;
                a.click();
                window.URL.revokeObjectURL(url);
                a.remove();
                this.downloadLoading = false;
                this.snackbar.showNotification("snackbar-success", res.message);
                // if (res.statusCode === 200) {
                // } else {
                //   this.snackbar.showNotification("snackbar-danger", res.message);
                // }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
                this.downloadLoading = false;
            },
            complete: () => {
                this.downloadLoading = false;
            },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription;
    }
    sendInvoice(row) {
        this.sendLoading = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpParams().set("invoiceCode", row.invoiceCode);
        this.customerInvoiceManService
            .sendInvoice(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                if (res.statusCode === 200) {
                    this.snackbar.showNotification("snackbar-success", res.message);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
                this.sendLoading = false;
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
                this.sendLoading = false;
            },
            complete: () => {
                this.sendLoading = false;
            },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription;
    }
}
AllCustomerInvoicesComponent.ɵfac = function AllCustomerInvoicesComponent_Factory(t) { return new (t || AllCustomerInvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_erp_finance_data_services_customer_invoices_service__WEBPACK_IMPORTED_MODULE_3__.CustomerInvoicesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_4__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_erp_finance_data_services_transactions_service__WEBPACK_IMPORTED_MODULE_5__.TransactionsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder)); };
AllCustomerInvoicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AllCustomerInvoicesComponent, selectors: [["app-all-customer-invoices"]], viewQuery: function AllCustomerInvoicesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 144, vars: 30, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "body"], [1, "table-responsive"], ["hidden", "", 1, "materialTableHeaderCustom", "mx-0", "mt-0"], [1, "row", "mx-2"], [1, "col-lg-1", "col-md-4", "col-sm-12", "col-xs-12", "mb-0"], [1, "col-lg-11", "col-md-8", "col-sm-12", "col-xs-12", "mb-0"], [1, "button-container", "d-flex", "flex-wrap", "mt-1"], ["mat-raised-button", "", 1, "mat-button", "all-invoices", "mb-1", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "hod", "mb-1", 3, "click"], ["mat-raised-button", "", "class", "mat-button finance-manager mb-1", 3, "active", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "mat-button senior-finance-manager mb-1", 3, "active", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "mat-button head-of-finance-strategy mb-1", 3, "active", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "mat-button managing-director-ceo mb-1", 3, "active", "click", 4, "ngIf"], ["hidden", "", 1, "materialTableHeaderCustom", "mx-0", "mt-1"], ["mat-raised-button", "", 1, "mat-button", "pending", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "approved", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "returned", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "rejected", 3, "click"], [1, "materialTableHeader", "mx-0", "mt-1"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "accountingSelect"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "table-img tbl-col-width-per-4", 4, "matHeaderCellDef"], ["class", "table-img tbl-col-width-per-4", 4, "matCellDef"], ["matColumnDef", "invoiceCode"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "customerCode"], ["matColumnDef", "customerName"], ["matColumnDef", "invoiceDate"], ["matColumnDef", "dueDate"], ["matColumnDef", "invoiceAmount"], ["matColumnDef", "tranCode"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", "matTooltip", "QuantityCancelled", 4, "matHeaderCellDef"], ["matColumnDef", "transactionStatus"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "tranDate"], ["matColumnDef", "downloadInvoice"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "sendInvoice"], ["matColumnDef", "status"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "pageSizeOptions", "length", "pageIndex", "pageSize", "page"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], ["mat-raised-button", "", 1, "mat-button", "finance-manager", "mb-1", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "senior-finance-manager", "mb-1", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "head-of-finance-strategy", "mb-1", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "managing-director-ceo", "mb-1", 3, "click"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], ["matTooltip", "View Accounting Details", 1, "m-l-10"], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "table-img", "tbl-col-width-per-4"], [1, "table-img", "tbl-col-width-per-4"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", "matTooltip", "QuantityCancelled", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [3, "ngSwitch"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [1, "badge", "badge-solid-purple", "btn", "btn", "btn-sm", "m-1", 3, "disabled", "click"], [1, "fas", "fa-download"], [1, "fas", "fa-paper-plane"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], [3, "colspan"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllCustomerInvoicesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, AllCustomerInvoicesComponent_div_8_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Approval Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 13)(17, "div", 14)(18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_Template_button_click_18_listener() { return ctx.getApprovalTypeSelectedStatus("AllInvoices"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, " ALL INVOICES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_Template_button_click_22_listener() { return ctx.getApprovalTypeSelectedStatus("HOD"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "supervisor_account");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " HOD VERIFIER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, AllCustomerInvoicesComponent_button_26_Template, 4, 2, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, AllCustomerInvoicesComponent_button_27_Template, 4, 2, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, AllCustomerInvoicesComponent_button_28_Template, 4, 2, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, AllCustomerInvoicesComponent_button_29_Template, 4, 2, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 21)(31, "div", 11)(32, "div", 12)(33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 13)(36, "div", 14)(37, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_Template_button_click_37_listener() { return ctx.getSelectedStatus("PENDING"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, " PENDING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_Template_button_click_41_listener() { return ctx.getSelectedStatus("APPROVED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, " APPROVED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_Template_button_click_45_listener() { return ctx.getSelectedStatus("RETURNED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, " RETURNED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_Template_button_click_49_listener() { return ctx.getSelectedStatus("REJECTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, " REJECTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 26)(54, "div", 4)(55, "div", 27)(56, "ul", 28)(57, "li", 29)(58, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Customer Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "li", 30)(61, "label", 31)(62, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function AllCustomerInvoicesComponent_Template_input_keyup_64_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "li")(67, "div", 35)(68, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_Template_button_click_68_listener() { return ctx.addCustomerInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "li")(72, "div", 38)(73, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_Template_button_click_73_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](76, AllCustomerInvoicesComponent_ng_container_76_Template, 21, 0, "ng-container", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "div", 40)(78, "ul", 41)(79, "li")(80, "div", 42)(81, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_Template_img_click_81_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r112); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](93); return _r8.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "li")(83, "div", 44)(84, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_Template_img_click_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r112); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](93); return _r8.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "li")(86, "div", 46)(87, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_Template_img_click_87_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r112); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](93); return _r8.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "li")(89, "div", 48)(90, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllCustomerInvoicesComponent_Template_img_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r112); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](93); return _r8.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "mat-table", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](94, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](95, AllCustomerInvoicesComponent_mat_header_cell_95_Template, 2, 4, "mat-header-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](96, AllCustomerInvoicesComponent_mat_cell_96_Template, 2, 4, "mat-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](97, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](98, AllCustomerInvoicesComponent_mat_header_cell_98_Template, 2, 0, "mat-header-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](99, AllCustomerInvoicesComponent_mat_cell_99_Template, 2, 1, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](100, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](101, AllCustomerInvoicesComponent_mat_header_cell_101_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](102, AllCustomerInvoicesComponent_mat_cell_102_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](103, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](104, AllCustomerInvoicesComponent_mat_header_cell_104_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](105, AllCustomerInvoicesComponent_mat_cell_105_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](106, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](107, AllCustomerInvoicesComponent_mat_header_cell_107_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](108, AllCustomerInvoicesComponent_mat_cell_108_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](109, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](110, AllCustomerInvoicesComponent_mat_header_cell_110_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](111, AllCustomerInvoicesComponent_mat_cell_111_Template, 3, 4, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](112, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](113, AllCustomerInvoicesComponent_mat_header_cell_113_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](114, AllCustomerInvoicesComponent_mat_cell_114_Template, 3, 4, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](115, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](116, AllCustomerInvoicesComponent_mat_header_cell_116_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](117, AllCustomerInvoicesComponent_mat_cell_117_Template, 3, 6, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](118, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](119, AllCustomerInvoicesComponent_mat_header_cell_119_Template, 2, 0, "mat-header-cell", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](120, AllCustomerInvoicesComponent_mat_cell_120_Template, 2, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](121, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](122, AllCustomerInvoicesComponent_mat_header_cell_122_Template, 2, 0, "mat-header-cell", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](123, AllCustomerInvoicesComponent_mat_cell_123_Template, 5, 3, "mat-cell", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](124, 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](125, AllCustomerInvoicesComponent_mat_header_cell_125_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](126, AllCustomerInvoicesComponent_mat_cell_126_Template, 3, 4, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](127, 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](128, AllCustomerInvoicesComponent_mat_header_cell_128_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](129, AllCustomerInvoicesComponent_mat_cell_129_Template, 4, 1, "mat-cell", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](130, 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](131, AllCustomerInvoicesComponent_mat_header_cell_131_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](132, AllCustomerInvoicesComponent_mat_cell_132_Template, 4, 1, "mat-cell", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](133, 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](134, AllCustomerInvoicesComponent_mat_header_cell_134_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](135, AllCustomerInvoicesComponent_mat_cell_135_Template, 7, 5, "mat-cell", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](136, 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](137, AllCustomerInvoicesComponent_mat_header_cell_137_Template, 2, 0, "mat-header-cell", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](138, AllCustomerInvoicesComponent_mat_cell_138_Template, 7, 9, "mat-cell", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](139, AllCustomerInvoicesComponent_mat_header_row_139_Template, 1, 0, "mat-header-row", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](140, AllCustomerInvoicesComponent_mat_row_140_Template, 1, 2, "mat-row", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](141, AllCustomerInvoicesComponent_tr_141_Template, 3, 2, "tr", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](142, AllCustomerInvoicesComponent_div_142_Template, 2, 1, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](143, "mat-paginator", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("page", function AllCustomerInvoicesComponent_Template_mat_paginator_page_143_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "All Customer Invoices")("items", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](29, _c1))("active_item", "All Customer Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedApprovalType === "AllInvoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedApprovalType === "HOD");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.accessControlService.hasAccessToFinanceManager());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.accessControlService.hasAccessToSeniorFinanceManager());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.accessControlService.hasAccessToHeadOfFinanceAndStrategy());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.accessControlService.hasAccessToManagingDirectorAndCEO());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "APPROVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "RETURNED");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "REJECTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.accountingTableSelection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("length", ctx.totalItems)("pageIndex", ctx.currentPage)("pageSize", ctx.pageSize);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_7__.GenWidgetsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_25__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CurrencyPipe], styles: [".materialTableHeaderCustom[_ngcontent-%COMP%] {\n  background-color: #EBEBEE;\n  padding: 8px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  \n  \n  \n  \n  \n  \n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #535353;\n  margin-top: 10px;\n  text-align: start;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.all-invoices[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #3f51b5, #673ab7);\n  color: white;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.hod[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #00bcd4, #009688);\n  color: white;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.finance-manager[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #4caf50, #8bc34a);\n  \n  color: white;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.senior-finance-manager[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #2196f3, #42a5f5);\n  \n  color: white;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.head-of-finance-strategy[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #00bcd4, #009688);\n  \n  color: white;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.managing-director-ceo[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #3f51b5, #673ab7);\n  \n  color: white;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.active[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #333333, #555555);\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%], .materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button.active[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.2s ease-in-out;\n}\n.materialTableHeaderCustom[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.26);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1jdXN0b21lci1pbnZvaWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFTQSxpQkFBQTtFQU1GLFFBQUE7RUFNQSxvQkFBQTtFQVVBLDJCQUFBO0VBVUEsaUNBQUE7RUFVQSw4QkFBQTtBQTVDQTtBQUxFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBT0o7QUFIQTtFQUNFLHVEQUFBO0VBQ0EsWUFBQTtBQUtGO0FBREE7RUFDRSx1REFBQTtFQUNBLFlBQUE7QUFHRjtBQUNBO0VBQ0UsdURBQUE7RUFJRyx1Q0FBQTtFQUNILFlBQUE7QUFGRjtBQU1BO0VBQ0UsdURBQUE7RUFJRyx1Q0FBQTtFQUNILFlBQUE7QUFQRjtBQVdBO0VBQ0UsdURBQUE7RUFJRyx1Q0FBQTtFQUNILFlBQUE7QUFaRjtBQWdCQTtFQUNFLHVEQUFBO0VBSUcsdUNBQUE7RUFDSCxZQUFBO0FBakJGO0FBb0JBO0VBQ0UsdURBQUE7QUFsQkY7QUFxQkE7O0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQ0FBQTtBQW5CRjtBQXNCQTtFQUNFLHFCQUFBO0VBQ0EsMkNBQUE7QUFwQkYiLCJmaWxlIjoiYWxsLWN1c3RvbWVyLWludm9pY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGVyaWFsVGFibGVIZWFkZXJDdXN0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVFO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzUzNTM1MztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICB9XG5cbiAgLyogQWxsIEludm9pY2VzICovXG4ubWF0LWJ1dHRvbi5hbGwtaW52b2ljZXMge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZjUxYjUsICM2NzNhYjcpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIEhPRCAqL1xuLm1hdC1idXR0b24uaG9kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBiY2Q0LCAjMDA5Njg4KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBGaW5hbmNlIE1hbmFnZXIgKi9cbi5tYXQtYnV0dG9uLmZpbmFuY2UtbWFuYWdlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICAjNGNhZjUwLFxuICAgICM4YmMzNGFcbiAgKTsgLyogRXhhbXBsZSBncmFkaWVudCwgYWRqdXN0IGFzIG5lZWRlZCAqL1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFNlbmlvciBGaW5hbmNlIE1hbmFnZXIgKi9cbi5tYXQtYnV0dG9uLnNlbmlvci1maW5hbmNlLW1hbmFnZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgIzIxOTZmMyxcbiAgICAjNDJhNWY1XG4gICk7IC8qIEV4YW1wbGUgZ3JhZGllbnQsIGFkanVzdCBhcyBuZWVkZWQgKi9cbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBIZWFkIG9mIEZpbmFuY2UgYW5kIFN0cmF0ZWd5ICovXG4ubWF0LWJ1dHRvbi5oZWFkLW9mLWZpbmFuY2Utc3RyYXRlZ3kge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgIzAwYmNkNCxcbiAgICAjMDA5Njg4XG4gICk7IC8qIEV4YW1wbGUgZ3JhZGllbnQsIGFkanVzdCBhcyBuZWVkZWQgKi9cbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBNYW5hZ2luZyBEaXJlY3RvciBhbmQgQ0VPICovXG4ubWF0LWJ1dHRvbi5tYW5hZ2luZy1kaXJlY3Rvci1jZW8ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgIzNmNTFiNSxcbiAgICAjNjczYWI3XG4gICk7IC8qIEV4YW1wbGUgZ3JhZGllbnQsIGFkanVzdCBhcyBuZWVkZWQgKi9cbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWJ1dHRvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMzMzMzMsICM1NTU1NTUpO1xufVxuXG4ubWF0LWJ1dHRvbixcbi5tYXQtYnV0dG9uLmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLm1hdC1idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cblxuXG59XG5cblxuXG4iXX0= */"] });


/***/ }),

/***/ 91540:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/recievables/pages/manage-customer-invoices/manage-customer-invoices.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCustomerInvoicesComponent": () => (/* binding */ ManageCustomerInvoicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/ccentre-lookup/ccentre-lookup.component */ 64622);
/* harmony import */ var src_app_erp_finance_data_lookups_customer_lookup_customer_lookup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/customer-lookup/customer-lookup.component */ 75230);
/* harmony import */ var src_app_erp_finance_data_lookups_expense_lookup_expense_lookup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/expense-lookup/expense-lookup.component */ 30417);
/* harmony import */ var src_app_erp_finance_data_lookups_maintained_currencies_look_up_maintained_currencies_look_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/maintained-currencies-look-up/maintained-currencies-look-up.component */ 2977);
/* harmony import */ var src_app_erp_finance_data_lookups_tax_lookup_tax_lookup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/tax-lookup/tax-lookup.component */ 5815);
/* harmony import */ var src_app_erp_finance_data_lookups_validation_customer_invoice_validation_customer_invoice_validation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/validation/customer-invoice-validation/customer-invoice-validation.component */ 41569);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_finance_data_services_cost_centre_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/erp-finance/data/services/cost-centre-management.service */ 44479);
/* harmony import */ var src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/erp-procurement/data/services/notification.service */ 67879);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var src_app_erp_finance_data_services_customer_invoices_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/erp-finance/data/services/customer-invoices.service */ 86734);
/* harmony import */ var src_app_erp_procurement_data_services_procurement_calculations_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_procurement-calculations.service */ 65912);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);












































function ManageCustomerInvoicesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 19)(1, "div", 121)(2, "div", 122)(3, "div", 123)(4, "div", 124)(5, "div", 19)(6, "div", 54)(7, "div", 19)(8, "div", 125)(9, "div", 126)(10, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "HOD Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 128)(13, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 125)(16, "div", 126)(17, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "HOD Approved By");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 128)(20, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 19)(23, "div", 20)(24, "div", 131)(25, "div", 132)(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "HOD Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "div", 54)(31, "div", 19)(32, "div", 125)(33, "div", 126)(34, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35, "Finance Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "div", 128)(37, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "div", 125)(40, "div", 126)(41, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](42, "Finance Approved By");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "div", 128)(44, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](46, "div", 19)(47, "div", 20)(48, "div", 131)(49, "div", 132)(50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](51, "Finance Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "div", 54)(55, "div", 19)(56, "div", 125)(57, "div", 126)(58, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](59, "Procurement Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](60, "div", 128)(61, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](63, "div", 125)(64, "div", 126)(65, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](66, "Procurement Approved By");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](67, "div", 128)(68, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](70, "div", 19)(71, "div", 20)(72, "div", 131)(73, "div", 132)(74, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](75, "Procurement Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](76, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()()()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.formData.hodApprovalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.formData.hodApprovedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.formData.hodApprovalReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.formData.financeApprovalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.formData.financeApprovedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.formData.financeApprovalReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.formData.procurementApprovalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r2.formData.procurementApprovedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.formData.procurementApprovalReason);
} }
function ManageCustomerInvoicesComponent_div_8_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Customer Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Customer Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Currency Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "CostCenterCode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_error_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "ExpenseCode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Invoice Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Enter a Valid Invoice Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_error_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Due Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_error_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Enter a Valid Due Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, " Invoice Items ");
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Item is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Unit of Measure is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Quantity is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Quantity cannot be 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Quantity allows numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Please enter unit amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Please ensure amount does not exceed 2 decimal values! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Please ensure amount does not exceed 1 billion! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Tax Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "TaxRate cannot be 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "TaxRate allows numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Item Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Item Description must not exceed 300 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_button_56_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_button_56_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4); return ctx_r94.addToArray(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " + Add Invoice details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r92.bgtForm.valid);
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_button_57_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_button_57_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4); return ctx_r96.updateInvoiceDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " + Update Invoice details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r93.bgtForm.valid);
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "form", 139)(1, "div", 19)(2, "div", 22)(3, "mat-form-field", 23)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_7_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 22)(9, "mat-form-field", 23)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "Unit of Measure");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_13_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 22)(15, "mat-form-field", 23)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](18, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_19_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_20_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_21_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 22)(23, "mat-form-field", 23)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, "Unit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](26, "input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](27, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_27_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](28, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_28_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](29, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_29_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "div", 22)(31, "mat-form-field", 23)(32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33, "Tax Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](34, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_Template_mat_icon_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3); return ctx_r98.taxesLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](37, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_37_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "div", 22)(39, "mat-form-field", 23)(40, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](41, "Tax Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](42, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_Template_mat_icon_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r99); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3); return ctx_r100.taxesLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](45, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_45_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](46, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_46_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "div", 22)(48, "mat-form-field", 23)(49, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](50, "Item Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](51, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](52, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_52_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](53, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_mat_error_53_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "div", 147)(55, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](56, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_button_56_Template, 2, 1, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](57, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_button_57_Template, 2, 1, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](58, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r99); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3); return ctx_r101.clearForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](59, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r78.bgtForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("readOnly", ctx_r78.isCatalogueItemsReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.bgtForm.get("itemRequested").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("readOnly", ctx_r78.isCatalogueItemsReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.bgtForm.get("unitOfMeasure").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.bgtForm.get("quantity").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.bgtForm.get("quantity").hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.bgtForm.get("quantity").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.bgtForm.get("unitPrice").hasError("required") && ctx_r78.bgtForm.get("unitPrice").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.bgtForm.get("unitPrice").hasError("pattern") && ctx_r78.bgtForm.get("unitPrice").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.bgtForm.get("unitPrice").hasError("max") && ctx_r78.bgtForm.get("unitPrice").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.bgtForm.get("taxName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.bgtForm.get("taxRate").hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.bgtForm.get("taxRate").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.bgtForm.get("itemDescription").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.bgtForm.get("itemDescription").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.addButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r78.editButton);
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 18)(2, "div", 19)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "Invoice Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, ManageCustomerInvoicesComponent_div_8_ng_container_79_form_5_Template, 60, 18, "form", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r16.enterManually);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", row_r102.id ? row_r102.id : "#", " ");
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_126_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r103.type, "");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_mat_cell_126_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r103.type);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "CC-Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_129_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r106.costcentercode, "");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_mat_cell_129_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r106.costcentercode);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "ExpCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_132_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r109.expenseCode, "");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_mat_cell_132_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r109 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r109.expenseCode);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "ActNo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_135_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r112.accountNumber, "");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_mat_cell_135_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r112.accountNumber);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "ReqItem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_138_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r115.itemRequested, "");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_mat_cell_138_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r115.itemRequested);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "UnitOfMeasure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_141_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r118.unitOfMeasure, "");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_mat_cell_141_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r118.unitOfMeasure);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_144_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r121.quantity, "");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_mat_cell_144_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r121 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r121.quantity);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "UnitPrice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_147_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind4"](2, 1, row_r124.unitPrice, "KSH ", "symbol", "1.2-2"), " ");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_mat_cell_147_span_1_Template, 3, 6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r124.unitPrice);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "TaxName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_150_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r127.taxName, "");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_mat_cell_150_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r127 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r127.taxName);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "TaxRate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_153_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r130.taxRate, "");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_mat_cell_153_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r130 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r130.taxRate);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "SubTotal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_156_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind4"](2, 1, row_r133.subTotal, "KSH ", "symbol", "1.2-2"), "");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_mat_cell_156_span_1_Template, 3, 6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r133 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r133.subTotal);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "TaxAmount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_159_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind4"](2, 1, row_r136.taxAmount, "KSH ", "symbol", "1.2-2"), "");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_mat_cell_159_span_1_Template, 3, 6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r136 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r136.taxAmount);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "TotalAmount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_162_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind4"](2, 1, row_r139.totalAmount, "KSH ", "symbol", "1.2-2"), " ");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_mat_cell_162_span_1_Template, 3, 6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r139.totalAmount);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "BudgetCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_165_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u00A0 Fail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_165_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u00A0 Pass ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_165_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", "-", " ");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_mat_cell_165_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](1, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ManageCustomerInvoicesComponent_div_8_mat_cell_165_button_2_Template, 3, 0, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, ManageCustomerInvoicesComponent_div_8_mat_cell_165_button_3_Template, 3, 0, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, ManageCustomerInvoicesComponent_div_8_mat_cell_165_button_4_Template, 3, 1, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitch", row_r142.budgetFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "Y");
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "OverrideBgt");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_168_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u00A0 Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_168_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u00A0 No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_168_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", "-", " ");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_mat_cell_168_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](1, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ManageCustomerInvoicesComponent_div_8_mat_cell_168_button_2_Template, 3, 0, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, ManageCustomerInvoicesComponent_div_8_mat_cell_168_button_3_Template, 3, 0, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, ManageCustomerInvoicesComponent_div_8_mat_cell_168_button_4_Template, 3, 1, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r148 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitch", row_r148.allowOverride);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "N");
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_171_Template(rf, ctx) { if (rf & 1) {
    const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 173)(1, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_mat_cell_171_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r157); const row_r154 = restoredCtx.$implicit; const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r156.onEditInvoiceDetails(row_r154); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "app-feather-icons", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_mat_cell_171_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r157); const i_r155 = restoredCtx.index; const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r158.onDeleteInvoiceDetails(i_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "app-feather-icons", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r53.disableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r53.disableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("icon", "trash-2");
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_row_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-header-row");
} }
function ManageCustomerInvoicesComponent_div_8_mat_row_173_Template(rf, ctx) { if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-row", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_mat_row_173_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r162); const row_r159 = restoredCtx.$implicit; const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r161.onEditInvoiceDetails(row_r159); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ManageCustomerInvoicesComponent_div_8_div_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-progress-spinner", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("diameter", 40);
} }
function ManageCustomerInvoicesComponent_div_8_ng_template_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, " Upload Invoice Attachments ");
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_223_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_224_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r164 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroupName", index_r164);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", index_r164 + 1, " ");
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_226_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "FileName");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_227_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 182)(1, "mat-form-field", 183)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "fileName");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r166 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroupName", index_r166);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_229_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "FileType");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_230_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 182)(1, "mat-form-field", 183)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "fileType");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r168 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroupName", index_r168);
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_232_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_233_Template(rf, ctx) { if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 187)(1, "input", 188, 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function ManageCustomerInvoicesComponent_div_8_mat_cell_233_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r173); const row_r169 = restoredCtx.$implicit; const index_r170 = restoredCtx.index; const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](2); const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r172.onSelectFile(_r171.files, row_r169, index_r170); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r170 = ctx.index;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroupName", index_r170);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 3, ctx_r68.isLoading))("multiple", "multiple");
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_235_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_236_Template(rf, ctx) { if (rf & 1) {
    const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 190)(1, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_mat_cell_236_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ManageCustomerInvoicesComponent_div_8_mat_cell_236_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r178); const row_r174 = restoredCtx.$implicit; const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r177.downloadDocument(row_r174); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "mat-icon", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_cell_238_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_239_Template(rf, ctx) { if (rf & 1) {
    const _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 190)(1, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_mat_cell_239_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ManageCustomerInvoicesComponent_div_8_mat_cell_239_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r183); const row_r179 = restoredCtx.$implicit; const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r182.deleteCall(row_r179); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "app-feather-icons", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("icon", "trash-2");
} }
function ManageCustomerInvoicesComponent_div_8_mat_header_row_240_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-header-row");
} }
function ManageCustomerInvoicesComponent_div_8_mat_row_241_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-row", 194);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ManageCustomerInvoicesComponent_div_8_mat_cell_242_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r75.input.value, "\"");
} }
function ManageCustomerInvoicesComponent_div_8_div_243_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-progress-spinner", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("diameter", 40);
} }
function ManageCustomerInvoicesComponent_div_8_ng_container_253_Template(rf, ctx) { if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0, 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "button", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_ng_container_253_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r187); const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r186.onValidate("HOD"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "done_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, " HOD Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "button", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_ng_container_253_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r187); const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r188.onValidate("FINANCE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "attach_money");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, " Finance Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hidden", ctx_r77.hideApprovals);
} }
const _c0 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
function ManageCustomerInvoicesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ManageCustomerInvoicesComponent_div_8_div_1_Template, 78, 9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 13)(3, "mat-tab-group", 14, 15)(5, "mat-tab", 16)(6, "div", 17)(7, "div", 5)(8, "div", 18)(9, "div", 19)(10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div")(15, "form", 21)(16, "div", 19)(17, "div", 22)(18, "mat-form-field", 23)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, " Customer Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_Template_mat_icon_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r189._customerLookUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](24, ManageCustomerInvoicesComponent_div_8_mat_error_24_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 22)(26, "mat-form-field", 23)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, " Customer Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](29, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](30, ManageCustomerInvoicesComponent_div_8_mat_error_30_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "div", 22)(32, "mat-form-field", 23)(33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34, " Currency Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](35, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_Template_mat_icon_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r191._currencyLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](38, ManageCustomerInvoicesComponent_div_8_mat_error_38_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "div", 22)(40, "mat-form-field", 23)(41, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](42, "CostCenterCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](43, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_Template_mat_icon_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r192.costCenterLookUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](45, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](46, ManageCustomerInvoicesComponent_div_8_mat_error_46_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "div", 22)(48, "mat-form-field", 23)(49, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](50, "ExpenseCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](51, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_Template_mat_icon_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r193.expenseLookUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](53, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](54, ManageCustomerInvoicesComponent_div_8_mat_error_54_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](55, "div", 22)(56, "mat-form-field", 31)(57, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](58, "Invoice Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](59, "input", 32)(60, "mat-datepicker-toggle", 33)(61, "mat-datepicker", null, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](63, ManageCustomerInvoicesComponent_div_8_mat_error_63_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](64, ManageCustomerInvoicesComponent_div_8_mat_error_64_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](65, "div", 22)(66, "mat-form-field", 31)(67, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](68, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](69, "input", 35)(70, "mat-datepicker-toggle", 33)(71, "mat-datepicker", null, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](73, ManageCustomerInvoicesComponent_div_8_mat_error_73_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](74, ManageCustomerInvoicesComponent_div_8_mat_error_74_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](75, "mat-tab-group")(76, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](77, ManageCustomerInvoicesComponent_div_8_ng_template_77_Template, 3, 0, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](78, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](79, ManageCustomerInvoicesComponent_div_8_ng_container_79_Template, 6, 1, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](80, "div", 39)(81, "div", 40)(82, "div", 19)(83, "div", 41)(84, "ul", 42)(85, "li", 43)(86, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](87, "Invoice Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](88, "li", 44)(89, "label", 45)(90, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](91, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](92, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keyup", function ManageCustomerInvoicesComponent_div_8_Template_input_keyup_92_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r194.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](94, "li")(95, "div", 49)(96, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_Template_button_click_96_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r195.manualItemsEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](97, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](98, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](99, "li")(100, "div", 52)(101, "button", 53)(102, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](103, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](104, "div", 54)(105, "ul", 55)(106, "li")(107, "div", 56)(108, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_Template_img_click_108_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](120); return _r19.exportTable("xlsx", { fileName: "Invoice-Items-list", sheet: "sheet1" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](109, "li")(110, "div", 58)(111, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_Template_img_click_111_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](120); return _r19.exportTable("csv"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](112, "li")(113, "div", 60)(114, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_Template_img_click_114_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](120); return _r19.exportTable("json"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](115, "li")(116, "div", 62)(117, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_Template_img_click_117_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](120); return _r19.exportTable("txt"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](118, "mat-table", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](121, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](122, ManageCustomerInvoicesComponent_div_8_mat_header_cell_122_Template, 2, 0, "mat-header-cell", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](123, ManageCustomerInvoicesComponent_div_8_mat_cell_123_Template, 2, 1, "mat-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](124, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](125, ManageCustomerInvoicesComponent_div_8_mat_header_cell_125_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](126, ManageCustomerInvoicesComponent_div_8_mat_cell_126_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](127, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](128, ManageCustomerInvoicesComponent_div_8_mat_header_cell_128_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](129, ManageCustomerInvoicesComponent_div_8_mat_cell_129_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](130, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](131, ManageCustomerInvoicesComponent_div_8_mat_header_cell_131_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](132, ManageCustomerInvoicesComponent_div_8_mat_cell_132_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](133, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](134, ManageCustomerInvoicesComponent_div_8_mat_header_cell_134_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](135, ManageCustomerInvoicesComponent_div_8_mat_cell_135_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](136, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](137, ManageCustomerInvoicesComponent_div_8_mat_header_cell_137_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](138, ManageCustomerInvoicesComponent_div_8_mat_cell_138_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](139, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](140, ManageCustomerInvoicesComponent_div_8_mat_header_cell_140_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](141, ManageCustomerInvoicesComponent_div_8_mat_cell_141_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](142, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](143, ManageCustomerInvoicesComponent_div_8_mat_header_cell_143_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](144, ManageCustomerInvoicesComponent_div_8_mat_cell_144_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](145, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](146, ManageCustomerInvoicesComponent_div_8_mat_header_cell_146_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](147, ManageCustomerInvoicesComponent_div_8_mat_cell_147_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](148, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](149, ManageCustomerInvoicesComponent_div_8_mat_header_cell_149_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](150, ManageCustomerInvoicesComponent_div_8_mat_cell_150_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](151, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](152, ManageCustomerInvoicesComponent_div_8_mat_header_cell_152_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](153, ManageCustomerInvoicesComponent_div_8_mat_cell_153_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](154, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](155, ManageCustomerInvoicesComponent_div_8_mat_header_cell_155_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](156, ManageCustomerInvoicesComponent_div_8_mat_cell_156_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](157, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](158, ManageCustomerInvoicesComponent_div_8_mat_header_cell_158_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](159, ManageCustomerInvoicesComponent_div_8_mat_cell_159_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](160, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](161, ManageCustomerInvoicesComponent_div_8_mat_header_cell_161_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](162, ManageCustomerInvoicesComponent_div_8_mat_cell_162_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](163, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](164, ManageCustomerInvoicesComponent_div_8_mat_header_cell_164_Template, 2, 0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](165, ManageCustomerInvoicesComponent_div_8_mat_cell_165_Template, 5, 3, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](166, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](167, ManageCustomerInvoicesComponent_div_8_mat_header_cell_167_Template, 2, 0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](168, ManageCustomerInvoicesComponent_div_8_mat_cell_168_Template, 5, 3, "mat-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](169, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](170, ManageCustomerInvoicesComponent_div_8_mat_header_cell_170_Template, 2, 0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](171, ManageCustomerInvoicesComponent_div_8_mat_cell_171_Template, 5, 8, "mat-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](172, ManageCustomerInvoicesComponent_div_8_mat_header_row_172_Template, 1, 0, "mat-header-row", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](173, ManageCustomerInvoicesComponent_div_8_mat_row_173_Template, 1, 2, "mat-row", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](174, ManageCustomerInvoicesComponent_div_8_div_174_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](175, "div", 94)(176, "div", 95)(177, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](178, "Sub - Total amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](179, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](180);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](181, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](182, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](183, "vat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](184, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](185);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](186, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](187, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](188, "h3")(189, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](190, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](191, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](192);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](193, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](194, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](195, ManageCustomerInvoicesComponent_div_8_ng_template_195_Template, 3, 0, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](196, "div", 38)(197, "form", 21)(198, "div", 96)(199, "div", 97)(200, "div", 40)(201, "div", 19)(202, "div", 41)(203, "ul", 42)(204, "li", 43)(205, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](206, "Upload Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](207, "li", 44)(208, "label", 45)(209, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](210, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](211, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keyup", function ManageCustomerInvoicesComponent_div_8_Template_input_keyup_211_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r200.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](213, "li")(214, "div", 49)(215, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_Template_button_click_215_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r201.addFileRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](216, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](217, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](218, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](219, "mat-table", 98, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](222, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](223, ManageCustomerInvoicesComponent_div_8_mat_header_cell_223_Template, 2, 0, "mat-header-cell", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](224, ManageCustomerInvoicesComponent_div_8_mat_cell_224_Template, 2, 2, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](225, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](226, ManageCustomerInvoicesComponent_div_8_mat_header_cell_226_Template, 2, 0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](227, ManageCustomerInvoicesComponent_div_8_mat_cell_227_Template, 5, 1, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](228, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](229, ManageCustomerInvoicesComponent_div_8_mat_header_cell_229_Template, 2, 0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](230, ManageCustomerInvoicesComponent_div_8_mat_cell_230_Template, 5, 1, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](231, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](232, ManageCustomerInvoicesComponent_div_8_mat_header_cell_232_Template, 2, 0, "mat-header-cell", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](233, ManageCustomerInvoicesComponent_div_8_mat_cell_233_Template, 4, 5, "mat-cell", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](234, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](235, ManageCustomerInvoicesComponent_div_8_mat_header_cell_235_Template, 2, 0, "mat-header-cell", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](236, ManageCustomerInvoicesComponent_div_8_mat_cell_236_Template, 4, 0, "mat-cell", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](237, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](238, ManageCustomerInvoicesComponent_div_8_mat_header_cell_238_Template, 2, 0, "mat-header-cell", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](239, ManageCustomerInvoicesComponent_div_8_mat_cell_239_Template, 3, 3, "mat-cell", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](240, ManageCustomerInvoicesComponent_div_8_mat_header_row_240_Template, 1, 0, "mat-header-row", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](241, ManageCustomerInvoicesComponent_div_8_mat_row_241_Template, 1, 2, "mat-row", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](242, ManageCustomerInvoicesComponent_div_8_mat_cell_242_Template, 2, 1, "mat-cell", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](243, ManageCustomerInvoicesComponent_div_8_div_243_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](244, "mat-paginator", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](245, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](246, "div", 115)(247, "div", 116)(248, "div", 117)(249, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_Template_button_click_249_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r202.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](250, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](251, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ManageCustomerInvoicesComponent_div_8_Template_button_click_251_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r190); const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r203.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](252, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](253, ManageCustomerInvoicesComponent_div_8_ng_container_253_Template, 9, 1, "ng-container", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()()()()();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](62);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](72);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.pageFunction !== "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("label", "", ctx_r1.pageFunction, " CUSTOMER INVOICE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r1.pageFunction, " Customer Invoices");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r1.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("customerCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("customerName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("currency").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("costCenterCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("expenseCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matDatepicker", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("for", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("invoiceDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("invoiceDate").hasError("invalidDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matDatepicker", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("for", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("dueDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("dueDate").hasError("pastDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.showItemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind4"](181, 36, ctx_r1.totals.subTotalAmount, "KSH ", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind4"](186, 41, ctx_r1.totals.totalTax, "KSH ", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind4"](193, 46, ctx_r1.totals.totalAmount, "KSH ", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r1.documentsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dataSource", ctx_r1.attachementsDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.isFileDataLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](51, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("align", "end");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r1.mngForm.valid)("hidden", ctx_r1.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.hideApprovals);
} }
const _c1 = function () { return ["Customer Invoices"]; };
class ManageCustomerInvoicesComponent {
    // ****************************************************************************************************************************
    constructor(fb, router, activatedRoute, tokenStorageService, snackbar, route, costManService, notificationAPI, dialog, accessControlService, customerInvoiceManService, calculationService, filesService) {
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.tokenStorageService = tokenStorageService;
        this.snackbar = snackbar;
        this.route = route;
        this.costManService = costManService;
        this.notificationAPI = notificationAPI;
        this.dialog = dialog;
        this.accessControlService = accessControlService;
        this.customerInvoiceManService = customerInvoiceManService;
        this.calculationService = calculationService;
        this.filesService = filesService;
        this.showForm = false;
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.disableActions = false;
        this.hideApprovals = false;
        // ***************************************************************
        // ************************************************************
        //excel columns
        this.excelHeaderRef = ["expenseGlAccount", "expenseName", "expenseType"];
        // File Tabulation
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource([]);
        this.displayedColumns = [
            "id",
            "itemRequested",
            "unitOfMeasure",
            "quantity",
            "unitPrice",
            "taxName",
            "taxRate",
            "subTotal",
            "taxAmount",
            "totalAmount",
            "actions",
        ];
        this.editButton = false;
        this.addButton = true;
        this.selectedRowIndex = -1; // Track the index of the selected row
        this.enterManually = true;
        this.showItemForm = false;
        this.totals = {
            number: 0,
            totalTax: 0,
            subTotalAmount: 0,
            totalAmount: 0,
            purchaseRequisitionItems: [],
        };
        // **************************************************************************************************
        //UploadDocuments
        this.attachementsDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject([]);
        this.displayColumns = [
            "id",
            "fileName",
            "fileType",
            "selectFile",
            "download",
            "action",
        ];
        this.rows = this.fb.array([]);
        this.documentsForm = this.fb.group({ filedetails: this.rows });
        this.isFileDataLoading = true;
        this.selectedFiles = [];
        this.isFileLoading = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(false);
        // ****************************************************************************************************************************
        //Import customer invoices from Excel
        this.items = []; // Array to store
        this.itemErrors = [];
        //******************************************************************************************************************************************************** */
        // Look up for the Customers
        this.selectedItem = [];
        this.taxIsSelected = false;
        this.selectedTaxes = [];
        this.expenseIsSelected = false;
        this.selectedExpense = [];
        this.expenseArray = [];
        this.expenseGlCode = "";
        this.selectedCostCenter = [];
        this.currentUser = this.tokenStorageService.getUser();
    }
    // ****************************************************************************************************************************
    ngOnInit() {
        this.showForm = false;
        this.getPage();
        this.route.queryParams.subscribe((params) => {
            console.log("res", params);
            if (params.hasOwnProperty("id")) {
                const action = params["action"];
                this.pageFunction = params["action"];
                this.invoiceId = params["id"];
                // const serializedData = params["additionalData"];
                // const additionalData = JSON.parse(serializedData);
                //  this.formData = additionalData;
                this.getDataById();
            }
        });
    }
    // ****************************************************************************************************************************
    //definition of data destruction ones data utility is complete
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getDataById() {
        this.isLoading = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpParams().set("id", this.invoiceId);
        this.customerInvoiceManService
            .getCustomerInvoiceById(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                if (res.entity) {
                    this.formData = res.entity;
                    // this.isLoading = false;
                    if (this.pageFunction === "View") {
                        this.pageFunction = "View";
                        this.disableActions = true;
                    }
                    console.log("this.formData.customeritems :", this.formData.customeritems);
                    if (this.formData.customeritems.length > 0) {
                        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource(this.formData.customeritems);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        this.calculateTotals();
                    }
                    if (this.formData.customerInvoiceSupportingDocumentsList.length > 0) {
                        this.isFileDataLoading = false;
                        this.formData.customerInvoiceSupportingDocumentsList.forEach((element) => {
                            const newRow = this.fb.group({
                                file: [element.file],
                                filename: [element.filename],
                                filetype: [element.filetype],
                            });
                            this.rows.push(newRow);
                        });
                        this.updateView();
                    }
                    console.log("ID:", this.invoiceId);
                    console.log("Additional Data:", this.formData);
                    this.getPage();
                    console.log("this.formData :", this.formData);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
                this.isLoading = false;
            },
            complete: () => {
                this.isLoading = false;
            },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_22__.Subscription;
    }
    //definition of necessary functions based on action in params
    getPage() {
        console.log("RES", this.formData);
        if (this.pageFunction === "Add") {
            this.generateForm();
            this.generateInvoiceForm();
            this.hideApprovals = true;
            this.showForm = true;
        }
        else if (this.pageFunction === "Update") {
            this.generateFormWithData();
            this.generateInvoiceForm();
            this.showForm = true;
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.generateInvoiceForm();
            this.hideSubmit = true;
            this.hideApprovals = true;
            this.showForm = true;
        }
    }
    // ****************************************************************************************************************************
    // ****************************************************************************************************************************
    //defining the pages behaviour based on action in params
    generateForm() {
        this.mngForm = this.fb.group({
            id: [""],
            customerCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            customerName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            invoiceDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            dueDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            //invoiceAmount: ["", [Validators.required]],
            currency: ["KES", [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            costCenterCode: [this.currentUser.costCenterCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            expenseCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            customerInvoiceSupportingDocumentsList: [[]],
            customeritems: [[]],
            totalTax: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            subTotalAmount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            totalAmount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
        });
    }
    generateFormWithData() {
        this.mngForm = this.fb.group({
            id: [this.formData.id],
            customerCode: [this.formData.customerCode],
            customerName: [this.formData.customerName, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            invoiceDate: [this.formData.invoiceDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            dueDate: [this.formData.dueDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            //invoiceAmount: [this.formData.invoiceAmount, [Validators.required]],
            currency: [this.formData.currency, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            costCenterCode: [this.formData.costCenterCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            expenseCode: [this.formData.expenseCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            customerInvoiceSupportingDocumentsList: [
                this.formData.customerInvoiceSupportingDocumentsList || [],
            ],
            customeritems: [this.formData.customeritems || []],
            totalTax: [this.formData.totalTax, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            subTotalAmount: [this.formData.subTotalAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            totalAmount: [this.formData.totalAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
        });
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            id: [{ value: this.formData.id, disabled: true }],
            customerCode: [
                { value: this.formData.customerCode, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required],
            ],
            customerName: [
                { value: this.formData.customerName, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required],
            ],
            invoiceDate: [
                { value: this.formData.invoiceDate, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required],
            ],
            dueDate: [
                { value: this.formData.dueDate, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required],
            ],
            // invoiceAmount: [
            //   { value: this.formData.invoiceAmount, disabled: true },
            //   [Validators.required],
            // ],
            currency: [
                { value: this.formData.currency, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required],
            ],
            customerInvoiceSupportingDocumentsList: [
                {
                    value: this.formData.customerInvoiceSupportingDocumentsList,
                    disabled: true,
                },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required],
            ],
            customeritems: [
                { value: this.formData.customeritems, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required],
            ],
            costCenterCode: [
                { value: this.formData.costCenterCode, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required],
            ],
            expenseCode: [
                { value: this.formData.expenseCode, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required],
            ],
        });
    }
    invoiceDateValidaton(control) {
        const invoiceSelectedDate = control.value;
        const today = new Date();
        if (invoiceSelectedDate > today) {
            return { invalidDate: true };
        }
        return null;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    generateDisabledInvoiceForm() {
        this.bgtForm = this.fb.group({
            itemRequested: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            itemCode: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            itemDescription: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            unitOfMeasure: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            quantity: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            unitPrice: [
                { value: "", disabled: true },
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.max(1000000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                ],
            ],
            taxRate: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            taxName: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            subTotal: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            taxAmount: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            totalAmount: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
        });
    }
    generateInvoiceForm() {
        this.bgtForm = this.fb.group({
            itemRequested: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            itemCode: [""],
            itemDescription: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(300)]],
            unitOfMeasure: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            quantity: [
                0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.min(0.01),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.pattern("^[0-9]+(\\.[0-9]{1,2})?$"),
                ],
            ],
            unitPrice: [
                0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.max(1000000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                ],
            ],
            taxRate: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.min(0.01),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.pattern("^[0-9]+(\\.[0-9]{1,2})?$"),
                ],
            ],
            taxName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            subTotal: [""],
            taxAmount: [""],
            totalAmount: [""],
        });
    }
    dateValidator(control) {
        const selectedDate = control.value;
        const today = new Date();
        if (selectedDate < today) {
            return { pastDate: true };
        }
        return null;
    }
    manualItemsEntry() {
        this.showItemForm = true;
        this.enterManually = true;
        console.log("event: ", event);
    }
    addToArray() {
        if (this.bgtForm.valid) {
            this.calculateTax();
            console.log("this.bgtForm: ", this.bgtForm.value);
            const newRecord = {
                itemRequested: this.bgtForm.value.itemRequested,
                itemCode: this.bgtForm.value.itemCode,
                itemDescription: this.bgtForm.value.itemDescription,
                unitOfMeasure: this.bgtForm.value.unitOfMeasure,
                quantity: this.bgtForm.value.quantity,
                unitPrice: this.bgtForm.value.unitPrice,
                taxRate: this.bgtForm.value.taxRate,
                taxName: this.bgtForm.value.taxName,
                subTotal: this.bgtForm.value.subTotal,
                taxAmount: this.bgtForm.value.taxAmount,
                totalAmount: this.bgtForm.value.totalAmount,
            };
            this.dataSource.data.push(newRecord);
            this.dataSource.data = this.dataSource.data.slice();
            this.resetBgtForm();
            this.setDefaultValues();
            this.calculateTotals();
        }
    }
    setDefaultValues() {
        if (this.currentUser) {
            this.mngForm.patchValue({
                costCenterCode: this.currentUser.costCenterCode,
            });
        }
    }
    updateInvoiceDetails() {
        if (this.bgtForm.valid) {
            this.calculateTax();
            console.log("this.bgtForm: ", this.bgtForm.value);
            const updatedRecord = {
                itemRequested: this.bgtForm.value.itemRequested,
                itemCode: this.bgtForm.value.itemCode,
                itemDescription: this.bgtForm.value.itemDescription,
                unitOfMeasure: this.bgtForm.value.unitOfMeasure,
                quantity: this.bgtForm.value.quantity,
                unitPrice: this.bgtForm.value.unitPrice,
                taxRate: this.bgtForm.value.taxRate,
                taxName: this.bgtForm.value.taxName,
                subTotal: this.bgtForm.value.subTotal,
                taxAmount: this.bgtForm.value.taxAmount,
                totalAmount: this.bgtForm.value.totalAmount,
            };
            this.dataSource.data[this.selectedRowIndex] = updatedRecord;
            this.dataSource.data = this.dataSource.data.slice();
            this.resetBgtForm();
            this.editButton = false;
            this.addButton = true;
            this.selectedRowIndex = -1;
            this.calculateTotals();
        }
    }
    onEditInvoiceDetails(row) {
        this.editButton = true;
        this.addButton = false;
        this.selectedRowIndex = this.dataSource.data.indexOf(row);
        this.showItemForm = true;
        this.bgtForm.patchValue({
            id: row.id,
            itemRequested: row.itemRequested,
            itemCode: row.itemCode,
            itemDescription: row.itemDescription,
            unitOfMeasure: row.unitOfMeasure,
            quantity: row.quantity,
            unitPrice: row.unitPrice,
            taxRate: row.taxRate,
            taxName: row.taxName,
            subTotal: row.subTotal,
            taxAmount: row.taxAmount,
            totalAmount: row.totalAmount,
        });
    }
    onDeleteInvoiceDetails(index) {
        this.dataSource.data.splice(index, 1);
        this.dataSource.data = this.dataSource.data.slice();
        this.calculateTotals();
    }
    clearForm() {
        this.resetBgtForm();
        this.editButton = false;
        this.addButton = true;
        this.selectedRowIndex = -1;
    }
    resetBgtForm() {
        this.bgtForm.reset();
        this.showItemForm = false;
    }
    calculateTax() {
        console.log("quantity: ", Number(this.bgtForm.value.quantity));
        console.log("unitPrice: ", Number(this.bgtForm.value.unitPrice));
        console.log("taxRate: ", Number(this.bgtForm.value.taxRate));
        const taxDetails = this.calculationService.calculateTax(Number(this.bgtForm.value.quantity), Number(this.bgtForm.value.unitPrice), Number(this.bgtForm.value.taxRate));
        this.bgtForm.patchValue({
            subTotal: taxDetails.subTotal.toFixed(2),
            taxAmount: taxDetails.taxAmount.toFixed(2),
            totalAmount: taxDetails.totalAmount.toFixed(2),
        });
    }
    calculateTotals() {
        const dataArray = this.dataSource.data;
        console.log("dataArray: ", dataArray);
        this.totals = this.calculationService.calculateTotals(dataArray);
        console.log("totals: ", this.totals);
        // invoiceAmount
        this.mngForm.patchValue({
            number: this.totals.number,
            totalTax: this.totals.totalTax,
            subTotalAmount: this.totals.subTotalAmount,
            totalAmount: this.totals.totalAmount,
            customeritems: this.totals.purchaseRequisitionItems.slice(),
        });
    }
    createFileForm() {
        this.fileForm = this.fb.group({
            files: this.fb.array([]),
        });
        //this.fileInputs = this.fileForm.get('files') as FormArray;
        this.addFileRow();
    }
    addFileRow() {
        this.isFileDataLoading = false;
        const row = this.fb.group({
            file: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required],
            fileType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required],
            fileName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required],
        });
        //this.fileInputs.push(row);
        this.rows.push(row);
        this.attachementsDataSource.next(this.rows.controls);
    }
    updateView() {
        this.attachementsDataSource.next(this.rows.controls);
        this.mngForm.patchValue({
            customerInvoiceSupportingDocumentsList: this.documentsForm.value.filedetails,
        });
    }
    deleteCall(row) {
        const dataArray = this.attachementsDataSource.getValue();
        const index = dataArray.indexOf(row);
        if (index !== -1) {
            dataArray.splice(index, 1);
            this.attachementsDataSource.next(dataArray);
        }
    }
    onSelectFile(files, selectedRow, index) {
        console.log("row: ", selectedRow.value, index);
        this.isFileLoading.next(true);
        this.selectedFiles = [];
        this.filesService.toBase64(files, this.selectedFiles).subscribe((res) => {
            if (res) {
                this.isFileLoading.next(false);
                this.selectedFiles = res;
                console.log("selectedFiles: ", this.selectedFiles);
                console.log("this.selectedFiles[0].name: ", this.selectedFiles[0].name);
                this.currFile = this.selectedFiles[0].base64;
                const fileName = this.selectedFiles[0].name;
                const fileParts = fileName.split(".");
                const name = fileParts.slice(0, -1).join(".");
                const extension = fileParts[fileParts.length - 1];
                console.log("Name:", name);
                console.log("Extension:", extension);
                this.currfileName = name;
                this.currType = extension;
                this.rows.at(index).patchValue({
                    file: this.currFile,
                    fileName: this.currfileName,
                    fileType: this.currType,
                });
                this.updateView();
            }
        });
    }
    downloadDocument(row) {
        let file = row.value.file;
        let fileName = row.value.fileName;
        let fileType = row.value.fileType;
        // Download PDF in Chrome etc.
        const source = `${file}`;
        const link = document.createElement("a");
        link.href = source;
        link.download = `${fileName}.${fileType}`;
        link.click();
    }
    // ****************************************************************************************************************************
    //cancel button function
    cancel() {
        console.log("Before routing");
        this.router.navigate(["/erp-procurement/receivable/all-customer-invoices"]);
        // admin/parameters/all-expenses
    }
    handleFileInput(files) {
        const file = files.item(0);
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_24__.read(arrayBuffer, { type: "array" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = xlsx__WEBPACK_IMPORTED_MODULE_24__.utils.sheet_to_json(worksheet, { raw: true });
                this.items = jsonData;
                console.log(" this.items :", this.items);
                // Initialize the form
                this.itemsForm = this.fb.group({
                    items: this.fb.array([]), // Array of items
                });
                console.log("this.items: ", this.items);
            };
            fileReader.readAsArrayBuffer(file);
        }
    }
    onValidate(userType) {
        // let privilege = "Manage Expenses";
        let privilege = "";
        switch (userType) {
            case "HOD":
                privilege = "HOD Customer Invoice Validation";
                // privilege = "Manage Expenses";
                break;
            case "FINANCE":
                privilege = "Finance Customer Invoice Validation";
                // privilege = "Manage Expenses";
                break;
            default:
                return;
        }
        this.hasAccess = this.accessControlService.hasPrivilege("FinanceModule", [
            privilege,
        ]);
        if (this.hasAccess) {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.width = "800px";
            dialogConfig.data = {
                data: [this.formData],
                userType: userType,
            };
            console.log("this.formData: ", this.formData);
            const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_validation_customer_invoice_validation_customer_invoice_validation_component__WEBPACK_IMPORTED_MODULE_5__.CustomerInvoiceValidationComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                this.router.navigate([
                    "/erp-procurement/receivable/all-customer-invoices",
                ]);
            });
        }
    }
    _customerLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "View GL Accounts",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_customer_lookup_customer_lookup_component__WEBPACK_IMPORTED_MODULE_1__.CustomerLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            result.data.forEach((element) => {
                this.mngForm.patchValue({
                    customerCode: element.customerCode,
                    customerName: element.customerName,
                    //currency: element.currency,
                });
            });
        });
    }
    //Currencies LookUP
    _currencyLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "View Currency",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_maintained_currencies_look_up_maintained_currencies_look_up_component__WEBPACK_IMPORTED_MODULE_3__.MaintainedCurrenciesLookUpComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            res.data.forEach((element) => {
                this.mngForm.patchValue({
                    currency: element.currencyCode,
                });
            });
        });
    }
    taxesLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "single tax",
            selected: this.selectedTaxes,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_tax_lookup_tax_lookup_component__WEBPACK_IMPORTED_MODULE_4__.TaxLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            if (result && result.data.length != 0) {
                console.log("result: ", result.data);
                this.bgtForm.patchValue({
                    taxRate: result.data[0].taxRate,
                    taxName: result.data[0].taxName,
                });
            }
        });
    }
    expenseLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "Single Expense",
            selected: this.selectedExpense,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_expense_lookup_expense_lookup_component__WEBPACK_IMPORTED_MODULE_2__.ExpenseLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("lookupresonse: ", result.data);
            this.mngForm.patchValue({
                expenseCode: result.data[0].expenseCode,
            });
        });
    }
    costCenterLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "Single CostCenter",
            selected: this.selectedCostCenter,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_0__.CcentreLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("lookupresonse: ", result.data);
            this.mngForm.patchValue({
                costCenterCode: result.data[0].costCenterCode,
            });
        });
    }
    // ****************************************************************************************************************************
    //submit button function
    submit() {
        console.log("Both: ", this.mngForm.value);
        if (this.pageFunction === "Add") {
            this.customerInvoiceManService
                .addcustomerInvoices(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    console.log("res.status: ", res.statusCode);
                    if (res.statusCode == 201) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                        this.router.navigate([
                            "/erp-procurement/receivable/all-customer-invoices",
                        ]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_22__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.customerInvoiceManService
                .updateCustomerInvoice(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                        this.router.navigate([
                            "/erp-procurement/receivable/all-customer-invoices",
                        ]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_22__.Subscription;
        }
    }
    //uploading batch expense files
    submitBatch() {
        console.log("submitting batch");
        if (this.pageFunction === "Add") {
            this.customerInvoiceManService
                .uploadBatchcustomerInvoices(this.items)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                        this.router.navigate([
                            "/erp-procurement/receivable/all-customer-invoices",
                        ]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_22__.Subscription;
        }
    }
}
ManageCustomerInvoicesComponent.ɵfac = function ManageCustomerInvoicesComponent_Factory(t) { return new (t || ManageCustomerInvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_erp_finance_data_services_cost_centre_management_service__WEBPACK_IMPORTED_MODULE_8__.CostCentreManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_9__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_10__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_erp_finance_data_services_customer_invoices_service__WEBPACK_IMPORTED_MODULE_11__.CustomerInvoicesService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_procurement_calculations_service__WEBPACK_IMPORTED_MODULE_12__.CalculationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_13__.FilesService)); };
ManageCustomerInvoicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: ManageCustomerInvoicesComponent, selectors: [["app-manage-customer-invoices"]], viewQuery: function ManageCustomerInvoicesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 9, vars: 6, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "body", 4, "ngIf"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "body"], ["class", "row", 4, "ngIf"], [1, "mx-2"], ["animationDuration", "1000ms"], ["tabGroup", ""], [3, "label"], [1, "row", "clearfix", "mx-2"], [1, "header"], [1, "row"], [1, "col-12"], [3, "formGroup"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width", "mb-0"], ["matInput", "", "formControlName", "customerCode", "readonly", ""], ["matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "formControlName", "customerName"], ["matInput", "", "formControlName", "currency"], ["matInput", "", "formControlName", "costCenterCode"], ["matInput", "", "formControlName", "expenseCode"], ["appearance", "outline", 1, "example-full-width", "mb-1"], ["matInput", "", "formControlName", "invoiceDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datepicker", ""], ["matInput", "", "formControlName", "dueDate", "required", "", 3, "matDatepicker"], ["picker", ""], ["mat-tab-label", ""], [1, "mt-3"], [1, "mx-4", "my-4"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-2", 4, "matHeaderCellDef"], ["class", "psl-3 tbl-col-width-per-2", 4, "matCellDef"], ["matColumnDef", "type"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-24", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-24", 4, "matCellDef"], ["matColumnDef", "costCenterCode"], ["matColumnDef", "expenseCode"], ["matColumnDef", "accountNumber"], ["matColumnDef", "itemRequested"], ["matColumnDef", "unitOfMeasure"], ["matColumnDef", "quantity"], ["matColumnDef", "unitPrice"], ["matColumnDef", "taxName"], ["matColumnDef", "taxRate"], ["matColumnDef", "subTotal"], ["matColumnDef", "taxAmount"], ["matColumnDef", "totalAmount"], ["matColumnDef", "budgetFlag"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "allowOverride"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], [1, "col-md-12"], [1, "float-end", "m-t-30", "text-end"], [2, "margin", "20px"], [1, "table-responsive"], ["matTableExporter", "", "formArrayName", "filedetails", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-6", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-6", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "fileName"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-50 fileName-cell", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-50 fileName-cell", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "fileType"], ["matColumnDef", "selectFile"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-50 selectfile-cell", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-50 selectfile-cell", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "download"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matCellDef"], ["matColumnDef", "action"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [1, "row", "mx-2"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["mat-dialog-action", "", 3, "align"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "hidden", "click"], [3, "hidden", 4, "ngIf"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "bg-color"], [1, "chat"], [1, "chat-header", "clearfix"], [1, "col-6"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages", "mt-2"], [1, "badge", "badge-hod"], [1, "badge", "badge-hod-approved"], [1, "chat-about", "mt-2"], [1, "chat-with", "remarks"], [1, "remarks-content", "mx-2"], [1, "badge", "badge-finance"], [1, "badge", "badge-finance-approved"], [1, "badge", "badge-procurement"], [1, "badge", "badge-procurement-approved"], ["class", "mx-4", 3, "formGroup", 4, "ngIf"], [1, "mx-4", 3, "formGroup"], ["matInput", "", "formControlName", "itemRequested", 3, "readOnly"], ["matInput", "", "formControlName", "unitOfMeasure", 3, "readOnly"], ["matInput", "", "formControlName", "quantity"], ["matInput", "", "formControlName", "unitPrice", "mask", "separator", "thousandSeparator", ","], ["matInput", "", "formControlName", "taxName"], ["matInput", "", "formControlName", "taxRate"], ["matInput", "", "formControlName", "itemDescription"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1", "float-left"], [1, "float-right"], ["class", "btn-space", "mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-2"], [1, "psl-3", "tbl-col-width-per-2"], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-24"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-24"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "disabled", "click"], [3, "icon"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-6"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-6", 3, "formGroupName"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "fileName-cell"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "fileName-cell", 3, "formGroupName"], ["appearance", "fill", 1, "example-full-width", "mt-2", "mr-5"], ["matInput", "", "type", "text", "formControlName", "fileName", "placeholder", "fileName", "maxlength", "50"], ["matInput", "", "type", "text", "formControlName", "fileType", "placeholder", "fileType", "maxlength", "50"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "selectfile-cell"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "selectfile-cell", 3, "formGroupName"], ["type", "file", 3, "disabled", "multiple", "change"], ["file", ""], [1, "column-nowrap", "psl-3", "tbl-col-width-per-30"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["aria-label", "Download"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matRipple", ""], ["colspan", "4"], [3, "hidden"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "click"]], template: function ManageCustomerInvoicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, ManageCustomerInvoicesComponent_div_7_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, ManageCustomerInvoicesComponent_div_8_Template, 254, 52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", "Manage Customer Invoices")("items", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](5, _c1))("active_item", "Manage Customer Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showForm);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBar, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatError, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.RequiredValidator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatDatepicker, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabLabel, ngx_mask__WEBPACK_IMPORTED_MODULE_36__.MaskDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_39__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_15__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_40__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_41__.MatProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.MaxLengthValidator, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_29__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtY3VzdG9tZXItaW52b2ljZXMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 65131:
/*!***********************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/recievables/recievables-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecievablesRoutingModule": () => (/* binding */ RecievablesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_all_customer_invoices_all_customer_invoices_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/all-customer-invoices/all-customer-invoices.component */ 4337);
/* harmony import */ var _data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _pages_manage_customer_invoices_manage_customer_invoices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/manage-customer-invoices/manage-customer-invoices.component */ 91540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: "all-customer-invoices",
        component: _pages_all_customer_invoices_all_customer_invoices_component__WEBPACK_IMPORTED_MODULE_0__.AllCustomerInvoicesComponent,
        canActivate: [_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'ProcurementModule', requiredPrivilege: ["Dashboard", "All Customer Invoices"] },
    },
    {
        path: "manage-customer-invoices",
        component: _pages_manage_customer_invoices_manage_customer_invoices_component__WEBPACK_IMPORTED_MODULE_2__.ManageCustomerInvoicesComponent,
        canActivate: [_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'ProcurementModule', requiredPrivilege: ["Dashboard", "Manage Customer Invoices"] },
    },
];
class RecievablesRoutingModule {
}
RecievablesRoutingModule.ɵfac = function RecievablesRoutingModule_Factory(t) { return new (t || RecievablesRoutingModule)(); };
RecievablesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RecievablesRoutingModule });
RecievablesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RecievablesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 77212:
/*!***************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/recievables/recievables.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecievablesModule": () => (/* binding */ RecievablesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _recievables_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recievables-routing.module */ 65131);
/* harmony import */ var _pages_all_customer_invoices_all_customer_invoices_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/all-customer-invoices/all-customer-invoices.component */ 4337);
/* harmony import */ var _pages_manage_customer_invoices_manage_customer_invoices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/manage-customer-invoices/manage-customer-invoices.component */ 91540);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 79091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);



































class RecievablesModule {
}
RecievablesModule.ɵfac = function RecievablesModule_Factory(t) { return new (t || RecievablesModule)(); };
RecievablesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: RecievablesModule });
RecievablesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _recievables_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecievablesRoutingModule,
            //Additional imports
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltipModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBarModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule,
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_22__.MatTableExporterModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__.MatStepperModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_33__.NgxMaskModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__.MatChipsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RecievablesModule, { declarations: [_pages_all_customer_invoices_all_customer_invoices_component__WEBPACK_IMPORTED_MODULE_1__.AllCustomerInvoicesComponent,
        _pages_manage_customer_invoices_manage_customer_invoices_component__WEBPACK_IMPORTED_MODULE_2__.ManageCustomerInvoicesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _recievables_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecievablesRoutingModule,
        //Additional imports
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltipModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBarModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule,
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_22__.MatTableExporterModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__.MatStepperModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_33__.NgxMaskModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__.MatChipsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_erp-finance_data_services_expense-management_service_ts-src_app_erp-procurement_modul-6e2b7c.js.map
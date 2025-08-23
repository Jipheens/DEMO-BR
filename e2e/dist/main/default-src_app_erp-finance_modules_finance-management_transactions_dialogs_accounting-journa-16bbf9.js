"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["default-src_app_erp-finance_modules_finance-management_transactions_dialogs_accounting-journa-16bbf9"],{

/***/ 45441:
/*!*******************************************************************!*\
  !*** ./src/app/erp-finance/data/services/transactions.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsService": () => (/* binding */ TransactionsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class TransactionsService {
    constructor(http) {
        this.http = http;
    }
    getTransactions() {
        const TransactionsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/transactions/all`;
        return this.http.get(TransactionsUrl);
    }
    getTransactionsByStatus(params) {
        const TransactionsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/transactions/all/by/fetchbyStatus`;
        return this.http.get(TransactionsUrl, { params });
    }
    getTransactionsByRefCodeAndTransactionType(params) {
        const TransactionsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/transactions/find/by/refcodeandtransactiontype`;
        return this.http.get(TransactionsUrl, { params });
    }
    getTransactionsByTranCode(params) {
        const TransactionsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/transactions/find/by/trancode`;
        return this.http.get(TransactionsUrl, { params });
    }
    getTransactionsByStatusTransactionType(params) {
        const TransactionsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/transactions/find/by/statusandtransactiontype`;
        return this.http.get(TransactionsUrl, { params });
    }
    getTransactionsById(params) {
        const TransactionsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/transactions/find/by/id`;
        return this.http.get(TransactionsUrl, { params });
    }
    addTransactions(data) {
        const TransactionsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/transactions/add`;
        return this.http.post(TransactionsUrl, data);
    }
    updateTransactions(TransactionsDetails) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/transactions/update`;
        return this.http.put(updateBillUrl, TransactionsDetails);
    }
    deleteTransactionsTemporarily(params) {
        const TransactionsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/transactions/delete`;
        return this.http.delete(TransactionsUrl, { params });
    }
    validateTransactions(params, dataToValidate) {
        const TransactionsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/transactions/update/state`;
        return this.http.put(TransactionsUrl, dataToValidate, { params });
    }
    // ********************************************************************************************************************
    updateAccountingTransactionDetailsStatus(params) {
        const Url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/transactions/update/record/on/transaction`;
        return this.http.put(Url, {}, { params });
    }
    updateAccountingTransactionDetailsForImprestStatus(params) {
        const Url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/transactions/update/record/on/imprest/transaction`;
        return this.http.put(Url, {}, { params });
    }
}
TransactionsService.ɵfac = function TransactionsService_Factory(t) { return new (t || TransactionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TransactionsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TransactionsService, factory: TransactionsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 46322:
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/erp-finance/modules/finance-management/transactions/dialogs/accounting-journal-transactions/accounting-journal-transactions.component.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountingJournalTransactionsComponent": () => (/* binding */ AccountingJournalTransactionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_finance_data_lookups_gls_lookup_gls_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/gls-lookup/gls-lookup.component */ 83163);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_finance_data_services_transactions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-finance/data/services/transactions.service */ 45441);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/file-upload/file-upload.component */ 67082);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);



































const _c0 = ["fileInput"];
function AccountingJournalTransactionsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-bar", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_div_18_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transactionType_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", transactionType_r63.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", transactionType_r63.name, " ");
} }
function AccountingJournalTransactionsComponent_div_18_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Transaction Type is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_div_18_div_10_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Reference Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_div_18_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 87)(1, "mat-form-field", 88)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Reference Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "local_offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AccountingJournalTransactionsComponent_div_18_div_10_mat_error_7_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r59.mngForm.get("referenceCode").hasError("required"));
} }
function AccountingJournalTransactionsComponent_div_18_div_11_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " PR Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_div_18_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 87)(1, "mat-form-field", 88)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "PR Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AccountingJournalTransactionsComponent_div_18_div_11_mat_error_7_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r60.mngForm.get("prCode").hasError("required"));
} }
function AccountingJournalTransactionsComponent_div_18_div_12_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Item Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_div_18_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 87)(1, "mat-form-field", 88)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Item Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "confirmation_number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AccountingJournalTransactionsComponent_div_18_div_12_mat_error_7_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r61.mngForm.get("itemCode").hasError("required"));
} }
function AccountingJournalTransactionsComponent_div_18_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23)(1, "div", 87)(2, "mat-form-field", 88)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Transaction Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AccountingJournalTransactionsComponent_div_18_mat_option_6_Template, 2, 2, "mat-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "compare_arrows");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AccountingJournalTransactionsComponent_div_18_mat_error_9_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AccountingJournalTransactionsComponent_div_18_div_10_Template, 8, 1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AccountingJournalTransactionsComponent_div_18_div_11_Template, 8, 1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AccountingJournalTransactionsComponent_div_18_div_12_Template, 8, 1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 93)(14, "mat-form-field", 88)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "textarea", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AccountingJournalTransactionsComponent_div_18_mat_error_20_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.disableTransactionType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.transactionTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("transactionType").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.data.transactionType !== "Standard" || ctx_r1.data.transactionType !== "Journals");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.data.transactionType === "Receiving" || ctx_r1.data.transactionType === "Receiving");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.data.transactionType === "Receiving" || ctx_r1.data.transactionType === "Receiving");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("description").hasError("required"));
} }
function AccountingJournalTransactionsComponent_ng_container_19_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Dr Account ID is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_ng_container_19_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Dr Account Currency Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_ng_container_19_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Dr Account Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_ng_container_19_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Cr Account ID is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_ng_container_19_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Cr Account Currency Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_ng_container_19_mat_error_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Cr Account Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_ng_container_19_mat_error_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter unit amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_ng_container_19_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please ensure amount does not exceed 2 decimal values! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_ng_container_19_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please ensure amount does not exceed 1 billion! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_ng_container_19_mat_error_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Narration is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h6", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Transaction Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 100)(5, "div", 23)(6, "div", 101)(7, "mat-form-field", 88)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Dr Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-icon", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_ng_container_19_Template_mat_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r77.glsLookUp("drAcId"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AccountingJournalTransactionsComponent_ng_container_19_mat_error_13_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 101)(15, "mat-form-field", 88)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Dr Ac CurCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "account_balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AccountingJournalTransactionsComponent_ng_container_19_mat_error_21_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 101)(23, "mat-form-field", 88)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Dr AccountName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, AccountingJournalTransactionsComponent_ng_container_19_mat_error_29_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 101)(31, "mat-form-field", 88)(32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Cr Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "mat-icon", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_ng_container_19_Template_mat_icon_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r78); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r79.glsLookUp("crAcId"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, AccountingJournalTransactionsComponent_ng_container_19_mat_error_37_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 101)(39, "mat-form-field", 88)(40, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Cr Ac CurCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "account_balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, AccountingJournalTransactionsComponent_ng_container_19_mat_error_45_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 101)(47, "mat-form-field", 88)(48, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Cr AccountName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, AccountingJournalTransactionsComponent_ng_container_19_mat_error_53_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 101)(55, "mat-form-field", 88)(56, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "attach_money");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, AccountingJournalTransactionsComponent_ng_container_19_mat_error_61_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, AccountingJournalTransactionsComponent_ng_container_19_mat_error_62_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, AccountingJournalTransactionsComponent_ng_container_19_mat_error_63_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 110)(65, "mat-form-field", 88)(66, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Narration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "record_voice_over");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, AccountingJournalTransactionsComponent_ng_container_19_mat_error_71_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 23)(73, "div", 112)(74, "div", 113)(75, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_ng_container_19_Template_button_click_75_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r78); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r80.pushToDataSource(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_ng_container_19_Template_button_click_77_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r78); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r81.cancelParTran(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.tranForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.tranForm.get("drAcId").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.tranForm.get("drAcCurrencyCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.tranForm.get("drAcName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.tranForm.get("crAcId").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.tranForm.get("crAcCurrencyCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.tranForm.get("crAcName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.tranForm.get("amount").hasError("required") && ctx_r2.tranForm.get("amount").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.tranForm.get("amount").hasError("pattern") && ctx_r2.tranForm.get("amount").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.tranForm.get("amount").hasError("max") && ctx_r2.tranForm.get("amount").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.tranForm.get("narration").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("auth-spinner", ctx_r2.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r2.tranForm.valid || ctx_r2.posting)("hidden", ctx_r2.viewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.parTranAction, " ParTran ");
} }
function AccountingJournalTransactionsComponent_mat_chip_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip", 116)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemError_r82 = ctx.$implicit;
    const i_r83 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", i_r83 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", itemError_r82.field, ": ", itemError_r82.message, " ");
} }
function AccountingJournalTransactionsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 117)(1, "div", 118)(2, "app-file-upload", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AccountingJournalTransactionsComponent_div_23_Template_app_file_upload_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r84.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 120)(4, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_div_23_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r85); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r86.downloadTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Excel Template ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r4.hideSubmit);
} }
function AccountingJournalTransactionsComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " System Transaction ");
} }
function AccountingJournalTransactionsComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 123)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_div_54_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r87.import(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function AccountingJournalTransactionsComponent_mat_header_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r89.id ? row_r89.id : "#", " ");
} }
function AccountingJournalTransactionsComponent_mat_header_cell_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Dr AcName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r90.drAcName);
} }
function AccountingJournalTransactionsComponent_mat_header_cell_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Dr Ac No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r91.drAcId);
} }
function AccountingJournalTransactionsComponent_mat_header_cell_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r92.drAcCurrencyCode);
} }
function AccountingJournalTransactionsComponent_mat_header_cell_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cr AcName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r93.crAcName);
} }
function AccountingJournalTransactionsComponent_mat_header_cell_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cr Ac No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r94.crAcId);
} }
function AccountingJournalTransactionsComponent_mat_header_cell_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r95.crAcCurrencyCode);
} }
function AccountingJournalTransactionsComponent_mat_header_cell_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind4"](2, 1, row_r96.amount, row_r96.accountCurrencyCode, "symbol", "1.2-2"), " ");
} }
function AccountingJournalTransactionsComponent_mat_header_cell_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Trans Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r97.partTranstype);
} }
function AccountingJournalTransactionsComponent_mat_header_cell_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Narration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r98.narration);
} }
function AccountingJournalTransactionsComponent_mat_header_cell_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_98_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 130)(1, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_mat_cell_98_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AccountingJournalTransactionsComponent_mat_cell_98_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r103); const row_r99 = restoredCtx.$implicit; const i_r100 = restoredCtx.index; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r102.editParTran(row_r99, i_r100); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-feather-icons", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_mat_cell_98_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AccountingJournalTransactionsComponent_mat_cell_98_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r103); const i_r100 = restoredCtx.index; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r105.deleteParTran(i_r100); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-feather-icons", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "trash-2");
} }
function AccountingJournalTransactionsComponent_mat_header_row_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
} }
function AccountingJournalTransactionsComponent_mat_row_100_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-row", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_mat_row_100_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r108); const row_r106 = restoredCtx.$implicit; const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r107.onSelect(row_r106); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AccountingJournalTransactionsComponent_mat_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r34.input.value, "\"");
} }
function AccountingJournalTransactionsComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 40);
} }
function AccountingJournalTransactionsComponent_ng_template_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Transaction Attachments ");
} }
function AccountingJournalTransactionsComponent_mat_header_cell_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r110 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroupName", index_r110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", index_r110 + 1, " ");
} }
function AccountingJournalTransactionsComponent_mat_header_cell_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "FileName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 139)(1, "mat-form-field", 140)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "fileName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r112 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroupName", index_r112);
} }
function AccountingJournalTransactionsComponent_mat_header_cell_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "FileType");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 139)(1, "mat-form-field", 140)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "fileType");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r114 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroupName", index_r114);
} }
function AccountingJournalTransactionsComponent_mat_header_cell_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_142_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 144)(1, "input", 145, 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AccountingJournalTransactionsComponent_mat_cell_142_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r119); const row_r115 = restoredCtx.$implicit; const index_r116 = restoredCtx.index; const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r118.onSelectFile(_r117.files, row_r115, index_r116); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r116 = ctx.index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroupName", index_r116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, ctx_r47.isLoading))("multiple", "multiple");
} }
function AccountingJournalTransactionsComponent_mat_header_cell_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_145_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 147)(1, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_mat_cell_145_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AccountingJournalTransactionsComponent_mat_cell_145_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r124); const row_r120 = restoredCtx.$implicit; const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r123.downloadDocument(row_r120); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function AccountingJournalTransactionsComponent_mat_header_cell_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AccountingJournalTransactionsComponent_mat_cell_148_Template(rf, ctx) { if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 147)(1, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_mat_cell_148_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AccountingJournalTransactionsComponent_mat_cell_148_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r129); const row_r125 = restoredCtx.$implicit; const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r128.deleteCall(row_r125); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-feather-icons", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "trash-2");
} }
function AccountingJournalTransactionsComponent_mat_header_row_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
} }
function AccountingJournalTransactionsComponent_mat_row_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-row", 150);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AccountingJournalTransactionsComponent_mat_cell_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r54.input.value, "\"");
} }
function AccountingJournalTransactionsComponent_div_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 40);
} }
function AccountingJournalTransactionsComponent_div_154_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_div_154_ng_container_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r135); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r134.postSalary(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Post Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("auth-spinner", ctx_r132.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r132.mngForm.valid || ctx_r132.posting || ctx_r132.balance !== 0)("hidden", ctx_r132.viewMode);
} }
function AccountingJournalTransactionsComponent_div_154_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_div_154_ng_container_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r137); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r136.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("auth-spinner", ctx_r133.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r133.mngForm.valid || ctx_r133.posting || ctx_r133.balance !== 0)("hidden", ctx_r133.viewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r133.pageFunction, " Transaction ");
} }
function AccountingJournalTransactionsComponent_div_154_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23)(1, "div", 112)(2, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AccountingJournalTransactionsComponent_div_154_ng_container_3_Template, 3, 4, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AccountingJournalTransactionsComponent_div_154_ng_container_4_Template, 3, 5, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_div_154_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r139); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r138.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r56.data.action === "View Salary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r56.data.action !== "View Salary");
} }
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class AccountingJournalTransactionsComponent {
    constructor(dialogRef, data, fb, snackbar, transactionService, dialog, filesService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.transactionService = transactionService;
        this.dialog = dialog;
        this.filesService = filesService;
        this.hide3 = true;
        this.agree3 = false;
        this.displayedColumns = [
            "id",
            "drAcName",
            "drAcId",
            "drAcCurrencyCode",
            "crAcName",
            "crAcId",
            "crAcCurrencyCode",
            "amount",
            "narration",
            "action",
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource([]);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(false, []);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.downloadLoading = false;
        this.pageFunction = "Add";
        this.hideSubmit = false;
        this.tranTypes = [{ name: "Debit" }, { name: "Credit" }];
        this.transactionTypes = [
            { name: "Receiving" },
            { name: "Inventory" },
            { name: "FixedAssets" },
            { name: "SupplierInvoice" },
            { name: "CustomerInvoice" },
            { name: "SupplierPayment" },
            { name: "CustomerPayment" },
            { name: "Standard" },
            { name: "ImprestApplication" },
            { name: "ImprestClearance" },
            { name: "Salaries" },
            { name: "Journals" },
        ];
        this.imprestAccountingStatuses = [
            { name: "Full" },
            { name: "Partial" },
            { name: "Return" },
        ];
        this.disableTransactionType = true;
        this.viewMode = false;
        //*********************************************************************************************************************************************************** */
        // Form&Table Logic
        //*********************************************************************************************************************************************************** */
        this.isLoading = true;
        this.showParTranForm = false;
        this.parTranAction = "";
        this.debitTotal = 0;
        this.creditTotal = 0;
        this.balance = 0;
        //******************************************************************************************************************************************************** */
        // Look ups
        this.selectedItem = [];
        // **********************************************************************************************************************************************************
        //UploadDocuments
        this.attachementsDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject([]);
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
        this.isFileLoading = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(false);
        //*************************************************************************************************** */
        this.posting = false;
        // *********************************************************************************************************************************************
        this.showImport = false;
        this.items = []; // Array to store
        this.itemErrors = [];
        this.templateFilename = "JournalsTemplate.xlsx";
    }
    ngOnInit() {
        console.log("LOG DATA = ", this.data);
        this.pageFunction = this.data.action;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(true, []);
        this.generateForm();
        this.generateTransactionForm();
        this.getPage();
    }
    ngAfterViewInit() {
        if (this.data.action !== "Add") {
            this.generateForm(this.formData);
            this.refresh();
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getPage() {
        this.disableTransactionType = true;
        if (this.data.action === "Add" || this.data.action === "Preview") {
            this.isLoading = false;
            if (this.data.transactionType === "Receiving" ||
                this.data.transactionType === "Invoice" ||
                this.data.transactionType === "Payment" ||
                this.data.transactionType === "Inventory" ||
                this.data.transactionType === "CustomerInvoice" ||
                this.data.transactionType === "SupplierInvoice" ||
                this.data.transactionType === "SupplierPayment" ||
                this.data.transactionType === "CustomerPayment" ||
                this.data.transactionType === "Standard" ||
                this.data.transactionType === "Journals" ||
                this.data.transactionType === "ImprestApplication" ||
                this.data.transactionType === "ImprestClearance" ||
                this.data.transactionType === "Salaries") {
                console.log("this.data.bodyForAdd:: ", this.data.bodyForAdd);
                this.generateForm(this.data.bodyForAdd);
                this.dataSource.data = this.data.bodyForAdd.parttrans;
                this.refresh();
                this.mngForm.patchValue({
                    paymentattachements: [],
                });
            }
            this.mngForm.patchValue({
                paymentattachements: [],
            });
        }
        else if (this.data.action === "Update") {
            this.getDataByParameters();
        }
        else if (this.data.action === "View") {
            this.getDataByParameters();
            this.activateViewMode();
        }
        else if (this.data.action === "View Salary") {
            this.isLoading = false;
            if (this.data.transactionType === "Salaries") {
                console.log("this.data.bodyForAdd: ", this.data.bodyForAdd);
                this.formData = this.data.bodyForAdd;
                this.generateForm(this.formData);
                this.dataSource.data = this.data.bodyForAdd.parttrans;
                this.refresh();
            }
        }
    }
    getDataByParameters() {
        this.isLoading = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set("tranCode", this.data.tranCode);
        this.transactionService
            .getTransactionsByTranCode(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                if (res.entity) {
                    this.formData = res.entity;
                    if (this.formData &&
                        this.formData.paymentattachements &&
                        this.formData.paymentattachements.length > 0) {
                        this.isFileDataLoading = false;
                        this.formData.paymentattachements.forEach((element) => {
                            const newRow = this.fb.group({
                                file: [element.file],
                                fileName: [element.fileName],
                                fileType: [element.fileType],
                            });
                            this.rows.push(newRow);
                        });
                        this.updateView();
                    }
                    this.generateForm(this.formData);
                    this.dataSource.data = this.formData.parttrans;
                    this.refresh();
                    console.log("this.formData :", this.formData);
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
            rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription;
    }
    generateForm(formData) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        console.log("generateForm formData :: ", formData);
        this.mngForm = this.fb.group({
            id: [(_a = formData === null || formData === void 0 ? void 0 : formData.id) !== null && _a !== void 0 ? _a : ""],
            description: [(_b = formData === null || formData === void 0 ? void 0 : formData.description) !== null && _b !== void 0 ? _b : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            itemCode: [(_c = formData === null || formData === void 0 ? void 0 : formData.itemCode) !== null && _c !== void 0 ? _c : ""],
            referenceCode: [(_d = formData === null || formData === void 0 ? void 0 : formData.referenceCode) !== null && _d !== void 0 ? _d : ""],
            transactionType: [(_e = formData === null || formData === void 0 ? void 0 : formData.transactionType) !== null && _e !== void 0 ? _e : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            prCode: [(_f = formData === null || formData === void 0 ? void 0 : formData.prCode) !== null && _f !== void 0 ? _f : ""],
            imprestAccountingStatus: [(_g = formData === null || formData === void 0 ? void 0 : formData.imprestAccountingStatus) !== null && _g !== void 0 ? _g : ""],
            parttrans: [(_h = formData === null || formData === void 0 ? void 0 : formData.parttrans) !== null && _h !== void 0 ? _h : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            paymentattachements: [[]],
        });
        if (formData &&
            formData.paymentattachements &&
            formData.paymentattachements.length > 0) {
            this.mngForm.patchValue({
                paymentattachements: formData.paymentattachements,
            });
        }
    }
    generateTransactionForm(formData) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.tranForm = this.fb.group({
            id: [(_a = formData === null || formData === void 0 ? void 0 : formData.id) !== null && _a !== void 0 ? _a : ""],
            drAcCurrencyCode: [
                (_b = formData === null || formData === void 0 ? void 0 : formData.drAcCurrencyCode) !== null && _b !== void 0 ? _b : "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            ],
            drAcName: [(_c = formData === null || formData === void 0 ? void 0 : formData.drAcName) !== null && _c !== void 0 ? _c : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            drAcId: [(_d = formData === null || formData === void 0 ? void 0 : formData.drAcId) !== null && _d !== void 0 ? _d : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            crAcCurrencyCode: [
                (_e = formData === null || formData === void 0 ? void 0 : formData.crAcCurrencyCode) !== null && _e !== void 0 ? _e : "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            ],
            crAcName: [(_f = formData === null || formData === void 0 ? void 0 : formData.crAcName) !== null && _f !== void 0 ? _f : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            crAcId: [(_g = formData === null || formData === void 0 ? void 0 : formData.crAcId) !== null && _g !== void 0 ? _g : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            amount: [
                (_h = formData === null || formData === void 0 ? void 0 : formData.amount) !== null && _h !== void 0 ? _h : 0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.max(1000000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.min(0),
                ],
            ],
            narration: [(_j = formData === null || formData === void 0 ? void 0 : formData.narration) !== null && _j !== void 0 ? _j : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
        });
    }
    activateViewMode() {
        this.viewMode = true;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    resetFormAndHide() {
        this.mngForm.patchValue({
            parttrans: this.dataSource.data,
        });
        this.tranForm.reset();
        this.showParTranForm = false;
    }
    addParTran() {
        this.parTranAction = "Add";
        this.showParTranForm = true;
        this.showImport = false;
    }
    refresh() {
        this.dataSource.data = [...this.dataSource.data];
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        const { debitTotal, creditTotal, balance } = this.calculateTotals();
        this.debitTotal = debitTotal;
        this.creditTotal = creditTotal;
        this.balance = balance;
    }
    editParTran(data, index) {
        this.parTranAction = "Update";
        this.selectedParTranIndex = index;
        this.generateTransactionForm(data);
        this.showParTranForm = true;
        this.showImport = false;
    }
    pushToDataSource() {
        if (this.parTranAction === "Add") {
            this.dataSource.data.push(this.tranForm.value);
        }
        else if (this.parTranAction === "Update") {
            let indexToUpdate;
            if (this.tranForm.value.id) {
                indexToUpdate = this.dataSource.data.findIndex((item) => item.id === this.tranForm.value.id);
            }
            else {
                indexToUpdate = this.selectedParTranIndex;
            }
            if (indexToUpdate !== -1) {
                this.dataSource.data[indexToUpdate] = this.tranForm.value;
            }
        }
        this.resetFormAndHide();
        this.refresh();
    }
    pushBulkToDataSource() {
        this.dataSource.data.push(...this.items);
        this.resetFormAndHide();
        this.refresh();
    }
    deleteParTran(index) {
        this.dataSource.data.splice(index, 1);
        this.refresh();
    }
    cancelParTran() {
        this.resetFormAndHide();
    }
    calculateTotals() {
        let debitTotal = 0;
        let creditTotal = 0;
        this.dataSource.data.forEach((element) => {
            if (element.partTranstype === "Debit") {
                debitTotal += element.amount;
            }
            else if (element.partTranstype === "Credit") {
                creditTotal += element.amount;
            }
        });
        const balance = creditTotal - debitTotal;
        return { debitTotal, creditTotal, balance };
    }
    glsLookUp(accType) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "700px";
        dialogConfig.data = {
            action: "Single GL Account",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_gls_lookup_gls_lookup_component__WEBPACK_IMPORTED_MODULE_0__.GlsLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            result.data.forEach((element) => {
                switch (accType) {
                    case "drAcId":
                        this.tranForm.patchValue({
                            drAcId: element.accountID,
                            drAcName: element.description,
                            drAcCurrencyCode: element.currencyID,
                        });
                        break;
                    case "crAcId":
                        this.tranForm.patchValue({
                            crAcId: element.accountID,
                            crAcName: element.description,
                            crAcCurrencyCode: element.currencyID,
                        });
                        break;
                    default:
                        break;
                }
            });
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
            file: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            fileType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            fileName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
        });
        //this.fileInputs.push(row);
        this.rows.push(row);
        this.attachementsDataSource.next(this.rows.controls);
    }
    updateView() {
        this.attachementsDataSource.next(this.rows.controls);
        this.mngForm.patchValue({
            paymentattachements: this.documentsForm.value.filedetails,
        });
    }
    deleteCall(row) {
        const dataArray = this.attachementsDataSource.getValue(); // Get the underlying array
        const index = dataArray.indexOf(row); // Find the index of the row
        if (index !== -1) {
            dataArray.splice(index, 1); // Remove 1 item at the specified index
            this.attachementsDataSource.next(dataArray); // Update the BehaviorSubject with the modified array
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
                const name = fileParts.slice(0, -1).join("."); // Join all parts except the last one
                const extension = fileParts[fileParts.length - 1];
                console.log("Name:", name); // Output: Lease Armotization (3)
                console.log("Extension:", extension); // Output: xlsx
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
    cleanUpIds(formData) {
        const cleanRecursive = (data) => {
            if (data === null || typeof data !== "object") {
                return data;
            }
            if (Array.isArray(data)) {
                // If it's an array, recursively clean each element
                return data.map((element) => cleanRecursive(element));
            }
            // Remove "id" field if it is null, undefined, or an empty string
            const cleanedData = {};
            for (const [key, value] of Object.entries(data)) {
                if (key === "id" &&
                    (value === null || value === undefined || value === "")) {
                    continue; // Skip "id" field
                }
                cleanedData[key] = cleanRecursive(value);
            }
            return cleanedData;
        };
        // Clone the form data to avoid modifying the original object
        const cleanedData = cleanRecursive(Object.assign({}, formData));
        return cleanedData;
    }
    submit() {
        const cleanedFormData = this.cleanUpIds(this.mngForm.value);
        console.log("Both: ", cleanedFormData);
        this.posting = true;
        if (this.pageFunction === "Add") {
            this.transactionService
                .addTransactions(cleanedFormData)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    this.response = res;
                    console.log("res: ", res);
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
                rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.transactionService
                .updateTransactions(cleanedFormData)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$))
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
                rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription;
        }
    }
    import() {
        this.showImport = true;
        this.showParTranForm = false;
    }
    handleFileInput(files) {
        const file = files.item(0);
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_16__.read(arrayBuffer, { type: "array" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = xlsx__WEBPACK_IMPORTED_MODULE_16__.utils.sheet_to_json(worksheet, { raw: true });
                // Trim the keys in each object of jsonData
                const trimmedData = jsonData.map((item) => {
                    const trimmedItem = {};
                    Object.keys(item).forEach((key) => {
                        trimmedItem[key.trim()] = item[key];
                    });
                    return trimmedItem;
                });
                this.items = trimmedData;
                this.pushBulkToDataSource();
                console.log(" this.items :", this.items);
                // Initialize the form
                this.itemsForm = this.fb.group({
                    items: this.fb.array([]), // Array of items
                });
                // Call the function to validate the items
                this.validateItems();
            };
            fileReader.readAsArrayBuffer(file);
        }
    }
    validateItems() {
        this.itemErrors = [];
        const items = this.items;
        const itemsFormArray = this.itemsForm.get("items");
        for (const item of items) {
            const formGroup = this.fb.group({
                drAcCurrencyCode: [item.drAcCurrencyCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
                drAcName: [item.drAcName, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
                drAcId: [item.drAcId, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
                crAcCurrencyCode: [item.crAcCurrencyCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
                crAcName: [item.crAcName, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
                crAcId: [item.crAcId, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
                amount: [
                    item.amount,
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.max(1000000000),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.min(0),
                    ],
                ],
                narration: [item.narration],
            });
            itemsFormArray.push(formGroup);
            this.collectErrors(formGroup);
            if (formGroup.valid) {
            }
        }
    }
    collectErrors(control, path = "") {
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup) {
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
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.response });
    }
}
AccountingJournalTransactionsComponent.ɵfac = function AccountingJournalTransactionsComponent_Factory(t) { return new (t || AccountingJournalTransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_finance_data_services_transactions_service__WEBPACK_IMPORTED_MODULE_2__.TransactionsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_3__.FilesService)); };
AccountingJournalTransactionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AccountingJournalTransactionsComponent, selectors: [["app-accounting-journal-transactions"]], viewQuery: function AccountingJournalTransactionsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 155, vars: 24, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/em.png", "width", "30px", "height", "30px", "alt", ""], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], ["class", "m-2", 4, "ngIf"], [1, "mx-2"], [1, "register-form", "mx-2", 3, "formGroup"], ["class", "row", 4, "ngIf"], [4, "ngIf"], [2, "display", "flex", "flex-wrap", "wrap", "margin-right", "10px", "margin-bottom", "10px"], ["aria-label", "Fish selection"], ["color", "accent", "selected", "", 4, "ngFor", "ngForOf"], ["class", "row align-items-center", 4, "ngIf"], ["mat-tab-label", ""], [1, "row", "m-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "table-responsiv"], [1, "materialTableHeader"], [1, "row"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], ["class", "m-l-10", "matTooltip", "IMPORT FROM EXCEL", 4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-6", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-6", 4, "matCellDef"], ["matColumnDef", "drAcName"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matCellDef"], ["matColumnDef", "drAcId"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-18", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-18", 4, "matCellDef"], ["matColumnDef", "drAcCurrencyCode"], ["matColumnDef", "crAcName"], ["matColumnDef", "crAcId"], ["matColumnDef", "crAcCurrencyCode"], ["matColumnDef", "amount"], ["matColumnDef", "partTranstype"], ["matColumnDef", "narration"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "8", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [3, "formGroup"], [1, "mx-1", "p-1"], ["matTableExporter", "", "formArrayName", "filedetails", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["class", "column-nowrap psl-3 tbl-col-width-per-6", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "fileName"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-50 fileName-cell", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-50 fileName-cell", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "fileType"], ["matColumnDef", "selectFile"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-65 selectfile-cell", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-65 selectfile-cell", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "download"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matCellDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], [1, "m-2"], ["color", "primary", "mode", "indeterminate"], [1, "col-xl-3", "col-lg-3", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "transactionType", "required", "", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", ""], ["class", "col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-1", 4, "ngIf"], [1, "col-xl-7", "col-lg-7", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "description", "required", ""], [3, "value"], ["matInput", "", "formControlName", "referenceCode", "readonly", ""], ["matInput", "", "formControlName", "prCode"], ["matInput", "", "formControlName", "itemCode"], [1, "mx-0"], [1, "register-form", "mx-0", 3, "formGroup"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "drAcId", "required", ""], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "drAcCurrencyCode", "required", ""], ["matInput", "", "formControlName", "drAcName", "required", ""], ["matInput", "", "formControlName", "crAcId", "required", ""], ["matInput", "", "formControlName", "crAcCurrencyCode", "required", ""], ["matInput", "", "formControlName", "crAcName", "required", ""], ["matInput", "", "formControlName", "amount", "mask", "separator", "thousandSeparator", ","], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "narration", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["align", "start", 1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "hidden", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], ["color", "accent", "selected", ""], [1, "row", "align-items-center"], [1, "col-xl-10", "col-lg-10", "col-md-10", "col-sm-10"], [3, "change"], [1, "col-xl-2", "col-lg-2", "col-md-2", "col-sm-2"], ["mat-raised-button", "", "color", "primary", 3, "hidden", "click"], [1, "fa", "fa-download"], ["matTooltip", "IMPORT FROM EXCEL", 1, "m-l-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-6"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-6"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-18"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-18"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matRipple", "", 3, "click"], ["colspan", "8"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-6", 3, "formGroupName"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "fileName-cell"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "fileName-cell", 3, "formGroupName"], ["appearance", "fill", 1, "example-full-width", "mt-2", "mr-5"], ["matInput", "", "type", "text", "formControlName", "fileName", "placeholder", "fileName", "maxlength", "50"], ["matInput", "", "type", "text", "formControlName", "fileType", "placeholder", "fileType", "maxlength", "50"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-65", "selectfile-cell"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-65", "selectfile-cell", 3, "formGroupName"], ["type", "file", 3, "disabled", "multiple", "change"], ["file", ""], [1, "column-nowrap", "psl-3", "tbl-col-width-per-30"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["aria-label", "Download"], ["matRipple", ""], ["colspan", "4"], ["align", "end", 1, "example-button-row"]], template: function AccountingJournalTransactionsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AccountingJournalTransactionsComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "General Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AccountingJournalTransactionsComponent_div_18_Template, 21, 7, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AccountingJournalTransactionsComponent_ng_container_19_Template, 79, 16, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 14)(21, "mat-chip-list", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, AccountingJournalTransactionsComponent_mat_chip_22_Template, 6, 3, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, AccountingJournalTransactionsComponent_div_23_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-tab-group")(25, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, AccountingJournalTransactionsComponent_ng_template_26_Template, 3, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 19)(28, "div", 20)(29, "div", 21)(30, "div", 22)(31, "div", 23)(32, "div", 24)(33, "ul", 25)(34, "li", 26)(35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Tran Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "li", 27)(38, "label", 28)(39, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function AccountingJournalTransactionsComponent_Template_input_keyup_41_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "li")(44, "div", 32)(45, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_Template_button_click_45_listener() { return ctx.addParTran(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "li")(49, "div", 35)(50, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_Template_button_click_50_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "mat-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, AccountingJournalTransactionsComponent_div_54_Template, 4, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 37)(56, "ul", 38)(57, "li")(58, "div", 39)(59, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_Template_img_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r140); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](65); return _r9.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "li")(61, "div", 41)(62, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_Template_img_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r140); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](65); return _r9.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "mat-table", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](66, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, AccountingJournalTransactionsComponent_mat_header_cell_67_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, AccountingJournalTransactionsComponent_mat_cell_68_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](69, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, AccountingJournalTransactionsComponent_mat_header_cell_70_Template, 2, 0, "mat-header-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, AccountingJournalTransactionsComponent_mat_cell_71_Template, 2, 1, "mat-cell", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](72, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, AccountingJournalTransactionsComponent_mat_header_cell_73_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, AccountingJournalTransactionsComponent_mat_cell_74_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](75, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, AccountingJournalTransactionsComponent_mat_header_cell_76_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, AccountingJournalTransactionsComponent_mat_cell_77_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](78, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, AccountingJournalTransactionsComponent_mat_header_cell_79_Template, 2, 0, "mat-header-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, AccountingJournalTransactionsComponent_mat_cell_80_Template, 2, 1, "mat-cell", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](81, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](82, AccountingJournalTransactionsComponent_mat_header_cell_82_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, AccountingJournalTransactionsComponent_mat_cell_83_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](84, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](85, AccountingJournalTransactionsComponent_mat_header_cell_85_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, AccountingJournalTransactionsComponent_mat_cell_86_Template, 2, 1, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](87, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](88, AccountingJournalTransactionsComponent_mat_header_cell_88_Template, 2, 0, "mat-header-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](89, AccountingJournalTransactionsComponent_mat_cell_89_Template, 3, 6, "mat-cell", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](90, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](91, AccountingJournalTransactionsComponent_mat_header_cell_91_Template, 2, 0, "mat-header-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](92, AccountingJournalTransactionsComponent_mat_cell_92_Template, 2, 1, "mat-cell", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](93, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](94, AccountingJournalTransactionsComponent_mat_header_cell_94_Template, 2, 0, "mat-header-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](95, AccountingJournalTransactionsComponent_mat_cell_95_Template, 2, 1, "mat-cell", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](96, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](97, AccountingJournalTransactionsComponent_mat_header_cell_97_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](98, AccountingJournalTransactionsComponent_mat_cell_98_Template, 5, 6, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](99, AccountingJournalTransactionsComponent_mat_header_row_99_Template, 1, 0, "mat-header-row", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](100, AccountingJournalTransactionsComponent_mat_row_100_Template, 1, 2, "mat-row", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](101, AccountingJournalTransactionsComponent_mat_cell_101_Template, 2, 1, "mat-cell", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](102, AccountingJournalTransactionsComponent_div_102_Template, 2, 1, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](103, "mat-paginator", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](105, AccountingJournalTransactionsComponent_ng_template_105_Template, 3, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "form", 69)(107, "div", 70)(108, "div", 21)(109, "div", 22)(110, "div", 23)(111, "div", 24)(112, "ul", 25)(113, "li", 26)(114, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "Upload Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "li", 27)(117, "label", 28)(118, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function AccountingJournalTransactionsComponent_Template_input_keyup_120_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "li")(123, "div", 32)(124, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccountingJournalTransactionsComponent_Template_button_click_124_listener() { return ctx.addFileRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "mat-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](127, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "mat-table", 71, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](131, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](132, AccountingJournalTransactionsComponent_mat_header_cell_132_Template, 2, 0, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](133, AccountingJournalTransactionsComponent_mat_cell_133_Template, 2, 2, "mat-cell", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](134, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](135, AccountingJournalTransactionsComponent_mat_header_cell_135_Template, 2, 0, "mat-header-cell", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](136, AccountingJournalTransactionsComponent_mat_cell_136_Template, 5, 1, "mat-cell", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](137, 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](138, AccountingJournalTransactionsComponent_mat_header_cell_138_Template, 2, 0, "mat-header-cell", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](139, AccountingJournalTransactionsComponent_mat_cell_139_Template, 5, 1, "mat-cell", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](140, 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](141, AccountingJournalTransactionsComponent_mat_header_cell_141_Template, 2, 0, "mat-header-cell", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](142, AccountingJournalTransactionsComponent_mat_cell_142_Template, 4, 5, "mat-cell", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](143, 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](144, AccountingJournalTransactionsComponent_mat_header_cell_144_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](145, AccountingJournalTransactionsComponent_mat_cell_145_Template, 4, 0, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](146, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](147, AccountingJournalTransactionsComponent_mat_header_cell_147_Template, 2, 0, "mat-header-cell", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](148, AccountingJournalTransactionsComponent_mat_cell_148_Template, 3, 3, "mat-cell", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](149, AccountingJournalTransactionsComponent_mat_header_row_149_Template, 1, 0, "mat-header-row", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](150, AccountingJournalTransactionsComponent_mat_row_150_Template, 1, 2, "mat-row", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](151, AccountingJournalTransactionsComponent_mat_cell_151_Template, 2, 1, "mat-cell", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](152, AccountingJournalTransactionsComponent_div_152_Template, 2, 1, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](153, "mat-paginator", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](154, AccountingJournalTransactionsComponent_div_154_Template, 7, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.pageFunction !== "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showParTranForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.itemErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showImport);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data.transactionType === "Journals");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.documentsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.attachementsDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isFileDataLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](23, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.pageFunction !== "Preview");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, ngx_mask__WEBPACK_IMPORTED_MODULE_27__.MaskDirective, _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__.MatChip, _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__.FileUploadComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabLabel, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_31__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.MaxLengthValidator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50aW5nLWpvdXJuYWwtdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 17687:
/*!**************************************************!*\
  !*** ./src/app/shared/services/files.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesService": () => (/* binding */ FilesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 47367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class FilesService {
    constructor() { }
    toBase64(files, selectedFiles) {
        var _a;
        const result = new rxjs__WEBPACK_IMPORTED_MODULE_0__.AsyncSubject();
        if (files === null || files === void 0 ? void 0 : files.length) {
            (_a = Object.keys(files)) === null || _a === void 0 ? void 0 : _a.forEach((file, i) => {
                const url = URL.createObjectURL(files[i]);
                const reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onload = (e) => {
                    var _a;
                    selectedFiles = selectedFiles === null || selectedFiles === void 0 ? void 0 : selectedFiles.filter(f => { var _a; return (f === null || f === void 0 ? void 0 : f.name) != ((_a = files[i]) === null || _a === void 0 ? void 0 : _a.name); });
                    selectedFiles.push({ name: (_a = files[i]) === null || _a === void 0 ? void 0 : _a.name, file: files[i], base64: reader === null || reader === void 0 ? void 0 : reader.result, url: url });
                    result.next(selectedFiles);
                    if ((files === null || files === void 0 ? void 0 : files.length) === (i + 1)) {
                        result.complete(); // Hoàn tất toàn bộ quá trình convert, trả về mảng selectedFiles có chứa base64 
                    }
                };
            });
            return result;
        }
        else {
            result.next([]);
            result.complete();
            return result;
        }
    }
}
FilesService.ɵfac = function FilesService_Factory(t) { return new (t || FilesService)(); };
FilesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FilesService, factory: FilesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 47367:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/AsyncSubject.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSubject": () => (/* binding */ AsyncSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 80228);

class AsyncSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
    constructor() {
        super(...arguments);
        this._value = null;
        this._hasValue = false;
        this._isComplete = false;
    }
    _checkFinalizedStatuses(subscriber) {
        const { hasError, _hasValue, _value, thrownError, isStopped, _isComplete } = this;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped || _isComplete) {
            _hasValue && subscriber.next(_value);
            subscriber.complete();
        }
    }
    next(value) {
        if (!this.isStopped) {
            this._value = value;
            this._hasValue = true;
        }
    }
    complete() {
        const { _hasValue, _value, _isComplete } = this;
        if (!_isComplete) {
            this._isComplete = true;
            _hasValue && super.next(_value);
            super.complete();
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=default-src_app_erp-finance_modules_finance-management_transactions_dialogs_accounting-journa-16bbf9.js.map
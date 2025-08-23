"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-procurement_modules_requisition_requisition_module_ts"],{

/***/ 64608:
/*!************************************************************!*\
  !*** ./src/app/erp-budget/data/services/budget.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetsService": () => (/* binding */ BudgetsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class BudgetsService {
    constructor(http) {
        this.http = http;
    }
    getBudgets() {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/all`;
        return this.http.get(BudgetManagementUrl);
    }
    getBudgetsByHodAndFinanceStatus(params) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/fetchbyhodandfinancestatus`;
        return this.http.get(BudgetManagementUrl, { params });
    }
    getBudgetsByStatus(params) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/fetchbyStatus`;
        return this.http.get(BudgetManagementUrl, { params });
    }
    getBudgetsByCostCenterCodeAndStatus(params) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/fetchbycostcentercodeandstatus`;
        return this.http.get(BudgetManagementUrl, { params });
    }
    getBudgetsByYear(params) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/all-by-year`;
        return this.http.get(BudgetManagementUrl, { params });
    }
    getBudgetsById(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/find/by/id`, { params });
    }
    getBudget() {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/all`;
        return this.http.get(BudgetManagementUrl);
    }
    addBudget(data) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/create`;
        return this.http.post(BudgetManagementUrl, data);
    }
    extractBulkBudgets(params, data) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/excel`;
        return this.http.post(BudgetManagementUrl, data, { params });
    }
    addBudgets(data) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/create/bulk`;
        return this.http.post(BudgetManagementUrl, data);
    }
    updateBudgets(BudgetDetails) {
        const updateBudgetUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/expenses/update-expense`;
        return this.http.put(updateBudgetUrl, BudgetDetails);
    }
    updateBudgetExps(BudgetDetails) {
        const updateBudgetUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/update-expense`;
        return this.http.put(updateBudgetUrl, BudgetDetails);
    }
    deleteBudgetTemporarily(params) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/delete`;
        return this.http.delete(BudgetManagementUrl, { params });
    }
    validateBudgets(params, dataToValidate) {
        const imprestUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/update/state`;
        return this.http.put(imprestUrl, dataToValidate, { params });
    }
    budgetCheck(data) {
        const BudgetManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/budgets/lines/check`;
        return this.http.post(BudgetManagementUrl, data);
    }
    uploadExcelPath(excelFilePath) {
        return this.http.post('http://localhost:9191/generateBudget', { excelFilePath });
    }
    generateBudget(file) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(`http://localhost:9191/generateBudget`, formData);
    }
}
BudgetsService.ɵfac = function BudgetsService_Factory(t) { return new (t || BudgetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BudgetsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BudgetsService, factory: BudgetsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 50338:
/*!************************************************************************!*\
  !*** ./src/app/erp-procurement/data/services/delivery-note.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryNoteService": () => (/* binding */ DeliveryNoteService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class DeliveryNoteService {
    constructor(http) {
        this.http = http;
    }
    // getDeliveryNote(): Observable<any> {
    //   const DeliveryNoteUrl = `${environment.baseUrlProcurement}/api/v1/rankingmatrix/all`;
    //   return this.http.get<any[]>(DeliveryNoteUrl);
    // }
    getDeliveryNoteById(params) {
        const DeliveryNotessUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/receiptnote/find/by/id`;
        return this.http.get(DeliveryNotessUrl, { params: params, });
    }
    addDeliveryNote(data) {
        const DeliveryNoteUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/receiptnote/add`;
        return this.http.post(DeliveryNoteUrl, data);
    }
    updateDeliveryNote(DeliveryNoteDetails) {
        const DeliveryNote = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/receiptnote/modify`;
        return this.http.put(DeliveryNote, DeliveryNoteDetails);
    }
    deleteDeliveryNoteTemporarily(params) {
        const DeliveryNoteUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/receiptnote/delete`;
        return this.http.delete(DeliveryNoteUrl, { params });
    }
    getDeliveryNoteByCode(params) {
        const DeliveryNotessUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/receiptnote/find/by/refcode`;
        return this.http.get(DeliveryNotessUrl, { params: params, });
    }
}
DeliveryNoteService.ɵfac = function DeliveryNoteService_Factory(t) { return new (t || DeliveryNoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DeliveryNoteService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeliveryNoteService, factory: DeliveryNoteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3207:
/*!**********************************************************************!*\
  !*** ./src/app/erp-procurement/data/services/requisition.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitionService": () => (/* binding */ RequisitionService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class RequisitionService {
    constructor(http) {
        this.http = http;
    }
    // http://localhost:9090/api/v1/purchaseRequisition/view
    getRequisitions() {
        const RequisitionssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/view`;
        return this.http.get(RequisitionssUrl);
    }
    getRequisitionsByStatus(params) {
        const RequisitionssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/find/all/by/approval/status`;
        return this.http.get(RequisitionssUrl, {
            params: params,
        });
    }
    getRequisitionsById(params) {
        const RequisitionssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/find/by/id`;
        return this.http.get(RequisitionssUrl, {
            params: params,
        });
    }
    getRequisitionsByCode(params) {
        const RequisitionssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/find/by/code`;
        return this.http.get(RequisitionssUrl, {
            params: params,
        });
    }
    addRequisitions(data) {
        const RequisitionssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/add`;
        return this.http.post(RequisitionssUrl, data);
    }
    updateRequisitions(RequisitionsDetails) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/update`;
        return this.http.put(updateBillUrl, RequisitionsDetails);
    }
    deleteRequisitionsTemporarily(params) {
        const RequisitionssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/delete`;
        return this.http.delete(RequisitionssUrl, {
            params: params,
        });
    }
    validateRequisition(params) {
        const API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/approveOrRejectOrReturn`;
        return this.http.put(API_URL, {}, {
            params: params,
        });
    }
    // ********************************************************************************************************************
    sendPurchaseOrder(params) {
        const RequisitionssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/send/po`;
        return this.http.post(RequisitionssUrl, {}, { params });
    }
    donwloadPurchaseOrder(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/download/po`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Hey this is download PO", response);
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
    //*********************************************************************************************************************** */
    receivePurchaseOrderItems(data) {
        const ReceiveUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/item/receive`;
        return this.http.post(ReceiveUrl, data);
    }
    getReceivedPurchaseOrderItems(params) {
        const ReceiveUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/find/delivery/by/prCode`;
        return this.http.get(ReceiveUrl, {
            params: params,
        });
    }
    getReceivedItemsByStatus(params) {
        const ReceiveUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/find/delivery/by/pr_category`;
        return this.http.get(ReceiveUrl, {
            params: params,
        });
    }
    deleteReceivedItemsTemporarily(params) {
        const ReceiveUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/delete`;
        return this.http.delete(ReceiveUrl, {
            params: params,
        });
    }
    validateReceivedItemsAllocation(data, params) {
        const ReceiveUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/post/delivery/to/allocations`;
        return this.http.put(ReceiveUrl, data, { params });
    }
    // donwloadGoodsReceivedNote(params: any): Observable<any> {
    //   let headers = new HttpHeaders();
    //   headers.append("Accept", "application/pdf");
    //   let requestOptions: any = {
    //     params: params,
    //     headers: headers,
    //     responseType: "blob",
    //     withCredentials: false,
    //   };
    //   let API_URL = `${environment.baseUrlProcurement}/api/v1/purchaseRequisition/item/receive/download/receiptnote`;
    //   return this.http.get(API_URL, requestOptions).pipe(
    //     map((response: BlobPart) => {
    //       console.log("Hey this is download GRN", response);
    //       return {
    //         filename: "Report",
    //         data: new Blob([response], { type: "application/pdf" }),
    //       };
    //     })
    //   );
    // }
    donwloadSingleGoodsReceivedNote(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/item/receive/download/receiptnote/single`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Hey this is download GRN", response);
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
    updateReceivedItemsTransactionStatus(params) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/purchaseRequisition/update/record/on/transaction`;
        return this.http.put(updateBillUrl, {}, { params });
    }
}
RequisitionService.ɵfac = function RequisitionService_Factory(t) { return new (t || RequisitionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
RequisitionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RequisitionService, factory: RequisitionService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 1184:
/*!********************************************************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/requisition/dialogs/validate-requisition/validate-requisition.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidateRequisitionComponent": () => (/* binding */ ValidateRequisitionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_erp_procurement_data_services_requisition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-procurement/data/services/requisition.service */ 3207);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);


















function ValidateRequisitionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-bar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ValidateRequisitionComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateRequisitionComponent_div_31_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 19)(6, "div", 20)(7, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateRequisitionComponent_div_31_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.return(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 19)(10, "div", 20)(11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateRequisitionComponent_div_31_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.reject(); });
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
function ValidateRequisitionComponent_form_32_div_1_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Reason is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ValidateRequisitionComponent_form_32_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 26)(2, "mat-form-field", 27)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Reason for rejection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ValidateRequisitionComponent_form_32_div_1_mat_error_6_Template, 2, 0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 30)(8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateRequisitionComponent_form_32_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.changeStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.statusForm.get("reason").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r7.statusForm.invalid);
} }
function ValidateRequisitionComponent_form_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ValidateRequisitionComponent_form_32_div_1_Template, 10, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.statusForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.rejected);
} }
class ValidateRequisitionComponent {
    constructor(dialogRef, data, fb, snackbar, tokenCookieService, requisitionService, router, datepipe) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.tokenCookieService = tokenCookieService;
        this.requisitionService = requisitionService;
        this.router = router;
        this.datepipe = datepipe;
        this.horizontalPosition = "end";
        this.verticalPosition = "top";
        this.rejected = false;
        this.approved = false;
        this.canVerify = false;
        this.validationIsLoading = false;
        this.hideValidation = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.downloadLoading = false;
        this.Data = this.data.data;
    }
    ngOnInit() {
        this.currentUser = this.tokenCookieService.getUser().username;
        if (this.data.action === 'deletedOrRejected') {
            this.hideValidation = true;
        }
        this.postedBy = this.Data.postedBy;
        this.canVerify = true;
        // if (this.postedBy === this.currentUser) {
        //   this.snackbar.showNotification("snackbar-danger", "You cannot verify this transaction!");
        //   this.canVerify = false;
        // } else {
        //   this.canVerify = true;
        // }
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
        this.status = "REJECTED";
        if (!this.statusForm.value == null) {
            this.changeStatus();
        }
    }
    return() {
        this.rejected = true;
        this.approved = false;
        this.status = "RETURNED";
        if (!this.statusForm.value == null) {
            this.changeStatus();
        }
    }
    approve() {
        this.approved = true;
        this.rejected = false;
        this.status = "APPROVED";
        this.statusForm.patchValue({
            reason: "NA"
        });
        this.changeStatus();
    }
    changeStatus() {
        this.validationIsLoading = true;
        let todayDate = this.datepipe.transform(new Date(), "yyyy-MM-ddTHH:mm:ss");
        // const params = {
        //   requisitionId: this.Data.id,
        //   role: this.data.userType,
        //   status: this.status,
        //   reason: this.statusForm.value.reason,
        //   validatedBy: this.currentUser,
        //   validatedDate: todayDate
        // };
        //     Name	Description
        // userType *
        // string
        // (query)	
        // userType
        // userType - userType
        // userName *
        // string
        // (query)	
        // userName
        // userName - userName
        // action *
        // string
        // (query)	
        // action
        // action - action
        // reason
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams()
            .set("id", this.Data.id)
            .set("userType", this.data.userType)
            .set("action", this.status)
            .set("reason", this.statusForm.value.reason);
        console.log("Form = ", params);
        this.requisitionService
            .validateRequisition(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res) {
                    this.snackbar.showNotification("snackbar-success", "Requisition validated successfully");
                }
                // else {
                //   this.snackbar.showNotification("snackbar-danger", res.message);
                // }
            },
            error: (err) => {
                console.log("err = ", err);
                this.snackbar.showNotification("snackbar-danger", "Server Error: " + err.message);
            },
            complete: () => {
                this.dialogRef.close();
                this.router.navigate(["/erp-procurement/requisitions/all-requisitions"]);
            }
        });
    }
}
ValidateRequisitionComponent.ɵfac = function ValidateRequisitionComponent_Factory(t) { return new (t || ValidateRequisitionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_requisition_service__WEBPACK_IMPORTED_MODULE_2__.RequisitionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe)); };
ValidateRequisitionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ValidateRequisitionComponent, selectors: [["app-validate-requisition"]], decls: 33, vars: 6, consts: [[1, "addContainer"], [1, "contact-details"], ["class", "m-10", 4, "ngIf"], [1, "modalHeader"], [1, "contact-details-name", "mb-1"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "row"], [1, "col", "text-center", "my-2"], [1, "fas", "fa-check-circle", "fa-6x", "col-green"], [1, "col-8", "my-2"], [1, "dl-horizontal"], [1, "pull-left", "me-2"], [1, ""], ["class", "row", "style", "margin-top: 10px", 4, "ngIf"], ["class", "register-form m-4", 3, "formGroup", 4, "ngIf"], [1, "m-10"], ["color", "primary", "mode", "indeterminate"], [1, "row", 2, "margin-top", "10px"], [1, "col-4"], [1, "row", "m-1"], ["type", "button", 1, "badge", "badge-solid-green", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], ["type", "button", 1, "badge", "badge-solid-brown", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], ["type", "button", 1, "badge", "badge-solid-red", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], [1, "register-form", "m-4", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "col-10", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "reason", "matInput", ""], [4, "ngIf"], [1, "col-2", "d-flex", "align-items-center", "justify-content-center", "mb-2"], ["mat-raised-button", "", "color", "primary", "tabindex", "-1", 3, "disabled", "click"]], template: function ValidateRequisitionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ValidateRequisitionComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Validate Requisition");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateRequisitionComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "mat-card-content")(12, "div", 7)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "dl", 11)(17, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "RequisitionCode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "OperatingUnit:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ValidateRequisitionComponent_div_31_Template, 13, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ValidateRequisitionComponent_form_32_Template, 2, 2, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.validationIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.Data.requisitionCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.Data.operatingUnit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.Data.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideValidation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxpZGF0ZS1yZXF1aXNpdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 46111:
/*!**********************************************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/requisition/pages/all-requisitions/all-requisitions.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllRequisitionsComponent": () => (/* binding */ AllRequisitionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_procurement_data_services_requisition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-procurement/data/services/requisition.service */ 3207);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 9748);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ 26439);































const _c0 = ["paginator"];
function AllRequisitionsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-bar", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", reqStatus_r38.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", reqStatus_r38.name, " ");
} }
function AllRequisitionsComponent_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select Procurement Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", reqStatus_r39.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", reqStatus_r39.name, " ");
} }
function AllRequisitionsComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select HOD Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", reqStatus_r40.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", reqStatus_r40.name, " ");
} }
function AllRequisitionsComponent_mat_error_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select Finance Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_error_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select From Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_error_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select To Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_header_cell_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " POCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_cell_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r41.purchaseRequisitionCode, "");
} }
function AllRequisitionsComponent_mat_header_cell_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " SupplierCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_cell_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r42.supplierCode, "");
} }
function AllRequisitionsComponent_mat_header_cell_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " PostedBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_cell_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r43.postedBy, " ");
} }
function AllRequisitionsComponent_mat_header_cell_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " PostedTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_cell_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, row_r44.postedTime, "MM/dd/yyyy"), "");
} }
function AllRequisitionsComponent_mat_header_cell_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "HOD Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_cell_109_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r45.hodApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_109_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r45.hodApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_109_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r45.hodApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_109_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r45.hodApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_109_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r45.hodApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_mat_cell_109_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AllRequisitionsComponent_mat_cell_109_button_2_Template, 3, 1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AllRequisitionsComponent_mat_cell_109_button_3_Template, 3, 1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AllRequisitionsComponent_mat_cell_109_button_4_Template, 3, 1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AllRequisitionsComponent_mat_cell_109_button_5_Template, 3, 1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AllRequisitionsComponent_mat_cell_109_button_6_Template, 3, 1, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", row_r45.hodApprovalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function AllRequisitionsComponent_mat_header_cell_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Finance Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_cell_112_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r58.financeApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_112_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r58.financeApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_112_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r58.financeApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_112_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r58.financeApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_112_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r58.financeApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_mat_cell_112_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AllRequisitionsComponent_mat_cell_112_button_2_Template, 3, 1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AllRequisitionsComponent_mat_cell_112_button_3_Template, 3, 1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AllRequisitionsComponent_mat_cell_112_button_4_Template, 3, 1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AllRequisitionsComponent_mat_cell_112_button_5_Template, 3, 1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AllRequisitionsComponent_mat_cell_112_button_6_Template, 3, 1, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", row_r58.financeApprovalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function AllRequisitionsComponent_mat_header_cell_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Procurement Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_cell_115_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r71.procurementApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_115_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r71.procurementApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_115_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r71.procurementApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_115_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r71.procurementApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_115_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r71.procurementApprovalStatus, " ");
} }
function AllRequisitionsComponent_mat_cell_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_mat_cell_115_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AllRequisitionsComponent_mat_cell_115_button_2_Template, 3, 1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AllRequisitionsComponent_mat_cell_115_button_3_Template, 3, 1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AllRequisitionsComponent_mat_cell_115_button_4_Template, 3, 1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AllRequisitionsComponent_mat_cell_115_button_5_Template, 3, 1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AllRequisitionsComponent_mat_cell_115_button_6_Template, 3, 1, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", row_r71.procurementApprovalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function AllRequisitionsComponent_mat_header_cell_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "DownloadPO");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_cell_118_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_mat_cell_118_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_mat_cell_118_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r88); const row_r84 = restoredCtx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r87.downloadPO(row_r84); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A0 Download.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r84 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", row_r84.financeApprovalStatus !== "APPROVED" || row_r84.hodApprovalStatus !== "APPROVED" || row_r84.procurementApprovalStatus !== "APPROVED" || ctx_r29.downloadLoading);
} }
function AllRequisitionsComponent_mat_header_cell_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "SendPO");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_cell_121_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_mat_cell_121_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_mat_cell_121_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const row_r89 = restoredCtx.$implicit; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r92.sendPO(row_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A0 Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r89 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", row_r89.financeApprovalStatus !== "APPROVED" || row_r89.hodApprovalStatus !== "APPROVED" || row_r89.procurementApprovalStatus !== "APPROVED" || ctx_r31.sendLoading);
} }
function AllRequisitionsComponent_mat_header_cell_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllRequisitionsComponent_mat_cell_124_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 100)(1, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_mat_cell_124_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllRequisitionsComponent_mat_cell_124_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r98); const row_r94 = restoredCtx.$implicit; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r97.editRequisition(row_r94); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-feather-icons", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_mat_cell_124_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllRequisitionsComponent_mat_cell_124_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r98); const row_r94 = restoredCtx.$implicit; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r100.validateRequisition(row_r94); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-feather-icons", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_mat_cell_124_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllRequisitionsComponent_mat_cell_124_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r98); const row_r94 = restoredCtx.$implicit; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r102.poAcknowledgement(row_r94); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-feather-icons", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_mat_cell_124_Template_button_click_7_listener($event) { return $event.stopPropagation(); })("click", function AllRequisitionsComponent_mat_cell_124_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r98); const row_r94 = restoredCtx.$implicit; const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r104.viewRequisition(row_r94); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-feather-icons", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_mat_cell_124_Template_button_click_9_listener($event) { return $event.stopPropagation(); })("click", function AllRequisitionsComponent_mat_cell_124_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r98); const row_r94 = restoredCtx.$implicit; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r106.deleteRequisition(row_r94.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "app-feather-icons", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", row_r94.financeApprovalStatus === "APPROVED" || row_r94.hodApprovalStatus === "APPROVED" || row_r94.procurementApprovalStatus === "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "check-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "package");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "trash-2");
} }
function AllRequisitionsComponent_mat_header_row_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
} }
function AllRequisitionsComponent_mat_row_126_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-row", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_mat_row_126_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r109); const row_r107 = restoredCtx.$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r108.viewRequisition(row_r107); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllRequisitionsComponent_tr_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("colspan", ctx_r36.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r36.input, "\"");
} }
function AllRequisitionsComponent_div_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-spinner", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 40);
} }
const _c1 = function () { return ["Purchase Orders"]; };
class AllRequisitionsComponent {
    constructor(router, snackbar, requisitionService, fb, datepipe, accessControlService) {
        this.router = router;
        this.snackbar = snackbar;
        this.requisitionService = requisitionService;
        this.fb = fb;
        this.datepipe = datepipe;
        this.accessControlService = accessControlService;
        this.displayedColumns = [
            // "id",
            "purchaseRequisitionCode",
            "supplierCode",
            // "supplierName",
            // "operatingUnit",
            "postedBy",
            "postedTime",
            "hodApproval",
            "financeApproval",
            "procurementApproval",
            "downloadPO",
            "sendPO",
            "action",
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(true, []);
        this.isLoading = true;
        this.pageFunction = "Update";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.downloadLoading = false;
        this.currentDate = new Date();
        this.dateTomorrow = new Date(this.currentDate.getTime() + 1 * 24 * 60 * 60 * 1000);
        this.oneWeekAgo = new Date(this.currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        this.reqStatuses = [
            { name: "PENDING" },
            { name: "APPROVED" },
            { name: "RETURNED" },
            { name: "REJECTED" },
        ];
        // getData() {
        //   const params = new HttpParams()
        //     .set("financeApprovalStatus", this.Form.value.financeStatus)
        //     .set("procurementApprovalStatus", this.Form.value.procurementStatus)
        //     .set("hodApprovalStatus", this.Form.value.hodStatus)
        //     .set("fromDate", this.Form.value.fromDate)
        //     .set("toDate", this.Form.value.toDate);
        //   this.dataSource = new MatTableDataSource([]);
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        //   this.isLoading = true;
        //   this.requisitionService
        //     .getRequisitionsByStatus(params)
        //     .pipe(takeUntil(this.destroy$))
        //     .subscribe({
        //       next: (res) => {
        //         if (res.statusCode === 200) {
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
        //         this.snackbar.showNotification(
        //           "snackbar-danger",
        //           err.message
        //         );
        //         this.isLoading = false;
        //       },
        //       complete: () => { this.isLoading = false; },
        //     }),
        //     Subscription;
        // }
        this.currentPage = 0;
        this.totalPages = 0;
        this.totalItems = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [2, 5, 10, 20, 30, 40, 50, 100];
        this.sendLoading = false;
    }
    ngOnInit() {
        this.Form = this.fb.group({
            hodStatus: ["PENDING", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            financeStatus: ["PENDING", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            procurementStatus: ["PENDING", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            fromDate: [this.oneWeekAgo, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            toDate: [this.dateTomorrow, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
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
    //data: any;
    getData(page, size) {
        this.isLoading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (!this.input) {
            this.input = "%";
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams()
            .set("financeApprovalStatus", this.Form.value.financeStatus)
            .set("procurementApprovalStatus", this.Form.value.procurementStatus)
            .set("hodApprovalStatus", this.Form.value.hodStatus)
            .set("fromDate", this.Form.value.fromDate)
            .set("toDate", this.Form.value.toDate)
            .set("pageNo", page)
            .set("pageSize", size)
            .set("searchTerm", this.input)
            .set("status", this.Form.value.status);
        this.requisitionService
            .getRequisitionsByStatus(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res:: ", res);
                console.log("res.entity:: ", res.entity);
                console.log("res.entity.content:: ", res.entity.content);
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(this.data.content.reverse());
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
    getSelectedStatus(event) {
        this.getData(this.currentPage, this.pageSize);
    }
    addRequisition() {
        this.router.navigate(["/erp-procurement/requisitions/manage-requisitions"]);
    }
    editRequisition(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        let route = "/erp-procurement/requisitions/manage-requisitions";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                additionalData: serializedData,
                action: "Update",
            },
        });
    }
    viewRequisition(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        let route = "/erp-procurement/requisitions/manage-requisitions";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                additionalData: serializedData,
                action: "View",
            },
        });
    }
    validateRequisition(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        let route = "/erp-procurement/requisitions/manage-requisitions";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                additionalData: serializedData,
                action: "Validate",
            },
        });
    }
    poAcknowledgement(data) {
        let privilege = "Receive Purchase Order Items";
        this.hasAccess = this.accessControlService.hasPrivilege("ProcurementModule", [privilege]);
        if (this.hasAccess) {
            let route = "/erp-procurement/requisitions/purchase-order-acknowledgement";
            this.router.navigate([route], {
                queryParams: {
                    code: data.purchaseRequisitionCode,
                    action: "Acknowledge",
                },
            });
        }
    }
    deleteRequisition(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you sure?",
            text: "Do you really want to delete this Requisition?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete Requisition!",
        }).then((result) => {
            if (result.isConfirmed) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams().set("id", id);
                this.requisitionService
                    .deleteRequisitionsTemporarily(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        this.snackbar.showNotification("snackbar-success", res.message);
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getData(this.currentPage, this.pageSize);
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription;
            }
        });
    }
    downloadPO(row) {
        this.downloadLoading = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams().set("prNo", row.purchaseRequisitionCode);
        this.requisitionService
            .donwloadPurchaseOrder(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
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
            rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription;
    }
    sendPO(row) {
        this.sendLoading = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams().set("prNo", row.purchaseRequisitionCode);
        this.requisitionService
            .sendPurchaseOrder(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
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
            rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription;
    }
    isButtonDisabled(row) {
        return (row.financeApprovalStatus === "APPROVED" ||
            row.hodApprovalStatus === "APPROVED" ||
            row.procurementApprovalStatus === "APPROVED");
    }
}
AllRequisitionsComponent.ɵfac = function AllRequisitionsComponent_Factory(t) { return new (t || AllRequisitionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_requisition_service__WEBPACK_IMPORTED_MODULE_2__.RequisitionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__.AccessControlService)); };
AllRequisitionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AllRequisitionsComponent, selectors: [["app-all-requisitions"]], viewQuery: function AllRequisitionsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 130, vars: 26, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [1, "col-10"], [3, "formGroup"], [1, "col-2"], ["appearance", "fill", 1, "example-full-width"], ["formControlName", "procurementStatus", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "hodStatus", 3, "selectionChange"], ["formControlName", "financeStatus", 3, "selectionChange"], ["matInput", "", "formControlName", "fromDate", "required", "", 3, "matDatepicker", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "toDate", "required", "", 3, "matDatepicker", "dateChange"], ["picker2", ""], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "purchaseRequisitionCode"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-7", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-7", 4, "matCellDef"], ["matColumnDef", "supplierCode"], ["matColumnDef", "postedBy"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-8", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-8", 4, "matCellDef"], ["matColumnDef", "postedTime"], ["matColumnDef", "hodApproval"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "financeApproval"], ["matColumnDef", "procurementApproval"], ["matColumnDef", "downloadPO"], ["matColumnDef", "sendPO"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "pageSizeOptions", "length", "pageIndex", "pageSize", "page"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [3, "value"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-7"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-7"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-8"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-8"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], [1, "badge", "badge-solid-purple", "btn", "btn", "btn-sm", "m-1", 3, "disabled", "click"], [1, "fas", "fa-download"], [1, "fas", "fa-paper-plane"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-30"], ["matTooltip", "Edit", "mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "disabled", "click"], [3, "icon"], ["matTooltip", "Validate", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "Receive", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "View", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "Delete", "mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], [3, "colspan"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllRequisitionsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AllRequisitionsComponent_div_8_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 4)(13, "div", 11)(14, "ul", 12)(15, "li", 13)(16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Purchase Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "li", 14)(19, "label", 15)(20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function AllRequisitionsComponent_Template_input_keyup_22_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "li")(25, "div", 19)(26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_Template_button_click_26_listener() { return ctx.addRequisition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "li")(30, "div", 22)(31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_Template_button_click_31_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 23)(35, "ul", 24)(36, "li")(37, "div", 25)(38, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_Template_img_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r110); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](94); return _r13.exportTable("xlsx", { fileName: "Requisitions-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "li")(40, "div", 27)(41, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_Template_img_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r110); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](94); return _r13.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "li")(43, "div", 29)(44, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_Template_img_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r110); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](94); return _r13.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "li")(46, "div", 31)(47, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllRequisitionsComponent_Template_img_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r110); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](94); return _r13.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 33)(49, "div", 4)(50, "div", 34)(51, "form", 35)(52, "div", 4)(53, "div", 36)(54, "mat-form-field", 37)(55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Procurement Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "mat-select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function AllRequisitionsComponent_Template_mat_select_selectionChange_57_listener($event) { return ctx.getSelectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, AllRequisitionsComponent_mat_option_58_Template, 2, 2, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, AllRequisitionsComponent_mat_error_59_Template, 2, 0, "mat-error", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 36)(61, "mat-form-field", 37)(62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "HOD Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "mat-select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function AllRequisitionsComponent_Template_mat_select_selectionChange_64_listener($event) { return ctx.getSelectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, AllRequisitionsComponent_mat_option_65_Template, 2, 2, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, AllRequisitionsComponent_mat_error_66_Template, 2, 0, "mat-error", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 36)(68, "mat-form-field", 37)(69, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Finance Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "mat-select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function AllRequisitionsComponent_Template_mat_select_selectionChange_71_listener($event) { return ctx.getSelectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, AllRequisitionsComponent_mat_option_72_Template, 2, 2, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, AllRequisitionsComponent_mat_error_73_Template, 2, 0, "mat-error", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 36)(75, "mat-form-field", 37)(76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dateChange", function AllRequisitionsComponent_Template_input_dateChange_78_listener($event) { return ctx.getSelectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "mat-datepicker-toggle", 44)(80, "mat-datepicker", null, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, AllRequisitionsComponent_mat_error_82_Template, 2, 0, "mat-error", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 36)(84, "mat-form-field", 37)(85, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dateChange", function AllRequisitionsComponent_Template_input_dateChange_87_listener($event) { return ctx.getSelectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](88, "mat-datepicker-toggle", 44)(89, "mat-datepicker", null, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, AllRequisitionsComponent_mat_error_91_Template, 2, 0, "mat-error", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "mat-table", 48, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](95, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](96, AllRequisitionsComponent_mat_header_cell_96_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](97, AllRequisitionsComponent_mat_cell_97_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](98, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](99, AllRequisitionsComponent_mat_header_cell_99_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](100, AllRequisitionsComponent_mat_cell_100_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](101, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](102, AllRequisitionsComponent_mat_header_cell_102_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](103, AllRequisitionsComponent_mat_cell_103_Template, 2, 1, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](104, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](105, AllRequisitionsComponent_mat_header_cell_105_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](106, AllRequisitionsComponent_mat_cell_106_Template, 3, 4, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](107, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](108, AllRequisitionsComponent_mat_header_cell_108_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](109, AllRequisitionsComponent_mat_cell_109_Template, 7, 5, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](110, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](111, AllRequisitionsComponent_mat_header_cell_111_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](112, AllRequisitionsComponent_mat_cell_112_Template, 7, 5, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](113, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](114, AllRequisitionsComponent_mat_header_cell_114_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](115, AllRequisitionsComponent_mat_cell_115_Template, 7, 5, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](116, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](117, AllRequisitionsComponent_mat_header_cell_117_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](118, AllRequisitionsComponent_mat_cell_118_Template, 4, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](119, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](120, AllRequisitionsComponent_mat_header_cell_120_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](121, AllRequisitionsComponent_mat_cell_121_Template, 4, 1, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](122, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](123, AllRequisitionsComponent_mat_header_cell_123_Template, 2, 0, "mat-header-cell", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](124, AllRequisitionsComponent_mat_cell_124_Template, 11, 16, "mat-cell", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](125, AllRequisitionsComponent_mat_header_row_125_Template, 1, 0, "mat-header-row", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](126, AllRequisitionsComponent_mat_row_126_Template, 1, 2, "mat-row", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](127, AllRequisitionsComponent_tr_127_Template, 3, 2, "tr", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](128, AllRequisitionsComponent_div_128_Template, 2, 1, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "mat-paginator", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function AllRequisitionsComponent_Template_mat_paginator_page_129_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](81);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "All Purchase Orders")("items", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](25, _c1))("active_item", "All Purchase Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("procurementStatus").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("hodStatus").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("financeStatus").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("fromDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("toDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("length", ctx.totalItems)("pageIndex", ctx.currentPage)("pageSize", ctx.pageSize);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__.GenWidgetsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepicker, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_27__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtcmVxdWlzaXRpb25zLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 12236:
/*!**************************************************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/requisition/pages/manage-requisition/manage-requisition.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageRequisitionComponent": () => (/* binding */ ManageRequisitionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _dialogs_validate_requisition_validate_requisition_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialogs/validate-requisition/validate-requisition.component */ 1184);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _parameters_pages_lookups_suppliers_lookup_suppliers_lookup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../parameters/pages/lookups/suppliers-lookup/suppliers-lookup.component */ 62275);
/* harmony import */ var _parameters_pages_lookups_rfqs_lookup_rfqs_lookup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../parameters/pages/lookups/rfqs-lookup/rfqs-lookup.component */ 44754);
/* harmony import */ var _parameters_pages_lookups_rfps_lookup_rfps_lookup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../parameters/pages/lookups/rfps-lookup/rfps-lookup.component */ 2211);
/* harmony import */ var src_app_erp_inventory_data_lookups_catalogue_lookup_catalogue_lookup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-inventory/data/lookups/catalogue-lookup/catalogue-lookup.component */ 55670);
/* harmony import */ var src_app_erp_finance_data_lookups_exp_c_centre_lookup_exp_c_centre_lookup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/exp-c-centre-lookup/exp-c-centre-lookup.component */ 31602);
/* harmony import */ var src_app_erp_finance_data_lookups_expense_lookup_expense_lookup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/expense-lookup/expense-lookup.component */ 30417);
/* harmony import */ var src_app_erp_finance_data_lookups_tax_lookup_tax_lookup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/tax-lookup/tax-lookup.component */ 5815);
/* harmony import */ var src_app_erp_finance_data_lookups_gls_lookup_gls_lookup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/gls-lookup/gls-lookup.component */ 83163);
/* harmony import */ var src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/ccentre-lookup/ccentre-lookup.component */ 64622);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_erp_finance_data_lookups_maintained_currencies_look_up_maintained_currencies_look_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/maintained-currencies-look-up/maintained-currencies-look-up.component */ 2977);
/* harmony import */ var src_app_erp_fixedassets_data_lookups_asset_catalog_lookup_asset_catalog_lookup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/erp-fixedassets/data/lookups/asset-catalog-lookup/asset-catalog-lookup.component */ 69518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_erp_procurement_data_services_requisition_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/erp-procurement/data/services/requisition.service */ 3207);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var src_app_erp_procurement_data_services_procurement_calculations_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_procurement-calculations.service */ 65912);
/* harmony import */ var src_app_erp_budget_data_services_budget_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/erp-budget/data/services/budget.service */ 64608);
/* harmony import */ var src_app_erp_finance_data_services_gl_accounts_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/erp-finance/data/services/gl-accounts.service */ 11644);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);




















































const _c0 = ["fileInput"];
function ManageRequisitionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "mat-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 14)(1, "div", 122)(2, "div", 123)(3, "div", 124)(4, "div", 125)(5, "div", 14)(6, "div", 54)(7, "div", 14)(8, "div", 126)(9, "div", 127)(10, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "HOD Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "div", 129)(13, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "div", 126)(16, "div", 127)(17, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18, "HOD Approved By");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "div", 129)(20, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "div", 14)(23, "div", 132)(24, "div", 133)(25, "div", 134)(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](27, "HOD Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "div", 54)(31, "div", 14)(32, "div", 126)(33, "div", 127)(34, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](35, "Finance Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](36, "div", 129)(37, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](39, "div", 126)(40, "div", 127)(41, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](42, "Finance Approved By");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](43, "div", 129)(44, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](46, "div", 14)(47, "div", 132)(48, "div", 133)(49, "div", 134)(50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](51, "Finance Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](52, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](54, "div", 54)(55, "div", 14)(56, "div", 126)(57, "div", 127)(58, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](59, "Procurement Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](60, "div", 129)(61, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](63, "div", 126)(64, "div", 127)(65, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](66, "Procurement Approved By");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](67, "div", 129)(68, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](70, "div", 14)(71, "div", 132)(72, "div", 133)(73, "div", 134)(74, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](75, "Procurement Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](76, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()()()()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.formData.hodApprovalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.formData.hodApprovedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.formData.hodApprovalReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.formData.financeApprovalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.formData.financeApprovedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.formData.financeApprovalReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.formData.procurementApprovalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", ctx_r2.formData.procurementApprovedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.formData.procurementApprovalReason);
} }
function ManageRequisitionComponent_div_8_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-option", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderType_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", purchaseOrderType_r87.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](purchaseOrderType_r87.name);
} }
function ManageRequisitionComponent_div_8_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Purchase Order Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-option", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderCategory_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", purchaseOrderCategory_r88.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](purchaseOrderCategory_r88.name);
} }
function ManageRequisitionComponent_div_8_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Purchase Order Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-option", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemType_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", itemType_r89.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](itemType_r89.name);
} }
function ManageRequisitionComponent_div_8_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Organization is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Operating Unit is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Supplier Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Supplier Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Currency is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_error_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "CostCenterCode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_error_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "ExpenseCode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_error_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Account Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_error_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Location is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_error_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "RequestedBy is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_error_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_error_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Description must not exceed 300 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_template_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, " Requisition Items ");
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "ItemRequested is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Unit of Measure is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Quantity is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Quantity cannot be 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Quantity allows numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Please enter unit amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Please ensure amount does not exceed 2 decimal values! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Please ensure amount does not exceed 1 billion! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Need by Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Enter a Valid Need by Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Tax Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Tax Rate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Item Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Item Description must not exceed 300 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_button_67_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_ng_container_112_form_5_button_67_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4); return ctx_r108.addToArray(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " + Add Requisition details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", !ctx_r106.bgtForm.valid);
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_button_68_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_ng_container_112_form_5_button_68_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4); return ctx_r110.updateRequisitionDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " + Update Requisition details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", !ctx_r107.bgtForm.valid);
} }
function ManageRequisitionComponent_div_8_ng_container_112_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "form", 15)(1, "div", 14)(2, "div", 16)(3, "mat-form-field", 17)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "ItemRequested");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_ng_container_112_form_5_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r113); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return ctx_r112.catalogueLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](9, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_9_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "div", 16)(11, "mat-form-field", 17)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13, "Unit of Measure");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](14, "input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](15, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_15_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "div", 16)(17, "mat-form-field", 17)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](19, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](20, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](21, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_21_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](22, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_22_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](23, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_23_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "div", 16)(25, "mat-form-field", 145)(26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](27, "Unit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](28, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](29, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_29_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](30, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_30_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](31, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_31_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "div", 16)(33, "mat-form-field", 17)(34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](35, "Need By Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](36, "input", 147)(37, "mat-datepicker-toggle", 148)(38, "mat-datepicker", null, 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](40, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_40_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](41, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_41_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](42, "div", 16)(43, "mat-form-field", 17)(44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](45, "Tax Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](46, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](47, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_ng_container_112_form_5_Template_mat_icon_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r113); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return ctx_r114.taxesLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](48, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](49, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_49_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](50, "div", 16)(51, "mat-form-field", 17)(52, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](53, "Tax Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](54, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](55, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_ng_container_112_form_5_Template_mat_icon_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r113); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return ctx_r115.taxesLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](56, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](57, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_57_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](58, "div", 16)(59, "mat-form-field", 17)(60, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](61, "Item Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](62, "input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](63, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_63_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](64, ManageRequisitionComponent_div_8_ng_container_112_form_5_mat_error_64_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](65, "div", 153)(66, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](67, ManageRequisitionComponent_div_8_ng_container_112_form_5_button_67_Template, 2, 1, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](68, ManageRequisitionComponent_div_8_ng_container_112_form_5_button_68_Template, 2, 1, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](69, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_ng_container_112_form_5_Template_button_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r113); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return ctx_r116.clearForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](70, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](39);
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formGroup", ctx_r90.bgtForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("readOnly", ctx_r90.isCatalogueItemsReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.bgtForm.get("itemRequested").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("readOnly", ctx_r90.isCatalogueItemsReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.bgtForm.get("unitOfMeasure").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.bgtForm.get("quantity").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.bgtForm.get("quantity").hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.bgtForm.get("quantity").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.bgtForm.get("unitPrice").hasError("required") && ctx_r90.bgtForm.get("unitPrice").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.bgtForm.get("unitPrice").hasError("pattern") && ctx_r90.bgtForm.get("unitPrice").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.bgtForm.get("unitPrice").hasError("max") && ctx_r90.bgtForm.get("unitPrice").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matDatepicker", _r99);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("for", _r99);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.bgtForm.get("needByDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.bgtForm.get("needByDate").hasError("pastDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.bgtForm.get("taxName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.bgtForm.get("taxRate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.bgtForm.get("itemDescription").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.mngForm.get("description").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.addButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r90.editButton);
} }
function ManageRequisitionComponent_div_8_ng_container_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 13)(2, "div", 14)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "Requisition Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](5, ManageRequisitionComponent_div_8_ng_container_112_form_5_Template, 71, 21, "form", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r22.enterManually);
} }
function ManageRequisitionComponent_div_8_div_113_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-chip", 164)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemError_r119 = ctx.$implicit;
    const i_r120 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", i_r120 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"](" ", itemError_r119.field, ": ", itemError_r119.message, " ");
} }
function ManageRequisitionComponent_div_8_div_113_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r121 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r121.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r121.itemDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r121.itemRequested);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r121.needByDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r121.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r121.taxName);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r121.taxRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r121.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r121.unitOfMeasure);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r121.unitPrice);
} }
function ManageRequisitionComponent_div_8_div_113_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 158)(1, "div", 132)(2, "div", 159)(3, "mat-chip-list", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, ManageRequisitionComponent_div_8_div_113_mat_chip_4_Template, 6, 3, "mat-chip", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "table", 162)(6, "thead")(7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "Item Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13, "Item Requested");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15, "Need By Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](17, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](19, "Tax Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](21, "Tax Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](23, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](25, "Unit of Measure");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](27, "Unit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](29, ManageRequisitionComponent_div_8_div_113_tr_29_Template, 21, 10, "tr", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "div", 153)(31, "div", 154)(32, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_div_113_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r122.clearImports(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](33, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r23.itemErrors);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r23.items);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", row_r124.id ? row_r124.id : "#", " ");
} }
function ManageRequisitionComponent_div_8_mat_header_cell_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_160_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", row_r125.type, "");
} }
function ManageRequisitionComponent_div_8_mat_cell_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_160_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r125.type);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "CC-Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_163_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", row_r128.costcentercode, "");
} }
function ManageRequisitionComponent_div_8_mat_cell_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_163_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r128 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r128.costcentercode);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "ExpCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_166_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", row_r131.expenseCode, "");
} }
function ManageRequisitionComponent_div_8_mat_cell_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_166_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r131 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r131.expenseCode);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "ActNo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_169_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", row_r134.accountNumber, "");
} }
function ManageRequisitionComponent_div_8_mat_cell_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_169_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r134 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r134.accountNumber);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "ReqItem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_172_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", row_r137.itemRequested, "");
} }
function ManageRequisitionComponent_div_8_mat_cell_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_172_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r137 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r137.itemRequested);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "UnitOfMeasure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_175_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", row_r140.unitOfMeasure, "");
} }
function ManageRequisitionComponent_div_8_mat_cell_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_175_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r140 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r140.unitOfMeasure);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_178_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", row_r143.quantity, "");
} }
function ManageRequisitionComponent_div_8_mat_cell_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_178_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r143 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r143.quantity);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "UnitPrice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_181_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind4"](2, 1, row_r146.unitPrice, "KSH ", "symbol", "1.2-2"), " ");
} }
function ManageRequisitionComponent_div_8_mat_cell_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_181_span_1_Template, 3, 6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r146 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r146.unitPrice);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "NeedByDate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_184_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](2, 1, row_r149.needByDate, "short"), "");
} }
function ManageRequisitionComponent_div_8_mat_cell_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_184_span_1_Template, 3, 4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r149 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r149.needByDate);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "TaxName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_187_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", row_r152.taxName, "");
} }
function ManageRequisitionComponent_div_8_mat_cell_187_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_187_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r152 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r152.taxName);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "TaxRate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_190_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", row_r155.taxRate, "");
} }
function ManageRequisitionComponent_div_8_mat_cell_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_190_span_1_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r155 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r155.taxRate);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "subTotal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_193_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind4"](2, 1, row_r158.subTotal, "KSH ", "symbol", "1.2-2"), "");
} }
function ManageRequisitionComponent_div_8_mat_cell_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_193_span_1_Template, 3, 6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r158 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r158.subTotal);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "TaxAmount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_196_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind4"](2, 1, row_r161.taxAmount, "KSH ", "symbol", "1.2-2"), "");
} }
function ManageRequisitionComponent_div_8_mat_cell_196_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_196_span_1_Template, 3, 6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r161 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r161.taxAmount);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_198_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "TotalAmount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_199_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind4"](2, 1, row_r164.totalAmount, "KSH ", "symbol", "1.2-2"), " ");
} }
function ManageRequisitionComponent_div_8_mat_cell_199_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_mat_cell_199_span_1_Template, 3, 6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r164 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", row_r164.totalAmount);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "BudgetCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_202_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\u00A0 Fail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_202_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\u00A0 Pass ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_202_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("\u00A0 ", "-", " ");
} }
function ManageRequisitionComponent_div_8_mat_cell_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_mat_cell_202_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](1, 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, ManageRequisitionComponent_div_8_mat_cell_202_button_2_Template, 3, 0, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ManageRequisitionComponent_div_8_mat_cell_202_button_3_Template, 3, 0, "button", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, ManageRequisitionComponent_div_8_mat_cell_202_button_4_Template, 3, 1, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r167 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngSwitch", row_r167.budgetFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngSwitchCase", "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngSwitchCase", "Y");
} }
function ManageRequisitionComponent_div_8_mat_header_cell_204_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "OverrideBgt");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_205_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\u00A0 Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_205_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\u00A0 No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_205_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("\u00A0 ", "-", " ");
} }
function ManageRequisitionComponent_div_8_mat_cell_205_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_mat_cell_205_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](1, 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, ManageRequisitionComponent_div_8_mat_cell_205_button_2_Template, 3, 0, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ManageRequisitionComponent_div_8_mat_cell_205_button_3_Template, 3, 0, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, ManageRequisitionComponent_div_8_mat_cell_205_button_4_Template, 3, 1, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r173 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngSwitch", row_r173.allowOverride);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngSwitchCase", "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngSwitchCase", "N");
} }
function ManageRequisitionComponent_div_8_mat_header_cell_207_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_208_Template(rf, ctx) { if (rf & 1) {
    const _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 186)(1, "button", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_mat_cell_208_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r182); const row_r179 = restoredCtx.$implicit; const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r181.onEditRequisitionDetails(row_r179); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "app-feather-icons", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "button", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_mat_cell_208_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r182); const i_r180 = restoredCtx.index; const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r183.onDeleteRequisitionDetails(i_r180); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "app-feather-icons", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", ctx_r62.disableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", ctx_r62.disableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("icon", "trash-2");
} }
function ManageRequisitionComponent_div_8_mat_header_row_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "mat-header-row");
} }
function ManageRequisitionComponent_div_8_mat_row_210_Template(rf, ctx) { if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-row", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_mat_row_210_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r187); const row_r184 = restoredCtx.$implicit; const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r186.onEditRequisitionDetails(row_r184); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ManageRequisitionComponent_div_8_div_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "mat-progress-spinner", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("diameter", 40);
} }
function ManageRequisitionComponent_div_8_ng_template_232_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, " Upload Requisition Attachments ");
} }
function ManageRequisitionComponent_div_8_mat_header_cell_260_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_261_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r189 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formGroupName", index_r189);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", index_r189 + 1, " ");
} }
function ManageRequisitionComponent_div_8_mat_header_cell_263_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "FileName");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 195)(1, "mat-form-field", 196)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "fileName");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "input", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r191 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formGroupName", index_r191);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_266_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "FileType");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_267_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 195)(1, "mat-form-field", 196)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "fileType");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "input", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r193 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formGroupName", index_r193);
} }
function ManageRequisitionComponent_div_8_mat_header_cell_269_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_270_Template(rf, ctx) { if (rf & 1) {
    const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 200)(1, "input", 201, 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function ManageRequisitionComponent_div_8_mat_cell_270_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r198); const row_r194 = restoredCtx.$implicit; const index_r195 = restoredCtx.index; const _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](2); const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r197.onSelectFile(_r196.files, row_r194, index_r195); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r195 = ctx.index;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formGroupName", index_r195);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](3, 3, ctx_r77.isLoading))("multiple", "multiple");
} }
function ManageRequisitionComponent_div_8_mat_header_cell_272_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_273_Template(rf, ctx) { if (rf & 1) {
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 203)(1, "button", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_mat_cell_273_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ManageRequisitionComponent_div_8_mat_cell_273_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r203); const row_r199 = restoredCtx.$implicit; const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r202.downloadDocument(row_r199); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "mat-icon", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
} }
function ManageRequisitionComponent_div_8_mat_header_cell_275_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-header-cell", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_mat_cell_276_Template(rf, ctx) { if (rf & 1) {
    const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 203)(1, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_mat_cell_276_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ManageRequisitionComponent_div_8_mat_cell_276_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r208); const row_r204 = restoredCtx.$implicit; const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r207.deleteCall(row_r204); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "app-feather-icons", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("icon", "trash-2");
} }
function ManageRequisitionComponent_div_8_mat_header_row_277_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "mat-header-row");
} }
function ManageRequisitionComponent_div_8_mat_row_278_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "mat-row", 207);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ManageRequisitionComponent_div_8_mat_cell_279_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-cell", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r84.input.value, "\"");
} }
function ManageRequisitionComponent_div_8_div_280_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "mat-progress-spinner", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("diameter", 40);
} }
function ManageRequisitionComponent_div_8_ng_container_290_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_ng_container_290_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r215); const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return ctx_r214.onValidate("Procurement"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, " Procurement Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ManageRequisitionComponent_div_8_ng_container_290_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_ng_container_290_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r217); const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return ctx_r216.onValidate("HOD"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "done_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, " HOD Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", !ctx_r212.formData.procurementApprovedFlag);
} }
function ManageRequisitionComponent_div_8_ng_container_290_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_ng_container_290_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r219); const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return ctx_r218.onValidate("Finance"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "attach_money");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, " Finance Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", !ctx_r213.formData.hodApprovedFlag || !ctx_r213.formData.procurementApprovedFlag);
} }
function ManageRequisitionComponent_div_8_ng_container_290_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_ng_container_290_button_1_Template, 4, 0, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, ManageRequisitionComponent_div_8_ng_container_290_button_2_Template, 4, 1, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ManageRequisitionComponent_div_8_ng_container_290_button_3_Template, 4, 1, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r86.formData.procurementApprovedFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r86.formData.hodApprovedFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r86.formData.financeApprovedFlag);
} }
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
function ManageRequisitionComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r221 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ManageRequisitionComponent_div_8_div_1_Template, 78, 9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 13)(3, "div", 14)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "form", 15)(7, "div", 14)(8, "div", 16)(9, "mat-form-field", 17)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "PurchaseOrderType");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("selectionChange", function ManageRequisitionComponent_div_8_Template_mat_select_selectionChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r220.getSelectedPurchaseOrderType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](13, ManageRequisitionComponent_div_8_mat_option_13_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](14, ManageRequisitionComponent_div_8_mat_error_14_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "div", 16)(16, "mat-form-field", 17)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18, "PurchaseOrderCategory");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("selectionChange", function ManageRequisitionComponent_div_8_Template_mat_select_selectionChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r222.getSelectedPurchaseOrderCategory($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](20, ManageRequisitionComponent_div_8_mat_option_20_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](21, ManageRequisitionComponent_div_8_mat_error_21_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "div", 16)(23, "mat-form-field", 17)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](25, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](27, ManageRequisitionComponent_div_8_mat_option_27_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](28, ManageRequisitionComponent_div_8_mat_error_28_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "div", 16)(30, "mat-form-field", 17)(31, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](32, "Organization");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](33, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](34, ManageRequisitionComponent_div_8_mat_error_34_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](35, "div", 16)(36, "mat-form-field", 17)(37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](38, "Operating Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](39, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](40, ManageRequisitionComponent_div_8_mat_error_40_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](41, "div", 16)(42, "mat-form-field", 17)(43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](44, "Supplier Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](45, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](46, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_mat_icon_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r223.suppliersLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](47, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](48, ManageRequisitionComponent_div_8_mat_error_48_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](49, "div", 16)(50, "mat-form-field", 17)(51, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](52, "SupplierCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](53, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](54, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_mat_icon_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r224.suppliersLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](55, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](56, ManageRequisitionComponent_div_8_mat_error_56_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](57, "div", 16)(58, "mat-form-field", 17)(59, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](60, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](61, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](62, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_mat_icon_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r225.currenciesLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](63, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](64, ManageRequisitionComponent_div_8_mat_error_64_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](65, "div", 16)(66, "mat-form-field", 17)(67, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](68, "CostCenterCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](69, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](70, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_mat_icon_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r226.costCenterLookUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](71, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](72, ManageRequisitionComponent_div_8_mat_error_72_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](73, "div", 16)(74, "mat-form-field", 17)(75, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](76, "ExpenseCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](77, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](78, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_mat_icon_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r227.expenseLookUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](79, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](80, ManageRequisitionComponent_div_8_mat_error_80_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](81, "div", 16)(82, "mat-form-field", 17)(83, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](84, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](85, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](86, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_mat_icon_click_86_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r228.glsLookUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](87, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](88, ManageRequisitionComponent_div_8_mat_error_88_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](89, "div", 16)(90, "mat-form-field", 17)(91, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](92, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](93, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](94, ManageRequisitionComponent_div_8_mat_error_94_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](95, "div", 16)(96, "mat-form-field", 17)(97, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](98, "RequestedBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](99, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](100, ManageRequisitionComponent_div_8_mat_error_100_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](101, "div", 34)(102, "mat-form-field", 17)(103, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](104, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](105, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](106, ManageRequisitionComponent_div_8_mat_error_106_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](107, ManageRequisitionComponent_div_8_mat_error_107_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](108, "mat-tab-group")(109, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](110, ManageRequisitionComponent_div_8_ng_template_110_Template, 3, 0, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](111, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](112, ManageRequisitionComponent_div_8_ng_container_112_Template, 6, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](113, ManageRequisitionComponent_div_8_div_113_Template, 34, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](114, "div", 39)(115, "div", 40)(116, "div", 14)(117, "div", 41)(118, "ul", 42)(119, "li", 43)(120, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](121, "Requisition Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](122, "li", 44)(123, "label", 45)(124, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](125, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](126, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("keyup", function ManageRequisitionComponent_div_8_Template_input_keyup_126_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r229.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](128, "li")(129, "div", 49)(130, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_button_click_130_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r230.lookUpToPurchaseOrderTypes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](131, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](132, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](133, "li")(134, "div", 52)(135, "button", 53)(136, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](137, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](138, "div", 54)(139, "ul", 55)(140, "li")(141, "div", 56)(142, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_img_click_142_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](154); return _r26.exportTable("xlsx", { fileName: "Requisition-Items-list", sheet: "sheet1" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](143, "li")(144, "div", 58)(145, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_img_click_145_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](154); return _r26.exportTable("csv"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](146, "li")(147, "div", 60)(148, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_img_click_148_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](154); return _r26.exportTable("json"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](149, "li")(150, "div", 62)(151, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_img_click_151_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](154); return _r26.exportTable("txt"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](152, "mat-table", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](155, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](156, ManageRequisitionComponent_div_8_mat_header_cell_156_Template, 2, 0, "mat-header-cell", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](157, ManageRequisitionComponent_div_8_mat_cell_157_Template, 2, 1, "mat-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](158, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](159, ManageRequisitionComponent_div_8_mat_header_cell_159_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](160, ManageRequisitionComponent_div_8_mat_cell_160_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](161, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](162, ManageRequisitionComponent_div_8_mat_header_cell_162_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](163, ManageRequisitionComponent_div_8_mat_cell_163_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](164, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](165, ManageRequisitionComponent_div_8_mat_header_cell_165_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](166, ManageRequisitionComponent_div_8_mat_cell_166_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](167, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](168, ManageRequisitionComponent_div_8_mat_header_cell_168_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](169, ManageRequisitionComponent_div_8_mat_cell_169_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](170, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](171, ManageRequisitionComponent_div_8_mat_header_cell_171_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](172, ManageRequisitionComponent_div_8_mat_cell_172_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](173, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](174, ManageRequisitionComponent_div_8_mat_header_cell_174_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](175, ManageRequisitionComponent_div_8_mat_cell_175_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](176, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](177, ManageRequisitionComponent_div_8_mat_header_cell_177_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](178, ManageRequisitionComponent_div_8_mat_cell_178_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](179, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](180, ManageRequisitionComponent_div_8_mat_header_cell_180_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](181, ManageRequisitionComponent_div_8_mat_cell_181_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](182, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](183, ManageRequisitionComponent_div_8_mat_header_cell_183_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](184, ManageRequisitionComponent_div_8_mat_cell_184_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](185, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](186, ManageRequisitionComponent_div_8_mat_header_cell_186_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](187, ManageRequisitionComponent_div_8_mat_cell_187_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](188, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](189, ManageRequisitionComponent_div_8_mat_header_cell_189_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](190, ManageRequisitionComponent_div_8_mat_cell_190_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](191, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](192, ManageRequisitionComponent_div_8_mat_header_cell_192_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](193, ManageRequisitionComponent_div_8_mat_cell_193_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](194, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](195, ManageRequisitionComponent_div_8_mat_header_cell_195_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](196, ManageRequisitionComponent_div_8_mat_cell_196_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](197, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](198, ManageRequisitionComponent_div_8_mat_header_cell_198_Template, 2, 0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](199, ManageRequisitionComponent_div_8_mat_cell_199_Template, 2, 1, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](200, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](201, ManageRequisitionComponent_div_8_mat_header_cell_201_Template, 2, 0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](202, ManageRequisitionComponent_div_8_mat_cell_202_Template, 5, 3, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](203, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](204, ManageRequisitionComponent_div_8_mat_header_cell_204_Template, 2, 0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](205, ManageRequisitionComponent_div_8_mat_cell_205_Template, 5, 3, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](206, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](207, ManageRequisitionComponent_div_8_mat_header_cell_207_Template, 2, 0, "mat-header-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](208, ManageRequisitionComponent_div_8_mat_cell_208_Template, 5, 8, "mat-cell", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](209, ManageRequisitionComponent_div_8_mat_header_row_209_Template, 1, 0, "mat-header-row", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](210, ManageRequisitionComponent_div_8_mat_row_210_Template, 1, 2, "mat-row", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](211, ManageRequisitionComponent_div_8_div_211_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](212, "div", 95)(213, "div", 96)(214, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](215, "Sub - Total amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](216, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](217);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](218, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](219, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](220, "vat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](221, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](222);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](223, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](224, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](225, "h3")(226, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](227, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](228, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](229);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](230, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](231, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](232, ManageRequisitionComponent_div_8_ng_template_232_Template, 3, 0, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](233, "div", 37)(234, "form", 97)(235, "div", 98)(236, "div", 99)(237, "div", 40)(238, "div", 14)(239, "div", 41)(240, "ul", 42)(241, "li", 43)(242, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](243, "Upload Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](244, "li", 44)(245, "label", 45)(246, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](247, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](248, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("keyup", function ManageRequisitionComponent_div_8_Template_input_keyup_248_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r235.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](250, "li")(251, "div", 49)(252, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_button_click_252_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r236.addFileRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](253, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](254, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](255, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](256, "mat-table", 100, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](259, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](260, ManageRequisitionComponent_div_8_mat_header_cell_260_Template, 2, 0, "mat-header-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](261, ManageRequisitionComponent_div_8_mat_cell_261_Template, 2, 2, "mat-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](262, 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](263, ManageRequisitionComponent_div_8_mat_header_cell_263_Template, 2, 0, "mat-header-cell", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](264, ManageRequisitionComponent_div_8_mat_cell_264_Template, 5, 1, "mat-cell", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](265, 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](266, ManageRequisitionComponent_div_8_mat_header_cell_266_Template, 2, 0, "mat-header-cell", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](267, ManageRequisitionComponent_div_8_mat_cell_267_Template, 5, 1, "mat-cell", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](268, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](269, ManageRequisitionComponent_div_8_mat_header_cell_269_Template, 2, 0, "mat-header-cell", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](270, ManageRequisitionComponent_div_8_mat_cell_270_Template, 4, 5, "mat-cell", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](271, 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](272, ManageRequisitionComponent_div_8_mat_header_cell_272_Template, 2, 0, "mat-header-cell", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](273, ManageRequisitionComponent_div_8_mat_cell_273_Template, 4, 0, "mat-cell", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](274, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](275, ManageRequisitionComponent_div_8_mat_header_cell_275_Template, 2, 0, "mat-header-cell", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](276, ManageRequisitionComponent_div_8_mat_cell_276_Template, 3, 3, "mat-cell", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](277, ManageRequisitionComponent_div_8_mat_header_row_277_Template, 1, 0, "mat-header-row", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](278, ManageRequisitionComponent_div_8_mat_row_278_Template, 1, 2, "mat-row", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](279, ManageRequisitionComponent_div_8_mat_cell_279_Template, 2, 1, "mat-cell", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](280, ManageRequisitionComponent_div_8_div_280_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](281, "mat-paginator", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](282, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](283, "div", 117)(284, "div", 118)(285, "div", 119)(286, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_button_click_286_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r237.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](287, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](288, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](289, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](290, ManageRequisitionComponent_div_8_ng_container_290_Template, 4, 3, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](291, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ManageRequisitionComponent_div_8_Template_button_click_291_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r221); const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r238.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](292, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](293, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](294);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.pageFunction !== "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", ctx_r1.pageFunction, " Purchase Requisition");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formGroup", ctx_r1.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.purchaseOrderTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("purchaseOrderType").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.purchaseOrderCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("purchaseOrderType").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.itemTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("type").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("organization").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("operatingUnit").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("readonly", ctx_r1.isSupplierReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("supplierName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("readonly", ctx_r1.isSupplierReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("supplierCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("currency").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("costcentercode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("expenseCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("accountNumber").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("location").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("requestedBy").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("description").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("description").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.showItemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r1.enterManually);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind4"](218, 43, ctx_r1.totals.subTotalAmount, "KSH ", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind4"](223, 48, ctx_r1.totals.totalTax, "KSH ", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind4"](230, 53, ctx_r1.totals.totalAmount, "KSH ", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formGroup", ctx_r1.documentsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("dataSource", ctx_r1.attachementsDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.isFileDataLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](58, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r1.hideApprovals);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", !ctx_r1.mngForm.valid || ctx_r1.dataSource.data.length === 0)("hidden", ctx_r1.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.pageFunction, " Purchase Order ");
} }
const _c2 = function () { return ["Purchase Orders"]; };
class ManageRequisitionComponent {
    constructor(fb, filesService, tokenStorageService, requisitionService, snackbar, router, route, accessControlService, dialog, calculationService, budgetService, accountService) {
        this.fb = fb;
        this.filesService = filesService;
        this.tokenStorageService = tokenStorageService;
        this.requisitionService = requisitionService;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.accessControlService = accessControlService;
        this.dialog = dialog;
        this.calculationService = calculationService;
        this.budgetService = budgetService;
        this.accountService = accountService;
        this.showForm = false;
        this.pageFunction = "Add";
        this.displayedColumns = [
            "id",
            //"type",
            // "category",
            // "costCenterCode",
            // "expenseCode",
            //"accountNumber",
            "itemRequested",
            "unitOfMeasure",
            "quantity",
            "unitPrice",
            "needByDate",
            "taxName",
            "taxRate",
            "subTotal",
            "taxAmount",
            "totalAmount",
            // "budgetFlag",
            // "allowOverride",
            "actions",
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableDataSource([]);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.hideApprovals = true;
        this.approvalVisible = false;
        this.disableActions = false;
        this.requisitionStatuses = [
            { name: "Incomplete" },
            { name: "Approved" },
            { name: "Rejected" },
            { name: "Returned" },
        ];
        this.itemTypes = [{ name: "Goods" }, { name: "Services" }];
        this.subTotalAmount = 0;
        this.totalTax = 0;
        this.grandtotalAmount = 0;
        this.purchaseOrderTypes = [
            { name: "RFQ" },
            { name: "RFP" },
            { name: "CUSTOM" },
        ];
        this.purchaseOrderCategories = [
            { name: "Stock" },
            { name: "FixedAsset" },
            { name: "Expense" },
            //{ name: "Prepayment" },
        ];
        this.isCatalogueItemsReadOnly = true;
        this.showImportButton = false;
        this.isSupplierReadOnly = true;
        this.enterManually = true;
        this.items = []; // Array to store
        this.itemErrors = [];
        this.editButton = false;
        this.addButton = true;
        this.selectedRowIndex = -1; // Track the index of the selected row
        this.totals = {
            number: 0,
            totalTax: 0,
            subTotalAmount: 0,
            totalAmount: 0,
            purchaseRequisitionItems: [],
        };
        // **************************************************************************************************
        //UploadDocuments
        this.attachementsDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_25__.BehaviorSubject([]);
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
        this.isFileLoading = new rxjs__WEBPACK_IMPORTED_MODULE_25__.BehaviorSubject(false);
        //*************************************************************************************************** */
        //LOOKUPS
        //*************************************************************************************************** */
        this.currencyIsSelected = false;
        this.selectedCurrencies = [];
        this.supplierIsSelected = false;
        this.selectedSuppliers = [];
        this.taxIsSelected = false;
        this.selectedTaxes = [];
        this.showItemForm = false;
        this.rfqIsSelected = false;
        this.selectedRfq = [];
        this.rfpIsSelected = false;
        this.selectedRfp = [];
        this.catalogueArray = [];
        this.selectedItem = [];
        this.expenseIsSelected = false;
        this.selectedExpense = [];
        this.expenseArray = [];
        this.expenseGlCode = "";
        this.selectedCostCenter = [];
        // ****************************************************************************************************************************
        //cost center look up based on expense selected
        this.selectedCostCentres = [];
        //******************************************************************************************************************************************************** */
        // More Look ups
        this.glSelectedItem = [];
        // **********************************************************************************************************************************************************
        //Budget Check:
        //**************************************************************************************************** */
        // performBudgetCheck() {
        //   console.log("this.dataSource.data: ", this.dataSource.data);
        //   if (this.dataSource.data.length > 0) {
        //     // Transform the data to match the API format
        //     const transformedData = this.dataSource.data.map((item) => ({
        //       allowOverride: item.allowOverride,
        //       amount: item.totalAmount,
        //       budgetFlag: item.budgetFlag,
        //       costCenterCode: this.mngForm.value.costcentercode,
        //       expenseCode: this.mngForm.value.item.expenseCode,
        //     }));
        //     this.budgetService
        //       .budgetCheck(transformedData)
        //       .pipe(takeUntil(this.destroy$))
        //       .subscribe({
        //         next: (res) => {
        //           if (res.entity) {
        //             this.dataSource.data.forEach((item, index) => {
        //               // Assuming res.entity has the same structure as the sample response
        //               if (res.entity[index]) {
        //                 item.allowOverride = res.entity[index].allowOverride;
        //                 item.budgetFlag = res.entity[index].budgetFlag;
        //               }
        //             });
        //             this.dataSource.data = this.dataSource.data.slice();
        //             this.snackbar.showNotification("snackbar-success", res.message);
        //           } else {
        //             this.snackbar.showNotification("snackbar-danger", res.message);
        //           }
        //         },
        //         error: (err) => {
        //           this.snackbar.showNotification("snackbar-danger", err.message);
        //         },
        //         complete: () => {
        //           this.updateOverallBudgetStatus();
        //         },
        //       });
        //   } else {
        //     this.snackbar.showNotification(
        //       "snackbar-danger",
        //       "Please enter the required data to perform the budget check."
        //     );
        //   }
        // }
        // budgetPassed: boolean = false;
        // updateOverallBudgetStatus() {
        //   let budgetPassed = false;
        //   for (const item of this.dataSource.data) {
        //     if (item.budgetFlag === "N" && item.allowOverride === "N") {
        //       budgetPassed = false;
        //       this.snackbar.showNotification(
        //         "snackbar-danger",
        //         "Some records do not meet budget allocation!"
        //       );
        //       break;
        //     }
        //     if (item.budgetFlag === "Y" && item.allowOverride === "Y") {
        //       budgetPassed = true;
        //     }
        //     if (item.budgetFlag === "Y" && item.allowOverride === "N") {
        //       budgetPassed = true;
        //     }
        //     if (item.budgetFlag === "N" && item.allowOverride === "Y") {
        //       budgetPassed = true;
        //     }
        //   }
        //   this.budgetPassed = budgetPassed;
        //   if (budgetPassed) {
        //     this.snackbar.showNotification(
        //       "snackbar-success",
        //       "Budget allocations met!"
        //     );
        //   }
        // }
        // **************************************************************************************************
        this.isLoading = false;
        this.currentUser = this.tokenStorageService.getUser();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    ngOnInit() {
        this.getPage();
        this.showForm = true;
        this.route.queryParams.subscribe((params) => {
            if (params.id) {
                const action = params.action;
                if (action === "Update") {
                    this.pageFunction = "Update";
                }
                else if (action === "View") {
                    this.pageFunction = "View";
                    this.disableActions = true;
                }
                else if (action === "Validate") {
                    this.pageFunction = "Validate";
                    this.disableActions = true;
                    this.approvalVisible = true;
                }
                this.RequisitionId = params.id;
                this.formData = JSON.parse(params.additionalData);
                if (this.formData.purchaseRequisitionItems.length > 0) {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableDataSource(this.formData.purchaseRequisitionItems);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                if (this.formData.purchaseRequisitionAttachments.length > 0) {
                    this.isFileDataLoading = false;
                    this.formData.purchaseRequisitionAttachments.forEach((element) => {
                        const newRow = this.fb.group({
                            file: [element.file],
                            fileName: [element.fileName],
                            fileType: [element.fileType],
                        });
                        this.rows.push(newRow);
                    });
                    this.updateView();
                }
                console.log("ID:", this.RequisitionId);
                console.log("Additional Data:", this.formData);
                this.getPage();
            }
        });
    }
    ngAfterViewInit() {
        console.log("this.mngForm.value.purchaseOrderCategory:: ", this.mngForm.value.purchaseOrderCategory);
        if (this.mngForm.value.purchaseOrderCategory === "Stock") {
            this.getAccountNumberByAccountName();
        }
    }
    getPage() {
        if (this.pageFunction === "Add") {
            this.generateEmptyForm();
            this.generateRequisitionForm();
            this.setDefaultValues();
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "Update") {
            this.generateFormWithData();
            this.generateRequisitionForm();
            this.calculateTotals();
            this.handleFormRelatedLogic();
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.generateDisabledRequisitionForm();
            this.calculateTotals();
            this.hideSubmit = true;
            this.hideApprovals = true;
            this.handleFormRelatedLogic();
        }
        else if (this.pageFunction === "Validate") {
            this.generateFormWithData();
            this.generateDisabledRequisitionForm();
            this.calculateTotals();
            this.hideApprovals = false;
            this.hideSubmit = true;
            this.handleFormRelatedLogic();
        }
    }
    generateEmptyForm() {
        this.mngForm = this.fb.group({
            operatingUnit: ["Main", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            description: ["Purchase Requisition", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.maxLength(300)]],
            costcentercode: [this.currentUser.costCenterCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            expenseCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            accountNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            number: [""],
            totalTax: [""],
            subTotalAmount: [""],
            totalAmount: [""],
            currency: ["KES", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            requestedBy: [this.currentUser.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            purchaseOrderType: ["RFQ", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            purchaseOrderCategory: ["Stock", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            type: [
                "Goods",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.pattern(/^(Goods|Services)$/i)],
            ],
            organization: ["Kingdom Bank LTD", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            location: ["Kilimani", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            supplierName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            supplierCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            purchaseRequisitionItems: [[]],
            purchaseRequisitionAttachments: [[]],
        });
    }
    generateFormWithData() {
        this.mngForm = this.fb.group({
            id: [this.formData.id],
            purchaseRequisitionCode: [
                this.formData.purchaseRequisitionCode,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            operatingUnit: [this.formData.operatingUnit, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            description: [
                this.formData.description,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.maxLength(300)],
            ],
            costcentercode: [this.formData.costcentercode, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            expenseCode: [this.formData.expenseCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            accountNumber: [this.formData.accountNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            number: [this.formData.number],
            totalTax: [this.formData.total],
            subTotalAmount: [this.formData.total],
            totalAmount: [this.formData.total],
            currency: [this.formData.currency, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            requestedBy: [this.formData.requestedBy, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            purchaseOrderType: [
                this.formData.purchaseOrderType,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            purchaseOrderCategory: [
                this.formData.purchaseOrderCategory,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            type: [this.formData.type, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            organization: [this.formData.organization, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            location: [this.formData.location, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            supplierName: [this.formData.supplierName, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            supplierCode: [this.formData.supplierCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            purchaseRequisitionItems: [this.formData.purchaseRequisitionItems],
            purchaseRequisitionAttachments: [
                this.formData.purchaseRequisitionAttachments,
            ],
        });
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            purchaseRequisitionCode: [
                { value: this.formData.purchaseRequisitionCode, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            operatingUnit: [
                { value: this.formData.operatingUnit, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            description: [
                { value: this.formData.description, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            costcentercode: [
                { value: this.formData.costcentercode, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            expenseCode: [
                { value: this.formData.expenseCode, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            accountNumber: [
                { value: this.formData.accountNumber, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            // status: [
            //   { value: this.formData.status, disabled: true },
            //   [Validators.required],
            // ],
            number: [{ value: this.formData.number, disabled: true }],
            total: [
                { value: this.formData.total, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            currency: [
                { value: this.formData.currency, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            requestedBy: [
                { value: this.formData.requestedBy, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            purchaseOrderType: [
                { value: this.formData.purchaseOrderType, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            purchaseOrderCategory: [
                { value: this.formData.purchaseOrderCategory, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            type: [
                this.formData.type,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.pattern(/^(Goods|Services)$/i)],
            ],
            organization: [
                { value: this.formData.organization, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            location: [
                { value: this.formData.location, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            supplierName: [
                { value: this.formData.supplierName, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            supplierCode: [
                { value: this.formData.supplierCode, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            ],
            purchaseRequisitionItems: [
                { value: this.formData.purchaseRequisitionItems, disabled: true },
            ],
            purchaseRequisitionAttachments: [
                { value: this.formData.purchaseRequisitionItems, disabled: true },
            ],
        });
    }
    getSelectedPurchaseOrderType(event) {
        console.log("event.value: ", event.value);
        this.handleFormRelatedLogic();
    }
    getSelectedPurchaseOrderCategory(event) {
        console.log("event.value: ", event.value);
        if (event.value == "Stock" || event.value == "FixedAsset") {
            this.isCatalogueItemsReadOnly = true;
            console.log("Stock: ", this.isCatalogueItemsReadOnly);
        }
        else {
            this.isCatalogueItemsReadOnly = false;
            console.log("!Stock: ", this.isCatalogueItemsReadOnly);
        }
        if (this.bgtForm) {
            this.bgtForm.reset();
        }
    }
    handleFormRelatedLogic() {
        var _a, _b, _c, _d;
        if (this.mngForm.value.purchaseOrderType === "CUSTOM") {
            this.showImportButton = true;
            this.isSupplierReadOnly = false;
            // Enable fields and clear values
            (_a = this.mngForm.get("supplierName")) === null || _a === void 0 ? void 0 : _a.enable();
            (_b = this.mngForm.get("supplierCode")) === null || _b === void 0 ? void 0 : _b.enable();
        }
        else {
            this.showImportButton = false;
            this.isSupplierReadOnly = true;
            // Clear and disable fields
            (_c = this.mngForm.get("supplierName")) === null || _c === void 0 ? void 0 : _c.patchValue("");
            (_d = this.mngForm.get("supplierCode")) === null || _d === void 0 ? void 0 : _d.patchValue("");
            // this.mngForm.get("supplierName")?.disable();
            // this.mngForm.get("supplierCode")?.disable();
        }
    }
    getRequisitionPeriod(event) {
        console.log("event: ", event.value);
    }
    manualItemsEntry() {
        this.enterManually = true;
    }
    importExcel() {
        this.enterManually = false;
        this.fileInput.nativeElement.click();
    }
    handleFileInput(files) {
        const file = files.item(0);
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_27__.read(arrayBuffer, { type: "array" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = xlsx__WEBPACK_IMPORTED_MODULE_27__.utils.sheet_to_json(worksheet, { raw: true });
                // this.items = jsonData;
                this.items = [
                    {
                        itemDescription: "Sample Item 2",
                        itemRequested: "Item 2",
                        // costCenterCode: "3232",
                        // expenseCode: "4242",
                        // accountNumber: "XYZ456",
                        needByDate: "2023-06-23",
                        quantity: 5,
                        taxName: "VAT",
                        taxRate: 20,
                        unitOfMeasure: "hours",
                        unitPrice: 13,
                    },
                    {
                        itemDescription: "Sample Item 1",
                        itemRequested: "Item 1",
                        // costCenterCode: "3232",
                        // expenseCode: "4242",
                        // accountNumber: "ABC123",
                        needByDate: "2023-06-23",
                        quantity: 10,
                        taxName: "Sales Tax",
                        taxRate: 8.5,
                        unitOfMeasure: "pcs",
                        unitPrice: 9.99,
                    },
                    {
                        itemDescription: "Sample Item 2",
                        itemRequested: "Item 2",
                        // costCenterCode: "3232",
                        // expenseCode: "4242",
                        // accountNumber: "XYZ456",
                        needByDate: "2023-06-23",
                        quantity: 5,
                        taxName: "VAT",
                        taxRate: 20,
                        unitOfMeasure: "hours",
                        unitPrice: 15,
                    },
                ];
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
        this.itemErrors = []; // Clear previous errors
        const items = this.items;
        const itemsFormArray = this.itemsForm.get("items"); // Create a separate FormArray variable
        for (const item of items) {
            const formGroup = this.fb.group({
                itemDescription: [
                    item.itemDescription,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.maxLength(300)],
                ],
                itemRequested: [item.itemRequested, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                // costCenterCode: [item.costCenterCode, [Validators.required]],
                // expenseCode: [item.expenseCode, [Validators.required]],
                // accountNumber: [item.accountNumber, [Validators.required]],
                needByDate: [
                    item.needByDate,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
                ],
                quantity: [
                    item.quantity,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                taxName: [item.taxName, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                taxRate: [
                    item.taxRate,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
                unitOfMeasure: [item.unitOfMeasure, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                unitPrice: [
                    item.unitPrice,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
                ],
            });
            itemsFormArray.push(formGroup); // Use push method on the FormArray variable
            this.collectErrors(formGroup);
            if (formGroup.valid) {
                this.bgtForm.patchValue({
                    itemRequested: item.itemRequested,
                    // costCenterCode: item.costCenterCode,
                    // expenseCode: item.expenseCode,
                    // accountNumber: item.accountNumber,
                    itemCode: item.itemCode,
                    itemDescription: item.itemDescription,
                    unitOfMeasure: item.unitOfMeasure,
                    quantity: item.quantity,
                    unitPrice: item.unitPrice,
                    needByDate: item.needByDate,
                    taxRate: item.taxRate,
                    taxName: item.taxName,
                });
                this.calculateTax();
                const newRecord = {
                    itemRequested: this.bgtForm.value.itemRequested,
                    // costCenterCode: item.costCenterCode,
                    // expenseCode: item.expenseCode,
                    // accountNumber: this.bgtForm.value.accountNumber,
                    itemCode: this.bgtForm.value.itemCode,
                    itemDescription: this.bgtForm.value.itemDescription,
                    unitOfMeasure: this.bgtForm.value.unitOfMeasure,
                    quantity: this.bgtForm.value.quantity,
                    unitPrice: this.bgtForm.value.unitPrice,
                    needByDate: this.bgtForm.value.needByDate,
                    taxRate: this.bgtForm.value.taxRate,
                    taxName: this.bgtForm.value.taxName,
                    subTotal: this.bgtForm.value.subTotal,
                    taxAmount: this.bgtForm.value.taxAmount,
                    totalAmount: this.bgtForm.value.totalAmount,
                };
                this.dataSource.data.push(newRecord);
                this.dataSource.data = this.dataSource.data.slice();
                this.resetBgtForm();
                this.calculateTotals();
            }
        }
    }
    collectErrors(control, path = "") {
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormGroup) {
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
    addImportsToArray() { }
    clearImports() { }
    //***********************************************************************************************************************************8 */
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    generateDisabledRequisitionForm() {
        this.bgtForm = this.fb.group({
            // category: [{ value: "", disabled: true }, [Validators.required]],
            itemRequested: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            // costCenterCode: [{ value: "", disabled: true }, [Validators.required]],
            // expenseCode: [{ value: "", disabled: true }, [Validators.required]],
            // accountNumber: [{ value: "", disabled: true }, [Validators.required]],
            itemCode: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            itemDescription: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            unitOfMeasure: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            quantity: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            unitPrice: [
                { value: "", disabled: true },
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.max(1000000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                ],
            ],
            needByDate: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            taxRate: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            taxName: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            subTotal: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            taxAmount: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            totalAmount: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
        });
    }
    generateRequisitionForm() {
        var _a;
        this.bgtForm = this.fb.group({
            itemRequested: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            // costCenterCode: [this.currentUser.costCenterCode, [Validators.required]],
            // expenseCode: ["", [Validators.required]],
            // accountNumber: ["", [Validators.required]],
            itemCode: [""],
            itemDescription: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.maxLength(300)]],
            unitOfMeasure: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            quantity: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.min(0.01),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.pattern("^[0-9]+(\\.[0-9]{1,2})?$"),
                ],
            ],
            unitPrice: [
                0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.max(1000000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                ],
            ],
            negotiatedPrice: [
                0,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.max(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
            ],
            finalPrice: [
                0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.max(1000000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                ],
            ],
            needByDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, this.dateValidator]],
            taxRate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            taxName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            subTotal: [""],
            taxAmount: [""],
            totalAmount: [""],
            // allowOverride: [""],
            // budgetFlag: [""],
        });
        (_a = this.bgtForm.get("unitPrice")) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((newValue) => {
            var _a, _b;
            (_a = this.bgtForm.get("negotiatedPrice")) === null || _a === void 0 ? void 0 : _a.setValue(newValue);
            (_b = this.bgtForm.get("finalPrice")) === null || _b === void 0 ? void 0 : _b.setValue(newValue);
        });
    }
    // {
    //   "allowOverride": "string",
    //   "amount": 0,
    //   "budgetFlag": "string",
    //   "costCenterCode": "string",
    //   "expenseCode": "string"
    // }
    dateValidator(control) {
        const selectedDate = control.value;
        const today = new Date();
        if (selectedDate < today) {
            return { pastDate: true };
        }
        return null;
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
                negotiatedPrice: this.bgtForm.value.negotiatedPrice,
                finalPrice: this.bgtForm.value.finalPrice,
                needByDate: this.bgtForm.value.needByDate,
                taxRate: this.bgtForm.value.taxRate,
                taxName: this.bgtForm.value.taxName,
                // expenseCode: this.bgtForm.value.expenseCode,
                // costCenterCode: this.bgtForm.value.costCenterCode,
                // accountNumber: this.bgtForm.value.accountNumber,
                subTotal: this.bgtForm.value.subTotal,
                taxAmount: this.bgtForm.value.taxAmount,
                totalAmount: this.bgtForm.value.totalAmount,
            };
            this.dataSource.data.push(newRecord);
            this.dataSource.data = this.dataSource.data.slice();
            this.resetBgtForm();
            this.setDefaultValues();
            // this.mngForm.patchValue({
            //   purchaseRequisitionItems: this.dataSource.data,
            // });
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
    updateRequisitionDetails() {
        if (this.bgtForm.valid) {
            this.calculateTax();
            console.log("this.bgtForm: ", this.bgtForm.value);
            const updatedRecord = {
                // category: this.bgtForm.value.category,
                itemRequested: this.bgtForm.value.itemRequested,
                itemCode: this.bgtForm.value.itemCode,
                itemDescription: this.bgtForm.value.itemDescription,
                unitOfMeasure: this.bgtForm.value.unitOfMeasure,
                quantity: this.bgtForm.value.quantity,
                unitPrice: this.bgtForm.value.unitPrice,
                needByDate: this.bgtForm.value.needByDate,
                taxRate: this.bgtForm.value.taxRate,
                taxName: this.bgtForm.value.taxName,
                // expenseCode: this.bgtForm.value.expenseCode,
                // costCenterCode: this.bgtForm.value.costCenterCode,
                // accountNumber: this.bgtForm.value.accountNumber,
                subTotal: this.bgtForm.value.subTotal,
                taxAmount: this.bgtForm.value.taxAmount,
                totalAmount: this.bgtForm.value.totalAmount,
            };
            this.dataSource.data[this.selectedRowIndex] = updatedRecord;
            this.dataSource.data = this.dataSource.data.slice();
            this.resetBgtForm();
            this.editButton = false;
            this.addButton = true;
            this.selectedRowIndex = -1; // Reset the selected row index
            this.calculateTotals();
        }
    }
    onEditRequisitionDetails(row) {
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
            negotiatedPrice: row.negotiatedPrice,
            finalPrice: row.finalPrice,
            needByDate: row.needByDate,
            taxRate: row.taxRate,
            taxName: row.taxName,
            // expenseCode: row.expenseCode,
            // costCenterCode: row.costCenterCode,
            // accountNumber: row.accountNumber,
            subTotal: row.subTotal,
            taxAmount: row.taxAmount,
            totalAmount: row.totalAmount,
        });
        this.enterManually = true;
    }
    onDeleteRequisitionDetails(index) {
        this.dataSource.data.splice(index, 1);
        this.dataSource.data = this.dataSource.data.slice();
        this.calculateTotals();
    }
    clearForm() {
        this.resetBgtForm();
        this.editButton = false;
        this.addButton = true;
        this.selectedRowIndex = -1; // Reset the selected row index
    }
    resetBgtForm() {
        this.bgtForm.reset();
        this.showItemForm = false;
    }
    calculateTax() {
        console.log("quantity: ", Number(this.bgtForm.value.quantity));
        console.log("finalPrice: ", Number(this.bgtForm.value.finalPrice));
        console.log("taxRate: ", Number(this.bgtForm.value.taxRate));
        const taxDetails = this.calculationService.calculateTax(Number(this.bgtForm.value.quantity), Number(this.bgtForm.value.finalPrice), Number(this.bgtForm.value.taxRate));
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
        this.mngForm.patchValue({
            number: this.totals.number,
            totalTax: this.totals.totalTax,
            subTotalAmount: this.totals.subTotalAmount,
            totalAmount: this.totals.totalAmount,
            purchaseRequisitionItems: this.totals.purchaseRequisitionItems.slice(),
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
            file: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            fileType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            fileName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
        });
        //this.fileInputs.push(row);
        this.rows.push(row);
        this.attachementsDataSource.next(this.rows.controls);
    }
    updateView() {
        this.attachementsDataSource.next(this.rows.controls);
        this.mngForm.patchValue({
            purchaseRequisitionAttachments: this.documentsForm.value.filedetails,
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
    currenciesLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "View Currency",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_maintained_currencies_look_up_maintained_currencies_look_up_component__WEBPACK_IMPORTED_MODULE_10__.MaintainedCurrenciesLookUpComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            res.data.forEach((element) => {
                this.mngForm.patchValue({
                    currency: element.currencyCode,
                });
            });
        });
        // const dialogConfig = new MatDialogConfig();
        // dialogConfig.disableClose = false;
        // dialogConfig.autoFocus = true;
        // dialogConfig.width = "700px";
        // dialogConfig.data = {
        //   action: "view currencies",
        //   selected: this.selectedCurrencies,
        // };
        // const dialogRef = this.dialog.open(CurrencyLookupComponent, dialogConfig);
        // dialogRef.afterClosed().subscribe((result) => {
        //   if (result && result.data.length != 0) {
        //     console.log("result: ", result.data);
        //     this.mngForm.patchValue({
        //       currency: result.data[0].currencySymbol,
        //     });
        //   }
        // });
    }
    suppliersLookup() {
        if (this.mngForm.value.purchaseOrderType === "CUSTOM") {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.width = "800px";
            dialogConfig.data = {
                action: "single supplier",
                selected: this.selectedSuppliers,
            };
            const dialogRef = this.dialog.open(_parameters_pages_lookups_suppliers_lookup_suppliers_lookup_component__WEBPACK_IMPORTED_MODULE_1__.SuppliersLookupComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                if (result && result.data.length != 0) {
                    console.log("result: ", result.data);
                    this.supplierIsSelected = true;
                    this.mngForm.patchValue({
                        supplierCode: result.data[0].supplierCode,
                        supplierName: result.data[0].companyName,
                    });
                }
            });
        }
        else {
            this.snackbar.showNotification("snackbar-danger", "Change Purchase order type to select supplier!");
        }
    }
    taxesLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "single tax",
            selected: this.selectedTaxes,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_tax_lookup_tax_lookup_component__WEBPACK_IMPORTED_MODULE_7__.TaxLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            if (result && result.data.length != 0) {
                console.log("result: ", result.data);
                this.supplierIsSelected = true;
                this.bgtForm.patchValue({
                    taxRate: result.data[0].taxRate,
                    taxName: result.data[0].taxName,
                });
            }
        });
    }
    lookUpToPurchaseOrderTypes() {
        if (this.mngForm.value.purchaseOrderType === "RFQ") {
            this.lookUpToApprovedRfqs();
        }
        else if (this.mngForm.value.purchaseOrderType === "RFP") {
            this.lookUpToApprovedRfps();
        }
        else if (this.mngForm.value.purchaseOrderType === "CUSTOM") {
            this.showItemForm = true;
            this.enterManually = true;
        }
        else {
            this.snackbar.showNotification("snackbar-danger", "Kindly select a valid purchase order type!");
        }
    }
    lookUpToApprovedRfqs() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "900px";
        dialogConfig.data = {
            action: "completed rfq",
            selected: this.selectedRfq,
            type: "COMPLETED",
        };
        const dialogRef = this.dialog.open(_parameters_pages_lookups_rfqs_lookup_rfqs_lookup_component__WEBPACK_IMPORTED_MODULE_2__.RfqsLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            if (result && result.data.length != 0) {
                console.log("result: ", result.data);
                const newArray = result.data[0].selectedrfqitems.map((element) => {
                    return {
                        itemRequested: element.itemName,
                        itemCode: element.itemCode,
                        // costCenterCode: element.costcentercode,
                        // expenseCode: element.expenseCode,
                        quantity: element.quantity,
                        needByDate: element.needByDate,
                        unitOfMeasure: element.unitOfMeasure,
                        unitPrice: element.finalPrice,
                        taxRate: element.taxRate,
                        taxName: element.taxName,
                        subTotal: element.subTotal,
                        taxAmount: element.taxAmount,
                        totalAmount: element.totalAmount,
                    };
                });
                console.log("newArray: ", newArray);
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableDataSource(newArray);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this.supplierIsSelected = true;
                this.mngForm.patchValue({
                    supplierCode: result.data[0].supplierCode,
                    supplierName: result.data[0].supplierName,
                    purchaseRequisitionItems: newArray
                });
                if (newArray) {
                    this.isLoading = false;
                }
                this.calculateTotals();
            }
        });
    }
    lookUpToApprovedRfps() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "900px";
        dialogConfig.data = {
            action: "completed rfp",
            selected: this.selectedRfp,
            type: "COMPLETED",
        };
        const dialogRef = this.dialog.open(_parameters_pages_lookups_rfps_lookup_rfps_lookup_component__WEBPACK_IMPORTED_MODULE_3__.RfpsLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            if (result && result.data.length != 0) {
                console.log("result: ", result.data);
                const newArray = result.data[0].selectedrfpitems.map((element) => {
                    return {
                        itemRequested: element.itemName,
                        itemCode: element.itemCode,
                        // costCenterCode: element.costcentercode,
                        // expenseCode: element.expenseCode,
                        quantity: element.quantity,
                        needByDate: element.needByDate,
                        unitOfMeasure: element.unitOfMeasure,
                        unitPrice: element.finalPrice,
                        taxRate: element.taxRate,
                        taxName: element.taxName,
                        subTotal: element.subTotal,
                        taxAmount: element.taxAmount,
                        totalAmount: element.totalAmount,
                    };
                });
                console.log("newArray: ", newArray);
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableDataSource(newArray);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this.supplierIsSelected = true;
                this.mngForm.patchValue({
                    supplierCode: result.data[0].supplierCode,
                    supplierName: result.data[0].supplierName,
                    purchaseRequisitionItems: newArray
                });
                if (newArray) {
                    this.isLoading = false;
                }
                this.calculateTotals();
            }
        });
    }
    catalogueLookup() {
        if (this.mngForm.value.purchaseOrderCategory === "Stock") {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.disableClose = true;
            dialogConfig.width = "880px";
            dialogConfig.data = {
                action: "single item",
                selected: this.selectedItem,
            };
            const dialogRef = this.dialog.open(src_app_erp_inventory_data_lookups_catalogue_lookup_catalogue_lookup_component__WEBPACK_IMPORTED_MODULE_4__.CatalogueLookupComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                console.log("Result:", result);
                if (result && result.data && result.data.length > 0) {
                    const firstItem = result.data[0];
                    console.log("Name:", firstItem.name);
                    console.log("Unit:", firstItem.unit);
                    console.log("Quantity:", firstItem.quantity);
                    this.bgtForm.patchValue({
                        itemCode: firstItem.itemCode,
                        itemRequested: firstItem.name,
                        unitOfMeasure: firstItem.unit,
                        quantity: firstItem.quantity,
                        expenseCode: firstItem.expenseCode,
                        itemDescription: firstItem.description,
                    });
                }
            });
        }
        else if (this.mngForm.value.purchaseOrderCategory === "FixedAsset") {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.disableClose = true;
            dialogConfig.width = "880px";
            dialogConfig.data = {
                action: "single item",
                selected: this.selectedItem,
            };
            const dialogRef = this.dialog.open(src_app_erp_fixedassets_data_lookups_asset_catalog_lookup_asset_catalog_lookup_component__WEBPACK_IMPORTED_MODULE_11__.AssetCatalogLookupComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                console.log("Result:", result);
                if (result && result.data && result.data.length > 0) {
                    const firstItem = result.data[0];
                    console.log("Name:", firstItem);
                    this.bgtForm.patchValue({
                        itemCode: firstItem.itemCode,
                        itemRequested: firstItem.name,
                        unitOfMeasure: firstItem.unit,
                        quantity: firstItem.quantity,
                        itemDescription: firstItem.description,
                        // expenseCode: firstItem.expenseCode
                    });
                }
            });
        }
        else {
            this.snackbar.showNotification("snackbar-danger", "Catalogue can only be used for Stock and Fixed Asset Items!");
        }
    }
    expenseLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "Single Expense",
            selected: this.selectedExpense,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_expense_lookup_expense_lookup_component__WEBPACK_IMPORTED_MODULE_6__.ExpenseLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("lookupresonse: ", result.data);
            this.mngForm.patchValue({
                expenseCode: result.data[0].expenseCode,
            });
            if (this.mngForm.value.costcentercode &&
                this.mngForm.value.purchaseOrderCategory !== "Stock") {
                this.getAccountNumberByExpAndCostCenter();
            }
        });
    }
    costCenterLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "Single CostCenter",
            selected: this.selectedCostCenter,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_9__.CcentreLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("lookupresonse: ", result.data);
            this.mngForm.patchValue({
                costcentercode: result.data[0].costCenterCode,
            });
            if (this.mngForm.value.expenseCode &&
                this.mngForm.value.purchaseOrderCategory !== "Stock") {
                this.getAccountNumberByExpAndCostCenter();
            }
        });
    }
    expenseCostCentreLookUp() {
        console.log("expenseGlCode ", this.expenseGlCode);
        if (this.expenseGlCode !== null &&
            this.expenseGlCode !== "" &&
            this.expenseGlCode !== undefined) {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.width = "800px";
            dialogConfig.data = {
                action: "View Cost Centres",
                selected: this.selectedCostCentres,
                expenseGlCode: this.expenseGlCode,
            };
            const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_exp_c_centre_lookup_exp_c_centre_lookup_component__WEBPACK_IMPORTED_MODULE_5__.ExpCCentreLookupComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                this.mngForm.patchValue({
                    costcentercode: result.data[0].costCenterCode,
                });
            });
        }
        else {
            this.snackbar.showNotification("snackbar-danger", "Please select expense!");
        }
    }
    glsLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "700px";
        dialogConfig.data = {
            action: "Single GL Account",
            selected: this.glSelectedItem,
            type: "Expense",
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_gls_lookup_gls_lookup_component__WEBPACK_IMPORTED_MODULE_8__.GlsLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            result.data.forEach((element) => {
                this.mngForm.patchValue({
                    accountNumber: element.accountID,
                });
            });
        });
    }
    //********************************************** */
    getAccountNumberByAccountName() {
        let glName = "Inventory Account";
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpParams().set("description", glName);
        this.accountService
            .getGLAccountByGlName(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("resres:: ", res);
                if (res.entity) {
                    this.mngForm.patchValue({
                        accountNumber: res.entity.accountid,
                    });
                    this.snackbar.showNotification("snackbar-success", res.message);
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
            rxjs__WEBPACK_IMPORTED_MODULE_31__.Subscription;
    }
    //        accountNumber: result.data[0].expenseGlAccount,
    getAccountNumberByExpAndCostCenter() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpParams()
            .set("costCenterCode", this.mngForm.value.costcentercode)
            .set("expenseCode", this.mngForm.value.expenseCode);
        console.log("params:: ", params);
        this.accountService
            .getGLAccountByExpAndCostCenter(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("resres:: ", res);
                if (res.entity) {
                    this.mngForm.patchValue({
                        accountNumber: res.entity.glaccount,
                    });
                    this.snackbar.showNotification("snackbar-success", res.message);
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
            rxjs__WEBPACK_IMPORTED_MODULE_31__.Subscription;
    }
    onSubmit() {
        this.mngForm.patchValue({
            purchaseRequisitionAttachments: this.documentsForm.value.filedetails,
        });
        console.log("this.mngForm.value: ", this.mngForm.value);
        this.isLoading = true;
        if (this.mngForm.value.purchaseRequisitionItems &&
            this.mngForm.value.purchaseRequisitionItems.length > 0) {
            if (this.pageFunction == "Add") {
                this.requisitionService
                    .addRequisitions(this.mngForm.value)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        if (res.statusCode == 201) {
                            this.snackbar.showNotification("snackbar-success", res.message);
                            this.router.navigate([
                                "/erp-procurement/requisitions/all-requisitions",
                            ]);
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
                    rxjs__WEBPACK_IMPORTED_MODULE_31__.Subscription;
            }
            else if (this.pageFunction == "Update") {
                this.requisitionService
                    .updateRequisitions(this.mngForm.value)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        console.log("res: ", res);
                        if (res.statusCode == 200) {
                            this.snackbar.showNotification("snackbar-success", res.message);
                            this.router.navigate([
                                "/erp-procurement/requisitions/all-requisitions",
                            ]);
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
                    rxjs__WEBPACK_IMPORTED_MODULE_31__.Subscription;
            }
        }
        else {
            this.snackbar.showNotification("snackbar-danger", "Requisition Items cannot be null!!");
        }
    }
    cancel() {
        this.router.navigate(["/erp-procurement/requisitions/all-requisitions"]);
    }
    onValidate(userType) {
        let privilege = "";
        switch (userType) {
            case "HOD":
                privilege = "HOD Requisition Validation";
                break;
            case "Finance":
                privilege = "Finance Requisition Validation";
                break;
            case "Procurement":
                privilege = "Procurement Requisition Validation";
                break;
            default:
                return;
        }
        this.hasAccess = this.accessControlService.hasPrivilege("ProcurementModule", [privilege]);
        if (this.hasAccess) {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.width = "650px";
            dialogConfig.data = {
                data: this.formData,
                userType: userType,
            };
            const dialogRef = this.dialog.open(_dialogs_validate_requisition_validate_requisition_component__WEBPACK_IMPORTED_MODULE_0__.ValidateRequisitionComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                this.router.navigate([
                    "/erp-procurement/requisitions/all-requisitions",
                ]);
            });
        }
    }
}
ManageRequisitionComponent.ɵfac = function ManageRequisitionComponent_Factory(t) { return new (t || ManageRequisitionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_12__.FilesService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_13__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_requisition_service__WEBPACK_IMPORTED_MODULE_14__.RequisitionService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_15__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_32__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_32__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_16__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_procurement_calculations_service__WEBPACK_IMPORTED_MODULE_17__.CalculationService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_erp_budget_data_services_budget_service__WEBPACK_IMPORTED_MODULE_18__.BudgetsService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_erp_finance_data_services_gl_accounts_service__WEBPACK_IMPORTED_MODULE_19__.GlAccountsService)); };
ManageRequisitionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({ type: ManageRequisitionComponent, selectors: [["app-manage-requisition"]], viewQuery: function ManageRequisitionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_34__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 9, vars: 6, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "body", 4, "ngIf"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "body"], ["class", "row", 4, "ngIf"], [1, "header"], [1, "row"], [1, "mx-4", 3, "formGroup"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width", "mb-0"], ["formControlName", "purchaseOrderType", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "purchaseOrderCategory", 3, "selectionChange"], ["formControlName", "type"], ["matInput", "", "formControlName", "organization", "required", ""], ["matInput", "", "formControlName", "operatingUnit", "required", ""], ["matInput", "", "formControlName", "supplierName", "required", "", 3, "readonly"], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "supplierCode", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "currency", "required", ""], ["matInput", "", "formControlName", "costcentercode"], ["matInput", "", "formControlName", "expenseCode"], ["matInput", "", "formControlName", "accountNumber"], ["matInput", "", "formControlName", "location", "required", ""], ["matInput", "", "formControlName", "requestedBy", "required", ""], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "description", "required", ""], ["mat-tab-label", ""], [1, "mt-3"], ["class", "row mx-2", 4, "ngIf"], [1, "mx-4", "my-4"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-2", 4, "matHeaderCellDef"], ["class", "psl-3 tbl-col-width-per-2", 4, "matCellDef"], ["matColumnDef", "type"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-24", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-24", 4, "matCellDef"], ["matColumnDef", "costCenterCode"], ["matColumnDef", "expenseCode"], ["matColumnDef", "accountNumber"], ["matColumnDef", "itemRequested"], ["matColumnDef", "unitOfMeasure"], ["matColumnDef", "quantity"], ["matColumnDef", "unitPrice"], ["matColumnDef", "needByDate"], ["matColumnDef", "taxName"], ["matColumnDef", "taxRate"], ["matColumnDef", "subTotal"], ["matColumnDef", "taxAmount"], ["matColumnDef", "totalAmount"], ["matColumnDef", "budgetFlag"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "allowOverride"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], [1, "col-md-12"], [1, "float-end", "m-t-30", "text-end"], [3, "formGroup"], [2, "margin", "20px"], [1, "table-responsive"], ["matTableExporter", "", "formArrayName", "filedetails", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-6", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-6", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "fileName"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-50 fileName-cell", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-50 fileName-cell", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "fileType"], ["matColumnDef", "selectFile"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-50 selectfile-cell", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-50 selectfile-cell", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "download"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matCellDef"], ["matColumnDef", "action"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [1, "row", "m-t-25"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["align", "end", 1, "example-button-row"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "hidden", "click"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "bg-color"], [1, "chat"], [1, "chat-header", "clearfix"], [1, "col-6"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages", "mt-2"], [1, "badge", "badge-hod"], [1, "badge", "badge-hod-approved"], [1, "col-12"], [1, "chat-about", "mt-2"], [1, "chat-with", "remarks"], [1, "remarks-content", "mx-2"], [1, "badge", "badge-finance"], [1, "badge", "badge-finance-approved"], [1, "badge", "badge-procurement"], [1, "badge", "badge-procurement-approved"], [3, "value"], ["class", "mx-4", 3, "formGroup", 4, "ngIf"], ["matInput", "", "formControlName", "itemRequested", 3, "readOnly"], ["matInput", "", "formControlName", "unitOfMeasure", 3, "readOnly"], ["matInput", "", "formControlName", "quantity"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "unitPrice", "mask", "separator", "thousandSeparator", ","], ["matInput", "", "formControlName", "needByDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "taxName"], ["matInput", "", "formControlName", "taxRate"], ["matInput", "", "formControlName", "itemDescription"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1", "float-left"], [1, "float-right"], ["class", "btn-space", "mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], [1, "row", "mx-2"], [2, "display", "flex", "flex-wrap", "wrap", "margin-right", "10px", "margin-bottom", "10px"], ["aria-label", "Fish selection"], ["color", "accent", "selected", "", 4, "ngFor", "ngForOf"], [1, "table"], [4, "ngFor", "ngForOf"], ["color", "accent", "selected", ""], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-2"], [1, "psl-3", "tbl-col-width-per-2"], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-24"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-24"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "disabled", "click"], [3, "icon"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-6"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-6", 3, "formGroupName"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "fileName-cell"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "fileName-cell", 3, "formGroupName"], ["appearance", "fill", 1, "example-full-width", "mt-2", "mr-5"], ["matInput", "", "type", "text", "formControlName", "fileName", "placeholder", "fileName", "maxlength", "50"], ["matInput", "", "type", "text", "formControlName", "fileType", "placeholder", "fileType", "maxlength", "50"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "selectfile-cell"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "selectfile-cell", 3, "formGroupName"], ["type", "file", 3, "disabled", "multiple", "change"], ["file", ""], [1, "column-nowrap", "psl-3", "tbl-col-width-per-30"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["aria-label", "Download"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matRipple", ""], ["colspan", "4"], ["class", "btn-space", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "click"]], template: function ManageRequisitionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, ManageRequisitionComponent_div_7_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, ManageRequisitionComponent_div_8_Template, 295, 59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("title", "Manage Purchase Orders")("items", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](5, _c2))("active_item", "Manage Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.showForm);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_38__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_40__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.RequiredValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_41__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__.MatSuffix, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__.MatTabLabel, ngx_mask__WEBPACK_IMPORTED_MODULE_43__.MaskDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__.MatDatepicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_45__.MatButton, _angular_material_chips__WEBPACK_IMPORTED_MODULE_46__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_46__.MatChip, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_48__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_21__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_49__.MatProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.MaxLengthValidator, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_35__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_35__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_35__.AsyncPipe], styles: [".error-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n}\n\n.error-item[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 10px;\n  border-radius: 20px;\n  padding: 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1yZXF1aXNpdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBREYiLCJmaWxlIjoibWFuYWdlLXJlcXVpc2l0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZXJyb3ItbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmVycm9yLWl0ZW0ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAvLyBCYWRnZSBDb2xvcnNcclxuLy8gJGJhZGdlLWNvbG9yLWhvZDogIzAwN2JmZjsgLy8gQmx1ZSBmb3IgSE9EXHJcbi8vICRiYWRnZS1jb2xvci1ob2QtYXBwcm92ZWQ6ICMyOGE3NDU7IC8vIEdyZWVuIGZvciBIT0QgQXBwcm92ZWRcclxuLy8gJGJhZGdlLWNvbG9yLWZpbmFuY2U6ICNlODFjNjI7IC8vIFBpbmsgZm9yIEZpbmFuY2VcclxuLy8gJGJhZGdlLWNvbG9yLWZpbmFuY2UtYXBwcm92ZWQ6ICMyOGE3NDU7IC8vIEdyZWVuIGZvciBGaW5hbmNlIEFwcHJvdmVkXHJcbi8vICRiYWRnZS1jb2xvci1wcm9jdXJlbWVudDogI2ZmYzEwNzsgLy8gWWVsbG93IGZvciBQcm9jdXJlbWVudFxyXG4vLyAkYmFkZ2UtY29sb3ItcHJvY3VyZW1lbnQtYXBwcm92ZWQ6ICMyOGE3NDU7IC8vIEdyZWVuIGZvciBQcm9jdXJlbWVudCBBcHByb3ZlZFxyXG5cclxuLy8gLy8gUmVtYXJrIFRleHQgQ29sb3JzXHJcbi8vICRyZW1hcmstdGV4dC1jb2xvcjogIzc3NzsgLy8gR3JheSBmb3IgcmVtYXJrIHRleHRcclxuXHJcbi8vIC8vIERlZmluZSBzdHlsZXMgZm9yIHRoZSBjaGF0IGhlYWRlciBzZWN0aW9uXHJcbi8vIC5jb2wteHMtMTIuY29sLXNtLTEyLmNvbC1tZC0xMi5jb2wtbGctMTIge1xyXG4vLyAgIC5iZy1jb2xvciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4vLyAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbi8vICAgICAuY2hhdC1oZWFkZXIge1xyXG4vLyAgICAgICAucm93IHtcclxuLy8gICAgICAgICAuY29sLTQge1xyXG4vLyAgICAgICAgICAgLmNoYXQtYWJvdXQge1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4vLyAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4vLyAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuXHJcbi8vICAgICAgICAgICAgIC5jaGF0LXdpdGgge1xyXG4vLyAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuLy8gICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIC5jaGF0LW51bS1tZXNzYWdlcyB7XHJcbi8vICAgICAgICAgICAgICAgLmJhZGdlIHtcclxuLy8gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjsgLy8gV2hpdGUgdGV4dCBmb3IgYmV0dGVyIHZpc2liaWxpdHlcclxuLy8gICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgIC8vIERlZmluZSBiYWRnZSBjb2xvcnMgYW5kIGNsYXNzIG5hbWVzXHJcbi8vICAgICAgICAgICAgICAgLmJhZGdlLWhvZCB7XHJcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFkZ2UtY29sb3ItaG9kOyAvLyBCbHVlIGZvciBIT0RcclxuLy8gICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgIC5iYWRnZS1ob2QtYXBwcm92ZWQge1xyXG4vLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhZGdlLWNvbG9yLWhvZC1hcHByb3ZlZDsgLy8gR3JlZW4gZm9yIEhPRCBBcHByb3ZlZFxyXG4vLyAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgLmJhZGdlLWZpbmFuY2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhZGdlLWNvbG9yLWZpbmFuY2U7IC8vIFBpbmsgZm9yIEZpbmFuY2VcclxuLy8gICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgIC5iYWRnZS1maW5hbmNlLWFwcHJvdmVkIHtcclxuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWRnZS1jb2xvci1maW5hbmNlLWFwcHJvdmVkOyAvLyBHcmVlbiBmb3IgRmluYW5jZSBBcHByb3ZlZFxyXG4vLyAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgLmJhZGdlLXByb2N1cmVtZW50IHtcclxuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWRnZS1jb2xvci1wcm9jdXJlbWVudDsgLy8gWWVsbG93IGZvciBQcm9jdXJlbWVudFxyXG4vLyAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgLmJhZGdlLXByb2N1cmVtZW50LWFwcHJvdmVkIHtcclxuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWRnZS1jb2xvci1wcm9jdXJlbWVudC1hcHByb3ZlZDsgLy8gR3JlZW4gZm9yIFByb2N1cmVtZW50IEFwcHJvdmVkXHJcbi8vICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAucmVtYXJrcyB7XHJcbi8vICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbi8vICAgICAgICAgICAgICAgc3Ryb25nIHtcclxuLy8gICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbi8vICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAucmVtYXJrcy1jb250ZW50IHtcclxuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVtYXJrLXRleHQtY29sb3I7IC8vIEdyYXkgdGV4dCBjb2xvciBmb3IgcmVtYXJrc1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4OyAvLyBBZGQgc29tZSBzcGFjaW5nXHJcbi8vICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAmOmhvdmVyIHtcclxuLy8gICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 92841:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/requisition/pages/purchase-order-acknowledgement/purchase-order-acknowledgement.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderAcknowledgementComponent": () => (/* binding */ PurchaseOrderAcknowledgementComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_finance_modules_finance_management_transactions_dialogs_accounting_journal_transactions_accounting_journal_transactions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/modules/finance-management/transactions/dialogs/accounting-journal-transactions/accounting-journal-transactions.component */ 46322);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_erp_procurement_data_services_requisition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-procurement/data/services/requisition.service */ 3207);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_procurement_data_services_delivery_note_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-procurement/data/services/delivery-note.service */ 50338);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/file-upload/file-upload.component */ 67082);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);








































function PurchaseOrderAcknowledgementComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "mat-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function PurchaseOrderAcknowledgementComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16)(1, "div", 5)(2, "div", 111)(3, "div", 112)(4, "div", 113)(5, "div", 16)(6, "div", 114)(7, "div", 16)(8, "div", 115)(9, "div", 116)(10, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "HOD Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 118)(13, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 115)(16, "div", 116)(17, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "HOD Approved By");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 118)(20, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 16)(23, "div", 34)(24, "div", 121)(25, "div", 122)(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "HOD Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 114)(31, "div", 16)(32, "div", 115)(33, "div", 116)(34, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Finance Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 118)(37, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 115)(40, "div", 116)(41, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "Finance Approved By");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 118)(44, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 16)(47, "div", 34)(48, "div", 121)(49, "div", 122)(50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "Finance Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 114)(55, "div", 16)(56, "div", 115)(57, "div", 116)(58, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, " Procurement Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 118)(61, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 115)(64, "div", 116)(65, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, " Procurement Approved By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 118)(68, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "div", 16)(71, "div", 34)(72, "div", 121)(73, "div", 122)(74, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "Procurement Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.purchaseOrder.hodApprovalStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.purchaseOrder.hodApprovedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.purchaseOrder.hodApprovalReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.purchaseOrder.financeApprovalStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.purchaseOrder.financeApprovedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.purchaseOrder.financeApprovalReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.purchaseOrder.procurementApprovalStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.purchaseOrder.procurementApprovedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.purchaseOrder.procurementApprovalReason);
} }
function PurchaseOrderAcknowledgementComponent_div_7_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 128)(1, "div", 129)(2, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 131)(5, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 134)(9, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Quantity Delivered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 131)(12, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 136)(16, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Quantity Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 131)(19, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 138)(23, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, " Quantity Remaining ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 131)(26, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 140)(30, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, " Quantity Canceled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 131)(33, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.purchaseOrderItem.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.purchaseOrderItem.quantityDelivered, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.purchaseOrderItem.quantityOpen, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.purchaseOrderItem.quantityRemaining, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.purchaseOrderItem.quantityCanceled, " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_85_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 142)(1, "mat-checkbox", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_85_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return $event ? ctx_r61.masterToggle() : null; })("change", function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_85_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r63.checkSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "tbl-col-width-per-7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r7.selection.hasValue() && ctx_r7.isAllSelected())("indeterminate", ctx_r7.selection.hasValue() && !ctx_r7.isAllSelected())("ngClass", "tbl-checkbox");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_86_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 142)(1, "mat-checkbox", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_86_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_86_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r67); const row_r64 = restoredCtx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return $event ? ctx_r66.selection.toggle(row_r64) : null; })("change", function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_86_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r68.checkSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r64 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "tbl-col-width-per-7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r8.selection.isSelected(row_r64))("ngClass", "tbl-checkbox")("aria-label", ctx_r8.checkboxLabel(row_r64));
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r69.itemCode, " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r70.itemRequested, " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r71.quantity, ".2-2"), " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " U.Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r72.unitPrice, ".2-2"), " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Total Amt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r73.totalAmount, ".2-2"), " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_row_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-header-row");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_row_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-row", 151);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("cursor", "pointer");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r21.input.value, "\" ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-spinner", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("diameter", 40);
} }
function PurchaseOrderAcknowledgementComponent_div_7_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 102)(1, "div", 16)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Receive Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Delivered By is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Delivered On is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", status_r95.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](status_r95.name);
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Status is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please enter a tax name! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please enter a tax rate! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please ensure the tax rate is a number with up to 2 decimal places! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please enter amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please ensure amount does not exceed 2 decimal values! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please ensure amount does not exceed 1 billion! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please enter amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please ensure amount does not exceed 2 decimal values! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please ensure amount does not exceed 1 billion! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please enter unit amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please ensure amount does not exceed 2 decimal values! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please ensure amount does not exceed 1 billion! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Quantity Delivered cannot be less than 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Quantity Canceled cannot be less than 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_button_80_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_form_108_button_80_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r96.updateItemDeliveryDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " + Update Receive Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r94.purchaseOrderForm.invalid);
} }
function PurchaseOrderAcknowledgementComponent_div_7_form_108_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 155)(1, "div", 16)(2, "div", 156)(3, "mat-form-field", 157)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Delivered By");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_7_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 156)(9, "mat-form-field", 157)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Delivered On");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "input", 159)(13, "mat-datepicker-toggle", 160)(14, "mat-datepicker", null, 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_16_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 156)(18, "mat-form-field", 157)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "mat-select", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function PurchaseOrderAcknowledgementComponent_div_7_form_108_Template_mat_select_selectionChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r98.getSelectedStatus($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_option_22_Template, 2, 2, "mat-option", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_23_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 156)(25, "mat-form-field", 157)(26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Tax Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_29_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 156)(31, "mat-form-field", 157)(32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Tax Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_35_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_36_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 156)(38, "mat-form-field", 157)(39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Tax Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "input", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_42_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_43_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_44_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 156)(46, "mat-form-field", 157)(47, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](49, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_50_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_51_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_52_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 156)(54, "mat-form-field", 157)(55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](57, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_58_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_59_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_60_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div", 156)(62, "mat-form-field", 157)(63, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Quantity Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](65, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](66, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_66_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 156)(68, "mat-form-field", 157)(69, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "Quantity Canceled");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](71, "input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, PurchaseOrderAcknowledgementComponent_div_7_form_108_mat_error_72_Template, 2, 0, "mat-error", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "div", 171)(74, "mat-form-field", 157)(75, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "Receiving Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](77, "textarea", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 173)(79, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](80, PurchaseOrderAcknowledgementComponent_div_7_form_108_button_80_Template, 2, 1, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_form_108_Template_button_click_81_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r99); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r100.clearForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](15);
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r24.purchaseOrderForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("deliveredBy").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matDatepicker", _r76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("for", _r76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("deliveredOn").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r24.statuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("status").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("taxName").hasError("required") && ctx_r24.purchaseOrderForm.get("taxName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("taxRate").hasError("required") && ctx_r24.purchaseOrderForm.get("taxRate").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("taxRate").hasError("pattern") && ctx_r24.purchaseOrderForm.get("taxRate").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("taxAmount").hasError("required") && ctx_r24.purchaseOrderForm.get("taxAmount").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("taxAmount").hasError("pattern") && ctx_r24.purchaseOrderForm.get("taxAmount").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("taxAmount").hasError("max") && ctx_r24.purchaseOrderForm.get("taxAmount").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("subTotal").hasError("required") && ctx_r24.purchaseOrderForm.get("subTotal").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("subTotal").hasError("pattern") && ctx_r24.purchaseOrderForm.get("subTotal").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("subTotal").hasError("max") && ctx_r24.purchaseOrderForm.get("subTotal").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("totalAmount").hasError("required") && ctx_r24.purchaseOrderForm.get("totalAmount").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("totalAmount").hasError("pattern") && ctx_r24.purchaseOrderForm.get("totalAmount").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("totalAmount").hasError("max") && ctx_r24.purchaseOrderForm.get("totalAmount").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("quantityDelivered").hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.purchaseOrderForm.get("quantityCanceled").hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.editButton);
} }
function PurchaseOrderAcknowledgementComponent_div_7_li_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "h2", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Accounting Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function PurchaseOrderAcknowledgementComponent_div_7_li_126_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 179)(2, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_li_126_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r101.secondCheckboxActive("Add"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function PurchaseOrderAcknowledgementComponent_div_7_li_127_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 181)(2, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_li_127_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r103.secondCheckboxActive("Update"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function PurchaseOrderAcknowledgementComponent_div_7_li_128_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 181)(2, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_li_128_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r105.secondCheckboxActive("View"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_133_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 142)(1, "mat-checkbox", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_133_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return $event ? ctx_r107.masterSecondTableToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "tbl-col-width-per-7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r32.secondTableSelection.hasValue() && ctx_r32.isAllSecondTableSelected())("indeterminate", ctx_r32.secondTableSelection.hasValue() && !ctx_r32.isAllSecondTableSelected())("ngClass", "tbl-checkbox");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_134_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 142)(1, "mat-checkbox", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_134_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_134_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r112); const row_r109 = restoredCtx.$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return $event ? ctx_r111.secondTableSelection.toggle(row_r109) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r109 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "tbl-col-width-per-7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r33.secondTableSelection.isSelected(row_r109))("ngClass", "tbl-checkbox")("aria-label", ctx_r33.checkboxSecondTableLabel(row_r109));
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", row_r113.prItemCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r113.prItemCode, " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Q.O ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r114.quantityOpen, ".2-2"), " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Q.D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r115.quantityDelivered, ".2-2"), " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Q.C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r116.quantityCanceled, ".2-2"), " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " TotalAmt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r117.totalAmount, ".2-2"), " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " TranCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r118.tranCode || "-", " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " TranStatus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_155_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r119.transactionStatus, " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_155_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r119.transactionStatus, " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_155_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " N.A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](1, 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_155_button_2_Template, 3, 1, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_155_button_3_Template, 3, 1, "button", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_155_ng_container_4_Template, 2, 0, "ng-container", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitch", row_r119.transactionStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "POSTED");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Tran Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r125.tranDate ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r125.tranDate, "short") : "N.A", " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_161_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r126.status, " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_161_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 ", row_r126.status, " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](1, 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_161_button_2_Template, 3, 1, "button", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_161_button_3_Template, 3, 1, "button", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitch", row_r126.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "RECEIVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_164_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 204)(1, "button", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_164_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_164_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r134); const row_r131 = restoredCtx.$implicit; const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r133.editItemDeliveryDetails(row_r131, "deliveryItem"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-feather-icons", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", "edit");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_header_row_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-header-row");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_row_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-row", 151);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("cursor", "pointer");
} }
function PurchaseOrderAcknowledgementComponent_div_7_mat_cell_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r56.input.value, "\" ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_div_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-spinner", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("diameter", 40);
} }
function PurchaseOrderAcknowledgementComponent_div_7_div_228_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_div_242_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PurchaseOrderAcknowledgementComponent_div_7_div_243_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 214)(1, "div", 13)(2, "div", 14)(3, "li", 215)(4, "span", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 218)(7, "h5", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 220)(12, "td")(13, "i", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_div_243_div_2_div_1_Template_i_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r141); const document_r139 = restoredCtx.$implicit; const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4); return ctx_r140.deleteDeliveryNoteDocument(document_r139.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_div_243_div_2_div_1_Template_i_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r141); const document_r139 = restoredCtx.$implicit; const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4); return ctx_r142.downloadDeliveryNoteDoc(document_r139.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const document_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", document_r139.filename, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" .", document_r139.filetype, " ");
} }
function PurchaseOrderAcknowledgementComponent_div_7_div_243_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PurchaseOrderAcknowledgementComponent_div_7_div_243_div_2_div_1_Template, 15, 2, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r136.documents);
} }
function PurchaseOrderAcknowledgementComponent_div_7_div_243_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 223)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "No files available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function PurchaseOrderAcknowledgementComponent_div_7_div_243_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 208)(1, "ul", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, PurchaseOrderAcknowledgementComponent_div_7_div_243_div_2_Template, 2, 1, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, PurchaseOrderAcknowledgementComponent_div_7_div_243_div_3_Template, 3, 0, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r60.documents.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r60.documents.length === 0);
} }
const _c0 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
function PurchaseOrderAcknowledgementComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, PurchaseOrderAcknowledgementComponent_div_7_div_2_Template, 78, 9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 16)(4, "div", 17)(5, "div", 18)(6, "div", 16)(7, "div", 19)(8, "div", 20)(9, "address")(10, "p", 21)(11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "PO Category :");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "p", 21)(15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "PO Number :");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "p")(20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "address")(26, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Organization Details:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](40, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "address")(43, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Vendor :");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "hr")(54, "address");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "div", 26)(56, "div", 14)(57, "mat-tab-group")(58, "mat-tab", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, PurchaseOrderAcknowledgementComponent_div_7_div_59_Template, 36, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 29)(61, "div", 30)(62, "div", 31)(63, "div", 32)(64, "div", 33)(65, "div", 34)(66, "ul", 35)(67, "li", 36)(68, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "P.O Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "li", 37)(71, "label", 38)(72, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function PurchaseOrderAcknowledgementComponent_div_7_Template_input_keyup_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r144); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r143.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "li")(77, "div", 42)(78, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_Template_button_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r144); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r145.checkboxActive(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "done ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "mat-table", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](84, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](85, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_85_Template, 2, 4, "mat-header-cell", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](86, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_86_Template, 2, 4, "mat-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](87, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](88, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_88_Template, 2, 0, "mat-header-cell", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](89, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_89_Template, 2, 1, "mat-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](90, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](91, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_91_Template, 2, 0, "mat-header-cell", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](92, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_92_Template, 2, 1, "mat-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](93, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](94, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_94_Template, 2, 0, "mat-header-cell", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](95, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_95_Template, 3, 4, "mat-cell", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](96, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](97, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_97_Template, 2, 0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](98, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_98_Template, 3, 4, "mat-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](99, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](100, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_100_Template, 2, 0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](101, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_101_Template, 3, 4, "mat-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](102, PurchaseOrderAcknowledgementComponent_div_7_mat_header_row_102_Template, 1, 0, "mat-header-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](103, PurchaseOrderAcknowledgementComponent_div_7_mat_row_103_Template, 1, 2, "mat-row", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](104, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_104_Template, 2, 1, "mat-cell", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](105, PurchaseOrderAcknowledgementComponent_div_7_div_105_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](106, "mat-paginator", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](107, PurchaseOrderAcknowledgementComponent_div_7_div_107_Template, 4, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](108, PurchaseOrderAcknowledgementComponent_div_7_form_108_Template, 83, 22, "form", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](109, "div", 30)(110, "div", 31)(111, "div", 32)(112, "div", 33)(113, "div", 34)(114, "ul", 35)(115, "li", 36)(116, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](117, "Received Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "li", 37)(119, "label", 38)(120, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](121, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function PurchaseOrderAcknowledgementComponent_div_7_Template_input_keyup_122_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r144); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r146.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](124, PurchaseOrderAcknowledgementComponent_div_7_li_124_Template, 3, 0, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](126, PurchaseOrderAcknowledgementComponent_div_7_li_126_Template, 5, 0, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](127, PurchaseOrderAcknowledgementComponent_div_7_li_127_Template, 5, 0, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](128, PurchaseOrderAcknowledgementComponent_div_7_li_128_Template, 5, 0, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "mat-table", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](132, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](133, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_133_Template, 2, 4, "mat-header-cell", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](134, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_134_Template, 2, 4, "mat-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](135, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](136, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_136_Template, 2, 0, "mat-header-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](137, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_137_Template, 2, 2, "mat-cell", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](138, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](139, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_139_Template, 2, 0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](140, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_140_Template, 3, 4, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](141, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](142, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_142_Template, 2, 0, "mat-header-cell", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](143, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_143_Template, 3, 4, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](144, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](145, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_145_Template, 2, 0, "mat-header-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](146, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_146_Template, 3, 4, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](147, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](148, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_148_Template, 2, 0, "mat-header-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](149, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_149_Template, 3, 4, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](150, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](151, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_151_Template, 2, 0, "mat-header-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](152, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_152_Template, 2, 1, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](153, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](154, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_154_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](155, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_155_Template, 5, 3, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](156, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](157, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_157_Template, 2, 0, "mat-header-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](158, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_158_Template, 3, 4, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](159, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](160, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_160_Template, 2, 0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](161, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_161_Template, 4, 3, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](162, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](163, PurchaseOrderAcknowledgementComponent_div_7_mat_header_cell_163_Template, 2, 0, "mat-header-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](164, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_164_Template, 3, 3, "mat-cell", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](165, PurchaseOrderAcknowledgementComponent_div_7_mat_header_row_165_Template, 1, 0, "mat-header-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](166, PurchaseOrderAcknowledgementComponent_div_7_mat_row_166_Template, 1, 2, "mat-row", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](167, PurchaseOrderAcknowledgementComponent_div_7_mat_cell_167_Template, 2, 1, "mat-cell", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](168, PurchaseOrderAcknowledgementComponent_div_7_div_168_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](169, "mat-paginator", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "div", 92)(171, "div", 93)(172, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_Template_button_click_172_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r144); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r147.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](173, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](174, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](175, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](176, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_Template_button_click_176_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r144); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r148.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](177, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](178, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](179, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](180, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](181, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](182, "div", 17)(183, "div", 16)(184, "div", 96)(185, "div", 97)(186, "h5")(187, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](188, "Original bill");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](189, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](190);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](191, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](193);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](194, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](195, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](196, "h5")(197, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](198, "Total :");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](199);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](200, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](201, "div", 96)(202, "div", 98)(203, "h5")(204, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](205, "Bill Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](206, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](207);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](208, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](209, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](210, "h5")(211, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](212, "Current Bill");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](213, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](214);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](215, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](216, "div", 99)(217, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](218, "mat-tab", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](219, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](220, "div", 101)(221, "div", 102)(222, "div", 16)(223, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](224, "Upload Delivery Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](225, "div", 103)(226, "div", 13)(227, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](228, PurchaseOrderAcknowledgementComponent_div_7_div_228_Template, 2, 0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](229, "div", 16)(230, "div", 105)(231, "app-file-upload", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PurchaseOrderAcknowledgementComponent_div_7_Template_app_file_upload_change_231_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r144); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r149.onSelectFile($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](232, "div", 107)(233, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PurchaseOrderAcknowledgementComponent_div_7_Template_button_click_233_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r144); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r150.onSubmitDeliveryNote("Add"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](234, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](235, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](236, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](237, "div", 102)(238, "div", 16)(239, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](240, "Uploaded Delivery Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](241, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](242, PurchaseOrderAcknowledgementComponent_div_7_div_242_Template, 2, 0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](243, PurchaseOrderAcknowledgementComponent_div_7_div_243_Template, 4, 2, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.purchaseOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.purchaseOrder.purchaseOrderCategory, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.purchaseOrder.purchaseRequisitionCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.purchaseOrder.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Department Code: ", ctx_r1.purchaseOrder.departmentcode, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Branch Code: ", ctx_r1.purchaseOrder.branchcode, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Cost Center Code: ", ctx_r1.purchaseOrder.costcentercode, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Member Code: ", ctx_r1.purchaseOrder.membercode, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Requested By: ", ctx_r1.purchaseOrder.requestedBy, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Requested On: ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](40, 50, ctx_r1.purchaseOrder.requestedOn, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Name: ", ctx_r1.purchaseOrder.supplierName, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Email: ", ctx_r1.purchaseOrder.supplierEmail, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Phone: ", ctx_r1.purchaseOrder.supplierPhone, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Code: ", ctx_r1.purchaseOrder.supplierCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.activateDeliveryRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !ctx_r1.allItemsSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("auth-spinner", ctx_r1.multimodifyloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.multimodifyloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx_r1.dataSourcePurchaseOrderItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedPurchaseOrderItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedPurchaseOrderItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](68, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.activateDeliveryRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.activateDeliveryRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.secondTableSelection.selected.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.secondTableSelection.selected.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.secondTableSelection.selected.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.secondTableSelection.selected.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx_r1.dataSourceDeliveryRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumnsDeliveryRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumnsDeliveryRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](69, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("auth-spinner", ctx_r1.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.posting)("hidden", ctx_r1.viewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Total amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](191, 53, ctx_r1.purchaseOrder.subTotalAmount, "KSH "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Total tax amt:", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](194, 56, ctx_r1.purchaseOrder.totalTax, "KSH "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](200, 59, ctx_r1.purchaseOrder.totalAmount, "KSH "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](208, 62, ctx_r1.billBalanceAmt, "KSH "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](215, 65, ctx_r1.totalDues, "KSH "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isUploadingFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r1.deliveryNoteModelPopulated);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isFetchingDocuments);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.isFetchingDocuments);
} }
const _c1 = function () { return ["Purchase Order"]; };
class PurchaseOrderAcknowledgementComponent {
    constructor(requisitionService, route, snackbar, fb, deliveryNoteService, filesService, router, dialog) {
        this.requisitionService = requisitionService;
        this.route = route;
        this.snackbar = snackbar;
        this.fb = fb;
        this.deliveryNoteService = deliveryNoteService;
        this.filesService = filesService;
        this.router = router;
        this.dialog = dialog;
        //***************************************************************************************************************************************** */
        // PurchaseOrderItems
        this.displayedPurchaseOrderItems = [
            "select",
            "itemCode",
            "itemRequested",
            "quantity",
            "unitPrice",
            "totalAmount",
            // "action",
        ];
        //***************************************************************************************************************************************** */
        // DeliveryRequest
        // "deliveredBy": "string",
        // "deliveredOn": "2023-08-11T09:34:53.191Z",
        // "prCode": "string",
        // "prItemCode": "string",
        // "quantityCanceled": 0,
        // "quantityDelivered": 0,
        // "quantityOpen": 0,
        // "receiptCode": "string",
        // "receivingComments": "string",
        // "status": "string"
        this.displayedColumnsDeliveryRequest = [
            "secondTableSelect",
            "prItemCode",
            "quantityOpen",
            "quantityDelivered",
            "quantityCanceled",
            "totalAmount",
            "tranCode",
            "transactionStatus",
            "tranDate",
            "status",
            "action",
        ];
        //   {
        //     "id": 1,
        //     "prItemCode": "PR#1699254458356",
        //     "grnCode": "#1",
        //     "prCode": "PR#10",
        //     "quantityDelivered": 4,
        //     "quantityCanceled": 0,
        //     "quantityOpen": 0,
        //     "accountNumber": "423432",
        //     "taxName": "VAT",
        //     "taxRate": 18,
        //     "subTotal": 2000,
        //     "taxAmount": 1200,
        //     "totalAmount": 3200,
        //     "status": "RECEIVED",
        //     "pushStatus": "PENDING",
        //     "costCenterCode": "1121",
        //     "expenseCode": "43245",
        //     "itemRequested": "Furniture",
        //     "itemDescription": "Furniture",
        //     "quantity": 2,
        //     "category": null,
        //     "type": "Goods",
        //     "unitOfMeasure": "Number",
        //     "unitPrice": 4000,
        //     "needByDate": "2023-11-29T21:00:00",
        //     "fundCheck": false,
        //     "quantityRemaining": -4,
        //     "deliveredBy": "Test",
        //     "deliveredOn": "2023-11-21T10:49:21",
        //     "receivedBy": "Superuser",
        //     "receivedOn": "2023-11-21T10:50:10",
        //     "receivedComments": "Test",
        //     "transactionStatus": "PENDING",
        //     "tranCode": null,
        //     "tranPostedOn": null
        // }
        //***************************************************************************************************************************************** */
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.hideApprovals = true;
        this.approvalVisible = false;
        this.disableActions = false;
        this.activateDeliveryRequest = false;
        this.statuses = [{ name: "RECEIVED" }, { name: "RETURNED" }];
        this.showPage = false;
        this.deliveryData = [];
        //****************************************************************************************************************** */
        this.editButton = false;
        this.addButton = true;
        this.selectedRowIndex = -1;
        this.totalDues = 0;
        this.billBalanceAmt = 0;
        //*********************************************************************************************************************
        //Item selection Logic
        //*********************************************************************************************************************
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__.SelectionModel(false, []);
        this.allItemsSelected = false;
        //********************************************************************************************************************** */
        //Second Select
        //********************************************************************************************************************** */
        // New selection for a different MatTable
        this.secondTableSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__.SelectionModel(false, []);
        this.secondSelectItemsSelected = false;
        this.transactionAction = "";
        // ****************************************************************************************************************************
        this.transactionType = "Receiving";
        //********************************************************************************************************************** */
        // Upload RFQ Ranking deliveryNote
        //********************************************************************************************************************** */
        this.documents = [];
        this.selectedFiles = [];
        this.isFileLoading = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(false);
        this.deliveryNoteModel = {
            file: "",
            filename: "",
            filetype: "",
            referenceCode: "",
        };
        this.deliveryNoteModelPopulated = false;
        this.isUploadingFile = false;
        this.isFetchingDocuments = false;
        //************************************************************************************************************************** */
        this.finalBody = [];
        this.posting = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (params.code) {
                const action = params.action;
                if (action === "Update") {
                    this.pageFunction = "Update";
                }
                else if (action === "View") {
                    this.pageFunction = "View";
                    this.disableActions = true;
                }
                else if (action === "Validate") {
                    this.pageFunction = "Validate";
                    this.disableActions = true;
                    this.approvalVisible = true;
                }
                this.purchaseOrderCode = params.code;
                this.initForm();
                console.log("ID:", this.purchaseOrderCode);
                console.log("Additional Data:", this.formData);
                this.getPurchaseOrderByCode();
            }
        });
    }
    initForm() {
        this.purchaseOrderForm = this.fb.group({
            id: [""],
            prItemId: [""],
            deliveredBy: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            deliveredOn: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            prCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            prItemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            quantityCanceled: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            quantityDelivered: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            quantityOpen: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            receivingComments: [""],
            status: ["RECEIVED", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            taxName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            taxRate: [
                0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.max(1000000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.min(0),
                ],
            ],
            taxAmount: [
                0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.max(1000000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.min(0),
                ],
            ],
            subTotal: [
                0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.max(1000000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.min(0),
                ],
            ],
            totalAmount: [
                0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.max(1000000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.min(0),
                ],
            ],
            accountNumber: [""],
            grnCode: [""],
            tranCode: [""],
            transactionStatus: [""],
            tranDate: [""],
        });
        this.purchaseOrderForm.get('quantityDelivered').valueChanges.subscribe(value => {
            this.calculateReceiveValues(value);
        });
    }
    calculateReceiveValues(value) {
        if (this.unitPrice) {
            const subTotal = this.calculateSubTotal();
            const taxAmount = this.calculateTaxAmount(subTotal);
            const totalAmount = subTotal + taxAmount;
            this.purchaseOrderForm.patchValue({
                subTotal: subTotal,
                taxAmount: taxAmount,
                totalAmount: totalAmount
            });
        }
    }
    calculateSubTotal() {
        const quantityDelivered = this.purchaseOrderForm.get('quantityDelivered').value;
        return this.unitPrice * quantityDelivered;
    }
    calculateTaxAmount(subTotal) {
        const taxRate = this.purchaseOrderForm.get('taxRate').value;
        return subTotal * (taxRate / 100);
    }
    //************************************************************************************************** */
    getSelectedStatus(selectedStatus) { }
    getPurchaseOrderByCode() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams().set("prCode", this.purchaseOrderCode);
        this.requisitionService
            .getRequisitionsByCode(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                if (res.entity) {
                    this.formData = res.entity;
                    this.purchaseOrder = this.formData;
                    // this.isLoading = false;
                    if (this.pageFunction === "Update") {
                        this.pageFunction = "Update";
                    }
                    else if (this.pageFunction === "View") {
                        this.pageFunction = "View";
                        this.disableActions = true;
                    }
                    else if (this.pageFunction === "Validate") {
                        this.pageFunction = "Validate";
                        this.disableActions = true;
                        this.approvalVisible = true;
                    }
                    // this.formData = JSON.parse(params.additionalData);
                    if (this.formData.purchaseRequisitionItems.length > 0) {
                        this.dataSourcePurchaseOrderItems = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(this.formData.purchaseRequisitionItems);
                        this.dataSourcePurchaseOrderItems.paginator =
                            this.paginatorPurchaseOrderItems;
                        this.dataSourcePurchaseOrderItems.sort =
                            this.sortPurchaseOrderItems;
                    }
                    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__.SelectionModel(false, []);
                    this.secondTableSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__.SelectionModel(false, []);
                    this.showPage = true;
                    console.log("ID:", this.purchaseOrderCode);
                    console.log("Additional Data:", this.formData);
                    this.getPage();
                    this.getDeliveryNoteDocs();
                    this.getDeliveryDetailsByPOCode();
                    console.log("this.formData :", this.formData);
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
            rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription;
    }
    getDeliveryDetailsByPOCode() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams().set("prCode", this.purchaseOrder.purchaseRequisitionCode);
        this.requisitionService
            .getReceivedPurchaseOrderItems(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res getDeliveryDetailsByPOCode :", res);
                if (res.entity) {
                    this.deliveryData = [];
                    if (res.entity && res.entity.length > 0) {
                        res.entity.forEach((element) => {
                            const updatedRecord = element;
                            this.pushFormDataInToDeliveryData(updatedRecord);
                        });
                        this.calculateBalances();
                        console.log("deliveryData:", this.deliveryData);
                    }
                }
                else {
                    // this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                // this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => { },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription;
    }
    getPage() { }
    updateItemDeliveryDetails() {
        if (this.purchaseOrderForm.valid) {
            console.log("this.purchaseOrderForm: ", this.purchaseOrderForm.value);
            const updatedRecord = {
                id: this.purchaseOrderForm.value.id,
                deliveredBy: this.purchaseOrderForm.value.deliveredBy,
                deliveredOn: this.purchaseOrderForm.value.deliveredOn,
                prCode: this.purchaseOrderForm.value.prCode,
                prItemId: this.purchaseOrderForm.value.prItemId,
                prItemCode: this.purchaseOrderForm.value.prItemCode,
                quantityCanceled: this.purchaseOrderForm.value.quantityCanceled,
                quantityDelivered: this.purchaseOrderForm.value.quantityDelivered,
                quantityOpen: this.purchaseOrderForm.value.quantityOpen,
                //receiptCode: this.purchaseOrderForm.value.receiptCode,
                receivingComments: this.purchaseOrderForm.value.receivingComments,
                status: this.purchaseOrderForm.value.status,
                taxName: this.purchaseOrderForm.value.taxName,
                taxRate: this.purchaseOrderForm.value.taxRate,
                taxAmount: this.purchaseOrderForm.value.taxAmount,
                subTotal: this.purchaseOrderForm.value.subTotal,
                totalAmount: this.purchaseOrderForm.value.totalAmount,
                accountNumber: this.purchaseOrderForm.value.accountNumber,
                tranCode: this.purchaseOrderForm.value.tranCode,
                transactionStatus: this.purchaseOrderForm.value.transactionStatus,
                tranDate: this.purchaseOrderForm.value.tranDate,
            };
            if (this.updateType === "poItem") {
                this.pushFormDataInToDeliveryData(updatedRecord);
            }
            if (this.updateType === "deliveryItem") {
                console.log("this.selectedRowIndex: ", this.selectedRowIndex);
                this.dataSourceDeliveryRequest.data[this.selectedRowIndex] =
                    updatedRecord;
            }
            this.dataSourceDeliveryRequest.data =
                this.dataSourceDeliveryRequest.data.slice();
            this.purchaseOrderForm.reset();
            this.editButton = false;
            this.addButton = true;
            this.selectedRowIndex = -1; // Reset the selected row index
            this.clearForm();
        }
    }
    clearForm() {
        this.calculateBalances();
        this.activateDeliveryRequest = false;
        this.selectedRows = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__.SelectionModel(false, []);
        this.allItemsSelected = false;
    }
    editItemDeliveryDetails(row, updateType) {
        this.purchaseOrderItem = row;
        this.updateType = updateType;
        this.editButton = true;
        this.addButton = false;
        console.log("this.selectedRowIndex: ", this.selectedRowIndex);
        if (updateType === "poItem") {
            this.selectedRowIndex =
                this.dataSourcePurchaseOrderItems.data.indexOf(row);
            this.purchaseOrderForm.patchValue({
                prItemCode: row.itemCode,
                prItemId: row.id,
                quantityCanceled: row.quantityCanceled,
                quantityDelivered: row.quantityDelivered,
                quantityOpen: row.quantityOpen,
            });
        }
        else if (updateType === "deliveryItem") {
            this.selectedRows = [];
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__.SelectionModel(false, []);
            this.allItemsSelected = false;
            this.selectedRowIndex = this.dataSourceDeliveryRequest.data.indexOf(row);
            this.purchaseOrderForm.patchValue({
                id: row.id,
                prItemId: row.prItemId,
                quantityCanceled: row.quantityCanceled,
                quantityDelivered: row.quantityDelivered,
                quantityOpen: row.quantityOpen,
                prItemCode: row.prItemCode,
                status: row.status,
            });
        }
        this.purchaseOrderForm.patchValue({
            deliveredBy: row.deliveredBy,
            deliveredOn: new Date(),
            prCode: this.formData.purchaseRequisitionCode,
            //receiptCode: row.receiptCode,
            receivingComments: row.receivingComments,
            taxName: row.taxName,
            taxRate: row.taxRate,
            taxAmount: row.taxAmount,
            subTotal: row.subTotal,
            totalAmount: row.totalAmount,
            accountNumber: row.accountNumber,
            tranCode: row.tranCode,
            transactionStatus: row.transactionStatus,
            tranDate: row.tranDate,
        });
        this.activateDeliveryRequest = true;
    }
    pushFormDataInToDeliveryData(record) {
        this.deliveryData.push(record);
        this.dataSourceDeliveryRequest = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(this.deliveryData);
    }
    calculateBalances() {
        this.totalDues = 0;
        this.billBalanceAmt = 0;
        this.deliveryData.forEach((element) => {
            if (element.status === "RECEIVED") {
                this.totalDues = +element.totalAmount;
                this.billBalanceAmt = this.purchaseOrder.totalAmount - this.totalDues;
            }
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSourcePurchaseOrderItems.filter = filterValue.trim().toLowerCase();
        if (this.dataSourcePurchaseOrderItems.paginator) {
            this.dataSourcePurchaseOrderItems.paginator.firstPage();
        }
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSourcePurchaseOrderItems.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSourcePurchaseOrderItems.data);
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? "deselect" : "select"} all`;
        }
        return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${row.position + 1}`;
    }
    checkSelection() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSourcePurchaseOrderItems.data.length;
        if (numSelected === numRows) {
            this.allItemsSelected = true;
        }
        else if (numSelected !== numRows) {
            this.allItemsSelected = false;
        }
    }
    checkboxActive() {
        this.selectedRows = this.selection.selected;
        this.editItemDeliveryDetails(this.selection.selected[0], "poItem");
        this.unitPrice = this.selection.selected[0].unitPrice;
        //this.purchaseOrderItem = this.selection.selected[0];
        //this.customSweetAlert();
    }
    customSweetAlert() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Are you sure?",
            text: "Please ensure all selected items are fully delivered. This action is irreversible!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Proceed!",
        }).then((result) => {
            if (result.value) {
                // this.multiCalculate();
                // this.onSubmit();
                // Swal.fire("Updated!", "Purchase order updated sucessfully", "success");
            }
        });
    }
    isAllSecondTableSelected() {
        const numSelected = this.secondTableSelection.selected.length;
        const numRows = this.dataSourceDeliveryRequest.data.length;
        return numSelected === numRows;
    }
    masterSecondTableToggle() {
        if (this.isAllSecondTableSelected()) {
            this.secondTableSelection.clear();
            return;
        }
        this.secondTableSelection.select(...this.dataSourceDeliveryRequest.data);
    }
    checkboxSecondTableLabel(row) {
        if (!row) {
            return `${this.isAllSecondTableSelected() ? "deselect" : "select"} all`;
        }
        return `${this.secondTableSelection.isSelected(row) ? "deselect" : "select"} row ${row.position + 1}`;
    }
    checkSecondTableSelection() {
        const numSelected = this.secondTableSelection.selected.length;
        const numRows = this.dataSourceDeliveryRequest.data.length;
        if (numSelected === numRows) {
            this.secondSelectItemsSelected = true;
        }
        else if (numSelected !== numRows) {
            this.secondSelectItemsSelected = false;
        }
        console.log("secondSelectItemsSelected: ", this.secondSelectItemsSelected);
    }
    secondCheckboxActive(action) {
        //this.secondCheckboxSelectedRows = this.secondTableSelection.selected;
        var _a, _b, _c, _d, _e, _f, _g;
        console.log("this.secondTableSelection.selected[0].tranCode:: ", this.secondTableSelection.selected[0].tranCode);
        this.transactionAction = action;
        console.log("this.secondSelectItemsSelected:: ", this.secondSelectItemsSelected);
        if (((_a = this.secondTableSelection.selected[0]) === null || _a === void 0 ? void 0 : _a.id) === null ||
            ((_b = this.secondTableSelection.selected[0]) === null || _b === void 0 ? void 0 : _b.id) === undefined ||
            ((_c = this.secondTableSelection.selected[0]) === null || _c === void 0 ? void 0 : _c.id) === "" ||
            !this.secondTableSelection.selected[0].id) {
            this.snackbar.showNotification("snackbar-danger", "This record must be saved first");
            return;
        }
        if (this.transactionAction === "Add" &&
            ((_d = this.secondTableSelection.selected[0]) === null || _d === void 0 ? void 0 : _d.tranCode)) {
            this.snackbar.showNotification("snackbar-danger", "Transaction already exists for this record");
        }
        else if (this.transactionAction !== "Add" &&
            (((_e = this.secondTableSelection.selected[0]) === null || _e === void 0 ? void 0 : _e.tranCode) === null ||
                ((_f = this.secondTableSelection.selected[0]) === null || _f === void 0 ? void 0 : _f.tranCode) === undefined ||
                ((_g = this.secondTableSelection.selected[0]) === null || _g === void 0 ? void 0 : _g.tranCode) === "" ||
                !this.secondTableSelection.selected[0].tranCode)) {
            this.snackbar.showNotification("snackbar-danger", "No transaction added for this record!!");
        }
        else {
            this.transactionLookUp();
        }
    }
    transactionLookUp() {
        console.log("this.secondTableSelection:: ", this.secondTableSelection.selected[0]);
        let addBody = {};
        if (this.transactionAction === "Add") {
            addBody = {
                transactionType: this.transactionType,
                prCode: this.secondTableSelection.selected[0].prCode,
                referenceCode: this.secondTableSelection.selected[0].grnCode,
                itemCode: this.secondTableSelection.selected[0].prItemCode,
                parttrans: [
                    {
                        accountNo: this.secondTableSelection.selected[0].accountNumber,
                        amount: this.secondTableSelection.selected[0].totalAmount,
                        partTranstype: "Debit",
                    },
                ],
            };
        }
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "1200px";
        dialogConfig.data = {
            action: this.transactionAction,
            transactionType: this.transactionType,
            selected: this.secondTableSelection.selected[0],
            bodyForAdd: addBody,
            tranCode: this.secondTableSelection.selected[0].tranCode,
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
            referenceCode: this.transactionResponse.referenceCode,
        };
        this.requisitionService
            .updateReceivedItemsTransactionStatus(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res: ", res);
                if (res.statusCode == 200) {
                    this.snackbar.showNotification("snackbar-success", res.message);
                    this.getPurchaseOrderByCode();
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
            rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription;
    }
    onSelectFile(files) {
        console.log("file: ", files);
        this.isFileLoading.next(true);
        const file = files[0];
        this.filesService.toBase64(files, this.selectedFiles).subscribe((res) => {
            if (res && res.length > 0) {
                this.isFileLoading.next(false);
                const fileName = file.name;
                const fileParts = fileName.split(".");
                const name = fileParts.slice(0, -1).join(".");
                const extension = fileParts[fileParts.length - 1];
                this.deliveryNoteModel = {
                    file: res[0].base64,
                    filename: name,
                    filetype: extension,
                    referenceCode: this.formData.purchaseRequisitionCode,
                };
                this.deliveryNoteModelPopulated = true;
                console.log("deliveryNoteModel :", this.deliveryNoteModel);
            }
        });
    }
    onSubmitDeliveryNote(action) {
        console.log("event: ", action);
        if (action === "Add") {
            this.deliveryNoteModelPopulated = false;
            this.isUploadingFile = true;
            this.deliveryNoteService
                .addDeliveryNote(this.deliveryNoteModel)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    console.log("this.deliveryNoteAppres: ", res);
                    // res = this.sampleData
                    if (res.statusCode == 201) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                    this.isUploadingFile = false;
                },
                complete: () => {
                    this.getDeliveryNoteDocs();
                    this.isUploadingFile = false;
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription;
        }
    }
    downloadDeliveryNoteDoc(id) {
        console.log("id : ", id);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams().set("id", id);
        this.deliveryNoteService
            .getDeliveryNoteById(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.downloadBody: ", res);
                // res = this.sampleData
                if (res.statusCode === 302) {
                    let file = res.entity.file;
                    let filename = res.entity.filename;
                    let filetype = res.entity.filetype;
                    console.log("filename: ", filename);
                    console.log("filetype: ", filetype);
                    // Download PDF in Chrome etc.
                    const source = `${file}`;
                    const link = document.createElement("a");
                    link.href = source;
                    link.download = `${filename}.${filetype}`;
                    link.click();
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
            rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription;
    }
    getDeliveryNoteDocs() {
        this.isFetchingDocuments = true;
        this.documents = [];
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams().set("referenceCode", this.formData.purchaseRequisitionCode);
        console.log("getdeliveryNoteDocs: ", this.formData.purchaseRequisitionCode);
        this.deliveryNoteService
            .getDeliveryNoteByCode(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.getdeliveryNoteDocsRes: ", res);
                // res = this.sampleData
                if (res.statusCode === 302) {
                    this.documents = res.entity;
                    console.log(" this.documents :", this.documents);
                }
                else {
                    // this.snackbar.showNotification("snackbar-danger", res.message);
                }
                this.isFetchingDocuments = false;
            },
            error: (err) => {
                // this.snackbar.showNotification("snackbar-danger", err.message);
                this.isFetchingDocuments = false;
            },
            complete: () => {
                this.isFetchingDocuments = false;
            },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription;
    }
    deleteDeliveryNoteDocument(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Are you sure?",
            text: "Do you really want to delete this Document?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete Document!",
        }).then((result) => {
            if (result.isConfirmed) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams().set("id", id);
                this.deliveryNoteService
                    .deleteDeliveryNoteTemporarily(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        this.snackbar.showNotification("snackbar-success", res.message);
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getDeliveryNoteDocs();
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription;
            }
        });
    }
    //********************************************************************************************************************** */
    cancel() {
        this.router.navigate(["/erp-procurement/requisitions/all-requisitions"]);
    }
    onSubmit() {
        this.finalBody = this.dataSourceDeliveryRequest.data;
        console.log("this.finalBody :=>: ", this.finalBody);
        this.posting = true;
        this.requisitionService
            .receivePurchaseOrderItems(this.finalBody)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    this.getPurchaseOrderByCode();
                    this.snackbar.showNotification("snackbar-success", res.message);
                    this.finalBody = [];
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
            complete: () => { this.posting = false; },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription;
    }
}
PurchaseOrderAcknowledgementComponent.ɵfac = function PurchaseOrderAcknowledgementComponent_Factory(t) { return new (t || PurchaseOrderAcknowledgementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_requisition_service__WEBPACK_IMPORTED_MODULE_2__.RequisitionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_delivery_note_service__WEBPACK_IMPORTED_MODULE_4__.DeliveryNoteService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_5__.FilesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog)); };
PurchaseOrderAcknowledgementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: PurchaseOrderAcknowledgementComponent, selectors: [["app-purchase-order-acknowledgement"]], viewQuery: function PurchaseOrderAcknowledgementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginatorPurchaseOrderItems = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sortPurchaseOrderItems = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginatorDeliveryRequest = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sortDeliveryRequest = _t.first);
    } }, decls: 8, vars: 6, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], ["class", "card text-center", "style", "min-height: 400px", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "card", "text-center", 2, "min-height", "400px"], [1, "my-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "d-flex", "justify-content-center", "align-items-center", "flex-grow-1"], ["src", "assets/images/gif.gif", "alt", "Loading Animation", 2, "width", "55px", "height", "55px"], [1, "card"], [1, "body"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "white-box", "px-5", "mt-0"], [1, "col-lg-2", "col-md-2", "col-sm-12", "col-xs-12"], [1, "float-start", "mt-3"], [1, "m-t-0"], [1, "fa", "fa-rocket"], [1, "label", "label-primary"], [1, "font-bold"], [1, "text-muted"], [1, "col-lg-10", "col-md-10", "col-sm-12", "col-xs-12"], ["label", "Confirm items"], ["class", "row params mx-3", 4, "ngIf"], [1, "row", "mx-1", "mt-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "table-responsiv"], [1, "materialTableHead"], [1, "row", "mx-1"], [1, "col-12"], [1, "head-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropd", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "Confirm the Delivery is in order", 1, "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "accent", 3, "disabled", "click"], [1, "col-white"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "itemCode"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-25", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-25", 4, "matCellDef"], ["matColumnDef", "itemRequested"], ["matColumnDef", "quantity"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-14", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-14", 4, "matCellDef"], ["matColumnDef", "unitPrice"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matCellDef"], ["matColumnDef", "totalAmount"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["class", "header", 4, "ngIf"], ["class", "mx-0", 3, "formGroup", 4, "ngIf"], [4, "ngIf"], ["matColumnDef", "secondTableSelect"], ["matColumnDef", "prItemCode"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-35", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-35", 3, "matTooltip", 4, "matCellDef"], ["matColumnDef", "quantityOpen"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", "matTooltip", "QuantityOpen", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "quantityDelivered"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", "matTooltip", "QuantityDelivered", 4, "matHeaderCellDef"], ["matColumnDef", "quantityCanceled"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", "matTooltip", "QuantityCancelled", 4, "matHeaderCellDef"], ["matColumnDef", "tranCode"], ["matColumnDef", "transactionStatus"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "tranDate"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["matColumnDef", "status"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-28", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-28", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matCellDef"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "my-3"], ["align", "end", 1, "example-button-row"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "hidden", "click"], [1, "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12"], [1, "float-start", "m-t-15"], [1, "float-end", "m-t-15", "text-end"], [1, "clearfix"], ["label", "Upload Delivery Note"], [1, "mt-3"], [1, "header"], [1, "mx-4"], ["class", "mb-3", 4, "ngIf"], [1, "col-lg-10", "col-md-11", "col-sm-8", "col-xs-8"], ["type", "file", 3, "change"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-4", "d-flex", "align-items-center", "justify-content-center"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], [1, "body", "mt-1"], ["class", "doc-file-type", 4, "ngIf"], [1, "bg-color"], [1, "chat"], [1, "chat-header", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-4"], [1, "col-6"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages", "mt-2"], [1, "badge", "badge-hod"], [1, "badge", "badge-hod-approved"], [1, "chat-about", "mt-2"], [1, "chat-with", "remarks"], [1, "remarks-content", "mx-2"], [1, "badge", "badge-finance"], [1, "badge", "badge-finance-approved"], [1, "badge", "badge-procurement"], [1, "badge", "badge-procurement-approved"], [1, "row", "params", "mx-3"], [1, "parameter-card", "quantity"], [1, "parameter-label"], [1, "parameter-content"], [1, "parameter-value"], [1, "fas", "fa-cube", "parameter-icon"], [1, "parameter-card", "delivered"], [1, "fas", "fa-truck", "parameter-icon"], [1, "parameter-card", "open"], [1, "fas", "fa-exclamation-circle", "parameter-icon"], [1, "parameter-card", "remaining"], [1, "fas", "fa-chart-pie", "parameter-icon"], [1, "parameter-card", "canceled"], [1, "fas", "fa-times-circle", "parameter-icon"], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-25"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-25"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-14"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-14"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-30"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-30"], ["matRipple", ""], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], [1, "mx-0", 3, "formGroup"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width", "mb-0"], ["matInput", "", "formControlName", "deliveredBy"], ["matInput", "", "formControlName", "deliveredOn", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["deliveredOnPicker", ""], ["formControlName", "status", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "taxName"], ["matInput", "", "formControlName", "taxRate"], ["matInput", "", "formControlName", "taxAmount", "mask", "separator", "thousandSeparator", ","], ["matInput", "", "formControlName", "subTotal", "mask", "separator", "thousandSeparator", ","], ["matInput", "", "formControlName", "totalAmount", "mask", "separator", "thousandSeparator", ","], ["matInput", "", "formControlName", "quantityDelivered"], ["matInput", "", "formControlName", "quantityCanceled"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "receivingComments"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1", "float-left"], [1, "float-right"], ["class", "btn-space", "mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "color", "warn", 3, "click"], [3, "value"], [1, "accounting-actions-title"], ["matTooltip", "Add Accounting Details", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["matTooltip", "Edit Accounting Details", 1, "m-l-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-35"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-35", 3, "matTooltip"], ["mat-sort-header", "", "matTooltip", "QuantityOpen", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", "matTooltip", "QuantityDelivered", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", "matTooltip", "QuantityCancelled", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [3, "ngSwitch"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-28"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-28"], ["class", "badge badge-solid-purple btn btn btn-sm m-1", 4, "ngSwitchCase"], [1, "badge", "badge-solid-purple", "btn", "btn", "btn-sm", "m-1"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], ["matTooltip", "Edit", "mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "disabled", "click"], [3, "icon"], [1, "mb-3"], [1, "doc-file-type"], [1, "list-unstyled", 2, "position", "relative", "max-height", "385px", 3, "perfectScrollbar"], ["class", "document-list row", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "document-list", "row"], ["class", "col-lg-3 col-md-4 col-sm-12 col-xs-12", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-4", "col-sm-12", "col-xs-12"], [1, "d-flex", "mb-3", "mt-2"], [1, "msr-3", "align-self-center", "img-icon", "primary-rgba", "text-primary"], [1, "far", "fa-file-excel"], [1, "set-flex"], [1, "font-16", "mb-1", "truncate"], [1, "ms-auto"], [1, "far", "fa-trash-alt", "psr-3", "custom-icon-size", "text-danger", 3, "click"], [1, "far", "fa-arrow-alt-circle-down", "custom-icon-size", "text-primary", 3, "click"], [1, "text-center"]], template: function PurchaseOrderAcknowledgementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, PurchaseOrderAcknowledgementComponent_div_6_Template, 5, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, PurchaseOrderAcknowledgementComponent_div_7_Template, 244, 70, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Purchase Order Acknowledgement")("items", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](5, _c1))("active_item", "Acknowledgement");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.showPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showPage);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBar, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTab, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_28__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatError, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__.MatDatepicker, _angular_material_select__WEBPACK_IMPORTED_MODULE_35__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatOption, ngx_mask__WEBPACK_IMPORTED_MODULE_36__.MaskDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_7__.FeatherIconsComponent, _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_8__.FileUploadComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_37__.PerfectScrollbarDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.CurrencyPipe], styles: [".materialTableHead[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #f7f9fa 0%, #ebeef3 100%);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n.materialTableHead[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 4px;\n}\n.materialTableHead[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.materialTableHead[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #323233;\n  margin: 0;\n}\n.materialTableHead[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .head-buttons-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.materialTableHead[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .head-buttons-left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.materialTableHead[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .head-buttons-left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  padding: 6px 6px;\n  border-radius: 35px;\n  font-size: 12px;\n  outline: none;\n  background-color: #fff;\n}\n.materialTableHead[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .head-buttons-left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n}\n.materialTableHead[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .head-buttons-left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]::placeholder {\n  color: #999999;\n}\n.materialTableHead[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .head-buttons-left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  color: #323233;\n}\n.section-heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 0px;\n  color: #27ae60;\n}\n\n.params[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.parameter-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f5f5f5, #e0e0e0);\n  border-radius: 8px;\n  width: 200px;\n  padding: 16px;\n  margin: 10px;\n  transition: transform 0.2s, box-shadow 0.2s;\n  cursor: pointer;\n}\n.parameter-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\n}\n.parameter-card[_ngcontent-%COMP%]   .parameter-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  \n}\n.parameter-card[_ngcontent-%COMP%]   .parameter-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #fff;\n  \n  order: 2;\n  \n}\n.parameter-card[_ngcontent-%COMP%]   .parameter-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #fff;\n  font-weight: bold;\n  order: 1;\n  \n}\n.parameter-card[_ngcontent-%COMP%]   .parameter-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 8px;\n  font-weight: bold;\n}\n.quantity[_ngcontent-%COMP%] {\n  background-image: linear-gradient(135deg, #308ecd, #1c577e);\n  background-size: 200% 200%;\n  animation: gradient 5s ease-in-out infinite;\n}\n.canceled[_ngcontent-%COMP%] {\n  background-image: linear-gradient(135deg, #e14b3a, #81281e);\n  background-size: 200% 200%;\n  animation: gradient 5s ease-in-out infinite;\n}\n.delivered[_ngcontent-%COMP%] {\n  background-image: linear-gradient(135deg, #2cc36b, #1d7a43);\n  background-size: 200% 200%;\n  animation: gradient 5s ease-in-out infinite;\n}\n.open[_ngcontent-%COMP%] {\n  background-image: linear-gradient(135deg, #e79924, #a45c03);\n  background-size: 200% 200%;\n  animation: gradient 5s ease-in-out infinite;\n}\n.remaining[_ngcontent-%COMP%] {\n  background-image: linear-gradient(135deg, #9153aa, #612f77);\n  background-size: 200% 200%;\n  animation: gradient 5s ease-in-out infinite;\n}\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLW9yZGVyLWFja25vd2xlZGdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtEQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ047QUFDTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ1I7QUFFTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFBUjtBQUVRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQVY7QUFFVTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFBWjtBQUVZO0VBQ0UscUJBQUE7QUFBZDtBQUdZO0VBQ0UsY0FBQTtBQURkO0FBS1U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFIWjtBQVlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBVEY7QUFhQSxrSUFBQTtBQUdBO0VBQ0UsYUFBQTtFQUVBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQWJGO0FBZ0JBO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLDJDQUFBO0VBQ0EsZUFBQTtBQWRGO0FBZ0JFO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtBQWRKO0FBaUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFBZ0Msb0NBQUE7QUFkcEM7QUFpQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUFhLDZCQUFBO0VBQ2IsUUFBQTtFQUFVLCtCQUFBO0FBYmQ7QUFnQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUFVLGdDQUFBO0FBYmQ7QUFlRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWJKO0FBc0NBO0VBQ0UsMkRBQUE7RUFDQSwwQkFBQTtFQUNBLDJDQUFBO0FBbkNGO0FBc0NBO0VBQ0UsMkRBQUE7RUFDQSwwQkFBQTtFQUNBLDJDQUFBO0FBbkNGO0FBc0NBO0VBQ0UsMkRBQUE7RUFDQSwwQkFBQTtFQUNBLDJDQUFBO0FBbkNGO0FBc0NBO0VBQ0UsMkRBQUE7RUFDQSwwQkFBQTtFQUNBLDJDQUFBO0FBbkNGO0FBc0NBO0VBQ0UsMkRBQUE7RUFDQSwwQkFBQTtFQUNBLDJDQUFBO0FBbkNGO0FBc0NBO0VBQ0U7SUFDRSwyQkFBQTtFQW5DRjtFQXFDQTtJQUNFLDZCQUFBO0VBbkNGO0VBcUNBO0lBQ0UsMkJBQUE7RUFuQ0Y7QUFDRiIsImZpbGUiOiJwdXJjaGFzZS1vcmRlci1hY2tub3dsZWRnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0ZXJpYWxUYWJsZUhlYWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmN2Y5ZmEgMCUsICNlYmVlZjMgMTAwJSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE2cHggNHB4O1xuXG4gICAgLmNvbC0xMiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMzIzMjMzO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkLWJ1dHRvbnMtbGVmdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMjRweDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgLnNlYXJjaC1maWVsZCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgICAgICAgICAgcGFkZGluZzogNnB4IDZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VhcmNoLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgICAgICBjb2xvcjogIzMyMzIzMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLnNlY3Rpb24taGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY29sb3I6ICMyN2FlNjA7IFxufVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblxuLnBhcmFtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4ucGFyYW1ldGVyLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmNWY1LCAjZTBlMGUwKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBib3gtc2hhZG93IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cblxuICAucGFyYW1ldGVyLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIEFkZCBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHRleHQgKi9cbiAgfVxuICBcbiAgLnBhcmFtZXRlci1pY29uIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICNmZmY7IC8qIFdoaXRlIGNvbG9yIGZvciB0aGUgaWNvbiAqL1xuICAgIG9yZGVyOiAyOyAvKiBQbGFjZSB0aGUgaWNvbiBvbiB0aGUgbGVmdCAqL1xuICB9XG4gIFxuICAucGFyYW1ldGVyLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3JkZXI6IDE7IC8qIFBsYWNlIHRoZSB0ZXh0IG9uIHRoZSByaWdodCAqL1xuICB9XG4gIC5wYXJhbWV0ZXItbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuXG59XG5cbi8vIC5xdWFudGl0eSB7XG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzMDhlY2QsICMxYzU3N2UpO1xuLy8gfVxuXG4vLyAuY2FuY2VsZWQge1xuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTE0YjNhLCAjODEyODFlKTtcbi8vIH1cblxuLy8gLmRlbGl2ZXJlZCB7XG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyY2MzNmIsICMxZDdhNDMpO1xuLy8gfVxuXG4vLyAub3BlbiB7XG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNzk5MjQsICNhNDVjMDMpO1xuLy8gfVxuXG4vLyAucmVtYWluaW5nIHtcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzkxNTNhYSwgIzYxMmY3Nyk7XG4vLyB9XG4ucXVhbnRpdHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzA4ZWNkLCAjMWM1NzdlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDIwMCU7XG4gIGFuaW1hdGlvbjogZ3JhZGllbnQgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5jYW5jZWxlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMTRiM2EsICM4MTI4MWUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMjAwJTtcbiAgYW5pbWF0aW9uOiBncmFkaWVudCA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLmRlbGl2ZXJlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyY2MzNmIsICMxZDdhNDMpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMjAwJTtcbiAgYW5pbWF0aW9uOiBncmFkaWVudCA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLm9wZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTc5OTI0LCAjYTQ1YzAzKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDIwMCU7XG4gIGFuaW1hdGlvbjogZ3JhZGllbnQgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5yZW1haW5pbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOTE1M2FhLCAjNjEyZjc3KTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDIwMCU7XG4gIGFuaW1hdGlvbjogZ3JhZGllbnQgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG59XG5cblxuXG5cblxuIl19 */"] });


/***/ }),

/***/ 97777:
/*!***********************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/requisition/requisition-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitionRoutingModule": () => (/* binding */ RequisitionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_all_requisitions_all_requisitions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/all-requisitions/all-requisitions.component */ 46111);
/* harmony import */ var _pages_manage_requisition_manage_requisition_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/manage-requisition/manage-requisition.component */ 12236);
/* harmony import */ var _data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _pages_purchase_order_acknowledgement_purchase_order_acknowledgement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/purchase-order-acknowledgement/purchase-order-acknowledgement.component */ 92841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    //Budgets
    {
        path: "all-requisitions",
        component: _pages_all_requisitions_all_requisitions_component__WEBPACK_IMPORTED_MODULE_0__.AllRequisitionsComponent,
        canActivate: [_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: { clientName: 'ProcurementModule', requiredPrivilege: ["All Requisitions"] },
    },
    {
        path: "manage-requisitions",
        component: _pages_manage_requisition_manage_requisition_component__WEBPACK_IMPORTED_MODULE_1__.ManageRequisitionComponent,
        canActivate: [_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: { clientName: 'ProcurementModule', requiredPrivilege: ["Manage Requisitions"] },
    },
    {
        path: "purchase-order-acknowledgement",
        component: _pages_purchase_order_acknowledgement_purchase_order_acknowledgement_component__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderAcknowledgementComponent,
        canActivate: [_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: { clientName: 'ProcurementModule', requiredPrivilege: ["Purchase Order Acknowledgement"] },
    },
];
class RequisitionRoutingModule {
}
RequisitionRoutingModule.ɵfac = function RequisitionRoutingModule_Factory(t) { return new (t || RequisitionRoutingModule)(); };
RequisitionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RequisitionRoutingModule });
RequisitionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RequisitionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 15775:
/*!***************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/requisition/requisition.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitionModule": () => (/* binding */ RequisitionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _requisition_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requisition-routing.module */ 97777);
/* harmony import */ var _pages_all_requisitions_all_requisitions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/all-requisitions/all-requisitions.component */ 46111);
/* harmony import */ var _pages_manage_requisition_manage_requisition_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/manage-requisition/manage-requisition.component */ 12236);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 79091);
/* harmony import */ var _dialogs_validate_requisition_validate_requisition_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/validate-requisition/validate-requisition.component */ 1184);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/badge */ 70178);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 43672);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/slider */ 61859);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _pages_purchase_order_acknowledgement_purchase_order_acknowledgement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/purchase-order-acknowledgement/purchase-order-acknowledgement.component */ 92841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);













































class RequisitionModule {
}
RequisitionModule.ɵfac = function RequisitionModule_Factory(t) { return new (t || RequisitionModule)(); };
RequisitionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: RequisitionModule });
RequisitionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _requisition_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequisitionRoutingModule,
            //Additional imports
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_23__.MatTableExporterModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormFieldModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__.MatStepperModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_34__.NgxMaskModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__.MatChipsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_36__.MatBadgeModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_38__.MatBottomSheetModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_39__.MatListModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__.MatSidenavModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_41__.MatExpansionModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_42__.MatSliderModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_43__.NgbModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](RequisitionModule, { declarations: [_pages_all_requisitions_all_requisitions_component__WEBPACK_IMPORTED_MODULE_1__.AllRequisitionsComponent,
        _pages_manage_requisition_manage_requisition_component__WEBPACK_IMPORTED_MODULE_2__.ManageRequisitionComponent,
        _dialogs_validate_requisition_validate_requisition_component__WEBPACK_IMPORTED_MODULE_6__.ValidateRequisitionComponent,
        _pages_purchase_order_acknowledgement_purchase_order_acknowledgement_component__WEBPACK_IMPORTED_MODULE_7__.PurchaseOrderAcknowledgementComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _requisition_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequisitionRoutingModule,
        //Additional imports
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_23__.MatTableExporterModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__.MatStepperModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_34__.NgxMaskModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__.MatChipsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_36__.MatBadgeModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_38__.MatBottomSheetModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_39__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__.MatSidenavModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_41__.MatExpansionModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_42__.MatSliderModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_43__.NgbModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_erp-procurement_modules_requisition_requisition_module_ts.js.map
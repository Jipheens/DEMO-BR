"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["default-src_app_erp-finance_data_lookups_validation_expense-validation_expense-validation_com-035506"],{

/***/ 28219:
/*!********************************************************************************************************!*\
  !*** ./src/app/erp-finance/data/lookups/validation/expense-validation/expense-validation.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseValidationComponent": () => (/* binding */ ExpenseValidationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_erp_finance_data_services_expense_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-finance/data/services/expense-management.service */ 89415);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);


















function ExpenseValidationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-bar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ExpenseValidationComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpenseValidationComponent_div_17_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16)(6, "div", 17)(7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpenseValidationComponent_div_17_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.return(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 16)(10, "div", 17)(11, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpenseValidationComponent_div_17_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.reject(); });
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
function ExpenseValidationComponent_form_18_div_1_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Reason is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ExpenseValidationComponent_form_18_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 23)(2, "mat-form-field", 24)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Reason for rejection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExpenseValidationComponent_form_18_div_1_mat_error_6_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 27)(8, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpenseValidationComponent_form_18_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.changeStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.statusForm.get("reason").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r7.statusForm.invalid);
} }
function ExpenseValidationComponent_form_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExpenseValidationComponent_form_18_div_1_Template, 10, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.statusForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.rejected);
} }
class ExpenseValidationComponent {
    constructor(dialogRef, data, fb, snackbar, tokenCookieService, expenseManService, router, datepipe) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.tokenCookieService = tokenCookieService;
        this.expenseManService = expenseManService;
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
        console.log("DATADATA: ", this.Data);
    }
    //***************************************************************************************************** */
    ngOnInit() {
        this.currentUser = this.tokenCookieService.getUser().username;
        console.log("ids: ", this.Data);
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
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams()
            .set("remarks", this.statusForm.value.reason);
        // let body = [
        //   {
        //     id: this.Data.id,
        //   //  id: this.Data.map((element)=> 
        //   //   {
        //   //    element.id
        //   //   }),
        //     status: this.action
        //   }]
        let body = [];
        this.Data.forEach((element) => {
            let expense = { id: element.id, status: this.action };
            body.push(expense);
        });
        // this.expenseManService
        //   .validateExpense(
        //     params, body)
        //   .pipe(takeUntil(this.destroy$))
        //   .subscribe({
        //     next: (res) => {
        //       this.snackbar.showNotification(
        //         "snackbar-success",
        //         "Expense validated successfully!"
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
        //       this.router.navigate(["/erp-finance/finance-parameters/all-expenses"]);
        //     }
        //   });
    }
}
ExpenseValidationComponent.ɵfac = function ExpenseValidationComponent_Factory(t) { return new (t || ExpenseValidationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_finance_data_services_expense_management_service__WEBPACK_IMPORTED_MODULE_2__.ExpenseManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe)); };
ExpenseValidationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ExpenseValidationComponent, selectors: [["app-expense-validation"]], decls: 19, vars: 3, consts: [[1, "addContainer"], [1, "contact-details"], ["class", "m-10", 4, "ngIf"], [1, "modalHeader"], [1, "contact-details-name", "mb-1"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "row"], [1, "col", "text-center", "my-2"], [1, "fas", "fa-check-circle", "fa-6x", "col-green"], [1, ""], ["class", "row", "style", "margin-top: 10px", 4, "ngIf"], ["class", "register-form m-4", 3, "formGroup", 4, "ngIf"], [1, "m-10"], ["color", "primary", "mode", "indeterminate"], [1, "row", 2, "margin-top", "10px"], [1, "col-4"], [1, "row", "m-1"], ["type", "button", 1, "badge", "badge-solid-green", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], ["type", "button", 1, "badge", "badge-solid-brown", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], ["type", "button", 1, "badge", "badge-solid-red", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], [1, "register-form", "m-4", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "col-10", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "reason", "matInput", ""], [4, "ngIf"], [1, "col-2", "d-flex", "align-items-center", "justify-content-center", "mb-2"], ["mat-raised-button", "", "color", "primary", "tabindex", "-1", 3, "disabled", "click"]], template: function ExpenseValidationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ExpenseValidationComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Validate Expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpenseValidationComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "mat-card-content")(12, "div", 7)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ExpenseValidationComponent_div_17_Template, 13, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ExpenseValidationComponent_form_18_Template, 2, 2, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.validationIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideValidation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlbnNlLXZhbGlkYXRpb24uY29tcG9uZW50LnNhc3MifQ== */"] });


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


/***/ }),

/***/ 4827:
/*!*******************************************************************************!*\
  !*** ./src/app/erp-inventory/data/services/brancstores-management.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrancstoresManagementService": () => (/* binding */ BrancstoresManagementService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class BrancstoresManagementService {
    constructor(http) {
        this.http = http;
    }
    getbranchStore() {
        const branchStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores`;
        return this.http.get(branchStoreUrl);
    }
    getbranchStoreById(id) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/costManagement/fetchBy/${id}`);
    }
    getbranchStoreByCode(branchStoreCode) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/branchStore/find/by/branchStore/code/${branchStoreCode}`);
    }
    addbranchStore(data) {
        const branchStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores/add`;
        return this.http.post(branchStoreUrl, data);
    }
    updatebranchStore(branchStoreDetails) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores/update`;
        return this.http.put(updateBillUrl, branchStoreDetails);
    }
    // http://localhost:9090/api/branch_stores/receiveGoods?branchCode=11111&requisitionCode=REQ-2023-002
    receiveItemsFromMain(params) {
        const invItemUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores/receiveGoods`;
        return this.http.put(invItemUrl, {}, {
            params: params
        });
    }
    validateStoreRequisition(params) {
        const storeRequisitionUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/StoreRequisition/update/state`;
        return this.http.put(storeRequisitionUrl, {}, {
            params: params
        });
    }
    deletebranchStorePemanently(params) {
        const branchStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores/delete`;
        return this.http.delete(branchStoreUrl, { params });
    }
    //fetching the requested goods by branchstore
    fetchAllRequisitionsByBranchcode(params) {
        const branchStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores/getAllRequestedItems`;
        return this.http.get(branchStoreUrl, { params });
    }
    // ********************************************************************************************************************
    //Main store requsitions: Requistions to the main store 
    //Requesting goods from the main stores
    requestFromMainStore(data, params) {
        const branchStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores/requestGoods`;
        return this.http.post(branchStoreUrl, data, { params });
    }
    getItemsInTransitByCode(params) {
        const invItemUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores/getItemsInTransit`;
        return this.http.get(invItemUrl, { params });
    }
    //fetching requistions from the main store by status
    getAllRequisitionsByStatus(params) {
        const branchStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores/allMainStoreRequisitions`;
        return this.http.get(branchStoreUrl, { params });
    }
    //fetch requisitions to the main store by requisition code
    // http://localhost:9090/api/branch_stores/getMainStoreRequisitionByRequisitionCode?requisitionCode=123232
    fetchRequisitionByCode(params) {
        const branchStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores/getMainStoreRequisitionByRequisitionCode`;
        return this.http.get(branchStoreUrl, { params });
    }
    //update main store requisition 
    // http://localhost:9090/api/branch_stores/updateMainStoreRequisition
    updateMainStoreRequisition(requisitionDetails) {
        const branchStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores/updateMainStoreRequisition`;
        return this.http.put(branchStoreUrl, requisitionDetails);
    }
    //deleting a main store requisition 
    // http://localhost:9090/api/branch_stores/deleteMainStoreRequisition?requisitionCode=123123123
    deleteMainStoreRequisition(params) {
        const branchStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores/deleteMainStoreRequisition`;
        return this.http.delete(branchStoreUrl, { params });
    }
    // ********************************************************************************************************************
    //Management of items at the branch Level
    fetchAllBranchStock(params) {
        const branchStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores/allBranchStoreInventory`;
        return this.http.get(branchStoreUrl, { params });
    }
    // ********************************************************************************************************************
    //Statistics at branch level
    calculateTotalValue(params) {
        const branchStoreUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branch_stores/`;
        return this.http.get(branchStoreUrl, { params });
    }
}
BrancstoresManagementService.ɵfac = function BrancstoresManagementService_Factory(t) { return new (t || BrancstoresManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BrancstoresManagementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrancstoresManagementService, factory: BrancstoresManagementService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_erp-finance_data_lookups_validation_expense-validation_expense-validation_com-035506.js.map
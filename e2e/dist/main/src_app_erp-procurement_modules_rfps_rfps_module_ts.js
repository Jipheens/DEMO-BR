"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-procurement_modules_rfps_rfps_module_ts"],{

/***/ 98213:
/*!***************************************************************!*\
  !*** ./src/app/erp-procurement/data/services/rfps.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RFPsService": () => (/* binding */ RFPsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class RFPsService {
    constructor(http) {
        this.http = http;
    }
    getRFP() {
        const RFPUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rfp/all`;
        return this.http.get(RFPUrl);
    }
    // getRFPById(params: any): Observable<any> {
    //   const RFPUrl = `${environment.baseUrlProcurement}/api/v1/rfp/fetchBy/id`;
    //   return this.http.post<any>(RFPUrl, {params});
    // }
    getRFPById(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rfp/fetchBy/id`, { params });
    }
    addRFP(data) {
        const RFPUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rfp/create`;
        return this.http.post(RFPUrl, data);
    }
    updateRFP(RFPDetails) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rfp/update`;
        return this.http.put(updateBillUrl, RFPDetails);
    }
    updateRFPCommetteeApproval(params, approvalAttachments) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rfp/commetteeApproval`;
        return this.http.put(updateBillUrl, approvalAttachments, { params });
    }
    deleteRFPsTemporarily(params) {
        const RFPUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rfp/delete`;
        return this.http.delete(RFPUrl, { params });
    }
    cancelOrReactivateRFP(params) {
        const RfqUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rfp/cancel`;
        return this.http.post(RfqUrl, {}, { params });
    }
    getRFPByStatus(params) {
        const RFPssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rfp/rfp/status`;
        return this.http.get(RFPssUrl, { params: params, });
    }
    validateRFP(statusDetails) {
        const API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rfp/verify`;
        return this.http.put(API_URL, statusDetails);
    }
    processSupplierAwardLetter(params) {
        const RFPUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rfp/send/award`;
        return this.http.post(RFPUrl, {}, { params });
    }
    // /api/v1/rfp/send/award/notification
    processEmailForNomination(params) {
        const RFPUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rfp/send/award/notification`;
        return this.http.post(RFPUrl, {}, { params });
    }
    getRFPPendingCommitee() {
        const RFPUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/rfp/find/rfp/pending/commitee/approval`;
        return this.http.get(RFPUrl);
    }
    // ********************************************************************************************************************
    donwloadRFPRecipientsReport(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/report/download/rfp/suppliers`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Hey this is download RFP recipients Report", response);
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
    donwloadRFPItemsReport(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/report/download/rfp/items`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Hey this is download RFP Items Report", response);
            return {
                filename: "Report",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
}
RFPsService.ɵfac = function RFPsService_Factory(t) { return new (t || RFPsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
RFPsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RFPsService, factory: RFPsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 72644:
/*!***************************************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/rfps/dialogs/manage-rfp-item/manage-rfp-item.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageRfpItemComponent": () => (/* binding */ ManageRfpItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_app_erp_finance_data_lookups_tax_lookup_tax_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/tax-lookup/tax-lookup.component */ 5815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_erp_procurement_data_services_procurement_calculations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_procurement-calculations.service */ 65912);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);















function ManageRfpItemComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Item Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Quantity is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Quantity cannot be 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Quantity allows numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter unit amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please ensure amount does not exceed 2 decimal values! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please ensure amount does not exceed 1 billion! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please ensure amount does not exceed 2 decimal values! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please ensure amount does not exceed 1 billion! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter final amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please ensure amount does not exceed 2 decimal values! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please ensure amount does not exceed 1 billion! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Need by Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter a Valid Need by Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tax Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tax Rate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManageRfpItemComponent_mat_error_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description must not exceed 300 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ManageRfpItemComponent {
    constructor(dialogRef, fb, data, dialog, calculationService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.data = data;
        this.dialog = dialog;
        this.calculationService = calculationService;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(true, []);
        this.loading = false;
        this.pageAction = "Add";
        this.taxDetails = { subTotal: 0, taxAmount: 0, totalAmount: 0 };
        this.taxIsSelected = false;
        this.selectedTaxes = [];
    }
    ngOnInit() {
        var _a;
        this.pageAction = this.data.action;
        this.generateRfpItemForm((_a = this.data) === null || _a === void 0 ? void 0 : _a.data);
        this.calculateTax();
    }
    generateRfpItemForm(data) {
        this.bgtForm = this.fb.group({
            id: [(data === null || data === void 0 ? void 0 : data.id) || ""],
            itemName: [(data === null || data === void 0 ? void 0 : data.itemName) || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            itemCode: [(data === null || data === void 0 ? void 0 : data.itemCode) || ""],
            description: [(data === null || data === void 0 ? void 0 : data.description) || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(300)]],
            unitOfMeasure: [(data === null || data === void 0 ? void 0 : data.unitOfMeasure) || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            quantity: [
                (data === null || data === void 0 ? void 0 : data.quantity) || 0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0.01),
                    //Validators.pattern("^[0-9]+(\\.[0-9]{1,2})?$"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[0-9]+(\\.[0-9]{1,2})?$|^$"),
                ],
            ],
            unitPricePerItem: [
                (data === null || data === void 0 ? void 0 : data.unitPricePerItem) || 0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(1000000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                ],
            ],
            negotiatedPrice: [
                (data === null || data === void 0 ? void 0 : data.negotiatedPrice) || 0,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d+(\.\d{1,2})?$/)],
            ],
            finalPrice: [
                (data === null || data === void 0 ? void 0 : data.finalPrice) || 0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(1000000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d+(\.\d{1,2})?$/),
                ],
            ],
            needByDate: [
                (data === null || data === void 0 ? void 0 : data.needByDate) || "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.dateValidator],
            ],
            taxRate: [
                (data === null || data === void 0 ? void 0 : data.taxRate) || 0,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[0-9]+(\\.[0-9]{1,2})?$|^$"),
                ],
            ],
            taxName: [(data === null || data === void 0 ? void 0 : data.taxName) || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            subTotal: [(data === null || data === void 0 ? void 0 : data.subTotal) || 0],
            taxAmount: [(data === null || data === void 0 ? void 0 : data.taxAmount) || 0],
            totalAmount: [(data === null || data === void 0 ? void 0 : data.totalAmount) || 0],
        });
        // Subscribe to value changes for unitPricePerItem
        this.bgtForm.get("unitPricePerItem").valueChanges.subscribe((unitPricePerItem) => {
            this.bgtForm.get("finalPrice").setValue(unitPricePerItem, { emitEvent: false });
            this.calculateTax();
        });
        // Subscribe to value changes for negotiatedPrice
        this.bgtForm
            .get("negotiatedPrice")
            .valueChanges.subscribe((negotiatedPrice) => {
            this.bgtForm
                .get("finalPrice")
                .setValue(negotiatedPrice, { emitEvent: false });
            this.calculateTax();
        });
    }
    doCalculation(event) {
        this.calculateTax();
    }
    calculateTax() {
        this.taxDetails = { subTotal: 0, taxAmount: 0, totalAmount: 0 };
        const quantity = Number(this.bgtForm.value.quantity);
        const finalPrice = Number(this.bgtForm.value.finalPrice);
        const taxRate = Number(this.bgtForm.value.taxRate);
        console.log("quantity: ", quantity);
        console.log("taxRate: ", taxRate);
        console.log("finalPrice: ", finalPrice);
        console.log("*************************************");
        this.taxDetails = this.calculationService.calculateTax(quantity, finalPrice, taxRate);
        this.bgtForm.patchValue({
            subTotal: this.taxDetails.subTotal.toFixed(2),
            taxAmount: this.taxDetails.taxAmount.toFixed(2),
            totalAmount: this.taxDetails.totalAmount.toFixed(2),
        });
        console.log("subTotal: ", this.bgtForm.value.subTotal);
        console.log("taxAmount: ", this.bgtForm.value.taxAmount);
        console.log("totalAmount: ", this.bgtForm.value.totalAmount);
    }
    dateValidator(control) {
        const selectedDate = control.value;
        const today = new Date();
        if (selectedDate < today) {
            return { pastDate: true };
        }
        return null;
    }
    taxesLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "single tax",
            selected: this.selectedTaxes,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_tax_lookup_tax_lookup_component__WEBPACK_IMPORTED_MODULE_0__.TaxLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            if (result && result.data.length != 0) {
                console.log("result: ", result.data);
                this.bgtForm.patchValue({
                // taxRate: result.data[0].,
                // taxName: result.data[0].,
                });
            }
        });
    }
    onSubmit() {
        console.log("this.bgtForm.value: ", this.bgtForm.value);
        this.dialogRef.close({ event: "close", item: this.bgtForm.value });
    }
    onClose() {
        this.dialogRef.close();
    }
}
ManageRfpItemComponent.ɵfac = function ManageRfpItemComponent_Factory(t) { return new (t || ManageRfpItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_procurement_calculations_service__WEBPACK_IMPORTED_MODULE_1__.CalculationService)); };
ManageRfpItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ManageRfpItemComponent, selectors: [["app-manage-rfp-item"]], decls: 119, vars: 42, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "mx-4", 3, "formGroup"], [1, "row"], [1, "col-xl-3", "col-lg-3", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width", "mb-1"], ["matInput", "", "formControlName", "itemCode"], ["matInput", "", "formControlName", "itemName"], [4, "ngIf"], ["matInput", "", "formControlName", "unitOfMeasure"], ["matInput", "", "formControlName", "quantity", 3, "keyup"], ["matInput", "", "formControlName", "unitPricePerItem", "mask", "separator", "thousandSeparator", ","], ["matInput", "", "formControlName", "negotiatedPrice", "mask", "separator", "thousandSeparator", ","], ["matInput", "", "formControlName", "finalPrice", "mask", "separator", "thousandSeparator", ",", "readonly", ""], ["matInput", "", "formControlName", "needByDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "taxName"], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "taxRate", 3, "keyup"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "description", "required", ""], [1, "col-md-12"], [1, "float-end", "m-t-30", "text-end"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1", "float-left"], [1, "float-right"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["type", "button", "mat-raised-button", "", "color", "warn", 3, "click"]], template: function ManageRfpItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManageRfpItemComponent_Template_button_click_8_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "form", 8)(13, "div", 9)(14, "div", 10)(15, "mat-form-field", 11)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10)(20, "mat-form-field", 11)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ManageRfpItemComponent_mat_error_24_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10)(26, "mat-form-field", 11)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Unit of Measure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 10)(31, "mat-form-field", 11)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function ManageRfpItemComponent_Template_input_keyup_34_listener($event) { return ctx.doCalculation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ManageRfpItemComponent_mat_error_35_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ManageRfpItemComponent_mat_error_36_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, ManageRfpItemComponent_mat_error_37_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 10)(39, "mat-form-field", 11)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Unit Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ManageRfpItemComponent_mat_error_43_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, ManageRfpItemComponent_mat_error_44_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, ManageRfpItemComponent_mat_error_45_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 10)(47, "mat-form-field", 11)(48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Negotiated Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, ManageRfpItemComponent_mat_error_51_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, ManageRfpItemComponent_mat_error_52_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 10)(54, "mat-form-field", 11)(55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Final Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, ManageRfpItemComponent_mat_error_58_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, ManageRfpItemComponent_mat_error_59_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, ManageRfpItemComponent_mat_error_60_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 10)(62, "mat-form-field", 11)(63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Need By Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "input", 20)(66, "mat-datepicker-toggle", 21)(67, "mat-datepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, ManageRfpItemComponent_mat_error_69_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, ManageRfpItemComponent_mat_error_70_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 10)(72, "mat-form-field", 11)(73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Tax Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManageRfpItemComponent_Template_mat_icon_click_76_listener() { return ctx.taxesLookup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, ManageRfpItemComponent_mat_error_78_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 10)(80, "mat-form-field", 11)(81, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Tax Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function ManageRfpItemComponent_Template_input_keyup_83_listener($event) { return ctx.doCalculation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManageRfpItemComponent_Template_mat_icon_click_84_listener() { return ctx.taxesLookup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, ManageRfpItemComponent_mat_error_86_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 26)(88, "mat-form-field", 11)(89, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, ManageRfpItemComponent_mat_error_92_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, ManageRfpItemComponent_mat_error_93_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 28)(95, "div", 29)(96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, " Sub - Total amount: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](100, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " Vat: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](105, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "h3")(108, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](112, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 30)(114, "div", 31)(115, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManageRfpItemComponent_Template_button_click_115_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManageRfpItemComponent_Template_button_click_117_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.pageAction, " Rfp Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.bgtForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("itemName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("quantity").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("quantity").hasError("min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("quantity").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("unitPricePerItem").hasError("required") && ctx.bgtForm.get("unitPricePerItem").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("unitPricePerItem").hasError("pattern") && ctx.bgtForm.get("unitPricePerItem").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("unitPricePerItem").hasError("max") && ctx.bgtForm.get("unitPricePerItem").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("negotiatedPrice").hasError("pattern") && ctx.bgtForm.get("negotiatedPrice").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("negotiatedPrice").hasError("max") && ctx.bgtForm.get("negotiatedPrice").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("finalPrice").hasError("required") && ctx.bgtForm.get("finalPrice").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("finalPrice").hasError("pattern") && ctx.bgtForm.get("finalPrice").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("finalPrice").hasError("max") && ctx.bgtForm.get("finalPrice").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("needByDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("needByDate").hasError("pastDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("taxName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("taxRate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("description").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bgtForm.get("description").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](100, 27, ctx.taxDetails.subTotal, "KSH ", "symbol", "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](105, 32, ctx.taxDetails.taxAmount, "KSH ", "symbol", "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](112, 37, ctx.taxDetails.totalAmount, "KSH ", "symbol", "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.bgtForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.pageAction, " Requisition Item ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, ngx_mask__WEBPACK_IMPORTED_MODULE_11__.MaskDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtcmZwLWl0ZW0uY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 45638:
/*!*********************************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/rfps/dialogs/validate-rfp/validate-rfp.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidateRfpComponent": () => (/* binding */ ValidateRfpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_erp_procurement_data_services_rfps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-procurement/data/services/rfps.service */ 98213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);

















function ValidateRfpComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-bar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ValidateRfpComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateRfpComponent_div_31_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 19)(6, "div", 20)(7, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateRfpComponent_div_31_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.return(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 19)(10, "div", 20)(11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateRfpComponent_div_31_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.reject(); });
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
function ValidateRfpComponent_form_32_div_1_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Reason is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ValidateRfpComponent_form_32_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 26)(2, "mat-form-field", 27)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Reason for rejection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ValidateRfpComponent_form_32_div_1_mat_error_6_Template, 2, 0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 30)(8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateRfpComponent_form_32_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.changeStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.statusForm.get("reason").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r7.statusForm.invalid);
} }
function ValidateRfpComponent_form_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ValidateRfpComponent_form_32_div_1_Template, 10, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.statusForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.rejected);
} }
class ValidateRfpComponent {
    constructor(dialogRef, data, fb, snackbar, tokenCookieService, rFPsService, router, datepipe) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.tokenCookieService = tokenCookieService;
        this.rFPsService = rFPsService;
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
        //   this.snackbar.showNotification("snackbar-danger", "You cannot verify this record!");
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
        this.status = "VERIFIED";
        this.statusForm.patchValue({
            reason: "NA"
        });
        this.changeStatus();
    }
    changeStatus() {
        this.validationIsLoading = true;
        let todayDate = this.datepipe.transform(new Date(), "yyyy-MM-ddTHH:mm:ss");
        const params = {
            id: this.Data.id,
            role: this.data.userType,
            status: this.status,
            remarks: this.statusForm.value.reason,
            approvedBy: this.currentUser,
            validatedDate: todayDate
        };
        console.log("Form = ", params);
        this.rFPsService
            .validateRFP(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res) {
                    this.snackbar.showNotification("snackbar-success", "RFP validated successfully");
                }
            },
            error: (err) => {
                console.log("err = ", err);
                this.snackbar.showNotification("snackbar-danger", "Server Error: " + err.message);
            },
            complete: () => {
                this.dialogRef.close();
                this.router.navigate(["/erp-procurement/rfps/all-rfps"]);
            }
        });
    }
}
ValidateRfpComponent.ɵfac = function ValidateRfpComponent_Factory(t) { return new (t || ValidateRfpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_1__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_rfps_service__WEBPACK_IMPORTED_MODULE_2__.RFPsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe)); };
ValidateRfpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ValidateRfpComponent, selectors: [["app-validate-rfp"]], decls: 33, vars: 6, consts: [[1, "addContainer"], [1, "contact-details"], ["class", "m-10", 4, "ngIf"], [1, "modalHeader"], [1, "contact-details-name", "mb-1"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "row"], [1, "col", "text-center", "my-2"], [1, "fas", "fa-check-circle", "fa-6x", "col-green"], [1, "col-8", "my-2"], [1, "dl-horizontal"], [1, "pull-left", "me-2"], [1, ""], ["class", "row", "style", "margin-top: 10px", 4, "ngIf"], ["class", "register-form m-4", 3, "formGroup", 4, "ngIf"], [1, "m-10"], ["color", "primary", "mode", "indeterminate"], [1, "row", 2, "margin-top", "10px"], [1, "col-4"], [1, "row", "m-1"], ["type", "button", 1, "badge", "badge-solid-green", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], ["type", "button", 1, "badge", "badge-solid-brown", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], ["type", "button", 1, "badge", "badge-solid-red", "btn", "btn-lg", "btn-block", "m-1", 3, "disabled", "click"], [1, "register-form", "m-4", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "col-10", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "reason", "matInput", ""], [4, "ngIf"], [1, "col-2", "d-flex", "align-items-center", "justify-content-center", "mb-2"], ["mat-raised-button", "", "color", "primary", "tabindex", "-1", 3, "disabled", "click"]], template: function ValidateRfpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ValidateRfpComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Validate RFP");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidateRfpComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "mat-card-content")(12, "div", 7)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "dl", 11)(17, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "RFP Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "RFP Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "RFP Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ValidateRfpComponent_div_31_Template, 13, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ValidateRfpComponent_form_32_Template, 2, 2, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.validationIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.Data.rfpNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.Data.rfpTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.Data.rfpDescription, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideValidation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxpZGF0ZS1yZnAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 8090:
/*!***********************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/rfps/pages/all-rfps/all-rfps.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllRfpsComponent": () => (/* binding */ AllRfpsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_procurement_data_services_rfps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-procurement/data/services/rfps.service */ 98213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 9748);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ 26439);






























const _c0 = ["paginator"];
function AllRfpsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-progress-bar", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", reqStatus_r36.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", reqStatus_r36.name, " ");
} }
function AllRfpsComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_header_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_cell_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](row_r37.id);
} }
function AllRfpsComponent_mat_header_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "RFPNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_cell_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r38.rfpNumber, "");
} }
function AllRfpsComponent_mat_header_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "RFPTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_cell_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r39.rfpTitle, " ");
} }
function AllRfpsComponent_mat_header_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "ReqNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_cell_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r40.needNumber, "");
} }
function AllRfpsComponent_mat_header_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "startDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_cell_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, row_r41.startDate, "short"), "");
} }
function AllRfpsComponent_mat_header_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "endDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_cell_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, row_r42.endDate, "short"), "");
} }
function AllRfpsComponent_mat_header_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "postedBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_cell_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r43.postedBy, "");
} }
function AllRfpsComponent_mat_header_cell_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "postedTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_cell_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, row_r44.postedTime, "short"), "");
} }
function AllRfpsComponent_mat_header_cell_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "RecipientsReport");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_cell_117_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_117_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_117_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49); const row_r45 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r48.downloadRFPReport(row_r45, "recipients"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\u00A0 Download.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r23.downloadLoading);
} }
function AllRfpsComponent_mat_header_cell_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "ItemsReport");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_cell_120_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_120_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_120_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54); const row_r50 = restoredCtx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r53.downloadRFPReport(row_r50, "items"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\u00A0 Download.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r25.downloadLoading);
} }
function AllRfpsComponent_mat_header_cell_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_cell_123_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", row_r55.status, " ");
} }
function AllRfpsComponent_mat_cell_123_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", row_r55.status, " ");
} }
function AllRfpsComponent_mat_cell_123_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", row_r55.status, " ");
} }
function AllRfpsComponent_mat_cell_123_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", row_r55.status, " ");
} }
function AllRfpsComponent_mat_cell_123_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", row_r55.status, " ");
} }
function AllRfpsComponent_mat_cell_123_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", row_r55.status, " ");
} }
function AllRfpsComponent_mat_cell_123_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", row_r55.status, " ");
} }
function AllRfpsComponent_mat_cell_123_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", row_r55.status, " ");
} }
function AllRfpsComponent_mat_cell_123_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", row_r55.status, " ");
} }
function AllRfpsComponent_mat_cell_123_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", row_r55.status, " ");
} }
function AllRfpsComponent_mat_cell_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_123_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](1, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AllRfpsComponent_mat_cell_123_button_2_Template, 3, 1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AllRfpsComponent_mat_cell_123_button_3_Template, 3, 1, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, AllRfpsComponent_mat_cell_123_button_4_Template, 3, 1, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AllRfpsComponent_mat_cell_123_button_5_Template, 3, 1, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AllRfpsComponent_mat_cell_123_button_6_Template, 3, 1, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AllRfpsComponent_mat_cell_123_button_7_Template, 3, 1, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, AllRfpsComponent_mat_cell_123_button_8_Template, 3, 1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, AllRfpsComponent_mat_cell_123_button_9_Template, 3, 1, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, AllRfpsComponent_mat_cell_123_button_10_Template, 3, 1, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, AllRfpsComponent_mat_cell_123_button_11_Template, 3, 1, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", row_r55.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "VERIFIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "APPLICATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "EVALUATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "PENDING-COMMITTEE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "AWARDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "COMPLETED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "CANCELED");
} }
function AllRfpsComponent_mat_header_cell_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Nomination Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_cell_126_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_126_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_126_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r82); const row_r78 = restoredCtx.$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r81.processNominationEmail(row_r78); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\u00A0 Process Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r78 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", row_r78.status !== "COMPLETED" || ctx_r29.processEmailLoading);
} }
function AllRfpsComponent_mat_header_cell_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-header-cell", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AllRfpsComponent_mat_cell_129_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_129_ng_container_9_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllRfpsComponent_mat_cell_129_ng_container_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r90); const row_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r88.cancelReactivateRFP(row_r83.rfpNumber, "CANCELED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-feather-icons", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("tbl-fav-cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "x");
} }
function AllRfpsComponent_mat_cell_129_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_129_ng_container_10_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllRfpsComponent_mat_cell_129_ng_container_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r94); const row_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r92.cancelReactivateRFP(row_r83.rfpNumber, "PENDING"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-feather-icons", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("tbl-fav-reactivate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "refresh-ccw");
} }
function AllRfpsComponent_mat_cell_129_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-cell", 127)(1, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_129_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllRfpsComponent_mat_cell_129_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r97); const row_r83 = restoredCtx.$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r96.editRFP(row_r83); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-feather-icons", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_129_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllRfpsComponent_mat_cell_129_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r97); const row_r83 = restoredCtx.$implicit; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r99.validateRFP(row_r83); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-feather-icons", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_129_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllRfpsComponent_mat_cell_129_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r97); const row_r83 = restoredCtx.$implicit; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r101.committeeApproval(row_r83); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-feather-icons", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_129_Template_button_click_7_listener($event) { return $event.stopPropagation(); })("click", function AllRfpsComponent_mat_cell_129_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r97); const row_r83 = restoredCtx.$implicit; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r103.viewRFP(row_r83); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-feather-icons", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, AllRfpsComponent_mat_cell_129_ng_container_9_Template, 3, 3, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, AllRfpsComponent_mat_cell_129_ng_container_10_Template, 3, 3, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_cell_129_Template_button_click_11_listener($event) { return $event.stopPropagation(); })("click", function AllRfpsComponent_mat_cell_129_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r97); const row_r83 = restoredCtx.$implicit; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r105.deleteRFP(row_r83.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "app-feather-icons", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "check-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("tbl-fav-committee");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "check-square");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r31.Form.value.status !== "CANCELED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r31.Form.value.status === "CANCELED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", "trash-2");
} }
function AllRfpsComponent_mat_header_row_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-header-row");
} }
function AllRfpsComponent_mat_row_131_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-row", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_mat_row_131_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r108); const row_r106 = restoredCtx.$implicit; const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r107.viewRFP(row_r106); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllRfpsComponent_tr_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("colspan", ctx_r34.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r34.input, "\"");
} }
function AllRfpsComponent_div_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-progress-spinner", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("diameter", 40);
} }
const _c1 = function () { return ["RFPs"]; };
class AllRfpsComponent {
    constructor(router, snackbar, rFPsService, fb, datepipe, accessControlService, tokenStorageService) {
        this.router = router;
        this.snackbar = snackbar;
        this.rFPsService = rFPsService;
        this.fb = fb;
        this.datepipe = datepipe;
        this.accessControlService = accessControlService;
        this.tokenStorageService = tokenStorageService;
        this.displayedColumns = [
            "id",
            "rfpNumber",
            "rfpTitle",
            "needNumber",
            "startDate",
            "endDate",
            "postedBy",
            "postedTime",
            "status",
            "resendNominationLetter",
            "recipientsReport",
            "itemsReport",
            "action",
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.SelectionModel(true, []);
        this.isLoading = true;
        this.pageFunction = "Update";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.downloadLoading = false;
        this.currentDate = new Date();
        this.dateTomorrow = new Date(this.currentDate.getTime() + 1 * 24 * 60 * 60 * 1000);
        this.oneWeekAgo = new Date(this.currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        this.reqStatuses = [
            { name: "PENDING" },
            { name: "VERIFIED" },
            { name: "APPLICATION" },
            { name: "EVALUATION" },
            // { name: "APPROVED" },
            { name: "PENDING-COMMITTEE" },
            // { name: "AWARDING" },
            { name: "COMPLETED" },
            { name: "CANCELED" },
        ];
        this.selectedStatus = "PENDING";
        // getData() {
        //   this.dataSource = new MatTableDataSource([]);
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        //   this.isLoading = true;
        //   this.selectedStatus = this.Form.value.status;
        //   const params = new HttpParams().set("status", this.Form.value.status);
        //   this.rFPsService
        //     .getRFPByStatus(params)
        //     .pipe(takeUntil(this.destroy$))
        //     .subscribe({
        //       next: (res) => {
        //         console.log("this.res :", res);
        //         if (res.statusCode == 302) {
        //           this.data = res.entity;
        //           this.isLoading = false;
        //           this.dataSource = new MatTableDataSource(this.data);
        //           this.dataSource.paginator = this.paginator;
        //           this.dataSource.sort = this.sort;
        //           console.log("this.data :", this.data);
        //         } else {
        //           this.snackbar.showNotification("snackbar-danger", res);
        //         }
        //       },
        //       error: (err) => {
        //         this.snackbar.showNotification(
        //           "snackbar-danger",
        //           "No RFPs Matching these parameters!"
        //         );
        //       },
        //       complete: () => { },
        //     }),
        //     Subscription;
        // }
        this.currentPage = 0;
        this.totalPages = 0;
        this.totalItems = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [2, 5, 10, 20, 30, 40, 50, 100];
        this.processAwardLetterLoading = false;
        this.processEmailLoading = false;
    }
    ngOnInit() {
        this.currentUser = this.tokenStorageService.getUser().username;
        this.Form = this.fb.group({
            status: ["PENDING", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
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
        this.getData(this.currentPage, this.pageSize);
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getData(page, size) {
        this.isLoading = true;
        this.selectedStatus = this.Form.value.status;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (!this.input) {
            this.input = "%";
        }
        let params = {
            pageNo: page,
            pageSize: size,
            searchTerm: this.input,
            status: this.Form.value.status,
        };
        this.rFPsService
            .getRFPByStatus(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res:: ", res);
                console.log("res.entity:: ", res.entity);
                console.log("res.entity.content:: ", res.entity.content);
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.data.content);
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
    getSelectSelectedStatus() {
        this.getData(this.currentPage, this.pageSize);
    }
    getSelectedStatus(status) {
        this.Form.patchValue({
            status: status,
        });
        this.getData(this.currentPage, this.pageSize);
    }
    addRFP() {
        this.router.navigate(["/erp-procurement/rfps/manage-rfp"]);
    }
    editRFP(data) {
        // const additionalData = data;
        // const serializedData = JSON.stringify(additionalData);
        let route = "/erp-procurement/rfps/manage-rfp";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                //additionalData: serializedData,
                action: "Update",
            },
        });
    }
    viewRFP(data) {
        // const additionalData = data;
        // const serializedData = JSON.stringify(additionalData);
        let route = "/erp-procurement/rfps/manage-rfp";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                //additionalData: serializedData,
                action: "View",
            },
        });
    }
    validateRFP(data) {
        let privilege = "Validate RFP";
        this.hasAccess = this.accessControlService.hasPrivilege('ProcurementModule', [privilege]);
        if (this.hasAccess) {
            // const additionalData = data;
            // const serializedData = JSON.stringify(additionalData);
            let route = "/erp-procurement/rfps/manage-rfp";
            this.router.navigate([route], {
                queryParams: {
                    id: data.id,
                    //additionalData: serializedData,
                    action: "Validate",
                },
            });
        }
    }
    committeeApproval(data) {
        let privilege = "RFPs Committee Approval";
        this.hasAccess = this.accessControlService.hasPrivilege('ProcurementModule', [privilege]);
        if (this.hasAccess) {
            // const additionalData = data;
            // const serializedData = JSON.stringify(additionalData);
            let route = "/erp-procurement/rfps/manage-rfp";
            this.router.navigate([route], {
                queryParams: {
                    id: data.id,
                    //additionalData: serializedData,
                    action: "CommitteeApproval",
                },
            });
        }
    }
    deleteRFP(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you sure?",
            text: "Do you really want to delete this RFP?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete RFP!",
        }).then((result) => {
            if (result.isConfirmed) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams()
                    .set("id", id)
                    .set("username", this.currentUser);
                this.rFPsService
                    .deleteRFPsTemporarily(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        this.snackbar.showNotification("snackbar-success", "RFP Deleted Successfully");
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getData(this.currentPage, this.pageSize);
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription;
            }
        });
    }
    cancelReactivateRFP(rfpCode, action) {
        let confirmationTitle = "Are you sure?";
        let confirmationText = "Do you really want to ";
        let confirmationButtonText = "Yes, ";
        if (action === 'CANCELED') {
            confirmationText += "cancel this RFP?";
            confirmationButtonText += "Cancel RFP!";
        }
        else if (action === 'PENDING') {
            confirmationText += "reactivate this RFP?";
            confirmationButtonText += "Reactivate RFP!";
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: confirmationTitle,
            text: confirmationText,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: confirmationButtonText,
        }).then((result) => {
            if (result.isConfirmed) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams()
                    .set("rfpCode", rfpCode)
                    .set("status", action);
                this.rFPsService
                    .cancelOrReactivateRFP(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        if (action === 'CANCELED') {
                            this.snackbar.showNotification("snackbar-success", "RFP Canceled Successfully");
                        }
                        else if (action === 'PENDING') {
                            this.snackbar.showNotification("snackbar-success", "RFP Reactivated Successfully");
                        }
                        this.getData(this.currentPage, this.pageSize);
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", "Server Error: " + err.message);
                    },
                });
            }
        });
    }
    processAwardLetter(row) {
        this.processAwardLetterLoading = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams()
            .set("rfpApplicationCode", row.rfpNumber)
            .set("rfpCode", row.rfpNumber);
        this.rFPsService
            .processSupplierAwardLetter(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.RFPAppres: ", res);
                // res = this.sampleData
                if (res.statusCode === 200) {
                    this.snackbar.showNotification("snackbar-success", res.message);
                    console.log("this.data :", this.data);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
                this.processAwardLetterLoading = false;
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", "Error Processing Request!");
            },
            complete: () => { this.processAwardLetterLoading = false; },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription;
    }
    processNominationEmail(row) {
        console.log("row.row: ", row);
        this.processAwardLetterLoading = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams()
            .set("rfpCode", row.rfpNumber);
        this.rFPsService
            .processEmailForNomination(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.RFPAppres: ", res);
                // res = this.sampleData
                if (res.statusCode === 200) {
                    this.snackbar.showNotification("snackbar-success", res.message);
                    console.log("this.data :", this.data);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
                this.processAwardLetterLoading = false;
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", "Error Processing Request!");
            },
            complete: () => { this.processAwardLetterLoading = false; },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription;
    }
    downloadRFPReport(row, type) {
        this.downloadLoading = true;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams().set("rfpCode", row.RFPNumber);
        if (type === 'recipients') {
            this.rFPsService
                .donwloadRFPRecipientsReport(params)
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
                    // a.download = ".pdf";
                    a.download = `RFPRecipientsReport_${row.rfpNumber}.pdf`;
                    a.click();
                    window.URL.revokeObjectURL(url);
                    a.remove();
                    this.downloadLoading = false;
                    this.snackbar.showNotification("snackbar-success", "Report generated successfully");
                    // if (res.statusCode === 200) {
                    // } else {
                    //   this.snackbar.showNotification("snackbar-danger", res.message);
                    // }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", "Error doanloading Report!");
                    this.downloadLoading = false;
                },
                complete: () => {
                    this.downloadLoading = false;
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription;
        }
        else if (type === 'items') {
            this.rFPsService
                .donwloadRFPItemsReport(params)
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
                    // a.download = ".pdf";
                    a.download = `rfpItemsReport_${row.rfpNumber}.pdf`;
                    a.click();
                    window.URL.revokeObjectURL(url);
                    a.remove();
                    this.downloadLoading = false;
                    this.snackbar.showNotification("snackbar-success", "Report generated successfully");
                    // if (res.statusCode === 200) {
                    // } else {
                    //   this.snackbar.showNotification("snackbar-danger", res.message);
                    // }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", "Error doanloading Report!");
                    this.downloadLoading = false;
                },
                complete: () => {
                    this.downloadLoading = false;
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription;
        }
    }
}
AllRfpsComponent.ɵfac = function AllRfpsComponent_Factory(t) { return new (t || AllRfpsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_rfps_service__WEBPACK_IMPORTED_MODULE_2__.RFPsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_4__.TokenStorageService)); };
AllRfpsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AllRfpsComponent, selectors: [["app-all-rfps"]], viewQuery: function AllRfpsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 136, vars: 30, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-4"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [1, "col-8"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [1, "col-2"], [3, "formGroup"], ["appearance", "fill", 1, "example-full-width"], ["formControlName", "status", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-10"], [1, "button-container", "mt-1"], ["mat-raised-button", "", 1, "mat-button", "pending", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "verified", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "application", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "evaluation", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "pending-committee", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "completed", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "canceled", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-4", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-4", 4, "matCellDef"], ["matColumnDef", "rfpNumber"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-6", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-6", 4, "matCellDef"], ["matColumnDef", "rfpTitle"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "needNumber"], ["matColumnDef", "startDate"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-7", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-7", 4, "matCellDef"], ["matColumnDef", "endDate"], ["matColumnDef", "postedBy"], ["matColumnDef", "postedTime"], ["matColumnDef", "recipientsReport"], ["class", "column-nowrap psl-3 tbl-col-width-per-7", 3, "click", 4, "matCellDef"], ["matColumnDef", "itemsReport"], ["matColumnDef", "status"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-12", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-12", 3, "click", 4, "matCellDef"], ["matColumnDef", "resendNominationLetter"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-9", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-9", 3, "click", 4, "matCellDef"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-25 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-25 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "pageSizeOptions", "length", "pageIndex", "pageSize", "page"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [3, "value"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-4"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-4"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-6"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-6"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-7"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-7"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-7", 3, "click"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1", 3, "disabled", "click"], [1, "fas", "fa-download"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1", 3, "disabled", "click"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-12"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-12", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-purple btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-orange btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-cyan btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-pink btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-purple", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "badge", "badge-solid-orange", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-circle"], [1, "badge", "badge-solid-cyan", "btn", "btn", "btn-sm", "m-1"], [1, "badge", "badge-solid-pink", "btn", "btn", "btn-sm", "m-1"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-question-circle"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-9"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-9", 3, "click"], [1, "badge", "badge-solid-purple", "btn", "btn", "btn-sm", "m-1", 3, "disabled", "click"], [1, "fas", "fa-check-square"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-25", "pr-0"], ["matTooltip", "Edit", "mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matTooltip", "Validate", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "Committee Approval", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "View", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "Delete", "mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "Cancel", "mat-icon-button", "", "color", "warn", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "Reactivate", "mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], [3, "colspan"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllRfpsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, AllRfpsComponent_div_8_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 4)(13, "div", 11)(14, "ul", 12)(15, "li", 13)(16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "RFPs");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "li", 14)(19, "label", 15)(20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function AllRfpsComponent_Template_input_keyup_22_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "li")(25, "div", 19)(26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_Template_button_click_26_listener() { return ctx.addRFP(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "li")(30, "div", 22)(31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_Template_button_click_31_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 23)(35, "ul", 24)(36, "li")(37, "div", 25)(38, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_Template_img_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r109); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](90); return _r5.exportTable("xlsx", { fileName: "RFPs-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "li")(40, "div", 27)(41, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_Template_img_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r109); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](90); return _r5.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "li")(43, "div", 29)(44, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_Template_img_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r109); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](90); return _r5.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "li")(46, "div", 31)(47, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_Template_img_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r109); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](90); return _r5.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 33)(49, "div", 4)(50, "div", 34)(51, "form", 35)(52, "mat-form-field", 36)(53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "mat-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AllRfpsComponent_Template_mat_select_selectionChange_55_listener() { return ctx.getSelectSelectedStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, AllRfpsComponent_mat_option_56_Template, 2, 2, "mat-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, AllRfpsComponent_mat_error_57_Template, 2, 0, "mat-error", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 40)(59, "div", 41)(60, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_Template_button_click_60_listener() { return ctx.getSelectedStatus("PENDING"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, " PENDING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_Template_button_click_64_listener() { return ctx.getSelectedStatus("VERIFIED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, " VERIFIED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_Template_button_click_68_listener() { return ctx.getSelectedStatus("APPLICATION"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, " APPLICATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_Template_button_click_72_listener() { return ctx.getSelectedStatus("EVALUATION"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, " EVALUATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_Template_button_click_76_listener() { return ctx.getSelectedStatus("PENDING-COMMITTEE"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "group");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, " PENDING-COMMITTEE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_Template_button_click_80_listener() { return ctx.getSelectedStatus("COMPLETED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "done_all");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, " COMPLETED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AllRfpsComponent_Template_button_click_84_listener() { return ctx.getSelectedStatus("CANCELED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, " CANCELED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "mat-table", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](91, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](92, AllRfpsComponent_mat_header_cell_92_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](93, AllRfpsComponent_mat_cell_93_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](94, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](95, AllRfpsComponent_mat_header_cell_95_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](96, AllRfpsComponent_mat_cell_96_Template, 2, 1, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](97, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](98, AllRfpsComponent_mat_header_cell_98_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](99, AllRfpsComponent_mat_cell_99_Template, 2, 1, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](100, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](101, AllRfpsComponent_mat_header_cell_101_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](102, AllRfpsComponent_mat_cell_102_Template, 2, 1, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](103, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](104, AllRfpsComponent_mat_header_cell_104_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](105, AllRfpsComponent_mat_cell_105_Template, 3, 4, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](106, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](107, AllRfpsComponent_mat_header_cell_107_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](108, AllRfpsComponent_mat_cell_108_Template, 3, 4, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](109, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](110, AllRfpsComponent_mat_header_cell_110_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](111, AllRfpsComponent_mat_cell_111_Template, 2, 1, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](112, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](113, AllRfpsComponent_mat_header_cell_113_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](114, AllRfpsComponent_mat_cell_114_Template, 3, 4, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](115, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](116, AllRfpsComponent_mat_header_cell_116_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](117, AllRfpsComponent_mat_cell_117_Template, 4, 1, "mat-cell", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](118, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](119, AllRfpsComponent_mat_header_cell_119_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](120, AllRfpsComponent_mat_cell_120_Template, 4, 1, "mat-cell", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](121, 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](122, AllRfpsComponent_mat_header_cell_122_Template, 2, 0, "mat-header-cell", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](123, AllRfpsComponent_mat_cell_123_Template, 12, 10, "mat-cell", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](124, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](125, AllRfpsComponent_mat_header_cell_125_Template, 2, 0, "mat-header-cell", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](126, AllRfpsComponent_mat_cell_126_Template, 4, 1, "mat-cell", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](127, 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](128, AllRfpsComponent_mat_header_cell_128_Template, 2, 0, "mat-header-cell", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](129, AllRfpsComponent_mat_cell_129_Template, 13, 17, "mat-cell", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](130, AllRfpsComponent_mat_header_row_130_Template, 1, 0, "mat-header-row", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](131, AllRfpsComponent_mat_row_131_Template, 1, 2, "mat-row", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](132, AllRfpsComponent_tr_132_Template, 3, 2, "tr", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](133, AllRfpsComponent_div_133_Template, 2, 1, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "mat-paginator", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function AllRfpsComponent_Template_mat_paginator_page_134_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](135, "\n/");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "All RFPs")("items", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](29, _c1))("active_item", "All RFPs");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.downloadLoading || ctx.processEmailLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.Form.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx.selectedStatus === "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx.selectedStatus === "VERIFIED");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx.selectedStatus === "APPLICATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx.selectedStatus === "EVALUATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx.selectedStatus === "PENDING-COMMITTEE");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx.selectedStatus === "COMPLETED");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx.selectedStatus === "CANCELED");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("length", ctx.totalItems)("pageIndex", ctx.currentPage)("pageSize", ctx.pageSize);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_6__.GenWidgetsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_26__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_7__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe], styles: [".mat-button.pending[_ngcontent-%COMP%] {\n  background-color: #FFBB33;\n  \n  color: #333;\n  \n  border: 2px solid #FFBB33;\n  \n}\n\n.mat-button.verified[_ngcontent-%COMP%] {\n  background-color: #6A3DA1;\n  \n  color: white;\n  border: 2px solid #6A3DA1;\n}\n\n.mat-button.application[_ngcontent-%COMP%] {\n  background-color: #007B9D;\n  \n  color: white;\n  border: 2px solid #007B9D;\n}\n\n.mat-button.evaluation[_ngcontent-%COMP%] {\n  background-color: #007BFF;\n  \n  color: white;\n  border: 2px solid #007BFF;\n}\n\n.mat-button.approved[_ngcontent-%COMP%] {\n  background-color: #198754;\n  \n  color: white;\n  border: 2px solid #198754;\n}\n\n.mat-button.pending-committee[_ngcontent-%COMP%] {\n  background-color: #DC3545;\n  \n  color: white;\n  border: 2px solid #DC3545;\n}\n\n.mat-button.awarding[_ngcontent-%COMP%] {\n  background-color: #6610F2;\n  \n  color: white;\n  border: 2px solid #6610F2;\n}\n\n.mat-button.completed[_ngcontent-%COMP%] {\n  background-color: #6C757D;\n  \n  color: white;\n  border: 2px solid #6C757D;\n}\n\n.mat-button.canceled[_ngcontent-%COMP%] {\n  background-color: #FF5733;\n  \n  color: white;\n  border: 2px solid #FF5733;\n}\n.spacing[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.mat-button[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.mat-button[_ngcontent-%COMP%]:hover {\n  \n  background-color: #d7d6d4;\n  color: white;\n}\n\n.mat-button.active[_ngcontent-%COMP%] {\n  \n  background-color: #a1a1a1;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1yZnBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFBO0FBQ0EsOEJBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQTJCLGlCQUFBO0VBQzNCLFdBQUE7RUFBYSxtQkFBQTtFQUNiLHlCQUFBO0VBQTJCLG9CQUFBO0FBSTdCO0FBREEscURBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQTJCLFdBQUE7RUFDM0IsWUFBQTtFQUNBLHlCQUFBO0FBS0Y7QUFGQSxrQ0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFBMkIsY0FBQTtFQUMzQixZQUFBO0VBQ0EseUJBQUE7QUFNRjtBQUhBLGlDQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUEyQixnQkFBQTtFQUMzQixZQUFBO0VBQ0EseUJBQUE7QUFPRjtBQUpBLCtCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUEyQixrQkFBQTtFQUMzQixZQUFBO0VBQ0EseUJBQUE7QUFRRjtBQUxBLHdDQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUEyQixRQUFBO0VBQzNCLFlBQUE7RUFDQSx5QkFBQTtBQVNGO0FBTkEsK0JBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQTJCLFdBQUE7RUFDM0IsWUFBQTtFQUNBLHlCQUFBO0FBVUY7QUFQQSxnQ0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFBMkIsZUFBQTtFQUMzQixZQUFBO0VBQ0EseUJBQUE7QUFXRjtBQVJBLCtCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUEyQixtQkFBQTtFQUMzQixZQUFBO0VBQ0EseUJBQUE7QUFZRjtBQU5BO0VBQ0UsV0FBQTtBQVNGO0FBTEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFRRjtBQUpBO0VBQ0UsaUJBQUE7QUFPRjtBQURBLGlDQUFBO0FBQ0E7RUFDRSxrRkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUlGO0FBREEsMENBQUE7QUFDQTtFQUNFLHdGQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSUYiLCJmaWxlIjoiYWxsLXJmcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEZWZpbmUgY29sb3JzIGZvciBlYWNoIHN0YXR1cyAqL1xyXG4vKiBCdXR0b24gZm9yIFBFTkRJTkcgc3RhdHVzICovXHJcbi5tYXQtYnV0dG9uLnBlbmRpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkJCMzM7IC8qIFZpdmlkIE9yYW5nZSAqL1xyXG4gIGNvbG9yOiAjMzMzOyAvKiBEYXJrIEdyYXkgVGV4dCAqL1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkJCMzM7IC8qIE1hdGNoaW5nIEJvcmRlciAqL1xyXG59XHJcblxyXG4vKiBCdXR0b24gZm9yIFZFUklGSUVEIHN0YXR1cyAod2l0aCBhIHVuaXF1ZSBjb2xvcikgKi9cclxuLm1hdC1idXR0b24udmVyaWZpZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2QTNEQTE7IC8qIFB1cnBsZSAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNkEzREExO1xyXG59XHJcblxyXG4vKiBCdXR0b24gZm9yIEFQUExJQ0FUSU9OIHN0YXR1cyAqL1xyXG4ubWF0LWJ1dHRvbi5hcHBsaWNhdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0I5RDsgLyogRGVlcCBCbHVlICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDdCOUQ7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbiBmb3IgRVZBTFVBVElPTiBzdGF0dXMgKi9cclxuLm1hdC1idXR0b24uZXZhbHVhdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0JGRjsgLyogQnJpZ2h0IEJsdWUgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwN0JGRjtcclxufVxyXG5cclxuLyogQnV0dG9uIGZvciBBUFBST1ZFRCBzdGF0dXMgKi9cclxuLm1hdC1idXR0b24uYXBwcm92ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTg3NTQ7IC8qIEdyZWVuaXNoIFRlYWwgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzE5ODc1NDtcclxufVxyXG5cclxuLyogQnV0dG9uIGZvciBQRU5ESU5HIENPTU1JVFRFRSBzdGF0dXMgKi9cclxuLm1hdC1idXR0b24ucGVuZGluZy1jb21taXR0ZWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQzM1NDU7IC8qIFJlZCAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjREMzNTQ1O1xyXG59XHJcblxyXG4vKiBCdXR0b24gZm9yIEFXQVJESU5HIHN0YXR1cyAqL1xyXG4ubWF0LWJ1dHRvbi5hd2FyZGluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2MTBGMjsgLyogUHVycGxlICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2NjEwRjI7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbiBmb3IgQ09NUExFVEVEIHN0YXR1cyAqL1xyXG4ubWF0LWJ1dHRvbi5jb21wbGV0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Qzc1N0Q7IC8qIFNsYXRlIEdyYXkgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzZDNzU3RDtcclxufVxyXG5cclxuLyogQnV0dG9uIGZvciBDQU5DRUxFRCBzdGF0dXMgKi9cclxuLm1hdC1idXR0b24uY2FuY2VsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjU3MzM7IC8qIFJlZGRpc2ggT3JhbmdlICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRjU3MzM7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5zcGFjaW5nIHtcclxuICBtYXJnaW46IDhweDsgXHJcbn1cclxuXHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLm1hdC1idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vKiBBZGQgaG92ZXIgZWZmZWN0IGZvciBidXR0b25zICovXHJcbi5tYXQtYnV0dG9uOmhvdmVyIHtcclxuICAvKiBVc2UgYSBzbGlnaHRseSBsaWdodGVyIHNoYWRlIG9mIHRoZSBkZWZpbmVkIGJhY2tncm91bmQtY29sb3IgZm9yIGhvdmVyIGVmZmVjdCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oI2JlYmRiYSwgMTAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIERlZmluZSBzdHlsZXMgZm9yIHRoZSBzZWxlY3RlZCBidXR0b24gKi9cclxuLm1hdC1idXR0b24uYWN0aXZlIHtcclxuICAvKiBVc2UgYSBzbGlnaHRseSBkYXJrZXIgc2hhZGUgb2YgdGhlIGRlZmluZWQgYmFja2dyb3VuZC1jb2xvciBmb3IgdGhlIHNlbGVjdGVkIGJ1dHRvbiAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjYmFiYWJhLCAxMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 67371:
/*!***************************************************************************************!*\
  !*** ./src/app/erp-procurement/modules/rfps/pages/manage-rfp/manage-rfp.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageRfpComponent": () => (/* binding */ ManageRfpComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _parameters_pages_lookups_needs_lookup_needs_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../parameters/pages/lookups/needs-lookup/needs-lookup.component */ 93611);
/* harmony import */ var _parameters_pages_lookups_proc_committees_lookup_proc_committees_lookup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../parameters/pages/lookups/proc-committees-lookup/proc-committees-lookup.component */ 60360);
/* harmony import */ var _parameters_pages_lookups_suppliers_lookup_suppliers_lookup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../parameters/pages/lookups/suppliers-lookup/suppliers-lookup.component */ 62275);
/* harmony import */ var _dialogs_validate_rfp_validate_rfp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/validate-rfp/validate-rfp.component */ 45638);
/* harmony import */ var _dialogs_manage_rfp_item_manage_rfp_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/manage-rfp-item/manage-rfp-item.component */ 72644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_erp_procurement_data_services_rfps_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/erp-procurement/data/services/rfps.service */ 98213);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var src_app_erp_procurement_data_services_need_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/erp-procurement/data/services/need.service */ 92878);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var src_app_erp_procurement_data_services_procurement_calculations_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_procurement-calculations.service */ 65912);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/paginator */ 26439);








































const _c0 = ["paginatorItems"];
const _c1 = ["paginatorSuppliers"];
function ManageRfpComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "RFP Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Start Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Enter a valid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_error_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "End Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_error_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Enter a valid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const requestCategory_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", requestCategory_r116.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](requestCategory_r116.name);
} }
function ManageRfpComponent_div_8_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_error_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Finance Percentage is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_error_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Finance Percentage must be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_error_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Technical Percentage is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_error_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Technical Percentage must be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_error_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "RFPDescription is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_error_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "RFPDescription must not exceed 300 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_error_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Suppliers Justification is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_error_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "SuppliersJustification must not exceed 300 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_ng_template_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Requisition Items ");
} }
function ManageRfpComponent_div_8_mat_header_cell_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_155_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " #");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_155_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r117.id);
} }
function ManageRfpComponent_div_8_mat_header_cell_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "itemCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_158_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r119.itemCode, "");
} }
function ManageRfpComponent_div_8_mat_cell_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_158_span_1_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r119.itemCode);
} }
function ManageRfpComponent_div_8_mat_header_cell_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "itemName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_161_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r122.itemName, "");
} }
function ManageRfpComponent_div_8_mat_cell_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_161_span_1_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r122 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r122.itemName);
} }
function ManageRfpComponent_div_8_mat_header_cell_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_164_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r125.description, "");
} }
function ManageRfpComponent_div_8_mat_cell_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_164_span_1_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r125.description);
} }
function ManageRfpComponent_div_8_mat_header_cell_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_167_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r128.quantity, "");
} }
function ManageRfpComponent_div_8_mat_cell_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_167_span_1_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r128 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r128.quantity);
} }
function ManageRfpComponent_div_8_mat_header_cell_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "UnitPrice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_170_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind4"](2, 1, row_r131.unitPricePerItem, "KSH ", "symbol", "1.2-2"), " ");
} }
function ManageRfpComponent_div_8_mat_cell_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_170_span_1_Template, 3, 6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r131 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r131.unitPricePerItem);
} }
function ManageRfpComponent_div_8_mat_header_cell_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "NegotiatedPrice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_173_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind4"](2, 1, row_r134.negotiatedPrice, "KSH ", "symbol", "1.2-2"), " ");
} }
function ManageRfpComponent_div_8_mat_cell_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_173_span_1_Template, 3, 6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r134 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r134.negotiatedPrice);
} }
function ManageRfpComponent_div_8_mat_header_cell_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "subTotal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_176_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind4"](2, 1, row_r137.subTotal, "KSH ", "symbol", "1.2-2"), "");
} }
function ManageRfpComponent_div_8_mat_cell_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_176_span_1_Template, 3, 6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r137 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r137.subTotal);
} }
function ManageRfpComponent_div_8_mat_header_cell_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "TaxAmount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_179_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind4"](2, 1, row_r140.taxAmount, "KSH ", "symbol", "1.2-2"), "");
} }
function ManageRfpComponent_div_8_mat_cell_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_179_span_1_Template, 3, 6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r140 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r140.taxAmount);
} }
function ManageRfpComponent_div_8_mat_header_cell_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "TotalAmount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_182_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind4"](2, 1, row_r143.totalAmount, "KSH ", "symbol", "1.2-2"), " ");
} }
function ManageRfpComponent_div_8_mat_cell_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_182_span_1_Template, 3, 6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r143 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r143.totalAmount);
} }
function ManageRfpComponent_div_8_mat_header_cell_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_185_Template(rf, ctx) { if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 140)(1, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_mat_cell_185_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ManageRfpComponent_div_8_mat_cell_185_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r150); const row_r146 = restoredCtx.$implicit; const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r149.manageRfpItem(row_r146, "Update"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "app-feather-icons", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_mat_cell_185_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r150); const i_r147 = restoredCtx.index; const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r151.onDeleteNeedDetails(i_r147); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "app-feather-icons", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r44.disableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r44.disableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", "trash-2");
} }
function ManageRfpComponent_div_8_mat_header_row_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "mat-header-row");
} }
function ManageRfpComponent_div_8_mat_row_187_Template(rf, ctx) { if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-row", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_mat_row_187_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r155); const row_r152 = restoredCtx.$implicit; const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r154.manageRfpItem(row_r152, "Update"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ManageRfpComponent_div_8_div_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-progress-spinner", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("diameter", 40);
} }
function ManageRfpComponent_div_8_ng_template_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " RFP Attachements ");
} }
function ManageRfpComponent_div_8_mat_header_cell_224_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r157 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r157);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", index_r157 + 1, " ");
} }
function ManageRfpComponent_div_8_mat_header_cell_227_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Filename");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_228_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 149)(1, "mat-form-field", 150)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Filename");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r159 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r159);
} }
function ManageRfpComponent_div_8_mat_header_cell_230_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Filetype");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_231_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 149)(1, "mat-form-field", 150)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Filetype");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r161 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r161);
} }
function ManageRfpComponent_div_8_mat_header_cell_233_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_234_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 154)(1, "input", 155, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ManageRfpComponent_div_8_mat_cell_234_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r166); const row_r162 = restoredCtx.$implicit; const index_r163 = restoredCtx.index; const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](2); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r165.onSelectRFPAttachmentsFile(_r164.files, row_r162, index_r163); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r163 = ctx.index;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r163);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 3, ctx_r60.isLoading))("multiple", "multiple");
} }
function ManageRfpComponent_div_8_mat_header_cell_236_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_237_Template(rf, ctx) { if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 157)(1, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_mat_cell_237_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ManageRfpComponent_div_8_mat_cell_237_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r171); const row_r167 = restoredCtx.$implicit; const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r170.downloadDocument(row_r167); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} }
function ManageRfpComponent_div_8_mat_header_cell_239_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_240_Template(rf, ctx) { if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 157)(1, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_mat_cell_240_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ManageRfpComponent_div_8_mat_cell_240_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r176); const row_r172 = restoredCtx.$implicit; const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r175.deleteCall(row_r172); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "app-feather-icons", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", "trash-2");
} }
function ManageRfpComponent_div_8_mat_header_row_241_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "mat-header-row");
} }
function ManageRfpComponent_div_8_mat_row_242_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "mat-row", 161);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ManageRfpComponent_div_8_mat_cell_243_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r67.input.value, "\"");
} }
function ManageRfpComponent_div_8_div_244_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-progress-spinner", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("diameter", 40);
} }
function ManageRfpComponent_div_8_ng_template_247_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Suppliers ");
} }
function ManageRfpComponent_div_8_mat_header_cell_295_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_296_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " #");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_296_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_296_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r179 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r179.id);
} }
function ManageRfpComponent_div_8_mat_header_cell_298_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "supplierCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_299_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r181.supplierCode, "");
} }
function ManageRfpComponent_div_8_mat_cell_299_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_299_span_1_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r181 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r181.supplierCode);
} }
function ManageRfpComponent_div_8_mat_header_cell_301_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "supplierCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_302_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r184.supplierCode, "");
} }
function ManageRfpComponent_div_8_mat_cell_302_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_302_span_1_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r184 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r184.supplierCode);
} }
function ManageRfpComponent_div_8_mat_header_cell_304_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "CompanyName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_305_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r187.companyName, "");
} }
function ManageRfpComponent_div_8_mat_cell_305_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_305_span_1_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r187 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r187.companyName);
} }
function ManageRfpComponent_div_8_mat_header_cell_307_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "PhoneNumber ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_308_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r190.phoneNumber, "");
} }
function ManageRfpComponent_div_8_mat_cell_308_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_308_span_1_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r190 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r190.phoneNumber);
} }
function ManageRfpComponent_div_8_mat_header_cell_310_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "EmailAddress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_311_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r193.emailAddress, "");
} }
function ManageRfpComponent_div_8_mat_cell_311_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ManageRfpComponent_div_8_mat_cell_311_span_1_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r193 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r193.emailAddress);
} }
function ManageRfpComponent_div_8_mat_header_cell_313_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_314_Template(rf, ctx) { if (rf & 1) {
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 140)(1, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_mat_cell_314_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r199); const i_r197 = restoredCtx.index; const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r198.onDeleteSupplier(i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "app-feather-icons", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r86.disableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", "trash-2");
} }
function ManageRfpComponent_div_8_mat_header_row_315_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "mat-header-row");
} }
function ManageRfpComponent_div_8_mat_row_316_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "mat-row", 161);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ManageRfpComponent_div_8_div_317_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-progress-spinner", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("diameter", 40);
} }
function ManageRfpComponent_div_8_ng_template_321_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " RFP Committee Approval ");
} }
function ManageRfpComponent_div_8_mat_header_cell_353_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_354_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r203 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r203);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", index_r203 + 1, " ");
} }
function ManageRfpComponent_div_8_mat_header_cell_356_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "CommitteeName");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_357_Template(rf, ctx) { if (rf & 1) {
    const _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 149)(1, "mat-form-field", 150)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "CommitteeName");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "mat-icon", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_mat_cell_357_Template_mat_icon_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r207); const index_r205 = restoredCtx.index; const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r206.committeesLookup(index_r205); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const index_r205 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r205);
} }
function ManageRfpComponent_div_8_mat_header_cell_359_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_360_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rfpCommitteeStatus_r211 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", rfpCommitteeStatus_r211.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](rfpCommitteeStatus_r211.name);
} }
function ManageRfpComponent_div_8_mat_cell_360_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 149)(1, "mat-form-field", 150)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "mat-select", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ManageRfpComponent_div_8_mat_cell_360_mat_option_5_Template, 2, 2, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "input", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r209 = ctx.index;
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r209);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r100.rfpCommitteeStatuses);
} }
function ManageRfpComponent_div_8_mat_header_cell_362_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Filename");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_363_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 149)(1, "mat-form-field", 150)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Filename");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r213 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r213);
} }
function ManageRfpComponent_div_8_mat_header_cell_365_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Filetype");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_366_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 149)(1, "mat-form-field", 150)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Filetype");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r215 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r215);
} }
function ManageRfpComponent_div_8_mat_header_cell_368_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_369_Template(rf, ctx) { if (rf & 1) {
    const _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 154)(1, "input", 155, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ManageRfpComponent_div_8_mat_cell_369_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r220); const row_r216 = restoredCtx.$implicit; const index_r217 = restoredCtx.index; const _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](2); const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r219.onSelectFile(_r218.files, row_r216, index_r217); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r217 = ctx.index;
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", index_r217);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 3, ctx_r106.isLoading))("multiple", "multiple");
} }
function ManageRfpComponent_div_8_mat_header_cell_371_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_372_Template(rf, ctx) { if (rf & 1) {
    const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 157)(1, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_mat_cell_372_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ManageRfpComponent_div_8_mat_cell_372_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r225); const row_r221 = restoredCtx.$implicit; const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r224.downloadDocument(row_r221); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} }
function ManageRfpComponent_div_8_mat_header_cell_374_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-header-cell", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ManageRfpComponent_div_8_mat_cell_375_Template(rf, ctx) { if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 157)(1, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_mat_cell_375_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ManageRfpComponent_div_8_mat_cell_375_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r230); const row_r226 = restoredCtx.$implicit; const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r229.deleteCall(row_r226); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "app-feather-icons", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", "trash-2");
} }
function ManageRfpComponent_div_8_mat_header_row_376_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "mat-header-row");
} }
function ManageRfpComponent_div_8_mat_row_377_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "mat-row", 161);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ManageRfpComponent_div_8_mat_cell_378_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-cell", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r113.input.value, "\"");
} }
function ManageRfpComponent_div_8_div_379_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-progress-spinner", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("diameter", 40);
} }
function ManageRfpComponent_div_8_button_387_Template(rf, ctx) { if (rf & 1) {
    const _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_button_387_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r234); const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r233.onValidate("Verifier"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "done_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " Verifier Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r115.hideApprovals);
} }
const _c2 = function () { return [3, 5, 10, 20, 30, 40, 50, 100]; };
const _c3 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
function ManageRfpComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r236 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15)(5, "div", 16)(6, "div", 17)(7, "div", 18)(8, "div", 19)(9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 21)(12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 18)(15, "div", 19)(16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Created Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 21)(19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 18)(23, "div", 19)(24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "Verified By");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 21)(27, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 18)(30, "div", 19)(31, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, "Verified Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 21)(34, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "div", 26)(38, "div", 17)(39, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "form", 27)(42, "div", 17)(43, "div", 28)(44, "mat-form-field", 29)(45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46, "RFP Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](47, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](48, ManageRfpComponent_div_8_mat_error_48_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "div", 28)(50, "mat-form-field", 29)(51, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](52, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](53, "input", 32)(54, "mat-datepicker-toggle", 33)(55, "mat-datepicker", null, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](57, ManageRfpComponent_div_8_mat_error_57_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](58, ManageRfpComponent_div_8_mat_error_58_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "div", 28)(60, "mat-form-field", 29)(61, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](62, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](63, "input", 35)(64, "mat-datepicker-toggle", 33)(65, "mat-datepicker", null, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](67, ManageRfpComponent_div_8_mat_error_67_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](68, ManageRfpComponent_div_8_mat_error_68_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div", 28)(70, "mat-form-field", 37)(71, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](72, "RequestCategory");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "mat-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](74, ManageRfpComponent_div_8_mat_option_74_Template, 2, 2, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](75, ManageRfpComponent_div_8_mat_error_75_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "div", 28)(77, "mat-form-field", 37)(78, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](79, "financialPercentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](80, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](81, ManageRfpComponent_div_8_mat_error_81_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](82, ManageRfpComponent_div_8_mat_error_82_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "div", 28)(84, "mat-form-field", 37)(85, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](86, "TechnicalPercentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](87, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](88, ManageRfpComponent_div_8_mat_error_88_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](89, ManageRfpComponent_div_8_mat_error_89_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "div", 42)(91, "mat-form-field", 29)(92, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](93, "RFP Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](94, "textarea", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](95, ManageRfpComponent_div_8_mat_error_95_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](96, ManageRfpComponent_div_8_mat_error_96_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](97, "div", 42)(98, "mat-form-field", 29)(99, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](100, "Supplier Selection Justification");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](101, "textarea", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](102, ManageRfpComponent_div_8_mat_error_102_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](103, ManageRfpComponent_div_8_mat_error_103_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](104, "mat-tab-group")(105, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](106, ManageRfpComponent_div_8_ng_template_106_Template, 3, 0, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](107, "div", 46)(108, "div", 26)(109, "div", 17)(110, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](111, "Requisition Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](112, "div", 47)(113, "div", 48)(114, "div", 17)(115, "div", 49)(116, "ul", 50)(117, "li", 51)(118, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](119, "Requisition Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "li", 52)(121, "label", 53)(122, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](123, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](124, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function ManageRfpComponent_div_8_Template_input_keyup_124_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r235.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](126, "li")(127, "div", 57)(128, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_button_click_128_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r237.needsLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](130, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](131, "li")(132, "div", 60)(133, "button", 61)(134, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](135, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](136, "div", 62)(137, "ul", 63)(138, "li")(139, "div", 64)(140, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_img_click_140_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](152); return _r22.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](141, "li")(142, "div", 66)(143, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_img_click_143_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](152); return _r22.exportTable("csv"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](144, "li")(145, "div", 68)(146, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_img_click_146_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](152); return _r22.exportTable("json"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](147, "li")(148, "div", 70)(149, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_img_click_149_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](152); return _r22.exportTable("txt"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](150, "mat-table", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](153, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](154, ManageRfpComponent_div_8_mat_header_cell_154_Template, 2, 0, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](155, ManageRfpComponent_div_8_mat_cell_155_Template, 2, 1, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](156, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](157, ManageRfpComponent_div_8_mat_header_cell_157_Template, 2, 0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](158, ManageRfpComponent_div_8_mat_cell_158_Template, 2, 1, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](159, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](160, ManageRfpComponent_div_8_mat_header_cell_160_Template, 2, 0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](161, ManageRfpComponent_div_8_mat_cell_161_Template, 2, 1, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](162, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](163, ManageRfpComponent_div_8_mat_header_cell_163_Template, 2, 0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](164, ManageRfpComponent_div_8_mat_cell_164_Template, 2, 1, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](165, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](166, ManageRfpComponent_div_8_mat_header_cell_166_Template, 2, 0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](167, ManageRfpComponent_div_8_mat_cell_167_Template, 2, 1, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](168, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](169, ManageRfpComponent_div_8_mat_header_cell_169_Template, 2, 0, "mat-header-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](170, ManageRfpComponent_div_8_mat_cell_170_Template, 2, 1, "mat-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](171, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](172, ManageRfpComponent_div_8_mat_header_cell_172_Template, 2, 0, "mat-header-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](173, ManageRfpComponent_div_8_mat_cell_173_Template, 2, 1, "mat-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](174, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](175, ManageRfpComponent_div_8_mat_header_cell_175_Template, 2, 0, "mat-header-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](176, ManageRfpComponent_div_8_mat_cell_176_Template, 2, 1, "mat-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](177, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](178, ManageRfpComponent_div_8_mat_header_cell_178_Template, 2, 0, "mat-header-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](179, ManageRfpComponent_div_8_mat_cell_179_Template, 2, 1, "mat-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](180, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](181, ManageRfpComponent_div_8_mat_header_cell_181_Template, 2, 0, "mat-header-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](182, ManageRfpComponent_div_8_mat_cell_182_Template, 2, 1, "mat-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](183, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](184, ManageRfpComponent_div_8_mat_header_cell_184_Template, 2, 0, "mat-header-cell", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](185, ManageRfpComponent_div_8_mat_cell_185_Template, 5, 8, "mat-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](186, ManageRfpComponent_div_8_mat_header_row_186_Template, 1, 0, "mat-header-row", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](187, ManageRfpComponent_div_8_mat_row_187_Template, 1, 2, "mat-row", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](188, ManageRfpComponent_div_8_div_188_Template, 2, 1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](189, "mat-paginator", 96, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](191, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](192, ManageRfpComponent_div_8_ng_template_192_Template, 3, 0, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](193, "div", 46)(194, "div", 26)(195, "div", 17)(196, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](197, "Upload RFP Attachement Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](198, "form", 98)(199, "div", 99)(200, "div", 100)(201, "div", 48)(202, "div", 17)(203, "div", 49)(204, "ul", 50)(205, "li", 51)(206, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](207, "Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](208, "li", 52)(209, "label", 53)(210, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](211, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](212, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function ManageRfpComponent_div_8_Template_input_keyup_212_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r242.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](214, "li")(215, "div", 57)(216, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_button_click_216_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r243.addRFPAttachmentsFileRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](217, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](218, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](219, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](220, "mat-table", 101, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](223, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](224, ManageRfpComponent_div_8_mat_header_cell_224_Template, 2, 0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](225, ManageRfpComponent_div_8_mat_cell_225_Template, 2, 2, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](226, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](227, ManageRfpComponent_div_8_mat_header_cell_227_Template, 2, 0, "mat-header-cell", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](228, ManageRfpComponent_div_8_mat_cell_228_Template, 5, 1, "mat-cell", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](229, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](230, ManageRfpComponent_div_8_mat_header_cell_230_Template, 2, 0, "mat-header-cell", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](231, ManageRfpComponent_div_8_mat_cell_231_Template, 5, 1, "mat-cell", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](232, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](233, ManageRfpComponent_div_8_mat_header_cell_233_Template, 2, 0, "mat-header-cell", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](234, ManageRfpComponent_div_8_mat_cell_234_Template, 4, 5, "mat-cell", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](235, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](236, ManageRfpComponent_div_8_mat_header_cell_236_Template, 2, 0, "mat-header-cell", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](237, ManageRfpComponent_div_8_mat_cell_237_Template, 4, 0, "mat-cell", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](238, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](239, ManageRfpComponent_div_8_mat_header_cell_239_Template, 2, 0, "mat-header-cell", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](240, ManageRfpComponent_div_8_mat_cell_240_Template, 3, 3, "mat-cell", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](241, ManageRfpComponent_div_8_mat_header_row_241_Template, 1, 0, "mat-header-row", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](242, ManageRfpComponent_div_8_mat_row_242_Template, 1, 2, "mat-row", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](243, ManageRfpComponent_div_8_mat_cell_243_Template, 2, 1, "mat-cell", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](244, ManageRfpComponent_div_8_div_244_Template, 2, 1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](245, "mat-paginator", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](246, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](247, ManageRfpComponent_div_8_ng_template_247_Template, 3, 0, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](248, "div", 46)(249, "div", 26)(250, "div", 17)(251, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](252, "Suppliers");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](253, "div", 47)(254, "div", 48)(255, "div", 17)(256, "div", 49)(257, "ul", 50)(258, "li", 51)(259, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](260, "Suppliers to recieve RFPs");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](261, "li", 52)(262, "label", 53)(263, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](264, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](265, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function ManageRfpComponent_div_8_Template_input_keyup_265_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r244.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](267, "li")(268, "div", 57)(269, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_button_click_269_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r245.suppliersLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](270, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](271, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](272, "li")(273, "div", 60)(274, "button", 61)(275, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](276, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](277, "div", 62)(278, "ul", 63)(279, "li")(280, "div", 64)(281, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_img_click_281_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](152); return _r22.exportTable("xlsx", { fileName: "RFP-Items-list", sheet: "sheet1" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](282, "li")(283, "div", 66)(284, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_img_click_284_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](152); return _r22.exportTable("csv"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](285, "li")(286, "div", 68)(287, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_img_click_287_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](152); return _r22.exportTable("json"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](288, "li")(289, "div", 70)(290, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_img_click_290_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](152); return _r22.exportTable("txt"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](291, "mat-table", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](294, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](295, ManageRfpComponent_div_8_mat_header_cell_295_Template, 2, 0, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](296, ManageRfpComponent_div_8_mat_cell_296_Template, 2, 1, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](297, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](298, ManageRfpComponent_div_8_mat_header_cell_298_Template, 2, 0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](299, ManageRfpComponent_div_8_mat_cell_299_Template, 2, 1, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](300, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](301, ManageRfpComponent_div_8_mat_header_cell_301_Template, 2, 0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](302, ManageRfpComponent_div_8_mat_cell_302_Template, 2, 1, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](303, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](304, ManageRfpComponent_div_8_mat_header_cell_304_Template, 2, 0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](305, ManageRfpComponent_div_8_mat_cell_305_Template, 2, 1, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](306, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](307, ManageRfpComponent_div_8_mat_header_cell_307_Template, 2, 0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](308, ManageRfpComponent_div_8_mat_cell_308_Template, 2, 1, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](309, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](310, ManageRfpComponent_div_8_mat_header_cell_310_Template, 2, 0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](311, ManageRfpComponent_div_8_mat_cell_311_Template, 2, 1, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](312, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](313, ManageRfpComponent_div_8_mat_header_cell_313_Template, 2, 0, "mat-header-cell", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](314, ManageRfpComponent_div_8_mat_cell_314_Template, 3, 4, "mat-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](315, ManageRfpComponent_div_8_mat_header_row_315_Template, 1, 0, "mat-header-row", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](316, ManageRfpComponent_div_8_mat_row_316_Template, 1, 2, "mat-row", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](317, ManageRfpComponent_div_8_div_317_Template, 2, 1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](318, "mat-paginator", 96, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](320, "mat-tab", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](321, ManageRfpComponent_div_8_ng_template_321_Template, 3, 0, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](322, "div", 46)(323, "div", 26)(324, "div", 17)(325, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](326, "Upload Commmittee Approval Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](327, "form", 98)(328, "div", 99)(329, "div", 100)(330, "div", 48)(331, "div", 17)(332, "div", 49)(333, "ul", 50)(334, "li", 51)(335, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](336, "Upload Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](337, "li", 52)(338, "label", 53)(339, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](340, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](341, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function ManageRfpComponent_div_8_Template_input_keyup_341_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r250.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](343, "li")(344, "div", 57)(345, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_button_click_345_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r251.addFileRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](346, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](347, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](348, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](349, "mat-table", 101, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](352, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](353, ManageRfpComponent_div_8_mat_header_cell_353_Template, 2, 0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](354, ManageRfpComponent_div_8_mat_cell_354_Template, 2, 2, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](355, 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](356, ManageRfpComponent_div_8_mat_header_cell_356_Template, 2, 0, "mat-header-cell", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](357, ManageRfpComponent_div_8_mat_cell_357_Template, 7, 1, "mat-cell", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](358, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](359, ManageRfpComponent_div_8_mat_header_cell_359_Template, 2, 0, "mat-header-cell", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](360, ManageRfpComponent_div_8_mat_cell_360_Template, 7, 2, "mat-cell", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](361, 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](362, ManageRfpComponent_div_8_mat_header_cell_362_Template, 2, 0, "mat-header-cell", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](363, ManageRfpComponent_div_8_mat_cell_363_Template, 5, 1, "mat-cell", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](364, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](365, ManageRfpComponent_div_8_mat_header_cell_365_Template, 2, 0, "mat-header-cell", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](366, ManageRfpComponent_div_8_mat_cell_366_Template, 5, 1, "mat-cell", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](367, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](368, ManageRfpComponent_div_8_mat_header_cell_368_Template, 2, 0, "mat-header-cell", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](369, ManageRfpComponent_div_8_mat_cell_369_Template, 4, 5, "mat-cell", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](370, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](371, ManageRfpComponent_div_8_mat_header_cell_371_Template, 2, 0, "mat-header-cell", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](372, ManageRfpComponent_div_8_mat_cell_372_Template, 4, 0, "mat-cell", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](373, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](374, ManageRfpComponent_div_8_mat_header_cell_374_Template, 2, 0, "mat-header-cell", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](375, ManageRfpComponent_div_8_mat_cell_375_Template, 3, 3, "mat-cell", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](376, ManageRfpComponent_div_8_mat_header_row_376_Template, 1, 0, "mat-header-row", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](377, ManageRfpComponent_div_8_mat_row_377_Template, 1, 2, "mat-row", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](378, ManageRfpComponent_div_8_mat_cell_378_Template, 2, 1, "mat-cell", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](379, ManageRfpComponent_div_8_div_379_Template, 2, 1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](380, "mat-paginator", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](381, "div", 128)(382, "div", 129)(383, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_button_click_383_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r252.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](384, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](385, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](386, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](387, ManageRfpComponent_div_8_button_387_Template, 4, 1, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](388, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ManageRfpComponent_div_8_Template_button_click_388_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r236); const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r253.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](389, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](390, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](391);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](56);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](66);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", (ctx_r1.formData == null ? null : ctx_r1.formData.postedBy) ? ctx_r1.formData.postedBy : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](21, 58, ctx_r1.formData == null ? null : ctx_r1.formData.postedTime, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", (ctx_r1.formData == null ? null : ctx_r1.formData.verifiedBy) ? ctx_r1.formData.verifiedBy : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](36, 61, ctx_r1.formData == null ? null : ctx_r1.formData.verifiedTime, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r1.pageFunction, " RFP");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("rfpTitle").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matDatepicker", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("for", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("startDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("startDate").hasError("pastDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matDatepicker", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("for", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("endDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("endDate").hasError("periodStart"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.requestCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("requestCategory").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("financialPercentage").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("financialPercentage").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("technicalPercentage").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("technicalPercentage").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("rfpDescription").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("rfpDescription").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("suppliersJustification").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mngForm.get("suppliersJustification").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", ctx_r1.dataSourceItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedItemColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedItemColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pageSize", 3)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](64, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.documentsRFPAttachmentsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", ctx_r1.attachementsRFPAttachmentsDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayRFPAttachmentsColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayRFPAttachmentsColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isFileRFPAttachmentsDataLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](65, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", ctx_r1.dataSourceSuppliers);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedSupplierColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedSupplierColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pageSize", 100)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](66, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.isTabDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.documentsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", ctx_r1.attachementsDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isFileDataLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](67, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.hideApprovals);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("auth-spinner", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r1.mngForm.valid || ctx_r1.isLoading)("hidden", ctx_r1.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" RFP ", ctx_r1.pageFunction, " ");
} }
const _c4 = function () { return ["RFPs"]; };
class ManageRfpComponent {
    constructor(fb, router, activatedRoute, tokenStorageService, rFPsService, snackbar, route, dialog, accessControlService, needService, filesService, calculationService) {
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.tokenStorageService = tokenStorageService;
        this.rFPsService = rFPsService;
        this.snackbar = snackbar;
        this.route = route;
        this.dialog = dialog;
        this.accessControlService = accessControlService;
        this.needService = needService;
        this.filesService = filesService;
        this.calculationService = calculationService;
        this.showForm = false;
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.showVerificationDet = false;
        // ***************************************************************
        this.displayedItemColumns = [
            "id",
            "itemCode",
            "itemName",
            "description",
            "quantity",
            "actions",
        ];
        this.dataSourceItems = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource([]);
        // ***************************************************************
        this.displayedSupplierColumns = [
            "id",
            "supplierCode",
            "companyName",
            "phoneNumber",
            "emailAddress",
            "actions",
        ];
        this.dataSourceSuppliers = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource([]);
        // ***************************************************************
        this.hideApprovals = true;
        this.requestCategories = [{ name: "Open" }, { name: "Closed" }];
        this.disableActions = false;
        this.isTabDisabled = true;
        this.itemsArray = [];
        this.suppliersArray = [];
        this.pageAction = "Add";
        // ****************************************************************************************************************************
        this.supplierIsSelected = false;
        this.selectedSuppliers = [];
        //*************************************************************************************************************************** */
        this.requsitionIsSelected = false;
        this.selectedRequsitions = [];
        this.procurementCommitteeIsSelected = false;
        this.totals = {
            totalTax: 0,
            subTotalAmount: 0,
            totalAmount: 0,
        };
        // ****************************************************************************************************************************
        // **************************************************************************************************
        //UploadRFPDocuments
        this.attachementsRFPAttachmentsDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        this.displayRFPAttachmentsColumns = [
            "id",
            "fileName",
            "fileType",
            "selectFile",
            "download",
            "action",
        ];
        this.rowsRFPAttachments = this.fb.array([]);
        this.documentsRFPAttachmentsForm = this.fb.group({
            filedetails: this.rowsRFPAttachments,
        });
        this.isFileRFPAttachmentsDataLoading = true;
        this.selectedFilesRFPAttachments = [];
        this.isFileLoadingRFPAttachments = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(false);
        //*************************************************************************************************** */
        // **************************************************************************************************
        //UploadDocuments
        this.rfpCommitteeStatuses = [{ name: "Approved" }, { name: "Returned" }];
        this.attachementsDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        this.displayColumns = [
            "id",
            "committeeName",
            "status",
            "filename",
            "filetype",
            "selectFile",
            "download",
            "action",
        ];
        this.rows = this.fb.array([]);
        this.documentsForm = this.fb.group({ filedetails: this.rows });
        this.isFileDataLoading = true;
        this.selectedFiles = [];
        this.isFileLoading = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(false);
        this.isLoading = false;
        this.currentUser = this.tokenStorageService.getUser().username;
    }
    ngOnInit() {
        this.getPage();
        if (this.route.queryParams &&
            typeof this.route.queryParams.subscribe === "function") {
            this.route.queryParams.subscribe((params) => {
                console.log("params: ", params);
                if (params.id) {
                    this.rfpId = params.id;
                    console.log("ID:", this.rfpId);
                    this.getDataById();
                    this.pageAction = params.action;
                    this.pageFunction = params.action;
                }
            });
            this.showForm = true;
        }
        else {
            this.showForm = true;
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    ngAfterViewInit() {
        // Connect the paginators and sorters to their respective data sources
        // this.dataSourceItems.paginator = this.paginatorItems;
        // this.dataSourceItems.sort = this.sortItems;
        // this.dataSourceSuppliers.paginator = this.paginatorSuppliers;
        // this.dataSourceSuppliers.sort = this.sortSuppliers;
    }
    getDataById() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpParams().set("id", this.rfpId);
        this.rFPsService
            .getRFPById(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                if (res.entity) {
                    this.formData = res.entity;
                    this.getPage();
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
            rxjs__WEBPACK_IMPORTED_MODULE_20__.Subscription;
    }
    getNeedDataById() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpParams().set("id", this.formNeedData.id);
        this.needService
            .getNeedsById(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                if (res.entity) {
                    this.formNeedData = res.entity;
                    console.log("this.formNeedData: ", this.formNeedData);
                    const newArray = this.formNeedData.needItems.map((element) => {
                        return {
                            itemName: element.itemName,
                            itemCode: element.itemCode,
                            description: element.itemDescription,
                            quantity: element.itemQuantity,
                            needByDate: element.needByDate,
                            unitOfMeasure: element.unitOfMeasure,
                        };
                    });
                    console.log("newArray: ", newArray);
                    this.dataSourceItems = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(newArray);
                    this.dataSourceItems.paginator = this.paginatorItems;
                    this.dataSourceItems.sort = this.sortItems;
                    this.mngForm.patchValue({
                        rfpItems: this.dataSourceItems.data,
                        needNumber: this.formNeedData.needCode,
                    });
                    this.requsitionIsSelected = true;
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
            rxjs__WEBPACK_IMPORTED_MODULE_20__.Subscription;
    }
    getPage() {
        if (this.pageFunction === "Add") {
            this.generateForm();
            this.hideApprovals = true;
            if (this.formData && this.formData.needItems.length > 0) {
                console.log("formData: ", this.formData.needItems);
                const newArray = this.formData.needItems.map((element) => {
                    return {
                        itemName: element.itemName,
                        itemCode: element.itemCode,
                        description: element.description,
                        quantity: element.quantity,
                    };
                });
                console.log("newArray: ", newArray);
                this.dataSourceItems = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(newArray);
                this.dataSourceItems.paginator = this.paginatorItems;
                this.dataSourceItems.sort = this.sortItems;
                this.mngForm.patchValue({
                    rfpItems: this.dataSourceItems.data,
                    needNumber: this.formData.needCode,
                });
            }
        }
        else if (this.pageFunction === "Update") {
            this.displayedItemColumns = [
                "id",
                "itemCode",
                "itemName",
                "description",
                "quantity",
                "unitPricePerItem",
                "negotiatedPrice",
                "subTotal",
                "taxAmount",
                "totalAmount",
                "actions",
            ];
            this.generateFormWithData();
            this.hideApprovals = true;
            this.showVerificationDet = true;
            if (this.formData && this.formData.rfpItems.length > 0) {
                console.log("formData: ", this.formData.rfpItems);
                this.dataSourceItems = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(this.formData.rfpItems);
                this.dataSourceItems.paginator = this.paginatorItems;
                this.dataSourceItems.sort = this.sortItems;
            }
            if (this.formData && this.formData.rfpRecipients.length > 0) {
                console.log("formData: ", this.formData.rfpRecipients);
                this.dataSourceSuppliers = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(this.formData.rfpRecipients);
                this.dataSourceSuppliers.paginator = this.paginatorSuppliers;
                this.dataSourceSuppliers.sort = this.sortSuppliers;
            }
            if (this.formData.rfpDocumentations.length > 0) {
                this.isFileRFPAttachmentsDataLoading = false;
                this.formData.rfpDocumentations.forEach((element) => {
                    const newRow = this.fb.group({
                        file: [element.file],
                        fileName: [element.fileName],
                        fileType: [element.fileType],
                    });
                    this.rowsRFPAttachments.push(newRow);
                });
                this.updateRFPAttachmentsView();
            }
            this.calculateTotals();
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledRFPForm();
            this.hideSubmit = true;
            this.hideApprovals = true;
            if (this.formData && this.formData.rfpItems.length > 0) {
                console.log("formData: ", this.formData.rfpItems);
                this.dataSourceItems = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(this.formData.rfpItems);
                this.dataSourceItems.paginator = this.paginatorItems;
                this.dataSourceItems.sort = this.sortItems;
            }
            if (this.formData && this.formData.rfpRecipients.length > 0) {
                console.log("formData: ", this.formData.rfpRecipients);
                this.dataSourceSuppliers = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(this.formData.rfpRecipients);
                this.dataSourceSuppliers.paginator = this.paginatorSuppliers;
                this.dataSourceSuppliers.sort = this.sortSuppliers;
            }
            if (this.formData.rfpDocumentations.length > 0) {
                this.isFileRFPAttachmentsDataLoading = false;
                this.formData.rfpDocumentations.forEach((element) => {
                    const newRow = this.fb.group({
                        file: [element.file],
                        fileName: [element.fileName],
                        fileType: [element.fileType],
                    });
                    this.rowsRFPAttachments.push(newRow);
                });
                this.updateRFPAttachmentsView();
            }
            this.calculateTotals();
        }
        else if (this.pageFunction === "Validate") {
            this.generateFormWithData();
            this.hideApprovals = false;
            this.hideSubmit = true;
            this.showVerificationDet = true;
            if (this.formData && this.formData.rfpItems.length > 0) {
                console.log("formData: ", this.formData.rfpItems);
                this.dataSourceItems = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(this.formData.rfpItems);
                this.dataSourceItems.paginator = this.paginatorItems;
                this.dataSourceItems.sort = this.sortItems;
            }
            if (this.formData && this.formData.rfpRecipients.length > 0) {
                console.log("formData: ", this.formData.rfpRecipients);
                this.dataSourceSuppliers = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(this.formData.rfpRecipients);
                this.dataSourceSuppliers.paginator = this.paginatorSuppliers;
                this.dataSourceSuppliers.sort = this.sortSuppliers;
            }
            if (this.formData.rfpDocumentations.length > 0) {
                this.isFileRFPAttachmentsDataLoading = false;
                this.formData.rfpDocumentations.forEach((element) => {
                    const newRow = this.fb.group({
                        file: [element.file],
                        fileName: [element.fileName],
                        fileType: [element.fileType],
                    });
                    this.rowsRFPAttachments.push(newRow);
                });
                this.updateRFPAttachmentsView();
            }
            this.calculateTotals();
        }
        else if (this.pageFunction === "CommitteeApproval") {
            this.generateFormWithData();
            this.hideApprovals = true;
            this.showVerificationDet = true;
            if (this.formData && this.formData.rfpItems.length > 0) {
                console.log("formData: ", this.formData.rfpItems);
                this.dataSourceItems = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(this.formData.rfpItems);
                this.dataSourceItems.paginator = this.paginatorItems;
                this.dataSourceItems.sort = this.sortItems;
            }
            if (this.formData && this.formData.rfpRecipients.length > 0) {
                console.log("formData: ", this.formData.rfpRecipients);
                this.dataSourceSuppliers = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(this.formData.rfpRecipients);
                this.dataSourceSuppliers.paginator = this.paginatorSuppliers;
                this.dataSourceSuppliers.sort = this.sortSuppliers;
            }
            if (this.formData.rfpDocumentations.length > 0) {
                this.isFileRFPAttachmentsDataLoading = false;
                this.formData.rfpDocumentations.forEach((element) => {
                    const newRow = this.fb.group({
                        file: [element.file],
                        fileName: [element.fileName],
                        fileType: [element.fileType],
                    });
                    this.rowsRFPAttachments.push(newRow);
                });
                this.updateRFPAttachmentsView();
            }
            if (this.formData.reqCommApproval === "Y") {
                this.isTabDisabled = false;
            }
            this.calculateTotals();
        }
    }
    // {
    //   "endDate": "2023-08-08T13:45:20.814Z",
    //   "financialPercentage": 0,
    //   "id": 0,
    //   "isRfpBidComplete": "string",
    //   "isRfpClosed": "string",
    //   "isRfpEvaluated": "string",
    //   "needNumber": "string",
    //   "numberOfSuppliers": 0,
    //   "remarks": "string",
    //   "reqCommApproval": "string",
    //   "rfpApplicationCode": "string",
    //   "rfpDescription": "string",
    //   "rfpDocumentations": [
    //     {
    //       "file": "string",
    //       "fileName": "string",
    //       "fileType": "string",
    //       "id": 0
    //     }
    //   ],
    //   "rfpItems": [
    //     {
    //       "description": "string",
    //       "id": 0,
    //       "itemCode": "string",
    //       "itemName": "string",
    //       "needByDate": "2023-08-08T13:45:20.814Z",
    //       "quantity": 0,
    //       "quoteDescription": "string",
    //       "subTotal": 0,
    //       "taxAmount": 0,
    //       "taxName": "string",
    //       "taxRate": 0,
    //       "totalAmount": 0,
    //       "unitOfMeasure": "string",
    //       "unitPricePerItem": 0
    //     }
    //   ],
    //   "rfpNumber": "string",
    //   "rfpTitle": "string",
    //   "rfpCommitteeApprovals": [
    //     {
    //       "committeeId": "string",
    //       "committeeName": "string",
    //       "file": "string",
    //       "filename": "string",
    //       "filetype": "string",
    //       "id": 0,
    //       "status": "string"
    //     }
    //   ],
    //   "rfprecipients": [
    //     {
    //       "companyName": "string",
    //       "emailAddress": "string",
    //       "id": 0,
    //       "phoneNumber": "string",
    //       "supplierCode": "string"
    //     }
    //   ],
    //   "requestCategory": "string",
    //   "startDate": "2023-08-08T13:45:20.814Z",
    //   "status": "string",
    //   "supplierCode": "string",
    //   "supplierName": "string",
    //   "supplierQuotation": 0,
    //   "technicalPercentage": 0
    // }
    generateForm() {
        this.mngForm = this.fb.group({
            numberOfSuppliers: [""],
            needNumber: [""],
            rfpDescription: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.maxLength(300)]],
            suppliersJustification: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.maxLength(300)]],
            rfpNumber: "",
            rfpTitle: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            requestCategory: [""],
            status: ["PENDING", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            endDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            technicalPercentage: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.pattern(/^[0-9]*$/)],
            ],
            financialPercentage: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.pattern(/^[0-9]*$/)],
            ],
            rfpRecipients: [[]],
            rfpItems: [[]],
            rfpDocumentations: [[]],
        });
    }
    generateFormWithData() {
        this.mngForm = this.fb.group({
            id: [this.formData.id],
            numberOfSuppliers: [this.formData.numberOfSuppliers],
            needNumber: [this.formData.needNumber],
            rfpDescription: [
                this.formData.rfpDescription,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.maxLength(300)],
            ],
            suppliersJustification: [
                this.formData.suppliersJustification,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.maxLength(300)],
            ],
            rfpNumber: [this.formData.rfpNumber],
            rfpTitle: [this.formData.rfpTitle, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            requestCategory: [this.formData.requestCategory],
            status: [this.formData.status],
            startDate: [this.formData.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            endDate: [this.formData.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            technicalPercentage: [
                this.formData.technicalPercentage,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.pattern(/^[0-9]*$/)],
            ],
            financialPercentage: [
                this.formData.financialPercentage,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.pattern(/^[0-9]*$/)],
            ],
            rfpRecipients: [this.formData.rfpRecipients],
            rfpItems: [this.formData.rfpItems],
            rfpDocumentations: [this.formData.rfpDocumentations],
            rfpCommitteeApprovals: [this.formData.rfpCommitteeApprovals],
        });
    }
    generateDisabledRFPForm() {
        this.mngForm = this.fb.group({
            id: { value: this.formData.id, disabled: true },
            numberOfSuppliers: {
                value: this.formData.numberOfSuppliers,
                disabled: true,
            },
            needNumber: {
                value: this.formData.needNumber,
                disabled: true,
            },
            rfpDescription: [
                { value: this.formData.rfpDescription, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            ],
            suppliersJustification: [
                { value: this.formData.suppliersJustification, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            ],
            rfpNumber: { value: this.formData.rfpNumber, disabled: true },
            rfpTitle: [
                { value: this.formData.rfpTitle, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            ],
            requestCategory: [
                { value: this.formData.requestCategory, disabled: true },
            ],
            status: { value: this.formData.status, disabled: true },
            startDate: [
                { value: this.formData.startDate, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            ],
            endDate: [
                { value: this.formData.endDate, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            ],
            approvedBy: { value: this.formData.approvedBy, disabled: true },
            approvedOn: { value: this.formData.approvedOn, disabled: true },
            createdBy: { value: this.formData.createdBy, disabled: true },
            createdOn: { value: this.formData.createdOn, disabled: true },
            rfpRecipients: { value: this.formData.rfpRecipients, disabled: true },
            rfpItems: { value: this.formData.rfpItems, disabled: true },
            technicalPercentage: {
                value: this.formData.technicalPercentage,
                disabled: true,
            },
            financialPercentage: {
                value: this.formData.financialPercentage,
                disabled: true,
            },
        });
    }
    suppliersLookup() {
        if (this.mngForm.value.requestCategory !== null &&
            this.mngForm.value.requestCategory !== "" &&
            this.mngForm.value.requestCategory !== undefined) {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.width = "800px";
            dialogConfig.data = {
                action: "view suppliers",
                selected: this.selectedSuppliers,
                category: this.mngForm.value.requestCategory,
            };
            const dialogRef = this.dialog.open(_parameters_pages_lookups_suppliers_lookup_suppliers_lookup_component__WEBPACK_IMPORTED_MODULE_2__.SuppliersLookupComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                if (result && result.data.length != 0) {
                    console.log("result: ", result.data);
                    const newArray = result.data.map((element) => {
                        return {
                            supplierCode: element.supplierCode,
                            companyName: element.companyName,
                            phoneNumber: element.phone,
                            emailAddress: element.email,
                        };
                    });
                    console.log("newArray: ", newArray);
                    this.dataSourceSuppliers = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(newArray);
                    this.dataSourceSuppliers.paginator = this.paginatorSuppliers;
                    this.dataSourceSuppliers.sort = this.sortSuppliers;
                    this.supplierIsSelected = true;
                    this.mngForm.patchValue({
                        rfpRecipients: this.dataSourceSuppliers.data,
                        numberOfSuppliers: this.dataSourceSuppliers.data.length,
                    });
                }
            });
        }
        else {
            this.snackbar.showNotification("snackbar-danger", "Kindly select supplier request category to proceed!");
        }
    }
    onDeleteSupplier(index) {
        this.dataSourceSuppliers.data.splice(index, 1);
        this.dataSourceSuppliers.data = this.dataSourceSuppliers.data.slice();
    }
    needsLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "900px";
        dialogConfig.data = {
            action: "view requsitions",
            selected: this.selectedRequsitions,
            needType: "RFP",
        };
        const dialogRef = this.dialog.open(_parameters_pages_lookups_needs_lookup_needs_lookup_component__WEBPACK_IMPORTED_MODULE_0__.NeedsLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            if (result && result.data.length != 0) {
                console.log("result: ", result.data);
                this.formNeedData = result.data[0];
                this.getNeedDataById();
            }
        });
    }
    committeesLookup(index) {
        console.log("index: ", index);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "600px";
        dialogConfig.data = {
            action: "single committee",
        };
        const dialogRef = this.dialog.open(_parameters_pages_lookups_proc_committees_lookup_proc_committees_lookup_component__WEBPACK_IMPORTED_MODULE_1__.ProcCommitteesLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            if (result && result.data.length != 0) {
                console.log("result: ", result.data);
                this.procurementCommitteeIsSelected = true;
                this.rows.at(index).patchValue({
                    committeeId: result.data[0].id,
                    committeeName: result.data[0].committeeName,
                });
                this.updateView();
            }
        });
    }
    // committeesLookup() {
    //   // committeeId: ["", Validators.required],
    //   // committeeName: ["", Validators.required],
    // }
    //******************************************************************************************************************************** */
    onDeleteNeedDetails(index) {
        this.dataSourceItems.data.splice(index, 1);
        this.dataSourceItems.data = this.dataSourceItems.data.slice();
    }
    manageRfpItem(row, action) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            data: row,
            action: action,
        };
        const dialogRef = this.dialog.open(_dialogs_manage_rfp_item_manage_rfp_item_component__WEBPACK_IMPORTED_MODULE_4__.ManageRfpItemComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                console.log("result.item: ", result.item);
                const index = this.dataSourceItems.data.findIndex((item) => item.id === result.item.id);
                this.dataSourceItems.data.splice(index, 1, result.item);
                // Refresh the data source
                this.dataSourceItems.data = [...this.dataSourceItems.data];
                this.calculateTotals();
            }
        });
    }
    calculateTotals() {
        const dataArray = this.dataSourceItems.data;
        console.log("dataArray: ", dataArray);
        this.totals = this.calculationService.calculateTotals(dataArray);
        console.log("totals: ", this.totals);
    }
    createRFPAttachmentsFileForm() {
        this.fileFormRFPAttachments = this.fb.group({
            files: this.fb.array([]),
        });
        //this.fileInputs = this.fileForm.get('files') as FormArray;
        this.addRFPAttachmentsFileRow();
    }
    addRFPAttachmentsFileRow() {
        this.isFileRFPAttachmentsDataLoading = false;
        const row = this.fb.group({
            file: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            fileType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            fileName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
        });
        //this.fileInputs.push(row);
        this.rowsRFPAttachments.push(row);
        this.attachementsRFPAttachmentsDataSource.next(this.rowsRFPAttachments.controls);
    }
    updateRFPAttachmentsView() {
        this.attachementsRFPAttachmentsDataSource.next(this.rowsRFPAttachments.controls);
        this.mngForm.patchValue({
            rfpDocumentations: this.documentsRFPAttachmentsForm.value.filedetails,
        });
    }
    // deleteCall(index){
    //   this.dataSource.splice(index, 1);
    // }
    deleteRFPAttachmentsCall(row) {
        const dataArray = this.attachementsRFPAttachmentsDataSource.getValue(); // Get the underlying array
        const index = dataArray.indexOf(row); // Find the index of the row
        if (index !== -1) {
            dataArray.splice(index, 1); // Remove 1 item at the specified index
            this.attachementsRFPAttachmentsDataSource.next(dataArray); // Update the BehaviorSubject with the modified array
        }
    }
    onSelectRFPAttachmentsFile(files, selectedRow, index) {
        console.log("row: ", selectedRow.value, index);
        this.isFileLoadingRFPAttachments.next(true);
        this.selectedFilesRFPAttachments = [];
        this.filesService
            .toBase64(files, this.selectedFilesRFPAttachments)
            .subscribe((res) => {
            if (res) {
                this.isFileLoadingRFPAttachments.next(false);
                this.selectedFilesRFPAttachments = res;
                console.log("selectedFiles: ", this.selectedFilesRFPAttachments);
                console.log("this.selectedFiles[0].name: ", this.selectedFilesRFPAttachments[0].name);
                this.currFileRFPAttachments =
                    this.selectedFilesRFPAttachments[0].base64;
                const fileName = this.selectedFilesRFPAttachments[0].name;
                const fileParts = fileName.split(".");
                const name = fileParts.slice(0, -1).join("."); // Join all parts except the last one
                const extension = fileParts[fileParts.length - 1];
                console.log("Name:", name); // Output: Lease Armotization (3)
                console.log("Extension:", extension); // Output: xlsx
                this.currFilenameRFPAttachments = name;
                this.currTypeRFPAttachments = extension;
                // committeeId: ["", Validators.required],
                // committeeName: ["", Validators.required],
                this.rowsRFPAttachments.at(index).patchValue({
                    file: this.currFileRFPAttachments,
                    fileName: this.currFilenameRFPAttachments,
                    fileType: this.currTypeRFPAttachments,
                });
                this.updateRFPAttachmentsView();
            }
        });
    }
    downloadRFPAttachmentsDocument(row) {
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
    createFileForm() {
        this.fileForm = this.fb.group({
            files: this.fb.array([]),
        });
        //this.fileInputs = this.fileForm.get('files') as FormArray;
        this.addFileRow();
    }
    // "rfpCommitteeApprovals": [
    //   {
    //     "committeeId": "string",
    //     "committeeName": "string",
    //     "file": "string",
    //     "filename": "string",
    //     "filetype": "string",
    //     "id": 0,
    //     "status": "string"
    //   }
    // ],
    addFileRow() {
        this.isFileDataLoading = false;
        const row = this.fb.group({
            committeeId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            committeeName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            file: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            filetype: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            filename: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
            status: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required],
        });
        //this.fileInputs.push(row);
        this.rows.push(row);
        this.attachementsDataSource.next(this.rows.controls);
    }
    updateView() {
        this.attachementsDataSource.next(this.rows.controls);
    }
    // deleteCall(index){
    //   this.dataSource.splice(index, 1);
    // }
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
                this.currFilename = name;
                this.currType = extension;
                // committeeId: ["", Validators.required],
                // committeeName: ["", Validators.required],
                this.rows.at(index).patchValue({
                    file: this.currFile,
                    filename: this.currFilename,
                    filetype: this.currType,
                });
                this.updateView();
            }
        });
    }
    downloadDocument(row) {
        let file = row.value.file;
        let filename = row.value.filename;
        let filetype = row.value.filetype;
        // Download PDF in Chrome etc.
        const source = `${file}`;
        const link = document.createElement("a");
        link.href = source;
        link.download = `${filename}.${filetype}`;
        link.click();
    }
    onValidate(userType) {
        let privilege = "Validate RFP";
        this.hasAccess = this.accessControlService.hasPrivilege("ProcurementModule", [privilege]);
        if (this.hasAccess) {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.width = "650px";
            dialogConfig.data = {
                data: this.formData,
                userType: userType,
            };
            const dialogRef = this.dialog.open(_dialogs_validate_rfp_validate_rfp_component__WEBPACK_IMPORTED_MODULE_3__.ValidateRfpComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                this.router.navigate(["/erp-procurement/rfps/all-rfps"]);
            });
        }
    }
    // ****************************************************************************************************************************
    cancel() {
        this.router.navigate(["/erp-procurement/rfps/all-rfps"]);
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        this.isLoading = true;
        if (this.pageFunction === "Add") {
            this.rFPsService
                .addRFP(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    console.log("res : ", res);
                    if (res.statusCode == 201) {
                        this.snackbar.showNotification("snackbar-success", "RFP Added Successfully");
                        this.router.navigate(["/erp-procurement/rfps/all-rfps"]);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    console.log("err : ", err);
                    this.snackbar.showNotification("snackbar-danger", err.message);
                },
                complete: () => {
                    this.isLoading = false;
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_20__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            console.log("this.mngForm.value : ", this.mngForm.value);
            this.rFPsService
                .updateRFP(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "RFP Updated Successfully");
                        this.router.navigate(["/erp-procurement/rfps/all-rfps"]);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                },
                complete: () => { this.isLoading = false; },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_20__.Subscription;
        }
        else if (this.pageFunction === "CommitteeApproval") {
            if (this.formData.reqCommApproval === "Y") {
                this.mngForm.patchValue({
                    rfpCommitteeApprovals: this.documentsForm.value.filedetails,
                });
            }
            console.log("this.mngForm.value : ", this.mngForm.value);
            let params = { rfpCode: this.mngForm.value.rfpNumber };
            let approvalAttachments = this.documentsForm.value.filedetails;
            this.rFPsService
                .updateRFPCommetteeApproval(params, approvalAttachments)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "RFP Updated Successfully");
                        this.router.navigate(["/erp-procurement/rfps/all-rfps"]);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                },
                complete: () => { this.isLoading = false; },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_20__.Subscription;
        }
    }
}
ManageRfpComponent.ɵfac = function ManageRfpComponent_Factory(t) { return new (t || ManageRfpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_5__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_rfps_service__WEBPACK_IMPORTED_MODULE_6__.RFPsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_8__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_need_service__WEBPACK_IMPORTED_MODULE_9__.NeedService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_10__.FilesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_procurement_calculations_service__WEBPACK_IMPORTED_MODULE_11__.CalculationService)); };
ManageRfpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: ManageRfpComponent, selectors: [["app-manage-rfp"]], viewQuery: function ManageRfpComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.paginatorItems = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.sortItems = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.paginatorSuppliers = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.sortSuppliers = _t.first);
    } }, decls: 9, vars: 6, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "body", 4, "ngIf"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "body"], [1, "row", "mx-2"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "bg-color"], [1, "chat"], [1, "chat-header", "clearfix"], [1, "row"], [1, "col-lg-3", "col-sm-6"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages", "mt-2"], [1, "badge", "badge-solid-blue", 2, "color", "#fff", "background-color", "#007bff"], [1, "badge", "badge-solid-pink", 2, "color", "#fff", "background-color", "#e81c62"], [1, "badge", "badge-solid-blue", 2, "color", "#fff", "background-color", "#28a745"], [1, "badge", "badge-solid-pink", 2, "color", "#fff", "background-color", "#d35400"], [1, "header"], [1, "mx-4", 3, "formGroup"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12", "mb-3"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "rfpTitle"], [4, "ngIf"], ["matInput", "", "formControlName", "startDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "endDate", 3, "matDatepicker"], ["picker2", ""], ["appearance", "outline", 1, "example-full-width", "mb-1"], ["formControlName", "requestCategory"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "financialPercentage"], ["matInput", "", "formControlName", "technicalPercentage"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-3"], ["matInput", "", "formControlName", "rfpDescription", "required", ""], ["matInput", "", "formControlName", "suppliersJustification"], ["mat-tab-label", ""], [1, "mt-3"], [1, "mx-4", "my-4"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-6", 4, "matHeaderCellDef"], ["class", "psl-3 tbl-col-width-per-6", 4, "matCellDef"], ["matColumnDef", "itemCode"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-35", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-35", 4, "matCellDef"], ["matColumnDef", "itemName"], ["matColumnDef", "description"], ["matColumnDef", "quantity"], ["matColumnDef", "unitPricePerItem"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-28", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-28", 4, "matCellDef"], ["matColumnDef", "negotiatedPrice"], ["matColumnDef", "subTotal"], ["matColumnDef", "taxAmount"], ["matColumnDef", "totalAmount"], ["matColumnDef", "actions"], ["class", "psl-3 tbl-col-width-per-35", 4, "matHeaderCellDef"], ["class", "psl-3 tbl-col-width-per-35", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page", 3, "pageSize", "pageSizeOptions"], ["paginatorItems", "matPaginator"], [3, "formGroup"], [2, "margin", "20px"], [1, "table-responsive"], ["matTableExporter", "", "formArrayName", "filedetails", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-6", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-6", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "fileName"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-50 filename-cell", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-50 filename-cell", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "fileType"], ["matColumnDef", "selectFile"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-50 selectfile-cell", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-50 selectfile-cell", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "download"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matCellDef"], ["matColumnDef", "action"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matColumnDef", "supplierCode"], ["matColumnDef", "companyName"], ["matColumnDef", "phoneNumber"], ["matColumnDef", "emailAddress"], ["paginatorSuppliers", "matPaginator"], [3, "disabled"], ["matColumnDef", "committeeName"], ["matColumnDef", "status"], ["matColumnDef", "filename"], ["matColumnDef", "filetype"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "my-3"], ["align", "end", 1, "example-button-row"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["class", "btn-space", "mat-raised-button", "", "color", "primary", 3, "hidden", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "hidden", "click"], [3, "value"], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-6"], [1, "psl-3", "tbl-col-width-per-6"], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-35"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-35"], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-28"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-28"], [1, "psl-3", "tbl-col-width-per-35"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "disabled", "click"], [3, "icon"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-6"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-6", 3, "formGroupName"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "filename-cell"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "filename-cell", 3, "formGroupName"], ["appearance", "fill", 1, "example-full-width", "mt-2", "mr-5"], ["matInput", "", "type", "text", "formControlName", "fileName", "placeholder", "Filename", "maxlength", "50"], ["matInput", "", "type", "text", "formControlName", "fileType", "placeholder", "Filetype", "maxlength", "50"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "selectfile-cell"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "selectfile-cell", 3, "formGroupName"], ["type", "file", 3, "disabled", "multiple", "change"], ["file", ""], [1, "column-nowrap", "psl-3", "tbl-col-width-per-30"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["aria-label", "Download"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matRipple", ""], ["colspan", "4"], ["matInput", "", "type", "text", "formControlName", "committeeName", "placeholder", "CommitteeName", "maxlength", "50"], ["matSuffix", "", 3, "click"], ["formControlName", "status"], ["matInput", "", "type", "text", "formControlName", "status", "placeholder", "Status", "maxlength", "50"], ["matInput", "", "type", "text", "formControlName", "filename", "placeholder", "Filename", "maxlength", "50"], ["matInput", "", "type", "text", "formControlName", "filetype", "placeholder", "Filetype", "maxlength", "50"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "hidden", "click"]], template: function ManageRfpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ManageRfpComponent_div_7_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ManageRfpComponent_div_8_Template, 392, 68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("title", "Manage RFPs")("items", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c4))("active_item", "Manage RFPs");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showForm);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatError, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepicker, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.RequiredValidator, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_35__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_36__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_13__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__.MatPaginator, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.MaxLengthValidator, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatNoDataRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.AsyncPipe], styles: [".col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 2px;\n  border-radius: 5px;\n}\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3.col-sm-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%] {\n  width: 400px;\n  \n  margin: 3px;\n  padding: 10px;\n  background-color: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3.col-sm-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .chat-with[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333;\n  margin-bottom: 6px;\n}\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3.col-sm-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .chat-num-messages[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 15px;\n  border-radius: 5px;\n  display: inline-block;\n  margin-right: 10px;\n}\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3.col-sm-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .chat-num-messages[_ngcontent-%COMP%]   .badge-solid[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 4px 8px;\n  font-size: 15px;\n  border-radius: 5px;\n  display: inline-block;\n  margin-right: 10px;\n}\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3.col-sm-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .chat-num-messages[_ngcontent-%COMP%]   .badge-solid-blue[_ngcontent-%COMP%] {\n  background-color: #007bff;\n}\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3.col-sm-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .chat-num-messages[_ngcontent-%COMP%]   .badge-solid-pink[_ngcontent-%COMP%] {\n  background-color: #e81c62;\n}\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3.col-sm-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .chat-num-messages[_ngcontent-%COMP%]   .badge-solid-green[_ngcontent-%COMP%] {\n  background-color: #28a745;\n}\n.col-xs-12.col-sm-12.col-md-12.col-lg-12[_ngcontent-%COMP%]   .bg-color[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3.col-sm-6[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .chat-num-messages[_ngcontent-%COMP%]   .badge-solid-orange[_ngcontent-%COMP%] {\n  background-color: #d35400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1yZnAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR007RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURSO0FBSVU7RUFDRSxZQUFBO0VBQWMsMENBQUE7RUFDZCxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQURaO0FBR1k7RUFDRSxlQUFBO0VBRUEsV0FBQTtFQUNBLGtCQUFBO0FBRmQ7QUFNYztFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUxoQjtBQVFjO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQVBoQjtBQVVjO0VBQ0UseUJBQUE7QUFSaEI7QUFXYztFQUNFLHlCQUFBO0FBVGhCO0FBWWM7RUFDRSx5QkFBQTtBQVZoQjtBQWFjO0VBQ0UseUJBQUE7QUFYaEIiLCJmaWxlIjoibWFuYWdlLXJmcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wteHMtMTIuY29sLXNtLTEyLmNvbC1tZC0xMi5jb2wtbGctMTIge1xuICAuYmctY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIC5jaGF0LWhlYWRlciB7XG4gICAgICAucm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5jb2wtbGctMy5jb2wtc20tNiB7XG4gICAgICAgICBcbiAgICAgICAgICAuY2hhdC1hYm91dCB7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7IC8qIFNldCBhIG1pbmltdW0gd2lkdGggZm9yIGNoYXQgc2VjdGlvbnMgKi9cbiAgICAgICAgICAgIG1hcmdpbjogM3B4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICAgICAgICAgICAuY2hhdC13aXRoIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAvLyBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNoYXQtbnVtLW1lc3NhZ2VzIHtcbiAgICAgICAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAvLyBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5iYWRnZS1zb2xpZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuYmFkZ2Utc29saWQtYmx1ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5iYWRnZS1zb2xpZC1waW5rIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgxYzYyO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmJhZGdlLXNvbGlkLWdyZWVuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmJhZGdlLXNvbGlkLW9yYW5nZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzNTQwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 50335:
/*!*********************************************************************!*\
  !*** ./src/app/erp-procurement/modules/rfps/rfps-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RfpsRoutingModule": () => (/* binding */ RfpsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_all_rfps_all_rfps_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/all-rfps/all-rfps.component */ 8090);
/* harmony import */ var _pages_manage_rfp_manage_rfp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/manage-rfp/manage-rfp.component */ 67371);
/* harmony import */ var _data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: "all-rfps",
        component: _pages_all_rfps_all_rfps_component__WEBPACK_IMPORTED_MODULE_0__.AllRfpsComponent,
        canActivate: [_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: { clientName: 'ProcurementModule', requiredPrivilege: ["All RFPs"] },
    },
    {
        path: "manage-rfp",
        component: _pages_manage_rfp_manage_rfp_component__WEBPACK_IMPORTED_MODULE_1__.ManageRfpComponent,
        canActivate: [_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: { clientName: 'ProcurementModule', requiredPrivilege: ["Manage RFPs"] },
    },
];
class RfpsRoutingModule {
}
RfpsRoutingModule.ɵfac = function RfpsRoutingModule_Factory(t) { return new (t || RfpsRoutingModule)(); };
RfpsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RfpsRoutingModule });
RfpsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RfpsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 72765:
/*!*************************************************************!*\
  !*** ./src/app/erp-procurement/modules/rfps/rfps.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RfpsModule": () => (/* binding */ RfpsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _rfps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rfps-routing.module */ 50335);
/* harmony import */ var _pages_all_rfps_all_rfps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/all-rfps/all-rfps.component */ 8090);
/* harmony import */ var _pages_manage_rfp_manage_rfp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/manage-rfp/manage-rfp.component */ 67371);
/* harmony import */ var _dialogs_validate_rfp_validate_rfp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/validate-rfp/validate-rfp.component */ 45638);
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
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 79091);
/* harmony import */ var _dialogs_manage_rfp_item_manage_rfp_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogs/manage-rfp-item/manage-rfp-item.component */ 72644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);



































class RfpsModule {
}
RfpsModule.ɵfac = function RfpsModule_Factory(t) { return new (t || RfpsModule)(); };
RfpsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: RfpsModule });
RfpsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _rfps_routing_module__WEBPACK_IMPORTED_MODULE_0__.RfpsRoutingModule,
            //Additional imports
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__.DashboardModule,
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
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__.MatStepperModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_34__.NgxMaskModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](RfpsModule, { declarations: [_pages_all_rfps_all_rfps_component__WEBPACK_IMPORTED_MODULE_1__.AllRfpsComponent,
        _pages_manage_rfp_manage_rfp_component__WEBPACK_IMPORTED_MODULE_2__.ManageRfpComponent,
        _dialogs_validate_rfp_validate_rfp_component__WEBPACK_IMPORTED_MODULE_3__.ValidateRfpComponent,
        _dialogs_manage_rfp_item_manage_rfp_item_component__WEBPACK_IMPORTED_MODULE_7__.ManageRfpItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _rfps_routing_module__WEBPACK_IMPORTED_MODULE_0__.RfpsRoutingModule,
        //Additional imports
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__.DashboardModule,
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
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__.MatStepperModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_34__.NgxMaskModule] }); })();


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
//# sourceMappingURL=src_app_erp-procurement_modules_rfps_rfps_module_ts.js.map
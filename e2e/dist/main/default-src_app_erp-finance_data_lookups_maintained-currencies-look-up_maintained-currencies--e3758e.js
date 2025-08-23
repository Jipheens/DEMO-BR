"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["default-src_app_erp-finance_data_lookups_maintained-currencies-look-up_maintained-currencies--e3758e"],{

/***/ 2977:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/erp-finance/data/lookups/maintained-currencies-look-up/maintained-currencies-look-up.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintainedCurrenciesLookUpComponent": () => (/* binding */ MaintainedCurrenciesLookUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_finance_data_services_currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-finance/data/services/currency.service */ 94393);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);























function MaintainedCurrenciesLookUpComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-bar", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MaintainedCurrenciesLookUpComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function MaintainedCurrenciesLookUpComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 34)(2, "div", 35)(3, "div", 36)(4, "div", 37)(5, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function MaintainedCurrenciesLookUpComponent_ng_container_14_Template_input_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 36)(8, "div", 37)(9, "div", 40)(10, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MaintainedCurrenciesLookUpComponent_ng_container_14_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.proceed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "done_all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r2.selection.hasValue());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("auth-spinner", ctx_r2.multimodifyloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.multimodifyloading);
} }
function MaintainedCurrenciesLookUpComponent_mat_header_cell_19_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 43)(1, "mat-checkbox", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MaintainedCurrenciesLookUpComponent_mat_header_cell_19_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r23.masterToggle() : null; })("change", function MaintainedCurrenciesLookUpComponent_mat_header_cell_19_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "tbl-col-width-per-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r5.selection.hasValue() && ctx_r5.isAllSelected())("indeterminate", ctx_r5.selection.hasValue() && !ctx_r5.isAllSelected())("ngClass", "tbl-checkbox");
} }
function MaintainedCurrenciesLookUpComponent_mat_cell_20_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 43)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MaintainedCurrenciesLookUpComponent_mat_cell_20_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function MaintainedCurrenciesLookUpComponent_mat_cell_20_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const row_r26 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r28.selection.toggle(row_r26) : null; })("change", function MaintainedCurrenciesLookUpComponent_mat_cell_20_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "tbl-col-width-per-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r6.selection.isSelected(row_r26))("ngClass", "tbl-checkbox")("aria-label", ctx_r6.checkboxLabel(row_r26));
} }
function MaintainedCurrenciesLookUpComponent_mat_header_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MaintainedCurrenciesLookUpComponent_mat_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 47)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r32 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](index_r32 + 1);
} }
function MaintainedCurrenciesLookUpComponent_mat_header_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MaintainedCurrenciesLookUpComponent_mat_cell_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r33.country, " ");
} }
function MaintainedCurrenciesLookUpComponent_mat_header_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MaintainedCurrenciesLookUpComponent_mat_cell_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r34.currency, " ");
} }
function MaintainedCurrenciesLookUpComponent_mat_header_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " currencyCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MaintainedCurrenciesLookUpComponent_mat_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r35.currencyCode, " ");
} }
function MaintainedCurrenciesLookUpComponent_mat_header_row_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-header-row");
} }
function MaintainedCurrenciesLookUpComponent_mat_row_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-row", 52);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("cursor", "pointer");
} }
function MaintainedCurrenciesLookUpComponent_mat_cell_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r17.input.value, "\" ");
} }
function MaintainedCurrenciesLookUpComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-spinner", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return [1, 2, 5, 10, 20, 30, 40, 50, 100]; };
class MaintainedCurrenciesLookUpComponent {
    constructor(dialogRef, data, fb, snackbar, CurrencyManService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.CurrencyManService = CurrencyManService;
        this.displayedColumns = [
            "select",
            "id",
            "currency",
            "country",
            "currencyCode",
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(false, []);
        this.selectedRows = [];
        this.atleastOneSelected = false;
        this.dataSourceFilteredList = [];
        this.currenciesArray = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.downloadLoading = false;
        this.isLoading = true;
    }
    ngOnInit() {
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(true, []);
        this.getData();
    }
    ngAfterViewInit() {
        console.log("Finally: ", this.dataSourceFilteredList);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    filter() {
        //let storeId = [1, 2, 3];
        this.dataSource.data.forEach((element) => {
            this.currenciesArray.forEach((item) => {
                if (item === element.id) {
                    // this.dataSourceFilteredList.push(this.dataSource.data.indexOf(element));
                    this.selection.select(element);
                }
            });
        });
        console.log("dataSourceFilteredList ", this.dataSourceFilteredList);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    //******************************************************************************************************
    //Select expense
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? "deselect" : "select"} all`;
        }
        return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${row.position + 1}`;
    }
    expSelected() {
        this.atleastOneSelected = true;
        this.selectedRows = this.selection.selected;
        console.log("this.selectedRows: ", this.selectedRows);
    }
    proceed() {
        this.dialogRef.close({ event: "close", data: this.selectedRows });
        //   console.log(data);
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.selectedRows });
    }
    confirmAdd() { }
    getData() {
        let params = {
            status: "APPROVED",
        };
        this.CurrencyManService.getCurrenciesByStatus(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("Status:", res);
                if (res.statusCode == 200) {
                    // this.data = res.entity;
                    this.data = res;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.data.entity);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
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
            rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription;
    }
}
MaintainedCurrenciesLookUpComponent.ɵfac = function MaintainedCurrenciesLookUpComponent_Factory(t) { return new (t || MaintainedCurrenciesLookUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_erp_finance_data_services_currency_service__WEBPACK_IMPORTED_MODULE_1__.CurrencyService)); };
MaintainedCurrenciesLookUpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MaintainedCurrenciesLookUpComponent, selectors: [["app-maintained-currencies-look-up"]], viewQuery: function MaintainedCurrenciesLookUpComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 38, vars: 10, consts: [[1, "addContainer"], [1, "contact-details"], ["class", "mb-3", 4, "ngIf"], [1, "modalHeader"], [1, "contact-details-name", "mb-1"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [4, "ngIf"], [1, "body"], [1, "table-responsi", "m-t-5"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "country"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-40", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-40", 4, "matCellDef"], ["matColumnDef", "currency"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-50", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-50", 4, "matCellDef"], ["matColumnDef", "currencyCode"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [1, "mb-3"], ["color", "primary", "mode", "indeterminate"], [1, "d-flex", "justify-content-center"], ["src", "assets/images/loading.gif", 2, "display", "block", "margin", "auto", "width", "60px", "height", "60px"], [1, "table-header", "py-3", 2, "background-color", "rgba(219, 218, 218, 0.836)", "margin", "5px"], [1, "row"], [1, "col-6", "px-4"], [1, "mx-auto"], ["placeholder", "Filter...", 1, "pull-left", "search", "form-control", 3, "keyup"], ["input", ""], [1, "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "primary", 3, "disabled", "click"], [1, "col-white"], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-40"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-40"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-50"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-50"], ["matRipple", ""], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function MaintainedCurrenciesLookUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MaintainedCurrenciesLookUpComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Select currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MaintainedCurrenciesLookUpComponent_Template_button_click_6_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MaintainedCurrenciesLookUpComponent_div_11_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MaintainedCurrenciesLookUpComponent_ng_container_14_Template, 13, 4, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-table", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, MaintainedCurrenciesLookUpComponent_mat_header_cell_19_Template, 2, 4, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, MaintainedCurrenciesLookUpComponent_mat_cell_20_Template, 2, 4, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, MaintainedCurrenciesLookUpComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, MaintainedCurrenciesLookUpComponent_mat_cell_23_Template, 3, 1, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, MaintainedCurrenciesLookUpComponent_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, MaintainedCurrenciesLookUpComponent_mat_cell_26_Template, 2, 1, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](27, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, MaintainedCurrenciesLookUpComponent_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, MaintainedCurrenciesLookUpComponent_mat_cell_29_Template, 2, 1, "mat-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](30, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, MaintainedCurrenciesLookUpComponent_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, MaintainedCurrenciesLookUpComponent_mat_cell_32_Template, 2, 1, "mat-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, MaintainedCurrenciesLookUpComponent_mat_header_row_33_Template, 1, 0, "mat-header-row", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, MaintainedCurrenciesLookUpComponent_mat_row_34_Template, 1, 2, "mat-row", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, MaintainedCurrenciesLookUpComponent_mat_cell_35_Template, 2, 1, "mat-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, MaintainedCurrenciesLookUpComponent_div_36_Template, 2, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "mat-paginator", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSize", 8)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_17__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWludGFpbmVkLWN1cnJlbmNpZXMtbG9vay11cC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 94393:
/*!***************************************************************!*\
  !*** ./src/app/erp-finance/data/services/currency.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyService": () => (/* binding */ CurrencyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _types_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/countries */ 35149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





class CurrencyService {
    constructor(http) {
        this.http = http;
        // ********************************************************************************************************************
        this.countries = _types_countries__WEBPACK_IMPORTED_MODULE_1__.countryCurrencies;
    }
    getCurrencies() {
        const currencyManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/CurrencyMaintenance/all`;
        return this.http.get(currencyManagementUrl);
    }
    getCurrenciesByStatus(params) {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/CurrencyMaintenance/fetchbyStatus`;
        return this.http.get(GLAccountManagementUrl, { params });
    }
    // getCountry(): Observable<any> {
    //   const currencyManagementUrl = `${environment.baseUrlFinance}/api/v1/CurrencyMaintenance/countries
    //   `;
    //   return this.http.get<any[]>(currencyManagementUrl);
    // }
    getCurrenciesById(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/CurrencyMaintenance/find/by/id`, { params });
    }
    addCurrencies(data) {
        const currencyManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/CurrencyMaintenance/create`;
        return this.http.post(currencyManagementUrl, data);
    }
    updateCurrencies(currencyDetails) {
        const updateCurrencyUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/CurrencyMaintenance/update`;
        return this.http.put(updateCurrencyUrl, currencyDetails);
    }
    deleteCurrencyTemporarily(params) {
        const currencyManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/CurrencyMaintenance/delete`;
        return this.http.delete(currencyManagementUrl, { params });
    }
    validateCurrencies(dataToValidate) {
        const imprestUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/CurrencyMaintenance/update/state`;
        return this.http.put(imprestUrl, dataToValidate);
    }
    //upload batch cost centres
    uploadBatchCurrrency(data) {
        const currencyUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/CurrencyMaintenance/create/bulk`;
        return this.http.post(currencyUrl, data);
    }
    getCountry() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.countries);
    }
}
CurrencyService.ɵfac = function CurrencyService_Factory(t) { return new (t || CurrencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
CurrencyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CurrencyService, factory: CurrencyService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 35149:
/*!*****************************************************!*\
  !*** ./src/app/erp-finance/data/types/countries.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countryCurrencies": () => (/* binding */ countryCurrencies)
/* harmony export */ });
const countryCurrencies = [
    { country: "Afghanistan", currency: "Afghan Afghani", currencyCode: "AFN" },
    { country: "Albania", currency: "Albanian Lek", currencyCode: "ALL" },
    { country: "Algeria", currency: "Algerian Dinar", currencyCode: "DZD" },
    { country: "Andorra", currency: "Euro", currencyCode: "EUR" },
    { country: "Angola", currency: "Angolan Kwanza", currencyCode: "AOA" },
    {
        country: "Antigua and Barbuda",
        currency: "East Caribbean Dollar",
        currencyCode: "XCD",
    },
    { country: "Argentina", currency: "Argentine Peso", currencyCode: "ARS" },
    { country: "Armenia", currency: "Armenian Dram", currencyCode: "AMD" },
    { country: "Australia", currency: "Australian Dollar", currencyCode: "AUD" },
    { country: "Austria", currency: "Euro", currencyCode: "EUR" },
    { country: "Azerbaijan", currency: "Azerbaijani Manat", currencyCode: "AZN" },
    { country: "Bahamas", currency: "Bahamian Dollar", currencyCode: "BSD" },
    { country: "Bahrain", currency: "Bahraini Dinar", currencyCode: "BHD" },
    { country: "Bangladesh", currency: "Bangladeshi Taka", currencyCode: "BDT" },
    { country: "Barbados", currency: "Barbadian Dollar", currencyCode: "BBD" },
    { country: "Belarus", currency: "Belarusian Ruble", currencyCode: "BYN" },
    { country: "Belgium", currency: "Euro", currencyCode: "EUR" },
    { country: "Belize", currency: "Belizean Dollar", currencyCode: "BZD" },
    { country: "Benin", currency: "West African CFA Franc", currencyCode: "XOF" },
    { country: "Bhutan", currency: "Bhutanese Ngultrum", currencyCode: "BTN" },
    { country: "Bolivia", currency: "Bolivian Boliviano", currencyCode: "BOB" },
    {
        country: "Bosnia and Herzegovina",
        currency: "Bosnian and Herzegovinian Convertible Mark",
        currencyCode: "BAM",
    },
    { country: "Botswana", currency: "Botswana Pula", currencyCode: "BWP" },
    { country: "Brazil", currency: "Brazilian Real", currencyCode: "BRL" },
    { country: "Brunei", currency: "Brunei Dollar", currencyCode: "BND" },
    { country: "Bulgaria", currency: "Bulgarian Lev", currencyCode: "BGN" },
    {
        country: "Burkina Faso",
        currency: "West African CFA Franc",
        currencyCode: "XOF",
    },
    { country: "Burundi", currency: "Burundian Franc", currencyCode: "BIF" },
    {
        country: "Cabo Verde",
        currency: "Cape Verdean Escudo",
        currencyCode: "CVE",
    },
    { country: "Cambodia", currency: "Cambodian Riel", currencyCode: "KHR" },
    {
        country: "Cameroon",
        currency: "Central African CFA Franc",
        currencyCode: "XAF",
    },
    { country: "Canada", currency: "Canadian Dollar", currencyCode: "CAD" },
    {
        country: "Cape Verde",
        currency: "Cape Verdean Escudo",
        currencyCode: "CVE",
    },
    {
        country: "Central African Republic",
        currency: "Central African CFA Franc",
        currencyCode: "XAF",
    },
    {
        country: "Chad",
        currency: "Central African CFA Franc",
        currencyCode: "XAF",
    },
    { country: "Chile", currency: "Chilean Peso", currencyCode: "CLP" },
    { country: "China", currency: "Chinese Yuan Renminbi", currencyCode: "CNY" },
    { country: "Colombia", currency: "Colombian Peso", currencyCode: "COP" },
    { country: "Comoros", currency: "Comorian Franc", currencyCode: "KMF" },
    {
        country: "Congo, Democratic Republic of the",
        currency: "Congolese Franc",
        currencyCode: "CDF",
    },
    {
        country: "Congo, Republic of the",
        currency: "Central African CFA Franc",
        currencyCode: "XAF",
    },
    { country: "Costa Rica", currency: "Costa Rican Colon", currencyCode: "CRC" },
    { country: "Croatia", currency: "Croatian Kuna", currencyCode: "HRK" },
    { country: "Cuba", currency: "Cuban Peso", currencyCode: "CUP" },
    { country: "Cyprus", currency: "Euro", currencyCode: "EUR" },
    { country: "Czech Republic", currency: "Czech Koruna", currencyCode: "CZK" },
    { country: "Denmark", currency: "Danish Krone", currencyCode: "DKK" },
    { country: "Djibouti", currency: "Djiboutian Franc", currencyCode: "DJF" },
    {
        country: "Dominica",
        currency: "East Caribbean Dollar",
        currencyCode: "XCD",
    },
    {
        country: "Dominican Republic",
        currency: "Dominican Peso",
        currencyCode: "DOP",
    },
    {
        country: "East Timor",
        currency: "United States Dollar",
        currencyCode: "USD",
    },
    { country: "Ecuador", currency: "United States Dollar", currencyCode: "USD" },
    { country: "Egypt", currency: "Egyptian Pound", currencyCode: "EGP" },
    {
        country: "El Salvador",
        currency: "United States Dollar",
        currencyCode: "USD",
    },
    {
        country: "Equatorial Guinea",
        currency: "Central African CFA Franc",
        currencyCode: "XAF",
    },
    { country: "Eritrea", currency: "Eritrean Nakfa", currencyCode: "ERN" },
    { country: "Estonia", currency: "Euro", currencyCode: "EUR" },
    { country: "Eswatini", currency: "Swazi Lilangeni", currencyCode: "SZL" },
    { country: "Ethiopia", currency: "Ethiopian Birr", currencyCode: "ETB" },
    { country: "Fiji", currency: "Fijian Dollar", currencyCode: "FJD" },
    { country: "Finland", currency: "Euro", currencyCode: "EUR" },
    { country: "France", currency: "Euro", currencyCode: "EUR" },
    {
        country: "Gabon",
        currency: "Central African CFA Franc",
        currencyCode: "XAF",
    },
    { country: "Gambia", currency: "Gambian Dalasi", currencyCode: "GMD" },
    { country: "Georgia", currency: "Georgian Lari", currencyCode: "GEL" },
    { country: "Germany", currency: "Euro", currencyCode: "EUR" },
    { country: "Ghana", currency: "Ghanaian Cedi", currencyCode: "GHS" },
    { country: "Greece", currency: "Euro", currencyCode: "EUR" },
    {
        country: "Grenada",
        currency: "East Caribbean Dollar",
        currencyCode: "XCD",
    },
    { country: "Guatemala", currency: "Guatemalan Quetzal", currencyCode: "GTQ" },
    { country: "Guinea", currency: "Guinean Franc", currencyCode: "GNF" },
    {
        country: "Guinea-Bissau",
        currency: "West African CFA Franc",
        currencyCode: "XOF",
    },
    { country: "Guyana", currency: "Guyanese Dollar", currencyCode: "GYD" },
    { country: "Haiti", currency: "Haitian Gourde", currencyCode: "HTG" },
    { country: "Honduras", currency: "Honduran Lempira", currencyCode: "HNL" },
    { country: "Hungary", currency: "Hungarian Forint", currencyCode: "HUF" },
    { country: "Iceland", currency: "Icelandic Krona", currencyCode: "ISK" },
    { country: "India", currency: "Indian Rupee", currencyCode: "INR" },
    { country: "Indonesia", currency: "Indonesian Rupiah", currencyCode: "IDR" },
    { country: "Iran", currency: "Iranian Rial", currencyCode: "IRR" },
    { country: "Iraq", currency: "Iraqi Dinar", currencyCode: "IQD" },
    { country: "Ireland", currency: "Euro", currencyCode: "EUR" },
    { country: "Israel", currency: "Israeli New Shekel", currencyCode: "ILS" },
    { country: "Italy", currency: "Euro", currencyCode: "EUR" },
    { country: "Jamaica", currency: "Jamaican Dollar", currencyCode: "JMD" },
    { country: "Japan", currency: "Japanese Yen", currencyCode: "JPY" },
    { country: "Jordan", currency: "Jordanian Dinar", currencyCode: "JOD" },
    { country: "Kazakhstan", currency: "Kazakhstani Tenge", currencyCode: "KZT" },
    { country: "Kenya", currency: "Kenyan Shilling", currencyCode: "KES" },
    { country: "Kiribati", currency: "Australian Dollar", currencyCode: "AUD" },
    { country: "Kuwait", currency: "Kuwaiti Dinar", currencyCode: "KWD" },
    { country: "Kyrgyzstan", currency: "Kyrgyzstani Som", currencyCode: "KGS" },
    { country: "Laos", currency: "Lao Kip", currencyCode: "LAK" },
    { country: "Latvia", currency: "Euro", currencyCode: "EUR" },
    { country: "Lebanon", currency: "Lebanese Pound", currencyCode: "LBP" },
    { country: "Lesotho", currency: "Lesotho Loti", currencyCode: "LSL" },
    { country: "Liberia", currency: "Liberian Dollar", currencyCode: "LRD" },
    { country: "Libya", currency: "Libyan Dinar", currencyCode: "LYD" },
    { country: "Liechtenstein", currency: "Swiss Franc", currencyCode: "CHF" },
    { country: "Lithuania", currency: "Euro", currencyCode: "EUR" },
    { country: "Luxembourg", currency: "Euro", currencyCode: "EUR" },
    {
        country: "Macedonia (North Macedonia)",
        currency: "Macedonian Denar",
        currencyCode: "MKD",
    },
    { country: "Madagascar", currency: "Malagasy Ariary", currencyCode: "MGA" },
    { country: "Malawi", currency: "Malawian Kwacha", currencyCode: "MWK" },
    { country: "Malaysia", currency: "Malaysian Ringgit", currencyCode: "MYR" },
    { country: "Maldives", currency: "Maldivian Rufiyaa", currencyCode: "MVR" },
    { country: "Mali", currency: "West African CFA Franc", currencyCode: "XOF" },
    { country: "Malta", currency: "Euro", currencyCode: "EUR" },
    {
        country: "Marshall Islands",
        currency: "United States Dollar",
        currencyCode: "USD",
    },
    {
        country: "Mauritania",
        currency: "Mauritanian Ouguiya",
        currencyCode: "MRU",
    },
    { country: "Mauritius", currency: "Mauritian Rupee", currencyCode: "MUR" },
    { country: "Mexico", currency: "Mexican Peso", currencyCode: "MXN" },
    {
        country: "Micronesia",
        currency: "United States Dollar",
        currencyCode: "USD",
    },
    { country: "Moldova", currency: "Moldovan Leu", currencyCode: "MDL" },
    { country: "Monaco", currency: "Euro", currencyCode: "EUR" },
    { country: "Mongolia", currency: "Mongolian Tugrik", currencyCode: "MNT" },
    { country: "Montenegro", currency: "Euro", currencyCode: "EUR" },
    { country: "Morocco", currency: "Moroccan Dirham", currencyCode: "MAD" },
    {
        country: "Mozambique",
        currency: "Mozambican Metical",
        currencyCode: "MZN",
    },
    { country: "Myanmar (Burma)", currency: "Burmese Kyat", currencyCode: "MMK" },
    { country: "Namibia", currency: "Namibian Dollar", currencyCode: "NAD" },
    { country: "Nauru", currency: "Australian Dollar", currencyCode: "AUD" },
    { country: "Nepal", currency: "Nepalese Rupee", currencyCode: "NPR" },
    { country: "Netherlands", currency: "Euro", currencyCode: "EUR" },
    {
        country: "New Zealand",
        currency: "New Zealand Dollar",
        currencyCode: "NZD",
    },
    { country: "Nicaragua", currency: "Nicaraguan Cordoba", currencyCode: "NIO" },
    { country: "Niger", currency: "West African CFA Franc", currencyCode: "XOF" },
    { country: "Nigeria", currency: "Nigerian Naira", currencyCode: "NGN" },
    { country: "North Korea", currency: "North Korean Won", currencyCode: "KPW" },
    { country: "Norway", currency: "Norwegian Krone", currencyCode: "NOK" },
    { country: "Oman", currency: "Omani Rial", currencyCode: "OMR" },
    { country: "Pakistan", currency: "Pakistani Rupee", currencyCode: "PKR" },
    { country: "Palau", currency: "United States Dollar", currencyCode: "USD" },
    { country: "Panama", currency: "United States Dollar", currencyCode: "USD" },
    {
        country: "Papua New Guinea",
        currency: "Papua New Guinean Kina",
        currencyCode: "PGK",
    },
    { country: "Paraguay", currency: "Paraguayan Guarani", currencyCode: "PYG" },
    { country: "Peru", currency: "Peruvian Nuevo Sol", currencyCode: "PEN" },
    { country: "Philippines", currency: "Philippine Peso", currencyCode: "PHP" },
    { country: "Poland", currency: "Polish Zloty", currencyCode: "PLN" },
    { country: "Portugal", currency: "Euro", currencyCode: "EUR" },
    { country: "Qatar", currency: "Qatari Rial", currencyCode: "QAR" },
    { country: "Romania", currency: "Romanian Leu", currencyCode: "RON" },
    { country: "Russia", currency: "Russian Ruble", currencyCode: "RUB" },
    { country: "Rwanda", currency: "Rwandan Franc", currencyCode: "RWF" },
    {
        country: "Saint Kitts and Nevis",
        currency: "East Caribbean Dollar",
        currencyCode: "XCD",
    },
    {
        country: "Saint Lucia",
        currency: "East Caribbean Dollar",
        currencyCode: "XCD",
    },
    {
        country: "Saint Vincent and the Grenadines",
        currency: "East Caribbean Dollar",
        currencyCode: "XCD",
    },
    { country: "Samoa", currency: "Samoan Tala", currencyCode: "WST" },
    { country: "San Marino", currency: "Euro", currencyCode: "EUR" },
    {
        country: "Sao Tome and Principe",
        currency: "Sao Tome and Principe Dobra",
        currencyCode: "STN",
    },
    { country: "Saudi Arabia", currency: "Saudi Riyal", currencyCode: "SAR" },
    {
        country: "Senegal",
        currency: "West African CFA Franc",
        currencyCode: "XOF",
    },
    { country: "Serbia", currency: "Serbian Dinar", currencyCode: "RSD" },
    { country: "Seychelles", currency: "Seychellois Rupee", currencyCode: "SCR" },
    {
        country: "Sierra Leone",
        currency: "Sierra Leonean Leone",
        currencyCode: "SLL",
    },
    { country: "Singapore", currency: "Singapore Dollar", currencyCode: "SGD" },
    { country: "Slovakia", currency: "Euro", currencyCode: "EUR" },
    { country: "Slovenia", currency: "Euro", currencyCode: "EUR" },
    {
        country: "Solomon Islands",
        currency: "Solomon Islands Dollar",
        currencyCode: "SBD",
    },
    { country: "Somalia", currency: "Somali Shilling", currencyCode: "SOS" },
    {
        country: "South Africa",
        currency: "South African Rand",
        currencyCode: "ZAR",
    },
    { country: "South Korea", currency: "South Korean Won", currencyCode: "KRW" },
    {
        country: "South Sudan",
        currency: "South Sudanese Pound",
        currencyCode: "SSP",
    },
    { country: "Spain", currency: "Euro", currencyCode: "EUR" },
    { country: "Sri Lanka", currency: "Sri Lankan Rupee", currencyCode: "LKR" },
    { country: "Sudan", currency: "Sudanese Pound", currencyCode: "SDG" },
    { country: "Suriname", currency: "Surinamese Dollar", currencyCode: "SRD" },
    { country: "Sweden", currency: "Swedish Krona", currencyCode: "SEK" },
    { country: "Switzerland", currency: "Swiss Franc", currencyCode: "CHF" },
    { country: "Syria", currency: "Syrian Pound", currencyCode: "SYP" },
    {
        country: "Tajikistan",
        currency: "Tajikistani Somoni",
        currencyCode: "TJS",
    },
    { country: "Tanzania", currency: "Tanzanian Shilling", currencyCode: "TZS" },
    { country: "Thailand", currency: "Thai Baht", currencyCode: "THB" },
    {
        country: "Timor-Leste",
        currency: "United States Dollar",
        currencyCode: "USD",
    },
    { country: "Togo", currency: "West African CFA Franc", currencyCode: "XOF" },
    { country: "Tonga", currency: "Tongan Pa'anga", currencyCode: "TOP" },
    {
        country: "Trinidad and Tobago",
        currency: "Trinidad and Tobago Dollar",
        currencyCode: "TTD",
    },
    { country: "Tunisia", currency: "Tunisian Dinar", currencyCode: "TND" },
    { country: "Turkey", currency: "Turkish Lira", currencyCode: "TRY" },
    {
        country: "Turkmenistan",
        currency: "Turkmenistan Manat",
        currencyCode: "TMT",
    },
    { country: "Tuvalu", currency: "Australian Dollar", currencyCode: "AUD" },
    { country: "Uganda", currency: "Ugandan Shilling", currencyCode: "UGX" },
    { country: "Ukraine", currency: "Ukrainian Hryvnia", currencyCode: "UAH" },
    {
        country: "United Arab Emirates",
        currency: "United Arab Emirates Dirham",
        currencyCode: "AED",
    },
    {
        country: "United Kingdom",
        currency: "British Pound Sterling",
        currencyCode: "GBP",
    },
    {
        country: "United States",
        currency: "United States Dollar",
        currencyCode: "USD",
    },
    { country: "Uruguay", currency: "Uruguayan Peso", currencyCode: "UYU" },
    { country: "Uzbekistan", currency: "Uzbekistani Som", currencyCode: "UZS" },
    { country: "Vanuatu", currency: "Vanuatu Vatu", currencyCode: "VUV" },
    { country: "Vatican City", currency: "Euro", currencyCode: "EUR" },
    { country: "Venezuela", currency: "Venezuelan Bolivar", currencyCode: "VES" },
    { country: "Vietnam", currency: "Vietnamese Dong", currencyCode: "VND" },
    { country: "Yemen", currency: "Yemeni Rial", currencyCode: "YER" },
    { country: "Zambia", currency: "Zambian Kwacha", currencyCode: "ZMW" },
    { country: "Zimbabwe", currency: "Zimbabwean Dollar", currencyCode: "ZWL" },
];


/***/ })

}]);
//# sourceMappingURL=default-src_app_erp-finance_data_lookups_maintained-currencies-look-up_maintained-currencies--e3758e.js.map
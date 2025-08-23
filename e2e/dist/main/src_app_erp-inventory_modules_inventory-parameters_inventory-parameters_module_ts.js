"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-inventory_modules_inventory-parameters_inventory-parameters_module_ts"],{

/***/ 20557:
/*!*************************************************************************!*\
  !*** ./src/app/erp-inventory/data/services/branchstore-rols.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchstoreROLSService": () => (/* binding */ BranchstoreROLSService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class BranchstoreROLSService {
    constructor(http) {
        this.http = http;
    }
    addBranchStoreROL(body) {
        // http://localhost:9090/api/branchStoreROL/add
        const branchStoreROLurl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branchStoreROL/add`;
        return this.http.post(branchStoreROLurl, body);
    }
    getBranchStoreROL() {
        const branchStoreROLurl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branchStoreROL/all`;
        return this.http.get(branchStoreROLurl);
    }
    getBranchStoreROLbyBranchCode(params) {
        const branchStoreROLurl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branchStoreROL/fetchByBranchCode`;
        return this.http.get(branchStoreROLurl, {
            params
        });
    }
    ;
    getBranchStoreROLbyItemCode(params) {
        const branchStoreROLurl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branchStoreROL/getBranchStoreROLbyItemCode`;
        return this.http.get(branchStoreROLurl, {
            params
        });
    }
    ;
    getBranchStoreROLbyItemCodeNBranchcode(params) {
        const branchStoreROLurl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branchStoreROL/getBranchStoreROLbyItemCodeNBranchcode`;
        return this.http.get(branchStoreROLurl, {
            params
        });
    }
    ;
    updateBranchStoreRol(updateBody) {
        const branchStoreROLurl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branchStoreROL/update`;
        return this.http.put(branchStoreROLurl, updateBody);
    }
    deleteBranchStoreROL(params) {
        const branchStoreROLurl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/branchStoreROL/delete`;
        return this.http.delete(branchStoreROLurl, { params });
    }
}
BranchstoreROLSService.ɵfac = function BranchstoreROLSService_Factory(t) { return new (t || BranchstoreROLSService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BranchstoreROLSService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BranchstoreROLSService, factory: BranchstoreROLSService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 61055:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/branchstoreROLS/all-branchstore-rols/all-branchstore-rols.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllBranchstoreROLSComponent": () => (/* binding */ AllBranchstoreROLSComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_erp_inventory_data_services_branchstore_rols_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-inventory/data/services/branchstore-rols.service */ 20557);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 48632);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);























function AllBranchstoreROLSComponent_mat_header_cell_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoreROLSComponent_mat_cell_53_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_mat_cell_53_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const row_r19 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r21.onSelect(row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r4.index + 1, "");
} }
function AllBranchstoreROLSComponent_mat_header_cell_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoreROLSComponent_mat_cell_56_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_mat_cell_56_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const row_r23 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r24.onSelect(row_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r23.branchCode, " ");
} }
function AllBranchstoreROLSComponent_mat_header_cell_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Item Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoreROLSComponent_mat_cell_59_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_mat_cell_59_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const row_r26 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r27.onSelect(row_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r26.itemCode, " ");
} }
function AllBranchstoreROLSComponent_mat_header_cell_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Automated Re-order Point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoreROLSComponent_mat_cell_62_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_mat_cell_62_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const row_r29 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.onSelect(row_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r29.automatedReorderPoint, " ");
} }
function AllBranchstoreROLSComponent_mat_header_cell_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Minimum Stock Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoreROLSComponent_mat_cell_65_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_mat_cell_65_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const row_r32 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r33.onSelect(row_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r32.minimumStockLevel, " ");
} }
function AllBranchstoreROLSComponent_mat_header_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoreROLSComponent_mat_cell_68_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 57)(1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_mat_cell_68_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllBranchstoreROLSComponent_mat_cell_68_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); const row_r35 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r38.updateBranchROL(row_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-feather-icons", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_mat_cell_68_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllBranchstoreROLSComponent_mat_cell_68_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); const row_r35 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r41.viewBranchROL(row_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-feather-icons", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_mat_cell_68_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllBranchstoreROLSComponent_mat_cell_68_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); const row_r35 = restoredCtx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r43.deleteBranchStoreROL(row_r35.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-feather-icons", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "trash-2");
} }
function AllBranchstoreROLSComponent_mat_header_row_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
} }
function AllBranchstoreROLSComponent_mat_row_70_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_mat_row_70_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46); const row_r44 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r45.viewBranchROL(row_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllBranchstoreROLSComponent_mat_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r17.input.value, "\"");
} }
function AllBranchstoreROLSComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Reorder Levels"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class AllBranchstoreROLSComponent {
    constructor(branchROLManService, snackbar, router) {
        this.branchROLManService = branchROLManService;
        this.snackbar = snackbar;
        this.router = router;
        this.displayedColumns = [
            "index",
            "branchCode",
            "itemCode",
            "automatedReorderPoint",
            "minimumStockLevel",
            "action"
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.isLoading = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.downloadLoading = false;
    }
    ngOnInit() {
        this.getData();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    //FIltering through the table 
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    //get the data
    getData() {
        this.branchROLManService.getBranchStoreROL()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    this.data = res.entity,
                        this.isLoading = true;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.data);
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
            complete: () => {
            }
        }), rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription;
    }
    refresh() {
        this.getData();
    }
    //navigating to the adding window
    addBranchStoreROL() {
        this.router.navigate(["/erp-inventory/inventory-parameters/manage-rols"]);
    }
    // View
    viewBranchROL(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        let route = '/erp-inventory/inventory-parameters/manage-rols';
        this.router.navigate([route], { queryParams: { id: data.id, additionalData: serializedData, action: "View" } });
    }
    //updating 
    updateBranchROL(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        let route = '/erp-inventory/inventory-parameters/manage-rols';
        this.router.navigate([route], { queryParams: { id: data.id, additionalData: serializedData, action: "Update" } });
    }
    //delete
    deleteBranchStoreROL(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you Sure?",
            text: "This item will be deleted!!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete this Item",
        }).then((result) => {
            if (result.isConfirmed) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams()
                    .set("id", id);
                this.branchROLManService.deleteBranchStoreROL(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        this.snackbar.showNotification("snackbar-success", "Item Deleted Successfully");
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getData();
                    }
                }), rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription;
            }
        });
    }
}
AllBranchstoreROLSComponent.ɵfac = function AllBranchstoreROLSComponent_Factory(t) { return new (t || AllBranchstoreROLSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_branchstore_rols_service__WEBPACK_IMPORTED_MODULE_1__.BranchstoreROLSService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router)); };
AllBranchstoreROLSComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AllBranchstoreROLSComponent, selectors: [["app-all-branchstore-rols"]], viewQuery: function AllBranchstoreROLSComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 74, vars: 11, consts: [[1, "content"], [1, "content-block"], [1, "block-header", "body"], [1, "bg-table-header", 3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card", "bg-card", "mat-elevation-z0"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader", "bg-table-header", "font"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "table-style", "mat-elevation-z0"], ["matTableExporter", "", "matSort", "", 1, "font-table", "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "index"], ["mat-sort-header", "", "class", "start-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "mat-column", 3, "click", 4, "matCellDef"], ["matColumnDef", "branchCode"], ["mat-sort-header", "", "class", "mid-col mat-elevation-z0", 4, "matHeaderCellDef"], [3, "click", 4, "matCellDef"], ["matColumnDef", "itemCode"], ["matColumnDef", "automatedReorderPoint"], ["matColumnDef", "minimumStockLevel"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", "class", "end-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["mat-sort-header", "", 1, "start-col", "mat-elevation-z0"], [1, "mat-column", 3, "click"], ["mat-sort-header", "", 1, "mid-col", "mat-elevation-z0"], [3, "click"], [1, "end-col", "mat-elevation-z0"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllBranchstoreROLSComponent_Template(rf, ctx) { if (rf & 1) {
        const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Branch Store Reorder Levels ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function AllBranchstoreROLSComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_Template_button_click_25_listener() { return ctx.addBranchStoreROL(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "li")(29, "div", 21)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_Template_button_click_30_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 22)(34, "ul", 23)(35, "li")(36, "div", 24)(37, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_Template_img_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "li")(39, "div", 26)(40, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_Template_img_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "li")(42, "div", 28)(43, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_Template_img_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "li")(45, "div", 30)(46, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoreROLSComponent_Template_img_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 32)(48, "mat-table", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](51, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, AllBranchstoreROLSComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, AllBranchstoreROLSComponent_mat_cell_53_Template, 2, 1, "mat-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](54, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, AllBranchstoreROLSComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, AllBranchstoreROLSComponent_mat_cell_56_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](57, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, AllBranchstoreROLSComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, AllBranchstoreROLSComponent_mat_cell_59_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](60, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, AllBranchstoreROLSComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, AllBranchstoreROLSComponent_mat_cell_62_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](63, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, AllBranchstoreROLSComponent_mat_header_cell_64_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, AllBranchstoreROLSComponent_mat_cell_65_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](66, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, AllBranchstoreROLSComponent_mat_header_cell_67_Template, 2, 0, "mat-header-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, AllBranchstoreROLSComponent_mat_cell_68_Template, 7, 9, "mat-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, AllBranchstoreROLSComponent_mat_header_row_69_Template, 1, 0, "mat-header-row", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, AllBranchstoreROLSComponent_mat_row_70_Template, 1, 2, "mat-row", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, AllBranchstoreROLSComponent_mat_cell_71_Template, 2, 1, "mat-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, AllBranchstoreROLSComponent_div_72_Template, 2, 1, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "mat-paginator", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "All Reorder Levels")("items", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0))("active_item", "All Reorder Levels");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_18__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatNoDataRow, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtYnJhbmNoc3RvcmUtcm9scy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 48029:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/branchstoreROLS/manage-branchstore-rols/manage-branchstore-rols.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageBranchstoreROLSComponent": () => (/* binding */ ManageBranchstoreROLSComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_inventory_data_lookups_catalogue_lookup_catalogue_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-inventory/data/lookups/catalogue-lookup/catalogue-lookup.component */ 55670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_erp_inventory_data_services_branchstore_rols_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/services/branchstore-rols.service */ 20557);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);



















function ManageBranchstoreROLSComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "The Item Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ManageBranchstoreROLSComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "The Automated Re-Order Point is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ManageBranchstoreROLSComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "The Minimum Stock Level is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["Re-Order Levels"]; };
class ManageBranchstoreROLSComponent {
    constructor(fb, router, activatedRoute, tokenStorageService, rolsManService, snackbar, route, accessControl, tokenCookieService, dialog) {
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.tokenStorageService = tokenStorageService;
        this.rolsManService = rolsManService;
        this.snackbar = snackbar;
        this.route = route;
        this.accessControl = accessControl;
        this.tokenCookieService = tokenCookieService;
        this.dialog = dialog;
        this.showForm = false;
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.catalogueArray = [];
        this.itemCode = '';
        this.selectedItem = [];
        this.currentUser = this.tokenStorageService.getUser().username;
    }
    ngOnInit() {
        this.getPage();
        this.showForm = true;
        console.log("this.formData: ", this.formData);
        console.log("pagefunc: ", this.pageFunction);
        this.route.queryParams.subscribe((params) => {
            console.log("res", params);
            if (params.hasOwnProperty("id")) {
                const action = params["action"];
                if (action == "Update") {
                    this.pageFunction = "Update";
                }
                else if (action == "View") {
                    this.pageFunction = "View";
                }
                this.id = params["id"];
                const serializedData = params["additionalData"];
                const additionalData = JSON.parse(serializedData);
                this.formData = additionalData;
                console.log("ID:", this.id);
                console.log("Additional Data:", additionalData);
                this.getPage();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getPage() {
        console.log("RES", this.formData);
        if (this.pageFunction === "Add") {
            this.generateForm();
        }
        else if (this.pageFunction === "Update") {
            this.generateFormWithData();
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.hideSubmit = true;
        }
    }
    generateForm() {
        this.mngForm = this.fb.group({
            id: [""],
            branchCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            itemCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            automatedReorderPoint: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            minimumStockLevel: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
        });
        this.branchCode = this.tokenCookieService.getUser().branchCode;
        this.mngForm.patchValue({
            branchCode: this.branchCode,
        });
    }
    generateFormWithData() {
        this.mngForm = this.fb.group({
            id: [this.formData.id],
            itemCode: [this.formData.itemCode,],
            automatedReorderPoint: [this.formData.automatedReorderPoint, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            minimumStockLevel: [this.formData.minimumStockLevel, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        });
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            id: [{ value: this.formData.id, disabled: true }],
            itemCode: [{ value: this.formData.itemCode, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            automatedReorderPoint: [{ value: this.formData.automatedReorderPoint, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            minimumStockLevel: [{ value: this.formData.minimumStockLevel, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        });
    }
    catalogueLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "880px";
        dialogConfig.data =
            {
                action: "view catalogue",
                selected: this.selectedItem,
            };
        const dialogRef = this.dialog.open(src_app_erp_inventory_data_lookups_catalogue_lookup_catalogue_lookup_component__WEBPACK_IMPORTED_MODULE_0__.CatalogueLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            result.data.forEach(element => {
                this.itemCode = element.itemCode;
                this.mngForm.patchValue({
                    itemCode: element.itemCode,
                });
            });
        });
    }
    cancel() {
        this.router.navigate(["/erp-inventory/inventory-parameters/all-rols"]);
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        if (this.pageFunction === "Add") {
            this.rolsManService
                .addBranchStoreROL(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "ROLs Added Successfully");
                        this.router.navigate(["/erp-inventory/inventory-parameters/all-rols"]);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err);
                },
                complete: () => { },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.rolsManService
                .updateBranchStoreRol(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "ROLs Updated Successfully");
                        this.router.navigate(["/erp-inventory/inventory-parameters/all-rols"]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription;
        }
    }
}
ManageBranchstoreROLSComponent.ɵfac = function ManageBranchstoreROLSComponent_Factory(t) { return new (t || ManageBranchstoreROLSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_branchstore_rols_service__WEBPACK_IMPORTED_MODULE_2__.BranchstoreROLSService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_4__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_5__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
ManageBranchstoreROLSComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ManageBranchstoreROLSComponent, selectors: [["app-manage-branchstore-rols"]], decls: 43, vars: 12, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "row"], [1, "col-12"], [1, "body"], [1, "m-4", 3, "formGroup"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-3"], ["appearance", "outline", 1, "example-full-width", "mb-3"], [1, ""], ["matInput", "", "formControlName", "itemCode"], ["matSuffix", "", 3, "click"], [4, "ngIf"], ["type", "number", "matInput", "", "formControlName", "automatedReorderPoint"], ["type", "number", "matInput", "", "formControlName", "minimumStockLevel"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["mat-dialog-action", "", 3, "align"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "hidden", "click"]], template: function ManageBranchstoreROLSComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10)(14, "form", 11)(15, "div", 8)(16, "div", 12)(17, "mat-form-field", 13)(18, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Item Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageBranchstoreROLSComponent_Template_mat_icon_click_21_listener() { return ctx.catalogueLookUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ManageBranchstoreROLSComponent_mat_error_23_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 12)(25, "mat-form-field", 13)(26, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Automated Re-Order Point ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, ManageBranchstoreROLSComponent_mat_error_29_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 12)(31, "mat-form-field", 13)(32, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, " The Minimum Stock Level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ManageBranchstoreROLSComponent_mat_error_35_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 8)(37, "div", 20)(38, "div", 21)(39, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageBranchstoreROLSComponent_Template_button_click_39_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageBranchstoreROLSComponent_Template_button_click_41_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Manage Branch Stores ROLs")("items", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c0))("active_item", "Manage Branch ROLs");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Branch Stores ROL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mngForm.get("itemCode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mngForm.get("automatedReorderPoint").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mngForm.get("minimumStockLevel").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("align", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.mngForm.valid)("hidden", ctx.hideSubmit);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtYnJhbmNoc3RvcmUtcm9scy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 4797:
/*!************************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/branchstores/all-branchstores/all-branchstores.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllBranchstoresComponent": () => (/* binding */ AllBranchstoresComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_inventory_data_services_brancstores_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/services/brancstores-management.service */ 4827);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 48632);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);

























function AllBranchstoresComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-bar", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoresComponent_mat_header_cell_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoresComponent_mat_cell_54_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_mat_cell_54_Template_mat_cell_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r27.onSelect(ctx_r27.branchStoreId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branchStore_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branchStore_r26.id, "");
} }
function AllBranchstoresComponent_mat_header_cell_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Branch Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoresComponent_mat_cell_57_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_mat_cell_57_Template_mat_cell_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.onSelect(ctx_r30.branchCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branchStore_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branchStore_r29.branchCode, "");
} }
function AllBranchstoresComponent_mat_header_cell_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoresComponent_mat_cell_60_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_mat_cell_60_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const branchStore_r32 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r33.onSelect(branchStore_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branchStore_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branchStore_r32.branchStoreCode, " ");
} }
function AllBranchstoresComponent_mat_header_cell_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoresComponent_mat_cell_63_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_mat_cell_63_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const branchStore_r35 = restoredCtx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r36.onSelect(branchStore_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branchStore_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branchStore_r35.branchName, " ");
} }
function AllBranchstoresComponent_mat_header_cell_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoresComponent_mat_cell_66_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_mat_cell_66_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); const branchStore_r38 = restoredCtx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r39.onSelect(branchStore_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branchStore_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branchStore_r38.branchStoreLocation, " ");
} }
function AllBranchstoresComponent_mat_header_cell_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoresComponent_mat_cell_69_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_mat_cell_69_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43); const branchStore_r41 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r42.onSelect(branchStore_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branchStore_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branchStore_r41.branchAddress, " ");
} }
function AllBranchstoresComponent_mat_header_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoresComponent_mat_cell_72_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_mat_cell_72_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46); const branchStore_r44 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r45.onSelect(branchStore_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branchStore_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branchStore_r44.email, " ");
} }
function AllBranchstoresComponent_mat_header_cell_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoresComponent_mat_cell_75_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_mat_cell_75_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49); const branchStore_r47 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r48.onSelect(branchStore_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branchStore_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branchStore_r47.phone, " ");
} }
function AllBranchstoresComponent_mat_header_cell_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllBranchstoresComponent_mat_cell_78_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 61)(1, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_mat_cell_78_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllBranchstoresComponent_mat_cell_78_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54); const branchStore_r50 = restoredCtx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r53.editbranchStore(branchStore_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-feather-icons", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_mat_cell_78_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllBranchstoresComponent_mat_cell_78_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54); const branchStore_r50 = restoredCtx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r56.viewbranchStore(branchStore_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-feather-icons", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_mat_cell_78_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllBranchstoresComponent_mat_cell_78_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54); const branchStore_r50 = restoredCtx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r58.deleteBranchStore(branchStore_r50.branchStoreCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-feather-icons", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "trash-2");
} }
function AllBranchstoresComponent_mat_header_row_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
} }
function AllBranchstoresComponent_mat_row_80_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-row", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_mat_row_80_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61); const branchStore_r59 = restoredCtx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r60.viewbranchStore(branchStore_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllBranchstoresComponent_mat_cell_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r24.input.value, "\"");
} }
function AllBranchstoresComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Branch Stores"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class AllBranchstoresComponent {
    constructor(router, snackbar, branchStoreManService) {
        this.router = router;
        this.snackbar = snackbar;
        this.branchStoreManService = branchStoreManService;
        this.displayedColumns = [
            'id',
            'branchStoreCode',
            'branchCode',
            'branchName',
            'branchStoreLocation',
            'phone',
            'email',
            'branchAddress',
            'action'
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
        this.isLoading = true;
        this.pageFunction = "Update";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.downloadLoading = false;
    }
    ngOnInit() {
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
        this.branchStoreManService
            .getbranchStore()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    this.data = res.entity;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(this.data);
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
            complete: () => {
            }
        }), rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
    }
    addBranchStoreCall() {
        this.router.navigate(["/erp-inventory/inventory-parameters/manage-branchstores"]);
    }
    refresh() {
        this.getData();
    }
    editbranchStore(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        console.log("mm", data);
        let route = '/erp-inventory/inventory-parameters/manage-branchstores';
        this.router.navigate([route], { queryParams: { id: data.id, additionalData: serializedData, action: 'Update' } });
    }
    viewbranchStore(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        let route = '/erp-inventory/inventory-parameters/manage-branchstores';
        this.router.navigate([route], { queryParams: {
                id: data.id, additionalData: serializedData, action: 'View'
            } });
        console.log("nn", data);
    }
    deleteBranchStore(branchStoreCode) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you Sure?",
            text: "This Branch Store will be deleted!!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete this Branch Store ",
        }).then((result) => {
            if (result.isConfirmed) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams()
                    .set("branchStoreCode", branchStoreCode);
                this.branchStoreManService.deletebranchStorePemanently(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
                    next: (res) => {
                        this.snackbar.showNotification("snackbar-success", "Branch Store Deleted Successfully");
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getData();
                    }
                }), rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
            }
        });
    }
}
AllBranchstoresComponent.ɵfac = function AllBranchstoresComponent_Factory(t) { return new (t || AllBranchstoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_brancstores_management_service__WEBPACK_IMPORTED_MODULE_2__.BrancstoresManagementService)); };
AllBranchstoresComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AllBranchstoresComponent, selectors: [["app-all-branchstores"]], viewQuery: function AllBranchstoresComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 84, vars: 12, consts: [[1, "content"], [1, "content-block"], [1, "block-header", "body"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "table-style", "mat-elevation-z0"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "start-col mat-elevation-z0", 4, "matHeaderCellDef"], [3, "click", 4, "matCellDef"], ["matColumnDef", "branchCode"], ["matColumnDef", "branchStoreCode"], ["mat-sort-header", "", "class", "mid-col mat-elevation-z0", 4, "matHeaderCellDef"], ["matColumnDef", "branchName"], ["matColumnDef", "branchStoreLocation"], ["matColumnDef", "branchAddress"], ["matColumnDef", "email"], ["matColumnDef", "phone"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", "class", "end-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], ["mat-sort-header", "", 1, "start-col", "mat-elevation-z0"], [3, "click"], ["mat-sort-header", "", 1, "mid-col", "mat-elevation-z0"], [1, "end-col", "mat-elevation-z0"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllBranchstoresComponent_Template(rf, ctx) { if (rf & 1) {
        const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AllBranchstoresComponent_div_8_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 4)(13, "div", 11)(14, "ul", 12)(15, "li", 13)(16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Main Stores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "li", 14)(19, "label", 15)(20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function AllBranchstoresComponent_Template_input_keyup_22_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "li")(25, "div", 19)(26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_Template_button_click_26_listener() { return ctx.addBranchStoreCall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "li")(30, "div", 22)(31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_Template_button_click_31_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23)(35, "ul", 24)(36, "li")(37, "div", 25)(38, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_Template_img_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51); return _r3.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "li")(40, "div", 27)(41, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_Template_img_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51); return _r3.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "li")(43, "div", 29)(44, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_Template_img_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51); return _r3.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "li")(46, "div", 31)(47, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllBranchstoresComponent_Template_img_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51); return _r3.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 33)(49, "mat-table", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](52, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, AllBranchstoresComponent_mat_header_cell_53_Template, 2, 0, "mat-header-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, AllBranchstoresComponent_mat_cell_54_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](55, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, AllBranchstoresComponent_mat_header_cell_56_Template, 2, 0, "mat-header-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, AllBranchstoresComponent_mat_cell_57_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](58, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, AllBranchstoresComponent_mat_header_cell_59_Template, 2, 0, "mat-header-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, AllBranchstoresComponent_mat_cell_60_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](61, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, AllBranchstoresComponent_mat_header_cell_62_Template, 2, 0, "mat-header-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, AllBranchstoresComponent_mat_cell_63_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](64, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, AllBranchstoresComponent_mat_header_cell_65_Template, 2, 0, "mat-header-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, AllBranchstoresComponent_mat_cell_66_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](67, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, AllBranchstoresComponent_mat_header_cell_68_Template, 2, 0, "mat-header-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, AllBranchstoresComponent_mat_cell_69_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](70, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, AllBranchstoresComponent_mat_header_cell_71_Template, 2, 0, "mat-header-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, AllBranchstoresComponent_mat_cell_72_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](73, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, AllBranchstoresComponent_mat_header_cell_74_Template, 2, 0, "mat-header-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, AllBranchstoresComponent_mat_cell_75_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](76, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, AllBranchstoresComponent_mat_header_cell_77_Template, 2, 0, "mat-header-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, AllBranchstoresComponent_mat_cell_78_Template, 7, 9, "mat-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, AllBranchstoresComponent_mat_header_row_79_Template, 1, 0, "mat-header-row", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, AllBranchstoresComponent_mat_row_80_Template, 1, 2, "mat-row", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](81, AllBranchstoresComponent_mat_cell_81_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](82, AllBranchstoresComponent_div_82_Template, 2, 1, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "mat-paginator", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "All Branch Stores")("items", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0))("active_item", "All Branch Stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__.GenWidgetsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_21__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtYnJhbmNoc3RvcmVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 79474:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/branchstores/manage-branchstores/manage-branchstores.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageBranchstoresComponent": () => (/* binding */ ManageBranchstoresComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_erp_inventory_data_services_brancstores_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-inventory/data/services/brancstores-management.service */ 4827);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 87317);















function ManageBranchstoresComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "The branch name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManageBranchstoresComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "The location is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManageBranchstoresComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "The branch Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManageBranchstoresComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "The phone number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManageBranchstoresComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "The email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManageBranchstoresComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "The branch address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["Branch Stores"]; };
class ManageBranchstoresComponent {
    constructor(fb, router, activatedRoute, tokenStorageService, BranchStoreService, snackbar, route, accessControl, tokenCookieService) {
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.tokenStorageService = tokenStorageService;
        this.BranchStoreService = BranchStoreService;
        this.snackbar = snackbar;
        this.route = route;
        this.accessControl = accessControl;
        this.tokenCookieService = tokenCookieService;
        this.showForm = false;
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.branchcodes = [
            '1111',
            '2222',
            '3333',
            '4444',
            '5555'
        ];
        this.currentUser = this.tokenStorageService.getUser().username;
    }
    ngOnInit() {
        this.getPage();
        this.showForm = true;
        console.log("this.formData: ", this.formData);
        console.log("pagefunc: ", this.pageFunction);
        this.route.queryParams.subscribe((params) => {
            console.log("res", params);
            if (params.hasOwnProperty("id")) {
                const action = params["action"];
                if (action == "Update") {
                    this.pageFunction = "Update";
                }
                else if (action == "View") {
                    this.pageFunction = "View";
                }
                this.id = params["id"];
                const serializedData = params["additionalData"];
                const additionalData = JSON.parse(serializedData);
                this.formData = additionalData;
                console.log("ID:", this.id);
                console.log("Additional Data:", additionalData);
                this.getPage();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getPage() {
        console.log("RES", this.formData);
        if (this.pageFunction === "Add") {
            this.generateForm();
        }
        else if (this.pageFunction === "Update") {
            this.generateFormWithData();
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.hideSubmit = true;
        }
    }
    generateForm() {
        this.mngForm = this.fb.group({
            id: [""],
            branchStoreCode: [""],
            branchCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            branchName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            branchStoreLocation: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            branchAddress: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
        });
        this.branchCode = this.tokenCookieService.getUser().branchCode;
        this.mngForm.patchValue({
            branchCode: this.branchCode,
        });
    }
    generateFormWithData() {
        this.mngForm = this.fb.group({
            id: [this.formData.id],
            branchStoreCode: [this.formData.branchStoreCode,],
            branchCode: [this.formData.branchCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            branchName: [this.formData.branchName, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            branchStoreLocation: [this.formData.branchStoreLocation, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            phone: [this.formData.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            email: [this.formData.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            branchAddress: [this.formData.branchAddress, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        });
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            id: [{ value: this.formData.id, disabled: true }],
            branchStoreCode: [{ value: this.formData.branchStoreCode, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            branchCode: [{ value: this.formData.branchCode, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            branchName: [{ value: this.formData.branchName, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            branchStoreLocation: [{ value: this.formData.branchStoreLocation, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            phone: [{ value: this.formData.phone, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            email: [{ value: this.formData.email, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            branchAddress: [{ value: this.formData.branchAddress, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        });
    }
    cancel() {
        this.router.navigate(["/erp-inventory/inventory-parameters/all-branchstores"]);
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        if (this.pageFunction === "Add") {
            this.BranchStoreService
                .addbranchStore(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "Branch Store Added Successfully");
                        this.router.navigate(["/erp-inventory/inventory-parameters/all-branchstores"]);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err);
                },
                complete: () => { },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.BranchStoreService
                .updatebranchStore(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "Branch Store Updated Successfully");
                        this.router.navigate(["/erp-inventory/inventory-parameters/all-branchstores"]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription;
        }
    }
}
ManageBranchstoresComponent.ɵfac = function ManageBranchstoresComponent_Factory(t) { return new (t || ManageBranchstoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_brancstores_management_service__WEBPACK_IMPORTED_MODULE_1__.BrancstoresManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_4__.TokenCookieService)); };
ManageBranchstoresComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ManageBranchstoresComponent, selectors: [["app-manage-branchstores"]], decls: 59, vars: 15, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "row"], [1, "col-12"], [1, "body"], [1, "m-4", 3, "formGroup"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-3"], ["appearance", "outline", 1, "example-full-width", "mb-3"], [1, ""], ["matInput", "", "formControlName", "branchName"], [4, "ngIf"], ["matInput", "", "formControlName", "branchStoreLocation"], ["matInput", "", "formControlName", "branchCode", "readonly", ""], ["type", "number", "matInput", "", "formControlName", "phone"], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "branchAddress"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["mat-dialog-action", "", 3, "align"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "hidden", "click"]], template: function ManageBranchstoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 10)(14, "form", 11)(15, "div", 8)(16, "div", 12)(17, "mat-form-field", 13)(18, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ManageBranchstoresComponent_mat_error_21_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 12)(23, "mat-form-field", 13)(24, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ManageBranchstoresComponent_mat_error_27_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 12)(29, "mat-form-field", 13)(30, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " Branch Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ManageBranchstoresComponent_mat_error_33_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 12)(35, "mat-form-field", 13)(36, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, ManageBranchstoresComponent_mat_error_39_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 12)(41, "mat-form-field", 13)(42, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, ManageBranchstoresComponent_mat_error_45_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 12)(47, "mat-form-field", 13)(48, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, " Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, ManageBranchstoresComponent_mat_error_51_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 8)(53, "div", 22)(54, "div", 23)(55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageBranchstoresComponent_Template_button_click_55_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageBranchstoresComponent_Template_button_click_57_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Manage Branch Stores")("items", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c0))("active_item", "Manage Branch Stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Branch Stores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mngForm.get("branchName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mngForm.get("branchStoreLocation").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mngForm.get("branchCode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mngForm.get("phone").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mngForm.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mngForm.get("branchAddress").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("align", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.mngForm.valid)("hidden", ctx.hideSubmit);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton], styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  margin: 2cap;\n}\n\n.section[_ngcontent-%COMP%] {\n  background: #afb0ae;\n}\n\n.bg-kingdom[_ngcontent-%COMP%] {\n  background: linear-gradient(to left, #004400, #002200);\n}\n\n.bg-card[_ngcontent-%COMP%] {\n  background: #004400;\n  border-bottom-style: outset;\n  border-right-style: outset;\n  box-shadow: 0px 2px 4px -1px rgba(0, 68, 0, 0.18), 0px 4px 5px 0px rgba(0, 68, 0, 0.126), 0px 1px 10px 0px rgba(0, 68, 0, 0.108);\n}\n\n.curve-card[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 15px;\n  border-bottom-style: outset;\n  border-right-style: outset;\n  box-shadow: 0px 2px 4px -1px rgba(0, 68, 0, 0.18), 0px 4px 5px 0px rgba(0, 68, 0, 0.126), 0px 1px 10px 0px rgba(0, 68, 0, 0.108);\n}\n\n.font[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: medium;\n}\n\n.card-color[_ngcontent-%COMP%] {\n  background-color: #e8e8e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1icmFuY2hzdG9yZXMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS9fZWxldmF0aW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFJRTtFQUNFLG1CQUFBO0FBREo7O0FBSUU7RUFDRSxzREFBQTtBQURKOztBQUtFO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VDMElGLGdJQUFBO0FEM0lGOztBQU1FO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VDa0lGLGdJQUFBO0FEcElGOztBQU1FO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUU7RUFDRSx5QkFBQTtBQUhKIiwiZmlsZSI6Im1hbmFnZS1icmFuY2hzdG9yZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHsgXG4gICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBtYXJnaW46MmNhcDtcbiAgfVxuXG5cblxuICAuc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2FmYjBhZTtcbiAgfTtcbiAgXG4gIC5iZy1raW5nZG9tIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzAwNDQwMCwgIzAwMjIwMCk7XG4gIH1cbiAgXG4gICBAaW1wb3J0ICd+QGFuZ3VsYXIvbWF0ZXJpYWwvdGhlbWluZyc7XG4gIC5iZy1jYXJke1xuICAgIGJhY2tncm91bmQ6ICgjMDA0NDAwKTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBvdXRzZXQ7XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBvdXRzZXQ7XG4gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbig0LCAjMDA0NDAwLCAwLjkpO1xuICAgIFxuICB9O1xuICBcbiAgLmN1cnZlLWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogb3V0c2V0O1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTogb3V0c2V0O1xuICAgIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oNCwgIzAwNDQwMCwgMC45KTtcbiAgfVxuICBcbiAgLmZvbnR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgfTtcbiAgXG4gIC5jYXJkLWNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTU7XG4gIH1cbiAgIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptYXRoJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICd2YXJpYWJsZXMnO1xuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXJpYWJsZXMuJGZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJHByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIGVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRjb2xvciwgJG9wYWNpdHk6ICRvcGFjaXR5KSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCBtYXRoLmlzLXVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC5nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAuZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLmdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBvdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRjb2xvcixcbiAgICAkb3BhY2l0eTogJG9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJHRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 64833:
/*!***************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/catalogue/all-catalogue/all-catalogue.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllCatalogueComponent": () => (/* binding */ AllCatalogueComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_inventory_data_services_catalogue_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/services/catalogue-management.service */ 54212);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 48632);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
























function AllCatalogueComponent_mat_header_cell_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCatalogueComponent_mat_cell_53_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_mat_cell_53_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const row_r25 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.onSelect(row_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r25.id, "");
} }
function AllCatalogueComponent_mat_header_cell_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCatalogueComponent_mat_cell_56_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_mat_cell_56_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const row_r28 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.onSelect(row_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r28.name, " ");
} }
function AllCatalogueComponent_mat_header_cell_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Item Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCatalogueComponent_mat_cell_59_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_mat_cell_59_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const row_r31 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r32.onSelect(row_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r31.itemCode, " ");
} }
function AllCatalogueComponent_mat_header_cell_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCatalogueComponent_mat_cell_62_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_mat_cell_62_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36); const row_r34 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r35.onSelect(row_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r34.quantity, " ");
} }
function AllCatalogueComponent_mat_header_cell_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Units ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCatalogueComponent_mat_cell_65_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_mat_cell_65_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); const row_r37 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r38.onSelect(row_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r37.unit, " ");
} }
function AllCatalogueComponent_mat_header_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Category Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCatalogueComponent_mat_cell_68_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_mat_cell_68_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42); const row_r40 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r41.onSelect(row_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r40.itemCategory, " ");
} }
function AllCatalogueComponent_mat_header_cell_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Stock Ac. Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCatalogueComponent_mat_cell_71_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_mat_cell_71_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const row_r43 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r44.onSelect(row_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r43.accountName, " ");
} }
function AllCatalogueComponent_mat_header_cell_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Stock Ac. Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCatalogueComponent_mat_cell_74_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_mat_cell_74_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48); const row_r46 = restoredCtx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r47.onSelect(row_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r46.accountNumber, " ");
} }
function AllCatalogueComponent_mat_header_cell_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCatalogueComponent_mat_cell_77_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 60)(1, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_mat_cell_77_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllCatalogueComponent_mat_cell_77_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53); const row_r49 = restoredCtx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r52.editCatalogue(row_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-feather-icons", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_mat_cell_77_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllCatalogueComponent_mat_cell_77_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53); const row_r49 = restoredCtx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r55.viewCatalogue(row_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-feather-icons", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_mat_cell_77_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllCatalogueComponent_mat_cell_77_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53); const row_r49 = restoredCtx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r57.deleteCatalogue(row_r49.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-feather-icons", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "trash-2");
} }
function AllCatalogueComponent_mat_header_row_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
} }
function AllCatalogueComponent_mat_row_79_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-row", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_mat_row_79_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r60); const row_r58 = restoredCtx.$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r59.viewCatalogue(row_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllCatalogueComponent_mat_cell_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r23.input.value, "\"");
} }
function AllCatalogueComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Catalogue Items"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class AllCatalogueComponent {
    constructor(router, snackbar, catalogueManSerivice) {
        this.router = router;
        this.snackbar = snackbar;
        this.catalogueManSerivice = catalogueManSerivice;
        this.displayedColumns = [
            'id',
            'itemCode',
            'name',
            'itemCategory',
            'quantity',
            'accountName',
            'accountNumber',
            // 'description',
            // 'location', 
            //  'statusType', 
            //  'unit', 
            // // 'unitCost',
            // 'totalCost',
            //  'ageCategory', 
            // //  'transactionDate', 
            // //  'transactionId', 
            //  'automatedReorderPoint', 
            //  'barcodeValue', 
            //  'rfidTagValue', 
            //  'sku', 
            // //  'transactionType',
            // 'minimumStockLevel',
            'action'
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
        this.isLoading = true;
        this.pageFunction = "Update";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.downloadLoading = false;
    }
    ngOnInit() {
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
        this.catalogueManSerivice.getCatalogue().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    // this.data = res.entity;
                    this.data = res.entity;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(this.data);
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
            complete: () => {
            }
        }), rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
    }
    addCatalogueCall() {
        this.router.navigate(["/erp-inventory/inventory-parameters/manage-catalogue"]);
    }
    refresh() {
        this.getData();
    }
    editCatalogue(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        console.log("mm", data);
        let route = '/erp-inventory/inventory-parameters/manage-catalogue';
        this.router.navigate([route], { queryParams: { id: data.id, additionalData: serializedData, action: 'Update' } });
    }
    viewCatalogue(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        let route = '/erp-inventory/inventory-parameters/manage-catalogue';
        this.router.navigate([route], { queryParams: { id: data.id, additionalData: serializedData, action: 'View' } });
    }
    deleteCatalogue(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you Sure?",
            text: "This item will be deleted!!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete this Item",
        }).then((result) => {
            if (result.isConfirmed) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams()
                    .set("id", id);
                this.catalogueManSerivice.deleteCataloguePermanently(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
                    next: (res) => {
                        this.snackbar.showNotification("snackbar-success", "Item Deleted Successfully");
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getData();
                    }
                }), rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
            }
        });
    }
}
AllCatalogueComponent.ɵfac = function AllCatalogueComponent_Factory(t) { return new (t || AllCatalogueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_catalogue_management_service__WEBPACK_IMPORTED_MODULE_2__.CatalogueManagementService)); };
AllCatalogueComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AllCatalogueComponent, selectors: [["app-all-catalogue"]], viewQuery: function AllCatalogueComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 83, vars: 11, consts: [[1, "content"], [1, "content-block"], [1, "block-header", "body"], [1, "bg-table-header", 3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card", "bg-card", "mat-elevation-z0"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader", "bg-table-header", "font"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "table-style", "mat-elevation-z0"], ["matTableExporter", "", "matSort", "", 1, "font-table", "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "start-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "mat-column", 3, "click", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-sort-header", "", "class", "mid-col mat-elevation-z0", 4, "matHeaderCellDef"], [3, "click", 4, "matCellDef"], ["matColumnDef", "itemCode"], ["matColumnDef", "quantity"], ["matColumnDef", "unit"], ["matColumnDef", "itemCategory"], ["matColumnDef", "accountName"], ["matColumnDef", "accountNumber"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", "class", "end-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["mat-sort-header", "", 1, "start-col", "mat-elevation-z0"], [1, "mat-column", 3, "click"], ["mat-sort-header", "", 1, "mid-col", "mat-elevation-z0"], [3, "click"], [1, "end-col", "mat-elevation-z0"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllCatalogueComponent_Template(rf, ctx) { if (rf & 1) {
        const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Catalogue Items ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function AllCatalogueComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_Template_button_click_25_listener() { return ctx.addCatalogueCall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "li")(29, "div", 21)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_Template_button_click_30_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 22)(34, "ul", 23)(35, "li")(36, "div", 24)(37, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_Template_img_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "li")(39, "div", 26)(40, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_Template_img_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "li")(42, "div", 28)(43, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_Template_img_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "li")(45, "div", 30)(46, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCatalogueComponent_Template_img_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 32)(48, "mat-table", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](51, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, AllCatalogueComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, AllCatalogueComponent_mat_cell_53_Template, 2, 1, "mat-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](54, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, AllCatalogueComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, AllCatalogueComponent_mat_cell_56_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](57, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, AllCatalogueComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, AllCatalogueComponent_mat_cell_59_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](60, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, AllCatalogueComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, AllCatalogueComponent_mat_cell_62_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](63, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, AllCatalogueComponent_mat_header_cell_64_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, AllCatalogueComponent_mat_cell_65_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](66, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, AllCatalogueComponent_mat_header_cell_67_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, AllCatalogueComponent_mat_cell_68_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](69, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, AllCatalogueComponent_mat_header_cell_70_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, AllCatalogueComponent_mat_cell_71_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](72, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, AllCatalogueComponent_mat_header_cell_73_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, AllCatalogueComponent_mat_cell_74_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](75, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, AllCatalogueComponent_mat_header_cell_76_Template, 2, 0, "mat-header-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, AllCatalogueComponent_mat_cell_77_Template, 7, 9, "mat-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, AllCatalogueComponent_mat_header_row_78_Template, 1, 0, "mat-header-row", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, AllCatalogueComponent_mat_row_79_Template, 1, 2, "mat-row", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, AllCatalogueComponent_mat_cell_80_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](81, AllCatalogueComponent_div_81_Template, 2, 1, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "mat-paginator", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "All Item in Catalogue")("items", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0))("active_item", "All Items in Catalogue");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_19__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtY2F0YWxvZ3VlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9738:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/catalogue/manage-catalogue/manage-catalogue.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCatalogueComponent": () => (/* binding */ ManageCatalogueComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_finance_data_lookups_expense_lookup_expense_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/expense-lookup/expense-lookup.component */ 30417);
/* harmony import */ var src_app_erp_finance_data_lookups_gls_lookup_gls_lookup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/gls-lookup/gls-lookup.component */ 83163);
/* harmony import */ var src_app_erp_inventory_data_lookups_category_lookup_category_lookup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/lookups/category-lookup/category-lookup.component */ 24325);
/* harmony import */ var src_app_erp_inventory_data_lookups_units_of_meausure_lookup_units_of_meausure_lookup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-inventory/data/lookups/units-of-meausure-lookup/units-of-meausure-lookup.component */ 44427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_inventory_data_services_mainstore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/erp-inventory/data/services/mainstore.service */ 14280);
/* harmony import */ var src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/erp-inventory/data/services/item-category.service */ 42053);
/* harmony import */ var src_app_erp_inventory_data_services_catalogue_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/erp-inventory/data/services/catalogue-management.service */ 54212);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);






















function ManageCatalogueComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Name of the item is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageCatalogueComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Item Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageCatalogueComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "ExpenseCode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageCatalogueComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The units of measure are required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageCatalogueComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The quantity of the item is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageCatalogueComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The minimum stock level is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageCatalogueComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The AutomateD Re-Order point IS required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageCatalogueComponent_mat_error_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The stock keeping unit is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageCatalogueComponent_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [" Master Catalogue"]; };
class ManageCatalogueComponent {
    //this.formData.totalCost = (this.formData.unit* this.formData.unitCost)
    constructor(fb, router, tokenStorageService, snackbar, route, MainStoreService, ItemCatManService, catalogueManService, dialog) {
        this.fb = fb;
        this.router = router;
        this.tokenStorageService = tokenStorageService;
        this.snackbar = snackbar;
        this.route = route;
        this.MainStoreService = MainStoreService;
        this.ItemCatManService = ItemCatManService;
        this.catalogueManService = catalogueManService;
        this.dialog = dialog;
        this.showForm = false;
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.units = ['Kilograms', 'Boxes', 'Grams', 'Litres', 'Metres'];
        this.ageClasses = ['New', 'Old', 'obsolete', 'refurbished'];
        this.statuses = ['Available', 'Out of stock'];
        this.totalCost = 0;
        //************************************************************************************************************************** */
        //category Look upany 
        this.selectedItem = [];
        this.selectedGlItem = [];
        this.expenseIsSelected = false;
        this.selectedExpense = [];
        this.expenseArray = [];
        this.expenseGlCode = "";
        this.currentUser = this.tokenStorageService.getUser().username;
    }
    ngOnInit() {
        this.getPage();
        this.showForm = true;
        this.route.queryParams.subscribe((params) => {
            console.log("res", params);
            if (params.hasOwnProperty("id")) {
                const action = params["action"];
                if (action == "Update") {
                    this.pageFunction = "Update";
                }
                else if (action == "View") {
                    this.pageFunction = "View";
                }
                this.suppliercategoryId = params["id"];
                const serializedData = params["additionalData"];
                const additionalData = JSON.parse(serializedData);
                this.formData = additionalData;
                this.getPage();
            }
        });
    }
    categoryLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "600px";
        dialogConfig.data =
            {
                action: "view category",
                selected: this.selectedItem,
            };
        const dialogRef = this.dialog.open(src_app_erp_inventory_data_lookups_category_lookup_category_lookup_component__WEBPACK_IMPORTED_MODULE_2__.CategoryLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("categories: ", result);
            result.data.forEach(element => {
                this.mngForm.patchValue({
                    itemCategory: element.categoryName,
                    accountName: element.accountName,
                    accountNumber: element.accountNumber,
                });
            });
        });
    }
    unitLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "600px";
        dialogConfig.data =
            {
                action: "view units",
                selected: this.selectedItem,
            };
        const dialogRef = this.dialog.open(src_app_erp_inventory_data_lookups_units_of_meausure_lookup_units_of_meausure_lookup_component__WEBPACK_IMPORTED_MODULE_3__.UnitsOfMeausureLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("categories: ", result);
            result.data.forEach(element => {
                this.mngForm.patchValue({
                    unit: element.unitOfMeasureName,
                });
            });
        });
    }
    _glsLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "View GL Accounts",
            selected: this.selectedItem,
            type: "Expense"
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_gls_lookup_gls_lookup_component__WEBPACK_IMPORTED_MODULE_1__.GlsLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            result.data.forEach(element => {
                this.mngForm.patchValue({
                    accountName: element.accountID,
                    accountNumber: element.description,
                });
            });
        });
    }
    expenseLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "Single Expense",
            selected: this.selectedExpense,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_expense_lookup_expense_lookup_component__WEBPACK_IMPORTED_MODULE_0__.ExpenseLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("lookupresonse: ", result.data);
            this.mngForm.patchValue({
                expenseCode: result.data[0].expenseCode,
            });
        });
    }
    //************************************************************************************************************************** */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getPage() {
        console.log("RES", this.formData);
        if (this.pageFunction === "Add") {
            this.generateForm();
        }
        else if (this.pageFunction === "Update") {
            this.generateFormWithData();
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.hideSubmit = true;
        }
    }
    generateForm() {
        this.mngForm = this.fb.group({
            // id: [""],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            quantity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            itemCategory: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            unit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            // ageCategory: ["", [Validators.required]],
            minimumStockLevel: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            automatedReorderPoint: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            sku: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            expenseCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            //accountName: ["", [Validators.required]],
            //accountNumber: ["", [Validators.required]],
            // location: ["", [Validators.required]],
        });
    }
    // useless
    // unitCost = this.mngForm.value.unitCost;
    // quantity = this.mngForm.value.quantity;
    generateFormWithData() {
        this.mngForm = this.fb.group({
            itemCode: [this.formData.itemCode],
            id: [this.formData.id],
            name: [this.formData.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            quantity: [this.formData.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            itemCategory: [this.formData.itemCategory, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            description: [this.formData.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            // statusType: [this.formData.statusType, [Validators.required]],
            unit: [this.formData.unit, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            // ageCategory: [this.formData.ageCategory, [Validators.required]],
            automatedReorderPoint: [this.formData.automatedReorderPoint, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            minimumStockLevel: [this.formData.minimumStockLevel, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            sku: [this.formData.sku, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            expenseCode: [this.formData.expenseCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            //accountName: [this.formData.accountName, [Validators.required]],
            //accountNumber: [this.formData.accountNumber, [Validators.required]],
        });
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            // id: [{ value: this.formData.id, disabled: true }],
            name: [{ value: this.formData.name, disabled: true }],
            quantity: [{ value: this.formData.quantity, disabled: true }],
            itemCategory: [{ value: this.formData.itemCategory, disabled: true }],
            description: [{ value: this.formData.description, disabled: true }],
            unit: [{ value: this.formData.unit, disabled: true }],
            automatedReorderPoint: [{ value: this.formData.automatedReorderPoint, disabled: true }],
            minimumStockLevel: [{ value: this.formData.minimumStockLevel, disabled: true }],
            sku: [{ value: this.formData.sku, disabled: true }],
            //accountName:  [{ value: this.formData.accountName, disabled: true }],  
            //accountNumber:  [{ value: this.formData.accountNumber, disabled: true }],  
        });
    }
    cancel() {
        this.router.navigate(["/erp-inventory/inventory-parameters/all-catalogue"]);
    }
    dateValidator(control) {
        const selectedDate = control.value;
        const today = new Date();
        if (selectedDate <= today) {
            return { pastDate: true };
        }
        return null;
    }
    //******************************************************************************************************************* */
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        if (this.pageFunction === "Add") {
            this.catalogueManService
                .addCatalogue(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "Item Added Successfully");
                        this.router.navigate(["/erp-inventory/inventory-parameters/all-catalogue"]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.catalogueManService
                .updateCatalogue(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    console.log("res.status, ", res.statusCode);
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "Item Updated Successfully");
                        this.router.navigate(["/erp-inventory/inventory-parameters/all-catalogue"]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription;
        }
    }
}
ManageCatalogueComponent.ɵfac = function ManageCatalogueComponent_Factory(t) { return new (t || ManageCatalogueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_4__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_mainstore_service__WEBPACK_IMPORTED_MODULE_6__.MainstoreService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_7__.ItemCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_catalogue_management_service__WEBPACK_IMPORTED_MODULE_8__.CatalogueManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog)); };
ManageCatalogueComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ManageCatalogueComponent, selectors: [["app-manage-catalogue"]], decls: 83, vars: 18, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "row"], [1, "col-12"], [1, "body"], [1, "m-4", 3, "formGroup"], [1, "col-xl-3", "col-lg-3", "col-md-12", "col-sm-12", "mb-3"], ["appearance", "outline", 1, "example-full-width", "mb-0"], [1, ""], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "formControlName", "itemCategory", "readonly", ""], ["matSuffix", "", 3, "click"], [1, "col-xl-3", "col-lg-3", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "expenseCode"], ["matInput", "", "formControlName", "unit", "readonly", ""], ["type", "number", "matInput", "", "formControlName", "quantity"], ["type", "number", "matInput", "", "formControlName", "minimumStockLevel"], ["type", "number", "matInput", "", "formControlName", "automatedReorderPoint"], ["matInput", "", "formControlName", "sku"], ["matInput", "", "formControlName", "description"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["mat-dialog-action", "", 3, "align"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "hidden", "click"]], template: function ManageCatalogueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 10)(14, "form", 11)(15, "div", 8)(16, "div", 12)(17, "mat-form-field", 13)(18, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ManageCatalogueComponent_mat_error_21_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 12)(23, "mat-form-field", 13)(24, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Item Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageCatalogueComponent_Template_mat_icon_click_27_listener() { return ctx.categoryLookUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, ManageCatalogueComponent_mat_error_29_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 19)(31, "mat-form-field", 13)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "ExpenseCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageCatalogueComponent_Template_mat_icon_click_35_listener() { return ctx.expenseLookUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, ManageCatalogueComponent_mat_error_37_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 12)(39, "mat-form-field", 13)(40, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, " Units of Measure");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageCatalogueComponent_Template_mat_icon_click_43_listener() { return ctx.unitLookUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, ManageCatalogueComponent_mat_error_45_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 12)(47, "mat-form-field", 13)(48, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, " Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, ManageCatalogueComponent_mat_error_51_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 12)(53, "mat-form-field", 13)(54, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, " Minimum Stock Level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, ManageCatalogueComponent_mat_error_57_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 12)(59, "mat-form-field", 13)(60, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Automated Re-Order Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, ManageCatalogueComponent_mat_error_63_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "div", 12)(65, "mat-form-field", 13)(66, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "Stock Keeping Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](68, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](69, ManageCatalogueComponent_mat_error_69_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "div", 12)(71, "mat-form-field", 13)(72, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](74, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](75, ManageCatalogueComponent_mat_error_75_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 8)(77, "div", 27)(78, "div", 28)(79, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageCatalogueComponent_Template_button_click_79_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageCatalogueComponent_Template_button_click_81_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", "Manage Master Catalogue")("items", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](17, _c0))("active_item", "Manage  Master Catalogue");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Item Catalogue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("itemCategory").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("expenseCode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("unit").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("quantity").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("minimumStockLevel").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("automatedReorderPoint").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("sku").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("description").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("align", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.mngForm.valid)("hidden", ctx.hideSubmit);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton], styles: [".section[_ngcontent-%COMP%] {\n  background: #afb0ae;\n}\n\n.bg-kingdom[_ngcontent-%COMP%] {\n  background: linear-gradient(to left, #004400, #002200);\n}\n\n.bg-card[_ngcontent-%COMP%] {\n  background: #b1c9aa;\n  border-bottom-style: outset;\n  border-right-style: outset;\n  box-shadow: 0px 2px 4px -1px rgba(0, 68, 0, 0.18), 0px 4px 5px 0px rgba(0, 68, 0, 0.126), 0px 1px 10px 0px rgba(0, 68, 0, 0.108);\n}\n\n.curve-card[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 15px;\n  border-bottom-style: outset;\n  border-right-style: outset;\n  box-shadow: 0px 2px 4px -1px rgba(0, 68, 0, 0.18), 0px 4px 5px 0px rgba(0, 68, 0, 0.126), 0px 1px 10px 0px rgba(0, 68, 0, 0.108);\n}\n\n.font[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: medium;\n}\n\n.card-color[_ngcontent-%COMP%] {\n  background-color: #e8e8e5;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1jYXRhbG9ndWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS9fZWxldmF0aW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0RBQUE7QUFDRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQ2lKQSxnSUFBQTtBRGhKRjs7QUFJQTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQ3lJQSxnSUFBQTtBRHpJRjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0FBREYiLCJmaWxlIjoibWFuYWdlLWNhdGFsb2d1ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2FmYjBhZTtcbn07XG5cbi5iZy1raW5nZG9tIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMDQ0MDAsICMwMDIyMDApO1xufVxuXG4gQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xuLmJnLWNhcmR7XG4gIGJhY2tncm91bmQ6ICgjYjFjOWFhKTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogb3V0c2V0O1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG91dHNldDtcbiAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbig0LCAjMDA0NDAwLCAwLjkpO1xuICBcbn07XG5cbi5jdXJ2ZS1jYXJke1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogb3V0c2V0O1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG91dHNldDtcbiAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbig0LCAjMDA0NDAwLCAwLjkpO1xufVxuXG4uZm9udHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufTtcblxuLmNhcmQtY29sb3J7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTU7XG59XG5cbmgye1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufSIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWF0aCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAndmFyaWFibGVzJztcblxuXG4vLyBBIGNvbGxlY3Rpb24gb2YgbWl4aW5zIGFuZCBDU1MgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IGVsZXZhdGlvbiB0byBhIG1hdGVyaWFsXG4vLyBlbGVtZW50LlxuLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9lbnZpcm9ubWVudC9lbGV2YXRpb24uaHRtbFxuLy8gRXhhbXBsZXM6XG4vL1xuLy9cbi8vIC5tYXQtZm9vIHtcbi8vICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oMik7XG4vL1xuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oOCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyA8ZGl2IGlkPVwiZXh0ZXJuYWwtY2FyZFwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16MlwiPjxwPlNvbWUgY29udGVudDwvcD48L2Rpdj5cbi8vXG4vLyBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRlc2lnbiBiZWhpbmQgaG93IGVsZXZhdGlvbiBpcyBpbXBsZW1lbnRlZCwgc2VlIHRoZSBkZXNpZ24gZG9jIGF0XG4vLyBodHRwczovL2dvby5nbC9LcTBrOVouXG5cbi8vIENvbG9ycyBmb3IgdW1icmEsIHBlbnVtYnJhLCBhbmQgYW1iaWVudCBzaGFkb3dzLiBBcyBkZXNjcmliZWQgaW4gdGhlIGRlc2lnbiBkb2MsIGVhY2ggZWxldmF0aW9uXG4vLyBsZXZlbCBpcyBjcmVhdGVkIHVzaW5nIGEgc2V0IG9mIDMgc2hhZG93IHZhbHVlcywgb25lIGZvciB1bWJyYSAodGhlIHNoYWRvdyByZXByZXNlbnRpbmcgdGhlXG4vLyBzcGFjZSBjb21wbGV0ZWx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCByZWxhdGl2ZSB0byBpdHMgbGlnaHQgc291cmNlKSwgb25lIGZvciBwZW51bWJyYSAodGhlXG4vLyBzcGFjZSBwYXJ0aWFsbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0KSwgYW5kIG9uZSBmb3IgYW1iaWVudCAodGhlIHNwYWNlIHdoaWNoIGNvbnRhaW5zIHRoZSBvYmplY3Rcbi8vIGl0c2VsZikuIEZvciBhIGZ1cnRoZXIgZXhwbGFuYXRpb24gb2YgdGhlc2UgdGVybXMgYW5kIHRoZWlyIG1lYW5pbmdzLCBzZWVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VtYnJhLF9wZW51bWJyYV9hbmRfYW50dW1icmEuXG5cbi8vIE1hcHMgZm9yIHRoZSBkaWZmZXJlbnQgc2hhZG93IHNldHMgYW5kIHRoZWlyIHZhbHVlcyB3aXRoaW4gZWFjaCB6LXNwYWNlLiBUaGVzZSB2YWx1ZXMgd2VyZVxuLy8gY3JlYXRlZCBieSB0YWtpbmcgYSBmZXcgcmVmZXJlbmNlIHNoYWRvdyBzZXRzIGNyZWF0ZWQgYnkgR29vZ2xlJ3MgRGVzaWduZXJzIGFuZCBpbnRlcnBvbGF0aW5nXG4vLyBhbGwgb2YgdGhlIHZhbHVlcyBiZXR3ZWVuIHRoZW0uXG5cbkBmdW5jdGlvbiBfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAycHggMXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAzcHggMXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggM3B4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAycHggNHB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA0cHggNXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA1cHggNXB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA1cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNnB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDZweCA3cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDdweCA5cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA4cHggOXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggOHB4IDEwcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA4cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDlweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggOXB4IDEycHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAxMHB4IDE0cHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAxMXB4IDE0cHggLTdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAxMXB4IDE1cHggLTdweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZihtZXRhLnR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAxcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMnB4IDJweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDRweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggNXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCA2cHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA3cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA4cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA5cHggMTJweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggMTBweCAxNHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCAxMXB4IDE1cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDEycHggMTdweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggMTNweCAxOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCAxNHB4IDIxcHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDE1cHggMjJweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggMTZweCAyNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCAxN3B4IDI2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDE4cHggMjhweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggMTlweCAyOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAyMHB4IDMxcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDIxcHggMzNweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMjJweCAzNXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAyM3B4IDM2cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDI0cHggMzhweCAzcHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZihtZXRhLnR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAzcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMXB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAxcHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDFweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDFweCAxNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDFweCAxOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDJweCAxNnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDNweCAxNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDNweCAxNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA0cHggMThweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNHB4IDIwcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDVweCAyMnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA1cHggMjRweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggNXB4IDI2cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDZweCAyOHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA2cHggMzBweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggNnB4IDMycHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDdweCAzNHB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA3cHggMzZweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggOHB4IDM4cHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDhweCA0MHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCA4cHggNDJweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggOXB4IDQ0cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDlweCA0NnB4IDhweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG4vLyBUaGUgZGVmYXVsdCBkdXJhdGlvbiB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJHRyYW5zaXRpb24tZHVyYXRpb246IDI4MG1zICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBlYXNpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyaWFibGVzLiRmYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjtcblxuLy8gVGhlIGRlZmF1bHQgY29sb3IgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJGNvbG9yOiBibGFjayAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgb3BhY2l0eSBzY2FsaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRvcGFjaXR5OiAxICFkZWZhdWx0O1xuXG4vLyBQcmVmaXggZm9yIGVsZXZhdGlvbi1yZWxhdGVkIHNlbGVjdG9ycy5cbiRwcmVmaXg6ICdtYXQtZWxldmF0aW9uLXonO1xuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyB0byBhbiBlbGVtZW50IHRvIGdpdmUgaXQgdGhlIGVsZXZhdGlvbiBzcGVjaWZpZWQgYnkgJHpWYWx1ZS5cbi8vIFRoZSAkelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNC5cbkBtaXhpbiBlbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yOiAkY29sb3IsICRvcGFjaXR5OiAkb3BhY2l0eSkge1xuICBAaWYgbWV0YS50eXBlLW9mKCR6VmFsdWUpICE9IG51bWJlciBvciBub3QgbWF0aC5pcy11bml0bGVzcygkelZhbHVlKSB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYSB1bml0bGVzcyBudW1iZXInO1xuICB9XG4gIEBpZiAkelZhbHVlIDwgMCBvciAkelZhbHVlID4gMjQge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQnO1xuICB9XG5cbiAgYm94LXNoYWRvdzogI3ttYXAuZ2V0KF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLmdldChfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC5nZXQoX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9O1xufVxuXG4vLyBBcHBsaWVzIHRoZSBlbGV2YXRpb24gdG8gYW4gZWxlbWVudCBpbiBhIG1hbm5lciB0aGF0IGFsbG93c1xuLy8gY29uc3VtZXJzIHRvIG92ZXJyaWRlIGl0IHZpYSB0aGUgTWF0ZXJpYWwgZWxldmF0aW9uIGNsYXNzZXMuXG5AbWl4aW4gb3ZlcnJpZGFibGUtZWxldmF0aW9uKFxuICAgICR6VmFsdWUsXG4gICAgJGNvbG9yOiAkY29sb3IsXG4gICAgJG9wYWNpdHk6ICRvcGFjaXR5KSB7XG4gICY6bm90KFtjbGFzcyo9JyN7JHByZWZpeH0nXSkge1xuICAgIEBpbmNsdWRlIGVsZXZhdGlvbigkelZhbHVlLCAkY29sb3IsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciBhIHRyYW5zaXRpb24gcHJvcGVydHkgZm9yIGVsZXZhdGlvbi5cbi8vIENhbGxpbmcgdGhpcyBmdW5jdGlvbiBkaXJlY3RseSBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyB3aGVyZSBhIGNvbXBvbmVudCBuZWVkcyB0byB0cmFuc2l0aW9uXG4vLyBtb3JlIHRoYW4gb25lIHByb3BlcnR5LlxuLy9cbi8vIC5mb28ge1xuLy8gICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoKSwgb3BhY2l0eSAxMDBtcyBlYXNlO1xuLy8gfVxuQGZ1bmN0aW9uIHByaXZhdGUtdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZShcbiAgICAkZHVyYXRpb246ICR0cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICBAcmV0dXJuIGJveC1zaGFkb3cgI3skZHVyYXRpb259ICN7JGVhc2luZ307XG59XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIG5lZWRlZCB0byBoYXZlIGFuIGVsZW1lbnQgdHJhbnNpdGlvbiBiZXR3ZWVuIGVsZXZhdGlvbnMuXG4vLyBUaGlzIG1peGluIHNob3VsZCBiZSBhcHBsaWVkIHRvIGVsZW1lbnRzIHdob3NlIGVsZXZhdGlvbiB2YWx1ZXMgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZWlyXG4vLyBjb250ZXh0IChlLmcuIHdoZW4gYWN0aXZlIG9yIGRpc2FibGVkKS5cbi8vXG4vLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBCb3RoIHRoaXMgbWl4aW4gYW5kIHRoZSBhYm92ZSBmdW5jdGlvbiB1c2UgZGVmYXVsdCBwYXJhbWV0ZXJzIHNvIHRoZXkgY2FuXG4vLyBiZSB1c2VkIGluIHRoZSBzYW1lIHdheSBieSBjbGllbnRzLlxuQG1peGluIGVsZXZhdGlvbi10cmFuc2l0aW9uKFxuICAgICRkdXJhdGlvbjogJHRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIHRyYW5zaXRpb246IHByaXZhdGUtdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgkZHVyYXRpb24sICRlYXNpbmcpO1xufVxuIl19 */"] });


/***/ }),

/***/ 61298:
/*!******************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/categories/all-categories/all-categories.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllCategoriesComponent": () => (/* binding */ AllCategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/services/item-category.service */ 42053);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 48632);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
























function AllCategoriesComponent_mat_header_cell_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCategoriesComponent_mat_cell_53_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_mat_cell_53_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const row_r25 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r27.onSelect(row_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", index_r26 + 1, "");
} }
function AllCategoriesComponent_mat_header_cell_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCategoriesComponent_mat_cell_56_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_mat_cell_56_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const row_r29 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.onSelect(row_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r29.categoryCode, "");
} }
function AllCategoriesComponent_mat_header_cell_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Category Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCategoriesComponent_mat_cell_59_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_mat_cell_59_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const row_r32 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r33.onSelect(row_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r32.categoryName, " ");
} }
function AllCategoriesComponent_mat_header_cell_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Category Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCategoriesComponent_mat_cell_62_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_mat_cell_62_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const row_r35 = restoredCtx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r36.onSelect(row_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r35.categoryDescription, " ");
} }
function AllCategoriesComponent_mat_header_cell_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Product Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCategoriesComponent_mat_cell_65_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_mat_cell_65_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); const row_r38 = restoredCtx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r39.onSelect(row_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r38.productType, " ");
} }
function AllCategoriesComponent_mat_header_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Expense Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCategoriesComponent_mat_cell_68_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_mat_cell_68_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43); const row_r41 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r42.onSelect(row_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r41.expenseType, " ");
} }
function AllCategoriesComponent_mat_header_cell_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Account Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCategoriesComponent_mat_cell_71_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_mat_cell_71_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46); const row_r44 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r45.onSelect(row_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r44.accountName, " ");
} }
function AllCategoriesComponent_mat_header_cell_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Account Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCategoriesComponent_mat_cell_74_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_mat_cell_74_Template_mat_cell_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49); const row_r47 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r48.onSelect(row_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r47.accountNumber, " ");
} }
function AllCategoriesComponent_mat_header_cell_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllCategoriesComponent_mat_cell_77_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 59)(1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_mat_cell_77_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllCategoriesComponent_mat_cell_77_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54); const row_r50 = restoredCtx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r53.editItemCat(row_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-feather-icons", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_mat_cell_77_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllCategoriesComponent_mat_cell_77_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54); const row_r50 = restoredCtx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r56.viewItemCat(row_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-feather-icons", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_mat_cell_77_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllCategoriesComponent_mat_cell_77_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54); const row_r50 = restoredCtx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r58.deleteItemCat(row_r50.categoryCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-feather-icons", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "trash-2");
} }
function AllCategoriesComponent_mat_header_row_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
} }
function AllCategoriesComponent_mat_row_79_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-row", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_mat_row_79_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61); const row_r59 = restoredCtx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r60.viewItemCat(row_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllCategoriesComponent_mat_cell_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r23.input.value, "\"");
} }
function AllCategoriesComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Item Categories"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class AllCategoriesComponent {
    constructor(router, snackbar, ItemCatManService) {
        this.router = router;
        this.snackbar = snackbar;
        this.ItemCatManService = ItemCatManService;
        this.displayedColumns = [
            'index',
            'categoryCode',
            'categoryName',
            'categoryDescription',
            'expenseType',
            // 'itemCategory',
            'productType',
            // 'accountName',
            // 'accountNumber',
            'action'
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
        this.isLoading = true;
        this.pageFunction = "Update";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.downloadLoading = false;
    }
    ngOnInit() {
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
        this.ItemCatManService.getItemCategories().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
            next: (res) => {
                console.log("categories: ", res);
                if (res.statusCode == 200) {
                    // this.data = res.entity;
                    this.data = res.entity;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(this.data);
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
            complete: () => {
            }
        }), rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
    }
    addItemCat() {
        this.router.navigate(["/erp-inventory/inventory-parameters/manage-itemcat"]);
    }
    refresh() {
        this.getData();
    }
    editItemCat(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        console.log("mm", data);
        let route = '/erp-inventory/inventory-parameters/manage-itemcat';
        this.router.navigate([route], { queryParams: { categoryCode: data.categoryCode, additionalData: serializedData, action: 'Update' } });
    }
    viewItemCat(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        let route = '/erp-inventory/inventory-parameters/manage-itemcat';
        this.router.navigate([route], { queryParams: { categoryCode: data.categoryCode, additionalData: serializedData, action: 'View' } });
    }
    deleteItemCat(categoryCode) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you Sure?",
            text: "This item category will be deleted!!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete this Item category",
        }).then((result) => {
            if (result.isConfirmed) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams()
                    .set("categoryCode", categoryCode);
                this.ItemCatManService.deleteItemCategoriesPemanently(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
                    next: (res) => {
                        this.snackbar.showNotification("snackbar-success", "Item Category Deleted Successfully");
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getData();
                    }
                }), rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
            }
        });
    }
}
AllCategoriesComponent.ɵfac = function AllCategoriesComponent_Factory(t) { return new (t || AllCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_2__.ItemCategoryService)); };
AllCategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AllCategoriesComponent, selectors: [["app-all-categories"]], viewQuery: function AllCategoriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 83, vars: 11, consts: [[1, "content"], [1, "content-block"], [1, "block-header", "body"], [1, "bg-table-header", 3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card", "bg-card", "mat-elevation-x0"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader", "bg-table-header", "font"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "h2-col"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "table-style", "mat-elevation-z0"], ["matTableExporter", "", "matSort", "", 1, "font-table", "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "index"], ["mat-sort-header", "", "class", "start-col mat-elevation-z0 ", 4, "matHeaderCellDef"], [3, "click", 4, "matCellDef"], ["matColumnDef", "categoryCode"], ["matColumnDef", "categoryName"], ["mat-sort-header", "", "class", "mid-col mat-elevation-z0", 4, "matHeaderCellDef"], ["matColumnDef", "categoryDescription"], ["matColumnDef", "productType"], ["matColumnDef", "expenseType"], ["matColumnDef", "accountName"], ["matColumnDef", "accountNumber"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", "class", "end-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["mat-sort-header", "", 1, "start-col", "mat-elevation-z0"], [3, "click"], ["mat-sort-header", "", 1, "mid-col", "mat-elevation-z0"], [1, "end-col", "mat-elevation-z0"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Item Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li", 14)(18, "label", 15)(19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function AllCategoriesComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li")(24, "div", 19)(25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_Template_button_click_25_listener() { return ctx.addItemCat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "li")(29, "div", 22)(30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_Template_button_click_30_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 23)(34, "ul", 24)(35, "li")(36, "div", 25)(37, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_Template_img_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "li")(39, "div", 27)(40, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_Template_img_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "li")(42, "div", 29)(43, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_Template_img_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "li")(45, "div", 31)(46, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllCategoriesComponent_Template_img_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 33)(48, "mat-table", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](51, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, AllCategoriesComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, AllCategoriesComponent_mat_cell_53_Template, 3, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](54, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, AllCategoriesComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, AllCategoriesComponent_mat_cell_56_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](57, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, AllCategoriesComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, AllCategoriesComponent_mat_cell_59_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](60, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, AllCategoriesComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, AllCategoriesComponent_mat_cell_62_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](63, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, AllCategoriesComponent_mat_header_cell_64_Template, 2, 0, "mat-header-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, AllCategoriesComponent_mat_cell_65_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](66, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, AllCategoriesComponent_mat_header_cell_67_Template, 2, 0, "mat-header-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, AllCategoriesComponent_mat_cell_68_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](69, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, AllCategoriesComponent_mat_header_cell_70_Template, 2, 0, "mat-header-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, AllCategoriesComponent_mat_cell_71_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](72, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, AllCategoriesComponent_mat_header_cell_73_Template, 2, 0, "mat-header-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, AllCategoriesComponent_mat_cell_74_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](75, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, AllCategoriesComponent_mat_header_cell_76_Template, 2, 0, "mat-header-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, AllCategoriesComponent_mat_cell_77_Template, 7, 9, "mat-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, AllCategoriesComponent_mat_header_row_78_Template, 1, 0, "mat-header-row", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, AllCategoriesComponent_mat_row_79_Template, 1, 2, "mat-row", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, AllCategoriesComponent_mat_cell_80_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](81, AllCategoriesComponent_div_81_Template, 2, 1, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "mat-paginator", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "All Item Categories")("items", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0))("active_item", "All Item Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_19__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 37381:
/*!************************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/categories/manage-categories/manage-categories.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCategoriesComponent": () => (/* binding */ ManageCategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_finance_data_lookups_gls_lookup_gls_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/gls-lookup/gls-lookup.component */ 83163);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/services/item-category.service */ 42053);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-procurement/data/services/notification.service */ 67879);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/file-upload/file-upload.component */ 67082);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! mat-table-exporter */ 31958);






























const _c0 = ["fileInput"];
function ManageCategoriesComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "The category name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ManageCategoriesComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expenseType_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", expenseType_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", expenseType_r9, " ");
} }
function ManageCategoriesComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "The expense type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ManageCategoriesComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const productType_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", productType_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", productType_r10, " ");
} }
function ManageCategoriesComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "The product is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ManageCategoriesComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "The category descrition is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ManageCategoriesComponent_tr_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r11.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r11.expenseType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r11.productType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r11.categoryDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r11.accountName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r11.accountNumber);
} }
function ManageCategoriesComponent_div_73_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ManageCategoriesComponent_div_73_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r23 + 1, " ");
} }
function ManageCategoriesComponent_div_73_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " GL Account Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ManageCategoriesComponent_div_73_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, row_r24.accountName), " ");
} }
function ManageCategoriesComponent_div_73_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " GL Account Number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ManageCategoriesComponent_div_73_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, row_r25.accountNumber), " ");
} }
function ManageCategoriesComponent_div_73_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 57);
} }
function ManageCategoriesComponent_div_73_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageCategoriesComponent_div_73_tr_25_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r27.onSelect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ManageCategoriesComponent_div_73_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 59)(1, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r12.value, "\" ");
} }
const _c1 = function () { return [7, 20, 30, 40, 50, 100]; };
function ManageCategoriesComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 12)(3, "div", 38)(4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ManageCategoriesComponent_div_73_Template_input_keyup_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r29.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 44)(14, "table", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](15, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ManageCategoriesComponent_div_73_th_16_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ManageCategoriesComponent_div_73_td_17_Template, 2, 1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](18, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ManageCategoriesComponent_div_73_th_19_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ManageCategoriesComponent_div_73_td_20_Template, 3, 3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](21, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ManageCategoriesComponent_div_73_th_22_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ManageCategoriesComponent_div_73_td_23_Template, 3, 3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ManageCategoriesComponent_div_73_tr_24_Template, 1, 0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, ManageCategoriesComponent_div_73_tr_25_Template, 1, 0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ManageCategoriesComponent_div_73_tr_26_Template, 3, 1, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "mat-paginator", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r8.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r8.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c1));
} }
const _c2 = function () { return ["All Item Categories"]; };
class ManageCategoriesComponent {
    constructor(fb, router, activatedRoute, tokenStorageService, ItemCatService, snackbar, route, notificationAPI, dialog) {
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.tokenStorageService = tokenStorageService;
        this.ItemCatService = ItemCatService;
        this.snackbar = snackbar;
        this.route = route;
        this.notificationAPI = notificationAPI;
        this.dialog = dialog;
        this.showForm = false;
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.expensetypes = ['OPEX', 'CAPEX'];
        this.productTypes = ['Goods', 'Services', 'Goods & Services'];
        this.excelFileAccepted = false;
        this.excelDataPresent = false;
        this.displayedColumns = [
            "categoryName",
            "expenseType",
            "productType",
            "categoryDescription",
            // "accountNumber",
            // "accountName",
        ];
        this.dataSourceItems = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource([]);
        //excel columns
        this.excelHeaderRef = [
            "categoryName",
            "expenseType",
            "productType",
            "categoryDescription",
            // "accountNumber",
            // "accountName",
        ];
        //******************************************************************************************************************************************************** */
        // Look up for the GLs for stock accounts mapping
        this.selectedItem = [];
        this.items = []; //Array to store
        this.itemErrors = [];
        this.currentUser = this.tokenStorageService.getUser().username;
    }
    //******************************************************************************************************************************************************** */
    ngOnInit() {
        this.getPage();
        this.showForm = true;
        this.route.queryParams.subscribe((params) => {
            console.log("res", params);
            if (params.hasOwnProperty("categoryCode")) {
                const action = params["action"];
                if (action == "Update") {
                    this.pageFunction = "Update";
                }
                else if (action == "View") {
                    this.pageFunction = "View";
                }
                this.categoryCode = params["categoryCode"];
                const serializedData = params["additionalData"];
                const additionalData = JSON.parse(serializedData);
                this.formData = additionalData;
                this.getPage();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getPage() {
        if (this.pageFunction === "Add") {
            this.generateForm();
        }
        else if (this.pageFunction === "Update") {
            this.generateFormWithData();
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.hideSubmit = true;
        }
    }
    //******************************************************************************************************************************************************** */
    generateForm() {
        this.mngForm = this.fb.group({
            categoryName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            expenseType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            productType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            categoryDescription: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            // accountName: ["", [Validators.required]],
            // accountNumber: ["", [Validators.required]],
            // budgetAmount: ["", [Validators.required]],
        });
    }
    generateFormWithData() {
        this.mngForm = this.fb.group({
            // categoryId: [this.formData.categoryId],
            categoryCode: [this.formData.categoryCode],
            categoryName: [this.formData.categoryName, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            expenseType: [this.formData.expenseType, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            productType: [this.formData.productType, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            categoryDescription: [this.formData.categoryDescription, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            // accountName: [this.formData.accountName, [Validators.required]],
            // accountNumber: [this.formData.accountNumber, [Validators.required]],
            // budgetAmount: [this.formData.budgetAmount, [Validators.required]],
        });
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            // categoryId: [{ value: this.formData.categoryId, disabled: true }],
            categoryCode: [{ value: this.formData.categoryCode, disabled: true }],
            categoryName: [{ value: this.formData.categoryName, disabled: true }],
            expenseType: [{ value: this.formData.expenseType, disabled: true }],
            productType: [{ value: this.formData.productType, disabled: true }],
            categoryDescription: [{ value: this.formData.categoryDescription, disabled: true }],
            // accountName: [{ value: this.formData.accountName, disabled: true }],
            // accountNumber: [{ value: this.formData.accountNumber, disabled: true }],
            // budgetAmount: [{ value: this.formData.budgetAmount, disabled: true }],
        });
    }
    _glsLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "View GL Accounts",
            selected: this.selectedItem,
            type: "Expense"
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_gls_lookup_gls_lookup_component__WEBPACK_IMPORTED_MODULE_0__.GlsLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            result.data.forEach(element => {
                this.mngForm.patchValue({
                    accountName: element.accountID,
                    accountNumber: element.description,
                });
            });
        });
    }
    // <!-- accountName
    // accountNumber -->
    //******************************************************************************************************************************************************** */
    cancel() {
        this.router.navigate(["/erp-inventory/inventory-parameters/all-itemcat"]);
    }
    //******************************************************************************************************************************************************** */
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        if (this.pageFunction === "Add") {
            this.ItemCatService
                .addItemCategories(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "Item Category Added Successfully");
                        this.router.navigate(["/erp-inventory/inventory-parameters/all-itemcat"]);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err);
                },
                complete: () => { },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.ItemCatService
                .updateItemCategories(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "Item Category Updated Successfully");
                        this.router.navigate(["/erp-inventory/inventory-parameters/all-itemcat"]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription;
        }
    }
    importExcel() {
        this.fileInput.nativeElement.click();
    }
    handleFileInput(files) {
        const file = files.item(0);
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_14__.read(arrayBuffer, { type: "array" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = xlsx__WEBPACK_IMPORTED_MODULE_14__.utils.sheet_to_json(worksheet, { raw: true });
                this.items = jsonData;
                console.log("this.items:::", this.items);
                //Initialize the form
                this.itemsForm = this.fb.group({
                    items: this.fb.array([]), //array of items
                });
            };
            fileReader.readAsArrayBuffer(file);
        }
    }
    //compare the excel headers
    compareExcelHeaders() {
        if (this.headerRows.length != this.excelHeaderRef.length) {
            this.notificationAPI.alertWarning("PLEASE CONFIRM ALL FIELDS ARE PRESENT INCHECK THE UPLOADED EXCEL FILE!");
        }
        else if (this.headerRows.length == this.excelHeaderRef.length) {
            if (JSON.stringify(this.headerRows) === JSON.stringify(this.excelHeaderRef)) {
                this.excelFileAccepted = true;
                this.notificationAPI.alertSuccess("THE EXCEL FILE IS VALID!");
            }
            else if (JSON.stringify(this.headerRows) !== JSON.stringify(this.excelHeaderRef)) {
                this.excelFileAccepted = false;
                this.notificationAPI.alertWarning("PLEASE CHECK THE UPLOADED EXCEL FILE, AND TRY AGAIN!");
            }
        }
    }
    //filter through the table
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSourceItems.filter = filterValue.trim().toLowerCase();
        if (this.dataSourceItems.paginator) {
            this.dataSourceItems.paginator.firstPage();
        }
    }
    //populate table from excel
    createPopulatedForm() {
        this.mngForm = this.fb.group({
            categoryName: [this.exceldata, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            expenseType: [this.exceldata, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            productType: [this.exceldata, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            categoryDescription: [this.exceldata, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            // accountNumber: [this.exceldata, [Validators.required]],
            // accountName: [this.exceldata, [Validators.required]],
        });
    }
    //Submitting the batch upload
    submitBatch() {
        let excelUpload = this.items;
        if (this.pageFunction === "Add") {
            this.ItemCatService
                .uploadBatchItemCats(excelUpload)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "Item Categories Added Successfully");
                        this.router.navigate(["/erp-inventory/inventory-parameters/all-itemcat"]);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err);
                },
                complete: () => { },
            });
        }
    }
}
ManageCategoriesComponent.ɵfac = function ManageCategoriesComponent_Factory(t) { return new (t || ManageCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_2__.ItemCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog)); };
ManageCategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ManageCategoriesComponent, selectors: [["app-manage-categories"]], viewQuery: function ManageCategoriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginatorItems = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sortItems = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 82, vars: 19, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "card"], ["animationDuration", "1000ms"], ["tabGroup", ""], ["label", "ADD ITEM CATEGORIES"], [1, "row", "clearfix", "mx-2"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "body"], [1, "m-4", 3, "formGroup"], [1, "row", "mx-2"], [1, "col-xl-3", "col-lg-3", "col-md-12", "col-sm-12", "mb-3"], ["appearance", "outline", 1, "example-full-width", "mb-0"], [1, ""], ["matInput", "", "formControlName", "categoryName"], [4, "ngIf"], ["formControlName", "expenseType"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "productType"], ["matInput", "", "formControlName", "categoryDescription"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["mat-dialog-action", "", 3, "align"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "hidden", "click"], ["label", "UPLOAD MULTIPLE ITEM CATEGORIES"], [3, "hidden"], [1, "mt-4", "m-3"], [1, "mx-3"], [3, "change"], [1, "mt-4", "mx-3"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "row", "mx-3"], ["mat-raised-button", "", "color", "primary", 3, "hidden", "click"], [3, "value"], [1, "col-md-4", "col-sm-12"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search...", 3, "keyup"], ["input", ""], ["matSuffix", "", "mat-button", ""], ["color", "primary"], [1, "table-row"], ["mat-table", "", "matSort", "", "matTableExporter", "", 1, "y-scrollable-table", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "accountName"], ["matColumnDef", "accountNumber"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function ManageCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "mat-tab-group", 5, 6)(7, "mat-tab", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "form", 11)(12, "div", 12)(13, "div", 13)(14, "mat-form-field", 14)(15, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ManageCategoriesComponent_mat_error_18_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 13)(20, "mat-form-field", 14)(21, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Expense Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ManageCategoriesComponent_mat_option_24_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, ManageCategoriesComponent_mat_error_25_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 13)(27, "mat-form-field", 14)(28, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Product Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, ManageCategoriesComponent_mat_option_31_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ManageCategoriesComponent_mat_error_32_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 13)(34, "mat-form-field", 14)(35, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, ManageCategoriesComponent_mat_error_38_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 22)(40, "div", 23)(41, "div", 24)(42, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageCategoriesComponent_Template_button_click_42_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageCategoriesComponent_Template_button_click_44_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-tab", 27)(47, "div", 28)(48, "div", 8)(49, "div", 29)(50, "div", 8)(51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Upload Excel File");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 30)(54, "app-file-upload", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ManageCategoriesComponent_Template_app_file_upload_change_54_listener($event) { return ctx.handleFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 32)(56, "table", 33)(57, "thead")(58, "tr")(59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Category Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Expense Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Product Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Category Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Account Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, ManageCategoriesComponent_tr_72_Template, 13, 6, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, ManageCategoriesComponent_div_73_Template, 28, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 35)(76, "div", 23)(77, "div", 24)(78, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageCategoriesComponent_Template_button_click_78_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageCategoriesComponent_Template_button_click_80_listener() { return ctx.submitBatch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, " Submit Batch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Manage Item Category")("items", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](18, _c2))("active_item", "Manage Item Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mngForm.get("categoryName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.expensetypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mngForm.get("expenseType").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.productTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mngForm.get("productType").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mngForm.get("categoryDescription").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("align", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.mngForm.valid)("hidden", ctx.hideSubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.hideSubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.excelDataPresent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("align", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.hideSubmit);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_6__.FileUploadComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, mat_table_exporter__WEBPACK_IMPORTED_MODULE_26__.MatTableExporterDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.UpperCasePipe], styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  margin: 2cap;\n}\n\n.section[_ngcontent-%COMP%] {\n  background: #afb0ae;\n}\n\n.bg-kingdom[_ngcontent-%COMP%] {\n  background: linear-gradient(to left, #004400, #002200);\n}\n\n.bg-card[_ngcontent-%COMP%] {\n  background: #b1c9aa;\n  border-bottom-style: outset;\n  border-right-style: outset;\n  box-shadow: 0px 2px 4px -1px rgba(4, 52, 21, 0.18), 0px 4px 5px 0px rgba(4, 52, 21, 0.126), 0px 1px 10px 0px rgba(4, 52, 21, 0.108);\n}\n\n.curve-card[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 15px;\n  border-bottom-style: outset;\n  border-right-style: outset;\n  box-shadow: 0px 2px 4px -1px rgba(4, 52, 21, 0.18), 0px 4px 5px 0px rgba(4, 52, 21, 0.126), 0px 1px 10px 0px rgba(4, 52, 21, 0.108);\n}\n\n.font[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: medium;\n}\n\n.card-color[_ngcontent-%COMP%] {\n  background-color: #e8e8e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvX2VsZXZhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBSUU7RUFDRSxtQkFBQTtBQURKOztBQUlFO0VBQ0Usc0RBQUE7QUFESjs7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQzBJRixtSUFBQTtBRDNJRjs7QUFNRTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQ2tJRixtSUFBQTtBRHBJRjs7QUFNRTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1FO0VBQ0UseUJBQUE7QUFISiIsImZpbGUiOiJtYW5hZ2UtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgeyBcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIG1hcmdpbjoyY2FwO1xuICB9XG5cblxuXG4gIC5zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjYWZiMGFlO1xuICB9O1xuICBcbiAgLmJnLWtpbmdkb20ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMDA0NDAwLCAjMDAyMjAwKTtcbiAgfVxuICBcbiAgIEBpbXBvcnQgJ35AYW5ndWxhci9tYXRlcmlhbC90aGVtaW5nJztcbiAgLmJnLWNhcmR7XG4gICAgYmFja2dyb3VuZDogKCNiMWM5YWEpO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG91dHNldDtcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG91dHNldDtcbiAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKDQsICMwNDM0MTUsIDAuOSk7XG4gICAgXG4gIH07XG4gIFxuICAuY3VydmUtY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweDtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBvdXRzZXQ7XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBvdXRzZXQ7XG4gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbig0LCAjMDQzNDE1LCAwLjkpO1xuICB9XG4gIFxuICAuZm9udHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9O1xuICBcbiAgLmNhcmQtY29sb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlNTtcbiAgfVxuICAiLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1hdGgnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJ3ZhcmlhYmxlcyc7XG5cblxuLy8gQSBjb2xsZWN0aW9uIG9mIG1peGlucyBhbmQgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBlbGV2YXRpb24gdG8gYSBtYXRlcmlhbFxuLy8gZWxlbWVudC5cbi8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vZW52aXJvbm1lbnQvZWxldmF0aW9uLmh0bWxcbi8vIEV4YW1wbGVzOlxuLy9cbi8vXG4vLyAubWF0LWZvbyB7XG4vLyAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDIpO1xuLy9cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDgpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gPGRpdiBpZD1cImV4dGVybmFsLWNhcmRcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejJcIj48cD5Tb21lIGNvbnRlbnQ8L3A+PC9kaXY+XG4vL1xuLy8gRm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoZSBkZXNpZ24gYmVoaW5kIGhvdyBlbGV2YXRpb24gaXMgaW1wbGVtZW50ZWQsIHNlZSB0aGUgZGVzaWduIGRvYyBhdFxuLy8gaHR0cHM6Ly9nb28uZ2wvS3EwazlaLlxuXG4vLyBDb2xvcnMgZm9yIHVtYnJhLCBwZW51bWJyYSwgYW5kIGFtYmllbnQgc2hhZG93cy4gQXMgZGVzY3JpYmVkIGluIHRoZSBkZXNpZ24gZG9jLCBlYWNoIGVsZXZhdGlvblxuLy8gbGV2ZWwgaXMgY3JlYXRlZCB1c2luZyBhIHNldCBvZiAzIHNoYWRvdyB2YWx1ZXMsIG9uZSBmb3IgdW1icmEgKHRoZSBzaGFkb3cgcmVwcmVzZW50aW5nIHRoZVxuLy8gc3BhY2UgY29tcGxldGVseSBvYnNjdXJlZCBieSBhbiBvYmplY3QgcmVsYXRpdmUgdG8gaXRzIGxpZ2h0IHNvdXJjZSksIG9uZSBmb3IgcGVudW1icmEgKHRoZVxuLy8gc3BhY2UgcGFydGlhbGx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCksIGFuZCBvbmUgZm9yIGFtYmllbnQgKHRoZSBzcGFjZSB3aGljaCBjb250YWlucyB0aGUgb2JqZWN0XG4vLyBpdHNlbGYpLiBGb3IgYSBmdXJ0aGVyIGV4cGxhbmF0aW9uIG9mIHRoZXNlIHRlcm1zIGFuZCB0aGVpciBtZWFuaW5ncywgc2VlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbWJyYSxfcGVudW1icmFfYW5kX2FudHVtYnJhLlxuXG4vLyBNYXBzIGZvciB0aGUgZGlmZmVyZW50IHNoYWRvdyBzZXRzIGFuZCB0aGVpciB2YWx1ZXMgd2l0aGluIGVhY2ggei1zcGFjZS4gVGhlc2UgdmFsdWVzIHdlcmVcbi8vIGNyZWF0ZWQgYnkgdGFraW5nIGEgZmV3IHJlZmVyZW5jZSBzaGFkb3cgc2V0cyBjcmVhdGVkIGJ5IEdvb2dsZSdzIERlc2lnbmVycyBhbmQgaW50ZXJwb2xhdGluZ1xuLy8gYWxsIG9mIHRoZSB2YWx1ZXMgYmV0d2VlbiB0aGVtLlxuXG5AZnVuY3Rpb24gX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZihtZXRhLnR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggMXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDJweCAycHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCA0cHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDVweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggNnB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggN3B4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggOHB4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggOXB4IDEycHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDEwcHggMTRweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggMTFweCAxNXB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCAxMnB4IDE3cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDEzcHggMTlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggMTRweCAyMXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCAxNXB4IDIycHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDE2cHggMjRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggMTdweCAyNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCAxOHB4IDI4cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDE5cHggMjlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMjBweCAzMXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAyMXB4IDMzcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDIycHggMzVweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMjNweCAzNnB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAyNHB4IDM4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggM3B4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDFweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggMXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAxcHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAxcHggMTRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAxcHggMThweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCAycHggMTZweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCAzcHggMTRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCAzcHggMTZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNHB4IDE4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDRweCAyMHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA1cHggMjJweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggNXB4IDI0cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDVweCAyNnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA2cHggMjhweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggNnB4IDMwcHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDZweCAzMnB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA3cHggMzRweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggN3B4IDM2cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDhweCAzOHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCA4cHggNDBweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggOHB4IDQycHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDlweCA0NHB4IDhweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCA5cHggNDZweCA4cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZHVyYXRpb24gdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiR0cmFuc2l0aW9uLWR1cmF0aW9uOiAyODBtcyAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgZWFzaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcmlhYmxlcy4kZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRjb2xvcjogYmxhY2sgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IG9wYWNpdHkgc2NhbGluZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kb3BhY2l0eTogMSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciBlbGV2YXRpb24tcmVsYXRlZCBzZWxlY3RvcnMuXG4kcHJlZml4OiAnbWF0LWVsZXZhdGlvbi16JztcblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgdG8gYW4gZWxlbWVudCB0byBnaXZlIGl0IHRoZSBlbGV2YXRpb24gc3BlY2lmaWVkIGJ5ICR6VmFsdWUuXG4vLyBUaGUgJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQuXG5AbWl4aW4gZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvcjogJGNvbG9yLCAkb3BhY2l0eTogJG9wYWNpdHkpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkelZhbHVlKSAhPSBudW1iZXIgb3Igbm90IG1hdGguaXMtdW5pdGxlc3MoJHpWYWx1ZSkge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGEgdW5pdGxlc3MgbnVtYmVyJztcbiAgfVxuICBAaWYgJHpWYWx1ZSA8IDAgb3IgJHpWYWx1ZSA+IDI0IHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0JztcbiAgfVxuXG4gIGJveC1zaGFkb3c6ICN7bWFwLmdldChfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC5nZXQoX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAuZ2V0KF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgZWxldmF0aW9uIHRvIGFuIGVsZW1lbnQgaW4gYSBtYW5uZXIgdGhhdCBhbGxvd3Ncbi8vIGNvbnN1bWVycyB0byBvdmVycmlkZSBpdCB2aWEgdGhlIE1hdGVyaWFsIGVsZXZhdGlvbiBjbGFzc2VzLlxuQG1peGluIG92ZXJyaWRhYmxlLWVsZXZhdGlvbihcbiAgICAkelZhbHVlLFxuICAgICRjb2xvcjogJGNvbG9yLFxuICAgICRvcGFjaXR5OiAkb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRwcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBlbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBwcml2YXRlLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgQHJldHVybiBib3gtc2hhZG93ICN7JGR1cmF0aW9ufSAjeyRlYXNpbmd9O1xufVxuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyBuZWVkZWQgdG8gaGF2ZSBhbiBlbGVtZW50IHRyYW5zaXRpb24gYmV0d2VlbiBlbGV2YXRpb25zLlxuLy8gVGhpcyBtaXhpbiBzaG91bGQgYmUgYXBwbGllZCB0byBlbGVtZW50cyB3aG9zZSBlbGV2YXRpb24gdmFsdWVzIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGVpclxuLy8gY29udGV4dCAoZS5nLiB3aGVuIGFjdGl2ZSBvciBkaXNhYmxlZCkuXG4vL1xuLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogQm90aCB0aGlzIG1peGluIGFuZCB0aGUgYWJvdmUgZnVuY3Rpb24gdXNlIGRlZmF1bHQgcGFyYW1ldGVycyBzbyB0aGV5IGNhblxuLy8gYmUgdXNlZCBpbiB0aGUgc2FtZSB3YXkgYnkgY2xpZW50cy5cbkBtaXhpbiBlbGV2YXRpb24tdHJhbnNpdGlvbihcbiAgICAkZHVyYXRpb246ICR0cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBwcml2YXRlLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 16839:
/*!***************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/inventory-parameters-routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryParametersRoutingModule": () => (/* binding */ InventoryParametersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _catalogue_all_catalogue_all_catalogue_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogue/all-catalogue/all-catalogue.component */ 64833);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _catalogue_manage_catalogue_manage_catalogue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogue/manage-catalogue/manage-catalogue.component */ 9738);
/* harmony import */ var _categories_all_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/all-categories/all-categories.component */ 61298);
/* harmony import */ var _categories_manage_categories_manage_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/manage-categories/manage-categories.component */ 37381);
/* harmony import */ var _mainStore_all_store_management_all_store_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainStore/all-store-management/all-store-management.component */ 36231);
/* harmony import */ var _mainStore_manage_main_store_manage_main_store_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainStore/manage-main-store/manage-main-store.component */ 75416);
/* harmony import */ var _branchstores_all_branchstores_all_branchstores_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./branchstores/all-branchstores/all-branchstores.component */ 4797);
/* harmony import */ var _branchstores_manage_branchstores_manage_branchstores_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./branchstores/manage-branchstores/manage-branchstores.component */ 79474);
/* harmony import */ var _unitsOfMeasure_all_units_all_units_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./unitsOfMeasure/all-units/all-units.component */ 37857);
/* harmony import */ var _unitsOfMeasure_manage_units_manage_units_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./unitsOfMeasure/manage-units/manage-units.component */ 69874);
/* harmony import */ var _branchstoreROLS_all_branchstore_rols_all_branchstore_rols_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./branchstoreROLS/all-branchstore-rols/all-branchstore-rols.component */ 61055);
/* harmony import */ var _branchstoreROLS_manage_branchstore_rols_manage_branchstore_rols_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./branchstoreROLS/manage-branchstore-rols/manage-branchstore-rols.component */ 48029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
















const routes = [
    {
        path: "all-catalogue",
        component: _catalogue_all_catalogue_all_catalogue_component__WEBPACK_IMPORTED_MODULE_0__.AllCatalogueComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["All Catalogue"] },
    },
    {
        path: "manage-catalogue",
        component: _catalogue_manage_catalogue_manage_catalogue_component__WEBPACK_IMPORTED_MODULE_2__.ManageCatalogueComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["Manage Catalogue"] },
    },
    {
        path: "all-itemcat",
        component: _categories_all_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_3__.AllCategoriesComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["All Item Categories"] },
    },
    {
        path: "manage-itemcat",
        component: _categories_manage_categories_manage_categories_component__WEBPACK_IMPORTED_MODULE_4__.ManageCategoriesComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["Manage Item Categories"] },
    },
    {
        path: "all-mainstores",
        component: _mainStore_all_store_management_all_store_management_component__WEBPACK_IMPORTED_MODULE_5__.AllStoreManagementComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["All Main Stores"] },
    },
    {
        path: "manage-mainstores",
        component: _mainStore_manage_main_store_manage_main_store_component__WEBPACK_IMPORTED_MODULE_6__.ManageMainStoreComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["Manage Main Stores"] },
    },
    {
        path: "all-branchstores",
        component: _branchstores_all_branchstores_all_branchstores_component__WEBPACK_IMPORTED_MODULE_7__.AllBranchstoresComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["All Branch Stores"] },
    },
    {
        path: "manage-branchstores",
        component: _branchstores_manage_branchstores_manage_branchstores_component__WEBPACK_IMPORTED_MODULE_8__.ManageBranchstoresComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["Manage Branch Stores"] },
    },
    //units of measure
    {
        path: "all-UnitOfMeasure",
        component: _unitsOfMeasure_all_units_all_units_component__WEBPACK_IMPORTED_MODULE_9__.AllUnitsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["All Units"] },
    },
    {
        path: "manage-UnitOfMeasure",
        component: _unitsOfMeasure_manage_units_manage_units_component__WEBPACK_IMPORTED_MODULE_10__.ManageUnitsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["Manage Units"] },
    },
    //branchReorder Levels (ROLS)
    {
        path: "all-rols",
        component: _branchstoreROLS_all_branchstore_rols_all_branchstore_rols_component__WEBPACK_IMPORTED_MODULE_11__.AllBranchstoreROLSComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["All Branch ROLS"] }
    },
    {
        path: "manage-rols",
        component: _branchstoreROLS_manage_branchstore_rols_manage_branchstore_rols_component__WEBPACK_IMPORTED_MODULE_12__.ManageBranchstoreROLSComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["Manage Branch ROLS"] }
    }
];
class InventoryParametersRoutingModule {
}
InventoryParametersRoutingModule.ɵfac = function InventoryParametersRoutingModule_Factory(t) { return new (t || InventoryParametersRoutingModule)(); };
InventoryParametersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: InventoryParametersRoutingModule });
InventoryParametersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](InventoryParametersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 88017:
/*!*******************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/inventory-parameters.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryParametersModule": () => (/* binding */ InventoryParametersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _inventory_parameters_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory-parameters-routing.module */ 16839);
/* harmony import */ var _catalogue_all_catalogue_all_catalogue_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogue/all-catalogue/all-catalogue.component */ 64833);
/* harmony import */ var _catalogue_manage_catalogue_manage_catalogue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogue/manage-catalogue/manage-catalogue.component */ 9738);
/* harmony import */ var _categories_all_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/all-categories/all-categories.component */ 61298);
/* harmony import */ var _categories_manage_categories_manage_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/manage-categories/manage-categories.component */ 37381);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 38107);
/* harmony import */ var _erp_inventory_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../erp-inventory.module */ 89015);
/* harmony import */ var _inventory_management_pages_Inventory_management_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../inventory-management/pages/Inventory-management.module */ 23505);
/* harmony import */ var _mainStore_all_store_management_all_store_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainStore/all-store-management/all-store-management.component */ 36231);
/* harmony import */ var _mainStore_manage_main_store_manage_main_store_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mainStore/manage-main-store/manage-main-store.component */ 75416);
/* harmony import */ var _branchstores_all_branchstores_all_branchstores_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./branchstores/all-branchstores/all-branchstores.component */ 4797);
/* harmony import */ var _branchstores_manage_branchstores_manage_branchstores_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./branchstores/manage-branchstores/manage-branchstores.component */ 79474);
/* harmony import */ var _unitsOfMeasure_all_units_all_units_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./unitsOfMeasure/all-units/all-units.component */ 37857);
/* harmony import */ var _unitsOfMeasure_manage_units_manage_units_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./unitsOfMeasure/manage-units/manage-units.component */ 69874);
/* harmony import */ var _branchstoreROLS_all_branchstore_rols_all_branchstore_rols_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./branchstoreROLS/all-branchstore-rols/all-branchstore-rols.component */ 61055);
/* harmony import */ var _branchstoreROLS_manage_branchstore_rols_manage_branchstore_rols_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./branchstoreROLS/manage-branchstore-rols/manage-branchstore-rols.component */ 48029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);













































class InventoryParametersModule {
}
InventoryParametersModule.ɵfac = function InventoryParametersModule_Factory(t) { return new (t || InventoryParametersModule)(); };
InventoryParametersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: InventoryParametersModule });
InventoryParametersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _inventory_parameters_routing_module__WEBPACK_IMPORTED_MODULE_0__.InventoryParametersRoutingModule,
            _erp_inventory_module__WEBPACK_IMPORTED_MODULE_8__.ErpInventoryModule,
            _inventory_management_pages_Inventory_management_module__WEBPACK_IMPORTED_MODULE_9__.InventoryManagementModule,
            //Additional imports
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__.DashboardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_21__.NgApexchartsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__.PerfectScrollbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltipModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__.MatProgressBarModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_26__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__.MatCheckboxModule,
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_33__.MatTableExporterModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__.MatProgressSpinnerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_36__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__.MatDialogModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__.MatDatepickerModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_39__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_40__.ReactiveFormsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__.MatSnackBarModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__.MatToolbarModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__.MatStepperModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_44__.NgxMaskModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](InventoryParametersModule, { declarations: [_mainStore_all_store_management_all_store_management_component__WEBPACK_IMPORTED_MODULE_10__.AllStoreManagementComponent,
        _mainStore_manage_main_store_manage_main_store_component__WEBPACK_IMPORTED_MODULE_11__.ManageMainStoreComponent,
        _branchstores_all_branchstores_all_branchstores_component__WEBPACK_IMPORTED_MODULE_12__.AllBranchstoresComponent,
        _branchstores_manage_branchstores_manage_branchstores_component__WEBPACK_IMPORTED_MODULE_13__.ManageBranchstoresComponent,
        _catalogue_all_catalogue_all_catalogue_component__WEBPACK_IMPORTED_MODULE_1__.AllCatalogueComponent,
        _catalogue_manage_catalogue_manage_catalogue_component__WEBPACK_IMPORTED_MODULE_2__.ManageCatalogueComponent,
        _categories_all_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_3__.AllCategoriesComponent,
        _categories_manage_categories_manage_categories_component__WEBPACK_IMPORTED_MODULE_4__.ManageCategoriesComponent,
        _unitsOfMeasure_all_units_all_units_component__WEBPACK_IMPORTED_MODULE_14__.AllUnitsComponent,
        _unitsOfMeasure_manage_units_manage_units_component__WEBPACK_IMPORTED_MODULE_15__.ManageUnitsComponent,
        _branchstoreROLS_all_branchstore_rols_all_branchstore_rols_component__WEBPACK_IMPORTED_MODULE_16__.AllBranchstoreROLSComponent,
        _branchstoreROLS_manage_branchstore_rols_manage_branchstore_rols_component__WEBPACK_IMPORTED_MODULE_17__.ManageBranchstoreROLSComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
        _inventory_parameters_routing_module__WEBPACK_IMPORTED_MODULE_0__.InventoryParametersRoutingModule,
        _erp_inventory_module__WEBPACK_IMPORTED_MODULE_8__.ErpInventoryModule,
        _inventory_management_pages_Inventory_management_module__WEBPACK_IMPORTED_MODULE_9__.InventoryManagementModule,
        //Additional imports
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__.DashboardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_21__.NgApexchartsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__.PerfectScrollbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltipModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__.MatProgressBarModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__.MatCheckboxModule,
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_33__.MatTableExporterModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_36__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__.MatDialogModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__.MatDatepickerModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_39__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_40__.ReactiveFormsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__.MatToolbarModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__.MatStepperModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_44__.NgxMaskModule] }); })();


/***/ }),

/***/ 36231:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/mainStore/all-store-management/all-store-management.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllStoreManagementComponent": () => (/* binding */ AllStoreManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_inventory_data_services_mainstore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/services/mainstore.service */ 14280);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 48632);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
























function AllStoreManagementComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllStoreManagementComponent_td_54_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_td_54_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const mainstore_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r20.onSelect(mainstore_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mainstore_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", mainstore_r19.storeId, "");
} }
function AllStoreManagementComponent_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllStoreManagementComponent_td_57_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_td_57_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const mainstore_r22 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.onSelect(mainstore_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mainstore_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", mainstore_r22.storeLocation, " ");
} }
function AllStoreManagementComponent_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllStoreManagementComponent_td_60_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_td_60_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const mainstore_r25 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.onSelect(mainstore_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mainstore_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", mainstore_r25.storeName, " ");
} }
function AllStoreManagementComponent_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllStoreManagementComponent_td_63_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_td_63_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const mainstore_r28 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.onSelect(mainstore_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mainstore_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", mainstore_r28.phone, " ");
} }
function AllStoreManagementComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " E-Mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllStoreManagementComponent_td_66_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_td_66_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const mainstore_r31 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r32.onSelect(mainstore_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mainstore_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", mainstore_r31.email, " ");
} }
function AllStoreManagementComponent_th_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllStoreManagementComponent_td_69_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 55)(1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_td_69_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllStoreManagementComponent_td_69_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38); const mainstore_r34 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r37.editMainStore(mainstore_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-feather-icons", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_td_69_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllStoreManagementComponent_td_69_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38); const mainstore_r34 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r40.viewMainStore(mainstore_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-feather-icons", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_td_69_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllStoreManagementComponent_td_69_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38); const mainstore_r34 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r42.deleteMainStore(mainstore_r34.storeId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-feather-icons", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "trash-2");
} }
function AllStoreManagementComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 59);
} }
function AllStoreManagementComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_tr_71_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const mainstore_r43 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r44.viewMainStore(mainstore_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllStoreManagementComponent_td_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r17.input.value, "\"");
} }
function AllStoreManagementComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Main Stores"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class AllStoreManagementComponent {
    constructor(router, snackbar, MainStoreService) {
        this.router = router;
        this.snackbar = snackbar;
        this.MainStoreService = MainStoreService;
        this.displayedColumns = [
            'storeId',
            'storeLocation',
            'storeName',
            'phone',
            'email',
            'action'
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
        this.isLoading = true;
        this.pageFunction = "Update";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.downloadLoading = false;
    }
    ngOnInit() {
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
        this.MainStoreService.getMainStore().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    // this.data = res.entity;
                    this.data = res.entity;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(this.data);
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
            complete: () => {
            }
        }), rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
    }
    addStockCall() {
        this.router.navigate(["/erp-inventory/inventory-parameters/manage-mainstores"]);
    }
    refresh() {
        this.getData();
    }
    editMainStore(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        console.log("mm", data);
        let route = '/erp-inventory/inventory-parameters/manage-mainstores';
        this.router.navigate([route], { queryParams: { storeId: data.storeId, additionalData: serializedData, action: 'Update' } });
    }
    viewMainStore(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        let route = '/erp-inventory/inventory-parameters/manage-mainstores';
        this.router.navigate([route], { queryParams: { storeId: data.storeId, additionalData: serializedData, action: 'View' } });
    }
    deleteMainStore(storeId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you Sure?",
            text: "This main store will be deleted!!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete this main store ",
        }).then((result) => {
            if (result.isConfirmed) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams()
                    .set("storeId", storeId);
                this.MainStoreService.deleteMainStorePemanently(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
                    next: (res) => {
                        this.snackbar.showNotification("snackbar-success", "Main Store Deleted Successfully");
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getData();
                    }
                }), rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
            }
        });
    }
}
AllStoreManagementComponent.ɵfac = function AllStoreManagementComponent_Factory(t) { return new (t || AllStoreManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_mainstore_service__WEBPACK_IMPORTED_MODULE_2__.MainstoreService)); };
AllStoreManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AllStoreManagementComponent, selectors: [["app-all-store-management"]], viewQuery: function AllStoreManagementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 75, vars: 11, consts: [[1, "content"], [1, "content-block"], [1, "block-header", "body"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card", "bg-card", "mat-elevation-z0"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader", "bg-table-header", "font"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "table-style", "mat-elevation-z0"], ["mat-table", "", "matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "storeId"], ["mat-header-cell", "", "mat-sort-header", "", "class", "start-col mat-elevation-z0 ", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "storeLocation"], ["mat-header-cell", "", "mat-sort-header", "", "class", "mid-col mat-elevation-z0", 4, "matHeaderCellDef"], ["matColumnDef", "storeName"], ["matColumnDef", "phone"], ["matColumnDef", "email"], ["matColumnDef", "action"], ["mat-header-cell", "", "class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", "class", "end-col mat-elevation-z0", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-cell", "", "colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "start-col", "mat-elevation-z0"], ["mat-cell", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "mid-col", "mat-elevation-z0"], ["mat-header-cell", "", 1, "end-col", "mat-elevation-z0"], ["mat-cell", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["mat-header-row", ""], ["mat-row", "", "matRipple", "", 3, "click"], ["mat-cell", "", "colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllStoreManagementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "section", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 4)(13, "div", 10)(14, "ul", 11)(15, "li", 12)(16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Main Stores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "li", 13)(19, "label", 14)(20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function AllStoreManagementComponent_Template_input_keyup_22_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "li")(25, "div", 18)(26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_Template_button_click_26_listener() { return ctx.addStockCall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "li")(30, "div", 21)(31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_Template_button_click_31_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 22)(35, "ul", 23)(36, "li")(37, "div", 24)(38, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_Template_img_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51); return _r2.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "li")(40, "div", 26)(41, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_Template_img_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51); return _r2.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "li")(43, "div", 28)(44, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_Template_img_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51); return _r2.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "li")(46, "div", 30)(47, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllStoreManagementComponent_Template_img_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51); return _r2.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 32)(49, "table", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](52, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, AllStoreManagementComponent_th_53_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, AllStoreManagementComponent_td_54_Template, 2, 1, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](55, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, AllStoreManagementComponent_th_56_Template, 2, 0, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, AllStoreManagementComponent_td_57_Template, 2, 1, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](58, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, AllStoreManagementComponent_th_59_Template, 2, 0, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, AllStoreManagementComponent_td_60_Template, 2, 1, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](61, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, AllStoreManagementComponent_th_62_Template, 2, 0, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, AllStoreManagementComponent_td_63_Template, 2, 1, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](64, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, AllStoreManagementComponent_th_65_Template, 2, 0, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, AllStoreManagementComponent_td_66_Template, 2, 1, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](67, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, AllStoreManagementComponent_th_68_Template, 2, 0, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, AllStoreManagementComponent_td_69_Template, 7, 9, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, AllStoreManagementComponent_tr_70_Template, 1, 0, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, AllStoreManagementComponent_tr_71_Template, 1, 2, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, AllStoreManagementComponent_td_72_Template, 2, 1, "td", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, AllStoreManagementComponent_div_73_Template, 2, 1, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "mat-paginator", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "All Main Stores")("items", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0))("active_item", "All Main Stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_19__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 800px) {\n  .responsive_table[_ngcontent-%COMP%] {\n    overflow-x: auto !important;\n  }\n\n  .mat-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n}\n\n.mat-row[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.mat-header-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\n  text-align: left !important;\n  padding: 0px 8px 0px 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1zdG9yZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGRTtFQUNJLFdBQUE7QUF4Rk47O0FBNkZFO0VBQ0k7SUFDSSwyQkFBQTtFQTFGUjs7RUE2Rkk7SUFDSSxnQkFBQTtFQTFGUjtBQUNGOztBQTZGRTtFQUNJLFlBQUE7QUEzRk47O0FBOEZFOztFQUVJLDJCQUFBO0VBQ0EsbUNBQUE7QUEzRk4iLCJmaWxlIjoiYWxsLXN0b3JlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgLy8gdmFyaWFibGVzXG4vLyAgJHRvcGhlYWQ6ICM1MTk1MDMzNDtcbi8vICAkdG9waGVhZDI6ICMwMDQ0MDA7XG4gXG4vLyAgLy9hbGwgYm9keVxuLy8gIC5ib2R5IHsgXG4vLyAgICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4vLyAgICAgIG1hcmdpbjoyY2FwO1xuLy8gICAgfVxuIFxuLy8gICAgLm1hdC1jb2x1bW4ge1xuLy8gICAgICBmbGV4OiA1cHg7XG4vLyAgICB9XG4gXG4vLyAgICBoMntcbi8vICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcbi8vICAgIH1cbiBcbiBcbiBcbi8vICAgIC8vdGFibGUgc3R5bGluZ1xuLy8gICAgLnRhYmxlLXN0eWxle1xuLy8gICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweFxuLy8gICAgfVxuIFxuLy8gIC5zZWN0aW9uIHtcbi8vICAgICAgYmFja2dyb3VuZDogI2FmYjBhZTtcbi8vICAgIH07XG4gICBcbi8vICAgIC5iZy1raW5nZG9tIHtcbi8vICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMDQ0MDAsICMwMDIyMDApO1xuLy8gICAgfVxuLy8gICAgLmJnLWNhcmR7XG4vLyAgICAgIGJhY2tncm91bmQ6ICgjYjFjOWFhKTtcbi8vICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHhcbi8vICAgIH07XG4gXG4vLyAgICAuYmctdGFibGUtaGVhZGVye1xuLy8gICAgICBiYWNrZ3JvdW5kOiAkdG9waGVhZDI7XG4vLyAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4XG4vLyAgICB9O1xuICAgXG4vLyAgICAuZm9udHtcbi8vICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbi8vICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4vLyAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuLy8gICAgfTtcbiBcbi8vICAgIC5mb250LXRhYmxle1xuLy8gICAgICBmb250LXdlaWdodDogNDAwO1xuLy8gICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbi8vICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4vLyAgfVxuIFxuLy8gIC5tYXQtY2VsbCB7XG4vLyAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4vLyAgfVxuICAgXG4vLyAgLm1pZC1jb2x7XG4vLyAgICAgIGJhY2tncm91bmQtY29sb3I6JHRvcGhlYWQ7XG4vLyAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4O1xuLy8gIH1cbi8vICAuc3RhcnQtY29se1xuLy8gICAgICAvL3RvcCBsZWZ0IHJvdW5kZWQgY29ybmVyXG4vLyAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDBweDsgXG4vLyAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4OyBcbi8vICAgICAgYmFja2dyb3VuZC1jb2xvcjokdG9waGVhZDsgIFxuLy8gIH1cbi8vICAuZW5kLWNvbHtcbi8vICAgICAgLy8gdG9wIHJpZ2h0XG4vLyAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDBweCAwcHg7IFxuLy8gICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAwcHg7IFxuLy8gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR0b3BoZWFkOyBcbi8vICB9XG4gXG4vLyAgLy9lbGV2YXRpb24gXG4vLyAgQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xuIFxuLy8gIC5teS1jbGFzcy13aXRoLWRlZmF1bHQtc2hhZG93IHtcbi8vICAgIC8vIEFkZHMgYSBzaGFkb3cgZm9yIGVsZXZhdGlvbiBsZXZlbCAyIHdpdGggZGVmYXVsdCBjb2xvciBhbmQgZnVsbCBvcGFjaXR5OlxuLy8gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigyKTtcbi8vICB9XG4gXG4vLyAgLm15LWNsYXNzLXdpdGgtY3VzdG9tLXNoYWRvdyB7XG4vLyAgICAvLyBBZGRzIGEgc2hhZG93IGZvciBlbGV2YXRpb24gbGV2ZWwgMiB3aXRoIGNvbG9yICNlOTFlNjMgYW5kIDgwJSBvZiB0aGUgZGVmYXVsdCBvcGFjaXR5OlxuLy8gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigyLCAjZTkxZTYzLCAwLjgpO1xuLy8gIH1cblxuICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG5cbiAgLy9yZXNwb25zaXZlIHRhYmxlXG4gIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAucmVzcG9uc2l2ZV90YWJsZSB7XG4gICAgICAgICAgb3ZlcmZsb3cteDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAubWF0LXRhYmxlIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDgwMHB4O1xuICAgICAgfVxuICB9XG5cbiAgLm1hdC1yb3cge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCxcbiAgLm1hdC1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDBweCA4cHggMHB4IDhweCAhaW1wb3J0YW50O1xuICB9Il19 */"] });


/***/ }),

/***/ 75416:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/mainStore/manage-main-store/manage-main-store.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageMainStoreComponent": () => (/* binding */ ManageMainStoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_erp_inventory_data_services_mainstore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-inventory/data/services/mainstore.service */ 14280);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);













function ManageMainStoreComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "The store name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageMainStoreComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "The store location is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageMainStoreComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "The phone number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageMainStoreComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "The email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ManageMainStoreComponent_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageMainStoreComponent_button_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.GenReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Generate Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["Main Stores"]; };
class ManageMainStoreComponent {
    constructor(fb, router, activatedRoute, tokenStorageService, mainStoreService, snackbar, route) {
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.tokenStorageService = tokenStorageService;
        this.mainStoreService = mainStoreService;
        this.snackbar = snackbar;
        this.route = route;
        this.showForm = false;
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.hideGenReport = false;
        this.currentUser = this.tokenStorageService.getUser().username;
    }
    ngOnInit() {
        this.getPage();
        this.showForm = true;
        console.log("this.formData: ", this.formData);
        this.route.queryParams.subscribe((params) => {
            console.log("res", params);
            if (params.hasOwnProperty("storeId")) {
                const action = params["action"];
                if (action == "Update") {
                    this.pageFunction = "Update";
                }
                else if (action == "View") {
                    this.pageFunction = "View";
                }
                this.storeId = params["storeId"];
                const serializedData = params["additionalData"];
                const additionalData = JSON.parse(serializedData);
                this.formData = additionalData;
                console.log("ID:", this.storeId);
                console.log("Additional Data:", additionalData);
                this.getPage();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getPage() {
        console.log("RES", this.formData);
        if (this.pageFunction === "Add") {
            this.generateForm();
            this.hideGenReport = true;
        }
        else if (this.pageFunction === "Update") {
            this.generateFormWithData();
            this.hideGenReport = true;
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.hideSubmit = true;
            this.hideGenReport = false;
        }
    }
    generateForm() {
        this.mngForm = this.fb.group({
            // storeId: ["",],
            storeName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            storeLocation: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    generateFormWithData() {
        this.mngForm = this.fb.group({
            storeId: [this.formData.storeId],
            storeName: [this.formData.storeName, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            storeLocation: [this.formData.storeLocation, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            phone: [this.formData.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            email: [this.formData.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            storeId: [{ value: this.formData.storeId, disabled: true }],
            storeName: [{ value: this.formData.storeName, disabled: true }],
            storeLocation: [{ value: this.formData.storeLocation, disabled: true }],
            phone: [{ value: this.formData.phone, disabled: true }],
            email: [{ value: this.formData.email, disabled: true }],
        });
    }
    cancel() {
        this.router.navigate(["/erp-inventory/inventory-parameters/all-mainstores"]);
    }
    GenReport() {
        this.mainStoreService.genReport(this.mngForm.value.storeId).subscribe(result => {
            const blob = new Blob([result], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'report.pdf';
            link.click();
            window.URL.revokeObjectURL(url);
        });
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        if (this.pageFunction === "Add") {
            this.mainStoreService
                .addMainStore(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "Main Store Added Successfully");
                        this.router.navigate(["/erp-inventory/inventory-parameters/all-mainstores"]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.mainStoreService
                .updateMainStore(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "Main Store Updated Successfully");
                        this.router.navigate(["/erp-inventory/inventory-parameters/all-mainstores"]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription;
        }
    }
}
ManageMainStoreComponent.ɵfac = function ManageMainStoreComponent_Factory(t) { return new (t || ManageMainStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_mainstore_service__WEBPACK_IMPORTED_MODULE_1__.MainstoreService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute)); };
ManageMainStoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ManageMainStoreComponent, selectors: [["app-manage-main-store"]], decls: 48, vars: 14, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "row"], [1, "col-12"], [1, "body"], [1, "m-4", "font", 3, "formGroup"], [1, "col-xl-3", "col-lg-3", "col-md-12", "col-sm-12", "mb-3"], ["appearance", "outline", 1, "example-full-width", "mb-3"], [1, "font"], ["matInput", "", "formControlName", "storeName"], [4, "ngIf"], ["matInput", "", "formControlName", "storeLocation"], ["type", "number", "matInput", "", "formControlName", "phone"], ["matInput", "", "formControlName", "email"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["mat-dialog-action", "", 3, "align"], ["class", "btn-space", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "hidden", "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "click"]], template: function ManageMainStoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "form", 11)(15, "div", 8)(16, "div", 12)(17, "mat-form-field", 13)(18, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ManageMainStoreComponent_mat_error_21_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 12)(23, "mat-form-field", 13)(24, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ManageMainStoreComponent_mat_error_27_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 12)(29, "mat-form-field", 13)(30, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ManageMainStoreComponent_mat_error_33_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 12)(35, "mat-form-field", 13)(36, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " E-mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, ManageMainStoreComponent_mat_error_39_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 8)(41, "div", 20)(42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, ManageMainStoreComponent_button_43_Template, 2, 0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageMainStoreComponent_Template_button_click_44_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageMainStoreComponent_Template_button_click_46_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Manage Main Stores")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c0))("active_item", "Manage Main Stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Main Store ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("storeName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("storeLocation").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("phone").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("align", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.hideGenReport);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.mngForm.valid)("hidden", ctx.hideSubmit);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton], styles: [".section[_ngcontent-%COMP%] {\n  background: #afb0ae;\n}\n\n.bg-kingdom[_ngcontent-%COMP%] {\n  background: linear-gradient(to left, #004400, #002200);\n}\n\n.bg-card[_ngcontent-%COMP%] {\n  background: #b1c9aa;\n  border-bottom-style: outset;\n  border-right-style: outset;\n  box-shadow: 0px 2px 4px -1px rgba(0, 68, 0, 0.18), 0px 4px 5px 0px rgba(0, 68, 0, 0.126), 0px 1px 10px 0px rgba(0, 68, 0, 0.108);\n}\n\n.curve-card[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 15px;\n  border-bottom-style: outset;\n  border-right-style: outset;\n  box-shadow: 0px 2px 4px -1px rgba(0, 68, 0, 0.18), 0px 4px 5px 0px rgba(0, 68, 0, 0.126), 0px 1px 10px 0px rgba(0, 68, 0, 0.108);\n}\n\n.font[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: medium;\n}\n\n.card-color[_ngcontent-%COMP%] {\n  background-color: #e8e8e5;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1tYWluLXN0b3JlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvX2VsZXZhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFRTtFQUNFLHNEQUFBO0FBQ0o7O0FBR0U7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUNpSkYsZ0lBQUE7QURoSkY7O0FBSUU7RUFDRSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUN5SUYsZ0lBQUE7QUR6SUY7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJRTtFQUNFLHlCQUFBO0FBREo7O0FBSUU7RUFDRSxtQkFBQTtBQURKIiwiZmlsZSI6Im1hbmFnZS1tYWluLXN0b3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICNhZmIwYWU7XG4gIH07XG4gIFxuICAuYmcta2luZ2RvbSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMDQ0MDAsICMwMDIyMDApO1xuICB9XG4gIFxuICAgQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xuICAuYmctY2FyZHtcbiAgICBiYWNrZ3JvdW5kOiAoI2IxYzlhYSk7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogb3V0c2V0O1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTogb3V0c2V0O1xuICAgIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oNCwgIzAwNDQwMCwgMC45KTtcbiAgICBcbiAgfTtcbiAgXG4gIC5jdXJ2ZS1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG91dHNldDtcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG91dHNldDtcbiAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKDQsICMwMDQ0MDAsIDAuOSk7XG4gIH1cbiAgXG4gIC5mb250e1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gIH07XG4gIFxuICAuY2FyZC1jb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU1O1xuICB9XG4gIFxuICBoMntcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9IiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptYXRoJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICd2YXJpYWJsZXMnO1xuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXJpYWJsZXMuJGZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJHByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIGVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRjb2xvciwgJG9wYWNpdHk6ICRvcGFjaXR5KSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCBtYXRoLmlzLXVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC5nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAuZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLmdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBvdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRjb2xvcixcbiAgICAkb3BhY2l0eTogJG9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJHRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 37857:
/*!************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/unitsOfMeasure/all-units/all-units.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllUnitsComponent": () => (/* binding */ AllUnitsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_inventory_data_services_units_of_measure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/services/units-of-measure.service */ 82346);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 48632);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
























function AllUnitsComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllUnitsComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllUnitsComponent_td_53_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const row_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r14.onSelect(row_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r13.id, "");
} }
function AllUnitsComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllUnitsComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllUnitsComponent_td_56_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const row_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r17.onSelect(row_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r16.unitOfMeasureName, " ");
} }
function AllUnitsComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllUnitsComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 55)(1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllUnitsComponent_td_59_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllUnitsComponent_td_59_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const row_r19 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r22.editUnitOfMeasure(row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-feather-icons", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllUnitsComponent_td_59_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllUnitsComponent_td_59_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const row_r19 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.viewUnitOfMeasure(row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-feather-icons", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllUnitsComponent_td_59_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllUnitsComponent_td_59_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const row_r19 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r27.deleteUnitOfMeasure(row_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-feather-icons", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "trash-2");
} }
function AllUnitsComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 59);
} }
function AllUnitsComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllUnitsComponent_tr_61_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const row_r28 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.viewUnitOfMeasure(row_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllUnitsComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r11.input.value, "\"");
} }
function AllUnitsComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Units of Measure"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class AllUnitsComponent {
    constructor(router, snackbar, unitManService) {
        this.router = router;
        this.snackbar = snackbar;
        this.unitManService = unitManService;
        this.displayedColumns = ["id", "unitOfMeasureName", "action"];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
        this.isLoading = true;
        this.pageFunction = "Update";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.downloadLoading = false;
    }
    ngOnInit() {
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
        this.unitManService
            .getUnit()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("categories: ", res);
                if (res.statusCode == 200) {
                    // this.data = res.entity;
                    this.data = res.entity;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(this.data);
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
            rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
    }
    addUnitOfMeasure() {
        this.router.navigate([
            "/erp-inventory/inventory-parameters/manage-UnitOfMeasure",
        ]);
    }
    refresh() {
        this.getData();
    }
    editUnitOfMeasure(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        console.log("mm", data);
        let route = "/erp-inventory/inventory-parameters/manage-UnitOfMeasure";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                additionalData: serializedData,
                action: "Update",
            },
        });
    }
    viewUnitOfMeasure(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        let route = "/erp-inventory/inventory-parameters/manage-UnitOfMeasure";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                additionalData: serializedData,
                action: "View",
            },
        });
    }
    deleteUnitOfMeasure(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you Sure?",
            text: "This unit of measure will be deleted!!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete this unit of measure",
        }).then((result) => {
            if (result.isConfirmed) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams().set("id", id);
                this.unitManService
                    .deleteUnitPermanently(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        this.snackbar.showNotification("snackbar-success", "unit of measure Deleted Successfully");
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getData();
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
            }
        });
    }
}
AllUnitsComponent.ɵfac = function AllUnitsComponent_Factory(t) { return new (t || AllUnitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_units_of_measure_service__WEBPACK_IMPORTED_MODULE_2__.UnitsOfMeasureService)); };
AllUnitsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AllUnitsComponent, selectors: [["app-all-units"]], viewQuery: function AllUnitsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 65, vars: 11, consts: [[1, "content"], [1, "content-block"], [1, "block-header", "body"], [1, "bg-table-header", 3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card", "bg-card", "mat-elevation-x0"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader", "bg-table-header", "font"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "h2-col"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "table-style", "mat-elevation-z5"], ["mat-table", "", "matTableExporter", "", "matSort", "", 1, "font-table", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", "class", "start-col mat-elevation-z0 ", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "mat-column", 3, "click", 4, "matCellDef"], ["matColumnDef", "unitOfMeasureName"], ["mat-header-cell", "", "mat-sort-header", "", "class", "mid-col mat-elevation-z0", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", "class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", "class", "end-col mat-elevation-z0", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-cell", "", "colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "start-col", "mat-elevation-z0"], ["mat-cell", "", 1, "mat-column", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "mid-col", "mat-elevation-z0"], ["mat-cell", "", 3, "click"], ["mat-header-cell", "", 1, "end-col", "mat-elevation-z0"], ["mat-cell", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["mat-header-row", ""], ["mat-row", "", "matRipple", "", 3, "click"], ["mat-cell", "", "colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllUnitsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Units of Measure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li", 14)(18, "label", 15)(19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function AllUnitsComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li")(24, "div", 19)(25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllUnitsComponent_Template_button_click_25_listener() { return ctx.addUnitOfMeasure(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "li")(29, "div", 22)(30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllUnitsComponent_Template_button_click_30_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 23)(34, "ul", 24)(35, "li")(36, "div", 25)(37, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllUnitsComponent_Template_img_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "li")(39, "div", 27)(40, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllUnitsComponent_Template_img_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "li")(42, "div", 29)(43, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllUnitsComponent_Template_img_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "li")(45, "div", 31)(46, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllUnitsComponent_Template_img_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50); return _r2.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 33)(48, "table", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](51, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, AllUnitsComponent_th_52_Template, 2, 0, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, AllUnitsComponent_td_53_Template, 2, 1, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](54, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, AllUnitsComponent_th_55_Template, 2, 0, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, AllUnitsComponent_td_56_Template, 2, 1, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](57, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, AllUnitsComponent_th_58_Template, 2, 0, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, AllUnitsComponent_td_59_Template, 7, 9, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, AllUnitsComponent_tr_60_Template, 1, 0, "tr", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, AllUnitsComponent_tr_61_Template, 1, 2, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, AllUnitsComponent_td_62_Template, 2, 1, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, AllUnitsComponent_div_63_Template, 2, 1, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "mat-paginator", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "All Units of Measure")("items", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0))("active_item", "All Units of Measure");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_4__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_19__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 800px) {\n  .responsive_table[_ngcontent-%COMP%] {\n    overflow-x: auto !important;\n  }\n\n  .mat-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n}\n\n.mat-row[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.mat-header-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\n  text-align: left !important;\n  padding: 0px 8px 0px 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC11bml0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RkU7RUFDSSxXQUFBO0FBeEZOOztBQTZGRTtFQUNJO0lBQ0ksMkJBQUE7RUExRlI7O0VBNkZJO0lBQ0ksZ0JBQUE7RUExRlI7QUFDRjs7QUE2RkU7RUFDSSxZQUFBO0FBM0ZOOztBQThGRTs7RUFFSSwyQkFBQTtFQUNBLG1DQUFBO0FBM0ZOIiwiZmlsZSI6ImFsbC11bml0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICAvLyB2YXJpYWJsZXNcbi8vICAkdG9waGVhZDogIzUxOTUwMzM0O1xuLy8gICR0b3BoZWFkMjogIzAwNDQwMDtcbiBcbi8vICAvL2FsbCBib2R5XG4vLyAgLmJvZHkgeyBcbi8vICAgICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbi8vICAgICAgbWFyZ2luOjJjYXA7XG4vLyAgICB9XG4gXG4vLyAgICAubWF0LWNvbHVtbiB7XG4vLyAgICAgIGZsZXg6IDVweDtcbi8vICAgIH1cbiBcbi8vICAgIGgye1xuLy8gICAgICBjb2xvcjogYWxpY2VibHVlO1xuLy8gICAgfVxuIFxuIFxuIFxuLy8gICAgLy90YWJsZSBzdHlsaW5nXG4vLyAgICAudGFibGUtc3R5bGV7XG4vLyAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4XG4vLyAgICB9XG4gXG4vLyAgLnNlY3Rpb24ge1xuLy8gICAgICBiYWNrZ3JvdW5kOiAjYWZiMGFlO1xuLy8gICAgfTtcbiAgIFxuLy8gICAgLmJnLWtpbmdkb20ge1xuLy8gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzAwNDQwMCwgIzAwMjIwMCk7XG4vLyAgICB9XG4vLyAgICAuYmctY2FyZHtcbi8vICAgICAgYmFja2dyb3VuZDogKCNiMWM5YWEpO1xuLy8gICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweFxuLy8gICAgfTtcbiBcbi8vICAgIC5iZy10YWJsZS1oZWFkZXJ7XG4vLyAgICAgIGJhY2tncm91bmQ6ICR0b3BoZWFkMjtcbi8vICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHhcbi8vICAgIH07XG4gICBcbi8vICAgIC5mb250e1xuLy8gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuLy8gICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbi8vICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4vLyAgICB9O1xuIFxuLy8gICAgLmZvbnQtdGFibGV7XG4vLyAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuLy8gICAgICBmb250LXNpemU6IG1lZGl1bTtcbi8vICB9XG4gXG4vLyAgLm1hdC1jZWxsIHtcbi8vICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbi8vICB9XG4gICBcbi8vICAubWlkLWNvbHtcbi8vICAgICAgYmFja2dyb3VuZC1jb2xvcjokdG9waGVhZDtcbi8vICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHg7XG4vLyAgfVxuLy8gIC5zdGFydC1jb2x7XG4vLyAgICAgIC8vdG9wIGxlZnQgcm91bmRlZCBjb3JuZXJcbi8vICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTVweCAwcHggMHB4OyBcbi8vICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHg7IFxuLy8gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR0b3BoZWFkOyAgXG4vLyAgfVxuLy8gIC5lbmQtY29se1xuLy8gICAgICAvLyB0b3AgcmlnaHRcbi8vICAgICAgLy8gYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMHB4IDBweDsgXG4vLyAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDBweDsgXG4vLyAgICAgIGJhY2tncm91bmQtY29sb3I6JHRvcGhlYWQ7IFxuLy8gIH1cbiBcbi8vICAvL2VsZXZhdGlvbiBcbi8vICBAaW1wb3J0ICd+QGFuZ3VsYXIvbWF0ZXJpYWwvdGhlbWluZyc7XG4gXG4vLyAgLm15LWNsYXNzLXdpdGgtZGVmYXVsdC1zaGFkb3cge1xuLy8gICAgLy8gQWRkcyBhIHNoYWRvdyBmb3IgZWxldmF0aW9uIGxldmVsIDIgd2l0aCBkZWZhdWx0IGNvbG9yIGFuZCBmdWxsIG9wYWNpdHk6XG4vLyAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKDIpO1xuLy8gIH1cbiBcbi8vICAubXktY2xhc3Mtd2l0aC1jdXN0b20tc2hhZG93IHtcbi8vICAgIC8vIEFkZHMgYSBzaGFkb3cgZm9yIGVsZXZhdGlvbiBsZXZlbCAyIHdpdGggY29sb3IgI2U5MWU2MyBhbmQgODAlIG9mIHRoZSBkZWZhdWx0IG9wYWNpdHk6XG4vLyAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKDIsICNlOTFlNjMsIDAuOCk7XG4vLyAgfVxuXG4gIHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cblxuICAvL3Jlc3BvbnNpdmUgdGFibGVcbiAgQG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIC5yZXNwb25zaXZlX3RhYmxlIHtcbiAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtdGFibGUge1xuICAgICAgICAgIG1pbi13aWR0aDogODAwcHg7XG4gICAgICB9XG4gIH1cblxuICAubWF0LXJvdyB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsLFxuICAubWF0LWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMHB4IDhweCAwcHggOHB4ICFpbXBvcnRhbnQ7XG4gIH0iXX0= */"] });


/***/ }),

/***/ 69874:
/*!******************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-parameters/unitsOfMeasure/manage-units/manage-units.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageUnitsComponent": () => (/* binding */ ManageUnitsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_inventory_data_services_units_of_measure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/services/units-of-measure.service */ 82346);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);













function ManageUnitsComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "The unit of measure name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["All Units of Measure"]; };
class ManageUnitsComponent {
    constructor(fb, router, activatedRoute, tokenStorageService, snackbar, route, unitManService) {
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.tokenStorageService = tokenStorageService;
        this.snackbar = snackbar;
        this.route = route;
        this.unitManService = unitManService;
        this.showForm = false;
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.currentUser = this.tokenStorageService.getUser().username;
    }
    ngOnInit() {
        this.getPage();
        this.showForm = true;
        console.log("this.formData: ", this.formData);
        this.route.queryParams.subscribe((params) => {
            console.log("res", params);
            if (params.hasOwnProperty("id")) {
                const action = params["action"];
                if (action == "Update") {
                    this.pageFunction = "Update";
                }
                else if (action == "View") {
                    this.pageFunction = "View";
                }
                this.id = params["id"];
                const serializedData = params["additionalData"];
                const additionalData = JSON.parse(serializedData);
                this.formData = additionalData;
                console.log("ID:", this.id);
                console.log("Additional Data:", additionalData);
                this.getPage();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getPage() {
        if (this.pageFunction === "Add") {
            this.generateForm();
        }
        else if (this.pageFunction === "Update") {
            this.generateFormWithData();
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.hideSubmit = true;
        }
    }
    generateForm() {
        this.mngForm = this.fb.group({
            unitOfMeasureName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    generateFormWithData() {
        this.mngForm = this.fb.group({
            id: [this.formData.id],
            unitOfMeasureName: [this.formData.unitOfMeasureName, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            expenseType: [this.formData.expenseType, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            id: [{ value: this.formData.id, disabled: true }],
            unitOfMeasureName: [{ value: this.formData.unitOfMeasureName, disabled: true }],
        });
    }
    cancel() {
        this.router.navigate(["/erp-inventory/inventory-parameters/all-UnitOfMeasure"]);
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        if (this.pageFunction === "Add") {
            this.unitManService
                .addUnit(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "unit of measure Added Successfully");
                        this.router.navigate(["/erp-inventory/inventory-parameters/all-UnitOfMeasure"]);
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err);
                },
                complete: () => { },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.unitManService
                .updateUnit(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", "Unit of measure Updated Successfully");
                        this.router.navigate(["/erp-inventory/inventory-parameters/all-UnitOfMeasure"]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription;
        }
    }
}
ManageUnitsComponent.ɵfac = function ManageUnitsComponent_Factory(t) { return new (t || ManageUnitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_units_of_measure_service__WEBPACK_IMPORTED_MODULE_2__.UnitsOfMeasureService)); };
ManageUnitsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ManageUnitsComponent, selectors: [["app-manage-units"]], decls: 29, vars: 10, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "row"], [1, "col-12"], [1, "body"], [1, "m-4", 3, "formGroup"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-3"], ["appearance", "outline", 1, "example-full-width", "mb-3"], [1, ""], ["matInput", "", "formControlName", "unitOfMeasureName"], [4, "ngIf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["mat-dialog-action", "", 3, "align"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "hidden", "click"]], template: function ManageUnitsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "form", 11)(15, "div", 8)(16, "div", 12)(17, "mat-form-field", 13)(18, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Unit of Measure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ManageUnitsComponent_mat_error_21_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 8)(23, "div", 17)(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageUnitsComponent_Template_button_click_25_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageUnitsComponent_Template_button_click_27_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Manage Units of Measure")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0))("active_item", "Manage Units of Measure");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Unit of Measure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mngForm.get("unitOfMeasureName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("align", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.mngForm.valid)("hidden", ctx.hideSubmit);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton], styles: [".section[_ngcontent-%COMP%] {\n  background: #afb0ae;\n}\n\n.bg-kingdom[_ngcontent-%COMP%] {\n  background: linear-gradient(to left, #004400, #002200);\n}\n\n.bg-card[_ngcontent-%COMP%] {\n  background: #b1c9aa;\n  border-bottom-style: outset;\n  border-right-style: outset;\n  box-shadow: 0px 2px 4px -1px rgba(0, 68, 0, 0.18), 0px 4px 5px 0px rgba(0, 68, 0, 0.126), 0px 1px 10px 0px rgba(0, 68, 0, 0.108);\n}\n\n.curve-card[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 15px;\n  border-bottom-style: outset;\n  border-right-style: outset;\n  box-shadow: 0px 2px 4px -1px rgba(0, 68, 0, 0.18), 0px 4px 5px 0px rgba(0, 68, 0, 0.126), 0px 1px 10px 0px rgba(0, 68, 0, 0.108);\n}\n\n.font[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: medium;\n}\n\n.card-color[_ngcontent-%COMP%] {\n  background-color: #e8e8e5;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS11bml0cy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19lbGV2YXRpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxzREFBQTtBQUNKOztBQUdFO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VDaUpGLGdJQUFBO0FEaEpGOztBQUlFO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VDeUlGLGdJQUFBO0FEeklGOztBQUlFO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUU7RUFDRSx5QkFBQTtBQURKOztBQUlFO0VBQ0UsbUJBQUE7QUFESiIsImZpbGUiOiJtYW5hZ2UtdW5pdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2FmYjBhZTtcbiAgfTtcbiAgXG4gIC5iZy1raW5nZG9tIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzAwNDQwMCwgIzAwMjIwMCk7XG4gIH1cbiAgXG4gICBAaW1wb3J0ICd+QGFuZ3VsYXIvbWF0ZXJpYWwvdGhlbWluZyc7XG4gIC5iZy1jYXJke1xuICAgIGJhY2tncm91bmQ6ICgjYjFjOWFhKTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBvdXRzZXQ7XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBvdXRzZXQ7XG4gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbig0LCAjMDA0NDAwLCAwLjkpO1xuICAgIFxuICB9O1xuICBcbiAgLmN1cnZlLWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogb3V0c2V0O1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTogb3V0c2V0O1xuICAgIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oNCwgIzAwNDQwMCwgMC45KTtcbiAgfVxuICBcbiAgLmZvbnR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgfTtcbiAgXG4gIC5jYXJkLWNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTU7XG4gIH1cbiAgXG4gIGgye1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIH0iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1hdGgnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJ3ZhcmlhYmxlcyc7XG5cblxuLy8gQSBjb2xsZWN0aW9uIG9mIG1peGlucyBhbmQgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBlbGV2YXRpb24gdG8gYSBtYXRlcmlhbFxuLy8gZWxlbWVudC5cbi8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vZW52aXJvbm1lbnQvZWxldmF0aW9uLmh0bWxcbi8vIEV4YW1wbGVzOlxuLy9cbi8vXG4vLyAubWF0LWZvbyB7XG4vLyAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDIpO1xuLy9cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDgpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gPGRpdiBpZD1cImV4dGVybmFsLWNhcmRcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejJcIj48cD5Tb21lIGNvbnRlbnQ8L3A+PC9kaXY+XG4vL1xuLy8gRm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoZSBkZXNpZ24gYmVoaW5kIGhvdyBlbGV2YXRpb24gaXMgaW1wbGVtZW50ZWQsIHNlZSB0aGUgZGVzaWduIGRvYyBhdFxuLy8gaHR0cHM6Ly9nb28uZ2wvS3EwazlaLlxuXG4vLyBDb2xvcnMgZm9yIHVtYnJhLCBwZW51bWJyYSwgYW5kIGFtYmllbnQgc2hhZG93cy4gQXMgZGVzY3JpYmVkIGluIHRoZSBkZXNpZ24gZG9jLCBlYWNoIGVsZXZhdGlvblxuLy8gbGV2ZWwgaXMgY3JlYXRlZCB1c2luZyBhIHNldCBvZiAzIHNoYWRvdyB2YWx1ZXMsIG9uZSBmb3IgdW1icmEgKHRoZSBzaGFkb3cgcmVwcmVzZW50aW5nIHRoZVxuLy8gc3BhY2UgY29tcGxldGVseSBvYnNjdXJlZCBieSBhbiBvYmplY3QgcmVsYXRpdmUgdG8gaXRzIGxpZ2h0IHNvdXJjZSksIG9uZSBmb3IgcGVudW1icmEgKHRoZVxuLy8gc3BhY2UgcGFydGlhbGx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCksIGFuZCBvbmUgZm9yIGFtYmllbnQgKHRoZSBzcGFjZSB3aGljaCBjb250YWlucyB0aGUgb2JqZWN0XG4vLyBpdHNlbGYpLiBGb3IgYSBmdXJ0aGVyIGV4cGxhbmF0aW9uIG9mIHRoZXNlIHRlcm1zIGFuZCB0aGVpciBtZWFuaW5ncywgc2VlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbWJyYSxfcGVudW1icmFfYW5kX2FudHVtYnJhLlxuXG4vLyBNYXBzIGZvciB0aGUgZGlmZmVyZW50IHNoYWRvdyBzZXRzIGFuZCB0aGVpciB2YWx1ZXMgd2l0aGluIGVhY2ggei1zcGFjZS4gVGhlc2UgdmFsdWVzIHdlcmVcbi8vIGNyZWF0ZWQgYnkgdGFraW5nIGEgZmV3IHJlZmVyZW5jZSBzaGFkb3cgc2V0cyBjcmVhdGVkIGJ5IEdvb2dsZSdzIERlc2lnbmVycyBhbmQgaW50ZXJwb2xhdGluZ1xuLy8gYWxsIG9mIHRoZSB2YWx1ZXMgYmV0d2VlbiB0aGVtLlxuXG5AZnVuY3Rpb24gX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZihtZXRhLnR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggMXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDJweCAycHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCA0cHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDVweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggNnB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggN3B4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggOHB4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggOXB4IDEycHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDEwcHggMTRweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggMTFweCAxNXB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCAxMnB4IDE3cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDEzcHggMTlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggMTRweCAyMXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCAxNXB4IDIycHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDE2cHggMjRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggMTdweCAyNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCAxOHB4IDI4cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDE5cHggMjlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMjBweCAzMXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAyMXB4IDMzcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDIycHggMzVweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMjNweCAzNnB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAyNHB4IDM4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggM3B4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDFweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggMXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAxcHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAxcHggMTRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAxcHggMThweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCAycHggMTZweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCAzcHggMTRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCAzcHggMTZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNHB4IDE4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDRweCAyMHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA1cHggMjJweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggNXB4IDI0cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDVweCAyNnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA2cHggMjhweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggNnB4IDMwcHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDZweCAzMnB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA3cHggMzRweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggN3B4IDM2cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDhweCAzOHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCA4cHggNDBweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggOHB4IDQycHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDlweCA0NHB4IDhweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCA5cHggNDZweCA4cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZHVyYXRpb24gdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiR0cmFuc2l0aW9uLWR1cmF0aW9uOiAyODBtcyAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgZWFzaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcmlhYmxlcy4kZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRjb2xvcjogYmxhY2sgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IG9wYWNpdHkgc2NhbGluZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kb3BhY2l0eTogMSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciBlbGV2YXRpb24tcmVsYXRlZCBzZWxlY3RvcnMuXG4kcHJlZml4OiAnbWF0LWVsZXZhdGlvbi16JztcblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgdG8gYW4gZWxlbWVudCB0byBnaXZlIGl0IHRoZSBlbGV2YXRpb24gc3BlY2lmaWVkIGJ5ICR6VmFsdWUuXG4vLyBUaGUgJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQuXG5AbWl4aW4gZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvcjogJGNvbG9yLCAkb3BhY2l0eTogJG9wYWNpdHkpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkelZhbHVlKSAhPSBudW1iZXIgb3Igbm90IG1hdGguaXMtdW5pdGxlc3MoJHpWYWx1ZSkge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGEgdW5pdGxlc3MgbnVtYmVyJztcbiAgfVxuICBAaWYgJHpWYWx1ZSA8IDAgb3IgJHpWYWx1ZSA+IDI0IHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0JztcbiAgfVxuXG4gIGJveC1zaGFkb3c6ICN7bWFwLmdldChfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC5nZXQoX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAuZ2V0KF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgZWxldmF0aW9uIHRvIGFuIGVsZW1lbnQgaW4gYSBtYW5uZXIgdGhhdCBhbGxvd3Ncbi8vIGNvbnN1bWVycyB0byBvdmVycmlkZSBpdCB2aWEgdGhlIE1hdGVyaWFsIGVsZXZhdGlvbiBjbGFzc2VzLlxuQG1peGluIG92ZXJyaWRhYmxlLWVsZXZhdGlvbihcbiAgICAkelZhbHVlLFxuICAgICRjb2xvcjogJGNvbG9yLFxuICAgICRvcGFjaXR5OiAkb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRwcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBlbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBwcml2YXRlLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgQHJldHVybiBib3gtc2hhZG93ICN7JGR1cmF0aW9ufSAjeyRlYXNpbmd9O1xufVxuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyBuZWVkZWQgdG8gaGF2ZSBhbiBlbGVtZW50IHRyYW5zaXRpb24gYmV0d2VlbiBlbGV2YXRpb25zLlxuLy8gVGhpcyBtaXhpbiBzaG91bGQgYmUgYXBwbGllZCB0byBlbGVtZW50cyB3aG9zZSBlbGV2YXRpb24gdmFsdWVzIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGVpclxuLy8gY29udGV4dCAoZS5nLiB3aGVuIGFjdGl2ZSBvciBkaXNhYmxlZCkuXG4vL1xuLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogQm90aCB0aGlzIG1peGluIGFuZCB0aGUgYWJvdmUgZnVuY3Rpb24gdXNlIGRlZmF1bHQgcGFyYW1ldGVycyBzbyB0aGV5IGNhblxuLy8gYmUgdXNlZCBpbiB0aGUgc2FtZSB3YXkgYnkgY2xpZW50cy5cbkBtaXhpbiBlbGV2YXRpb24tdHJhbnNpdGlvbihcbiAgICAkZHVyYXRpb246ICR0cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBwcml2YXRlLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_erp-inventory_modules_inventory-parameters_inventory-parameters_module_ts.js.map
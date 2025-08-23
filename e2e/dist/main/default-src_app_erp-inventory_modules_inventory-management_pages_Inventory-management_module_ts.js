"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["default-src_app_erp-inventory_modules_inventory-management_pages_Inventory-management_module_ts"],{

/***/ 96358:
/*!*******************************************************!*\
  !*** ./src/app/core/service/token-storage.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenStorageService": () => (/* binding */ TokenStorageService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";
class TokenStorageService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("Content-Type", "application/json");
        this.horizontalPosition = "end";
        this.verticalPosition = "top";
    }
    getToken() {
        // get the name of the cookie to retrieve
        const name = "accessToken";
        // split the document.cookie string into an array of individual cookies
        const cookieArray = document.cookie.split(";");
        // loop through the cookies to find the one with the matching name
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            //console.log("cookieArray: ", cookieArray)
            // remove any leading spaces from the cookie string
            while (cookie.charAt(0) === " ") {
                cookie = cookie.substring(1);
            }
            // if the cookie name matches the desired name, return the cookie value
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        // if the cookie was not found, return null
        return null;
    }
    saveUser(user) {
        window.localStorage.removeItem(USER_KEY);
        window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        const user = window.localStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }
    getEmppf() {
        return this.getUser().empPfNo;
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
TokenStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 97504:
/*!**************************************************************************!*\
  !*** ./src/app/erp-inventory/data/services/direct-main-store.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectMainStoreService": () => (/* binding */ DirectMainStoreService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class DirectMainStoreService {
    constructor(http) {
        this.http = http;
    }
    getInternalRequisitions() {
        const InternalRequisitionManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/internal/requisitions/all`;
        return this.http.get(InternalRequisitionManagementUrl);
    }
    getInternalRequisitionsByStatus(params) {
        const InternalRequisitionManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/internal/requisitions/fetchbyStatus`;
        return this.http.get(InternalRequisitionManagementUrl, { params });
    }
    getInternalRequisitionsByStatusAndPfNo(params) {
        const InternalRequisitionManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/internal/requisitions/find/by/emppfno`;
        return this.http.get(InternalRequisitionManagementUrl, { params });
    }
    getInternalRequisitionsById(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/internal/requisitions/find/by/id`, { params });
    }
    addInternalRequisition(data) {
        const InternalRequisitionManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/internal/requisitions/create`;
        return this.http.post(InternalRequisitionManagementUrl, data);
    }
    addInternalRequisitions(data) {
        const InternalRequisitionManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/internal/requisitions/create/bulk`;
        return this.http.post(InternalRequisitionManagementUrl, data);
    }
    updateInternalRequisitions(InternalRequisitionDetails) {
        const updateInternalRequisitionUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/internal/requisitions/update`;
        return this.http.put(updateInternalRequisitionUrl, InternalRequisitionDetails);
    }
    deleteInternalRequisitionTemporarily(params) {
        const InternalRequisitionManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/internal/requisitions/delete`;
        return this.http.delete(InternalRequisitionManagementUrl, { params });
    }
    validateInternalRequisitions(dataToValidate) {
        const imprestUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/internal/requisitions/update/state`;
        return this.http.put(imprestUrl, dataToValidate);
    }
}
DirectMainStoreService.ɵfac = function DirectMainStoreService_Factory(t) { return new (t || DirectMainStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DirectMainStoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DirectMainStoreService, factory: DirectMainStoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 76496:
/*!*********************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-management/pages/Inventory-management-routing.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockManagementRoutingModule": () => (/* binding */ StockManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _Stock_Management_Pages_mainstore_items_manage_stock_manage_stock_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stock-Management/Pages/mainstore-items/manage-stock/manage-stock.component */ 99286);
/* harmony import */ var _Stock_Management_Pages_mainstore_items_all_stock_all_stock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stock-Management/Pages/mainstore-items/all-stock/all-stock.component */ 77150);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _place_requisitions_direct_main_store_requisition_direct_main_store_requisition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-requisitions/direct-main-store-requisition/direct-main-store-requisition.component */ 10178);
/* harmony import */ var _view_requisitions_view_direct_mainstore_requisitions_view_direct_mainstore_requisitions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-requisitions/view-direct-mainstore-requisitions/view-direct-mainstore-requisitions.component */ 95411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: "all-stock",
        component: _Stock_Management_Pages_mainstore_items_all_stock_all_stock_component__WEBPACK_IMPORTED_MODULE_1__.AllStockComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["All Stock"] },
    },
    {
        path: "manage-stock",
        component: _Stock_Management_Pages_mainstore_items_manage_stock_manage_stock_component__WEBPACK_IMPORTED_MODULE_0__.ManageStockComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["Manage Stock"] },
    },
    {
        path: "request-stock-directly",
        component: _place_requisitions_direct_main_store_requisition_direct_main_store_requisition_component__WEBPACK_IMPORTED_MODULE_3__.DirectMainStoreRequisitionComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["Request Stock Main"] },
    },
    {
        path: "view-user-direct-requisition",
        component: _view_requisitions_view_direct_mainstore_requisitions_view_direct_mainstore_requisitions_component__WEBPACK_IMPORTED_MODULE_4__.ViewDirectMainstoreRequisitionsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_2__.RoutePrivilegeGuard],
        data: { clientName: 'InventoryModule', requiredPrivilege: ["View User Requisitions"] },
    },
];
class StockManagementRoutingModule {
}
StockManagementRoutingModule.ɵfac = function StockManagementRoutingModule_Factory(t) { return new (t || StockManagementRoutingModule)(); };
StockManagementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: StockManagementRoutingModule });
StockManagementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](StockManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 23505:
/*!*************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-management/pages/Inventory-management.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryManagementModule": () => (/* binding */ InventoryManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _Inventory_management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inventory-management-routing.module */ 76496);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dashboard/dashboard.module */ 38107);
/* harmony import */ var _Stock_Management_Pages_mainstore_items_manage_stock_manage_stock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Stock-Management/Pages/mainstore-items/manage-stock/manage-stock.component */ 99286);
/* harmony import */ var _Stock_Management_Pages_mainstore_items_all_stock_all_stock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Stock-Management/Pages/mainstore-items/all-stock/all-stock.component */ 77150);
/* harmony import */ var _view_requisitions_view_direct_mainstore_requisitions_view_direct_mainstore_requisitions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-requisitions/view-direct-mainstore-requisitions/view-direct-mainstore-requisitions.component */ 95411);
/* harmony import */ var _place_requisitions_direct_main_store_requisition_direct_main_store_requisition_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./place-requisitions/direct-main-store-requisition/direct-main-store-requisition.component */ 10178);
/* harmony import */ var _view_requisitions_view_req_items_dialog_view_req_items_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-requisitions/view-req-items-dialog/view-req-items-dialog.component */ 21965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);




































class InventoryManagementModule {
}
InventoryManagementModule.ɵfac = function InventoryManagementModule_Factory(t) { return new (t || InventoryManagementModule)(); };
InventoryManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: InventoryManagementModule });
InventoryManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _Inventory_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.StockManagementRoutingModule,
            //Additional imports
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__.DashboardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBarModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule,
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_24__.MatTableExporterModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_30__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__.MatStepperModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_35__.NgxMaskModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](InventoryManagementModule, { declarations: [_Stock_Management_Pages_mainstore_items_all_stock_all_stock_component__WEBPACK_IMPORTED_MODULE_5__.AllStockComponent,
        _Stock_Management_Pages_mainstore_items_manage_stock_manage_stock_component__WEBPACK_IMPORTED_MODULE_4__.ManageStockComponent,
        // StockStatsComponent,
        // TransferStockComponent,
        // MainStoreRequsitionComponent,
        // BranchStoreRequsitionComponent,
        // ViewMainStoreRequisitionsComponent,
        // ViewBranchRequisitionsComponent,
        // OnboardingPOItemsComponent,
        // BranchStoreReservationComponent,
        // AllBranchItemsComponent,
        // ManageBranchItemsComponent,
        // BranchStatisticsComponent,
        _place_requisitions_direct_main_store_requisition_direct_main_store_requisition_component__WEBPACK_IMPORTED_MODULE_7__.DirectMainStoreRequisitionComponent,
        _view_requisitions_view_direct_mainstore_requisitions_view_direct_mainstore_requisitions_component__WEBPACK_IMPORTED_MODULE_6__.ViewDirectMainstoreRequisitionsComponent,
        _view_requisitions_view_req_items_dialog_view_req_items_dialog_component__WEBPACK_IMPORTED_MODULE_8__.ViewReqItemsDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _Inventory_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.StockManagementRoutingModule,
        //Additional imports
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__.DashboardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBarModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule,
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_24__.MatTableExporterModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_30__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__.MatStepperModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_35__.NgxMaskModule] }); })();


/***/ }),

/***/ 77150:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-management/pages/Stock-Management/Pages/mainstore-items/all-stock/all-stock.component.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllStockComponent": () => (/* binding */ AllStockComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_inventory_data_services_stock_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/services/stock-management.service */ 90307);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../dashboard/pages/gen-widgets/gen-widgets.component */ 48632);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);































function AllStockComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Items in Stock ");
} }
function AllStockComponent_mat_header_cell_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r55.id, "");
} }
function AllStockComponent_mat_header_cell_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Item Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r56.itemCode, "");
} }
function AllStockComponent_mat_header_cell_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r57.name, " ");
} }
function AllStockComponent_mat_header_cell_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r58.itemCategory, " ");
} }
function AllStockComponent_mat_header_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r59.quantity, " ");
} }
function AllStockComponent_mat_header_cell_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Units ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r60.unit, " ");
} }
function AllStockComponent_mat_header_cell_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Unit Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r61.unitCost, " ");
} }
function AllStockComponent_mat_header_cell_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_81_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82)(1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_mat_cell_81_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllStockComponent_mat_cell_81_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r66); const row_r62 = restoredCtx.$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r65.editStock(row_r62, "Main"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-feather-icons", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_mat_cell_81_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllStockComponent_mat_cell_81_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r66); const row_r62 = restoredCtx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r68.viewStock(row_r62, "Main"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-feather-icons", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_mat_cell_81_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllStockComponent_mat_cell_81_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r66); const row_r62 = restoredCtx.$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r70.deleteStock(row_r62.itemCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-feather-icons", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "trash-2");
} }
function AllStockComponent_mat_header_row_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
} }
function AllStockComponent_mat_row_83_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-row", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_mat_row_83_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r73); const row_r71 = restoredCtx.$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r72.viewStock(row_r71, "Main"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllStockComponent_mat_cell_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r22.input.value, "\"");
} }
function AllStockComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-spinner", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 40);
} }
function AllStockComponent_ng_template_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Items from Procurement ");
} }
function AllStockComponent_li_111_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "div", 91)(2, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_li_111_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r74.processMultipleRows(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "emoji_transportation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} }
function AllStockComponent_mat_option_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", reqStatus_r76.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", reqStatus_r76.name, " ");
} }
function AllStockComponent_mat_error_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_header_cell_152_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 95)(1, "mat-checkbox", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AllStockComponent_mat_header_cell_152_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r77.masterToggle() : null; })("change", function AllStockComponent_mat_header_cell_152_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r78); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r79.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r31.selection.hasValue() && ctx_r31.isAllSelected())("indeterminate", ctx_r31.selection.hasValue() && !ctx_r31.isAllSelected())("ngClass", "tbl-checkbox");
} }
function AllStockComponent_mat_cell_153_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 95)(1, "mat-checkbox", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_mat_cell_153_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function AllStockComponent_mat_cell_153_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r83); const row_r80 = restoredCtx.$implicit; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r82.selection.toggle(row_r80) : null; })("change", function AllStockComponent_mat_cell_153_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r84.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r80 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r32.selection.isSelected(row_r80))("ngClass", "tbl-checkbox")("aria-label", ctx_r32.checkboxLabel(row_r80));
} }
function AllStockComponent_mat_header_cell_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r85.id, "");
} }
function AllStockComponent_mat_header_cell_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Item Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r86.itemCode, "");
} }
function AllStockComponent_mat_header_cell_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r87.name, " ");
} }
function AllStockComponent_mat_header_cell_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r88.itemCategory, " ");
} }
function AllStockComponent_mat_header_cell_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r89.quantity, " ");
} }
function AllStockComponent_mat_header_cell_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Units ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r90.unit, " ");
} }
function AllStockComponent_mat_header_cell_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Unit Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r91.unitCost, " ");
} }
function AllStockComponent_mat_header_cell_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_177_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r92.status, " ");
} }
function AllStockComponent_mat_cell_177_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r92.status, " ");
} }
function AllStockComponent_mat_cell_177_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r92.status, " ");
} }
function AllStockComponent_mat_cell_177_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r92.status, " ");
} }
function AllStockComponent_mat_cell_177_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", row_r92.status, " ");
} }
function AllStockComponent_mat_cell_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_mat_cell_177_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AllStockComponent_mat_cell_177_button_2_Template, 3, 1, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AllStockComponent_mat_cell_177_button_3_Template, 3, 1, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AllStockComponent_mat_cell_177_button_4_Template, 3, 1, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AllStockComponent_mat_cell_177_button_5_Template, 3, 1, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AllStockComponent_mat_cell_177_button_6_Template, 3, 1, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", row_r92.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "RECEIVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
} }
function AllStockComponent_mat_header_cell_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllStockComponent_mat_cell_180_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82)(1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_mat_cell_180_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllStockComponent_mat_cell_180_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r109); const row_r105 = restoredCtx.$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r108.editStock(row_r105, "Procurement"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-feather-icons", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_mat_cell_180_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllStockComponent_mat_cell_180_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r109); const row_r105 = restoredCtx.$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r111.viewStock(row_r105, "Procurement"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-feather-icons", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_mat_cell_180_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function AllStockComponent_mat_cell_180_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r109); const row_r105 = restoredCtx.$implicit; const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r113.deleteStock(row_r105.itemCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-feather-icons", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "trash-2");
} }
function AllStockComponent_mat_header_row_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
} }
function AllStockComponent_mat_row_182_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-row", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_mat_row_182_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r116); const row_r114 = restoredCtx.$implicit; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r115.viewStock(row_r114); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllStockComponent_mat_cell_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r53.input.value, "\"");
} }
function AllStockComponent_div_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-spinner", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Stock Items"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class AllStockComponent {
    constructor(router, snackbar, stockManService, accessControlService, fb) {
        this.router = router;
        this.snackbar = snackbar;
        this.stockManService = stockManService;
        this.accessControlService = accessControlService;
        this.fb = fb;
        this.displayedColumns = [
            "id",
            "itemCode",
            "name",
            "itemCategory",
            "quantity",
            "unitCost",
            "action",
        ];
        this.totalCost = 0;
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(true, []);
        //************************************************************* */
        this.displayedColumnsSecond = [
            "select",
            "id",
            "itemCode",
            "name",
            "itemCategory",
            "quantity",
            "unitCost",
            "status",
            "action",
        ];
        this.isLoading = true;
        this.pageFunction = "Update";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.downloadLoading = false;
        // ****************************************************************************************************************************
        this.reqStatuses = [{ name: "PENDING" }, { name: "RECEIVED" }];
        this.selectedStatus = "PENDING";
        this.isLoadingSecond = true;
        //**********************************************************************************************************
        //Select GL Accounts
        this.selectedRows = [];
        this.atleastOneSelected = false;
    }
    ngOnInit() {
        this.Form = this.fb.group({
            status: ["PENDING", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
        });
        this.getData();
        this.getDataFromProcurement();
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
        this.stockManService
            .getStock()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("status:", res);
                if (res.statusCode == 200) {
                    // this.data = res.entity;
                    this.data = res.entity;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                else {
                    // this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                // this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => {
                this.isLoading = false;
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(true, []);
            },
        }),
            rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription;
    }
    applyFilterSecond(event) {
        const filterValue = event.target.value;
        this.dataSourceSecond.filter = filterValue.trim().toLowerCase();
        if (this.dataSourceSecond.paginator) {
            this.dataSourceSecond.paginator.firstPage();
        }
    }
    getSelectSelectedStatus() {
        this.getDataFromProcurement();
    }
    getSelectedStatus(status) {
        this.Form.patchValue({
            status: status,
        });
        this.getDataFromProcurement();
    }
    getDataFromProcurement() {
        this.dataSourceSecond = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource([]);
        this.dataSourceSecond.paginator = this.paginatorSecond;
        this.dataSourceSecond.sort = this.sortSecond;
        this.isLoadingSecond = true;
        this.selectedStatus = this.Form.value.status;
        let params = {
            status: this.Form.value.status,
        };
        this.stockManService
            .getStockFromProcurementByStatus(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.data :", res);
                if (res.statusCode === 200) {
                    this.dataSecond = res;
                    this.isLoadingSecond = false;
                    this.dataSourceSecond = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.dataSecond.entity);
                    this.dataSourceSecond.paginator = this.paginatorSecond;
                    this.dataSourceSecond.sort = this.sortSecond;
                    console.log("this.data :", this.data);
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
    refreshSecond() {
        this.getDataFromProcurement();
    }
    // ****************************************************************************************************************************
    // getDataFromProcurement() {
    //   this.stockManService
    //     .getStocksFromProcurement()
    //     .pipe(takeUntil(this.destroy$))
    //     .subscribe({
    //       next: (res) => {
    //         console.log("status:", res);
    //         if (res.statusCode == 200) {
    //           // this.data = res.entity;
    //           this.dataSecond = res.entity;
    //           this.isLoadingSecond = false;
    //           this.dataSourceSecond = new MatTableDataSource(this.dataSecond);
    //           this.dataSourceSecond.paginator = this.paginatorSecond;
    //           this.dataSourceSecond.sort = this.sortSecond;
    //         } else {
    //           this.snackbar.showNotification("snackbar-danger", res.message);
    //         }
    //       },
    //       error: (err) => {
    //         this.snackbar.showNotification("snackbar-danger", err.message);
    //       },
    //       complete: () => {},
    //     }),
    //     Subscription;
    // }
    addStockCall() {
        this.router.navigate(["/erp-inventory/inventory/manage-stock"]);
    }
    refresh() {
        this.getData();
    }
    editStock(data, stockType) {
        console.log("mm", data);
        let route = "/erp-inventory/inventory/manage-stock";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                action: "Update",
                stockType: stockType,
            },
        });
    }
    viewStock(data, stockType) {
        let route = "/erp-inventory/inventory/manage-stock";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                action: "View",
                stockType: stockType,
            },
        });
    }
    transferStock() {
        let route = "/erp-inventory/inventory/transfer-stock";
        this.router.navigate([route], { queryParams: { action: "Transfer" } });
    }
    deleteStock(itemCode) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you Sure?",
            text: "This item will be deleted!!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete this Item",
        }).then((result) => {
            if (result.isConfirmed) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams().set("itemCode", itemCode);
                this.stockManService
                    .deleteStockPemanently(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        if (res.statusCode == 200) {
                            this.snackbar.showNotification("snackbar-success", res.message);
                        }
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getData();
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription;
            }
        });
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSourceSecond.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSourceSecond.data);
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
    //**********************************************************************************************************
    processMultipleRows() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Confirmation",
            text: "Do you want to push the items to the main table?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then((confirmationResult) => {
            if (confirmationResult.isConfirmed) {
                console.log("LOG: ", this.selectedRows);
                // Extracting IDs from each array item in selectedRows
                let processedData = this.selectedRows.map((item) => item.id);
                // let processedData = this.selectedRows.map((item) => ({ id: item.id }));
                console.log("processedData: ", processedData);
                this.stockManService
                    .validateStocksFromProcurement(processedData)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        console.log("res: ", res);
                        if (res.statusCode == 200) {
                            this.snackbar.showNotification("snackbar-success", res.message);
                            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(true, []);
                        }
                        else {
                            this.snackbar.showNotification("snackbar-danger", res.message);
                        }
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getData();
                        this.getDataFromProcurement();
                    },
                });
            }
            else {
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(true, []);
            }
        });
    }
}
AllStockComponent.ɵfac = function AllStockComponent_Factory(t) { return new (t || AllStockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_stock_management_service__WEBPACK_IMPORTED_MODULE_2__.StockManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder)); };
AllStockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AllStockComponent, selectors: [["app-all-stock"]], viewQuery: function AllStockComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginatorSecond = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sortSecond = _t.first);
    } }, decls: 186, vars: 26, consts: [[1, "content"], [1, "content-block"], [1, "block-header", "body"], [1, "bg-table-header", 3, "title", "items", "active_item"], [1, "card"], [1, "header"], [1, "body"], ["mat-tab-label", ""], [1, "row", "mx-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "table-responsive"], [1, "materialTableHeader", "bg-table-header", "font"], [1, "row"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "table-style", "mat-elevation-z0"], ["matTableExporter", "", "matSort", "", 1, "font-table", "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "start-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "mat-column", 4, "matCellDef"], ["matColumnDef", "itemCode"], ["matColumnDef", "name"], ["mat-sort-header", "", "class", "column-nowrap psl-0 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-0 tbl-col-width-per-15 pr-0", 4, "matCellDef"], ["matColumnDef", "itemCategory"], ["matColumnDef", "quantity"], ["matColumnDef", "unit"], ["matColumnDef", "unitCost"], ["matColumnDef", "action"], ["class", "column-nowrap psl-0 tbl-col-width-per-15 pr-0", "class", "end-col mat-elevation-z0", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [1, "materialTableHeader"], [4, "ngIf"], [1, "materialTableHeader", "mt-2"], [1, "col-2"], [3, "formGroup"], ["appearance", "fill", 1, "example-full-width"], ["formControlName", "status", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-10"], [1, "button-container", "mt-1"], ["mat-raised-button", "", 1, "mat-button", "pending", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "verified", 3, "click"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["mat-sort-header", "", "class", "column-nowrap psl-0 tbl-col-width-per-5 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-0 tbl-col-width-per-5 pr-0", 4, "matCellDef"], ["mat-sort-header", "", "class", "column-nowrap psl-0 tbl-col-width-per-10 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-0 tbl-col-width-per-10 pr-0", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["class", "column-nowrap psl-0 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["mat-sort-header", "", 1, "start-col", "mat-elevation-z0"], [1, "mat-column"], ["mat-sort-header", "", 1, "column-nowrap", "psl-0", "tbl-col-width-per-15", "pr-0"], [1, "column-nowrap", "psl-0", "tbl-col-width-per-15", "pr-0"], [1, "end-col", "mat-elevation-z0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], ["matTooltip", "Push To Main Table", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "material-icons"], [3, "value"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-0", "tbl-col-width-per-5", "pr-0"], [1, "column-nowrap", "psl-0", "tbl-col-width-per-5", "pr-0"], ["mat-sort-header", "", 1, "column-nowrap", "psl-0", "tbl-col-width-per-10", "pr-0"], [1, "column-nowrap", "psl-0", "tbl-col-width-per-10", "pr-0"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-purple btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "badge", "badge-solid-purple", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "fas", "fa-question-circle"]], template: function AllStockComponent_Template(rf, ctx) { if (rf & 1) {
        const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Main Stock Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 6)(10, "mat-tab-group")(11, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, AllStockComponent_ng_template_12_Template, 3, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "div", 6)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "ul", 14)(21, "li", 15)(22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Items in Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "li", 16)(25, "label", 17)(26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function AllStockComponent_Template_input_keyup_28_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "li")(31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_Template_button_click_32_listener() { return ctx.addStockCall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "li")(36, "div", 24)(37, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_Template_button_click_37_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 25)(41, "ul", 26)(42, "li")(43, "div", 27)(44, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_Template_img_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r117); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](57); return _r3.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "li")(46, "div", 29)(47, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_Template_img_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r117); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](57); return _r3.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "li")(49, "div", 31)(50, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_Template_img_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r117); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](57); return _r3.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "li")(52, "div", 33)(53, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_Template_img_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r117); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](57); return _r3.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 35)(55, "mat-table", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](58, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, AllStockComponent_mat_header_cell_59_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, AllStockComponent_mat_cell_60_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](61, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, AllStockComponent_mat_header_cell_62_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, AllStockComponent_mat_cell_63_Template, 2, 1, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](64, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, AllStockComponent_mat_header_cell_65_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, AllStockComponent_mat_cell_66_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](67, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, AllStockComponent_mat_header_cell_68_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, AllStockComponent_mat_cell_69_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](70, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, AllStockComponent_mat_header_cell_71_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, AllStockComponent_mat_cell_72_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](73, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, AllStockComponent_mat_header_cell_74_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, AllStockComponent_mat_cell_75_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](76, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](77, AllStockComponent_mat_header_cell_77_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, AllStockComponent_mat_cell_78_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](79, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, AllStockComponent_mat_header_cell_80_Template, 2, 0, "mat-header-cell", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, AllStockComponent_mat_cell_81_Template, 7, 9, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, AllStockComponent_mat_header_row_82_Template, 1, 0, "mat-header-row", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, AllStockComponent_mat_row_83_Template, 1, 2, "mat-row", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](84, AllStockComponent_mat_cell_84_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](85, AllStockComponent_div_85_Template, 2, 1, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](86, "mat-paginator", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](88, AllStockComponent_ng_template_88_Template, 3, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 8)(90, "div", 9)(91, "div", 6)(92, "div", 10)(93, "div", 56)(94, "div", 12)(95, "div", 13)(96, "ul", 14)(97, "li", 15)(98, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "Items pushed from Procurement");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "li", 16)(101, "label", 17)(102, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function AllStockComponent_Template_input_keyup_104_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "li")(107, "div", 24)(108, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_Template_button_click_108_listener() { return ctx.refreshSecond(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](111, AllStockComponent_li_111_Template, 5, 0, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "div", 25)(114, "ul", 26)(115, "li")(116, "div", 27)(117, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_Template_img_click_117_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r117); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](57); return _r3.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "li")(119, "div", 29)(120, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_Template_img_click_120_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r117); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](57); return _r3.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "li")(122, "div", 31)(123, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_Template_img_click_123_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r117); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](57); return _r3.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "li")(125, "div", 33)(126, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_Template_img_click_126_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r117); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](57); return _r3.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "div", 58)(128, "div", 12)(129, "div", 59)(130, "form", 60)(131, "mat-form-field", 61)(132, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](133, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "mat-select", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function AllStockComponent_Template_mat_select_selectionChange_134_listener() { return ctx.getSelectSelectedStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](135, AllStockComponent_mat_option_135_Template, 2, 2, "mat-option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](136, AllStockComponent_mat_error_136_Template, 2, 0, "mat-error", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](137, "div", 64)(138, "div", 65)(139, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_Template_button_click_139_listener() { return ctx.getSelectedStatus("PENDING"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](140, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](141, "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](142, " PENDING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](143, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllStockComponent_Template_button_click_143_listener() { return ctx.getSelectedStatus("RECEIVED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](145, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](146, " RECEIVED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "div", 35)(148, "mat-table", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](151, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](152, AllStockComponent_mat_header_cell_152_Template, 2, 4, "mat-header-cell", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](153, AllStockComponent_mat_cell_153_Template, 2, 4, "mat-cell", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](154, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](155, AllStockComponent_mat_header_cell_155_Template, 2, 0, "mat-header-cell", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](156, AllStockComponent_mat_cell_156_Template, 2, 1, "mat-cell", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](157, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](158, AllStockComponent_mat_header_cell_158_Template, 2, 0, "mat-header-cell", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](159, AllStockComponent_mat_cell_159_Template, 2, 1, "mat-cell", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](160, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](161, AllStockComponent_mat_header_cell_161_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](162, AllStockComponent_mat_cell_162_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](163, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](164, AllStockComponent_mat_header_cell_164_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](165, AllStockComponent_mat_cell_165_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](166, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](167, AllStockComponent_mat_header_cell_167_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](168, AllStockComponent_mat_cell_168_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](169, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](170, AllStockComponent_mat_header_cell_170_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](171, AllStockComponent_mat_cell_171_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](172, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](173, AllStockComponent_mat_header_cell_173_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](174, AllStockComponent_mat_cell_174_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](175, 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](176, AllStockComponent_mat_header_cell_176_Template, 2, 0, "mat-header-cell", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](177, AllStockComponent_mat_cell_177_Template, 7, 5, "mat-cell", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](178, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](179, AllStockComponent_mat_header_cell_179_Template, 2, 0, "mat-header-cell", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](180, AllStockComponent_mat_cell_180_Template, 7, 9, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](181, AllStockComponent_mat_header_row_181_Template, 1, 0, "mat-header-row", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](182, AllStockComponent_mat_row_182_Template, 1, 2, "mat-row", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](183, AllStockComponent_mat_cell_183_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](184, AllStockComponent_div_184_Template, 2, 1, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](185, "mat-paginator", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "All Item in Stock")("items", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](23, _c0))("active_item", "All I tems");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](24, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Form.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.selectedStatus === "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.selectedStatus === "RECEIVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSourceSecond);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsSecond);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsSecond);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoadingSecond);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](25, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__.GenWidgetsComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_22__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatNoDataRow, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitchDefault], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtc3RvY2suY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 99286:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-management/pages/Stock-Management/Pages/mainstore-items/manage-stock/manage-stock.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageStockComponent": () => (/* binding */ ManageStockComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_inventory_data_lookups_catalogue_lookup_catalogue_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-inventory/data/lookups/catalogue-lookup/catalogue-lookup.component */ 55670);
/* harmony import */ var src_app_erp_inventory_data_lookups_category_lookup_category_lookup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-inventory/data/lookups/category-lookup/category-lookup.component */ 24325);
/* harmony import */ var src_app_erp_inventory_data_lookups_mainstore_lookup_mainstore_lookup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/lookups/mainstore-lookup/mainstore-lookup.component */ 2424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_inventory_data_services_mainstore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-inventory/data/services/mainstore.service */ 14280);
/* harmony import */ var src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/erp-inventory/data/services/item-category.service */ 42053);
/* harmony import */ var src_app_erp_inventory_data_services_brancstores_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/erp-inventory/data/services/brancstores-management.service */ 4827);
/* harmony import */ var src_app_erp_inventory_data_services_stock_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/erp-inventory/data/services/stock-management.service */ 90307);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 87317);


























function ManageStockComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9)(1, "div", 32)(2, "div", 33)(3, "div", 34)(4, "div", 35)(5, "div", 9)(6, "div", 36)(7, "div", 37)(8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Posted By");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 39)(11, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 36)(14, "div", 37)(15, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Posted Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 39)(18, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 36)(22, "div", 37)(23, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Verified By");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 39)(26, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 36)(29, "div", 37)(30, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Verification Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 39)(33, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 9)(37, "div", 44)(38, "div", 45)(39, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Verifier Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 39)(42, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.formData.postedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](20, 5, ctx_r0.formData.postedTime, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.formData.verifiedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](35, 8, ctx_r0.formData.verifiedTime, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.formData.verifierRemarks, " ");
} }
function ManageStockComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The Main Store ID is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageStockComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The name of the item is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageStockComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The Item Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageStockComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The Item Quantity is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageStockComponent_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The Minimum Stock Level is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageStockComponent_mat_error_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The Automated Reorder Point is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageStockComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The Item Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageStockComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The stock keeping unit is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageStockComponent_mat_error_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The Unit of Measure is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageStockComponent_mat_error_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The RFID tag value is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageStockComponent_mat_error_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The Barcode value is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManageStockComponent_mat_error_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "The Unit cost is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["Inventory Items"]; };
class ManageStockComponent {
    //this.formData.totalCost = (this.formData.unit* this.formData.unitCost)
    constructor(fb, router, tokenStorageService, snackbar, route, MainStoreService, ItemCatManService, BranchStoreService, stockManService, dialog) {
        this.fb = fb;
        this.router = router;
        this.tokenStorageService = tokenStorageService;
        this.snackbar = snackbar;
        this.route = route;
        this.MainStoreService = MainStoreService;
        this.ItemCatManService = ItemCatManService;
        this.BranchStoreService = BranchStoreService;
        this.stockManService = stockManService;
        this.dialog = dialog;
        this.displayedColumn = ["itemId", "itemCategory", "itemName"];
        this.dataSourceTransfer = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
        this.showForm = false;
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.units = ["Kilograms", "Boxes", "Grams", "Litres", "Metres"];
        this.ageClasses = ["New", "Old", "obsolete", "refurbished"];
        this.statuses = ["Available", "Out of stock"];
        this.totalCost = 0;
        this.itemsArray = [];
        // //get the items for transfer
        // getData() {
        //   this.stockManService
        //     .getStock()
        //     .pipe(takeUntil(this.destroy$))
        //     .subscribe({
        //       next: (res) => {
        //         console.log("status:", res);
        //         if (res.statusCode == 200) {
        //           // this.data = res.entity;
        //           this.items = res.entity;
        //           this.isLoading = false;
        //           this.dataSource = new MatTableDataSource(this.data);
        //           this.dataSource.paginator = this.paginator;
        //           this.dataSource.sort = this.sort;
        //         } else {
        //           this.snackbar.showNotification("snackbar-danger", res.message);
        //         }
        //       },
        //       error: (err) => {
        //         this.snackbar.showNotification("snackbar-danger", err.message);
        //       },
        //       complete: () => { },
        //     }),
        //     Subscription;
        // }
        //***************************************************************************************************************************
        this.catalogueArray = [];
        this.itemCode = "";
        this.selectedItem = [];
        //***************************************************************************************************************************
        // Category Look up
        this.categoryArray = [];
        this.categoryId = "";
        this.selectedCategory = [];
        // Main Store Look up
        this.mainstoreArray = [];
        this.storeId = "";
        this.selectedStore = [];
        this.currentUser = this.tokenStorageService.getUser().username;
    }
    ngOnInit() {
        this.getMainStoreData();
        this.getPage();
        this.getItemCat();
        this.generateTransferForm();
        this.getBranchStores();
        // this.getData();
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
                else if (action == "Transfer") {
                    this.pageFunction = "Transfer";
                }
                this.stockId = params["id"];
                this.stockType = params["stockType"];
                if (this.stockType === "Main") {
                    this.getDataById();
                }
                else if (this.stockType === "Procurement") {
                    this.getProcurementDataById();
                }
            }
        });
    }
    // ****************************************************************************************************************************
    getDataById() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpParams().set("id", this.stockId);
        this.stockManService
            .getStockById(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                if (res.entity) {
                    this.formData = res.entity;
                    this.showForm = true;
                    this.getPage();
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
            rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription;
    }
    getProcurementDataById() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpParams().set("id", this.stockId);
        this.stockManService
            .getStockFromProcurementById(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                if (res.entity) {
                    this.formData = res.entity;
                    this.showForm = true;
                    this.getPage();
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
            rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription;
    }
    // ****************************************************************************************************************************
    getItemCat() {
        this.ItemCatManService.getItemCategories()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            if (res.statusCode == 200) {
                this.itemCategories = res.entity;
            }
        }, (err) => {
            this.snackbar.showNotification("snackbar-danger", err.message);
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
            this.calculateTotalCost();
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.hideSubmit = true;
            this.calculateTotalCost();
        }
        else if (this.pageFunction === "Transfer") {
            this.generateTransferForm();
        }
    }
    getMainStoreData() {
        this.MainStoreService.getMainStore()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            console.log("status:", res);
            if (res.statusCode == 200) {
                this.mainstores = res.entity;
                console.log("ER", res);
            }
        }, (err) => {
            this.snackbar.showNotification("snackbar-danger", err.message);
        });
    }
    // ****************************************************************************************************************************
    // gets the branchstores for transfer
    getBranchStores() {
        this.BranchStoreService.getbranchStore()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            console.log("status:", res);
            if (res.statusCode == 200) {
                this.branchstores = res.entity;
                console.log("Branchstores: ", this.branchstores);
            }
        }, (err) => {
            this.snackbar.showNotification("snackbar-danger", err.message);
        });
    }
    catalogueLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "880px";
        dialogConfig.data = {
            action: "view catalogue",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_inventory_data_lookups_catalogue_lookup_catalogue_lookup_component__WEBPACK_IMPORTED_MODULE_0__.CatalogueLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            result.data.forEach((element) => {
                this.itemCode = element.itemCode;
                this.mngForm.patchValue({
                    name: element.name,
                    itemCode: element.itemCode,
                    description: element.description,
                    minimumStockLevel: element.minimumStockLevel,
                    automatedReorderPoint: element.automatedReorderPoint,
                    quantity: element.quantity,
                    itemCategory: element.itemCategory,
                    unit: element.unit,
                    sku: element.sku,
                    // statusType: element.statusType,
                });
            });
        });
    }
    categoryLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "500px";
        dialogConfig.data = {
            // action: "view catalogue",
            selected: this.selectedCategory,
        };
        const dialogRef = this.dialog.open(src_app_erp_inventory_data_lookups_category_lookup_category_lookup_component__WEBPACK_IMPORTED_MODULE_1__.CategoryLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            result.data.forEach((element) => {
                this.categoryId = element.categoryId;
                this.mngForm.patchValue({
                    itemCategory: element.categoryName,
                });
            });
        });
    }
    mainStoreLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "500px";
        dialogConfig.data = {
            selected: this.selectedStore,
        };
        const dialogRef = this.dialog.open(src_app_erp_inventory_data_lookups_mainstore_lookup_mainstore_lookup_component__WEBPACK_IMPORTED_MODULE_2__.MainstoreLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            result.data.forEach((element) => {
                this.storeId = element.storeId;
                this.mngForm.patchValue({
                    storeId: element.storeId,
                });
            });
        });
    }
    // ****************************************************************************************************************************
    //filtering on the items selected table
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    generateTransferForm() {
        this.transferForm = this.fb.group({
            mainstoreId: [""],
            branchstoreId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            itemId: [""],
            itemName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            itemCategory: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            quantity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
        });
    }
    // ****************************************************************************************************************************
    // array of items selected
    addToArray() {
        if (this.transferForm.valid) {
            console.log("transferForm: ", this.transferForm.value);
            const newRecord = {
                itemId: this.transferForm.value.itemId,
                itemName: this.transferForm.value.itemName,
                itemCategory: this.transferForm.value.itemCategory,
                itemDescription: this.transferForm.value.itemDescription,
                quantity: this.transferForm.value.quantity,
            };
            this.dataSourceTransfer.data.push(newRecord);
            this.dataSourceTransfer.data = this.dataSource.data.slice();
            this.transferForm.reset();
        }
    }
    // ****************************************************************************************************************************
    generateForm() {
        this.mngForm = this.fb.group({
            storeId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            quantity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            itemCategory: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            unit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            unitCost: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            minimumStockLevel: [""],
            automatedReorderPoint: [""],
            barcodeValue: [""],
            rfidTagValue: [""],
            sku: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
        });
    }
    // ****************************************************************************************************************************
    // useless
    calculateTotalCost() {
        this.totalCost = 0;
        if (this.mngForm.value.quantity != null &&
            this.mngForm.value.unitCost != null) {
            this.totalCost =
                this.mngForm.value.quantity * this.mngForm.value.unitCost;
        }
    }
    // unitCost = this.mngForm.value.unitCost;
    // quantity = this.mngForm.value.quantity;
    generateFormWithData() {
        this.mngForm = this.fb.group({
            id: [this.formData.id],
            itemCode: [this.formData.itemCode],
            storeId: [this.formData.storeId],
            name: [this.formData.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            quantity: [this.formData.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            itemCategory: [this.formData.itemCategory, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            description: [this.formData.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            // statusType: [this.formData.statusType, [Validators.required]],
            unit: [this.formData.unit, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            unitCost: [this.formData.unitCost, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            //totalCost: [this.formData.totalCost, [Validators.required]],
            automatedReorderPoint: [
                this.formData.automatedReorderPoint,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            ],
            minimumStockLevel: [
                this.formData.minimumStockLevel,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            ],
            barcodeValue: [this.formData.barcodeValue],
            rfidTagValue: [this.formData.rfidTagValue],
            sku: [this.formData.sku, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
        });
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            id: [this.formData.id],
            itemCode: [this.formData.itemCode],
            storeId: [{ value: this.formData.storeId, disabled: true }],
            // itemId: [{ value: this.formData.itemId, disabled: true }],
            name: [{ value: this.formData.name, disabled: true }],
            quantity: [{ value: this.formData.quantity, disabled: true }],
            itemCategory: [{ value: this.formData.itemCategory, disabled: true }],
            description: [{ value: this.formData.description, disabled: true }],
            //    statusType: [{ value: this.formData.statusType, disabled: true }],
            unit: [{ value: this.formData.unit, disabled: true }],
            unitCost: [{ value: this.formData.unitCost, disabled: true }],
            //totalCost: [{ value: this.formData.totalCost, disabled: true }],
            automatedReorderPoint: [
                { value: this.formData.automatedReorderPoint, disabled: true },
            ],
            minimumStockLevel: [
                { value: this.formData.minimumStockLevel, disabled: true },
            ],
            barcodeValue: [{ value: this.formData.barcodeValue, disabled: true }],
            rfidTagValue: [{ value: this.formData.rfidTagValue, disabled: true }],
            sku: [{ value: this.formData.sku, disabled: true }],
        });
    }
    cancel() {
        this.router.navigate(["/erp-inventory/inventory/all-stock"]);
    }
    dateValidator(control) {
        const selectedDate = control.value;
        const today = new Date();
        if (selectedDate <= today) {
            return { pastDate: true };
        }
        return null;
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        if (this.pageFunction === "Add") {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpParams().set("storeId", this.mngForm.value.storeId);
            this.stockManService
                .addStock(params, this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                        this.router.navigate(["/erp-inventory/inventory/all-stock"]);
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
            if (this.stockType === "Main") {
                this.stockManService
                    .updateStock(this.mngForm.value)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        if (res.statusCode == 200) {
                            this.snackbar.showNotification("snackbar-success", res.message);
                            this.router.navigate(["/erp-inventory/inventory/all-stock"]);
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
            else if (this.stockType === "Procurement") {
                this.stockManService
                    .updateStockFromProcurement(this.mngForm.value)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        if (res.statusCode == 200) {
                            this.snackbar.showNotification("snackbar-success", res.message);
                            this.router.navigate(["/erp-inventory/inventory/all-stock"]);
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
}
ManageStockComponent.ɵfac = function ManageStockComponent_Factory(t) { return new (t || ManageStockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_mainstore_service__WEBPACK_IMPORTED_MODULE_5__.MainstoreService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_item_category_service__WEBPACK_IMPORTED_MODULE_6__.ItemCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_brancstores_management_service__WEBPACK_IMPORTED_MODULE_7__.BrancstoresManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_stock_management_service__WEBPACK_IMPORTED_MODULE_8__.StockManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog)); };
ManageStockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ManageStockComponent, selectors: [["app-manage-stock"]], viewQuery: function ManageStockComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.transferpaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.transferSort = _t.first);
    } }, decls: 98, vars: 22, consts: [[1, "content", "font"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix", "mt-4", "mx-4"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], ["class", "row", 4, "ngIf"], [1, "header"], [1, "row"], [1, "body"], [1, "mx-4", 3, "formGroup"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-3"], ["appearance", "outline", 1, "example-full-width", "mb-0"], ["matInput", "", "formControlName", "storeId", "readonly", "", 1, "font"], ["matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "formControlName", "name", "readonly", "", 1, "font"], ["matInput", "", "formControlName", "description", 1, "font"], ["type", "number", "matInput", "", "formControlName", "quantity", 1, "font"], ["type", "number", "matInput", "", "formControlName", "minimumStockLevel", 1, "font"], ["type", "number", "matInput", "", "formControlName", "automatedReorderPoint", 1, "font"], ["matInput", "", "formControlName", "itemCategory", 1, "font"], ["matInput", "", "formControlName", "sku", 1, "font"], ["matInput", "", "formControlName", "unit", 1, "font"], ["matInput", "", "formControlName", "rfidTagValue", 1, "font"], ["matInput", "", "formControlName", "barcodeValue", 1, "font"], ["type", "number", "matInput", "", "formControlName", "unitCost", 1, "font"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["mat-dialog-action", "", 3, "align"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "hidden", "click"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card", "bg-color"], [1, "chat"], [1, "chat-header", "clearfix"], [1, "col-lg-3", "col-md-4", "col-sm-12", "col-xs-12"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages", "mt-2"], [1, "badge", "badge-solid-blue", 2, "color", "#fff", "background-color", "#007bff"], [1, "badge", "badge-solid-pink", 2, "color", "#fff", "background-color", "#e81c62"], [1, "badge", "badge-solid-blue", 2, "color", "#fff", "background-color", "#28a745"], [1, "badge", "badge-solid-pink", 2, "color", "#fff", "background-color", "#d35400"], [1, "col-12"], [1, "chat-about", "mt-2", "remarks-container"], [1, "badge", "badge-solid-green", 2, "color", "#fff", "background-color", "#004840"]], template: function ManageStockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ManageStockComponent_div_7_Template, 44, 11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 10)(13, "form", 11)(14, "div", 9)(15, "div", 12)(16, "mat-form-field", 13)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Main Store ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageStockComponent_Template_mat_icon_click_20_listener() { return ctx.mainStoreLookUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, ManageStockComponent_mat_error_22_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 12)(24, "mat-form-field", 13)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, " Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageStockComponent_Template_mat_icon_click_28_listener() { return ctx.catalogueLookUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, ManageStockComponent_mat_error_30_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 12)(32, "mat-form-field", 13)(33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, " Item Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, ManageStockComponent_mat_error_36_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 12)(38, "mat-form-field", 13)(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, " Item Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, ManageStockComponent_mat_error_42_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 12)(44, "mat-form-field", 13)(45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Minimum Stock Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, ManageStockComponent_mat_error_48_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 12)(50, "mat-form-field", 13)(51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "Automate Re-Order Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](54, ManageStockComponent_mat_error_54_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 12)(56, "mat-form-field", 13)(57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, " Item Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](59, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](60, ManageStockComponent_mat_error_60_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 12)(62, "mat-form-field", 13)(63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "Stock Keeping Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](65, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, ManageStockComponent_mat_error_66_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 12)(68, "mat-form-field", 13)(69, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, " Unit of Measure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](72, ManageStockComponent_mat_error_72_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "div", 12)(74, "mat-form-field", 13)(75, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, " RFID Tag Value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](77, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](78, ManageStockComponent_mat_error_78_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 12)(80, "mat-form-field", 13)(81, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82, " Bar Code Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](83, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](84, ManageStockComponent_mat_error_84_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "div", 12)(86, "mat-form-field", 13)(87, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, " Unit Cost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](89, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](90, ManageStockComponent_mat_error_90_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "div", 9)(92, "div", 28)(93, "div", 29)(94, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageStockComponent_Template_button_click_94_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManageStockComponent_Template_button_click_96_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", "Manage Inventory Items")("items", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](21, _c0))("active_item", "Manage Inventory Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.pageFunction !== "Add" && ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("storeId").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("description").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("quantity").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("minimumStockLevel").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("automatedReorderPoint").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("itemCategory").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("sku").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("unit").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("rfidTagValue").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("barcodeValue").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mngForm.get("unitCost").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("align", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.mngForm.valid)("hidden", ctx.hideSubmit);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NumberValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2Utc3RvY2suY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 10178:
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-management/pages/place-requisitions/direct-main-store-requisition/direct-main-store-requisition.component.ts ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectMainStoreRequisitionComponent": () => (/* binding */ DirectMainStoreRequisitionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_inventory_data_lookups_inven_items_lookup_inven_items_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-inventory/data/lookups/inven-items-lookup/inven-items-lookup.component */ 2835);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var src_app_erp_inventory_data_services_direct_main_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-inventory/data/services/direct-main-store.service */ 97504);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_erp_inventory_data_services_mainstore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/erp-inventory/data/services/mainstore.service */ 14280);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var src_app_erp_inventory_data_services_stock_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/erp-inventory/data/services/stock-management.service */ 90307);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);





































const _c0 = ["fileInput"];
function DirectMainStoreRequisitionComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 11)(1, "div", 73)(2, "div", 74)(3, "div", 75)(4, "div", 76)(5, "div", 11)(6, "div", 77)(7, "div", 78)(8, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Posted By");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 80)(11, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 77)(14, "div", 78)(15, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Posted Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 80)(18, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 77)(22, "div", 78)(23, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "Verified By");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 80)(26, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 77)(29, "div", 78)(30, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "Verification Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 80)(33, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 11)(37, "div", 85)(38, "div", 86)(39, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, "Verifier Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 80)(42, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.formData.postedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](20, 5, ctx_r0.formData.postedTime, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.formData.verifiedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](35, 8, ctx_r0.formData.verifiedTime, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.formData.verifierRemarks, " ");
} }
function DirectMainStoreRequisitionComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Requisition Title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Requisition Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Description must not exceed 300 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Requisition Items ");
} }
function DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Item Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Unit Of Measure is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Item Quantity is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Item Quantity cannot be 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Item Quantity allows numbers only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Need by Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Enter a Valid Need by Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Item Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Item Description must not exceed 300 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_38_form_1_button_44_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_ng_container_38_form_1_button_44_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return ctx_r49.addToArray(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " + Add Item details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r47.bgtForm.invalid);
} }
function DirectMainStoreRequisitionComponent_ng_container_38_form_1_button_45_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_ng_container_38_form_1_button_45_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return ctx_r51.updateNeedDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " + Update Item details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r48.bgtForm.invalid);
} }
function DirectMainStoreRequisitionComponent_ng_container_38_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 12)(1, "div", 11)(2, "div", 89)(3, "mat-form-field", 14)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_ng_container_38_form_1_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r53.inventItemLookUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_9_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 92)(11, "mat-form-field", 14)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Unit Of Measure");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_15_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 89)(17, "mat-form-field", 14)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_21_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_22_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_23_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 89)(25, "mat-form-field", 14)(26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Need By Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "input", 95)(29, "mat-datepicker-toggle", 96)(30, "mat-datepicker", null, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_32_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_33_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 98)(35, "mat-form-field", 14)(36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "Item Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](38, "textarea", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](39, DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_39_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, DirectMainStoreRequisitionComponent_ng_container_38_form_1_mat_error_40_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, DirectMainStoreRequisitionComponent_ng_container_38_form_1_button_44_Template, 2, 1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, DirectMainStoreRequisitionComponent_ng_container_38_form_1_button_45_Template, 2, 1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_ng_container_38_form_1_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r55.clearForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](31);
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r36.bgtForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r36.bgtForm.get("itemName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r36.bgtForm.get("unitOfMeasure").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r36.bgtForm.get("quantity").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r36.bgtForm.get("quantity").hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r36.bgtForm.get("quantity").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matDatepicker", _r42)("min", ctx_r36.minDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", _r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r36.bgtForm.get("needByDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r36.bgtForm.get("needByDate").hasError("pastDate") && !ctx_r36.bgtForm.get("needByDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r36.bgtForm.get("itemDescription").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r36.bgtForm.get("itemDescription").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r36.addButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r36.editButton);
} }
function DirectMainStoreRequisitionComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DirectMainStoreRequisitionComponent_ng_container_38_form_1_Template, 48, 15, "form", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.enterManually);
} }
function DirectMainStoreRequisitionComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 105)(1, "div", 106)(2, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_div_39_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r56.downloadTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " Download Excel Template ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 100)(6, "div", 101)(7, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_div_39_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r58.clearImports(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} }
function DirectMainStoreRequisitionComponent_mat_header_cell_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_mat_cell_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 110)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r60 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", index_r60 + 1, "");
} }
function DirectMainStoreRequisitionComponent_mat_header_cell_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Item Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_mat_cell_82_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r61.itemCode, "");
} }
function DirectMainStoreRequisitionComponent_mat_cell_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DirectMainStoreRequisitionComponent_mat_cell_82_span_1_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r61.itemCode);
} }
function DirectMainStoreRequisitionComponent_mat_header_cell_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Item Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_mat_cell_85_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r64.itemName, "");
} }
function DirectMainStoreRequisitionComponent_mat_cell_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DirectMainStoreRequisitionComponent_mat_cell_85_span_1_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r64.itemName);
} }
function DirectMainStoreRequisitionComponent_mat_header_cell_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_mat_cell_88_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r67.quantity, "");
} }
function DirectMainStoreRequisitionComponent_mat_cell_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DirectMainStoreRequisitionComponent_mat_cell_88_span_1_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r67.quantity);
} }
function DirectMainStoreRequisitionComponent_mat_header_cell_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Unit Of Measure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_mat_cell_91_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r70.unitOfMeasure, "");
} }
function DirectMainStoreRequisitionComponent_mat_cell_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DirectMainStoreRequisitionComponent_mat_cell_91_span_1_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r70.unitOfMeasure);
} }
function DirectMainStoreRequisitionComponent_mat_header_cell_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Need By Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_mat_cell_94_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, row_r73.needByDate, "short"), "");
} }
function DirectMainStoreRequisitionComponent_mat_cell_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DirectMainStoreRequisitionComponent_mat_cell_94_span_1_Template, 3, 4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r73.needByDate);
} }
function DirectMainStoreRequisitionComponent_mat_header_cell_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Item Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_mat_cell_97_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r76.itemDescription, "");
} }
function DirectMainStoreRequisitionComponent_mat_cell_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DirectMainStoreRequisitionComponent_mat_cell_97_span_1_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r76.itemDescription);
} }
function DirectMainStoreRequisitionComponent_mat_header_cell_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_mat_cell_100_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "\u00A0 Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_mat_cell_100_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "\u00A0 No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_mat_cell_100_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00A0 ", "-", " ");
} }
function DirectMainStoreRequisitionComponent_mat_cell_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_mat_cell_100_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](1, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DirectMainStoreRequisitionComponent_mat_cell_100_button_2_Template, 3, 0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, DirectMainStoreRequisitionComponent_mat_cell_100_button_3_Template, 3, 0, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, DirectMainStoreRequisitionComponent_mat_cell_100_button_4_Template, 3, 1, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitch", row_r79.available);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", "N");
} }
function DirectMainStoreRequisitionComponent_mat_header_cell_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_mat_cell_103_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 126)(1, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_mat_cell_103_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r88); const row_r85 = restoredCtx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r87.onEditNeedDetails(row_r85); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-feather-icons", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_mat_cell_103_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r88); const i_r86 = restoredCtx.index; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r89.onDeleteNeedDetails(i_r86); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-feather-icons", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r27.disableActions)("hidden", ctx_r27.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r27.disableActions)("hidden", ctx_r27.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "trash-2");
} }
function DirectMainStoreRequisitionComponent_mat_header_row_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-header-row");
} }
function DirectMainStoreRequisitionComponent_mat_row_105_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-row", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_mat_row_105_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r93); const row_r90 = restoredCtx.$implicit; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r92.onEditNeedDetails(row_r90); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("cursor", "pointer");
} }
function DirectMainStoreRequisitionComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-spinner", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("diameter", 40);
} }
function DirectMainStoreRequisitionComponent_ng_template_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Upload Requisition Attachments ");
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_header_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r114 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", index_r114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", index_r114 + 1, " ");
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_header_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "File Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 157)(1, "mat-form-field", 158)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "File Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r116 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", index_r116);
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_header_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "File Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 157)(1, "mat-form-field", 158)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "File Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r118 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", index_r118);
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_header_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_38_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 162)(1, "input", 163, 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_38_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r123); const row_r119 = restoredCtx.$implicit; const index_r120 = restoredCtx.index; const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r122.onSelectFile(_r121.files, row_r119, index_r120); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r120 = ctx.index;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", index_r120);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 3, ctx_r104.isLoading))("multiple", "multiple");
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_header_cell_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_41_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 166)(1, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_41_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_41_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r128); const row_r124 = restoredCtx.$implicit; const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r127.downloadDocument(row_r124); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-icon", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_header_cell_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_44_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 166)(1, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_44_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_44_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r133); const row_r129 = restoredCtx.$implicit; const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r132.deleteCall(row_r129); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-feather-icons", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "trash-2");
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_header_row_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-header-row");
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_row_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-row", 171);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("cursor", "pointer");
} }
function DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r111.input.value, "\"");
} }
function DirectMainStoreRequisitionComponent_ng_container_110_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-spinner", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("diameter", 40);
} }
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
function DirectMainStoreRequisitionComponent_ng_container_110_Template(rf, ctx) { if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "form", 132)(2, "div", 133)(3, "div", 134)(4, "div", 23)(5, "div", 11)(6, "div", 24)(7, "ul", 25)(8, "li", 26)(9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Upload Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "li", 27)(12, "label", 28)(13, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function DirectMainStoreRequisitionComponent_ng_container_110_Template_input_keyup_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r137); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r136.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "li")(18, "div", 135)(19, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_ng_container_110_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r137); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r138.addFileRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "mat-table", 137, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](27, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, DirectMainStoreRequisitionComponent_ng_container_110_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_29_Template, 2, 2, "mat-cell", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](30, 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, DirectMainStoreRequisitionComponent_ng_container_110_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_32_Template, 5, 1, "mat-cell", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](33, 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, DirectMainStoreRequisitionComponent_ng_container_110_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_35_Template, 5, 1, "mat-cell", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](36, 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, DirectMainStoreRequisitionComponent_ng_container_110_mat_header_cell_37_Template, 2, 0, "mat-header-cell", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_38_Template, 4, 5, "mat-cell", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](39, 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, DirectMainStoreRequisitionComponent_ng_container_110_mat_header_cell_40_Template, 2, 0, "mat-header-cell", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](41, DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_41_Template, 4, 0, "mat-cell", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](42, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, DirectMainStoreRequisitionComponent_ng_container_110_mat_header_cell_43_Template, 2, 0, "mat-header-cell", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_44_Template, 3, 3, "mat-cell", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, DirectMainStoreRequisitionComponent_ng_container_110_mat_header_row_45_Template, 1, 0, "mat-header-row", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](46, DirectMainStoreRequisitionComponent_ng_container_110_mat_row_46_Template, 1, 2, "mat-row", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](47, DirectMainStoreRequisitionComponent_ng_container_110_mat_cell_47_Template, 2, 1, "mat-cell", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](48, DirectMainStoreRequisitionComponent_ng_container_110_div_48_Template, 2, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](49, "mat-paginator", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r32.documentsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx_r32.attachementsDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx_r32.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx_r32.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r32.isFileDataLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](7, _c1));
} }
function DirectMainStoreRequisitionComponent_ng_container_118_Template(rf, ctx) { if (rf & 1) {
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_ng_container_118_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r140); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r139.onValidate("HOD"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "done_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " HOD Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r33.formData.approvedByHOD);
} }
function DirectMainStoreRequisitionComponent_ng_container_119_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_ng_container_119_ng_container_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r143); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r142.onReceive(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r141.pageFunction, " Requisition ");
} }
function DirectMainStoreRequisitionComponent_ng_container_119_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_ng_container_119_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r145); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r144.onDispatch(ctx_r144.mngForm.value.requisitionCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "emoji_transportation");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, DirectMainStoreRequisitionComponent_ng_container_119_ng_container_5_Template, 4, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r34.pageFunction, " Requisition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r34.hideReceive);
} }
function DirectMainStoreRequisitionComponent_button_120_Template(rf, ctx) { if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_button_120_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r147); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r146.performStockAvailabilityCheck(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "compare_arrows");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Check Stock Availability ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r35.mngForm.valid || ctx_r35.dataSource.data.length === 0)("hidden", ctx_r35.hideSubmit);
} }
const _c2 = function () { return ["Requisitions"]; };
class DirectMainStoreRequisitionComponent {
    constructor(fb, filesService, directMainStoreService, snackbar, router, route, accessControlService, dialog, tokenCookieService, mainStoreManService, dateAdapter, stockManagementService, tokenStorageService) {
        this.fb = fb;
        this.filesService = filesService;
        this.directMainStoreService = directMainStoreService;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.accessControlService = accessControlService;
        this.dialog = dialog;
        this.tokenCookieService = tokenCookieService;
        this.mainStoreManService = mainStoreManService;
        this.dateAdapter = dateAdapter;
        this.stockManagementService = stockManagementService;
        this.tokenStorageService = tokenStorageService;
        this.showForm = false;
        this.isLoading = true;
        this.pageFunction = "Add";
        this.displayedColumns = [
            "id",
            "itemCode",
            "itemName",
            "itemDescription",
            "unitOfMeasure",
            "quantity",
            "needByDate",
            "available",
            "action",
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource([]);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.hideApprovals = true;
        this.hideDispatch = true;
        this.hideReceive = true;
        this.hideBgtButtons = false;
        this.approvalVisible = false;
        this.disableActions = false;
        this.pageAction = "Add";
        this.enterManually = true;
        this.items = []; // Array to store
        this.itemErrors = [];
        this.templateFilename = "requisitionItemsTemplate.xlsx";
        this.editButton = false;
        this.addButton = true;
        this.selectedRowIndex = -1; // Track the index of the selected row
        //*************************************************************************************************************************************** */
        //inventory items look up
        this.inventItemArray = [];
        this.itemCode = "";
        this.selectedInventItems = [];
        // **************************************************************************************************
        //UploadDocuments
        this.attachementsDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject([]);
        this.displayColumns = [
            "id",
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
        this.isFileLoading = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
        // **************************************************************************************************
        //Showing the submit button
        this.placeRequestValid = true;
        this.stockAvailabilityPassed = false;
        this.minDate = this.dateAdapter.today();
        this.currentUserCode = this.tokenStorageService.getUser().empPfNo;
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    ngOnInit() {
        this.minDate.setDate(this.minDate.getDate() + 1);
        this.getPage();
        // this.getcostCenter();
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
                this.id = params["id"];
                this.getDataById();
            }
        });
    }
    getDataById() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpParams().set("id", this.id);
        this.directMainStoreService
            .getInternalRequisitionsById(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res :", res);
                if (res.entity) {
                    this.formData = res.entity;
                    if (this.formData.requisitionAttachments > 0) {
                        this.isFileDataLoading = false;
                        this.formData.requisitionAttachments.forEach((element) => {
                            const newRow = this.fb.group({
                                file: [element.file],
                                fileName: [element.filename],
                                fileType: [element.filetype],
                            });
                            this.rows.push(newRow);
                        });
                        this.updateView();
                    }
                    this.showForm = true;
                    this.getPage();
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
    getPage() {
        if (this.pageFunction === "Add") {
            this.generateEmptyForm();
            this.generateNeedForm();
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "Update") {
            this.generateFormWithData();
            this.generateNeedForm();
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.generateDisabledNeedForm();
            this.hideSubmit = true;
            this.hideApprovals = true;
        }
    }
    generateEmptyForm() {
        this.mngForm = this.fb.group({
            empPf: [this.currentUserCode],
            branchCode: [""],
            requisitionTitle: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            requisitionDescription: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.maxLength(300)],
            ],
            items: [[]],
            requisitionAttachments: [[]],
        });
    }
    generateFormWithData() {
        this.mngForm = this.fb.group({
            id: [this.formData.id],
            empPf: [this.formData.empPf],
            requisitionCode: [this.formData.requisitionCode],
            requisitionTitle: [this.formData.requisitionTitle, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            requisitionDescription: [
                this.formData.requisitionDescription,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.maxLength(300)],
            ],
            items: [this.formData.items],
            requisitionAttachments: [this.formData.requisitionAttachments],
        });
        this.dataSource.data = this.formData.items;
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            requisitionCode: [this.formData.requisitionCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            requisitionTitle: [this.formData.requisitionTitle, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            requisitionDescription: [
                this.formData.requisitionDescription,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
            ],
            items: [this.formData.items],
            requisitionAttachments: [this.formData.requisitionAttachments],
        });
    }
    generateDisabledNeedForm() {
        this.bgtForm = this.fb.group({
            itemName: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            quantity: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            itemDescription: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            unitOfMeasure: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            needByDate: [{ value: "", disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
        });
    }
    getNeedPeriod(event) {
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
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_19__.read(arrayBuffer, { type: "array" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = xlsx__WEBPACK_IMPORTED_MODULE_19__.utils.sheet_to_json(worksheet, { raw: true });
                this.items = jsonData;
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
                itemName: [{ value: item.itemName }, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
                quantity: [{ value: item.quantity }, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
                itemDescription: [
                    { value: item.itemDescription },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
                ],
                unitOfMeasure: [{ value: item.unitOfMeasure }, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
                // automatedReorderPoint: [{ value: item.automatedReorderPoint }],
                // minimumStockLevel: [{ value: item.minimumStockLevel }],
                needByDate: [{ value: item.needByDate }, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            });
            itemsFormArray.push(formGroup); // Use push method on the FormArray variable
            this.collectErrors(formGroup);
            if (formGroup.valid) {
                // Rest of the code remains the same
                this.bgtForm.patchValue({
                    itemName: item.itemName,
                    quantity: item.quantity,
                    itemDescription: item.itemDescription,
                    unitOfMeasure: item.unitOfMeasure,
                    // automatedReorderPoint: item.automatedReorderPoint,
                    // minimumStockLevel: item.minimumStockLevel,
                    needByDate: item.needByDate,
                });
                // Rest of the code remains the same
                this.dataSource.data.push(this.bgtForm.value);
                this.dataSource.data = this.dataSource.data.slice();
                this.bgtForm.reset();
            }
        }
    }
    collectErrors(control, path = "") {
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroup) {
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
    clearImports() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.patchItems();
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
    //************************************************************************************************************************************ */
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    generateNeedForm() {
        this.bgtForm = this.fb.group({
            id: [""],
            itemCode: [""],
            itemName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            quantity: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.min(0.01),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern("^[0-9]+(\\.[0-9]{1,2})?$"),
                ],
            ],
            itemDescription: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.maxLength(300)]],
            unitOfMeasure: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            // automatedReorderPoint: ["", [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
            // minimumStockLevel: ["", [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
            needByDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, this.dateValidator]],
            available: [""],
        });
        console.log("asked for me: ", this.itemQuantity);
    }
    dateValidator(control) {
        const selectedDate = control.value;
        const today = new Date();
        if (selectedDate < today) {
            return { pastDate: true };
        }
        return null;
    }
    inventItemLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "600px";
        dialogConfig.data = {
            selected: this.selectedInventItems,
        };
        const dialogRef = this.dialog.open(src_app_erp_inventory_data_lookups_inven_items_lookup_inven_items_lookup_component__WEBPACK_IMPORTED_MODULE_0__.InvenItemsLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("InventItems: ", this.selectedInventItems);
            result.data.forEach((element) => {
                this.itemCode = element.itemCode;
                this.itemQuantity = element.quantity;
                this.bgtForm.patchValue({
                    // id: element.id,
                    itemCode: element.itemCode,
                    itemName: element.name,
                    itemDescription: element.description,
                    unitOfMeasure: element.unit,
                });
            });
        });
    }
    //*************************************************************************************************************************************** */
    addToArray() {
        if (this.bgtForm.value.quantity > this.itemQuantity) {
            this.snackbar.showNotification("snack-danger", "The requested quantity is more than the available quantity (" +
                this.itemQuantity +
                ")");
        }
        else {
            if (this.bgtForm.valid) {
                console.log("this.bgtForm: ", this.bgtForm.value);
                const newRecord = {
                    itemCode: this.bgtForm.value.itemCode,
                    itemName: this.bgtForm.value.itemName,
                    itemDescription: this.bgtForm.value.itemDescription,
                    unitOfMeasure: this.bgtForm.value.unitOfMeasure,
                    quantity: this.bgtForm.value.quantity,
                    // automatedReorderPoint: this.bgtForm.value.automatedReorderPoint,
                    // minimumStockLevel: this.bgtForm.value.minimumStockLevel,
                    needByDate: this.bgtForm.value.needByDate,
                    available: this.bgtForm.value.available,
                };
                this.dataSource.data.push(newRecord);
                this.dataSource.data = this.dataSource.data.slice();
                this.bgtForm.reset();
                this.patchItems();
            }
        }
    }
    updateNeedDetails() {
        if (this.bgtForm.valid) {
            console.log("this.bgtForm: ", this.bgtForm.value);
            const updatedRecord = {
                id: this.bgtForm.value.id,
                itemName: this.bgtForm.value.itemName,
                itemCode: this.bgtForm.value.itemCode,
                itemDescription: this.bgtForm.value.itemDescription,
                unitOfMeasure: this.bgtForm.value.unitOfMeasure,
                quantity: this.bgtForm.value.quantity,
                // automatedReorderPoint: this.bgtForm.value.automatedReorderPoint,
                // minimumStockLevel: this.bgtForm.value.minimumStockLevel,
                needByDate: this.bgtForm.value.needByDate,
                available: this.bgtForm.value.available,
            };
            this.dataSource.data[this.selectedRowIndex] = updatedRecord;
            this.dataSource.data = this.dataSource.data.slice();
            this.bgtForm.reset();
            this.editButton = false;
            this.addButton = true;
            this.selectedRowIndex = -1; // Reset the selected row index
        }
    }
    onEditNeedDetails(row) {
        this.editButton = true;
        this.addButton = false;
        this.selectedRowIndex = this.dataSource.data.indexOf(row);
        this.bgtForm.patchValue({
            id: row.id,
            itemName: row.itemName,
            itemCode: row.itemCode,
            itemDescription: row.itemDescription,
            unitOfMeasure: row.unitOfMeasure,
            quantity: row.quantity,
            // automatedReorderPoint: row.quantity,
            // minimumStockLevel: row.quantity,
            needByDate: row.needByDate,
            available: row.available,
        });
        this.enterManually = true;
        this.patchItems();
    }
    onDeleteNeedDetails(index) {
        this.dataSource.data.splice(index, 1);
        this.dataSource.data = this.dataSource.data.slice();
    }
    clearForm() {
        this.bgtForm.reset();
        this.editButton = false;
        this.addButton = true;
        this.selectedRowIndex = -1; // Reset the selected row index
    }
    patchItems() {
        this.mngForm.patchValue({
            items: this.dataSource.data,
        });
        console.log("this.mngForm.items.value", this.mngForm.value);
    }
    createFileForm() {
        this.fileForm = this.fb.group({
            files: this.fb.array([]),
        });
        this.addFileRow();
    }
    // file: trerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrtysdfxzdgjr634racxzvcnfgerewrsa,
    // filename: currFilename,
    // filetype: currFiletype},
    addFileRow() {
        this.isFileDataLoading = false;
        const row = this.fb.group({
            file: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
            filetype: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
            filename: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
        });
        //this.fileInputs.push(row);
        this.rows.push(row);
        this.attachementsDataSource.next(this.rows.controls);
    }
    updateView() {
        this.attachementsDataSource.next(this.rows.controls);
        this.mngForm.patchValue({
            requisitionAttachments: this.documentsForm.value.filedetails,
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
                this.currFilename = name;
                this.currType = extension;
                this.rows.at(index).patchValue({
                    file: this.currFile,
                    filename: this.currFilename,
                    filetype: this.currType,
                });
                console.log("this.documentsForm.value.filedetails: ", this.selectedFiles);
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
    sizeValidation() {
        this.length = this.mngForm.value.needItems.length;
        if (this.length >= 1) {
            this.placeRequestValid = false;
        }
    }
    onSubmit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        console.log("branchCode: ", this.currentBranch);
        // if (
        //   this.mngForm.value.items &&
        //   this.mngForm.value.items.length > 0
        // ) {
        //   if (this.pageFunction == "Add") {
        //     console.log("Req: ", this.currentBranch);
        //     this.directMainStoreService
        //       .addInternalRequisition(this.mngForm.value)
        //       .pipe(takeUntil(this.destroy$))
        //       .subscribe({
        //         next: (res) => {
        //           console.log("res: ", res);
        //           if (res.statusCode == 201) {
        //             this.snackbar.showNotification("snackbar-success", res.message);
        //             this.router.navigate([
        //               "/erp-inventory/inventory/view-user-direct-requisition",
        //             ]);
        //           } else {
        //             this.snackbar.showNotification("snackbar-danger", res.message);
        //           }
        //         },
        //         error: (err) => {
        //           this.snackbar.showNotification("snackbar-danger", err.message);
        //         },
        //         complete: () => { },
        //       }),
        //       Subscription;
        //   } else if (this.pageFunction == "Update") {
        //     console.log("Update Value: ", this.mngForm.value);
        //     this.directMainStoreService
        //       .updateInternalRequisitions(this.mngForm.value)
        //       .pipe(takeUntil(this.destroy$))
        //       .subscribe({
        //         next: (res) => {
        //           if (res.statusCode == 200) {
        //             this.snackbar.showNotification("snackbar-success", res.message);
        //             this.router.navigate([
        //               "/erp-inventory/inventory/view-user-direct-requisition",
        //             ]);
        //           } else {
        //             this.snackbar.showNotification("snackbar-danger", res.message);
        //           }
        //         },
        //         error: (err) => {
        //           this.snackbar.showNotification("snackbar-danger", err.message);
        //         },
        //         complete: () => { },
        //       }),
        //       Subscription;
        //   }
        // } else {
        //   this.snackbar.showNotification(
        //     "snackbar-danger",
        //     "Requisition Items cannot be null!!"
        //   );
        // }
    }
    cancel() {
        this.router.navigate([
            "/erp-inventory/inventory/view-user-direct-requisition",
        ]);
    }
    // **********************************************************************************************************************************************************
    // Stock Availability Check:
    // **************************************************************************************************** */
    performStockAvailabilityCheck() {
        console.log("this.dataSource.data: ", this.dataSource.data);
        if (this.dataSource.data.length > 0) {
            // Transform the data to match the API format
            const transformedData = this.dataSource.data.map((item) => ({
                available: item.available,
                itemCode: item.itemCode,
                quantity: item.quantity,
            }));
            console.log("transformedData:: ", transformedData);
            this.stockManagementService
                .checkStockAvailability(transformedData)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.entity) {
                        this.dataSource.data.forEach((item, index) => {
                            // Assuming res.entity has the same structure as the sample response
                            if (res.entity[index]) {
                                item.available = res.entity[index].available;
                            }
                        });
                        this.dataSource.data = this.dataSource.data.slice();
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
                    this.updateOverallStockAvailabilityStatus();
                },
            });
        }
        else {
            this.snackbar.showNotification("snackbar-danger", "Please enter the required data to perform the Stock Availability check.");
        }
    }
    updateOverallStockAvailabilityStatus() {
        let stockAvailabilityPassed = false;
        for (const item of this.dataSource.data) {
            if (item.available === "N") {
                stockAvailabilityPassed = false;
                this.snackbar.showNotification("snackbar-danger", "Some records do not meet Stock Availability!");
                break;
            }
            if (item.available === "Y") {
                stockAvailabilityPassed = true;
            }
        }
        this.stockAvailabilityPassed = stockAvailabilityPassed;
        if (stockAvailabilityPassed) {
            this.snackbar.showNotification("snackbar-success", "Stock Availability allocations met!");
        }
    }
}
DirectMainStoreRequisitionComponent.ɵfac = function DirectMainStoreRequisitionComponent_Factory(t) { return new (t || DirectMainStoreRequisitionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_1__.FilesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_direct_main_store_service__WEBPACK_IMPORTED_MODULE_2__.DirectMainStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_4__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_5__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_mainstore_service__WEBPACK_IMPORTED_MODULE_6__.MainstoreService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_22__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_stock_management_service__WEBPACK_IMPORTED_MODULE_7__.StockManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_8__.TokenStorageService)); };
DirectMainStoreRequisitionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: DirectMainStoreRequisitionComponent, selectors: [["app-direct-main-store-requisition"]], viewQuery: function DirectMainStoreRequisitionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 125, vars: 23, consts: [[1, "content", "font"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card", "mat-elevation-x5"], [1, "mb-3"], [1, "body"], ["class", "row", 4, "ngIf"], [1, "header"], [1, "row"], [1, "mx-4", 3, "formGroup"], [1, "col-xl-3", "col-lg-2", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width", "mb-0"], ["matInput", "", "formControlName", "requisitionTitle", "required", ""], [4, "ngIf"], [1, "col-xl-9", "col-lg-8", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "requisitionDescription", "required", ""], ["mat-tab-label", ""], [1, "mt-3"], ["class", "row mx-2", 4, "ngIf"], [1, "mx-4", "my-4"], [1, "materialTableHeader", "bg-table-header", "font"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "REFRESH", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-28 start-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "psl-3 tbl-col-width-per-28", 4, "matCellDef"], ["matColumnDef", "itemCode"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-28 mid-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-28", 4, "matCellDef"], ["matColumnDef", "itemName"], ["matColumnDef", "quantity"], ["matColumnDef", "unitOfMeasure"], ["matColumnDef", "needByDate"], ["matColumnDef", "itemDescription"], ["matColumnDef", "available"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 3, "click", 4, "matCellDef"], ["matColumnDef", "action"], ["class", "pr-0 end-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], [1, "row", "m-t-25"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["align", "end", 1, "example-button-row"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["class", "btn-space", "mat-raised-button", "", "color", "primary", 3, "disabled", "hidden", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "hidden", "click"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card", "bg-color"], [1, "chat"], [1, "chat-header", "clearfix"], [1, "col-lg-3", "col-md-4", "col-sm-12", "col-xs-12"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages", "mt-2"], [1, "badge", "badge-solid-blue", 2, "color", "#fff", "background-color", "#007bff"], [1, "badge", "badge-solid-pink", 2, "color", "#fff", "background-color", "#e81c62"], [1, "badge", "badge-solid-blue", 2, "color", "#fff", "background-color", "#28a745"], [1, "badge", "badge-solid-pink", 2, "color", "#fff", "background-color", "#d35400"], [1, "col-12"], [1, "chat-about", "mt-2", "remarks-container"], [1, "badge", "badge-solid-green", 2, "color", "#fff", "background-color", "#004840"], ["class", "mx-4", 3, "formGroup", 4, "ngIf"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "itemName", "readonly", ""], ["matSuffix", "", 3, "click"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12", "mb-"], ["matInput", "", "formControlName", "unitOfMeasure"], ["matInput", "", "formControlName", "quantity"], ["matInput", "", "formControlName", "needByDate", "required", "", 3, "matDatepicker", "min"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "itemDescription"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1", "float-left"], [1, "float-right"], ["class", "btn-space", "mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], [1, "row", "mx-2"], [1, "my-3"], [1, "download-button", 3, "click"], [1, "fa", "fa-download"], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-28", "start-col", "mat-elevation-z0"], [1, "psl-3", "tbl-col-width-per-28"], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-28", "mid-col", "mat-elevation-z0"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-28"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-question-circle"], [1, "pr-0", "end-col", "mat-elevation-z0"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "disabled", "hidden", "click"], [3, "icon"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], [3, "formGroup"], [2, "margin", "20px"], [1, "table-responsive"], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["matTableExporter", "", "formArrayName", "filedetails", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-6 start-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-6", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "filename"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-50 filename-cell mid-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-50 filename-cell", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "filetype"], ["matColumnDef", "selectFile"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-50 selectfile-cell mid-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-50 selectfile-cell", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "download"], ["class", "column-nowrap psl-3 tbl-col-width-per-30 mid-col mat-elevation-z0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-30", 4, "matCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-30 end-col mat-elevation-z0", 4, "matHeaderCellDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-6", "start-col", "mat-elevation-z0"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-6", 3, "formGroupName"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "filename-cell", "mid-col", "mat-elevation-z0"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "filename-cell", 3, "formGroupName"], ["appearance", "fill", 1, "example-full-width", "mt-2", "mr-5"], ["matInput", "", "type", "text", "formControlName", "filename", "placeholder", "File name", "maxlength", "50"], ["matInput", "", "type", "text", "formControlName", "filetype", "placeholder", "File type", "maxlength", "50"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "selectfile-cell", "mid-col", "mat-elevation-z0"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-50", "selectfile-cell", 3, "formGroupName"], ["type", "file", 3, "disabled", "multiple", "change"], ["file", ""], [1, "column-nowrap", "psl-3", "tbl-col-width-per-30", "mid-col", "mat-elevation-z0"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-30"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["aria-label", "Download"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-30", "end-col", "mat-elevation-z0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matRipple", ""], ["colspan", "4"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "click"], [1, "material-icons"]], template: function DirectMainStoreRequisitionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, DirectMainStoreRequisitionComponent_div_9_Template, 44, 11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "form", 12)(15, "div", 11)(16, "div", 13)(17, "mat-form-field", 14)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Main Store Requisition Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, DirectMainStoreRequisitionComponent_mat_error_21_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 17)(23, "mat-form-field", 14)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Main Store Requisition Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, DirectMainStoreRequisitionComponent_mat_error_27_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, DirectMainStoreRequisitionComponent_mat_error_28_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "mat-tab-group")(31, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, DirectMainStoreRequisitionComponent_ng_template_32_Template, 3, 0, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "div", 20)(34, "div", 10)(35, "div", 11)(36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "Requisition Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, DirectMainStoreRequisitionComponent_ng_container_38_Template, 2, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](39, DirectMainStoreRequisitionComponent_div_39_Template, 9, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 22)(42, "div", 23)(43, "div", 11)(44, "div", 24)(45, "ul", 25)(46, "li", 26)(47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "Requisition Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "li", 27)(50, "label", 28)(51, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function DirectMainStoreRequisitionComponent_Template_input_keyup_53_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "li")(56, "div", 32)(57, "button", 33)(58, "mat-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "div", 35)(61, "ul", 36)(62, "li")(63, "div", 37)(64, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_Template_img_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r148); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](76); return _r9.exportTable("xlsx", { fileName: "Requisition-items-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "li")(66, "div", 39)(67, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_Template_img_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r148); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](76); return _r9.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "li")(69, "div", 41)(70, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_Template_img_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r148); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](76); return _r9.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "li")(72, "div", 43)(73, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_Template_img_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r148); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](76); return _r9.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "mat-table", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](77, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, DirectMainStoreRequisitionComponent_mat_header_cell_78_Template, 2, 0, "mat-header-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](79, DirectMainStoreRequisitionComponent_mat_cell_79_Template, 3, 1, "mat-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](80, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](81, DirectMainStoreRequisitionComponent_mat_header_cell_81_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](82, DirectMainStoreRequisitionComponent_mat_cell_82_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](83, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](84, DirectMainStoreRequisitionComponent_mat_header_cell_84_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](85, DirectMainStoreRequisitionComponent_mat_cell_85_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](86, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](87, DirectMainStoreRequisitionComponent_mat_header_cell_87_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](88, DirectMainStoreRequisitionComponent_mat_cell_88_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](89, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](90, DirectMainStoreRequisitionComponent_mat_header_cell_90_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](91, DirectMainStoreRequisitionComponent_mat_cell_91_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](92, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](93, DirectMainStoreRequisitionComponent_mat_header_cell_93_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](94, DirectMainStoreRequisitionComponent_mat_cell_94_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](95, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](96, DirectMainStoreRequisitionComponent_mat_header_cell_96_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](97, DirectMainStoreRequisitionComponent_mat_cell_97_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](98, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](99, DirectMainStoreRequisitionComponent_mat_header_cell_99_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](100, DirectMainStoreRequisitionComponent_mat_cell_100_Template, 5, 3, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](101, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](102, DirectMainStoreRequisitionComponent_mat_header_cell_102_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](103, DirectMainStoreRequisitionComponent_mat_cell_103_Template, 5, 10, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](104, DirectMainStoreRequisitionComponent_mat_header_row_104_Template, 1, 0, "mat-header-row", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](105, DirectMainStoreRequisitionComponent_mat_row_105_Template, 1, 2, "mat-row", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](106, DirectMainStoreRequisitionComponent_div_106_Template, 2, 1, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](108, DirectMainStoreRequisitionComponent_ng_template_108_Template, 3, 0, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](110, DirectMainStoreRequisitionComponent_ng_container_110_Template, 50, 8, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "div", 67)(112, "div", 68)(113, "div", 69)(114, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_Template_button_click_114_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](116, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](117, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](118, DirectMainStoreRequisitionComponent_ng_container_118_Template, 5, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](119, DirectMainStoreRequisitionComponent_ng_container_119_Template, 6, 2, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, DirectMainStoreRequisitionComponent_button_120_Template, 4, 2, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DirectMainStoreRequisitionComponent_Template_button_click_121_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](123, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Main Store Requisition")("items", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](22, _c2))("active_item", "Manage Requisitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.pageFunction !== "Add" && ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Requisition");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.mngForm.get("requisitionTitle").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.mngForm.get("requisitionDescription").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.mngForm.get("requisitionDescription").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.hideBgtButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.enterManually);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.hideBgtButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.hideApprovals);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.hideDispatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.pageFunction === "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.mngForm.valid || ctx.dataSource.data.length === 0 || !ctx.stockAvailabilityPassed)("hidden", ctx.hideSubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.pageFunction, " Requisition ");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatError, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__.MatTabLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_33__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_10__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__.MatProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.MaxLengthValidator, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXJlY3QtbWFpbi1zdG9yZS1yZXF1aXNpdGlvbi5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 95411:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-management/pages/view-requisitions/view-direct-mainstore-requisitions/view-direct-mainstore-requisitions.component.ts ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDirectMainstoreRequisitionsComponent": () => (/* binding */ ViewDirectMainstoreRequisitionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_erp_inventory_data_lookups_branchstore_lookup_branchstore_lookup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-inventory/data/lookups/branchstore-lookup/branchstore-lookup.component */ 6191);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _view_req_items_dialog_view_req_items_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-req-items-dialog/view-req-items-dialog.component */ 21965);
/* harmony import */ var src_app_erp_finance_modules_finance_management_transactions_dialogs_accounting_journal_transactions_accounting_journal_transactions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-finance/modules/finance-management/transactions/dialogs/accounting-journal-transactions/accounting-journal-transactions.component */ 46322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_procurement_data_services_rfps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-procurement/data/services/rfps.service */ 98213);
/* harmony import */ var src_app_erp_inventory_data_services_stock_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/erp-inventory/data/services/stock-management.service */ 90307);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_erp_inventory_data_services_direct_main_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/erp-inventory/data/services/direct-main-store.service */ 97504);
/* harmony import */ var src_app_erp_finance_data_services_transactions_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/erp-finance/data/services/transactions.service */ 45441);
/* harmony import */ var src_app_erp_procurement_data_services_requisition_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/erp-procurement/data/services/requisition.service */ 3207);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../dashboard/pages/gen-widgets/gen-widgets.component */ 48632);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);








































function ViewDirectMainstoreRequisitionsComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, " All Internal Requisitions ");
} }
function ViewDirectMainstoreRequisitionsComponent_li_40_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "li")(1, "div", 66)(2, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_li_40_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r44.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} }
function ViewDirectMainstoreRequisitionsComponent_li_41_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "li")(1, "div", 68)(2, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_li_41_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r46.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} }
function ViewDirectMainstoreRequisitionsComponent_li_42_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "li")(1, "div", 70)(2, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_li_42_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r48.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} }
function ViewDirectMainstoreRequisitionsComponent_div_80_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "li")(1, "div", 73)(2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_div_80_li_8_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r53.accountingCheckboxActive("Add"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} }
function ViewDirectMainstoreRequisitionsComponent_div_80_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "li")(1, "div", 74)(2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_div_80_li_9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r55.accountingCheckboxActive("Update"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} }
function ViewDirectMainstoreRequisitionsComponent_div_80_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "li")(1, "div", 74)(2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_div_80_li_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r57.accountingCheckboxActive("View"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} }
function ViewDirectMainstoreRequisitionsComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 36)(1, "div", 12)(2, "div", 72)(3, "ul", 14)(4, "li", 15)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "Accounting Actions: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, ViewDirectMainstoreRequisitionsComponent_div_80_li_8_Template, 5, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, ViewDirectMainstoreRequisitionsComponent_div_80_li_9_Template, 5, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, ViewDirectMainstoreRequisitionsComponent_div_80_li_10_Template, 5, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r5.selection.selected.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r5.selection.selected.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r5.selection.selected.length > 0);
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_85_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 75)(1, "mat-checkbox", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_85_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return $event ? ctx_r59.masterToggle() : null; })("change", function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_85_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r60); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r61.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("checked", ctx_r8.selection.hasValue() && ctx_r8.isAllSelected())("indeterminate", ctx_r8.selection.hasValue() && !ctx_r8.isAllSelected())("ngClass", "tbl-checkbox");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_86_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 75)(1, "mat-checkbox", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_86_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function ViewDirectMainstoreRequisitionsComponent_mat_cell_86_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r65); const row_r62 = restoredCtx.$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return $event ? ctx_r64.selection.toggle(row_r62) : null; })("change", function ViewDirectMainstoreRequisitionsComponent_mat_cell_86_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r66.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r62 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("checked", ctx_r9.selection.isSelected(row_r62))("ngClass", "tbl-checkbox")("aria-label", ctx_r9.checkboxLabel(row_r62));
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Requisition Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r67.requisitionCode, "");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Employee PF Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r68.empPf, "");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Requisition Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r69.requisitionTitle, "");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Items Requested ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r70.requisitionDescription, "");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_101_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", row_r71.status, " ");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_101_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", row_r71.status, " ");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_101_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", row_r71.status, " ");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_101_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", row_r71.status, " ");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_101_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", row_r71.status, " ");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_101_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](1, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ViewDirectMainstoreRequisitionsComponent_mat_cell_101_button_2_Template, 3, 1, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, ViewDirectMainstoreRequisitionsComponent_mat_cell_101_button_3_Template, 3, 1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, ViewDirectMainstoreRequisitionsComponent_mat_cell_101_button_4_Template, 3, 1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, ViewDirectMainstoreRequisitionsComponent_mat_cell_101_button_5_Template, 3, 1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, ViewDirectMainstoreRequisitionsComponent_mat_cell_101_button_6_Template, 3, 1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitch", row_r71.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_104_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_104_Template_button_click_2_listener($event) { return $event.stopPropagation(); })("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_104_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r88); const row_r84 = restoredCtx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r87.viewRequisition(row_r84); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "app-feather-icons", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_104_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_104_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r88); const row_r84 = restoredCtx.$implicit; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r90.editRequisition(row_r84); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "app-feather-icons", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_104_Template_button_click_8_listener($event) { return $event.stopPropagation(); })("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_104_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r88); const row_r84 = restoredCtx.$implicit; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r92.deleteRequisition(row_r84.requisitionCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "app-feather-icons", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_104_Template_button_click_11_listener($event) { return $event.stopPropagation(); })("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_104_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r88); const row_r84 = restoredCtx.$implicit; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r94.receiveRequisition(row_r84); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "app-feather-icons", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("icon", "trash-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hidden", row_r84.status != "InTransit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("icon", "package");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_row_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-header-row");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_row_106_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-row", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_mat_row_106_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r97); const row_r95 = restoredCtx.$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r96.checkRequisition(row_r95); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r24.input.value, "\"");
} }
function ViewDirectMainstoreRequisitionsComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-progress-spinner", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("diameter", 40);
} }
function ViewDirectMainstoreRequisitionsComponent_ng_template_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, " My Internal Requisitions ");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Requisition Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r98.requisitionCode, "");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Requisition Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r99.requisitionTitle, "");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Items Requested ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_187_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", row_r100.requisitionDescription, "");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_190_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", row_r101.status, " ");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_190_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", row_r101.status, " ");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_190_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", row_r101.status, " ");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_190_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", row_r101.status, " ");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_190_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", row_r101.status, " ");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_190_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](1, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ViewDirectMainstoreRequisitionsComponent_mat_cell_190_button_2_Template, 3, 1, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, ViewDirectMainstoreRequisitionsComponent_mat_cell_190_button_3_Template, 3, 1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, ViewDirectMainstoreRequisitionsComponent_mat_cell_190_button_4_Template, 3, 1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, ViewDirectMainstoreRequisitionsComponent_mat_cell_190_button_5_Template, 3, 1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, ViewDirectMainstoreRequisitionsComponent_mat_cell_190_button_6_Template, 3, 1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitch", row_r101.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_cell_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-header-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_193_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_193_Template_button_click_2_listener($event) { return $event.stopPropagation(); })("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_193_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r118); const row_r114 = restoredCtx.$implicit; const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r117.viewRequisition(row_r114); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "app-feather-icons", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_193_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_193_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r118); const row_r114 = restoredCtx.$implicit; const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r120.editRequisition(row_r114); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "app-feather-icons", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_193_Template_button_click_8_listener($event) { return $event.stopPropagation(); })("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_193_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r118); const row_r114 = restoredCtx.$implicit; const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r122.deleteRequisition(row_r114.requisitionCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "app-feather-icons", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_193_Template_button_click_11_listener($event) { return $event.stopPropagation(); })("click", function ViewDirectMainstoreRequisitionsComponent_mat_cell_193_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r118); const row_r114 = restoredCtx.$implicit; const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r124.receiveRequisition(row_r114); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "app-feather-icons", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("icon", "trash-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hidden", row_r114.status != "InTransit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("icon", "package");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_header_row_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-header-row");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_row_195_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-row", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_mat_row_195_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r127); const row_r125 = restoredCtx.$implicit; const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r126.checkRequisition(row_r125); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ViewDirectMainstoreRequisitionsComponent_mat_cell_196_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-cell", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r42.input.value, "\"");
} }
function ViewDirectMainstoreRequisitionsComponent_div_197_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-progress-spinner", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Requisitions"]; };
const _c1 = function () { return [1, 2, 5, 10, 20, 30, 40, 50, 100]; };
class ViewDirectMainstoreRequisitionsComponent {
    constructor(router, snackbar, rFPsService, StockManService, fb, datepipe, accessControlService, tokenStorageService, tokenCookieService, dialog, directMainStoreService, transactionService, requisitionService) {
        this.router = router;
        this.snackbar = snackbar;
        this.rFPsService = rFPsService;
        this.StockManService = StockManService;
        this.fb = fb;
        this.datepipe = datepipe;
        this.accessControlService = accessControlService;
        this.tokenStorageService = tokenStorageService;
        this.tokenCookieService = tokenCookieService;
        this.dialog = dialog;
        this.directMainStoreService = directMainStoreService;
        this.transactionService = transactionService;
        this.requisitionService = requisitionService;
        this.displayedColumns = [
            "select",
            "requisitionCode",
            "empPf",
            "requisitionTitle",
            "requisitionDescription",
            // "tranCode",
            // "transactionStatus",
            // "tranDate",
            "status",
            "action",
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource([]);
        this.contextMenuPosition = { x: "0px", y: "0px" };
        //*************************************************************************************** */
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_18__.SelectionModel(true, []);
        this.displayedColumnsSecond = [
            "requisitionCode",
            "requisitionTitle",
            "requisitionDescription",
            // "tranCode",
            // "transactionStatus",
            // "tranDate",
            "status",
            "action",
        ];
        this.dataSourceSecond = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource([]);
        this.isLoading = true;
        this.pageFunction = "Update";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Subject();
        this.downloadLoading = false;
        this.currentDate = new Date();
        this.dateTomorrow = new Date(this.currentDate.getTime() + 1 * 24 * 60 * 60 * 1000);
        this.oneWeekAgo = new Date(this.currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        // hideBranchFilter: boolean = true;
        this.hideReceive = true;
        //**********************************************************************************************************
        // Find by status
        //**********************************************************************************************************
        this.selectedMyRequisitionsStatus = "PENDING";
        this.selectedAllRequisitionsStatus = "PENDING";
        this.reqStatuses = [
            { name: "PENDING" },
            // { name: "VERIFIED" },
            { name: "APPROVED" },
            { name: "RETURNED" },
            { name: "REJECTED" },
        ];
        this.isAllLoading = true;
        this.isMyLoading = true;
        // ****************************************************************************************************************************
        //branchstore lookup
        this.branchStoreCode = "";
        this.selectedBranchStore = [];
        // ****************************************************************************************************************************
        //Select GL Accounts
        this.selectedRows = [];
        this.atleastOneSelected = false;
        //********************************************************************************************************************** */
        //accounting Select
        //********************************************************************************************************************** */
        // New selection for a different MatTable
        // accountingTableSelection = new SelectionModel<any>(false, []);
        // accountingSelectItemsSelected: boolean = false;
        // accountingCheckboxSelectedRows: any;
        // isAllaccountingTableSelected() {
        //   const numSelected = this.accountingTableSelection.selected.length;
        //   const numRows = this.dataSource.data.length;
        //   return numSelected === numRows;
        // }
        // masteraccountingTableToggle() {
        //   if (this.isAllaccountingTableSelected()) {
        //     this.accountingTableSelection.clear();
        //     return;
        //   }
        //   this.accountingTableSelection.select(...this.dataSource.data);
        // }
        // checkboxaccountingTableLabel(row?: any): string {
        //   if (!row) {
        //     return `${this.isAllaccountingTableSelected() ? "deselect" : "select"
        //       } all`;
        //   }
        //   return `${this.accountingTableSelection.isSelected(row) ? "deselect" : "select"
        //     } row ${row.position + 1}`;
        // }
        // checkaccountingTableSelection() {
        //   const numSelected = this.accountingTableSelection.selected.length;
        //   const numRows = this.dataSource.data.length;
        //   if (numSelected === numRows) {
        //     this.accountingSelectItemsSelected = true;
        //   } else if (numSelected !== numRows) {
        //     this.accountingSelectItemsSelected = false;
        //   }
        //   console.log(
        //     "accountingSelectItemsSelected: ",
        //     this.accountingSelectItemsSelected
        //   );
        // }
        this.transactionAction = "";
        // ****************************************************************************************************************************
        this.transactionType = "Inventory";
    }
    // *************************************************************************************************************************************************
    //On page initialiazation
    ngOnInit() {
        this.currentUser = this.tokenStorageService.getUser(); //fetches the current user
        this.Form = this.fb.group({
            myRequisitionsStatus: ["PENDING", _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
            allRequisitionsStatus: ["PENDING", _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
        });
        this.getAllData();
        this.getMyData();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    // *************************************************************************************************************************************************
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getAllRequisitionsSelectSelectedStatus() {
        this.getAllData();
    }
    getAllRequisitionsSelectedStatus(allRequisitionsStatus) {
        console.log("allRequisitionsStatus:: ", allRequisitionsStatus);
        this.Form.patchValue({
            allRequisitionsStatus: allRequisitionsStatus,
        });
        this.getAllData();
    }
    getAllData() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = true;
        this.selectedAllRequisitionsStatus = this.Form.value.allRequisitionsStatus;
        let params = {
            status: this.Form.value.allRequisitionsStatus,
        };
        this.directMainStoreService
            .getInternalRequisitionsByStatus(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.data :", res);
                if (res.entity) {
                    this.data = res;
                    this.isAllLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource(this.data.entity);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    console.log("this.data :", this.data);
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
    getMyRequisitionsSelectSelectedStatus() {
        this.getMyData();
    }
    getMyRequisitionsSelectedStatus(myRequisitionsStatus) {
        this.Form.patchValue({
            myRequisitionsStatus: myRequisitionsStatus,
        });
        this.getMyData();
    }
    getMyData() {
        this.dataSourceSecond = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource([]);
        this.dataSourceSecond.paginator = this.paginatorSecond;
        this.dataSourceSecond.sort = this.sortSecond;
        this.isMyLoading = true;
        this.selectedMyRequisitionsStatus = this.Form.value.myRequisitionsStatus;
        let params = {
            status: this.Form.value.myRequisitionsStatus,
            empPf: this.currentUser.empPfNo
        };
        console.log("params :", params);
        this.directMainStoreService
            .getInternalRequisitionsByStatusAndPfNo(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.data :", res);
                if (res.statusCode === 302) {
                    this.dataSecond = res;
                    this.isLoading = false;
                    this.dataSourceSecond = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource(this.dataSecond.entity);
                    this.dataSourceSecond.paginator = this.paginatorSecond;
                    this.dataSourceSecond.sort = this.sortSecond;
                    console.log("this.dataSecond :", this.dataSecond);
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
    refresh() {
        this.getAllData();
    }
    branchStoreLookUp() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "600px";
        dialogConfig.data = {
            selected: this.selectedBranchStore,
        };
        console.log("Branch: ", this.selectedBranchStore);
        const dialogRef = this.dialog.open(src_app_erp_inventory_data_lookups_branchstore_lookup_branchstore_lookup_component__WEBPACK_IMPORTED_MODULE_1__.BranchstoreLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            result.data.forEach((element) => {
                this.branchStoreCode = element.branchStoreCode;
                this.mngForm.patchValue({
                    branchCode: element.branchCode,
                });
            });
        });
    }
    checkRequisition(row) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "700px";
        dialogConfig.data = {
            action: "",
            selected: this.selectedItem,
            data: row
        };
        const dialogRef = this.dialog.open(_view_req_items_dialog_view_req_items_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ViewReqItemsDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            result.data.forEach((element) => {
            });
        });
    }
    //************************************************************************************************************************** */
    //getting requisitions by status
    getRequisitionsByStatus() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpParams()
            .set("branchCode", this.currentBranch)
            .set("status", this.Form.value.status);
        console.log("params: ", params);
        this.directMainStoreService
            .getInternalRequisitionsByStatus(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    this.data = res.entity;
                    // this.data = this.getAllData();
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource(this.data);
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
            rxjs__WEBPACK_IMPORTED_MODULE_22__.Subscription;
    }
    //add requisition
    addRequisition() {
        this.router.navigate(["/erp-inventory/inventory/request-stock-directly"]);
    }
    // edit requisition
    editRequisition(data) {
        let route = "/erp-inventory/inventory/request-stock-directly";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                action: "Update",
            },
        });
    }
    // view requisition
    viewRequisition(data) {
        let route = "/erp-inventory/inventory/request-stock-directly";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                action: "View",
            },
        });
    }
    // Receive Requisition
    receiveRequisition(data) {
        const additionalData = data;
        const serializedData = JSON.stringify(additionalData);
        let route = "/erp-inventory/inventory/request-stock-directly";
        this.router.navigate([route], {
            queryParams: {
                requisitionCode: data.requisitionCode,
                additionalData: serializedData,
                action: "Receive",
            },
        });
    }
    deleteRequisition(requisitionCode) {
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
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpParams()
                    .set("requisitionCode", requisitionCode)
                    .set("username", this.currentUserRole);
                this.directMainStoreService
                    .deleteInternalRequisitionTemporarily(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        this.snackbar.showNotification("snackbar-success", res.message);
                    },
                    error: (err) => {
                        this.snackbar.showNotification("snackbar-danger", err.message);
                    },
                    complete: () => {
                        this.getAllData();
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_22__.Subscription;
            }
        });
    }
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
    processMultipleRows(status) {
        let privilege = "Validate Internal Requisitions";
        this.hasAccess = this.accessControlService.hasPrivilege("InventoryModule", [
            privilege,
        ]);
        this.hasAccess = true;
        if (this.hasAccess) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: "Confirmation",
                text: "Do you want to release these items?",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Yes",
                cancelButtonText: "No",
            }).then((confirmationResult) => {
                if (confirmationResult.isConfirmed) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
                            const processedRows = this.selectedRows.map((element) => {
                                return {
                                    id: element.id,
                                    status: status,
                                    verifierRemarks: verifierRemarks,
                                };
                            });
                            console.log("LOG: ", processedRows);
                            this.directMainStoreService
                                .validateInternalRequisitions(processedRows)
                                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$))
                                .subscribe({
                                next: (res) => {
                                    console.log("res: ", res);
                                    if (res.statusCode == 201 ||
                                        res.statusCode == 200 ||
                                        res.statusCode == 302) {
                                        this.snackbar.showNotification("snackbar-success", res.message);
                                        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_18__.SelectionModel(true, []);
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
                                    this.getAllData();
                                },
                            });
                        }
                        else {
                            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_18__.SelectionModel(true, []);
                            this.selection.clear();
                        }
                    });
                }
                else {
                    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_18__.SelectionModel(true, []);
                }
            });
        }
    }
    accountingCheckboxActive(action) {
        //this.accountingCheckboxSelectedRows = this.accountingTableSelection.selected;
        var _a, _b, _c;
        this.transactionAction = action;
        console.log("this.accountingSelectItemsSelected:: ", this.selection.selected[0].id);
        // if (
        //   this.selection.selected[0].transactionStatus === "PENDING"
        // ) {
        //   this.snackbar.showNotification(
        //     "snackbar-danger",
        //     "This record must be saved first"
        //   );
        //   return;
        // }
        if (this.transactionAction === "Add" &&
            ((_a = this.selection.selected[0]) === null || _a === void 0 ? void 0 : _a.tranCode)) {
            this.snackbar.showNotification("snackbar-danger", "Transaction already exists for this record");
        }
        else if (this.transactionAction !== "Add" &&
            (((_b = this.selection.selected[0]) === null || _b === void 0 ? void 0 : _b.tranCode) === null ||
                ((_c = this.selection.selected[0]) === null || _c === void 0 ? void 0 : _c.tranCode) === undefined)) {
            this.snackbar.showNotification("snackbar-danger", "No transaction added for this record!!");
        }
        else {
            this.transactionLookUp();
        }
    }
    transactionLookUp() {
        console.log("this.selection:: ", this.selection.selected[0]);
        let addBody = {};
        if (this.transactionAction === "Add") {
            addBody = {
                transactionType: this.transactionType,
                referenceCode: this.selection.selected[0].requisitionCode,
                itemCode: "",
                parttrans: [
                    {
                        accountNo: "",
                        amount: this.selection.selected[0].invoiceAmount,
                        partTranstype: "Debit",
                    },
                ],
            };
        }
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "1200px";
        dialogConfig.data = {
            action: this.transactionAction,
            transactionType: this.transactionType,
            selected: this.selection.selected[0],
            bodyForAdd: addBody,
            tranCode: this.selection.selected[0].tranCode,
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_modules_finance_management_transactions_dialogs_accounting_journal_transactions_accounting_journal_transactions_component__WEBPACK_IMPORTED_MODULE_3__.AccountingJournalTransactionsComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result:::", result);
            if (result.data && result.data.statusCode === 201) {
                this.transactionResponse = result.data.entity;
                this.snackbar.showNotification("snackbar-success", result.data.message);
                this.updateInventoryTransactionStatus();
            }
            else if (result.data && result.data.statusCode !== 201) {
                this.snackbar.showNotification("snackbar-danger", result.data.message);
            }
            else {
                this.snackbar.showNotification("snackbar-danger", "Transaction details not captured!");
            }
        });
    }
    updateInventoryTransactionStatus() {
        let params = {
            transactionType: this.transactionResponse.transactionType,
            tranCode: this.transactionResponse.tranCode,
            tranDate: this.transactionResponse.tranDate,
            referenceCode: this.transactionResponse.referenceCode,
        };
        this.requisitionService
            .updateReceivedItemsTransactionStatus(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("res: ", res);
                if (res.statusCode == 200) {
                    this.snackbar.showNotification("snackbar-success", res.message);
                    this.getAllData();
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
            rxjs__WEBPACK_IMPORTED_MODULE_22__.Subscription;
    }
}
ViewDirectMainstoreRequisitionsComponent.ɵfac = function ViewDirectMainstoreRequisitionsComponent_Factory(t) { return new (t || ViewDirectMainstoreRequisitionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_rfps_service__WEBPACK_IMPORTED_MODULE_5__.RFPsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_stock_management_service__WEBPACK_IMPORTED_MODULE_6__.StockManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_26__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_7__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_8__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_9__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_erp_inventory_data_services_direct_main_store_service__WEBPACK_IMPORTED_MODULE_10__.DirectMainStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_erp_finance_data_services_transactions_service__WEBPACK_IMPORTED_MODULE_11__.TransactionsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_requisition_service__WEBPACK_IMPORTED_MODULE_12__.RequisitionService)); };
ViewDirectMainstoreRequisitionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: ViewDirectMainstoreRequisitionsComponent, selectors: [["app-view-direct-mainstore-requisitions"]], viewQuery: function ViewDirectMainstoreRequisitionsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.paginatorSecond = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.sortSecond = _t.first);
    } }, decls: 199, vars: 38, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "card"], [1, "header"], [1, "body"], ["mat-tab-label", ""], [1, "row", "mx-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "row"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [1, "col-2"], [1, "col-10"], [1, "button-container", "mt-1"], ["mat-raised-button", "", 1, "mat-button", "pending", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "approved", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "returned", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "rejected", 3, "click"], ["class", "materialTableHeader mt-2", 4, "ngIf"], ["matTableExporter", "", "matSort", "", 1, "font-table", "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "requisitionCode"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matCellDef"], ["matColumnDef", "empPf"], ["matColumnDef", "requisitionTitle"], ["matColumnDef", "requisitionDescription"], ["matColumnDef", "status"], ["class", "column-nowrap psl-3 tbl-col-width-per-15", 3, "click", 4, "matCellDef"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-25 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-25 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [1, "col-12"], ["matTooltip", "Add Accounting Details", 1, "m-l-10"], ["matTooltip", "Edit Accounting Details", 1, "m-l-10"], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-25", "pr-0"], ["matTooltip", "View", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matTooltip", "Edit", "mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "Delete", "mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "Receive", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "hidden", "click"], ["matRipple", "", 3, "click"], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function ViewDirectMainstoreRequisitionsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "Internal Requisitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 6)(10, "mat-tab-group")(11, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, ViewDirectMainstoreRequisitionsComponent_ng_template_12_Template, 3, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "div", 6)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "ul", 14)(21, "li", 15)(22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23, "Internal Requisitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "li", 16)(25, "label", 17)(26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keyup", function ViewDirectMainstoreRequisitionsComponent_Template_input_keyup_28_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "li")(31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_button_click_32_listener() { return ctx.addRequisition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "li")(36, "div", 24)(37, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_button_click_37_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](39, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](40, ViewDirectMainstoreRequisitionsComponent_li_40_Template, 5, 0, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](41, ViewDirectMainstoreRequisitionsComponent_li_41_Template, 5, 0, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](42, ViewDirectMainstoreRequisitionsComponent_li_42_Template, 5, 0, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "div", 26)(44, "ul", 27)(45, "li")(46, "div", 28)(47, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_img_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r128); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](83); return _r7.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "li")(49, "div", 30)(50, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_img_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r128); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](83); return _r7.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "li")(52, "div", 32)(53, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_img_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r128); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](83); return _r7.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "li")(55, "div", 34)(56, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_img_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r128); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](83); return _r7.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](57, "div", 36)(58, "div", 12)(59, "div", 37)(60, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](61, "Req Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](62, "div", 38)(63, "div", 39)(64, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_button_click_64_listener() { return ctx.getAllRequisitionsSelectedStatus("PENDING"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](65, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](66, "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](67, " PENDING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](68, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_button_click_68_listener() { return ctx.getAllRequisitionsSelectedStatus("APPROVED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](69, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](70, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](71, " APPROVED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](72, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_button_click_72_listener() { return ctx.getAllRequisitionsSelectedStatus("RETURNED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](73, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](74, "reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](75, " RETURNED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](76, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_button_click_76_listener() { return ctx.getAllRequisitionsSelectedStatus("REJECTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](77, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](78, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](79, " REJECTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](80, ViewDirectMainstoreRequisitionsComponent_div_80_Template, 11, 3, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](81, "mat-table", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](84, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](85, ViewDirectMainstoreRequisitionsComponent_mat_header_cell_85_Template, 2, 4, "mat-header-cell", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](86, ViewDirectMainstoreRequisitionsComponent_mat_cell_86_Template, 2, 4, "mat-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](87, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](88, ViewDirectMainstoreRequisitionsComponent_mat_header_cell_88_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](89, ViewDirectMainstoreRequisitionsComponent_mat_cell_89_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](90, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](91, ViewDirectMainstoreRequisitionsComponent_mat_header_cell_91_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](92, ViewDirectMainstoreRequisitionsComponent_mat_cell_92_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](93, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](94, ViewDirectMainstoreRequisitionsComponent_mat_header_cell_94_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](95, ViewDirectMainstoreRequisitionsComponent_mat_cell_95_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](96, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](97, ViewDirectMainstoreRequisitionsComponent_mat_header_cell_97_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](98, ViewDirectMainstoreRequisitionsComponent_mat_cell_98_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](99, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](100, ViewDirectMainstoreRequisitionsComponent_mat_header_cell_100_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](101, ViewDirectMainstoreRequisitionsComponent_mat_cell_101_Template, 7, 5, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](102, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](103, ViewDirectMainstoreRequisitionsComponent_mat_header_cell_103_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](104, ViewDirectMainstoreRequisitionsComponent_mat_cell_104_Template, 13, 13, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](105, ViewDirectMainstoreRequisitionsComponent_mat_header_row_105_Template, 1, 0, "mat-header-row", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](106, ViewDirectMainstoreRequisitionsComponent_mat_row_106_Template, 1, 2, "mat-row", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](107, ViewDirectMainstoreRequisitionsComponent_mat_cell_107_Template, 2, 1, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](108, ViewDirectMainstoreRequisitionsComponent_div_108_Template, 2, 1, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](109, "mat-paginator", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](110, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](111, ViewDirectMainstoreRequisitionsComponent_ng_template_111_Template, 3, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](112, "div", 8)(113, "div", 9)(114, "div", 6)(115, "div", 10)(116, "div", 11)(117, "div", 12)(118, "div", 13)(119, "ul", 14)(120, "li", 15)(121, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](122, "Internal Requisitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](123, "li", 16)(124, "label", 17)(125, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](126, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](127, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keyup", function ViewDirectMainstoreRequisitionsComponent_Template_input_keyup_127_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](129, "li")(130, "div", 21)(131, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_button_click_131_listener() { return ctx.addRequisition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](132, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](133, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](134, "li")(135, "div", 24)(136, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_button_click_136_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](137, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](138, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](139, "div", 26)(140, "ul", 27)(141, "li")(142, "div", 28)(143, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_img_click_143_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r128); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](83); return _r7.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](144, "li")(145, "div", 30)(146, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_img_click_146_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r128); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](83); return _r7.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](147, "li")(148, "div", 32)(149, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_img_click_149_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r128); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](83); return _r7.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](150, "li")(151, "div", 34)(152, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_img_click_152_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r128); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](83); return _r7.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](153, "div", 36)(154, "div", 12)(155, "div", 37)(156, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](157, "My Requisitions Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](158, "div", 38)(159, "div", 39)(160, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_button_click_160_listener() { return ctx.getMyRequisitionsSelectedStatus("PENDING"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](161, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](162, "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](163, " PENDING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](164, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_button_click_164_listener() { return ctx.getMyRequisitionsSelectedStatus("APPROVED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](165, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](166, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](167, " APPROVED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](168, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_button_click_168_listener() { return ctx.getMyRequisitionsSelectedStatus("RETURNED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](169, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](170, "reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](171, " RETURNED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](172, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ViewDirectMainstoreRequisitionsComponent_Template_button_click_172_listener() { return ctx.getMyRequisitionsSelectedStatus("REJECTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](173, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](174, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](175, " REJECTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](176, "mat-table", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](179, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](180, ViewDirectMainstoreRequisitionsComponent_mat_header_cell_180_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](181, ViewDirectMainstoreRequisitionsComponent_mat_cell_181_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](182, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](183, ViewDirectMainstoreRequisitionsComponent_mat_header_cell_183_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](184, ViewDirectMainstoreRequisitionsComponent_mat_cell_184_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](185, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](186, ViewDirectMainstoreRequisitionsComponent_mat_header_cell_186_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](187, ViewDirectMainstoreRequisitionsComponent_mat_cell_187_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](188, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](189, ViewDirectMainstoreRequisitionsComponent_mat_header_cell_189_Template, 2, 0, "mat-header-cell", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](190, ViewDirectMainstoreRequisitionsComponent_mat_cell_190_Template, 7, 5, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](191, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](192, ViewDirectMainstoreRequisitionsComponent_mat_header_cell_192_Template, 2, 0, "mat-header-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](193, ViewDirectMainstoreRequisitionsComponent_mat_cell_193_Template, 13, 13, "mat-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](194, ViewDirectMainstoreRequisitionsComponent_mat_header_row_194_Template, 1, 0, "mat-header-row", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](195, ViewDirectMainstoreRequisitionsComponent_mat_row_195_Template, 1, 2, "mat-row", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](196, ViewDirectMainstoreRequisitionsComponent_mat_cell_196_Template, 2, 1, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](197, ViewDirectMainstoreRequisitionsComponent_div_197_Template, 2, 1, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](198, "mat-paginator", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", "All Direct Main Store Requisitions")("items", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](35, _c0))("active_item", "All Requisitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.selectedRows.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.selectedRows.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.selectedRows.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("active", ctx.selectedAllRequisitionsStatus === "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("active", ctx.selectedAllRequisitionsStatus === "APPROVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("active", ctx.selectedAllRequisitionsStatus === "RETURNED");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("active", ctx.selectedAllRequisitionsStatus === "REJECTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](36, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("active", ctx.selectedMyRequisitionsStatus === "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("active", ctx.selectedMyRequisitionsStatus === "APPROVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("active", ctx.selectedMyRequisitionsStatus === "RETURNED");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("active", ctx.selectedMyRequisitionsStatus === "REJECTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dataSource", ctx.dataSourceSecond);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsSecond);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsSecond);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.dataSourceSecond.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](37, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_14__.GenWidgetsComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_33__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_15__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWRpcmVjdC1tYWluc3RvcmUtcmVxdWlzaXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 21965:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/erp-inventory/modules/inventory-management/pages/view-requisitions/view-req-items-dialog/view-req-items-dialog.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewReqItemsDialogComponent": () => (/* binding */ ViewReqItemsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);




















function ViewReqItemsDialogComponent_div_1_div_48_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li")(2, "div", 53)(3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewReqItemsDialogComponent_div_1_div_48_ng_container_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r26.accountingCheckboxActive("Update"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "div", 53)(8, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewReqItemsDialogComponent_div_1_div_48_ng_container_7_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r28.accountingCheckboxActive("View"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ViewReqItemsDialogComponent_div_1_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51)(1, "div", 12)(2, "div", 13)(3, "ul", 17)(4, "li", 18)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Accounting Actions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ViewReqItemsDialogComponent_div_1_div_48_ng_container_7_Template, 11, 0, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selection.selected.length > 0);
} }
function ViewReqItemsDialogComponent_div_1_mat_header_cell_53_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 56)(1, "mat-checkbox", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ViewReqItemsDialogComponent_div_1_mat_header_cell_53_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return $event ? ctx_r29.masterToggle() : null; })("change", function ViewReqItemsDialogComponent_div_1_mat_header_cell_53_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r31.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r5.selection.hasValue() && ctx_r5.isAllSelected())("indeterminate", ctx_r5.selection.hasValue() && !ctx_r5.isAllSelected())("ngClass", "tbl-checkbox");
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_54_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 56)(1, "mat-checkbox", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewReqItemsDialogComponent_div_1_mat_cell_54_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function ViewReqItemsDialogComponent_div_1_mat_cell_54_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const row_r32 = restoredCtx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return $event ? ctx_r34.selection.toggle(row_r32) : null; })("change", function ViewReqItemsDialogComponent_div_1_mat_cell_54_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r36.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r32 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r6.selection.isSelected(row_r32))("ngClass", "tbl-checkbox")("aria-label", ctx_r6.checkboxLabel(row_r32));
} }
function ViewReqItemsDialogComponent_div_1_mat_header_cell_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Item Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r37.itemCode, " ");
} }
function ViewReqItemsDialogComponent_div_1_mat_header_cell_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r38.quantity, " ");
} }
function ViewReqItemsDialogComponent_div_1_mat_header_cell_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " TranCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r39.tranCode || "-", " ");
} }
function ViewReqItemsDialogComponent_div_1_mat_header_cell_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " TranStatus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_66_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0 ", row_r40.transactionStatus, " ");
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_66_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0 ", row_r40.transactionStatus, " ");
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_66_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " N.A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewReqItemsDialogComponent_div_1_mat_cell_66_button_2_Template, 3, 1, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewReqItemsDialogComponent_div_1_mat_cell_66_button_3_Template, 3, 1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ViewReqItemsDialogComponent_div_1_mat_cell_66_ng_container_4_Template, 2, 0, "ng-container", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", row_r40.transactionStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "POSTED");
} }
function ViewReqItemsDialogComponent_div_1_mat_header_cell_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Tran Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r46.tranDate ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, row_r46.tranDate, "short") : "N.A", " ");
} }
function ViewReqItemsDialogComponent_div_1_mat_header_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_72_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0 ", row_r47.status, " ");
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_72_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0 ", row_r47.status, " ");
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_72_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0 ", row_r47.status, " ");
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_72_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0 ", row_r47.status, " ");
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_72_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0 ", row_r47.status, " ");
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewReqItemsDialogComponent_div_1_mat_cell_72_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewReqItemsDialogComponent_div_1_mat_cell_72_button_2_Template, 3, 1, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewReqItemsDialogComponent_div_1_mat_cell_72_button_3_Template, 3, 1, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ViewReqItemsDialogComponent_div_1_mat_cell_72_button_4_Template, 3, 1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ViewReqItemsDialogComponent_div_1_mat_cell_72_button_5_Template, 3, 1, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ViewReqItemsDialogComponent_div_1_mat_cell_72_button_6_Template, 3, 1, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", row_r47.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function ViewReqItemsDialogComponent_div_1_mat_header_cell_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_75_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewReqItemsDialogComponent_div_1_mat_cell_75_Template_button_click_2_listener($event) { return $event.stopPropagation(); })("click", function ViewReqItemsDialogComponent_div_1_mat_cell_75_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const row_r60 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r63.viewRequisition(row_r60); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-feather-icons", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewReqItemsDialogComponent_div_1_mat_cell_75_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function ViewReqItemsDialogComponent_div_1_mat_cell_75_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const row_r60 = restoredCtx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r66.editRequisition(row_r60); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-feather-icons", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewReqItemsDialogComponent_div_1_mat_cell_75_Template_button_click_8_listener($event) { return $event.stopPropagation(); })("click", function ViewReqItemsDialogComponent_div_1_mat_cell_75_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const row_r60 = restoredCtx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r68.deleteRequisition(row_r60.requisitionCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-feather-icons", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewReqItemsDialogComponent_div_1_mat_cell_75_Template_button_click_11_listener($event) { return $event.stopPropagation(); })("click", function ViewReqItemsDialogComponent_div_1_mat_cell_75_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const row_r60 = restoredCtx.$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r70.receiveRequisition(row_r60); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-feather-icons", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "trash-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", row_r60.status != "InTransit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "package");
} }
function ViewReqItemsDialogComponent_div_1_mat_header_row_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function ViewReqItemsDialogComponent_div_1_mat_row_77_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-row", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewReqItemsDialogComponent_div_1_mat_row_77_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const row_r71 = restoredCtx.$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r72.checkRequisition(row_r71); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ViewReqItemsDialogComponent_div_1_mat_cell_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r23.input.value, "\"");
} }
function ViewReqItemsDialogComponent_div_1_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return [1, 2, 5, 10, 20, 30, 40, 50, 100]; };
function ViewReqItemsDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewReqItemsDialogComponent_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r74.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "mat-card-content")(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Employee PF:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Transaction Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12)(29, "div", 13)(30, "h6")(31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Report details captured");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14)(34, "div", 15)(35, "div", 16)(36, "div", 12)(37, "div", 13)(38, "ul", 17)(39, "li", 18)(40, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Requisition Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 19)(43, "label", 20)(44, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ViewReqItemsDialogComponent_div_1_Template_input_keyup_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r76.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ViewReqItemsDialogComponent_div_1_div_48_Template, 8, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-table", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](52, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, ViewReqItemsDialogComponent_div_1_mat_header_cell_53_Template, 2, 4, "mat-header-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, ViewReqItemsDialogComponent_div_1_mat_cell_54_Template, 2, 4, "mat-cell", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](55, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ViewReqItemsDialogComponent_div_1_mat_header_cell_56_Template, 2, 0, "mat-header-cell", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, ViewReqItemsDialogComponent_div_1_mat_cell_57_Template, 2, 1, "mat-cell", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](58, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, ViewReqItemsDialogComponent_div_1_mat_header_cell_59_Template, 2, 0, "mat-header-cell", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, ViewReqItemsDialogComponent_div_1_mat_cell_60_Template, 2, 1, "mat-cell", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](61, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, ViewReqItemsDialogComponent_div_1_mat_header_cell_62_Template, 2, 0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, ViewReqItemsDialogComponent_div_1_mat_cell_63_Template, 2, 1, "mat-cell", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](64, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, ViewReqItemsDialogComponent_div_1_mat_header_cell_65_Template, 2, 0, "mat-header-cell", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ViewReqItemsDialogComponent_div_1_mat_cell_66_Template, 5, 3, "mat-cell", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](67, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, ViewReqItemsDialogComponent_div_1_mat_header_cell_68_Template, 2, 0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, ViewReqItemsDialogComponent_div_1_mat_cell_69_Template, 3, 4, "mat-cell", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](70, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, ViewReqItemsDialogComponent_div_1_mat_header_cell_71_Template, 2, 0, "mat-header-cell", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, ViewReqItemsDialogComponent_div_1_mat_cell_72_Template, 7, 5, "mat-cell", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](73, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, ViewReqItemsDialogComponent_div_1_mat_header_cell_74_Template, 2, 0, "mat-header-cell", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, ViewReqItemsDialogComponent_div_1_mat_cell_75_Template, 13, 13, "mat-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, ViewReqItemsDialogComponent_div_1_mat_header_row_76_Template, 1, 0, "mat-header-row", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, ViewReqItemsDialogComponent_div_1_mat_row_77_Template, 1, 2, "mat-row", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, ViewReqItemsDialogComponent_div_1_mat_cell_78_Template, 2, 1, "mat-cell", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, ViewReqItemsDialogComponent_div_1_div_79_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "mat-paginator", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Approved Direct Transaction - Details - ", ctx_r0.requisitionData.requisitionTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.requisitionData.requisitionDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.requisitionData.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.requisitionData.empPf);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.requisitionData.transactionStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.selection.selected.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.dataSource.data.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
} }
class ViewReqItemsDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = [
            "select",
            "itemCode",
            "quantity",
            // "unitOfMeasure",
            "tranCode",
            "transactionStatus",
            // "tranDate",
            "status",
            "action",
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource([]);
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(true, []);
    }
    ngOnInit() {
        this.requisitionData = {
            "departmentcode": null,
            "branchcode": null,
            "costcentercode": null,
            "membercode": null,
            "postedFlag": "Y",
            "postedBy": "Superuser",
            "postedTime": "2023-12-11T13:33:19.623591",
            "modifiedFlag": "N",
            "modifiedBy": null,
            "modifiedTime": null,
            "verifiedFlag": "N",
            "verifiedBy": null,
            "verifiedTime": null,
            "deletedFlag": "N",
            "deletedBy": null,
            "deletedTime": null,
            "id": 6,
            "requisitionCode": "INC#17023015996066",
            "requisitionTitle": "Test",
            "requisitionDescription": "Main",
            "storeId": null,
            "status": "PENDING",
            "empPf": "SU123",
            "transactionType": null,
            "tranCode": null,
            "tranDate": null,
            "transactionStatus": "PENDING",
            "attachments": null,
            "items": [
                {
                    "id": 16,
                    "itemCode": "CI#1700033036732",
                    "name": null,
                    "quantity": 24,
                    "issuedQuantity": 0,
                    "purpose": null,
                    "unitOfMeasure": "Pcks",
                    "available": "Y",
                    "automatedReorderPoint": 0,
                    "minimumStockLevel": 0,
                    "needByDate": "2023-12-30T21:00:00"
                },
                {
                    "id": 17,
                    "itemCode": "CI#1700033036732",
                    "name": null,
                    "quantity": 2,
                    "issuedQuantity": 0,
                    "purpose": null,
                    "unitOfMeasure": "Pcks",
                    "available": "Y",
                    "automatedReorderPoint": 0,
                    "minimumStockLevel": 0,
                    "needByDate": "2023-12-30T21:00:00"
                }
            ]
        };
        this.dataToDisplay = this.requisitionData.items;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.dataToDisplay);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
}
ViewReqItemsDialogComponent.ɵfac = function ViewReqItemsDialogComponent_Factory(t) { return new (t || ViewReqItemsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
ViewReqItemsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewReqItemsDialogComponent, selectors: [["app-view-req-items-dialog"]], viewQuery: function ViewReqItemsDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 2, vars: 1, consts: [[1, "addContainer"], ["class", "contact-details", 4, "ngIf"], [1, "contact-details"], [1, "modalHeader"], [1, "contact-details-name", "mb-1"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "row", "mt-1", 2, "width", "98%", "margin-left", "20px"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], [1, "row", "justify-content-center"], [1, "col-7", "pro-left", "m-b-10"], [1, "col-5", "m-b-10"], [1, "row"], [1, "col-12"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "table-responsiv"], [1, "materialTableHeader"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["class", "materialTableHeader mt-2", 4, "ngIf"], ["matTableExporter", "", "matSort", "", 1, "font-table", "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "itemCode"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15", 4, "matCellDef"], ["matColumnDef", "quantity"], ["matColumnDef", "tranCode"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "transactionStatus"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "tranDate"], ["matColumnDef", "status"], ["class", "column-nowrap psl-3 tbl-col-width-per-15", 3, "click", 4, "matCellDef"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-25 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-25 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [1, "materialTableHeader", "mt-2"], [4, "ngIf"], ["matTooltip", "Edit Accounting Details", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [3, "ngSwitch"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", 3, "click"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-25", "pr-0"], ["matTooltip", "View", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matTooltip", "Edit", "mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "Delete", "mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matTooltip", "Receive", "mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "hidden", "click"], ["matRipple", "", 3, "click"], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function ViewReqItemsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewReqItemsDialogComponent_div_1_Template, 81, 13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requisitionData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_12__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXJlcS1pdGVtcy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


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


/***/ })

}]);
//# sourceMappingURL=default-src_app_erp-inventory_modules_inventory-management_pages_Inventory-management_module_ts.js.map
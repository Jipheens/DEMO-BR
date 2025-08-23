"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-suppliersmanagement_data_supplier-maintenance_service_ts"],{

/***/ 70999:
/*!******************************************************************************!*\
  !*** ./src/app/erp-suppliersmanagement/data/supplier-maintenance.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuppliersService": () => (/* binding */ SuppliersService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class SuppliersService {
    constructor(http) {
        this.http = http;
    }
    getSuppliers() {
        const SupplierssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/suppliers/all`;
        return this.http.get(SupplierssUrl);
    }
    getSuppliersByStatus(params) {
        const SupplierssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/suppliers/all/by/status`;
        return this.http.get(SupplierssUrl, { params });
    }
    getSuppliersByCategory(params) {
        const SupplierssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/suppliers/category`;
        return this.http.get(SupplierssUrl, { params });
    }
    getSuppliersById(params) {
        const SupplierssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/suppliers/find/by/id`;
        return this.http.get(SupplierssUrl, { params });
    }
    getSuppliersByCode(params) {
        const SupplierssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/suppliers/find/by/supplierCode`;
        return this.http.get(SupplierssUrl, { params });
    }
    addSuppliers(data) {
        const SupplierssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/suppliers/create`;
        return this.http.post(SupplierssUrl, data);
    }
    updateSuppliers(SuppliersDetails) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/suppliers/update`;
        return this.http.put(updateBillUrl, SuppliersDetails);
    }
    deleteSuppliersTemporarily(params) {
        const SupplierssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/suppliers/delete`;
        return this.http.delete(SupplierssUrl, { params });
    }
    validateSuppliers(dataToValidate) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/suppliers/update/state`;
        return this.http.put(updateBillUrl, dataToValidate);
    }
    addBulkSuppliers(data) {
        const SupplierssUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlProcurement}/api/v1/suppliers/create/bulk`;
        return this.http.post(SupplierssUrl, data);
    }
}
SuppliersService.ɵfac = function SuppliersService_Factory(t) { return new (t || SuppliersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SuppliersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SuppliersService, factory: SuppliersService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_erp-suppliersmanagement_data_supplier-maintenance_service_ts.js.map
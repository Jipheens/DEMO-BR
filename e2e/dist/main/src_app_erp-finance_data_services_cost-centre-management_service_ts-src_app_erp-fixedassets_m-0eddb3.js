"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-finance_data_services_cost-centre-management_service_ts-src_app_erp-fixedassets_m-0eddb3"],{

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

/***/ 44479:
/*!*****************************************************************************!*\
  !*** ./src/app/erp-finance/data/services/cost-centre-management.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CostCentreManagementService": () => (/* binding */ CostCentreManagementService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class CostCentreManagementService {
    constructor(http) {
        this.http = http;
    }
    // ****************************************************************************************************************************
    // fetch all cost centres
    getCostCentres() {
        const costCentresUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/costCenters/all`;
        return this.http.get(costCentresUrl);
    }
    getCostCentersById(params) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/costCenters/find/by/id`, { params });
    }
    getCostCentersByStatus(params) {
        const costCentresUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/costCenters/fetchbyStatus`;
        return this.http.get(costCentresUrl, { params });
    }
    //adding cost centres
    addCostCentre(data) {
        const costCentresUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/costCenters/create`;
        return this.http.post(costCentresUrl, data);
    }
    //updating cost centres
    updateCostCentre(data) {
        const costCentresUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/costCenters/update`;
        return this.http.put(costCentresUrl, data);
    }
    deleteCostCentreTemporarily(params) {
        const costCentresUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/costCenters/delete`;
        return this.http.delete(costCentresUrl, { params });
    }
    uploadBatchCostCentres(data) {
        const costCentresUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/costCenters/create/bulk`;
        return this.http.post(costCentresUrl, data);
    }
    validateCostCenters(dataToValidate) {
        const imprestUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/costCenters/update/state`;
        return this.http.put(imprestUrl, dataToValidate);
    }
}
CostCentreManagementService.ɵfac = function CostCentreManagementService_Factory(t) { return new (t || CostCentreManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CostCentreManagementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CostCentreManagementService, factory: CostCentreManagementService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 33440:
/*!*********************************************************************!*\
  !*** ./src/app/erp-fixedassets/data/services/asset-main.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedAssetService": () => (/* binding */ FixedAssetService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class FixedAssetService {
    constructor(http) {
        this.http = http;
    }
    getFixedAssets() {
        const FixedAssetsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/fixed-assets/all`;
        return this.http.get(FixedAssetsUrl);
    }
    getFixedAssetsByStatus(params) {
        const FixedAssetsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/fixed-assets/fetchbyStatus`;
        return this.http.get(FixedAssetsUrl, {
            params: params,
        });
    }
    getFixedAssetsToRegisterByStatus(params) {
        const FixedAssetsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/fixed-assets/register/all`;
        return this.http.get(FixedAssetsUrl, {
            params: params,
        });
    }
    getFixedAssetsById(params) {
        const FixedAssetsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/fixed-assets/find/by/id`;
        return this.http.get(FixedAssetsUrl, { params: params, });
    }
    addFixedAssets(data) {
        const FixedAssetsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/fixed-assets/create`;
        return this.http.post(FixedAssetsUrl, data);
    }
    addReceivedFixedAssets(data) {
        const FixedAssetsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/fixed-assets/register`;
        return this.http.post(FixedAssetsUrl, data);
    }
    addBulkFixedAssets(data) {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/fixed-assets/create/bulk`;
        return this.http.post(GLAccountManagementUrl, data);
    }
    updateFixedAssets(FixedAssetsDetails) {
        const updateBillUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/fixed-assets/update`;
        return this.http.put(updateBillUrl, FixedAssetsDetails);
    }
    deleteFixedAssetsTemporarily(params) {
        const FixedAssetsUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/fixed-assets/delete`;
        return this.http.delete(FixedAssetsUrl, { params });
    }
    validateFixedAssets(dataToValidate) {
        const imprestUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlFinance}/api/v1/fixed-assets/update/state`;
        return this.http.put(imprestUrl, dataToValidate);
    }
}
FixedAssetService.ɵfac = function FixedAssetService_Factory(t) { return new (t || FixedAssetService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
FixedAssetService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FixedAssetService, factory: FixedAssetService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 56273:
/*!***************************************************************************************************************!*\
  !*** ./src/app/erp-fixedassets/modules/fixed-assests-management/assest-register/assest-register.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssestRegisterComponent": () => (/* binding */ AssestRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_finance_data_lookups_validation_cost_centre_validation_cost_centre_validation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/validation/cost-centre-validation/cost-centre-validation.component */ 93219);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-procurement/data/services/notification.service */ 67879);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var src_app_erp_fixedassets_data_services_asset_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-fixedassets/data/services/asset-main.service */ 33440);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 65590);























const _c0 = ["fileInput"];
function AssestRegisterComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16)(1, "div", 38)(2, "div", 39)(3, "div", 40)(4, "div", 41)(5, "div", 16)(6, "div", 42)(7, "div", 43)(8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Posted By");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 45)(11, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 42)(14, "div", 43)(15, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Posted Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 45)(18, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 42)(22, "div", 43)(23, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Verified By");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 45)(26, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 42)(29, "div", 43)(30, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Verification Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 45)(33, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 16)(37, "div", 50)(38, "div", 51)(39, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Verifier Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 45)(42, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.postedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](20, 5, ctx_r1.formData.postedTime, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.verifiedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](35, 8, ctx_r1.formData.verifiedTime, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.verifierRemarks, " ");
} }
function AssestRegisterComponent_div_7_ng_container_14_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_ng_container_14_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Item Category is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_ng_container_14_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Quantity is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_ng_container_14_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Total Cost is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_ng_container_14_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Unit is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_ng_container_14_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Unit Cost is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 19)(2, "mat-form-field", 20)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AssestRegisterComponent_div_7_ng_container_14_mat_error_6_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 19)(8, "mat-form-field", 20)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Item Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, AssestRegisterComponent_div_7_ng_container_14_mat_error_12_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 19)(14, "mat-form-field", 20)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, AssestRegisterComponent_div_7_ng_container_14_mat_error_18_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 19)(20, "mat-form-field", 20)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Total Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, AssestRegisterComponent_div_7_ng_container_14_mat_error_24_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 19)(26, "mat-form-field", 20)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, AssestRegisterComponent_div_7_ng_container_14_mat_error_30_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 19)(32, "mat-form-field", 20)(33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " Unit Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, AssestRegisterComponent_div_7_ng_container_14_mat_error_36_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.mngForm.get("name").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.mngForm.get("itemCategory").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.mngForm.get("quantity").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.mngForm.get("totalCost").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.mngForm.get("unit").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.mngForm.get("unitCost").hasError("required"));
} }
function AssestRegisterComponent_div_7_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Fixed Asset Reg Fk is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Purchase Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Purchase Amount is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Current Value is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Salvage Value is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_mat_error_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Depreciation Method is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Depreciation Rate is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Useful Life is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_mat_error_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Depreciation Debit Account is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_mat_error_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Depreciation Credit Account is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_ng_container_79_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Accumulated Depreciation is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_ng_container_79_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Depreciated Value is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_ng_container_79_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Month is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_ng_container_79_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Year is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_ng_container_79_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AssestRegisterComponent_div_7_ng_container_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 19)(2, "mat-form-field", 20)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Accumulated Depreciation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AssestRegisterComponent_div_7_ng_container_79_mat_error_6_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 19)(8, "mat-form-field", 20)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Depreciated Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, AssestRegisterComponent_div_7_ng_container_79_mat_error_12_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 19)(14, "mat-form-field", 20)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Month ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, AssestRegisterComponent_div_7_ng_container_79_mat_error_18_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 19)(20, "mat-form-field", 20)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, AssestRegisterComponent_div_7_ng_container_79_mat_error_24_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 63)(26, "mat-form-field", 20)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "textarea", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, AssestRegisterComponent_div_7_ng_container_79_mat_error_30_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.mngForm.get("accumulatedDepreciation").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.mngForm.get("depreciatedValue").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.mngForm.get("month").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.mngForm.get("year").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.mngForm.get("description").hasError("required"));
} }
function AssestRegisterComponent_div_7_button_87_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssestRegisterComponent_div_7_button_87_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r28.onValidate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "done_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r16.hideApprovals);
} }
function AssestRegisterComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AssestRegisterComponent_div_7_div_1_Template, 44, 11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 10)(3, "mat-tab-group", 11, 12)(5, "mat-tab", 13)(6, "div", 14)(7, "div", 5)(8, "div", 15)(9, "div", 16)(10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "form", 17)(13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AssestRegisterComponent_div_7_ng_container_14_Template, 37, 6, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 19)(17, "mat-form-field", 20)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Fixed Asset Reg Fk ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, AssestRegisterComponent_div_7_mat_error_21_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 19)(23, "mat-form-field", 20)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Purchase Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "input", 22)(27, "mat-datepicker-toggle", 23)(28, "mat-datepicker", null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, AssestRegisterComponent_div_7_mat_error_30_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 19)(32, "mat-form-field", 20)(33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " Purchase Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, AssestRegisterComponent_div_7_mat_error_36_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 19)(38, "mat-form-field", 20)(39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " Current Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, AssestRegisterComponent_div_7_mat_error_42_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 19)(44, "mat-form-field", 20)(45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, " Salvage Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, AssestRegisterComponent_div_7_mat_error_48_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 19)(50, "mat-form-field", 20)(51, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, " Depreciation Method ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, AssestRegisterComponent_div_7_mat_error_54_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 19)(56, "mat-form-field", 20)(57, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, " Depreciation Rate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, AssestRegisterComponent_div_7_mat_error_60_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 19)(62, "mat-form-field", 20)(63, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, " Useful Life ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, AssestRegisterComponent_div_7_mat_error_66_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 19)(68, "mat-form-field", 20)(69, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, " Depreciation Debit Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, AssestRegisterComponent_div_7_mat_error_72_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 19)(74, "mat-form-field", 20)(75, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, " Depreciation Credit Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, AssestRegisterComponent_div_7_mat_error_78_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, AssestRegisterComponent_div_7_ng_container_79_Template, 31, 5, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 16)(81, "div", 33)(82, "div", 34)(83, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssestRegisterComponent_div_7_Template_button_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r30.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssestRegisterComponent_div_7_Template_button_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](87, AssestRegisterComponent_div_7_button_87_Template, 4, 1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](29);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.pageFunction !== "Add" && ctx_r0.formData && ctx_r0.pageFunction !== "Receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r0.pageFunction, " Fixed Asset");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.pageFunction !== "Receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("fixedAssetRegFk").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("purchaseDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("purchaseAmount").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("currentValue").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("salvageValue").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("depreciationMethod").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("depreciationRate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("usefulLife").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("depreciationDebitAccount").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("depreciationCreditAccount").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.pageFunction !== "Receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("align", "end");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("auth-spinner", ctx_r0.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.mngForm.valid || ctx_r0.posting)("hidden", ctx_r0.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.hideApprovals);
} }
const _c1 = function () { return ["Fixed Assets"]; };
class AssestRegisterComponent {
    // ****************************************************************************************************************************
    constructor(fb, router, activatedRoute, tokenStorageService, snackbar, route, notificationAPI, dialog, accessControlService, fixedAssetService) {
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.tokenStorageService = tokenStorageService;
        this.snackbar = snackbar;
        this.route = route;
        this.notificationAPI = notificationAPI;
        this.dialog = dialog;
        this.accessControlService = accessControlService;
        this.fixedAssetService = fixedAssetService;
        // define the needed variables
        this.showForm = false;
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.hideApprovals = false;
        this.dataSheet = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.submitted = false;
        this.excelDataPresent = false;
        this.sumofCredits = 0;
        this.excelFileAccepted = false;
        //excel columns
        this.excelHeaderRef = ["costCenterName"];
        this.items = []; // Array to store
        this.itemErrors = [];
        this.templateFilename = "costCentersTemplate.xlsx";
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
                this.pageFunction = params["action"];
                this.id = params["id"];
                if (this.pageFunction !== "Receive") {
                    this.getDataById();
                }
                this.getPage();
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
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("id", this.id);
        this.fixedAssetService
            .getFixedAssetsById(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
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
            rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
    }
    //definition of necessary functions based on action in params
    getPage() {
        console.log("RES", this.formData);
        if (this.pageFunction === "Add") {
            this.generateForm();
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "Update") {
            this.generateFormWithData();
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "View") {
            this.generateDisabledFormWithData();
            this.hideSubmit = true;
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "Receive") {
            this.generateFormForReceive();
            this.hideApprovals = true;
            console.log("fixedAssetRegFkfixedAssetRegFk:: ", this.formData.id);
        }
    }
    // Defining the pages behavior based on action in params
    generateForm() {
        this.mngForm = this.fb.group({
            fixedAssetRegFk: [0],
            fixedItemCode: [""],
            itemCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            itemCategory: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            quantity: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            totalCost: [0],
            unit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            unitCost: [0],
            assetCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            assetName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            purchaseDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            purchaseAmount: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            salvageValue: [0],
            depreciationMethod: ["Straight-Line"],
            currentValue: [0],
            depreciationRate: [0],
            usefulLife: [0],
            accumulatedDepreciation: [0],
            depreciatedValue: [0],
            month: [""],
            year: [0],
            depreciationDebitAccount: [""],
            depreciationCreditAccount: [""],
        });
    }
    // {
    //   "id": 0,
    //   "fixedAssetRegFk": 0,
    //   "purchaseDate": "2024-02-28",
    //   "purchaseAmount": 0,
    //   "salvageValue": 0,
    //   "depreciationMethod": "string",
    //   "currentValue": 0,
    //   "depreciationRate": 0,
    //   "usefulLife": 0,
    //   "depreciationDebitAccount": "string",
    //   "depreciationCreditAccount": "string"
    // }
    generateFormForReceive() {
        this.mngForm = this.fb.group({
            fixedAssetRegFk: [this.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            fixedItemCode: [""],
            itemCode: [""],
            itemCategory: [""],
            name: [""],
            description: [""],
            quantity: [0],
            totalCost: [0],
            unit: [""],
            unitCost: [0],
            assetCode: [""],
            assetName: [""],
            purchaseDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            purchaseAmount: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            salvageValue: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            depreciationMethod: ["Straight-Line", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            currentValue: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            depreciationRate: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            usefulLife: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            depreciationDebitAccount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            depreciationCreditAccount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            accumulatedDepreciation: [0],
            depreciatedValue: [0],
            month: [""],
            year: [0],
        });
    }
    generateFormWithData() {
        this.mngForm = this.fb.group({
            fixedAssetRegFk: [this.formData.fixedAssetRegFk],
            fixedItemCode: [this.formData.fixedItemCode],
            itemCode: [this.formData.itemCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            itemCategory: [this.formData.itemCategory, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            name: [this.formData.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            description: [this.formData.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            quantity: [this.formData.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            totalCost: [this.formData.totalCost],
            unit: [this.formData.unit, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            unitCost: [this.formData.unitCost],
            assetCode: [this.formData.assetCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            assetName: [this.formData.assetName, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            purchaseDate: [this.formData.purchaseDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            purchaseAmount: [this.formData.purchaseAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            salvageValue: [this.formData.salvageValue],
            depreciationMethod: [this.formData.depreciationMethod],
            currentValue: [this.formData.currentValue],
            depreciationRate: [this.formData.depreciationRate],
            usefulLife: [this.formData.usefulLife],
            accumulatedDepreciation: [this.formData.accumulatedDepreciation],
            depreciatedValue: [this.formData.depreciatedValue],
            month: [this.formData.month],
            year: [this.formData.year],
            depreciationDebitAccount: [this.formData.depreciationDebitAccount],
            depreciationCreditAccount: [this.formData.depreciationCreditAccount],
        });
    }
    generateDisabledFormWithData() {
        this.mngForm = this.fb.group({
            fixedAssetRegFk: [{ value: 0, disabled: true }],
            fixedItemCode: [{ value: "", disabled: true }],
            itemCode: [
                { value: this.formData.itemCode, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            ],
            itemCategory: [
                { value: this.formData.itemCategory, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            ],
            name: [
                { value: this.formData.name, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            ],
            description: [
                { value: this.formData.description, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            ],
            quantity: [
                { value: this.formData.quantity, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            ],
            totalCost: [{ value: 0, disabled: true }],
            unit: [
                { value: this.formData.unit, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            ],
            unitCost: [{ value: this.formData.unitCost, disabled: true }],
            assetCode: [
                { value: this.formData.assetCode, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            ],
            assetName: [
                { value: this.formData.assetName, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            ],
            purchaseDate: [
                { value: this.formData.purchaseDate, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            ],
            purchaseAmount: [
                { value: this.formData.purchaseAmount, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            ],
            salvageValue: [{ value: this.formData.salvageValue, disabled: true }],
            depreciationMethod: [
                { value: this.formData.depreciationMethod, disabled: true },
            ],
            currentValue: [{ value: this.formData.currentValue, disabled: true }],
            depreciationRate: [
                { value: this.formData.depreciationRate, disabled: true },
            ],
            usefulLife: [{ value: this.formData.usefulLife, disabled: true }],
            accumulatedDepreciation: [
                { value: this.formData.accumulatedDepreciation, disabled: true },
            ],
            depreciatedValue: [
                { value: this.formData.depreciatedValue, disabled: true },
            ],
            month: [{ value: this.formData.month, disabled: true }],
            year: [{ value: this.formData.year, disabled: true }],
            depreciationDebitAccount: [
                { value: this.formData.depreciationDebitAccount, disabled: true },
            ],
            depreciationCreditAccount: [
                { value: this.formData.depreciationCreditAccount, disabled: true },
            ],
        });
    }
    // ****************************************************************************************************************************
    //cancel button function
    cancel() {
        this.router.navigate([
            "/erp-fixed-assets/fixed-assets-management/assets-record",
        ]);
    }
    handleFileInput(files) {
        const file = files.item(0);
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_13__.read(arrayBuffer, { type: "array" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = xlsx__WEBPACK_IMPORTED_MODULE_13__.utils.sheet_to_json(worksheet, { raw: true });
                this.items = jsonData;
                // this.items = [
                //   {
                //     costCenterName: "rrewrew",
                //     costCenterCode: "33343",
                //   },
                // ];
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
                costCenterName: [item.costCenterName, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
                costCenterCode: [item.costCenterCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            });
            itemsFormArray.push(formGroup);
            this.collectErrors(formGroup);
            if (formGroup.valid) {
            }
        }
    }
    collectErrors(control, path = "") {
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup) {
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
    onValidate() {
        let privilege = "Manage CCentres"; //Insert the priviledge later
        this.hasAccess = this.accessControlService.hasPrivilege("FinanceModule", [
            privilege,
        ]);
        if (this.hasAccess) {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.width = "800px";
            dialogConfig.data = {
                data: [this.formData],
                // userType: userType
            };
            const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_validation_cost_centre_validation_cost_centre_validation_component__WEBPACK_IMPORTED_MODULE_0__.CostCentreValidationComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                this.router.navigate([
                    "/erp-fixed-assets/fixed-assets-management/assets-record",
                ]);
            });
        }
    }
    submit() {
        this.posting = true;
        if (this.pageFunction === "Add") {
            this.fixedAssetService
                .addFixedAssets(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 201 || 200 || 0) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                        this.router.navigate([
                            "/erp-fixed-assets/fixed-assets-management/assets-record",
                        ]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.fixedAssetService
                .updateFixedAssets(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 201 || 200 || 0) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                        this.router.navigate([
                            "/erp-fixed-assets/fixed-assets-management/assets-record",
                        ]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
        }
        if (this.pageFunction === "Receive") {
            this.fixedAssetService
                .addFixedAssets(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 201 || 200 || 0) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                        this.router.navigate([
                            "/erp-fixed-assets/fixed-assets-management/assets-record",
                        ]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
        }
    }
    //Uploading a batch of items
    submitBatch() {
        this.posting = true;
        if (this.pageFunction === "Add") {
            this.fixedAssetService
                .addFixedAssets(this.items)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 201 || 200 || 0) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                        this.router.navigate([
                            "/erp-fixed-assets/fixed-assets-management/assets-record",
                        ]);
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
                rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
        }
    }
}
AssestRegisterComponent.ɵfac = function AssestRegisterComponent_Factory(t) { return new (t || AssestRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_4__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_fixedassets_data_services_asset_main_service__WEBPACK_IMPORTED_MODULE_5__.FixedAssetService)); };
AssestRegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AssestRegisterComponent, selectors: [["app-assest-register"]], viewQuery: function AssestRegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 8, vars: 5, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], ["class", "body", 4, "ngIf"], [1, "body"], ["class", "row", 4, "ngIf"], [1, "mx-2"], ["animationDuration", "1000ms"], ["tabGroup", ""], ["label", "ADD ASSET"], [1, "row", "clearfix", "mx-2"], [1, "header"], [1, "row"], [1, "m-4", 3, "formGroup"], [4, "ngIf"], [1, "col-xl-3", "col-lg-3", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["type", "number", "matInput", "", "formControlName", "fixedAssetRegFk"], ["matInput", "", "formControlName", "purchaseDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["type", "number", "matInput", "", "formControlName", "purchaseAmount"], ["type", "number", "matInput", "", "formControlName", "currentValue"], ["type", "number", "matInput", "", "formControlName", "salvageValue"], ["matInput", "", "formControlName", "depreciationMethod"], ["type", "number", "matInput", "", "formControlName", "depreciationRate"], ["type", "number", "matInput", "", "formControlName", "usefulLife"], ["matInput", "", "formControlName", "depreciationDebitAccount"], ["matInput", "", "formControlName", "depreciationCreditAccount"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["mat-dialog-action", "", 3, "align"], ["type", "button", "mat-raised-button", "", "color", "warn", "mat-button", "", 1, "btn-space", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "hidden", "click"], ["class", "btn-space", "mat-raised-button", "", "color", "primary", 3, "hidden", "click", 4, "ngIf"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card", "bg-color"], [1, "chat"], [1, "chat-header", "clearfix"], [1, "col-lg-3", "col-md-4", "col-sm-12", "col-xs-12"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages", "mt-2"], [1, "badge", "badge-solid-blue", 2, "color", "#fff", "background-color", "#007bff"], [1, "badge", "badge-solid-pink", 2, "color", "#fff", "background-color", "#e81c62"], [1, "badge", "badge-solid-blue", 2, "color", "#fff", "background-color", "#28a745"], [1, "badge", "badge-solid-pink", 2, "color", "#fff", "background-color", "#d35400"], [1, "col-12"], [1, "chat-about", "mt-2", "remarks-container"], [1, "badge", "badge-solid-green", 2, "color", "#fff", "background-color", "#004840"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "itemCategory"], ["type", "number", "matInput", "", "formControlName", "quantity"], ["type", "number", "matInput", "", "formControlName", "totalCost"], ["matInput", "", "formControlName", "unit"], ["type", "number", "matInput", "", "formControlName", "unitCost"], ["type", "number", "matInput", "", "formControlName", "accumulatedDepreciation"], ["type", "number", "matInput", "", "formControlName", "depreciatedValue"], ["matInput", "", "formControlName", "month"], ["type", "number", "matInput", "", "formControlName", "year"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "description"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "hidden", "click"]], template: function AssestRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AssestRegisterComponent_div_7_Template, 88, 23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Manage Fixed Asset")("items", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c1))("active_item", "Fixed Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showForm);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 800px) {\n  .responsive_table[_ngcontent-%COMP%] {\n    overflow-x: auto !important;\n  }\n\n  .mat-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n}\n\n.mat-row[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.mat-header-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\n  text-align: center !important;\n  padding: 0px 8px 0px 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2VzdC1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNFLFdBQUE7QUFDSjs7QUFJRTtFQUNFO0lBQ0ksMkJBQUE7RUFETjs7RUFJRTtJQUNJLGdCQUFBO0VBRE47QUFDRjs7QUFJRTtFQUNFLFlBQUE7QUFGSjs7QUFLRTtFQUNFLDZCQUFBO0VBQ0EsbUNBQUE7QUFGSiIsImZpbGUiOiJhc3Nlc3QtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIHRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbiAgLy9yZXNwb25zaXZlIHRhYmxlXG4gIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLnJlc3BvbnNpdmVfdGFibGUge1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICAubWF0LXRhYmxlIHtcbiAgICAgICAgbWluLXdpZHRoOjgwMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLm1hdC1yb3cge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgLm1hdC1oZWFkZXItY2VsbCwubWF0LWNlbGwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCA4cHggMHB4IDhweCAhaW1wb3J0YW50O1xuICB9Il19 */"] });


/***/ }),

/***/ 78042:
/*!*************************************************************************************************************!*\
  !*** ./src/app/erp-fixedassets/modules/fixed-assests-management/fixed-assests-management-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedAssestsManagementRoutingModule": () => (/* binding */ FixedAssestsManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _assest_register_assest_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assest-register/assest-register.component */ 56273);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _view_assets_view_assets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-assets/view-assets.component */ 92080);
/* harmony import */ var _view_assets_recieved_view_assets_recieved_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-assets-recieved/view-assets-recieved.component */ 93037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [{
        path: "assets-register",
        component: _assest_register_assest_register_component__WEBPACK_IMPORTED_MODULE_0__.AssestRegisterComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'FixedAssetsModule', requiredPrivilege: ["Dashboard"] }
    },
    {
        path: "assets-record",
        component: _view_assets_view_assets_component__WEBPACK_IMPORTED_MODULE_2__.ViewAssetsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'FixedAssetsModule', requiredPrivilege: ["Dashboard"] }
    },
    {
        path: "assets-received",
        component: _view_assets_recieved_view_assets_recieved_component__WEBPACK_IMPORTED_MODULE_3__.ViewAssetsRecievedComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: { clientName: 'FixedAssetsModule', requiredPrivilege: ["Dashboard"] }
    },
    //  {
    //   path: "accounting",
    //   component: AccountingComponent,
    //   canActivate: [RoutePrivilegeGuard],
    //   data: { clientName: 'FixedAssetsModule', requiredPrivilege: ["Dashboard"]}
    //  },
    //  {
    //   path: "add-asset",
    //   component: AddAssetComponent,
    //   canActivate: [RoutePrivilegeGuard],
    //   data: { clientName: 'FixedAssetsModule', requiredPrivilege: ["Dashboard"]}
    //  },
    //  {
    //   path: "validate-asset",
    //   component: SingleAssetVerificationComponent,
    //   canActivate: [RoutePrivilegeGuard],
    //   data: { clientName: 'FixedAssetsModule', requiredPrivilege: ["Dashboard"]}
    //  },
];
class FixedAssestsManagementRoutingModule {
}
FixedAssestsManagementRoutingModule.ɵfac = function FixedAssestsManagementRoutingModule_Factory(t) { return new (t || FixedAssestsManagementRoutingModule)(); };
FixedAssestsManagementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FixedAssestsManagementRoutingModule });
FixedAssestsManagementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FixedAssestsManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 63274:
/*!*****************************************************************************************************!*\
  !*** ./src/app/erp-fixedassets/modules/fixed-assests-management/fixed-assests-management.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedAssestsManagementModule": () => (/* binding */ FixedAssestsManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _fixed_assests_management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fixed-assests-management-routing.module */ 78042);
/* harmony import */ var _assest_register_assest_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assest-register/assest-register.component */ 56273);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/components.module */ 15626);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _view_assets_view_assets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-assets/view-assets.component */ 92080);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 84327);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/badge */ 70178);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 43672);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/slider */ 61859);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _view_assets_recieved_view_assets_recieved_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-assets-recieved/view-assets-recieved.component */ 93037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);











































class FixedAssestsManagementModule {
}
FixedAssestsManagementModule.ɵfac = function FixedAssestsManagementModule_Factory(t) { return new (t || FixedAssestsManagementModule)(); };
FixedAssestsManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: FixedAssestsManagementModule });
FixedAssestsManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], imports: [[
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _fixed_assests_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.FixedAssestsManagementRoutingModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBarModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
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
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__.MatStepperModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_33__.NgxMaskModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__.MatChipsModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_35__.MatAutocompleteModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_36__.MatBadgeModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_38__.MatListModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__.MatSidenavModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__.MatExpansionModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__.MatSliderModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__.NgbModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](FixedAssestsManagementModule, { declarations: [_assest_register_assest_register_component__WEBPACK_IMPORTED_MODULE_1__.AssestRegisterComponent,
        _view_assets_view_assets_component__WEBPACK_IMPORTED_MODULE_4__.ViewAssetsComponent,
        _view_assets_recieved_view_assets_recieved_component__WEBPACK_IMPORTED_MODULE_6__.ViewAssetsRecievedComponent], imports: [_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _fixed_assests_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.FixedAssestsManagementRoutingModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBarModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
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
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__.MatStepperModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_33__.NgxMaskModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__.MatChipsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_35__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_36__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_38__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__.MatSidenavModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__.MatExpansionModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__.MatSliderModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__.NgbModule] }); })();


/***/ }),

/***/ 93037:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/erp-fixedassets/modules/fixed-assests-management/view-assets-recieved/view-assets-recieved.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAssetsRecievedComponent": () => (/* binding */ ViewAssetsRecievedComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_fixedassets_data_services_asset_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-fixedassets/data/services/asset-main.service */ 33440);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard/pages/gen-widgets/gen-widgets.component */ 7566);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);






























function ViewAssetsRecievedComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-bar", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewAssetsRecievedComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "div", 74)(2, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_li_29_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r37.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
function ViewAssetsRecievedComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "div", 76)(2, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_li_30_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r39.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
function ViewAssetsRecievedComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "div", 78)(2, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_li_31_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r41.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
function ViewAssetsRecievedComponent_mat_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", reqStatus_r43.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", reqStatus_r43.name, " ");
} }
function ViewAssetsRecievedComponent_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewAssetsRecievedComponent_mat_header_cell_70_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 81)(1, "mat-checkbox", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ViewAssetsRecievedComponent_mat_header_cell_70_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return $event ? ctx_r44.masterToggle() : null; })("change", function ViewAssetsRecievedComponent_mat_header_cell_70_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r46.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r9.selection.hasValue() && ctx_r9.isAllSelected())("indeterminate", ctx_r9.selection.hasValue() && !ctx_r9.isAllSelected())("ngClass", "tbl-checkbox");
} }
function ViewAssetsRecievedComponent_mat_cell_71_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 81)(1, "mat-checkbox", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_mat_cell_71_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function ViewAssetsRecievedComponent_mat_cell_71_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50); const row_r47 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return $event ? ctx_r49.selection.toggle(row_r47) : null; })("change", function ViewAssetsRecievedComponent_mat_cell_71_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r51.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r47 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r10.selection.isSelected(row_r47))("ngClass", "tbl-checkbox")("aria-label", ctx_r10.checkboxLabel(row_r47));
} }
function ViewAssetsRecievedComponent_mat_header_cell_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewAssetsRecievedComponent_mat_cell_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r52.id || "N/A");
} }
function ViewAssetsRecievedComponent_mat_header_cell_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Item Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewAssetsRecievedComponent_mat_cell_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r53.itemCode || "N/A");
} }
function ViewAssetsRecievedComponent_mat_header_cell_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Item Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewAssetsRecievedComponent_mat_cell_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r54.itemCategory || "N/A");
} }
function ViewAssetsRecievedComponent_mat_header_cell_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewAssetsRecievedComponent_mat_cell_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r55.name || "N/A");
} }
function ViewAssetsRecievedComponent_mat_header_cell_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewAssetsRecievedComponent_mat_cell_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r56.description || "N/A");
} }
function ViewAssetsRecievedComponent_mat_header_cell_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewAssetsRecievedComponent_mat_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r57.quantity || "N/A");
} }
function ViewAssetsRecievedComponent_mat_header_cell_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Total Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewAssetsRecievedComponent_mat_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r58.totalCost || "N/A");
} }
function ViewAssetsRecievedComponent_mat_header_cell_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewAssetsRecievedComponent_mat_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r59.unit || "N/A");
} }
function ViewAssetsRecievedComponent_mat_header_cell_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Unit Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewAssetsRecievedComponent_mat_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r60.unitCost || "N/A");
} }
function ViewAssetsRecievedComponent_mat_header_cell_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewAssetsRecievedComponent_mat_cell_101_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0", row_r61.status, " ");
} }
function ViewAssetsRecievedComponent_mat_cell_101_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0", row_r61.status, " ");
} }
function ViewAssetsRecievedComponent_mat_cell_101_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0", row_r61.status, " ");
} }
function ViewAssetsRecievedComponent_mat_cell_101_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0", row_r61.status, " ");
} }
function ViewAssetsRecievedComponent_mat_cell_101_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0", row_r61.status, " ");
} }
function ViewAssetsRecievedComponent_mat_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_mat_cell_101_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ViewAssetsRecievedComponent_mat_cell_101_button_2_Template, 3, 1, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ViewAssetsRecievedComponent_mat_cell_101_button_3_Template, 3, 1, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ViewAssetsRecievedComponent_mat_cell_101_button_4_Template, 3, 1, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ViewAssetsRecievedComponent_mat_cell_101_button_5_Template, 3, 1, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ViewAssetsRecievedComponent_mat_cell_101_button_6_Template, 3, 1, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", row_r61.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function ViewAssetsRecievedComponent_mat_header_cell_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewAssetsRecievedComponent_mat_cell_104_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 105)(1, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_mat_cell_104_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ViewAssetsRecievedComponent_mat_cell_104_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r78); const row_r74 = restoredCtx.$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r77.receiveAsset(row_r74, "Receive"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function ViewAssetsRecievedComponent_mat_header_row_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
} }
function ViewAssetsRecievedComponent_mat_row_106_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-row", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_mat_row_106_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r81); const row_r79 = restoredCtx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r80.viewAsset(row_r79); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ViewAssetsRecievedComponent_mat_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r35.input.value, "\"");
} }
function ViewAssetsRecievedComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Fixed Assets"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class ViewAssetsRecievedComponent {
    // ****************************************************************************************************************************
    constructor(router, snackbar, fixedAssetService, accessControlService, dialog, fb) {
        this.router = router;
        this.snackbar = snackbar;
        this.fixedAssetService = fixedAssetService;
        this.accessControlService = accessControlService;
        this.dialog = dialog;
        this.fb = fb;
        this.displayedColumns = [
            "id",
            "itemCode",
            "itemCategory",
            "name",
            "description",
            "quantity",
            "totalCost",
            "unit",
            "unitCost",
            "status",
            "actions"
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
        this.isLoading = true;
        this.pageFunction = "ADD"; //default value
        //management of data destruction upon usage
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.downloadLoading = false;
        // ****************************************************************************************************************************
        this.reqStatuses = [
            { name: "PENDING" },
            // { name: "VERIFIED" },
            { name: "APPROVED" },
            { name: "RETURNED" },
            { name: "REJECTED" },
        ];
        this.selectedStatus = "PENDING";
        // ****************************************************************************************************************************
        //Select GL Accounts
        this.selectedRows = [];
        this.atleastOneSelected = false;
    }
    ngOnInit() {
        this.Form = this.fb.group({
            status: ["PENDING", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        });
        this.getData();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    // ****************************************************************************************************************************
    // data filtering
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getSelectSelectedStatus() {
        this.getData();
    }
    getSelectedStatus(status) {
        this.Form.patchValue({
            status: status,
        });
        this.getData();
    }
    getData() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = true;
        this.selectedStatus = this.Form.value.status;
        let params = {
            status: this.Form.value.status,
        };
        this.fixedAssetService
            .getFixedAssetsToRegisterByStatus(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.data :", res);
                if (res.entity) {
                    this.data = res;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(this.data.entity);
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
            rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription;
    }
    refresh() {
        this.getData();
    }
    // ****************************************************************************************************************************
    receiveAsset(data, action) {
        let route = "/erp-fixed-assets/fixed-assets-management/assets-register";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                action: action,
            },
        });
    }
    //deleting Assets
    deleteAsset(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you Sure?",
            text: "This cost centre will be deleted!!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete this cost centre ",
        }).then((result) => {
            if (result.isConfirmed) {
                let params = { id: id };
                this.fixedAssetService
                    .deleteFixedAssetsTemporarily(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
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
                        this.getData();
                    },
                }),
                    rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription;
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
        this.isLoading = true;
        let privilege = "Dashboard";
        //Validate CostCenters
        this.hasAccess = this.accessControlService.hasPrivilege("FinanceModule", [
            privilege,
        ]);
        if (this.hasAccess) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: '<span style="font-size: 20px;">Enter Verifier Remarks</span>',
                input: "textarea",
                inputPlaceholder: "Type your remarks here...",
                confirmButtonText: "Submit",
                showCancelButton: true,
                cancelButtonText: "Cancel",
                icon: "info",
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
                    this.fixedAssetService
                        .validateFixedAssets(processedRows)
                        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
                        .subscribe({
                        next: (res) => {
                            console.log("res: ", res);
                            if (res.statusCode == 201 || 200 || 0) {
                                this.snackbar.showNotification("snackbar-success", res.message);
                                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
                            }
                            else {}
                        },
                        error: (err) => {
                            this.snackbar.showNotification("snackbar-danger", err.message);
                        },
                        complete: () => {
                            this.getData();
                            this.isLoading = false;
                        },
                    }),
                        rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription;
                }
                else {
                    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
                }
            });
        }
    }
}
ViewAssetsRecievedComponent.ɵfac = function ViewAssetsRecievedComponent_Factory(t) { return new (t || ViewAssetsRecievedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_fixedassets_data_services_asset_main_service__WEBPACK_IMPORTED_MODULE_2__.FixedAssetService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder)); };
ViewAssetsRecievedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ViewAssetsRecievedComponent, selectors: [["app-view-assets-recieved"]], viewQuery: function ViewAssetsRecievedComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 110, vars: 22, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "REFRESH", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [1, "col-2"], [3, "formGroup"], ["appearance", "fill", 1, "example-full-width"], ["formControlName", "status", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-10"], [1, "button-container", "mt-1"], ["mat-raised-button", "", 1, "mat-button", "pending", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "verified", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-5", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-5", 4, "matCellDef"], ["matColumnDef", "itemCode"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-25", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-25", 4, "matCellDef"], ["matColumnDef", "itemCategory"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "quantity"], ["matColumnDef", "totalCost"], ["matColumnDef", "unit"], ["matColumnDef", "unitCost"], ["matColumnDef", "status"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 3, "click", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [3, "value"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-5"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-5"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-25"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-25"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function ViewAssetsRecievedComponent_Template(rf, ctx) { if (rf & 1) {
        const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ViewAssetsRecievedComponent_div_8_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 4)(13, "div", 11)(14, "ul", 12)(15, "li", 13)(16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Received Fixed Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "li", 14)(19, "label", 15)(20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function ViewAssetsRecievedComponent_Template_input_keyup_22_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "li")(25, "div", 19)(26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_Template_button_click_26_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, ViewAssetsRecievedComponent_li_29_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ViewAssetsRecievedComponent_li_30_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ViewAssetsRecievedComponent_li_31_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 23)(33, "ul", 24)(34, "li")(35, "div", 25)(36, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_Template_img_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](68); return _r8.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "li")(38, "div", 27)(39, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_Template_img_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](68); return _r8.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "li")(41, "div", 29)(42, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_Template_img_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](68); return _r8.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "li")(44, "div", 31)(45, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_Template_img_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](68); return _r8.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 33)(47, "div", 4)(48, "div", 34)(49, "form", 35)(50, "mat-form-field", 36)(51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "mat-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function ViewAssetsRecievedComponent_Template_mat_select_selectionChange_53_listener() { return ctx.getSelectSelectedStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, ViewAssetsRecievedComponent_mat_option_54_Template, 2, 2, "mat-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, ViewAssetsRecievedComponent_mat_error_55_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 39)(57, "div", 40)(58, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_Template_button_click_58_listener() { return ctx.getSelectedStatus("PENDING"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, " PENDING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAssetsRecievedComponent_Template_button_click_62_listener() { return ctx.getSelectedStatus("POSTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, " POSTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "mat-table", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](69, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, ViewAssetsRecievedComponent_mat_header_cell_70_Template, 2, 4, "mat-header-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, ViewAssetsRecievedComponent_mat_cell_71_Template, 2, 4, "mat-cell", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](72, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, ViewAssetsRecievedComponent_mat_header_cell_73_Template, 2, 0, "mat-header-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, ViewAssetsRecievedComponent_mat_cell_74_Template, 2, 1, "mat-cell", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](75, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, ViewAssetsRecievedComponent_mat_header_cell_76_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, ViewAssetsRecievedComponent_mat_cell_77_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](78, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, ViewAssetsRecievedComponent_mat_header_cell_79_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, ViewAssetsRecievedComponent_mat_cell_80_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](81, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](82, ViewAssetsRecievedComponent_mat_header_cell_82_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, ViewAssetsRecievedComponent_mat_cell_83_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](84, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](85, ViewAssetsRecievedComponent_mat_header_cell_85_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, ViewAssetsRecievedComponent_mat_cell_86_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](87, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](88, ViewAssetsRecievedComponent_mat_header_cell_88_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](89, ViewAssetsRecievedComponent_mat_cell_89_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](90, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](91, ViewAssetsRecievedComponent_mat_header_cell_91_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](92, ViewAssetsRecievedComponent_mat_cell_92_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](93, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](94, ViewAssetsRecievedComponent_mat_header_cell_94_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](95, ViewAssetsRecievedComponent_mat_cell_95_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](96, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](97, ViewAssetsRecievedComponent_mat_header_cell_97_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](98, ViewAssetsRecievedComponent_mat_cell_98_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](99, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](100, ViewAssetsRecievedComponent_mat_header_cell_100_Template, 2, 0, "mat-header-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](101, ViewAssetsRecievedComponent_mat_cell_101_Template, 7, 5, "mat-cell", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](102, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](103, ViewAssetsRecievedComponent_mat_header_cell_103_Template, 2, 0, "mat-header-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](104, ViewAssetsRecievedComponent_mat_cell_104_Template, 4, 0, "mat-cell", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](105, ViewAssetsRecievedComponent_mat_header_row_105_Template, 1, 0, "mat-header-row", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](106, ViewAssetsRecievedComponent_mat_row_106_Template, 1, 2, "mat-row", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](107, ViewAssetsRecievedComponent_mat_cell_107_Template, 2, 1, "mat-cell", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](108, ViewAssetsRecievedComponent_div_108_Template, 2, 1, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](109, "mat-paginator", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Received Fixed Assets")("items", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](20, _c0))("active_item", "Received Fixed Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.Form.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.selectedStatus === "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.selectedStatus === "POSTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](21, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__.GenWidgetsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_25__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitchDefault, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWFzc2V0cy1yZWNpZXZlZC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 92080:
/*!*******************************************************************************************************!*\
  !*** ./src/app/erp-fixedassets/modules/fixed-assests-management/view-assets/view-assets.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAssetsComponent": () => (/* binding */ ViewAssetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_fixedassets_data_services_asset_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-fixedassets/data/services/asset-main.service */ 33440);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlService.service */ 96858);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard/pages/gen-widgets/gen-widgets.component */ 7566);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);





























function ViewAssetsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-bar", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "div", 70)(2, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_li_34_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r47.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} }
function ViewAssetsComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "div", 72)(2, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_li_35_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r49.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} }
function ViewAssetsComponent_li_36_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "div", 74)(2, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_li_36_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r51.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} }
function ViewAssetsComponent_mat_header_cell_55_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 76)(1, "mat-checkbox", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ViewAssetsComponent_mat_header_cell_55_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r53.masterToggle() : null; })("change", function ViewAssetsComponent_mat_header_cell_55_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r55.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r7.selection.hasValue() && ctx_r7.isAllSelected())("indeterminate", ctx_r7.selection.hasValue() && !ctx_r7.isAllSelected())("ngClass", "tbl-checkbox");
} }
function ViewAssetsComponent_mat_cell_56_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 76)(1, "mat-checkbox", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_mat_cell_56_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function ViewAssetsComponent_mat_cell_56_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59); const row_r56 = restoredCtx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r58.selection.toggle(row_r56) : null; })("change", function ViewAssetsComponent_mat_cell_56_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r60.expSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "tbl-col-width-per-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r8.selection.isSelected(row_r56))("ngClass", "tbl-checkbox")("aria-label", ctx_r8.checkboxLabel(row_r56));
} }
function ViewAssetsComponent_mat_header_cell_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r61.id || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Fixed Item Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r62.fixedItemCode || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r63.name || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r64.description || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r65.quantity || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Total Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r66.totalCost || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Unit Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r67.unitCost || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Purchase Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r68.purchaseDate || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Purchase Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r69.purchaseAmount || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Salvage Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r70.salvageValue || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Depreciation Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r71.depreciationMethod || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Current Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r72.currentValue || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Depreciation Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r73.depreciationRate || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Useful Life");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r74.usefulLife || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Accumulated Depreciation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r75.accumulatedDepreciation || "N/A");
} }
function ViewAssetsComponent_mat_header_cell_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_104_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0", row_r76.status, " ");
} }
function ViewAssetsComponent_mat_cell_104_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0", row_r76.status, " ");
} }
function ViewAssetsComponent_mat_cell_104_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0", row_r76.status, " ");
} }
function ViewAssetsComponent_mat_cell_104_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0", row_r76.status, " ");
} }
function ViewAssetsComponent_mat_cell_104_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0", row_r76.status, " ");
} }
function ViewAssetsComponent_mat_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_mat_cell_104_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ViewAssetsComponent_mat_cell_104_button_2_Template, 3, 1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ViewAssetsComponent_mat_cell_104_button_3_Template, 3, 1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ViewAssetsComponent_mat_cell_104_button_4_Template, 3, 1, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ViewAssetsComponent_mat_cell_104_button_5_Template, 3, 1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ViewAssetsComponent_mat_cell_104_button_6_Template, 3, 1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", row_r76.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "RETURNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "PENDING");
} }
function ViewAssetsComponent_mat_header_cell_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssetsComponent_mat_cell_107_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 99)(1, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_mat_cell_107_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ViewAssetsComponent_mat_cell_107_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const row_r89 = restoredCtx.$implicit; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r92.editAsset(row_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-feather-icons", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_mat_cell_107_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function ViewAssetsComponent_mat_cell_107_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const row_r89 = restoredCtx.$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r95.viewAsset(row_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-feather-icons", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_mat_cell_107_Template_button_click_5_listener($event) { return $event.stopPropagation(); })("click", function ViewAssetsComponent_mat_cell_107_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const row_r89 = restoredCtx.$implicit; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r97.deleteAsset(row_r89.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-feather-icons", 101);
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
function ViewAssetsComponent_mat_header_row_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
} }
function ViewAssetsComponent_mat_row_109_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-row", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_mat_row_109_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r100); const row_r98 = restoredCtx.$implicit; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r99.viewAsset(row_r98); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ViewAssetsComponent_mat_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r45.input.value, "\"");
} }
function ViewAssetsComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-spinner", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Fixed Assets"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class ViewAssetsComponent {
    // ****************************************************************************************************************************
    constructor(router, snackbar, fixedAssetService, accessControlService, dialog, fb) {
        this.router = router;
        this.snackbar = snackbar;
        this.fixedAssetService = fixedAssetService;
        this.accessControlService = accessControlService;
        this.dialog = dialog;
        this.fb = fb;
        this.displayedColumns = [
            "select",
            "id",
            "fixedItemCode",
            "name",
            "quantity",
            "totalCost",
            "unitCost",
            "purchaseDate",
            "purchaseAmount",
            "salvageValue",
            "depreciationMethod",
            "currentValue",
            "usefulLife",
            "status",
            "actions"
        ];
        this.contextMenuPosition = { x: "0px", y: "0px" };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(true, []);
        this.isLoading = true;
        this.pageFunction = "ADD"; //default value
        //management of data destruction upon usage
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.downloadLoading = false;
        // ****************************************************************************************************************************
        this.reqStatuses = [
            { name: "PENDING" },
            // { name: "VERIFIED" },
            { name: "APPROVED" },
            { name: "RETURNED" },
            { name: "REJECTED" },
        ];
        this.selectedStatus = "PENDING";
        // ****************************************************************************************************************************
        //Select GL Accounts
        this.selectedRows = [];
        this.atleastOneSelected = false;
    }
    ngOnInit() {
        this.Form = this.fb.group({
            status: ["PENDING", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
        });
        this.getData();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    // ****************************************************************************************************************************
    // data filtering
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getSelectSelectedStatus() {
        this.getData();
    }
    getSelectedStatus(status) {
        this.Form.patchValue({
            status: status,
        });
        this.getData();
    }
    getData() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = true;
        this.selectedStatus = this.Form.value.status;
        let params = {
            status: this.Form.value.status,
        };
        this.fixedAssetService
            .getFixedAssets()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("this.data :", res);
                if (res.statusCode === 302) {
                    this.data = res;
                    this.isLoading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(this.data.entity);
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
            rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription;
    }
    refresh() {
        this.getData();
    }
    // ****************************************************************************************************************************
    //adding cost centre
    addCostCenter() {
        this.router.navigate(["/erp-fixed-assets/fixed-assets-management/assets-register"]);
    }
    //Updating the Assets
    editAsset(data) {
        let route = "/erp-fixed-assets/fixed-assets-management/assets-register";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                action: "Update",
            },
        });
    }
    //Viewing the Assets
    viewAsset(data) {
        let route = "/erp-fixed-assets/fixed-assets-management/assets-register";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                action: "View",
            },
        });
    }
    //verify cost centre
    validateExpense(data) {
        let route = "/erp-fixed-assets/fixed-assets-management/assets-register";
        this.router.navigate([route], {
            queryParams: {
                id: data.id,
                action: "Verify",
            },
        });
    }
    //deleting Assets
    deleteAsset(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you Sure?",
            text: "This cost centre will be deleted!!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete this cost centre ",
        }).then((result) => {
            if (result.isConfirmed) {
                let params = { id: id };
                this.fixedAssetService
                    .deleteFixedAssetsTemporarily(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
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
        this.isLoading = true;
        let privilege = "Dashboard";
        //Validate CostCenters
        this.hasAccess = this.accessControlService.hasPrivilege("FinanceModule", [
            privilege,
        ]);
        if (this.hasAccess) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: '<span style="font-size: 20px;">Enter Verifier Remarks</span>',
                input: "textarea",
                inputPlaceholder: "Type your remarks here...",
                confirmButtonText: "Submit",
                showCancelButton: true,
                cancelButtonText: "Cancel",
                icon: "info",
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
                    this.fixedAssetService
                        .validateFixedAssets(processedRows)
                        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$))
                        .subscribe({
                        next: (res) => {
                            console.log("res: ", res);
                            if (res.statusCode == 201 || 200 || 0) {
                                this.snackbar.showNotification("snackbar-success", res.message);
                                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(true, []);
                            }
                            else {}
                        },
                        error: (err) => {
                            this.snackbar.showNotification("snackbar-danger", err.message);
                        },
                        complete: () => {
                            this.getData();
                            this.isLoading = false;
                        },
                    }),
                        rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription;
                }
                else {
                    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(true, []);
                }
            });
        }
    }
}
ViewAssetsComponent.ɵfac = function ViewAssetsComponent_Factory(t) { return new (t || ViewAssetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_fixedassets_data_services_asset_main_service__WEBPACK_IMPORTED_MODULE_2__.FixedAssetService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_erp_procurement_data_services_AccessControlService_service__WEBPACK_IMPORTED_MODULE_3__.AccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder)); };
ViewAssetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ViewAssetsComponent, selectors: [["app-view-assets"]], viewQuery: function ViewAssetsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 113, vars: 15, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], ["class", "m-2 mx-2", 4, "ngIf"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "table-img tbl-col-width-per-5", 4, "matHeaderCellDef"], ["class", "table-img tbl-col-width-per-5", 4, "matCellDef"], ["matColumnDef", "fixedItemCode"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "quantity"], ["matColumnDef", "totalCost"], ["matColumnDef", "unitCost"], ["matColumnDef", "purchaseDate"], ["matColumnDef", "purchaseAmount"], ["matColumnDef", "salvageValue"], ["matColumnDef", "depreciationMethod"], ["matColumnDef", "currentValue"], ["matColumnDef", "depreciationRate"], ["matColumnDef", "usefulLife"], ["matColumnDef", "accumulatedDepreciation"], ["matColumnDef", "status"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 3, "click", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "4", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [3, "ngClass"], ["color", "primary", 3, "checked", "indeterminate", "ngClass", "change"], ["color", "primary", 3, "checked", "ngClass", "aria-label", "click", "change"], ["mat-sort-header", "", 1, "table-img", "tbl-col-width-per-5"], [1, "table-img", "tbl-col-width-per-5"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20", 3, "click"], [3, "ngSwitch"], ["class", "badge badge-solid-green btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-red btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-blue btn btn btn-sm m-1", 4, "ngSwitchCase"], ["class", "badge badge-solid-brown btn btn btn-sm m-1", 4, "ngSwitchDefault"], [1, "badge", "badge-solid-green", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-check-circle"], [1, "badge", "badge-solid-red", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-times-circle"], [1, "badge", "badge-solid-brown", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-undo-alt"], [1, "badge", "badge-solid-blue", "btn", "btn", "btn-sm", "m-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-question-circle"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], ["colspan", "4"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function ViewAssetsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ViewAssetsComponent_div_8_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 4)(13, "div", 11)(14, "ul", 12)(15, "li", 13)(16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Fixed Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "li", 14)(19, "label", 15)(20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ViewAssetsComponent_Template_input_keyup_22_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "li")(25, "div", 19)(26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_Template_button_click_26_listener() { return ctx.addCostCenter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "li")(30, "div", 22)(31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_Template_button_click_31_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, ViewAssetsComponent_li_34_Template, 5, 0, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ViewAssetsComponent_li_35_Template, 5, 0, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ViewAssetsComponent_li_36_Template, 5, 0, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 24)(38, "ul", 25)(39, "li")(40, "div", 26)(41, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_Template_img_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r101); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](53); return _r6.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "li")(43, "div", 28)(44, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_Template_img_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r101); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](53); return _r6.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "li")(46, "div", 30)(47, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_Template_img_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r101); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](53); return _r6.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "li")(49, "div", 32)(50, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssetsComponent_Template_img_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r101); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](53); return _r6.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "mat-table", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](54, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, ViewAssetsComponent_mat_header_cell_55_Template, 2, 4, "mat-header-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, ViewAssetsComponent_mat_cell_56_Template, 2, 4, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](57, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, ViewAssetsComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, ViewAssetsComponent_mat_cell_59_Template, 2, 1, "mat-cell", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](60, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, ViewAssetsComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, ViewAssetsComponent_mat_cell_62_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](63, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, ViewAssetsComponent_mat_header_cell_64_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, ViewAssetsComponent_mat_cell_65_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](66, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, ViewAssetsComponent_mat_header_cell_67_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, ViewAssetsComponent_mat_cell_68_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](69, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, ViewAssetsComponent_mat_header_cell_70_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, ViewAssetsComponent_mat_cell_71_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](72, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, ViewAssetsComponent_mat_header_cell_73_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, ViewAssetsComponent_mat_cell_74_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](75, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, ViewAssetsComponent_mat_header_cell_76_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](77, ViewAssetsComponent_mat_cell_77_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](78, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, ViewAssetsComponent_mat_header_cell_79_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, ViewAssetsComponent_mat_cell_80_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](81, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, ViewAssetsComponent_mat_header_cell_82_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, ViewAssetsComponent_mat_cell_83_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](84, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](85, ViewAssetsComponent_mat_header_cell_85_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](86, ViewAssetsComponent_mat_cell_86_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](87, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](88, ViewAssetsComponent_mat_header_cell_88_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, ViewAssetsComponent_mat_cell_89_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](90, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, ViewAssetsComponent_mat_header_cell_91_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](92, ViewAssetsComponent_mat_cell_92_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](93, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](94, ViewAssetsComponent_mat_header_cell_94_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](95, ViewAssetsComponent_mat_cell_95_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](96, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](97, ViewAssetsComponent_mat_header_cell_97_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](98, ViewAssetsComponent_mat_cell_98_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](99, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](100, ViewAssetsComponent_mat_header_cell_100_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](101, ViewAssetsComponent_mat_cell_101_Template, 2, 1, "mat-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](102, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](103, ViewAssetsComponent_mat_header_cell_103_Template, 2, 0, "mat-header-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](104, ViewAssetsComponent_mat_cell_104_Template, 7, 5, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](105, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](106, ViewAssetsComponent_mat_header_cell_106_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](107, ViewAssetsComponent_mat_cell_107_Template, 7, 9, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](108, ViewAssetsComponent_mat_header_row_108_Template, 1, 0, "mat-header-row", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](109, ViewAssetsComponent_mat_row_109_Template, 1, 2, "mat-row", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](110, ViewAssetsComponent_mat_cell_110_Template, 2, 1, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](111, ViewAssetsComponent_div_111_Template, 2, 1, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](112, "mat-paginator", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "All Fixed Assets")("items", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c0))("active_item", "All Fixed Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_5__.GenWidgetsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_23__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgSwitchDefault, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 800px) {\n  .responsive_table[_ngcontent-%COMP%] {\n    overflow-x: auto !important;\n  }\n\n  .mat-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n}\n\n.mat-row[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.mat-header-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\n  text-align: center !important;\n  padding: 0px 8px 0px 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctYXNzZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsV0FBQTtBQUNKOztBQUlFO0VBQ0U7SUFDSSwyQkFBQTtFQUROOztFQUlFO0lBQ0ksZ0JBQUE7RUFETjtBQUNGOztBQUlFO0VBQ0UsWUFBQTtBQUZKOztBQUtFO0VBQ0UsNkJBQUE7RUFDQSxtQ0FBQTtBQUZKIiwiZmlsZSI6InZpZXctYXNzZXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICB0YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4gIC8vcmVzcG9uc2l2ZSB0YWJsZVxuICBAbWVkaWEobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5yZXNwb25zaXZlX3RhYmxlIHtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgLm1hdC10YWJsZSB7XG4gICAgICAgIG1pbi13aWR0aDo4MDBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5tYXQtcm93IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIC5tYXQtaGVhZGVyLWNlbGwsLm1hdC1jZWxsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHggIWltcG9ydGFudDtcbiAgfSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_erp-finance_data_services_cost-centre-management_service_ts-src_app_erp-fixedassets_m-0eddb3.js.map
"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["default-src_app_core_service_token-storage_service_ts-src_app_erp-hr_modules_case-management_-7385bf"],{

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

/***/ 55927:
/*!**************************************************************************!*\
  !*** ./src/app/erp-hr/data/case-services/case-investigations.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseInvestigationMngtService": () => (/* binding */ CaseInvestigationMngtService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);





class CaseInvestigationMngtService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Content-Type", "application/json");
        this.baseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/case-management/investigation`;
        this.baseURL1 = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/case-management`;
    }
    create(data) {
        let API_URL = `${this.baseURL}/create`;
        return this.http
            .post(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    createBulk(data) {
        let API_URL = `${this.baseURL}/create/bulk`;
        return this.http
            .post(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    read(params) {
        let API_URL = `${this.baseURL}/all/by/department/status`;
        return this.http
            .get(API_URL, {
            params: params,
            headers: this.headers,
            withCredentials: false,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readForEmployee(params) {
        let API_URL = `${this.baseURL}/all/by/emppf/status`;
        return this.http
            .get(API_URL, {
            params: params,
            headers: this.headers,
            withCredentials: false,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    findById(params) {
        let API_URL = `${this.baseURL}/find/by/id`;
        return this.http
            .get(API_URL, { params: params, withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    update(data) {
        let API_URL = `${this.baseURL}/update`;
        return this.http
            .put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    uploadResults(data) {
        let API_URL = `${this.baseURL}/results`;
        return this.http
            .put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    uploadShowCause(data) {
        let API_URL = `${this.baseURL1}/issue/show-cause`;
        return this.http
            .put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    uploadShowCauseResponse(data) {
        let API_URL = `${this.baseURL1}/respond/show-cause`;
        return this.http
            .put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    uploadCaseVerdict(data) {
        let API_URL = `${this.baseURL1}/final/verdict`;
        return this.http
            .put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    verify(dataToProcess) {
        let API_URL = `${this.baseURL}/update/state`;
        return this.http
            .put(API_URL, dataToProcess, {
            headers: this.headers,
            withCredentials: false,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    delete(params) {
        let API_URL = `${this.baseURL}/delete/`;
        return this.http
            .delete(API_URL, {
            params: params,
            headers: this.headers,
            withCredentials: false,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    errorMgmt(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `${error.error.message}`;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
    }
}
CaseInvestigationMngtService.ɵfac = function CaseInvestigationMngtService_Factory(t) { return new (t || CaseInvestigationMngtService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CaseInvestigationMngtService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CaseInvestigationMngtService, factory: CaseInvestigationMngtService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 67914:
/*!****************************************************************!*\
  !*** ./src/app/erp-hr/data/case-services/case-mngt.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseMngtService": () => (/* binding */ CaseMngtService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);





class CaseMngtService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json');
        this.baseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/case-management`;
    }
    create(data) {
        let API_URL = `${this.baseURL}/create`;
        return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    createBulk(data) {
        let API_URL = `${this.baseURL}/create/bulk`;
        return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    read(params) {
        let API_URL = `${this.baseURL}/all/by/department/status`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readForEmployee(params) {
        let API_URL = `${this.baseURL}/all/by/emppf-and-status`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    findById(params) {
        let API_URL = `${this.baseURL}/find/by/id`;
        return this.http.get(API_URL, { params: params, withCredentials: false })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    update(data) {
        let API_URL = `${this.baseURL}/update`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    verify(dataToProcess) {
        let API_URL = `${this.baseURL}/update/state`;
        return this.http.put(API_URL, dataToProcess, { headers: this.headers, withCredentials: false }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    delete(params) {
        let API_URL = `${this.baseURL}/delete/`;
        return this.http.delete(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `${error.error.message}`;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
    }
}
CaseMngtService.ɵfac = function CaseMngtService_Factory(t) { return new (t || CaseMngtService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CaseMngtService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CaseMngtService, factory: CaseMngtService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 29802:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/case-management/cases-raised/initiate-case-investigation/initiate-case-investigation.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitiateCaseInvestigationComponent": () => (/* binding */ InitiateCaseInvestigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_hr_hr_lookups_configurations_lookups_employees_lookup_employees_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component */ 27979);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_hr_data_case_services_case_investigations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/data/case-services/case-investigations.service */ 55927);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);































function InitiateCaseInvestigationComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-bar", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InitiateCaseInvestigationComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "Case Investigation Information");
} }
function InitiateCaseInvestigationComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Case No is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InitiateCaseInvestigationComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " From Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InitiateCaseInvestigationComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " To Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InitiateCaseInvestigationComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 72)(1, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InitiateCaseInvestigationComponent_div_49_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r28.getDocument(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function InitiateCaseInvestigationComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Comments are required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InitiateCaseInvestigationComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "Case Investigators");
} }
function InitiateCaseInvestigationComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Investigator Details ");
} }
function InitiateCaseInvestigationComponent_mat_header_cell_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InitiateCaseInvestigationComponent_mat_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r30.id ? row_r30.id : "#", " ");
} }
function InitiateCaseInvestigationComponent_mat_header_cell_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Emp Pf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InitiateCaseInvestigationComponent_mat_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r31.empPf);
} }
function InitiateCaseInvestigationComponent_mat_header_cell_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "EmpName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InitiateCaseInvestigationComponent_mat_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r32.empName);
} }
function InitiateCaseInvestigationComponent_mat_header_cell_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InitiateCaseInvestigationComponent_mat_cell_113_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 78)(1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InitiateCaseInvestigationComponent_mat_cell_113_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function InitiateCaseInvestigationComponent_mat_cell_113_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const row_r33 = restoredCtx.$implicit; const i_r34 = restoredCtx.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r36.editParTran(row_r33, i_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-feather-icons", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InitiateCaseInvestigationComponent_mat_cell_113_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function InitiateCaseInvestigationComponent_mat_cell_113_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const i_r34 = restoredCtx.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r39.deleteParTran(i_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-feather-icons", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "trash-2");
} }
function InitiateCaseInvestigationComponent_mat_header_row_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
} }
function InitiateCaseInvestigationComponent_mat_row_115_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-row", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InitiateCaseInvestigationComponent_mat_row_115_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42); const row_r40 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r41.onSelect(row_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("cursor", "pointer");
} }
function InitiateCaseInvestigationComponent_mat_cell_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r26.input.value, "\"");
} }
function InitiateCaseInvestigationComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class InitiateCaseInvestigationComponent {
    constructor(dialogRef, data, fb, snackbar, caseInvestigationMngtService, dialog, filesService, notificationAPI) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.caseInvestigationMngtService = caseInvestigationMngtService;
        this.dialog = dialog;
        this.filesService = filesService;
        this.notificationAPI = notificationAPI;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.downloadLoading = false;
        this.pageFunction = "Add";
        this.hideSubmit = false;
        this.isLoading = true;
        this.disableTransactionType = true;
        this.viewMode = false;
        this.loading = false;
        //********************************************************************************************************************** */
        //********************************************************************************************************************** */
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource([]);
        this.displayedColumns = ["id", "empPf", "empName", "action"];
        this.showParTranForm = false;
        this.parTranAction = "";
        this.debitTotal = 0;
        this.creditTotal = 0;
        this.balance = 0;
        // **************************************************************************************************
        this.posting = false;
    }
    ngOnInit() {
        console.log("LOG DATA = ", this.data);
        this.pageFunction = this.data.action;
        this.formData = this.data.record;
        this.generateForm(this.formData);
        this.getPage();
    }
    ngAfterViewInit() {
        if (this.data.action !== "Add") {
            this.generateForm(this.formData);
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getPage() {
        this.disableTransactionType = true;
        console.log("this.data.action :", this.data.action);
        if (this.data.action === "Add") {
            this.isLoading = false;
            this.generateForm(this.data.record);
        }
        else if (this.data.action === "Update") {
            this.generateForm(this.data.record);
        }
        else if (this.data.action === "View") {
            this.generateForm(this.data.record);
            this.activateViewMode();
        }
        this.isLoading = false;
    }
    generateForm(formData) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const fromDate = (_a = formData === null || formData === void 0 ? void 0 : formData.fromDate) !== null && _a !== void 0 ? _a : new Date();
        const toDate = new Date(fromDate);
        toDate.setDate(toDate.getDate() + 7);
        console.log("generateForm formData :: ", formData);
        this.mngForm = this.fb.group({
            id: [(_b = formData === null || formData === void 0 ? void 0 : formData.id) !== null && _b !== void 0 ? _b : ""],
            caseNo: [(_c = formData === null || formData === void 0 ? void 0 : formData.caseNo) !== null && _c !== void 0 ? _c : ""],
            comments: [(_d = formData === null || formData === void 0 ? void 0 : formData.comments) !== null && _d !== void 0 ? _d : ""],
            fromDate: [(_e = formData === null || formData === void 0 ? void 0 : formData.comments) !== null && _e !== void 0 ? _e : fromDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            toDate: [(_f = formData === null || formData === void 0 ? void 0 : formData.comments) !== null && _f !== void 0 ? _f : toDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            attachment: [(_g = formData === null || formData === void 0 ? void 0 : formData.attachment) !== null && _g !== void 0 ? _g : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            investigators: [(_h = formData === null || formData === void 0 ? void 0 : formData.investigators) !== null && _h !== void 0 ? _h : [], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        });
    }
    activateViewMode() {
        this.viewMode = true;
    }
    handleFileInput(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.base64File = reader.result;
            this.file_name = file.name;
            this.mngForm.patchValue({
                attachment: this.base64File,
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    getDocument() {
        this.loading = true;
        let params = {
            id: this.data.formData.id,
        };
        this.caseInvestigationMngtService.findById(params).subscribe((res) => {
            console.log(res);
            if (res.entity.attachment) {
                this.loading = false;
                this.downloadDocument(res.entity.attachment);
            }
            else {
                this.loading = false;
                this.notificationAPI.alertWarning("No Document Attached!");
            }
        }, (err) => {
            this.loading = false;
        });
    }
    downloadDocument(fileToDownload) {
        let fileName = "LeaveForm";
        fetch(fileToDownload)
            .then((response) => response.blob())
            .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${fileName}`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    // generateSubForm(formData?): void {
    //   this.tranForm = this.fb.group({
    //     id: [formData?.id ?? ""],
    //     description: [formData?.narration ?? "", [Validators.required]],
    //   });
    // }
    resetFormAndHide() {
        this.mngForm.patchValue({
            investigators: this.dataSource.data,
        });
        this.tranForm.reset();
        this.showParTranForm = false;
    }
    addParTran() {
        // this.parTranAction = "Add";
        // this.showParTranForm = true;
        this.employeeLookup();
    }
    refresh() {
        this.dataSource.data = [...this.dataSource.data];
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    editParTran(data, index) {
        this.parTranAction = "Update";
        this.selectedParTranIndex = index;
        //this.generateSubForm(data);
        this.showParTranForm = true;
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
    cancelParTran() {
        this.resetFormAndHide();
    }
    deleteParTran(index) {
        this.dataSource.data.splice(index, 1);
        this.refresh();
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        this.posting = true;
        if (this.pageFunction === "Add") {
            this.caseInvestigationMngtService
                .create(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    this.response = res;
                    console.log("res: ", res);
                    if (res.statusCode == 201) {
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
                    this.posting = false;
                    setTimeout(() => {
                        this.onNoClick();
                    }, 3000);
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.caseInvestigationMngtService
                .update(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    this.response = res;
                    console.log("resres:: ", res);
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
                    this.posting = false;
                    setTimeout(() => {
                        this.onNoClick();
                    }, 3000);
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription;
        }
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.response });
    }
    employeeLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "MultipleEmployee",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_hr_hr_lookups_configurations_lookups_employees_lookup_employees_lookup_component__WEBPACK_IMPORTED_MODULE_0__.EmployeesLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                res.data.forEach((employeeInfo) => {
                    const { empPf, empName } = employeeInfo;
                    if (this.dataSource.data) {
                        const existingItemIndex = this.dataSource.data.findIndex((item) => item.empPf === empPf || item.empName === empName);
                        if (existingItemIndex !== -1) {
                            this.dataSource.data[existingItemIndex] = Object.assign(Object.assign({}, this.dataSource.data[existingItemIndex]), { empPf,
                                empName });
                        }
                        else {
                            this.dataSource.data.push({
                                empPf,
                                empName,
                            });
                        }
                    }
                });
                this.refresh();
            }
        });
    }
}
InitiateCaseInvestigationComponent.ɵfac = function InitiateCaseInvestigationComponent_Factory(t) { return new (t || InitiateCaseInvestigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_erp_hr_data_case_services_case_investigations_service__WEBPACK_IMPORTED_MODULE_2__.CaseInvestigationMngtService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_3__.FilesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_4__.NotificationServiceService)); };
InitiateCaseInvestigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: InitiateCaseInvestigationComponent, selectors: [["app-initiate-case-investigation"]], viewQuery: function InitiateCaseInvestigationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 126, vars: 26, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/em.png", "width", "30px", "height", "30px", "alt", ""], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], ["class", "m-2", 4, "ngIf"], [3, "linear"], ["stepper", ""], ["matStepLabel", ""], [3, "formGroup"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "caseNo"], [4, "ngIf"], ["matInput", "", "formControlName", "fromDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["fromDatePicker", ""], ["matInput", "", "formControlName", "toDate", 3, "matDatepicker"], ["toDatePicker", ""], ["class", "col-6", 4, "ngIf"], [1, "col-6", "file-upload"], ["matTooltip", "SELECT NEW ATTACHMENT", "mat-mini-fab", "", "color", "primary", 1, "upload-btn", 3, "click"], ["type", "file", "accept", ".pdf", 1, "form-controls", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "file-name-display"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "comments"], ["mat-raised-button", "", "color", "primary", "matStepperNext", ""], ["mat-tab-label", ""], [1, "row", "m-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "tabl-responsiv"], [1, "materialTableHeader"], [1, "col-12"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "empPf"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-50", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-50", 4, "matCellDef"], ["matColumnDef", "empName"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "8", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["mat-raised-button", "", "color", "accent", "matStepperPrevious", ""], ["mat-raised-button", "", "color", "warn", 1, "mx-2", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "mx-0", 3, "disabled", "hidden", "click"], [1, "m-2"], ["color", "primary", "mode", "indeterminate"], [1, "col-6"], ["matTooltip", "DOWNLOAD PREVIOUS ATTACHMENT", "mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-50"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-50"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matRipple", "", 3, "click"], ["colspan", "8"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function InitiateCaseInvestigationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InitiateCaseInvestigationComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, InitiateCaseInvestigationComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-horizontal-stepper", 10, 11)(17, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, InitiateCaseInvestigationComponent_ng_template_18_Template, 1, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "form", 13)(20, "div", 14)(21, "div", 15)(22, "mat-form-field", 16)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Case No");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, InitiateCaseInvestigationComponent_mat_error_26_Template, 2, 0, "mat-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 15)(28, "mat-form-field", 16)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 19)(32, "mat-datepicker-toggle", 20)(33, "mat-datepicker", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, InitiateCaseInvestigationComponent_mat_error_35_Template, 2, 0, "mat-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 15)(37, "mat-form-field", 16)(38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "input", 22)(41, "mat-datepicker-toggle", 20)(42, "mat-datepicker", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, InitiateCaseInvestigationComponent_mat_error_44_Template, 2, 0, "mat-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 15)(46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Case Investigation Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, InitiateCaseInvestigationComponent_div_49_Template, 4, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 25)(51, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InitiateCaseInvestigationComponent_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](55); return _r9.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function InitiateCaseInvestigationComponent_Template_input_change_54_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 30)(59, "mat-form-field", 16)(60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, InitiateCaseInvestigationComponent_mat_error_63_Template, 2, 0, "mat-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div")(65, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, InitiateCaseInvestigationComponent_ng_template_68_Template, 1, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "mat-tab-group")(71, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, InitiateCaseInvestigationComponent_ng_template_72_Template, 3, 0, "ng-template", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 34)(74, "div", 35)(75, "div", 36)(76, "div", 37)(77, "div", 14)(78, "div", 38)(79, "ul", 39)(80, "li", 40)(81, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Investigators");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "li", 41)(84, "label", 42)(85, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "input", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function InitiateCaseInvestigationComponent_Template_input_keyup_87_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "li")(90, "div", 46)(91, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InitiateCaseInvestigationComponent_Template_button_click_91_listener() { return ctx.addParTran(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "li")(95, "div", 49)(96, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InitiateCaseInvestigationComponent_Template_button_click_96_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "mat-table", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](102, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](103, InitiateCaseInvestigationComponent_mat_header_cell_103_Template, 2, 0, "mat-header-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](104, InitiateCaseInvestigationComponent_mat_cell_104_Template, 2, 1, "mat-cell", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](105, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](106, InitiateCaseInvestigationComponent_mat_header_cell_106_Template, 2, 0, "mat-header-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](107, InitiateCaseInvestigationComponent_mat_cell_107_Template, 2, 1, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](108, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](109, InitiateCaseInvestigationComponent_mat_header_cell_109_Template, 2, 0, "mat-header-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](110, InitiateCaseInvestigationComponent_mat_cell_110_Template, 2, 1, "mat-cell", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](111, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](112, InitiateCaseInvestigationComponent_mat_header_cell_112_Template, 2, 0, "mat-header-cell", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](113, InitiateCaseInvestigationComponent_mat_cell_113_Template, 5, 6, "mat-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](114, InitiateCaseInvestigationComponent_mat_header_row_114_Template, 1, 0, "mat-header-row", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](115, InitiateCaseInvestigationComponent_mat_row_115_Template, 1, 2, "mat-row", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](116, InitiateCaseInvestigationComponent_mat_cell_116_Template, 2, 1, "mat-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](117, InitiateCaseInvestigationComponent_div_117_Template, 2, 1, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](118, "mat-paginator", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "div")(120, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InitiateCaseInvestigationComponent_Template_button_click_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](16); return _r1.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InitiateCaseInvestigationComponent_Template_button_click_124_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Case Investigations");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mngForm.get("caseNo").invalid && ctx.mngForm.get("caseNo").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mngForm.get("fromDate").invalid && ctx.mngForm.get("fromDate").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mngForm.get("toDate").invalid && ctx.mngForm.get("toDate").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.pageFunction !== "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.file_name || "No file selected.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mngForm.get("comments").invalid && ctx.mngForm.get("comments").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("auth-spinner", ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.mngForm.valid || ctx.posting)("hidden", ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.pageFunction, " Case Investigation ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBar, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatError, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepicker, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltip, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperNext, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabLabel, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_25__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperPrevious], styles: [".materialTableHeader[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXRpYXRlLWNhc2UtaW52ZXN0aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0FBQUoiLCJmaWxlIjoiaW5pdGlhdGUtY2FzZS1pbnZlc3RpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGVyaWFsVGFibGVIZWFkZXIge1xuICAgIFxuICAgIG1pbi13aWR0aDogMTAwcHg7XG59Il19 */"] });


/***/ }),

/***/ 19941:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/case-management/cases-raised/issue-show-cause-letter/issue-show-cause-letter.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IssueShowCauseLetterComponent": () => (/* binding */ IssueShowCauseLetterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_hr_hr_lookups_configurations_lookups_employees_lookup_employees_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component */ 27979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_hr_data_case_services_case_investigations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/data/case-services/case-investigations.service */ 55927);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);


















function IssueShowCauseLetterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-progress-bar", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function IssueShowCauseLetterComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Show Cause Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function IssueShowCauseLetterComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IssueShowCauseLetterComponent_div_29_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.getDocument(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} }
function IssueShowCauseLetterComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 29)(3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IssueShowCauseLetterComponent_div_38_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IssueShowCauseLetterComponent_div_38_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("auth-spinner", ctx_r4.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r4.mngForm.valid || ctx_r4.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r4.pageFunction, " Case ");
} }
class IssueShowCauseLetterComponent {
    constructor(dialogRef, data, fb, snackbar, caseInvestigationMngtService, dialog, filesService, notificationAPI) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.caseInvestigationMngtService = caseInvestigationMngtService;
        this.dialog = dialog;
        this.filesService = filesService;
        this.notificationAPI = notificationAPI;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.downloadLoading = false;
        this.pageFunction = "Add";
        this.hideSubmit = false;
        this.isLoading = true;
        this.disableTransactionType = true;
        // showCauseIssued: ["", Validators.required],
        // showCauseIssuedLetter: ["N", Validators.required],
        this.viewMode = false;
        //********************************************************************************************************************** */
        //********************************************************************************************************************** */
        this.file_name = "";
        this.loading = false;
        //********************************************************************************************************************** */
        //********************************************************************************************************************** */
        this.posting = false;
    }
    ngOnInit() {
        console.log("LOG DATA = ", this.data);
        this.pageFunction = this.data.action;
        this.formData = this.data.record;
        this.generateForm(this.formData);
        this.getPage();
    }
    ngAfterViewInit() {
        if (this.data.action !== "Add") {
            this.generateForm(this.formData);
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getPage() {
        this.disableTransactionType = true;
        console.log("this.data.action :", this.data.action);
        if (this.data.action === "Add") {
            this.isLoading = false;
            this.generateForm(this.data.record);
        }
        else if (this.data.action === "Update") {
            this.generateForm(this.data.record);
        }
        else if (this.data.action === "View") {
            this.generateForm(this.data.record);
            this.activateViewMode();
        }
        this.isLoading = false;
    }
    generateForm(formData) {
        var _a, _b, _c;
        console.log("generateForm formData :: ", formData);
        this.mngForm = this.fb.group({
            id: [(_a = formData === null || formData === void 0 ? void 0 : formData.id) !== null && _a !== void 0 ? _a : ""],
            showCauseIssued: [(_b = formData === null || formData === void 0 ? void 0 : formData.showCauseIssued) !== null && _b !== void 0 ? _b : "", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            showCauseIssuedLetter: [(_c = formData === null || formData === void 0 ? void 0 : formData.showCauseIssuedLetter) !== null && _c !== void 0 ? _c : "N"],
        });
    }
    activateViewMode() {
        this.viewMode = true;
    }
    handleFileInput(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.base64File = reader.result;
            this.file_name = file.name;
            this.mngForm.patchValue({
                showCauseIssuedLetter: this.base64File,
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    getDocument() {
        this.loading = true;
        let params = {
            id: this.data.formData.id,
        };
        this.caseInvestigationMngtService.findById(params).subscribe((res) => {
            console.log(res);
            if (res.entity.showCauseIssuedLetter) {
                this.loading = false;
                this.downloadDocument(res.entity.showCauseIssuedLetter);
            }
            else {
                this.loading = false;
                this.notificationAPI.alertWarning("No Document Attached!");
            }
        }, (err) => {
            this.loading = false;
        });
    }
    downloadDocument(fileToDownload) {
        let fileName = "CaseDocument";
        fetch(fileToDownload)
            .then((response) => response.blob())
            .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${fileName}`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        this.posting = true;
        if (this.pageFunction === "Add") {
            this.caseInvestigationMngtService
                .uploadShowCause(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    this.response = res;
                    console.log("res: ", res);
                    if (res.statusCode == 201) {
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
                    this.posting = false;
                    setTimeout(() => {
                        this.onNoClick();
                    }, 3000);
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription;
        }
        else if (this.pageFunction === "Update") {
        }
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.response });
    }
    employeeLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "SingleEmployee",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_hr_hr_lookups_configurations_lookups_employees_lookup_employees_lookup_component__WEBPACK_IMPORTED_MODULE_0__.EmployeesLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.mngForm.patchValue({
                    empPf: res.data[0].empNo,
                });
            }
        });
    }
}
IssueShowCauseLetterComponent.ɵfac = function IssueShowCauseLetterComponent_Factory(t) { return new (t || IssueShowCauseLetterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_erp_hr_data_case_services_case_investigations_service__WEBPACK_IMPORTED_MODULE_2__.CaseInvestigationMngtService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_3__.FilesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_4__.NotificationServiceService)); };
IssueShowCauseLetterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: IssueShowCauseLetterComponent, selectors: [["app-issue-show-cause-letter"]], decls: 39, vars: 7, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/em.png", "width", "30px", "height", "30px", "alt", ""], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], ["class", "m-2", 4, "ngIf"], [1, "mx-2"], [1, "register-form", "mx-2", 3, "formGroup"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "showCauseIssued"], [4, "ngIf"], ["class", "col-6", 4, "ngIf"], [1, "col-6", "file-upload"], ["matTooltip", "SELECT NEW ATTACHMENT", "mat-mini-fab", "", "color", "primary", 1, "upload-btn", 3, "click"], ["type", "file", "accept", ".pdf", 1, "form-controls", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "file-name-display"], ["class", "row", 4, "ngIf"], [1, "m-2"], ["color", "primary", "mode", "indeterminate"], [1, "col-6"], ["matTooltip", "DOWNLOAD PREVIOUS ATTACHMENT", "mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], [1, "col-white"], ["align", "end", 1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]], template: function IssueShowCauseLetterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IssueShowCauseLetterComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, IssueShowCauseLetterComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Show Cause Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "form", 11)(18, "div", 12)(19, "div", 13)(20, "mat-form-field", 14)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Show Cause Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, IssueShowCauseLetterComponent_mat_error_24_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 13)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Show Cause Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, IssueShowCauseLetterComponent_div_29_Template, 4, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 18)(31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IssueShowCauseLetterComponent_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function IssueShowCauseLetterComponent_Template_input_change_34_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, IssueShowCauseLetterComponent_div_38_Template, 7, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Show Cause Letter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mngForm.get("showCauseIssued").invalid && ctx.mngForm.get("showCauseIssued").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pageFunction !== "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.file_name || "No file selected.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.viewMode);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc3N1ZS1zaG93LWNhdXNlLWxldHRlci5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 76464:
/*!******************************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/case-management/cases-raised/issue-verdict/issue-verdict.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IssueVerdictComponent": () => (/* binding */ IssueVerdictComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_hr_hr_lookups_configurations_lookups_employees_lookup_employees_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component */ 27979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_hr_data_case_services_case_investigations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/data/case-services/case-investigations.service */ 55927);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);


















function IssueVerdictComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-progress-bar", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function IssueVerdictComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Final Verdict is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function IssueVerdictComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IssueVerdictComponent_div_29_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.getDocument(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} }
function IssueVerdictComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 29)(3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IssueVerdictComponent_div_38_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IssueVerdictComponent_div_38_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("auth-spinner", ctx_r4.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r4.mngForm.valid || ctx_r4.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r4.pageFunction, " Case Verdict ");
} }
class IssueVerdictComponent {
    constructor(dialogRef, data, fb, snackbar, caseInvestigationMngtService, dialog, filesService, notificationAPI) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.caseInvestigationMngtService = caseInvestigationMngtService;
        this.dialog = dialog;
        this.filesService = filesService;
        this.notificationAPI = notificationAPI;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.downloadLoading = false;
        this.pageFunction = "Add";
        this.hideSubmit = false;
        this.isLoading = true;
        this.disableTransactionType = true;
        this.viewMode = false;
        this.loading = false;
        //********************************************************************************************************************** */
        //********************************************************************************************************************** */
        this.posting = false;
    }
    ngOnInit() {
        console.log("LOG DATA = ", this.data);
        this.pageFunction = this.data.action;
        this.formData = this.data.record;
        this.generateForm(this.formData);
        this.getPage();
    }
    ngAfterViewInit() {
        if (this.data.action !== "Add") {
            this.generateForm(this.formData);
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getPage() {
        this.disableTransactionType = true;
        console.log("this.data.action :", this.data.action);
        if (this.data.action === "Add") {
            this.isLoading = false;
            this.generateForm(this.data.record);
        }
        else if (this.data.action === "Update") {
            this.generateForm(this.data.record);
        }
        else if (this.data.action === "View") {
            this.generateForm(this.data.record);
            this.activateViewMode();
        }
        this.isLoading = false;
    }
    generateForm(formData) {
        var _a, _b, _c;
        console.log("generateForm formData :: ", formData);
        this.mngForm = this.fb.group({
            id: [(_a = formData === null || formData === void 0 ? void 0 : formData.id) !== null && _a !== void 0 ? _a : ""],
            finalVerdict: [(_b = formData === null || formData === void 0 ? void 0 : formData.finalVerdict) !== null && _b !== void 0 ? _b : "", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            finalVerdictAttachment: [(_c = formData === null || formData === void 0 ? void 0 : formData.finalVerdictAttachment) !== null && _c !== void 0 ? _c : ""],
        });
    }
    activateViewMode() {
        this.viewMode = true;
    }
    handleFileInput(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.base64File = reader.result;
            this.file_name = file.name;
            this.mngForm.patchValue({
                finalVerdictAttachment: this.base64File,
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    getDocument() {
        this.loading = true;
        let params = {
            id: this.data.formData.id,
        };
        this.caseInvestigationMngtService.findById(params).subscribe((res) => {
            console.log(res);
            if (res.entity.attachment) {
                this.loading = false;
                this.downloadDocument(res.entity.attachment);
            }
            else {
                this.loading = false;
                this.notificationAPI.alertWarning("No Document Attached!");
            }
        }, (err) => {
            this.loading = false;
        });
    }
    downloadDocument(fileToDownload) {
        let fileName = "LeaveForm";
        fetch(fileToDownload)
            .then((response) => response.blob())
            .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${fileName}`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        this.posting = true;
        if (this.pageFunction === "Add") {
            this.caseInvestigationMngtService
                .uploadCaseVerdict(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    this.response = res;
                    console.log("res: ", res);
                    if (res.statusCode == 201) {
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
                    this.posting = false;
                    setTimeout(() => {
                        this.onNoClick();
                    }, 3000);
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.caseInvestigationMngtService
                .update(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    this.response = res;
                    console.log("resres:: ", res);
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
                    this.posting = false;
                    setTimeout(() => {
                        this.onNoClick();
                    }, 3000);
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription;
        }
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.response });
    }
    employeeLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "SingleEmployee",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_hr_hr_lookups_configurations_lookups_employees_lookup_employees_lookup_component__WEBPACK_IMPORTED_MODULE_0__.EmployeesLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.mngForm.patchValue({
                    empPf: res.data[0].empNo,
                });
            }
        });
    }
}
IssueVerdictComponent.ɵfac = function IssueVerdictComponent_Factory(t) { return new (t || IssueVerdictComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_erp_hr_data_case_services_case_investigations_service__WEBPACK_IMPORTED_MODULE_2__.CaseInvestigationMngtService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_3__.FilesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_4__.NotificationServiceService)); };
IssueVerdictComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: IssueVerdictComponent, selectors: [["app-issue-verdict"]], decls: 39, vars: 7, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/em.png", "width", "30px", "height", "30px", "alt", ""], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], ["class", "m-2", 4, "ngIf"], [1, "mx-2"], [1, "register-form", "mx-2", 3, "formGroup"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "finalVerdict"], [4, "ngIf"], ["class", "col-6", 4, "ngIf"], [1, "col-6", "file-upload"], ["matTooltip", "SELECT NEW ATTACHMENT", "mat-mini-fab", "", "color", "primary", 1, "upload-btn", 3, "click"], ["type", "file", "accept", ".pdf", 1, "form-controls", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "file-name-display"], ["class", "row", 4, "ngIf"], [1, "m-2"], ["color", "primary", "mode", "indeterminate"], [1, "col-6"], ["matTooltip", "DOWNLOAD PREVIOUS ATTACHMENT", "mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], [1, "col-white"], ["align", "end", 1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]], template: function IssueVerdictComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IssueVerdictComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, IssueVerdictComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Case Verdict Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "form", 11)(18, "div", 12)(19, "div", 13)(20, "mat-form-field", 14)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Final Verdict");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, IssueVerdictComponent_mat_error_24_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 13)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Show Cause Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, IssueVerdictComponent_div_29_Template, 4, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 18)(31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IssueVerdictComponent_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function IssueVerdictComponent_Template_input_change_34_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, IssueVerdictComponent_div_38_Template, 7, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Case Verdict");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mngForm.get("finalVerdict").invalid && ctx.mngForm.get("finalVerdict").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pageFunction !== "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.file_name || "No file selected.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.viewMode);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc3N1ZS12ZXJkaWN0LmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 15357:
/*!******************************************************************************************************************!*\
  !*** ./src/app/erp-hr/modules/case-management/cases-raised/manage-cases-raised/manage-cases-raised.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCasesRaisedComponent": () => (/* binding */ ManageCasesRaisedComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_hr_hr_lookups_configurations_lookups_employees_lookup_employees_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component */ 27979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var src_app_erp_hr_data_case_services_case_mngt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/data/case-services/case-mngt.service */ 67914);
/* harmony import */ var src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/files.service */ 17687);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);



















function ManageCasesRaisedComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-progress-bar", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageCasesRaisedComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Employee PF is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageCasesRaisedComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Raised On date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageCasesRaisedComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCasesRaisedComponent_div_50_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.getDocument(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} }
function ManageCasesRaisedComponent_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Case Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageCasesRaisedComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 29)(2, "div", 37)(3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCasesRaisedComponent_div_65_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCasesRaisedComponent_div_65_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("auth-spinner", ctx_r7.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r7.mngForm.valid || ctx_r7.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r7.pageFunction, " Case ");
} }
class ManageCasesRaisedComponent {
    constructor(dialogRef, data, fb, snackbar, caseMngtService, dialog, filesService, notificationAPI) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.snackbar = snackbar;
        this.caseMngtService = caseMngtService;
        this.dialog = dialog;
        this.filesService = filesService;
        this.notificationAPI = notificationAPI;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.downloadLoading = false;
        this.pageFunction = "Add";
        this.hideSubmit = false;
        this.isLoading = true;
        this.disableTransactionType = true;
        this.viewMode = false;
        this.loading = false;
        //********************************************************************************************************************** */
        //********************************************************************************************************************** */
        this.posting = false;
    }
    ngOnInit() {
        console.log("LOG DATA = ", this.data);
        this.pageFunction = this.data.action;
        this.formData = this.data.record;
        this.generateForm(this.formData);
        this.getPage();
    }
    ngAfterViewInit() {
        if (this.data.action !== "Add") {
            this.generateForm(this.formData);
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getPage() {
        this.disableTransactionType = true;
        console.log("this.data.action :", this.data.action);
        if (this.data.action === "Add") {
            this.isLoading = false;
            this.generateForm(this.data.record);
        }
        else if (this.data.action === "Update") {
            this.generateForm(this.data.record);
        }
        else if (this.data.action === "View") {
            this.generateForm(this.data.record);
            this.activateViewMode();
        }
        this.isLoading = false;
    }
    generateForm(formData) {
        var _a, _b;
        console.log("generateForm formData :: ", formData);
        this.mngForm = this.fb.group({
            id: [(_a = formData === null || formData === void 0 ? void 0 : formData.id) !== null && _a !== void 0 ? _a : ""],
            finalVerdict: [(_b = formData === null || formData === void 0 ? void 0 : formData.finalVerdict) !== null && _b !== void 0 ? _b : "", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        });
    }
    activateViewMode() {
        this.viewMode = true;
    }
    handleFileInput(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.base64File = reader.result;
            this.file_name = file.name;
            this.mngForm.patchValue({
                attachment: this.base64File,
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    getDocument() {
        this.loading = true;
        let params = {
            id: this.data.record.id,
        };
        this.caseMngtService.findById(params).subscribe((res) => {
            console.log(res);
            if (res.entity.attachment) {
                this.loading = false;
                this.downloadDocument(res.entity.attachment);
            }
            else {
                this.loading = false;
                this.notificationAPI.alertWarning("No Document Attached!");
            }
        }, (err) => {
            this.loading = false;
        });
    }
    downloadDocument(fileToDownload) {
        let fileName = "LeaveForm";
        fetch(fileToDownload)
            .then((response) => response.blob())
            .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${fileName}`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    submit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        this.posting = true;
        if (this.pageFunction === "Add") {
            this.caseMngtService
                .create(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    this.response = res;
                    console.log("res: ", res);
                    if (res.statusCode == 201) {
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
                    this.posting = false;
                    setTimeout(() => {
                        this.onNoClick();
                    }, 3000);
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription;
        }
        else if (this.pageFunction === "Update") {
            this.caseMngtService
                .update(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    this.response = res;
                    console.log("resres:: ", res);
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
                    this.posting = false;
                    setTimeout(() => {
                        this.onNoClick();
                    }, 3000);
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription;
        }
    }
    onNoClick() {
        this.dialogRef.close({ event: "close", data: this.response });
    }
    employeeLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "SingleEmployee",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_hr_hr_lookups_configurations_lookups_employees_lookup_employees_lookup_component__WEBPACK_IMPORTED_MODULE_0__.EmployeesLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.mngForm.patchValue({
                    empPf: res.data[0].empNo,
                });
            }
        });
    }
}
ManageCasesRaisedComponent.ɵfac = function ManageCasesRaisedComponent_Factory(t) { return new (t || ManageCasesRaisedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_erp_hr_data_case_services_case_mngt_service__WEBPACK_IMPORTED_MODULE_2__.CaseMngtService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_files_service__WEBPACK_IMPORTED_MODULE_3__.FilesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_4__.NotificationServiceService)); };
ManageCasesRaisedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ManageCasesRaisedComponent, selectors: [["app-manage-cases-raised"]], decls: 66, vars: 11, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["src", "assets/images/em.png", "width", "30px", "height", "30px", "alt", ""], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "ms-2", "me-2", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], ["class", "m-2", 4, "ngIf"], [1, "mx-2"], [1, "register-form", "mx-2", 3, "formGroup"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "empPf"], ["matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "formControlName", "caseNo"], ["matInput", "", "formControlName", "caseType"], ["matInput", "", "formControlName", "raisedOn", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["raisedOnDatePicker", ""], ["class", "col-6", 4, "ngIf"], [1, "col-6", "file-upload"], ["matTooltip", "SELECT NEW ATTACHMENT", "mat-mini-fab", "", "color", "primary", 1, "upload-btn", 3, "click"], ["type", "file", "accept", ".pdf", 1, "form-controls", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "file-name-display"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "caseDescription"], ["class", "row", 4, "ngIf"], [1, "m-2"], ["color", "primary", "mode", "indeterminate"], [1, "col-6"], ["matTooltip", "DOWNLOAD PREVIOUS ATTACHMENT", "mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], [1, "col-white"], ["align", "end", 1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]], template: function ManageCasesRaisedComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCasesRaisedComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ManageCasesRaisedComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Case Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "form", 11)(18, "div", 12)(19, "div", 13)(20, "mat-form-field", 14)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Employee PF");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCasesRaisedComponent_Template_mat_icon_click_24_listener() { return ctx.employeeLookup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ManageCasesRaisedComponent_mat_error_26_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 13)(28, "mat-form-field", 14)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Case No");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 13)(33, "mat-form-field", 14)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Case Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 13)(38, "mat-form-field", 14)(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Raised On");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 20)(42, "mat-datepicker-toggle", 21)(43, "mat-datepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, ManageCasesRaisedComponent_mat_error_45_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 13)(47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Final Verdict Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, ManageCasesRaisedComponent_div_50_Template, 4, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 24)(52, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCasesRaisedComponent_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](56); return _r5.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ManageCasesRaisedComponent_Template_input_change_55_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 29)(60, "mat-form-field", 14)(61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Case Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, ManageCasesRaisedComponent_mat_error_64_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, ManageCasesRaisedComponent_div_65_Template, 7, 4, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.mngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mngForm.get("empPf").invalid && ctx.mngForm.get("empPf").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mngForm.get("raisedOn").invalid && ctx.mngForm.get("raisedOn").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pageFunction !== "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.file_name || "No file selected.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mngForm.get("caseDescription").invalid && ctx.mngForm.get("caseDescription").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.viewMode);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtY2FzZXMtcmFpc2VkLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
//# sourceMappingURL=default-src_app_core_service_token-storage_service_ts-src_app_erp-hr_modules_case-management_-7385bf.js.map
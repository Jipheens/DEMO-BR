"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["default-src_app_core_service_token-storage_service_ts-src_app_erp-hr_data_job-services_docume-b05fb2"],{

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

/***/ 84624:
/*!********************************************************************************!*\
  !*** ./src/app/erp-hr/data/job-services/document-management-system.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentManagementSystemService": () => (/* binding */ DocumentManagementSystemService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






class DocumentManagementSystemService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Content-Type", "application/json");
        this.baseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlApplicant}/api/v1/employee-documents`;
        this.admsBaseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlApplicant}/api/v1/applicant-documents`;
        this.apiUrlApplicant = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlApplicant}/api/v1/applicant-documents`;
    }
    onUpload(data) {
        let API_URL = `${this.admsBaseURL}/create`;
        return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    approveEmployeeDocuments(data) {
        let API_URL = `${this.baseURL}/approveOrReject`;
        //api/v1/employee-documents/approveOrReject
        return this.http
            .put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    rejectEmployeeDocuments(data) {
        let API_URL = `${this.baseURL}/approveOrReject`;
        //api/v1/employee-documents/approveOrReject
        return this.http
            .put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    onBulkUpload(data) {
        let API_URL = `${this.baseURL}/add/bulk`;
        console.log("Bulk Upload", API_URL);
        // /api/v1/employee-documents/add/bulk
        return this.http
            .post(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            console.log("On doc upload service", res);
            console.log("endpoint on doc upload", API_URL);
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getDocumentsByReferenceId(refId) {
        let API_URL = `${this.baseURL}/get/by/reference/identifier/${refId}`;
        //api/v1/employee-documents/get/by/reference/identifier/{refId}
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getPolicyDocument() {
        let API_URL = `${this.baseURL}/get/onboarding/policy/doc`;
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getBase64ById(id) {
        let API_URL = `${this.baseURL}/get/base64file/${id}`;
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getDocByType(docType) {
        let API_URL = `${this.baseURL}/get/by/document/type/${docType}`;
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getAllDocs() {
        let API_URL = `${this.baseURL}/fetchAll`;
        //api/v1/employee-documents/fetchAll
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    // deleteDoc(id: number):Observable<any>{
    //   let API_URL = `${this.baseURL}/permanent/delete/${id}`
    //   return this.http.delete(API_URL,{headers: this.headers, withCredentials: false}).pipe(
    //     map( res=>{
    //       return res || {}
    //     }), catchError(this.errorMgmt)
    //   )
    // }
    getDocumentsByReferenceId1(params) {
        let API_URL = `${this.baseURL}/view/by/id`;
        return this.http
            .get(API_URL, {
            params: params,
            headers: this.headers,
            responseType: "text",
            withCredentials: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getDocumentsByReferenceId2(id) {
        let API_URL = `${this.baseURL}/get/base64file/${id}`;
        // http://localhost:8200/api/v1/employee-documents/get/by/reference/identifier?refId=12344567
        return this.http
            .get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    // /api/v1/employee-documents/get/base64file/{id}
    onDocView(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${this.baseURL}/view/by/id`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
    onDocView2(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append("Accept", "application/pdf");
        let requestOptions = {
            params: params,
            headers: headers,
            responseType: "blob",
            withCredentials: false,
        };
        let API_URL = `${this.baseURL}/view/by/id`;
        return this.http.get(API_URL, requestOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            res || {};
        }));
    }
    onDocsView(params) {
        let API_URL = `${this.baseURL}/view/by/id`;
        return this.http
            .get(API_URL, {
            headers: this.headers,
            params: params,
            responseType: "blob",
            withCredentials: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                filename: "document",
                data: new Blob([response], { type: "application/pdf" }),
            };
        }));
    }
    getBase64Doc(params) {
        console.log("Base64 data");
        let API_URL = `${this.baseURL}/view/by/id`;
        return this.http
            .get(API_URL, {
            headers: this.headers,
            params: params,
            withCredentials: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    updateDoc(data) {
        let API_URL = `${this.baseURL}/update`;
        return this.http
            .put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            console.log("Response Data:", res); // Log the response data
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    // APPLICANT DOCUMENT MANAGEMENT SYSTEM
    getDocumentsByReferenceIdFromAdms(params) {
        let API_URL = `${this.admsBaseURL}/get/by/reference/identifier/ref/Number`;
        // http://localhost:8200/api/v1/applicant-documents/get/by/reference/identifier/ref/Number?refId=67867678&refNo=287272782787
        return this.http
            .get(API_URL, {
            params: params,
            headers: this.headers,
            withCredentials: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getApplicantDocsBase64ById(id) {
        let API_URL = `${this.admsBaseURL}/find/by/id`;
        let queryParams = { id: id }; // Construct the query parameter object
        console.log("API URL:", API_URL);
        return this.http
            .get(API_URL, {
            params: queryParams,
            headers: this.headers,
            withCredentials: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    getDocByIdentifier(params) {
        let API_URL = `${this.apiUrlApplicant}/all`;
        console.log("On Doc URL", API_URL);
        return this.http
            .get(API_URL, {
            params: params,
            headers: this.headers,
            withCredentials: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    deleteDoc(params) {
        let API_URL = `${this.admsBaseURL}/delete`;
        return this.http
            .delete(API_URL, {
            params: params,
            headers: this.headers,
            withCredentials: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    // TRANSFER FROM ADMS TO DMS
    //   http://localhost:8200/api/v1/employee-documents/transfer/from/adms
    transferAdmsToDms(data) {
        let API_URL = `${this.baseURL}/transfer/from/adms`;
        return this.http
            .post(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    errorMgmt(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `${error.error.message}`;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
    }
    updateDmsDoc(updatedData) {
        const API_URL = `${this.baseURL}/api/v1/employee-documents/update`;
        console.log("Update Employee Document URL", API_URL);
        return this.http
            .put(API_URL, updatedData, {
            headers: this.headers,
            withCredentials: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
}
DocumentManagementSystemService.ɵfac = function DocumentManagementSystemService_Factory(t) { return new (t || DocumentManagementSystemService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
DocumentManagementSystemService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: DocumentManagementSystemService, factory: DocumentManagementSystemService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 6138:
/*!**********************************************************************!*\
  !*** ./src/app/erp-hr/data/job-services/job-applications.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobApplicationAPIService": () => (/* binding */ JobApplicationAPIService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






class JobApplicationAPIService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json');
        this.baseURL = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlHR}/api/v1/job/application`;
    }
    create(data) {
        let API_URL = `${this.baseURL}/create`;
        return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    read() {
        let API_URL = `${this.baseURL}/all`;
        return this.http.get(API_URL, { headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readByStatus(params) {
        let API_URL = `${this.baseURL}/fetchbyStatus`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readByStatusAndJobNumber(params) {
        let API_URL = `${this.baseURL}/by_jobrefnumber_and_status`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readById(params) {
        let API_URL = `${this.baseURL}/find/by/id`;
        return this.http.get(API_URL, { params: params, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readByNationalId(params) {
        let API_URL = `${this.baseURL}/by_national_id`;
        return this.http.get(API_URL, { params: params, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    readByJobRefNumberAndStatus(params) {
        let API_URL = `${this.baseURL}/by_jobrefnumber_and_status`;
        return this.http.get(API_URL, { params: params, withCredentials: false })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    update(data) {
        let API_URL = `${this.baseURL}/update`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    scheduleInterview(data) {
        let API_URL = `${this.baseURL}/interview_schedule`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    interviewResults(data) {
        let API_URL = `${this.baseURL}/interview_result`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    delete(params) {
        let API_URL = `${this.baseURL}/delete`;
        return this.http.delete(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res || {};
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMgmt));
    }
    verify(processedRows) {
        const expenseUrl = `${this.baseURL}/update/state`;
        return this.http.put(expenseUrl, processedRows);
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
JobApplicationAPIService.ɵfac = function JobApplicationAPIService_Factory(t) { return new (t || JobApplicationAPIService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
JobApplicationAPIService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: JobApplicationAPIService, factory: JobApplicationAPIService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_core_service_token-storage_service_ts-src_app_erp-hr_data_job-services_docume-b05fb2.js.map
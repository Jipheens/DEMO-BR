"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["default-src_app_shared_components_components_module_ts"],{

/***/ 71096:
/*!****************************************************************!*\
  !*** ./src/app/erp-finance/data/services/middlware.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiddlewareService": () => (/* binding */ MiddlewareService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class MiddlewareService {
    constructor(http) {
        this.http = http;
    }
    getGlAccountStatements(body) {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlMiddleware}/getAccountStatement`;
        return this.http.post(GLAccountManagementUrl, body);
    }
    getGlAccountDetails(params) {
        const GLAccountManagementUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlMiddleware}/getAccountDetails`;
        return this.http.post(GLAccountManagementUrl, { params });
    }
    // getGlAccountDetails(params): Observable<any> {
    //   const glDetails = {
    //     WebServiceStatus: "00",
    //     ClientID: "1942130",
    //     Name: "ERIC MUTHII MWANGI",
    //     ClientType: "Individual Client",
    //     ID1: "32884927",
    //     DateOfBirth: "1994-04-23T00:00:00+03:00",
    //     GenderID: "M",
    //     TitleID: "MR",
    //     BusinessLineID: "Proprietary",
    //     Email: "erickkaragu58@gmail.com",
    //     Mobile: "0707427903",
    //     ClearBalance: "500.0000",
    //     DayOpeningClearBalance: "1",
    //     UnClearBalance: "0.0000",
    //     DayOpeningUnclearBalance: "0",
    //     DrawingPower: "0.0000",
    //     UnSupervisedCredits: "0.0000",
    //     UnSupervisedDebits: "0.0000",
    //     FreezedAmount: "0.0000",
    //     CreditInterest: "0.0000",
    //     DebitInterest: "0.0000",
    //     AvailableBalance: "500.0000",
    //     TotalBalance: "500.0000",
    //     MinimumBalance: "0",
    //     DepositBalance: "0.0000",
    //     CurrencyID: "KES",
    //     ProductTypeID: "CA",
    //     OpenedDate: "2023-08-14",
    //     AccountStatusID: "AA",
    //     Status: "Active",
    //     ClientStatusID: "A",
    //     OurBranchID: "603",
    //     BranchName: "MOMBASA",
    //     ClientName: "ERIC MUTHII MWANGI",
    //     ProductID: "JCA02",
    //     ProductName: "BORA TRANSACTION ACCOUNT",
    //     AccountID: "6031942130002",
    //     AccountName: "ERIC MUTHII MWANGI",
    //     CardNo: "N/A",
    //     Address1: "N.A",
    //     Address2: "THIKA NEAR KENOL",
    //     CityID: "MOM24",
    //     CountryID: "KE",
    //     CountryName: "Kenya",
    //     Fax: "Medium Risk- Refer",
    //     EmailID: "erickkaragu58@gmail.com",
    //     OperatingModeID: "S",
    //     OperatingInstructions: "SELF",
    //     AccountClassID: "SMC001",
    //     CreatedBy: "MKIBUGI",
    //     CreatedOn: "2023-08-14T15:09:00+03:00",
    //     SupervisedBy: "EAGWACHA",
    //     SupervisedOn: "2023-08-14T15:16:00+03:00",
    //     UpdateCount: "2",
    //     IsDormant: "false",
    //     ExcessInterest: "0",
    //     InterestOutStanding: "0",
    //     PenaltyOutstanding: "0",
    //     OpenedBy: "MKIBUGI",
    //     YearOpeningClearBalance: "0",
    //     YearOpeningUnclearBalance: "0",
    //     NoDBTrxafterDormantActivation: "0",
    //     AccountPrefix: "117",
    //     IsSelect: "0"
    //   }
    //   return of(glDetails);
    // }
    getBanksFromCore() {
        const expenseUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlMiddleware}/getBanks`;
        return this.http.post(expenseUrl, {});
    }
    // getBanksFromCore(): Observable<any> {
    //   const banks = [
    //     { BankID: "01", BankName: "KENYA COMMERCIAL BANK" },
    //     { BankID: "02", BankName: "STANDARD CHARTERED BANK" },
    //   ];
    //   return of(banks);
    // }
    getBranchesFromCore(reqBody) {
        const expenseUrl = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlMiddleware}/getBranches`;
        return this.http.post(expenseUrl, reqBody);
    }
}
MiddlewareService.ɵfac = function MiddlewareService_Factory(t) { return new (t || MiddlewareService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
MiddlewareService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MiddlewareService, factory: MiddlewareService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 70681:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/base-file-upload/base-file-upload.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseFileUploadComponent": () => (/* binding */ BaseFileUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function BaseFileUploadComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "or drag and drop file here", " ");
} }
function BaseFileUploadComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaseFileUploadComponent_span_4_Template_a_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.downloadImage(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const preview_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](preview_r2 == null ? null : preview_r2.split(",")[0].split(":")[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Selected Image ", i_r3 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", preview_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class BaseFileUploadComponent {
    constructor(host) {
        this.host = host;
        this.selectedFile = null;
        this.imagePreviews = [];
    }
    writeValue(value) {
        this.host.nativeElement.value = "";
        this.selectedFile = null;
        this.imagePreviews = [];
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) { }
    getFileDetails(e) {
        console.log("ee:: ", e);
        this.selectedFile = e.target.files ? e.target.files[0] : null;
        this.imagePreviews = []; // Clear previews before processing new file
        if (this.selectedFile) {
            // File type validation (optional, adjust as needed)
            if (!this.selectedFile.type.startsWith("image/")) {
                console.error("Invalid file format. Please select image files only.");
                return;
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                this.imagePreviews.push(event.target.result);
            };
            reader.readAsDataURL(this.selectedFile);
        }
        // Call onChange with base64 string (assuming single file selection)
        if (this.selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    this.onChange(reader.result);
                }
            };
            reader.readAsDataURL(this.selectedFile);
        }
    }
    downloadImage(index) {
        if (this.selectedFile && this.imagePreviews.length > index) {
            const file = this.selectedFile[index];
            const blob = new Blob([file], { type: file.type });
            const url = window.URL.createObjectURL(blob);
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = file.name;
            downloadLink.click();
            // Revoke object URL to prevent memory leaks
            window.URL.revokeObjectURL(url);
        }
        else {
            console.error("Invalid image index for download.");
        }
    }
}
BaseFileUploadComponent.ɵfac = function BaseFileUploadComponent_Factory(t) { return new (t || BaseFileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
BaseFileUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseFileUploadComponent, selectors: [["app-base-file-upload"]], inputs: { progress: "progress" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: BaseFileUploadComponent,
                multi: true,
            },
        ])], decls: 6, vars: 2, consts: [[1, "file-drop-area"], ["mat-raised-button", "", "color", "primary"], ["class", "ms-2", 4, "ngIf"], ["class", "file-msg", 4, "ngFor", "ngForOf"], ["type", "file", "accept", "image/*", "single", "", 1, "file-input", 3, "change"], [1, "ms-2"], [1, "file-msg"], [1, "me-2"], [1, "preview-image", 3, "src", "alt"], [1, "download-link", 3, "click"]], template: function BaseFileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BaseFileUploadComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BaseFileUploadComponent_span_4_Template, 6, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaseFileUploadComponent_Template_input_change_5_listener($event) { return ctx.getFileDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagePreviews.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagePreviews);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".file-drop-area[_ngcontent-%COMP%] {\n  border: 1px dashed #7c7db3;\n  border-radius: 3px;\n  position: relative;\n  max-width: 100%;\n  margin-top: 5px;\n  padding: 26px 20px 30px;\n  transition: 0.2s;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.file-msg[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #5b5bff;\n}\n\n.preview-image[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  object-fit: cover;\n  border-radius: 4px;\n  margin: 2px;\n}\n\n.download-link[_ngcontent-%COMP%] {\n  color: #3f577f;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.download-link[_ngcontent-%COMP%]:hover, .download-link[_ngcontent-%COMP%]:focus {\n  color: #293e5b;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUlFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHSTtFQUVFLGNBQUE7RUFDQSx5Q0FBQTtBQUZOIiwiZmlsZSI6ImJhc2UtZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZS1kcm9wLWFyZWEge1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjN2M3ZGIzO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBwYWRkaW5nOiAyNnB4IDIwcHggMzBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG4gIFxuICAuZmlsZS1pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAuZmlsZS1tc2cge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNWI1YmZmO1xuICB9XG4gIFxuXG5cbiAgLnByZXZpZXctaW1hZ2Uge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjsgXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyBcbiAgICBtYXJnaW46IDJweDsgXG4gIH1cbiAgXG5cbiAgLmRvd25sb2FkLWxpbmsge1xuICAgIGNvbG9yOiAjM2Y1NzdmOyBcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgY29sb3I6ICMyOTNlNWI7IFxuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7IFxuICAgIH1cbiAgfVxuICAiXX0= */"] });


/***/ }),

/***/ 15324:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/base/base.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class BaseComponent {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.subject.next();
        this.subject.complete();
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], decls: 2, vars: 0, template: function BaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "base works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 41299:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function BreadcrumbComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1);
} }
class BreadcrumbComponent {
    constructor() { }
    ngOnInit() { }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { title: "title", items: "items", active_item: "active_item" }, decls: 14, vars: 7, consts: [[1, "breadcrumb-main"], [1, "row"], [1, "col-6"], [1, "breadcrumb-title"], [1, "page-title"], [1, "breadcrumb-list"], [1, "breadcrumb-item", "bcrumb-1"], [3, "routerLink"], [3, "icon"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item", "active"], [1, "breadcrumb-item"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "ul", 5)(8, "li", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-feather-icons", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BreadcrumbComponent_li_11_Template, 2, 1, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/admin/dashboard/main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("breadcrumb-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.active_item);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 15626:
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload/file-upload.component */ 67082);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.module */ 44466);
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/base.component */ 15324);
/* harmony import */ var _gl_details_gl_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gl-details/gl-details.component */ 91760);
/* harmony import */ var _base_file_upload_base_file_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base-file-upload/base-file-upload.component */ 70681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);







class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__.FileUploadComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _base_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent, _gl_details_gl_details_component__WEBPACK_IMPORTED_MODULE_4__.GlDetailsComponent, _base_file_upload_base_file_upload_component__WEBPACK_IMPORTED_MODULE_5__.BaseFileUploadComponent], imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule], exports: [_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__.FileUploadComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _gl_details_gl_details_component__WEBPACK_IMPORTED_MODULE_4__.GlDetailsComponent, _base_file_upload_base_file_upload_component__WEBPACK_IMPORTED_MODULE_5__.BaseFileUploadComponent] }); })();


/***/ }),

/***/ 67082:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/file-upload/file-upload.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadComponent": () => (/* binding */ FileUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function FileUploadComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("or drag and drop file here");
} }
function FileUploadComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const file_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r2.name);
} }
class FileUploadComponent {
    constructor(host) {
        this.host = host;
        this.myFiles = [];
    }
    writeValue(value) {
        this.host.nativeElement.value = "";
        this.myFiles = [];
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) { }
    getFileDetails(e) {
        this.myFiles = [];
        for (var i = 0; i < e.target.files.length; i++) {
            this.myFiles.push(e.target.files[i]);
        }
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
FileUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["app-file-upload"]], inputs: { progress: "progress" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: FileUploadComponent,
                multi: true,
            },
        ])], decls: 6, vars: 2, consts: [[1, "file-drop-area"], ["mat-raised-button", "", "color", "primary"], ["class", "ms-2", 4, "ngIf"], ["class", "file-msg", 4, "ngFor", "ngForOf"], ["type", "file", "multiple", "", 1, "file-input", 3, "change"], [1, "ms-2"], [1, "file-msg"], [1, "me-2"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileUploadComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FileUploadComponent_span_4_Template, 3, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_5_listener($event) { return ctx.getFileDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myFiles.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myFiles);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".file-drop-area[_ngcontent-%COMP%] {\n  border: 1px dashed #7c7db3;\n  border-radius: 3px;\n  position: relative;\n  max-width: 100%;\n  margin-top: 5px;\n  padding: 26px 20px 30px;\n  transition: 0.2s;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.file-msg[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #5b5bff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFRiIsImZpbGUiOiJmaWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWRyb3AtYXJlYSB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjN2M3ZGIzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDI2cHggMjBweCAzMHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uZmlsZS1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG59XG4uZmlsZS1tc2cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM1YjViZmY7XG59XG4iXX0= */"] });


/***/ }),

/***/ 91760:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/gl-details/gl-details.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlDetailsComponent": () => (/* binding */ GlDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_erp_finance_data_services_middlware_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/services/middlware.service */ 71096);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);




function GlDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.glDetails.Name);
} }
function GlDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Client ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6)(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Client Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8)(23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5)(29, "div", 6)(30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 6)(36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 6)(42, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 8)(48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Business Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.glDetails.ClientID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.glDetails.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.glDetails.ClientType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.glDetails.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.glDetails.DateOfBirth);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.glDetails.GenderID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.glDetails.TitleID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.glDetails.BusinessLineID);
} }
class GlDetailsComponent {
    constructor(middlewareService) {
        this.middlewareService = middlewareService;
        this.glDetailsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // Emit GL details to the parent component
    }
    ngOnInit() {
        this.getGlDetails();
    }
    getGlDetails() {
        console.log("this.glAccount:: ", this.glAccount);
        this.middlewareService.getGlAccountDetails(this.glAccount).subscribe((data) => {
            //this.glDetails = data;
            this.glDetails = data;
            this.glDetailsChange.emit(data); // Emit GL details to the parent component
        }, (error) => {
            console.error("Error fetching GL details:", error);
        });
    }
}
GlDetailsComponent.ɵfac = function GlDetailsComponent_Factory(t) { return new (t || GlDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_erp_finance_data_services_middlware_service__WEBPACK_IMPORTED_MODULE_0__.MiddlewareService)); };
GlDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GlDetailsComponent, selectors: [["app-gl-details"]], inputs: { glAccount: "glAccount" }, outputs: { glDetailsChange: "glDetailsChange" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "row clearfix", 4, "ngIf"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card"], [1, "row", "m-1"], [1, "col-md-3", "col-6", "b-r"], [1, "text-muted"], [1, "col-md-3", "col-6"]], template: function GlDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GlDetailsComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GlDetailsComponent_div_1_Template, 53, 8, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.glDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.glDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnbC1kZXRhaWxzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_components_components_module_ts.js.map
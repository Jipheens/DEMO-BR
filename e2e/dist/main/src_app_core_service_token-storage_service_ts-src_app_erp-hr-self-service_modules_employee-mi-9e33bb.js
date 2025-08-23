"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_core_service_token-storage_service_ts-src_app_erp-hr-self-service_modules_employee-mi-9e33bb"],{

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

/***/ 72655:
/*!*************************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-miscellaneous/employee-miscellaneous-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeMiscellaneousRoutingModule": () => (/* binding */ EmployeeMiscellaneousRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _staff_loans_staff_loans_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-loans/staff-loans.component */ 10518);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: "staff-loans",
        component: _staff_loans_staff_loans_component__WEBPACK_IMPORTED_MODULE_0__.StaffLoansComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: {
            clientName: "EmployeePortalModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
];
class EmployeeMiscellaneousRoutingModule {
}
EmployeeMiscellaneousRoutingModule.ɵfac = function EmployeeMiscellaneousRoutingModule_Factory(t) { return new (t || EmployeeMiscellaneousRoutingModule)(); };
EmployeeMiscellaneousRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmployeeMiscellaneousRoutingModule });
EmployeeMiscellaneousRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmployeeMiscellaneousRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 26037:
/*!*****************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-miscellaneous/employee-miscellaneous.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeMiscellaneousModule": () => (/* binding */ EmployeeMiscellaneousModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _employee_miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-miscellaneous-routing.module */ 72655);
/* harmony import */ var _staff_loans_staff_loans_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-loans/staff-loans.component */ 10518);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 25490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class EmployeeMiscellaneousModule {
}
EmployeeMiscellaneousModule.ɵfac = function EmployeeMiscellaneousModule_Factory(t) { return new (t || EmployeeMiscellaneousModule)(); };
EmployeeMiscellaneousModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: EmployeeMiscellaneousModule });
EmployeeMiscellaneousModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _employee_miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeMiscellaneousRoutingModule,
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](EmployeeMiscellaneousModule, { declarations: [_staff_loans_staff_loans_component__WEBPACK_IMPORTED_MODULE_1__.StaffLoansComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _employee_miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeMiscellaneousRoutingModule,
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ }),

/***/ 10518:
/*!*********************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-miscellaneous/staff-loans/staff-loans.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffLoansComponent": () => (/* binding */ StaffLoansComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard/pages/gen-widgets/gen-widgets.component */ 28368);



const _c0 = function () { return ["Shared Documents"]; };
class StaffLoansComponent {
    constructor() { }
    ngOnInit() {
    }
    navigateToExistingAccount() {
        window.open('https://kingdombankltd.sharepoint.com/OA/_layouts/15/FormServer.aspx?XsnLocation=https%3a//kingdombankltd.sharepoint.com/OA/StaffLoans/Forms/template.xsn&SaveLocation=https%3a//kingdombankltd.sharepoint.com/OA/StaffLoans&ClientInstalled=false&DefaultItemOpen=1&Source=https%3a//kingdombankltd.sharepoint.com/OA/SitePages/Staff%2520Loan.aspx', '_blank');
    }
    navigateToNewAccount() {
        window.open('https://kingdombankltd.sharepoint.com/OA/_layouts/15/FormServer.aspx?XsnLocation=https%3a//kingdombankltd.sharepoint.com/OA/Staff%20Profile/Forms/template.xsn&SaveLocation=https%3a//kingdombankltd.sharepoint.com/OA/Staff%20Profile&ClientInstalled=false&DefaultItemOpen=1&Source=https%3a//kingdombankltd.sharepoint.com/OA/SitePages/Staff%2520Profile%2520Data.aspx', '_blank');
    }
}
StaffLoansComponent.ɵfac = function StaffLoansComponent_Factory(t) { return new (t || StaffLoansComponent)(); };
StaffLoansComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StaffLoansComponent, selectors: [["app-staff-loans"]], decls: 33, vars: 4, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [1, "staff-loan-page"], [1, "page-content"], [1, "existing-loan"], [1, "btn", "btn-primary", 3, "click"], [1, "new-loan"], [1, "btn", "btn-secondary", 3, "click"], [1, "page-footer"]], template: function StaffLoansComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Staff Loan Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Welcome to the Staff Loan Portal. Please choose an option below to proceed:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "main", 10)(16, "section", 11)(17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Existing Loan Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Click the link below to access the loan processing page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaffLoansComponent_Template_a_click_21_listener() { return ctx.navigateToExistingAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Existing Loan Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "section", 13)(24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "New Loan Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "If you are applying a loan for the first time, click on the link below to create your staff profile.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaffLoansComponent_Template_a_click_28_listener() { return ctx.navigateToNewAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "New Loan Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "footer", 15)(31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\u00A9 Kingdom Bank Staff Loan. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "All Shared Documents")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0))("active_item", "All Shared Documents");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_1__.GenWidgetsComponent], styles: [".staff-loan-page[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: #333;\n  background-color: #f5f5f5;\n  padding: 2rem;\n}\n.staff-loan-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  margin-bottom: 20px;\n}\n.staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 2rem;\n}\n.staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .existing-loan[_ngcontent-%COMP%], .staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .new-loan[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .existing-loan[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .new-loan[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .existing-loan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .new-loan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 1.5rem;\n}\n.staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .existing-loan[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .new-loan[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.6rem;\n  font-size: 1.1rem;\n  font-weight: 500;\n  text-decoration: none;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\n.staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .existing-loan[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%], .staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .new-loan[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #fff;\n}\n.staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .existing-loan[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover, .staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .new-loan[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .existing-loan[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%], .staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .new-loan[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: #fff;\n}\n.staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .existing-loan[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover, .staff-loan-page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .new-loan[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #495057;\n}\n.staff-loan-page[_ngcontent-%COMP%]   .page-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLWxvYW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUk7O0VBRUUsc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQUFOO0FBRU07O0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFFTTs7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBQ1I7QUFFTTs7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQUNSO0FBQ1E7O0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBRVY7QUFBVTs7RUFDRSx5QkFBQTtBQUdaO0FBQ1E7O0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBRVY7QUFBVTs7RUFDRSx5QkFBQTtBQUdaO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRkoiLCJmaWxlIjoic3RhZmYtbG9hbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhZmYtbG9hbi1wYWdlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMnJlbTtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLnBhZ2UtY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtZ2FwOiAycmVtO1xuXG4gICAgLmV4aXN0aW5nLWxvYW4sXG4gICAgLm5ldy1sb2FuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5idG4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbSAxLjZyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG5cbiAgICAgICAgJi5idG4tcHJpbWFyeSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBhZ2UtZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgfVxufVxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_core_service_token-storage_service_ts-src_app_erp-hr-self-service_modules_employee-mi-9e33bb.js.map
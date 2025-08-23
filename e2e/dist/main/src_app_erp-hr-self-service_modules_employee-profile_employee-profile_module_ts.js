"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-hr-self-service_modules_employee-profile_employee-profile_module_ts"],{

/***/ 93539:
/*!***********************************************************************!*\
  !*** ./src/@core/Models/Notification/notification-service.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationServiceService": () => (/* binding */ NotificationServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);


class NotificationServiceService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.horizontalPosition = 'end';
        this.verticalPosition = 'top';
    }
    showSuccessNotification(arg0) {
        throw new Error('Method not implemented.');
    }
    showSuccess(arg0) {
        throw new Error('Method not implemented.');
    }
    showError(message) {
        throw new Error('Method not implemented.');
    }
    alertSuccess(message) {
        this.snackBar.open(message, "OK", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000,
            panelClass: ['mat-toolbar', 'snackbar-success']
        });
    }
    alertWarning(message) {
        this.snackBar.open(message, "X", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000,
            panelClass: ['mat-toolbar', 'snackbar-danger']
        });
    }
    alertWarningByDuration(message, duration) {
        this.snackBar.open(message, "X", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: duration,
            panelClass: ['mat-toolbar', 'snackbar-danger']
        });
    }
}
NotificationServiceService.ɵfac = function NotificationServiceService_Factory(t) { return new (t || NotificationServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar)); };
NotificationServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationServiceService, factory: NotificationServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 47195:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-profile/employee-documents/all-documents/all-documents.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllDocumentsComponent": () => (/* binding */ AllDocumentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@core/Models/Notification/notification-service.service */ 93539);
/* harmony import */ var src_app_erp_hr_data_employee_services_employee_documents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/data/employee-services/employee-documents.service */ 57416);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/token-storage-cookies.service */ 55770);
/* harmony import */ var src_app_erp_hr_data_employee_services_employee_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-hr/data/employee-services/employee-management.service */ 63059);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dashboard/pages/gen-widgets/gen-widgets.component */ 28368);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);































function AllDocumentsComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 66)(2, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_li_33_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r21.processMultipleRows("APPROVED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function AllDocumentsComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 68)(2, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_li_34_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r23.processMultipleRows("REJECTED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function AllDocumentsComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "div", 70)(2, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_li_35_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r25.processMultipleRows("RETURNED"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function AllDocumentsComponent_mat_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reqStatus_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", reqStatus_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", reqStatus_r27.name, " ");
} }
function AllDocumentsComponent_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please select Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllDocumentsComponent_mat_header_cell_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " index ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllDocumentsComponent_mat_cell_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r29 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", i_r29 + 1, " ");
} }
function AllDocumentsComponent_mat_header_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Filename ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllDocumentsComponent_mat_cell_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r30.filename, " ");
} }
function AllDocumentsComponent_mat_header_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Filetype ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllDocumentsComponent_mat_cell_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r31.filetype, " ");
} }
function AllDocumentsComponent_mat_header_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllDocumentsComponent_mat_cell_96_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 79)(1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_mat_cell_96_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function AllDocumentsComponent_mat_cell_96_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const row_r32 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r35.getDocById(row_r32.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-feather-icons", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_mat_cell_96_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function AllDocumentsComponent_mat_cell_96_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const row_r32 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r38.deleteRecord(row_r32.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-feather-icons", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("tbl-fav-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", "download-cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", "trash-2");
} }
function AllDocumentsComponent_mat_header_row_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-header-row");
} }
function AllDocumentsComponent_mat_row_98_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-row", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_mat_row_98_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r41); const row_r39 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r40.viewRecord(row_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("cursor", "pointer");
} }
function AllDocumentsComponent_tr_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("colspan", ctx_r18.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r18.input, "\"");
} }
function AllDocumentsComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-bar", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AllDocumentsComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-spinner", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("diameter", 40);
} }
const _c0 = function () { return ["Documents"]; };
const _c1 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
class AllDocumentsComponent {
    constructor(dialog, notificationAPI, employeeDocumentsService, snackbar, fb, tokenStorageService, employeeService) {
        this.dialog = dialog;
        this.notificationAPI = notificationAPI;
        this.employeeDocumentsService = employeeDocumentsService;
        this.snackbar = snackbar;
        this.fb = fb;
        this.tokenStorageService = tokenStorageService;
        this.employeeService = employeeService;
        this.displayedColumns = [
            // "select",
            "index",
            "filename",
            "filetype",
            "action",
        ];
        this.loading = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__.SelectionModel(true, []);
        this.downloadLoading = false;
        this.posting = false;
        this.showForm = false;
        //****************************************************************************************** */
        this.reqStatuses = [
            { name: "ALL" },
            { name: "PENDING" },
            { name: "APPROVED" },
            { name: "RETURNED" },
            { name: "REJECTED" },
        ];
        this.selectedStatus = "ALL";
        // "employeeId": 0,
        // "employeeNationalId": "string",
        // "documentType": "string",
        // "attachment": "string",
        // "allowEdit": "string"
        this.documentTypes = [
            "Resume/CV",
            "ID/Passport",
            "Proof of address",
            "Educational certificates/degrees",
            "Professional certifications/licenses",
            "Employment history/letters of recommendation",
            "Tax documents",
            "Bank account details",
            "Emergency contact information",
            "Health insurance documents",
            "Other"
        ];
    }
    ngOnInit() {
        this.currentEmail = this.tokenStorageService.getUser().email;
        this.currentUser = this.tokenStorageService.getUser();
        this.Form = this.fb.group({
            status: ['ALL']
        });
        this.Form.valueChanges.subscribe(() => {
            this.getData();
        });
        this.getData();
        this.getDataByEmpfCode();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getDataByEmpfCode() {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams().set("empNo", this.currentUser.empNo);
        this.employeeService
            .readByEmployeePf(param)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("RES: ", res);
                if (res.entity) {
                    this.profileData = res.entity;
                    console.log("this.formData: ", this.profileData);
                }
                else {
                    this.snackbar.showNotification("snackbar-danger", 'UPDATE PROFILE BEFORE DOCUMENTS UPLOAD');
                }
            },
            error: (err) => {
                // this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => { },
        });
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
        this.loading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams().set("employeeId", this.currentUser.id).set("status", this.Form.value.status);
        this.employeeDocumentsService
            .readByStatusAndEmpId(param)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("Documents displayed on table", res);
                if (res.statusCode === 302) {
                    this.data = res.entity;
                    this.loading = false;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(this.data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                else {
                    this.loading = false;
                    this.notificationAPI.alertWarning(res.message);
                }
            },
            error: (err) => {
                this.loading = false;
                this.notificationAPI.alertWarning("Server Error: " + err.message);
            },
            complete: () => { },
        });
    }
    refresh() {
        this.getData();
    }
    mngRecord() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Upload File",
            html: `
      <select id="documentTypeSelect" class="swal2-select">
        ${this.documentTypes.map(type => `<option>${type}</option>`).join('')}
      </select>
      <input type="file" id="fileInput" class="swal2-input">
    `,
            showCancelButton: true,
            confirmButtonText: "Upload",
            preConfirm: () => {
                const fileInput = document.getElementById("fileInput");
                const selectedDocumentType = document.getElementById("documentTypeSelect").value;
                if (fileInput && fileInput.files && fileInput.files[0]) {
                    const file = fileInput.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const fileData = e.target.result;
                        const finalBody = {
                            attachment: fileData,
                            documentType: selectedDocumentType,
                            employeeId: this.currentUser.id,
                            employeeNationalId: this.profileData.nationalId
                        };
                        console.log(finalBody);
                        this.employeeDocumentsService
                            .create(finalBody)
                            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
                            .subscribe({
                            next: (res) => {
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
                                this.posting = false;
                            },
                            complete: () => {
                                this.posting = false;
                            },
                        }),
                            rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription;
                    };
                    reader.readAsDataURL(file);
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showValidationMessage("Please select a file");
                }
            },
        });
    }
    deleteRecord(id) {
        let params = { id: id };
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Are you sure?",
            text: "THIS RECORD WILL BE DELETED PERMANENTLY!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                this.loading = true;
                this.employeeDocumentsService
                    .delete(params)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
                    .subscribe({
                    next: (res) => {
                        if (res.statusCode == 200) {
                            this.getData();
                            this.loading = false;
                            this.notificationAPI.alertSuccess("RECORD DELETED SUCCESSFULLY");
                        }
                        else {
                            this.getData();
                            this.loading = false;
                            this.notificationAPI.alertWarning(res.message);
                        }
                    },
                    error: (err) => {
                        this.loading = false;
                        this.notificationAPI.alertSuccess("Server Error: " + err.message);
                    },
                    complete: () => { },
                });
            }
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.input = filterValue;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    // ****************************************************************************************************************************
    getDocById(id) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams().set("id", id);
        this.employeeDocumentsService.readById(param).subscribe({
            next: (res) => {
                console.log("res:: ", res);
                this.data = res.entity;
                this.downloadDocument(this.data);
            },
            error: (err) => {
                this.notificationAPI.alertWarning(err.message);
            },
            complete: () => { },
        });
    }
    downloadDocument(row) {
        let file = row.file;
        let filename = row.filename;
        let filetype = row.filetype;
        // Download PDF in Chrome etc.
        const source = `${file}`;
        const link = document.createElement("a");
        link.href = source;
        link.download = `${filename}.${filetype}`;
        link.click();
    }
}
AllDocumentsComponent.ɵfac = function AllDocumentsComponent_Factory(t) { return new (t || AllDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_core_Models_Notification_notification_service_service__WEBPACK_IMPORTED_MODULE_1__.NotificationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_erp_hr_data_employee_services_employee_documents_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeDocumentsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_service_token_storage_cookies_service__WEBPACK_IMPORTED_MODULE_4__.TokenCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_erp_hr_data_employee_services_employee_management_service__WEBPACK_IMPORTED_MODULE_5__.EmployeeService)); };
AllDocumentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AllDocumentsComponent, selectors: [["app-all-documents"]], viewQuery: function AllDocumentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 103, vars: 28, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [4, "ngIf"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTooltip", "JSON", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/json.png", "alt", "", 3, "click"], ["matTooltip", "TXT", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/txt.png", "alt", "", 3, "click"], [1, "materialTableHeader", "mt-2"], [1, "col-2"], [3, "formGroup"], ["appearance", "fill", 1, "example-full-width"], ["formControlName", "status"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-10"], [1, "button-container", "mt-1"], ["mat-raised-button", "", 1, "mat-button", "verified", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "pending", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "approved", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "returned", 3, "click"], ["mat-raised-button", "", 1, "mat-button", "rejected", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "index"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "filename"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-40", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-40", 4, "matCellDef"], ["matColumnDef", "filetype"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "m-2 mx-2", 4, "ngIf"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matTooltip", "APPROVE", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matTooltip", "REJECT", 1, "m-l-10"], ["mat-mini-fab", "", "color", "warn", 1, "mat-button-custom", 3, "click"], ["matTooltip", "RETURN", 1, "m-l-10"], ["mat-mini-fab", "", "color", "accent", 1, "mat-button-custom", 3, "click"], [3, "value"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-40"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-40"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "primary", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], ["matRipple", "", 3, "click"], [3, "colspan"], [1, "m-2", "mx-2"], ["color", "primary", "mode", "indeterminate"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function AllDocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-gen-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 4)(12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "li", 13)(18, "label", 14)(19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function AllDocumentsComponent_Template_input_keyup_21_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "li")(24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_Template_button_click_25_listener() { return ctx.mngRecord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "li")(29, "div", 21)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_Template_button_click_30_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, AllDocumentsComponent_li_33_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, AllDocumentsComponent_li_34_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, AllDocumentsComponent_li_35_Template, 5, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 23)(37, "ul", 24)(38, "li")(39, "div", 25)(40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_Template_img_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](84); return _r7.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "li")(42, "div", 27)(43, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_Template_img_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](84); return _r7.exportTable("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "li")(45, "div", 29)(46, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_Template_img_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](84); return _r7.exportTable("json"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "li")(48, "div", 31)(49, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_Template_img_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](84); return _r7.exportTable("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 33)(51, "div", 4)(52, "div", 34)(53, "form", 35)(54, "mat-form-field", 36)(55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "mat-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, AllDocumentsComponent_mat_option_58_Template, 2, 2, "mat-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, AllDocumentsComponent_mat_error_59_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 39)(61, "div", 40)(62, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_Template_button_click_62_listener() { return ctx.getSelectedStatus("ALL"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, " ALL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_Template_button_click_66_listener() { return ctx.getSelectedStatus("PENDING"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, " PENDING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_Template_button_click_70_listener() { return ctx.getSelectedStatus("APPROVED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, " APPROVED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_Template_button_click_74_listener() { return ctx.getSelectedStatus("RETURNED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, " RETURNED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllDocumentsComponent_Template_button_click_78_listener() { return ctx.getSelectedStatus("REJECTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81, " REJECTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "mat-table", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](85, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](86, AllDocumentsComponent_mat_header_cell_86_Template, 2, 0, "mat-header-cell", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](87, AllDocumentsComponent_mat_cell_87_Template, 2, 1, "mat-cell", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](88, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](89, AllDocumentsComponent_mat_header_cell_89_Template, 2, 0, "mat-header-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](90, AllDocumentsComponent_mat_cell_90_Template, 2, 1, "mat-cell", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](91, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](92, AllDocumentsComponent_mat_header_cell_92_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](93, AllDocumentsComponent_mat_cell_93_Template, 2, 1, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](94, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](95, AllDocumentsComponent_mat_header_cell_95_Template, 2, 0, "mat-header-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](96, AllDocumentsComponent_mat_cell_96_Template, 5, 6, "mat-cell", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](97, AllDocumentsComponent_mat_header_row_97_Template, 1, 0, "mat-header-row", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](98, AllDocumentsComponent_mat_row_98_Template, 1, 2, "mat-row", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](99, AllDocumentsComponent_tr_99_Template, 3, 2, "tr", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](100, AllDocumentsComponent_div_100_Template, 2, 0, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](101, AllDocumentsComponent_div_101_Template, 2, 1, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](102, "mat-paginator", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "All Documents")("items", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](26, _c0))("active_item", "All Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.reqStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Form.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "APPROVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "RETURNED");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.selectedStatus === "REJECTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading || ctx.downloadLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](27, _c1));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _dashboard_pages_gen_widgets_gen_widgets_component__WEBPACK_IMPORTED_MODULE_7__.GenWidgetsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_27__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatNoDataRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtZG9jdW1lbnRzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 56269:
/*!*************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-profile/employee-profile-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeProfileRoutingModule": () => (/* binding */ EmployeeProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-page/profile-page.component */ 93520);
/* harmony import */ var src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-procurement/data/services/_AccessControlAuthGuard.service */ 38510);
/* harmony import */ var _employee_documents_all_documents_all_documents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-documents/all-documents/all-documents.component */ 47195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: "my-profile",
        component: _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_0__.ProfilePageComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: {
            clientName: "EmployeePortalModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
    {
        path: "all-employee-documents",
        component: _employee_documents_all_documents_all_documents_component__WEBPACK_IMPORTED_MODULE_2__.AllDocumentsComponent,
        canActivate: [src_app_erp_procurement_data_services_AccessControlAuthGuard_service__WEBPACK_IMPORTED_MODULE_1__.RoutePrivilegeGuard],
        data: {
            clientName: "EmployeePortalModule",
            requiredPrivilege: ["Dashboard"],
        },
    },
];
class EmployeeProfileRoutingModule {
}
EmployeeProfileRoutingModule.ɵfac = function EmployeeProfileRoutingModule_Factory(t) { return new (t || EmployeeProfileRoutingModule)(); };
EmployeeProfileRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EmployeeProfileRoutingModule });
EmployeeProfileRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EmployeeProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 35926:
/*!*****************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-profile/employee-profile.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeProfileModule": () => (/* binding */ EmployeeProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _employee_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-profile-routing.module */ 56269);
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-page/profile-page.component */ 93520);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 25490);
/* harmony import */ var _employee_documents_all_documents_all_documents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-documents/all-documents/all-documents.component */ 47195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








class EmployeeProfileModule {
}
EmployeeProfileModule.ɵfac = function EmployeeProfileModule_Factory(t) { return new (t || EmployeeProfileModule)(); };
EmployeeProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: EmployeeProfileModule });
EmployeeProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _employee_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeProfileRoutingModule,
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](EmployeeProfileModule, { declarations: [_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_1__.ProfilePageComponent,
        _employee_documents_all_documents_all_documents_component__WEBPACK_IMPORTED_MODULE_5__.AllDocumentsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _employee_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeProfileRoutingModule,
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ }),

/***/ 93520:
/*!*****************************************************************************************************!*\
  !*** ./src/app/erp-hr-self-service/modules/employee-profile/profile-page/profile-page.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageComponent": () => (/* binding */ ProfilePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_erp_finance_data_lookups_branches_lookup_branches_lookup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/branches-lookup/branches-lookup.component */ 75553);
/* harmony import */ var src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/erp-finance/data/lookups/ccentre-lookup/ccentre-lookup.component */ 64622);
/* harmony import */ var src_app_erp_hr_hr_lookups_configurations_lookups_departments_lookup_departments_lookup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/erp-hr/hr-lookups/configurations-lookups/departments-lookup/departments-lookup.component */ 45528);
/* harmony import */ var src_app_erp_hr_hr_lookups_configurations_lookups_employees_lookup_employees_lookup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component */ 27979);
/* harmony import */ var src_app_erp_hr_hr_lookups_configurations_lookups_job_grades_lookup_job_grades_lookup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/erp-hr/hr-lookups/configurations-lookups/job-grades-lookup/job-grades-lookup.component */ 731);
/* harmony import */ var src_app_erp_hr_hr_lookups_configurations_lookups_job_roles_lookup_job_roles_lookup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/erp-hr/hr-lookups/configurations-lookups/job-roles-lookup/job-roles-lookup.component */ 37577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/token-storage.service */ 96358);
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ 81059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_erp_hr_data_employee_services_employee_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/erp-hr/data/employee-services/employee-management.service */ 63059);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! mat-table-exporter */ 31958);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);








































function ProfilePageComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 15)(1, "div", 142)(2, "div", 143)(3, "div", 144)(4, "div", 145)(5, "div", 15)(6, "div", 146)(7, "div", 15)(8, "div", 146)(9, "div", 147)(10, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "HOD Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 149)(13, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 146)(16, "div", 147)(17, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Approved By");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 149)(20, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 15)(23, "div", 152)(24, "div", 153)(25, "div", 154)(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 146)(31, "div", 15)(32, "div", 146)(33, "div", 147)(34, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "HR Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 149)(37, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div", 146)(40, "div", 147)(41, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "Approved By");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div", 149)(44, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "div", 15)(47, "div", 152)(48, "div", 153)(49, "div", 154)(50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, " Remarks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.hodVerifierStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.hodVerifierBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.formData.hodVerifierRemarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.hrVerifierStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.hrVerifiedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.formData.hrVerifiedRemarks);
} }
function ProfilePageComponent_div_11_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Basic Information");
} }
function ProfilePageComponent_div_11_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Middle Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please select a valid Date of Birth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid National ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r159 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", item_r159);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r159);
} }
function ProfilePageComponent_div_11_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Religion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please select Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r160 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", status_r160);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](status_r160);
} }
function ProfilePageComponent_div_11_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Marital Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_div_65_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 146)(1, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_div_65_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r164); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return ctx_r163.downloadDocument(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} }
function ProfilePageComponent_div_11_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 16)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Marriage Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ProfilePageComponent_div_11_div_65_div_4_Template, 4, 0, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 160)(6, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_div_65_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r166); const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](10); return _r162.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "input", 162, 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ProfilePageComponent_div_11_div_65_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r166); const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r167.handleFileInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r15.pageFunction !== "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r15.file_name || "No file selected.", " ");
} }
function ProfilePageComponent_div_11_div_69_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Disabled Registration Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 16)(1, "mat-form-field", 17)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Disabled Registration Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "input", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, ProfilePageComponent_div_11_div_69_mat_error_5_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r16.mngForm.get("disabledRegNo").invalid && ctx_r16.mngForm.get("disabledRegNo").touched);
} }
function ProfilePageComponent_div_11_ng_template_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Home Address");
} }
function ProfilePageComponent_div_11_mat_error_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Nationality ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid County ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Sub-County ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Residential Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Residential County ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Residential Sub-County ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Postal Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Postal Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_template_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Contact Details");
} }
function ProfilePageComponent_div_11_mat_error_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Personal Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Alternative Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Personal Email Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Alternative Email Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_template_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Next of Kin Details");
} }
function ProfilePageComponent_div_11_ng_container_177_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_177_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_177_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Email Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_177_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Street Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_177_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Relationship ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_177_Template(rf, ctx) { if (rf & 1) {
    const _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15)(2, "div", 102)(3, "mat-form-field", 17)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ProfilePageComponent_div_11_ng_container_177_mat_error_7_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 102)(9, "mat-form-field", 17)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, ProfilePageComponent_div_11_ng_container_177_mat_error_13_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 102)(15, "mat-form-field", 17)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ProfilePageComponent_div_11_ng_container_177_mat_error_19_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 102)(21, "mat-form-field", 17)(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Street Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, ProfilePageComponent_div_11_ng_container_177_mat_error_25_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 102)(27, "mat-form-field", 17)(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Relationship");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, ProfilePageComponent_div_11_ng_container_177_mat_error_31_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 15)(33, "div", 172)(34, "div", 173)(35, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_ng_container_177_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r175); const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r174.pushToDataSource1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_ng_container_177_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r175); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r176.cancelParTran1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r33.nextOfKinForm.get("name").invalid && ctx_r33.nextOfKinForm.get("name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r33.nextOfKinForm.get("phoneNumber").invalid && ctx_r33.nextOfKinForm.get("phoneNumber").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r33.nextOfKinForm.get("email").invalid && ctx_r33.nextOfKinForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r33.nextOfKinForm.get("address").invalid && ctx_r33.nextOfKinForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r33.nextOfKinForm.get("relationship").invalid && ctx_r33.nextOfKinForm.get("relationship").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("auth-spinner", ctx_r33.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r33.nextOfKinForm.valid || ctx_r33.posting)("hidden", ctx_r33.viewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r33.parTranAction1, " Qualification ");
} }
function ProfilePageComponent_div_11_ng_template_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " All Next of Kin ");
} }
function ProfilePageComponent_div_11_mat_header_cell_219_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_220_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r177 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r177.id ? row_r177.id : "#", " ");
} }
function ProfilePageComponent_div_11_mat_header_cell_222_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_223_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r178 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r178.name);
} }
function ProfilePageComponent_div_11_mat_header_cell_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_226_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r179 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r179.phoneNumber);
} }
function ProfilePageComponent_div_11_mat_header_cell_228_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_229_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r180 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r180.email);
} }
function ProfilePageComponent_div_11_mat_header_cell_231_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_232_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r181 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r181.address);
} }
function ProfilePageComponent_div_11_mat_header_cell_234_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Relationship");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_235_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r182 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r182.relationship);
} }
function ProfilePageComponent_div_11_mat_header_cell_237_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_238_Template(rf, ctx) { if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 179)(1, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_mat_cell_238_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ProfilePageComponent_div_11_mat_cell_238_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r187); const row_r183 = restoredCtx.$implicit; const i_r184 = restoredCtx.index; const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r186.editParTran1(row_r183, i_r184); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-feather-icons", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_mat_cell_238_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function ProfilePageComponent_div_11_mat_cell_238_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r187); const i_r184 = restoredCtx.index; const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r189.deleteParTran1(i_r184); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-feather-icons", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "trash-2");
} }
function ProfilePageComponent_div_11_mat_header_row_239_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-header-row");
} }
function ProfilePageComponent_div_11_mat_row_240_Template(rf, ctx) { if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-row", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_mat_row_240_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r192); const row_r190 = restoredCtx.$implicit; const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r191.editParTran1(row_r190, ctx_r191.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ProfilePageComponent_div_11_mat_cell_241_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r54.input1.value, "\"");
} }
function ProfilePageComponent_div_11_div_242_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-spinner", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("diameter", 40);
} }
function ProfilePageComponent_div_11_ng_template_250_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Dependant Details");
} }
function ProfilePageComponent_div_11_ng_container_253_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_253_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Date of Birth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_253_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Birth Certificate Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_253_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_253_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Email Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_253_Template(rf, ctx) { if (rf & 1) {
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15)(2, "div", 102)(3, "mat-form-field", 17)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "input", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ProfilePageComponent_div_11_ng_container_253_mat_error_7_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 102)(9, "mat-form-field", 17)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "input", 187)(13, "mat-datepicker-toggle", 23)(14, "mat-datepicker", null, 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, ProfilePageComponent_div_11_ng_container_253_mat_error_16_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 102)(18, "mat-form-field", 17)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Birth Certificate Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, ProfilePageComponent_div_11_ng_container_253_mat_error_22_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 102)(24, "mat-form-field", 17)(25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "input", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, ProfilePageComponent_div_11_ng_container_253_mat_error_28_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 102)(30, "mat-form-field", 17)(31, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, ProfilePageComponent_div_11_ng_container_253_mat_error_34_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 15)(36, "div", 172)(37, "div", 173)(38, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_ng_container_253_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r200); const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r199.pushToDataSource2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_ng_container_253_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r200); const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r201.cancelParTran2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](15);
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r57.dependantForm.get("dependantName").invalid && ctx_r57.dependantForm.get("dependantName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matDatepicker", _r194);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", _r194);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r57.dependantForm.get("dependantDob").invalid && ctx_r57.dependantForm.get("dependantDob").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r57.dependantForm.get("birthCertNo").invalid && ctx_r57.dependantForm.get("birthCertNo").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r57.dependantForm.get("dependantPhone").invalid && ctx_r57.dependantForm.get("dependantPhone").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r57.dependantForm.get("dependantEmail").invalid && ctx_r57.dependantForm.get("dependantEmail").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("auth-spinner", ctx_r57.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r57.dependantForm.valid || ctx_r57.posting)("hidden", ctx_r57.viewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r57.parTranAction2, " Dependant ");
} }
function ProfilePageComponent_div_11_ng_template_256_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " All Dependants ");
} }
function ProfilePageComponent_div_11_mat_header_cell_295_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_296_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r202 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r202.id ? row_r202.id : "#", " ");
} }
function ProfilePageComponent_div_11_mat_header_cell_298_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_299_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r203 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r203.dependantName);
} }
function ProfilePageComponent_div_11_mat_header_cell_301_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_302_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r204 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r204.dependantDob);
} }
function ProfilePageComponent_div_11_mat_header_cell_304_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Birth Certificate Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_305_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r205 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r205.birthCertNo);
} }
function ProfilePageComponent_div_11_mat_header_cell_307_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_308_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r206 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r206.dependantPhone);
} }
function ProfilePageComponent_div_11_mat_header_cell_310_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_311_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r207 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r207.dependantEmail);
} }
function ProfilePageComponent_div_11_mat_header_cell_313_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Download File");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_314_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r208 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r208.downloadFile);
} }
function ProfilePageComponent_div_11_mat_header_cell_316_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_317_Template(rf, ctx) { if (rf & 1) {
    const _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 179)(1, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_mat_cell_317_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ProfilePageComponent_div_11_mat_cell_317_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r213); const row_r209 = restoredCtx.$implicit; const i_r210 = restoredCtx.index; const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r212.editParTran2(row_r209, i_r210); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-feather-icons", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_mat_cell_317_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function ProfilePageComponent_div_11_mat_cell_317_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r213); const i_r210 = restoredCtx.index; const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r215.deleteParTran2(i_r210); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-feather-icons", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "trash-2");
} }
function ProfilePageComponent_div_11_mat_header_row_318_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-header-row");
} }
function ProfilePageComponent_div_11_mat_row_319_Template(rf, ctx) { if (rf & 1) {
    const _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-row", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_mat_row_319_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r218); const row_r216 = restoredCtx.$implicit; const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r217.editParTran2(row_r216, ctx_r217.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ProfilePageComponent_div_11_mat_cell_320_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r80.input2.value, "\"");
} }
function ProfilePageComponent_div_11_div_321_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-spinner", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("diameter", 40);
} }
function ProfilePageComponent_div_11_ng_template_329_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Education Details");
} }
function ProfilePageComponent_div_11_mat_option_338_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r219 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", item_r219);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r219);
} }
function ProfilePageComponent_div_11_mat_error_339_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please select the highest education level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_345_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter the course program ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_option_351_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r220 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", item_r220);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r220);
} }
function ProfilePageComponent_div_11_mat_error_352_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please select the education enrollment date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_355_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Institution Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_355_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Award Certificate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_355_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Certificate Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_355_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r230 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", item_r230);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r230);
} }
function ProfilePageComponent_div_11_ng_container_355_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid GPA Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_355_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Enrolled On date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_355_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Graduated On date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_355_Template(rf, ctx) { if (rf & 1) {
    const _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15)(2, "div", 192)(3, "mat-form-field", 17)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Institution Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ProfilePageComponent_div_11_ng_container_355_mat_error_7_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 192)(9, "mat-form-field", 17)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Award Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, ProfilePageComponent_div_11_ng_container_355_mat_error_13_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 192)(15, "mat-form-field", 17)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Certificate Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ProfilePageComponent_div_11_ng_container_355_mat_error_19_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 192)(21, "mat-form-field", 17)(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "GPA Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "mat-select", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, ProfilePageComponent_div_11_ng_container_355_mat_option_25_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, ProfilePageComponent_div_11_ng_container_355_mat_error_26_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 192)(28, "mat-form-field", 17)(29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "Enrolled On");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](31, "input", 197)(32, "mat-datepicker-toggle", 23)(33, "mat-datepicker", null, 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, ProfilePageComponent_div_11_ng_container_355_mat_error_35_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 192)(37, "mat-form-field", 17)(38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "Graduated On");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "input", 199)(41, "mat-datepicker-toggle", 23)(42, "mat-datepicker", null, 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, ProfilePageComponent_div_11_ng_container_355_mat_error_44_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div", 15)(46, "div", 172)(47, "div", 173)(48, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_ng_container_355_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r232); const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r231.pushToDataSource3(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_ng_container_355_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r232); const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r233.cancelParTran3(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](34);
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](43);
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r88.empEducationForm.get("institutionName").invalid && ctx_r88.empEducationForm.get("institutionName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r88.empEducationForm.get("awardCertificate").invalid && ctx_r88.empEducationForm.get("awardCertificate").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r88.empEducationForm.get("certNo").invalid && ctx_r88.empEducationForm.get("certNo").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r88.gpaScoreArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r88.empEducationForm.get("gpaScore").invalid && ctx_r88.empEducationForm.get("gpaScore").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matDatepicker", _r226);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", _r226);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r88.empEducationForm.get("enrollOn").invalid && ctx_r88.empEducationForm.get("enrollOn").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matDatepicker", _r228);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", _r228);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r88.empEducationForm.get("graduatedOn").invalid && ctx_r88.empEducationForm.get("graduatedOn").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("auth-spinner", ctx_r88.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r88.empEducationForm.valid || ctx_r88.posting)("hidden", ctx_r88.viewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r88.parTranAction3, " Education ");
} }
function ProfilePageComponent_div_11_ng_template_358_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " All Education Details ");
} }
function ProfilePageComponent_div_11_mat_header_cell_397_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_398_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r234 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r234.id ? row_r234.id : "#", " ");
} }
function ProfilePageComponent_div_11_mat_header_cell_400_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Institution Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_401_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r235 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r235.institutionName);
} }
function ProfilePageComponent_div_11_mat_header_cell_403_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Award Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_404_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r236 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r236.awardCertificate);
} }
function ProfilePageComponent_div_11_mat_header_cell_406_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Certification Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_407_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r237 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r237.certNo);
} }
function ProfilePageComponent_div_11_mat_header_cell_409_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "GPA Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_410_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r238 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r238.gpaScore);
} }
function ProfilePageComponent_div_11_mat_header_cell_412_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Enrolled On");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_413_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r239 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r239.enrollOn);
} }
function ProfilePageComponent_div_11_mat_header_cell_415_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Graduated On");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_416_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r240 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r240.graduatedOn);
} }
function ProfilePageComponent_div_11_mat_header_cell_418_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_419_Template(rf, ctx) { if (rf & 1) {
    const _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 179)(1, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_mat_cell_419_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ProfilePageComponent_div_11_mat_cell_419_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r245); const row_r241 = restoredCtx.$implicit; const i_r242 = restoredCtx.index; const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r244.editParTran3(row_r241, i_r242); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-feather-icons", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_mat_cell_419_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function ProfilePageComponent_div_11_mat_cell_419_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r245); const i_r242 = restoredCtx.index; const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r247.deleteParTran3(i_r242); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-feather-icons", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "trash-2");
} }
function ProfilePageComponent_div_11_mat_header_row_420_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-header-row");
} }
function ProfilePageComponent_div_11_mat_row_421_Template(rf, ctx) { if (rf & 1) {
    const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-row", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_mat_row_421_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r250); const row_r248 = restoredCtx.$implicit; const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r249.editParTran3(row_r248, ctx_r249.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ProfilePageComponent_div_11_mat_cell_422_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r111.input3.value, "\"");
} }
function ProfilePageComponent_div_11_div_423_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-spinner", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("diameter", 40);
} }
function ProfilePageComponent_div_11_ng_template_431_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Work Experience Details");
} }
function ProfilePageComponent_div_11_ng_container_434_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Company Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_434_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Work Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_434_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_434_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid End Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_container_434_Template(rf, ctx) { if (rf & 1) {
    const _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15)(2, "div", 201)(3, "mat-form-field", 17)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "input", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ProfilePageComponent_div_11_ng_container_434_mat_error_7_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 201)(9, "mat-form-field", 17)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Work Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "input", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, ProfilePageComponent_div_11_ng_container_434_mat_error_13_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 201)(15, "mat-form-field", 17)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "input", 204)(19, "mat-datepicker-toggle", 23)(20, "mat-datepicker", null, 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, ProfilePageComponent_div_11_ng_container_434_mat_error_22_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 201)(24, "mat-form-field", 17)(25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "input", 205)(28, "mat-datepicker-toggle", 23)(29, "mat-datepicker", null, 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, ProfilePageComponent_div_11_ng_container_434_mat_error_31_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 15)(33, "div", 172)(34, "div", 173)(35, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_ng_container_434_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r258); const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r257.pushToDataSource4(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_ng_container_434_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r258); const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r259.cancelParTran4(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](21);
    const _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](30);
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r114.workExpForm.get("companyName").invalid && ctx_r114.workExpForm.get("companyName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r114.workExpForm.get("workPosition").invalid && ctx_r114.workExpForm.get("workPosition").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matDatepicker", _r253);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", _r253);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r114.workExpForm.get("startDate").invalid && ctx_r114.workExpForm.get("startDate").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matDatepicker", _r255);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", _r255);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r114.workExpForm.get("endDate").invalid && ctx_r114.workExpForm.get("endDate").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("auth-spinner", ctx_r114.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r114.workExpForm.valid || ctx_r114.posting)("hidden", ctx_r114.viewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r114.parTranAction4, " Experience ");
} }
function ProfilePageComponent_div_11_ng_template_437_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " All Experience Details ");
} }
function ProfilePageComponent_div_11_mat_header_cell_476_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_477_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r260 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r260.id ? row_r260.id : "#", " ");
} }
function ProfilePageComponent_div_11_mat_header_cell_479_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_480_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r261 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r261.companyName);
} }
function ProfilePageComponent_div_11_mat_header_cell_482_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Work Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_483_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r262 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r262.workPosition);
} }
function ProfilePageComponent_div_11_mat_header_cell_485_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_486_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r263 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r263.startDate);
} }
function ProfilePageComponent_div_11_mat_header_cell_488_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_489_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r264 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r264.endDate);
} }
function ProfilePageComponent_div_11_mat_header_cell_491_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-header-cell", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_cell_492_Template(rf, ctx) { if (rf & 1) {
    const _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 179)(1, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_mat_cell_492_Template_button_click_1_listener($event) { return $event.stopPropagation(); })("click", function ProfilePageComponent_div_11_mat_cell_492_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r269); const row_r265 = restoredCtx.$implicit; const i_r266 = restoredCtx.index; const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r268.editParTran4(row_r265, i_r266); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-feather-icons", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_mat_cell_492_Template_button_click_3_listener($event) { return $event.stopPropagation(); })("click", function ProfilePageComponent_div_11_mat_cell_492_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r269); const i_r266 = restoredCtx.index; const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r271.deleteParTran4(i_r266); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-feather-icons", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("tbl-fav-delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", "trash-2");
} }
function ProfilePageComponent_div_11_mat_header_row_493_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-header-row");
} }
function ProfilePageComponent_div_11_mat_row_494_Template(rf, ctx) { if (rf & 1) {
    const _r274 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-row", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_mat_row_494_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r274); const row_r272 = restoredCtx.$implicit; const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r273.editParTran4(row_r272, ctx_r273.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("cursor", "pointer");
} }
function ProfilePageComponent_div_11_mat_cell_495_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-cell", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r133.input4.value, "\"");
} }
function ProfilePageComponent_div_11_div_496_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-spinner", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("diameter", 40);
} }
function ProfilePageComponent_div_11_ng_template_504_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Reference Details");
} }
function ProfilePageComponent_div_11_mat_error_512_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid First Reference Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_523_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid First Reference Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_529_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid First Reference Email Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_536_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Second Reference Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_547_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Second Reference Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_553_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Second Reference Email Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_template_560_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Job Information");
} }
function ProfilePageComponent_div_11_mat_error_570_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Department ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_578_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Branch Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_593_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Organization Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_602_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Job Group Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_option_613_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r275 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", item_r275);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r275);
} }
function ProfilePageComponent_div_11_mat_error_614_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Enrollment Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_623_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Enrollment Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_631_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Reporting To Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_template_638_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Salary Information");
} }
function ProfilePageComponent_div_11_mat_error_646_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Bank Account Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_652_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid KRA Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_658_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid NHIF Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_664_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid NSSF Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_mat_error_670_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Please enter a valid Basic Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ProfilePageComponent_div_11_ng_template_677_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Submit");
} }
const _c0 = function () { return [2, 5, 10, 20, 30, 40, 50, 100]; };
function ProfilePageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r277 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProfilePageComponent_div_11_div_1_Template, 54, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-horizontal-stepper", 11, 12)(4, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, ProfilePageComponent_div_11_ng_template_5_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "form", 14)(7, "div", 15)(8, "div", 16)(9, "mat-form-field", 17)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, ProfilePageComponent_div_11_mat_error_13_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 16)(15, "mat-form-field", 17)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Middle Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ProfilePageComponent_div_11_mat_error_19_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 16)(21, "mat-form-field", 17)(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, ProfilePageComponent_div_11_mat_error_25_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 16)(27, "mat-form-field", 17)(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "input", 22)(31, "mat-datepicker-toggle", 23)(32, "mat-datepicker", null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, ProfilePageComponent_div_11_mat_error_34_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 16)(36, "mat-form-field", 17)(37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "National ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](39, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, ProfilePageComponent_div_11_mat_error_40_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 16)(42, "mat-form-field", 17)(43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, "Religion");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](46, ProfilePageComponent_div_11_mat_option_46_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](47, ProfilePageComponent_div_11_mat_error_47_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 16)(49, "section", 28)(50, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "Gender:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "mat-radio-group", 30)(53, "mat-radio-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "mat-radio-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](57, ProfilePageComponent_div_11_mat_error_57_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 16)(59, "mat-form-field", 17)(60, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61, "Marital Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "mat-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](63, ProfilePageComponent_div_11_mat_option_63_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](64, ProfilePageComponent_div_11_mat_error_64_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, ProfilePageComponent_div_11_div_65_Template, 13, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div", 16)(67, "mat-checkbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](68, "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](69, ProfilePageComponent_div_11_div_69_Template, 6, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "div")(71, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_button_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r276.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](75, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](76, ProfilePageComponent_div_11_ng_template_76_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "form", 14)(78, "div", 15)(79, "div", 16)(80, "mat-form-field", 17)(81, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](82, "Nationality");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](83, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](84, ProfilePageComponent_div_11_mat_error_84_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "div", 16)(86, "mat-form-field", 17)(87, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88, "County");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](89, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](90, ProfilePageComponent_div_11_mat_error_90_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "div", 16)(92, "mat-form-field", 17)(93, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](94, "Sub-County");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](95, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](96, ProfilePageComponent_div_11_mat_error_96_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "div", 15)(98, "div", 16)(99, "mat-form-field", 17)(100, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101, "Residential Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](102, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](103, ProfilePageComponent_div_11_mat_error_103_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "div", 16)(105, "mat-form-field", 17)(106, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](107, "Residential County");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](108, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](109, ProfilePageComponent_div_11_mat_error_109_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "div", 16)(111, "mat-form-field", 17)(112, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](113, "Residential Sub-County");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](114, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](115, ProfilePageComponent_div_11_mat_error_115_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "div", 15)(117, "div", 16)(118, "mat-form-field", 17)(119, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](120, "Postal Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](121, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](122, ProfilePageComponent_div_11_mat_error_122_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "div", 16)(124, "mat-form-field", 17)(125, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](126, "Postal Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](127, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](128, ProfilePageComponent_div_11_mat_error_128_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](129, "div", 16)(130, "mat-form-field", 17)(131, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](132, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](133, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](134, ProfilePageComponent_div_11_mat_error_134_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](135, "div")(136, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](137, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](138, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](139, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](140, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](141, ProfilePageComponent_div_11_ng_template_141_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](142, "form", 14)(143, "div", 15)(144, "div", 48)(145, "mat-form-field", 17)(146, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](147, "Personal Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](148, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](149, ProfilePageComponent_div_11_mat_error_149_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](150, "div", 48)(151, "mat-form-field", 17)(152, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](153, "Alternative Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](154, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](155, ProfilePageComponent_div_11_mat_error_155_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "div", 48)(157, "mat-form-field", 17)(158, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](159, "Personal Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](160, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](161, ProfilePageComponent_div_11_mat_error_161_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](162, "div", 48)(163, "mat-form-field", 17)(164, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](165, "Alternative Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](166, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](167, ProfilePageComponent_div_11_mat_error_167_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](168, "div")(169, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](170, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](171, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](172, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](173, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](174, ProfilePageComponent_div_11_ng_template_174_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](176, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](177, ProfilePageComponent_div_11_ng_container_177_Template, 39, 10, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](178, "mat-tab-group")(179, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](180, ProfilePageComponent_div_11_ng_template_180_Template, 3, 0, "ng-template", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](181, "div", 54)(182, "div", 55)(183, "div", 56)(184, "div", 57)(185, "div", 15)(186, "div", 58)(187, "ul", 59)(188, "li", 60)(189, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](190, "Next Of Kin");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](191, "li", 61)(192, "label", 62)(193, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](194, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](195, "input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function ProfilePageComponent_div_11_Template_input_keyup_195_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r278.applyFilter1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](197, "li")(198, "div", 66)(199, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_button_click_199_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r279.addParTran1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](200, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](201, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](202, "li")(203, "div", 69)(204, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_button_click_204_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r280.refresh1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](205, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](206, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](207, "div", 70)(208, "ul", 71)(209, "li")(210, "div", 72)(211, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_img_click_211_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](217); return _r37.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](212, "li")(213, "div", 74)(214, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_img_click_214_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](217); return _r37.exportTable("csv"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](215, "mat-table", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](218, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](219, ProfilePageComponent_div_11_mat_header_cell_219_Template, 2, 0, "mat-header-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](220, ProfilePageComponent_div_11_mat_cell_220_Template, 2, 1, "mat-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](221, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](222, ProfilePageComponent_div_11_mat_header_cell_222_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](223, ProfilePageComponent_div_11_mat_cell_223_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](224, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](225, ProfilePageComponent_div_11_mat_header_cell_225_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](226, ProfilePageComponent_div_11_mat_cell_226_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](227, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](228, ProfilePageComponent_div_11_mat_header_cell_228_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](229, ProfilePageComponent_div_11_mat_cell_229_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](230, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](231, ProfilePageComponent_div_11_mat_header_cell_231_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](232, ProfilePageComponent_div_11_mat_cell_232_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](233, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](234, ProfilePageComponent_div_11_mat_header_cell_234_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](235, ProfilePageComponent_div_11_mat_cell_235_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](236, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](237, ProfilePageComponent_div_11_mat_header_cell_237_Template, 2, 0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](238, ProfilePageComponent_div_11_mat_cell_238_Template, 5, 6, "mat-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](239, ProfilePageComponent_div_11_mat_header_row_239_Template, 1, 0, "mat-header-row", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](240, ProfilePageComponent_div_11_mat_row_240_Template, 1, 2, "mat-row", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](241, ProfilePageComponent_div_11_mat_cell_241_Template, 2, 1, "mat-cell", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](242, ProfilePageComponent_div_11_div_242_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](243, "mat-paginator", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](244, "div")(245, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](246, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](247, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](248, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](249, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](250, ProfilePageComponent_div_11_ng_template_250_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](251);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](252, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](253, ProfilePageComponent_div_11_ng_container_253_Template, 42, 12, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](254, "mat-tab-group")(255, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](256, ProfilePageComponent_div_11_ng_template_256_Template, 3, 0, "ng-template", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](257, "div", 54)(258, "div", 55)(259, "div", 56)(260, "div", 57)(261, "div", 15)(262, "div", 58)(263, "ul", 59)(264, "li", 60)(265, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](266, "Dependants");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](267, "li", 61)(268, "label", 62)(269, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](270, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](271, "input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function ProfilePageComponent_div_11_Template_input_keyup_271_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r283.applyFilter2($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](273, "li")(274, "div", 66)(275, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_button_click_275_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r284.addParTran2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](276, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](277, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](278, "li")(279, "div", 69)(280, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_button_click_280_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r285.refresh2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](281, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](282, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](283, "div", 70)(284, "ul", 71)(285, "li")(286, "div", 72)(287, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_img_click_287_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](217); return _r37.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](288, "li")(289, "div", 74)(290, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_img_click_290_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](217); return _r37.exportTable("csv"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](291, "mat-table", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](294, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](295, ProfilePageComponent_div_11_mat_header_cell_295_Template, 2, 0, "mat-header-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](296, ProfilePageComponent_div_11_mat_cell_296_Template, 2, 1, "mat-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](297, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](298, ProfilePageComponent_div_11_mat_header_cell_298_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](299, ProfilePageComponent_div_11_mat_cell_299_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](300, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](301, ProfilePageComponent_div_11_mat_header_cell_301_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](302, ProfilePageComponent_div_11_mat_cell_302_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](303, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](304, ProfilePageComponent_div_11_mat_header_cell_304_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](305, ProfilePageComponent_div_11_mat_cell_305_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](306, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](307, ProfilePageComponent_div_11_mat_header_cell_307_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](308, ProfilePageComponent_div_11_mat_cell_308_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](309, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](310, ProfilePageComponent_div_11_mat_header_cell_310_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](311, ProfilePageComponent_div_11_mat_cell_311_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](312, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](313, ProfilePageComponent_div_11_mat_header_cell_313_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](314, ProfilePageComponent_div_11_mat_cell_314_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](315, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](316, ProfilePageComponent_div_11_mat_header_cell_316_Template, 2, 0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](317, ProfilePageComponent_div_11_mat_cell_317_Template, 5, 6, "mat-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](318, ProfilePageComponent_div_11_mat_header_row_318_Template, 1, 0, "mat-header-row", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](319, ProfilePageComponent_div_11_mat_row_319_Template, 1, 2, "mat-row", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](320, ProfilePageComponent_div_11_mat_cell_320_Template, 2, 1, "mat-cell", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](321, ProfilePageComponent_div_11_div_321_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](322, "mat-paginator", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](323, "div")(324, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](325, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](326, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](327, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](328, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](329, ProfilePageComponent_div_11_ng_template_329_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](330);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](331, "form", 14)(332, "div", 15)(333, "div", 102)(334, "mat-form-field", 17)(335, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](336, "Highest Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](337, "mat-select", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](338, ProfilePageComponent_div_11_mat_option_338_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](339, ProfilePageComponent_div_11_mat_error_339_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](340, "div", 102)(341, "mat-form-field", 17)(342, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](343, "Course Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](344, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](345, ProfilePageComponent_div_11_mat_error_345_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](346, "div", 102)(347, "mat-form-field", 17)(348, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](349, "Education Enrollment Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](350, "mat-select", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](351, ProfilePageComponent_div_11_mat_option_351_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](352, ProfilePageComponent_div_11_mat_error_352_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](353, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](354, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](355, ProfilePageComponent_div_11_ng_container_355_Template, 52, 16, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](356, "mat-tab-group")(357, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](358, ProfilePageComponent_div_11_ng_template_358_Template, 3, 0, "ng-template", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](359, "div", 54)(360, "div", 55)(361, "div", 56)(362, "div", 57)(363, "div", 15)(364, "div", 58)(365, "ul", 59)(366, "li", 60)(367, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](368, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](369, "li", 61)(370, "label", 62)(371, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](372, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](373, "input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function ProfilePageComponent_div_11_Template_input_keyup_373_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r288.applyFilter3($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](375, "li")(376, "div", 66)(377, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_button_click_377_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r289.addParTran3(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](378, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](379, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](380, "li")(381, "div", 69)(382, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_button_click_382_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r290.refresh3(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](383, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](384, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](385, "div", 70)(386, "ul", 71)(387, "li")(388, "div", 72)(389, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_img_click_389_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](217); return _r37.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](390, "li")(391, "div", 74)(392, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_img_click_392_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](217); return _r37.exportTable("csv"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](393, "mat-table", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](396, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](397, ProfilePageComponent_div_11_mat_header_cell_397_Template, 2, 0, "mat-header-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](398, ProfilePageComponent_div_11_mat_cell_398_Template, 2, 1, "mat-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](399, 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](400, ProfilePageComponent_div_11_mat_header_cell_400_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](401, ProfilePageComponent_div_11_mat_cell_401_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](402, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](403, ProfilePageComponent_div_11_mat_header_cell_403_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](404, ProfilePageComponent_div_11_mat_cell_404_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](405, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](406, ProfilePageComponent_div_11_mat_header_cell_406_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](407, ProfilePageComponent_div_11_mat_cell_407_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](408, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](409, ProfilePageComponent_div_11_mat_header_cell_409_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](410, ProfilePageComponent_div_11_mat_cell_410_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](411, 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](412, ProfilePageComponent_div_11_mat_header_cell_412_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](413, ProfilePageComponent_div_11_mat_cell_413_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](414, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](415, ProfilePageComponent_div_11_mat_header_cell_415_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](416, ProfilePageComponent_div_11_mat_cell_416_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](417, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](418, ProfilePageComponent_div_11_mat_header_cell_418_Template, 2, 0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](419, ProfilePageComponent_div_11_mat_cell_419_Template, 5, 6, "mat-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](420, ProfilePageComponent_div_11_mat_header_row_420_Template, 1, 0, "mat-header-row", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](421, ProfilePageComponent_div_11_mat_row_421_Template, 1, 2, "mat-row", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](422, ProfilePageComponent_div_11_mat_cell_422_Template, 2, 1, "mat-cell", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](423, ProfilePageComponent_div_11_div_423_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](424, "mat-paginator", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](425, "div")(426, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](427, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](428, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](429, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](430, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](431, ProfilePageComponent_div_11_ng_template_431_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](432);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](433, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](434, ProfilePageComponent_div_11_ng_container_434_Template, 39, 13, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](435, "mat-tab-group")(436, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](437, ProfilePageComponent_div_11_ng_template_437_Template, 3, 0, "ng-template", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](438, "div", 54)(439, "div", 55)(440, "div", 56)(441, "div", 57)(442, "div", 15)(443, "div", 58)(444, "ul", 59)(445, "li", 60)(446, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](447, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](448, "li", 61)(449, "label", 62)(450, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](451, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](452, "input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function ProfilePageComponent_div_11_Template_input_keyup_452_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r293.applyFilter4($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](454, "li")(455, "div", 66)(456, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_button_click_456_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r294.addParTran4(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](457, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](458, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](459, "li")(460, "div", 69)(461, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_button_click_461_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r295.refresh4(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](462, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](463, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](464, "div", 70)(465, "ul", 71)(466, "li")(467, "div", 72)(468, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_img_click_468_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](217); return _r37.exportTable("xlsx", { fileName: "assets-list", sheet: "sheet1" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](469, "li")(470, "div", 74)(471, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_img_click_471_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](217); return _r37.exportTable("csv"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](472, "mat-table", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](475, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](476, ProfilePageComponent_div_11_mat_header_cell_476_Template, 2, 0, "mat-header-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](477, ProfilePageComponent_div_11_mat_cell_477_Template, 2, 1, "mat-cell", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](478, 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](479, ProfilePageComponent_div_11_mat_header_cell_479_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](480, ProfilePageComponent_div_11_mat_cell_480_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](481, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](482, ProfilePageComponent_div_11_mat_header_cell_482_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](483, ProfilePageComponent_div_11_mat_cell_483_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](484, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](485, ProfilePageComponent_div_11_mat_header_cell_485_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](486, ProfilePageComponent_div_11_mat_cell_486_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](487, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](488, ProfilePageComponent_div_11_mat_header_cell_488_Template, 2, 0, "mat-header-cell", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](489, ProfilePageComponent_div_11_mat_cell_489_Template, 2, 1, "mat-cell", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](490, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](491, ProfilePageComponent_div_11_mat_header_cell_491_Template, 2, 0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](492, ProfilePageComponent_div_11_mat_cell_492_Template, 5, 6, "mat-cell", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](493, ProfilePageComponent_div_11_mat_header_row_493_Template, 1, 0, "mat-header-row", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](494, ProfilePageComponent_div_11_mat_row_494_Template, 1, 2, "mat-row", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](495, ProfilePageComponent_div_11_mat_cell_495_Template, 2, 1, "mat-cell", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](496, ProfilePageComponent_div_11_div_496_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](497, "mat-paginator", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](498, "div")(499, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](500, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](501, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](502, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](503, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](504, ProfilePageComponent_div_11_ng_template_504_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](505, "form", 14)(506, "div", 15)(507, "div", 48)(508, "mat-form-field", 17)(509, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](510, "First Reference Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](511, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](512, ProfilePageComponent_div_11_mat_error_512_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](513, "div", 48)(514, "mat-form-field", 17)(515, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](516, "First Reference Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](517, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](518, "div", 48)(519, "mat-form-field", 17)(520, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](521, "First Reference Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](522, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](523, ProfilePageComponent_div_11_mat_error_523_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](524, "div", 48)(525, "mat-form-field", 17)(526, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](527, "First Reference Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](528, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](529, ProfilePageComponent_div_11_mat_error_529_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](530, "div", 15)(531, "div", 48)(532, "mat-form-field", 17)(533, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](534, "Second Reference Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](535, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](536, ProfilePageComponent_div_11_mat_error_536_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](537, "div", 48)(538, "mat-form-field", 17)(539, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](540, "Second Reference Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](541, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](542, "div", 48)(543, "mat-form-field", 17)(544, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](545, "Second Reference Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](546, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](547, ProfilePageComponent_div_11_mat_error_547_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](548, "div", 48)(549, "mat-form-field", 17)(550, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](551, "Second Reference Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](552, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](553, ProfilePageComponent_div_11_mat_error_553_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](554, "div")(555, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](556, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](557, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](558, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](559, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](560, ProfilePageComponent_div_11_ng_template_560_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](561, "form", 14)(562, "div", 15)(563, "div", 48)(564, "mat-form-field", 17)(565, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](566, "Department ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](567, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](568, "mat-icon", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_mat_icon_click_568_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r298.departmentLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](569, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](570, ProfilePageComponent_div_11_mat_error_570_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](571, "div", 48)(572, "mat-form-field", 17)(573, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](574, "Branch Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](575, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](576, "mat-icon", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_mat_icon_click_576_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r299.branchLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](577, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](578, ProfilePageComponent_div_11_mat_error_578_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](579, "div", 48)(580, "mat-form-field", 17)(581, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](582, "Cost Center Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](583, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](584, "mat-icon", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_mat_icon_click_584_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r300.costCenterLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](585, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](586, "div", 48)(587, "mat-form-field", 17)(588, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](589, "Organization Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](590, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](591, "mat-icon", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_mat_icon_click_591_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r301.jobRoleLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](592, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](593, ProfilePageComponent_div_11_mat_error_593_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](594, "div", 15)(595, "div", 48)(596, "mat-form-field", 17)(597, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](598, "Job Group Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](599, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](600, "mat-icon", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_mat_icon_click_600_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r302.jobGroupLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](601, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](602, ProfilePageComponent_div_11_mat_error_602_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](603, "div", 48)(604, "mat-form-field", 17)(605, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](606, "Work Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](607, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](608, "div", 48)(609, "mat-form-field", 17)(610, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](611, "Enrollment Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](612, "mat-select", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](613, ProfilePageComponent_div_11_mat_option_613_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](614, ProfilePageComponent_div_11_mat_error_614_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](615, "div", 48)(616, "mat-form-field", 17)(617, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](618, "Enrollment Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](619, "input", 132)(620, "mat-datepicker-toggle", 23)(621, "mat-datepicker", null, 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](623, ProfilePageComponent_div_11_mat_error_623_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](624, "div", 48)(625, "mat-form-field", 17)(626, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](627, "Reporting To Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](628, "input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](629, "mat-icon", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_mat_icon_click_629_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r303.employeeLookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](630, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](631, ProfilePageComponent_div_11_mat_error_631_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](632, "div")(633, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](634, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](635, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](636, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](637, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](638, ProfilePageComponent_div_11_ng_template_638_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](639, "form", 14)(640, "div", 15)(641, "div", 48)(642, "mat-form-field", 17)(643, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](644, "Bank Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](645, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](646, ProfilePageComponent_div_11_mat_error_646_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](647, "div", 48)(648, "mat-form-field", 17)(649, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](650, "KRA Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](651, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](652, ProfilePageComponent_div_11_mat_error_652_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](653, "div", 48)(654, "mat-form-field", 17)(655, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](656, "NHIF Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](657, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](658, ProfilePageComponent_div_11_mat_error_658_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](659, "div", 48)(660, "mat-form-field", 17)(661, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](662, "NSSF Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](663, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](664, ProfilePageComponent_div_11_mat_error_664_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](665, "div", 48)(666, "mat-form-field", 17)(667, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](668, "Basic Salary");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](669, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](670, ProfilePageComponent_div_11_mat_error_670_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](671, "div")(672, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](673, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](674, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](675, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](676, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](677, ProfilePageComponent_div_11_ng_template_677_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](678, "div")(679, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](680, " Review your information and click \"Submit\" to complete the process. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](681, "div")(682, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](683, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](684, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_button_click_684_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3); return _r2.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](685, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](686, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProfilePageComponent_div_11_Template_button_click_686_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r277); const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r305.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](687);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](33);
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](622);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.pageFunction !== "Add" && ctx_r0.formData);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("linear", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("firstName").invalid && ctx_r0.mngForm.get("firstName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("middleName").invalid && ctx_r0.mngForm.get("middleName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("lastName").invalid && ctx_r0.mngForm.get("lastName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matDatepicker", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("dob").invalid && ctx_r0.mngForm.get("dob").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("nationalId").invalid && ctx_r0.mngForm.get("nationalId").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.religionArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("religion").invalid && ctx_r0.mngForm.get("religion").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("gender").invalid && ctx_r0.mngForm.get("gender").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.maritalStatusArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("maritalStatus").invalid && ctx_r0.mngForm.get("maritalStatus").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("maritalStatus").value === "Married");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("disabled").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("nationality").invalid && ctx_r0.mngForm.get("nationality").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("county").invalid && ctx_r0.mngForm.get("county").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("subCounty").invalid && ctx_r0.mngForm.get("subCounty").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("residentialCountry").invalid && ctx_r0.mngForm.get("residentialCountry").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("residentialCounty").invalid && ctx_r0.mngForm.get("residentialCounty").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("residentialSubCounty").invalid && ctx_r0.mngForm.get("residentialSubCounty").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("postalAddress").invalid && ctx_r0.mngForm.get("postalAddress").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("postalCode").invalid && ctx_r0.mngForm.get("postalCode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("city").invalid && ctx_r0.mngForm.get("city").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("personalPhone").invalid && ctx_r0.mngForm.get("personalPhone").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("alternativePhone").invalid && ctx_r0.mngForm.get("alternativePhone").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("personalEmail").invalid && ctx_r0.mngForm.get("personalEmail").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("alternativeEmail").invalid && ctx_r0.mngForm.get("alternativeEmail").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.nextOfKinForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.showParTranForm1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx_r0.dataSource1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.dataSource1.data.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](99, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.dependantForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.showParTranForm2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx_r0.dataSource2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.dataSource2.data.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](100, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.educationLevelArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("highestEducation").invalid && ctx_r0.mngForm.get("highestEducation").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("courseProgram").invalid && ctx_r0.mngForm.get("courseProgram").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.educationEnrollmentsArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("educationEnrollment").invalid && ctx_r0.mngForm.get("educationEnrollment").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.empEducationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.showParTranForm3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx_r0.dataSource3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.dataSource3.data.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](101, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.workExpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.showParTranForm4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx_r0.dataSource4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.dataSource4.data.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](102, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("firstRefName").invalid && ctx_r0.mngForm.get("firstRefName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("firstRefPhone").invalid && ctx_r0.mngForm.get("firstRefPhone").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("firstRefEmail").invalid && ctx_r0.mngForm.get("firstRefEmail").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("secondRefName").invalid && ctx_r0.mngForm.get("secondRefName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("secondRefPhone").invalid && ctx_r0.mngForm.get("secondRefPhone").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("secondRefEmail").invalid && ctx_r0.mngForm.get("secondRefEmail").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("departmentId").invalid && ctx_r0.mngForm.get("departmentId").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("branchName").invalid && ctx_r0.mngForm.get("branchName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("organizationRole").invalid && ctx_r0.mngForm.get("organizationRole").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("jobGroupName").invalid && ctx_r0.mngForm.get("jobGroupName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.enrollmentStatusArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("enrollmentStatus").invalid && ctx_r0.mngForm.get("enrollmentStatus").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matDatepicker", _r149);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", _r149);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("enrollmentStartDate").invalid && ctx_r0.mngForm.get("enrollmentStartDate").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("reportingToFullname").invalid && ctx_r0.mngForm.get("reportingToFullname").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.mngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("bankAccount").invalid && ctx_r0.mngForm.get("bankAccount").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("kraNo").invalid && ctx_r0.mngForm.get("kraNo").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("nhifNo").invalid && ctx_r0.mngForm.get("nhifNo").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("nssfNo").invalid && ctx_r0.mngForm.get("nssfNo").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mngForm.get("basicSalary").invalid && ctx_r0.mngForm.get("basicSalary").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("auth-spinner", ctx_r0.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r0.mngForm.valid || ctx_r0.posting)("hidden", ctx_r0.viewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.pageFunction, " Employee ");
} }
const _c1 = function () { return ["Employee"]; };
class ProfilePageComponent {
    constructor(fb, tokenStorageService, snackbar, router, route, employeeService, dialog) {
        this.fb = fb;
        this.tokenStorageService = tokenStorageService;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.employeeService = employeeService;
        this.dialog = dialog;
        this.showForm = false;
        this.isLoading = true;
        this.pageFunction = "Add";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
        this.downloadLoading = false;
        this.hideSubmit = false;
        this.hideApprovals = true;
        this.approvalVisible = false;
        this.disableActions = false;
        this.religionArray = [
            "Christian",
            "Islam",
            "Irreligion",
            "Atheist",
            "Hindu",
            "Other",
        ];
        this.maritalStatusArray = [
            "Single",
            "Married",
            "Divorced",
            "Separated",
            "Widow",
            "Widower",
            "Prefer not to say",
        ];
        this.educationLevelArray = [
            "Research Doctorate",
            "Advanced Intermediate Doctorate",
            "First Professional Doctorate",
            "PHD",
            "Masters",
            "K.C.S.E",
            "Bachelors",
            "Associate",
            "Diploma",
            "Certificate",
            "Other",
        ];
        this.educationEnrollmentsArray = [
            "Full Time",
            "Part Time",
            "Graduated",
            "Enrolled",
            "Differed",
        ];
        this.enrollmentStatusArray = [
            "Contract",
            "Permanent",
            "Contract(Internship)",
            "Attachment",
            "Secondment",
            "Direct Sales Representative",
        ];
        this.gpaScoreArray = [
            "First Class Honours",
            "Second Class (Upper division)",
            "Second Class (Lower Division)",
            "Pass",
            "Other",
        ];
        this.viewMode = false;
        this.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource([]);
        this.displayedColumns1 = [
            "id",
            "name",
            "phoneNumber",
            "email",
            "address",
            "relationship",
            "action",
        ];
        this.showParTranForm1 = false;
        this.parTranAction1 = "";
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource([]);
        this.displayedColumns2 = [
            "id",
            "dependantName",
            "dependantDob",
            "birthCertNo",
            "dependantPhone",
            "dependantEmail",
            "downloadFile",
            "action",
        ];
        this.showParTranForm2 = false;
        this.parTranAction2 = "";
        this.dataSource3 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource([]);
        this.displayedColumns3 = [
            "id",
            "institutionName",
            "awardCertificate",
            "certNo",
            "gpaScore",
            "enrollOn",
            "graduatedOn",
            "action",
        ];
        this.showParTranForm3 = false;
        this.parTranAction3 = "";
        this.dataSource4 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource([]);
        this.displayedColumns4 = [
            "id",
            "companyName",
            "workPosition",
            "startDate",
            "endDate",
            "action",
        ];
        this.showParTranForm4 = false;
        this.parTranAction4 = "";
        this.loading = false;
        // **************************************************************************************************
        // **************************************************************************************************
        //Showing the submit button
        this.posting = false;
        this.currentUser = this.tokenStorageService.getUser().username;
        this.currentUserCode = this.tokenStorageService.getUser().empPfNo;
        this.generateSubForm1();
        this.generateSubForm2();
        this.generateSubForm3();
        this.generateSubForm4();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    ngOnInit() {
        this.getPage();
        this.showForm = true;
        this.getDataByEmpfCode();
        // if (
        //   this.route.queryParams &&
        //   typeof this.route.queryParams.subscribe === "function"
        // ) {
        //   this.route.queryParams.subscribe((params) => {
        //     console.log("params: ", params);
        //     if (params.requestCode) {
        //       this.requestCode = params.requestCode;
        //       this.getDataById();
        //       this.pageFunction = params.action;
        //     }
        //   });
        //   this.showForm = true;
        // } else {
        //   this.showForm = true;
        // }
    }
    ngAfterViewInit() { }
    getDataByEmpfCode() {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams().set("empNo", this.currentUserCode);
        this.employeeService
            .readByEmployeePf(param)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
            .subscribe({
            next: (res) => {
                console.log("RES: ", res);
                if (res.entity) {
                    this.pageFunction = "Update";
                    this.formData = res.entity;
                    console.log("this.formData: ", this.formData);
                    this.onPopulateTables(res);
                    this.showForm = true;
                    this.getPage();
                }
                else {
                    this.pageFunction = "Add";
                    this.snackbar.showNotification("snackbar-danger", res.message);
                }
            },
            error: (err) => {
                this.snackbar.showNotification("snackbar-danger", err.message);
            },
            complete: () => { },
        });
    }
    onPopulateTables(res) {
        if (res) {
            if (res.entity) {
                if (res.entity.nextOfKins) {
                    this.dataSource1.data = res.entity.nextOfKins;
                    this.refresh1();
                }
                if (res.entity.dependants) {
                    this.dataSource2.data = res.entity.dependants;
                    this.refresh2();
                }
                if (res.entity.employeeEducations) {
                    this.dataSource3.data = res.entity.employeeEducations;
                    this.refresh3();
                }
                if (res.entity.employeeWorkExperiences) {
                    this.dataSource4.data = res.entity.employeeWorkExperiences;
                    this.refresh4();
                }
            }
            else {
                if (res.nextOfKins) {
                    this.dataSource1.data = res.nextOfKins;
                    this.refresh1();
                }
                if (res.dependants) {
                    this.dataSource2.data = res.dependants;
                    this.refresh2();
                }
                if (res.employeeEducations) {
                    this.dataSource3.data = res.employeeEducations;
                    this.refresh3();
                }
                if (res.employeeWorkExperiences) {
                    this.dataSource4.data = res.employeeWorkExperiences;
                    this.refresh4();
                }
            }
        }
    }
    getPage() {
        if (this.pageFunction === "Add") {
            this.generateForm();
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "Update") {
            this.generateForm(this.formData);
            this.generateSubForm1();
            this.hideApprovals = true;
        }
        else if (this.pageFunction === "View") {
            this.generateForm(this.formData);
            this.generateSubForm1();
            this.hideSubmit = true;
            this.hideApprovals = true;
        }
    }
    activateViewMode() {
        this.viewMode = true;
    }
    generateForm(formData) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30;
        console.log("generateForm formData :: ", formData);
        this.mngForm = this.fb.group({
            id: [(_a = formData === null || formData === void 0 ? void 0 : formData.id) !== null && _a !== void 0 ? _a : ""],
            //Basic Info
            empNo: [(_b = formData === null || formData === void 0 ? void 0 : formData.empNo) !== null && _b !== void 0 ? _b : ""],
            firstName: [
                (_c = formData === null || formData === void 0 ? void 0 : formData.firstName) !== null && _c !== void 0 ? _c : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(40),
                ],
            ],
            middleName: [
                (_d = formData === null || formData === void 0 ? void 0 : formData.middleName) !== null && _d !== void 0 ? _d : "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(40)],
            ],
            lastName: [
                (_e = formData === null || formData === void 0 ? void 0 : formData.lastName) !== null && _e !== void 0 ? _e : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(40),
                ],
            ],
            dob: [(_f = formData === null || formData === void 0 ? void 0 : formData.dob) !== null && _f !== void 0 ? _f : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            nationalId: [
                (_g = formData === null || formData === void 0 ? void 0 : formData.nationalId) !== null && _g !== void 0 ? _g : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(7),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[0-9]+"),
                ],
            ],
            religion: [(_h = formData === null || formData === void 0 ? void 0 : formData.religion) !== null && _h !== void 0 ? _h : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            gender: [(_j = formData === null || formData === void 0 ? void 0 : formData.gender) !== null && _j !== void 0 ? _j : "male", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            maritalStatus: [(_k = formData === null || formData === void 0 ? void 0 : formData.maritalStatus) !== null && _k !== void 0 ? _k : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            disabled: [(_l = formData === null || formData === void 0 ? void 0 : formData.disabled) !== null && _l !== void 0 ? _l : false],
            disabledRegNo: [
                (_m = formData === null || formData === void 0 ? void 0 : formData.disabledRegNo) !== null && _m !== void 0 ? _m : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(7),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[0-9]+"),
                ],
            ],
            marriageCertificate: [""],
            //Home Address
            nationality: [
                (_o = formData === null || formData === void 0 ? void 0 : formData.nationality) !== null && _o !== void 0 ? _o : "Kenyan",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(40),
                ],
            ],
            county: [
                (_p = formData === null || formData === void 0 ? void 0 : formData.county) !== null && _p !== void 0 ? _p : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(40),
                ],
            ],
            subCounty: [
                (_q = formData === null || formData === void 0 ? void 0 : formData.subCounty) !== null && _q !== void 0 ? _q : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(40),
                ],
            ],
            residentialCountry: [
                (_r = formData === null || formData === void 0 ? void 0 : formData.residentialCountry) !== null && _r !== void 0 ? _r : "Kenya",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(40),
                ],
            ],
            residentialCounty: [
                (_s = formData === null || formData === void 0 ? void 0 : formData.residentialCounty) !== null && _s !== void 0 ? _s : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(40),
                ],
            ],
            residentialSubCounty: [
                (_t = formData === null || formData === void 0 ? void 0 : formData.residentialSubCounty) !== null && _t !== void 0 ? _t : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(40),
                ],
            ],
            postalAddress: [
                (_u = formData === null || formData === void 0 ? void 0 : formData.postalAddress) !== null && _u !== void 0 ? _u : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(100),
                ],
            ],
            postalCode: [
                (_v = formData === null || formData === void 0 ? void 0 : formData.postalCode) !== null && _v !== void 0 ? _v : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[0-9]+"),
                ],
            ],
            city: [
                (_w = formData === null || formData === void 0 ? void 0 : formData.city) !== null && _w !== void 0 ? _w : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(100),
                ],
            ],
            //Contact Info
            personalPhone: [
                (_x = formData === null || formData === void 0 ? void 0 : formData.personalPhone) !== null && _x !== void 0 ? _x : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[0-9]+"),
                ],
            ],
            alternativePhone: [
                (_y = formData === null || formData === void 0 ? void 0 : formData.alternativePhone) !== null && _y !== void 0 ? _y : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[0-9]+"),
                ],
            ],
            personalEmail: [
                (_z = formData === null || formData === void 0 ? void 0 : formData.personalEmail) !== null && _z !== void 0 ? _z : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"),
                ],
            ],
            alternativeEmail: [
                (_0 = formData === null || formData === void 0 ? void 0 : formData.alternativeEmail) !== null && _0 !== void 0 ? _0 : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"),
                ],
            ],
            //NextOfKin
            nextOfKins: [(_1 = formData === null || formData === void 0 ? void 0 : formData.nextOfKins) !== null && _1 !== void 0 ? _1 : []],
            //Dependant
            dependants: [(_2 = formData === null || formData === void 0 ? void 0 : formData.dependants) !== null && _2 !== void 0 ? _2 : []],
            //EducationForm
            highestEducation: [(_3 = formData === null || formData === void 0 ? void 0 : formData.highestEducation) !== null && _3 !== void 0 ? _3 : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            courseProgram: [(_4 = formData === null || formData === void 0 ? void 0 : formData.courseProgram) !== null && _4 !== void 0 ? _4 : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            educationEnrollment: [
                (_5 = formData === null || formData === void 0 ? void 0 : formData.educationEnrollment) !== null && _5 !== void 0 ? _5 : "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
            ],
            employeeEducations: [(_6 = formData === null || formData === void 0 ? void 0 : formData.employeeEducations) !== null && _6 !== void 0 ? _6 : []],
            //ExperienceForm
            employeeWorkExperiences: [(_7 = formData === null || formData === void 0 ? void 0 : formData.employeeWorkExperiences) !== null && _7 !== void 0 ? _7 : []],
            //ReferenceForm
            firstRefName: [(_8 = formData === null || formData === void 0 ? void 0 : formData.firstRefName) !== null && _8 !== void 0 ? _8 : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            firstRefCompany: [(_9 = formData === null || formData === void 0 ? void 0 : formData.firstRefCompany) !== null && _9 !== void 0 ? _9 : ""],
            firstRefPhone: [
                (_10 = formData === null || formData === void 0 ? void 0 : formData.firstRefPhone) !== null && _10 !== void 0 ? _10 : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(20),
                ],
            ],
            firstRefEmail: [
                (_11 = formData === null || formData === void 0 ? void 0 : formData.firstRefEmail) !== null && _11 !== void 0 ? _11 : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"),
                ],
            ],
            secondRefName: [(_12 = formData === null || formData === void 0 ? void 0 : formData.secondRefName) !== null && _12 !== void 0 ? _12 : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            secondRefCompany: [(_13 = formData === null || formData === void 0 ? void 0 : formData.secondRefCompany) !== null && _13 !== void 0 ? _13 : ""],
            secondRefPhone: [
                (_14 = formData === null || formData === void 0 ? void 0 : formData.secondRefPhone) !== null && _14 !== void 0 ? _14 : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(20),
                ],
            ],
            secondRefEmail: [
                (_15 = formData === null || formData === void 0 ? void 0 : formData.secondRefEmail) !== null && _15 !== void 0 ? _15 : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"),
                ],
            ],
            //JobInfo
            departmentId: [(_16 = formData === null || formData === void 0 ? void 0 : formData.departmentId) !== null && _16 !== void 0 ? _16 : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            branchName: [(_17 = formData === null || formData === void 0 ? void 0 : formData.branchName) !== null && _17 !== void 0 ? _17 : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            costCenterCode: [(_18 = formData === null || formData === void 0 ? void 0 : formData.costCenterCode) !== null && _18 !== void 0 ? _18 : ""],
            organizationRole: [(_19 = formData === null || formData === void 0 ? void 0 : formData.organizationRole) !== null && _19 !== void 0 ? _19 : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            jobGroupName: [(_20 = formData === null || formData === void 0 ? void 0 : formData.jobGroupName) !== null && _20 !== void 0 ? _20 : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            workMail: [(_21 = formData === null || formData === void 0 ? void 0 : formData.workMail) !== null && _21 !== void 0 ? _21 : ""],
            enrollmentStatus: [(_22 = formData === null || formData === void 0 ? void 0 : formData.enrollmentStatus) !== null && _22 !== void 0 ? _22 : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            enrollmentStartDate: [
                (_23 = formData === null || formData === void 0 ? void 0 : formData.enrollmentStartDate) !== null && _23 !== void 0 ? _23 : "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
            ],
            // enrollmentEndDate: [
            //   formData?.enrollmentEndDate ?? "",
            //   Validators.required,
            // ],
            reportingToFullname: [
                (_24 = formData === null || formData === void 0 ? void 0 : formData.reportingToFullname) !== null && _24 !== void 0 ? _24 : "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
            ],
            //SalaryInfoForm
            bankName: [(_25 = formData === null || formData === void 0 ? void 0 : formData.bankName) !== null && _25 !== void 0 ? _25 : "KINGDOM BANK", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            bankAccount: [
                (_26 = formData === null || formData === void 0 ? void 0 : formData.bankAccount) !== null && _26 !== void 0 ? _26 : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[0-9]+"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(20),
                ],
            ],
            //confirmBankAccount: [formData?.confirmBankAccount ?? ""],
            kraNo: [
                (_27 = formData === null || formData === void 0 ? void 0 : formData.kraNo) !== null && _27 !== void 0 ? _27 : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(20),
                ],
            ],
            nhifNo: [
                (_28 = formData === null || formData === void 0 ? void 0 : formData.nhifNo) !== null && _28 !== void 0 ? _28 : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(20),
                ],
            ],
            nssfNo: [
                (_29 = formData === null || formData === void 0 ? void 0 : formData.nssfNo) !== null && _29 !== void 0 ? _29 : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(20),
                ],
            ],
            basicSalary: [(_30 = formData === null || formData === void 0 ? void 0 : formData.basicSalary) !== null && _30 !== void 0 ? _30 : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            //dcrsActualE2: [formData?.dcrsActualE2 ?? ""],
            //totalNonCashBenefit: [formData?.totalNonCashBenefit ?? ""],
            //valueOfQuarters: [formData?.valueOfQuarters ?? ""],
            //ownerOccupiedInterests: [formData?.ownerOccupiedInterests ?? ""],
            //mortgage: [formData?.mortgage ?? ""],
            //personalRelief: [formData?.personalRelief ?? ""],
            //insuranceRelief: [formData?.insuranceRelief ?? ""],
        });
        if (this.pageFunction === "Add") {
            const storedDataEmployee = localStorage.getItem("mngFormDataEmployee");
            if (storedDataEmployee) {
                this.mngForm.patchValue(JSON.parse(storedDataEmployee));
                this.onPopulateTables(JSON.parse(storedDataEmployee));
                console.log("storedDataEmployee:: ", storedDataEmployee);
            }
            this.mngForm.valueChanges.subscribe((value) => {
                localStorage.setItem("mngFormDataEmployee", JSON.stringify(value));
            });
        }
    }
    applyFilter1(event) {
        const filterValue = event.target.value;
        this.input1 = filterValue;
        this.dataSource1.filter = filterValue.trim().toLowerCase();
        if (this.dataSource1.paginator) {
            this.dataSource1.paginator.firstPage();
        }
    }
    generateSubForm1(formData) {
        var _a, _b, _c, _d, _e;
        this.nextOfKinForm = this.fb.group({
            name: [(_a = formData === null || formData === void 0 ? void 0 : formData.name) !== null && _a !== void 0 ? _a : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            phoneNumber: [
                (_b = formData === null || formData === void 0 ? void 0 : formData.phoneNumber) !== null && _b !== void 0 ? _b : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[0-9]+"),
                ],
            ],
            email: [
                (_c = formData === null || formData === void 0 ? void 0 : formData.email) !== null && _c !== void 0 ? _c : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"),
                ],
            ],
            address: [
                (_d = formData === null || formData === void 0 ? void 0 : formData.address) !== null && _d !== void 0 ? _d : "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(50)],
            ],
            relationship: [(_e = formData === null || formData === void 0 ? void 0 : formData.relationship) !== null && _e !== void 0 ? _e : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
        });
    }
    resetFormAndHide1() {
        this.mngForm.patchValue({
            nextOfKins: this.dataSource1.data,
        });
        this.nextOfKinForm.reset();
        this.showParTranForm1 = false;
    }
    addParTran1() {
        this.parTranAction1 = "Add";
        this.showParTranForm1 = true;
    }
    refresh1() {
        this.dataSource1.data = [...this.dataSource1.data];
        this.dataSource1.paginator = this.paginator1;
        this.dataSource1.sort = this.sort1;
    }
    editParTran1(data, index) {
        this.parTranAction1 = "Update";
        this.selectedParTranIndex1 = index;
        this.generateSubForm1(data);
        this.showParTranForm1 = true;
    }
    pushToDataSource1() {
        if (this.parTranAction1 === "Add") {
            this.dataSource1.data.push(this.nextOfKinForm.value);
        }
        else if (this.parTranAction1 === "Update") {
            let indexToUpdate;
            if (this.nextOfKinForm.value.id) {
                indexToUpdate = this.dataSource1.data.findIndex((item) => item.id === this.nextOfKinForm.value.id);
            }
            else {
                indexToUpdate = this.selectedParTranIndex1;
            }
            if (indexToUpdate !== -1) {
                this.dataSource1.data[indexToUpdate] = this.nextOfKinForm.value;
            }
        }
        this.resetFormAndHide1();
        this.refresh1();
    }
    cancelParTran1() {
        this.resetFormAndHide1();
    }
    deleteParTran1(index) {
        this.dataSource1.data.splice(index, 1);
        this.refresh1();
    }
    applyFilter2(event) {
        const filterValue = event.target.value;
        this.input1 = filterValue;
        this.dataSource2.filter = filterValue.trim().toLowerCase();
        if (this.dataSource2.paginator) {
            this.dataSource2.paginator.firstPage();
        }
    }
    generateSubForm2(formData) {
        var _a, _b, _c, _d, _e;
        this.dependantForm = this.fb.group({
            dependantName: [(_a = formData === null || formData === void 0 ? void 0 : formData.dependantName) !== null && _a !== void 0 ? _a : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            dependantDob: [(_b = formData === null || formData === void 0 ? void 0 : formData.dependantDob) !== null && _b !== void 0 ? _b : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            birthCertNo: [
                (_c = formData === null || formData === void 0 ? void 0 : formData.birthCertNo) !== null && _c !== void 0 ? _c : "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(15)],
            ],
            dependantPhone: [
                (_d = formData === null || formData === void 0 ? void 0 : formData.dependantPhone) !== null && _d !== void 0 ? _d : "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[+0-9]{12,15}")],
            ],
            dependantEmail: [
                (_e = formData === null || formData === void 0 ? void 0 : formData.dependantEmail) !== null && _e !== void 0 ? _e : "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(50)],
            ],
            dependantCertFile: [""],
        });
    }
    resetFormAndHide2() {
        this.mngForm.patchValue({
            dependants: this.dataSource2.data,
        });
        this.dependantForm.reset();
        this.showParTranForm2 = false;
    }
    addParTran2() {
        this.parTranAction2 = "Add";
        this.showParTranForm2 = true;
    }
    refresh2() {
        this.dataSource2.data = [...this.dataSource2.data];
        this.dataSource2.paginator = this.paginator2;
        this.dataSource2.sort = this.sort2;
    }
    editParTran2(data, index) {
        this.parTranAction2 = "Update";
        this.selectedParTranIndex2 = index;
        this.generateSubForm2(data);
        this.showParTranForm2 = true;
    }
    pushToDataSource2() {
        if (this.parTranAction2 === "Add") {
            this.dataSource2.data.push(this.dependantForm.value);
        }
        else if (this.parTranAction2 === "Update") {
            let indexToUpdate;
            if (this.dependantForm.value.id) {
                indexToUpdate = this.dataSource2.data.findIndex((item) => item.id === this.dependantForm.value.id);
            }
            else {
                indexToUpdate = this.selectedParTranIndex1;
            }
            if (indexToUpdate !== -1) {
                this.dataSource2.data[indexToUpdate] = this.dependantForm.value;
            }
        }
        this.resetFormAndHide2();
        this.refresh2();
    }
    cancelParTran2() {
        this.resetFormAndHide2();
    }
    deleteParTran2(index) {
        this.dataSource2.data.splice(index, 1);
        this.refresh2();
    }
    applyFilter3(event) {
        const filterValue = event.target.value;
        this.input1 = filterValue;
        this.dataSource3.filter = filterValue.trim().toLowerCase();
        if (this.dataSource3.paginator) {
            this.dataSource3.paginator.firstPage();
        }
    }
    generateSubForm3(formData) {
        var _a, _b, _c, _d, _e, _f;
        this.empEducationForm = this.fb.group({
            institutionName: [
                (_a = formData === null || formData === void 0 ? void 0 : formData.institutionName) !== null && _a !== void 0 ? _a : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(120),
                ],
            ],
            awardCertificate: [
                (_b = formData === null || formData === void 0 ? void 0 : formData.awardCertificate) !== null && _b !== void 0 ? _b : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(120),
                ],
            ],
            certNo: [(_c = formData === null || formData === void 0 ? void 0 : formData.certNo) !== null && _c !== void 0 ? _c : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(15)],
            gpaScore: [(_d = formData === null || formData === void 0 ? void 0 : formData.gpaScore) !== null && _d !== void 0 ? _d : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            enrollOn: [
                (_e = formData === null || formData === void 0 ? void 0 : formData.enrollOn) !== null && _e !== void 0 ? _e : "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(4)],
            ],
            graduatedOn: [
                (_f = formData === null || formData === void 0 ? void 0 : formData.graduatedOn) !== null && _f !== void 0 ? _f : "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(4)],
            ],
        });
    }
    resetFormAndHide3() {
        this.mngForm.patchValue({
            employeeEducations: this.dataSource3.data,
        });
        this.empEducationForm.reset();
        this.showParTranForm3 = false;
    }
    addParTran3() {
        this.parTranAction3 = "Add";
        this.showParTranForm3 = true;
    }
    refresh3() {
        this.dataSource3.data = [...this.dataSource3.data];
        this.dataSource3.paginator = this.paginator3;
        this.dataSource3.sort = this.sort3;
    }
    editParTran3(data, index) {
        this.parTranAction3 = "Update";
        this.selectedParTranIndex3 = index;
        this.generateSubForm3(data);
        this.showParTranForm3 = true;
    }
    pushToDataSource3() {
        if (this.parTranAction3 === "Add") {
            this.dataSource3.data.push(this.empEducationForm.value);
        }
        else if (this.parTranAction3 === "Update") {
            let indexToUpdate;
            if (this.empEducationForm.value.id) {
                indexToUpdate = this.dataSource3.data.findIndex((item) => item.id === this.empEducationForm.value.id);
            }
            else {
                indexToUpdate = this.selectedParTranIndex1;
            }
            if (indexToUpdate !== -1) {
                this.dataSource3.data[indexToUpdate] = this.empEducationForm.value;
            }
        }
        this.resetFormAndHide3();
        this.refresh3();
    }
    cancelParTran3() {
        this.resetFormAndHide3();
    }
    deleteParTran3(index) {
        this.dataSource3.data.splice(index, 1);
        this.refresh3();
    }
    applyFilter4(event) {
        const filterValue = event.target.value;
        this.input1 = filterValue;
        this.dataSource4.filter = filterValue.trim().toLowerCase();
        if (this.dataSource4.paginator) {
            this.dataSource4.paginator.firstPage();
        }
    }
    generateSubForm4(formData) {
        var _a, _b, _c, _d;
        this.workExpForm = this.fb.group({
            companyName: [(_a = formData === null || formData === void 0 ? void 0 : formData.companyName) !== null && _a !== void 0 ? _a : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            workPosition: [(_b = formData === null || formData === void 0 ? void 0 : formData.workPosition) !== null && _b !== void 0 ? _b : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            startDate: [(_c = formData === null || formData === void 0 ? void 0 : formData.startDate) !== null && _c !== void 0 ? _c : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            endDate: [(_d = formData === null || formData === void 0 ? void 0 : formData.endDate) !== null && _d !== void 0 ? _d : "", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
        });
    }
    resetFormAndHide4() {
        this.mngForm.patchValue({
            employeeWorkExperiences: this.dataSource4.data,
        });
        this.workExpForm.reset();
        this.showParTranForm4 = false;
    }
    addParTran4() {
        this.parTranAction4 = "Add";
        this.showParTranForm4 = true;
    }
    refresh4() {
        this.dataSource4.data = [...this.dataSource4.data];
        this.dataSource4.paginator = this.paginator4;
        this.dataSource4.sort = this.sort4;
    }
    editParTran4(data, index) {
        this.parTranAction4 = "Update";
        this.selectedParTranIndex4 = index;
        this.generateSubForm4(data);
        this.showParTranForm4 = true;
    }
    pushToDataSource4() {
        if (this.parTranAction4 === "Add") {
            this.dataSource4.data.push(this.workExpForm.value);
        }
        else if (this.parTranAction4 === "Update") {
            let indexToUpdate;
            if (this.workExpForm.value.id) {
                indexToUpdate = this.dataSource4.data.findIndex((item) => item.id === this.workExpForm.value.id);
            }
            else {
                indexToUpdate = this.selectedParTranIndex1;
            }
            if (indexToUpdate !== -1) {
                this.dataSource4.data[indexToUpdate] = this.workExpForm.value;
            }
        }
        this.resetFormAndHide4();
        this.refresh4();
    }
    cancelParTran4() {
        this.resetFormAndHide4();
    }
    deleteParTran4(index) {
        this.dataSource4.data.splice(index, 1);
        this.refresh4();
    }
    handleFileInput(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.base64File = reader.result;
            this.file_name = file.name;
            this.mngForm.patchValue({
                marriageCertificate: this.base64File,
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    getDocument() {
        // this.loading = true;
        // let params = {
        //   id: this.data.record.id,
        // };
        // this.caseMngtService.findById(params).subscribe(
        //   (res) => {
        //     console.log(res);
        //     if (res.entity.attachment) {
        //       this.loading = false;
        //       this.downloadDocument(res.entity.attachment);
        //     } else {
        //       this.loading = false;
        //       this.notificationAPI.alertWarning("No Document Attached!");
        //     }
        //   },
        //   (err) => {
        //     this.loading = false;
        //   }
        // );
    }
    downloadDocument() {
        let fileName = "Document";
        fetch(this.formData.marriageCertificate)
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
    jobRoleLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "SingleJobRole",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_hr_hr_lookups_configurations_lookups_job_roles_lookup_job_roles_lookup_component__WEBPACK_IMPORTED_MODULE_5__.JobRolesLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.mngForm.patchValue({
                    basicSalary: res.data[0].minSalary,
                    jobGroupId: res.data[0].jobGroupId,
                    organizationRoleId: res.data[0].id,
                    organizationRole: res.data[0].roleName,
                });
            }
        });
    }
    jobGroupLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "SingleJobGrade",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_hr_hr_lookups_configurations_lookups_job_grades_lookup_job_grades_lookup_component__WEBPACK_IMPORTED_MODULE_4__.JobGradesLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.mngForm.patchValue({
                    jobGroupName: res.data[0].jobGroupName,
                });
            }
        });
    }
    departmentLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "SingleDepartment",
            selected: "",
        };
        const dialogRef = this.dialog.open(src_app_erp_hr_hr_lookups_configurations_lookups_departments_lookup_departments_lookup_component__WEBPACK_IMPORTED_MODULE_2__.DepartmentsLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.mngForm.patchValue({
                    departmentId: res.data[0].id,
                });
            }
        });
    }
    branchLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "SingleDepartment",
            selected: "",
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_branches_lookup_branches_lookup_component__WEBPACK_IMPORTED_MODULE_0__.BranchesLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.mngForm.patchValue({
                    branchName: res.data[0].branchName,
                });
            }
        });
    }
    costCenterLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "SingleCostCenter",
            selected: "",
        };
        const dialogRef = this.dialog.open(src_app_erp_finance_data_lookups_ccentre_lookup_ccentre_lookup_component__WEBPACK_IMPORTED_MODULE_1__.CcentreLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.mngForm.patchValue({
                    costCenterCode: res.data[0].costCenterName,
                });
            }
        });
    }
    employeeLookup() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.disableClose = true;
        dialogConfig.width = "800px";
        dialogConfig.data = {
            action: "SingleEmployee",
            selected: this.selectedItem,
        };
        const dialogRef = this.dialog.open(src_app_erp_hr_hr_lookups_configurations_lookups_employees_lookup_employees_lookup_component__WEBPACK_IMPORTED_MODULE_3__.EmployeesLookupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.mngForm.patchValue({
                    reportingToPf: res.data[0].empNo,
                    reportingToFullname: res.data[0].firstName +
                        " " +
                        res.data[0].middleName +
                        " " +
                        res.data[0].lastName,
                });
            }
        });
    }
    onSubmit() {
        console.log("this.mngForm.value: ", this.mngForm.value);
        this.posting = true;
        if (this.pageFunction == "Add") {
            this.employeeService
                .create(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    console.log("res: ", res);
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                        this.cancel();
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                    this.posting = false;
                },
                complete: () => {
                    this.posting = false;
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_18__.Subscription;
        }
        else if (this.pageFunction == "Update") {
            this.employeeService
                .update(this.mngForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
                .subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        this.snackbar.showNotification("snackbar-success", res.message);
                        this.cancel();
                    }
                    else {
                        this.snackbar.showNotification("snackbar-danger", res.message);
                    }
                },
                error: (err) => {
                    this.snackbar.showNotification("snackbar-danger", err.message);
                    this.posting = false;
                },
                complete: () => {
                    this.posting = false;
                },
            }),
                rxjs__WEBPACK_IMPORTED_MODULE_18__.Subscription;
        }
    }
    cancel() {
        this.router.navigate(["/erp-hr/employees/all-employees"]);
    }
}
ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) { return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_erp_hr_data_employee_services_employee_management_service__WEBPACK_IMPORTED_MODULE_8__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog)); };
ProfilePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ProfilePageComponent, selectors: [["app-profile-page"]], viewQuery: function ProfilePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort4 = _t.first);
    } }, decls: 12, vars: 6, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], ["class", "body", 4, "ngIf"], [1, "body"], ["class", "row", 4, "ngIf"], [3, "linear"], ["stepper", ""], ["matStepLabel", ""], [3, "formGroup"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-1"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "firstName"], [4, "ngIf"], ["matInput", "", "formControlName", "middleName"], ["matInput", "", "formControlName", "lastName"], ["matInput", "", "formControlName", "dob", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dobDatePicker", ""], ["matInput", "", "formControlName", "nationalId"], ["formControlName", "religion"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-section"], [1, "example-margin"], ["formControlName", "gender"], ["value", "male", 1, "example-margin"], ["value", "female", 1, "example-margin"], ["formControlName", "maritalStatus"], ["class", "col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-1", 4, "ngIf"], ["formControlName", "disabled"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 1, "mx-2"], ["matInput", "", "formControlName", "nationality"], ["matInput", "", "formControlName", "county"], ["matInput", "", "formControlName", "subCounty"], ["matInput", "", "formControlName", "residentialCountry"], ["matInput", "", "formControlName", "residentialCounty"], ["matInput", "", "formControlName", "residentialSubCounty"], ["matInput", "", "formControlName", "postalAddress"], ["matInput", "", "formControlName", "postalCode"], ["matInput", "", "formControlName", "city"], ["mat-raised-button", "", "color", "accent", "matStepperPrevious", ""], [1, "col-xl-3", "col-lg-3", "col-md-12", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "personalPhone"], ["matInput", "", "formControlName", "alternativePhone"], ["matInput", "", "formControlName", "personalEmail"], ["matInput", "", "formControlName", "alternativeEmail"], ["mat-tab-label", ""], [1, "row", "m-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "table-responsiv"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Filter...", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["filter", ""], ["matTooltip", "ADD", 1, "m-l-10"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], ["matTooltip", "REFRESH", 1, "m-l-10"], [1, "col-4"], [1, "header-buttons"], ["matTooltip", "XLSX", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/xlsx.png", "alt", "", 3, "click"], ["matTooltip", "CSV", 1, "export-button", "m-l-10"], ["src", "assets/images/icons/csv.png", "alt", "", 3, "click"], ["matTableExporter", "", "matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", "", "exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-10", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-sort-header", "", "class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-20", 4, "matCellDef"], ["matColumnDef", "phoneNumber"], ["matColumnDef", "email"], ["matColumnDef", "address"], ["matColumnDef", "relationship"], ["matColumnDef", "action"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matHeaderCellDef"], ["class", "column-nowrap psl-3 tbl-col-width-per-15 pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["colspan", "8", 4, "matNoDataRow"], ["class", "tbl-spinner", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["matColumnDef", "dependantName"], ["matColumnDef", "dependantDob"], ["matColumnDef", "birthCertNo"], ["matColumnDef", "dependantPhone"], ["matColumnDef", "dependantEmail"], ["matColumnDef", "downloadFile"], [1, "col-md-4", "col-sm-12", "mb-1"], ["formControlName", "highestEducation"], ["matInput", "", "formControlName", "courseProgram"], ["formControlName", "educationEnrollment"], ["matColumnDef", "institutionName"], ["matColumnDef", "awardCertificate"], ["matColumnDef", "certNo"], ["matColumnDef", "gpaScore"], ["matColumnDef", "enrollOn"], ["matColumnDef", "graduatedOn"], ["matColumnDef", "companyName"], ["matColumnDef", "workPosition"], ["matColumnDef", "startDate"], ["matColumnDef", "endDate"], ["matInput", "", "formControlName", "firstRefName"], ["matInput", "", "formControlName", "firstRefCompany"], ["matInput", "", "formControlName", "firstRefPhone"], ["matInput", "", "formControlName", "firstRefEmail"], ["matInput", "", "formControlName", "secondRefName"], ["matInput", "", "formControlName", "secondRefCompany"], ["matInput", "", "formControlName", "secondRefPhone"], ["matInput", "", "formControlName", "secondRefEmail"], ["matInput", "", "formControlName", "departmentId"], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "branchName"], ["matInput", "", "formControlName", "costCenterCode"], ["matInput", "", "formControlName", "organizationRole"], ["matInput", "", "formControlName", "jobGroupName"], ["matInput", "", "formControlName", "workMail"], ["formControlName", "enrollmentStatus"], ["matInput", "", "formControlName", "enrollmentStartDate", 3, "matDatepicker"], ["startDatePicker", ""], ["matInput", "", "formControlName", "reportingToFullname"], ["matInput", "", "formControlName", "bankAccount"], ["matInput", "", "formControlName", "kraNo"], ["matInput", "", "formControlName", "nhifNo"], ["matInput", "", "formControlName", "nssfNo"], ["matInput", "", "formControlName", "basicSalary"], ["mat-raised-button", "", "color", "warn", 1, "mx-2", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled", "hidden", "click"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "bg-color"], [1, "chat"], [1, "chat-header", "clearfix"], [1, "col-6"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages", "mt-2"], [1, "badge", "badge-hod"], [1, "badge", "badge-hod-approved"], [1, "col-12"], [1, "chat-about", "mt-1"], [1, "chat-with", "remarks"], [1, "remarks-content", "mx-2"], [1, "badge", "badge-finance"], [1, "badge", "badge-finance-approved"], [3, "value"], ["class", "col-6", 4, "ngIf"], [1, "col-6", "file-upload"], ["matTooltip", "SELECT NEW ATTACHMENT", "mat-mini-fab", "", "color", "primary", 1, "upload-btn", 3, "click"], ["type", "file", "accept", ".pdf", 1, "form-controls", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "file-name-display"], ["matTooltip", "DOWNLOAD PREVIOUS ATTACHMENT", "mat-mini-fab", "", "color", "primary", 1, "mat-button-custom", 3, "click"], ["matInput", "", "formControlName", "disabledRegNo"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "phoneNumber"], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "address"], ["matInput", "", "formControlName", "relationship"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], ["align", "start", 1, "example-button-row"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-10"], ["mat-sort-header", "", 1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-20"], [1, "column-nowrap", "psl-3", "tbl-col-width-per-15", "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "tbl-action-btn", 3, "click"], [3, "icon"], ["matRipple", "", 3, "click"], ["colspan", "8"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], ["matInput", "", "formControlName", "dependantName"], ["matInput", "", "formControlName", "dependantDob", 3, "matDatepicker"], ["dobPicker", ""], ["matInput", "", "formControlName", "birthCertNo"], ["matInput", "", "formControlName", "dependantPhone"], ["matInput", "", "formControlName", "dependantEmail"], [1, "col-md-2", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "institutionName"], ["matInput", "", "formControlName", "awardCertificate"], ["matInput", "", "formControlName", "certNo"], ["formControlName", "gpaScore"], ["matInput", "", "formControlName", "enrollOn", 3, "matDatepicker"], ["enrollOnPicker", ""], ["matInput", "", "formControlName", "graduatedOn", 3, "matDatepicker"], ["graduatedOnPicker", ""], [1, "col-md-3", "col-sm-12", "mb-1"], ["matInput", "", "formControlName", "companyName"], ["matInput", "", "formControlName", "workPosition"], ["matInput", "", "formControlName", "startDate", 3, "matDatepicker"], ["matInput", "", "formControlName", "endDate", 3, "matDatepicker"], ["endDatePicker", ""]], template: function ProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h2")(9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, ProfilePageComponent_div_11_Template, 688, 103, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Employee Details")("items", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](5, _c1))("active_item", "Manage Employee Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx.pageFunction, " Employee Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showForm);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__.MatStepLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatError, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepicker, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatOption, _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__.MatCheckbox, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__.MatStepperPrevious, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabLabel, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, mat_table_exporter__WEBPACK_IMPORTED_MODULE_35__.MatTableExporterDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_10__.FeatherIconsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRipple, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatNoDataRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__.MatProgressSpinner, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXBhZ2UuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_erp-hr-self-service_modules_employee-profile_employee-profile_module_ts.js.map
"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_erp-dashboard_erp-dashboard_module_ts"],{

/***/ 92410:
/*!***************************************************************!*\
  !*** ./src/app/erp-dashboard/erp-dashboard-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpDashboardRoutingModule": () => (/* binding */ ErpDashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _Pages_common_dashboard_common_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages/common-dashboard/common-dashboard.component */ 43356);
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/guard/auth.guard */ 19390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: "main",
        component: _Pages_common_dashboard_common_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.CommonDashboardComponent,
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
    },
];
class ErpDashboardRoutingModule {
}
ErpDashboardRoutingModule.ɵfac = function ErpDashboardRoutingModule_Factory(t) { return new (t || ErpDashboardRoutingModule)(); };
ErpDashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ErpDashboardRoutingModule });
ErpDashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ErpDashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 30743:
/*!*******************************************************!*\
  !*** ./src/app/erp-dashboard/erp-dashboard.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpDashboardModule": () => (/* binding */ ErpDashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _erp_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erp-dashboard-routing.module */ 92410);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 78004);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);

























class ErpDashboardModule {
}
ErpDashboardModule.ɵfac = function ErpDashboardModule_Factory(t) { return new (t || ErpDashboardModule)(); };
ErpDashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ErpDashboardModule });
ErpDashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _erp_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpDashboardRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.DragDropModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChipsModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__.MatProgressBarModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabsModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_24__.CKEditorModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ErpDashboardModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _erp_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpDashboardRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.DragDropModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChipsModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__.MatProgressBarModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabsModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_24__.CKEditorModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule] }); })();


/***/ }),

/***/ 78004:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CKEditorComponent": () => (/* binding */ CKEditorComponent),
/* harmony export */   "CKEditorModule": () => (/* binding */ CKEditorModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ckeditor_ckeditor5_watchdog_src_editorwatchdog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-watchdog/src/editorwatchdog */ 34108);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);







/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */


function CKEditorComponent_ng_template_0_Template(rf, ctx) { }
const ɵ0 = (val, index) => ('0' + (index).toString(16)).slice(-2);
// A copy of @ckeditor/ckeditor5-utils/src/uid.js
// A hash table of hex numbers to avoid using toString() in uid() which is costly.
// [ '00', '01', '02', ..., 'fe', 'ff' ]
const HEX_NUMBERS = new Array(256).fill(0)
    .map(ɵ0);
/**
 * Returns a unique id. The id starts with an "e" character and a randomly generated string of
 * 32 alphanumeric characters.
 *
 * **Note**: The characters the unique id is built from correspond to the hex number notation
 * (from "0" to "9", from "a" to "f"). In other words, each id corresponds to an "e" followed
 * by 16 8-bit numbers next to each other.
 *
 * @returns An unique id string.
 */
function uid() {
    // Let's create some positive random 32bit integers first.
    //
    // 1. Math.random() is a float between 0 and 1.
    // 2. 0x100000000 is 2^32 = 4294967296.
    // 3. >>> 0 enforces integer (in JS all numbers are floating point).
    //
    // For instance:
    //		Math.random() * 0x100000000 = 3366450031.853859
    // but
    //		Math.random() * 0x100000000 >>> 0 = 3366450031.
    const r1 = Math.random() * 0x100000000 >>> 0;
    const r2 = Math.random() * 0x100000000 >>> 0;
    const r3 = Math.random() * 0x100000000 >>> 0;
    const r4 = Math.random() * 0x100000000 >>> 0;
    // Make sure that id does not start with number.
    return 'e' +
        HEX_NUMBERS[r1 >> 0 & 0xFF] +
        HEX_NUMBERS[r1 >> 8 & 0xFF] +
        HEX_NUMBERS[r1 >> 16 & 0xFF] +
        HEX_NUMBERS[r1 >> 24 & 0xFF] +
        HEX_NUMBERS[r2 >> 0 & 0xFF] +
        HEX_NUMBERS[r2 >> 8 & 0xFF] +
        HEX_NUMBERS[r2 >> 16 & 0xFF] +
        HEX_NUMBERS[r2 >> 24 & 0xFF] +
        HEX_NUMBERS[r3 >> 0 & 0xFF] +
        HEX_NUMBERS[r3 >> 8 & 0xFF] +
        HEX_NUMBERS[r3 >> 16 & 0xFF] +
        HEX_NUMBERS[r3 >> 24 & 0xFF] +
        HEX_NUMBERS[r4 >> 0 & 0xFF] +
        HEX_NUMBERS[r4 >> 8 & 0xFF] +
        HEX_NUMBERS[r4 >> 16 & 0xFF] +
        HEX_NUMBERS[r4 >> 24 & 0xFF];
}

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
class CKEditorComponent {
    constructor(elementRef, ngZone) {
        /**
         * The configuration of the editor.
         * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html
         * to learn more.
         */
        this.config = {};
        /**
         * The initial data of the editor. Useful when not using the ngModel.
         * See https://angular.io/api/forms/NgModel to learn more.
         */
        this.data = '';
        /**
         * Tag name of the editor component.
         *
         * The default tag is 'div'.
         */
        this.tagName = 'div';
        /**
         * Fires when the editor is ready. It corresponds with the `editor#ready`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#event-ready
         * event.
         */
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Fires when the content of the editor has changed. It corresponds with the `editor.model.document#change`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_document-Document.html#event-change
         * event.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Fires when the editing view of the editor is blurred. It corresponds with the `editor.editing.view.document#blur`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:blur
         * event.
         */
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Fires when the editing view of the editor is focused. It corresponds with the `editor.editing.view.document#focus`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:focus
         * event.
         */
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Fires when the editor component crashes.
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * If the component is read–only before the editor instance is created, it remembers that state,
         * so the editor can become read–only once it is ready.
         */
        this.initiallyDisabled = false;
        /**
         * A lock flag preventing from calling the `cvaOnChange()` during setting editor data.
         */
        this.isEditorSettingData = false;
        this.id = uid();
        this.ngZone = ngZone;
        this.elementRef = elementRef;
    }
    /**
     * When set `true`, the editor becomes read-only.
     * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#member-isReadOnly
     * to learn more.
     */
    set disabled(isDisabled) {
        this.setDisabledState(isDisabled);
    }
    get disabled() {
        if (this.editorInstance) {
            return this.editorInstance.isReadOnly;
        }
        return this.initiallyDisabled;
    }
    /**
     * The instance of the editor created by this component.
     */
    get editorInstance() {
        let editorWatchdog = this.editorWatchdog;
        if (this.watchdog) {
            // Temporarily use the `_watchdogs` internal map as the `getItem()` method throws
            // an error when the item is not registered yet.
            // See https://github.com/ckeditor/ckeditor5-angular/issues/177.
            editorWatchdog = this.watchdog._watchdogs.get(this.id);
        }
        if (editorWatchdog) {
            return editorWatchdog.editor;
        }
        return null;
    }
    // Implementing the AfterViewInit interface.
    ngAfterViewInit() {
        this.attachToWatchdog();
    }
    // Implementing the OnDestroy interface.
    ngOnDestroy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.watchdog) {
                yield this.watchdog.remove(this.id);
            }
            else if (this.editorWatchdog && this.editorWatchdog.editor) {
                yield this.editorWatchdog.destroy();
                this.editorWatchdog = undefined;
            }
        });
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    writeValue(value) {
        // This method is called with the `null` value when the form resets.
        // A component's responsibility is to restore to the initial state.
        if (value === null) {
            value = '';
        }
        // If already initialized.
        if (this.editorInstance) {
            // The lock mechanism prevents from calling `cvaOnChange()` during changing
            // the editor state. See #139
            this.isEditorSettingData = true;
            this.editorInstance.setData(value);
            this.isEditorSettingData = false;
        }
        // If not, wait for it to be ready; store the data.
        else {
            // If the editor element is already available, then update its content.
            this.data = value;
            // If not, then wait until it is ready
            // and change data only for the first `ready` event.
            this.ready
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)())
                .subscribe((editor) => {
                editor.setData(this.data);
            });
        }
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    registerOnChange(callback) {
        this.cvaOnChange = callback;
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    registerOnTouched(callback) {
        this.cvaOnTouched = callback;
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    setDisabledState(isDisabled) {
        // If already initialized.
        if (this.editorInstance) {
            this.editorInstance.isReadOnly = isDisabled;
        }
        // Store the state anyway to use it once the editor is created.
        this.initiallyDisabled = isDisabled;
    }
    /**
     * Creates the editor instance, sets initial editor data, then integrates
     * the editor with the Angular component. This method does not use the `editor.setData()`
     * because of the issue in the collaboration mode (#6).
     */
    attachToWatchdog() {
        const creator = (element, config) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return this.ngZone.runOutsideAngular(() => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                this.elementRef.nativeElement.appendChild(element);
                const editor = yield this.editor.create(element, config);
                if (this.initiallyDisabled) {
                    editor.isReadOnly = this.initiallyDisabled;
                }
                this.ngZone.run(() => {
                    this.ready.emit(editor);
                });
                this.setUpEditorEvents(editor);
                return editor;
            }));
        });
        const destructor = (editor) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield editor.destroy();
            this.elementRef.nativeElement.removeChild(this.editorElement);
        });
        const emitError = () => {
            this.ngZone.run(() => {
                this.error.emit();
            });
        };
        const element = document.createElement(this.tagName);
        const config = this.getConfig();
        this.editorElement = element;
        // Based on the presence of the watchdog decide how to initialize the editor.
        if (this.watchdog) {
            // When the context watchdog is passed add the new item to it based on the passed configuration.
            this.watchdog.add({
                id: this.id,
                type: 'editor',
                creator,
                destructor,
                sourceElementOrData: element,
                config
            });
            this.watchdog.on('itemError', (_, { itemId }) => {
                if (itemId === this.id) {
                    emitError();
                }
            });
        }
        else {
            // In the other case create the watchdog by hand to keep the editor running.
            const editorWatchdog = new _ckeditor_ckeditor5_watchdog_src_editorwatchdog__WEBPACK_IMPORTED_MODULE_0__["default"](this.editor);
            editorWatchdog.setCreator(creator);
            editorWatchdog.setDestructor(destructor);
            editorWatchdog.on('error', emitError);
            this.editorWatchdog = editorWatchdog;
            this.editorWatchdog.create(element, config);
        }
    }
    getConfig() {
        if (this.data && this.config.initialData) {
            throw new Error('Editor data should be provided either using `config.initialData` or `data` properties.');
        }
        const config = Object.assign({}, this.config);
        // Merge two possible ways of providing data into the `config.initialData` field.
        const initialData = this.config.initialData || this.data;
        if (initialData) {
            // Define the `config.initialData` only when the initial content is specified.
            config.initialData = initialData;
        }
        return config;
    }
    /**
     * Integrates the editor with the component by attaching related event listeners.
     */
    setUpEditorEvents(editor) {
        const modelDocument = editor.model.document;
        const viewDocument = editor.editing.view.document;
        modelDocument.on('change:data', (evt) => {
            this.ngZone.run(() => {
                if (this.cvaOnChange && !this.isEditorSettingData) {
                    const data = editor.getData();
                    this.cvaOnChange(data);
                }
                this.change.emit({ event: evt, editor });
            });
        });
        viewDocument.on('focus', (evt) => {
            this.ngZone.run(() => {
                this.focus.emit({ event: evt, editor });
            });
        });
        viewDocument.on('blur', (evt) => {
            this.ngZone.run(() => {
                if (this.cvaOnTouched) {
                    this.cvaOnTouched();
                }
                this.blur.emit({ event: evt, editor });
            });
        });
    }
}
CKEditorComponent.ɵfac = function CKEditorComponent_Factory(t) { return new (t || CKEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone)); };
CKEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CKEditorComponent, selectors: [["ckeditor"]], inputs: { config: "config", data: "data", tagName: "tagName", disabled: "disabled", editor: "editor", watchdog: "watchdog" }, outputs: { ready: "ready", change: "change", blur: "blur", focus: "focus", error: "error" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => CKEditorComponent),
                multi: true
            }
        ])], decls: 1, vars: 0, template: function CKEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CKEditorComponent_ng_template_0_Template, 0, 0, "ng-template");
    } }, encapsulation: 2 });
CKEditorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone }
];
CKEditorComponent.propDecorators = {
    editor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    tagName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    watchdog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CKEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ckeditor',
                template: '<ng-template></ng-template>',
                // Integration with @angular/forms.
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => CKEditorComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], tagName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], editor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], watchdog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
class CKEditorModule {
}
CKEditorModule.ɵfac = function CKEditorModule_Factory(t) { return new (t || CKEditorModule)(); };
CKEditorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CKEditorModule });
CKEditorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CKEditorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
                declarations: [CKEditorComponent],
                exports: [CKEditorComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CKEditorModule, { declarations: function () { return [CKEditorComponent]; }, imports: function () { return [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]; }, exports: function () { return [CKEditorComponent]; } }); })();

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 34108:
/*!*************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditorWatchdog)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 69616);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ 5846);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ 25780);
/* harmony import */ var _utils_areconnectedthroughproperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/areconnectedthroughproperties */ 58830);
/* harmony import */ var _watchdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watchdog */ 15663);
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module watchdog/editorwatchdog
 */

/* globals console */





/**
 * A watchdog for CKEditor 5 editors.
 *
 * See the {@glink features/watchdog Watchdog feature guide} to learn the rationale behind it and
 * how to use it.
 *
 * @extends {module:watchdog/watchdog~Watchdog}
 */
class EditorWatchdog extends _watchdog__WEBPACK_IMPORTED_MODULE_1__["default"] {
	/**
	 * @param {*} Editor The editor class.
	 * @param {module:watchdog/watchdog~WatchdogConfig} [watchdogConfig] The watchdog plugin configuration.
	 */
	constructor( Editor, watchdogConfig = {} ) {
		super( watchdogConfig );

		/**
		 * The current editor instance.
		 *
		 * @private
		 * @type {module:core/editor/editor~Editor}
		 */
		this._editor = null;

		/**
		 * Throttled save method. The `save()` method is called the specified `saveInterval` after `throttledSave()` is called,
		 * unless a new action happens in the meantime.
		 *
		 * @private
		 * @type {Function}
		 */
		this._throttledSave = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(
			this._save.bind( this ),
			typeof watchdogConfig.saveInterval === 'number' ? watchdogConfig.saveInterval : 5000
		);

		/**
		 * The latest saved editor data represented as a root name -> root data object.
		 *
		 * @private
		 * @member {Object.<String,String>} #_data
		 */

		/**
		 * The last document version.
		 *
		 * @private
		 * @member {Number} #_lastDocumentVersion
		 */

		/**
		 * The editor source element or data.
		 *
		 * @private
		 * @member {HTMLElement|String|Object.<String|String>} #_elementOrData
		 */

		/**
		 * The editor configuration.
		 *
		 * @private
		 * @member {Object|undefined} #_config
		 */

		// Set default creator and destructor functions:
		this._creator = ( ( elementOrData, config ) => Editor.create( elementOrData, config ) );
		this._destructor = editor => editor.destroy();
	}

	/**
	 * The current editor instance.
	 *
	 * @readonly
	 * @type {module:core/editor/editor~Editor}
	 */
	get editor() {
		return this._editor;
	}

	/**
	 * @inheritDoc
	 */
	get _item() {
		return this._editor;
	}

	/**
	 * Sets the function that is responsible for the editor creation.
	 * It expects a function that should return a promise.
	 *
	 *		watchdog.setCreator( ( element, config ) => ClassicEditor.create( element, config ) );
	 *
	 * @method #setCreator
	 * @param {Function} creator
	 */

	/**
	 * Sets the function that is responsible for the editor destruction.
	 * Overrides the default destruction function, which destroys only the editor instance.
	 * It expects a function that should return a promise or `undefined`.
	 *
	 *		watchdog.setDestructor( editor => {
	 *			// Do something before the editor is destroyed.
	 *
	 *			return editor
	 *				.destroy()
	 *				.then( () => {
	 *					// Do something after the editor is destroyed.
	 *				} );
	 *		} );
	 *
	 * @method #setDestructor
	 * @param {Function} destructor
	 */

	/**
	 * Restarts the editor instance. This method is called whenever an editor error occurs. It fires the `restart` event and changes
	 * the state to `initializing`.
	 *
	 * @protected
	 * @fires restart
	 * @returns {Promise}
	 */
	_restart() {
		return Promise.resolve()
			.then( () => {
				this.state = 'initializing';
				this._fire( 'stateChange' );

				return this._destroy();
			} )
			.catch( err => {
				console.error( 'An error happened during the editor destroying.', err );
			} )
			.then( () => {
				if ( typeof this._elementOrData === 'string' ) {
					return this.create( this._data, this._config, this._config.context );
				} else {
					const updatedConfig = Object.assign( {}, this._config, {
						initialData: this._data
					} );

					return this.create( this._elementOrData, updatedConfig, updatedConfig.context );
				}
			} )
			.then( () => {
				this._fire( 'restart' );
			} );
	}

	/**
	 * Creates the editor instance and keeps it running, using the defined creator and destructor.
	 *
	 * @param {HTMLElement|String|Object.<String|String>} [elementOrData] The editor source element or the editor data.
	 * @param {module:core/editor/editorconfig~EditorConfig} [config] The editor configuration.
	 * @param {Object} [context] A context for the editor.
	 *
	 * @returns {Promise}
	 */
	create( elementOrData = this._elementOrData, config = this._config, context ) {
		return Promise.resolve()
			.then( () => {
				super._startErrorHandling();

				this._elementOrData = elementOrData;

				// Clone configuration because it might be shared within multiple watchdog instances. Otherwise,
				// when an error occurs in one of these editors, the watchdog will restart all of them.
				this._config = this._cloneEditorConfiguration( config ) || {};

				this._config.context = context;

				return this._creator( elementOrData, this._config );
			} )
			.then( editor => {
				this._editor = editor;

				editor.model.document.on( 'change:data', this._throttledSave );

				this._lastDocumentVersion = editor.model.document.version;
				this._data = this._getData();

				this.state = 'ready';
				this._fire( 'stateChange' );
			} );
	}

	/**
	 * Destroys the watchdog and the current editor instance. It fires the callback
	 * registered in {@link #setDestructor `setDestructor()`} and uses it to destroy the editor instance.
	 * It also sets the state to `destroyed`.
	 *
	 * @returns {Promise}
	 */
	destroy() {
		return Promise.resolve()
			.then( () => {
				this.state = 'destroyed';
				this._fire( 'stateChange' );

				super.destroy();

				return this._destroy();
			} );
	}

	/**
	 * @private
	 * @returns {Promise}
	 */
	_destroy() {
		return Promise.resolve()
			.then( () => {
				this._stopErrorHandling();

				// Save data if there is a remaining editor data change.
				this._throttledSave.flush();

				const editor = this._editor;

				this._editor = null;

				return this._destructor( editor );
			} );
	}

	/**
	 * Saves the editor data, so it can be restored after the crash even if the data cannot be fetched at
	 * the moment of the crash.
	 *
	 * @private
	 */
	_save() {
		const version = this._editor.model.document.version;

		// Operation may not result in a model change, so the document's version can be the same.
		if ( version === this._lastDocumentVersion ) {
			return;
		}

		try {
			this._data = this._getData();
			this._lastDocumentVersion = version;
		} catch ( err ) {
			console.error(
				err,
				'An error happened during restoring editor data. ' +
				'Editor will be restored from the previously saved data.'
			);
		}
	}

	/**
	 * @protected
	 * @param {Set} props
	 */
	_setExcludedProperties( props ) {
		this._excludedProps = props;
	}

	/**
	 * Returns the editor data.
	 *
	 * @private
	 * @returns {Object<String,String>}
	 */
	_getData() {
		const data = {};

		for ( const rootName of this._editor.model.document.getRootNames() ) {
			data[ rootName ] = this._editor.data.get( { rootName } );
		}

		return data;
	}

	/**
	 * Traverses the error context and the current editor to find out whether these structures are connected
	 * to each other via properties.
	 *
	 * @protected
	 * @param {module:utils/ckeditorerror~CKEditorError} error
	 */
	_isErrorComingFromThisItem( error ) {
		return (0,_utils_areconnectedthroughproperties__WEBPACK_IMPORTED_MODULE_0__["default"])( this._editor, error.context, this._excludedProps );
	}

	/**
	 * Clones the editor configuration.
	 *
	 * @private
	 * @param {Object} config
	 */
	_cloneEditorConfiguration( config ) {
		return (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])( config, ( value, key ) => {
			// Leave DOM references.
			if ( (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])( value ) ) {
				return value;
			}

			if ( key === 'context' ) {
				return value;
			}
		} );
	}

	/**
	 * Fired after the watchdog restarts the error in case of a crash.
	 *
	 * @event restart
	 */
}


/***/ }),

/***/ 58830:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/utils/areconnectedthroughproperties.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ areConnectedThroughProperties)
/* harmony export */ });
/* harmony import */ var _getsubnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getsubnodes */ 2744);
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module watchdog/utils/areconnectedthroughproperties
 */

/* globals console */



/**
 * Traverses both structures to find out whether there is a reference that is shared between both structures.
 *
 * @param {Object|Array} target1
 * @param {Object|Array} target2
 */
function areConnectedThroughProperties( target1, target2, excludedNodes = new Set() ) {
	if ( target1 === target2 && isObject( target1 ) ) {
		return true;
	}

	// @if CK_DEBUG_WATCHDOG // return checkConnectionBetweenProps( target1, target2, excludedNodes );

	const subNodes1 = (0,_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])( target1, excludedNodes );
	const subNodes2 = (0,_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])( target2, excludedNodes );

	for ( const node of subNodes1 ) {
		if ( subNodes2.has( node ) ) {
			return true;
		}
	}

	return false;
}

/* istanbul ignore next */
// eslint-disable-next-line
function checkConnectionBetweenProps( target1, target2, excludedNodes ) {
	const { subNodes: subNodes1, prevNodeMap: prevNodeMap1 } = (0,_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])( target1, excludedNodes.subNodes );
	const { subNodes: subNodes2, prevNodeMap: prevNodeMap2 } = (0,_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])( target2, excludedNodes.subNodes );

	for ( const sharedNode of subNodes1 ) {
		if ( subNodes2.has( sharedNode ) ) {
			const connection = [];

			connection.push( sharedNode );

			let node = prevNodeMap1.get( sharedNode );

			while ( node && node !== target1 ) {
				connection.push( node );
				node = prevNodeMap1.get( node );
			}

			node = prevNodeMap2.get( sharedNode );

			while ( node && node !== target2 ) {
				connection.unshift( node );
				node = prevNodeMap2.get( node );
			}

			console.log( '--------' );
			console.log( { target1 } );
			console.log( { sharedNode } );
			console.log( { target2 } );
			console.log( { connection } );

			return true;
		}
	}

	return false;
}

function isObject( structure ) {
	return typeof structure === 'object' && structure !== null;
}


/***/ }),

/***/ 2744:
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/utils/getsubnodes.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSubNodes)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module watchdog/utils/getsubnodes
 */

/* globals EventTarget, Event */

function getSubNodes( head, excludedProperties = new Set() ) {
	const nodes = [ head ];

	// @if CK_DEBUG_WATCHDOG // const prevNodeMap = new Map();

	// Nodes are stored to prevent infinite looping.
	const subNodes = new Set();

	while ( nodes.length > 0 ) {
		const node = nodes.shift();

		if ( subNodes.has( node ) || shouldNodeBeSkipped( node ) || excludedProperties.has( node ) ) {
			continue;
		}

		subNodes.add( node );

		// Handle arrays, maps, sets, custom collections that implements `[ Symbol.iterator ]()`, etc.
		if ( node[ Symbol.iterator ] ) {
			// The custom editor iterators might cause some problems if the editor is crashed.
			try {
				for ( const n of node ) {
					nodes.push( n );

					// @if CK_DEBUG_WATCHDOG // if ( !prevNodeMap.has( n ) ) {
					// @if CK_DEBUG_WATCHDOG // 	prevNodeMap.set( n, node );
					// @if CK_DEBUG_WATCHDOG // }
				}
			} catch ( err ) {
				// Do not log errors for broken structures
				// since we are in the error handling process already.
				// eslint-disable-line no-empty
			}
		} else {
			for ( const key in node ) {
				// We share a reference via the protobuf library within the editors,
				// hence the shared value should be skipped. Although, it's not a perfect
				// solution since new places like that might occur in the future.
				if ( key === 'defaultValue' ) {
					continue;
				}

				nodes.push( node[ key ] );

				// @if CK_DEBUG_WATCHDOG // if ( !prevNodeMap.has( node[ key ] ) ) {
				// @if CK_DEBUG_WATCHDOG // 	prevNodeMap.set( node[ key ], node );
				// @if CK_DEBUG_WATCHDOG // }
			}
		}
	}

	// @if CK_DEBUG_WATCHDOG // return { subNodes, prevNodeMap };

	return subNodes;
}

function shouldNodeBeSkipped( node ) {
	const type = Object.prototype.toString.call( node );
	const typeOfNode = typeof node;

	return (
		typeOfNode === 'number' ||
		typeOfNode === 'boolean' ||
		typeOfNode === 'string' ||
		typeOfNode === 'symbol' ||
		typeOfNode === 'function' ||
		type === '[object Date]' ||
		type === '[object RegExp]' ||
		type === '[object Module]' ||

		node === undefined ||
		node === null ||

		// Skip native DOM objects, e.g. Window, nodes, events, etc.
		node instanceof EventTarget ||
		node instanceof Event
	);
}


/***/ }),

/***/ 15663:
/*!*******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/watchdog.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Watchdog)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module watchdog/watchdog
 */

/* globals window */

/**
 * An abstract watchdog class that handles most of the error handling process and the state of the underlying component.
 *
 * See the {@glink features/watchdog Watchdog feature guide} to learn the rationale behind it and how to use it.
 *
 * @private
 * @abstract
 */
class Watchdog {
	/**
	 * @param {module:watchdog/watchdog~WatchdogConfig} config The watchdog plugin configuration.
	 */
	constructor( config ) {
		/**
		 * An array of crashes saved as an object with the following properties:
		 *
		 * * `message`: `String`,
		 * * `stack`: `String`,
		 * * `date`: `Number`,
		 * * `filename`: `String | undefined`,
		 * * `lineno`: `Number | undefined`,
		 * * `colno`: `Number | undefined`,
		 *
		 * @public
		 * @readonly
		 * @type {Array.<Object>}
		 */
		this.crashes = [];

		/**
		 * Specifies the state of the item watched by the watchdog. The state can be one of the following values:
		 *
		 * * `initializing` &ndash; Before the first initialization, and after crashes, before the item is ready.
		 * * `ready` &ndash; A state when the user can interact with the item.
		 * * `crashed` &ndash; A state when an error occurs. It quickly changes to `initializing` or `crashedPermanently`
		 * depending on how many and how frequent errors have been caught recently.
		 * * `crashedPermanently` &ndash; A state when the watchdog stops reacting to errors and keeps the item it is watching crashed,
		 * * `destroyed` &ndash; A state when the item is manually destroyed by the user after calling `watchdog.destroy()`.
		 *
		 * @public
		 * @type {'initializing'|'ready'|'crashed'|'crashedPermanently'|'destroyed'}
		 */
		this.state = 'initializing';

		/**
		 * @protected
		 * @type {Number}
		 * @see module:watchdog/watchdog~WatchdogConfig
		 */
		this._crashNumberLimit = typeof config.crashNumberLimit === 'number' ? config.crashNumberLimit : 3;

		/**
		 * Returns the result of the `Date.now()` call. It can be overridden in tests to mock time as some popular
		 * approaches like `sinon.useFakeTimers()` do not work well with error handling.
		 *
		 * @protected
		 */
		this._now = Date.now;

		/**
		 * @protected
		 * @type {Number}
		 * @see module:watchdog/watchdog~WatchdogConfig
		 */
		this._minimumNonErrorTimePeriod = typeof config.minimumNonErrorTimePeriod === 'number' ? config.minimumNonErrorTimePeriod : 5000;

		/**
		 * Checks if the event error comes from the underlying item and restarts the item.
		 *
		 * @private
		 * @type {Function}
		 */
		this._boundErrorHandler = evt => {
			// `evt.error` is exposed by EventError while `evt.reason` is available in PromiseRejectionEvent.
			const error = evt.error || evt.reason;

			// Note that `evt.reason` might be everything that is in the promise rejection.
			// Similarly everything that is thrown lands in `evt.error`.
			if ( error instanceof Error ) {
				this._handleError( error, evt );
			}
		};

		/**
		 * The creation method.
		 *
		 * @protected
		 * @member {Function} #_creator
		 * @see #setCreator
		 */

		/**
		 * The destruction method.
		 *
		 * @protected
		 * @member {Function} #_destructor
		 * @see #setDestructor
		 */

		/**
		 * The watched item.
		 *
		 * @abstract
		 * @protected
		 * @member {Object|undefined} #_item
		 */

		/**
		 * The method responsible for restarting the watched item.
		 *
		 * @abstract
		 * @protected
		 * @method #_restart
		 */

		/**
		 * Traverses the error context and the watched item to find out whether the error should
		 * be handled by the given item.
		 *
		 * @abstract
		 * @protected
		 * @method #_isErrorComingFromThisItem
		 * @param {module:utils/ckeditorerror~CKEditorError} error
		 */

		/**
		 * A dictionary of event emitter listeners.
		 *
		 * @private
		 * @type {Object.<String,Array.<Function>>}
		 */
		this._listeners = {};

		if ( !this._restart ) {
			throw new Error(
				'The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. ' +
				'Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.'
			);
		}
	}

	/**
	 * Sets the function that is responsible for creating watched items.
	 *
	 * @param {Function} creator A callback responsible for creating an item. Returns a promise
	 * that is resolved when the item is created.
	 */
	setCreator( creator ) {
		this._creator = creator;
	}

	/**
	 * Sets the function that is responsible for destroying watched items.
	 *
	 * @param {Function} destructor A callback that takes the item and returns the promise
	 * to the destroying process.
	 */
	setDestructor( destructor ) {
		this._destructor = destructor;
	}

	/**
	 * Destroys the watchdog and releases the resources.
	 */
	destroy() {
		this._stopErrorHandling();

		this._listeners = {};
	}

	/**
	 * Starts listening to a specific event name by registering a callback that will be executed
	 * whenever an event with a given name fires.
	 *
	 * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
	 *
	 * @param {String} eventName The event name.
	 * @param {Function} callback A callback which will be added to event listeners.
	 */
	on( eventName, callback ) {
		if ( !this._listeners[ eventName ] ) {
			this._listeners[ eventName ] = [];
		}

		this._listeners[ eventName ].push( callback );
	}

	/**
	 * Stops listening to the specified event name by removing the callback from event listeners.
	 *
	 * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
	 *
	 * @param {String} eventName The event name.
	 * @param {Function} callback A callback which will be removed from event listeners.
	 */
	off( eventName, callback ) {
		this._listeners[ eventName ] = this._listeners[ eventName ]
			.filter( cb => cb !== callback );
	}

	/**
	 * Fires an event with a given event name and arguments.
	 *
	 * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
	 *
	 * @protected
	 * @param {String} eventName The event name.
	 * @param  {...*} args Event arguments.
	 */
	_fire( eventName, ...args ) {
		const callbacks = this._listeners[ eventName ] || [];

		for ( const callback of callbacks ) {
			callback.apply( this, [ null, ...args ] );
		}
	}

	/**
	 * Starts error handling by attaching global error handlers.
	 *
	 * @protected
	 */
	_startErrorHandling() {
		window.addEventListener( 'error', this._boundErrorHandler );
		window.addEventListener( 'unhandledrejection', this._boundErrorHandler );
	}

	/**
	 * Stops error handling by detaching global error handlers.
	 *
	 * @protected
	 */
	_stopErrorHandling() {
		window.removeEventListener( 'error', this._boundErrorHandler );
		window.removeEventListener( 'unhandledrejection', this._boundErrorHandler );
	}

	/**
	 * Checks if an error comes from the watched item and restarts it.
	 * It reacts to {@link module:utils/ckeditorerror~CKEditorError `CKEditorError` errors} only.
	 *
	 * @private
	 * @fires error
	 * @param {Error} error Error.
	 * @param {ErrorEvent|PromiseRejectionEvent} evt An error event.
	 */
	_handleError( error, evt ) {
		// @if CK_DEBUG // if ( error.is && error.is( 'CKEditorError' ) && error.context === undefined ) {
		// @if CK_DEBUG // console.warn( 'The error is missing its context and Watchdog cannot restart the proper item.' );
		// @if CK_DEBUG // }

		if ( this._shouldReactToError( error ) ) {
			this.crashes.push( {
				message: error.message,
				stack: error.stack,

				// `evt.filename`, `evt.lineno` and `evt.colno` are available only in ErrorEvent events
				filename: evt.filename,
				lineno: evt.lineno,
				colno: evt.colno,
				date: this._now()
			} );

			const causesRestart = this._shouldRestart();

			this.state = 'crashed';
			this._fire( 'stateChange' );
			this._fire( 'error', { error, causesRestart } );

			if ( causesRestart ) {
				this._restart();
			} else {
				this.state = 'crashedPermanently';
				this._fire( 'stateChange' );
			}
		}
	}

	/**
	 * Checks whether an error should be handled by the watchdog.
	 *
	 * @private
	 * @param {Error} error An error that was caught by the error handling process.
	 */
	_shouldReactToError( error ) {
		return (
			error.is &&
			error.is( 'CKEditorError' ) &&
			error.context !== undefined &&

			// In some cases the watched item should not be restarted - e.g. during the item initialization.
			// That's why the `null` was introduced as a correct error context which does cause restarting.
			error.context !== null &&

			// Do not react to errors if the watchdog is in states other than `ready`.
			this.state === 'ready' &&

			this._isErrorComingFromThisItem( error )
		);
	}

	/**
	 * Checks if the watchdog should restart the underlying item.
	 *
	 * @private
	 */
	_shouldRestart() {
		if ( this.crashes.length <= this._crashNumberLimit ) {
			return true;
		}

		const lastErrorTime = this.crashes[ this.crashes.length - 1 ].date;
		const firstMeaningfulErrorTime = this.crashes[ this.crashes.length - 1 - this._crashNumberLimit ].date;

		const averageNonErrorTimePeriod = ( lastErrorTime - firstMeaningfulErrorTime ) / this._crashNumberLimit;

		return averageNonErrorTimePeriod > this._minimumNonErrorTimePeriod;
	}

	/**
	 * Fired when a new {@link module:utils/ckeditorerror~CKEditorError `CKEditorError`} error connected to the watchdog instance occurs
	 * and the watchdog will react to it.
	 *
	 * 	watchdog.on( 'error', ( evt, { error, causesRestart } ) => {
	 * 		console.log( 'An error occurred.' );
	 * 	} );
	 *
	 * @event error
	 */
}

/**
 * The watchdog plugin configuration.
 *
 * @typedef {Object} WatchdogConfig
 *
 * @property {Number} [crashNumberLimit=3] A threshold specifying the number of watched item crashes
 * when the watchdog stops restarting the item in case of errors.
 * After this limit is reached and the time between the last errors is shorter than `minimumNonErrorTimePeriod`,
 * the watchdog changes its state to `crashedPermanently` and it stops restarting the item. This prevents an infinite restart loop.
 *
 * @property {Number} [minimumNonErrorTimePeriod=5000] An average number of milliseconds between the last watched item errors
 * (defaults to 5000). When the period of time between errors is lower than that and the `crashNumberLimit` is also reached,
 * the watchdog changes its state to `crashedPermanently` and it stops restarting the item. This prevents an infinite restart loop.
 *
 * @property {Number} [saveInterval=5000] A minimum number of milliseconds between saving the editor data internally (defaults to 5000).
 * Note that for large documents this might impact the editor performance.
 */


/***/ }),

/***/ 12695:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseTrim.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_trimmedEndIndex.js */ 51463);


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, (0,_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string) + 1).replace(reTrimStart, '')
    : string;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTrim);


/***/ }),

/***/ 51463:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_trimmedEndIndex.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimmedEndIndex);


/***/ }),

/***/ 5846:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/cloneDeepWith.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone.js */ 19702);


/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.cloneWith` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the deep cloned value.
 * @see _.cloneWith
 * @example
 *
 * function customizer(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(true);
 *   }
 * }
 *
 * var el = _.cloneDeepWith(document.body, customizer);
 *
 * console.log(el === document.body);
 * // => false
 * console.log(el.nodeName);
 * // => 'BODY'
 * console.log(el.childNodes.length);
 * // => 20
 */
function cloneDeepWith(value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return (0,_baseClone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDeepWith);


/***/ }),

/***/ 88673:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/debounce.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ 19089);
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./now.js */ 80600);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber.js */ 79034);




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wait) || 0;
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax((0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge((0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }

  function debounced() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);


/***/ }),

/***/ 25780:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/isElement.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 86567);
/* harmony import */ var _isPlainObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isPlainObject.js */ 8978);



/**
 * Checks if `value` is likely a DOM element.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
 * // => false
 */
function isElement(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && value.nodeType === 1 && !(0,_isPlainObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isElement);


/***/ }),

/***/ 8978:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/isPlainObject.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 4035);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ 70118);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 86567);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) != objectTag) {
    return false;
  }
  var proto = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPlainObject);


/***/ }),

/***/ 48455:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 4035);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 86567);



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == symbolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);


/***/ }),

/***/ 80600:
/*!***************************************!*\
  !*** ./node_modules/lodash-es/now.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 84261);


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (now);


/***/ }),

/***/ 69616:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/throttle.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce.js */ 88673);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 19089);



/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throttle);


/***/ }),

/***/ 79034:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toNumber.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseTrim.js */ 12695);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ 19089);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ 48455);




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return NAN;
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toNumber);


/***/ })

}]);
//# sourceMappingURL=src_app_erp-dashboard_erp-dashboard_module_ts.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\Programming\Web\random-gifs\src\main.ts */"zUnb");


/***/ }),

/***/ "4xGw":
/*!******************************!*\
  !*** ./src/app/api-key.json ***!
  \******************************/
/*! exports provided: api_key, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"api_key\":\"IrZnBFnDUpGEBOOiSiYLu9tC0GHc2yjk\"}");

/***/ }),

/***/ "70H3":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");






const defaultValues = __webpack_require__(/*! ../default-values.json */ "uKQf");
class SettingsComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    get keyword() {
        var _a;
        return (_a = this._keyword) !== null && _a !== void 0 ? _a : defaultValues.keyword;
    }
    set keyword(value) {
        this._keyword = value;
    }
    get interval() {
        var _a;
        return (_a = this._interval) !== null && _a !== void 0 ? _a : defaultValues.interval;
    }
    set interval(value) {
        this._interval = value;
    }
    get bgColor() {
        var _a;
        return (_a = this._bgColor) !== null && _a !== void 0 ? _a : defaultValues.bgColor;
    }
    set bgColor(value) {
        this._bgColor = value;
        this._fontColor = SettingsComponent.getContrast(value);
    }
    get fontColor() {
        var _a;
        return (_a = this._fontColor) !== null && _a !== void 0 ? _a : defaultValues.fontColor;
    }
    // TODO put this in utility class
    /*!
     * Get the contrasting color for any hex color
     * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
     * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
     * @param  {String} A hexcolor value
     * @return {String} The contrasting color (black or white)
     */
    static getContrast(hexcolor) {
        // If a leading # is provided, remove it
        if (hexcolor.slice(0, 1) === '#') {
            hexcolor = hexcolor.slice(1);
        }
        // If a three-character hexcode, make six-character
        if (hexcolor.length === 3) {
            hexcolor = hexcolor.split('').map((hex) => {
                return hex + hex;
            }).join('');
        }
        // Convert to RGB value
        const r = parseInt(hexcolor.substr(0, 2), 16);
        const g = parseInt(hexcolor.substr(2, 2), 16);
        const b = parseInt(hexcolor.substr(4, 2), 16);
        // Get YIQ ratio
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        // Check contrast
        return (yiq >= 128) ? 'black' : 'white';
    }
    handleKeyboardEvent(event) {
        if (event.key === 'Enter') {
            console.log('triggered enter in settingscomponent');
            this.passBack();
        }
    }
    passBack() {
        const settingData = { keyword: this.keyword, interval: this.interval, bgColor: this.bgColor };
        this.activeModal.close(settingData);
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["settings"]], hostBindings: function SettingsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function SettingsComponent_keypress_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, inputs: { keyword: "keyword", interval: "interval", bgColor: "bgColor" }, decls: 23, vars: 5, consts: [[1, "modal-header"], [1, "modal-title"], [1, "modal-body", "text-center"], [1, "form-group"], ["for", "keywordInput"], ["name", "keywordInput", "type", "text", "placeholder", "Enter keyword", 3, "ngModel", "ngModelChange"], ["for", "intervalInput"], ["name", "intervalInput", "type", "text", "placeholder", "Enter gif view duration", 3, "ngModel", "ngModelChange"], ["name", "bgColorInput", "placeholder", "Enter background color", 3, "colorPicker", "cpOutputFormat", "value", "colorPickerChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Keyword");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.keyword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Gif View Duration (in ms)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_14_listener($event) { return ctx.interval = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Background Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("colorPickerChange", function SettingsComponent_Template_input_colorPickerChange_19_listener($event) { return ctx.bgColor = $event; })("colorPickerChange", function SettingsComponent_Template_input_colorPickerChange_19_listener($event) { return ctx.bgColor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_21_listener() { return ctx.passBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.keyword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.interval);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colorPicker", ctx.bgColor)("cpOutputFormat", "hex")("value", ctx.bgColor ? ctx.bgColor : "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])('keyword')
], SettingsComponent.prototype, "_keyword", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])('interval')
], SettingsComponent.prototype, "_interval", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])('fontColor')
], SettingsComponent.prototype, "_fontColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])('bgColor')
], SettingsComponent.prototype, "_bgColor", void 0);


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_carousel_carousel_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/carousel/carousel-navigation */ "fSmA");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/modal.service */ "VQPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppComponent {
    constructor(_modalService) {
        this._modalService = _modalService;
    }
    handleKeyboardEvent(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event.key === 'Enter') {
                console.log('triggered in apps component');
                try {
                    yield this._modalService.tryOpenModal();
                }
                catch (_error) {
                    _services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"].isModalVisible = false;
                }
            }
        });
    }
    swipe(e, when) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const coord = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
            const time = new Date().getTime();
            if (when === 'start') {
                this._swipeCoord = coord;
                this._swipeTime = time;
            }
            else if (when === 'end') {
                const direction = [coord[0] - this._swipeCoord[0], coord[1] - this._swipeCoord[1]];
                const duration = time - this._swipeTime;
                if (duration < 1000) { // Long enough
                    if ((Math.abs(direction[0]) > 10 && (Math.abs(direction[0] * 3) < Math.abs(direction[1])))) { // Vertical enough
                        // Up swipe
                        if (direction[1] < 0) {
                            console.log('swipe up');
                            try {
                                yield this._modalService.tryOpenModal();
                            }
                            catch (_error) {
                                _services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"].isModalVisible = false;
                            }
                        }
                    }
                    else if ((Math.abs(direction[0]) > 10 && (Math.abs(direction[1] * 3) < Math.abs(direction[0])))) { // Horizontal enough
                        // Left swipe
                        if (direction[0] < 0) {
                            console.log('left swipe');
                            this.carouselNav.next();
                        }
                        // Right swipe
                        if (direction[0] > 0) {
                            console.log('right swipe');
                            this.carouselNav.prev();
                        }
                    }
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_components_carousel_carousel_navigation__WEBPACK_IMPORTED_MODULE_1__["CarouselNavigationComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.carouselNav = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AppComponent_keypress_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
    } }, decls: 1, vars: 0, consts: [[3, "touchstart", "touchend"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "carousel-navigation", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("touchstart", function AppComponent_Template_carousel_navigation_touchstart_0_listener($event) { return ctx.swipe($event, "start"); })("touchend", function AppComponent_Template_carousel_navigation_touchend_0_listener($event) { return ctx.swipe($event, "end"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_components_carousel_carousel_navigation__WEBPACK_IMPORTED_MODULE_1__["CarouselNavigationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "VQPA":
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/settings.component */ "70H3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




class ModalService {
    constructor(_modal) {
        this._modal = _modal;
        this.ngbModalOptions = {
            centered: true,
            size: 'sm'
        };
    }
    tryOpenModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = this.ngbModalOptions;
            if (!ModalService.isModalVisible) {
                this._modalRef = this._modal.open(_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__["SettingsComponent"], options);
                ModalService.isModalVisible = true;
                return this._modalRef.result;
            }
            ModalService.isModalVisible = false;
            return null;
        });
    }
}
ModalService.isModalVisible = false;
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_carousel_carousel_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/carousel/carousel-navigation.module */ "sjEq");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "70H3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _components_carousel_carousel_navigation_module__WEBPACK_IMPORTED_MODULE_3__["CarouselNavigationModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["NgxWebstorageModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _components_carousel_carousel_navigation_module__WEBPACK_IMPORTED_MODULE_3__["CarouselNavigationModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["NgxWebstorageModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]] }); })();


/***/ }),

/***/ "f5ui":
/*!*******************************************!*\
  !*** ./src/app/services/giphy.service.ts ***!
  \*******************************************/
/*! exports provided: GiphyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiphyService", function() { return GiphyService; });
/* harmony import */ var _api_key_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api-key.json */ "4xGw");
var _api_key_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api-key.json */ "4xGw", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GiphyService {
    constructor(http) {
        this.http = http;
    }
    getGif(keyword, amount, offset) {
        return this.http.get('https://api.giphy.com/v1/gifs/search?api_key=' + _api_key_json__WEBPACK_IMPORTED_MODULE_0__.api_key + '&q=' + keyword + '&limit=' + amount + '&rating=PG&offset=' + offset);
    }
}
GiphyService.ɵfac = function GiphyService_Factory(t) { return new (t || GiphyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GiphyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GiphyService, factory: GiphyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fSmA":
/*!************************************************************!*\
  !*** ./src/app/components/carousel/carousel-navigation.ts ***!
  \************************************************************/
/*! exports provided: CarouselNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselNavigationComponent", function() { return CarouselNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var dynamic_interval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dynamic-interval */ "DwxT");
/* harmony import */ var dynamic_interval__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dynamic_interval__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_giphy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/giphy.service */ "f5ui");
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/modal.service */ "VQPA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["carousel"];
function CarouselNavigationComponent_10_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 33);
} if (rf & 2) {
    const imageUrl_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", imageUrl_r2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function CarouselNavigationComponent_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CarouselNavigationComponent_10_ng_template_0_Template, 1, 1, "ng-template", 32);
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
const defaultValues = __webpack_require__(/*! ../../default-values.json */ "uKQf");
class CarouselNavigationComponent {
    constructor(_giphyService, _modalService) {
        this._giphyService = _giphyService;
        this._modalService = _modalService;
        this.images = [];
        this._offset = 0;
        this._gifAmount = 10;
        this.fetchGifs();
        // TODO maybe 10000 is not correct, could depend on view duration
        const config = { wait: 10000 };
        Object(dynamic_interval__WEBPACK_IMPORTED_MODULE_1__["setDynterval"])(context => {
            this.fetchGifs();
            return Object.assign(Object.assign({}, context), { wait: 10000 });
        }, config);
    }
    get interval() {
        var _a;
        return (_a = this._interval) !== null && _a !== void 0 ? _a : defaultValues.interval;
    }
    set interval(value) {
        this._interval = value;
    }
    get bgColor() {
        var _a;
        return (_a = this._bgColor) !== null && _a !== void 0 ? _a : defaultValues.bgColor;
    }
    set bgColor(value) {
        this._bgColor = value;
    }
    get keyword() {
        var _a;
        return (_a = this._keyword) !== null && _a !== void 0 ? _a : defaultValues.keyword;
    }
    fetchGifs() {
        this._giphyService.getGif(this.keyword, this._gifAmount, this._offset).subscribe(response => {
            if (this._lastKeyword !== this.keyword) {
                this.images = [];
            }
            this._lastKeyword = this.keyword;
            // keyword not found
            if (response.data.length === 0) {
                return;
            }
            response.data.forEach(element => {
                this.images.push(element.images.original.url);
            });
        }, error => {
            console.log(error);
        });
        this._offset += this._gifAmount;
    }
    next() {
        this.carousel.next();
    }
    prev() {
        this.carousel.prev();
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._modalService.tryOpenModal();
        });
    }
    ngAfterViewInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        if (this.carousel) {
            this.carousel.animation = false;
            this.carousel.pauseOnHover = false;
            this.carousel.pauseOnFocus = false;
            this.carousel.showNavigationIndicators = false;
            this.carousel.showNavigationArrows = false;
        }
        // this.carousel.focus()
    }
}
CarouselNavigationComponent.ɵfac = function CarouselNavigationComponent_Factory(t) { return new (t || CarouselNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_giphy_service__WEBPACK_IMPORTED_MODULE_5__["GiphyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"])); };
CarouselNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CarouselNavigationComponent, selectors: [["carousel-navigation"]], viewQuery: function CarouselNavigationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]])], decls: 58, vars: 10, consts: [[1, "position-absolute", "fixed-top-right"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "48px", "height", "48px", 3, "click"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M19.28 8.6l-.7-1.21-1.27.51-1.06.43-.91-.7c-.39-.3-.8-.54-1.23-.71l-1.06-.43-.16-1.13L12.7 4h-1.4l-.19 1.35-.16 1.13-1.06.44c-.41.17-.82.41-1.25.73l-.9.68-1.05-.42-1.27-.52-.7 1.21 1.08.84.89.7-.14 1.13c-.03.3-.05.53-.05.73s.02.43.05.73l.14 1.13-.89.7-1.08.84.7 1.21 1.27-.51 1.06-.43.91.7c.39.3.8.54 1.23.71l1.06.43.16 1.13.19 1.36h1.39l.19-1.35.16-1.13 1.06-.43c.41-.17.82-.41 1.25-.73l.9-.68 1.04.42 1.27.51.7-1.21-1.08-.84-.89-.7.14-1.13c.04-.31.05-.52.05-.73 0-.21-.02-.43-.05-.73l-.14-1.13.89-.7 1.1-.84zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z", "opacity", ".3"], ["d", "M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"], [1, "d-flex", "flex-column", "justify-content-center", "full-height"], [1, "d-flex", "flex-column", "justify-content-center", "height-80", "full-width", 3, "ngStyle"], [3, "hidden"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "h-auto", "full-width", 3, "interval"], ["carousel", ""], [4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "w-full", "height-20", "bg-dark"], [1, "d-flex", "flex-column", "align-items-start", "h-20", "width-fit-content"], [1, "d-flex", "flex-row", "text-white"], [1, "d-lg-block", "d-none", "svg-icon-padding-right-wrapper"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "512", "viewBox", "0 0 24 24", "width", "512", 1, "svg-icon-padding-right"], ["d", "m21.5 24h-19c-1.378 0-2.5-1.122-2.5-2.5v-19c0-1.378 1.122-2.5 2.5-2.5h19c1.378 0 2.5 1.122 2.5 2.5v19c0 1.378-1.122 2.5-2.5 2.5zm-19-23c-.827 0-1.5.673-1.5 1.5v19c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5z"], ["d", "m8.5 17c-.087 0-.174-.023-.252-.068-.154-.09-.248-.254-.248-.432v-9c0-.178.094-.342.248-.432.153-.089.342-.091.497-.004l8 4.5c.157.089.255.255.255.436s-.098.347-.255.436l-8 4.5c-.076.043-.161.064-.245.064zm.5-8.645v7.29l6.48-3.645z"], [1, "d-block", "d-lg-none", "svg-icon-wrapper"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 62 77.5", "x", "0px", "y", "0px", 1, "svg-icon"], ["d", "M46,27a3.93,3.93,0,0,0-2.24.69A4,4,0,0,0,40,25a3.93,3.93,0,0,0-2.24.69A4,4,0,0,0,34,23a3.91,3.91,0,0,0-2,.56V14a4,4,0,0,0-4.81-3.92A4.09,4.09,0,0,0,24,14.15V37.34l-2.74-3.13a5,5,0,0,0-6.86-.61l-.7.56A2.92,2.92,0,0,0,13,38L20.13,49.5A16.35,16.35,0,0,0,34,58,16,16,0,0,0,50,42V31A4,4,0,0,0,46,27ZM34,56a14.36,14.36,0,0,1-12.15-7.52L14.74,36.92a.93.93,0,0,1,.21-1.2l.7-.56a3,3,0,0,1,4.11.37l4.49,5.13A1,1,0,0,0,26,40V14.15A2.12,2.12,0,0,1,27.58,12,2,2,0,0,1,30,14V34a1,1,0,0,0,2,0V27a2,2,0,0,1,4,0v7a1,1,0,0,0,2,0V29a2,2,0,0,1,4,0v5a1,1,0,0,0,2,0V31a2,2,0,0,1,4,0V42A14,14,0,0,1,34,56Z"], ["d", "M34,17h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L45.41,16l-4.7-4.71a1,1,0,0,0-1.42,1.42L41.59,15H34a1,1,0,0,0,0,2Z"], ["d", "M15,17h7a1,1,0,0,0,0-2H15a1,1,0,0,0,0,2Z"], [1, "d-flex", "flex-row", "text-white", "pt-2"], ["d", "m21.5 24h-19c-1.379 0-2.5-1.122-2.5-2.5v-19c0-1.378 1.121-2.5 2.5-2.5h19c1.379 0 2.5 1.122 2.5 2.5v19c0 1.378-1.121 2.5-2.5 2.5zm-19-23c-.827 0-1.5.673-1.5 1.5v19c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5z"], ["d", "m14.5 17c-.085 0-.169-.021-.245-.064l-8-4.5c-.157-.089-.255-.255-.255-.436s.098-.347.255-.436l8-4.5c.153-.087.344-.086.497.004s.248.254.248.432v9c0 .178-.095.342-.248.432-.077.045-.165.068-.252.068zm-6.98-5 6.48 3.645v-7.29z"], ["d", "M34,17h7a1,1,0,0,0,0-2H34a1,1,0,0,0,0,2Z"], ["d", "M16,21a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L14.41,17H22a1,1,0,0,0,0-2H14.41l2.3-2.29a1,1,0,0,0-1.42-1.42L10.59,16l4.7,4.71A1,1,0,0,0,16,21Z"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 24 30", 0, "xml", "space", "preserve", 1, "svg-icon-padding-right", 2, "enable-background", "new 0 0 24 24"], ["d", "M20.5,0h-17C1.57,0,0,1.57,0,3.5v17C0,22.43,1.57,24,3.5,24h17c1.93,0,3.5-1.57,3.5-3.5v-17C24,1.57,22.43,0,20.5,0z     M23,20.5c0,1.378-1.121,2.5-2.5,2.5h-17C2.121,23,1,21.878,1,20.5v-17C1,2.122,2.121,1,3.5,1h17C21.879,1,23,2.122,23,3.5V20.5z     M19.5,7C19.224,7,19,7.224,19,7.5V13H9v-2.5c0-0.189-0.107-0.362-0.277-0.447C8.555,9.969,8.351,9.986,8.2,10.1l-4,3    C4.074,13.194,4,13.343,4,13.5s0.074,0.306,0.2,0.4l4,3C8.288,16.966,8.394,17,8.5,17c0.076,0,0.153-0.018,0.224-0.053    C8.893,16.862,9,16.689,9,16.5V14h10.5c0.276,0,0.5-0.224,0.5-0.5v-6C20,7.224,19.776,7,19.5,7z M8,15.5l-2.667-2L8,11.5V15.5z"], ["d", "M13.71,18.71,16,16.42V28a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V16.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L17,12.59l-4.71,4.7a1,1,0,0,0,1.42,1.42Z"], ["ngbSlide", ""], [1, "object-fit-contain-img", 3, "src"]], template: function CarouselNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CarouselNavigationComponent_Template__svg_svg_click_1_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ngb-carousel", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CarouselNavigationComponent_10_Template, 1, 0, undefined, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Keyword not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Press arrow right for next gif ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "hand gesture");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Swipe right for previous gif ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Press arrow left for next gif ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "hand gesture");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, " Swipe left for next gif ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " Press enter to open the settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "hand gesture");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, " Swipe up to open the settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("fill", ctx.fontColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c1, ctx.bgColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", (ctx.images == null ? null : ctx.images.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("interval", ctx.interval);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", (ctx.images == null ? null : ctx.images.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.fontColor);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]], styles: [".carousel-inner {\n  position: unset !important;\n  width: 80vw !important;\n  height: 40vh !important;\n  overflow: unset !important;\n  display: flex;\n}\n  .carousel-item > img:focus, .carousel-item[_ngcontent-%COMP%], ngb-carousel[_ngcontent-%COMP%] {\n  outline: unset !important;\n}\n.fixed-top-right[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n}\n.full-height[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.half-height[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n.height-80[_ngcontent-%COMP%] {\n  height: 80vh;\n}\n.height-20[_ngcontent-%COMP%] {\n  height: 30vh;\n}\n.width-fit-content[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.object-fit-contain-img[_ngcontent-%COMP%] {\n  object-fit: contain;\n  width: 100%;\n  max-height: 100%;\n  height: auto;\n}\n.svg-icon[_ngcontent-%COMP%], .svg-icon-padding-right[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: auto;\n  fill: white;\n}\n.svg-icon-padding-right[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n.svg-icon-wrapper[_ngcontent-%COMP%] {\n  margin-top: -0.2rem;\n  margin-bottom: -0.2rem;\n}\n.svg-icon-padding-right-wrapper[_ngcontent-%COMP%] {\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJvdXNlbC1uYXZpZ2F0aW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztTQUFBO0FBS0E7RUFDRSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7QUFBRjtBQUdBOzs7RUFHRSx5QkFBQTtBQUFGO0FBR0E7RUFDRSxNQUFBO0VBQ0EsUUFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUdBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBQUY7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBRjtBQUdBO0VBR0UscUJBQUE7QUFGRjtBQUtBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQUZGO0FBS0E7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBRkYiLCJmaWxlIjoiY2Fyb3VzZWwtbmF2aWdhdGlvbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL2RlZXAvIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZSA+IGltZyB7XHJcbiAgICAgICAgYm9yZGVyOiAwLjE1ZW0gc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA2cHggMHB4IHJnYmEoMCwwLDAsMC42KTtcclxuICAgICAgfSAqL1xyXG5cclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDgwdncgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQwdmggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWl0ZW0gPiBpbWc6Zm9jdXMsXHJcbi5jYXJvdXNlbC1pdGVtLFxyXG5uZ2ItY2Fyb3VzZWwge1xyXG4gIG91dGxpbmU6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maXhlZC10b3AtcmlnaHQge1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmZ1bGwtaGVpZ2h0IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uaGFsZi1oZWlnaHQge1xyXG4gIGhlaWdodDogNTB2aDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuLmhlaWdodC04MCB7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4uaGVpZ2h0LTIwIHtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbn1cclxuXHJcbi53aWR0aC1maXQtY29udGVudCB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ub2JqZWN0LWZpdC1jb250YWluLWltZyB7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogYXV0b1xyXG59XHJcblxyXG4uc3ZnLWljb24ge1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuLnN2Zy1pY29uLXBhZGRpbmctcmlnaHQge1xyXG4gIEBleHRlbmQgLnN2Zy1pY29uO1xyXG5cclxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5zdmctaWNvbi13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiAtMC4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IC0wLjJyZW07XHJcbn1cclxuXHJcbi5zdmctaWNvbi1wYWRkaW5nLXJpZ2h0LXdyYXBwZXIge1xyXG4gIHBhZGRpbmctdG9wOiAwLjNyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcclxufVxyXG4iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"])('interval')
], CarouselNavigationComponent.prototype, "_interval", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"])('bgColor')
], CarouselNavigationComponent.prototype, "_bgColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"])('keyword')
], CarouselNavigationComponent.prototype, "_keyword", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"])()
], CarouselNavigationComponent.prototype, "fontColor", void 0);


/***/ }),

/***/ "sjEq":
/*!*******************************************************************!*\
  !*** ./src/app/components/carousel/carousel-navigation.module.ts ***!
  \*******************************************************************/
/*! exports provided: CarouselNavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselNavigationModule", function() { return CarouselNavigationModule; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _carousel_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel-navigation */ "fSmA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CarouselNavigationModule {
}
CarouselNavigationModule.ɵfac = function CarouselNavigationModule_Factory(t) { return new (t || CarouselNavigationModule)(); };
CarouselNavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CarouselNavigationModule, bootstrap: [_carousel_navigation__WEBPACK_IMPORTED_MODULE_2__["CarouselNavigationComponent"]] });
CarouselNavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CarouselNavigationModule, { declarations: [_carousel_navigation__WEBPACK_IMPORTED_MODULE_2__["CarouselNavigationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"]], exports: [_carousel_navigation__WEBPACK_IMPORTED_MODULE_2__["CarouselNavigationComponent"]] }); })();


/***/ }),

/***/ "uKQf":
/*!*************************************!*\
  !*** ./src/app/default-values.json ***!
  \*************************************/
/*! exports provided: interval, keyword, fontColor, backgroundColor, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"interval\":5000,\"keyword\":\"cat\",\"fontColor\":\"black\",\"backgroundColor\":\"white\"}");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
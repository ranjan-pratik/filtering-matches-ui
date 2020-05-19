(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter.component.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-panel header=\"Matches\" [style]=\"{'margin-bottom':'20px'}\" class=\"match-center-text header-font-size\" [collapsed]=\"true\">\r\n\r\n</p-panel>\r\n\r\n<p-panel header=\"Add Filters\" [toggleable]=\"true\" [style]=\"{'margin-bottom':'20px'}\" [collapsed]=\"true\">\r\n    Available Filters\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-12 match-left-pad\">\r\n                <div class=\"ui-g-12\">\r\n                    <p-checkbox [(ngModel)]=\"hasImageValue\" [binary]=\"true\" label=\": Has Image ?\"></p-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 match-left-pad\">\r\n                <div class=\"ui-g-12\">\r\n                    <p-triStateCheckbox [(ngModel)]=\"isInContactValue\" label=\": In Contact ?\"></p-triStateCheckbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 match-left-pad\">\r\n                <div class=\"ui-g-12\">\r\n                    <p-triStateCheckbox [(ngModel)]=\"isFavouriteValue\" label=\": Is Favourite ?\"></p-triStateCheckbox>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <div class=\"ui-g-12 match-right-pad\">\r\n                <div class=\"ui-g-4\">\r\n                    <p-checkbox [(ngModel)]=\"compatibilityCheckValue\" [binary]=\"true\" label=\"Compatibility Score (%)\" class=\"ui-g-4 match-right-text\"></p-checkbox>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <div>\r\n                        <p-slider [(ngModel)]=\"compatibilityRangeValues\" [step]=\".1\" [range]=\"true\" [min]=\"1\" [max]=\"99\" [disabled] = \"!compatibilityCheckValue\"></p-slider>\r\n                    </div>\r\n                    <div styleClass=\"col-button\" class=\"match-center-text\">\r\n                        [ {{compatibilityRangeValues[0] + ' - ' + compatibilityRangeValues[1]}} ]\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 match-right-pad\">\r\n                <div class=\"ui-g-4\">\r\n                    <p-checkbox [(ngModel)]=\"ageCheckValue\" [binary]=\"true\" label=\"Age (in years)\" class=\"ui-g-4 match-right-text\"></p-checkbox>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <div>\r\n                        <p-slider [(ngModel)]=\"ageRangeValues\" [range]=\"true\" [min]=\"18\" [max]=\"95\" [disabled] = \"!ageCheckValue\" ></p-slider>\r\n                    </div>\r\n                    <div styleClass=\"col-button\" class=\"match-center-text\">\r\n                        [ {{ageRangeValues[0] + ' - ' + ageRangeValues[1]}} ]\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 match-right-pad\">\r\n                <div class=\"ui-g-4\">\r\n                    <p-checkbox [(ngModel)]=\"heightCheckValue\" [binary]=\"true\" label=\"Height (in cm)\" class=\"ui-g-4 match-right-text\"></p-checkbox>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <div>\r\n                        <p-slider [(ngModel)]=\"heightRangeValues\" [range]=\"true\" [min]=\"135\" [max]=\"210\" [disabled] = \"!heightCheckValue\" [animate]=\"true\" class=\"match-slider-custom\"></p-slider>\r\n                    </div>\r\n                    <div styleClass=\"col-button\" class=\"match-center-text\">\r\n                        [ {{heightRangeValues[0] + ' - ' + heightRangeValues[1]}} ]\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 match-right-pad\">\r\n                <div class=\"ui-g-4\">\r\n                    <p-checkbox [(ngModel)]=\"distanceCheckValue\" [binary]=\"true\" label=\"Distance (in km)\" class=\"ui-g-4 match-right-text\"></p-checkbox>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <div>\r\n                        <p-slider [(ngModel)]=\"distRangeValue\" [min]=\"30\" [max]=\"300\" [disabled] = \"!distanceCheckValue\" class=\"match-slider-custom\"></p-slider>\r\n                    </div>\r\n                    <div styleClass=\"col-button\" class=\"match-center-text\">\r\n                        [ {{distRangeValue}} ]\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 match-center-text\">\r\n            <button pButton type=\"button\" label=\"Apply All\" (click)=\"handleApplyFilters($event)\"class=\"ui-button-raised ui-button-rounded\"></button>\r\n|\r\n            <button pButton type=\"button\" label=\"Clear All\" (click)=\"handleClearFilters($event)\"class=\"ui-button-raised ui-button-rounded\"></button>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</p-panel>\r\n<p-table [columns]=\"matchCols\" [value]=\"matches\" dataKey=\"match_id\" [autoLayout]=\"true\" [paginator]=\"true\" rows=\"15\">\r\n    <ng-template pTemplate=\"header\" let-columns class=\"ui-g-4\">\r\n        <tr>\r\n            <th style=\"width: 3em\"></th>\r\n            <th *ngFor=\"let col of columns\">\r\n                {{col.header}}\r\n            </th>\r\n        </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\" class=\"ui-g-4\">\r\n        <tr>\r\n            <td>\r\n                <a href=\"#\" [pRowToggler]=\"rowData\">\r\n                    <i [ngClass]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></i>\r\n                </a>\r\n            </td>\r\n            <td *ngFor=\"let col of columns\">\r\n\t\t\t\t<div *ngIf=\"col.subfield;then nested_object_content else percent_content\"></div>\r\n\t\t\t\t<ng-template #nested_object_content>\r\n\t\t\t\t\t{{rowData[col.field][col.subfield]}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template #percent_content>\r\n\t\t\t\t\t<div *ngIf=\"col.percentMode;then percent_object_content else normal_content\"></div>\r\n\t\t\t\t\t<ng-template #percent_object_content>\r\n\t\t\t\t\t\t{{(rowData[col.field]*100).toFixed(2)}}\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template #normal_content>\r\n\t\t\t\t\t{{rowData[col.field]}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</td>\r\n        </tr>\r\n    </ng-template>\r\n\t<ng-template pTemplate=\"emptymessage\" let-columns>\r\n\t\t<tr>\r\n\t\t\t<td [attr.colspan]=\"columns.length\">\r\n\t\t\t   No records found\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</ng-template>\r\n    <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n            <td [attr.colspan]=\"columns.length + 1\">\r\n                <div class=\"ui-g ui-fluid\" style=\"font-size:16px;padding:20px\">\r\n                    <div class=\"ui-g-12 ui-md-6 shadow-box ui-shadow-1\" style=\"text-align:center\">\r\n                        <img [attr.alt]=\"rowData.main_photo\" src=\"{{rowData.main_photo}}\">\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-6\">\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-g-12\">\r\n                                <b>Name:</b> {{rowData.display_name}}\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <b>Job:</b> {{rowData.job_title}}\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <b>Religion:</b> {{rowData.religion}}\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <b>Contacts Exchanged:</b> {{rowData.contacts_exchanged}}\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <b>City :</b> {{rowData.city.name}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </ng-template>\r\n</p-table>\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-inputtext.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-button.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-table.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-dialog.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-panel.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-slider.js");
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tristatecheckbox */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-tristatecheckbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-checkbox.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-overlaypanel.js");
/* harmony import */ var _filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filter.component */ "./src/app/filter.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _filter_component__WEBPACK_IMPORTED_MODULE_15__["FilterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_10__["PanelModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_11__["SliderModule"],
                primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_12__["TriStateCheckboxModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__["CheckboxModule"],
                primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_14__["OverlayPanelModule"]
            ],
            providers: [],
            bootstrap: [_filter_component__WEBPACK_IMPORTED_MODULE_15__["FilterComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/domain/filters.ts":
/*!***********************************!*\
  !*** ./src/app/domain/filters.ts ***!
  \***********************************/
/*! exports provided: AgeFilter, HeightFilter, CompatibilityFilter, HasImageFilter, IsInContactFilter, IsFavouriteFilter, DistanceRangeInKmFilter, NotFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgeFilter", function() { return AgeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeightFilter", function() { return HeightFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompatibilityFilter", function() { return CompatibilityFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasImageFilter", function() { return HasImageFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsInContactFilter", function() { return IsInContactFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFavouriteFilter", function() { return IsFavouriteFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceRangeInKmFilter", function() { return DistanceRangeInKmFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFilter", function() { return NotFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AgeFilter = /** @class */ (function () {
    function AgeFilter(strategy) {
        this.strategy = strategy;
        this.type = 'age';
    }
    return AgeFilter;
}());

var HeightFilter = /** @class */ (function () {
    function HeightFilter(strategy) {
        this.strategy = strategy;
        this.type = 'height';
    }
    return HeightFilter;
}());

var CompatibilityFilter = /** @class */ (function () {
    function CompatibilityFilter(strategy) {
        this.strategy = strategy;
        this.type = 'compatibility';
    }
    return CompatibilityFilter;
}());

var HasImageFilter = /** @class */ (function () {
    function HasImageFilter(strategy) {
        this.strategy = strategy;
        this.type = 'hasImage';
    }
    return HasImageFilter;
}());

var IsInContactFilter = /** @class */ (function () {
    function IsInContactFilter(strategy) {
        this.strategy = strategy;
        this.type = 'isInContact';
    }
    return IsInContactFilter;
}());

var IsFavouriteFilter = /** @class */ (function () {
    function IsFavouriteFilter(strategy) {
        this.strategy = strategy;
        this.type = 'isFavourite';
    }
    return IsFavouriteFilter;
}());

var DistanceRangeInKmFilter = /** @class */ (function () {
    function DistanceRangeInKmFilter(strategy) {
        this.strategy = strategy;
        this.type = 'distanceRangeInKm';
    }
    return DistanceRangeInKmFilter;
}());

var NotFilter = /** @class */ (function () {
    function NotFilter(candidate) {
        this.candidate = candidate;
        this.type = 'not';
        this.strategy = null;
    }
    return NotFilter;
}());



/***/ }),

/***/ "./src/app/domain/strategies.ts":
/*!**************************************!*\
  !*** ./src/app/domain/strategies.ts ***!
  \**************************************/
/*! exports provided: NumberBetweenBoundsStrategy, StringIsNotNullStrategy, PositiveNumberStrategy, NumberEqualToStrategy, IsTrueOrFalseStrategy, DistanceWithinRangeStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberBetweenBoundsStrategy", function() { return NumberBetweenBoundsStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringIsNotNullStrategy", function() { return StringIsNotNullStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositiveNumberStrategy", function() { return PositiveNumberStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberEqualToStrategy", function() { return NumberEqualToStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTrueOrFalseStrategy", function() { return IsTrueOrFalseStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceWithinRangeStrategy", function() { return DistanceWithinRangeStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var NumberBetweenBoundsStrategy = /** @class */ (function () {
    function NumberBetweenBoundsStrategy(lowerBound, upperBound) {
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        this.name = 'NumberBetweenBoundsStrategy';
        this.type = 'numberBetweenBounds';
    }
    return NumberBetweenBoundsStrategy;
}());

var StringIsNotNullStrategy = /** @class */ (function () {
    function StringIsNotNullStrategy() {
        this.name = 'StringIsNotNullStrategy';
        this.type = 'stringIsNotNull';
    }
    return StringIsNotNullStrategy;
}());

var PositiveNumberStrategy = /** @class */ (function () {
    function PositiveNumberStrategy() {
        this.name = 'PositiveNumberStrategy';
        this.type = 'positiveNumber';
    }
    return PositiveNumberStrategy;
}());

var NumberEqualToStrategy = /** @class */ (function () {
    function NumberEqualToStrategy(value) {
        this.value = value;
        this.name = 'NumberEqualToStrategy';
        this.type = 'numberEqualTo';
    }
    return NumberEqualToStrategy;
}());

var IsTrueOrFalseStrategy = /** @class */ (function () {
    function IsTrueOrFalseStrategy(value) {
        this.value = value;
        this.name = 'IsTrueOrFalseStrategy';
        this.type = 'isTrueOrFalse';
    }
    return IsTrueOrFalseStrategy;
}());

var DistanceWithinRangeStrategy = /** @class */ (function () {
    function DistanceWithinRangeStrategy(thisLat, thisLon, lowerBound, upperBound) {
        this.thisLat = thisLat;
        this.thisLon = thisLon;
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        this.name = 'DistanceWithinRangeStrategy';
        this.type = 'distanceWithInRange';
    }
    return DistanceWithinRangeStrategy;
}());



/***/ }),

/***/ "./src/app/filter.component.css":
/*!**************************************!*\
  !*** ./src/app/filter.component.css ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".match-center-text {\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.match-left-text {\r\n    text-align: left;\r\n    width: 100%;\r\n}\r\n.match-right-text {\r\n    text-align: right;\r\n    width: 100%;\r\n}\r\n.match-right-pad {\r\n    text-align: right;\r\n    padding-right: 10%;\r\n    width: 100%;\r\n}\r\n.match-left-pad {\r\n    text-align: left;\r\n    padding-left: 20%;\r\n    width: 100%;\r\n}\r\n.match-slider-custom {\r\n    text-align: center;\r\n    width: 70%;\r\n    align-self: center;\r\n}\r\n.header-font-size {\r\n\tfont-size: 150%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZmlsdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0Y2gtY2VudGVyLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdGNoLWxlZnQtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdGNoLXJpZ2h0LXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdGNoLXJpZ2h0LXBhZCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0Y2gtbGVmdC1wYWQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdGNoLXNsaWRlci1jdXN0b20ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4uaGVhZGVyLWZvbnQtc2l6ZSB7XHJcblx0Zm9udC1zaXplOiAxNTAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/filter.component.ts":
/*!*************************************!*\
  !*** ./src/app/filter.component.ts ***!
  \*************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _domain_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain/filters */ "./src/app/domain/filters.ts");
/* harmony import */ var _services_matchservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/matchservice */ "./src/app/services/matchservice.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _domain_strategies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domain/strategies */ "./src/app/domain/strategies.ts");






var FilterComponent = /** @class */ (function () {
    function FilterComponent(matchService) {
        this.matchService = matchService;
        this.title = 'Matches';
        this.ageRangeValues = [18, 95];
        this.heightRangeValues = [135, 210];
        this.compatibilityRangeValues = [1, 99];
        this.distRangeValue = 30;
    }
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.matchService.getMatches().then(function (matches) { return _this.matches = matches; });
        console.log(this.matches);
        this.matchCols = [
            { field: 'display_name', header: 'Name' },
            { field: 'age', header: 'Age (years)' },
            { field: 'height_in_cm', header: 'Height (cm)' },
            { field: 'compatibility_score', percentMode: 'true', header: 'Compatibility (%)' },
            { field: 'favourite', header: 'Is Favourite' },
            { field: 'city', subfield: 'name', header: 'City' }
        ];
    };
    FilterComponent.prototype.handleApplyFilters = function (event) {
        var _this = this;
        this.matches = [];
        var allFilters = [];
        if (this.hasImageValue) {
            var hasImageStrategy = new _domain_strategies__WEBPACK_IMPORTED_MODULE_5__["StringIsNotNullStrategy"]();
            allFilters.push(new _domain_filters__WEBPACK_IMPORTED_MODULE_2__["HasImageFilter"](hasImageStrategy));
        }
        if (this.hasImageValue != null && !this.hasImageValue) {
            var hasImageStrategy = new _domain_strategies__WEBPACK_IMPORTED_MODULE_5__["StringIsNotNullStrategy"]();
            var hasImageFilter = new _domain_filters__WEBPACK_IMPORTED_MODULE_2__["HasImageFilter"](hasImageStrategy);
            alert('does not have image not implemented.');
            // allFilters.push(new NotFilter(hasImageFilter));
        }
        if (this.isInContactValue) {
            var isInContactStrategy = new _domain_strategies__WEBPACK_IMPORTED_MODULE_5__["PositiveNumberStrategy"]();
            allFilters.push(new _domain_filters__WEBPACK_IMPORTED_MODULE_2__["IsInContactFilter"](isInContactStrategy));
        }
        if (this.isInContactValue != null && !this.isInContactValue) {
            var isNotContactStrategy = new _domain_strategies__WEBPACK_IMPORTED_MODULE_5__["NumberEqualToStrategy"](0);
            allFilters.push(new _domain_filters__WEBPACK_IMPORTED_MODULE_2__["IsInContactFilter"](isNotContactStrategy));
        }
        if (this.isFavouriteValue) {
            var isFavouriteStrategy = new _domain_strategies__WEBPACK_IMPORTED_MODULE_5__["IsTrueOrFalseStrategy"](this.isFavouriteValue);
            allFilters.push(new _domain_filters__WEBPACK_IMPORTED_MODULE_2__["IsFavouriteFilter"](isFavouriteStrategy));
        }
        if (this.isFavouriteValue != null && !this.isFavouriteValue) {
            var isNotFavouriteStrategy = new _domain_strategies__WEBPACK_IMPORTED_MODULE_5__["IsTrueOrFalseStrategy"](this.isFavouriteValue);
            allFilters.push(new _domain_filters__WEBPACK_IMPORTED_MODULE_2__["IsFavouriteFilter"](isNotFavouriteStrategy));
        }
        if (this.compatibilityCheckValue) {
            var compatibilityBetweenBoundsStrategy = new _domain_strategies__WEBPACK_IMPORTED_MODULE_5__["NumberBetweenBoundsStrategy"](this.safeConvertNumberToDecimalFraction(this.compatibilityRangeValues[0]), this.safeConvertNumberToDecimalFraction(this.compatibilityRangeValues[1]));
            allFilters.push(new _domain_filters__WEBPACK_IMPORTED_MODULE_2__["CompatibilityFilter"](compatibilityBetweenBoundsStrategy));
        }
        if (this.ageCheckValue) {
            var ageBetweenBoundsStrategy = new _domain_strategies__WEBPACK_IMPORTED_MODULE_5__["NumberBetweenBoundsStrategy"](this.ageRangeValues[0], this.ageRangeValues[1]);
            allFilters.push(new _domain_filters__WEBPACK_IMPORTED_MODULE_2__["AgeFilter"](ageBetweenBoundsStrategy));
        }
        if (this.heightCheckValue) {
            var heightBetweenBoundsStrategy = new _domain_strategies__WEBPACK_IMPORTED_MODULE_5__["NumberBetweenBoundsStrategy"](this.heightRangeValues[0], this.heightRangeValues[1]);
            allFilters.push(new _domain_filters__WEBPACK_IMPORTED_MODULE_2__["HeightFilter"](heightBetweenBoundsStrategy));
        }
        if (this.distanceCheckValue) {
            var distanceBetweenBoundsStrategy = new _domain_strategies__WEBPACK_IMPORTED_MODULE_5__["DistanceWithinRangeStrategy"](53.801277, -1.548567, 30, this.distRangeValue);
            allFilters.push(new _domain_filters__WEBPACK_IMPORTED_MODULE_2__["DistanceRangeInKmFilter"](distanceBetweenBoundsStrategy));
        }
        this.matchService.getFilteredMatches(allFilters).then(function (matches) { return _this.matches = matches; });
        console.log('return values :' + this.matches);
        //  this.matches = results.slice();
    };
    FilterComponent.prototype.safeConvertNumberToDecimalFraction = function (value) {
        if (value != null) {
            var decimal = value / 100;
            return decimal;
        }
        return 0;
    };
    FilterComponent.prototype.handleClearFilters = function (event) {
        var _this = this;
        this.hasImageValue = false;
        this.isInContactValue = null;
        this.isFavouriteValue = null;
        this.ageRangeValues = [18, 95];
        this.ageCheckValue = false;
        this.heightRangeValues = [135, 210];
        this.heightCheckValue = false;
        this.compatibilityRangeValues = [1, 99];
        this.compatibilityCheckValue = false;
        this.distRangeValue = 30;
        this.distanceCheckValue = false;
        this.matchService.getFilteredMatches([]).then(function (matches) { return _this.matches = matches; });
    };
    FilterComponent.ctorParameters = function () { return [
        { type: _services_matchservice__WEBPACK_IMPORTED_MODULE_3__["MatchService"] }
    ]; };
    FilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter.component.html")).default,
            providers: [_services_matchservice__WEBPACK_IMPORTED_MODULE_3__["MatchService"]],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('rowExpansionTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translateX(-10%)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translateX(0)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filter.component.css */ "./src/app/filter.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_matchservice__WEBPACK_IMPORTED_MODULE_3__["MatchService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/services/matchservice.ts":
/*!******************************************!*\
  !*** ./src/app/services/matchservice.ts ***!
  \******************************************/
/*! exports provided: AllFiltersVO, MatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllFiltersVO", function() { return AllFiltersVO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchService", function() { return MatchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var AllFiltersVO = /** @class */ (function () {
    function AllFiltersVO(appliedFilters) {
        this.appliedFilters = appliedFilters;
    }
    return AllFiltersVO;
}());

var MatchService = /** @class */ (function () {
    function MatchService(http) {
        this.http = http;
        this.baseUrlRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrlRoot;
        this.baseUrlAllMatches = this.baseUrlRoot + '/filters/allMatches';
        this.baseUrlFilteredMatches = this.baseUrlRoot + '/filters/filteredMatches';
    }
    MatchService.prototype.getMatches = function () {
        return this.http.get(this.baseUrlAllMatches)
            .toPromise()
            .then(function (res) { return res.matches; })
            .then(function (data) { return data; });
    };
    MatchService.prototype.getFilteredMatches = function (listOfFilters) {
        var headers = { 'Content-Type': 'application/json' };
        var myJsonString = JSON.stringify(new AllFiltersVO(listOfFilters));
        console.log(new AllFiltersVO(listOfFilters));
        console.log(myJsonString);
        return this.http.post(this.baseUrlFilteredMatches, myJsonString, { headers: headers })
            .toPromise()
            .then(function (res) { return res.matches; })
            .then(function (data) { return data; });
    };
    MatchService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MatchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MatchService);
    return MatchService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var environment = {
    production: true,
    baseUrlRoot: 'http://localhost:8089/MatchFilter'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\WPAdmin\Desktop\Vijaya\JAVA\projects\filtering-matches-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
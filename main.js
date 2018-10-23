(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-home></app-home>-->\n\n<!--<app-consultation></app-consultation>-->\n\n<app-contracts></app-contracts>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'domurista';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_footer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/footer.service */ "./src/app/services/footer.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_card_item_card_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/card-item/card-item.component */ "./src/app/components/card-item/card-item.component.ts");
/* harmony import */ var _components_item_box_item_box_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/item-box/item-box.component */ "./src/app/components/item-box/item-box.component.ts");
/* harmony import */ var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */ "./src/app/components/main-nav/main-nav.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_pages_consultation_consultation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/consultation/consultation.component */ "./src/app/components/pages/consultation/consultation.component.ts");
/* harmony import */ var _components_social_net_social_net_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/social-net/social-net.component */ "./src/app/components/social-net/social-net.component.ts");
/* harmony import */ var _components_pages_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/contracts/contracts.component */ "./src/app/components/pages/contracts/contracts.component.ts");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/rating/rating.component */ "./src/app/components/rating/rating.component.ts");
/* harmony import */ var _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/tags/tags.component */ "./src/app/components/tags/tags.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Material modules

// Srvices

// Components












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _components_card_item_card_item_component__WEBPACK_IMPORTED_MODULE_11__["CardItemComponent"],
                _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_item_box_item_box_component__WEBPACK_IMPORTED_MODULE_12__["ItemBoxComponent"],
                _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_13__["MainNavComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
                _components_pages_consultation_consultation_component__WEBPACK_IMPORTED_MODULE_15__["ConsultationComponent"],
                _components_social_net_social_net_component__WEBPACK_IMPORTED_MODULE_16__["SocialNetComponent"],
                _components_pages_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_17__["ContractsComponent"],
                _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_18__["RatingComponent"],
                _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_19__["TagsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]
            ],
            providers: [_services_footer_service__WEBPACK_IMPORTED_MODULE_7__["FooterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card-item/card-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/card-item/card-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.card-wrapper {\r\n  width: 20em;\r\n}\r\n.mat-card:not([class*=mat-elevation-z]) {\r\n   box-shadow: none;\r\n}\r\n.mat-card-content {\r\n  margin: 0 -24px;\r\n}\r\na {\r\n  margin-left: -8px;\r\n  cursor: pointer;\r\n}\r\n.mat-card-actions a{\r\n  color: #3484C8;\r\n}\r\n.additional a {\r\n  color: black;\r\n  margin-bottom: 1em;\r\n  font-size: 1.125em;\r\n  font-weight: 400;\r\n}\r\n.mat-icon {\r\n  vertical-align: middle;\r\n  margin-left: -8px;\r\n}\r\n.additional {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.mat-card-content p.descriptions,\r\n.mat-card-content .title,\r\n.card-actions,\r\n.additional a{\r\n  font-family: \"Segoe UI\", sans-serif !important;\r\n}\r\n.mat-card-content .title {\r\n  font-size: 1.25em;\r\n  font-weight: 600;\r\n}\r\n.mat-card-content p.descriptions {\r\n  font-weight: 100;\r\n  font-size: 1em;\r\n}\r\n.similar-document .title {\r\n  font-weight: 400;\r\n}\r\n.similar-document .mat-card-content {\r\n  height: 2em;\r\n}\r\n.mat-card-actions button {\r\n  color: #3484C8;\r\n  font-weight: 400;\r\n  font-family: \"Segoe UI\";\r\n}\r\n.advice-document .title {\r\n  font-weight: 400;\r\n}\r\n.advice-document .mat-card-actions{\r\n  text-align: center;\r\n}\r\n.first .item-card, .second .item-card, .third .item-card {\r\n  background-color: #F1F1F1;\r\n}\r\n.first .mat-card-content, .second .mat-card-content, .third .mat-card-content {\r\n  margin: 0;\r\n}\r\n.first .mat-card-actions, .second .mat-card-actions, .third .mat-card-actions {\r\n  text-align: center;\r\n}\r\n.card-wrapper .title {\r\n  font-weight: 400;\r\n}\r\n.first {\r\n  border-top: .3125em solid #3484C8;\r\n}\r\n.first .title {\r\n  color: #3484C8;\r\n}\r\n.second {\r\n  border-top: .3125em solid #008F0E;\r\n}\r\n.second .title {\r\n  color: #008F0E;\r\n}\r\n.third {\r\n  border-top: .3125em solid #F30000;\r\n}\r\n.third .title {\r\n  color: #F30000;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/card-item/card-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/card-item/card-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card-wrapper\" [ngClass]=\"configStyle\">\r\n  <mat-card class=\"item-card\">\r\n    <!--<mat-card-header>-->\r\n    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n    <!--<mat-card-title>Shiba Inu</mat-card-title>-->\r\n    <!--<mat-card-subtitle>Dog Breed</mat-card-subtitle>-->\r\n    <!--</mat-card-header>-->\r\n\r\n    <img *ngIf=\"carditem.imgPath\" mat-card-image src=\"{{carditem.imgPath}}\" alt=\"\">\r\n\r\n    <mat-card-content>\r\n      <mat-card-title class=\"title\" *ngIf=\"carditem.title\">{{carditem.title}}</mat-card-title>\r\n      <p class=\"descriptions\" *ngIf=\"carditem.description\">{{carditem.description}}</p>\r\n      <div class=\"additional\" *ngIf=\"carditem.additional\">\r\n        <a href=\"{{item.path}}\" *ngFor=\"let item of carditem.additional\">{{item.title}}</a>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions *ngIf=\"carditem.cardactions\">\r\n      <a *ngIf=\"!btn\" class=\"card-actions\" href=\"{{carditem.cardactions}}\">{{carditem.cardactions}} <mat-icon>navigate_next</mat-icon></a>\r\n      <button *ngIf=\"btn\" mat-button (click)=\"onTab(configStyle)\" >{{carditem.cardactions}} <mat-icon>navigate_next</mat-icon></button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/card-item/card-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/card-item/card-item.component.ts ***!
  \*************************************************************/
/*! exports provided: CardItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardItemComponent", function() { return CardItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardItemComponent = /** @class */ (function () {
    function CardItemComponent() {
        this.opentab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CardItemComponent.prototype.ngOnInit = function () {
    };
    CardItemComponent.prototype.onTab = function (e) {
        this.opentab.emit(e);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardItemComponent.prototype, "carditem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardItemComponent.prototype, "configStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardItemComponent.prototype, "btn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardItemComponent.prototype, "opentab", void 0);
    CardItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-item',
            template: __webpack_require__(/*! ./card-item.component.html */ "./src/app/components/card-item/card-item.component.html"),
            styles: [__webpack_require__(/*! ./card-item.component.css */ "./src/app/components/card-item/card-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardItemComponent);
    return CardItemComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n  padding: 2em 0;\r\n  background-color: #F2F2F2;\r\n}\r\n.wrapper-items > ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n.title-item {\r\n  font-weight: 600;\r\n  font-size: .9375em;\r\n}\r\n.title-item + ul {\r\n  margin-top: 1.5em;\r\n}\r\n.items-lists {\r\n  width: 20%;\r\n}\r\nfooter a {\r\n  color: #616161;\r\n  font-size: .75em;\r\n  display: block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n.item-group a {\r\n  margin-bottom: .75em;\r\n}\r\n.cocial-net ul{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  margin-bottom: 2em;\r\n  padding: 0 5em;\r\n}\r\n.social-ico {\r\n  width: .9375em;\r\n  margin-left: .25em;\r\n}\r\n.footer-producns {\r\n  border-top: 1px solid #2F2F2F;\r\n  border-bottom: 1px solid #2F2F2F;\r\n  padding: 2em 0;\r\n}\r\n.wrapper-producns .title-item + ul {\r\n  margin-top: unset;\r\n}\r\n.wrapper-producns {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.wrapper-producns > * {\r\n  width: 30%;\r\n}\r\n.wrapper-producns ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n\r\n}\r\n.products-ico {\r\n  height: 3em;\r\n}\r\n.bottom-line ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  padding: 2em 0 0;\r\n}\r\n.bottom-line ul li {\r\n  margin-right: 9.0625em;\r\n}\r\n.bottom-line a, .bottom-line p{\r\n  font-size: .6875em;\r\n}\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n\r\n  <div class=\"container\">\r\n\r\n    <span class=\"logo\">\r\n      <img src=\"assets/img/logo.png\" alt=\"\">\r\n    </span>\r\n\r\n    <nav class=\"wrapper-items\">\r\n      <ul>\r\n        <li  class=\"items-lists\" *ngFor=\"let group of  itemslist\">\r\n          <span class=\"title-item\">{{group.title}}</span>\r\n          <ul>\r\n            <li class=\"item-group\" *ngFor=\"let item of group.itemsgroup\"><a href=\"{{item.path}}\" >{{item.title}}</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <nav class=\"cocial-net\">\r\n      <ul>\r\n        <li *ngFor=\"let link of socialitem\">\r\n          <a href=\"{{link.link}}\" target=\"_blank\">\r\n            <img class=\"social-ico\" src=\"{{link.path}}\" alt=\"\">\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <div class=\"footer-producns\">\r\n      <div class=\"wrapper-producns\">\r\n        <span class=\"title-item\">Продукти</span>\r\n        <ul>\r\n          <li *ngFor=\"let product of productslitem\">\r\n            <a href=\"{{product.link}}\"><img class=\"products-ico\" src=\"{{product.path}}\" alt=\"\"></a>\r\n          </li>\r\n        </ul>\r\n        <span></span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"bottom-line\">\r\n      <ul>\r\n        <li><a href=\"\">Українська</a></li>\r\n        <li><a href=\"\">Політика конфіденційності</a></li>\r\n        <li><a href=\"\">Умови надання послуг</a></li>\r\n        <span class=\"spacer\"></span>\r\n        <p>© Дом юриста, 2018</p>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_footer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/footer.service */ "./src/app/services/footer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var FooterComponent = /** @class */ (function () {
    function FooterComponent(fs) {
        this.fs = fs;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.itemslist = this.fs.getItemList();
        this.socialitem = this.fs.getScocialNet();
        this.productslitem = this.fs.getProductsItem();
        console.log(this.itemslist);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_footer_service__WEBPACK_IMPORTED_MODULE_1__["FooterService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nheader {\r\n  position: relative;\r\n}\r\n.app-nav {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: -100%;\r\n  z-index: 999;\r\n  width: 22.0625em;\r\n  height: 40em;\r\n  background-color: white;\r\n  transition: all .3s;\r\n  opacity: 0;\r\n}\r\n.app-nav.is-open {\r\n  left: 0;\r\n  transition: all .3s;\r\n  opacity: 1;\r\n}\r\n.app-nav ul {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n  padding: 1.3em;\r\n}\r\n.app-nav li {\r\n  background-color: #F8F8F8;\r\n  width: 5.4375em;\r\n  height: 5.4375em;\r\n  margin: .5em;\r\n  transition: all .6s;\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n}\r\n.app-nav.is-open li {\r\n  transition: all .6s;\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n}\r\n.app-nav li:hover {\r\n  background-color: #c5d1df;\r\n}\r\n.app-nav li a{\r\n  color: #0067B8;\r\n}\r\n.app-nav li a img{\r\n  height: 1.735em;\r\n}\r\n.logo {\r\n  height: 100%;\r\n}\r\n.icon-menu {\r\n  height: 1em;\r\n  margin-right: .3em;\r\n}\r\n.mat-icon-img {\r\n  padding: 0;\r\n}\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n.mat-toolbar .mat-toolbar-row:first-child {\r\n  background-color: #fff;\r\n  color: #2F2F2F;\r\n}\r\n.mat-toolbar .mat-toolbar-row:last-child {\r\n  background-color: #2F2F2F;\r\n  color: white;\r\n}\r\n.mat-button {\r\n  min-width: auto;\r\n  font-family: \"Segoe UI\";\r\n  font-weight: 400;\r\n}\r\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\r\n  right: 4px;\r\n}\r\n.mat-badge-medium.mat-badge-above .mat-badge-content {\r\n  top: 4px;\r\n}\r\n.mat-badge-medium .mat-badge-content {\r\n  width: 8px;\r\n  height: 8px;\r\n  line-height: 8px;\r\n}\r\n.mat-badge-warn .mat-badge-content {\r\n  color: #f44336;\r\n}\r\n.btn-ico {\r\n  width: 1.5em;\r\n  color: black;\r\n}\r\n.btn-ico.large {\r\n  font-size: 2em;\r\n}\r\n.btn-wrapper {\r\n  background-color: transparent;\r\n  height: 100%;\r\n  width: 4em;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: all .5s;\r\n}\r\n.btn-wrapper.is-active {\r\n  background-color: white;\r\n  transition: all .5s;\r\n}\r\n.btn-wrapper.is-active button {\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<header (mouseleave)=\"closeAppNav()\">\r\n  <mat-toolbar>\r\n\r\n    <mat-toolbar-row>\r\n    <span class=\"logo\">\r\n      <img src=\"assets/img/logo.png\" alt=\"\">\r\n    </span>\r\n\r\n      <button mat-button >Domjurista</button>\r\n      <button mat-button>Jusnote</button>\r\n      <button mat-button>Analytics</button>\r\n      <button mat-button>Обрати підписку</button>\r\n\r\n      <span class=\"spacer\"></span>\r\n\r\n      <button mat-button>\r\n        <mat-icon class=\"mat-icon-img\" matBadge=\"•\" matBadgeColor=\"warn\">notifications_none</mat-icon>\r\n      </button>\r\n      <button mat-button>\r\n        <!--<mat-icon class=\"example-icon\">shopping_cart</mat-icon>-->\r\n        <img class=\"btn-ico\" src=\"assets/img/cart-ico.svg\" alt=\"\">\r\n      </button>\r\n      <button mat-button>Вхід</button>\r\n      <button mat-button>\r\n        <!--<mat-icon class=\"icon\" color=\"primary\">account_circle</mat-icon>-->\r\n        <img class=\"btn-ico large\" src=\"assets/img/account-ico.svg\" alt=\"\">\r\n      </button>\r\n\r\n    </mat-toolbar-row>\r\n\r\n    <mat-toolbar-row>\r\n\r\n      <div class=\"btn-wrapper app-nav-btn\" #appNavBtn>\r\n\r\n        <button mat-button (click)=\"openAppNav()\">\r\n          <mat-icon class=\"example-icon\">apps</mat-icon>\r\n        </button>\r\n\r\n      </div>\r\n\r\n      <button mat-button>Всі сервіси</button>\r\n      <button mat-button>Сервіси</button>\r\n      <button mat-button>Документи</button>\r\n      <button mat-button>Пакети документів</button>\r\n      <button mat-button>Центр знань</button>\r\n\r\n      <span class=\"spacer\"></span>\r\n\r\n      <button mat-button>\r\n      <span>\r\n        <img class=\"icon-menu\" src=\"assets/img/email.svg\" alt=\"\">\r\n      </span>\r\n        Підписатися на розсилку\r\n      </button>\r\n\r\n    </mat-toolbar-row>\r\n\r\n  </mat-toolbar>\r\n  <nav class=\"app-nav\" #appNav>\r\n    <ul>\r\n      <li *ngFor=\"let item of appnavigation\">\r\n        <app-main-nav [item]=\"item\" [styleEl]=\"styleEl\" (click)=\"closeAppNav()\"></app-main-nav>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        // img path
        this.imgpath = 'assets/img/';
        // configuration that passes the class to the child
        this.styleEl = 'app-nav';
        // element configuration app-nav
        this.appnavigation = [
            {
                title: 'Створити ТОВ',
                imgPath: this.imgpath + "app-nav-ico-1.svg",
                actions: '#',
            },
            {
                title: 'Створити ФОП',
                imgPath: this.imgpath + "app-nav-ico-2.svg",
                actions: '#',
            },
            {
                title: 'Перевірити договір',
                imgPath: this.imgpath + "app-nav-ico-3.svg",
                actions: '#',
            },
            {
                title: 'Кадри Online',
                imgPath: this.imgpath + "app-nav-ico-4.svg",
                actions: '#',
            },
            {
                title: 'Консультація юриста',
                imgPath: this.imgpath + "app-nav-ico-5.svg",
                actions: '#',
            },
            {
                title: 'Калькурятори',
                imgPath: this.imgpath + "app-nav-ico-6.svg",
                actions: '#',
            },
            {
                title: 'Скласти документ',
                imgPath: this.imgpath + "app-nav-ico-7.svg",
                actions: '#',
            }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    // App-nav menu switch
    HeaderComponent.prototype.openAppNav = function () {
        this.appNav.nativeElement.classList.toggle('is-open');
        this.appNavBtn.nativeElement.classList.toggle('is-active');
    };
    // App-nav menu close
    HeaderComponent.prototype.closeAppNav = function () {
        this.appNav.nativeElement.classList.remove('is-open');
        this.appNavBtn.nativeElement.classList.remove('is-active');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appNav'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "appNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appNavBtn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "appNavBtn", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/item-box/item-box.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/item-box/item-box.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: #F2F2F2;\r\n}\r\n.padding-wrapper {\r\n  padding: 1.75em;\r\n}\r\n.mat-icon {\r\n  vertical-align: middle;\r\n}\r\n.img-wrapper {\r\n  width: 50%;\r\n}\r\n.content-wrapper {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding-left: 2.3125em;\r\n}\r\n.column-wrapper img {\r\n  width: 100%;\r\n}\r\n.title {\r\n  font-weight: 600;\r\n  font-size: 1.375em;\r\n  margin-bottom: 1.625em;\r\n}\r\n.descriptions {\r\n  margin-bottom: 1.375em;\r\n  font-size: 1.125em;\r\n  font-weight: 100;\r\n}\r\n.box-actions {\r\n  color: #3484C8;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/item-box/item-box.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/item-box/item-box.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper padding-wrapper\">\r\n  <div class=\"column-wrapper img-wrapper\">\r\n    <img src=\"{{box.imgPath}}\" alt=\"\">\r\n  </div>\r\n  <div class=\"column-wrapper content-wrapper\">\r\n    <div class=\"title\">{{box.title}}</div>\r\n    <div class=\"descriptions\">{{box.descriptions}}</div>\r\n    <a class=\"box-actions\" href=\"{{box.cardactions}}\">Дізнатися більше<mat-icon>navigate_next</mat-icon></a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/item-box/item-box.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/item-box/item-box.component.ts ***!
  \***********************************************************/
/*! exports provided: ItemBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemBoxComponent", function() { return ItemBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemBoxComponent = /** @class */ (function () {
    function ItemBoxComponent() {
    }
    ItemBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemBoxComponent.prototype, "box", void 0);
    ItemBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-box',
            template: __webpack_require__(/*! ./item-box.component.html */ "./src/app/components/item-box/item-box.component.html"),
            styles: [__webpack_require__(/*! ./item-box.component.css */ "./src/app/components/item-box/item-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemBoxComponent);
    return ItemBoxComponent;
}());



/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.wrapper {\r\n  height: 100%;\r\n}\r\n.wrapper a {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  color: white;\r\n  font-size: .875em;\r\n  font-weight: 600;\r\n\r\n}\r\n.wrapper a img {\r\n  height: 3.024375em;\r\n  margin-bottom: 1.4em;\r\n}\r\n.wrapper a.app-nav  {\r\n  color: #2F2F2F;\r\n  font-size: .625em;\r\n  text-align: center;\r\n  justify-content: unset;\r\n  height: inherit;\r\n}\r\n.wrapper a.app-nav img{\r\n  margin-top: 1.5em;\r\n  margin-bottom: 1em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <a href=\"{{item.actions}}\" [ngClass]=\"styleEl\">\r\n    <img src=\"{{item.imgPath}}\" alt=\"\">\r\n    {{item.title}}\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainNavComponent = /** @class */ (function () {
    function MainNavComponent() {
    }
    MainNavComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MainNavComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MainNavComponent.prototype, "styleEl", void 0);
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/components/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/components/main-nav/main-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/consultation/consultation.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/pages/consultation/consultation.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container-document {\n  width: 54.0625em;\n  margin: 0 auto;\n}\nh1{\n  font-family: \"Segoe UI\";\n  font-weight: 100;\n  font-size: 2.875em;\n  color: #2F2F2F;\n}\n.title {\n  position: relative;\n  display: block;\n}\n.title::before {\n  content: '';\n  position: absolute;\n  bottom: -1em;\n  width: 20%;\n  height: 3px;\n  border-bottom: 2px solid #0067B8;\n}\n.subtitle-line ul > .sub-row {\n  margin-bottom: .785em;\n}\n.sub-row{\n  display: flex;\n  flex-direction: row;\n}\n.headline {\n  color: #0067B8;\n  margin-right: .5em;\n}\n.headline, tag, .send-to-email{\n  font-family: \"Segoe UI\";\n  font-style: italic;\n  font-size: .875em;\n}\n.headline, tag{\n  font-style: italic;\n}\n.tag {\n  color: #535353;\n}\n.send-to-email {\n  font-weight: 400;\n}\nbutton img {\n  width: 1.5em;\n  margin: 0 .5em;\n}\n.input-wrap {\n  width: 25em;\n  height: 2.625em;\n  display: flex;\n  border: 1px solid #0E76BC;\n  align-items: center;\n}\n.input-wrap input {\n  width: 100%;\n  outline: none;\n  border: transparent;\n  text-align: center;\n}\n.input-wrap button {\n  cursor: pointer;\n  border-radius: 50%;\n  width: 2em;\n  height: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n  transition: all .3s;\n}\n.input-wrap button:hover {\n  background-color: rgba(0,0,0,.1);\n  transition: all .3s;\n}\n.input-wrap img {\n  width: 1em;\n}\n.important-paragraph {\n  display: flex;\n  flex-direction: row;\n}\n.important-paragraph .img-wrap img {\n  width: 1.456875em;\n  margin-right: .5em;\n}\n.important-paragraph .text-wrap {\n  padding: 1.5em;\n  background-color: #FAFAFA;\n}\n.text-section {\n  margin: 1em 0;\n}\n.text-wrap p{\n  font-size: .875em;\n  font-family: \"Segoe UI\";\n  font-weight: 400;\n  color: #2F2F2F;\n}\n.text-wrap p span {\n  font-weight: 700;\n}\n.important-paragraph.advice .text-wrap {\n  background-color: #EFF5FE;\n}\n.file-document li {\n  margin-bottom: 1em;\n}\n.file-headline {\n  color: #0067B8;\n  font-size: 1em;\n  font-weight: 400;\n  font-family: \"Segoe UI\";\n  margin-bottom: .25em;\n}\n.share-to-link {\n  display: flex;\n  flex-direction: row;\n}\n.share-to-link p {\n  margin-right: 1em;\n}\n.be-useful {\n  margin-top: 1em;\n}\n.be-useful .linehead-useful {\n  font-size: 1.0625em;\n  font-family: \"Segoe UI\";\n  color: #2F2F2F;\n  font-weight: 400;\n  margin-bottom: 1em;\n}\n.be-useful ul li button span{\n  color: #0067B8;\n}\n.registration-document {\n  margin-top: 1em;\n  border-top: 1px solid #F2F2F2;\n  display: flex;\n  justify-content: space-between;\n}\n.warning {\n  display: flex;\n  padding: 0 1.5em;\n}\n.warning img {\n  width: 1.3em;\n  height: 1.3em;\n  margin-left: .5em;\n}\n.wrapp-article {\n  background-color: #E2E2E2;\n  height: 3.3125em;\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 100;\n}\n.wrapp-article button {\n  font-weight: 100;\n  border: 1px solid #0067B8;\n  color: #0067B8;\n  margin: 1em;\n  font-family: \"Segoe UI\";\n}\n/* input placeholder */\ninput::-moz-input-placeholder{\n  padding-left: .5em;\n}\ninput::-webkit-input-placeholder{\n  padding-left: .5em;\n}\ninput::-ms-input-placeholder{\n  padding-left: .5em;\n}\n"

/***/ }),

/***/ "./src/app/components/pages/consultation/consultation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/consultation/consultation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main>\n  <section>\n\n    <div class=\"container\">\n\n      <div class=\"container-document\">\n\n        <div class=\"title\">\n          <h1>Назва консультації</h1>\n        </div>\n\n        <div class=\"subtitle-line\">\n          <ul>\n            <li class=\"sub-row\">\n              <div class=\"headline\">Стосується до:</div>\n              <div class=\"tags\">\n                <span *ngFor=\"let item of tugItems\"><a class=\"tag\" href=\"{{item.path}}\">{{item.title}}, </a></span>\n              </div>\n            </li>\n            <ul  class=\"sub-row justify-content-between\">\n              <li  class=\"sub-row\">\n                <div class=\"headline\">Остання зміна:</div>\n                <span><a class=\"tag\" href=\"#\">29.08.2018</a></span>\n              </li>\n              <li class=\"sub-row\">\n                <button mat-button class=\"send-to-email\" (click)=\"sendToEmail()\">\n                  Відправити статтю на Email\n                  <img src=\"../../../../assets/img/email2.svg\" alt=\"\">\n                </button>\n              </li>\n            </ul>\n            <li *ngIf=\"sendToEmailForm; else mesagetext\" class=\"sub-row justify-content-end\">\n              <div class=\"input-wrap justify-content-between\">\n                <input type=\"text\" placeholder=\"Email, на який відправити\">\n                <button >\n                  <img src=\"assets/img/send-ico.svg\" alt=\"\">\n                </button>\n              </div>\n            </li>\n            <ng-template #mesagetext>\n              <div class=\"warning justify-content-end\">\n                <p>Відправлено!</p>\n                <img src=\"assets/img/checkin-ico.svg\" alt=\"\">\n              </div>\n            </ng-template>\n          </ul>\n        </div>\n        <!--/subtitle-line-->\n\n        <div class=\"important-paragraph text-section\">\n          <div class=\"img-wrap\">\n            <img src=\"assets/img/info.svg\" alt=\"\">\n          </div>\n          <div class=\"text-wrap\">\n            <p>\n              <span>Важливо знати:</span> Lorem ipsum dolor sit amet,\n              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,\n              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.\n              Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.\n            </p>\n          </div>\n        </div>\n        <!--/important-paragraph-->\n\n        <div class=\"text-wrap text-section\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,\n            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.\n            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,\n            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,\n            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.\n            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\n            neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio\n            et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.\n            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris s\n          </p>\n        </div>\n        <!--/text-wrap-->\n\n        <div class=\"important-paragraph advice text-section\">\n          <div class=\"img-wrap\">\n            <img src=\"assets/img/advice-ico.svg\" alt=\"\">\n          </div>\n          <div class=\"text-wrap\">\n            <p>\n              <span>Порада:</span> Lorem ipsum dolor sit amet,\n              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,\n              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.\n              Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.\n            </p>\n          </div>\n        </div>\n        <!--/important-paragraph-->\n\n      </div>\n\n    </div>\n\n  </section>\n\n  <section>\n\n    <div class=\"container\">\n\n      <div class=\"container-document\">\n\n        <h1>Як подати документи на реєстрацію:</h1>\n\n        <ul class=\"file-document\">\n          <li>\n            <div class=\"file-headline\">1. Перейти сюди</div>\n            <div class=\"text-wrap\">\n              <p>\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,\n                nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              </p>\n            </div>\n          </li>\n          <li>\n            <div class=\"file-headline\">2. Перейти сюди</div>\n            <div class=\"text-wrap\">\n              <p>\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,\n                nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              </p>\n            </div>\n          </li>\n          <li>\n            <div class=\"file-headline\">3. Перейти сюди</div>\n            <div class=\"text-wrap\">\n              <p>\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,\n                nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              </p>\n            </div>\n          </li>\n        </ul>\n\n        <div class=\"share-to-link\">\n          <p>Поділитися статтею</p>\n          <app-social-net></app-social-net>\n        </div>\n\n        <div class=\"be-useful\">\n          <div class=\"linehead-useful\">Консультації, які можуть бути корисними</div>\n          <ul>\n            <li>\n              <button mat-button=\"\">\n                <span>- Як зареєструвати ТОВ онлайн</span>\n              </button>\n            </li>\n            <li>\n              <button mat-button=\"\">\n                <span>- Які документи потрібні для набуття статусу адвоката</span>\n              </button>\n            </li>\n            <li>\n              <button mat-button=\"\">\n                <span>- Як поділити майно з дружиною після розлучення</span>\n              </button>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"registration-document\">\n\n          <div class=\"card\" *ngFor=\"let carditem of bestdecision\">\n            <app-card-item [carditem]=\"carditem\"></app-card-item>\n          </div>\n\n        </div>\n\n\n      </div>\n\n    </div>\n\n\n\n  </section>\n\n  <section class=\"interesting-article\">\n    <div class=\"wrapp-article\">\n      <p>Чи корисною для вас є ця стаття?</p>\n      <button mat-button>Так</button>\n      <button mat-button>Ні</button>\n    </div>\n  </section>\n\n</main>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/pages/consultation/consultation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/consultation/consultation.component.ts ***!
  \*************************************************************************/
/*! exports provided: ConsultationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationComponent", function() { return ConsultationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsultationComponent = /** @class */ (function () {
    function ConsultationComponent(title, meta) {
        this.title = title;
        this.meta = meta;
        this.tugItems = [
            {
                title: 'малого бізнесу',
                path: '#'
            },
            {
                title: 'приватних підприємців',
                path: '#'
            },
        ];
        this.bestdecision = [
            {
                title: "",
                description: "",
                additional: [
                    {
                        title: "\u0420\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u044E \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u0437\u0430 \u0434\u043E\u043C\u043E\u0433\u043E\u044E \u0414\u043E\u043C \u044E\u0440\u0438\u0441\u0442\u0430",
                        path: ""
                    }
                ],
                imgPath: "",
                cardactions: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 ",
            },
            {
                title: "",
                description: "",
                additional: [
                    {
                        title: "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0444\u0456\u0437\u0438\u0447\u043D\u043E\u044E \u043E\u0441\u043E\u0431\u043E\u044E-\u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0446\u0435\u043C",
                        path: ""
                    }
                ],
                imgPath: "",
                cardactions: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 ",
            }
        ];
        this.sendToEmailForm = false;
        title.setTitle('Дом юриста - Консультації');
        meta.addTags([
            { name: 'key', content: 'юриспруденция, договір, консультації' },
            { name: 'description', content: 'консультації' }
        ]);
    }
    ConsultationComponent.prototype.ngOnInit = function () {
    };
    ConsultationComponent.prototype.sendToEmail = function () {
        console.log('send to email');
        this.sendToEmailForm = !this.sendToEmailForm;
    };
    ConsultationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultation',
            template: __webpack_require__(/*! ./consultation.component.html */ "./src/app/components/pages/consultation/consultation.component.html"),
            styles: [__webpack_require__(/*! ./consultation.component.css */ "./src/app/components/pages/consultation/consultation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]])
    ], ConsultationComponent);
    return ConsultationComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/contracts/contracts.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/contracts/contracts.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n.wraper-descriptions {\r\n  height: 25.125em;\r\n  width: 100%;\r\n  background-color: #F1F1F1;\r\n  margin: 3em 0;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 3em 0;\r\n}\r\n.description-agreement {\r\n  margin-top: 2em;\r\n  width: 80%;\r\n}\r\n.work-agreement {\r\n  background-color: #F1F1F1;\r\n  padding-top: 2.125em;\r\n  /*height: 82vh;*/\r\n  height: 30em;\r\n}\r\n.work-agreement .h1 {\r\n  margin: auto auto .5em;\r\n}\r\n.agreement-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n.work-agreement .img-wraper {\r\n  width: 18em;\r\n}\r\n.work-agreement .img-wraper img {\r\n  width: 100%;\r\n}\r\n.description-title {\r\n  transition: all .3s;\r\n}\r\n.tags {\r\n  margin-top: 1em;\r\n}\r\n.buy-subscription {\r\n  margin-top: 3em;\r\n}\r\n.buy-subscription p{\r\n  margin-bottom: 1em;\r\n}\r\n.btn-wrapper {\r\n  margin-top: 1em;\r\n}\r\n.btn-wrapper button {\r\n  font-weight: 100;\r\n  color: #0067B8;\r\n  font-size: 1.125em;\r\n}\r\n.btn-wrapper button img {\r\n  width: 1em;\r\n}\r\n.agreement-row .modal-wraper {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n\r\n}\r\n.agreement-row .modal-wraper .h1 {\r\n  color: white;\r\n}\r\n.agreement-row .modal-wraper .document-items {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.agreement-row .modal-wraper .arrow-btn {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color: white;\r\n  width: 16em;\r\n}\r\n.agreement-row .modal-wraper .material-icons {\r\n  font-size: 2em;\r\n}\r\n.agreement-row .modal-wraper .mat-fab {\r\n  border: .0625em solid white;\r\n  margin-bottom: 1em;\r\n}\r\n.agreement-row .modal-wraper .mat-fab.mat-accent {\r\n  background-color: transparent;\r\n\r\n}\r\n.agreement-row .modal-wraper li img {\r\n  height: 75vh;\r\n}\r\n.action-bay {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.action-bay  button {\r\n  background: #0067B8;\r\n  color: white;\r\n  margin-right: 1em;\r\n}\r\n.action-bay a{\r\n  font-weight: 100;\r\n  text-decoration: underline;\r\n  color: #0067B8;\r\n}\r\n.action-bay img{\r\n  width: .5em;\r\n}\r\n.content-wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 1.5em;\r\n}\r\n.title-content {\r\n  font-size: 1.5em;\r\n  font-family: \"Segoe UI\";\r\n  font-weight: 400;\r\n  margin-bottom: 1em;\r\n}\r\n.tringle {\r\n  position: absolute;\r\n  top: -3.125em;\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 3.125em solid transparent;\r\n  border-right: 3.125em solid transparent;\r\n  border-bottom: 3.125em solid #F1F1F1;\r\n  transition: all .3s;\r\n}\r\n.tringle.first {\r\n  left: 6.250em;\r\n}\r\n.tringle.second {\r\n  left: 31.25em;\r\n\r\n}\r\n.tringle.third {\r\n  right: 7.250em;\r\n}\r\n.arrow {\r\n  width: 1.5em;\r\n  height: 5em;\r\n  background-color: #4A4A4A;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/pages/contracts/contracts.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/contracts/contracts.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<section class=\"work-agreement\">\n\n  <div class=\"container\">\n\n    <div class=\"agreement-row\">\n\n      <div class=\"col-wraper\">\n\n        <button class=\"blue btn-left\" mat-button><mat-icon>navigate_before</mat-icon> Назад</button>\n\n        <div class=\"title\">\n          <h1 class=\"h1\">Договір підряду</h1>\n        </div>\n\n        <div class=\"rating-wrapper\">\n          <app-rating></app-rating>\n        </div>\n\n        <div class=\"description-agreement\">\n          Цивільно-правовий договір, за яким одна сторона (підрядник) зобов'язується на свій ризик виконати\n          певну роботу за завданням другої сторони (замовника),\n          а замовник зобов'язується прийняти та оплатити виконану роботу.\n        </div>\n\n        <div class=\"tags\">\n          <app-tags></app-tags>\n        </div>\n\n        <div class=\"buy-subscription\">\n          <p>Придбайте підписку, щоб почати працювати з документом</p>\n\n          <div class=\"action-bay\">\n            <button mat-button>Придбати</button>\n            <a href=\"#\">\n              <img src=\"assets/img/info-ico.svg\" alt=\"\">\n              Що це мені дає?\n            </a>\n          </div>\n\n        </div>\n\n      </div>\n      <div class=\"col-wraper\">\n        <div class=\"img-wraper\">\n          <img src=\"assets/img/doclarge.jpg\" alt=\"\">\n        </div>\n        <div class=\"btn-wrapper text-center\">\n          <button mat-button (click)=\"openModal($event)\">\n            <img src=\"assets/img/eye-ico.svg\" alt=\"\">\n            Перегянути\n          </button>\n        </div>\n      </div>\n\n      <div class=\"layout\" *ngIf=\"modalIsOpen\" >\n        <div class=\"close-layout\">\n          <i class=\"material-icons\" (click)=\"openModal($event)\">close</i>\n        </div>\n        <div class=\"modal-wraper\">\n\n          <div class=\"title text-center\">\n            <h1 class=\"h1\">Договір підряду</h1>\n          </div>\n          <div class=\"document-items\">\n\n            <div class=\"arrow-btn\">\n\n              <button mat-fab>\n                <mat-icon>arrow_back</mat-icon>\n              </button>\n\n              Попередній документ\n\n            </div>\n            <!--/arrow-btn-->\n\n            <ul>\n              <li>\n                <img src=\"assets/img/doclarge.jpg\" alt=\"\">\n              </li>\n            </ul>\n            <!--/ul-->\n\n            <div class=\"arrow-btn\">\n\n              <button mat-fab>\n                <mat-icon>arrow_forward</mat-icon>\n              </button>\n\n              Наступний документ\n\n            </div>\n            <!--/arrow-btn-->\n\n          </div>\n          <!--/document-items-->\n        </div>\n        <!--/modal-wraper-->\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</section>\n<!--/work-agreement-->\n\n<section class=\"similar\">\n\n  <div class=\"container\">\n\n    <div class=\"title\">\n      <h1 class=\"h1\">Інші схожі документи</h1>\n    </div>\n\n    <div class=\"wrapper\">\n      <div class=\"card\" *ngFor=\"let carditem of similar\">\n        <app-card-item [carditem]=\"carditem\" [configStyle]=\"similarStyle\"></app-card-item>\n      </div>\n    </div>\n\n  </div>\n\n</section>\n<!--/similar-->\n\n<section class=\"advice\">\n\n  <div class=\"container\">\n\n    <div class=\"title\">\n      <h1 class=\"h1\">Поради до цього документу</h1>\n    </div>\n\n    <div class=\"wrapper\">\n      <div class=\"card\" *ngFor=\"let carditem of advice\">\n        <app-card-item [carditem]=\"carditem\" [configStyle]=\"carditem.styleOption\" [btn]=\"true\" (opentab)=\"onTab($event)\"></app-card-item>\n      </div>\n    </div>\n\n    <div class=\"wraper-descriptions\">\n      <span [ngClass]=\"classTab\" class=\"tringle\"></span>\n\n      <div class=\"arrow left\"></div>\n\n      <div class=\"content-wrapper\">\n        <div class=\"title-content\">{{adviceTabTitle}}</div>\n        <div class=\"description-title\">\n          {{adviceTabText}}\n        </div>\n      </div>\n\n      <div class=\"arrow left\"></div>\n\n\n    </div>\n\n  </div>\n\n</section>\n<!--/advice-->\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/pages/contracts/contracts.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/contracts/contracts.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContractsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsComponent", function() { return ContractsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContractsComponent = /** @class */ (function () {
    function ContractsComponent(title, meta) {
        this.title = title;
        this.meta = meta;
        this.imgpath = 'assets/img/'; // img path
        this.similar = [
            {
                title: "\u0414\u043E\u0433\u043E\u0432\u0456\u0440 \u043F\u043E\u0440\u0443\u043A\u0438",
                description: "",
                additional: [
                    {
                        title: "",
                        path: ""
                    }
                ],
                imgPath: this.imgpath + "document.jpg",
                cardactions: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438",
            },
            {
                title: "\u0414\u043E\u0433\u043E\u0432\u0456\u0440 \u043F\u043E\u0440\u0443\u043A\u0438",
                description: "",
                additional: [
                    {
                        title: "",
                        path: "#"
                    },
                ],
                imgPath: this.imgpath + "document.jpg",
                cardactions: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438",
            },
            {
                title: "\u0414\u043E\u0433\u043E\u0432\u0456\u0440 \u043F\u043E\u0440\u0443\u043A\u0438",
                description: "",
                additional: [
                    {
                        title: "",
                        path: "#"
                    }
                ],
                imgPath: this.imgpath + "document.jpg",
                cardactions: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438",
            }
        ];
        this.similarStyle = 'similar-document';
        this.advice = [
            {
                title: "\u0412\u0430\u0436\u043B\u0438\u0432\u043E \u0437\u043D\u0430\u0442\u0438",
                description: "\u0422\u0443\u0442 \u0431\u0443\u0434\u0435 \u043E\u043F\u0438\u0441 \u043F\u0440\u0438\u043C\u0456\u0442\u043A\u0438, \u0430\u043B\u0435 \u043D\u0435 \u043F\u043E\u0432\u043D\u0438\u0439. \u0414\u043B\u044F \u043F\u043E\u0432\u043D\u043E\u0433\u043E \u0442\u0440\u0435\u0431\u0430 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438.",
                additional: [
                    {
                        title: "",
                        path: ""
                    }
                ],
                imgPath: "",
                cardactions: "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435",
                styleOption: "first"
            },
            {
                title: "\u0429\u043E \u043F\u043E\u0447\u0438\u0442\u0430\u0442\u0438",
                description: "\u0422\u0443\u0442 \u0431\u0443\u0434\u0435 \u043E\u043F\u0438\u0441 \u043F\u0440\u0438\u043C\u0456\u0442\u043A\u0438, \u0430\u043B\u0435 \u043D\u0435 \u043F\u043E\u0432\u043D\u0438\u0439. \u0414\u043B\u044F \u043F\u043E\u0432\u043D\u043E\u0433\u043E \u0442\u0440\u0435\u0431\u0430 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438.",
                additional: [
                    {
                        title: "",
                        path: "#"
                    },
                ],
                imgPath: "",
                cardactions: "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435",
                styleOption: "second"
            },
            {
                title: "\u0417\u0432\u0435\u0440\u043D\u0456\u0442\u044C \u0443\u0432\u0430\u0433\u0443",
                description: "\u0422\u0443\u0442 \u0431\u0443\u0434\u0435 \u043E\u043F\u0438\u0441 \u043F\u0440\u0438\u043C\u0456\u0442\u043A\u0438, \u0430\u043B\u0435 \u043D\u0435 \u043F\u043E\u0432\u043D\u0438\u0439. \u0414\u043B\u044F \u043F\u043E\u0432\u043D\u043E\u0433\u043E \u0442\u0440\u0435\u0431\u0430 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438.",
                additional: [
                    {
                        title: "",
                        path: "#"
                    }
                ],
                imgPath: "",
                cardactions: "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435",
                styleOption: "third"
            }
        ];
        this.adviceTab = [
            {
                title: "\u0412\u0430\u0436\u043B\u0438\u0432\u043E \u0437\u043D\u0430\u0442\u0438",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n          Aliquam asperiores nisi obcaecati, quas similique voluptatum. Ad alias aut, consequatur corporis,\n          doloremque dolores ea eaque error ex iste laborum libero modi nesciunt nobis obcaecati\n          odit omnis optio perspiciatis provident quasi quibusdam quod sequi, sint sit soluta tenetur\n          veritatis voluptatibus!",
                additional: [
                    {
                        title: "",
                        path: ""
                    }
                ],
                imgPath: "",
                cardactions: "",
                styleOption: "first"
            },
            {
                title: "\u0429\u043E \u043F\u043E\u0447\u0438\u0442\u0430\u0442\u0438",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n          Aliquam asperiores nisi obcaecati, quas similique voluptatum. Ad alias aut, consequatur corporis,\n          doloremque dolores ea eaque error ex iste laborum libero modi nesciunt nobis obcaecati\n          odit omnis optio perspiciatis provident quasi quibusdam quod sequi, sint sit soluta tenetur\n          veritatis voluptatibus! Distinctio facere iste nihil odio vitae. Ad commodi delectus dolores ea enim error\n          est harum id impedit incidunt iste iure laboriosam laborum modi nemo nesciunt provident quae quaerat qui,\n          recusandae suscipit, totam unde. Accusamus asperiores aspernatur at,\n          consequuntur cum ea eum excepturi inventore laborum maiores nulla porro,\n          quaerat quia, quisquam unde veritatis!",
                additional: [
                    {
                        title: "",
                        path: "#"
                    },
                ],
                imgPath: "",
                cardactions: "",
                styleOption: "second"
            },
            {
                title: "\u0417\u0432\u0435\u0440\u043D\u0456\u0442\u044C \u0443\u0432\u0430\u0433\u0443",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n          Aliquam asperiores nisi obcaecati, quas similique voluptatum. Ad alias aut, consequatur corporis,\n          doloremque dolores ea eaque error ex iste laborum libero modi nesciunt nobis obcaecati\n          odit omnis optio perspiciatis provident quasi quibusdam quod sequi, sint sit soluta tenetur\n          veritatis voluptatibus! Distinctio facere iste nihil odio vitae. Ad commodi delectus dolores ea enim error\n          est harum id impedit incidunt iste iure laboriosam laborum modi nemo nesciunt provident quae quaerat qui,\n          recusandae suscipit, totam unde. Accusamus asperiores aspernatur at,\n          consequuntur cum ea eum excepturi inventore laborum maiores nulla porro,\n          quaerat quia, quisquam unde veritatis! Distinctio facere iste nihil odio vitae. Ad commodi delectus dolores ea enim error\n          est harum id impedit incidunt iste iure laboriosam laborum modi nemo nesciunt provident quae quaerat qui,\n          recusandae suscipit, totam unde. Accusamus asperiores aspernatur at,\n          consequuntur cum ea eum excepturi inventore laborum maiores nulla porro,\n          quaerat quia, quisquam unde veritatis!",
                additional: [
                    {
                        title: "",
                        path: "#"
                    }
                ],
                imgPath: "",
                cardactions: "",
                styleOption: "third"
            }
        ];
        this.classTab = 'first';
        title.setTitle('Дом юриста - Договір підряду');
        meta.addTags([
            { name: 'key', content: 'юриспруденция, договір' },
            { name: 'description', content: 'Договір підряду' }
        ]);
    }
    ContractsComponent.prototype.ngOnInit = function () {
        this.onTabContent('first');
        this.modalIsOpen = false;
    };
    // Toggle tabs
    ContractsComponent.prototype.onTab = function (e) {
        if (e === 'first') {
            this.classTab = e;
        }
        if (e === 'second') {
            this.classTab = e;
        }
        if (e === 'third') {
            this.classTab = e;
        }
        this.onTabContent(e);
    };
    ContractsComponent.prototype.onTabContent = function (e) {
        var _this = this;
        this.adviceTab.filter(function (tab) {
            tab.styleOption === e ? _this.adviceTabTitle = tab.title : tab;
            tab.styleOption === e ? _this.adviceTabText = tab.description : tab;
        });
    };
    ContractsComponent.prototype.openModal = function (e) {
        console.log('click', e);
        this.modalIsOpen = !this.modalIsOpen;
    };
    ContractsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contracts',
            template: __webpack_require__(/*! ./contracts.component.html */ "./src/app/components/pages/contracts/contracts.component.html"),
            styles: [__webpack_require__(/*! ./contracts.component.css */ "./src/app/components/pages/contracts/contracts.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]])
    ], ContractsComponent);
    return ContractsComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/home/home.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-search {\r\n  background-color: rgba(0,0,0,.27);\r\n}\r\n.input-wrapper {\r\n  width: 56em;\r\n}\r\n.search-wrapper {\r\n  height: 24.75em;\r\n  background: url('main-search-bg.jpg') no-repeat top center / cover;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n}\r\n.search-title {\r\n  font-size: 2.3125em;\r\n  color: white;\r\n  margin-bottom: .5em;\r\n  transition: .3s;\r\n  font-family: 'Futura PT';\r\n  text-align: center;\r\n  padding-right: 1.5em;\r\n}\r\n.search-title.search-is-active {\r\n  visibility: hidden;\r\n  transition: .3s;\r\n  opacity: 0;\r\n}\r\n.search-title.search-out {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: .3s;\r\n}\r\n.search-subtitle {\r\n  color: white;\r\n  font-size: 1.125em;\r\n  margin-bottom: .5em;\r\n}\r\n.search-subtitle.search-is-active {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: .3s;\r\n}\r\n.search-subtitle.search-out {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: .3s;\r\n}\r\n.wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.title {\r\n  text-align: center;\r\n  font-weight: 400;\r\n  font-size: 1.875em;\r\n  padding: 1.6em 0;\r\n}\r\n.main-nav {\r\n  background-color: #3484C8;\r\n}\r\n.main-nav ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n.main-nav li {\r\n  width: 9.5625em;\r\n  height: 10em;\r\n}\r\n.main-nav li:hover {\r\n  background-color: #175B95;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<section class=\"main-search\">\r\n  <div class=\"search-wrapper\">\r\n    <div class=\"search-form\">\r\n      <div [ngClass]=\"isTitleClassToggleOn\" class=\"search-title\">В нас є рішення вашої юридичної проблеми</div>\r\n\r\n      <div [ngClass]=\"isTitleClassToggleOn\" class=\"search-subtitle\">Що саме ви шукаєте?</div>\r\n\r\n      <div class=\"input-wrapper\">\r\n        <app-search (searchresult)=\"getSearchResult($event)\"></app-search>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"main-nav\">\r\n  <nav>\r\n    <ul>\r\n      <li *ngFor=\"let item of mainnavigation\">\r\n        <app-main-nav [item]=\"item\"></app-main-nav>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</section>\r\n\r\n<section class=\"item-box\">\r\n  <div class=\"box\" *ngFor=\"let box of itembox\">\r\n    <app-item-box [box]=\"box\"></app-item-box>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"container\">\r\n\r\n  <section class=\"recommendations\">\r\n    <div class=\"title\">Рекомендації експертів</div>\r\n    <div class=\"wrapper\">\r\n      <div class=\"card\" *ngFor=\"let carditem of recommendations\">\r\n        <app-card-item [carditem]=\"carditem\"></app-card-item>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"best-decision\">\r\n    <div class=\"title\">Найкращі рішення</div>\r\n    <div class=\"wrapper\">\r\n      <div class=\"card\" *ngFor=\"let carditem of bestdecision\">\r\n        <app-card-item [carditem]=\"carditem\"></app-card-item>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(title, meta) {
        this.title = title;
        this.meta = meta;
        this.imgpath = 'assets/img/'; // img path
        this.isTitleClassToggleOn = {};
        this.onsearch = false;
        this.mainnavigation = [
            {
                title: 'Документи',
                imgPath: this.imgpath + "main-nav-ico-1.svg",
                actions: '#',
            },
            {
                title: 'Консультація',
                imgPath: this.imgpath + "main-nav-ico-2.svg",
                actions: '#',
            },
            {
                title: 'Готуюся до суду',
                imgPath: this.imgpath + "main-nav-ico-3.svg",
                actions: '#',
            },
            {
                title: 'Все для бізнесу',
                imgPath: this.imgpath + "main-nav-ico-4.svg",
                actions: '#',
            },
            {
                title: 'Калькулятори',
                imgPath: this.imgpath + "main-nav-ico-5.svg",
                actions: '#',
            },
            {
                title: 'Знайти адвоката',
                imgPath: this.imgpath + "main-nav-ico-6.svg",
                actions: '#',
            },
            {
                title: 'Кадровик',
                imgPath: this.imgpath + "main-nav-ico-7.svg",
                actions: '#',
            }
        ];
        this.itembox = [
            {
                title: 'Дом юриста - юридичні інновації для життя та бізнесу',
                descriptions: 'Мета Дом юриста - зробити юридичні послуги доступними для кожного громадянина України через автоматизацію.',
                imgPath: this.imgpath + "box-Image.jpg",
                cardactions: '#',
            }
        ];
        this.recommendations = [
            {
                title: "\u042F\u043A \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0422\u041E\u0412: 5 \u043F\u043E\u0440\u0430\u0434",
                description: "\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0456 \u044E\u0440\u0438\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \"\u0414\u043E\u043C \u044E\u0440\u0438\u0441\u0442\u0430\" \u0434\u0430\u043B\u0438 5 \u043F\u043E\u0440\u0430\u0434,\n       \u044F\u043A\u0456 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443\u0442\u044C \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u043C \u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0446\u044F\u043C \u0437 \u043B\u0435\u0433\u043A\u0456\u0441\u0442\u044E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0441\u0432\u0456\u0439 \u0431\u0456\u0437\u043D\u0435\u0441.",
                imgPath: this.imgpath + "card-Image-1.jpg",
                cardactions: 'Читати',
            },
            {
                title: "\u042F\u043A \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0422\u041E\u0412: 5 \u043F\u043E\u0440\u0430\u0434",
                description: "\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0456 \u044E\u0440\u0438\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \"\u0414\u043E\u043C \u044E\u0440\u0438\u0441\u0442\u0430\" \u0434\u0430\u043B\u0438 5 \u043F\u043E\u0440\u0430\u0434,\n       \u044F\u043A\u0456 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443\u0442\u044C \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u043C \u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0446\u044F\u043C \u0437 \u043B\u0435\u0433\u043A\u0456\u0441\u0442\u044E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0441\u0432\u0456\u0439 \u0431\u0456\u0437\u043D\u0435\u0441.",
                imgPath: this.imgpath + "card-Image-2.jpg",
                cardactions: 'Читати',
            },
            {
                title: "\u042F\u043A \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0422\u041E\u0412: 5 \u043F\u043E\u0440\u0430\u0434",
                description: "\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0456 \u044E\u0440\u0438\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \"\u0414\u043E\u043C \u044E\u0440\u0438\u0441\u0442\u0430\" \u0434\u0430\u043B\u0438 5 \u043F\u043E\u0440\u0430\u0434,\n       \u044F\u043A\u0456 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443\u0442\u044C \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u043C \u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0446\u044F\u043C \u0437 \u043B\u0435\u0433\u043A\u0456\u0441\u0442\u044E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0441\u0432\u0456\u0439 \u0431\u0456\u0437\u043D\u0435\u0441.",
                imgPath: this.imgpath + "card-Image-3.jpg",
                cardactions: 'Читати',
            }
        ];
        this.bestdecision = [
            {
                title: "",
                description: "",
                additional: [
                    {
                        title: "\u042F\u043A \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D \u0432 Jusnote?",
                        path: "#"
                    },
                    {
                        title: "\u042F\u043A \u043A\u0443\u043F\u0438\u0442\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u0414\u043E\u043C \u044E\u0440\u0438\u0441\u0442\u0430?",
                        path: "#"
                    },
                ],
                imgPath: "",
                cardactions: "",
            },
            {
                title: "",
                description: "",
                additional: [
                    {
                        title: "\u042F\u043A \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D \u0432 Jusnote?",
                        path: "#"
                    },
                    {
                        title: "\u042F\u043A \u043A\u0443\u043F\u0438\u0442\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u0414\u043E\u043C \u044E\u0440\u0438\u0441\u0442\u0430?",
                        path: "#"
                    },
                ],
                imgPath: "",
                cardactions: "",
            },
            {
                title: "",
                description: "",
                additional: [
                    {
                        title: "\u042F\u043A \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D \u0432 Jusnote?",
                        path: "#"
                    },
                    {
                        title: "\u042F\u043A \u043A\u0443\u043F\u0438\u0442\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u0414\u043E\u043C \u044E\u0440\u0438\u0441\u0442\u0430?",
                        path: "#"
                    },
                ],
                imgPath: "",
                cardactions: "",
            }
        ];
        title.setTitle('Дом юриста');
        meta.addTags([
            { name: 'key', content: 'юриспруденция' },
            { name: 'description', content: 'Юридические услуги' }
        ]);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.setIsTitleClassToggleOn();
    };
    HomeComponent.prototype.getSearchResult = function (e) {
        console.log(e);
        e !== '' ? this.onsearch = true : this.onsearch = false;
        this.setIsTitleClassToggleOn();
    };
    HomeComponent.prototype.setIsTitleClassToggleOn = function () {
        this.isTitleClassToggleOn = {
            'search-is-active': this.onsearch,
            'search-out': !this.onsearch,
        };
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/rating/rating.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/rating/rating.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.rating {\r\n  color: #ACACAC;\r\n  font-size: .875em;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n.title {\r\n  margin-left: 1em;\r\n}\r\n.radio-btn {\r\n  display: none;\r\n}\r\nlabel {\r\n  float: right;\r\n  display: inline;\r\n  padding: 0;\r\n  margin: 0;\r\n  position: relative;\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  cursor: pointer;\r\n  color: #F88400;\r\n}\r\nlabel i {\r\n  /*line-height: unset;*/\r\n}\r\nlabel i.star-set {\r\n  display: none;\r\n}\r\nlabel:hover i.star-set,\r\nlabel:hover ~ label i.star-set {\r\n  display: block;\r\n}\r\nlabel:hover i.star-border,\r\nlabel:hover ~ label i.star-border {\r\n  display: none;\r\n}\r\ninput.radio-btn:checked ~ label i.star-set {\r\n  display: block;\r\n}\r\ninput.radio-btn:checked ~ label i.star-border {\r\n  display: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/rating/rating.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/rating/rating.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rating\">\n\n  <div class=\"title\">Оцінити</div>\n\n  <input id=\"star5\" name=\"star\" type=\"radio\" value=\"5\" class=\"radio-btn\">\n  <label for=\"star5\">\n    <i class=\"material-icons star-border\">star_border</i>\n    <i class=\"material-icons star-set\">star</i>\n  </label>\n\n  <input id=\"star4\" name=\"star\" type=\"radio\" value=\"4\" class=\"radio-btn\">\n  <label for=\"star4\">\n    <i class=\"material-icons star-border\">star_border</i>\n    <i class=\"material-icons star-set\">star</i>\n  </label>\n\n  <input id=\"star3\" name=\"star\" type=\"radio\" value=\"3\" class=\"radio-btn\">\n  <label for=\"star3\">\n    <i class=\"material-icons star-border\">star_border</i>\n    <i class=\"material-icons star-set\">star</i>\n  </label>\n\n  <input id=\"star2\" name=\"star\" type=\"radio\" value=\"2\" class=\"radio-btn\">\n  <label for=\"star2\">\n    <i class=\"material-icons star-border\">star_border</i>\n    <i class=\"material-icons star-set\">star</i>\n  </label>\n\n  <input id=\"star1\" name=\"star\" type=\"radio\" value=\"1\" class=\"radio-btn\">\n  <label for=\"star1\">\n    <i class=\"material-icons star-border\">star_border</i>\n    <i class=\"material-icons star-set\">star</i>\n  </label>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/rating/rating.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/rating/rating.component.ts ***!
  \*******************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/components/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.css */ "./src/app/components/rating/rating.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-element-input {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.search-line {\r\n  display: inherit;\r\n  flex-direction: row;\r\n  background-color: white;\r\n  padding: .5em ;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n.btn-wrapper {\r\n  display: inline-flex;\r\n}\r\n.btn-wrapper button {\r\n  margin-right: .5em;\r\n}\r\nbutton.primary {\r\n  background-color: #3484C8;\r\n  color: white;\r\n}\r\nbutton.defoult {\r\n  background-color: #E8E8E8;\r\n  color:black;\r\n}\r\nbutton.btn-voice {\r\n  color: #3484C8;\r\n  height: 3em;\r\n  width: 3em;\r\n  margin-left: 2em;\r\n}\r\n.input-wrapper {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n.search-input {\r\n  width: 100%;\r\n  border: transparent;\r\n  padding: 0 .5em;\r\n  font-size: 1.125em;\r\n  height: 40px;\r\n}\r\n.preloader-spiner {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n  border-radius: 50%;\r\n}\r\n.preloader-spiner img {\r\n  width: 100%;\r\n  -webkit-animation: spin  1.5s infinite linear;\r\n          animation: spin  1.5s infinite linear;\r\n}\r\n@keyframes spin {\r\n  from{\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@-webkit-keyframes spin {\r\n  from{\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\ninput:focus {\r\n  border: transparent;\r\n  outline: transparent;\r\n}\r\n/* input placeholder */\r\ninput::-moz-input-placeholder{\r\n  transition: opacity 0.35s ease-in-out;\r\n  opacity: .8;\r\n  font-size: 1.125em;\r\n}\r\ninput::-webkit-input-placeholder{\r\n  transition: opacity 0.35s ease-in-out;\r\n  opacity: .8;\r\n  font-size: 1.125em;\r\n}\r\ninput::-ms-input-placeholder{\r\n  transition: opacity 0.35s ease-in-out;\r\n  opacity: .8;\r\n  font-size: 1.125em;\r\n}\r\n/* input placeholder hover */\r\ninput:hover::-moz-input-placeholder{\r\n     opacity: 1;\r\n}\r\ninput:hover::-webkit-input-placeholder{\r\n  opacity: 1;\r\n}\r\ninput:hover::-ms-input-placeholder{\r\n  opacity: 1;\r\n}\r\n/* input placeholder focus */\r\ninput:focus::-moz-input-placeholder{\r\n     opacity: 0;\r\n}\r\ninput:focus::-webkit-input-placeholder{\r\n  opacity: 0;\r\n}\r\ninput:focus::-ms-input-placeholder{\r\n  opacity: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-element-input\">\n\n  <div class=\"search-line\">\n\n    <div *ngIf=\"query\" class=\"btn-wrapper\">\n      <button mat-button class=\"primary\">Договір</button>\n      <button mat-button class=\"defoult\">Консультація</button>\n    </div>\n\n    <div class=\"input-wrapper\">\n      <input\n        class=\"search-input\"\n        type=\"text\"\n        placeholder=\"Будь ласка, введіть те, що ви шукаєте або те, що вас турбує\"\n        [(ngModel)]=\"query\"\n        name=\"query\"\n        (ngModelChange)=\"onSerch()\"\n      >\n      <button\n        mat-button\n        *ngIf=\"query\"\n        matSuffix\n        mat-icon-button\n        aria-label=\"Clear\"\n        (click)=\"onSerch(query = '')\"\n      >\n        <mat-icon>close</mat-icon>\n      </button>\n    </div>\n    \n    <span class=\"preloader-spiner\" *ngIf=\"query\">\n      <img src=\"assets/img/preload-ico.png\" alt=\"\">\n    </span>\n\n  </div>\n\n  <button\n    mat-button\n\n    mat-icon-button\n    class=\"btn-voice defoult\"\n  >\n    <mat-icon>mic_none</mat-icon>\n  </button>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FormBuilder, FormGroup } from '@angular/forms';
var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.searchresult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.options = 'never';
        this.query = '';
        // this.options = fb.group({
        //   hideRequired: false,
        //   floatLabel: 'never',
        // });
    }
    SearchComponent.prototype.ngOnInit = function () {
        console.log();
    };
    // Get result of search
    SearchComponent.prototype.onSerch = function () {
        this.searchresult.emit(this.query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "searchresult", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/social-net/social-net.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/social-net/social-net.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/social-net/social-net.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/social-net/social-net.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  social-net works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/social-net/social-net.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/social-net/social-net.component.ts ***!
  \***************************************************************/
/*! exports provided: SocialNetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialNetComponent", function() { return SocialNetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialNetComponent = /** @class */ (function () {
    function SocialNetComponent() {
    }
    SocialNetComponent.prototype.ngOnInit = function () {
    };
    SocialNetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-net',
            template: __webpack_require__(/*! ./social-net.component.html */ "./src/app/components/social-net/social-net.component.html"),
            styles: [__webpack_require__(/*! ./social-net.component.css */ "./src/app/components/social-net/social-net.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialNetComponent);
    return SocialNetComponent;
}());



/***/ }),

/***/ "./src/app/components/tags/tags.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/tags/tags.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.headline {\r\n  margin-right: .5em;\r\n  font-family: \"Segoe UI\";\r\n  /*font-style: italic;*/\r\n  /*font-size: .875em;*/\r\n  /*color: #535353;*/\r\n}\r\n.headline, tag{\r\n  /*font-style: italic;*/\r\n}\r\n.tag {\r\n  color: #0067B8;\r\n}\r\nspan + span::before {\r\n  content: ',';\r\n  margin-right: 1em;\r\n  color: #0067B8;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/tags/tags.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/tags/tags.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n  <div class=\"headline\">Стосується до:</div>\n  <div class=\"tags\">\n    <span *ngFor=\"let item of tugItems\"><a class=\"tag\" href=\"{{item.path}}\">{{item.title}}</a></span>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/tags/tags.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/tags/tags.component.ts ***!
  \***************************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TagsComponent = /** @class */ (function () {
    function TagsComponent() {
        this.tugItems = [
            {
                title: 'малого бізнесу',
                path: '#'
            },
            {
                title: 'приватних підприємців',
                path: '#'
            },
        ];
    }
    TagsComponent.prototype.ngOnInit = function () {
    };
    TagsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(/*! ./tags.component.html */ "./src/app/components/tags/tags.component.html"),
            styles: [__webpack_require__(/*! ./tags.component.css */ "./src/app/components/tags/tags.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./src/app/services/footer.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/footer.service.ts ***!
  \********************************************/
/*! exports provided: FooterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterService", function() { return FooterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterService = /** @class */ (function () {
    function FooterService() {
        this.imgpath = 'assets/img/';
    }
    FooterService.prototype.getItemList = function () {
        return this.items = [
            {
                title: 'Що нового?',
                itemsgroup: [
                    {
                        title: 'Блог Дом юриста',
                        path: '#'
                    },
                    {
                        title: 'Новини компанії',
                        path: '#'
                    }
                ]
            },
            {
                title: 'Про компанію',
                itemsgroup: [
                    {
                        title: 'Технічна підтримка',
                        path: '#'
                    },
                    {
                        title: 'Рекламодавцям',
                        path: '#'
                    },
                    {
                        title: 'Кодекс етики',
                        path: '#'
                    },
                    {
                        title: 'Інвестори',
                        path: '#'
                    },
                    {
                        title: 'Команда',
                        path: '#'
                    }
                ]
            },
            {
                title: 'Для бізнесу',
                itemsgroup: [
                    {
                        title: 'Консультація юриста',
                        path: '#'
                    },
                    {
                        title: 'Реєстрація ФОП',
                        path: '#'
                    },
                    {
                        title: 'Реєстрація ТОВ',
                        path: '#'
                    },
                    {
                        title: 'Кадри онлайн',
                        path: '#'
                    }
                ]
            },
            {
                title: 'Документи',
                itemsgroup: [
                    {
                        title: 'Перевірити договір',
                        path: '#'
                    },
                    {
                        title: 'Конструктор документів',
                        path: '#'
                    }
                ]
            },
            {
                title: 'Додатково',
                itemsgroup: [
                    {
                        title: 'Дом юриста Analytics',
                        path: '#'
                    },
                    {
                        title: 'Creative Agency',
                        path: '#'
                    }
                ]
            }
        ];
    };
    FooterService.prototype.getScocialNet = function () {
        return this.socnets = [
            {
                path: this.imgpath + "facebook-logo.svg",
                link: 'https://facebook.com',
            },
            {
                path: this.imgpath + "Instagram_logo.svg",
                link: 'https://Instagram.com',
            },
            {
                path: this.imgpath + "twitter-logo.svg",
                link: 'https://twitter.com',
            },
            {
                path: this.imgpath + "youtube-logo.svg",
                link: 'https://youtube.com',
            }
        ];
    };
    FooterService.prototype.getProductsItem = function () {
        return this.proditems = [
            {
                path: this.imgpath + "analitica-logo.svg",
                link: '#',
            },
            {
                path: this.imgpath + "jusnote.svg",
                link: '#',
            },
            {
                path: this.imgpath + "creative.svg",
                link: '#',
            }
        ];
    };
    FooterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FooterService);
    return FooterService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WORK\urist\front\domurista\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
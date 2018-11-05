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

module.exports = "\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n\n<app-consultation></app-consultation>\n\n<app-contracts></app-contracts>\n\n<app-batch-proposition></app-batch-proposition>\n\n<app-government-agency></app-government-agency>\n\n<app-govermment-search></app-govermment-search>\n\n<app-list-documents></app-list-documents>\n\n\n\n"

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
/* harmony import */ var _components_pages_batch_proposition_batch_proposition_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/batch-proposition/batch-proposition.component */ "./src/app/components/pages/batch-proposition/batch-proposition.component.ts");
/* harmony import */ var _components_pages_government_agency_government_agency_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/government-agency/government-agency.component */ "./src/app/components/pages/government-agency/government-agency.component.ts");
/* harmony import */ var _components_gmaps_gmaps_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/gmaps/gmaps.component */ "./src/app/components/gmaps/gmaps.component.ts");
/* harmony import */ var _components_best_decision_best_decision_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/best-decision/best-decision.component */ "./src/app/components/best-decision/best-decision.component.ts");
/* harmony import */ var _components_pages_govermment_search_govermment_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/govermment-search/govermment-search.component */ "./src/app/components/pages/govermment-search/govermment-search.component.ts");
/* harmony import */ var _components_search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/search-filter/search-filter.component */ "./src/app/components/search-filter/search-filter.component.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/app/components/pagination/pagination.component.ts");
/* harmony import */ var _components_border_border_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/border/border.component */ "./src/app/components/border/border.component.ts");
/* harmony import */ var _components_pages_list_documents_list_documents_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/pages/list-documents/list-documents.component */ "./src/app/components/pages/list-documents/list-documents.component.ts");
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
                _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_19__["TagsComponent"],
                _components_pages_batch_proposition_batch_proposition_component__WEBPACK_IMPORTED_MODULE_20__["BatchPropositionComponent"],
                _components_pages_government_agency_government_agency_component__WEBPACK_IMPORTED_MODULE_21__["GovernmentAgencyComponent"],
                _components_gmaps_gmaps_component__WEBPACK_IMPORTED_MODULE_22__["GmapsComponent"],
                _components_best_decision_best_decision_component__WEBPACK_IMPORTED_MODULE_23__["BestDecisionComponent"],
                _components_pages_govermment_search_govermment_search_component__WEBPACK_IMPORTED_MODULE_24__["GovermmentSearchComponent"],
                _components_search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_25__["SearchFilterComponent"],
                _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_26__["PaginationComponent"],
                _components_border_border_component__WEBPACK_IMPORTED_MODULE_27__["BorderComponent"],
                _components_pages_list_documents_list_documents_component__WEBPACK_IMPORTED_MODULE_28__["ListDocumentsComponent"]
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

/***/ "./src/app/components/best-decision/best-decision.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/best-decision/best-decision.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.title {\r\n  text-align: center;\r\n  font-weight: 400;\r\n  font-size: 1.875em;\r\n  padding: 1.6em 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/best-decision/best-decision.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/best-decision/best-decision.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <section class=\"best-decision\">\n    <div class=\"title\">Найкращі рішення</div>\n    <div class=\"wrapper\">\n      <div class=\"card\" *ngFor=\"let carditem of bestdecision\">\n        <app-card-item [carditem]=\"carditem\"></app-card-item>\n      </div>\n    </div>\n  </section>\n\n"

/***/ }),

/***/ "./src/app/components/best-decision/best-decision.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/best-decision/best-decision.component.ts ***!
  \*********************************************************************/
/*! exports provided: BestDecisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestDecisionComponent", function() { return BestDecisionComponent; });
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

var BestDecisionComponent = /** @class */ (function () {
    function BestDecisionComponent() {
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
    }
    BestDecisionComponent.prototype.ngOnInit = function () {
    };
    BestDecisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-best-decision',
            template: __webpack_require__(/*! ./best-decision.component.html */ "./src/app/components/best-decision/best-decision.component.html"),
            styles: [__webpack_require__(/*! ./best-decision.component.css */ "./src/app/components/best-decision/best-decision.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BestDecisionComponent);
    return BestDecisionComponent;
}());



/***/ }),

/***/ "./src/app/components/border/border.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/border/border.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.border-wrapper {\r\n  margin: .75em 0 0;\r\n}\r\n.slide {\r\n  height: 26.5625em;\r\n  width: 100%;\r\n}\r\n.wrapper {\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: linear-gradient(to right, rgba(242, 243, 243, 0) , rgba(242, 243, 243, 0) , rgba(242, 243, 243, .98) 80%);\r\n}\r\n.inner {\r\n  padding: 0 3.9375em;\r\n  text-align: right;\r\n  width: 50%;\r\n}\r\n.title {\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  color: black;\r\n}\r\n.subtitle {\r\n  font-size: .9375em;\r\n  font-weight: 400;\r\n  margin-top: 1.75em;\r\n}\r\nbutton {\r\n  margin-top: 4.4375em;\r\n  background-color: #81BC06;\r\n  padding: .6875em 2.5em;\r\n  font-size: .9375em;\r\n  font-weight: 600;\r\n  color: white;\r\n}\r\n.controls {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.controls ul {\r\n  display: inherit;\r\n  margin-top: 1em;\r\n}\r\n.controls li {\r\n  height: .25em;\r\n  width: 3.375em;\r\n  margin: 0 .6875em;\r\n}\r\n.controls li:not(.is-active) {\r\n  background-color: #BFBFBF;\r\n}\r\n.controls li.is-active {\r\n  background-color: #1F1F1E;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/border/border.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/border/border.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"border-wrapper\">\n  <ul>\n    <li [ngStyle]=\"{ background: 'url(assets/img/border2.jpg) no-repeat center top / cover'}\" class=\"slide\">\n      <div class=\"wrapper\">\n        <div class=\"inner\">\n          <div class=\"title\">Новий сервіс - Кадри Online</div>\n          <div class=\"subtitle\">Готуйте повні пакети трудових документів в декілька кліків і повністю Online</div>\n          <button>Детальніше</button>\n        </div>\n      </div>\n    </li>\n  </ul>\n  <div class=\"controls\">\n    <ul>\n      <li class=\"is-active\"></li>\n      <li></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/border/border.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/border/border.component.ts ***!
  \*******************************************************/
/*! exports provided: BorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderComponent", function() { return BorderComponent; });
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

var BorderComponent = /** @class */ (function () {
    function BorderComponent() {
    }
    BorderComponent.prototype.ngOnInit = function () {
    };
    BorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-border',
            template: __webpack_require__(/*! ./border.component.html */ "./src/app/components/border/border.component.html"),
            styles: [__webpack_require__(/*! ./border.component.css */ "./src/app/components/border/border.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BorderComponent);
    return BorderComponent;
}());



/***/ }),

/***/ "./src/app/components/card-item/card-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/card-item/card-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.card-wrapper {\r\n  width: 100%;\r\n}\r\n.mat-card:not([class*=mat-elevation-z]) {\r\n   box-shadow: none;\r\n}\r\n.mat-card-content {\r\n  margin: 0 -24px;\r\n}\r\na {\r\n  margin-left: -8px;\r\n  cursor: pointer;\r\n}\r\n.mat-card-actions a{\r\n  color: #3484C8;\r\n}\r\n.additional a {\r\n  color: black;\r\n  margin-bottom: 1em;\r\n  font-size: 1.125em;\r\n  font-weight: 400;\r\n}\r\n.mat-icon {\r\n  vertical-align: middle;\r\n  margin-left: -8px;\r\n}\r\n.additional {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.mat-card-content p.descriptions,\r\n.mat-card-content .title,\r\n.card-actions,\r\n.additional a{\r\n  font-family: \"Segoe UI\", sans-serif !important;\r\n}\r\n.mat-card-content .title {\r\n  font-size: 1.25em;\r\n  font-weight: 600;\r\n}\r\n.mat-card-content p.descriptions {\r\n  font-weight: 100;\r\n  font-size: 1em;\r\n}\r\n.similar-document .title {\r\n  font-weight: 400;\r\n}\r\n.similar-document .mat-card-content {\r\n  height: 2em;\r\n}\r\n.mat-card-actions button {\r\n  color: #3484C8;\r\n  font-weight: 400;\r\n  font-family: \"Segoe UI\";\r\n}\r\n.advice-document .title {\r\n  font-weight: 400;\r\n}\r\n.advice-document .mat-card-actions{\r\n  text-align: center;\r\n}\r\n.first .item-card, .second .item-card, .third .item-card {\r\n  background-color: #F1F1F1;\r\n}\r\n.first .mat-card-content, .second .mat-card-content, .third .mat-card-content {\r\n  margin: 0;\r\n}\r\n.first .mat-card-actions, .second .mat-card-actions, .third .mat-card-actions {\r\n  text-align: center;\r\n}\r\n.card-wrapper .title {\r\n  font-weight: 400;\r\n}\r\n.first {\r\n  border-top: .3125em solid #3484C8;\r\n}\r\n.first .title {\r\n  color: #3484C8;\r\n}\r\n.second {\r\n  border-top: .3125em solid #008F0E;\r\n}\r\n.second .title {\r\n  color: #008F0E;\r\n}\r\n.third {\r\n  border-top: .3125em solid #F30000;\r\n}\r\n.third .title {\r\n  color: #F30000;\r\n}\r\n.similar-bach-document p.descriptions{\r\n  font-size: .7em;\r\n  color: #3484C8;\r\n}\r\n.similar-bach-document .mat-card-image {\r\n  margin: 0 -24px;\r\n}\r\n.similar-bach-document .mat-card {\r\n  padding: 0 24px;\r\n}\r\n.similar-bach-document .mat-card {\r\n  cursor: pointer;\r\n}\r\n.mat-card-content, .mat-card-header .mat-card-title, .mat-card-subtitle {\r\n  font-size: 1em;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/card-item/card-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/card-item/card-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card-wrapper\" [ngClass]=\"configStyle\">\r\n  <mat-card class=\"item-card\">\r\n\r\n    <img *ngIf=\"carditem.imgPath\" mat-card-image src=\"{{carditem.imgPath}}\" alt=\"\">\r\n\r\n    <mat-card-content>\r\n      <mat-card-title class=\"title\" *ngIf=\"carditem.title\">{{carditem.title}}</mat-card-title>\r\n      <p class=\"descriptions\" *ngIf=\"carditem.description\">{{carditem.description}}</p>\r\n\r\n      <div class=\"additional\" *ngIf=\"carditem.additional\">\r\n        <a href=\"{{item.path}}\" *ngFor=\"let item of carditem.additional\">{{item.title}}</a>\r\n      </div>\r\n    </mat-card-content>\r\n\r\n    <mat-card-actions *ngIf=\"carditem.cardactions\">\r\n      <a *ngIf=\"!btn\" class=\"card-actions\" href=\"{{carditem.cardactions}}\">{{carditem.cardactions}} <mat-icon>navigate_next</mat-icon></a>\r\n      <button *ngIf=\"btn\" mat-button (click)=\"onTab(configStyle)\" >{{carditem.cardactions}} <mat-icon>navigate_next</mat-icon></button>\r\n    </mat-card-actions>\r\n\r\n  </mat-card>\r\n</div>\r\n\r\n\r\n\r\n"

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

module.exports = "footer {\r\n  padding: 2em 0;\r\n  background-color: #F2F2F2;\r\n}\r\n.wrapper-items > ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n.title-item {\r\n  font-weight: 600;\r\n  font-size: .9375em;\r\n}\r\n.title-item + ul {\r\n  margin-top: 1.5em;\r\n}\r\n.items-lists {\r\n  width: 20%;\r\n}\r\nfooter a {\r\n  color: #616161;\r\n  font-size: .75em;\r\n  display: block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n.item-group a {\r\n  margin-bottom: .75em;\r\n}\r\n.cocial-net ul{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  margin-bottom: 2em;\r\n  padding: 0 5em;\r\n}\r\n.social-ico {\r\n  width: .9375em;\r\n  margin-left: .25em;\r\n  font-size: 1.6033em;\r\n}\r\n.footer-producns {\r\n  border-top: 1px solid  #DEDEDE;\r\n  border-bottom: 1px solid  #DEDEDE;\r\n  padding: 2em 0;\r\n}\r\n.wrapper-producns .title-item + ul {\r\n  margin-top: unset;\r\n}\r\n.wrapper-producns {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.wrapper-producns > * {\r\n  width: 30%;\r\n}\r\n.wrapper-producns ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n\r\n}\r\n.products-ico {\r\n  height: 3em;\r\n}\r\n.bottom-line ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  padding: 2em 0 0;\r\n}\r\n.bottom-line ul li {\r\n  margin-right: 9.0625em;\r\n}\r\n.bottom-line a, .bottom-line p{\r\n  font-size: .6875em;\r\n}\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n.social-wrapper {\r\n  justify-content: flex-end;\r\n  display: flex;\r\n  margin-bottom: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n\r\n  <div class=\"container\">\r\n\r\n    <span class=\"logo\">\r\n      <img src=\"assets/img/logo.png\" alt=\"\">\r\n    </span>\r\n\r\n    <nav class=\"wrapper-items\">\r\n      <ul>\r\n        <li  class=\"items-lists\" *ngFor=\"let group of  itemslist\">\r\n          <span class=\"title-item\">{{group.title}}</span>\r\n          <ul>\r\n            <li class=\"item-group\" *ngFor=\"let item of group.itemsgroup\"><a href=\"{{item.path}}\" >{{item.title}}</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <section class=\"social-wrapper\">\r\n      <app-social-net></app-social-net>\r\n    </section>\r\n    <!--<nav class=\"cocial-net\">-->\r\n      <!--<ul>-->\r\n        <!--<li *ngFor=\"let link of socialitem\">-->\r\n          <!--<a href=\"{{link.link}}\" target=\"_blank\">-->\r\n            <!--<img class=\"social-ico\" src=\"{{link.path}}\" alt=\"\">-->\r\n          <!--</a>-->\r\n        <!--</li>-->\r\n      <!--</ul>-->\r\n    <!--</nav>-->\r\n\r\n    <div class=\"footer-producns\">\r\n      <div class=\"wrapper-producns\">\r\n        <span class=\"title-item\">Продукти</span>\r\n        <ul>\r\n          <li *ngFor=\"let product of productslitem\">\r\n            <a href=\"{{product.link}}\"><img class=\"products-ico\" src=\"{{product.path}}\" alt=\"\"></a>\r\n          </li>\r\n        </ul>\r\n        <span></span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"bottom-line\">\r\n      <ul>\r\n        <li><a href=\"\">Українська</a></li>\r\n        <li><a href=\"\">Політика конфіденційності</a></li>\r\n        <li><a href=\"\">Умови надання послуг</a></li>\r\n        <span class=\"spacer\"></span>\r\n        <p>© Дом юриста, 2018</p>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</footer>\r\n"

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

/***/ "./src/app/components/gmaps/gmaps.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/gmaps/gmaps.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maps {\r\n  height: 25em;\r\n  width: 100%;\r\n  background-color: rgba(255,255,255,.1);\r\n}\r\n#gmap_canvas {\r\n  height: 25em;\r\n}\r\nimg {\r\n  width: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/gmaps/gmaps.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/gmaps/gmaps.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"maps\">\n\n  <div class=\"gmap\">\n\n    <div class=\"gmap-row\">\n\n      <div id='gmap_canvas'></div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/gmaps/gmaps.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/gmaps/gmaps.component.ts ***!
  \*****************************************************/
/*! exports provided: GmapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GmapsComponent", function() { return GmapsComponent; });
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

var GmapsComponent = /** @class */ (function () {
    function GmapsComponent() {
    }
    GmapsComponent.prototype.ngOnInit = function () {
        this.myOptions = {
            center: new google.maps.LatLng(50.4501, 30.523400000000038),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 15,
            disableDefaultUI: true,
            // streetViewControl: false;
            scrollwheel: true,
        };
        this.map = new google.maps.Map(document.getElementById('gmap_canvas'), this.myOptions);
        this.image = {
            url: 'assets/img/locations.png',
            // url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(50, 50),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(16, 32)
        };
        this.marker = new google.maps.Marker({
            map: this.map,
            icon: this.image,
            position: new google.maps.LatLng(50.4501, 30.523400000000038)
        });
        this.cityCircle = new google.maps.Circle({
            strokeColor: '#0E76BC',
            strokeOpacity: 0,
            strokeWeight: 2,
            fillColor: '#0E76BC',
            fillOpacity: 0.6,
            map: this.map,
            center: this.marker.position,
            radius: Math.sqrt(1000) * 5
        });
        this.styles = [
            {
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#f5f5f5'
                    }
                ]
            },
            {
                'elementType': 'labels.icon',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#616161'
                    }
                ]
            },
            {
                'elementType': 'labels.text.stroke',
                'stylers': [
                    {
                        'color': '#f5f5f5'
                    }
                ]
            },
            {
                'featureType': 'administrative.land_parcel',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#bdbdbd'
                    }
                ]
            },
            {
                'featureType': 'landscape.man_made',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#f0f0f0'
                    }
                ]
            },
            {
                'featureType': 'poi',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#eeeeee'
                    }
                ]
            },
            {
                'featureType': 'poi',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#757575'
                    }
                ]
            },
            {
                'featureType': 'poi.business',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#a0a0a0'
                    }
                ]
            },
            {
                'featureType': 'poi.government',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#b0b0b0'
                    }
                ]
            },
            {
                'featureType': 'poi.medical',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#b9b9b9'
                    }
                ]
            },
            {
                'featureType': 'poi.medical',
                'elementType': 'geometry.stroke',
                'stylers': [
                    {
                        'color': '#ffffff'
                    },
                    {
                        'visibility': 'simplified'
                    }
                ]
            },
            {
                'featureType': 'poi.park',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#e5e5e5'
                    }
                ]
            },
            {
                'featureType': 'poi.park',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#9e9e9e'
                    }
                ]
            },
            {
                'featureType': 'poi.school',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#cfcfcf'
                    }
                ]
            },
            {
                'featureType': 'poi.sports_complex',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#c3c3c3'
                    }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#DCDCDC'
                    }
                ]
            },
            {
                'featureType': 'road.arterial',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#eeeeee'
                    }
                ]
            },
            {
                'featureType': 'road.arterial',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#757575'
                    }
                ]
            },
            {
                'featureType': 'road.highway',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#dadada'
                    }
                ]
            },
            {
                'featureType': 'road.highway',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#616161'
                    }
                ]
            },
            {
                'featureType': 'road.highway.controlled_access',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#c3c3c3'
                    }
                ]
            },
            {
                'featureType': 'road.local',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#ffffff'
                    }
                ]
            },
            {
                'featureType': 'road.local',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#9e9e9e'
                    }
                ]
            },
            {
                'featureType': 'transit.line',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#e5e5e5'
                    }
                ]
            },
            {
                'featureType': 'transit.station',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#eeeeee'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#a8a8a8'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#9e9e9e'
                    }
                ]
            }
        ];
        this.map.setOptions({
            styles: this.styles,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], GmapsComponent.prototype, "gmapElement", void 0);
    GmapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gmaps',
            template: __webpack_require__(/*! ./gmaps.component.html */ "./src/app/components/gmaps/gmaps.component.html"),
            styles: [__webpack_require__(/*! ./gmaps.component.css */ "./src/app/components/gmaps/gmaps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GmapsComponent);
    return GmapsComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nheader {\n  position: relative;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.toolbar-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n.toolbar-row {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.toolbar-row:first-child {\n  background-color: #fff;\n  color: #2F2F2F;\n  height: 4em;\n  padding: 0 3.75em;\n}\n.toolbar-row:last-child {\n  background-color: #2F2F2F;\n  color: white;\n  height: 3.0625em;\n  padding: 0 3.75em 0 2.75em;\n}\n.nav-item {\n  padding: .5em 0;\n  align-items: center;\n  display: flex;\n  font-size: .8125em;\n  font-weight: 400;\n  white-space: nowrap;\n}\n.nav-item + .nav-item {\n  margin-left: 1.3125em;\n}\n.nav-item.is-active {\n  border-bottom: .125em solid #0E76BC;\n  font-weight: 600;\n}\n.toolbar-row:last-child .nav-item {\n  font-size: .9375em;\n}\n.app-nav {\n  position: absolute;\n  top: 100%;\n  left: -100%;\n  z-index: 999;\n  width: 25.0625em;\n  height: 40em;\n  background-color: white;\n  transition: all .3s;\n  opacity: 0;\n}\n.app-nav.is-open {\n  left: 0;\n  transition: all .3s;\n  opacity: 1;\n}\n.app-nav-btn {\n  margin-right: 1.375em;\n}\n.app-nav-btn img {\n  height: 1.375em;\n}\n.app-nav-btn.is-active img {\n  -moz-filter: invert(100%);\n  -webkit-filter: invert(100%);\n  -o-filter: invert(100%);\n  -ms-filter: invert(100%);\n  filter: invert(100%);\n}\n.logo {\n  height: 100%;\n  width: 8.5em;\n  margin-right: 1em;\n}\n.logo img {\n  width: 100%;\n}\n.icon-menu {\n  height: 1em;\n  margin-right: .3em;\n}\n.mat-icon-img {\n  padding: 0;\n}\n.btn-ico {\n  height: 1.029em;\n  color: black;\n}\n.btn-ico.large {\n  font-size: 2.492em;\n}\n.btn-wrapper {\n  background-color: transparent;\n  height: 100%;\n  min-width: 4em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all .5s;\n}\n.btn-wrapper + .btn-wrapper {\n  padding: 0 .8em;\n}\n.btn-wrapper.is-active {\n  background-color: white;\n  transition: all .5s;\n}\n.btn-wrapper + .btn-wrapper.is-active {\n  background-color: #494949;\n\n}\n.btn-wrapper + .btn-wrapper.is-active button {\n  color: white;\n}\n.btn-wrapper.is-active button {\n  color: black;\n}\n.items-wrapp {\n  position: absolute;\n  top: 100%;\n  z-index: 9999;\n  display: none;\n}\n.items-wrapp.on-open {\n  display: block;\n}\n.items-wrapp ul {\n  display: flex;\n  flex-direction: row;\n}\n.subscribe {\n  height: .8125em;\n}\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<header (mouseleave)=\"closeAppNav()\">\r\n\r\n  <div class=\"toolbar-wrapper\">\r\n\r\n    <div class=\"toolbar-row\">\r\n\r\n      <span class=\"logo\">\r\n      <img src=\"assets/img/logo.png\" alt=\"\">\r\n    </span>\r\n\r\n      <button class=\"nav-item is-active\">Domjurista</button>\r\n      <button class=\"nav-item\">Jusnote</button>\r\n      <button class=\"nav-item\">Analytics</button>\r\n      <button class=\"nav-item semi-bold\">Обрати підписку</button>\r\n\r\n      <span class=\"spacer\"></span>\r\n\r\n      <button class=\"nav-item defaut-font-size\">\r\n        <img class=\"btn-ico\" src=\"assets/img/notification.svg\" alt=\"\">\r\n      </button>\r\n      <button class=\"nav-item defaut-font-size\">\r\n        <img class=\"btn-ico\" src=\"assets/img/cart-ico.svg\" alt=\"\">\r\n      </button>\r\n      <button class=\"nav-item semi-bold\">Вхід</button>\r\n      <button class=\"nav-item defaut-font-size\">\r\n        <img class=\"btn-ico large\" src=\"assets/img/account-ico.svg\" alt=\"\">\r\n      </button>\r\n\r\n    </div>\r\n\r\n    <div class=\"toolbar-row\">\r\n\r\n      <div class=\"btn-wrapper app-nav-btn\" #appNavBtn>\r\n\r\n        <button class=\"nav-item white\" (click)=\"openAppNav()\">\r\n          <img src=\"assets/img/app-menu-icon.svg\" alt=\"\">\r\n        </button>\r\n\r\n      </div>\r\n      <button class=\"nav-item white\">Всі сервіси</button>\r\n\r\n      <span class=\"spacer\"></span>\r\n\r\n      <button class=\"nav-item white light\">\r\n        <img class=\"icon-menu  subscribe\" src=\"assets/img/email.svg\" alt=\"\">\r\n        Підписатися на розсилку\r\n      </button>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <section class=\"app-nav\" #appNav>\r\n    <app-main-nav [mainnavigation]=\"appnavigation\" [mainNavStyle]=\"styleEl\" (click)=\"closeAppNav()\"></app-main-nav>\r\n  </section>\r\n\r\n</header>\r\n"

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
        // Items nav service
        this.navServices = [
            {
                title: 'Всі сервіси',
                itemsgroup: [
                    {
                        title: '',
                        items: [
                            {
                                title: 'Блог Дом юриста',
                                path: '#'
                            },
                            {
                                title: 'Новини компанії',
                                path: '#'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Cервіси',
                itemsgroup: [
                    {
                        title: 'Блог Дом юриста',
                        items: [
                            {
                                title: 'Блог Дом юриста',
                                path: '#'
                            },
                            {
                                title: 'Блог Дом юриста',
                                path: '#'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Документи',
                itemsgroup: [
                    {
                        title: 'Договори',
                        items: [
                            {
                                title: "\u0417\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0437\u043E\u0431\u043E\u0432 '\u044F\u0437\u0430\u043D\u044C'",
                                path: '#'
                            },
                            {
                                title: "\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043C\u0430\u0439\u043D\u0430 \u0443 \u0432\u043B\u0430\u0441\u043D\u0456\u0441\u0442\u044C",
                                path: '#'
                            },
                            {
                                title: "\u041D\u0430\u0439\u043C, \u043E\u0440\u0435\u043D\u0434\u0430",
                                path: '#'
                            },
                            {
                                title: "\u041F\u0456\u0434\u0440\u044F\u0434, \u043F\u043E\u0441\u043B\u0443\u0433\u0438",
                                path: '#'
                            },
                            {
                                title: "\u0420\u043E\u0437\u043F\u043E\u0440\u044F\u0434\u0436\u0435\u043D\u043D\u044F \u043F\u0440\u0430\u0432\u0430\u043C\u0438 \u0456\u043D. \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456",
                                path: '#'
                            },
                            {
                                title: "\u041F\u043E\u0437\u0438\u043A\u0430",
                                path: '#'
                            },
                            {
                                title: "\u0406\u043D\u0448\u0456 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0438",
                                path: '#'
                            }
                        ]
                    },
                    {
                        title: 'Процесуальні документи',
                        items: [
                            {
                                title: "\u0417 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0440\u0430\u0432\u0430 \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456 \u0442\u0430 \u0440\u0435\u0447\u043E\u0432\u0438\u0445 \u043F\u0440\u0430\u0432",
                                path: '#'
                            },
                            {
                                title: "\u0417 \u0432\u0438\u0442\u0440\u0435\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0430\u0439\u043D\u0430",
                                path: '#'
                            },
                            {
                                title: "\u0417 \u0443\u0441\u0443\u043D\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u0448\u043A\u043E\u0434",
                                path: '#'
                            },
                            {
                                title: "\u0417 \u0432\u0438\u0437\u043D\u0430\u043D\u043D\u044F \u043F\u0440\u0430\u0432\u0430 \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456",
                                path: '#'
                            },
                            {
                                title: "\u0406\u043D\u0448\u0456 \u043F\u043E\u0437\u043E\u0432\u0438",
                                path: '#'
                            }
                        ]
                    },
                    {
                        title: 'Інші документи',
                        items: [
                            {
                                title: "\u0417\u0430\u0441\u043D\u043E\u0432\u043D\u0438\u0446\u044C\u043A\u0456 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438",
                                path: '#'
                            },
                            {
                                title: "\u041A\u043E\u043B\u0435\u043A\u0442\u0438\u0432\u043D\u0456 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0438",
                                path: '#'
                            },
                            {
                                title: "\u0417 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E\u0457 \u0442\u0430\u0454\u043C\u043D\u0438\u0446\u0456",
                                path: '#'
                            },
                            {
                                title: "\u041F\u043E\u0441\u0430\u0434\u043E\u0432\u0456 \u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457 \u0442\u0430 \u043A\u0430\u0434\u0440\u043E\u0432\u0456 \u043D\u0430\u043A\u0430\u0437\u0438",
                                path: '#'
                            },
                            {
                                title: "\u0417 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445",
                                path: '#'
                            },
                            {
                                title: "\u0417 \u043E\u0445\u043E\u0440\u043E\u043D\u0438 \u043F\u0440\u0430\u0446\u0456 \u0442\u0430 \u043F\u043E\u0436\u0435\u0436\u043D\u043E\u0457 \u0431\u0435\u0437\u043F\u0435\u043A\u0438",
                                path: '#'
                            },
                            {
                                title: "\u0417 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0440\u0430\u0432 \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u0447\u0456\u0432",
                                path: '#'
                            }
                        ]
                    }
                ],
            },
            {
                title: 'Пакети документів',
                itemsgroup: [
                    {
                        title: '',
                        items: [
                            {
                                title: 'Блог Дом юриста',
                                path: '#'
                            },
                            {
                                title: 'Новини компанії',
                                path: '#'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Центр знань',
                itemsgroup: [
                    {
                        title: '',
                        items: [
                            {
                                title: 'Блог Дом юриста',
                                path: '#'
                            },
                            {
                                title: 'Новини компанії',
                                path: '#'
                            }
                        ]
                    }
                ]
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
    HeaderComponent.prototype.onItem = function (e) {
        console.log(e.target.nextElementSibling);
        console.log(e.target.parentElement.classList.add('is-active'));
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

module.exports = ".wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: #F2F2F2;\r\n}\r\n.padding-wrapper {\r\n  padding: 1.75em;\r\n}\r\n.mat-icon {\r\n  vertical-align: middle;\r\n}\r\n.img-wrapper {\r\n  width: 50%;\r\n}\r\n.content-wrapper {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding-left: 2.3125em;\r\n}\r\n.column-wrapper img {\r\n  width: 100%;\r\n}\r\n.title {\r\n  font-weight: 600;\r\n  font-size: 1.375em;\r\n  margin-bottom: 1.625em;\r\n}\r\n.descriptions {\r\n  margin-bottom: 1.375em;\r\n  font-size: 1.125em;\r\n  font-weight: 100;\r\n}\r\n.box-actions {\r\n  color: #3484C8;\r\n  cursor: pointer;\r\n}\r\n.gov-agency.padding-wrapper {\r\n  padding: 0;\r\n}\r\n.gov-agency .title {\r\n  font-weight: 100;\r\n  font-size: 2.845em;\r\n}\r\n.gov-agency .column-wrapper:nth-child(1) {\r\n  order: 2;\r\n}\r\n.gov-agency .column-wrapper:nth-child(2) {\r\n  order: 1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/item-box/item-box.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/item-box/item-box.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper padding-wrapper\" [ngClass]=\"itemBoxStyle\">\r\n  <div class=\"column-wrapper img-wrapper\">\r\n    <img *ngIf=\"box.imgPath\" src=\"{{box.imgPath}}\" alt=\"\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n  <div class=\"column-wrapper content-wrapper\">\r\n    <div *ngIf=\"box.title\" class=\"title\">{{box.title}}</div>\r\n    <div *ngIf=\"box.descriptions\" class=\"descriptions\">{{box.descriptions}}</div>\r\n    <a *ngIf=\"box.cardactions\" class=\"box-actions\" href=\"{{box.cardactions}}\">Дізнатися більше<mat-icon>navigate_next</mat-icon></a>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ItemBoxComponent.prototype, "itemBoxStyle", void 0);
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

module.exports = "\r\n.wrapper {\r\n  height: 100%;\r\n}\r\n.wrapper a {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  color: white;\r\n  font-size: .875em;\r\n  font-weight: 600;\r\n\r\n}\r\n.wrapper a img {\r\n  height: 3.024375em;\r\n  margin-bottom: 1.4em;\r\n}\r\n.wrapper a.app-nav  {\r\n  color: #2F2F2F;\r\n  font-size: .625em;\r\n  text-align: center;\r\n  justify-content: unset;\r\n  height: inherit;\r\n}\r\n.wrapper a.app-nav img{\r\n  margin-top: 1.5em;\r\n  margin-bottom: 1em;\r\n}\r\n.main-nav {\r\n  background-color: #3484C8;\r\n}\r\n.main-nav ul, .useful-doc ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n.main-nav li {\r\n  width: 9.5625em;\r\n  height: 10em;\r\n}\r\n.main-nav li:hover {\r\n  background-color: #175B95;\r\n}\r\n.useful-doc {\r\n  background-color: #FAFAFA;\r\n}\r\n.useful-doc ul {\r\n  justify-content: space-between;\r\n  height: 26.0625em;\r\n}\r\n.useful-doc ul li{\r\n  background-color: #fff;\r\n  width: 15.25em;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n.useful-doc a img{\r\n  height: 5.755625em;\r\n}\r\n.useful-doc .img-wrapper {\r\n  height: 15.25em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.useful-doc .description {\r\n  background-color: #3484C8;\r\n  height: 5.1875em;\r\n  padding: 0 1em;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 1.0625em;\r\n  font-weight: 400;\r\n\r\n}\r\n.itemsgov ul {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n  margin: 0 -1.4em;\r\n}\r\n.itemsgov li.wrapper {\r\n  width: 33%;\r\n  height: 13.125em;\r\n  padding: 1em;\r\n}\r\n.itemsgov li.wrapper a {\r\n  background-color: #F6F6F6;\r\n}\r\n.itemsgov li img {\r\n  height: 5.793125em;\r\n}\r\n.itemsgov .description {\r\n  color: #0268B9;\r\n}\r\n.app-nav ul {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n  padding: 1.3em;\r\n}\r\n.app-nav li {\r\n  background-color: #F8F8F8;\r\n  width: 6.4375em;\r\n  height: 6.4375em;\r\n  margin: .5em;\r\n  transition: all .6s;\r\n}\r\n.app-nav.is-open li {\r\n  transition: all .6s;\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n}\r\n.app-nav li:hover {\r\n  background-color: #c5d1df;\r\n}\r\n.app-nav li a{\r\n  color: #0067B8;\r\n  text-align: center;\r\n  justify-content: space-evenly;\r\n}\r\n.app-nav li a img{\r\n  height: 1.735em;\r\n  margin-bottom: 0;\r\n}\r\n.app-nav .description {\r\n  color: black;\r\n  font-weight: 100;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav [ngClass]=\"mainNavStyle\">\r\n\r\n  <ul>\r\n\r\n      <li *ngFor=\"let item of mainnavigation\" class=\"wrapper\">\r\n\r\n        <a href=\"{{item.actions}}\" [ngClass]=\"styleEl\">\r\n\r\n          <div class=\"img-wrapper\"><img src=\"{{item.imgPath}}\" alt=\"\"></div>\r\n          <div class=\"description\">{{item.title}}</div>\r\n\r\n        </a>\r\n\r\n      </li>\r\n\r\n    </ul>\r\n\r\n</nav>\r\n"

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
    ], MainNavComponent.prototype, "mainnavigation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MainNavComponent.prototype, "mainNavStyle", void 0);
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

/***/ "./src/app/components/pages/batch-proposition/batch-proposition.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/pages/batch-proposition/batch-proposition.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n.wrapper-descriptions {\r\n  height: 25.125em;\r\n  width: 100%;\r\n  background-color: #F1F1F1;\r\n  margin: 4em 0;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 3em 0;\r\n}\r\n.work-agreement {\r\n  background-color: #F1F1F1;\r\n  padding: 2.125em 0;\r\n}\r\n.description-agreement {\r\n  margin-top: 2em;\r\n  width: 80%;\r\n}\r\n.work-agreement .h1 {\r\n  margin: auto auto .5em;\r\n}\r\n.agreement-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n.tags {\r\n  margin-top: 1em;\r\n}\r\n.buy-subscription {\r\n  margin-top: 3em;\r\n}\r\n.buy-subscription p{\r\n  margin-bottom: 1em;\r\n}\r\n.work-agreement .img-wrapper {\r\n  width: 18em;\r\n  height: 86%;\r\n  padding: 1em;\r\n  background-color: white;\r\n}\r\n.work-agreement .img-wrapper img {\r\n  width: 100%;\r\n}\r\n.description-title {\r\n  transition: all .3s;\r\n}\r\n.btn-wrapper {\r\n  margin-top: .5em;\r\n}\r\n.btn-wrapper button {\r\n  font-weight: 100;\r\n  color: #0067B8;\r\n  font-size: 1.125em;\r\n}\r\n.btn-wrapper button img {\r\n  width: 1em;\r\n}\r\n.agreement-row .modal-wrapper {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n\r\n}\r\n.agreement-row .modal-wrapper .h1 {\r\n  color: white;\r\n  font-size: 1.8em;\r\n}\r\n.agreement-row .modal-wrapper .document-items {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.agreement-row .modal-wrapper .arrow-btn {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color: white;\r\n  width: 16em;\r\n}\r\n.agreement-row .modal-wrapper .material-icons {\r\n  font-size: 2em;\r\n}\r\n.agreement-row .modal-wrapper .mat-fab {\r\n  border: .0625em solid white;\r\n  margin-bottom: 1em;\r\n}\r\n.agreement-row .modal-wrapper .mat-fab.mat-accent {\r\n  background-color: transparent;\r\n\r\n}\r\n.agreement-row .modal-wrapper li img {\r\n  height: 75vh;\r\n}\r\n.action-bay {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.action-bay  button {\r\n  background: #0067B8;\r\n  color: white;\r\n  margin-right: 1em;\r\n}\r\n.action-bay a{\r\n  font-weight: 100;\r\n  text-decoration: underline;\r\n  color: #0067B8;\r\n}\r\n.action-bay img{\r\n  width: .5em;\r\n}\r\n.row-items {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n.similar .arrow {\r\n  background-color: transparent;\r\n  height: 10em;\r\n}\r\n.similar .arrow > * {\r\n  color: black;\r\n}\r\n.content-wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 1.5em;\r\n}\r\n.title-content {\r\n  font-size: 1.5em;\r\n  font-family: \"Segoe UI\";\r\n  font-weight: 400;\r\n  margin-bottom: 1em;\r\n}\r\n.tringle {\r\n  position: absolute;\r\n  top: -3.125em;\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 3.125em solid transparent;\r\n  border-right: 3.125em solid transparent;\r\n  border-bottom: 3.125em solid #F1F1F1;\r\n  transition: all .3s;\r\n}\r\n.tringle.first {\r\n  left: 6.250em;\r\n}\r\n.tringle.second {\r\n  left: 31.25em;\r\n\r\n}\r\n.tringle.third {\r\n  right: 7.250em;\r\n}\r\n.arrow {\r\n  width: 1.5em;\r\n  height: 5em;\r\n  background-color: #4A4A4A;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.arrow > * {\r\n  color: white;\r\n}\r\n.work-agreement .card {\r\n  width: 45%;\r\n  margin:.45em;\r\n}\r\n.work-agreement .img-wrapper .wrapper {\r\n  justify-content: flex-start;\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n}\r\n.similar .card {\r\n  width: 25.5%;\r\n}\r\n.similar .wrapper {\r\n  justify-content: space-evenly;\r\n}\r\n.advice .card {\r\n  width: 20em;\r\n}\r\n.docItems li img {\r\n  transition: all 1s;\r\n}\r\n.similar .title, .advice .title {\r\n  margin: 2.9375em 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/pages/batch-proposition/batch-proposition.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/pages/batch-proposition/batch-proposition.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<section class=\"work-agreement\">\n\n  <div class=\"container\">\n\n    <div class=\"agreement-row\">\n\n      <div class=\"col-wrapper\">\n\n        <button class=\"blue btn-left\" mat-button><mat-icon>navigate_before</mat-icon> Назад</button>\n\n        <div class=\"title\">\n          <h1 class=\"h1\">\n            Пакетна пропозиція: документи для розлучення\n          </h1>\n        </div>\n\n        <div class=\"rating-wrapper\">\n          <app-rating></app-rating>\n        </div>\n\n        <div class=\"description-agreement\">\n          Цивільно-правовий договір, за яким одна сторона (підрядник) зобов'язується на свій ризик виконати\n          певну роботу за завданням другої сторони (замовника),\n          а замовник зобов'язується прийняти та оплатити виконану роботу.\n        </div>\n\n        <div class=\"tags\">\n          <app-tags></app-tags>\n        </div>\n\n        <div class=\"buy-subscription\">\n          <p>Придбайте підписку, щоб почати працювати з документом</p>\n\n          <div class=\"action-bay\">\n            <button mat-button>Придбати</button>\n            <a href=\"#\">\n              <img src=\"assets/img/info-ico.svg\" alt=\"\">\n              Що це мені дає?\n            </a>\n          </div>\n\n        </div>\n\n      </div>\n      <div class=\"col-wrapper\">\n\n        <div class=\"img-wrapper\">\n          <div class=\"wrapper\">\n            <div class=\"card\" *ngFor=\"let carditem of bach\">\n              <app-card-item [carditem]=\"carditem\" [configStyle]=\"similarBachStyle\" (click)=\"openModal()\"></app-card-item>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"btn-wrapper text-center\">\n          <button mat-button (click)=\"openModal()\">\n            <img src=\"assets/img/eye-ico.svg\" alt=\"\">\n            Перегянути\n          </button>\n        </div>\n\n      </div>\n\n      <div class=\"layout\" *ngIf=\"modalIsOpen\" >\n        <div class=\"close-layout\">\n          <i class=\"material-icons\" (click)=\"openModal($event)\">close</i>\n        </div>\n        <div class=\"modal-wrapper\">\n\n          <div class=\"title text-center\">\n            <h1 class=\"h1\">Договір підряду</h1>\n          </div>\n          <div class=\"document-items\">\n\n            <div class=\"arrow-btn\">\n\n              <button class=\"circle-btn\" (click)=\"nextSlide (-1)\">\n                <mat-icon>arrow_back</mat-icon>\n              </button>\n\n              Попередній документ\n\n            </div>\n            <!--/arrow-btn-->\n\n            <ul class=\"docItems\">\n              <li>\n                <img src=\"{{sldeModalImg}}\" alt=\"\">\n              </li>\n            </ul>\n            <!--/ul-->\n\n            <div class=\"arrow-btn\">\n\n              <button class=\"circle-btn\" (click)=\"nextSlide (1)\">\n                <mat-icon>arrow_forward</mat-icon>\n              </button>\n\n              Наступний документ\n\n            </div>\n            <!--/arrow-btn-->\n\n          </div>\n          <!--/document-items-->\n        </div>\n        <!--/modal-wrapper-->\n      </div>\n\n    </div>\n\n  </div>\n\n</section>\n<!--/work-agreement-->\n\n<section class=\"similar\">\n\n  <div class=\"container\">\n\n    <div class=\"title text-center\">\n      <h1 class=\"h1\">Інші схожі документи</h1>\n    </div>\n\n    <div class=\"row-items\">\n\n      <div class=\"arrow\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </div>\n\n      <div class=\"wrapper\">\n        <div class=\"card\" *ngFor=\"let carditem of similar\">\n          <app-card-item [carditem]=\"carditem\" [configStyle]=\"similarStyle\"></app-card-item>\n        </div>\n      </div>\n\n      <div class=\"arrow\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </div>\n\n    </div>\n\n\n  </div>\n\n</section>\n<!--/similar-->\n\n<section class=\"advice\">\n\n  <div class=\"container\">\n\n    <div class=\"title text-center\">\n      <h1 class=\"h1\">Поради до цього документу</h1>\n    </div>\n\n    <div class=\"wrapper\">\n      <div class=\"card\" *ngFor=\"let carditem of advice\">\n        <app-card-item [carditem]=\"carditem\" [configStyle]=\"carditem.styleOption\" [btn]=\"true\" (opentab)=\"onTab($event)\"></app-card-item>\n      </div>\n    </div>\n\n    <div class=\"wrapper-descriptions\">\n      <span [ngClass]=\"classTab\" class=\"tringle\"></span>\n\n      <div class=\"arrow left\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </div>\n\n      <div class=\"content-wrapper\">\n        <div class=\"title-content\">{{adviceTabTitle}}</div>\n        <div class=\"description-title\">\n          {{adviceTabText}}\n        </div>\n      </div>\n\n      <div class=\"arrow left\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </div>\n\n    </div>\n\n  </div>\n\n</section>\n<!--/advice-->\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/pages/batch-proposition/batch-proposition.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/batch-proposition/batch-proposition.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BatchPropositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchPropositionComponent", function() { return BatchPropositionComponent; });
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


var BatchPropositionComponent = /** @class */ (function () {
    function BatchPropositionComponent(title, meta) {
        this.title = title;
        this.meta = meta;
        this.imgpath = 'assets/img/'; // img path
        this.bach = [
            {
                title: "",
                description: "\u0414\u043E\u0433\u043E\u0432\u0456\u0440 \u043F\u0440\u043E \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433 \u0437 \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u0438\u0446\u0442\u0432\u0430 \u0443 \u043F\u0440\u0430\u0446\u0435\u0432\u043B\u0430\u0448\u0442\u0443-\u0432\u0430\u043D\u043D\u0456 \u0437\u0430 \u043A\u043E\u0440\u0434\u043E\u043D\u043E\u043C",
                additional: [
                    {
                        title: "",
                        path: ""
                    }
                ],
                imgPath: this.imgpath + "document.jpg",
                cardactions: "",
            },
            {
                title: "",
                description: "\u0414\u043E\u0433\u043E\u0432\u0456\u0440 \u043F\u0440\u043E \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433 \u0437 \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u0438\u0446\u0442\u0432\u0430 \u0443 \u043F\u0440\u0430\u0446\u0435\u0432\u043B\u0430\u0448\u0442\u0443-\u0432\u0430\u043D\u043D\u0456 \u0437\u0430 \u043A\u043E\u0440\u0434\u043E\u043D\u043E\u043C",
                additional: [
                    {
                        title: "",
                        path: "#"
                    },
                ],
                imgPath: this.imgpath + "document.jpg",
                cardactions: "",
            },
            {
                title: "",
                description: "\u0414\u043E\u0433\u043E\u0432\u0456\u0440 \u043F\u0440\u043E \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433 \u0437 \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u0438\u0446\u0442\u0432\u0430 \u0443 \u043F\u0440\u0430\u0446\u0435\u0432\u043B\u0430\u0448\u0442\u0443-\u0432\u0430\u043D\u043D\u0456 \u0437\u0430 \u043A\u043E\u0440\u0434\u043E\u043D\u043E\u043C",
                additional: [
                    {
                        title: "",
                        path: "#"
                    }
                ],
                imgPath: this.imgpath + "document.jpg",
                cardactions: "",
            }
        ];
        this.similarBachStyle = 'similar-bach-document';
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
        this.currentslide = 1;
        title.setTitle('Дом юриста - Пакетна пропозиція');
        meta.addTags([
            { name: 'key', content: 'юриспруденция, договір' },
            { name: 'description', content: 'Договір підряду' }
        ]);
    }
    BatchPropositionComponent.prototype.ngOnInit = function () {
        this.onTabContent('first');
        this.modalIsOpen = false;
    };
    // Toggle tabs
    BatchPropositionComponent.prototype.onTab = function (e) {
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
    BatchPropositionComponent.prototype.onTabContent = function (e) {
        var _this = this;
        this.adviceTab.filter(function (tab) {
            tab.styleOption === e ? _this.adviceTabTitle = tab.title : tab;
            tab.styleOption === e ? _this.adviceTabText = tab.description : tab;
        });
    };
    // Open modal
    BatchPropositionComponent.prototype.openModal = function () {
        console.log('click');
        this.modalIsOpen = !this.modalIsOpen;
        this.nextSlide(1);
    };
    // Slider in modal
    BatchPropositionComponent.prototype.sliderModal = function (slide) {
        var _this = this;
        this.bach.filter(function (el, i) {
            _this.countSlids = i + 1;
            // i + 1 === slide ? this.sldeModalImg = el.imgPath : el;
            if (i + 1 === slide) {
                _this.sldeModalImg = el.imgPath;
            }
        });
    };
    BatchPropositionComponent.prototype.nextSlide = function (e) {
        this.currentslide = this.currentslide + e;
        if (this.currentslide > this.countSlids) {
            this.currentslide = 1;
        }
        if (this.currentslide < 1) {
            this.currentslide = this.countSlids;
        }
        this.sliderModal(this.currentslide);
    };
    BatchPropositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-batch-proposition',
            template: __webpack_require__(/*! ./batch-proposition.component.html */ "./src/app/components/pages/batch-proposition/batch-proposition.component.html"),
            styles: [__webpack_require__(/*! ./batch-proposition.component.css */ "./src/app/components/pages/batch-proposition/batch-proposition.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]])
    ], BatchPropositionComponent);
    return BatchPropositionComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/consultation/consultation.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/pages/consultation/consultation.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container-document {\n  width: 54.0625em;\n  margin: 0 auto;\n}\nh1{\n  font-family: \"Segoe UI\";\n  font-weight: 100;\n  font-size: 2.875em;\n  color: #2F2F2F;\n}\n.title {\n  position: relative;\n  display: block;\n  margin: 2.9375em 0 2em;\n}\n.title::before {\n  content: '';\n  position: absolute;\n  bottom: -1em;\n  width: 20%;\n  height: 3px;\n  border-bottom: 2px solid #0067B8;\n}\n.subtitle-line ul > .sub-row {\n  margin-bottom: .785em;\n}\n.sub-row{\n  display: flex;\n  flex-direction: row;\n}\n.headline {\n  color: #0067B8;\n  margin-right: .5em;\n}\n.headline, tag, .send-to-email{\n  font-family: \"Segoe UI\";\n  font-style: italic;\n  font-size: .875em;\n}\n.headline, tag{\n  font-style: italic;\n}\n.tag {\n  color: #535353;\n}\n.send-to-email {\n  font-weight: 400;\n}\nbutton img {\n  width: 1.5em;\n  margin: 0 .5em;\n}\n.input-wrap {\n  width: 25em;\n  height: 2.625em;\n  display: flex;\n  border: 1px solid #0E76BC;\n  align-items: center;\n}\n.input-wrap input {\n  width: 100%;\n  outline: none;\n  border: transparent;\n  text-align: center;\n}\n.input-wrap button {\n  cursor: pointer;\n  border-radius: 50%;\n  width: 2em;\n  height: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n  transition: all .3s;\n}\n.input-wrap button:hover {\n  background-color: rgba(0,0,0,.1);\n  transition: all .3s;\n}\n.input-wrap img {\n  width: 1em;\n}\n.important-paragraph {\n  display: flex;\n  flex-direction: row;\n}\n.important-paragraph .img-wrap img {\n  width: 1.456875em;\n  margin-right: .5em;\n}\n.important-paragraph .text-wrap {\n  padding: 1.5em;\n  background-color: #FAFAFA;\n}\n.text-section {\n  margin: 1em 0;\n}\n.text-wrap p{\n  font-size: .875em;\n  font-family: \"Segoe UI\";\n  font-weight: 400;\n  color: #2F2F2F;\n}\n.text-wrap p span {\n  font-weight: 700;\n}\n.important-paragraph.advice .text-wrap {\n  background-color: #EFF5FE;\n}\n.file-document li {\n  margin-bottom: 1em;\n}\n.file-headline {\n  color: #0067B8;\n  font-size: 1em;\n  font-weight: 400;\n  font-family: \"Segoe UI\";\n  margin-bottom: .25em;\n}\n.share-to-link {\n  display: flex;\n  flex-direction: row;\n}\n.share-to-link p {\n  margin-right: 1em;\n}\n.be-useful {\n  margin-top: 1em;\n}\n.be-useful .linehead-useful {\n  font-size: 1.0625em;\n  font-family: \"Segoe UI\";\n  color: #2F2F2F;\n  font-weight: 400;\n  margin-bottom: 1em;\n}\n.be-useful ul li button span{\n  color: #0067B8;\n}\n.registration-document {\n  margin-top: 1em;\n  border-top: 1px solid #F2F2F2;\n  display: flex;\n  justify-content: space-between;\n}\n.warning {\n  display: flex;\n  padding: 0 1.5em;\n}\n.warning img {\n  width: 1.3em;\n  height: 1.3em;\n  margin-left: .5em;\n}\n.wrapp-article {\n  background-color: #E2E2E2;\n  height: 3.3125em;\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 100;\n}\n.wrapp-article button {\n  font-weight: 100;\n  border: 1px solid #0067B8;\n  color: #0067B8;\n  margin: 1em;\n  font-family: \"Segoe UI\";\n}\n/* input placeholder */\ninput::-moz-input-placeholder{\n  padding-left: .5em;\n}\ninput::-webkit-input-placeholder{\n  padding-left: .5em;\n}\ninput::-ms-input-placeholder{\n  padding-left: .5em;\n}\n"

/***/ }),

/***/ "./src/app/components/pages/consultation/consultation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/consultation/consultation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main>\n  <section>\n\n    <div class=\"container\">\n\n      <div class=\"container-document\">\n\n        <div class=\"title\">\n          <h1>Назва консультації</h1>\n        </div>\n\n        <div class=\"subtitle-line\">\n          <ul>\n            <li>\n              <app-tags></app-tags>\n            </li>\n            <ul  class=\"sub-row justify-content-between\">\n              <li  class=\"sub-row\">\n                <div class=\"headline\">Остання зміна:</div>\n                <span><a class=\"tag\" href=\"#\">29.08.2018</a></span>\n              </li>\n              <li class=\"sub-row\">\n                <button mat-button class=\"send-to-email\" (click)=\"sendToEmail()\">\n                  Відправити статтю на Email\n                  <img src=\"../../../../assets/img/email2.svg\" alt=\"\">\n                </button>\n              </li>\n            </ul>\n            <li *ngIf=\"sendToEmailForm; else mesagetext\" class=\"sub-row justify-content-end\">\n              <div class=\"input-wrap justify-content-between\">\n                <input type=\"text\" placeholder=\"Email, на який відправити\">\n                <button >\n                  <img src=\"assets/img/send-ico.svg\" alt=\"\">\n                </button>\n              </div>\n            </li>\n            <ng-template #mesagetext>\n              <div class=\"warning justify-content-end\">\n                <p>Відправлено!</p>\n                <img src=\"assets/img/checkin-ico.svg\" alt=\"\">\n              </div>\n            </ng-template>\n          </ul>\n        </div>\n        <!--/subtitle-line-->\n\n        <div class=\"important-paragraph text-section\">\n          <div class=\"img-wrap\">\n            <img src=\"assets/img/info.svg\" alt=\"\">\n          </div>\n          <div class=\"text-wrap\">\n            <p>\n              <span>Важливо знати:</span> Lorem ipsum dolor sit amet,\n              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,\n              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.\n              Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.\n            </p>\n          </div>\n        </div>\n        <!--/important-paragraph-->\n\n        <div class=\"text-wrap text-section\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,\n            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.\n            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,\n            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,\n            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.\n            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\n            neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio\n            et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.\n            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris s\n          </p>\n        </div>\n        <!--/text-wrap-->\n\n        <div class=\"important-paragraph advice text-section\">\n          <div class=\"img-wrap\">\n            <img src=\"assets/img/advice-ico.svg\" alt=\"\">\n          </div>\n          <div class=\"text-wrap\">\n            <p>\n              <span>Порада:</span> Lorem ipsum dolor sit amet,\n              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,\n              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.\n              Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.\n            </p>\n          </div>\n        </div>\n        <!--/important-paragraph-->\n\n      </div>\n\n    </div>\n\n  </section>\n\n  <section>\n\n    <div class=\"container\">\n\n      <div class=\"container-document\">\n\n        <h1>Як подати документи на реєстрацію:</h1>\n\n        <ul class=\"file-document\">\n          <li>\n            <div class=\"file-headline\">1. Перейти сюди</div>\n            <div class=\"text-wrap\">\n              <p>\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,\n                nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              </p>\n            </div>\n          </li>\n          <li>\n            <div class=\"file-headline\">2. Перейти сюди</div>\n            <div class=\"text-wrap\">\n              <p>\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,\n                nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              </p>\n            </div>\n          </li>\n          <li>\n            <div class=\"file-headline\">3. Перейти сюди</div>\n            <div class=\"text-wrap\">\n              <p>\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,\n                nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              </p>\n            </div>\n          </li>\n        </ul>\n\n        <div class=\"share-to-link\">\n          <p>Поділитися статтею</p>\n          <app-social-net></app-social-net>\n        </div>\n\n        <div class=\"be-useful\">\n          <div class=\"linehead-useful\">Консультації, які можуть бути корисними</div>\n          <ul>\n            <li>\n              <button mat-button=\"\">\n                <span>- Як зареєструвати ТОВ онлайн</span>\n              </button>\n            </li>\n            <li>\n              <button mat-button=\"\">\n                <span>- Які документи потрібні для набуття статусу адвоката</span>\n              </button>\n            </li>\n            <li>\n              <button mat-button=\"\">\n                <span>- Як поділити майно з дружиною після розлучення</span>\n              </button>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"registration-document\">\n\n          <div class=\"card\" *ngFor=\"let carditem of bestdecision\">\n            <app-card-item [carditem]=\"carditem\"></app-card-item>\n          </div>\n\n        </div>\n\n\n      </div>\n\n    </div>\n\n\n\n  </section>\n\n  <section class=\"interesting-article\">\n    <div class=\"wrapp-article\">\n      <p>Чи корисною для вас є ця стаття?</p>\n      <button mat-button>Так</button>\n      <button mat-button>Ні</button>\n    </div>\n  </section>\n\n</main>\n\n<app-footer></app-footer>\n"

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

module.exports = "\r\n.wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n.card {\r\n  width: 30%;\r\n}\r\n.similar .wrapper {\r\n  justify-content: space-evenly;\r\n}\r\n.similar .card {\r\n  width: 25.5%;\r\n}\r\n.wrapper-descriptions {\r\n  height: 25.125em;\r\n  width: 100%;\r\n  background-color: #F1F1F1;\r\n  margin: 4em 0;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 3em 0;\r\n}\r\n.description-agreement {\r\n  margin-top: 2em;\r\n  width: 80%;\r\n}\r\n.work-agreement {\r\n  background-color: #F1F1F1;\r\n  padding-top: 2.125em;\r\n  height: 33em;\r\n}\r\n.work-agreement .h1 {\r\n  margin: auto auto .5em;\r\n}\r\n.agreement-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n.work-agreement .img-wrapper {\r\n  width: 18em;\r\n}\r\n.work-agreement .img-wrapper img {\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n.description-title {\r\n  transition: all .3s;\r\n}\r\n.tags {\r\n  margin-top: 1em;\r\n}\r\n.buy-subscription {\r\n  margin-top: 3em;\r\n}\r\n.buy-subscription p{\r\n  margin-bottom: 1em;\r\n}\r\n.btn-wrapper {\r\n  margin-top: 1em;\r\n}\r\n.btn-wrapper button {\r\n  font-weight: 100;\r\n  color: #0067B8;\r\n  font-size: 1.125em;\r\n}\r\n.btn-wrapper button img {\r\n  width: 1em;\r\n}\r\n.row-items {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n.similar .arrow {\r\n  background-color: transparent;\r\n  height: 10em;\r\n}\r\n.similar .arrow > *{\r\n  color: black;\r\n}\r\n.agreement-row .modal-wrapper {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n\r\n}\r\n.agreement-row .modal-wrapper .h1 {\r\n  color: white;\r\n  font-size: 1.8em;\r\n}\r\n.agreement-row .modal-wrapper .document-items {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.agreement-row .modal-wrapper .arrow-btn {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color: white;\r\n  width: 16em;\r\n}\r\n.agreement-row .modal-wrapper .material-icons {\r\n  font-size: 2em;\r\n}\r\n.agreement-row .modal-wrapper .mat-fab {\r\n  border: .0625em solid white;\r\n  margin-bottom: 1em;\r\n}\r\n.agreement-row .modal-wrapper .mat-fab.mat-accent {\r\n  background-color: transparent;\r\n}\r\n.agreement-row .modal-wrapper li img {\r\n  height: 75vh;\r\n}\r\n.action-bay {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.action-bay  button {\r\n  background: #0067B8;\r\n  color: white;\r\n  margin-right: 1em;\r\n}\r\n.action-bay a{\r\n  font-weight: 100;\r\n  text-decoration: underline;\r\n  color: #0067B8;\r\n}\r\n.action-bay img{\r\n  width: .5em;\r\n}\r\n.content-wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 1.5em;\r\n}\r\n.title-content {\r\n  font-size: 1.5em;\r\n  font-family: \"Segoe UI\";\r\n  font-weight: 400;\r\n  margin-bottom: 1em;\r\n}\r\n.tringle {\r\n  position: absolute;\r\n  top: -3.125em;\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 3.125em solid transparent;\r\n  border-right: 3.125em solid transparent;\r\n  border-bottom: 3.125em solid #F1F1F1;\r\n  transition: all .3s;\r\n}\r\n.tringle.first {\r\n  left: 6.250em;\r\n}\r\n.tringle.second {\r\n  left: 31.25em;\r\n\r\n}\r\n.tringle.third {\r\n  right: 7.250em;\r\n}\r\n.arrow {\r\n  width: 1.5em;\r\n  height: 5em;\r\n  background-color: #4A4A4A;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.arrow > * {\r\n  color: white;\r\n}\r\n.similar .title, .advice .title {\r\n  margin: 2.9375em 0;\r\n }\r\n"

/***/ }),

/***/ "./src/app/components/pages/contracts/contracts.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/contracts/contracts.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<section class=\"work-agreement\">\n\n  <div class=\"container\">\n\n    <div class=\"agreement-row\">\n\n      <div class=\"col-wrapper\">\n\n        <button class=\"blue btn-left\" mat-button><mat-icon>navigate_before</mat-icon> Назад</button>\n\n        <div class=\"title\">\n          <h1 class=\"h1\">Договір підряду</h1>\n        </div>\n\n        <div class=\"rating-wrapper\">\n          <app-rating></app-rating>\n        </div>\n\n        <div class=\"description-agreement\">\n          Цивільно-правовий договір, за яким одна сторона (підрядник) зобов'язується на свій ризик виконати\n          певну роботу за завданням другої сторони (замовника),\n          а замовник зобов'язується прийняти та оплатити виконану роботу.\n        </div>\n\n        <div class=\"tags\">\n          <app-tags></app-tags>\n        </div>\n\n        <div class=\"buy-subscription\">\n          <p>Придбайте підписку, щоб почати працювати з документом</p>\n\n          <div class=\"action-bay\">\n            <button mat-button>Придбати</button>\n            <a href=\"#\">\n              <img src=\"assets/img/info-ico.svg\" alt=\"\">\n              Що це мені дає?\n            </a>\n          </div>\n\n        </div>\n\n      </div>\n      <div class=\"col-wrapper\">\n        <div class=\"img-wrapper\">\n          <img src=\"assets/img/doclarge.jpg\" alt=\"\" (click)=\"openModal($event)\">\n        </div>\n        <div class=\"btn-wrapper text-center\">\n          <button mat-button (click)=\"openModal($event)\">\n            <img src=\"assets/img/eye-ico.svg\" alt=\"\">\n            Перегянути\n          </button>\n        </div>\n      </div>\n\n      <div class=\"layout\" *ngIf=\"modalIsOpen\" >\n        <div class=\"close-layout\">\n          <i class=\"material-icons\" (click)=\"openModal($event)\">close</i>\n        </div>\n        <div class=\"modal-wrapper\">\n\n          <div class=\"title text-center\">\n            <h1 class=\"h1\">Договір підряду</h1>\n          </div>\n\n          <div class=\"document-items\">\n\n            <ul>\n              <li>\n                <img src=\"assets/img/doclarge.jpg\" alt=\"\">\n              </li>\n              <li>\n                <img src=\"assets/img/doclarge.jpg\" alt=\"\">\n              </li>\n              <li>\n                <img src=\"assets/img/doclarge.jpg\" alt=\"\">\n              </li>\n            </ul>\n            <!--/ul-->\n          </div>\n          <!--/document-items-->\n        </div>\n        <!--/modal-wrapper-->\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</section>\n<!--/work-agreement-->\n\n<section class=\"similar\">\n\n  <div class=\"container\">\n\n    <div class=\"title\">\n      <h1 class=\"h1 text-center\">Інші схожі документи</h1>\n    </div>\n\n    <div class=\"row-items\">\n\n      <div class=\"arrow\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </div>\n\n      <div class=\"wrapper\">\n        <div class=\"card\" *ngFor=\"let carditem of similar\">\n          <app-card-item [carditem]=\"carditem\" [configStyle]=\"similarStyle\"></app-card-item>\n        </div>\n      </div>\n\n      <div class=\"arrow\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </div>\n\n    </div>\n\n  </div>\n\n</section>\n<!--/similar-->\n\n<section class=\"advice\">\n\n  <div class=\"container\">\n\n    <div class=\"title\">\n      <h1 class=\"h1 text-center\">Поради до цього документу</h1>\n    </div>\n\n    <div class=\"wrapper\">\n      <div class=\"card\" *ngFor=\"let carditem of advice\">\n        <app-card-item [carditem]=\"carditem\" [configStyle]=\"carditem.styleOption\" [btn]=\"true\" (opentab)=\"onTab($event)\"></app-card-item>\n      </div>\n    </div>\n\n    <div class=\"wrapper-descriptions\">\n      <span [ngClass]=\"classTab\" class=\"tringle\"></span>\n\n      <div class=\"arrow left\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </div>\n\n      <div class=\"content-wrapper\">\n        <div class=\"title-content\">{{adviceTabTitle}}</div>\n        <div class=\"description-title\">\n          {{adviceTabText}}\n        </div>\n      </div>\n\n      <div class=\"arrow left\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </div>\n\n\n    </div>\n\n  </div>\n\n</section>\n<!--/advice-->\n\n<app-footer></app-footer>\n"

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
        this.modalIsOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'initial';
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

/***/ "./src/app/components/pages/govermment-search/govermment-search.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/pages/govermment-search/govermment-search.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n.search-gov {\r\n  width: 21.625em;\r\n  padding-right: 2em;\r\n  box-sizing: border-box;\r\n}\r\n.search-gov-wrapper {\r\n  margin-bottom: 2em;\r\n}\r\n.search-gov-wrapper .title {\r\n  border-top: .125em solid #D5D5D5;\r\n  padding: 1em 0;\r\n}\r\n.search-gov .title {\r\n  text-transform: uppercase;\r\n}\r\n.items-gov {\r\n  width: 45em;\r\n}\r\nheader {\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  display: flex;\r\n  height: 4.6875em;\r\n}\r\n.input-wrapper {\r\n  width: 21.0625em;\r\n  border: .0625em solid #0E76BC;\r\n  display: flex;\r\n}\r\ninput {\r\n  width: 100%;\r\n  height: 2.625em;\r\n  border: transparent;\r\n  outline: none;\r\n  padding: 0 1em;\r\n}\r\n.control-wrapper {\r\n  justify-content: space-between;\r\n  display: flex;\r\n  margin-top: 3em;\r\n}\r\n.control-wrapper button {\r\n  outline: transparent;\r\n  cursor: pointer;\r\n}\r\n.control-wrapper button:nth-child(1) {\r\n  font-weight: 100;\r\n}\r\n.control-wrapper button:nth-child(1):hover {\r\n  text-decoration: underline;\r\n}\r\n.control-wrapper button:nth-child(2) {\r\n  background-color: #0e76bc;\r\n  color: white;\r\n  padding: .5em 2em;\r\n\r\n}\r\n/* input placeholder */\r\ninput::-moz-input-placeholder{\r\n  padding: 0 1em;\r\n}\r\ninput::-webkit-input-placeholder{\r\n  padding: 0 1em;\r\n}\r\ninput::-ms-input-placeholder{\r\n  padding: 0 1em;\r\n}\r\n.search-btn {\r\n  border-radius: 50%;\r\n}\r\n.search-btn .mat-icon {\r\n  color: #0e76bc;\r\n}\r\n.search-btn:hover {\r\n  background-color: #F6F6F6;\r\n}\r\n.social-wrapper {\r\n  margin: 58px 0 48px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/pages/govermment-search/govermment-search.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/pages/govermment-search/govermment-search.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<section class=\"item-box\">\n  <div class=\"box\" *ngFor=\"let box of itembox\">\n    <app-item-box\n      [box]=\"box\"\n      [itemBoxStyle]=\"itemBoxStyle\"\n    >\n    </app-item-box>\n  </div>\n</section>\n\n<div class=\"container\">\n  <section class=\"main-wrapper\">\n\n    <div class=\"content-wrapper search-gov\">\n      <header>\n        <div class=\"title\">Фiльтр</div>\n      </header>\n      <div *ngFor=\"let item of filterItems\" class=\"search-gov-wrapper\">\n        <div class=\"title\">\n          <p>{{item.title}}</p>\n        </div>\n        <app-search-filter [item]=\"item.items\"></app-search-filter>\n      </div>\n      <div class=\"control-wrapper\">\n        <button class=\"btn\">Очистити</button>\n        <button class=\"btn\">Пошук</button>\n      </div>\n\n    </div>\n\n    <div class=\"content-wrapper items-gov\">\n      <header>\n        <div class=\"title\"><h1 class=\"h1\">Державні органи</h1></div>\n        <div class=\"input-wrapper\">\n          <input type=\"text\"\n                 placeholder=\"Введіть назву органу\"\n                 [(ngModel)]=\"query\"\n                 name=\"query\"\n                 (ngModelChange)=\"onSerch(query)\"\n          >\n          <button class=\"search-btn\" (click)=\"resetForm()\">\n            <mat-icon>{{searchBtnIcon}}</mat-icon>\n            <!--<mat-icon>close</mat-icon>-->\n          </button>\n        </div>\n      </header>\n      <div class=\"items-gov-wrapper\">\n        <app-main-nav [mainnavigation]=\"itemsgov\" [mainNavStyle]=\"itemsGovStyle\"></app-main-nav>\n      </div>\n      <app-pagination [pagination]=\"pagination\"></app-pagination>\n    </div>\n\n  </section>\n\n  <section class=\"social-wrapper\">\n    <app-social-net></app-social-net>\n  </section>\n\n\n</div>\n\n\n\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/pages/govermment-search/govermment-search.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/govermment-search/govermment-search.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GovermmentSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovermmentSearchComponent", function() { return GovermmentSearchComponent; });
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

var GovermmentSearchComponent = /** @class */ (function () {
    function GovermmentSearchComponent() {
        this.imgpath = 'assets/img/'; // img path
        this.itembox = [
            {
                title: "\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0430 \u0431\u0430\u0437\u0430 \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u0438\u0445 \u043E\u0440\u0433\u0430\u043D\u0456\u0432 \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456",
                descriptions: "\u0417\u043D\u0430\u0445\u043E\u0434\u044C\u0442\u0435, \u043E\u0442\u0440\u0438\u043C\u0443\u0439\u0442\u0435 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E,\n       \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0443\u0439\u0442\u0435 \u0437 \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u0438\u043C\u0438 \u043E\u0440\u0433\u0430\u043D\u0430\u043C\u0438,\n        \u044F\u043A\u0456 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u0432\u0430\u043C \u0441\u0430\u043C\u0435 \u0437\u0430\u0440\u0430\u0437.\n         \u0429\u0435 \u043D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u0431\u0443\u043B\u043E \u0442\u0430\u043A \u043F\u0440\u043E\u0441\u0442\u043E \u0457\u0445 \u0437\u043D\u0430\u0439\u0442\u0438",
                imgPath: this.imgpath + "box-image-1.jpg",
                cardactions: '',
            }
        ];
        this.itemBoxStyle = 'gov-agency';
        this.itemsgov = [
            {
                title: 'Голосіївський окружний суд',
                imgPath: this.imgpath + "gavel.svg",
                actions: '#',
            },
            {
                title: 'Голосіївський окружний суд',
                imgPath: this.imgpath + "gavel.svg",
                actions: '#',
            },
            {
                title: 'Голосіївський окружний суд',
                imgPath: this.imgpath + "gavel.svg",
                actions: '#',
            },
            {
                title: 'Голосіївський окружний суд',
                imgPath: this.imgpath + "gavel.svg",
                actions: '#',
            },
            {
                title: 'Голосіївський окружний суд',
                imgPath: this.imgpath + "gavel.svg",
                actions: '#',
            },
            {
                title: 'Голосіївський окружний суд',
                imgPath: this.imgpath + "gavel.svg",
                actions: '#',
            },
            {
                title: 'Голосіївський окружний суд',
                imgPath: this.imgpath + "gavel.svg",
                actions: '#',
            },
            {
                title: 'Голосіївський окружний суд',
                imgPath: this.imgpath + "gavel.svg",
                actions: '#',
            },
            {
                title: 'Голосіївський окружний суд',
                imgPath: this.imgpath + "gavel.svg",
                actions: '#',
            },
        ];
        this.itemsGovStyle = 'itemsgov';
        this.filterItems = [
            {
                title: 'Оберіть тип державного органу',
                items: [
                    {
                        id: 0,
                        title: 'Суди України0'
                    },
                    {
                        id: 1,
                        title: 'Суди України1'
                    },
                    {
                        id: 2,
                        title: 'Суди України2'
                    },
                    {
                        id: 3,
                        title: 'Суди України3'
                    },
                ]
            },
            {
                title: 'Оберіть місто',
                items: [
                    {
                        id: 0,
                        title: 'м. Харків'
                    },
                    {
                        id: 1,
                        title: 'м. Полтав'
                    },
                    {
                        id: 2,
                        title: 'м. Днепр'
                    },
                    {
                        id: 3,
                        title: 'м. Житомир'
                    }
                ]
            },
            {
                title: 'Оберіть державний орган',
                items: [
                    {
                        id: 0,
                        title: 'Верховний суд0'
                    },
                    {
                        id: 1,
                        title: 'Верховний суд1'
                    },
                    {
                        id: 2,
                        title: 'Верховний суд2'
                    },
                    {
                        id: 3,
                        title: 'Верховний суд3'
                    },
                ]
            }
        ];
        this.pagination = [
            {
                page: '1',
                path: '#'
            },
            {
                page: '2',
                path: '#'
            },
            {
                page: '3',
                path: '#'
            },
            {
                page: '4',
                path: '#'
            },
            {
                page: '5',
                path: '#'
            }
        ];
        this.query = '';
        this.searchBtnIcon = 'search';
    }
    GovermmentSearchComponent.prototype.ngOnInit = function () {
    };
    GovermmentSearchComponent.prototype.onSerch = function (e) {
        console.log('--', e);
        e !== '' ? this.searchBtnIcon = 'close' : this.searchBtnIcon = 'search';
    };
    GovermmentSearchComponent.prototype.resetForm = function () {
        if (this.searchBtnIcon === 'close') {
            this.query = '';
            this.searchBtnIcon = 'search';
        }
    };
    GovermmentSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-govermment-search',
            template: __webpack_require__(/*! ./govermment-search.component.html */ "./src/app/components/pages/govermment-search/govermment-search.component.html"),
            styles: [__webpack_require__(/*! ./govermment-search.component.css */ "./src/app/components/pages/govermment-search/govermment-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GovermmentSearchComponent);
    return GovermmentSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/government-agency/government-agency.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/pages/government-agency/government-agency.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.usful {\r\n  background-color: #FAFAFA;\r\n}\r\n.usful .title {\r\n  font-size: 1.375em;\r\n  font-weight: 600;\r\n  height: 6.25em;\r\n  align-items: center;\r\n  display: flex;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/pages/government-agency/government-agency.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/pages/government-agency/government-agency.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<section class=\"item-box\">\n  <div class=\"box\" *ngFor=\"let box of itembox\">\n    <app-item-box [box]=\"box\" [itemBoxStyle]=\"itemBoxStyle\">\n      <app-gmaps></app-gmaps>\n    </app-item-box>\n  </div>\n</section>\n\n\n<section class=\"usful\">\n  <div class=\"container\">\n\n    <div class=\"title\">Корисні документи</div>\n    <app-main-nav [mainnavigation]=\"usefulDocuments\" [mainNavStyle]=\"uswfulDocStyle\"></app-main-nav>\n\n  </div>\n</section>\n\n\n\n<div class=\"container\">\n  <app-best-decision></app-best-decision>\n</div>\n\n<app-footer></app-footer>\n\n\n"

/***/ }),

/***/ "./src/app/components/pages/government-agency/government-agency.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/government-agency/government-agency.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GovernmentAgencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentAgencyComponent", function() { return GovernmentAgencyComponent; });
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

var GovernmentAgencyComponent = /** @class */ (function () {
    function GovernmentAgencyComponent() {
        this.imgpath = 'assets/img/'; // img path
        this.itembox = [
            {
                title: 'Верховний суд України',
                descriptions: 'Мета Дом юриста - зробити юридичні послуги доступними для кожного громадянина України через автоматизацію.',
                imgPath: "",
                cardactions: '#',
            }
        ];
        this.itemBoxStyle = 'gov-agency';
        this.usefulDocuments = [
            {
                title: 'Позовна заява про розірвання договору',
                imgPath: this.imgpath + "doc-ico.svg",
                actions: '#',
            },
            {
                title: 'Позовна заява про розірвання договору',
                imgPath: this.imgpath + "doc-ico.svg",
                actions: '#',
            },
            {
                title: 'Позовна заява про розірвання договору',
                imgPath: this.imgpath + "doc-ico.svg",
                actions: '#',
            },
            {
                title: 'Позовна заява про розірвання договору',
                imgPath: this.imgpath + "doc-ico.svg",
                actions: '#',
            },
        ];
        this.uswfulDocStyle = 'useful-doc';
    }
    GovernmentAgencyComponent.prototype.ngOnInit = function () {
    };
    GovernmentAgencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-government-agency',
            template: __webpack_require__(/*! ./government-agency.component.html */ "./src/app/components/pages/government-agency/government-agency.component.html"),
            styles: [__webpack_require__(/*! ./government-agency.component.css */ "./src/app/components/pages/government-agency/government-agency.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GovernmentAgencyComponent);
    return GovernmentAgencyComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/home/home.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-search {\r\n  background-color: rgba(0,0,0,.27);\r\n}\r\n.input-wrapper {\r\n  width: 56em;\r\n}\r\n.search-wrapper {\r\n  height: 24.75em;\r\n  background: url('main-search-bg.jpg') no-repeat top center / cover;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n}\r\n.search-title {\r\n  font-size: 2.0625em;\r\n  font-weight: 400;\r\n  color: white;\r\n  margin-bottom: .5em;\r\n  transition: .3s;\r\n  font-family: \"Segoe UI\";\r\n  text-align: center;\r\n  padding-right: 1.5em;\r\n}\r\n.search-title.search-is-active {\r\n  visibility: hidden;\r\n  transition: .3s;\r\n  opacity: 0;\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n}\r\n.search-title.search-out {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: .3s;\r\n  -webkit-transform: scale(1) translateY(1.2em);\r\n          transform: scale(1) translateY(1.2em);\r\n}\r\n.search-subtitle {\r\n  color: white;\r\n  font-size: 1.125em;\r\n  margin-bottom: .5em;\r\n}\r\n.search-subtitle.search-is-active {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: .3s;\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n}\r\n.search-subtitle.search-out {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: .3s;\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n}\r\n.wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.title {\r\n  text-align: center;\r\n  font-weight: 400;\r\n  font-size: 1.875em;\r\n  padding: 1.6em 0;\r\n}\r\n.recommendations .wrapper {\r\n\r\n}\r\n.recommendations .card {\r\n  width: 28%;\r\n}\r\n.social-wrapper {\r\n  margin-bottom: 36px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<section class=\"main-search\">\r\n  <div class=\"search-wrapper\">\r\n    <div class=\"search-form\">\r\n      <div [ngClass]=\"isTitleClassToggleOn\" class=\"search-title h1\">В нас є рішення вашої юридичної проблеми</div>\r\n\r\n      <div [ngClass]=\"isTitleClassToggleOn\" class=\"search-subtitle\">Що саме ви шукаєте?</div>\r\n\r\n      <div class=\"input-wrapper\">\r\n        <app-search (searchresult)=\"getSearchResult($event)\"></app-search>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"main-nav\">\r\n  <app-main-nav [mainnavigation]=\"mainnavigation\" [mainNavStyle]=\"mainNavStyle\"></app-main-nav>\r\n</section>\r\n\r\n<section class=\"item-box\">\r\n  <div class=\"box\" *ngFor=\"let box of itembox\">\r\n    <app-item-box [box]=\"box\"></app-item-box>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"container\">\r\n\r\n  <section class=\"recommendations\">\r\n    <div class=\"title\">Рекомендації експертів</div>\r\n    <div class=\"wrapper\">\r\n      <div class=\"card\" *ngFor=\"let carditem of recommendations\">\r\n        <app-card-item [carditem]=\"carditem\"></app-card-item>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <app-border></app-border>\r\n\r\n  <app-best-decision></app-best-decision>\r\n\r\n  <section class=\"social-wrapper\">\r\n    <div class=\"title\">Стежити за Дом юриста:</div>\r\n    <app-social-net></app-social-net>\r\n  </section>\r\n\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

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
        this.mainNavStyle = 'main-nav';
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

/***/ "./src/app/components/pages/list-documents/list-documents.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/pages/list-documents/list-documents.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.head-line {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.8125em;\n}\n.search-line {\n  height: 8.125em;\n  width: 100%;\n  margin-bottom: 2.625em;\n  background: linear-gradient(to left, #6AA1F9, #2B52EE);\n  align-items: center;\n  display: flex;\n}\n.search-line .container {\n  width: 100%;\n}\n.count-result, .public-date, .filter-document, .result-doc .subtitle {\n  font-size: 1.125em;\n  font-weight: 300;\n  color: #2D2D2D;\n}\n.result-doc .title {\n  font-size: 1.125em;\n  font-weight: 400;\n  color: #2D2D2D;\n}\n.filter-document {\n  display: flex;\n  align-items: center;\n}\n.filter-document .search-gov-wrapper {\n  margin-left: .6875em;\n}\n.search-gov-wrapper {\n  width: 9em;\n}\n.wrapper {\n  width: 60%;\n}\n.document-row {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #CBCBCB;\n  padding-bottom: 2.1875em;\n  margin-bottom: 1.6875em;\n}\n.result-doc {\n  display: flex;\n}\n.result-doc img {\n  height: 2.75em;\n  margin-right: .9375em;\n}\n.result-tags {\n  padding-left: 4.5em;\n  margin-top: 1.5625em;\n}\n.tags-wrap ul {\n  display: inline-flex;\n  justify-content: flex-start;\n  margin-top: .625em;\n}\n.tags-wrap li {\n  padding: .3125em 1.4375em;\n  background-color: #F3F3F3;\n  font-size: .625em;\n  font-weight: 600;\n  border-radius: .1875em;\n  min-width: 4.5em;\n  text-align: center;\n  color: #2D2D2D;\n  cursor: pointer;\n}\n.tags-wrap li + li {\n  margin-left: .625em;\n}\n.pagination {\n  margin-bottom: 3.5625em;\n  margin-top: 1.0625em;\n}\n.care-service {\n  height: 23.8125em;\n  width: 100%;\n  display: flex;\n}\n.service-wrapp {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 6.5em;\n  text-align: center;\n}\n.service-wrapp:nth-child(1) {\n  background-color: #DDE6ED;\n}\n.service-wrapp:nth-child(2) {\n  background-color: #E9EEF3;\n}\n.service-wrapp img{\n  height: 5.5625em;\n}\n.service-wrapp .title {\n  font-size: 1.5625em;\n  font-weight: 300;\n  margin-top: 1.125em;\n}\n.service-wrapp .subtitle {\n  font-size: 1.125em;\n  font-weight: 400;\n  margin-top: .4375em;\n}\n.service-wrapp .subtitle, .service-wrapp .title {\n  color: #2E2E2E;\n}\n.service-wrapp button {\n  background-color: #0E76BC;\n  color: white;\n  padding: .6875em 2.5625em;\n  margin-top: 2.0625em;\n}\n"

/***/ }),

/***/ "./src/app/components/pages/list-documents/list-documents.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/list-documents/list-documents.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<section class=\"search-line\">\n  <div class=\"container\">\n    <app-search></app-search>\n  </div>\n</section>\n<div class=\"container\">\n  <div class=\"head-line\">\n    <div class=\"count-result\">\n      {{'4 646'}} результатів\n    </div>\n    <div class=\"filter-document\">\n      <p>Фільтр:</p>\n      <div *ngFor=\"let item of filterItems\" class=\"search-gov-wrapper\">\n        <div class=\"title\">\n          <p>{{item.title}}</p>\n        </div>\n        <app-search-filter [item]=\"item.items\"  [styleSelct]=\"styleSelct\"></app-search-filter>\n      </div>\n    </div>\n  </div>\n  <!--/head-line-->\n\n  <div class=\"document-row\">\n    <div class=\"wrapper\">\n      <div class=\"result-doc\">\n        <img src=\"assets/img/book.svg\" alt=\"\">\n        <div class=\"description\">\n          <div class=\"title\">Як підготувати якісний юридичний документ</div>\n          <div class=\"subtitle\">Опис: розповіли про те, як готувати якісні юридичні документи</div>\n        </div>\n      </div>\n      <div class=\"result-tags\">\n        <div class=\"title\">Знаходьте більше схожої інформації за цими тегами:</div>\n        <div class=\"tags-wrap\">\n          <ul>\n            <li>Суд</li>\n            <li>Закон</li>\n            <li>Документ</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"public-date\">\n      Опубліковано: {{ '15.09.2018' }}\n    </div>\n  </div>\n  <!--/document-row-->\n\n  <div class=\"document-row\">\n    <div class=\"wrapper\">\n      <div class=\"result-doc\">\n        <img src=\"assets/img/book.svg\" alt=\"\">\n        <div class=\"description\">\n          <div class=\"title\">Як підготувати якісний юридичний документ</div>\n          <div class=\"subtitle\">Опис: розповіли про те, як готувати якісні юридичні документи</div>\n        </div>\n      </div>\n      <div class=\"result-tags\">\n        <div class=\"title\">Знаходьте більше схожої інформації за цими тегами:</div>\n        <div class=\"tags-wrap\">\n          <ul>\n            <li>Суд</li>\n            <li>Закон</li>\n            <li>Документ</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"public-date\">\n      Опубліковано: {{ '15.09.2018' }}\n    </div>\n  </div>\n  <!--/document-row-->\n\n  <div class=\"document-row\">\n    <div class=\"wrapper\">\n      <div class=\"result-doc\">\n        <img src=\"assets/img/book.svg\" alt=\"\">\n        <div class=\"description\">\n          <div class=\"title\">Як підготувати якісний юридичний документ</div>\n          <div class=\"subtitle\">Опис: розповіли про те, як готувати якісні юридичні документи</div>\n        </div>\n      </div>\n      <div class=\"result-tags\">\n        <div class=\"title\">Знаходьте більше схожої інформації за цими тегами:</div>\n        <div class=\"tags-wrap\">\n          <ul>\n            <li>Суд</li>\n            <li>Закон</li>\n            <li>Документ</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"public-date\">\n      Опубліковано: {{ '15.09.2018' }}\n    </div>\n  </div>\n  <!--/document-row-->\n\n  <div class=\"document-row\">\n    <div class=\"wrapper\">\n      <div class=\"result-doc\">\n        <img src=\"assets/img/book.svg\" alt=\"\">\n        <div class=\"description\">\n          <div class=\"title\">Як підготувати якісний юридичний документ</div>\n          <div class=\"subtitle\">Опис: розповіли про те, як готувати якісні юридичні документи</div>\n        </div>\n      </div>\n      <div class=\"result-tags\">\n        <div class=\"title\">Знаходьте більше схожої інформації за цими тегами:</div>\n        <div class=\"tags-wrap\">\n          <ul>\n            <li>Суд</li>\n            <li>Закон</li>\n            <li>Документ</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"public-date\">\n      Опубліковано: {{ '15.09.2018' }}\n    </div>\n  </div>\n  <!--/document-row-->\n\n</div>\n\n<section class=\"pagination\">\n  <div class=\"container\">\n    <app-pagination [pagination]=\"pagination\"></app-pagination>\n  </div>\n</section>\n\n<section class=\"care-service\">\n  <div class=\"service-wrapp\">\n    <img src=\"assets/img/support.svg\" alt=\"\">\n    <div class=\"title\">Потрібна додаткова допомога?</div>\n    <div class=\"subtitle\">Замовляйте консультацію у професійного юриста</div>\n    <button>Детальніше</button>\n  </div>\n  <div class=\"service-wrapp\">\n    <img src=\"assets/img/support2.svg\" alt=\"\">\n    <div class=\"title\">Технічна служба підтримки</div>\n    <div class=\"subtitle\">Виникли питання стосовно роботи сервісів? Зв'яжіться з нашою службою підтримки</div>\n    <button>Детальніше</button>\n  </div>\n</section>\n\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/pages/list-documents/list-documents.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/list-documents/list-documents.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDocumentsComponent", function() { return ListDocumentsComponent; });
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

var ListDocumentsComponent = /** @class */ (function () {
    function ListDocumentsComponent() {
        this.filterItems = [
            {
                title: '',
                items: [
                    {
                        id: 0,
                        title: 'Актуальне0'
                    },
                    {
                        id: 1,
                        title: 'Актуальне1'
                    },
                    {
                        id: 2,
                        title: 'Актуальне2'
                    },
                    {
                        id: 3,
                        title: 'Актуальне3'
                    },
                ]
            },
        ];
        this.styleSelct = 'serch-documents';
        this.pagination = [
            {
                page: '1',
                path: '#'
            },
            {
                page: '2',
                path: '#'
            },
            {
                page: '3',
                path: '#'
            },
            {
                page: '4',
                path: '#'
            },
            {
                page: '5',
                path: '#'
            }
        ];
    }
    ListDocumentsComponent.prototype.ngOnInit = function () {
    };
    ListDocumentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-documents',
            template: __webpack_require__(/*! ./list-documents.component.html */ "./src/app/components/pages/list-documents/list-documents.component.html"),
            styles: [__webpack_require__(/*! ./list-documents.component.css */ "./src/app/components/pages/list-documents/list-documents.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListDocumentsComponent);
    return ListDocumentsComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination/pagination.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\nul {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n}\r\nli {\r\n  width: 1.5625em;\r\n  height: 1.3125em;\r\n  font-size: 1em;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\nli.is-active {\r\n  background-color: #407DD7;\r\n  color: white;\r\n}\r\nli:not(.is-active):hover {\r\n  background-color: #F6F6F6;\r\n}\r\nli + li {\r\n  margin-left: 1em;\r\n}\r\nul + .mat-icon {\r\n  margin-left: .5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n  <ul>\n    <li *ngFor=\"let page of pagination\">{{page.page}}</li>\n    <!--routerLinkActive=\"is-active\"-->\n  </ul>\n  <mat-icon>keyboard_arrow_right</mat-icon>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.ts ***!
  \***************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
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

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pagination", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/components/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/components/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
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

/***/ "./src/app/components/search-filter/search-filter.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/search-filter/search-filter.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.title {\r\n  font-size: 1em;\r\n  height: 2.5em;\r\n  padding-top: 1em;\r\n  font-weight: 400;\r\n  color: #3D3D3D;\r\n}\r\n.wrapper-select {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 2.1875em;\r\n  background-color: #F9F9F9;\r\n}\r\n.select-btn {\r\n  font-size: 1em;\r\n  color: #3D3D3D;\r\n  font-weight: 400;\r\n  height: inherit;\r\n  width: 100%;\r\n  padding: 0;\r\n  outline: transparent;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\nul.items-select {\r\n  position: absolute;\r\n  top: 100%;\r\n  width: 100%;\r\n  z-index: 999;\r\n}\r\nul.items-select li {\r\n  width: 100%;\r\n  height: 2.1875em;\r\n  line-height: 2.1875em;\r\n  background-color: #FFF;\r\n  border-bottom: .0625em solid #F9F9F9;\r\n  cursor: pointer;\r\n}\r\nul.items-select li:hover {\r\n  background-color: #f9f9f9;\r\n}\r\n.serch-documents .select-btn {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n.serch-documents ul.items-select li {\r\n  padding: 0 12px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/search-filter/search-filter.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-filter/search-filter.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div [ngClass]=\"styleSelct\" class=\"filter-item\">\n\n  <div class=\"wrapper-select\" (mouseleave)=\"closeSelect ()\">\n\n    <button class=\"select-btn text-left\" (click)=\"toggleSelect()\">\n      {{setValueSelect}}\n      <mat-icon>keyboard_arrow_down</mat-icon>\n    </button>\n\n    <ul class=\"items-select\" hidden #items>\n      <li *ngFor=\"let el of item\" (click)=\"getValueSelect($event)\">{{el.title}}</li>\n    </ul>\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/search-filter/search-filter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/search-filter/search-filter.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterComponent", function() { return SearchFilterComponent; });
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

var SearchFilterComponent = /** @class */ (function () {
    function SearchFilterComponent() {
    }
    SearchFilterComponent.prototype.ngOnInit = function () {
        this.defoultSelect();
    };
    SearchFilterComponent.prototype.toggleSelect = function () {
        this.items.nativeElement.hidden = !this.items.nativeElement.hidden;
    };
    SearchFilterComponent.prototype.closeSelect = function () {
        this.items.nativeElement.hidden = true;
    };
    SearchFilterComponent.prototype.getValueSelect = function (e) {
        console.dir(e.target.innerText);
        this.setValueSelect = e.target.innerText;
        this.closeSelect();
    };
    SearchFilterComponent.prototype.defoultSelect = function () {
        var _this = this;
        this.item.find(function (el) { return _this.setValueSelect = el.title; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchFilterComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchFilterComponent.prototype, "styleSelct", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('items'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchFilterComponent.prototype, "items", void 0);
    SearchFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-filter',
            template: __webpack_require__(/*! ./search-filter.component.html */ "./src/app/components/search-filter/search-filter.component.html"),
            styles: [__webpack_require__(/*! ./search-filter.component.css */ "./src/app/components/search-filter/search-filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchFilterComponent);
    return SearchFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-element-input {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.search-line {\r\n  display: inherit;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  background-color: white;\r\n  width: 100%;\r\n  position: relative;\r\n  height: 3.0625em;\r\n}\r\n.btn-wrapper {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  padding: 0 .375em;\r\n}\r\n.btn-wrapper button {\r\n  margin-right: .5em;\r\n  padding: 0 2.375em;\r\n  height: 2.1875em;\r\n}\r\nbutton.primary {\r\n  background-color: #3484C8;\r\n  color: white;\r\n}\r\nbutton.defoult {\r\n  background-color: #E8E8E8;\r\n  color:black;\r\n}\r\nbutton.btn-voice {\r\n  color: #3484C8;\r\n  height: 3em;\r\n  width: 3em;\r\n  margin-left: 2em;\r\n}\r\n.input-wrapper {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n.search-input {\r\n  width: 100%;\r\n  border: transparent;\r\n  padding: 0 .5em;\r\n  font-size: 1.125em;\r\n  height: 2.5em;\r\n}\r\n.preloader-spiner {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n  border-radius: 50%;\r\n}\r\n.preloader-spiner img {\r\n  width: 100%;\r\n  -webkit-animation: spin  1.5s infinite linear;\r\n          animation: spin  1.5s infinite linear;\r\n}\r\n@keyframes spin {\r\n  from{\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@-webkit-keyframes spin {\r\n  from{\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\ninput:focus {\r\n  border: transparent;\r\n  outline: transparent;\r\n}\r\n/* input placeholder */\r\ninput::-moz-input-placeholder{\r\n  transition: opacity 0.35s ease-in-out;\r\n  opacity: .6;\r\n  color: black;\r\n  font-size: 1.0625em;\r\n}\r\ninput::-webkit-input-placeholder{\r\n  transition: opacity 0.35s ease-in-out;\r\n  opacity: .6;\r\n  color: black;\r\n  font-size: 1.0625em;\r\n}\r\ninput::-ms-input-placeholder{\r\n  transition: opacity 0.35s ease-in-out;\r\n  opacity: .6;\r\n  color: black;\r\n  font-size: 1.0625em;\r\n}\r\n/* input placeholder hover */\r\ninput:hover::-moz-input-placeholder{\r\n     opacity: 1;\r\n}\r\ninput:hover::-webkit-input-placeholder{\r\n  opacity: 1;\r\n}\r\ninput:hover::-ms-input-placeholder{\r\n  opacity: 1;\r\n}\r\n/* input placeholder focus */\r\ninput:focus::-moz-input-placeholder{\r\n     opacity: 0;\r\n}\r\ninput:focus::-webkit-input-placeholder{\r\n  opacity: 0;\r\n}\r\ninput:focus::-ms-input-placeholder{\r\n  opacity: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-element-input\">\n\n  <div class=\"search-line\">\n\n    <div *ngIf=\"query\" class=\"btn-wrapper\">\n      <button class=\"primary btn\">Договір</button>\n      <button class=\"defoult btn\">Консультація</button>\n    </div>\n\n    <div class=\"input-wrapper\">\n      <input\n        class=\"search-input\"\n        type=\"text\"\n        placeholder=\"Будь ласка, введіть те, що ви шукаєте або те, що вас турбує\"\n        [(ngModel)]=\"query\"\n        name=\"query\"\n        (ngModelChange)=\"onSerch()\"\n      >\n      <button\n        mat-button\n        *ngIf=\"query\"\n        matSuffix\n        mat-icon-button\n        aria-label=\"Clear\"\n        (click)=\"onSerch(query = '')\"\n      >\n        <mat-icon>close</mat-icon>\n      </button>\n    </div>\n    \n    <span class=\"preloader-spiner\" *ngIf=\"query\">\n      <img src=\"assets/img/preload-ico.png\" alt=\"\">\n    </span>\n\n  </div>\n\n  <button\n    mat-button\n\n    mat-icon-button\n    class=\"btn-voice defoult\"\n  >\n    <mat-icon>mic_none</mat-icon>\n  </button>\n\n</div>\n\n\n"

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

module.exports = "\r\n.social-net {\r\n  display: flex;\r\n  align-items: center;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n.social-net ul{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.social-ico {\r\n  width: 28px;\r\n  margin-left: 9px;\r\n}\r\n.social-net ul li a {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/social-net/social-net.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/social-net/social-net.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"social-net\">\n  <!--<div class=\"title\">Стежити за Дом юриста:</div>-->\n  <ul>\n    <li *ngFor=\"let link of socialitem\">\n      <a href=\"{{link.link}}\" target=\"_blank\">\n        <img class=\"social-ico\" src=\"{{link.path}}\" alt=\"\">\n      </a>\n    </li>\n  </ul>\n</nav>\n\n\n"

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

var SocialNetComponent = /** @class */ (function () {
    function SocialNetComponent(fs) {
        this.fs = fs;
    }
    SocialNetComponent.prototype.ngOnInit = function () {
        this.socialitem = this.fs.getScocialNet();
    };
    SocialNetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-net',
            template: __webpack_require__(/*! ./social-net.component.html */ "./src/app/components/social-net/social-net.component.html"),
            styles: [__webpack_require__(/*! ./social-net.component.css */ "./src/app/components/social-net/social-net.component.css")]
        }),
        __metadata("design:paramtypes", [_services_footer_service__WEBPACK_IMPORTED_MODULE_1__["FooterService"]])
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

module.exports = ".wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.headline {\r\n  margin-right: .5em;\r\n  font-family: \"Segoe UI\";\r\n  /*font-style: italic;*/\r\n  /*font-size: .875em;*/\r\n  /*color: #535353;*/\r\n}\r\n.headline, tag{\r\n  /*font-style: italic;*/\r\n}\r\n.tag {\r\n  color: #0067B8;\r\n}\r\nspan + span::before {\r\n  content: ',';\r\n  margin-right: .5em;\r\n  color: #0067B8;\r\n}\r\n"

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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "Pe/6":
/*!**************************************!*\
  !*** ./src/services/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    getSummary() {
        const url = "https://api.covid19api.com/summary";
        return this.http.get(url).toPromise();
    }
    getDataforCountry(country) {
        const url = "https://api.covid19api.com/country/" + country + "/status/confirmed";
        return this.http.get(url).toPromise();
    }
    getAllDataforCountry(country) {
        const url = "https://api.covid19api.com/dayone/country/" + country;
        return this.http.get(url).toPromise();
    }
    getAllCountries() {
        const url = "https://api.covid19api.com/countries";
        return this.http.get(url).toPromise();
    }
    getUserIP() {
        const url = "https://ip.seeip.org/geoip";
        return this.http.get(url).toPromise();
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n  <script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css\">\n  <script type=\"text/javascript\" charset=\"utf8\" src=\"https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js\">\n  </script>\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css\"\n    integrity=\"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2\" crossorigin=\"anonymous\">\n\n  <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\">\n  </script>\n  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js\"\n    integrity=\"sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx\" crossorigin=\"anonymous\">\n  </script>\n</head>\n<ion-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Schmolles-Corona-Tracker\n      \n    </ion-label>\n    <div slot=\"end\"> {{user}}</div>\n  </ion-item>\n  <!--\n  <ion-item lines=\"full\">\n    <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n    <ion-label>\n      Toggle Dark Theme\n    </ion-label>\n    <ion-toggle id=\"themeToggle\" slot=\"end\" [ngModel]=\"darkMode\" (ionChange)=\"cambio()\"></ion-toggle>\n  </ion-item>\n -->\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <script type=\"text/javascript\">\n\n  </script>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"3\">\n        <ion-card id=\"card_1\" class=\"card\">\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">All cases of Covid-19</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p><b>New Confirmed: </b>{{this.overall.NewConfirmed}}</p>\n            <p><b>New Deaths: </b>{{this.overall.NewDeaths}}</p>\n            <p><b>New Recovered: </b>{{this.overall.NewRecovered}}</p>\n            <hr>\n            <p><b>Total Confirmed: </b>{{this.overall.TotalConfirmed}}</p>\n            <p><b>Total Deaths: </b>{{this.overall.TotalDeaths}}</p>\n            <p><b>Total Recovered: </b>{{this.overall.TotalRecovered}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"3\">\n        <ion-card class=\"card\">\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Most cases of Covid-19 in {{this.first.Country}}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p><b>New Confirmed: </b>{{this.first.NewConfirmed}}</p>\n            <p><b>New Deaths: </b>{{this.first.NewDeaths}}</p>\n            <p><b>New Recovered: </b>{{this.first.NewRecovered}}</p>\n            <hr>\n            <p><b>Total Confirmed: </b>{{this.first.TotalConfirmed}}</p>\n            <p><b>Total Deaths: </b>{{this.first.TotalDeaths}}</p>\n            <p><b>Total Recovered: </b>{{this.first.TotalRecovered}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"3\">\n        <ion-card class=\"card\">\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Second most cases of Covid-19 in {{this.second.Country}}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p><b>New Confirmed: </b>{{this.second.NewConfirmed}}</p>\n            <p><b>New Deaths: </b>{{this.second.NewDeaths}}</p>\n            <p><b>New Recovered: </b>{{this.second.NewRecovered}}</p>\n            <hr>\n            <p><b>Total Confirmed: </b>{{this.second.TotalConfirmed}}</p>\n            <p><b>Total Deaths: </b>{{this.second.TotalDeaths}}</p>\n            <p><b>Total Recovered: </b>{{this.second.TotalRecovered}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <!---->\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"3\">\n        <ion-card class=\"card\">\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Third most cases of Covid-19 in {{this.third.Country}}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p><b>New Confirmed: </b>{{this.third.NewConfirmed}}</p>\n            <p><b>New Deaths: </b>{{this.third.NewDeaths}}</p>\n            <p><b>New Recovered: </b>{{this.third.NewRecovered}}</p>\n            <hr>\n            <p><b>Total Confirmed: </b>{{this.third.TotalConfirmed}}</p>\n            <p><b>Total Deaths: </b>{{this.third.TotalDeaths}}</p>\n            <p><b>Total Recovered: </b>{{this.data_sorted[2].TotalRecovered}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"6\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Map of new confirmed cases</ion-card-title>\n            <ion-label>Choose Region</ion-label>\n            <ion-item>\n              <ion-select (ionChange)=\"dropdownFunctionNewCases($event)\">\n                <ion-select-option *ngFor=\"let entry of dropdownOptionsNewCases\" value=\"{{entry.id}}\">\n                  {{entry.val}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content>\n            <google-chart [data]=\"NewCasesMap\"></google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"6\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Map of all confirmed cases</ion-card-title>\n            <ion-label>Choose Region</ion-label>\n            <ion-item>\n              <ion-select (ionChange)=\"dropdownFunctionAllCases($event)\">\n                <ion-select-option *ngFor=\"let entry of dropdownOptionsAllCases\" value=\"{{entry.id}}\">\n                  {{entry.val}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content>\n            <google-chart [data]=\"AllCasesMap\"></google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"table-row\">\n      <ion-col size-xs=\"0\" size-sm=\"0\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\n      padding-right: unset;\n      padding-inline-start: 16px;\n      padding-inline-end: 16px;\">\n        <ngx-datatable class=\"material\" [sortType]=\"'single'\" [loadingIndicator]=\"loadingIndicator\" [headerHeight]=\"50\"\n          [footerHeight]=\"50\" [rows]=\"dataForTable\" [columns]=\"columns\" [columnMode]=\"'force'\" [limit]=\"25\"\n          [reorderable]=\"reorderable\" rowHeight=\"auto\">\n        </ngx-datatable>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"nodata-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">No Table on mobile Devices</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p>The data is not available on mobile devices, please use a desktop to view this table.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <!-- class=\"table-row\" -->\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"6\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Chart new confirmed cases</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <google-chart [data]=\"NewCasesChart\" class=\"NewCasesChart\"></google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"6\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Chart confirmed cases</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <google-chart [data]=\"AllCasesChart\"></google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"nodata-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">No Table on mobile Devices</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p>The data is not available on mobile devices, please use a desktop to view this table.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"table-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Confirmed cases in {{selected_country}} since 2020-01-22\n            </ion-card-title>\n            <ion-item>\n              <ion-label>Choose Country</ion-label>\n              <ion-select (ionChange)=\"dropdownFunctionCountry($event)\">\n                <ion-select-option *ngFor=\"let entry of dropdownOptionsCountry\" value=\"{{entry.id}}\">\n                  {{entry.val}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content>\n            <h1 id=\"no_data_country\" style=\"color: red; visibility: hidden;\">No Data</h1>\n            <google-chart id=\"error_country_select\" [data]='CasesChartLineFR' (chartError)='error($event)'>\n            </google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"table-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Confirmed cases in {{selected_country}} since 2020-01-22\n            </ion-card-title>\n            <ion-item>\n              <ion-label>Choose Country</ion-label>\n              <ion-select (ionChange)=\"dropdownFunctionCountryColumn($event)\">\n                <ion-select-option *ngFor=\"let entry of dropdownOptionsCountryColumn\" value=\"{{entry.id}}\">\n                  {{entry.val}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content>\n            <google-chart id=\"error_country_select\" [data]='CasesChartColumn' (chartError)='error($event)'>\n            </google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"nodata-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">No Table on mobile Devices</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p>The data is not available on mobile devices, please use a desktop to view this table.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"table-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Added new cases in {{selected_country}} since 2020-01-22\n            </ion-card-title>\n            <ion-item>\n              <ion-label>Choose Country</ion-label>\n              <ion-select (ionChange)=\"dropdownFunctionCountryAddedCases($event)\">\n                <ion-select-option *ngFor=\"let entry of dropdownOptionsAddedCases\" value=\"{{entry.id}}\">\n                  {{entry.val}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content>\n            <google-chart id=\"error_country_select\" [data]='CasesAddedCases' (chartError)='error($event)'>\n            </google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"nodata-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">No Table on mobile Devices</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p>The data is not available on mobile devices, please use a desktop to view this table.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"data-row-mobile\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Table on mobile Devices</ion-card-title>\n            <ion-searchbar (ionChange)=\"onSearchTerm($event)\" placeholder=\"search...\"></ion-searchbar>\n          </ion-card-header>\n          <ion-card-content>\n            <nav class=\"accordion arrows\">\n              <div *ngFor=\"let item of all_countries;let i = index\">\n                <input type=\"radio\" name=\"accordion\" id='cb_{{item.CountryCode}}' />\n                <section class=\"box\">\n                  <label class=\"box-title\" for='cb_{{item.CountryCode}}'>Data for {{item.Country}}</label>\n                  <label class=\"box-close\" for=\"acc-close\"></label>\n                  <div class=\"box-content\">\n                    <p> <b>New Confirmed: </b>{{item.NewConfirmed}}</p>\n                    <p> <b>New Deaths: </b>{{item.NewDeaths}}</p>\n                    <p> <b>New Recovered: </b>{{item.NewRecovered}}</p>\n                    <hr>\n                    <p> <b>Total Confirmed: </b>{{item.TotalConfirmed}}</p>\n                    <p> <b>Total Deaths: </b>{{item.TotalDeaths}}</p>\n                    <p> <b>Total Recoverd: </b>{{item.TotalRecovered}}</p>\n                  </div>\n                </section>\n                <input type=\"radio\" name=\"accordion\" id=\"acc-close\" />\n              </div>\n            </nav>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n\n\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"noti\" id=\"noti\">\n    <div class=\"rectangle\">\n      <div class=\"notification-text\">\n        <ion-icon name=\"information-circle\"></ion-icon>\n        <span>&nbsp;&nbsp;Data from: <a href=\"https://covid19api.com/\" style=\"color: white;\"\n            target=\"_blank\">https://covid19api.com/</a></span>\n        <ion-icon name=\"close\" style=\"position: absolute; right: 10px; cursor: pointer;\" (click)=\"closeNoti()\">\n        </ion-icon>\n\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-google-charts */ "omRQ");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["Ng2GoogleChartsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n@media (max-width: 1200px) {\n  .table-row {\n    display: none;\n  }\n\n  .nodata-row {\n    display: flex;\n  }\n\n  .data-row-mobile {\n    display: flex;\n  }\n\n  .data-row-mobile-header {\n    text-align: center;\n    font-size: 1rem;\n  }\n\n  .box-title {\n    font-size: 0.87rem;\n  }\n\n  .NewCasesChart div {\n    height: 30%;\n  }\n}\n@media (min-width: 1200px) {\n  .table-row {\n    display: flex;\n  }\n\n  .nodata-row {\n    display: none;\n  }\n\n  .data-row-mobile {\n    display: none;\n  }\n}\n.accordion {\n  width: 100%;\n}\n.accordion input {\n  display: none;\n}\n.box {\n  position: relative;\n  background: white;\n  height: 64px;\n  transition: all 0.15s ease-in-out;\n}\n.box::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  box-shadow: 0 -1px 0 #e5e5e5, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);\n}\nheader.box {\n  background: #00BCD4;\n  z-index: 100;\n  cursor: initial;\n  box-shadow: 0 -1px 0 #e5e5e5, 0 0 2px -2px rgba(0, 0, 0, 0.12), 0 2px 4px -4px rgba(0, 0, 0, 0.24);\n}\nheader .box-title {\n  margin: 0;\n  font-weight: normal;\n  font-size: 16pt;\n  color: white;\n  cursor: initial;\n}\n.box-title {\n  width: calc(100% - 40px);\n  height: 64px;\n  line-height: 64px;\n  padding: 0 20px;\n  display: inline-block;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n.box-content {\n  width: calc(100% - 40px);\n  padding: 30px 20px;\n  font-size: 11pt;\n  color: rgba(0, 0, 0, 0.54);\n  display: none;\n}\n.box-close {\n  position: absolute;\n  height: 64px;\n  width: 100%;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n  display: none;\n}\ninput:checked + .box {\n  height: auto;\n  margin: 16px 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16), 0 6px 12px rgba(0, 0, 0, 0.32);\n}\ninput:checked + .box .box-title {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.18);\n}\ninput:checked + .box .box-content,\ninput:checked + .box .box-close {\n  display: inline-block;\n}\n.arrows section .box-title {\n  padding-left: 44px;\n  width: calc(100% - 64px);\n}\n.arrows section .box-title:before {\n  position: absolute;\n  display: block;\n  content: \"›\";\n  font-size: 18pt;\n  left: 20px;\n  top: -2px;\n  transition: transform 0.15s ease-in-out;\n  color: rgba(0, 0, 0, 0.54);\n}\ninput:checked + section.box .box-title:before {\n  transform: rotate(90deg);\n}\n.noti {\n  position: fixed;\n  right: 25px;\n  bottom: 10px;\n}\n.rectangle {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  width: 50px;\n  height: 50px;\n  background: #380848;\n  transform: scale(0);\n  border-radius: 50%;\n  color: white;\n  opacity: 0;\n  overflow: hidden;\n  -webkit-animation: scale-in 0.3s ease-out forwards, expand 0.35s 0.25s ease-out forwards;\n          animation: scale-in 0.3s ease-out forwards, expand 0.35s 0.25s ease-out forwards;\n}\n.notification-text {\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  -webkit-animation: fade-in 0.65s ease-in forwards;\n          animation: fade-in 0.65s ease-in forwards;\n}\n@-webkit-keyframes scale-in {\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-in {\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes expand {\n  50% {\n    width: 350px;\n    border-radius: 6px;\n  }\n  100% {\n    width: 300px;\n    border-radius: 4px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -1px rgba(0, 0, 0, 0.12);\n  }\n}\n@keyframes expand {\n  50% {\n    width: 350px;\n    border-radius: 6px;\n  }\n  100% {\n    width: 300px;\n    border-radius: 4px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -1px rgba(0, 0, 0, 0.12);\n  }\n}\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0.8;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0.8;\n  }\n}\n#menu.bottom {\n  position: absolute;\n  bottom: 0;\n}\n#menu.top {\n  position: fixed;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDQztJQUNDLGFBQUE7RUFFQTs7RUFDRDtJQUNDLGFBQUE7RUFFQTs7RUFDRDtJQUNDLGFBQUE7RUFFQTs7RUFDRDtJQUNDLGtCQUFBO0lBQ0EsZUFBQTtFQUVBOztFQUNEO0lBRUMsa0JBQUE7RUFDQTs7RUFFRDtJQUNDLFdBQUE7RUFDQTtBQUNGO0FBR0E7RUFDQztJQUNDLGFBQUE7RUFEQTs7RUFJRDtJQUNDLGFBQUE7RUFEQTs7RUFJRDtJQUNDLGFBQUE7RUFEQTtBQUNGO0FBS0E7RUFDQyxXQUFBO0FBSEQ7QUFNQTtFQUNDLGFBQUE7QUFIRDtBQU1BO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQUhEO0FBTUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0ZBQUE7QUFIRDtBQU1BO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtHQUFBO0FBSEQ7QUFNQTtFQUNDLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUhEO0FBTUE7RUFDQyx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFFQSxpQkFBQTtBQUhEO0FBTUE7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtBQUhEO0FBTUE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUhEO0FBTUE7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVFQUFBO0FBSEQ7QUFNQTtFQUNDLDRDQUFBO0FBSEQ7QUFNQTs7RUFFQyxxQkFBQTtBQUhEO0FBTUE7RUFDQyxrQkFBQTtFQUNBLHdCQUFBO0FBSEQ7QUFNQTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLDBCQUFBO0FBSEQ7QUFNQTtFQUNDLHdCQUFBO0FBSEQ7QUFPQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpEO0FBT0E7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0ZBQUE7VUFBQSxnRkFBQTtBQUpEO0FBUUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQUxEO0FBUUE7RUFDQztJQUNDLG1CQUFBO0lBQ0EsVUFBQTtFQUxBO0FBQ0Y7QUFDQTtFQUNDO0lBQ0MsbUJBQUE7SUFDQSxVQUFBO0VBTEE7QUFDRjtBQVFBO0VBQ0M7SUFDQyxZQUFBO0lBQ0Esa0JBQUE7RUFOQTtFQVNEO0lBQ0MsWUFBQTtJQUNBLGtCQUFBO0lBQ0EseUhBQUE7RUFQQTtBQUNGO0FBSEE7RUFDQztJQUNDLFlBQUE7SUFDQSxrQkFBQTtFQU5BO0VBU0Q7SUFDQyxZQUFBO0lBQ0Esa0JBQUE7SUFDQSx5SEFBQTtFQVBBO0FBQ0Y7QUFZQTtFQUNDO0lBQ0MsVUFBQTtFQVZBO0VBYUQ7SUFDQyxZQUFBO0VBWEE7QUFDRjtBQUlBO0VBQ0M7SUFDQyxVQUFBO0VBVkE7RUFhRDtJQUNDLFlBQUE7RUFYQTtBQUNGO0FBY0E7RUFDQyxrQkFBQTtFQUNBLFNBQUE7QUFaRDtBQWVBO0VBQ0MsZUFBQTtFQUNBLE1BQUE7QUFaRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC50YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubm9kYXRhLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5kYXRhLXJvdy1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuZGF0YS1yb3ctbW9iaWxlLWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5ib3gtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC44N3JlbTtcbiAgfVxuXG4gIC5OZXdDYXNlc0NoYXJ0IGRpdiB7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5ub2RhdGEtcm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmRhdGEtcm93LW1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmFjY29yZGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWNjb3JkaW9uIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogNjRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYm94OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3gtc2hhZG93OiAwIC0xcHggMCAjZTVlNWU1LCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG5oZWFkZXIuYm94IHtcbiAgYmFja2dyb3VuZDogIzAwQkNENDtcbiAgei1pbmRleDogMTAwO1xuICBjdXJzb3I6IGluaXRpYWw7XG4gIGJveC1zaGFkb3c6IDAgLTFweCAwICNlNWU1ZTUsIDAgMCAycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCA0cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG5oZWFkZXIgLmJveC10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB0O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuLmJveC10aXRsZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5ib3gtY29udGVudCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICBmb250LXNpemU6IDExcHQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYm94LWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5ib3gge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTZweCAwO1xuICBib3gtc2hhZG93OiAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5ib3ggLmJveC10aXRsZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLmJveCAuYm94LWNvbnRlbnQsXG5pbnB1dDpjaGVja2VkICsgLmJveCAuYm94LWNsb3NlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYXJyb3dzIHNlY3Rpb24gLmJveC10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogNDRweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDY0cHgpO1xufVxuXG4uYXJyb3dzIHNlY3Rpb24gLmJveC10aXRsZTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIuKAulwiO1xuICBmb250LXNpemU6IDE4cHQ7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogLTJweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIHNlY3Rpb24uYm94IC5ib3gtdGl0bGU6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4ubm90aSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLnJlY3RhbmdsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMzgwODQ4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYW5pbWF0aW9uOiBzY2FsZS1pbiAwLjNzIGVhc2Utb3V0IGZvcndhcmRzLCBleHBhbmQgMC4zNXMgMC4yNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi5ub3RpZmljYXRpb24tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuNjVzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUtaW4ge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZXhwYW5kIHtcbiAgNTAlIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG4jbWVudS5ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cblxuI21lbnUudG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG59Il19 */");

/***/ }),

/***/ "omRQ":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/__ivy_ngcc__/fesm2015/ng2-google-charts.js ***!
  \***********************************************************************************/
/*! exports provided: ChartHTMLTooltip, GoogleChartComponent, GoogleChartEditor, GoogleChartsControlComponent, GoogleChartsDashboardComponent, GoogleChartsLoaderService, Ng2GoogleChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function() { return ChartHTMLTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return GoogleChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartEditor", function() { return GoogleChartEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsControlComponent", function() { return GoogleChartsControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsDashboardComponent", function() { return GoogleChartsDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsLoaderService", function() { return GoogleChartsLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2GoogleChartsModule", function() { return Ng2GoogleChartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GoogleChartsLoaderService = class GoogleChartsLoaderService {
    constructor(localeId, googleChartsSettings) {
        this.googleChartsSettings = googleChartsSettings;
        this.googleScriptLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.googleScriptIsLoading = false;
        this.localeId = localeId;
        this.loadGoogleChartsScriptPromise = new Promise((resolve, reject) => {
            if (typeof google !== 'undefined' && google.charts) {
                resolve();
            }
            else if (!this.googleScriptIsLoading) {
                this.googleScriptIsLoading = true;
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.async = true;
                script.defer = true;
                script.onload = () => {
                    this.googleScriptIsLoading = false;
                    this.googleScriptLoadingNotifier.emit(true);
                    resolve();
                };
                script.onerror = () => {
                    this.googleScriptIsLoading = false;
                    this.googleScriptLoadingNotifier.emit(false);
                    reject();
                };
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                this.googleScriptLoadingNotifier.subscribe((loaded) => {
                    if (loaded) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    }
    load(settings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadGoogleChartsScriptPromise;
            yield new Promise((resolve) => {
                if (!settings) {
                    settings = Object.create(this.googleChartsSettings);
                }
                if (!settings) {
                    settings = {};
                }
                if (!settings.language) {
                    settings.language = this.localeId;
                }
                if (!settings.googleChartsVersion) {
                    settings.googleChartsVersion = '47';
                }
                const _settings = settings;
                _settings.callback = resolve;
                google.charts.load(settings.googleChartsVersion, _settings);
            });
        });
    }
};
GoogleChartsLoaderService.ɵfac = function GoogleChartsLoaderService_Factory(t) { return new (t || GoogleChartsLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('googleChartsSettings', 8)); };
GoogleChartsLoaderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GoogleChartsLoaderService_Factory() { return new GoogleChartsLoaderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])("googleChartsSettings", 8)); }, token: GoogleChartsLoaderService, providedIn: "root" });
GoogleChartsLoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('googleChartsSettings')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Object])
], GoogleChartsLoaderService);

class GoogleChartsDataTable {
    constructor(opt) {
        this.opt = opt;
        this.dataTableChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (opt) {
            this._setDataTable(opt.dataTable, opt.firstRowIsData);
        }
    }
    send() {
        if (this.query === undefined) {
            return;
        }
        this.query.send((queryResponse) => {
            this.setDataTable(queryResponse.getDataTable());
            if (this.opt.queryCallback) {
                this.opt.queryCallback(queryResponse);
            }
        });
    }
    init(opt) {
        if (opt) {
            this.opt = opt;
        }
        if (this.tid !== undefined) {
            // doesn't work, see https://github.com/google/google-visualization-issues/issues/2381
            // this.query.abort();
            window.clearInterval(this.tid);
            this.tid = undefined;
        }
        if (this.opt.dataSourceUrl) {
            this.query = new google.visualization.Query(this.opt.dataSourceUrl);
            if (this.opt.query) {
                this.query.setQuery(this.opt.query);
            }
            if (this.opt.timeout !== undefined) {
                this.query.setTimeout(this.opt.timeout);
            }
            if (this.opt.refreshInterval) {
                // this.query.setRefreshInterval(this.opt.refreshInterval);
                this.tid = window.setInterval(() => {
                    this.send();
                }, this.opt.refreshInterval * 1000);
            }
            this.send();
        }
        else {
            this.setDataTable(this.opt.dataTable);
        }
    }
    /**
     * @returns Underlying google.visualization.DataTable
     */
    getDataTable() {
        return this.dataTable;
    }
    setDataTable(dt, firstRowIsData) {
        if (firstRowIsData === undefined) {
            firstRowIsData = this.opt.firstRowIsData;
        }
        this._setDataTable(dt, firstRowIsData);
        this.dataTableChanged.emit(this.dataTable);
    }
    _setDataTable(dt, firstRowIsData) {
        if (Array.isArray(dt)) {
            dt = google.visualization.arrayToDataTable(dt, firstRowIsData);
        }
        this.dataTable = dt;
        this.reformat();
    }
    /**
     * Applies formatters to data columns, if defined
     */
    reformat() {
        const dt = this.dataTable;
        if (dt === undefined) {
            return;
        }
        if (this.opt.formatters === undefined) {
            return;
        }
        for (const formatterConfig of this.opt.formatters) {
            let formatter;
            if (formatterConfig.type === 'PatternFormat') {
                const fmtOptions = formatterConfig.options;
                formatter = new google.visualization.PatternFormat(fmtOptions.pattern);
                formatter.format(dt, formatterConfig.columns, fmtOptions.dstColumnIndex);
                continue;
            }
            const formatterConstructor = google.visualization[formatterConfig.type];
            const formatterOptions = formatterConfig.options;
            formatter = new formatterConstructor(formatterOptions);
            if (formatterConfig.type === 'ColorFormat' && formatterOptions) {
                const fmtOptions = formatterOptions;
                for (const range of fmtOptions.ranges) {
                    if (typeof (range.fromBgColor) !== 'undefined'
                        && typeof (range.toBgColor) !== 'undefined') {
                        formatter.addGradientRange(range.from, range.to, range.color, range.fromBgColor, range.toBgColor);
                    }
                    else {
                        formatter.addRange(range.from, range.to, range.color, range.bgcolor);
                    }
                }
            }
            for (const col of formatterConfig.columns) {
                formatter.format(dt, col);
            }
        }
    }
}
GoogleChartsDataTable.ɵfac = function GoogleChartsDataTable_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"](); };
GoogleChartsDataTable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GoogleChartsDataTable, outputs: { dataTableChanged: "dataTableChanged" } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartsDataTable.prototype, "dataTableChanged", void 0);

class ChartHTMLTooltip {
    constructor(el) {
        this.el = el;
    }
    setPosition(x, y) {
        this.el.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
        this.el.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
    }
    getDOMElement() {
        return this.el;
    }
}
ChartHTMLTooltip.PIXELS = 'px';

let GoogleChartComponent = class GoogleChartComponent {
    constructor(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
        this.mouseOverListener = (item) => {
            const event = this.parseMouseEvent(item);
            event.tooltip = this.getHTMLTooltip();
            return event;
        };
        this.mouseOutListener = (item) => {
            const event = this.parseMouseEvent(item);
            return event;
        };
        this.selectListener = () => {
            const event = {
                message: 'select',
                row: null,
                column: null,
                selectedRowValues: [],
                selectedRowFormattedValues: [],
                columnLabel: ''
            };
            const s = this.wrapper.visualization.getSelection();
            const gs = s[s.length - 1];
            if (!gs) {
                event.message = 'deselect';
                return event;
            }
            const selection = gs;
            if (gs.row != null) {
                event.row = selection.row;
                const selectedRowValues = [];
                const selectedRowFormattedValues = [];
                const dataTable = this.wrapper.getDataTable();
                const numberOfColumns = dataTable.getNumberOfColumns();
                for (let i = 0; i < numberOfColumns; i++) {
                    selectedRowValues.push(dataTable.getValue(selection.row, i));
                    selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
                }
                event.selectedRowValues = selectedRowValues;
                event.selectedRowFormattedValues = selectedRowFormattedValues;
            }
            if (selection.column != null) {
                event.column = selection.column;
                event.columnLabel = this.getColumnLabelAtPosition(selection);
            }
            if (gs.name) {
                event.columnLabel = gs.name;
            }
            return event;
        };
        this.chartSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartSelectOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartReadyOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartErrorOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOverOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOutOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.regionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.regionClickOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.HTMLel = this.el.nativeElement.querySelector('div');
        if (Object.isExtensible(this.data)) {
            this.data.component = this;
        }
        this.options = this.data.options;
        this.init().then(() => {
            this.draw();
        });
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loaderService.load();
            this.recreateWrapper();
        });
    }
    recreateWrapper() {
        if (this.wrapper === undefined || this.wrapper.getChartType() !== this.data.chartType) {
            this.dataTable = new GoogleChartsDataTable(this.data);
            this.dataTable.dataTableChanged.subscribe((dt) => {
                this._draw();
            });
            // see dataTable in https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart
            let temp = this.data;
            if (this.data.firstRowIsData) {
                temp = Object.assign(temp, this.data);
                temp.dataTable = this.dataTable.getDataTable();
            }
            this.wrapper = new google.visualization.ChartWrapper(temp);
            this.registerChartWrapperEvents();
            /* Calling draw even without data is the only way to pass the HTMl element
               when using the chart in a dashboard. Don't do this in all other cases:
               it breaks formatters with remote data source, hence the conditional. */
            if (temp.dataTable === undefined && temp.dataSourceUrl === undefined) {
                try {
                    this.wrapper.draw(this.HTMLel);
                }
                catch (err) { }
            }
        }
    }
    _draw() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dt = this.dataTable.getDataTable();
            if (dt === undefined) {
                return;
            }
            this.convertOptions();
            this.recreateWrapper();
            this.wrapper.setOptions(this.options);
            this.wrapper.setDataTable(dt);
            this.wrapper.draw(this.HTMLel);
        });
    }
    getDataTable() {
        return this.dataTable;
    }
    draw(value) {
        if (value === undefined) {
            value = this.data;
        }
        this.options = value.options;
        this.dataTable.init(value);
    }
    getSelectorBySeriesType(seriesType) {
        const selectors = {
            bars: 'bar#%s#%r',
            haxis: 'hAxis#0#label',
            line: 'point#%s#%r',
            legend: 'legendentry#%s',
            area: 'point#%s#%r'
        };
        const selector = selectors[seriesType];
        return selector;
    }
    /**
     * Given a column number, counts how many
     * columns have rol=="data". Those are mapped
     * one-to-one to the series array. When rol is not defined
     * a column of type number means a series column.
     * @param column to inspect
     */
    getSeriesByColumn(column) {
        let series = 0;
        const dataTable = this.wrapper.getDataTable();
        for (let i = column - 1; i >= 0; i--) {
            const role = dataTable.getColumnRole(i);
            const type = dataTable.getColumnType(i);
            if (role === 'data' || type === 'number') {
                series++;
            }
        }
        return series;
    }
    getBoundingBoxForItem(item) {
        let boundingBox = { top: 0, left: 0, width: 0, height: 0 };
        if (this.cli) {
            const column = item.column;
            const series = this.getSeriesByColumn(column);
            const row = item.row;
            let seriesType = this.options.seriesType;
            if (this.options.series && this.options.series[series] && this.options.series[series].type) {
                seriesType = this.options.series[series].type;
            }
            if (seriesType) {
                let selector = this.getSelectorBySeriesType(seriesType);
                if (selector) {
                    selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
                    const box = this.cli.getBoundingBox(selector);
                    if (box) {
                        boundingBox = box;
                    }
                }
            }
        }
        return boundingBox;
    }
    getValueAtPosition(position) {
        if (position.row == null) {
            return null;
        }
        const dataTable = this.wrapper.getDataTable();
        const value = dataTable.getValue(position.row, position.column);
        return value;
    }
    getColumnTypeAtPosition(position) {
        const dataTable = this.wrapper.getDataTable();
        const type = dataTable.getColumnType(position.column) || '';
        return type;
    }
    getColumnLabelAtPosition(position) {
        const dataTable = this.wrapper.getDataTable();
        const type = dataTable.getColumnLabel(position.column) || '';
        return type;
    }
    getHTMLTooltip() {
        const tooltipER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"](this.el.nativeElement.querySelector('.google-visualization-tooltip'));
        return new ChartHTMLTooltip(tooltipER);
    }
    parseMouseEvent(item) {
        const chartType = this.wrapper.getChartType();
        let eventColumn = item.column;
        if (eventColumn == null) {
            switch (chartType) {
                case 'Timeline':
                    eventColumn = this.wrapper.getDataTable().getNumberOfColumns() === 3 ? 0 : 1;
                    break;
                default:
                    eventColumn = 0;
            }
        }
        const eventRow = item.row;
        const myItem = {
            row: eventRow,
            column: eventColumn
        };
        const event = {
            position: item,
            boundingBox: this.getBoundingBoxForItem(myItem),
            value: this.getValueAtPosition(myItem),
            columnType: this.getColumnTypeAtPosition(myItem),
            columnLabel: this.getColumnLabelAtPosition(myItem)
        };
        return event;
    }
    unregisterEvents() {
        google.visualization.events.removeAllListeners(this.wrapper.getChart());
        google.visualization.events.removeAllListeners(this.wrapper);
    }
    registerChartEvents() {
        const chart = this.wrapper.getChart();
        this.cli = chart.getChartLayoutInterface ? chart.getChartLayoutInterface() : null;
        if (this.mouseOver.observers.length > 0) {
            google.visualization.events.addListener(chart, 'onmouseover', (item) => {
                const event = this.parseMouseEvent(item);
                event.tooltip = this.getHTMLTooltip();
                this.mouseOver.emit(event);
            });
        }
        if (this.mouseOverOneTime.observers.length > 0) {
            google.visualization.events.addOneTimeListener(chart, 'onmouseover', (item) => {
                const event = this.parseMouseEvent(item);
                event.tooltip = this.getHTMLTooltip();
                this.mouseOverOneTime.emit(event);
            });
        }
        if (this.mouseOut.observers.length > 0) {
            google.visualization.events.addListener(chart, 'onmouseout', (item) => {
                const event = this.parseMouseEvent(item);
                this.mouseOut.emit(event);
            });
        }
        if (this.mouseOutOneTime.observers.length > 0) {
            google.visualization.events.addOneTimeListener(chart, 'onmouseout', (item) => {
                const event = this.parseMouseEvent(item);
                this.mouseOutOneTime.emit(event);
            });
        }
        if (this.data.chartType === 'GeoChart') {
            if (this.regionClick.observers.length > 0) {
                google.visualization.events.addListener(chart, 'regionClick', (item) => {
                    this.regionClick.emit(item);
                });
            }
            if (this.regionClickOneTime.observers.length > 0) {
                google.visualization.events.addOneTimeListener(chart, 'regionClick', (item) => {
                    this.regionClick.emit(item);
                });
            }
        }
    }
    registerChartWrapperEvents() {
        google.visualization.events.addListener(this.wrapper, 'ready', () => {
            this.chartReady.emit({ message: 'Chart ready' });
        });
        google.visualization.events.addOneTimeListener(this.wrapper, 'ready', () => {
            this.chartReadyOneTime.emit({ message: 'Chart ready (one time)' });
            this.registerChartEvents();
        });
        google.visualization.events.addListener(this.wrapper, 'error', (error) => {
            this.chartError.emit(error);
        });
        google.visualization.events.addOneTimeListener(this.wrapper, 'error', (error) => {
            this.chartErrorOneTime.emit(error);
        });
        this.addListener(this.wrapper, 'select', this.selectListener, this.chartSelect);
        this.addOneTimeListener(this.wrapper, 'select', this.selectListener, this.chartSelectOneTime);
    }
    addListener(source, eventType, listenerFn, evEmitter) {
        google.visualization.events.addListener(source, eventType, () => {
            evEmitter.emit(listenerFn());
        });
    }
    addOneTimeListener(source, eventType, listenerFn, evEmitter) {
        google.visualization.events.addOneTimeListener(source, eventType, () => {
            evEmitter.emit(listenerFn());
        });
    }
    convertOptions() {
        try {
            this.options = google.charts[this.data.chartType].convertOptions(this.options);
        }
        catch (error) {
            return;
        }
    }
};
GoogleChartComponent.ɵfac = function GoogleChartComponent_Factory(t) { return new (t || GoogleChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService)); };
GoogleChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GoogleChartComponent, selectors: [["google-chart"]], inputs: { data: "data" }, outputs: { chartSelect: "chartSelect", chartSelectOneTime: "chartSelectOneTime", chartReady: "chartReady", chartReadyOneTime: "chartReadyOneTime", chartError: "chartError", chartErrorOneTime: "chartErrorOneTime", mouseOver: "mouseOver", mouseOverOneTime: "mouseOverOneTime", mouseOut: "mouseOut", mouseOutOneTime: "mouseOutOneTime", regionClick: "regionClick", regionClickOneTime: "regionClickOneTime" }, decls: 1, vars: 0, template: function GoogleChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
    } }, encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], GoogleChartComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartReady", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartReadyOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartError", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartErrorOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartSelectOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "mouseOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "mouseOverOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "mouseOut", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "mouseOutOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "regionClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "regionClickOneTime", void 0);
GoogleChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        GoogleChartsLoaderService])
], GoogleChartComponent);

let GoogleChartsDashboardComponent = class GoogleChartsDashboardComponent {
    constructor(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
        this.el = el;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.data.component = this;
        this.init().then(() => {
            if (!this.dataTable) {
                this.dataTable = new GoogleChartsDataTable(this.data);
                this.dataTable.dataTableChanged.subscribe((dt) => {
                    this._draw();
                });
            }
            this.draw();
        });
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loaderService.load({ packages: ['controls'] });
            this.dashboard = new google.visualization.Dashboard(this.el.nativeElement.querySelector('div'));
            for (const b of this.data.bind) {
                let controls = b[0];
                let charts = b[1];
                if (!(controls instanceof Array)) {
                    controls = [controls];
                }
                if (!(charts instanceof Array)) {
                    charts = [charts];
                }
                for (const c of controls) {
                    yield c.component.ensureInit();
                }
                for (const c of charts) {
                    yield c.component.init();
                    const data = c.component.data;
                    if (data.dataTable !== undefined || data.dataSourceUrl !== undefined) {
                        throw Error('dataTable and dataSourceUrl cannot be specified when ' +
                            'chart is drawn in a Dashboard');
                    }
                }
                this.dashboard.bind(controls.map(x => x.component.wrapper), charts.map(x => x.component.wrapper));
            }
        });
    }
    draw(value) {
        this.dataTable.init(value);
    }
    _draw() {
        this.dashboard.draw(this.dataTable.getDataTable());
    }
};
GoogleChartsDashboardComponent.ɵfac = function GoogleChartsDashboardComponent_Factory(t) { return new (t || GoogleChartsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService)); };
GoogleChartsDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GoogleChartsDashboardComponent, selectors: [["google-charts-dashboard"]], inputs: { data: "data" }, decls: 1, vars: 0, template: function GoogleChartsDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
    } }, encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], GoogleChartsDashboardComponent.prototype, "data", void 0);
GoogleChartsDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        GoogleChartsLoaderService])
], GoogleChartsDashboardComponent);

let GoogleChartsControlComponent = class GoogleChartsControlComponent {
    constructor(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
        this.el = el;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.data.component = this;
    }
    ensureInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.wrapper) {
                return;
            }
            yield this.loaderService.load({ packages: ['controls'] });
            let opt;
            opt = Object.create(this.data);
            opt.containerId = this.el.nativeElement.querySelector('div');
            this.wrapper = new google.visualization.ControlWrapper(opt);
        });
    }
};
GoogleChartsControlComponent.ɵfac = function GoogleChartsControlComponent_Factory(t) { return new (t || GoogleChartsControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService)); };
GoogleChartsControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GoogleChartsControlComponent, selectors: [["google-charts-control"]], inputs: { data: "data" }, decls: 1, vars: 0, template: function GoogleChartsControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
    } }, encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], GoogleChartsControlComponent.prototype, "data", void 0);
GoogleChartsControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        GoogleChartsLoaderService])
], GoogleChartsControlComponent);

let Ng2GoogleChartsModule = class Ng2GoogleChartsModule {
};
Ng2GoogleChartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Ng2GoogleChartsModule });
Ng2GoogleChartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function Ng2GoogleChartsModule_Factory(t) { return new (t || Ng2GoogleChartsModule)(); }, providers: [
        GoogleChartsLoaderService
    ] });

function isComponent(chart) {
    return chart.wrapper !== undefined;
}
let GoogleChartEditor = class GoogleChartEditor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    createEditor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.chartEditor !== undefined) {
                return;
            }
            yield this.loaderService.load({ packages: ['charteditor'] });
            this.chartEditor = new google.visualization.ChartEditor();
            google.visualization.events.addListener(this.chartEditor, 'ok', () => {
                const wrapper = this.chartEditor.getChartWrapper();
                this.comp.wrapper = wrapper;
                this.comp.data.chartType = wrapper.getChartType();
                if (this.comp.data.options !== undefined || Object.isExtensible(this.comp.data)) {
                    this.comp.data.options = wrapper.getOptions();
                }
                this.comp.wrapper.draw();
            });
        });
    }
    openDialog(chart, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.createEditor();
            return new Promise((resolve, reject) => {
                this.comp = isComponent(chart) ? chart : chart.component;
                this.chartEditor.openDialog(this.comp.wrapper, options);
                google.visualization.events.addListener(this.chartEditor, 'ok', () => {
                    resolve(this.comp.wrapper);
                });
                google.visualization.events.addListener(this.chartEditor, 'cancel', () => {
                    reject();
                });
            });
        });
    }
};
GoogleChartEditor.ɵfac = function GoogleChartEditor_Factory(t) { return new (t || GoogleChartEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleChartsLoaderService)); };
GoogleChartEditor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GoogleChartEditor_Factory() { return new GoogleChartEditor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(GoogleChartsLoaderService)); }, token: GoogleChartEditor, providedIn: "root" });
GoogleChartEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleChartsLoaderService])
], GoogleChartEditor);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: ['googleChartsSettings']
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, null); })();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'google-chart',
                template: '<div></div>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GoogleChartsLoaderService }]; }, { chartSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartSelectOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartReadyOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartErrorOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOverOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOutOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], regionClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], regionClickOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'google-charts-dashboard',
                template: '<div></div>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GoogleChartsLoaderService }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'google-charts-control',
                template: '<div></div>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GoogleChartsLoaderService }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Ng2GoogleChartsModule, { declarations: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent], exports: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2GoogleChartsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    GoogleChartComponent,
                    GoogleChartsDashboardComponent,
                    GoogleChartsControlComponent,
                ],
                providers: [
                    GoogleChartsLoaderService
                ],
                exports: [
                    GoogleChartComponent,
                    GoogleChartsDashboardComponent,
                    GoogleChartsControlComponent,
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartEditor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: GoogleChartsLoaderService }]; }, null); })();

/*
 * Public API Surface of ng2-google-charts
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-google-charts.js.map

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "Pe/6");







let HomePage = class HomePage {
    constructor(loadingController, dataService, toastController) {
        this.loadingController = loadingController;
        this.dataService = dataService;
        this.toastController = toastController;
        this.i = 1;
        this.user = "";
        this.selected_country = "Spain";
        //Array to fill the Dropdown List
        this.dropdownOptionsNewCases = [
            { id: "005", val: 'South America' },
            { id: "013", val: 'Central America' },
            { id: "021", val: 'North America' },
            { id: "150", val: 'Europe' },
            { id: "002", val: 'Africa' },
            { id: "142", val: 'Asia' },
            { id: "009", val: 'Oceania' },
        ];
        this.dropdownOptionsAllCases = [
            { id: "005", val: 'South America' },
            { id: "013", val: 'Central America' },
            { id: "021", val: 'North America' },
            { id: "150", val: 'Europe' },
            { id: "002", val: 'Africa' },
            { id: "142", val: 'Asia' },
            { id: "009", val: 'Oceania' },
        ];
        this.dropdownOptionsCountry = [];
        this.dropdownOptionsCountryColumn = [];
        this.dropdownOptionsAddedCases = [];
        this.overall = "";
        this.first = "";
        this.second = "";
        this.third = "";
        this.dataMap_New = [
            ['Country', 'Cases'],
        ];
        this.dataMap_All = [
            ['Country', 'Cases'],
        ];
        this.dataMap_All = [
            ['Country', 'Cases'],
        ];
        this.dataCountry_DE = [
            ['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases'],
        ];
        this.dataCountry_FR = [
            ['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases'],
        ];
        this.dataCountry_Colum = [
            ['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases'],
        ];
        this.data_sorted_all_country = [
            ['Country', 'Cases'],
        ];
        this.dataCountry_Added_Cases = [
            ['Date', 'Added Cases'],
        ];
        this.CasesChartColumn = [
            ['Country', 'Cases'],
        ];
        this.data_sorted_new_country = [
            ['Country', 'Cases'],
        ];
        this.overall = "";
        this.dataForTable = [];
        this.data_sorted = [];
        this.all_countries_for_search = [];
        this.columns = [
            { prop: 'Index' },
            { prop: 'CountryCode' },
            { prop: 'Country' },
            { prop: 'NewDeaths' },
            { prop: 'NewConfirmed' },
            { prop: 'NewRecovered' },
            { prop: 'AllDeaths' },
            { prop: 'AllConfirmed' },
            { prop: 'AllRecovered' }
        ];
        this.showmore == false;
        this.dataService.getUserIP().then(res => {
            console.log(res);
            this.user = res['country'];
            this.selected_country = this.user;
            console.log(this.selected_country);
        });
    }
    dropdownFunctionNewCases($event) {
        console.log($event.detail.value);
        this.NewCasesMap.dataTable = this.dataMap_New;
        this.NewCasesMap.options.region = $event.detail.value.toString();
        this.NewCasesMap.component.draw();
    }
    dropdownFunctionAllCases($event) {
        console.log($event.detail.value);
        this.AllCasesMap.dataTable = this.dataMap_All;
        this.AllCasesMap.options.region = $event.detail.value.toString();
        this.AllCasesMap.component.draw();
    }
    dropdownFunctionCountry($event) {
        document.getElementById('error_country_select').style.visibility = "visible";
        document.getElementById('no_data_country').style.visibility = "hidden";
        this.selected_country = $event.detail.value;
        this.dataCountry_FR = [['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases']];
        this.dataService.getAllDataforCountry($event.detail.value).then(res => {
            res.forEach((element, index) => {
                if (index != 0) {
                    this.dataCountry_FR.push([element['Date'].toString().split("T", 1)[0], element['Confirmed'], element['Deaths'], element['Recovered'], (res[index - 1]['Confirmed'] * -1) + res[index]['Confirmed']]);
                }
                else {
                    console.log("first");
                }
            });
        }).then(res => {
            this.CasesChartLineFR.dataTable = this.dataCountry_FR;
            this.CasesChartLineFR.component.draw();
        });
    }
    dropdownFunctionCountryAddedCases($event) {
        this.selected_country = $event.detail.value;
        this.dataCountry_Added_Cases = [['Date', 'Added Cases']];
        this.dataService.getAllDataforCountry($event.detail.value).then(res => {
            res.forEach((element, index) => {
                if (index != 0) {
                    let t = (res[index - 1]['Confirmed'] * -1) + res[index]['Confirmed'];
                    if (t < 0) {
                        this.dataCountry_Added_Cases.push([element['Date'].toString().split("T", 1)[0], 0]);
                    }
                    else {
                        this.dataCountry_Added_Cases.push([element['Date'].toString().split("T", 1)[0], t]);
                    }
                }
            });
        }).then(res => {
            this.CasesAddedCases.dataTable = this.dataCountry_Added_Cases;
            this.CasesAddedCases.component.draw();
        });
    }
    dropdownFunctionCountryColumn($event) {
        document.getElementById('error_country_select').style.visibility = "visible";
        document.getElementById('no_data_country').style.visibility = "hidden";
        this.selected_country = $event.detail.value;
        this.dataCountry_Colum = [['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases']];
        this.dataService.getAllDataforCountry($event.detail.value).then(res => {
            res.forEach((element, index) => {
                this.dataCountry_Colum.push([element['Date'].toString().split("T", 1)[0], element['Confirmed'], element['Deaths'], element['Recovered'], (res[index - 1]['Confirmed'] * -1) + res[index]['Confirmed']]);
            });
        }).then(res => {
            this.CasesChartColumn.dataTable = this.dataCountry_Colum;
            this.CasesChartColumn.component.draw();
        });
    }
    error(event) {
        console.log(event);
        // document.getElementById('error_country_select').style.visibility = "hidden";
        //  document.getElementById('no_data_country').style.visibility = "visible";
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            location.reload();
            event.target.complete();
        }, 100);
    }
    showPosition(position) {
        console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
    }
    ngOnInit() {
        let loading;
        this.loadingController.create({
            message: 'Lade Daten...',
        }).then(res => {
            loading = res;
            loading.present();
            this.dataService.getSummary().then(dataRes => {
                this.overall = dataRes['Global'];
                this.data_sorted = dataRes['Countries'].sort(this.sortByProperty("NewConfirmed"));
                this.data_sorted_all_new = dataRes['Countries'].sort((a, b) => b.NewConfirmed - a.NewConfirmed);
                this.data_sorted_all = dataRes['Countries'].sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
                this.data_sorted.forEach(element => {
                    this.dataMap_All.push([element.CountryCode.toString(), element.TotalConfirmed]);
                    this.dataMap_New.push([element.CountryCode.toString(), element.NewConfirmed]);
                    this.dataForTable.push({
                        Index: this.i,
                        CountryCode: element.CountryCode,
                        Country: element.Country,
                        NewDeaths: element.NewDeaths,
                        NewConfirmed: element.NewConfirmed,
                        NewRecovered: element.NewRecovered,
                        AllDeaths: element.TotalDeaths,
                        AllConfirmed: element.TotalConfirmed,
                        AllRecovered: element.TotalRecovered,
                    });
                    this.i++;
                });
                this.data_sorted_all.forEach(element => {
                    this.data_sorted_all_country.push([element.CountryCode.toString(), element.TotalConfirmed]);
                });
                this.data_sorted_all_new.forEach(element => {
                    this.data_sorted_new_country.push([element.CountryCode.toString(), element.NewConfirmed]);
                });
                this.first = this.data_sorted_all_new[0];
                this.second = this.data_sorted_all_new[1];
                this.third = this.data_sorted_all_new[2];
                this.overall.NewConfirmed = this.overall.NewConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.overall.NewDeaths = this.overall.NewDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.overall.NewRecovered = this.overall.NewRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.overall.TotalConfirmed = this.overall.TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.overall.TotalDeaths = this.overall.TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.overall.TotalRecovered = this.overall.TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.first.NewConfirmed = this.data_sorted_all_new[0].NewConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.first.NewDeaths = this.data_sorted_all_new[0].NewDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.first.NewRecovered = this.data_sorted_all_new[0].NewRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.first.TotalConfirmed = this.data_sorted_all_new[0].TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.first.TotalDeaths = this.data_sorted_all_new[0].TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.first.TotalRecovered = this.data_sorted_all_new[0].TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.second.NewConfirmed = this.data_sorted_all_new[1].NewConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.second.NewDeaths = this.data_sorted_all_new[1].NewDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.second.NewRecovered = this.data_sorted_all_new[1].NewRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.second.TotalConfirmed = this.data_sorted_all_new[1].TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.second.TotalDeaths = this.data_sorted_all_new[1].TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.second.TotalRecovered = this.data_sorted_all_new[1].TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.third.NewConfirmed = this.data_sorted_all_new[2].NewConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.third.NewDeaths = this.data_sorted_all_new[2].NewDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.third.NewRecovered = this.data_sorted_all_new[2].NewRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.third.TotalConfirmed = this.data_sorted_all_new[2].TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.third.TotalDeaths = this.data_sorted_all_new[2].TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                this.third.TotalRecovered = this.data_sorted_all_new[2].TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            }).then(res => {
                this.dataService.getSummary().then(dataRes2 => {
                    this.all_countries = dataRes2['Countries'].sort(this.sortByProperty("NewConfirmed"));
                    this.all_countries_for_search = dataRes2['Countries'].sort(this.sortByProperty("NewConfirmed"));
                });
            }).then(res => {
                this.dataService.getAllCountries().then(allCountries => {
                    let temp = allCountries;
                    temp.sort((a, b) => (a['Country'] > b['Country']) ? 1 : -1);
                    temp.forEach(element => {
                        this.dropdownOptionsCountry.push({ id: element['Slug'], val: element['Country'] });
                        this.dropdownOptionsCountryColumn.push({ id: element['Slug'], val: element['Country'] });
                        this.dropdownOptionsAddedCases.push({ id: element['Slug'], val: element['Country'] });
                    });
                });
            }).then(res => {
                console.log(this.user);
                this.dataService.getAllDataforCountry('germany').then(dataC => {
                    dataC.forEach((element, index) => {
                        if (index != 0) {
                            this.dataCountry_FR.push([element['Date'].toString().split("T", 1)[0], element['Confirmed'], element['Deaths'], element['Recovered'], (dataC[index - 1]['Confirmed'] * -1) + dataC[index]['Confirmed']]);
                            this.dataCountry_Colum.push([element['Date'].toString().split("T", 1)[0], element['Confirmed'], element['Deaths'], element['Recovered'], (dataC[index - 1]['Confirmed'] * -1) + dataC[index]['Confirmed']]);
                            let t = (dataC[index - 1]['Confirmed'] * -1) + dataC[index]['Confirmed'];
                            if (t < 0) {
                                this.dataCountry_Added_Cases.push([element['Date'].toString().split("T", 1)[0], 0]);
                            }
                            else {
                                this.dataCountry_Added_Cases.push([element['Date'].toString().split("T", 1)[0], t]);
                            }
                        }
                    });
                });
            }).then(res => {
                this.useAngularLibrary(loading);
            });
        });
    }
    onSearchTerm(ev) {
        const val = ev.detail.value;
        this.all_countries = this.all_countries_for_search;
        if (val.trim() !== '') {
            this.all_countries = this.all_countries.filter(term => {
                return term['Country'].toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
            });
        }
    }
    sortByProperty(property) {
        return function (a, b) {
            if (a[property] < b[property])
                return 1;
            else if (a[property] > b[property])
                return -1;
            return 0;
        };
    }
    useAngularLibrary(loading) {
        //Geocharts
        this.NewCasesMap = {
            chartType: 'GeoChart',
            dataTable: this.dataMap_New,
            options: {
                'title': 'Map of New Confirmed Cases',
                'region': 'world',
            }
        };
        this.AllCasesMap = {
            chartType: 'GeoChart',
            dataTable: this.dataMap_All,
            options: {
                'title': 'Map of All Confirmed Cases',
                'region': 'world',
            }
        };
        //Piecharts
        this.NewCasesChart = {
            chartType: 'PieChart',
            dataTable: this.data_sorted_new_country,
            options: {
                height: 600,
                'legend': 'none',
            }
        };
        this.AllCasesChart = {
            chartType: 'PieChart',
            dataTable: this.data_sorted_all_country,
            options: {
                height: 600,
                'legend': 'none',
            }
        };
        this.CasesChartLineFR = {
            chartType: 'LineChart',
            dataTable: this.dataCountry_FR,
            options: {
                height: 600,
            }
        };
        //ColumnCharts
        this.CasesChartColumn = {
            chartType: 'ColumnChart',
            dataTable: this.dataCountry_Colum,
            options: {
                height: 600,
                isStacked: true,
            },
        };
        this.CasesAddedCases = {
            chartType: 'LineChart',
            dataTable: this.dataCountry_Added_Cases,
            options: {
                height: 600,
                isStacked: true,
            },
        };
        loading.dismiss();
    }
    closeNoti() {
        document.getElementById('noti').style.opacity = "0.0";
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Error while fetching the data.',
                duration: 2000
            });
            toast.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map
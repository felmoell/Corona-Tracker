(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "Pe/6":
    /*!**************************************!*\
      !*** ./src/services/data.service.ts ***!
      \**************************************/

    /*! exports provided: DataService */

    /***/
    function Pe6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var DataService = /*#__PURE__*/function () {
        function DataService(http) {
          _classCallCheck(this, DataService);

          this.http = http;
        }

        _createClass(DataService, [{
          key: "getSummary",
          value: function getSummary() {
            var url = "https://api.covid19api.com/summary";
            return this.http.get(url).toPromise();
          }
        }, {
          key: "getDataforCountry",
          value: function getDataforCountry(country) {
            var url = "https://api.covid19api.com/country/" + country + "/status/confirmed";
            return this.http.get(url).toPromise();
          }
        }, {
          key: "getAllDataforCountry",
          value: function getAllDataforCountry(country) {
            var url = "https://api.covid19api.com/dayone/country/" + country;
            return this.http.get(url).toPromise();
          }
        }, {
          key: "getAllCountries",
          value: function getAllCountries() {
            var url = "https://api.covid19api.com/countries";
            return this.http.get(url).toPromise();
          }
        }, {
          key: "getUserIP",
          value: function getUserIP() {
            var url = "https://ip.seeip.org/geoip";
            return this.http.get(url).toPromise();
          }
        }]);

        return DataService;
      }();

      DataService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DataService);
      /***/
    },

    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<head>\n  <script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css\">\n  <script type=\"text/javascript\" charset=\"utf8\" src=\"https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js\">\n  </script>\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css\"\n    integrity=\"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2\" crossorigin=\"anonymous\">\n\n  <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\">\n  </script>\n  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js\"\n    integrity=\"sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx\" crossorigin=\"anonymous\">\n  </script>\n</head>\n<ion-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Schmolles-Corona-Tracker\n      \n    </ion-label>\n    <div slot=\"end\"> {{user}}</div>\n  </ion-item>\n  <!--\n  <ion-item lines=\"full\">\n    <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n    <ion-label>\n      Toggle Dark Theme\n    </ion-label>\n    <ion-toggle id=\"themeToggle\" slot=\"end\" [ngModel]=\"darkMode\" (ionChange)=\"cambio()\"></ion-toggle>\n  </ion-item>\n -->\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <script type=\"text/javascript\">\n\n  </script>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"3\">\n        <ion-card id=\"card_1\" class=\"card\">\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">All cases of Covid-19</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p><b>New Confirmed: </b>{{this.overall.NewConfirmed}}</p>\n            <p><b>New Deaths: </b>{{this.overall.NewDeaths}}</p>\n            <p><b>New Recovered: </b>{{this.overall.NewRecovered}}</p>\n            <hr>\n            <p><b>Total Confirmed: </b>{{this.overall.TotalConfirmed}}</p>\n            <p><b>Total Deaths: </b>{{this.overall.TotalDeaths}}</p>\n            <p><b>Total Recovered: </b>{{this.overall.TotalRecovered}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"3\">\n        <ion-card class=\"card\">\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Most cases of Covid-19 in {{this.first.Country}}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p><b>New Confirmed: </b>{{this.first.NewConfirmed}}</p>\n            <p><b>New Deaths: </b>{{this.first.NewDeaths}}</p>\n            <p><b>New Recovered: </b>{{this.first.NewRecovered}}</p>\n            <hr>\n            <p><b>Total Confirmed: </b>{{this.first.TotalConfirmed}}</p>\n            <p><b>Total Deaths: </b>{{this.first.TotalDeaths}}</p>\n            <p><b>Total Recovered: </b>{{this.first.TotalRecovered}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"3\">\n        <ion-card class=\"card\">\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Second most cases of Covid-19 in {{this.second.Country}}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p><b>New Confirmed: </b>{{this.second.NewConfirmed}}</p>\n            <p><b>New Deaths: </b>{{this.second.NewDeaths}}</p>\n            <p><b>New Recovered: </b>{{this.second.NewRecovered}}</p>\n            <hr>\n            <p><b>Total Confirmed: </b>{{this.second.TotalConfirmed}}</p>\n            <p><b>Total Deaths: </b>{{this.second.TotalDeaths}}</p>\n            <p><b>Total Recovered: </b>{{this.second.TotalRecovered}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <!---->\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"3\">\n        <ion-card class=\"card\">\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Third most cases of Covid-19 in {{this.third.Country}}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p><b>New Confirmed: </b>{{this.third.NewConfirmed}}</p>\n            <p><b>New Deaths: </b>{{this.third.NewDeaths}}</p>\n            <p><b>New Recovered: </b>{{this.third.NewRecovered}}</p>\n            <hr>\n            <p><b>Total Confirmed: </b>{{this.third.TotalConfirmed}}</p>\n            <p><b>Total Deaths: </b>{{this.third.TotalDeaths}}</p>\n            <p><b>Total Recovered: </b>{{this.data_sorted[2].TotalRecovered}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"6\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Map of new confirmed cases</ion-card-title>\n            <ion-label>Choose Region</ion-label>\n            <ion-item>\n              <ion-select (ionChange)=\"dropdownFunctionNewCases($event)\">\n                <ion-select-option *ngFor=\"let entry of dropdownOptionsNewCases\" value=\"{{entry.id}}\">\n                  {{entry.val}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content>\n            <google-chart [data]=\"NewCasesMap\"></google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"6\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Map of all confirmed cases</ion-card-title>\n            <ion-label>Choose Region</ion-label>\n            <ion-item>\n              <ion-select (ionChange)=\"dropdownFunctionAllCases($event)\">\n                <ion-select-option *ngFor=\"let entry of dropdownOptionsAllCases\" value=\"{{entry.id}}\">\n                  {{entry.val}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content>\n            <google-chart [data]=\"AllCasesMap\"></google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"table-row\">\n      <ion-col size-xs=\"0\" size-sm=\"0\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\n      padding-right: unset;\n      padding-inline-start: 16px;\n      padding-inline-end: 16px;\">\n        <ngx-datatable class=\"material\" [sortType]=\"'single'\" [loadingIndicator]=\"loadingIndicator\" [headerHeight]=\"50\"\n          [footerHeight]=\"50\" [rows]=\"dataForTable\" [columns]=\"columns\" [columnMode]=\"'force'\" [limit]=\"25\"\n          [reorderable]=\"reorderable\" rowHeight=\"auto\">\n        </ngx-datatable>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"nodata-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">No Table on mobile Devices</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p>The data is not available on mobile devices, please use a desktop to view this table.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <!-- class=\"table-row\" -->\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"6\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Chart new confirmed cases</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <google-chart [data]=\"NewCasesChart\" class=\"NewCasesChart\"></google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"6\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Chart confirmed cases</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <google-chart [data]=\"AllCasesChart\"></google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"nodata-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">No Table on mobile Devices</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p>The data is not available on mobile devices, please use a desktop to view this table.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"table-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Confirmed cases in {{selected_country}} since 2020-01-22\n            </ion-card-title>\n            <ion-item>\n              <ion-label>Choose Country</ion-label>\n              <ion-select (ionChange)=\"dropdownFunctionCountry($event)\">\n                <ion-select-option *ngFor=\"let entry of dropdownOptionsCountry\" value=\"{{entry.id}}\">\n                  {{entry.val}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content>\n            <h1 id=\"no_data_country\" style=\"color: red; visibility: hidden;\">No Data</h1>\n            <google-chart id=\"error_country_select\" [data]='CasesChartLineFR' (chartError)='error($event)'>\n            </google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"table-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Confirmed cases in {{selected_country}} since 2020-01-22\n            </ion-card-title>\n            <ion-item>\n              <ion-label>Choose Country</ion-label>\n              <ion-select (ionChange)=\"dropdownFunctionCountryColumn($event)\">\n                <ion-select-option *ngFor=\"let entry of dropdownOptionsCountryColumn\" value=\"{{entry.id}}\">\n                  {{entry.val}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content>\n            <google-chart id=\"error_country_select\" [data]='CasesChartColumn' (chartError)='error($event)'>\n            </google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"nodata-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">No Table on mobile Devices</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p>The data is not available on mobile devices, please use a desktop to view this table.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"table-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Added new cases in {{selected_country}} since 2020-01-22\n            </ion-card-title>\n            <ion-item>\n              <ion-label>Choose Country</ion-label>\n              <ion-select (ionChange)=\"dropdownFunctionCountryAddedCases($event)\">\n                <ion-select-option *ngFor=\"let entry of dropdownOptionsAddedCases\" value=\"{{entry.id}}\">\n                  {{entry.val}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content>\n            <google-chart id=\"error_country_select\" [data]='CasesAddedCases' (chartError)='error($event)'>\n            </google-chart>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"nodata-row\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">No Table on mobile Devices</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p>The data is not available on mobile devices, please use a desktop to view this table.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"data-row-mobile\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"data-row-mobile-header\">Table on mobile Devices</ion-card-title>\n            <ion-searchbar (ionChange)=\"onSearchTerm($event)\" placeholder=\"search...\"></ion-searchbar>\n          </ion-card-header>\n          <ion-card-content>\n            <nav class=\"accordion arrows\">\n              <div *ngFor=\"let item of all_countries;let i = index\">\n                <input type=\"radio\" name=\"accordion\" id='cb_{{item.CountryCode}}' />\n                <section class=\"box\">\n                  <label class=\"box-title\" for='cb_{{item.CountryCode}}'>Data for {{item.Country}}</label>\n                  <label class=\"box-close\" for=\"acc-close\"></label>\n                  <div class=\"box-content\">\n                    <p> <b>New Confirmed: </b>{{item.NewConfirmed}}</p>\n                    <p> <b>New Deaths: </b>{{item.NewDeaths}}</p>\n                    <p> <b>New Recovered: </b>{{item.NewRecovered}}</p>\n                    <hr>\n                    <p> <b>Total Confirmed: </b>{{item.TotalConfirmed}}</p>\n                    <p> <b>Total Deaths: </b>{{item.TotalDeaths}}</p>\n                    <p> <b>Total Recoverd: </b>{{item.TotalRecovered}}</p>\n                  </div>\n                </section>\n                <input type=\"radio\" name=\"accordion\" id=\"acc-close\" />\n              </div>\n            </nav>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"padding-left: unset;\">\n        <ion-card>\n\n\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"noti\" id=\"noti\">\n    <div class=\"rectangle\">\n      <div class=\"notification-text\">\n        <ion-icon name=\"information-circle\"></ion-icon>\n        <span>&nbsp;&nbsp;Data from: <a href=\"https://covid19api.com/\" style=\"color: white;\"\n            target=\"_blank\">https://covid19api.com/</a></span>\n        <ion-icon name=\"close\" style=\"position: absolute; right: 10px; cursor: pointer;\" (click)=\"closeNoti()\">\n        </ion-icon>\n\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");
      /* harmony import */


      var ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-google-charts */
      "omRQ");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["Ng2GoogleChartsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n@media (max-width: 1200px) {\n  .table-row {\n    display: none;\n  }\n\n  .nodata-row {\n    display: flex;\n  }\n\n  .data-row-mobile {\n    display: flex;\n  }\n\n  .data-row-mobile-header {\n    text-align: center;\n    font-size: 1rem;\n  }\n\n  .box-title {\n    font-size: 0.87rem;\n  }\n\n  .NewCasesChart div {\n    height: 30%;\n  }\n}\n@media (min-width: 1200px) {\n  .table-row {\n    display: flex;\n  }\n\n  .nodata-row {\n    display: none;\n  }\n\n  .data-row-mobile {\n    display: none;\n  }\n}\n.accordion {\n  width: 100%;\n}\n.accordion input {\n  display: none;\n}\n.box {\n  position: relative;\n  background: white;\n  height: 64px;\n  transition: all 0.15s ease-in-out;\n}\n.box::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  box-shadow: 0 -1px 0 #e5e5e5, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);\n}\nheader.box {\n  background: #00BCD4;\n  z-index: 100;\n  cursor: initial;\n  box-shadow: 0 -1px 0 #e5e5e5, 0 0 2px -2px rgba(0, 0, 0, 0.12), 0 2px 4px -4px rgba(0, 0, 0, 0.24);\n}\nheader .box-title {\n  margin: 0;\n  font-weight: normal;\n  font-size: 16pt;\n  color: white;\n  cursor: initial;\n}\n.box-title {\n  width: calc(100% - 40px);\n  height: 64px;\n  line-height: 64px;\n  padding: 0 20px;\n  display: inline-block;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n.box-content {\n  width: calc(100% - 40px);\n  padding: 30px 20px;\n  font-size: 11pt;\n  color: rgba(0, 0, 0, 0.54);\n  display: none;\n}\n.box-close {\n  position: absolute;\n  height: 64px;\n  width: 100%;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n  display: none;\n}\ninput:checked + .box {\n  height: auto;\n  margin: 16px 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16), 0 6px 12px rgba(0, 0, 0, 0.32);\n}\ninput:checked + .box .box-title {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.18);\n}\ninput:checked + .box .box-content,\ninput:checked + .box .box-close {\n  display: inline-block;\n}\n.arrows section .box-title {\n  padding-left: 44px;\n  width: calc(100% - 64px);\n}\n.arrows section .box-title:before {\n  position: absolute;\n  display: block;\n  content: \"›\";\n  font-size: 18pt;\n  left: 20px;\n  top: -2px;\n  transition: transform 0.15s ease-in-out;\n  color: rgba(0, 0, 0, 0.54);\n}\ninput:checked + section.box .box-title:before {\n  transform: rotate(90deg);\n}\n.noti {\n  position: fixed;\n  right: 25px;\n  bottom: 10px;\n}\n.rectangle {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  width: 50px;\n  height: 50px;\n  background: #380848;\n  transform: scale(0);\n  border-radius: 50%;\n  color: white;\n  opacity: 0;\n  overflow: hidden;\n  -webkit-animation: scale-in 0.3s ease-out forwards, expand 0.35s 0.25s ease-out forwards;\n          animation: scale-in 0.3s ease-out forwards, expand 0.35s 0.25s ease-out forwards;\n}\n.notification-text {\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  -webkit-animation: fade-in 0.65s ease-in forwards;\n          animation: fade-in 0.65s ease-in forwards;\n}\n@-webkit-keyframes scale-in {\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-in {\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes expand {\n  50% {\n    width: 350px;\n    border-radius: 6px;\n  }\n  100% {\n    width: 300px;\n    border-radius: 4px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -1px rgba(0, 0, 0, 0.12);\n  }\n}\n@keyframes expand {\n  50% {\n    width: 350px;\n    border-radius: 6px;\n  }\n  100% {\n    width: 300px;\n    border-radius: 4px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -1px rgba(0, 0, 0, 0.12);\n  }\n}\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0.8;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0.8;\n  }\n}\n#menu.bottom {\n  position: absolute;\n  bottom: 0;\n}\n#menu.top {\n  position: fixed;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDQztJQUNDLGFBQUE7RUFFQTs7RUFDRDtJQUNDLGFBQUE7RUFFQTs7RUFDRDtJQUNDLGFBQUE7RUFFQTs7RUFDRDtJQUNDLGtCQUFBO0lBQ0EsZUFBQTtFQUVBOztFQUNEO0lBRUMsa0JBQUE7RUFDQTs7RUFFRDtJQUNDLFdBQUE7RUFDQTtBQUNGO0FBR0E7RUFDQztJQUNDLGFBQUE7RUFEQTs7RUFJRDtJQUNDLGFBQUE7RUFEQTs7RUFJRDtJQUNDLGFBQUE7RUFEQTtBQUNGO0FBS0E7RUFDQyxXQUFBO0FBSEQ7QUFNQTtFQUNDLGFBQUE7QUFIRDtBQU1BO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQUhEO0FBTUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0ZBQUE7QUFIRDtBQU1BO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtHQUFBO0FBSEQ7QUFNQTtFQUNDLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUhEO0FBTUE7RUFDQyx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFFQSxpQkFBQTtBQUhEO0FBTUE7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtBQUhEO0FBTUE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUhEO0FBTUE7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVFQUFBO0FBSEQ7QUFNQTtFQUNDLDRDQUFBO0FBSEQ7QUFNQTs7RUFFQyxxQkFBQTtBQUhEO0FBTUE7RUFDQyxrQkFBQTtFQUNBLHdCQUFBO0FBSEQ7QUFNQTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLDBCQUFBO0FBSEQ7QUFNQTtFQUNDLHdCQUFBO0FBSEQ7QUFPQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpEO0FBT0E7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0ZBQUE7VUFBQSxnRkFBQTtBQUpEO0FBUUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQUxEO0FBUUE7RUFDQztJQUNDLG1CQUFBO0lBQ0EsVUFBQTtFQUxBO0FBQ0Y7QUFDQTtFQUNDO0lBQ0MsbUJBQUE7SUFDQSxVQUFBO0VBTEE7QUFDRjtBQVFBO0VBQ0M7SUFDQyxZQUFBO0lBQ0Esa0JBQUE7RUFOQTtFQVNEO0lBQ0MsWUFBQTtJQUNBLGtCQUFBO0lBQ0EseUhBQUE7RUFQQTtBQUNGO0FBSEE7RUFDQztJQUNDLFlBQUE7SUFDQSxrQkFBQTtFQU5BO0VBU0Q7SUFDQyxZQUFBO0lBQ0Esa0JBQUE7SUFDQSx5SEFBQTtFQVBBO0FBQ0Y7QUFZQTtFQUNDO0lBQ0MsVUFBQTtFQVZBO0VBYUQ7SUFDQyxZQUFBO0VBWEE7QUFDRjtBQUlBO0VBQ0M7SUFDQyxVQUFBO0VBVkE7RUFhRDtJQUNDLFlBQUE7RUFYQTtBQUNGO0FBY0E7RUFDQyxrQkFBQTtFQUNBLFNBQUE7QUFaRDtBQWVBO0VBQ0MsZUFBQTtFQUNBLE1BQUE7QUFaRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC50YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubm9kYXRhLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5kYXRhLXJvdy1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuZGF0YS1yb3ctbW9iaWxlLWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5ib3gtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC44N3JlbTtcbiAgfVxuXG4gIC5OZXdDYXNlc0NoYXJ0IGRpdiB7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5ub2RhdGEtcm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmRhdGEtcm93LW1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmFjY29yZGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWNjb3JkaW9uIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogNjRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYm94OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3gtc2hhZG93OiAwIC0xcHggMCAjZTVlNWU1LCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG5oZWFkZXIuYm94IHtcbiAgYmFja2dyb3VuZDogIzAwQkNENDtcbiAgei1pbmRleDogMTAwO1xuICBjdXJzb3I6IGluaXRpYWw7XG4gIGJveC1zaGFkb3c6IDAgLTFweCAwICNlNWU1ZTUsIDAgMCAycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCA0cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG5oZWFkZXIgLmJveC10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB0O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuLmJveC10aXRsZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5ib3gtY29udGVudCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICBmb250LXNpemU6IDExcHQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYm94LWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5ib3gge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTZweCAwO1xuICBib3gtc2hhZG93OiAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5ib3ggLmJveC10aXRsZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLmJveCAuYm94LWNvbnRlbnQsXG5pbnB1dDpjaGVja2VkICsgLmJveCAuYm94LWNsb3NlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYXJyb3dzIHNlY3Rpb24gLmJveC10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogNDRweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDY0cHgpO1xufVxuXG4uYXJyb3dzIHNlY3Rpb24gLmJveC10aXRsZTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIuKAulwiO1xuICBmb250LXNpemU6IDE4cHQ7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogLTJweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIHNlY3Rpb24uYm94IC5ib3gtdGl0bGU6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4ubm90aSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLnJlY3RhbmdsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMzgwODQ4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYW5pbWF0aW9uOiBzY2FsZS1pbiAwLjNzIGVhc2Utb3V0IGZvcndhcmRzLCBleHBhbmQgMC4zNXMgMC4yNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi5ub3RpZmljYXRpb24tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuNjVzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUtaW4ge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZXhwYW5kIHtcbiAgNTAlIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG4jbWVudS5ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cblxuI21lbnUudG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG59Il19 */";
      /***/
    },

    /***/
    "omRQ":
    /*!***********************************************************************************!*\
      !*** ./node_modules/ng2-google-charts/__ivy_ngcc__/fesm2015/ng2-google-charts.js ***!
      \***********************************************************************************/

    /*! exports provided: ChartHTMLTooltip, GoogleChartComponent, GoogleChartEditor, GoogleChartsControlComponent, GoogleChartsDashboardComponent, GoogleChartsLoaderService, Ng2GoogleChartsModule */

    /***/
    function omRQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function () {
        return ChartHTMLTooltip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function () {
        return GoogleChartComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartEditor", function () {
        return GoogleChartEditor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartsControlComponent", function () {
        return GoogleChartsControlComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartsDashboardComponent", function () {
        return GoogleChartsDashboardComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartsLoaderService", function () {
        return GoogleChartsLoaderService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2GoogleChartsModule", function () {
        return Ng2GoogleChartsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GoogleChartsLoaderService = /*#__PURE__*/function () {
        function GoogleChartsLoaderService(localeId, googleChartsSettings) {
          var _this = this;

          _classCallCheck(this, GoogleChartsLoaderService);

          this.googleChartsSettings = googleChartsSettings;
          this.googleScriptLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.googleScriptIsLoading = false;
          this.localeId = localeId;
          this.loadGoogleChartsScriptPromise = new Promise(function (resolve, reject) {
            if (typeof google !== 'undefined' && google.charts) {
              resolve();
            } else if (!_this.googleScriptIsLoading) {
              _this.googleScriptIsLoading = true;
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = 'https://www.gstatic.com/charts/loader.js';
              script.async = true;
              script.defer = true;

              script.onload = function () {
                _this.googleScriptIsLoading = false;

                _this.googleScriptLoadingNotifier.emit(true);

                resolve();
              };

              script.onerror = function () {
                _this.googleScriptIsLoading = false;

                _this.googleScriptLoadingNotifier.emit(false);

                reject();
              };

              document.getElementsByTagName('head')[0].appendChild(script);
            } else {
              _this.googleScriptLoadingNotifier.subscribe(function (loaded) {
                if (loaded) {
                  resolve();
                } else {
                  reject();
                }
              });
            }
          });
        }

        _createClass(GoogleChartsLoaderService, [{
          key: "load",
          value: function load(settings) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadGoogleChartsScriptPromise;

                    case 2:
                      _context.next = 4;
                      return new Promise(function (resolve) {
                        if (!settings) {
                          settings = Object.create(_this2.googleChartsSettings);
                        }

                        if (!settings) {
                          settings = {};
                        }

                        if (!settings.language) {
                          settings.language = _this2.localeId;
                        }

                        if (!settings.googleChartsVersion) {
                          settings.googleChartsVersion = '47';
                        }

                        var _settings = settings;
                        _settings.callback = resolve;
                        google.charts.load(settings.googleChartsVersion, _settings);
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return GoogleChartsLoaderService;
      }();

      GoogleChartsLoaderService.ɵfac = function GoogleChartsLoaderService_Factory(t) {
        return new (t || GoogleChartsLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('googleChartsSettings', 8));
      };

      GoogleChartsLoaderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function GoogleChartsLoaderService_Factory() {
          return new GoogleChartsLoaderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])("googleChartsSettings", 8));
        },
        token: GoogleChartsLoaderService,
        providedIn: "root"
      });
      GoogleChartsLoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('googleChartsSettings')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Object])], GoogleChartsLoaderService);

      var GoogleChartsDataTable = /*#__PURE__*/function () {
        function GoogleChartsDataTable(opt) {
          _classCallCheck(this, GoogleChartsDataTable);

          this.opt = opt;
          this.dataTableChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          if (opt) {
            this._setDataTable(opt.dataTable, opt.firstRowIsData);
          }
        }

        _createClass(GoogleChartsDataTable, [{
          key: "send",
          value: function send() {
            var _this3 = this;

            if (this.query === undefined) {
              return;
            }

            this.query.send(function (queryResponse) {
              _this3.setDataTable(queryResponse.getDataTable());

              if (_this3.opt.queryCallback) {
                _this3.opt.queryCallback(queryResponse);
              }
            });
          }
        }, {
          key: "init",
          value: function init(opt) {
            var _this4 = this;

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
                this.tid = window.setInterval(function () {
                  _this4.send();
                }, this.opt.refreshInterval * 1000);
              }

              this.send();
            } else {
              this.setDataTable(this.opt.dataTable);
            }
          }
          /**
           * @returns Underlying google.visualization.DataTable
           */

        }, {
          key: "getDataTable",
          value: function getDataTable() {
            return this.dataTable;
          }
        }, {
          key: "setDataTable",
          value: function setDataTable(dt, firstRowIsData) {
            if (firstRowIsData === undefined) {
              firstRowIsData = this.opt.firstRowIsData;
            }

            this._setDataTable(dt, firstRowIsData);

            this.dataTableChanged.emit(this.dataTable);
          }
        }, {
          key: "_setDataTable",
          value: function _setDataTable(dt, firstRowIsData) {
            if (Array.isArray(dt)) {
              dt = google.visualization.arrayToDataTable(dt, firstRowIsData);
            }

            this.dataTable = dt;
            this.reformat();
          }
          /**
           * Applies formatters to data columns, if defined
           */

        }, {
          key: "reformat",
          value: function reformat() {
            var dt = this.dataTable;

            if (dt === undefined) {
              return;
            }

            if (this.opt.formatters === undefined) {
              return;
            }

            var _iterator = _createForOfIteratorHelper(this.opt.formatters),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var formatterConfig = _step.value;
                var formatter = void 0;

                if (formatterConfig.type === 'PatternFormat') {
                  var fmtOptions = formatterConfig.options;
                  formatter = new google.visualization.PatternFormat(fmtOptions.pattern);
                  formatter.format(dt, formatterConfig.columns, fmtOptions.dstColumnIndex);
                  continue;
                }

                var formatterConstructor = google.visualization[formatterConfig.type];
                var formatterOptions = formatterConfig.options;
                formatter = new formatterConstructor(formatterOptions);

                if (formatterConfig.type === 'ColorFormat' && formatterOptions) {
                  var _fmtOptions = formatterOptions;

                  var _iterator2 = _createForOfIteratorHelper(_fmtOptions.ranges),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var range = _step2.value;

                      if (typeof range.fromBgColor !== 'undefined' && typeof range.toBgColor !== 'undefined') {
                        formatter.addGradientRange(range.from, range.to, range.color, range.fromBgColor, range.toBgColor);
                      } else {
                        formatter.addRange(range.from, range.to, range.color, range.bgcolor);
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }

                var _iterator3 = _createForOfIteratorHelper(formatterConfig.columns),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var col = _step3.value;
                    formatter.format(dt, col);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }]);

        return GoogleChartsDataTable;
      }();

      GoogleChartsDataTable.ɵfac = function GoogleChartsDataTable_Factory(t) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
      };

      GoogleChartsDataTable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: GoogleChartsDataTable,
        outputs: {
          dataTableChanged: "dataTableChanged"
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartsDataTable.prototype, "dataTableChanged", void 0);

      var ChartHTMLTooltip = /*#__PURE__*/function () {
        function ChartHTMLTooltip(el) {
          _classCallCheck(this, ChartHTMLTooltip);

          this.el = el;
        }

        _createClass(ChartHTMLTooltip, [{
          key: "setPosition",
          value: function setPosition(x, y) {
            this.el.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
            this.el.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
          }
        }, {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.el;
          }
        }]);

        return ChartHTMLTooltip;
      }();

      ChartHTMLTooltip.PIXELS = 'px';

      var GoogleChartComponent = /*#__PURE__*/function () {
        function GoogleChartComponent(el, loaderService) {
          var _this5 = this;

          _classCallCheck(this, GoogleChartComponent);

          this.el = el;
          this.loaderService = loaderService;

          this.mouseOverListener = function (item) {
            var event = _this5.parseMouseEvent(item);

            event.tooltip = _this5.getHTMLTooltip();
            return event;
          };

          this.mouseOutListener = function (item) {
            var event = _this5.parseMouseEvent(item);

            return event;
          };

          this.selectListener = function () {
            var event = {
              message: 'select',
              row: null,
              column: null,
              selectedRowValues: [],
              selectedRowFormattedValues: [],
              columnLabel: ''
            };

            var s = _this5.wrapper.visualization.getSelection();

            var gs = s[s.length - 1];

            if (!gs) {
              event.message = 'deselect';
              return event;
            }

            var selection = gs;

            if (gs.row != null) {
              event.row = selection.row;
              var selectedRowValues = [];
              var selectedRowFormattedValues = [];

              var dataTable = _this5.wrapper.getDataTable();

              var numberOfColumns = dataTable.getNumberOfColumns();

              for (var i = 0; i < numberOfColumns; i++) {
                selectedRowValues.push(dataTable.getValue(selection.row, i));
                selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
              }

              event.selectedRowValues = selectedRowValues;
              event.selectedRowFormattedValues = selectedRowFormattedValues;
            }

            if (selection.column != null) {
              event.column = selection.column;
              event.columnLabel = _this5.getColumnLabelAtPosition(selection);
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

        _createClass(GoogleChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.HTMLel = this.el.nativeElement.querySelector('div');

            if (Object.isExtensible(this.data)) {
              this.data.component = this;
            }

            this.options = this.data.options;
            this.init().then(function () {
              _this6.draw();
            });
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loaderService.load();

                    case 2:
                      this.recreateWrapper();

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "recreateWrapper",
          value: function recreateWrapper() {
            var _this7 = this;

            if (this.wrapper === undefined || this.wrapper.getChartType() !== this.data.chartType) {
              this.dataTable = new GoogleChartsDataTable(this.data);
              this.dataTable.dataTableChanged.subscribe(function (dt) {
                _this7._draw();
              }); // see dataTable in https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart

              var temp = this.data;

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
                } catch (err) {}
              }
            }
          }
        }, {
          key: "_draw",
          value: function _draw() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var dt;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      dt = this.dataTable.getDataTable();

                      if (!(dt === undefined)) {
                        _context3.next = 3;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 3:
                      this.convertOptions();
                      this.recreateWrapper();
                      this.wrapper.setOptions(this.options);
                      this.wrapper.setDataTable(dt);
                      this.wrapper.draw(this.HTMLel);

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getDataTable",
          value: function getDataTable() {
            return this.dataTable;
          }
        }, {
          key: "draw",
          value: function draw(value) {
            if (value === undefined) {
              value = this.data;
            }

            this.options = value.options;
            this.dataTable.init(value);
          }
        }, {
          key: "getSelectorBySeriesType",
          value: function getSelectorBySeriesType(seriesType) {
            var selectors = {
              bars: 'bar#%s#%r',
              haxis: 'hAxis#0#label',
              line: 'point#%s#%r',
              legend: 'legendentry#%s',
              area: 'point#%s#%r'
            };
            var selector = selectors[seriesType];
            return selector;
          }
          /**
           * Given a column number, counts how many
           * columns have rol=="data". Those are mapped
           * one-to-one to the series array. When rol is not defined
           * a column of type number means a series column.
           * @param column to inspect
           */

        }, {
          key: "getSeriesByColumn",
          value: function getSeriesByColumn(column) {
            var series = 0;
            var dataTable = this.wrapper.getDataTable();

            for (var i = column - 1; i >= 0; i--) {
              var role = dataTable.getColumnRole(i);
              var type = dataTable.getColumnType(i);

              if (role === 'data' || type === 'number') {
                series++;
              }
            }

            return series;
          }
        }, {
          key: "getBoundingBoxForItem",
          value: function getBoundingBoxForItem(item) {
            var boundingBox = {
              top: 0,
              left: 0,
              width: 0,
              height: 0
            };

            if (this.cli) {
              var column = item.column;
              var series = this.getSeriesByColumn(column);
              var row = item.row;
              var seriesType = this.options.seriesType;

              if (this.options.series && this.options.series[series] && this.options.series[series].type) {
                seriesType = this.options.series[series].type;
              }

              if (seriesType) {
                var selector = this.getSelectorBySeriesType(seriesType);

                if (selector) {
                  selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
                  var box = this.cli.getBoundingBox(selector);

                  if (box) {
                    boundingBox = box;
                  }
                }
              }
            }

            return boundingBox;
          }
        }, {
          key: "getValueAtPosition",
          value: function getValueAtPosition(position) {
            if (position.row == null) {
              return null;
            }

            var dataTable = this.wrapper.getDataTable();
            var value = dataTable.getValue(position.row, position.column);
            return value;
          }
        }, {
          key: "getColumnTypeAtPosition",
          value: function getColumnTypeAtPosition(position) {
            var dataTable = this.wrapper.getDataTable();
            var type = dataTable.getColumnType(position.column) || '';
            return type;
          }
        }, {
          key: "getColumnLabelAtPosition",
          value: function getColumnLabelAtPosition(position) {
            var dataTable = this.wrapper.getDataTable();
            var type = dataTable.getColumnLabel(position.column) || '';
            return type;
          }
        }, {
          key: "getHTMLTooltip",
          value: function getHTMLTooltip() {
            var tooltipER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"](this.el.nativeElement.querySelector('.google-visualization-tooltip'));
            return new ChartHTMLTooltip(tooltipER);
          }
        }, {
          key: "parseMouseEvent",
          value: function parseMouseEvent(item) {
            var chartType = this.wrapper.getChartType();
            var eventColumn = item.column;

            if (eventColumn == null) {
              switch (chartType) {
                case 'Timeline':
                  eventColumn = this.wrapper.getDataTable().getNumberOfColumns() === 3 ? 0 : 1;
                  break;

                default:
                  eventColumn = 0;
              }
            }

            var eventRow = item.row;
            var myItem = {
              row: eventRow,
              column: eventColumn
            };
            var event = {
              position: item,
              boundingBox: this.getBoundingBoxForItem(myItem),
              value: this.getValueAtPosition(myItem),
              columnType: this.getColumnTypeAtPosition(myItem),
              columnLabel: this.getColumnLabelAtPosition(myItem)
            };
            return event;
          }
        }, {
          key: "unregisterEvents",
          value: function unregisterEvents() {
            google.visualization.events.removeAllListeners(this.wrapper.getChart());
            google.visualization.events.removeAllListeners(this.wrapper);
          }
        }, {
          key: "registerChartEvents",
          value: function registerChartEvents() {
            var _this8 = this;

            var chart = this.wrapper.getChart();
            this.cli = chart.getChartLayoutInterface ? chart.getChartLayoutInterface() : null;

            if (this.mouseOver.observers.length > 0) {
              google.visualization.events.addListener(chart, 'onmouseover', function (item) {
                var event = _this8.parseMouseEvent(item);

                event.tooltip = _this8.getHTMLTooltip();

                _this8.mouseOver.emit(event);
              });
            }

            if (this.mouseOverOneTime.observers.length > 0) {
              google.visualization.events.addOneTimeListener(chart, 'onmouseover', function (item) {
                var event = _this8.parseMouseEvent(item);

                event.tooltip = _this8.getHTMLTooltip();

                _this8.mouseOverOneTime.emit(event);
              });
            }

            if (this.mouseOut.observers.length > 0) {
              google.visualization.events.addListener(chart, 'onmouseout', function (item) {
                var event = _this8.parseMouseEvent(item);

                _this8.mouseOut.emit(event);
              });
            }

            if (this.mouseOutOneTime.observers.length > 0) {
              google.visualization.events.addOneTimeListener(chart, 'onmouseout', function (item) {
                var event = _this8.parseMouseEvent(item);

                _this8.mouseOutOneTime.emit(event);
              });
            }

            if (this.data.chartType === 'GeoChart') {
              if (this.regionClick.observers.length > 0) {
                google.visualization.events.addListener(chart, 'regionClick', function (item) {
                  _this8.regionClick.emit(item);
                });
              }

              if (this.regionClickOneTime.observers.length > 0) {
                google.visualization.events.addOneTimeListener(chart, 'regionClick', function (item) {
                  _this8.regionClick.emit(item);
                });
              }
            }
          }
        }, {
          key: "registerChartWrapperEvents",
          value: function registerChartWrapperEvents() {
            var _this9 = this;

            google.visualization.events.addListener(this.wrapper, 'ready', function () {
              _this9.chartReady.emit({
                message: 'Chart ready'
              });
            });
            google.visualization.events.addOneTimeListener(this.wrapper, 'ready', function () {
              _this9.chartReadyOneTime.emit({
                message: 'Chart ready (one time)'
              });

              _this9.registerChartEvents();
            });
            google.visualization.events.addListener(this.wrapper, 'error', function (error) {
              _this9.chartError.emit(error);
            });
            google.visualization.events.addOneTimeListener(this.wrapper, 'error', function (error) {
              _this9.chartErrorOneTime.emit(error);
            });
            this.addListener(this.wrapper, 'select', this.selectListener, this.chartSelect);
            this.addOneTimeListener(this.wrapper, 'select', this.selectListener, this.chartSelectOneTime);
          }
        }, {
          key: "addListener",
          value: function addListener(source, eventType, listenerFn, evEmitter) {
            google.visualization.events.addListener(source, eventType, function () {
              evEmitter.emit(listenerFn());
            });
          }
        }, {
          key: "addOneTimeListener",
          value: function addOneTimeListener(source, eventType, listenerFn, evEmitter) {
            google.visualization.events.addOneTimeListener(source, eventType, function () {
              evEmitter.emit(listenerFn());
            });
          }
        }, {
          key: "convertOptions",
          value: function convertOptions() {
            try {
              this.options = google.charts[this.data.chartType].convertOptions(this.options);
            } catch (error) {
              return;
            }
          }
        }]);

        return GoogleChartComponent;
      }();

      GoogleChartComponent.ɵfac = function GoogleChartComponent_Factory(t) {
        return new (t || GoogleChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService));
      };

      GoogleChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GoogleChartComponent,
        selectors: [["google-chart"]],
        inputs: {
          data: "data"
        },
        outputs: {
          chartSelect: "chartSelect",
          chartSelectOneTime: "chartSelectOneTime",
          chartReady: "chartReady",
          chartReadyOneTime: "chartReadyOneTime",
          chartError: "chartError",
          chartErrorOneTime: "chartErrorOneTime",
          mouseOver: "mouseOver",
          mouseOverOneTime: "mouseOverOneTime",
          mouseOut: "mouseOut",
          mouseOutOneTime: "mouseOutOneTime",
          regionClick: "regionClick",
          regionClickOneTime: "regionClickOneTime"
        },
        decls: 1,
        vars: 0,
        template: function GoogleChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
          }
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GoogleChartComponent.prototype, "data", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartReady", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartReadyOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartError", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartErrorOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartSelect", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartSelectOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "mouseOver", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "mouseOverOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "mouseOut", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "mouseOutOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "regionClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "regionClickOneTime", void 0);
      GoogleChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleChartsLoaderService])], GoogleChartComponent);

      var GoogleChartsDashboardComponent = /*#__PURE__*/function () {
        function GoogleChartsDashboardComponent(el, loaderService) {
          _classCallCheck(this, GoogleChartsDashboardComponent);

          this.el = el;
          this.loaderService = loaderService;
          this.el = el;
          this.loaderService = loaderService;
        }

        _createClass(GoogleChartsDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.data.component = this;
            this.init().then(function () {
              if (!_this10.dataTable) {
                _this10.dataTable = new GoogleChartsDataTable(_this10.data);

                _this10.dataTable.dataTableChanged.subscribe(function (dt) {
                  _this10._draw();
                });
              }

              _this10.draw();
            });
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _iterator4, _step4, b, controls, charts, _iterator5, _step5, c, _iterator6, _step6, _c, data;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loaderService.load({
                        packages: ['controls']
                      });

                    case 2:
                      this.dashboard = new google.visualization.Dashboard(this.el.nativeElement.querySelector('div'));
                      _iterator4 = _createForOfIteratorHelper(this.data.bind);
                      _context4.prev = 4;

                      _iterator4.s();

                    case 6:
                      if ((_step4 = _iterator4.n()).done) {
                        _context4.next = 52;
                        break;
                      }

                      b = _step4.value;
                      controls = b[0];
                      charts = b[1];

                      if (!(controls instanceof Array)) {
                        controls = [controls];
                      }

                      if (!(charts instanceof Array)) {
                        charts = [charts];
                      }

                      _iterator5 = _createForOfIteratorHelper(controls);
                      _context4.prev = 13;

                      _iterator5.s();

                    case 15:
                      if ((_step5 = _iterator5.n()).done) {
                        _context4.next = 21;
                        break;
                      }

                      c = _step5.value;
                      _context4.next = 19;
                      return c.component.ensureInit();

                    case 19:
                      _context4.next = 15;
                      break;

                    case 21:
                      _context4.next = 26;
                      break;

                    case 23:
                      _context4.prev = 23;
                      _context4.t0 = _context4["catch"](13);

                      _iterator5.e(_context4.t0);

                    case 26:
                      _context4.prev = 26;

                      _iterator5.f();

                      return _context4.finish(26);

                    case 29:
                      _iterator6 = _createForOfIteratorHelper(charts);
                      _context4.prev = 30;

                      _iterator6.s();

                    case 32:
                      if ((_step6 = _iterator6.n()).done) {
                        _context4.next = 41;
                        break;
                      }

                      _c = _step6.value;
                      _context4.next = 36;
                      return _c.component.init();

                    case 36:
                      data = _c.component.data;

                      if (!(data.dataTable !== undefined || data.dataSourceUrl !== undefined)) {
                        _context4.next = 39;
                        break;
                      }

                      throw Error('dataTable and dataSourceUrl cannot be specified when ' + 'chart is drawn in a Dashboard');

                    case 39:
                      _context4.next = 32;
                      break;

                    case 41:
                      _context4.next = 46;
                      break;

                    case 43:
                      _context4.prev = 43;
                      _context4.t1 = _context4["catch"](30);

                      _iterator6.e(_context4.t1);

                    case 46:
                      _context4.prev = 46;

                      _iterator6.f();

                      return _context4.finish(46);

                    case 49:
                      this.dashboard.bind(controls.map(function (x) {
                        return x.component.wrapper;
                      }), charts.map(function (x) {
                        return x.component.wrapper;
                      }));

                    case 50:
                      _context4.next = 6;
                      break;

                    case 52:
                      _context4.next = 57;
                      break;

                    case 54:
                      _context4.prev = 54;
                      _context4.t2 = _context4["catch"](4);

                      _iterator4.e(_context4.t2);

                    case 57:
                      _context4.prev = 57;

                      _iterator4.f();

                      return _context4.finish(57);

                    case 60:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[4, 54, 57, 60], [13, 23, 26, 29], [30, 43, 46, 49]]);
            }));
          }
        }, {
          key: "draw",
          value: function draw(value) {
            this.dataTable.init(value);
          }
        }, {
          key: "_draw",
          value: function _draw() {
            this.dashboard.draw(this.dataTable.getDataTable());
          }
        }]);

        return GoogleChartsDashboardComponent;
      }();

      GoogleChartsDashboardComponent.ɵfac = function GoogleChartsDashboardComponent_Factory(t) {
        return new (t || GoogleChartsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService));
      };

      GoogleChartsDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GoogleChartsDashboardComponent,
        selectors: [["google-charts-dashboard"]],
        inputs: {
          data: "data"
        },
        decls: 1,
        vars: 0,
        template: function GoogleChartsDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
          }
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GoogleChartsDashboardComponent.prototype, "data", void 0);
      GoogleChartsDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleChartsLoaderService])], GoogleChartsDashboardComponent);

      var GoogleChartsControlComponent = /*#__PURE__*/function () {
        function GoogleChartsControlComponent(el, loaderService) {
          _classCallCheck(this, GoogleChartsControlComponent);

          this.el = el;
          this.loaderService = loaderService;
          this.el = el;
          this.loaderService = loaderService;
        }

        _createClass(GoogleChartsControlComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.data.component = this;
          }
        }, {
          key: "ensureInit",
          value: function ensureInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var opt;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!this.wrapper) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 2:
                      _context5.next = 4;
                      return this.loaderService.load({
                        packages: ['controls']
                      });

                    case 4:
                      opt = Object.create(this.data);
                      opt.containerId = this.el.nativeElement.querySelector('div');
                      this.wrapper = new google.visualization.ControlWrapper(opt);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return GoogleChartsControlComponent;
      }();

      GoogleChartsControlComponent.ɵfac = function GoogleChartsControlComponent_Factory(t) {
        return new (t || GoogleChartsControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService));
      };

      GoogleChartsControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GoogleChartsControlComponent,
        selectors: [["google-charts-control"]],
        inputs: {
          data: "data"
        },
        decls: 1,
        vars: 0,
        template: function GoogleChartsControlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
          }
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GoogleChartsControlComponent.prototype, "data", void 0);
      GoogleChartsControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleChartsLoaderService])], GoogleChartsControlComponent);

      var Ng2GoogleChartsModule = function Ng2GoogleChartsModule() {
        _classCallCheck(this, Ng2GoogleChartsModule);
      };

      Ng2GoogleChartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: Ng2GoogleChartsModule
      });
      Ng2GoogleChartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function Ng2GoogleChartsModule_Factory(t) {
          return new (t || Ng2GoogleChartsModule)();
        },
        providers: [GoogleChartsLoaderService]
      });

      function isComponent(chart) {
        return chart.wrapper !== undefined;
      }

      var GoogleChartEditor = /*#__PURE__*/function () {
        function GoogleChartEditor(loaderService) {
          _classCallCheck(this, GoogleChartEditor);

          this.loaderService = loaderService;
        }

        _createClass(GoogleChartEditor, [{
          key: "createEditor",
          value: function createEditor() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(this.chartEditor !== undefined)) {
                        _context6.next = 2;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 2:
                      _context6.next = 4;
                      return this.loaderService.load({
                        packages: ['charteditor']
                      });

                    case 4:
                      this.chartEditor = new google.visualization.ChartEditor();
                      google.visualization.events.addListener(this.chartEditor, 'ok', function () {
                        var wrapper = _this11.chartEditor.getChartWrapper();

                        _this11.comp.wrapper = wrapper;
                        _this11.comp.data.chartType = wrapper.getChartType();

                        if (_this11.comp.data.options !== undefined || Object.isExtensible(_this11.comp.data)) {
                          _this11.comp.data.options = wrapper.getOptions();
                        }

                        _this11.comp.wrapper.draw();
                      });

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "openDialog",
          value: function openDialog(chart, options) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this12 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.createEditor();

                    case 2:
                      return _context7.abrupt("return", new Promise(function (resolve, reject) {
                        _this12.comp = isComponent(chart) ? chart : chart.component;

                        _this12.chartEditor.openDialog(_this12.comp.wrapper, options);

                        google.visualization.events.addListener(_this12.chartEditor, 'ok', function () {
                          resolve(_this12.comp.wrapper);
                        });
                        google.visualization.events.addListener(_this12.chartEditor, 'cancel', function () {
                          reject();
                        });
                      }));

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return GoogleChartEditor;
      }();

      GoogleChartEditor.ɵfac = function GoogleChartEditor_Factory(t) {
        return new (t || GoogleChartEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleChartsLoaderService));
      };

      GoogleChartEditor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function GoogleChartEditor_Factory() {
          return new GoogleChartEditor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(GoogleChartsLoaderService));
        },
        token: GoogleChartEditor,
        providedIn: "root"
      });
      GoogleChartEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleChartsLoaderService])], GoogleChartEditor);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsLoaderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: ['googleChartsSettings']
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'google-chart',
            template: '<div></div>'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: GoogleChartsLoaderService
          }];
        }, {
          chartSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartSelectOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartReadyOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartErrorOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOverOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOutOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          regionClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          regionClickOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'google-charts-dashboard',
            template: '<div></div>'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: GoogleChartsLoaderService
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsControlComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'google-charts-control',
            template: '<div></div>'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: GoogleChartsLoaderService
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Ng2GoogleChartsModule, {
          declarations: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent],
          exports: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2GoogleChartsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent],
            providers: [GoogleChartsLoaderService],
            exports: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartEditor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: GoogleChartsLoaderService
          }];
        }, null);
      })();
      /*
       * Public API Surface of ng2-google-charts
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-google-charts.js.map

      /***/

    },

    /***/
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/data.service */
      "Pe/6");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(loadingController, dataService, toastController) {
          var _this13 = this;

          _classCallCheck(this, HomePage);

          this.loadingController = loadingController;
          this.dataService = dataService;
          this.toastController = toastController;
          this.i = 1;
          this.user = "";
          this.selected_country = "Spain"; //Array to fill the Dropdown List

          this.dropdownOptionsNewCases = [{
            id: "005",
            val: 'South America'
          }, {
            id: "013",
            val: 'Central America'
          }, {
            id: "021",
            val: 'North America'
          }, {
            id: "150",
            val: 'Europe'
          }, {
            id: "002",
            val: 'Africa'
          }, {
            id: "142",
            val: 'Asia'
          }, {
            id: "009",
            val: 'Oceania'
          }];
          this.dropdownOptionsAllCases = [{
            id: "005",
            val: 'South America'
          }, {
            id: "013",
            val: 'Central America'
          }, {
            id: "021",
            val: 'North America'
          }, {
            id: "150",
            val: 'Europe'
          }, {
            id: "002",
            val: 'Africa'
          }, {
            id: "142",
            val: 'Asia'
          }, {
            id: "009",
            val: 'Oceania'
          }];
          this.dropdownOptionsCountry = [];
          this.dropdownOptionsCountryColumn = [];
          this.dropdownOptionsAddedCases = [];
          this.overall = "";
          this.first = "";
          this.second = "";
          this.third = "";
          this.dataMap_New = [['Country', 'Cases']];
          this.dataMap_All = [['Country', 'Cases']];
          this.dataMap_All = [['Country', 'Cases']];
          this.dataCountry_DE = [['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases']];
          this.dataCountry_FR = [['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases']];
          this.dataCountry_Colum = [['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases']];
          this.data_sorted_all_country = [['Country', 'Cases']];
          this.dataCountry_Added_Cases = [['Date', 'Added Cases']];
          this.CasesChartColumn = [['Country', 'Cases']];
          this.data_sorted_new_country = [['Country', 'Cases']];
          this.overall = "";
          this.dataForTable = [];
          this.data_sorted = [];
          this.all_countries_for_search = [];
          this.columns = [{
            prop: 'Index'
          }, {
            prop: 'CountryCode'
          }, {
            prop: 'Country'
          }, {
            prop: 'NewDeaths'
          }, {
            prop: 'NewConfirmed'
          }, {
            prop: 'NewRecovered'
          }, {
            prop: 'AllDeaths'
          }, {
            prop: 'AllConfirmed'
          }, {
            prop: 'AllRecovered'
          }];
          this.showmore == false;
          this.dataService.getUserIP().then(function (res) {
            console.log(res);
            _this13.user = res['country'];
            _this13.selected_country = _this13.user;
            console.log(_this13.selected_country);
          });
        }

        _createClass(HomePage, [{
          key: "dropdownFunctionNewCases",
          value: function dropdownFunctionNewCases($event) {
            console.log($event.detail.value);
            this.NewCasesMap.dataTable = this.dataMap_New;
            this.NewCasesMap.options.region = $event.detail.value.toString();
            this.NewCasesMap.component.draw();
          }
        }, {
          key: "dropdownFunctionAllCases",
          value: function dropdownFunctionAllCases($event) {
            console.log($event.detail.value);
            this.AllCasesMap.dataTable = this.dataMap_All;
            this.AllCasesMap.options.region = $event.detail.value.toString();
            this.AllCasesMap.component.draw();
          }
        }, {
          key: "dropdownFunctionCountry",
          value: function dropdownFunctionCountry($event) {
            var _this14 = this;

            document.getElementById('error_country_select').style.visibility = "visible";
            document.getElementById('no_data_country').style.visibility = "hidden";
            this.selected_country = $event.detail.value;
            this.dataCountry_FR = [['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases']];
            this.dataService.getAllDataforCountry($event.detail.value).then(function (res) {
              res.forEach(function (element, index) {
                if (index != 0) {
                  _this14.dataCountry_FR.push([element['Date'].toString().split("T", 1)[0], element['Confirmed'], element['Deaths'], element['Recovered'], res[index - 1]['Confirmed'] * -1 + res[index]['Confirmed']]);
                } else {
                  console.log("first");
                }
              });
            }).then(function (res) {
              _this14.CasesChartLineFR.dataTable = _this14.dataCountry_FR;

              _this14.CasesChartLineFR.component.draw();
            });
          }
        }, {
          key: "dropdownFunctionCountryAddedCases",
          value: function dropdownFunctionCountryAddedCases($event) {
            var _this15 = this;

            this.selected_country = $event.detail.value;
            this.dataCountry_Added_Cases = [['Date', 'Added Cases']];
            this.dataService.getAllDataforCountry($event.detail.value).then(function (res) {
              res.forEach(function (element, index) {
                if (index != 0) {
                  var t = res[index - 1]['Confirmed'] * -1 + res[index]['Confirmed'];

                  if (t < 0) {
                    _this15.dataCountry_Added_Cases.push([element['Date'].toString().split("T", 1)[0], 0]);
                  } else {
                    _this15.dataCountry_Added_Cases.push([element['Date'].toString().split("T", 1)[0], t]);
                  }
                }
              });
            }).then(function (res) {
              _this15.CasesAddedCases.dataTable = _this15.dataCountry_Added_Cases;

              _this15.CasesAddedCases.component.draw();
            });
          }
        }, {
          key: "dropdownFunctionCountryColumn",
          value: function dropdownFunctionCountryColumn($event) {
            var _this16 = this;

            document.getElementById('error_country_select').style.visibility = "visible";
            document.getElementById('no_data_country').style.visibility = "hidden";
            this.selected_country = $event.detail.value;
            this.dataCountry_Colum = [['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases']];
            this.dataService.getAllDataforCountry($event.detail.value).then(function (res) {
              res.forEach(function (element, index) {
                _this16.dataCountry_Colum.push([element['Date'].toString().split("T", 1)[0], element['Confirmed'], element['Deaths'], element['Recovered'], res[index - 1]['Confirmed'] * -1 + res[index]['Confirmed']]);
              });
            }).then(function (res) {
              _this16.CasesChartColumn.dataTable = _this16.dataCountry_Colum;

              _this16.CasesChartColumn.component.draw();
            });
          }
        }, {
          key: "error",
          value: function error(event) {
            console.log(event); // document.getElementById('error_country_select').style.visibility = "hidden";
            //  document.getElementById('no_data_country').style.visibility = "visible";
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            setTimeout(function () {
              console.log('Async operation has ended');
              location.reload();
              event.target.complete();
            }, 100);
          }
        }, {
          key: "showPosition",
          value: function showPosition(position) {
            console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            var loading;
            this.loadingController.create({
              message: 'Lade Daten...'
            }).then(function (res) {
              loading = res;
              loading.present();

              _this17.dataService.getSummary().then(function (dataRes) {
                _this17.overall = dataRes['Global'];
                _this17.data_sorted = dataRes['Countries'].sort(_this17.sortByProperty("NewConfirmed"));
                _this17.data_sorted_all_new = dataRes['Countries'].sort(function (a, b) {
                  return b.NewConfirmed - a.NewConfirmed;
                });
                _this17.data_sorted_all = dataRes['Countries'].sort(function (a, b) {
                  return b.TotalConfirmed - a.TotalConfirmed;
                });

                _this17.data_sorted.forEach(function (element) {
                  _this17.dataMap_All.push([element.CountryCode.toString(), element.TotalConfirmed]);

                  _this17.dataMap_New.push([element.CountryCode.toString(), element.NewConfirmed]);

                  _this17.dataForTable.push({
                    Index: _this17.i,
                    CountryCode: element.CountryCode,
                    Country: element.Country,
                    NewDeaths: element.NewDeaths,
                    NewConfirmed: element.NewConfirmed,
                    NewRecovered: element.NewRecovered,
                    AllDeaths: element.TotalDeaths,
                    AllConfirmed: element.TotalConfirmed,
                    AllRecovered: element.TotalRecovered
                  });

                  _this17.i++;
                });

                _this17.data_sorted_all.forEach(function (element) {
                  _this17.data_sorted_all_country.push([element.CountryCode.toString(), element.TotalConfirmed]);
                });

                _this17.data_sorted_all_new.forEach(function (element) {
                  _this17.data_sorted_new_country.push([element.CountryCode.toString(), element.NewConfirmed]);
                });

                _this17.first = _this17.data_sorted_all_new[0];
                _this17.second = _this17.data_sorted_all_new[1];
                _this17.third = _this17.data_sorted_all_new[2];
                _this17.overall.NewConfirmed = _this17.overall.NewConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.overall.NewDeaths = _this17.overall.NewDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.overall.NewRecovered = _this17.overall.NewRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.overall.TotalConfirmed = _this17.overall.TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.overall.TotalDeaths = _this17.overall.TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.overall.TotalRecovered = _this17.overall.TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.first.NewConfirmed = _this17.data_sorted_all_new[0].NewConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.first.NewDeaths = _this17.data_sorted_all_new[0].NewDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.first.NewRecovered = _this17.data_sorted_all_new[0].NewRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.first.TotalConfirmed = _this17.data_sorted_all_new[0].TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.first.TotalDeaths = _this17.data_sorted_all_new[0].TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.first.TotalRecovered = _this17.data_sorted_all_new[0].TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.second.NewConfirmed = _this17.data_sorted_all_new[1].NewConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.second.NewDeaths = _this17.data_sorted_all_new[1].NewDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.second.NewRecovered = _this17.data_sorted_all_new[1].NewRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.second.TotalConfirmed = _this17.data_sorted_all_new[1].TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.second.TotalDeaths = _this17.data_sorted_all_new[1].TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.second.TotalRecovered = _this17.data_sorted_all_new[1].TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.third.NewConfirmed = _this17.data_sorted_all_new[2].NewConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.third.NewDeaths = _this17.data_sorted_all_new[2].NewDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.third.NewRecovered = _this17.data_sorted_all_new[2].NewRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.third.TotalConfirmed = _this17.data_sorted_all_new[2].TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.third.TotalDeaths = _this17.data_sorted_all_new[2].TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                _this17.third.TotalRecovered = _this17.data_sorted_all_new[2].TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
              }).then(function (res) {
                _this17.dataService.getSummary().then(function (dataRes2) {
                  _this17.all_countries = dataRes2['Countries'].sort(_this17.sortByProperty("NewConfirmed"));
                  _this17.all_countries_for_search = dataRes2['Countries'].sort(_this17.sortByProperty("NewConfirmed"));
                });
              }).then(function (res) {
                _this17.dataService.getAllCountries().then(function (allCountries) {
                  var temp = allCountries;
                  temp.sort(function (a, b) {
                    return a['Country'] > b['Country'] ? 1 : -1;
                  });
                  temp.forEach(function (element) {
                    _this17.dropdownOptionsCountry.push({
                      id: element['Slug'],
                      val: element['Country']
                    });

                    _this17.dropdownOptionsCountryColumn.push({
                      id: element['Slug'],
                      val: element['Country']
                    });

                    _this17.dropdownOptionsAddedCases.push({
                      id: element['Slug'],
                      val: element['Country']
                    });
                  });
                });
              }).then(function (res) {
                console.log(_this17.user);

                _this17.dataService.getAllDataforCountry('germany').then(function (dataC) {
                  dataC.forEach(function (element, index) {
                    if (index != 0) {
                      _this17.dataCountry_FR.push([element['Date'].toString().split("T", 1)[0], element['Confirmed'], element['Deaths'], element['Recovered'], dataC[index - 1]['Confirmed'] * -1 + dataC[index]['Confirmed']]);

                      _this17.dataCountry_Colum.push([element['Date'].toString().split("T", 1)[0], element['Confirmed'], element['Deaths'], element['Recovered'], dataC[index - 1]['Confirmed'] * -1 + dataC[index]['Confirmed']]);

                      var t = dataC[index - 1]['Confirmed'] * -1 + dataC[index]['Confirmed'];

                      if (t < 0) {
                        _this17.dataCountry_Added_Cases.push([element['Date'].toString().split("T", 1)[0], 0]);
                      } else {
                        _this17.dataCountry_Added_Cases.push([element['Date'].toString().split("T", 1)[0], t]);
                      }
                    }
                  });
                });
              }).then(function (res) {
                _this17.useAngularLibrary(loading);
              });
            });
          }
        }, {
          key: "onSearchTerm",
          value: function onSearchTerm(ev) {
            var val = ev.detail.value;
            this.all_countries = this.all_countries_for_search;

            if (val.trim() !== '') {
              this.all_countries = this.all_countries.filter(function (term) {
                return term['Country'].toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
              });
            }
          }
        }, {
          key: "sortByProperty",
          value: function sortByProperty(property) {
            return function (a, b) {
              if (a[property] < b[property]) return 1;else if (a[property] > b[property]) return -1;
              return 0;
            };
          }
        }, {
          key: "useAngularLibrary",
          value: function useAngularLibrary(loading) {
            //Geocharts
            this.NewCasesMap = {
              chartType: 'GeoChart',
              dataTable: this.dataMap_New,
              options: {
                'title': 'Map of New Confirmed Cases',
                'region': 'world'
              }
            };
            this.AllCasesMap = {
              chartType: 'GeoChart',
              dataTable: this.dataMap_All,
              options: {
                'title': 'Map of All Confirmed Cases',
                'region': 'world'
              }
            }; //Piecharts

            this.NewCasesChart = {
              chartType: 'PieChart',
              dataTable: this.data_sorted_new_country,
              options: {
                height: 600,
                'legend': 'none'
              }
            };
            this.AllCasesChart = {
              chartType: 'PieChart',
              dataTable: this.data_sorted_all_country,
              options: {
                height: 600,
                'legend': 'none'
              }
            };
            this.CasesChartLineFR = {
              chartType: 'LineChart',
              dataTable: this.dataCountry_FR,
              options: {
                height: 600
              }
            }; //ColumnCharts

            this.CasesChartColumn = {
              chartType: 'ColumnChart',
              dataTable: this.dataCountry_Colum,
              options: {
                height: 600,
                isStacked: true
              }
            };
            this.CasesAddedCases = {
              chartType: 'LineChart',
              dataTable: this.dataCountry_Added_Cases,
              options: {
                height: 600,
                isStacked: true
              }
            };
            loading.dismiss();
          }
        }, {
          key: "closeNoti",
          value: function closeNoti() {
            document.getElementById('noti').style.opacity = "0.0";
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toastController.create({
                        message: 'Error while fetching the data.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context8.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map
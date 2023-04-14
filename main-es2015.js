(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Kwz":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cards/card-line-chart/card-line-chart.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CardLineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLineChartComponent", function() { return CardLineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-line-chart.component.html */ "lLla");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




let CardLineChartComponent = class CardLineChartComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        var config = {
            type: "line",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#4c51bf",
                        borderColor: "#4c51bf",
                        data: [65, 78, 66, 44, 56, 67, 75],
                        fill: false,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: "#fff",
                        borderColor: "#fff",
                        data: [40, 68, 86, 74, 56, 60, 87],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Sales Charts",
                    fontColor: "white",
                },
                legend: {
                    labels: {
                        fontColor: "white",
                    },
                    align: "end",
                    position: "bottom",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Month",
                                fontColor: "white",
                            },
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(0, 0, 0, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                                fontColor: "white",
                            },
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: "rgba(255, 255, 255, 0.15)",
                                zeroLineColor: "rgba(33, 37, 41, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById("line-chart");
        ctx = ctx.getContext("2d");
        new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, config);
    }
};
CardLineChartComponent.ctorParameters = () => [];
CardLineChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-line-chart",
        template: _raw_loader_card_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardLineChartComponent);



/***/ }),

/***/ "/GnJ":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-bar-chart/card-bar-chart.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\r\n        <h6 class=\"uppercase text-blueGray-400 mb-1 text-xs font-semibold\">\r\n          Performance\r\n        </h6>\r\n        <h2 class=\"text-blueGray-700 text-xl font-semibold\">Total orders</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"p-4 flex-auto\">\r\n    <!-- Chart -->\r\n    <div class=\"relative\" style=\"height: 350px\">\r\n      <canvas id=\"bar-chart\"></canvas>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "/kjZ":
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "LUN3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() { }
};
LoginComponent.ctorParameters = () => [];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-login",
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], LoginComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mdiazu\IdeaProjects\micrositio-salones\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0slC":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dropdowns/user-dropdown/user-dropdown.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDropdownComponent", function() { return UserDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-dropdown.component.html */ "H3xT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let UserDropdownComponent = class UserDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngAfterViewInit() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
};
UserDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
UserDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-user-dropdown",
        template: _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserDropdownComponent);



/***/ }),

/***/ "1DoU":
/*!***************************************************************!*\
  !*** ./src/app/components/footers/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "CzbP");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "qKzM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FooterComponent = class FooterComponent {
    constructor() {
        this.date = new Date().getFullYear();
    }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-footer",
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "3IhM":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cards/card-page-visits/card-page-visits.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CardPageVisitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageVisitsComponent", function() { return CardPageVisitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_page_visits_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-page-visits.component.html */ "L/HX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardPageVisitsComponent = class CardPageVisitsComponent {
    constructor() { }
    ngOnInit() { }
};
CardPageVisitsComponent.ctorParameters = () => [];
CardPageVisitsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-page-visits",
        template: _raw_loader_card_page_visits_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardPageVisitsComponent);



/***/ }),

/***/ "4b2p":
/*!***************************************************************************!*\
  !*** ./src/app/components/navbars/index-navbar/index-navbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: IndexNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexNavbarComponent", function() { return IndexNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index-navbar.component.html */ "RORk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let IndexNavbarComponent = class IndexNavbarComponent {
    constructor() {
        this.navbarOpen = false;
    }
    ngOnInit() { }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
};
IndexNavbarComponent.ctorParameters = () => [];
IndexNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index-navbar",
        template: _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], IndexNavbarComponent);



/***/ }),

/***/ "8GP7":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-auth-navbar></app-auth-navbar>\r\n<main class='profile-page'>\r\n  <section class='relative block h-500-px'>\r\n    <div class='absolute top-0 w-full h-full bg-center bg-cover'\r\n         style=\"background-image: url('/assets/img/background.jpg');\">\r\n      <span id='blackOverlay'\r\n            class='w-full h-full absolute opacity-50 bg-black'></span>\r\n    </div>\r\n    <div\r\n      class='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px'\r\n      style='transform: translateZ(0)'>\r\n      <svg\r\n        class='absolute bottom-0 overflow-hidden'\r\n        xmlns='http://www.w3.org/2000/svg'\r\n        preserveAspectRatio='none'\r\n        version='1.1'\r\n        viewBox='0 0 2560 100'\r\n        x='0'\r\n        y='0'>\r\n        <polygon\r\n          class='text-blueGray-200 fill-current'\r\n          points='2560 0 2560 100 0 100'></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  <section class='relative py-16 bg-blueGray-200'>\r\n    <div class='container mx-auto px-4'>\r\n      <div class='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64'>\r\n        <div class='px-6 ml-2'>\r\n          <div class='text-left mt-12'>\r\n            <h3 class='text-4xl font-semibold leading-normal text-blueGray-700 mb-8'>\r\n              Mis beneficios\r\n            </h3>\r\n          </div>\r\n          <div>\r\n\r\n            <div class='w-full'>\r\n              <div>\r\n                <!-- Card stats -->\r\n                <div class='flex flex-wrap'>\r\n                  <div class='w-full lg:w-6/12 xl:w-3/12 px-4'>\r\n                    <app-card-beneficio\r\n                      benTipo='Beneficio'\r\n                      benNombre='Acceso Gratuito'\r\n                      benDisponible='5'\r\n                      benIconName='fas fa-gift'\r\n                    ></app-card-beneficio>\r\n                  </div>\r\n                  <div class='w-full lg:w-6/12 xl:w-3/12 px-4'>\r\n                    <app-card-beneficio\r\n                      benTipo='Beneficio'\r\n                      benNombre='Acceso Preferencial'\r\n                      benDisponible='Infinito'\r\n                      benIconName='fas fa-dollar-sign'\r\n                    ></app-card-beneficio>\r\n                  </div>\r\n                  <div class='w-full lg:w-6/12 xl:w-3/12 px-4'>\r\n                    <app-card-beneficio\r\n                      benTipo='Beneficio'\r\n                      benNombre='Acceso Rebajado'\r\n                      benDisponible='5'\r\n                      benIconName='fas fa-dollar-sign'\r\n                    ></app-card-beneficio>\r\n                  </div>\r\n                  <div class='w-full lg:w-6/12 xl:w-3/12 px-4'>\r\n                    <app-card-beneficio\r\n                      benTipo='Beneficio'\r\n                      benNombre='Cupos Comprados'\r\n                      benDisponible='8'\r\n                      benIconName='fas fa-dollar-sign'\r\n                    ></app-card-beneficio>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class='mt-10 py-10 border-t border-blueGray-200 text-center'>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "AN84":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/landing.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-auth-navbar></app-auth-navbar>\r\n<main>\r\n  <div\r\n    class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\"\r\n  >\r\n    <div\r\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\r\n      style=\"\r\n        background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');\r\n      \"\r\n    >\r\n      <span\r\n        id=\"blackOverlay\"\r\n        class=\"w-full h-full absolute opacity-75 bg-black\"\r\n      ></span>\r\n    </div>\r\n    <div class=\"container relative mx-auto\">\r\n      <div class=\"items-center flex flex-wrap\">\r\n        <div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\">\r\n          <div class=\"pr-12\">\r\n            <h1 class=\"text-white font-semibold text-5xl\">\r\n              Your story starts with us.\r\n            </h1>\r\n            <p class=\"mt-4 text-lg text-blueGray-200\">\r\n              This is a simple example of a Landing Page you can build using\r\n              Notus Angular. It features multiple CSS components based on the\r\n              Tailwind CSS design system.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\r\n      style=\"transform: translateZ(0)\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-blueGray-200 fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <section class=\"pb-20 bg-blueGray-200 -mt-24\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\r\n          >\r\n            <div class=\"px-4 py-5 flex-auto\">\r\n              <div\r\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400\"\r\n              >\r\n                <i class=\"fas fa-award\"></i>\r\n              </div>\r\n              <h6 class=\"text-xl font-semibold\">Awarded Agency</h6>\r\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\r\n                Divide details about your product or agency work into parts. A\r\n                paragraph describing a feature will be enough.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"w-full md:w-4/12 px-4 text-center\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\r\n          >\r\n            <div class=\"px-4 py-5 flex-auto\">\r\n              <div\r\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400\"\r\n              >\r\n                <i class=\"fas fa-retweet\"></i>\r\n              </div>\r\n              <h6 class=\"text-xl font-semibold\">Free Revisions</h6>\r\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\r\n                Keep you user engaged by providing meaningful information.\r\n                Remember that by this time, the user is curious.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"pt-6 w-full md:w-4/12 px-4 text-center\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\r\n          >\r\n            <div class=\"px-4 py-5 flex-auto\">\r\n              <div\r\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400\"\r\n              >\r\n                <i class=\"fas fa-fingerprint\"></i>\r\n              </div>\r\n              <h6 class=\"text-xl font-semibold\">Verified Company</h6>\r\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\r\n                Write a few lines about each one. A paragraph describing a\r\n                feature will be enough. Keep you user engaged!\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex flex-wrap items-center mt-32\">\r\n        <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto\">\r\n          <div\r\n            class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n          >\r\n            <i class=\"fas fa-user-friends text-xl\"></i>\r\n          </div>\r\n          <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\r\n            Working with us is a pleasure\r\n          </h3>\r\n          <p\r\n            class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\r\n          >\r\n            Don't let your uses guess by attaching tooltips and popoves to any\r\n            element. Just make sure you enable them first via JavaScript.\r\n          </p>\r\n          <p\r\n            class=\"text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600\"\r\n          >\r\n            The kit comes with three pre-built pages to help you get started\r\n            faster. You can change the text and images and you're good to go.\r\n            Just make sure you enable them first via JavaScript.\r\n          </p>\r\n          <a [routerLink]=\"['/']\" class=\"font-bold text-blueGray-700 mt-8\">\r\n            Check Notus Angular!\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"w-full md:w-4/12 px-4 mr-auto ml-auto\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600\"\r\n          >\r\n            <img\r\n              alt=\"...\"\r\n              src=\"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80\"\r\n              class=\"w-full align-middle rounded-t-lg\"\r\n            />\r\n            <blockquote class=\"relative p-8 mb-4\">\r\n              <svg\r\n                preserveAspectRatio=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 583 95\"\r\n                class=\"absolute left-0 w-full block h-95-px -top-94-px\"\r\n              >\r\n                <polygon\r\n                  points=\"-30,95 583,95 583,65\"\r\n                  class=\"text-red-600 fill-current\"\r\n                ></polygon>\r\n              </svg>\r\n              <h4 class=\"text-xl font-bold text-white\">Top Notch Services</h4>\r\n              <p class=\"text-md font-light mt-2 text-white\">\r\n                The Arctic Ocean freezes every winter and much of the sea-ice\r\n                then thaws every summer, and that process will continue whatever\r\n                happens.\r\n              </p>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"relative py-20\">\r\n    <div\r\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\r\n      style=\"transform: translateZ(0)\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-white fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"items-center flex flex-wrap\">\r\n        <div class=\"w-full md:w-4/12 ml-auto mr-auto px-4\">\r\n          <img\r\n            alt=\"...\"\r\n            class=\"max-w-full rounded-lg shadow-lg\"\r\n            src=\"https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80\"\r\n          />\r\n        </div>\r\n        <div class=\"w-full md:w-5/12 ml-auto mr-auto px-4\">\r\n          <div class=\"md:pr-12\">\r\n            <div\r\n              class=\"text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300\"\r\n            >\r\n              <i class=\"fas fa-rocket text-xl\"></i>\r\n            </div>\r\n            <h3 class=\"text-3xl font-semibold\">A growing company</h3>\r\n            <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\r\n              The extension comes with three pre-built pages to help you get\r\n              started faster. You can change the text and images and you're good\r\n              to go.\r\n            </p>\r\n            <ul class=\"list-none mt-6\">\r\n              <li class=\"py-2\">\r\n                <div class=\"flex items-center\">\r\n                  <div>\r\n                    <span\r\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\r\n                    >\r\n                      <i class=\"fas fa-fingerprint\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"text-blueGray-500\">\r\n                      Carefully crafted components\r\n                    </h4>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"flex items-center\">\r\n                  <div>\r\n                    <span\r\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\r\n                    >\r\n                      <i class=\"fab fa-html5\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"text-blueGray-500\">Amazing page examples</h4>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"flex items-center\">\r\n                  <div>\r\n                    <span\r\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\r\n                    >\r\n                      <i class=\"far fa-paper-plane\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"text-blueGray-500\">Dynamic components</h4>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"pt-20 pb-48\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"flex flex-wrap justify-center text-center mb-24\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <h2 class=\"text-4xl font-semibold\">Here are our heroes</h2>\r\n          <p class=\"text-lg leading-relaxed m-4 text-blueGray-500\">\r\n            According to the National Oceanic and Atmospheric Administration,\r\n            Ted, Scambos, NSIDClead scentist, puts the potentially record\r\n            maximum.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"assets/img/team-1-800x800.jpg\"\r\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Ryan Tompson</h5>\r\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\r\n                Web Developer\r\n              </p>\r\n              <div class=\"mt-6\">\r\n                <button\r\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-twitter\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-facebook-f\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-dribbble\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"assets/img/team-2-800x800.jpg\"\r\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Romina Hadid</h5>\r\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\r\n                Marketing Specialist\r\n              </p>\r\n              <div class=\"mt-6\">\r\n                <button\r\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-google\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-facebook-f\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"assets/img/team-3-800x800.jpg\"\r\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Alexa Smith</h5>\r\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\r\n                UI/UX Designer\r\n              </p>\r\n              <div class=\"mt-6\">\r\n                <button\r\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-google\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-twitter\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-instagram\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"assets/img/team-4-470x470.png\"\r\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Jenna Kardi</h5>\r\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\r\n                Founder and CEO\r\n              </p>\r\n              <div class=\"mt-6\">\r\n                <button\r\n                  class=\"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-dribbble\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-google\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-twitter\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-instagram\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"pb-20 relative block bg-blueGray-800\">\r\n    <div\r\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\r\n      style=\"transform: translateZ(0)\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-blueGray-800 fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n\r\n    <div class=\"container mx-auto px-4 lg:pt-24 lg:pb-64\">\r\n      <div class=\"flex flex-wrap text-center justify-center\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <h2 class=\"text-4xl font-semibold text-white\">Build something</h2>\r\n          <p class=\"text-lg leading-relaxed mt-4 mb-4 text-blueGray-400\">\r\n            Put the potentially record low maximum sea ice extent tihs year down\r\n            to low ice. According to the National Oceanic and Atmospheric\r\n            Administration, Ted, Scambos.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-wrap mt-12 justify-center\">\r\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\r\n          <div\r\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\r\n          >\r\n            <i class=\"fas fa-medal text-xl\"></i>\r\n          </div>\r\n          <h6 class=\"text-xl mt-5 font-semibold text-white\">\r\n            Excelent Services\r\n          </h6>\r\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\r\n            Some quick example text to build on the card title and make up the\r\n            bulk of the card's content.\r\n          </p>\r\n        </div>\r\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\r\n          <div\r\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\r\n          >\r\n            <i class=\"fas fa-poll text-xl\"></i>\r\n          </div>\r\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">\r\n            Grow your market\r\n          </h5>\r\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\r\n            Some quick example text to build on the card title and make up the\r\n            bulk of the card's content.\r\n          </p>\r\n        </div>\r\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\r\n          <div\r\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\r\n          >\r\n            <i class=\"fas fa-lightbulb text-xl\"></i>\r\n          </div>\r\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">Launch time</h5>\r\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\r\n            Some quick example text to build on the card title and make up the\r\n            bulk of the card's content.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"relative block py-24 lg:pt-0 bg-blueGray-800\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"flex flex-wrap justify-center lg:-mt-64 -mt-48\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200\"\r\n          >\r\n            <div class=\"flex-auto p-5 lg:p-10\">\r\n              <h4 class=\"text-2xl font-semibold\">Want to work with us?</h4>\r\n              <p class=\"leading-relaxed mt-1 mb-4 text-blueGray-500\">\r\n                Complete this form and we will get back to you in 24 hours.\r\n              </p>\r\n              <div class=\"relative w-full mb-3 mt-8\">\r\n                <label\r\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                  htmlFor=\"full-name\"\r\n                >\r\n                  Full Name\r\n                </label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                  placeholder=\"Full Name\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"relative w-full mb-3\">\r\n                <label\r\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                  htmlFor=\"email\"\r\n                >\r\n                  Email\r\n                </label>\r\n                <input\r\n                  type=\"email\"\r\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                  placeholder=\"Email\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"relative w-full mb-3\">\r\n                <label\r\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                  htmlFor=\"message\"\r\n                >\r\n                  Message\r\n                </label>\r\n                <textarea\r\n                  rows=\"4\"\r\n                  cols=\"80\"\r\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full\"\r\n                  placeholder=\"Type a message...\"\r\n                ></textarea>\r\n              </div>\r\n              <div class=\"text-center mt-6\">\r\n                <button\r\n                  class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\r\n                  type=\"button\"\r\n                >\r\n                  Send Message\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "AiJS":
/*!************************************************!*\
  !*** ./src/app/views/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.component.html */ "W8yq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() { }
};
IndexComponent.ctorParameters = () => [];
IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index",
        template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], IndexComponent);



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
    production: false,
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

/***/ "CzbP":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer/footer.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class='relative bg-blueGray-200 pt-8 pb-6'>\r\n  <div\r\n    class='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20'\r\n    style='transform: translateZ(0)'\r\n  >\r\n    <svg\r\n      class='absolute bottom-0 overflow-hidden'\r\n      xmlns='http://www.w3.org/2000/svg'\r\n      preserveAspectRatio='none'\r\n      version='1.1'\r\n      viewBox='0 0 2560 100'\r\n      x='0'\r\n      y='0'\r\n    >\r\n      <polygon\r\n        class='text-blueGray-200 fill-current'\r\n        points='2560 0 2560 100 0 100'\r\n      ></polygon>\r\n    </svg>\r\n  </div>\r\n  <div class='container mx-auto px-4'>\r\n    <div class='flex flex-wrap text-center lg:text-left'>\r\n      <div class='w-full lg:w-6/12 px-4'>\r\n        <h4 class='text-3xl font-semibold'>TRAVEL</h4>\r\n        <h5 class='text-lg mt-0 mb-2 text-blueGray-600'>\r\n          Síguenos en:\r\n        </h5>\r\n        <div class='mt-6 lg:mb-0 mb-6'>\r\n          <button\r\n            class='bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'\r\n            type='button'\r\n            onclick=\"location.href='https://twitter.com/travelclubchile'\"\r\n          >\r\n            <i class='fab fa-twitter'></i>\r\n          </button>\r\n          <button\r\n            class='bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'\r\n            type='button'\r\n            onclick=\"location.href='https://www.facebook.com/travelclubchile/'\"\r\n          >\r\n            <i class='fab fa-facebook-square'></i>\r\n          </button>\r\n          <button\r\n            class='bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'\r\n            type='button'\r\n            onclick=\"location.href='https://www.instagram.com/travelclubchile/'\"\r\n          >\r\n            <i class='fab fa-instagram'></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class='w-full lg:w-6/12 px-4'>\r\n        <div class='flex flex-wrap items-top mb-6'>\r\n          <div class='w-full lg:w-4/12 px-4 ml-auto'>\r\n            <span\r\n              class='block uppercase text-blueGray-500 text-sm font-semibold mb-2'\r\n            >\r\n              Programa Travel\r\n            </span>\r\n            <ul class='list-unstyled'>\r\n              <li>\r\n                <a\r\n                  class='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'\r\n                  href='https://viajes.travel.cl/'\r\n                >\r\n                  Viajes\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'\r\n                  href='https://duty.travel.cl/'\r\n                >\r\n                  Duty\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'\r\n                  href='https://tienda.travel.cl/'\r\n                >\r\n                  Tienda\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'\r\n                  href='https://ww3.bancochile.cl/wps/wcm/connect/Personas/Portal/programa-travel/beneficios/inicio-beneficios'\r\n                >\r\n                  Beneficios\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class='w-full lg:w-4/12 px-4'>\r\n            <span\r\n              class='block uppercase text-blueGray-500 text-sm font-semibold mb-2'\r\n            >\r\n              Servicio al cliente\r\n            </span>\r\n            <ul class='list-unstyled'>\r\n              <li>\r\n                <a\r\n                  class='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'\r\n                  href='https://www.travel.cl/contenido/sucursales'\r\n                >\r\n                  Red de atención\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'\r\n                  href='https://www.travel.cl/preguntas-frecuentes'\r\n                >\r\n                  Preguntas frecuentes\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'\r\n                  href='https://ww3.bancochile.cl/wps/wcm/connect/personas/portal/programa-travel/programa/inicio-portada'\r\n                >\r\n                  Conoce tu programa\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'\r\n                  href='https://www.travel.cl/reglamento'\r\n                >\r\n                  Reglamento del programa\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr class='my-6 border-blueGray-300' />\r\n    <div class='flex flex-wrap items-center md:justify-between justify-center'>\r\n      <div class='w-full md:w-4/12 px-4 mx-auto text-center'>\r\n        <div class='text-sm text-blueGray-500 font-semibold py-1'>\r\n          ©2020 Copyright:\r\n          <a\r\n            href='https://www.travel.cl'\r\n            class='text-blueGray-500 hover:text-blueGray-800'\r\n          >\r\n            Travel\r\n          </a>\r\n          .\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "DLfO":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-small/footer-small.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer\r\n  class=\"pb-6\"\r\n  [ngClass]=\"absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative'\"\r\n>\r\n  <div class=\"container mx-auto px-4\">\r\n    <hr class=\"mb-6 border-b-1 border-blueGray-600\" />\r\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\r\n      <div class=\"w-full md:w-4/12 px-4\">\r\n        <div\r\n          class=\"text-sm text-white font-semibold py-1 text-center md:text-left\"\r\n        >\r\n          Copyright © {{ date }}\r\n          <a\r\n            href=\"https://www.creative-tim.com?ref=na-footer-small\"\r\n            class=\"text-white hover:text-blueGray-300 text-sm font-semibold py-1\"\r\n          >\r\n            Creative Tim\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-full md:w-8/12 px-4\">\r\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\r\n          <li>\r\n            <a\r\n              href=\"https://www.creative-tim.com?ref=na-footer-small\"\r\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              Creative Tim\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"https://www.creative-tim.com/presentation?ref=na-footer-small\"\r\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              About Us\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"http://blog.creative-tim.com?ref=na-footer-small\"\r\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              Blog\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim\"\r\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              MIT License\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "EbUq":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-admin/footer-admin.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"block py-4\">\r\n  <div class=\"container mx-auto px-4\">\r\n    <hr class=\"mb-4 border-b-1 border-blueGray-200\" />\r\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\r\n      <div class=\"w-full md:w-4/12 px-4\">\r\n        <div\r\n          class=\"text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left\"\r\n        >\r\n          Copyright © {{ date }}\r\n          <a\r\n            href=\"https://www.creative-tim.com?ref=na-footer-admin\"\r\n            class=\"text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1\"\r\n          >\r\n            Creative Tim\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-full md:w-8/12 px-4\">\r\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\r\n          <li>\r\n            <a\r\n              href=\"https://www.creative-tim.com?ref=na-footer-admin\"\r\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              Creative Tim\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"https://www.creative-tim.com/presentation?ref=na-footer-admin\"\r\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              About Us\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"http://blog.creative-tim.com?ref=na-footer-admin\"\r\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              Blog\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim\"\r\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              MIT License\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "H3xT":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/user-dropdown/user-dropdown.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\r\n  class=\"text-blueGray-500 block\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  <div class=\"items-center flex\">\r\n    <span\r\n      class=\"w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full\"\r\n    >\r\n      <img\r\n        alt=\"...\"\r\n        class=\"w-full rounded-full align-middle border-none shadow-lg\"\r\n        src=\"assets/img/team-1-800x800.jpg\"\r\n      />\r\n    </span>\r\n  </div>\r\n</a>\r\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\r\n  <div\r\n    class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\r\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  >\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Another action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Something else here\r\n    </a>\r\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Seprated link\r\n    </a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "HEly":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-stats/card-stats.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg\"\r\n>\r\n  <div class=\"flex-auto p-4\">\r\n    <div class=\"flex flex-wrap\">\r\n      <div class=\"relative w-full pr-4 max-w-full flex-grow flex-1\">\r\n        <h5 class=\"text-blueGray-400 uppercase font-bold text-xs\">\r\n          {{ statSubtitle }}\r\n        </h5>\r\n        <span class=\"font-semibold text-xl text-blueGray-700\">\r\n          {{ statTitle }}\r\n        </span>\r\n      </div>\r\n      <div class=\"relative w-auto pl-4 flex-initial\">\r\n        <div\r\n          class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full\"\r\n          [ngClass]=\"[statIconColor]\"\r\n        >\r\n          <i [ngClass]=\"statIconName\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <p class=\"text-sm text-blueGray-400 mt-4\">\r\n      <span class=\"mr-2\" [ngClass]=\"statPercentColor\">\r\n        <i\r\n          [ngClass]=\"\r\n            statArrow === 'up' ? 'fas fa-arrow-up' : 'fas fa-arrow-down'\r\n          \"\r\n        ></i>\r\n        {{ statPercent }}%\r\n      </span>\r\n      <span class=\"whitespace-nowrap\">{{ statDescripiron }}</span>\r\n    </p>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "J87Q":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/card-stats/card-stats.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardStatsComponent", function() { return CardStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-stats.component.html */ "HEly");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardStatsComponent = class CardStatsComponent {
    constructor() {
        this._statSubtitle = "Traffic";
        this._statTitle = "350,897";
        this._statArrow = "up";
        this._statPercent = "3.48";
        this._statPercentColor = "text-emerald-500";
        this._statDescripiron = "Since last month";
        this._statIconName = "far fa-chart-bar";
        this._statIconColor = "bg-red-500";
    }
    get statSubtitle() {
        return this._statSubtitle;
    }
    set statSubtitle(statSubtitle) {
        this._statSubtitle = statSubtitle === undefined ? "Traffic" : statSubtitle;
    }
    get statTitle() {
        return this._statTitle;
    }
    set statTitle(statTitle) {
        this._statTitle = statTitle === undefined ? "350,897" : statTitle;
    }
    // The value must match one of up or down
    get statArrow() {
        return this._statArrow;
    }
    set statArrow(statArrow) {
        this._statArrow =
            statArrow !== "down" && statArrow !== "up" ? "up" : statArrow;
    }
    get statPercent() {
        return this._statPercent;
    }
    set statPercent(statPercent) {
        this._statPercent = statPercent === undefined ? "3.48" : statPercent;
    }
    // can be any of the text color utilities
    // from tailwindcss
    get statPercentColor() {
        return this._statPercentColor;
    }
    set statPercentColor(statPercentColor) {
        this._statPercentColor =
            statPercentColor === undefined ? "text-emerald-500" : statPercentColor;
    }
    get statDescripiron() {
        return this._statDescripiron;
    }
    set statDescripiron(statDescripiron) {
        this._statDescripiron =
            statDescripiron === undefined ? "Since last month" : statDescripiron;
    }
    get statIconName() {
        return this._statIconName;
    }
    set statIconName(statIconName) {
        this._statIconName =
            statIconName === undefined ? "far fa-chart-bar" : statIconName;
    }
    // can be any of the background color utilities
    // from tailwindcss
    get statIconColor() {
        return this._statIconColor;
    }
    set statIconColor(statIconColor) {
        this._statIconColor =
            statIconColor === undefined ? "bg-red-500" : statIconColor;
    }
    ngOnInit() { }
};
CardStatsComponent.ctorParameters = () => [];
CardStatsComponent.propDecorators = {
    statSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statPercent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statPercentColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statDescripiron: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statIconName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statIconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
CardStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-stats",
        template: _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardStatsComponent);



/***/ }),

/***/ "J8Ne":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/index-dropdown/index-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IndexDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexDropdownComponent", function() { return IndexDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index-dropdown.component.html */ "e8es");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let IndexDropdownComponent = class IndexDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngOnInit() { }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
            this.createPoppper();
        }
    }
    createPoppper() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
};
IndexDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
IndexDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index-dropdown",
        template: _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], IndexDropdownComponent);



/***/ }),

/***/ "K8fT":
/*!*****************************************************!*\
  !*** ./src/app/views/profile/profile.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  font-family: 'Nunito-Regular';\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8tUmVndWxhcic7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\r\n  class=\"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6\"\r\n>\r\n  <div\r\n    class=\"md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto\"\r\n  >\r\n    <!-- Toggler -->\r\n    <button\r\n      class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\r\n      type=\"button\"\r\n      (click)=\"toggleCollapseShow('bg-white m-2 py-3 px-6')\"\r\n    >\r\n      <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n    <!-- Brand -->\r\n    <a\r\n      [routerLink]=\"['/']\"\r\n      class=\"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0\"\r\n    >\r\n      <span class=\"block sm:hidden\"> Tailwind Angular </span>\r\n      <span class=\"hidden sm:block\"> Notus Angular </span>\r\n    </a>\r\n    <!-- User -->\r\n    <ul class=\"md:hidden items-center flex flex-wrap list-none\">\r\n      <li class=\"inline-block relative\">\r\n        <app-notification-dropdown class=\"block\"></app-notification-dropdown>\r\n      </li>\r\n      <li class=\"inline-block relative\">\r\n        <app-user-dropdown class=\"block\"></app-user-dropdown>\r\n      </li>\r\n    </ul>\r\n    <!-- Collapse -->\r\n    <div\r\n      class=\"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded\"\r\n      [ngClass]=\"collapseShow\"\r\n    >\r\n      <!-- Collapse header -->\r\n      <div\r\n        class=\"md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200\"\r\n      >\r\n        <div class=\"flex flex-wrap\">\r\n          <div class=\"w-6/12\">\r\n            <a\r\n              [routerLink]=\"['/']\"\r\n              class=\"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0\"\r\n            >\r\n              Notus Angular\r\n            </a>\r\n          </div>\r\n          <div class=\"w-6/12 flex justify-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\r\n              (click)=\"toggleCollapseShow('hidden')\"\r\n            >\r\n              <i class=\"fas fa-times\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Form -->\r\n      <form class=\"mt-6 mb-4 md:hidden\">\r\n        <div class=\"mb-3 pt-0\">\r\n          <input\r\n            type=\"text\"\r\n            placeholder=\"Search\"\r\n            class=\"border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal\"\r\n          />\r\n        </div>\r\n      </form>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"my-4 md:min-w-full\" />\r\n      <!-- Heading -->\r\n      <h6\r\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\r\n      >\r\n        Admin Layout Pages\r\n      </h6>\r\n      <!-- Navigation -->\r\n\r\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none\">\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/admin/dashboard']\"\r\n            class=\"text-xs uppercase py-3 font-bold block\"\r\n            routerLinkActive\r\n            #adminDashboard=\"routerLinkActive\"\r\n            [ngClass]=\"\r\n              adminDashboard.isActive\r\n                ? 'text-red-600 hover:text-red-700'\r\n                : 'text-blueGray-700 hover:text-blueGray-500'\r\n            \"\r\n          >\r\n            <i\r\n              class=\"fas fa-tv mr-2 text-sm\"\r\n              [ngClass]=\"\r\n                adminDashboard.isActive ? 'opacity-75' : 'text-blueGray-300'\r\n              \"\r\n            ></i>\r\n            Dashboard\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/admin/settings']\"\r\n            class=\"text-xs uppercase py-3 font-bold block\"\r\n            routerLinkActive\r\n            #adminSettings=\"routerLinkActive\"\r\n            [ngClass]=\"\r\n              adminSettings.isActive\r\n                ? 'text-red-600 hover:text-red-700'\r\n                : 'text-blueGray-700 hover:text-blueGray-500'\r\n            \"\r\n          >\r\n            <i\r\n              class=\"fas fa-tools mr-2 text-sm\"\r\n              [ngClass]=\"\r\n                adminSettings.isActive ? 'opacity-75' : 'text-blueGray-300'\r\n              \"\r\n            ></i>\r\n            Settings\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/admin/tables']\"\r\n            class=\"text-xs uppercase py-3 font-bold block\"\r\n            routerLinkActive\r\n            #adminTables=\"routerLinkActive\"\r\n            [ngClass]=\"\r\n              adminTables.isActive\r\n                ? 'text-red-600 hover:text-red-700'\r\n                : 'text-blueGray-700 hover:text-blueGray-500'\r\n            \"\r\n          >\r\n            <i\r\n              class=\"fas fa-table mr-2 text-sm\"\r\n              [ngClass]=\"\r\n                adminTables.isActive ? 'opacity-75' : 'text-blueGray-300'\r\n              \"\r\n            ></i>\r\n            Tables\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/admin/maps']\"\r\n            class=\"text-xs uppercase py-3 font-bold block\"\r\n            routerLinkActive\r\n            #adminMaps=\"routerLinkActive\"\r\n            [ngClass]=\"\r\n              adminMaps.isActive\r\n                ? 'text-red-600 hover:text-red-700'\r\n                : 'text-blueGray-700 hover:text-blueGray-500'\r\n            \"\r\n          >\r\n            <i\r\n              class=\"fas fa-map-marked mr-2 text-sm\"\r\n              [ngClass]=\"\r\n                adminMaps.isActive ? 'opacity-75' : 'text-blueGray-300'\r\n              \"\r\n            ></i>\r\n            Maps\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"my-4 md:min-w-full\" />\r\n      <!-- Heading -->\r\n      <h6\r\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\r\n      >\r\n        Auth Layout Pages\r\n      </h6>\r\n      <!-- Navigation -->\r\n\r\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/auth/login']\"\r\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\r\n          >\r\n            <i class=\"fas fa-fingerprint text-blueGray-300 mr-2 text-sm\"></i>\r\n            Login\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/auth/register']\"\r\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\r\n          >\r\n            <i class=\"fas fa-clipboard-list text-blueGray-300 mr-2 text-sm\"></i>\r\n            Register\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"my-4 md:min-w-full\" />\r\n      <!-- Heading -->\r\n      <h6\r\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\r\n      >\r\n        No Layout Pages\r\n      </h6>\r\n      <!-- Navigation -->\r\n\r\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/landing']\"\r\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\r\n          >\r\n            <i class=\"fas fa-newspaper text-blueGray-300 mr-2 text-sm\"></i>\r\n            Landing Page\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/profile']\"\r\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\r\n          >\r\n            <i class=\"fas fa-user-circle text-blueGray-300 mr-2 text-sm\"></i>\r\n            Profile Page\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"my-4 md:min-w-full\" />\r\n      <!-- Heading -->\r\n      <h6\r\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\r\n      >\r\n        Documentation\r\n      </h6>\r\n      <!-- Navigation -->\r\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\r\n        <li class=\"inline-flex\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/colors/notus\"\r\n            target=\"_blank\"\r\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\r\n          >\r\n            <i class=\"fas fa-paint-brush mr-2 text-blueGray-300 text-base\"></i>\r\n            Styles\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"inline-flex\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus\"\r\n            target=\"_blank\"\r\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\r\n          >\r\n            <i class=\"fab fa-css3-alt mr-2 text-blueGray-300 text-base\"></i>\r\n            CSS Components\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"inline-flex\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus\"\r\n            target=\"_blank\"\r\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\r\n          >\r\n            <i class=\"fab fa-angular mr-2 text-blueGray-300 text-base\"></i>\r\n            Angular\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"inline-flex\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus\"\r\n            target=\"_blank\"\r\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\r\n          >\r\n            <i class=\"fab fa-js-square mr-2 text-blueGray-300 text-base\"></i>\r\n            Javascript\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"inline-flex\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus\"\r\n            target=\"_blank\"\r\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\r\n          >\r\n            <i class=\"fab fa-react mr-2 text-blueGray-300 text-base\"></i>\r\n            NextJS\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"inline-flex\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus\"\r\n            target=\"_blank\"\r\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\r\n          >\r\n            <i class=\"fab fa-react mr-2 text-blueGray-300 text-base\"></i>\r\n            React\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"inline-flex\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus\"\r\n            target=\"_blank\"\r\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\r\n          >\r\n            <i class=\"fas fa-link mr-2 text-blueGray-300 text-base\"></i>\r\n            Svelte\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"inline-flex\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus\"\r\n            target=\"_blank\"\r\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\r\n          >\r\n            <i class=\"fab fa-vuejs mr-2 text-blueGray-300 text-base\"></i>\r\n            VueJS\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "L/HX":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-page-visits/card-page-visits.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\r\n        <h3 class=\"font-semibold text-base text-blueGray-700\">Page visits</h3>\r\n      </div>\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1 text-right\">\r\n        <button\r\n          class=\"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\r\n          type=\"button\"\r\n        >\r\n          See all\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n          >\r\n            Page name\r\n          </th>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n          >\r\n            Visitors\r\n          </th>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n          >\r\n            Unique users\r\n          </th>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n          >\r\n            Bounce rate\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            /argon/\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            4,569\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            340\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-arrow-up text-emerald-500 mr-4\"></i>\r\n            46,53%\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            /argon/index.html\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            3,985\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            319\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-arrow-down text-orange-500 mr-4\"></i>\r\n            46,53%\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            /argon/charts.html\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            3,513\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            294\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-arrow-down text-orange-500 mr-4\"></i>\r\n            36,49%\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            /argon/tables.html\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            2,050\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            147\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-arrow-up text-emerald-500 mr-4\"></i>\r\n            50,87%\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            /argon/profile.html\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            1,795\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            190\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-arrow-down text-red-500 mr-4\"></i>\r\n            46,53%\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "LN9C":
/*!***********************************************************!*\
  !*** ./src/app/views/auth/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "O/dV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() { }
};
RegisterComponent.ctorParameters = () => [];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-register",
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RegisterComponent);



/***/ }),

/***/ "LUN3":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mx-auto px-4 h-full\">\r\n  <div class=\"flex content-center items-center justify-center h-full\">\r\n    <div class=\"w-full lg:w-4/12 px-4\">\r\n      <div\r\n        class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0\"\r\n      >\r\n        <div class=\"rounded-t mb-0 px-6 py-6\">\r\n          <div class=\"text-center mb-3\">\r\n            <h6 class=\"text-blueGray-500 text-sm font-bold\">Sign in with</h6>\r\n          </div>\r\n          <div class=\"btn-wrapper text-center\">\r\n            <button\r\n              class=\"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150\"\r\n              type=\"button\"\r\n            >\r\n              <img alt=\"...\" class=\"w-5 mr-1\" src=\"assets/img/github.svg\" />\r\n              Github\r\n            </button>\r\n            <button\r\n              class=\"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150\"\r\n              type=\"button\"\r\n            >\r\n              <img alt=\"...\" class=\"w-5 mr-1\" src=\"assets/img/google.svg\" />\r\n              Google\r\n            </button>\r\n          </div>\r\n          <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\r\n        </div>\r\n        <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\r\n          <div class=\"text-blueGray-400 text-center mb-3 font-bold\">\r\n            <small>Or sign in with credentials</small>\r\n          </div>\r\n          <form>\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Email\r\n              </label>\r\n              <input\r\n                type=\"email\"\r\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                placeholder=\"Email\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Password\r\n              </label>\r\n              <input\r\n                type=\"password\"\r\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                placeholder=\"Password\"\r\n              />\r\n            </div>\r\n            <div>\r\n              <label class=\"inline-flex items-center cursor-pointer\">\r\n                <input\r\n                  id=\"customCheckLogin\"\r\n                  type=\"checkbox\"\r\n                  class=\"form-checkbox border-0 text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 rounded\"\r\n                />\r\n                <span class=\"ml-2 text-sm font-semibold text-blueGray-600\">\r\n                  Remember me\r\n                </span>\r\n              </label>\r\n            </div>\r\n\r\n            <div class=\"text-center mt-6\">\r\n              <button\r\n                class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150\"\r\n                type=\"button\"\r\n              >\r\n                Sign In\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-wrap mt-6 relative\">\r\n        <div class=\"w-1/2\">\r\n          <a href=\"javascript:void(0)\" class=\"text-blueGray-200\">\r\n            <small>Forgot password?</small>\r\n          </a>\r\n        </div>\r\n        <div class=\"w-1/2 text-right\">\r\n          <a [routerLink]=\"['/auth/register']\" class=\"text-blueGray-200\">\r\n            <small>Create new account</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "NPY2":
/*!*****************************************************************************!*\
  !*** ./src/app/components/cards/card-beneficio/card-beneficio.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CardBeneficioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBeneficioComponent", function() { return CardBeneficioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_beneficio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-beneficio.component.html */ "xWJ8");
/* harmony import */ var _card_beneficio_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-beneficio.component.css */ "v8bb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CardBeneficioComponent = class CardBeneficioComponent {
    constructor() {
        this._benTipo = '';
        this._benNombre = '';
        this._benDisponible = '';
        this._benIconName = "far fa-chart-bar";
    }
    get benTipo() {
        return this._benTipo;
    }
    set benTipo(benTipo) {
        this._benTipo = benTipo === undefined ? '' : benTipo;
    }
    get benNombre() {
        return this._benNombre;
    }
    set benNombre(benNombre) {
        this._benNombre = benNombre === undefined ? '' : benNombre;
    }
    get benDisponible() {
        return this._benDisponible;
    }
    set benDisponible(benDisponible) {
        this._benDisponible =
            benDisponible === undefined ? '' : benDisponible;
    }
    get benIconName() {
        return this._benIconName;
    }
    set benIconName(benIconName) {
        this._benIconName =
            benIconName === undefined ? "far fa-chart-bar" : benIconName;
    }
    ngOnInit() {
    }
};
CardBeneficioComponent.ctorParameters = () => [];
CardBeneficioComponent.propDecorators = {
    benTipo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    benNombre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    benDisponible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    benIconName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CardBeneficioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-card-beneficio',
        template: _raw_loader_card_beneficio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_beneficio_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CardBeneficioComponent);



/***/ }),

/***/ "O/dV":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mx-auto px-4 h-full\">\r\n  <div class=\"flex content-center items-center justify-center h-full\">\r\n    <div class=\"w-full lg:w-6/12 px-4\">\r\n      <div\r\n        class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0\"\r\n      >\r\n        <div class=\"rounded-t mb-0 px-6 py-6\">\r\n          <div class=\"text-center mb-3\">\r\n            <h6 class=\"text-blueGray-500 text-sm font-bold\">Sign up with</h6>\r\n          </div>\r\n          <div class=\"btn-wrapper text-center\">\r\n            <button\r\n              class=\"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150\"\r\n              type=\"button\"\r\n            >\r\n              <img alt=\"...\" class=\"w-5 mr-1\" src=\"assets/img/github.svg\" />\r\n              Github\r\n            </button>\r\n            <button\r\n              class=\"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150\"\r\n              type=\"button\"\r\n            >\r\n              <img alt=\"...\" class=\"w-5 mr-1\" src=\"assets/img/google.svg\" />\r\n              Google\r\n            </button>\r\n          </div>\r\n          <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\r\n        </div>\r\n        <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\r\n          <div class=\"text-blueGray-400 text-center mb-3 font-bold\">\r\n            <small>Or sign up with credentials</small>\r\n          </div>\r\n          <form>\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Name\r\n              </label>\r\n              <input\r\n                type=\"email\"\r\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                placeholder=\"Name\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Email\r\n              </label>\r\n              <input\r\n                type=\"email\"\r\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                placeholder=\"Email\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Password\r\n              </label>\r\n              <input\r\n                type=\"password\"\r\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                placeholder=\"Password\"\r\n              />\r\n            </div>\r\n\r\n            <div>\r\n              <label class=\"inline-flex items-center cursor-pointer\">\r\n                <input\r\n                  id=\"customCheckLogin\"\r\n                  type=\"checkbox\"\r\n                  class=\"form-checkbox border-0 text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 rounded\"\r\n                />\r\n                <span class=\"ml-2 text-sm font-semibold text-blueGray-600\">\r\n                  I agree with the\r\n                  <a href=\"javascript:void(0)\" class=\"text-red-600\">\r\n                    Privacy Policy\r\n                  </a>\r\n                </span>\r\n              </label>\r\n            </div>\r\n\r\n            <div class=\"text-center mt-6\">\r\n              <button\r\n                class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150\"\r\n                type=\"button\"\r\n              >\r\n                Create Account\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Pibi":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/admin-navbar/admin-navbar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Navbar -->\r\n<nav\r\n  class=\"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4\"\r\n>\r\n  <div\r\n    class=\"w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4\"\r\n  >\r\n    <!-- Brand -->\r\n    <a\r\n      class=\"text-white text-sm uppercase hidden lg:inline-block font-semibold\"\r\n      href=\"#pablo\"\r\n      >Dashboard</a\r\n    >\r\n    <!-- Form -->\r\n    <form\r\n      class=\"md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3\"\r\n    >\r\n      <div class=\"relative flex w-full flex-wrap items-stretch\">\r\n        <span\r\n          class=\"z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3\"\r\n          ><i class=\"fas fa-search\"></i\r\n        ></span>\r\n        <input\r\n          type=\"text\"\r\n          placeholder=\"Search here...\"\r\n          class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10\"\r\n        />\r\n      </div>\r\n    </form>\r\n    <!-- User -->\r\n    <ul class=\"flex-col md:flex-row list-none items-center hidden md:flex\">\r\n      <app-user-dropdown class=\"block\"></app-user-dropdown>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "RLAj":
/*!***************************************************************************!*\
  !*** ./src/app/components/headers/header-stats/header-stats.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStatsComponent", function() { return HeaderStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-stats.component.html */ "UhXh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let HeaderStatsComponent = class HeaderStatsComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderStatsComponent.ctorParameters = () => [];
HeaderStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-header-stats",
        template: _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], HeaderStatsComponent);



/***/ }),

/***/ "RMzx":
/*!****************************************************!*\
  !*** ./src/app/views/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "AN84");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() { }
};
LandingComponent.ctorParameters = () => [];
LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-landing",
        template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], LandingComponent);



/***/ }),

/***/ "RORk":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/index-navbar/index-navbar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\r\n  class=\"top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow\"\r\n>\r\n  <div\r\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\r\n  >\r\n    <div\r\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\r\n    >\r\n      <a\r\n        [routerLink]=\"['/']\"\r\n        class=\"text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase\"\r\n        href=\"#pablo\"\r\n      >\r\n        Notus Angular\r\n      </a>\r\n      <button\r\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\r\n        type=\"button\"\r\n        (click)=\"setNavbarOpen()\"\r\n      >\r\n        <i class=\"fas fa-bars\"></i>\r\n      </button>\r\n    </div>\r\n    <div\r\n      class=\"lg:flex flex-grow items-center\"\r\n      [ngClass]=\"{ hidden: !navbarOpen, block: navbarOpen }\"\r\n      id=\"example-navbar-warning\"\r\n    >\r\n      <ul class=\"flex flex-col lg:flex-row list-none mr-auto\">\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-index-navbar\"\r\n          >\r\n            <i\r\n              class=\"text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2\"\r\n            ></i>\r\n            Docs\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\r\n        <li class=\"flex items-center\">\r\n          <app-index-dropdown class=\"block\"></app-index-dropdown>\r\n        </li>\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F\"\r\n            target=\"_blank\"\r\n          >\r\n            <i class=\"text-blueGray-400 fab fa-facebook text-lg leading-lg\"></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Share</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Angular%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Angular%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.\"\r\n            target=\"_blank\"\r\n          >\r\n            <i class=\"text-blueGray-400 fab fa-twitter text-lg leading-lg\"></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=na-index-navbar\"\r\n            target=\"_blank\"\r\n          >\r\n            <i class=\"text-blueGray-400 fab fa-github text-lg leading-lg\"></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Star</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <button\r\n            class=\"bg-red-600 text-white active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"fas fa-arrow-alt-circle-down\"></i> Download\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Skd6":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NotificationDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDropdownComponent", function() { return NotificationDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification-dropdown.component.html */ "XqAX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let NotificationDropdownComponent = class NotificationDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngAfterViewInit() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
};
NotificationDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
NotificationDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-notification-dropdown",
        template: _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], NotificationDropdownComponent);



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
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AppComponent = class AppComponent {
    constructor() {
        this.title = "angular-dashboard-page";
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AppComponent);



/***/ }),

/***/ "TmC4":
/*!*****************************************************************************!*\
  !*** ./src/app/components/cards/card-bar-chart/card-bar-chart.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CardBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBarChartComponent", function() { return CardBarChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_bar_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-bar-chart.component.html */ "/GnJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




let CardBarChartComponent = class CardBarChartComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        let config = {
            type: "bar",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#ed64a6",
                        borderColor: "#ed64a6",
                        data: [30, 78, 56, 34, 100, 45, 13],
                        fill: false,
                        barThickness: 8,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: "#4c51bf",
                        borderColor: "#4c51bf",
                        data: [27, 68, 86, 74, 10, 4, 87],
                        barThickness: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Orders Chart",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: "rgba(0,0,0,.4)",
                    },
                    align: "end",
                    position: "bottom",
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: "Month",
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.2)",
                                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById("bar-chart");
        ctx = ctx.getContext("2d");
        new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, config);
    }
};
CardBarChartComponent.ctorParameters = () => [];
CardBarChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-bar-chart",
        template: _raw_loader_card_bar_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardBarChartComponent);



/***/ }),

/***/ "UIMn":
/*!***************************************************************************!*\
  !*** ./src/app/components/footers/footer-admin/footer-admin.component.ts ***!
  \***************************************************************************/
/*! exports provided: FooterAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterAdminComponent", function() { return FooterAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer-admin.component.html */ "EbUq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterAdminComponent = class FooterAdminComponent {
    constructor() {
        this.date = new Date().getFullYear();
    }
    ngOnInit() { }
};
FooterAdminComponent.ctorParameters = () => [];
FooterAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer-admin",
        template: _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FooterAdminComponent);



/***/ }),

/***/ "UY35":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/table-dropdown/table-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TableDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDropdownComponent", function() { return TableDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table-dropdown.component.html */ "rOy2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let TableDropdownComponent = class TableDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngAfterViewInit() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
};
TableDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
TableDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-table-dropdown",
        template: _raw_loader_table_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TableDropdownComponent);



/***/ }),

/***/ "UhXh":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/headers/header-stats/header-stats.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header -->\r\n<div class=\"relative bg-red-600 md:pt-32 pb-32 pt-12\">\r\n  <div class=\"px-4 md:px-10 mx-auto w-full\">\r\n    <div>\r\n      <!-- Card stats -->\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\r\n          <app-card-stats\r\n            statSubtitle=\"TRAFFIC\"\r\n            statTitle=\"350,897\"\r\n            statArrow=\"up\"\r\n            statPercent=\"3.48\"\r\n            statPercentColor=\"text-emerald-500\"\r\n            statDescripiron=\"Since last month\"\r\n            statIconName=\"far fa-chart-bar\"\r\n            statIconColor=\"bg-red-500\"\r\n          ></app-card-stats>\r\n        </div>\r\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\r\n          <app-card-stats\r\n            statSubtitle=\"NEW USERS\"\r\n            statTitle=\"2,356\"\r\n            statArrow=\"down\"\r\n            statPercent=\"3.48\"\r\n            statPercentColor=\"text-red-500\"\r\n            statDescripiron=\"Since last week\"\r\n            statIconName=\"fas fa-chart-pie\"\r\n            statIconColor=\"bg-orange-500\"\r\n          ></app-card-stats>\r\n        </div>\r\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\r\n          <app-card-stats\r\n            statSubtitle=\"SALES\"\r\n            statTitle=\"924\"\r\n            statArrow=\"down\"\r\n            statPercent=\"1.10\"\r\n            statPercentColor=\"text-orange-500\"\r\n            statDescripiron=\"Since yesterday\"\r\n            statIconName=\"fas fa-users\"\r\n            statIconColor=\"bg-pink-500\"\r\n          ></app-card-stats>\r\n        </div>\r\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\r\n          <app-card-stats\r\n            statSubtitle=\"PERFORMANCE\"\r\n            statTitle=\"49,65%\"\r\n            statArrow=\"up\"\r\n            statPercent=\"12\"\r\n            statPercentColor=\"text-emerald-500\"\r\n            statDescripiron=\"Since last month\"\r\n            statIconName=\"fas fa-percent\"\r\n            statIconColor=\"bg-emerald-500\"\r\n          ></app-card-stats>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "W8yq":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/index/index.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-index-navbar></app-index-navbar>\r\n<section class=\"header relative pt-16 items-center flex h-screen max-h-860-px\">\r\n  <div class=\"container mx-auto items-center flex flex-wrap\">\r\n    <div class=\"w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4\">\r\n      <div class=\"pt-32 sm:pt-0\">\r\n        <h2 class=\"font-semibold text-4xl text-blueGray-600\">\r\n          Notus Angular - A beautiful extension for Tailwind CSS.\r\n        </h2>\r\n        <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\r\n          Notus Angular is Free and Open Source. It does not change any of the\r\n          CSS from\r\n          <a\r\n            href=\"https://tailwindcss.com/?ref=creativetim\"\r\n            class=\"text-blueGray-600\"\r\n            target=\"_blank\"\r\n          >\r\n            Tailwind CSS.\r\n          </a>\r\n          It features multiple HTML elements and it comes with dynamic\r\n          components for ReactJS, Vue and Angular.\r\n        </p>\r\n        <div class=\"mt-12\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-index-page\"\r\n            target=\"_blank\"\r\n            class=\"get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-600 active:bg-red-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n          >\r\n            Get started\r\n          </a>\r\n          <a\r\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=creativetim\"\r\n            class=\"github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n            target=\"_blank\"\r\n          >\r\n            Github Star\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <img\r\n    class=\"absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px\"\r\n    src=\"assets/img/pattern_angular.png\"\r\n    alt=\"...\"\r\n  />\r\n</section>\r\n\r\n<section class=\"mt-48 md:mt-40 pb-40 relative bg-blueGray-100\">\r\n  <div\r\n    class=\"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20\"\r\n    style=\"transform: translateZ(0)\"\r\n  >\r\n    <svg\r\n      class=\"absolute bottom-0 overflow-hidden\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      preserveAspectRatio=\"none\"\r\n      version=\"1.1\"\r\n      viewBox=\"0 0 2560 100\"\r\n      x=\"0\"\r\n      y=\"0\"\r\n    >\r\n      <polygon\r\n        class=\"text-blueGray-100 fill-current\"\r\n        points=\"2560 0 2560 100 0 100\"\r\n      ></polygon>\r\n    </svg>\r\n  </div>\r\n  <div class=\"container mx-auto\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div\r\n        class=\"w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32\"\r\n      >\r\n        <div\r\n          class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600\"\r\n        >\r\n          <img\r\n            alt=\"...\"\r\n            src=\"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80\"\r\n            class=\"w-full align-middle rounded-t-lg\"\r\n          />\r\n          <blockquote class=\"relative p-8 mb-4\">\r\n            <svg\r\n              preserveAspectRatio=\"none\"\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              viewBox=\"0 0 583 95\"\r\n              class=\"absolute left-0 w-full block h-95-px -top-94-px\"\r\n            >\r\n              <polygon\r\n                points=\"-30,95 583,95 583,65\"\r\n                class=\"text-red-600 fill-current\"\r\n              ></polygon>\r\n            </svg>\r\n            <h4 class=\"text-xl font-bold text-white\">\r\n              Great for your awesome project\r\n            </h4>\r\n            <p class=\"text-md font-light mt-2 text-white\">\r\n              Putting together a page has never been easier than matching\r\n              together pre-made components. From landing pages presentation to\r\n              login areas, you can easily customise and built your pages.\r\n            </p>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-6/12 px-4\">\r\n        <div class=\"flex flex-wrap\">\r\n          <div class=\"w-full md:w-6/12 px-4\">\r\n            <div class=\"relative flex flex-col mt-4\">\r\n              <div class=\"px-4 py-5 flex-auto\">\r\n                <div\r\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\r\n                >\r\n                  <i class=\"fas fa-sitemap\"></i>\r\n                </div>\r\n                <h6 class=\"text-xl mb-1 font-semibold\">CSS Components</h6>\r\n                <p class=\"mb-4 text-blueGray-500\">\r\n                  Notus Angular comes with a huge number of Fully Coded CSS\r\n                  components.\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"relative flex flex-col min-w-0\">\r\n              <div class=\"px-4 py-5 flex-auto\">\r\n                <div\r\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\r\n                >\r\n                  <i class=\"fas fa-drafting-compass\"></i>\r\n                </div>\r\n                <h6 class=\"text-xl mb-1 font-semibold\">\r\n                  JavaScript Components\r\n                </h6>\r\n                <p class=\"mb-4 text-blueGray-500\">\r\n                  We also feature many dynamic components for React, NextJS, Vue\r\n                  and Angular.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"w-full md:w-6/12 px-4\">\r\n            <div class=\"relative flex flex-col min-w-0 mt-4\">\r\n              <div class=\"px-4 py-5 flex-auto\">\r\n                <div\r\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\r\n                >\r\n                  <i class=\"fas fa-newspaper\"></i>\r\n                </div>\r\n                <h6 class=\"text-xl mb-1 font-semibold\">Pages</h6>\r\n                <p class=\"mb-4 text-blueGray-500\">\r\n                  This extension also comes with 3 sample pages. They are fully\r\n                  coded so you can start working instantly.\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"relative flex flex-col min-w-0\">\r\n              <div class=\"px-4 py-5 flex-auto\">\r\n                <div\r\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\r\n                >\r\n                  <i class=\"fas fa-file-alt\"></i>\r\n                </div>\r\n                <h6 class=\"text-xl mb-1 font-semibold\">Documentation</h6>\r\n                <p class=\"mb-4 text-blueGray-500\">\r\n                  Built by developers for developers. You will love how easy is\r\n                  to to work with Notus Angular.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container mx-auto overflow-hidden pb-20\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48\">\r\n        <div\r\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n        >\r\n          <i class=\"fas fa-sitemap text-xl\"></i>\r\n        </div>\r\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\r\n          CSS Components\r\n        </h3>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\r\n        >\r\n          Every element that you need in a product comes built in as a\r\n          component. All components fit perfectly with each other and can have\r\n          different colours.\r\n        </p>\r\n        <div class=\"block pb-6\">\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Buttons\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Inputs\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Labels\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Menus\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Navbars\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Pagination\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Progressbars\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Typography\r\n          </span>\r\n        </div>\r\n        <a\r\n          href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=na-index-page\"\r\n          target=\"_blank\"\r\n          class=\"font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150\"\r\n        >\r\n          View All\r\n          <i class=\"fa fa-angle-double-right ml-1 leading-relaxed\"></i>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto mt-32\">\r\n        <div class=\"relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0\">\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-btn.png\"\r\n            class=\"w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-profile-card.png\"\r\n            class=\"w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-info-card.png\"\r\n            class=\"w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-info-2.png\"\r\n            class=\"w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-menu.png\"\r\n            class=\"w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-btn-pink.png\"\r\n            class=\"w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"flex flex-wrap items-center pt-32\">\r\n      <div class=\"w-full md:w-6/12 px-4 mr-auto ml-auto mt-32\">\r\n        <div class=\"justify-center flex flex-wrap relative\">\r\n          <div class=\"my-4 w-full lg:w-6/12 px-4\">\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div class=\"bg-red-600 shadow-lg rounded-lg text-center p-8\">\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">Svelte</p>\r\n              </div>\r\n            </a>\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div\r\n                class=\"bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">ReactJS</p>\r\n              </div>\r\n            </a>\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div\r\n                class=\"bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">NextJS</p>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"my-4 w-full lg:w-6/12 px-4 lg:mt-16\">\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div class=\"bg-yellow-500 shadow-lg rounded-lg text-center p-8\">\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">JavaScript</p>\r\n              </div>\r\n            </a>\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div class=\"bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8\">\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">Angular</p>\r\n              </div>\r\n            </a>\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div\r\n                class=\"bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">Vue.js</p>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48\">\r\n        <div\r\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n        >\r\n          <i class=\"fas fa-drafting-compass text-xl\"></i>\r\n        </div>\r\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\r\n          Javascript Components\r\n        </h3>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\r\n        >\r\n          In order to create a great User Experience some components require\r\n          JavaScript. In this way you can manipulate the elements on the page\r\n          and give more options to your users.\r\n        </p>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\r\n        >\r\n          We created a set of Components that are dynamic and come to help you.\r\n        </p>\r\n        <div class=\"block pb-6\">\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Alerts\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Dropdowns\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Menus\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Modals\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Navbars\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Popovers\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Tabs\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Tooltips\r\n          </span>\r\n        </div>\r\n        <a\r\n          href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=na-index-page\"\r\n          target=\"_blank\"\r\n          class=\"font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150\"\r\n        >\r\n          View all\r\n          <i class=\"fa fa-angle-double-right ml-1 leading-relaxed\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container mx-auto px-4 pb-32 pt-48\">\r\n    <div class=\"items-center flex flex-wrap\">\r\n      <div class=\"w-full md:w-5/12 ml-auto px-12 md:px-4\">\r\n        <div class=\"md:pr-12\">\r\n          <div\r\n            class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n          >\r\n            <i class=\"fas fa-file-alt text-xl\"></i>\r\n          </div>\r\n          <h3 class=\"text-3xl font-semibold\">Complex Documentation</h3>\r\n          <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\r\n            This extension comes a lot of fully coded examples that help you get\r\n            started faster. You can adjust the colors and also the programming\r\n            language. You can change the text and images and you're good to go.\r\n          </p>\r\n          <ul class=\"list-none mt-6\">\r\n            <li class=\"py-2\">\r\n              <div class=\"flex items-center\">\r\n                <div>\r\n                  <span\r\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\"\r\n                  >\r\n                    <i class=\"fas fa-fingerprint\"></i>\r\n                  </span>\r\n                </div>\r\n                <div>\r\n                  <h4 class=\"text-blueGray-500\">\r\n                    Built by Developers for Developers\r\n                  </h4>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"py-2\">\r\n              <div class=\"flex items-center\">\r\n                <div>\r\n                  <span\r\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\"\r\n                  >\r\n                    <i class=\"fab fa-html5\"></i>\r\n                  </span>\r\n                </div>\r\n                <div>\r\n                  <h4 class=\"text-blueGray-500\">\r\n                    Carefully crafted code for Components\r\n                  </h4>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"py-2\">\r\n              <div class=\"flex items-center\">\r\n                <div>\r\n                  <span\r\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\"\r\n                  >\r\n                    <i class=\"far fa-paper-plane\"></i>\r\n                  </span>\r\n                </div>\r\n                <div>\r\n                  <h4 class=\"text-blueGray-500\">\r\n                    Dynamic Javascript Components\r\n                  </h4>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0\">\r\n        <img\r\n          alt=\"...\"\r\n          class=\"max-w-full rounded-lg shadow-xl\"\r\n          style=\"\r\n            transform: scale(1) perspective(1040px) rotateY(-11deg)\r\n              rotateX(2deg) rotate(2deg);\r\n          \"\r\n          src=\"assets/img/documentation.png\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"justify-center text-center flex flex-wrap mt-24\">\r\n    <div class=\"w-full md:w-6/12 px-12 md:px-4\">\r\n      <h2 class=\"font-semibold text-4xl\">Beautiful Example Pages</h2>\r\n      <p class=\"text-lg leading-relaxed mt-4 mb-4 text-blueGray-500\">\r\n        Notus Angular is a completly new product built using our past experience\r\n        in web templates. Take the examples we made for you and start playing\r\n        with them.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"block relative z-1 bg-blueGray-600\">\r\n  <div class=\"container mx-auto\">\r\n    <div class=\"justify-center flex flex-wrap\">\r\n      <div class=\"w-full lg:w-12/12 px-4 -mt-24\">\r\n        <div class=\"flex flex-wrap\">\r\n          <div class=\"w-full lg:w-4/12 px-4\">\r\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">Login Page</h5>\r\n            <a [routerLink]=\"['/auth/login']\">\r\n              <div\r\n                class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"align-middle border-none max-w-full h-auto rounded-lg\"\r\n                  src=\"assets/img/login.jpg\"\r\n                />\r\n              </div>\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"w-full lg:w-4/12 px-4\">\r\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">Profile Page</h5>\r\n            <a [routerLink]=\"['/profile']\">\r\n              <div\r\n                class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"align-middle border-none max-w-full h-auto rounded-lg\"\r\n                  src=\"assets/img/profile.jpg\"\r\n                />\r\n              </div>\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"w-full lg:w-4/12 px-4\">\r\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">Landing Page</h5>\r\n            <a [routerLink]=\"['/landing']\">\r\n              <div\r\n                class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"align-middle border-none max-w-full h-auto rounded-lg\"\r\n                  src=\"assets/img/landing.jpg\"\r\n                />\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"py-20 bg-blueGray-600 overflow-hidden\">\r\n  <div class=\"container mx-auto pb-64\">\r\n    <div class=\"flex flex-wrap justify-center\">\r\n      <div class=\"w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64\">\r\n        <div\r\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n        >\r\n          <i class=\"fas fa-code-branch text-xl\"></i>\r\n        </div>\r\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal text-white\">\r\n          Open Source\r\n        </h3>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400\"\r\n        >\r\n          Since\r\n          <a\r\n            href=\"https://tailwindcss.com/?ref=creativetim\"\r\n            class=\"text-blueGray-300\"\r\n            target=\"_blank\"\r\n          >\r\n            Tailwind CSS\r\n          </a>\r\n          is an open source project we wanted to continue this movement too. You\r\n          can give this version a try to feel the design and also test the\r\n          quality of the code!\r\n        </p>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400\"\r\n        >\r\n          Get it free on Github and please help us spread the news with a Star!\r\n        </p>\r\n        <a\r\n          href=\"https://github.com/creativetimofficial/notus-angular?ref=creativetim\"\r\n          target=\"_blank\"\r\n          class=\"github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n        >\r\n          Github Star\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative\">\r\n        <i\r\n          class=\"fab fa-github text-blueGray-700 text-55 absolute -top-150-px -right-100 left-auto opacity-80\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"pb-16 bg-blueGray-200 relative pt-32\">\r\n  <div\r\n    class=\"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20\"\r\n    style=\"transform: translateZ(0)\"\r\n  >\r\n    <svg\r\n      class=\"absolute bottom-0 overflow-hidden\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      preserveAspectRatio=\"none\"\r\n      version=\"1.1\"\r\n      viewBox=\"0 0 2560 100\"\r\n      x=\"0\"\r\n      y=\"0\"\r\n    >\r\n      <polygon\r\n        class=\"text-blueGray-200 fill-current\"\r\n        points=\"2560 0 2560 100 0 100\"\r\n      ></polygon>\r\n    </svg>\r\n  </div>\r\n\r\n  <div class=\"container mx-auto\">\r\n    <div\r\n      class=\"flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10\"\r\n    >\r\n      <div class=\"w-full text-center lg:w-8/12\">\r\n        <p class=\"text-4xl text-center\">\r\n          <span role=\"img\" aria-label=\"love\"> 😍 </span>\r\n        </p>\r\n        <h3 class=\"font-semibold text-3xl\">Do you love this Starter Kit?</h3>\r\n        <p class=\"text-blueGray-500 text-lg leading-relaxed mt-4 mb-4\">\r\n          Cause if you do, it can be yours now. Hit the buttons below to\r\n          navigate to get the Free version for your next project. Build a new\r\n          web app or give an old project a new look!\r\n        </p>\r\n        <div class=\"sm:block flex flex-col mt-10\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-index-page\"\r\n            target=\"_blank\"\r\n            class=\"get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-red-600 active:bg-red-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n          >\r\n            Get started\r\n          </a>\r\n          <a\r\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=creativetim\"\r\n            target=\"_blank\"\r\n            class=\"github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n          >\r\n            <i class=\"fab fa-github text-lg mr-1\"></i>\r\n            <span>Help With a Star</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"text-center mt-16\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "Xodl":
/*!***************************************************************************!*\
  !*** ./src/app/components/navbars/admin-navbar/admin-navbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function() { return AdminNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-navbar.component.html */ "Pibi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AdminNavbarComponent = class AdminNavbarComponent {
    constructor() { }
    ngOnInit() { }
};
AdminNavbarComponent.ctorParameters = () => [];
AdminNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-admin-navbar",
        template: _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AdminNavbarComponent);



/***/ }),

/***/ "XqAX":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\r\n  class=\"text-blueGray-500 block py-1 px-3\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  <i class=\"fas fa-bell\"></i>\r\n</a>\r\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\r\n  <div\r\n    class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\r\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  >\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Another action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Something else here\r\n    </a>\r\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Seprated link\r\n    </a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "YpXG":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-social-traffic/card-social-traffic.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\r\n        <h3 class=\"font-semibold text-base text-blueGray-700\">\r\n          Social traffic\r\n        </h3>\r\n      </div>\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1 text-right\">\r\n        <button\r\n          class=\"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\r\n          type=\"button\"\r\n        >\r\n          See all\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n          >\r\n            Referral\r\n          </th>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n          >\r\n            Visitors\r\n          </th>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px\"\r\n          ></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            Facebook\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            1,480\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">60%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 60%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            Facebook\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            5,480\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">70%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-emerald-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 70%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            Google\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            4,807\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">80%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-purple-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 80%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            Instagram\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            3,678\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">75%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 75%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            twitter\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            2,645\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">30%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-orange-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 30%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/auth/login/login.component */ "/kjZ");
/* harmony import */ var _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/auth/register/register.component */ "LN9C");
/* harmony import */ var _views_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/index/index.component */ "AiJS");
/* harmony import */ var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/landing/landing.component */ "RMzx");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/profile/profile.component */ "wF9P");
/* harmony import */ var _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbars/admin-navbar/admin-navbar.component */ "Xodl");
/* harmony import */ var _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbars/auth-navbar/auth-navbar.component */ "zslb");
/* harmony import */ var _components_cards_card_bar_chart_card_bar_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cards/card-bar-chart/card-bar-chart.component */ "TmC4");
/* harmony import */ var _components_cards_card_line_chart_card_line_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cards/card-line-chart/card-line-chart.component */ "+Kwz");
/* harmony import */ var _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cards/card-page-visits/card-page-visits.component */ "3IhM");
/* harmony import */ var _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cards/card-profile/card-profile.component */ "diaN");
/* harmony import */ var _components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/cards/card-settings/card-settings.component */ "vwLF");
/* harmony import */ var _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/cards/card-social-traffic/card-social-traffic.component */ "xud4");
/* harmony import */ var _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/cards/card-stats/card-stats.component */ "J87Q");
/* harmony import */ var _components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cards/card-table/card-table.component */ "uhhN");
/* harmony import */ var _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/footers/footer-admin/footer-admin.component */ "UIMn");
/* harmony import */ var _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/footers/footer/footer.component */ "1DoU");
/* harmony import */ var _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/footers/footer-small/footer-small.component */ "xlab");
/* harmony import */ var _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/headers/header-stats/header-stats.component */ "RLAj");
/* harmony import */ var _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/navbars/index-navbar/index-navbar.component */ "4b2p");
/* harmony import */ var _components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/maps/map-example/map-example.component */ "u/sr");
/* harmony import */ var _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dropdowns/index-dropdown/index-dropdown.component */ "J8Ne");
/* harmony import */ var _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dropdowns/table-dropdown/table-dropdown.component */ "UY35");
/* harmony import */ var _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/dropdowns/pages-dropdown/pages-dropdown.component */ "wcq5");
/* harmony import */ var _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/dropdowns/notification-dropdown/notification-dropdown.component */ "Skd6");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/dropdowns/user-dropdown/user-dropdown.component */ "0slC");
/* harmony import */ var _components_cards_card_beneficio_card_beneficio_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/cards/card-beneficio/card-beneficio.component */ "NPY2");





// auth views


// no layouts views



// components for views and layouts






















// salones

let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_cards_card_bar_chart_card_bar_chart_component__WEBPACK_IMPORTED_MODULE_12__["CardBarChartComponent"],
            _components_cards_card_line_chart_card_line_chart_component__WEBPACK_IMPORTED_MODULE_13__["CardLineChartComponent"],
            _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_26__["IndexDropdownComponent"],
            _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_28__["PagesDropdownComponent"],
            _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_27__["TableDropdownComponent"],
            _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_29__["NotificationDropdownComponent"],
            _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_31__["UserDropdownComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_30__["SidebarComponent"],
            _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
            _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_22__["FooterSmallComponent"],
            _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_20__["FooterAdminComponent"],
            _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_14__["CardPageVisitsComponent"],
            _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_15__["CardProfileComponent"],
            _components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_16__["CardSettingsComponent"],
            _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_17__["CardSocialTrafficComponent"],
            _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_18__["CardStatsComponent"],
            _components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_19__["CardTableComponent"],
            _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_23__["HeaderStatsComponent"],
            _components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_25__["MapExampleComponent"],
            _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_11__["AuthNavbarComponent"],
            _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_10__["AdminNavbarComponent"],
            _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_24__["IndexNavbarComponent"],
            _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
            _views_index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"],
            _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
            _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
            _components_cards_card_beneficio_card_beneficio_component__WEBPACK_IMPORTED_MODULE_32__["CardBeneficioComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "c9Li":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-profile/card-profile.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16\"\r\n>\r\n  <div class=\"px-6\">\r\n    <div class=\"flex flex-wrap justify-center\">\r\n      <div class=\"w-full px-4 flex justify-center\">\r\n        <div class=\"relative\">\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/team-2-800x800.jpg\"\r\n            class=\"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"w-full px-4 text-center mt-20\">\r\n        <div class=\"flex justify-center py-4 lg:pt-4 pt-8\">\r\n          <div class=\"mr-4 p-3 text-center\">\r\n            <span\r\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\r\n            >\r\n              22\r\n            </span>\r\n            <span class=\"text-sm text-blueGray-400\">Friends</span>\r\n          </div>\r\n          <div class=\"mr-4 p-3 text-center\">\r\n            <span\r\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\r\n            >\r\n              10\r\n            </span>\r\n            <span class=\"text-sm text-blueGray-400\">Photos</span>\r\n          </div>\r\n          <div class=\"lg:mr-4 p-3 text-center\">\r\n            <span\r\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\r\n            >\r\n              89\r\n            </span>\r\n            <span class=\"text-sm text-blueGray-400\">Comments</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"text-center mt-12\">\r\n      <h3\r\n        class=\"text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\"\r\n      >\r\n        Jenna Stones\r\n      </h3>\r\n      <div\r\n        class=\"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\"\r\n      >\r\n        <i class=\"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400\"></i>\r\n        Los Angeles, California\r\n      </div>\r\n      <div class=\"mb-2 text-blueGray-600 mt-10\">\r\n        <i class=\"fas fa-briefcase mr-2 text-lg text-blueGray-400\"></i>\r\n        Solution Manager - Creative Tim Officer\r\n      </div>\r\n      <div class=\"mb-2 text-blueGray-600\">\r\n        <i class=\"fas fa-university mr-2 text-lg text-blueGray-400\"></i>\r\n        University of Computer Science\r\n      </div>\r\n    </div>\r\n    <div class=\"mt-10 py-10 border-t border-blueGray-200 text-center\">\r\n      <div class=\"flex flex-wrap justify-center\">\r\n        <div class=\"w-full lg:w-9/12 px-4\">\r\n          <p class=\"mb-4 text-lg leading-relaxed text-blueGray-700\">\r\n            An artist of considerable range, Jenna the name taken by\r\n            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and\r\n            records all of his own music, giving it a warm, intimate feel with a\r\n            solid groove structure. An artist of considerable range.\r\n          </p>\r\n          <a href=\"javascript:void(0);\" class=\"font-normal text-red-600\">\r\n            Show more\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "dRBc":
/*!**************************************************************************!*\
  !*** ./src/app/components/navbars/auth-navbar/auth-navbar.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span {\n  font-family: 'Nunito-Regular';\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoiYXV0aC1uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvLVJlZ3VsYXInO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "diaN":
/*!*************************************************************************!*\
  !*** ./src/app/components/cards/card-profile/card-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: CardProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardProfileComponent", function() { return CardProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-profile.component.html */ "c9Li");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardProfileComponent = class CardProfileComponent {
    constructor() { }
    ngOnInit() { }
};
CardProfileComponent.ctorParameters = () => [];
CardProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-profile",
        template: _raw_loader_card_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardProfileComponent);



/***/ }),

/***/ "e8es":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/index-dropdown/index-dropdown.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\r\n  class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  Demo Pages\r\n</a>\r\n<div\r\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\r\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  #popoverDropdownRef\r\n>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    Admin Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/admin/dashboard']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Dashboard\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/settings']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Settings\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/tables']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Tables\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/maps']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Maps\r\n  </a>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    Auth Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/auth/login']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Login\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/auth/register']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Register\r\n  </a>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    No Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/landing']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Landing\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/profile']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Profile\r\n  </a>\r\n</div>\r\n");

/***/ }),

/***/ "e8ip":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/auth-navbar/auth-navbar.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\r\n  class='top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'>\r\n  <div class='container px-4 mx-auto flex flex-wrap items-center justify-between'>\r\n    <div class='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>\r\n      <a [routerLink]=\"['/']\"\r\n         class='text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'>\r\n        <img src='/assets/img/travel_bch_logo.png'\r\n             alt='TRAVELCLUB'\r\n             class='h-12 sm:h-10  border-none -mt-5 absolute w-auto'>\r\n      </a>\r\n      <button\r\n        class='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'\r\n        type='button'\r\n        (click)='setNavbarOpen()'>\r\n        <i class='text-white fas fa-bars'></i>\r\n      </button>\r\n    </div>\r\n    <div\r\n      class='lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none'\r\n      [ngClass]=\"{ hidden: !navbarOpen, 'block rounded shadow-lg': navbarOpen }\"\r\n      id='example-navbar-warning'>\r\n      <ul class='flex flex-col lg:flex-row list-none lg:ml-auto'>\r\n        <li class='flex items-center'>\r\n          <a\r\n            class='text-lg lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center uppercase font-bold'\r\n            href='#'\r\n            target='_blank'>\r\n            <span class='inline-block ml-2'>Acceso Previos</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class='flex items-center'>\r\n          <a\r\n            class='text-lg lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center uppercase font-bold'\r\n            href='#'\r\n            target='_blank'>\r\n            <span class='inline-block ml-2'>Pre CheckIn</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class='flex items-center'>\r\n          <a\r\n            class='text-lg lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center uppercase font-bold'\r\n            href='#'\r\n            target='_blank'>\r\n            <span class='inline-block ml-2'>Cerrar Sesión</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "eix7":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-settings/card-settings.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0\"\r\n>\r\n  <div class=\"rounded-t bg-white mb-0 px-6 py-6\">\r\n    <div class=\"text-center flex justify-between\">\r\n      <h6 class=\"text-blueGray-700 text-xl font-bold\">My account</h6>\r\n      <button\r\n        class=\"bg-red-600 text-white active:bg-red-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150\"\r\n        type=\"button\"\r\n      >\r\n        Settings\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\r\n    <form>\r\n      <h6 class=\"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase\">\r\n        User Information\r\n      </h6>\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              Username\r\n            </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"lucky.jesse\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              Email address\r\n            </label>\r\n            <input\r\n              type=\"email\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"jesse@example.com\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              First Name\r\n            </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"Lucky\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              Last Name\r\n            </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"Jesse\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\r\n\r\n      <h6 class=\"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase\">\r\n        Contact Information\r\n      </h6>\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"w-full lg:w-12/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              Address\r\n            </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full lg:w-4/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              City\r\n            </label>\r\n            <input\r\n              type=\"email\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"New York\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full lg:w-4/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              Country\r\n            </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"United States\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full lg:w-4/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              Postal Code\r\n            </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"Postal Code\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\r\n\r\n      <h6 class=\"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase\">\r\n        About Me\r\n      </h6>\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"w-full lg:w-12/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              About me\r\n            </label>\r\n            <textarea\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              rows=\"4\"\r\n            >\r\n                  A beautiful UI Kit and Admin for Angular & Tailwind CSS. It is Free\r\n                  and Open Source.\r\n                </textarea\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "lLla":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-line-chart/card-line-chart.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\r\n        <h6 class=\"uppercase text-blueGray-100 mb-1 text-xs font-semibold\">\r\n          Overview\r\n        </h6>\r\n        <h2 class=\"text-white text-xl font-semibold\">Sales value</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"p-4 flex-auto\">\r\n    <!-- Chart -->\r\n    <div class=\"relative\" style=\"height: 350px\">\r\n      <canvas id=\"line-chart\"></canvas>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "owMO":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\r\n  class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  Demo Pages\r\n</a>\r\n<div\r\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\r\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  #popoverDropdownRef\r\n>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    Admin Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/admin/dashboard']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Dashboard\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/settings']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Settings\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/tables']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Tables\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/maps']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Maps\r\n  </a>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    Auth Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/auth/login']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Login\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/auth/register']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Register\r\n  </a>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    No Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/landing']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Landing\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/profile']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Profile\r\n  </a>\r\n</div>\r\n");

/***/ }),

/***/ "qKzM":
/*!****************************************************************!*\
  !*** ./src/app/components/footers/footer/footer.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4, h5, span, a {\n  font-family: 'Nunito-Regular';\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQsIGg1LCBzcGFuLCBhIHtcclxuICBmb250LWZhbWlseTogJ051bml0by1SZWd1bGFyJztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "rOy2":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/table-dropdown/table-dropdown.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\r\n  class=\"text-blueGray-500 block py-1 px-3\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  <i class=\"fas fa-ellipsis-v\"></i>\r\n</a>\r\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\r\n  <div\r\n    class=\"bg-white text-base float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\r\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  >\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Another action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Something else here\r\n    </a>\r\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Seprated link\r\n    </a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "u/sr":
/*!**********************************************************************!*\
  !*** ./src/app/components/maps/map-example/map-example.component.ts ***!
  \**********************************************************************/
/*! exports provided: MapExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapExampleComponent", function() { return MapExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map-example.component.html */ "xkbx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let MapExampleComponent = class MapExampleComponent {
    constructor() { }
    ngOnInit() {
        let map = document.getElementById("map-canvas");
        let lat = map.getAttribute("data-lat");
        let lng = map.getAttribute("data-lng");
        const myLatlng = new google.maps.LatLng(lat, lng);
        const mapOptions = {
            zoom: 12,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#444444" }],
                },
                {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{ color: "#f2f2f2" }],
                },
                {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{ saturation: -100 }, { lightness: 45 }],
                },
                {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [{ visibility: "simplified" }],
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{ color: "#feb2b2" }, { visibility: "on" }],
                },
            ],
        };
        map = new google.maps.Map(map, mapOptions);
        const marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hello World!",
        });
        const contentString = '<div class="info-window-content"><h2>Notus Angular</h2>' +
            "<p>A beautiful UI Kit and Admin for Tailwind CSS. It is Free and Open Source.</p></div>";
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });
        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
    }
};
MapExampleComponent.ctorParameters = () => [];
MapExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-map-example",
        template: _raw_loader_map_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], MapExampleComponent);



/***/ }),

/***/ "uhhN":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/card-table/card-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTableComponent", function() { return CardTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-table.component.html */ "wMhV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardTableComponent = class CardTableComponent {
    constructor() {
        this._color = "light";
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() { }
};
CardTableComponent.ctorParameters = () => [];
CardTableComponent.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
CardTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-table",
        template: _raw_loader_card_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardTableComponent);



/***/ }),

/***/ "v8bb":
/*!******************************************************************************!*\
  !*** ./src/app/components/cards/card-beneficio/card-beneficio.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5, span, p {\n  font-family: 'Nunito-Regular';\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtYmVuZWZpY2lvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoiY2FyZC1iZW5lZmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg1LCBzcGFuLCBwIHtcclxuICBmb250LWZhbWlseTogJ051bml0by1SZWd1bGFyJztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/landing/landing.component */ "RMzx");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/profile/profile.component */ "wF9P");



// no layouts views


const routes = [
    // no layout views
    { path: "landing", component: _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: "", component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: "**", redirectTo: "", pathMatch: "full" },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "vwLF":
/*!***************************************************************************!*\
  !*** ./src/app/components/cards/card-settings/card-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: CardSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSettingsComponent", function() { return CardSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-settings.component.html */ "eix7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardSettingsComponent = class CardSettingsComponent {
    constructor() { }
    ngOnInit() { }
};
CardSettingsComponent.ctorParameters = () => [];
CardSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-settings",
        template: _raw_loader_card_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardSettingsComponent);



/***/ }),

/***/ "wF9P":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "8GP7");
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.css */ "K8fT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() { }
};
ProfileComponent.ctorParameters = () => [];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-profile",
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileComponent);



/***/ }),

/***/ "wMhV":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-table/card-table.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded\"\r\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\r\n        <h3\r\n          class=\"font-semibold text-lg\"\r\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\r\n        >\r\n          Card Tables\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Project\r\n          </th>\r\n          <th\r\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Budget\r\n          </th>\r\n          <th\r\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Status\r\n          </th>\r\n          <th\r\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Users\r\n          </th>\r\n          <th\r\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Completion\r\n          </th>\r\n          <th\r\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          ></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\r\n          >\r\n            <img\r\n              src=\"assets/img/bootstrap.jpg\"\r\n              class=\"h-12 w-12 bg-white rounded-full border\"\r\n              alt=\"...\"\r\n            />\r\n            <span\r\n              class=\"ml-3 font-bold\"\r\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\r\n            >\r\n              Argon Design System\r\n            </span>\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            $2,500 USD\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-circle text-orange-500 mr-2\"></i> pending\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex\">\r\n              <img\r\n                src=\"assets/img/team-1-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-2-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-3-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-4-470x470.png\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">60%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 60%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\r\n          >\r\n            <app-table-dropdown></app-table-dropdown>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\r\n          >\r\n            <img\r\n              src=\"assets/img/angular.jpg\"\r\n              class=\"h-12 w-12 bg-white rounded-full border\"\r\n              alt=\"...\"\r\n            />\r\n            <span\r\n              class=\"ml-3 font-bold\"\r\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\r\n            >\r\n              Angular Now UI Kit PRO\r\n            </span>\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            $1,800 USD\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-circle text-emerald-500 mr-2\"></i>\r\n            completed\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex\">\r\n              <img\r\n                src=\"assets/img/team-1-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-2-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-3-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-4-470x470.png\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">100%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-emerald-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 100%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\r\n          >\r\n            <app-table-dropdown></app-table-dropdown>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\r\n          >\r\n            <img\r\n              src=\"assets/img/sketch.jpg\"\r\n              class=\"h-12 w-12 bg-white rounded-full border\"\r\n              alt=\"...\"\r\n            />\r\n            <span\r\n              class=\"ml-3 font-bold\"\r\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\r\n            >\r\n              Black Dashboard Sketch\r\n            </span>\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            $3,150 USD\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-circle text-red-500 mr-2\"></i> delayed\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex\">\r\n              <img\r\n                src=\"assets/img/team-1-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-2-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-3-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-4-470x470.png\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">73%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 73%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\r\n          >\r\n            <app-table-dropdown></app-table-dropdown>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\r\n          >\r\n            <img\r\n              src=\"assets/img/react.jpg\"\r\n              class=\"h-12 w-12 bg-white rounded-full border\"\r\n              alt=\"...\"\r\n            />\r\n            <span\r\n              class=\"ml-3 font-bold\"\r\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\r\n            >\r\n              React Material Dashboard\r\n            </span>\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            $4,400 USD\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-circle text-teal-500 mr-2\"></i> on schedule\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex\">\r\n              <img\r\n                src=\"assets/img/team-1-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-2-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-3-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-4-470x470.png\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">90%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-teal-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 90%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\r\n          >\r\n            <app-table-dropdown></app-table-dropdown>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\r\n          >\r\n            <img\r\n              src=\"assets/img/vue.jpg\"\r\n              class=\"h-12 w-12 bg-white rounded-full border\"\r\n              alt=\"...\"\r\n            />\r\n            <span\r\n              class=\"ml-3 font-bold\"\r\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\r\n            >\r\n              React Material Dashboard\r\n            </span>\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            $2,200 USD\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-circle text-emerald-500 mr-2\"></i>\r\n            completed\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex\">\r\n              <img\r\n                src=\"assets/img/team-1-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-2-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-3-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-4-470x470.png\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">100%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-emerald-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 100%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\r\n          >\r\n            <app-table-dropdown></app-table-dropdown>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "wcq5":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PagesDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesDropdownComponent", function() { return PagesDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pages-dropdown.component.html */ "owMO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let PagesDropdownComponent = class PagesDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngOnInit() { }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
            this.createPoppper();
        }
    }
    createPoppper() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
};
PagesDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
PagesDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-pages-dropdown",
        template: _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], PagesDropdownComponent);



/***/ }),

/***/ "xWJ8":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-beneficio/card-beneficio.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='flex flex-col min-w-0 break-words border-2 hover:shadow-lg rounded mb-6 xl:mb-0 shadow-md'>\r\n  <div class='flex-auto p-4'>\r\n    <div class='flex flex-wrap'>\r\n      <div class='relative w-full pr-4 max-w-full flex-grow flex-1'>\r\n        <h5 class='text-blueGray-400 uppercase font-bold text-xs'>\r\n          {{ benTipo }}\r\n        </h5>\r\n        <span class='font-semibold text-xl text-blueGray-700'>\r\n          {{ benNombre }}\r\n        </span>\r\n      </div>\r\n      <div class='relative w-auto pl-4 flex-initial'>\r\n        <div class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-600\">\r\n          <i [ngClass]=\"benIconName\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <p class='text-sm text-blueGray-400 mt-4'>\r\n      <span class='whitespace-nowrap'>Disponible: {{ benDisponible }}</span>\r\n    </p>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "xkbx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/maps/map-example/map-example.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  id=\"map-canvas\"\r\n  class=\"relative w-full rounded h-600-px\"\r\n  data-lat=\"40.748817\"\r\n  data-lng=\"-73.985428\"\r\n></div>\r\n");

/***/ }),

/***/ "xlab":
/*!***************************************************************************!*\
  !*** ./src/app/components/footers/footer-small/footer-small.component.ts ***!
  \***************************************************************************/
/*! exports provided: FooterSmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSmallComponent", function() { return FooterSmallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer-small.component.html */ "DLfO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterSmallComponent = class FooterSmallComponent {
    constructor() {
        this.date = new Date().getFullYear();
        this._absolute = false;
    }
    get absolute() {
        return this._absolute;
    }
    set absolute(absolute) {
        this._absolute = absolute === undefined ? false : absolute;
    }
    ngOnInit() { }
};
FooterSmallComponent.ctorParameters = () => [];
FooterSmallComponent.propDecorators = {
    absolute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
FooterSmallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer-small",
        template: _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FooterSmallComponent);



/***/ }),

/***/ "xud4":
/*!***************************************************************************************!*\
  !*** ./src/app/components/cards/card-social-traffic/card-social-traffic.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CardSocialTrafficComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSocialTrafficComponent", function() { return CardSocialTrafficComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_social_traffic_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-social-traffic.component.html */ "YpXG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardSocialTrafficComponent = class CardSocialTrafficComponent {
    constructor() { }
    ngOnInit() { }
};
CardSocialTrafficComponent.ctorParameters = () => [];
CardSocialTrafficComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-social-traffic",
        template: _raw_loader_card_social_traffic_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardSocialTrafficComponent);



/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let SidebarComponent = class SidebarComponent {
    constructor() {
        this.collapseShow = "hidden";
    }
    ngOnInit() { }
    toggleCollapseShow(classes) {
        this.collapseShow = classes;
    }
};
SidebarComponent.ctorParameters = () => [];
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-sidebar",
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SidebarComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


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

/***/ }),

/***/ "zslb":
/*!*************************************************************************!*\
  !*** ./src/app/components/navbars/auth-navbar/auth-navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNavbarComponent", function() { return AuthNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth-navbar.component.html */ "e8ip");
/* harmony import */ var _auth_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-navbar.component.css */ "dRBc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AuthNavbarComponent = class AuthNavbarComponent {
    constructor() {
        this.navbarOpen = false;
    }
    ngOnInit() { }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
};
AuthNavbarComponent.ctorParameters = () => [];
AuthNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-auth-navbar",
        template: _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AuthNavbarComponent);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
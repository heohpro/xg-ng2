webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(2);
	var core_1 = __webpack_require__(8);
	var app_component_1 = __webpack_require__(281);
	__webpack_require__(285);
	if (process.env.ENV === 'production') {
	    core_1.enableProdMode();
	}
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, []);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(8);
	var app_header_1 = __webpack_require__(282);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            directives: [app_header_1.Header],
	            template: __webpack_require__(284)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(8);
	var Header = (function () {
	    function Header() {
	    }
	    Header = __decorate([
	        core_1.Component({
	            selector: 'header',
	            template: __webpack_require__(283)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Header);
	    return Header;
	}());
	exports.Header = Header;


/***/ },

/***/ 283:
/***/ function(module, exports) {

	module.exports = "<div class=\"app-header\">\n    <div class=\"app-header-user\">\n        贺庆阳\n    </div>\n</div>\n";

/***/ },

/***/ 284:
/***/ function(module, exports) {

	module.exports = "<!--<link rel=\"stylesheet\" href=\"style.css\">-->\n<main>\n    app.component导航\n    <header></header>\n    <navbar></navbar>\n    <content></content>\n</main>\n";

/***/ },

/***/ 285:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
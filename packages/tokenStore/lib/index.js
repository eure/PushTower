(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TokenStore"] = factory();
	else
		root["PushServer"] = root["PushServer"] || {}, root["PushServer"]["TokenStore"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/src/index.ts: Unexpected token, expected \\\",\\\" (18:22)\\n\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 18 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mfunction\\u001b[39m hoge(a\\u001b[33m:\\u001b[39m string) {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 19 | \\u001b[39m    console\\u001b[33m.\\u001b[39mlog(a)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 21 | \\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:4051:15)\\n    at Parser.unexpected (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:5382:16)\\n    at Parser.expect (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:5370:28)\\n    at Parser.parseBindingList (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:5668:14)\\n    at Parser.parseFunctionParams (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:8239:24)\\n    at Parser.parseFunction (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:8223:10)\\n    at Parser.parseFunctionStatement (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:7842:17)\\n    at Parser.parseStatementContent (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:7529:21)\\n    at Parser.parseStatement (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:7505:17)\\n    at Parser.parseExportDeclaration (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:8638:17)\\n    at Parser.parseExport (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:8585:31)\\n    at Parser.parseStatementContent (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:7592:27)\\n    at Parser.parseStatement (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:7505:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:8073:23)\\n    at Parser.parseBlockBody (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:8060:10)\\n    at Parser.parseTopLevel (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:7470:10)\\n    at Parser.parse (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:8915:17)\\n    at parse (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/parser/lib/index.js:10946:38)\\n    at parser (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore/node_modules/@babel/core/lib/transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack://PushServer.TokenStore/./src/index.ts?");

/***/ })

/******/ });
});
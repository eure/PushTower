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

/***/ "./node_modules/mkdirp/index.js":
/*!**************************************!*\
  !*** ./node_modules/mkdirp/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar _0777 = parseInt('0777', 8);\n\nmodule.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;\n\nfunction mkdirP (p, opts, f, made) {\n    if (typeof opts === 'function') {\n        f = opts;\n        opts = {};\n    }\n    else if (!opts || typeof opts !== 'object') {\n        opts = { mode: opts };\n    }\n    \n    var mode = opts.mode;\n    var xfs = opts.fs || fs;\n    \n    if (mode === undefined) {\n        mode = _0777 & (~process.umask());\n    }\n    if (!made) made = null;\n    \n    var cb = f || function () {};\n    p = path.resolve(p);\n    \n    xfs.mkdir(p, mode, function (er) {\n        if (!er) {\n            made = made || p;\n            return cb(null, made);\n        }\n        switch (er.code) {\n            case 'ENOENT':\n                mkdirP(path.dirname(p), opts, function (er, made) {\n                    if (er) cb(er, made);\n                    else mkdirP(p, opts, cb, made);\n                });\n                break;\n\n            // In the case of any other error, just see if there's a dir\n            // there already.  If so, then hooray!  If not, then something\n            // is borked.\n            default:\n                xfs.stat(p, function (er2, stat) {\n                    // if the stat fails, then that's super weird.\n                    // let the original error be the failure reason.\n                    if (er2 || !stat.isDirectory()) cb(er, made)\n                    else cb(null, made);\n                });\n                break;\n        }\n    });\n}\n\nmkdirP.sync = function sync (p, opts, made) {\n    if (!opts || typeof opts !== 'object') {\n        opts = { mode: opts };\n    }\n    \n    var mode = opts.mode;\n    var xfs = opts.fs || fs;\n    \n    if (mode === undefined) {\n        mode = _0777 & (~process.umask());\n    }\n    if (!made) made = null;\n\n    p = path.resolve(p);\n\n    try {\n        xfs.mkdirSync(p, mode);\n        made = made || p;\n    }\n    catch (err0) {\n        switch (err0.code) {\n            case 'ENOENT' :\n                made = sync(path.dirname(p), opts, made);\n                sync(p, opts, made);\n                break;\n\n            // In the case of any other error, just see if there's a dir\n            // there already.  If so, then hooray!  If not, then something\n            // is borked.\n            default:\n                var stat;\n                try {\n                    stat = xfs.statSync(p);\n                }\n                catch (err1) {\n                    throw err0;\n                }\n                if (!stat.isDirectory()) throw err0;\n                break;\n        }\n    }\n\n    return made;\n};\n\n\n//# sourceURL=webpack://PushServer.TokenStore/./node_modules/mkdirp/index.js?");

/***/ }),

/***/ "./node_modules/node-persist/package.json":
/*!************************************************!*\
  !*** ./node_modules/node-persist/package.json ***!
  \************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, bugs, bundleDependencies, contributors, dependencies, deprecated, description, devDependencies, directories, homepage, keywords, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

eval("module.exports = {\"_from\":\"node-persist\",\"_id\":\"node-persist@3.0.2\",\"_inBundle\":false,\"_integrity\":\"sha512-BzKvXRuEOSoTkS719fXlN2KiA6ifmZeaBLnUhc4Rj7QA+Kb6gImODEiqznOUXELZBN9bH0lI7YwusPgrhPE6kQ==\",\"_location\":\"/node-persist\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"node-persist\",\"name\":\"node-persist\",\"escapedName\":\"node-persist\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/node-persist/-/node-persist-3.0.2.tgz\",\"_shasum\":\"cac8ddbf1f1b46345f4782d05f7d951d6c7b8a18\",\"_spec\":\"node-persist\",\"_where\":\"/Users/ktayama/Documents/projects/eureka/Pairs/git/PushTower/packages/tokenStore\",\"bugs\":{\"url\":\"https://github.com/simonlast/node-persist/issues\"},\"bundleDependencies\":false,\"contributors\":[{\"name\":\"Simon Last\",\"email\":\"hello@simonlast.org\",\"url\":\"http://simonlast.org/\"},{\"name\":\"Ben Monro\",\"url\":\"https://github.com/benmonro\"},{\"name\":\"Aziz Khoury\",\"url\":\"https://github.com/akhoury\"}],\"dependencies\":{\"mkdirp\":\"~0.5.1\"},\"deprecated\":false,\"description\":\"Super-easy (and fast) persistent data structures in Node.js, modeled after HTML5 localStorage\",\"devDependencies\":{\"chai\":\"^4.1.2\",\"mocha\":\"^5.0.5\",\"rimraf\":\"^2.4.3\"},\"directories\":{\"example\":\"examples\"},\"homepage\":\"https://github.com/simonlast/node-persist#readme\",\"keywords\":[\"node\",\"persist\",\"storage\"],\"license\":\"MIT\",\"main\":\"./src/node-persist.js\",\"name\":\"node-persist\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/simonlast/node-persist.git\"},\"scripts\":{\"test\":\"./node_modules/mocha/bin/mocha tests/\"},\"version\":\"3.0.2\"};\n\n//# sourceURL=webpack://PushServer.TokenStore/./node_modules/node-persist/package.json?");

/***/ }),

/***/ "./node_modules/node-persist/src/local-storage.js":
/*!********************************************************!*\
  !*** ./node_modules/node-persist/src/local-storage.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n * Simon Last, Sept 2013\n * http://simonlast.org\n */\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst crypto = __webpack_require__(/*! crypto */ \"crypto\");\nconst mkdirp = __webpack_require__(/*! mkdirp */ \"./node_modules/mkdirp/index.js\");\nconst pkg = __webpack_require__(/*! ../package.json */ \"./node_modules/node-persist/package.json\");\n\nconst defaults = {\n\tdir: '.' + pkg.name + '/storage',\n\tstringify: JSON.stringify,\n\tparse: JSON.parse,\n\tencoding: 'utf8',\n\tlogging: false,\n\texpiredInterval: 2 * 60 * 1000, /* every 2 minutes */\n\tforgiveParseErrors: false,\n\tttl: false\n};\n\nconst defaultTTL = 24 * 60 * 60 * 1000; /* if ttl is truthy but it's not a number, use 24h as default */\n\nconst isFunction = function(fn) {\n\treturn typeof fn === 'function';\n};\n\nconst isNumber = function(n) {\n\treturn !isNaN(parseFloat(n)) && isFinite(n);\n};\n\nconst isDate = function(d) {\n\treturn Object.prototype.toString.call(d) === '[object Date]';\n};\n\nconst isValidDate = function(d) {\n\treturn isDate(d) && !isNaN(d);\n};\n\nconst isFutureDate = function(d) {\n\treturn isValidDate(d) && d.getTime() > (+new Date);\n};\n\nconst md5 = function (key) {\n\treturn crypto.createHash('md5').update(key).digest('hex');\n};\n\nconst isValidStorageFileContent = function (content) {\n\treturn content && content.key;\n};\n\nconst isExpired = function (datum) {\n\treturn datum.ttl && datum.ttl < (new Date()).getTime();\n};\n\nconst isNotExpired = function (datum) {\n\treturn !isExpired(datum);\n};\n\nconst resolveDir = function(dir) {\n\tdir = path.normalize(dir);\n\tif (path.isAbsolute(dir)) {\n\t\treturn dir;\n\t}\n\treturn path.join(process.cwd(), dir);\n};\n\nconst LocalStorage = function (options) {\n\tif(!(this instanceof LocalStorage)) {\n\t\treturn new LocalStorage(options);\n\t}\n\tthis.setOptions(options);\n};\n\nLocalStorage.prototype = {\n\n\tinit: async function (options) {\n\t\tif (options) {\n\t\t\tthis.setOptions(options);\n\t\t}\n\t\tawait this.ensureDirectory(this.options.dir);\n\t\tif (this.options.expiredInterval) {\n\t\t\tthis.startExpiredKeysInterval();\n\t\t}\n\t\treturn this.options;\n\t},\n\n\tsetOptions: function (userOptions) {\n\t\tlet options = {};\n\n\t\tif (!userOptions) {\n\t\t\toptions = defaults;\n\t\t} else {\n\t\t\tfor (let key in defaults) {\n\t\t\t\tif (userOptions.hasOwnProperty(key)) {\n\t\t\t\t\toptions[key] = userOptions[key];\n\t\t\t\t} else {\n\t\t\t\t\toptions[key] = this.options && this.options[key] != null ? this.options[key] : defaults[key];\n\t\t\t\t}\n\t\t\t}\n\t\t\toptions.dir = resolveDir(options.dir);\n\t\t\toptions.ttl = options.ttl ? isNumber(options.ttl) && options.ttl > 0 ? options.ttl : defaultTTL : false;\n\t\t}\n\n\t\t// Check to see if we received an external logging function\n\t\tif (isFunction(options.logging)) {\n\t\t\t// Overwrite log function with external logging function\n\t\t\tthis.log = options.logging;\n\t\t\toptions.logging = true;\n\t\t}\n\t\tthis.options = options;\n\t},\n\n\tdata: async function () {\n\t\treturn this.readDirectory(this.options.dir);\n\t},\n\n\tkeys: async function (filter) {\n\t\tlet data = await this.data();\n\t\tif (filter) {\n\t\t\tdata = data.filter(filter);\n\t\t}\n\t\treturn data.map(datum => datum.key);\n\t},\n\n\tvalues: async function (filter) {\n\t\tlet data = await this.data();\n\t\tif (filter) {\n\t\t\tdata = data.filter(filter);\n\t\t}\n\t\treturn data.map(datum => datum.value);\n\t},\n\n\tlength: async function (filter) {\n\t\tlet data = await this.data();\n\t\tif (filter) {\n\t\t\tdata = data.filter(filter);\n\t\t}\n\t\treturn data.length;\n\t},\n\n\tforEach: async function(callback) {\n\t\tlet data = await this.data();\n\t\tfor (let d of data) {\n\t\t\tawait callback(d);\n\t\t}\n\t},\n\n\tvaluesWithKeyMatch: async function(match) {\n\t\tmatch = match || /.*/;\n\t\tlet filter = match instanceof RegExp ? datum => match.test(datum.key) : datum => datum.key.indexOf(match) !== -1;\n\t\treturn this.values(filter);\n\t},\n\n\tset: function (key, value, options = {}) {\n\t\treturn this.setItem(key, value, options);\n\t},\n\n\tsetItem: function (key, datumValue, options = {}) {\n\t\tlet value = this.copy(datumValue);\n\t\tlet ttl = this.calcTTL(options.ttl);\n\t\tif (this.logging) {\n\t\t\tthis.log(`set ('${key}': '${this.stringify(value)}')`);\n\t\t}\n\t\tlet datum = {key: key, value: value, ttl: ttl};\n\t\treturn this.writeFile(this.getDatumPath(key), datum);\n\t},\n\n\tupdate: function (key, value, options = {}) {\n\t\treturn this.updateItem(key, value, options);\n\t},\n\n\tupdateItem: async function (key, datumValue, options = {}) {\n\t\tlet previousDatum = await this.getDatum(key);\n\t\tif (previousDatum && isNotExpired(previousDatum)) {\n\t\t\tlet newDatumValue = this.copy(datumValue);\n\t\t\tlet ttl;\n\t\t\tif (options.ttl) {\n\t\t\t\tttl = this.calcTTL(options.ttl);\n\t\t\t} else {\n\t\t\t\tttl = previousDatum.ttl;\n\t\t\t}\n\t\t\tif (this.logging) {\n\t\t\t\tthis.log(`update ('${key}': '${this.stringify(value)}')`);\n\t\t\t}\n\t\t\tlet datum = {key: key, value: newDatumValue, ttl: ttl};\n\t\t\treturn this.writeFile(this.getDatumPath(key), datum);\n\t\t} else {\n\t\t\treturn this.setItem(key, datumValue, options);\n\t\t}\n\t},\n\n\tget: function (key) {\n\t\treturn this.getItem(key);\n\t},\n\n\tgetItem: async function (key) {\n\t\tlet datum = await this.getDatum(key);\n\t\tif (isExpired(datum)) {\n\t\t\tthis.log(`${key} has expired`);\n\t\t\tawait this.removeItem(key);\n\t\t} else {\n\t\t\treturn datum.value;\n\t\t}\n\t},\n\n\tgetDatum: async function (key) {\n\t\treturn this.readFile(this.getDatumPath(key));\n\t},\n\n\tgetRawDatum: async function (key) {\n\t\treturn this.readFile(this.getDatumPath(key), {raw: true});\n\t},\n\n\tgetDatumValue: async function (key) {\n\t\tlet datum = await this.getDatum(key);\n\t\treturn datum && datum.value;\n\t},\n\n\tgetDatumPath: function (key) {\n\t\treturn path.join(this.options.dir, md5(key));\n\t},\n\n\tdel: function (key) {\n\t\treturn this.removeItem(key);\n\t},\n\n\trm: function (key) {\n\t\treturn this.removeItem(key);\n\t},\n\n\tremoveItem: async function (key) {\n\t\treturn this.deleteFile(this.getDatumPath(key));\n\t},\n\n\tremoveExpiredItems: async function () {\n\t\tlet keys = await this.keys(isExpired);\n\t\tfor (let key of keys) {\n\t\t\tawait this.removeItem(key);\n\t\t}\n\t},\n\n\tclear: async function () {\n\t\tlet data = await this.data();\n\t\tfor (let d of data) {\n\t\t\tawait this.removeItem(d.key);\n\t\t}\n\t},\n\n\tensureDirectory: function (dir) {\n\t\treturn new Promise((resolve, reject) => {\n\t\t\tlet result = {dir: dir};\n\t\t\t//check to see if dir is present\n\t\t\tfs.exists(dir, (exists) => {\n\t\t\t\tif (exists) {\n\t\t\t\t\treturn resolve(result);\n\t\t\t\t} else {\n\t\t\t\t\t//create the directory\n\t\t\t\t\tmkdirp(dir, (err) => {\n\t\t\t\t\t\tif (err) {\n\t\t\t\t\t\t\treturn reject(err);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tthis.log('created ' + dir);\n\t\t\t\t\t\tresolve(result);\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t},\n\n\treadDirectory: function (dir) {\n\t\treturn new Promise((resolve, reject) => {\n\t\t\t//check to see if dir is present\n\t\t\tfs.exists(dir, (exists) => {\n\t\t\t\tif (exists) {\n\t\t\t\t\t//load data\n\t\t\t\t\tfs.readdir(dir, async (err, arr) => {\n\t\t\t\t\t\tif (err) {\n\t\t\t\t\t\t\treturn reject(err);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tlet data = [];\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tfor (let currentFile of arr) {\n\t\t\t\t\t\t\t\tif (currentFile[0] !== '.') {\n\t\t\t\t\t\t\t\t\tdata.push(await this.readFile(path.join(this.options.dir, currentFile)));\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} catch (err) {\n\t\t\t\t\t\t\treject(err)\n\t\t\t\t\t\t}\n\t\t\t\t\t\tresolve(data);\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\treject(new Error(`[node-persist][readDirectory] ${dir} does not exists!`));\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t},\n\n\treadFile: function (file, options = {}) {\n\t\treturn new Promise((resolve, reject) => {\n\t\t\tfs.readFile(file, this.options.encoding, (err, text) => {\n\t\t\t\tif (err) {\n\t\t\t\t\t/* Only throw the error if the error is something else other than the file doesn't exist */\n\t\t\t\t\tif (err.code === 'ENOENT') {\n\t\t\t\t\t\tthis.log(`${file} does not exist, returning undefined value`);\n\t\t\t\t\t\tresolve(options.raw ? '{}' : {});\n\t\t\t\t\t} else {\n\t\t\t\t\t\treturn reject(err);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tlet input = options.raw ? text : this.parse(text);\n\t\t\t\tif (!options.raw && !isValidStorageFileContent(input)) {\n\t\t\t\t\treturn this.options.forgiveParseErrors ? resolve() : reject(new Error(`[node-persist][readFile] ${file} does not look like a valid storage file!`));\n\t\t\t\t}\n\t\t\t\tresolve(input);\n\t\t\t});\n\t\t});\n\t},\n\n\twriteFile: function (file, content) {\n\t\treturn new Promise((resolve, reject) => {\n\t\t\tfs.writeFile(file, this.stringify(content), this.options.encoding, (err) => {\n\t\t\t\tif (err) {\n\t\t\t\t\treturn reject(err);\n\t\t\t\t}\n\t\t\t\tresolve({file: file, content: content});\n\t\t\t\tthis.log('wrote: ' + file);\n\t\t\t});\n\t\t});\n\t},\n\n\tdeleteFile: function (file) {\n\t\treturn new Promise((resolve, reject) => {\n\t\t\tfs.exists(file, (exists) => {\n\t\t\t\tif (exists) {\n\t\t\t\t\tthis.log(`Removing file:${file}`);\n\t\t\t\t\tfs.unlink(file, (err) => {\n\t\t\t\t\t\t/* Only throw the error if the error is something else */\n\t\t\t\t\t\tif (err && err.code !== 'ENOENT') {\n\t\t\t\t\t\t\treturn reject(err);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tlet result = {file: file, removed: !err, existed: exists};\n\t\t\t\t\t\terr && this.log(`Failed to remove file:${file} because it doesn't exist anymore.`);\n\t\t\t\t\t\tresolve(result);\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\tthis.log(`Not removing file:${file} because it doesn't exist`);\n\t\t\t\t\tlet result = {file: file, removed: false, existed: exists};\n\t\t\t\t\tresolve(result);\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t},\n\n\tstringify: function (obj) {\n\t\treturn this.options.stringify(obj);\n\t},\n\n\tparse: function(str) {\n\t\tif (str == null) {\n\t\t\treturn undefined;\n\t\t}\n\t\ttry {\n\t\t\treturn this.options.parse(str);\n\t\t} catch(e) {\n\t\t\tthis.log('parse error: ', this.stringify(e), 'for:', str);\n\t\t\treturn undefined;\n\t\t}\n\t},\n\n\tcopy: function (value) {\n\t\t// don't copy literals since they're passed by value\n\t\tif (typeof value !== 'object') {\n\t\t\treturn value;\n\t\t}\n\t\treturn this.parse(this.stringify(value));\n\t},\n\n\tstartExpiredKeysInterval: function () {\n\t\tthis.stopExpiredKeysInterval();\n\t\tthis._expiredKeysInterval = setInterval(this.removeExpiredItems.bind(this), this.options.expiredInterval);\n\t\tthis._expiredKeysInterval.unref && this._expiredKeysInterval.unref();\n\t},\n\n\tstopExpiredKeysInterval: function () {\n\t\tclearInterval(this._expiredKeysInterval);\n\t},\n\n\tlog: function () {\n\t\tthis.options && this.options.logging && console.log.apply(console, arguments);\n\t},\n\n\tcalcTTL: function (ttl) {\n\t\tlet now = new Date();\n\t\tlet nowts = now.getTime();\n\n\t\t// only check for undefined, if null was passed in setItem then we probably didn't want to use the this.options.ttl\n\t\tif (typeof ttl === 'undefined') {\n\t\t\tttl = this.options.ttl;\n\t\t} else {\n\t\t}\n\n\t\tif (ttl) {\n\t\t\tif (isDate(ttl)) {\n\t\t\t\tif (!isFutureDate(ttl)) {\n\t\t\t\t\tttl = defaultTTL;\n\t\t\t\t}\n\t\t\t\tttl = ttl.getTime ? ttl.getTime() : ttl;\n\t\t\t} else {\n\t\t\t\tttl = ttl ? isNumber(ttl) && ttl > 0 ? nowts + ttl : defaultTTL : void 0;\n\t\t\t}\n\t\t\treturn ttl;\n\t\t} else {\n\t\t\treturn void 0;\n\t\t}\n\t}\n};\n\nmodule.exports = LocalStorage;\n\n\n//# sourceURL=webpack://PushServer.TokenStore/./node_modules/node-persist/src/local-storage.js?");

/***/ }),

/***/ "./node_modules/node-persist/src/node-persist.js":
/*!*******************************************************!*\
  !*** ./node_modules/node-persist/src/node-persist.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n * Simon Last, Sept 2013\n * http://simonlast.org\n */\n\nconst LocalStorage = __webpack_require__(/*! ./local-storage */ \"./node_modules/node-persist/src/local-storage.js\");\n\n(function(nodePersist) {\n    /*\n     * This function just creates a localStorage instance, incase you don't plan on using the default one\n     * i.e.\n     * var myStorage = nodePersist.create();\n     * myStorage.init(myOptions);  // you still have to call init\n     */\n    nodePersist.create = function (userOptions) {\n        return LocalStorage(userOptions);\n    };\n\n    /*\n     * This function, (or init) must be called before the library can be used.\n     * An options hash can be optionally passed.\n     */\n    nodePersist.init = function (userOptions, callback) {\n        const localStorage = nodePersist.defaultInstance = nodePersist.create(userOptions);\n        let ret = localStorage.init(callback);\n        mixin(nodePersist, localStorage, {skip: ['init', 'create']});\n        return ret;\n    };\n\n    // expose all the API methods on the main module using a default instance\n    function mixin (target, source, options) {\n        options = options || {};\n        options.skip = options.skip || [];\n        for (let key in source) {\n            if (typeof source[key] === 'function' && key.indexOf('_') !== 0 && options.skip.indexOf(key) === -1) {\n                target[key] = source[key].bind(source);\n            }\n        }\n    }\n\n}(module.exports));\n\n\n//# sourceURL=webpack://PushServer.TokenStore/./node_modules/node-persist/src/node-persist.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: setup, putToken, lookupToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setup\", function() { return setup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"putToken\", function() { return putToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lookupToken\", function() { return lookupToken; });\n/* harmony import */ var node_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-persist */ \"./node_modules/node-persist/src/node-persist.js\");\n/* harmony import */ var node_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_persist__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function setup() {\n  await node_persist__WEBPACK_IMPORTED_MODULE_0__[\"init\"]({\n    dir: '/tmp/pushserver_tokenstore.db'\n  });\n}\nasync function putToken(request, response) {\n  console.log(`$$$ ${request.method} ${request.path}`);\n  const key = request.body['key'];\n  const deviceToken = request.body['device_token'];\n  console.log(\"### key: \" + key);\n  console.log(\"### device_token: \" + deviceToken);\n\n  if (key && deviceToken) {\n    await node_persist__WEBPACK_IMPORTED_MODULE_0__[\"setItem\"](key, deviceToken);\n  } // console.log(await storage.getItem(key));\n\n\n  response.sendStatus(200);\n}\nfunction lookupToken(request, response, next) {\n  console.log(`#### ${request.method} ${request.path}`); // request.params\u0010\n\n  request.headers['x-target-device-token'] = 'af05cea58ffb2fbb313568ad2bdc9c9170bf5217a360d01024647ae6c7e016b7';\n  next();\n}\n\n//# sourceURL=webpack://PushServer.TokenStore/./src/index.ts?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack://PushServer.TokenStore/external_%22crypto%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack://PushServer.TokenStore/external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack://PushServer.TokenStore/external_%22path%22?");

/***/ })

/******/ });
});
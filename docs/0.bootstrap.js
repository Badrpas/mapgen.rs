(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/mapgen_demo.js":
/*!*****************************!*\
  !*** ../pkg/mapgen_demo.js ***!
  \*****************************/
/*! exports provided: Cell, World, __wbindgen_object_drop_ref, __wbg_getRandomValues_3ac1b33c90b52596, __wbg_randomFillSync_6f956029658662ec, __wbg_self_1c83eb4471d9eb9b, __wbg_static_accessor_MODULE_abf5ae284bffdf45, __wbg_require_5b2b5b594d809d9f, __wbg_crypto_c12f14e810edcaa2, __wbg_msCrypto_679be765111ba775, __wbindgen_is_undefined, __wbg_getRandomValues_05a60bf171bfc2be, __wbg_instanceof_Window_adf3196bdc02b386, __wbg_document_6cc8d0b87c0a99b9, __wbg_getElementById_0cb6ad9511b1efc0, __wbg_setinnerHTML_4ff235db1a3cb4d8, __wbg_call_8e95613cc6524977, __wbindgen_object_clone_ref, __wbg_newnoargs_f3b8a801d5d4b079, __wbg_self_07b2f89e82ceb76d, __wbg_window_ba85d88572adc0dc, __wbg_globalThis_b9277fc37e201fe5, __wbg_global_e16303fe83e1d57f, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapgen_demo_bg.wasm */ \"../pkg/mapgen_demo_bg.wasm\");\n/* harmony import */ var _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapgen_demo_bg.js */ \"../pkg/mapgen_demo_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"World\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"World\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_3ac1b33c90b52596\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getRandomValues_3ac1b33c90b52596\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_6f956029658662ec\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_randomFillSync_6f956029658662ec\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_1c83eb4471d9eb9b\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_1c83eb4471d9eb9b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_static_accessor_MODULE_abf5ae284bffdf45\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_static_accessor_MODULE_abf5ae284bffdf45\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_5b2b5b594d809d9f\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_require_5b2b5b594d809d9f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_c12f14e810edcaa2\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_crypto_c12f14e810edcaa2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_679be765111ba775\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_msCrypto_679be765111ba775\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_05a60bf171bfc2be\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getRandomValues_05a60bf171bfc2be\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_adf3196bdc02b386\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_Window_adf3196bdc02b386\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_6cc8d0b87c0a99b9\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_document_6cc8d0b87c0a99b9\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getElementById_0cb6ad9511b1efc0\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getElementById_0cb6ad9511b1efc0\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setinnerHTML_4ff235db1a3cb4d8\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setinnerHTML_4ff235db1a3cb4d8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_8e95613cc6524977\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_8e95613cc6524977\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_f3b8a801d5d4b079\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newnoargs_f3b8a801d5d4b079\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_07b2f89e82ceb76d\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_07b2f89e82ceb76d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_ba85d88572adc0dc\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_window_ba85d88572adc0dc\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_b9277fc37e201fe5\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_globalThis_b9277fc37e201fe5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_e16303fe83e1d57f\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_global_e16303fe83e1d57f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _mapgen_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/mapgen_demo.js?");

/***/ }),

/***/ "../pkg/mapgen_demo_bg.js":
/*!********************************!*\
  !*** ../pkg/mapgen_demo_bg.js ***!
  \********************************/
/*! exports provided: Cell, World, __wbindgen_object_drop_ref, __wbg_getRandomValues_3ac1b33c90b52596, __wbg_randomFillSync_6f956029658662ec, __wbg_self_1c83eb4471d9eb9b, __wbg_static_accessor_MODULE_abf5ae284bffdf45, __wbg_require_5b2b5b594d809d9f, __wbg_crypto_c12f14e810edcaa2, __wbg_msCrypto_679be765111ba775, __wbindgen_is_undefined, __wbg_getRandomValues_05a60bf171bfc2be, __wbg_instanceof_Window_adf3196bdc02b386, __wbg_document_6cc8d0b87c0a99b9, __wbg_getElementById_0cb6ad9511b1efc0, __wbg_setinnerHTML_4ff235db1a3cb4d8, __wbg_call_8e95613cc6524977, __wbindgen_object_clone_ref, __wbg_newnoargs_f3b8a801d5d4b079, __wbg_self_07b2f89e82ceb76d, __wbg_window_ba85d88572adc0dc, __wbg_globalThis_b9277fc37e201fe5, __wbg_global_e16303fe83e1d57f, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"World\", function() { return World; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_3ac1b33c90b52596\", function() { return __wbg_getRandomValues_3ac1b33c90b52596; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_6f956029658662ec\", function() { return __wbg_randomFillSync_6f956029658662ec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_1c83eb4471d9eb9b\", function() { return __wbg_self_1c83eb4471d9eb9b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_static_accessor_MODULE_abf5ae284bffdf45\", function() { return __wbg_static_accessor_MODULE_abf5ae284bffdf45; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_5b2b5b594d809d9f\", function() { return __wbg_require_5b2b5b594d809d9f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_c12f14e810edcaa2\", function() { return __wbg_crypto_c12f14e810edcaa2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_679be765111ba775\", function() { return __wbg_msCrypto_679be765111ba775; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_05a60bf171bfc2be\", function() { return __wbg_getRandomValues_05a60bf171bfc2be; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_adf3196bdc02b386\", function() { return __wbg_instanceof_Window_adf3196bdc02b386; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_6cc8d0b87c0a99b9\", function() { return __wbg_document_6cc8d0b87c0a99b9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getElementById_0cb6ad9511b1efc0\", function() { return __wbg_getElementById_0cb6ad9511b1efc0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setinnerHTML_4ff235db1a3cb4d8\", function() { return __wbg_setinnerHTML_4ff235db1a3cb4d8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_8e95613cc6524977\", function() { return __wbg_call_8e95613cc6524977; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_f3b8a801d5d4b079\", function() { return __wbg_newnoargs_f3b8a801d5d4b079; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_07b2f89e82ceb76d\", function() { return __wbg_self_07b2f89e82ceb76d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_ba85d88572adc0dc\", function() { return __wbg_window_ba85d88572adc0dc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_b9277fc37e201fe5\", function() { return __wbg_globalThis_b9277fc37e201fe5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_e16303fe83e1d57f\", function() { return __wbg_global_e16303fe83e1d57f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapgen_demo_bg.wasm */ \"../pkg/mapgen_demo_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n/**\n*/\nconst Cell = Object.freeze({ Floor:0,\"0\":\"Floor\",Wall:1,\"1\":\"Wall\", });\n/**\n*/\nclass World {\n\n    static __wrap(ptr) {\n        const obj = Object.create(World.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_world_free\"](ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} seed\n    * @returns {World}\n    */\n    static new_cellular_automata(width, height, seed) {\n        var ret = _mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_new_cellular_automata\"](width, height, seed);\n        return World.__wrap(ret);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} seed\n    * @returns {World}\n    */\n    static new_simple_rooms(width, height, seed) {\n        var ret = _mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_new_simple_rooms\"](width, height, seed);\n        return World.__wrap(ret);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} seed\n    * @returns {World}\n    */\n    static new_bsp_interior(width, height, seed) {\n        var ret = _mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_new_bsp_interior\"](width, height, seed);\n        return World.__wrap(ret);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} seed\n    * @returns {World}\n    */\n    static new_drunkard(width, height, seed) {\n        var ret = _mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_new_drunkard\"](width, height, seed);\n        return World.__wrap(ret);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} seed\n    * @returns {World}\n    */\n    static new_random(width, height, seed) {\n        var ret = _mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_new_random\"](width, height, seed);\n        return World.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        var ret = _mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_width\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        var ret = _mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_height\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    tiles() {\n        var ret = _mapgen_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_tiles\"](this.ptr);\n        return ret;\n    }\n}\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_getRandomValues_3ac1b33c90b52596 = function(arg0, arg1, arg2) {\n    getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));\n};\n\nconst __wbg_randomFillSync_6f956029658662ec = function(arg0, arg1, arg2) {\n    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n};\n\nconst __wbg_self_1c83eb4471d9eb9b = handleError(function() {\n    var ret = self.self;\n    return addHeapObject(ret);\n});\n\nconst __wbg_static_accessor_MODULE_abf5ae284bffdf45 = function() {\n    var ret = module;\n    return addHeapObject(ret);\n};\n\nconst __wbg_require_5b2b5b594d809d9f = function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));\n    return addHeapObject(ret);\n};\n\nconst __wbg_crypto_c12f14e810edcaa2 = function(arg0) {\n    var ret = getObject(arg0).crypto;\n    return addHeapObject(ret);\n};\n\nconst __wbg_msCrypto_679be765111ba775 = function(arg0) {\n    var ret = getObject(arg0).msCrypto;\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_is_undefined = function(arg0) {\n    var ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nconst __wbg_getRandomValues_05a60bf171bfc2be = function(arg0) {\n    var ret = getObject(arg0).getRandomValues;\n    return addHeapObject(ret);\n};\n\nconst __wbg_instanceof_Window_adf3196bdc02b386 = function(arg0) {\n    var ret = getObject(arg0) instanceof Window;\n    return ret;\n};\n\nconst __wbg_document_6cc8d0b87c0a99b9 = function(arg0) {\n    var ret = getObject(arg0).document;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n};\n\nconst __wbg_getElementById_0cb6ad9511b1efc0 = function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n};\n\nconst __wbg_setinnerHTML_4ff235db1a3cb4d8 = function(arg0, arg1, arg2) {\n    getObject(arg0).innerHTML = getStringFromWasm0(arg1, arg2);\n};\n\nconst __wbg_call_8e95613cc6524977 = handleError(function(arg0, arg1) {\n    var ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nconst __wbg_newnoargs_f3b8a801d5d4b079 = function(arg0, arg1) {\n    var ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nconst __wbg_self_07b2f89e82ceb76d = handleError(function() {\n    var ret = self.self;\n    return addHeapObject(ret);\n});\n\nconst __wbg_window_ba85d88572adc0dc = handleError(function() {\n    var ret = window.window;\n    return addHeapObject(ret);\n});\n\nconst __wbg_globalThis_b9277fc37e201fe5 = handleError(function() {\n    var ret = globalThis.globalThis;\n    return addHeapObject(ret);\n});\n\nconst __wbg_global_e16303fe83e1d57f = handleError(function() {\n    var ret = global.global;\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./../www/node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///../pkg/mapgen_demo_bg.js?");

/***/ }),

/***/ "../pkg/mapgen_demo_bg.wasm":
/*!**********************************!*\
  !*** ../pkg/mapgen_demo_bg.wasm ***!
  \**********************************/
/*! exports provided: memory, __wbg_world_free, world_new_cellular_automata, world_new_simple_rooms, world_new_bsp_interior, world_new_drunkard, world_new_random, world_width, world_height, world_tiles, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./mapgen_demo_bg.js */ \"../pkg/mapgen_demo_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/mapgen_demo_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mapgen_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapgen-demo */ \"../pkg/mapgen_demo.js\");\n/* harmony import */ var mapgen_demo_mapgen_demo_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapgen-demo/mapgen_demo_bg */ \"../pkg/mapgen_demo_bg.wasm\");\n\n\n\nconst CELL_SIZE = 15;\nconst GRID_COLOR = \"#CCCCCC\";\nconst DEAD_COLOR = \"#FFFFFF\";\nconst ALIVE_COLOR = \"#000000\";\n\nvar world = null;\nconst width = 80;\nconst height = 50;\n\nconst infoDiv = document.getElementById('map-info');\n// Give the canvas room for all of our cells and a 1px border\n// around each of them.\nconst canvas = document.getElementById(\"mapgen-canvas\");\ncanvas.height = CELL_SIZE * height;\ncanvas.width = CELL_SIZE * width;\n// Load tiles bitmap\nlet tiles_image = new Image();\ntiles_image.src = '/assets/tiles.png';\n\nconst ctx = canvas.getContext('2d');\n\nfunction get_seed() {\n    var seed_text = document.getElementById(\"seed\").value;\n    if( seed_text.length > 0) {\n        return Number(seed_text);\n    } \n    return Date.now();\n}\n\n// Map generators\nfunction newCellularAutomata() {\n    world = mapgen_demo__WEBPACK_IMPORTED_MODULE_0__[\"World\"].new_cellular_automata(width, height, get_seed());\n    requestAnimationFrame(renderLoop);\n}\n\nfunction newSimpleRooms() {\n    var seed = Date.now();\n    world = mapgen_demo__WEBPACK_IMPORTED_MODULE_0__[\"World\"].new_simple_rooms(width, height, get_seed());\n    requestAnimationFrame(renderLoop);\n}\n\nfunction newBspInterior() {\n    var seed = Date.now();\n    world = mapgen_demo__WEBPACK_IMPORTED_MODULE_0__[\"World\"].new_bsp_interior(width, height, get_seed());\n    requestAnimationFrame(renderLoop);\n}\n\nfunction newDrunkard() {\n    var seed = Date.now();\n    world = mapgen_demo__WEBPACK_IMPORTED_MODULE_0__[\"World\"].new_drunkard(width, height, get_seed());\n    requestAnimationFrame(renderLoop);\n}\n\nfunction newRandomGen() {\n    var seed = Date.now();\n    world = mapgen_demo__WEBPACK_IMPORTED_MODULE_0__[\"World\"].new_random(width, height, get_seed());\n    requestAnimationFrame(renderLoop);\n}\n\nconst renderLoop = () => {\n    // universe.tick();\n\n    // drawGrid();\n    drawCells();\n\n    requestAnimationFrame(renderLoop);\n};\n\nconst drawGrid = () => {\n    ctx.beginPath();\n    ctx.strokeStyle = GRID_COLOR;\n\n    // Vertical lines.\n    for (let i = 0; i <= width; i++) {\n        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);\n    }\n\n    // Horizontal lines.\n    for (let j = 0; j <= height; j++) {\n        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);\n        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);\n    }\n\n    ctx.stroke();\n};\n\nconst getIndex = (row, column) => {\n    return row * width + column;\n};\n\nconst is_inner_wall = (tiles, col, row) => {\n\n    for (let c = Math.max(col-1, 0); c < Math.min(col+2, width); c++) {\n        for (let r = Math.max(row-1, 0); r < Math.min(row+2, height); r++) {\n            if ((c != col || r != row) && tiles[getIndex(r, c)] == mapgen_demo__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"].Floor) {\n                return false;\n            }\n        }\n    }\n\n    return true;\n}\n\nconst drawCells = () => {\n    const tilesPtr = world.tiles();\n    const tiles = new Uint8Array(mapgen_demo_mapgen_demo_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, tilesPtr, width * height);\n    const tile_size = 39;\n\n    ctx.beginPath();\n\n    for (let row = 0; row < height; row++) {\n        for (let col = 0; col < width; col++) {\n            const idx = getIndex(row, col);\n\n            var tile_x = 0;\n            var tile_y = 0;\n            if (tiles[idx] == mapgen_demo__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"].Floor) {\n                tile_x = 3;\n                tile_y = 2;\n            } else if (is_inner_wall(tiles, col, row)){\n                tile_x = 18;\n                tile_y = 0;\n            } else {\n                tile_x = 0;\n                tile_y = 3;\n            }\n            ctx.drawImage(\n                tiles_image, \n                tile_x * tile_size+3, \n                tile_y * tile_size+3, \n                tile_size-3, \n                tile_size-3, \n                col * CELL_SIZE,\n                row * CELL_SIZE,\n                CELL_SIZE,\n                CELL_SIZE);\n        }\n    }\n\n    ctx.stroke();\n};\n\nnewRandomGen();\n\n// Connect UI element\ndocument.getElementById('cellular-automata-option').addEventListener('click', newCellularAutomata);\ndocument.getElementById('simple-rooms-option').addEventListener('click', newSimpleRooms);\ndocument.getElementById('bsp-interior-option').addEventListener('click', newBspInterior);\ndocument.getElementById('drunkard-option').addEventListener('click', newDrunkard);\ndocument.getElementById('random-option').addEventListener('click', newRandomGen);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);
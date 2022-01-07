/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Chip8.ts":
/*!**********************!*\
  !*** ./src/Chip8.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Chip8 = void 0;\nconst Display_1 = __webpack_require__(/*! ./Display */ \"./src/Display.ts\");\nconst Memory_1 = __webpack_require__(/*! ./Memory */ \"./src/Memory.ts\");\nclass Chip8 {\n    constructor() {\n        console.log(\"Create new chip-8\");\n        this.display = new Display_1.Display();\n        this.memory = new Memory_1.Memory();\n    }\n}\nexports.Chip8 = Chip8;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/Chip8.ts?");

/***/ }),

/***/ "./src/Display.ts":
/*!************************!*\
  !*** ./src/Display.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Display = void 0;\nconst displayConstants_1 = __webpack_require__(/*! ./constants/displayConstants */ \"./src/constants/displayConstants.ts\");\nclass Display {\n    constructor() {\n        console.log(\"Create a new display\");\n        this.screen = document.querySelector(\"canvas\");\n        this.screen.width = displayConstants_1.DISPLAY_WIDTH * displayConstants_1.DISPLAY_MULTIPLAY;\n        this.screen.height = displayConstants_1.DISPLAY_HEIGHT * displayConstants_1.DISPLAY_MULTIPLAY;\n        this.context = this.screen.getContext(\"2d\");\n        this.context.fillStyle = displayConstants_1.BG_COLOR;\n        this.frameBuffer = [];\n        this.reset();\n    }\n    reset() {\n        for (let i = 0; i < displayConstants_1.DISPLAY_HEIGHT; i++) {\n            this.frameBuffer.push([]);\n            for (let j = 0; j < displayConstants_1.DISPLAY_WIDTH; j++) {\n                this.frameBuffer[i].push(1);\n            }\n        }\n        this.context.fillRect(0, 0, this.screen.width, this.screen.height);\n        this.drawBuffer();\n    }\n    drawBuffer() {\n        for (let h = 0; h < displayConstants_1.DISPLAY_HEIGHT; h++) {\n            this.frameBuffer.push([]);\n            for (let w = 0; w < displayConstants_1.DISPLAY_WIDTH; w++) {\n                this.drawPixel(h, w, this.frameBuffer[h][w]);\n            }\n        }\n    }\n    drawPixel(h, w, value) {\n        if (value) {\n            this.context.fillStyle = displayConstants_1.COLOR;\n        }\n        else {\n            this.context.fillStyle = displayConstants_1.BG_COLOR;\n        }\n        this.context.fillRect(w * displayConstants_1.DISPLAY_MULTIPLAY, h * displayConstants_1.DISPLAY_MULTIPLAY, displayConstants_1.DISPLAY_MULTIPLAY, displayConstants_1.DISPLAY_MULTIPLAY);\n    }\n}\nexports.Display = Display;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/Display.ts?");

/***/ }),

/***/ "./src/Memory.ts":
/*!***********************!*\
  !*** ./src/Memory.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Memory = void 0;\nconst memoryConstants_1 = __webpack_require__(/*! ./constants/memoryConstants */ \"./src/constants/memoryConstants.ts\");\nclass Memory {\n    constructor() {\n        console.log(\"Create new memory\");\n        this.memory = new Uint8Array(memoryConstants_1.MEMORY_SIZE);\n        this.reset();\n    }\n    reset() {\n        this.memory.fill(0);\n    }\n    setMemory(index, value) {\n        this.assertMemory(index);\n        this.memory[index] = value;\n    }\n    getMemory(index) {\n        this.assertMemory(index);\n        return this.memory[index];\n    }\n    assertMemory(index) {\n        console.assert(index >= 0 && index < memoryConstants_1.MEMORY_SIZE, \"Error trying to access memory at in index ${index}\");\n    }\n}\nexports.Memory = Memory;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/Memory.ts?");

/***/ }),

/***/ "./src/constants/displayConstants.ts":
/*!*******************************************!*\
  !*** ./src/constants/displayConstants.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.COLOR = exports.BG_COLOR = exports.DISPLAY_MULTIPLAY = exports.DISPLAY_HEIGHT = exports.DISPLAY_WIDTH = void 0;\nexports.DISPLAY_WIDTH = 64;\nexports.DISPLAY_HEIGHT = 32;\nexports.DISPLAY_MULTIPLAY = 10;\nexports.BG_COLOR = \"#000\";\nexports.COLOR = \"#3f6\";\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/constants/displayConstants.ts?");

/***/ }),

/***/ "./src/constants/memoryConstants.ts":
/*!******************************************!*\
  !*** ./src/constants/memoryConstants.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LOAD_PROGRAM_ADDRESS = exports.MEMORY_SIZE = void 0;\nexports.MEMORY_SIZE = 4095;\nexports.LOAD_PROGRAM_ADDRESS = 0x200;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/constants/memoryConstants.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Chip8_1 = __webpack_require__(/*! ./Chip8 */ \"./src/Chip8.ts\");\nconst chip8 = new Chip8_1.Chip8();\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
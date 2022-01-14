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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Chip8 = void 0;\n/* eslint-disable @typescript-eslint/no-non-null-assertion */\nconst Display_1 = __webpack_require__(/*! ./Display */ \"./src/Display.ts\");\nconst Memory_1 = __webpack_require__(/*! ./Memory */ \"./src/Memory.ts\");\nconst Registers_1 = __webpack_require__(/*! ./Registers */ \"./src/Registers.ts\");\nconst Keyboard_1 = __webpack_require__(/*! ./Keyboard */ \"./src/Keyboard.ts\");\nconst memoryConstants_1 = __webpack_require__(/*! ./constants/memoryConstants */ \"./src/constants/memoryConstants.ts\");\nconst charsetConstants_1 = __webpack_require__(/*! ./constants/charsetConstants */ \"./src/constants/charsetConstants.ts\");\nconst registersConstants_1 = __webpack_require__(/*! ./constants/registersConstants */ \"./src/constants/registersConstants.ts\");\nconst SoundCard_1 = __webpack_require__(/*! ./SoundCard */ \"./src/SoundCard.ts\");\nconst Disassembler_1 = __webpack_require__(/*! ./Disassembler */ \"./src/Disassembler.ts\");\nconst displayConstants_1 = __webpack_require__(/*! ./constants/displayConstants */ \"./src/constants/displayConstants.ts\");\nclass Chip8 {\n    constructor(romBuffer) {\n        console.log(\"Create new chip-8\");\n        this.memory = new Memory_1.Memory();\n        this.registers = new Registers_1.Registers();\n        this.loadCharSet();\n        this.loadRom(romBuffer);\n        this.keyboard = new Keyboard_1.Keyboard();\n        this.soundCard = new SoundCard_1.SoundCard();\n        this.disassembler = new Disassembler_1.Disassembler();\n        this.display = new Display_1.Display(this.memory);\n    }\n    sleep(ms = registersConstants_1.TIMER_60_HERTZ) {\n        return new Promise((resolve) => setTimeout(resolve, ms));\n    }\n    loadCharSet() {\n        this.memory.memory.set(charsetConstants_1.CHAR_SET, memoryConstants_1.CHAR_SET_ADDRESS);\n    }\n    loadRom(romBuffer) {\n        console.assert(romBuffer.length + memoryConstants_1.LOAD_PROGRAM_ADDRESS <= memoryConstants_1.MEMORY_SIZE, \"This ROM is too large.\");\n        this.memory.memory.set(romBuffer, memoryConstants_1.LOAD_PROGRAM_ADDRESS);\n        this.registers.PC = memoryConstants_1.LOAD_PROGRAM_ADDRESS;\n    }\n    execute(opcode) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { instruction, args } = this.disassembler.disassemble(opcode);\n            const id = instruction === null || instruction === void 0 ? void 0 : instruction.id;\n            console.log(\"i\", instruction);\n            console.log(\"a\", args);\n            console.log(\"id\", id);\n            switch (id) {\n                case \"CLS\":\n                    this.display.reset();\n                    break;\n                case \"RET\":\n                    this.registers.PC = this.registers.stackPop();\n                    break;\n                case \"JP_ADDR\":\n                    this.registers.PC = args === null || args === void 0 ? void 0 : args[0];\n                    break;\n                case \"CALL_ADDR\":\n                    this.registers.stackPush(this.registers.PC);\n                    this.registers.PC = args === null || args === void 0 ? void 0 : args[0];\n                    break;\n                case \"SE_VX_KK\":\n                    if (this.registers.V[args[0]] === (args === null || args === void 0 ? void 0 : args[1])) {\n                        this.registers.PC += 2;\n                    }\n                    break;\n                case \"SNE_VX_KK\":\n                    if (this.registers.V[args[0]] !== (args === null || args === void 0 ? void 0 : args[1])) {\n                        this.registers.PC += 2;\n                    }\n                    break;\n                case \"SE_VX_VY\":\n                    if (this.registers.V[args[0]] === this.registers.V[args[1]]) {\n                        this.registers.PC += 2;\n                    }\n                    break;\n                case \"LD_VX_KK\":\n                    this.registers.V[args[0]] = args[1];\n                    break;\n                case \"ADD_VX_KK\":\n                    this.registers.V[args[0]] += args[1];\n                    break;\n                case \"LD_VX_VY\":\n                    this.registers.V[args[0]] = this.registers.V[args[1]];\n                    break;\n                case \"OR_VX_VY\":\n                    this.registers.V[args[0]] |= this.registers.V[args[1]];\n                    break;\n                case \"AND_VX_VY\":\n                    this.registers.V[args[0]] &= this.registers.V[args[1]];\n                    break;\n                case \"XOR_VX_VY\":\n                    this.registers.V[args[0]] ^= this.registers.V[args[1]];\n                    break;\n                case \"ADD_VX_VY\":\n                    this.registers.V[0x0f] = (this.registers.V[args[0]] + this.registers.V[args[1]] > 0xff);\n                    this.registers.V[args[0]] += this.registers.V[args[1]];\n                    break;\n                case \"SUB_VX_VY\":\n                    this.registers.V[0x0f] = (this.registers.V[args[0]] >\n                        this.registers.V[args[1]]);\n                    this.registers.V[args[0]] -= this.registers.V[args[1]];\n                    break;\n                case \"SHR_VX_VY\":\n                    this.registers.V[0x0f] = this.registers.V[args[0]] & 0x01;\n                    this.registers.V[args[0]] >>= 1;\n                    break;\n                case \"SUBN_VX_VY\":\n                    this.registers.V[0x0f] =\n                        (this.registers.V[args[1]] > this.registers.V[args[0]]);\n                    this.registers.V[args[0]] =\n                        this.registers.V[args[1]] - this.registers.V[args[0]];\n                    break;\n                case \"SHL_VX_VY\":\n                    this.registers.V[0x0f] = this.registers.V[args[0]] & 0x80; //0b10000000\n                    this.registers.V[args[0]] <<= 1;\n                    break;\n                case \"SNE_VX_VY\":\n                    if (this.registers.V[args[0]] !== this.registers.V[args[1]]) {\n                        this.registers.PC += 2;\n                    }\n                    break;\n                case \"LD_I_ADDR\":\n                    this.registers.I = args[0];\n                    break;\n                case \"JP_V0_ADDR\":\n                    this.registers.PC = this.registers.V[0] + args[0];\n                    break;\n                case \"RND_VX_KK\":\n                    const random = Math.floor(Math.random() * 0xff);\n                    this.registers.V[args[0]] = random & args[1];\n                    break;\n                case \"DRW_VX_VY_N\":\n                    const colision = this.display.drawSprite(this.registers.V[args[0]], this.registers.V[args[1]], this.registers.I, args[2]);\n                    this.registers.V[0x0f] = colision;\n                    break;\n                case \"SKP_VX\":\n                    if (this.keyboard.isKeydown(this.registers.V[args[0]])) {\n                        this.registers.PC += 2;\n                    }\n                    break;\n                case \"SKNP_VX\":\n                    if (!this.keyboard.isKeydown(this.registers.V[args[0]])) {\n                        this.registers.PC += 2;\n                    }\n                    break;\n                case \"LD_VX_DT\":\n                    this.registers.V[args[0]] = this.registers.DT;\n                    break;\n                case \"LD_VX_K\":\n                    let keyPressed = -1;\n                    while (keyPressed === -1) {\n                        keyPressed = this.keyboard.hasKeydown();\n                        yield this.sleep();\n                    }\n                    this.registers.V[args[0]] = keyPressed;\n                    console.log(\"got key\", this.registers.V[args[0]]);\n                    break;\n                case \"LD_DT_VX\":\n                    this.registers.DT = this.registers.V[args[0]];\n                    break;\n                case \"LD_ST_VX\":\n                    this.registers.ST = this.registers.V[args[0]];\n                    break;\n                case \"ADD_I_VX\":\n                    this.registers.I += this.registers.V[args[0]];\n                    break;\n                case \"LD_F_VX\":\n                    this.registers.I = this.registers.V[args[0]] * displayConstants_1.SPRITE_HIGHT;\n                    break;\n                case \"LD_B_VX\":\n                    let x = this.registers.V[args[0]];\n                    const hundreds = Math.floor(x / 100);\n                    x = x - hundreds * 100;\n                    const tens = Math.floor(x / 10);\n                    const ones = x - tens * 10;\n                    this.memory.memory[this.registers.I] = hundreds;\n                    this.memory.memory[this.registers.I + 1] = tens;\n                    this.memory.memory[this.registers.I + 2] = ones;\n                    break;\n                case \"LD_I_VX\":\n                    for (let i = 0; i <= args[0]; i++) {\n                        this.memory.memory[this.registers.I + i] = this.registers.V[i];\n                    }\n                    break;\n                case \"LD_VX_I\":\n                    for (let i = 0; i <= args[0]; i++) {\n                        this.registers.V[i] = this.memory.memory[this.registers.I + i];\n                    }\n                    break;\n                default:\n                    console.log(\"Instruction with id ${id} not found.\", instruction);\n            }\n        });\n    }\n}\nexports.Chip8 = Chip8;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/Chip8.ts?");

/***/ }),

/***/ "./src/Disassembler.ts":
/*!*****************************!*\
  !*** ./src/Disassembler.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Disassembler = void 0;\nconst instructionSet_1 = __webpack_require__(/*! ./constants/instructionSet */ \"./src/constants/instructionSet.ts\");\nclass Disassembler {\n    disassemble(opcode) {\n        const instruction = instructionSet_1.INSTRUCTION_SET.find((instruction) => (opcode & instruction.mask) === instruction.pattern);\n        const args = instruction === null || instruction === void 0 ? void 0 : instruction.arguments.map((arg) => (opcode & arg.mask) >> arg.shift);\n        return { instruction, args };\n    }\n}\nexports.Disassembler = Disassembler;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/Disassembler.ts?");

/***/ }),

/***/ "./src/Display.ts":
/*!************************!*\
  !*** ./src/Display.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Display = void 0;\nconst charsetConstants_1 = __webpack_require__(/*! ./constants/charsetConstants */ \"./src/constants/charsetConstants.ts\");\nconst displayConstants_1 = __webpack_require__(/*! ./constants/displayConstants */ \"./src/constants/displayConstants.ts\");\nclass Display {\n    constructor(memory) {\n        console.log(\"Create a new display\");\n        this.memory = memory;\n        this.screen = document.querySelector(\"canvas\");\n        this.screen.width = displayConstants_1.DISPLAY_WIDTH * displayConstants_1.DISPLAY_MULTIPLAY;\n        this.screen.height = displayConstants_1.DISPLAY_HEIGHT * displayConstants_1.DISPLAY_MULTIPLAY;\n        this.context = this.screen.getContext(\"2d\");\n        this.context.fillStyle = displayConstants_1.BG_COLOR;\n        this.frameBuffer = [];\n        this.reset();\n    }\n    reset() {\n        for (let i = 0; i < displayConstants_1.DISPLAY_HEIGHT; i++) {\n            this.frameBuffer.push([]);\n            for (let j = 0; j < displayConstants_1.DISPLAY_WIDTH; j++) {\n                this.frameBuffer[i].push(0);\n            }\n        }\n        this.context.fillRect(0, 0, this.screen.width, this.screen.height);\n        this.drawBuffer();\n    }\n    drawBuffer() {\n        for (let h = 0; h < displayConstants_1.DISPLAY_HEIGHT; h++) {\n            this.frameBuffer.push([]);\n            for (let w = 0; w < displayConstants_1.DISPLAY_WIDTH; w++) {\n                this.drawPixel(h, w, this.frameBuffer[h][w]);\n            }\n        }\n    }\n    drawPixel(h, w, value) {\n        if (value) {\n            this.context.fillStyle = displayConstants_1.COLOR;\n        }\n        else {\n            this.context.fillStyle = displayConstants_1.BG_COLOR;\n        }\n        this.context.fillRect(w * displayConstants_1.DISPLAY_MULTIPLAY, h * displayConstants_1.DISPLAY_MULTIPLAY, displayConstants_1.DISPLAY_MULTIPLAY, displayConstants_1.DISPLAY_MULTIPLAY);\n    }\n    drawSprite(h, w, spriteAddress, num) {\n        let pixelColision = 0;\n        for (let lh = 0; lh < num; lh++) {\n            const line = this.memory.memory[spriteAddress + lh];\n            for (let lw = 0; lw < charsetConstants_1.CHAR_SET_WITH; lw++) {\n                const bitToCheck = 0b10000000 >> lw;\n                const value = line & bitToCheck;\n                const ph = (h + lh) % displayConstants_1.DISPLAY_HEIGHT;\n                const pw = (w + lw) % displayConstants_1.DISPLAY_WIDTH;\n                if (value === 0) {\n                    continue;\n                }\n                if (this.frameBuffer[ph][pw] === 1) {\n                    pixelColision = 1;\n                }\n                this.frameBuffer[ph][pw] ^= 1;\n            }\n        }\n        this.drawBuffer();\n        return pixelColision;\n    }\n}\nexports.Display = Display;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/Display.ts?");

/***/ }),

/***/ "./src/Keyboard.ts":
/*!*************************!*\
  !*** ./src/Keyboard.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Keyboard = void 0;\nconst keyboardConstants_1 = __webpack_require__(/*! ./constants/keyboardConstants */ \"./src/constants/keyboardConstants.ts\");\nclass Keyboard {\n    constructor() {\n        this.keys = new Array(keyboardConstants_1.NUMBER_OF_KEYS).fill(false);\n        document.addEventListener(\"keydown\", (event) => this.keydown(event.key));\n        document.addEventListener(\"keyup\", (event) => this.keyup(event.key));\n    }\n    keydown(key) {\n        const keyIndex = keyboardConstants_1.keyMap.findIndex((mapKey) => mapKey === key.toLowerCase());\n        if (keyIndex > -1) {\n            this.keys[keyIndex] = true;\n        }\n    }\n    keyup(key) {\n        const keyIndex = keyboardConstants_1.keyMap.findIndex((mapKey) => mapKey === key.toLowerCase());\n        if (keyIndex > -1) {\n            this.keys[keyIndex] = false;\n        }\n    }\n    isKeydown(keyIndex) {\n        return this.keys[keyIndex];\n    }\n    hasKeydown() {\n        return this.keys.findIndex((key) => key);\n    }\n}\nexports.Keyboard = Keyboard;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/Keyboard.ts?");

/***/ }),

/***/ "./src/Memory.ts":
/*!***********************!*\
  !*** ./src/Memory.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Memory = void 0;\nconst memoryConstants_1 = __webpack_require__(/*! ./constants/memoryConstants */ \"./src/constants/memoryConstants.ts\");\nclass Memory {\n    constructor() {\n        console.log(\"Create new memory\");\n        this.memory = new Uint8Array(memoryConstants_1.MEMORY_SIZE);\n        this.reset();\n    }\n    reset() {\n        this.memory.fill(0);\n    }\n    setMemory(index, value) {\n        this.assertMemory(index);\n        this.memory[index] = value;\n    }\n    getMemory(index) {\n        this.assertMemory(index);\n        return this.memory[index];\n    }\n    getOpcode(index) {\n        const highByte = this.getMemory(index);\n        const lowByte = this.getMemory(index + 1);\n        return (highByte << 8) | lowByte;\n    }\n    assertMemory(index) {\n        console.assert(index >= 0 && index < memoryConstants_1.MEMORY_SIZE, \"Error trying to access memory at in index ${index}\");\n    }\n}\nexports.Memory = Memory;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/Memory.ts?");

/***/ }),

/***/ "./src/Registers.ts":
/*!**************************!*\
  !*** ./src/Registers.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Registers = void 0;\nconst memoryConstants_1 = __webpack_require__(/*! ./constants/memoryConstants */ \"./src/constants/memoryConstants.ts\");\nconst registersConstants_1 = __webpack_require__(/*! ./constants/registersConstants */ \"./src/constants/registersConstants.ts\");\nclass Registers {\n    constructor() {\n        this.V = new Uint8Array(registersConstants_1.NUMBER_OF_REGISTERS);\n        this.I = 0;\n        this.DT = 0;\n        this.ST = 0;\n        this.PC = memoryConstants_1.LOAD_PROGRAM_ADDRESS;\n        this.SP = -1;\n        this.stack = new Uint16Array(registersConstants_1.STACK_DEEP);\n        this.reset();\n    }\n    reset() {\n        this.V.fill(0);\n        this.I = 0;\n        this.DT = 0;\n        this.ST = 0;\n        this.PC = memoryConstants_1.LOAD_PROGRAM_ADDRESS;\n        this.SP = -1;\n        this.stack.fill(0);\n    }\n    stackPush(value) {\n        this.SP++;\n        this.stack[this.SP] = value;\n    }\n    stackPop() {\n        const value = this.stack[this.SP];\n        this.SP--;\n        this.assertStackUnderflow();\n        return value;\n    }\n    assertStackOverflow() {\n        console.assert(this.SP < registersConstants_1.STACK_DEEP, 'Error stack Overflow');\n    }\n    assertStackUnderflow() {\n        console.assert(this.SP >= -1, 'Error stack Underflow');\n    }\n}\nexports.Registers = Registers;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/Registers.ts?");

/***/ }),

/***/ "./src/SoundCard.ts":
/*!**************************!*\
  !*** ./src/SoundCard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SoundCard = void 0;\nconst soundCardConstants_1 = __webpack_require__(/*! ./constants/soundCardConstants */ \"./src/constants/soundCardConstants.ts\");\nclass SoundCard {\n    constructor() {\n        this.soundEnabled = false;\n        if (\"AudioContext\" in window) {\n            const audioContext = new AudioContext();\n            const masterGain = new GainNode(audioContext);\n            masterGain.gain.value = soundCardConstants_1.INITIAL_VOLUME;\n            masterGain.connect(audioContext.destination);\n            let soundEnabled = false;\n            let oscillator;\n            Object.defineProperties(this, {\n                soundEnabled: {\n                    get: function () {\n                        return soundEnabled;\n                    },\n                    set: function (value) {\n                        if (value === soundEnabled) {\n                            return;\n                        }\n                        soundEnabled = value;\n                        if (soundEnabled) {\n                            oscillator = new OscillatorNode(audioContext, {\n                                type: \"square\"\n                            });\n                            oscillator.connect(masterGain);\n                            oscillator.start();\n                        }\n                        else {\n                            oscillator.stop();\n                        }\n                    }\n                }\n            });\n        }\n    }\n    enableSound() {\n        this.soundEnabled = true;\n    }\n    disableSound() {\n        this.soundEnabled = false;\n    }\n}\nexports.SoundCard = SoundCard;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/SoundCard.ts?");

/***/ }),

/***/ "./src/constants/charsetConstants.ts":
/*!*******************************************!*\
  !*** ./src/constants/charsetConstants.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CHAR_SET = exports.CHAR_SET_WITH = void 0;\nexports.CHAR_SET_WITH = 8;\nexports.CHAR_SET = [\n    0xf0,\n    0x90,\n    0x90,\n    0x90,\n    0xf0,\n    0x20,\n    0x60,\n    0x20,\n    0x20,\n    0x70,\n    0xf0,\n    0x10,\n    0xf0,\n    0x80,\n    0xf0,\n    0xf0,\n    0x10,\n    0xf0,\n    0x10,\n    0xf0,\n    0x90,\n    0x90,\n    0xf0,\n    0x10,\n    0x10,\n    0xf0,\n    0x80,\n    0xf0,\n    0x10,\n    0xf0,\n    0xf0,\n    0x80,\n    0xf0,\n    0x90,\n    0xf0,\n    0xf0,\n    0x10,\n    0x20,\n    0x40,\n    0x40,\n    0xf0,\n    0x90,\n    0xf0,\n    0x90,\n    0xf0,\n    0xf0,\n    0x90,\n    0xf0,\n    0x10,\n    0xf0,\n    0xf0,\n    0x90,\n    0xf0,\n    0x90,\n    0x90,\n    0xe0,\n    0x90,\n    0xe0,\n    0x90,\n    0xe0,\n    0xf0,\n    0x80,\n    0x80,\n    0x80,\n    0xf0,\n    0xe0,\n    0x90,\n    0x90,\n    0x90,\n    0xe0,\n    0xf0,\n    0x80,\n    0xf0,\n    0x80,\n    0xf0,\n    0xf0,\n    0x80,\n    0xf0,\n    0x80,\n    0x80,\n];\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/constants/charsetConstants.ts?");

/***/ }),

/***/ "./src/constants/displayConstants.ts":
/*!*******************************************!*\
  !*** ./src/constants/displayConstants.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.COLOR = exports.BG_COLOR = exports.SPRITE_HIGHT = exports.DISPLAY_MULTIPLAY = exports.DISPLAY_HEIGHT = exports.DISPLAY_WIDTH = void 0;\nexports.DISPLAY_WIDTH = 64;\nexports.DISPLAY_HEIGHT = 32;\nexports.DISPLAY_MULTIPLAY = 10;\nexports.SPRITE_HIGHT = 5;\nexports.BG_COLOR = \"#000\";\nexports.COLOR = \"#3f6\";\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/constants/displayConstants.ts?");

/***/ }),

/***/ "./src/constants/instructionSet.ts":
/*!*****************************************!*\
  !*** ./src/constants/instructionSet.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.INSTRUCTION_SET = exports.MASK_HIGHEST_AND_LOWEST_BYTE = exports.MASK_HIGHEST_BYTE = exports.MASK_KK = exports.MASK_Y = exports.MASK_X = exports.MASK_N = exports.MASK_NNN = void 0;\nexports.MASK_NNN = { mask: 0x0fff, shift: 0 };\nexports.MASK_N = { mask: 0x000f, shift: 0 };\nexports.MASK_X = { mask: 0x0f00, shift: 8 };\nexports.MASK_Y = { mask: 0x00f0, shift: 4 };\nexports.MASK_KK = { mask: 0x00ff, shift: 0 };\nexports.MASK_HIGHEST_BYTE = 0xf000;\nexports.MASK_HIGHEST_AND_LOWEST_BYTE = 0xf00f;\nexports.INSTRUCTION_SET = [\n    {\n        key: 2,\n        id: 'CLS',\n        name: 'CLS',\n        mask: 0xffff,\n        pattern: 0x00e0,\n        arguments: [],\n    },\n    {\n        key: 3,\n        id: 'RET',\n        name: 'RET',\n        mask: 0xffff,\n        pattern: 0x00ee,\n        arguments: [],\n    },\n    {\n        key: 4,\n        id: 'JP_ADDR',\n        name: 'JP',\n        mask: exports.MASK_HIGHEST_BYTE,\n        pattern: 0x1000,\n        arguments: [exports.MASK_NNN],\n    },\n    {\n        key: 5,\n        id: 'CALL_ADDR',\n        name: 'CALL',\n        mask: exports.MASK_HIGHEST_BYTE,\n        pattern: 0x2000,\n        arguments: [exports.MASK_NNN],\n    },\n    {\n        key: 6,\n        id: 'SE_VX_KK',\n        name: 'SE',\n        mask: exports.MASK_HIGHEST_BYTE,\n        pattern: 0x3000,\n        arguments: [exports.MASK_X, exports.MASK_KK],\n    },\n    {\n        key: 7,\n        id: 'SNE_VX_KK',\n        name: 'SNE',\n        mask: exports.MASK_HIGHEST_BYTE,\n        pattern: 0x4000,\n        arguments: [exports.MASK_X, exports.MASK_KK],\n    },\n    {\n        key: 8,\n        id: 'SE_VX_VY',\n        name: 'SE',\n        mask: exports.MASK_HIGHEST_AND_LOWEST_BYTE,\n        pattern: 0x5000,\n        arguments: [exports.MASK_X, exports.MASK_Y],\n    },\n    {\n        key: 9,\n        id: 'LD_VX_KK',\n        name: 'LD',\n        mask: exports.MASK_HIGHEST_BYTE,\n        pattern: 0x6000,\n        arguments: [exports.MASK_X, exports.MASK_KK],\n    },\n    {\n        key: 10,\n        id: 'ADD_VX_KK',\n        name: 'ADD',\n        mask: exports.MASK_HIGHEST_BYTE,\n        pattern: 0x7000,\n        arguments: [exports.MASK_X, exports.MASK_KK],\n    },\n    {\n        key: 11,\n        id: 'LD_VX_VY',\n        name: 'LD',\n        mask: exports.MASK_HIGHEST_AND_LOWEST_BYTE,\n        pattern: 0x8000,\n        arguments: [exports.MASK_X, exports.MASK_Y],\n    },\n    {\n        key: 12,\n        id: 'OR_VX_VY',\n        name: 'OR',\n        mask: exports.MASK_HIGHEST_AND_LOWEST_BYTE,\n        pattern: 0x8001,\n        arguments: [exports.MASK_X, exports.MASK_Y],\n    },\n    {\n        key: 13,\n        id: 'AND_VX_VY',\n        name: 'AND',\n        mask: exports.MASK_HIGHEST_AND_LOWEST_BYTE,\n        pattern: 0x8002,\n        arguments: [exports.MASK_X, exports.MASK_Y],\n    },\n    {\n        key: 14,\n        id: 'XOR_VX_VY',\n        name: 'XOR',\n        mask: exports.MASK_HIGHEST_AND_LOWEST_BYTE,\n        pattern: 0x8003,\n        arguments: [exports.MASK_X, exports.MASK_Y],\n    },\n    {\n        key: 15,\n        id: 'ADD_VX_VY',\n        name: 'ADD',\n        mask: exports.MASK_HIGHEST_AND_LOWEST_BYTE,\n        pattern: 0x8004,\n        arguments: [exports.MASK_X, exports.MASK_Y],\n    },\n    {\n        key: 16,\n        id: 'SUB_VX_VY',\n        name: 'SUB',\n        mask: exports.MASK_HIGHEST_AND_LOWEST_BYTE,\n        pattern: 0x8005,\n        arguments: [exports.MASK_X, exports.MASK_Y],\n    },\n    {\n        key: 17,\n        id: 'SHR_VX_VY',\n        name: 'SHR',\n        mask: exports.MASK_HIGHEST_AND_LOWEST_BYTE,\n        pattern: 0x8006,\n        arguments: [exports.MASK_X, exports.MASK_Y],\n    },\n    {\n        key: 18,\n        id: 'SUBN_VX_VY',\n        name: 'SUBN',\n        mask: exports.MASK_HIGHEST_AND_LOWEST_BYTE,\n        pattern: 0x8007,\n        arguments: [exports.MASK_X, exports.MASK_Y],\n    },\n    {\n        key: 19,\n        id: 'SHL_VX_VY',\n        name: 'SHL',\n        mask: exports.MASK_HIGHEST_AND_LOWEST_BYTE,\n        pattern: 0x800e,\n        arguments: [exports.MASK_X, exports.MASK_Y],\n    },\n    {\n        key: 20,\n        id: 'SNE_VX_VY',\n        name: 'SNE',\n        mask: exports.MASK_HIGHEST_AND_LOWEST_BYTE,\n        pattern: 0x9000,\n        arguments: [exports.MASK_X, exports.MASK_Y],\n    },\n    {\n        key: 21,\n        id: 'LD_I_ADDR',\n        name: 'LD',\n        mask: exports.MASK_HIGHEST_BYTE,\n        pattern: 0xa000,\n        arguments: [exports.MASK_NNN],\n    },\n    {\n        key: 22,\n        id: 'JP_V0_ADDR',\n        name: 'JP',\n        mask: exports.MASK_HIGHEST_BYTE,\n        pattern: 0xb000,\n        arguments: [exports.MASK_NNN],\n    },\n    {\n        key: 23,\n        id: 'RND_VX_KK',\n        name: 'RND',\n        mask: exports.MASK_HIGHEST_BYTE,\n        pattern: 0xc000,\n        arguments: [exports.MASK_X, exports.MASK_KK],\n    },\n    {\n        key: 24,\n        id: 'DRW_VX_VY_N',\n        name: 'DRW',\n        mask: exports.MASK_HIGHEST_BYTE,\n        pattern: 0xd000,\n        arguments: [exports.MASK_X, exports.MASK_Y, exports.MASK_N],\n    },\n    {\n        key: 25,\n        id: 'SKP_VX',\n        name: 'SKP',\n        mask: 0xf0ff,\n        pattern: 0xe09e,\n        arguments: [exports.MASK_X],\n    },\n    {\n        key: 26,\n        id: 'SKNP_VX',\n        name: 'SKNP',\n        mask: 0xf0ff,\n        pattern: 0xe0a1,\n        arguments: [exports.MASK_X],\n    },\n    {\n        key: 27,\n        id: 'LD_VX_DT',\n        name: 'LD',\n        mask: 0xf0ff,\n        pattern: 0xf007,\n        arguments: [exports.MASK_X],\n    },\n    {\n        key: 27,\n        id: 'LD_VX_K',\n        name: 'LD',\n        mask: 0xf0ff,\n        pattern: 0xf00a,\n        arguments: [exports.MASK_X],\n    },\n    {\n        key: 28,\n        id: 'LD_DT_VX',\n        name: 'LD',\n        mask: 0xf0ff,\n        pattern: 0xf015,\n        arguments: [exports.MASK_X],\n    },\n    {\n        key: 29,\n        id: 'LD_ST_VX',\n        name: 'LD',\n        mask: 0xf0ff,\n        pattern: 0xf018,\n        arguments: [exports.MASK_X],\n    },\n    {\n        key: 30,\n        id: 'ADD_I_VX',\n        name: 'ADD',\n        mask: 0xf0ff,\n        pattern: 0xf01e,\n        arguments: [exports.MASK_X],\n    },\n    {\n        key: 31,\n        id: 'LD_F_VX',\n        name: 'LD',\n        mask: 0xf0ff,\n        pattern: 0xf029,\n        arguments: [exports.MASK_X],\n    },\n    {\n        key: 32,\n        id: 'LD_B_VX',\n        name: 'LD',\n        mask: 0xf0ff,\n        pattern: 0xf033,\n        arguments: [exports.MASK_X],\n    },\n    {\n        key: 32,\n        id: 'LD_I_VX',\n        name: 'LD',\n        mask: 0xf0ff,\n        pattern: 0xf055,\n        arguments: [exports.MASK_X],\n    },\n    {\n        key: 33,\n        id: 'LD_VX_I',\n        name: 'LD',\n        mask: 0xf0ff,\n        pattern: 0xf065,\n        arguments: [exports.MASK_X],\n    },\n];\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/constants/instructionSet.ts?");

/***/ }),

/***/ "./src/constants/keyboardConstants.ts":
/*!********************************************!*\
  !*** ./src/constants/keyboardConstants.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.keyMap = exports.NUMBER_OF_KEYS = void 0;\nexports.NUMBER_OF_KEYS = 16;\nexports.keyMap = [\n    \"1\", \"2\", \"3\",\n    \"q\", \"w\", \"e\",\n    \"a\", \"s\", \"d\",\n    \"x\", \"z\", \"c\",\n    \"4\", \"r\", \"f\", \"v\"\n];\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/constants/keyboardConstants.ts?");

/***/ }),

/***/ "./src/constants/memoryConstants.ts":
/*!******************************************!*\
  !*** ./src/constants/memoryConstants.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CHAR_SET_ADDRESS = exports.LOAD_PROGRAM_ADDRESS = exports.MEMORY_SIZE = void 0;\nexports.MEMORY_SIZE = 4095;\nexports.LOAD_PROGRAM_ADDRESS = 0x200;\nexports.CHAR_SET_ADDRESS = 0x000;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/constants/memoryConstants.ts?");

/***/ }),

/***/ "./src/constants/registersConstants.ts":
/*!*********************************************!*\
  !*** ./src/constants/registersConstants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TIMER_60_HERTZ = exports.STACK_DEEP = exports.NUMBER_OF_REGISTERS = void 0;\nexports.NUMBER_OF_REGISTERS = 16;\nexports.STACK_DEEP = 16;\nexports.TIMER_60_HERTZ = 1000 / 60;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/constants/registersConstants.ts?");

/***/ }),

/***/ "./src/constants/soundCardConstants.ts":
/*!*********************************************!*\
  !*** ./src/constants/soundCardConstants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.INITIAL_VOLUME = void 0;\nexports.INITIAL_VOLUME = 0.3;\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/constants/soundCardConstants.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Chip8_1 = __webpack_require__(/*! ./Chip8 */ \"./src/Chip8.ts\");\nfunction runChip8() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const rom = yield fetch(\"./roms/test_opcode.ch8\");\n        const arrayBuffer = yield rom.arrayBuffer();\n        const romBuffer = new Uint8Array(arrayBuffer);\n        const chip8 = new Chip8_1.Chip8(romBuffer);\n        chip8.registers.PC = 0x006;\n        chip8.execute(0x21aa);\n        console.log(\"pc\", chip8.registers.PC.toString(16));\n        console.log(\"sp\", chip8.registers.SP);\n        console.log(\"stack\", chip8.registers.stack);\n        chip8.execute(0x00ee);\n        console.log(\"pc\", chip8.registers.PC.toString(16));\n        console.log(\"sp\", chip8.registers.SP);\n        console.log(\"stack\", chip8.registers.stack);\n    });\n}\nrunChip8();\n\n\n//# sourceURL=webpack://chip-8-emulator/./src/index.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
import { Display } from "./Display";
import { Memory } from "./Memory";
import { Registers } from "./Registers";
import { Keyboard } from "./Keyboard";
import { CHAR_SET_ADDRESS } from "./constants/memoryConstants";
import { CHAR_SET } from "./constants/charSetConstants";

export class Chip8 {
    display: Display;
    memory: Memory;
    registers: Registers;
    keyboard: Keyboard;
    
    constructor() {
        console.log("Create new chip-8");
        this.memory = new Memory();
        this.loadCharSet();
        this.registers = new Registers();
        this.keyboard = new Keyboard();
        this.display = new Display(this.memory);
    }

    sleep(ms = 1000) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    loadCharSet() {
        this.memory.memory.set(CHAR_SET, CHAR_SET_ADDRESS);
    }
}

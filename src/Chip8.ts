import { Display } from "./Display";
import { Memory } from "./Memory";
import { Registers } from "./Registers";
import { Keyboard } from "./Keyboard";
import { CHAR_SET_ADDRESS } from "./constants/memoryConstants";
import { CHAR_SET } from "./constants/charsetConstants";

export class Chip8 {
    display: Display;
    memory: Memory;
    registers: Registers;
    keyboard: Keyboard;
    
    constructor() {
        console.log("Create new chip-8");
        this.display = new Display();
        this.memory = new Memory();
        this.registers = new Registers();
        this.keyboard = new Keyboard();
        this.loadCharSet();
    }

    sleep(ms = 1000) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    loadCharSet() {
        this.memory.memory.set(CHAR_SET, CHAR_SET_ADDRESS);
    }
}

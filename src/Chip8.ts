import { Display } from "./Display";
import { Memory } from "./Memory";
import { Registers } from "./Registers";
import { Keyboard } from "./Keyboard";

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
    }

    sleep(ms = 1000) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}

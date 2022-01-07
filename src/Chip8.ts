import { Display } from "./Display";
import { Memory } from "./Memory";
import { Registers } from "./Registers";

export class Chip8 {
    display: Display;
    memory: Memory;
    registers: Registers;
    constructor() {
        console.log("Create new chip-8");
        this.display = new Display();
        this.memory = new Memory();
        this.registers = new Registers();
    }
}

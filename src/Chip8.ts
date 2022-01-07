import { Display } from "./Display";
import { Memory } from "./Memory";

export class Chip8 {
    display: Display;
    memory: Memory;
    constructor() {
        console.log("Create new chip-8");
        this.display = new Display();
        this.memory = new Memory();
    }
}

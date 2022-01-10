import { Display } from "./Display";
import { Memory } from "./Memory";
import { Registers } from "./Registers";
import { Keyboard } from "./Keyboard";
import { CHAR_SET_ADDRESS, LOAD_PROGRAM_ADDRESS, MEMORY_SIZE } from "./constants/memoryConstants";
import { CHAR_SET } from "./constants/charSetConstants";
import { TIMER_60_HERTZ } from "./constants/registersConstants";
import { SoundCard } from "./SoundCard";
import { Disassembler } from "./Disassembler";

export class Chip8 {
    display: Display;
    memory: Memory;
    registers: Registers;
    keyboard: Keyboard;
    soundCard: SoundCard;
    disassembler: Disassembler;
    
    constructor(romBuffer: Uint8Array) {
        console.log("Create new chip-8");
        this.memory = new Memory();
        this.registers = new Registers();
        this.loadCharSet();
        this.loadRom(romBuffer);
        this.keyboard = new Keyboard();
        this.soundCard = new SoundCard();
        this.disassembler = new Disassembler();
        this.display = new Display(this.memory);
    }

    sleep(ms = TIMER_60_HERTZ) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    loadCharSet() {
        this.memory.memory.set(CHAR_SET, CHAR_SET_ADDRESS);
    }

    loadRom(romBuffer: Uint8Array) {
        console.assert(romBuffer.length + LOAD_PROGRAM_ADDRESS <= MEMORY_SIZE, "This ROM is too large.");
        this.memory.memory.set(romBuffer, LOAD_PROGRAM_ADDRESS);
        this.registers.PC = LOAD_PROGRAM_ADDRESS;
    }
}

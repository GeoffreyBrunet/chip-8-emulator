import { Chip8 } from "./Chip8";

async function runChip8() {
    const rom = await fetch('./roms/test_opcode');
    const arrayBuffer = await rom.arrayBuffer();
    const romBuffer = new Uint8Array(arrayBuffer);
    const chip8 = new Chip8(romBuffer);
    console.log(romBuffer);
    console.log(chip8.memory.getMemory(0x200));
    console.log(chip8.memory.getMemory(0x201));
    console.log(chip8.memory.getMemory(0x202));
    console.log(chip8.memory.getMemory(0x203));
}

runChip8();

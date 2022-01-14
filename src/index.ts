import { Chip8 } from "./Chip8";

async function runChip8() {
  const rom = await fetch("./roms/test_opcode.ch8");
  const arrayBuffer = await rom.arrayBuffer();
  const romBuffer = new Uint8Array(arrayBuffer);
  const chip8 = new Chip8(romBuffer);
  chip8.registers.PC = 0x006;
  chip8.execute(0x21aa);
  console.log("pc", chip8.registers.PC.toString(16));
  console.log("sp", chip8.registers.SP);
    console.log("stack", chip8.registers.stack);
    chip8.execute(0x00ee);
    console.log("pc", chip8.registers.PC.toString(16));
    console.log("sp", chip8.registers.SP);
    console.log("stack", chip8.registers.stack);
}

runChip8();

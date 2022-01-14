import { Chip8 } from "./Chip8";

async function runChip8() {
  const rom = await fetch("./roms/test_opcode.ch8");
  const arrayBuffer = await rom.arrayBuffer();
  const romBuffer = new Uint8Array(arrayBuffer);
  const chip8 = new Chip8(romBuffer);
  chip8.registers.PC = 0x006;
  chip8.registers.V[5] = 0xfe;
  chip8.registers.V[8] = 0x12;
  chip8.execute(0x8854);
  console.log("V5", chip8.registers.V[5].toString(16));
  console.log("V8", chip8.registers.V[8].toString(16));
  console.log("VF", chip8.registers.V[0x0f].toString(16));
}

runChip8();

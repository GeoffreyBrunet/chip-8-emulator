import { Chip8 } from "./Chip8";

const chip8 = new Chip8();
chip8.registers.stackPush(13);
chip8.registers.stackPush(15);
let result = chip8.registers.stackPop();
console.log(result);
result = chip8.registers.stackPop();
console.log(result);

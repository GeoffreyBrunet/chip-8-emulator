import { LOAD_PROGRAM_ADDRESS } from "./constants/memoryConstants";
import { NUMBER_OF_REGISTERS, STACK_DEEP } from "./constants/registersConstants";

export class Registers {
    V: Uint8Array;
    I: number;
    DT: number;
    ST: number;
    PC: number;
    SP: number;
    stack: Uint16Array;

    constructor() {
        this.V = new Uint8Array(NUMBER_OF_REGISTERS);
        this.I = 0;
        this.DT = 0;
        this.ST = 0;
        this.PC = LOAD_PROGRAM_ADDRESS;
        this.SP = -1;
        this.stack = new Uint16Array(STACK_DEEP);
        this.reset();
    }

    reset() {
        this.V.fill(0);
        this.I = 0;
        this.DT = 0;
        this.ST = 0;
        this.PC = LOAD_PROGRAM_ADDRESS;
        this.SP = -1;
        this.stack.fill(0);
    }

    stackPush(value: number) {
        this.SP++;
        this.stack[this.SP] = value;
    }

    stackPop() {
        const value = this.stack[this.SP];
        this.SP--;
        this.assertStackUnderflow();
        return value;
    }

    assertStackOverflow() {
        console.assert(this.SP < STACK_DEEP, 'Error stack Overflow');
    }

    assertStackUnderflow() {
        console.assert(this.SP >= -1, 'Error stack Underflow');
    }
}

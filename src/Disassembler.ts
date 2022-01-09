import { INSTRUCTION_SET } from "./constants/instructionSet";

export class Disassembler {
    disassemble(opcode: number) {
        const instruction = INSTRUCTION_SET.find(
            instruction => (opcode & instruction.mask) === instruction.pattern
        );
        console.log('instruction', instruction);
    }
}
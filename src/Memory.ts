import { MEMORY_SIZE } from "./constants/memoryConstants";

export class Memory {
    memory: Uint8Array;
    constructor() {
        console.log("Create new memory");
        this.memory = new Uint8Array(MEMORY_SIZE);
        this.reset();
    }

    reset() {
        this.memory.fill(0);
    }

    setMemory(index: number, value: number) {
        this.assertMemory(index);
        this.memory[index] = value;
    }

    getMemory(index: number) {
        this.assertMemory(index);
        return this.memory[index];
    }

    getOpcode(index: number) {
        const highByte = this.getMemory(index);
        const lowByte = this.getMemory(index + 1);
        return (highByte << 8) | lowByte;
    }

    assertMemory(index: number) {
        console.assert(
        index >= 0 && index < MEMORY_SIZE,
        "Error trying to access memory at in index ${index}"
        );
    }
}

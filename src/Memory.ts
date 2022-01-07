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

    assertMemory(index: number) {
        console.assert(
        index >= 0 && index < MEMORY_SIZE,
        "Error trying to access memory at in index ${index}"
        );
    }
}

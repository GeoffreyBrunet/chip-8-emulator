import { Chip8 } from "./Chip8";

const chip8 = new Chip8();

async function runChip8() {
    while (1) {
        await chip8.sleep();
        if (chip8.registers.DT > 0) {
            await chip8.sleep();
            chip8.registers.DT--;
        }
    }
}

runChip8();

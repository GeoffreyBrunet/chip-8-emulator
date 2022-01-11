import { CHAR_SET_WITH } from "./constants/charsetConstants";
import {
  DISPLAY_HEIGHT,
  DISPLAY_WIDTH,
  DISPLAY_MULTIPLAY,
  BG_COLOR,
  COLOR,
} from "./constants/displayConstants";
import { Memory } from "./Memory";

export class Display {
  screen: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  frameBuffer: Array<Array<number>>;
  memory: Memory;
  constructor(memory: Memory) {
    console.log("Create a new display");
    this.memory = memory;
    this.screen = document.querySelector("canvas") as HTMLCanvasElement;
    this.screen.width = DISPLAY_WIDTH * DISPLAY_MULTIPLAY;
    this.screen.height = DISPLAY_HEIGHT * DISPLAY_MULTIPLAY;
    this.context = this.screen.getContext("2d") as CanvasRenderingContext2D;
    this.context.fillStyle = BG_COLOR;
    this.frameBuffer = [];
    this.reset();
  }

  reset() {
    for (let i = 0; i < DISPLAY_HEIGHT; i++) {
      this.frameBuffer.push([]);
      for (let j = 0; j < DISPLAY_WIDTH; j++) {
        this.frameBuffer[i].push(0);
      }
    }
    this.context.fillRect(0, 0, this.screen.width, this.screen.height);
    this.drawBuffer();
  }

  drawBuffer() {
    for (let h = 0; h < DISPLAY_HEIGHT; h++) {
      this.frameBuffer.push([]);
      for (let w = 0; w < DISPLAY_WIDTH; w++) {
        this.drawPixel(h, w, this.frameBuffer[h][w]);
      }
    }
  }

  drawPixel(h: number, w: number, value: number) {
    if (value) {
      this.context.fillStyle = COLOR;
    } else {
      this.context.fillStyle = BG_COLOR;
    }
    this.context.fillRect(
      w * DISPLAY_MULTIPLAY,
      h * DISPLAY_MULTIPLAY,
      DISPLAY_MULTIPLAY,
      DISPLAY_MULTIPLAY
    );
  }

  drawSprite(h: number, w: number, spriteAddress: number, num: number) {
    let pixelColision = 0;
    for (let lh = 0; lh < num; lh++) {
      const line = this.memory.memory[spriteAddress + lh];
      for (let lw = 0; lw < CHAR_SET_WITH; lw++) {
        const bitToCheck = 0b10000000 >> lw;
        const value = line & bitToCheck;
        const ph = (h + lh) % DISPLAY_HEIGHT;
        const pw = (w + lw) % DISPLAY_WIDTH;
        if (value === 0) {
          continue;
        }
        if (this.frameBuffer[ph][pw] === 1) {
          pixelColision = 1;
        }
        this.frameBuffer[ph][pw] ^= 1;
      }
    }
    this.drawBuffer();
    return pixelColision;
  }
}

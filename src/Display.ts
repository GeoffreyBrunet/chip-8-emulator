import {
  DISPLAY_HEIGHT,
  DISPLAY_WIDTH,
  DISPLAY_MULTIPLAY,
  BG_COLOR,
  COLOR,
} from "./constants/displayConstants";

export class Display {
    screen: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    frameBuffer: Array<Array<number>>;
  constructor() {
    console.log("Create a new display");
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
        this.frameBuffer[i].push(1);
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
}

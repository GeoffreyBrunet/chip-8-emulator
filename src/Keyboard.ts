export class Keyboard {
    constructor() {
        document.addEventListener("keydown", this.keydown);
    }

    keydown(event: KeyboardEvent) {
        console.log('key', event.key);
    }
}

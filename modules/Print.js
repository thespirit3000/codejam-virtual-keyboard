export default class PrintKey {
  constructor(key) {
    this.key = key;
  }

  printHTML() {
    return `
        <div id="${this.key.id}" class="button ${this.key.width}">
                <div class="ru lang button_overlay hide ${this.key.type}">${this.key.ru}</div>
                <div class="ruS button_overlay hide ${this.key.type}">${this.key.ruS}</div>
                <div class="en lang button_overlay hide ${this.key.type}">${this.key.en}</div>
                <div class="enS button_overlay hide ${this.key.type}">${this.key.enS}</div>
            </div>
        `;
  }
}

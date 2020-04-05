export default class PrintKey {
  constructor(key) {
    this.key = key;
  }

  printHTML() {
    return `
        <div id="${this.key.id}" class="button ${this.key.width}">
                <div class="ru button_overlay hide ${this.key.type}">${this.key.ru}</div>
                <div class="en button_overlay hide ${this.key.type}">${this.key.en}</div>
            </div>
        `;
  }
}

export default class NormalKey {
  constructor(options) {
    this.id = options.id;
    this.ru = options.ru;
    this.en = options.en;
    this.enS = '';
    this.ruS = '';
    this.width = options.width;
    this.type = options.type;

    if (options.enS) {
      this.enS = options.enS;
    }
    if (options.ruS) {
      this.ruS = options.ruS;
    }
  }
}

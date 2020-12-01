class StringStream {
  private _index = 0;
  get index() {
    return this._index;
  }
  get current() {
    return this.content[this._index];
  }
  get done() {
    return this._index >= this.content.length;
  }
  constructor(readonly content: string) {}
  next() {
    if (!this.done) {
      this._index++;
      return this.current;
    }
  }
}

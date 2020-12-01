class Stack<T> {
  private _stack: T[] = [];
  get top(): T | undefined {
    return this._stack[this._stack.length - 1];
  }
  public push(val: T) {
    this._stack.push(val);
  }
  public pop() {
    return this._stack.pop();
  }
  public empty() {
    return this._stack.length === 0;
  }
}

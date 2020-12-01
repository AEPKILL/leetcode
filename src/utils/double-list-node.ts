/**
 * @overview 简单的双向链表
 * @author AEPKILL
 * @created 2020-11-27 10:10:07
 */

class DoubleListNode<T> {
  public next: Nullable<DoubleListNode<T>> = null;
  public pre: Nullable<DoubleListNode<T>> = null;
  public val: T;

  constructor(val: T) {
    this.val = val;
  }

  addNext(node: DoubleListNode<T>) {
    node.pre = this;
    this.next = node;
  }

  addPre(node: DoubleListNode<T>) {
    node.next = this;
    this.pre = node;
  }
}

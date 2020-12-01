declare class ListNode<T> {
  public next: Nullable<ListNode<T>>;
  public val: T;
  constructor(val: T);
}

type NListNode = ListNode<number>;

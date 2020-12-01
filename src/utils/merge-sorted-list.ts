function mergeSortedList(
  l1: Nullable<NumberLinkNode>,
  l2: Nullable<NumberLinkNode>
): Nullable<NumberLinkNode> {
  const result = new LinkNode(0);
  let head = result;
  while (l1 && l2) {
    if (l1.value < l2.value) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }

  /**
   * 因为是从小到大合并
   * 比如 [1,2,3,5] merge [4,6,7]
   * 肯定会先消耗掉所有包含较小元素的链表
   * 如果 l1 l2 不同时为空
   * 那么 head 肯定不为空
   */

  if (l1) {
    head.next = l1;
  }
  if (l2) {
    head.next = l2;
  }

  return result.next;
}

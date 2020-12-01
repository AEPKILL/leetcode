/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (32.45%)
 * Total Accepted:    334.5K
 * Total Submissions: 1M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and
 * describe its complexity.
 *
 * Example:
 *
 *
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 *
 *
 */

namespace $23_merge_k_sorted_lists {
  export const mergeKLists = function(
    lists: Array<ListNode<number>>
  ): ListNode<number> | null {
    const result = new ListNode(0);
    const nodePointers = lists.slice(0);

    let head = result;

    while (true) {
      // 存放需要去掉的空指针节点
      /** @type {number[]} */
      const filterIndexs = [];

      // 最小值节点的索引
      let minPointerIndex = -1;
      // 遍历所有的链表
      for (let i = 0; i < nodePointers.length; i++) {
        const node = nodePointers[i];
        if (node === null) {
          filterIndexs.push(i);
          continue;
        }
        if (minPointerIndex === -1) {
          minPointerIndex = i;
        } else if (node.val < nodePointers[minPointerIndex].val) {
          minPointerIndex = i;
        }
      }
      if (minPointerIndex === -1) {
        break;
      }
      head = head.next = nodePointers[minPointerIndex];
      nodePointers[minPointerIndex] = nodePointers[minPointerIndex].next!;
      // 优化: 去掉空指针的节点
      // 476ms -> 280ms
      let j = 0;
      for (const index of filterIndexs) {
        nodePointers.splice(index - j, 1);
        j++;
      }
    }
    return result.next;
  };
}

mountNsToGlobal($23_merge_k_sorted_lists);
// include (./utils/mount-to-global.ts)

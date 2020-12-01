/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (34.99%)
 * Total Accepted:    165.9K
 * Total Submissions: 472.2K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and
 * return its modified list.
 *
 * k is a positive integer and is less than or equal to the length of the
 * linked list. If the number of nodes is not a multiple of k then left-out
 * nodes in the end should remain as it is.
 *
 *
 *
 *
 * Example:
 *
 * Given this linked list: 1->2->3->4->5
 *
 * For k = 2, you should return: 2->1->4->3->5
 *
 * For k = 3, you should return: 3->2->1->4->5
 *
 * Note:
 *
 *
 * Only constant extra memory is allowed.
 * You may not alter the values in the list's nodes, only nodes itself may be
 * changed.
 *
 *
 */
// Definition for singly-linked list.

/**
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

namespace $25_reverse_nodes_in_k_group {
  export const reverseKGroup = function(list: NListNode, k: number) {
    if (k < 2) {
      return list;
    }
    if (!list) {
      return list;
    }
    /** @type { Array<ListNode<number>> } */
    const cache = new Array(k);
    const result = new ListNode(0);
    // head result
    let headR: NListNode = result;
    // head source
    let headS: Nullable<NListNode> = list;
    let j = k;

    while (headS) {
      j = k;
      // 检查是否可以反转
      while (headS && j) {
        cache[k - j] = headS;
        headS = headS.next;
        j--;
      }
      // 不需要反转
      if (j > 0) {
        break;
      }
      // 执行反转
      for (let i = k - 1; i >= 0; i--) {
        headR.next = cache[i];
        headR = headR.next!;
      }
      // 最后一个节点的 next 应该设置为 null
      // 防止循环链表
      headR.next = null;
    }

    if (j > 0) {
      headR.next = cache[0];
    }

    return result.next;
  };
}

mountNsToGlobal($25_reverse_nodes_in_k_group);
// include (./utils/mount-to-global.ts)

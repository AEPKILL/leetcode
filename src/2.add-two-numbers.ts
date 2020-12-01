/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.37%)
 * Total Accepted:    739.6K
 * Total Submissions: 2.4M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 *
 */
namespace $2_add_tow_numbers {
  export const addTwoNumbers = function(
    l1: Nullable<ListNode<number>>,
    l2: Nullable<ListNode<number>>
  ) {
    if (l1 === null || l2 === null) {
      return null;
    }
    if (l1 === null) {
      return l2;
    }
    if (l2 === null) {
      return l1;
    }
    const result = new ListNode(0);
    // 当前处理的节点
    let head = result;
    while (true) {
      if (l1) {
        head.val += l1.val;
        l1 = l1.next;
      }
      if (l2) {
        head.val += l2.val;
        l2 = l2.next;
      }
      if (head.val >= 10) {
        // 十位
        const tenBits = (head.val / 10) >> 0;
        // 个位
        const bits = head.val % 10;
        head.val = bits;
        head = head.next = new ListNode(tenBits);
      } else if (l1 || l2) {
        head = head.next = new ListNode(0);
      } else {
        break;
      }
    }

    return result;
  };
}

mountNsToGlobal($2_add_tow_numbers);
// include (./utils/mount-to-global.ts)

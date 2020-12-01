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

namespace $23_merge_k_sorted_lists_2 {
  export const mergeKLists = function(
    lists: Array<NListNode | null>
  ): NListNode | null {
    // for testcase '[]'
    if (!lists.length) {
      return null;
    }
    // 合并的时候两两合并，防止一个 list 越来越长导致
    while (lists.length > 1) {
      const merged: Array<NListNode | null> = [];
      const len = lists.length;
      for (let i = 0; i < len - 1; i += 2) {
        const l1 = lists[i];
        const l2 = lists[i + 1];
        const mergeResult = mergeSortedList(l1, l2);
        merged.push(mergeResult);
      }
      if (len % 2) {
        merged.push(lists[len - 1]);
      }
      lists = merged;
    }
    return lists[0];
  };
}

// include(./utils/merge-sorted-list.ts)
// include(./utils/mount-to-global.ts)

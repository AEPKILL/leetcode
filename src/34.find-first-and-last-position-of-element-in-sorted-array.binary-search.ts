/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (32.80%)
 * Total Accepted:    265.1K
 * Total Submissions: 805.3K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * If the target is not found in the array, return [-1, -1].
 *
 * Example 1:
 *
 *
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Example 2:
 *
 *
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 *
 */

// include (./utils/binary-search.ts)

namespace $34_find_first_and_last_position_of_element_in_sorted_array_binary_search {
  // O(2logn) 72ms
  const isGreater = (s: number, t: number) => s > t;
  const isLess = (s: number, t: number) => s < t;
  export const searchRange = function(nums: number[], target: number) {
    const left = binarySearch(nums, target, {
      isGreater,
      isLess,
      findPosition: FIND_TARGET_INDEX.MIN
    });
    if (left === -1) {
      return [-1, -1];
    }
    return [
      left,
      binarySearch(nums, target, {
        isGreater,
        isLess,
        findPosition: FIND_TARGET_INDEX.MAX
      })
    ];
  };
}

mountNsToGlobal(
  $34_find_first_and_last_position_of_element_in_sorted_array_binary_search
);
// include (./utils/mount-to-global.ts)

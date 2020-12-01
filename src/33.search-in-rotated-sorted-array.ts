/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (32.56%)
 * Total Accepted:    362.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 *
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 *
 * You are given a target value to search. If found in the array return its
 * index, otherwise return -1.
 *
 * You may assume no duplicate exists in the array.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * Example 1:
 *
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 *
 */

namespace $33_search_in_rotated_sorted_array {
  export const search = function(nums: number[], target: number) {
    if (nums.length === 0) {
      return -1;
    }
    const maxRight = nums.length - 1;

    let left = 0;
    let right = maxRight;

    while (true) {
      const mid = Math.ceil((left + right) / 2);
      const midValue = nums[mid];
      if (midValue === target) {
        return mid;
      }

      // 搜索完成没有找到
      if (left >= right) {
        break;
      }

      if (isDescSorted(nums, mid, right)) {
        // 右边是升序
        // 包含在右边
        if (isBetween(target, nums, mid, right)) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      } else {
        // 左边是升序
        // 包含在左边
        if (isBetween(target, nums, left, mid)) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return -1;
  };

  /**
   * 判断一侧是否是升序
   *
   * @param {number[]} nums
   * @param {number} left
   * @param {number} right
   * @return {boolean}
   */
  function isDescSorted(nums: number[], left: number, right: number) {
    return nums[right] >= nums[left];
  }

  /**
   * 判断数字是否在范围中
   *
   * @param {number} target
   * @param {number[]} nums
   * @param {number} left
   * @param {number} right
   */
  function isBetween(
    target: number,
    nums: number[],
    left: number,
    right: number
  ) {
    return nums[left] <= target && nums[right] >= target;
  }
}

mountNsToGlobal($33_search_in_rotated_sorted_array);
// include (./utils/mount-to-global.ts)

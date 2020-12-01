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
namespace $34_find_first_and_last_position_of_element_in_sorted_array {

  // 二分查找到中心 然后从中心向两边查找 最坏情况 O(logn+n)
  // 72ms
  export const searchRange = function(nums: number[], target: number) {
    let start = 0;
    let end = nums.length - 1;
    do {
      const mid = Math.ceil((start + end) / 2);
      if (nums[mid] === target) {
        return findRange(nums, mid);
      } else if (nums[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } while (start <= end);
    return [-1, -1];
  };

  function findRange(nums: number[], index: number) {
    const target = nums[index];

    let start = index;
    let end = index;

    while (true) {
      if (start - 1 >= 0 && nums[start - 1] === target) {
        start--;
      } else if (end + 1 <= nums.length - 1 && nums[end + 1] === target) {
        end++;
      } else {
        break;
      }
    }

    return [start, end];
  }
}

mountNsToGlobal($34_find_first_and_last_position_of_element_in_sorted_array);
// include (./utils/mount-to-global.ts)

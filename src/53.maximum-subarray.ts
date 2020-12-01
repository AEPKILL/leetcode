/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (42.83%)
 * Total Accepted:    478.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * Example:
 *
 *
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 *
 * Follow up:
 *
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 *
 */

/**
 * 全排列复杂度也太高了吧
 *
 * 1. 依次累加当前项
 * 2. --> 如果累加结果小于 0 那么用下一项做累加值
 * 3. --> 如果累加结果大于等于 0 那么当前序列是可以复用的
 * 4. 判断是当前累加序列值大还是上一个累加序列值大
 */

namespace $53_maximum_subarray {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  export const maxSubArray = function(nums: number[]) {
    if (!nums.length) {
      return 0;
    }
    let res = nums[0];
    let sums = 0;
    for (let i = 0; i < nums.length; i++) {
      const current = nums[i];
      if (sums >= 0) {
        sums += current;
      } else {
        sums = current;
      }
      res = Math.max(sums , res);
    }
    return res;
  };
}

mountNsToGlobal($53_maximum_subarray);

// include (./utils/mount-to-global.ts)

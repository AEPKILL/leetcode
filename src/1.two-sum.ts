/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (40.14%)
 * Total Accepted:    1.4M
 * Total Submissions: 3.5M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * Example:
 *
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 *
 *
 */
namespace $1_two_sum {
  export const twoSum = function(nums: number[], target: number) {
    const numMap = new Map<number, number>();

    for (let index1 = 0; index1 < nums.length; index1++) {
      numMap.set(nums[index1], index1);
    }

    for (let index1 = 0; index1 < nums.length; index1++) {
      const num1 = nums[index1];
      const index2 = numMap.get(target - num1); // index2
      if (index2 !== undefined && index1 !== index2) {
        return [index1, index2];
      }
    }

    throw new RangeError(`can't find`);
  };
}

mountNsToGlobal($1_two_sum);

/**
 * target = num1 + num2
 * 使用 num2 作为 map 的 key, num2 的 index 作为 map 的 value
 * 当 target - num1 是一个 map 的 key 时
 * 如果 target - num1 也在这个 map 中
 * 那么直接返回这两个数的 index 即可
 */

// include(./utils/mount-to-global.ts)

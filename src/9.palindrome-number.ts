/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (41.46%)
 * Total Accepted:    493.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 *
 * Example 1:
 *
 *
 * Input: 121
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 *
 *
 * Follow up:
 *
 * Coud you solve it without converting the integer to a string?
 *
 */

namespace $9_is_palindrome {
  export const isPalindrome = function(x: number) {
    if (x < 0) {
      return false;
    }
    return x === reverseNumber(x);
  };

  // ref: [7.reverse-integer.ts](https://leetcode.com/problems/reverse-integer/description/)
  function reverseNumber(x: number) {
    let num = x;
    let result = 0;

    while (num) {
      // 余数
      const remainder = num % 10;
      num = (num / 10) >> 0;
      result = result * 10 + remainder;
    }

    return result;
  }
}

mountNsToGlobal($9_is_palindrome);
// include (./utils/mount-to-global.ts)

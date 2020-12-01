/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (26.04%)
 * Total Accepted:    731.4K
 * Total Submissions: 2.8M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 *
 * Example 3:
 *
 *
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 *
 *
 *
 *
 *
 */

/**
 * 利用一个"滑窗"
 * beforeLastMaxNoRepeat -> i 中间的字符串是一个没用重复的字符的子串
 */
namespace $3_length_of_longest_substring {
  /**
   * 90ms+
   */
  export const lengthOfLongestSubstring = function(s: string) {
    const wordLastIndex = new Map<string, number>();
    let maxLength = 0;
    let beforeLastMaxNoRepeat = -1;
    for (let i = 0; i < s.length; i++) {
      const word = s[i];
      if (wordLastIndex.has(word)) {
        beforeLastMaxNoRepeat = Math.max(
          beforeLastMaxNoRepeat,
          wordLastIndex.get(word)!
        );
      }

      wordLastIndex.set(word, i);
      maxLength = Math.max(maxLength, i - beforeLastMaxNoRepeat);
    }
    return maxLength;
  };
}

// console.log(lengthOfLongestSubstring('hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'));

// /**
//  * @param {string} s
//  * @return {number}
//  *
//  * 348ms
//  */
// var lengthOfLongestSubstring = function(s) {
//   // 求最长无重复字符的子串
//   let result = 0;
//   let substring = '';
//   for (let i = 0; i < s.length; i++) {
//     let subLen = 0;
//     for (let j = i; j < s.length; j++) {
//       if (substring.includes(s[j])) {
//         break;
//       }
//       subLen++;
//       substring += s[j];
//     }
//     substring = '';
//     result = Math.max(result, subLen);
//     // 剩余长度小于当前最长结果时直接退出
//     if (s.length - i <= result) {
//       break;
//     }
//   }
//   return result;
// };

mountNsToGlobal($3_length_of_longest_substring);
// include (./utils/mount-to-global.ts)

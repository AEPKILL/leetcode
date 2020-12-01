/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (32.13%)
 * Total Accepted:    244.2K
 * Total Submissions: 759.8K
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 *
 * If the last word does not exist, return 0.
 *
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 *
 * Example:
 *
 * Input: "Hello World"
 * Output: 5
 *
 *
 */

namespace $58_length_of_last_word__reg {
  // 90ms+
  // export const lengthOfLastWord = function(s: string) {
  //   return s.match(/([a-zA-Z]*)\s*$/)![1].length;
  // };

  // 65ms +
  export const lengthOfLastWord = function(s: string) {
    const arr = s.split(/\s+/).filter(str => str.length);
    if (arr.length) {
      return arr[arr.length - 1].length;
    }
    return 0;
  };
}

mountNsToGlobal($58_length_of_last_word__reg);
// include (./utils/mount-to-global.ts)

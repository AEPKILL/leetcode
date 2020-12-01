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

namespace $58_length_of_last_word {
  const letterReg = /[a-zA-Z]/;
  // 70ms+
  export const lengthOfLastWord = function(s: string) {
    let len = 0;
    s = s.trimRight();
    if (s.length) {
      for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        if (letterReg.test(char)) {
          len++;
        } else {
          break;
        }
      }
    }
    return len;
  };
}

mountNsToGlobal($58_length_of_last_word);
// include (./utils/mount-to-global.ts)

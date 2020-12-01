/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.86%)
 * Total Accepted:    396.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */

namespace $14_longest_common_prefix {
  export const longestCommonPrefix = function(strs: string[]): string {
    let commonPrefix = '';
    let index = 0;
    if (strs.length === 0) {
      return commonPrefix;
    }
    if (strs.length === 1) {
      return strs[0];
    }
    const orign = strs[0];
    while (true) {
      for (let i = 1; i < strs.length; i++) {
        const str = strs[i];
        const char = str[index];
        if (index >= str.length) {
          return commonPrefix;
        }
        if (char !== orign[index]) {
          return commonPrefix;
        }
      }
      commonPrefix += orign[index];
      index++;
    }
  };
}

mountNsToGlobal($14_longest_common_prefix);
// include (./utils/mount-to-global.ts)

/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (35.69%)
 * Total Accepted:    509.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 *
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 *
 *
 * Input: "()"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: "(]"
 * Output: false
 *
 *
 * Example 4:
 *
 *
 * Input: "([)]"
 * Output: false
 *
 *
 * Example 5:
 *
 *
 * Input: "{[]}"
 * Output: true
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
namespace $20_is_valid {
  const symbolMap = new Map<string, string>([
    ['{', '}'],
    ['(', ')'],
    ['[', ']']
  ]);
  export const isValid = function(s: string): boolean {
    const stack = new Stack<string>();
    for (const char of s) {
      // 开始符号
      if (symbolMap.has(char)) {
        stack.push(char);
      } else {
        // 结束符号
        if (stack.empty() || symbolMap.get(stack.pop()!) !== char) {
          return false;
        }
      }
    }
    return stack.empty();
  };
  // include (./utils/stack.ts)
}

mountNsToGlobal($20_is_valid);
// include (./utils/mount-to-global.ts)

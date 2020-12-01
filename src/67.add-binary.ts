/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (37.99%)
 * Total Accepted:    282.1K
 * Total Submissions: 738.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 *
 * The input strings are both non-empty and contains only characters 1 or 0.
 *
 * Example 1:
 *
 *
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Example 2:
 *
 *
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 */
namespace $67_add_binary {
  /**
   * @param {string} a
   * @param {string} b
   * @return {string}
   */
  export function addBinary(a: string, b: string) {
    let result = '';
    let carry = false;
    let iA = a.length - 1;
    let iB = b.length - 1;
    while (iA >= 0 || iB >= 0) {
      let current = 0;
      if (iA >= 0) {
        current += stoi(a[iA--] as BinaryString);
      }
      if (iB >= 0) {
        current += stoi(b[iB--] as BinaryString);
      }
      if (carry) {
        current++;
      }
      carry = current >= 2;
      result = (current % 2) + result;
    }
    if (carry) {
      return '1' + result;
    }
    return result;
  }
  function stoi(s: BinaryString) {
    return s === '0' ? 0 : 1;
  }
  type BinaryString = '0' | '1';
}
mountNsToGlobal($67_add_binary);

// include (./utils/mount-to-global.ts)

/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 *
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (23.17%)
 * Total Accepted:    125.7K
 * Total Submissions: 540.6K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * You are given a string, s, and a list of words, words, that are all of the
 * same length. Find all starting indices of substring(s) in s that is a
 * concatenation of each word in words exactly once and without any intervening
 * characters.
 *
 * Example 1:
 *
 *
 * Input:
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * Output: [0,9]
 * Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar"
 * respectively.
 * The output order does not matter, returning [9,0] is fine too.
 *
 *
 * Example 2:
 *
 *
 * Input:
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * Output: []
 *
 *
 */
/**
 *
 * tempMap.clear() 比每次 new Map() 快 4ms(172->168ms);
 *
 *
 *
 */

namespace $30_substring_with_concatenation_of_all_words {
  /**
   * @param {string} s
   * @param {string[]} words
   * @return {number[]}
   */
  export const findSubstring = function(s: string, words: string[]): number[] {
    if (s.length <= 0 || words.length <= 0) {
      return [];
    }
    const wordWidth = words[0].length;
    const wordsLength = wordWidth * words.length;
    const result: number[] = [];
    const wordMap = new Map<string, number>();

    // 初始化一个 Hash 表，key 为每个字符串 value 为每个字符串出现的次数
    for (const word of words) {
      if (word.length !== wordWidth) {
        return [];
      } else {
        const wordCount = (wordMap.get(word) || 0) + 1;
        wordMap.set(word, wordCount);
      }
    }
    const tempMap = new Map<string, number>();
    for (let i = 0; i <= s.length - wordsLength; i++) {
      tempMap.clear();
      for (let j = i; j < i + wordsLength; j += wordWidth) {
        const str = s.substr(j, wordWidth);
        if (wordMap.has(str)) {
          tempMap.set(str, (tempMap.get(str) || 0) + 1);
        } else {
          break;
        }
      }
      if (mapEqual(wordMap, tempMap)) {
        result.push(i);
      }
    }

    return result;
  }
  // NOTE "有没有更好的方式优化这个对比函数?"
  function mapEqual(m1: Map<string, number>, m2: Map<string, number>) {
    if (m1.size !== m2.size) {
      return false;
    }
    for (const key of m1.keys()) {
      if (m1.get(key) !== m2.get(key)) {
        return false;
      }
    }
    return true;
  }
}

mountNsToGlobal($30_substring_with_concatenation_of_all_words);
// include (./utils/mount-to-global.ts)

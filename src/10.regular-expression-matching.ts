/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 *
 * https://leetcode.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (24.84%)
 * Total Accepted:    271.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement regular expression
 * matching with support for '.' and '*'.
 *
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 *
 * The matching should cover the entire input string (not partial).
 *
 * Note:
 *
 *
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like . or *.
 *
 *
 * Example 1:
 *
 *
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 *
 *
 * Example 2:
 *
 *
 * Input:
 * s = "aa"
 * p = "a*"
 * Output: true
 * Explanation: '*' means zero or more of the precedeng element, 'a'.
 * Therefore, by repeating 'a' once, it becomes "aa".
 *
 *
 * Example 3:
 *
 *
 * Input:
 * s = "ab"
 * p = ".*"
 * Output: true
 * Explanation: ".*" means "zero or more (*) of any character (.)".
 *
 *
 * Example 4:
 *
 *
 * Input:
 * s = "aab"
 * p = "c*a*b"
 * Output: true
 * Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore
 * it matches "aab".
 *
 *
 * Example 5:
 *
 *
 * Input:
 * s = "mississippi"
 * p = "mis*is*p*."
 * Output: false
 *
 *
 */

namespace $10_regular_expression_matching {
  // 不使用缓存大概 200ms+
  // 使用缓存大概 80 - 100ms

  export const isMatch = function(s: string, p: string) {
    return isMatchCore(s, p, 0, 0, new Map());
  };

  function isMatchCore(
    s: string,
    p: string,
    i: number,
    j: number,
    cache: Map<string, boolean>
  ): boolean {
    const key = `${i}_${j}`;
    let matchLens = 0;
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    while (j < p.length) {
      const char = s[i];
      const matchChar = p[j];
      const isLayzMatchChar = p[j + 1] === '*';

      // 当前符号被星号修饰
      // 对当前符号进行懒查询
      // 当前字符可以忽略也可以重复 N 次
      // 尝试匹配最少字符
      if (isLayzMatchChar) {
        while (i < s.length) {
          // 首先尝试不匹配任何字符 因为 * 号修饰的模式串是可以省略的
          const isMatched = isMatchCore(s, p, i, j + 2, cache);
          if (isMatched) {
            return setCache(cache, key, true);
          }
          matchLens = commonSingleCharMatch(s[i], matchChar);
          // 失去匹配
          if (!matchLens) {
            break;
          }
          i++;
        }
        j += 2;
      } else {
        // 单字符匹配
        matchLens = commonSingleCharMatch(char, matchChar);
        if (!matchLens) {
          return setCache(cache, key, false);
        }
        i++;
        j++;
      }
    }

    return setCache(cache, key, i === s.length);
  }

  // 通用单字符匹配规则
  function commonSingleCharMatch(ch: string, matchCh: string) {
    if (ch === matchCh || matchCh === '.') {
      return 1;
    }
    return 0;
  }

  /**
   * 设置缓存并返回当前值
   */
  function setCache(
    cacheStore: Map<string, boolean>,
    key: string,
    value: boolean
  ) {
    cacheStore.set(key, value);
    return value;
  }
}

mountNsToGlobal($10_regular_expression_matching);
// include (./utils/mount-to-global.ts)

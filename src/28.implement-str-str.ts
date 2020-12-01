/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
namespace $28_implement_str_str {
  export function strStr(haystack: string, needle: string) {
    return haystack.indexOf(needle);
  }
}

mountNsToGlobal($28_implement_str_str);
// include (./utils/mount-to-global.ts)

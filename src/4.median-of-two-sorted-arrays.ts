/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (25.27%)
 * Total Accepted:    374.6K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 *
 * You may assume nums1 and nums2 cannot be both empty.
 *
 * Example 1:
 *
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 *
 *
 * Example 2:
 *
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 *
 *
 */

namespace $4_find_median_sorted_arrays {
  /**
   * 归并  O((M+N) / 2)
   * 用空间换时间 140 - 144ms
   */
  export const findMedianSortedArrays = function(
    nums1: number[],
    nums2: number[]
  ) {
    const lenN1 = nums1.length;
    const lenN2 = nums2.length;
    const median = Math.ceil((lenN1 + lenN2 + 1) / 2);
    const isOddLen = (lenN1 + lenN2) % 2 === 0;
    const result = new Array<number>(median);

    let i = 0; // point for nums1
    let j = 0; // point for nums2

    for (let k = 0; k < median; k++) {
      if (i < lenN1 && j < lenN2) {
        // tslint:disable-next-line:prefer-conditional-expression
        if (nums1[i] < nums2[j]) {
          result[i + j] = nums1[i++];
        } else {
          result[i + j] = nums2[j++];
        }
      } else if (i < lenN1) {
        result[i + j] = nums1[i++];
      } else if (j < lenN2) {
        result[i + j] = nums2[j++];
      }
    }

    if (isOddLen) {
      return (result[median - 1] + result[median - 2]) / 2;
    } else {
      return result[median - 1];
    }
  };
}

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  *
//  * 140 - 144ms
//  */
// var findMedianSortedArrays = function(nums1, nums2) {
//   const lenN1 = nums1.length;
//   const lenN2 = nums2.length;
//   const median = Math.ceil((lenN1 + lenN2 + 1) / 2);
//   const isOddLen = (lenN1 + lenN2) % 2 === 0;
//   const result = [0, 0];

//   let i = 0; // point for nums1
//   let j = 0; // point for nums2

//   for (let k = 0; k < median; k++) {
//     if (i < lenN1 && j < lenN2) {
//       if (nums1[i] < nums2[j]) {
//         setResultNums(result, nums1[i++]);
//       } else {
//         setResultNums(result, nums2[j++]);
//       }
//     } else if (i < lenN1) {
//       setResultNums(result, nums1[i++]);
//     } else if (j < lenN2) {
//       setResultNums(result, nums2[j++]);
//     }
//   }

//   if (isOddLen) {
//     return (result[0] + result[1]) / 2;
//   } else {
//     return result[1];
//   }
// };

// function setResultNums(nums, value) {
//   nums[0] = nums[1];
//   nums[1] = value;
// }

mountNsToGlobal($4_find_median_sorted_arrays);
// include (./utils/mount-to-global.ts)

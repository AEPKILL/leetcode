/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 *
 * https://leetcode.com/problems/candy/description/
 *
 * algorithms
 * Hard (27.51%)
 * Total Accepted:    96.7K
 * Total Submissions: 349.1K
 * Testcase Example:  '[1,0,2]'
 *
 * There are N children standing in a line. Each child is assigned a rating
 * value.
 *
 * You are giving candies to these children subjected to the following
 * requirements:
 *
 *
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 *
 *
 * What is the minimum candies you must give?
 *
 * Example 1:
 *
 *
 * Input: [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2,
 * 1, 2 candies respectively.
 *
 *
 * Example 2:
 *
 *
 * Input: [1,2,2]
 * Output: 4
 * Explanation: You can allocate to the first, second and third child with 1,
 * 2, 1 candies respectively.
 * ⁠            The third child gets 1 candy because it satisfies the above two
 * conditions.
 *
 *
 */

namespace $155_candy {
  export const candy = function(ratings: number[]): number {
    const res = new Array<number>(ratings.length).fill(1);

    // 正向遍历 如果 i > i - 1 的分数
    // 那么 i 得到的糖果应该比 i - 1 的糖果多一个
    for (let i = 1; i < ratings.length; i++) {
      if (ratings[i] > ratings[i - 1]) {
        res[i] = res[i - 1] + 1;
      }
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i + 1] && res[i] <= res[i + 1]) {
        res[i] = res[i + 1] + 1;
      }
    }

    return res.reduce((a, b) => a + b, 0);
  };
}

mountNsToGlobal($155_candy);

// include (./utils/mount-to-global.ts)

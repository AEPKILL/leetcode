/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 *
 * https://leetcode.com/problems/reverse-bits/description/
 *
 * algorithms
 * Easy (30.24%)
 * Total Accepted:    172.2K
 * Total Submissions: 566K
 * Testcase Example:  '00000010100101000001111010011100'
 *
 * Reverse bits of a given 32 bits unsigned integer.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: 00000010100101000001111010011100
 * Output: 00111001011110000010100101000000
 * Explanation: The input binary string 00000010100101000001111010011100
 * represents the unsigned integer 43261596, so return 964176192 which its
 * binary representation is 00111001011110000010100101000000.
 *
 *
 * Example 2:
 *
 *
 * Input: 11111111111111111111111111111101
 * Output: 10111111111111111111111111111111
 * Explanation: The input binary string 11111111111111111111111111111101
 * represents the unsigned integer 4294967293, so return 3221225471 which its
 * binary representation is 10101111110010110010011101101001.
 *
 *
 *
 * Note:
 *
 *
 * Note that in some languages such as Java, there is no unsigned integer type.
 * In this case, both input and output will be given as signed integer type and
 * should not affect your implementation, as the internal binary representation
 * of the integer is the same whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement
 * notation. Therefore, in Example 2 above the input represents the signed
 * integer -3 and the output represents the signed integer -1073741825.
 *
 *
 *
 *
 * Follow up:
 *
 * If this function is called many times, how would you optimize it?
 *
 */
namespace $190_reverse_bits {
  /**
   * @param {number} n - a positive integer
   * @return {number} - a positive integer
   */
  export const reverseBits = function(n: number) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
      // 这里有个坑 不能用位移来代替下面的乘法和加法运算
      // 根据 Javascript 位移操作符(https://www.ecma-international.org/ecma-262/5.1/#sec-11.7.1)
      // 位移操作结果是一个有符号数，例如 (1 << 31)
      // 而 Leetcode 又是根据无符号数来判定的，于是会出错
      // 1*32 === -1 有符号
      // 1*32 === 4294967294 无符号
      // javascript 认为二者不相等 ...
      // 可以最后 x >>> 0 来转换一个有符号数为无符号数
      // result *= 2;
      // result += n & 1;
      // n >>>= 1;
      result = (result << 1) | ((n >>> i) & 1);
    }
    return result >>> 0;
  };
}

mountNsToGlobal($190_reverse_bits);
// include (./utils/mount-to-global.ts)

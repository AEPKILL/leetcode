/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (54.52%)
 * Total Accepted:    405.6K
 * Total Submissions: 739.4K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the inorder traversal of its nodes' values.
 *
 * Example:
 *
 *
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * Output: [1,3,2]
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
namespace $94_inary_tree_inorder_traversal {
  export const inorderTraversal = function(root: TreeNode<number>): number[] {
    return traversal(root, []);
  };
  // O(n) Zone(n)
  function traversal(root: TreeNode<number>, result: number[]) {
    if (root) {
      traversal(root.left, result);
      result.push(root.val);
      traversal(root.right, result);
    }
    return result;
  }
}

mountNsToGlobal($94_inary_tree_inorder_traversal);

// include (./utils/mount-to-global.ts)

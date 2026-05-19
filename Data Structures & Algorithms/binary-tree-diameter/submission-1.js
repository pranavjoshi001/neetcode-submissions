/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0;

// Longest path through any node = leftHeight (traverse left till you find leaf node from given node) + rightHeight (same here but in right direction)
// so if you have node [1(root), 2(level 2),3(level 3), 4(level 3), 5(level 4)]
// then if you are at node 2 then left is 2->3, 3->5 = 2
//                                right is 2->4 = 1
// left + right = 2+1 = 3 meaning 5->3->2>4 traversing is 3 
// do this for every node and see which is max which is your max diameter.
        function dfs(node) {
            if (!node) {
                return 0;
            }

            const left = dfs(node.left);
            const right = dfs(node.right);

            diameter = Math.max(diameter, left + right);

            return 1 + Math.max(left, right);
        }

        dfs(root);

        return diameter;
    }
}

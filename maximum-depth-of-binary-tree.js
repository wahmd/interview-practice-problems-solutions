/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return maxDepthRecursive(root, 0, 0); 
};


function maxDepthRecursive(root, depth, max) {

    if (!root) {
        return max;
    } 

    depth++;
    
    if (depth > max)  {
        max = depth;
    }

    const leftMax = maxDepthRecursive(root.left, depth, max);
    const rightMax = maxDepthRecursive(root.right, depth, max);

    return Math.max(leftMax, rightMax)
}

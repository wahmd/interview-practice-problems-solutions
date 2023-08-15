/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let s=0;
    let e = nums.length - 1;

    if (nums.length === 1) {
        return nums[0];
    }

    while(s < e && s !== e && e-s !== 1) {
        const mid = parseInt((s + e) / 2, 10);

        if (nums[s] < nums[mid]) {
            s = mid; 
        } else {
            e = mid
        }
    }
    
    if (nums[s] < nums[e]) {
        if (e === nums.length - 1) {
            // means sorted list
            return nums[0];
        }
        
        return nums[e]; 
    } 
    
    if (nums[s] > nums[e]) {
        return nums[e]
    }
};

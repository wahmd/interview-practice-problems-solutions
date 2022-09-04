/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const index = {};
    
    nums.forEach((num,i) => {
        index[target-num] = i;
    })
    
    for (let i=0; i<nums.length; i++ ){
        if (index[nums[i]] && index[nums[i]] !== i) {
            return [i, index[nums[i]]];
        }
    }
    
    return [];
};

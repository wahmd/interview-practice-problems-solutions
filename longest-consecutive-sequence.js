/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    const hash = createHash(nums);

    let max = 0;

    for (let i = 0 ; i < nums.length ; i++ ){
        
        const prev = nums[i] - 1;

        // is a starting value? 
        if ( !hash[prev] ) {

            const sequence = [];
            
            sequence.push(nums[i]);
            
            let next = nums[i] + 1;

            while (hash[next]) {
                sequence.push(next); 
                next = next + 1; 
            }

            max = Math.max(max, sequence.length);
        }  
    }

    return max;
};


function createHash(nums) {
    const hash = {};

    for (let i = 0; i < nums.length ; i++) {
        hash[nums[i]] = true;
    }
}

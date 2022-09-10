/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const freqHash =  {};
    
    let maxFreq = 0;
    nums.forEach(num => {
        if (freqHash[num]) {
            freqHash[num] = freqHash[num] + 1;
        } else {
            freqHash[num] = 1
        }
        
        if (maxFreq < freqHash[num]) {
            maxFreq = freqHash[num];
        }
    })
    
  
    const sorted = [];
    
    for (let i=0 ; i< maxFreq + 1 ; i++ ){
        sorted.push([]);
    }

    const pushed = {};
    
    nums.forEach(num => {
        if (!pushed[num]) {
            const freq = freqHash[num];
            sorted[freq].push(num);
            pushed[num] = true
        }
    })
    
    const result = [];
    
    
    console.log('sorted: ', sorted);
    
    let index = maxFreq; 
    
    while( k > 0 ) {
        result.push(...sorted[index]);
        k = k - sorted[index].length; 
        index--;
    }
    
    return result;
};

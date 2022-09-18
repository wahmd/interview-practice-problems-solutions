/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefix = [];
    const postfix = [];
    
    let preProd = 1;
    
    
    nums.forEach(num => {
        const v1 = preProd * num;
        preProd = v1; 
        prefix.push(v1);
    })
    
    let postProd = 1;
    for (let i=nums.length -1 ; i>=0 ; i--) {
        const v1 = postProd * nums[i];
        postProd = v1;
        postfix.unshift(v1);
    }
    
    
    const answer = [];
    for (let i = 0 ;i<nums.length; i++) {
        if (i+1 < nums.length && i-1 >=0 ){
            answer.push(prefix[i-1] * postfix[i+1])   
        } else if (i+1 < nums.length) {
            answer.push(postfix[i+1])
        } else if (i-1 >= 0) {
            answer.push(prefix[i-1]);
        }
       
    }
    
    console.log(prefix);
    console.log(postfix);
    return answer;
};

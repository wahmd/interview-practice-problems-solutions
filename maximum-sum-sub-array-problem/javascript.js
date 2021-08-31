/*
    Given an array Arr[] of N integers. Find the contiguous 
    sub-array(containing at least one number) which has the 
    maximum sum and return its sum.
    solution: O(n) (kadane's algorithm)
*/


const maxSubArray = (arr) => {
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];
    
    arr.forEach(element => {
        maxCurrent = Math.max(element, maxCurrent + element);
        maxGlobal = maxCurrent > maxGlobal ? maxCurrent : maxGlobal;
    });
    return maxGlobal;
}

console.log("Maximum sub-array sum: ", maxSubArray([1, 2, -3, 4, -10, 1, 5, 6, -9]));
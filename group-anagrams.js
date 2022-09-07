/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    
    const sorted = strs.map(str => str.split('').sort().join(''));
    
    const index = {}
    
    sorted.forEach((str,i) => {
        if (index[str]) {
            index[str].push(strs[i]);
        } else {
            index[str] = [strs[i]];
        }    
    })
    
    return [...Object.values(index)];
    
};

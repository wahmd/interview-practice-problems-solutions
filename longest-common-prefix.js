/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]    
    for (let i=1 ; i<strs.length ; i++ ){
        const common = findCommon(prefix, strs[i]);
        prefix = common;
    }
    
    return prefix;
};


function findCommon(s1,s2) {
    const common = [];
    let breaked = false;
    
    let i = 0;
    let difference = false
    while( !difference && i < Math.max(s1.length, s2.length)) {
        if(s1[i] === s2[i]) {
            common.push(s1[i]);    
        }else {
            difference = true;
        }
        i++;
    }
    
    
    return common.join('');
}

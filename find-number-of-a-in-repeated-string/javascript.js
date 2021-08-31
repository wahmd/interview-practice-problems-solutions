/*
    Repeate string n times and find the number of 'a' in that repeated string:
    For example:
    aba will be repeated 10 time will form abaabaabaa, the number of a's in this string is 7, 
    Note: a is case sensitive, you only need to do it for lowercase a
*/

const countChar = (c, str) => str.split(c).length - 1;

const findARepeated = (str, n) => {
    if (countChar('a', str) === 0) {
        return 0;
    } else if (str.length === n) {
        return countChar('a', str);
    } else if (str.length > n) {
        return countChar('a', str.slice(0, n));
    } else {
        const easyPart = Math.floor(n / str.length) * countChar('a', str);
        const remainder = n % str.length;
        const extraPart = countChar('a', str.slice(0, remainder));   
        return easyPart + extraPart;
    }
}



const main = () => {
    console.log('main case: ', findARepeated('aba', 10));
    console.log('test case 1: ', findARepeated('ababndsjndskjfsndkjfnjksdfnjmassaaaadnanjfjfnjdjnksfnsdnufsdfmoisdmofiiosdijfnisdofnoidonifnisdfniosdinfsoeinfananaaaansdjfsnkjdfsdnfccaaaaaa', 4842560065861618921562552));
    console.log('test case 2: ', findARepeated('ceebbcb', 817723));
    console.log('test case 3: ', findARepeated('kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm', 736778906400));
}

main();


/**
 * *Example
 * ? input = ['raja', 'rajin', 'rapi', 'raya']
 * ? output = 'ra'
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs = null || strs.length == null) {
        return "";
    }
    var strRoot = strs[0];

    for(const str of strs){
        console.log(str);
        let i = 0;

        while(i < str.length && strRoot[i] === str[i]){
            strRoot = strRoot.slice(0, 1);
        }

    }

    return strRoot;

};
const strs = ["raja", "rajin", "rapi", "raya"];
console.log(longestCommonPrefix(strs))

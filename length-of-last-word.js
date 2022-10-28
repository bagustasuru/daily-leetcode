/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    const trim = s.trim(); // Trim white space before and after
    const array = trim.split(/\s+/g); // split to array, using regex \s+
    const getLastIndex = array.length - 1; // get last index of array
    const getLengLastWord = array[getLastIndex].length;

    return getLengLastWord;
};

console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("    This       is a demo      text"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
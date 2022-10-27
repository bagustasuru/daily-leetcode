/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let firstIndex = digits[0];
    const length = digits.length;
    
    if (firstIndex == '0') {
        firstIndex = 1;
    }

    if (length <= 0 || length >= 9) {
        return [];
    }

    let result = String(Number(digits.join('')) + 1).split('');
    

    return result;

};

console.log(plusOne(['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2']));
console.log(plusOne([]));
console.log(plusOne(['1', '2', '3', '4']));
console.log(plusOne(['9']));
console.log(plusOne(['9','9']));
console.log(plusOne(['0']));
console.log(plusOne([0, 1, 4]));
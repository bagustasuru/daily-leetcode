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

    if (length <= 0 || length >= 100) {
        return [];
    }

    let result = String(BigInt(digits.join('')) + BigInt(1)).split('');
    

    return result;

};

console.log(plusOne(['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2']));
console.log(plusOne([9,8,7,6,5,4,3,2,1,0]));
console.log(plusOne([]));
console.log(plusOne(['1', '2', '3', '4']));
console.log(plusOne(['9']));
console.log(plusOne(['9','9']));
console.log(plusOne(['0']));
console.log(plusOne([0, 1, 4]));
console.log(plusOne([9]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
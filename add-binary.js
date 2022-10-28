/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const add = BigInt('0b'+a) + BigInt('0b'+b);
    const sum = add.toString(2);

    return sum;
};

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));
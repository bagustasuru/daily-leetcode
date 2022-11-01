/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    if (n < 10) {
        if (n === 1 || n === 7) {
            return true;
        }
        return true;
    }

    let total = 0;

    while (n > 0) {
        let square = n % 10;
        total += square**2;
        n -= square;
        n /= 10;

        console.log(square);
    }
    if(total === 1){
        return true
    }
    return isHappy(total);
};

console.log(isHappy(7));
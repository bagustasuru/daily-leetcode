// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
    
    let length = nums.length;
    let output = 0;

    for(var i = 0; i <= length; i++){
        output = output ^= nums[i];
    }

    return output;

};

let single = singleNumber([1,1,2,2,3,5,3]);
console.log(single);

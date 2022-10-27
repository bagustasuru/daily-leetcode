/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = nums.length-1; i >= 2; i--){
        if(nums[i-2] == nums[i]) {
            nums.splice(i, 1);
            console.log(nums);
        }
    }
};

const input = [0,0,1,1,1,1,2,3,3];
const output = removeDuplicates(input);

// console.log(output);
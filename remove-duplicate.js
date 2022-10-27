/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let insertIndex = 1;
    
    for(let i = 1; i < nums.length; i++){

        if(nums[i - 1] != nums[i]){
            nums[insertIndex] = nums[i];
            insertIndex++; 
        }

    }

    return insertIndex;

};

const input = [1,1,1,2,2,3];
const output = removeDuplicates(input);

console.log(output);
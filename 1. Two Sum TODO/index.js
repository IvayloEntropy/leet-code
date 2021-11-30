/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const target = 9
const nums = [2,7,11,15]

var twoSum = function(nums, target) {
    for (let numIndex = 0; numIndex < nums.length; numIndex++) {
        const numElement = nums[numIndex];
        for (let numIndexCheck = 0; numIndexCheck < nums.length; numIndexCheck++) {
            const numCheckElement = nums[numIndexCheck];
            if (numElement + numCheckElement === target) {
                return [nums.indexOf(numElement), nums.indexOf(numCheckElement)]
            }
        }
    }
};

console.log(twoSum(nums, target))
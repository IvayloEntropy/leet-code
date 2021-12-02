/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const nums = [-1,0,3,5,9,12]
const target = 22

var search = function(nums, target) {
    return nums.findIndex(number => number === target)
};

console.log(search(nums, target))
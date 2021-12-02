/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const nums = [1,3,5,6]
const target = 7

var searchInsert = function(nums, target) {
    const findIndex = nums.indexOf(target)
    return findIndex !== -1 ? findIndex : findTargetPlace(nums, target)
};

var findTargetPlace = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > target) {
            return index
        }
    }
    return nums.length
}

console.log(searchInsert(nums, target))
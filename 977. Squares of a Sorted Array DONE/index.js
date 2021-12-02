/**
 * @param {number[]} nums
 * @return {number[]}
 */

const nums = [-7,-3,2,3,11]

var sortedSquares = function(nums) {
    const squared = nums.map(function(num) {
        return num * num
    })
    return squared.sort(function(a, b){return a-b})
};

console.log(sortedSquares(nums))
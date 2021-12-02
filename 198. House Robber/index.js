/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [1,2,3,1]

var rob = function(nums) {
    const evenAndOdds = getEvensAndOdds(nums)
    const odds = evenAndOdds.odds.reduce(add, 0)
    const evens = evenAndOdds.evens.reduce(add, 0)

    return odds > evens ? odds : evens
};

function add(accumulator, a) {
    return accumulator + a;
}

function getEvensAndOdds (nums) {
    const evens = []
    const odds = []
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if ( index % 2 === 0) {
            evens.push(element)
        } else {
            odds.push(element)
        }        
    }
    return {evens, odds}
}
 
console.log(rob(nums))

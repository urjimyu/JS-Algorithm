/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let tmp = [];
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length / 2; i++){
        let j = nums.length - i - 1;
        let val = nums[i] + nums[j];
        tmp.push(val);
    }
    return Math.max(...tmp);
};
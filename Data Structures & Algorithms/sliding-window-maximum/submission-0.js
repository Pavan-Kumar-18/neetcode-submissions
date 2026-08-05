class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = []

        for(let i=0; i<=nums.length-k; i++){
            let windows = []
            for(let j=i; j<i+k; j++){
                windows.push(nums[j])
            }
            result.push(Math.max(...windows))
        }
        return result
    }
}

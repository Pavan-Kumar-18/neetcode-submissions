class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0

        for(let i=0; i<nums.length; i++){
            let current = nums[i]
            let count = 1
            while(nums.includes(current + 1)){
                current ++
                count++
            }
         longest = Math.max(longest, count)
        }

return longest
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let i=0; i<nums.length;i++){
            const completed = target - nums[i]
            if(map.has(completed)){
                return [map.get(completed), i]
            }
            map.set(nums[i], i)
        }
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let minPrice = prices[0]
        let profit = 0

        for(let i=0; i<prices.length; i++){
            minPrice = Math.min(minPrice, prices[i])
            let profits = prices[i] - minPrice
            profit = Math.max(profit,profits )
        }
        return profit
    }
}

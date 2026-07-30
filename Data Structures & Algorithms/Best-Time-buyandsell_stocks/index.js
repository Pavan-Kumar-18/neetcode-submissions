let Prices = [7,1,5,3,6,4]

function bestTimeStocks(Prices){
    let minPrice = Prices[0]
    let maxProfit = 0

    for(let i=0; i<Prices.length; i++){
        minPrice = Math.min(minPrice, Prices[i])
        let profits = minPrice - Prices[i]
        maxProfit = Math.max(maxProfit, profits)
    }
return max
}

console.log(bestTimeStocks(Prices))
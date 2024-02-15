//Leetcode 121.Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */


function maxProfit(prices) {
    let buy = 0
    let sell = 1
    let max = 0

    while(sell < prices.length){
        if(prices[buy] < prices[sell]){
            let curr = prices[sell] - prices[buy]
            max = Math.max(max, curr)
        } else {
            buy = sell
        }
        sell++
    }
    return max
}

console.log(maxProfit([7,1,5,3,6,4]))

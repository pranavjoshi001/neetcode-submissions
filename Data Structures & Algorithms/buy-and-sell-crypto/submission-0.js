class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice = prices[0];
        let profit = 0;

        for (const [_, price] of prices.entries()) {
            if (price < buyPrice) {
                buyPrice = price;
            } else if (price - buyPrice > profit) {
                profit = price - buyPrice;
            }
        }
        return profit;
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice = prices[0];
        let profit = 0;

        for (const price of prices) {
            if (price < buyPrice) {
                buyPrice = price;
            } else {
                profit = Math.max(profit, price - buyPrice);
            }
        }
        return profit;
    }
}

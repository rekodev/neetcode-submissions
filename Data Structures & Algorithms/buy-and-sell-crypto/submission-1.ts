class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0;
        let buyDay = 0;
        let sellDay = 1;

        while (sellDay < prices.length) {
            const currProfit = prices[sellDay] - prices[buyDay];

            if (currProfit <= 0) {
                buyDay = sellDay;
                sellDay++;
            } else {
                sellDay++;
                if (currProfit > profit) profit = currProfit;
            }
        }

        return profit;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const leftProducts = [];
        const rightProductsReversed = [];
        const productsExceptSelf = [];

        for (let i = 0; i < nums.length; i++) {
            const productToLeft = nums[i - 1] * leftProducts.at(-1);
            const productToRight = nums[nums.length - i] * rightProductsReversed.at(-1);
            leftProducts.push(Number.isNaN(productToLeft) ? 1 : productToLeft);
            rightProductsReversed.push(Number.isNaN(productToRight) ? 1 : productToRight);
        }

        for (let i = 0; i < nums.length; i++) {
            const product = leftProducts[i] * rightProductsReversed[nums.length - 1 - i];
            productsExceptSelf.push(product);
        }

        return productsExceptSelf;
    }
}

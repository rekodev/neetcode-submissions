class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let totalTrappedWater = 0;
        const prefix = [height[0]];
        const suffix = new Array(height.length);
        suffix[height.length - 1] = height[height.length - 1];

        // build out prefix array
        for (let i = 1; i < height.length; i++) {
            const lastPrefixMax = prefix.at(-1);
            const el = height[i];

            prefix.push(Math.max(el, lastPrefixMax));
        }

        // build out suffix array
        for (let i = height.length - 2; i >= 0; i--) {
            const lastSuffixMax = suffix[i + 1];
            const el = height[i];

            suffix[i] = Math.max(el, lastSuffixMax);
        }

        // apply `min(prefix[i], suffix[i]) - height[i]` formula at each step
        for (let i = 0; i < height.length; i++) {
            const totalTrappedWaterAtPosI = Math.min(prefix[i], suffix[i]) - height[i];
            totalTrappedWater += totalTrappedWaterAtPosI;
        }

        return totalTrappedWater;
    }
}

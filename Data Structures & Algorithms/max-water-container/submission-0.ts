class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxArea = 0;
        let startIdx = 0;
        let endIdx = heights.length - 1;

        while (startIdx < endIdx) {
            const leftBarHeight = heights[startIdx];
            const rightBarHeight = heights[endIdx];

            const smallest = Math.min(leftBarHeight, rightBarHeight);
            const area = smallest * (endIdx - startIdx);

            if (area > maxArea) maxArea = area;

            if (leftBarHeight > rightBarHeight) {
                endIdx--;
            } else {
                startIdx++;
            }
        }

        return maxArea;
    }
}

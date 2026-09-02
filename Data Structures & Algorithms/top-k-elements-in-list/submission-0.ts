class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (frequencyMap.has(nums[i])) {
                frequencyMap.set(nums[i], frequencyMap.get(nums[i]) + 1);
            } else {
                frequencyMap.set(nums[i], 1);
            }
        }

        const sortedFrequencyMapEntries = Array.from(frequencyMap.entries()).sort(
            (a, b) => b[1] - a[1],
        );

        const answerArr = [];

        for (let i = 0; i < k; i++) {
            answerArr.push(sortedFrequencyMapEntries[i][0]);
        }

        return answerArr;
    }
}

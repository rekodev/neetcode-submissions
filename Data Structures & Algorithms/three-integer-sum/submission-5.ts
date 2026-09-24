class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sortedNumbers = nums.sort((a, b) => a - b);
        const results = [];
        const addendSet = new Set();

        for (let i = 0; i < sortedNumbers.length; i++) {
            if (sortedNumbers[i] > 0) break;

            let left = i === 0 ? 1 : 0;
            let right =
                i === sortedNumbers.length - 1
                    ? sortedNumbers.length - 2
                    : sortedNumbers.length - 1;

            while (left < right) {
                const addends = [sortedNumbers[i], sortedNumbers[left], sortedNumbers[right]];
                const sum = addends[0] + addends[1] + addends[2];
                const sortedAddendString = addends.sort((a, b) => a - b).join(",");

                if (sum === 0) {
                    if (!addendSet.has(sortedAddendString)) {
                        results.push([sortedNumbers[i], sortedNumbers[left], sortedNumbers[right]]);
                        addendSet.add(sortedAddendString);
                    }
                    left++;
                    if (left === i) left++;
                } else if (sum > 0) {
                    right--;
                    if (right === i) right--;
                } else {
                    left++;
                    if (left === i) left++;
                }
            }
        }

        return results;
    }
}

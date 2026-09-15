class Solution {
    private sequenceLengths = [];

    countSequenceLengths(startingNumber: number, numSet: Set<number>): void {
        let sequenceLength = 1;
        let nextNumber = startingNumber + 1;

        while (numSet.has(nextNumber)) {
            sequenceLength++;
            nextNumber++;
        }

        this.sequenceLengths.push(sequenceLength);
    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (!nums.length) return 0;

        const numSet = new Set(nums);

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (numSet.has(num - 1)) continue;

            this.countSequenceLengths(num, numSet);
        }

        return Math.max(...this.sequenceLengths);
    }
}

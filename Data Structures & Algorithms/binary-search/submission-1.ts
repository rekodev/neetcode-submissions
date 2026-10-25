class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    binary(start: number, end: number, nums: number[], target: number) {
        if (start > end) return -1;

        const middleIndex = Math.floor((start + end) / 2);

        if (nums[middleIndex] === target) return middleIndex;
        if (target < nums[middleIndex]) return this.binary(start, middleIndex - 1, nums, target);

        return this.binary(middleIndex + 1, end, nums, target);
    }

    search(nums: number[], target: number): number {
        return this.binary(0, nums.length - 1, nums, target);
    }
}

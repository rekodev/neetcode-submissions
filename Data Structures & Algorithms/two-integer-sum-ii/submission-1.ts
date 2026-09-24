class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let firstIdx = 0;
        let secondIdx = numbers.length - 1;

        while (true) {
            if (numbers[firstIdx] + numbers[secondIdx] === target) {
                return [firstIdx + 1, secondIdx + 1];
            }

            if (numbers[firstIdx] + numbers[secondIdx] > target) {
                secondIdx--;
            } else {
                firstIdx++;
            }
        }
    }
}

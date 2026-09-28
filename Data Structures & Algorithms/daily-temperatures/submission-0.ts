class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = [];
        const result = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            if (stack.length && temperatures[i] > stack.at(-1)?.[1]) {
                while (stack.at(-1)?.[1] < temperatures[i]) {
                    const poppedEl = stack.pop();
                    result[poppedEl[0]] = i - poppedEl[0];
                }
            }
            stack.push([i, temperatures[i]]);
        }

        return result;
    }
}

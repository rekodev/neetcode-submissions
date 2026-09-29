class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const sortedPositions = position
            .map((value, index) => ({ pos: value, mph: speed[index] }))
            .sort((a, b) => b.pos - a.pos);

        const stack = [];
        let currFleetIdx = 0;

        for (let i = 0; i < sortedPositions.length; i++) {
            const { pos, mph } = sortedPositions[i];
            const nextCar = stack.at(currFleetIdx)?.at(0);
            const howLong = (target - pos) / mph;

            if (!nextCar) {
                stack.push([{ pos, mph, howLong }]);
                continue;
            }

            if (nextCar.howLong - howLong >= 0) {
                stack[currFleetIdx].push({ pos, mph, howLong });
            } else {
                stack.push([{ pos, mph, howLong }]);
                currFleetIdx++;
            }
        }

        return stack.length;
    }
}

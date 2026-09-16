class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const parenMap = new Map();
        parenMap.set("(", ")");
        parenMap.set("{", "}");
        parenMap.set("[", "]");

        const stack = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            const isStarting = parenMap.has(char);

            if (!isStarting) {
                const lastInStack = stack.at(-1);

                if (parenMap.get(lastInStack) === char) stack.pop();
                else return false;
            } else {
                stack.push(char);
            }
        }

        return !Boolean(stack.length);
    }
}

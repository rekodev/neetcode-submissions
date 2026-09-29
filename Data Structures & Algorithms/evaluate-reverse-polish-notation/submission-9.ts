class Solution {
    private operatorSet: Set<string>;

    constructor() {
        this.operatorSet = new Set();
        this.operatorSet.add("+");
        this.operatorSet.add("-");
        this.operatorSet.add("*");
        this.operatorSet.add("/");
    }

    performOperation(operand1: string, operand2: string, operator: string) {
        const numOperand1 = Number(operand1);
        const numOperand2 = Number(operand2);

        if (operator === "+") {
            return numOperand1 + numOperand2;
        } else if (operator === "-") {
            return numOperand1 - numOperand2;
        } else if (operator === "*") {
            return numOperand1 * numOperand2;
        } else if (operator === "/") {
            return Math.trunc(numOperand1 / numOperand2);
        }
    }
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: string[] = [];

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            const isOperator = this.operatorSet.has(token);

            if (isOperator) {
                const poppedFirst = stack.pop();
                const poppedSecond = stack.pop();
                const res = this.performOperation(poppedSecond, poppedFirst, token);
                stack.push(String(res));
            } else {
                stack.push(token);
            }
        }

        return Number(stack.at(0));
    }
}

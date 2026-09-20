class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedStr = "";

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            encodedStr += `${str.length}#${str}`;
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decodedStrs = [];
        let currentIndex = 0;
        let stringifiedAmount = "";

        while (currentIndex < str.length) {
            if (str[currentIndex] === "#") {
                const amount = Number(stringifiedAmount);
                let newStr = "";

                for (let i = 0; i < amount; i++) {
                    newStr += str[currentIndex + i + 1];
                }

                decodedStrs.push(newStr);
                currentIndex += amount;
                stringifiedAmount = "";
            } else {
                stringifiedAmount += str[currentIndex];
            }

            currentIndex++;
        }

        return decodedStrs;
    }
}

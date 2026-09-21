class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isCharAlphanumeric(char: string): boolean {
        return (
            (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
            (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
            (!Number.isNaN(Number(char)) && char !== " ")
        );
    }

    isPalindrome(s: string): boolean {
        let startIdx = 0;
        let endIdx = s.length - 1;
        let sForward = "";
        let sBackward = "";

        while (startIdx < s.length) {
            if (this.isCharAlphanumeric(s[startIdx])) {
                sForward += s[startIdx].toLowerCase();
            }
            if (this.isCharAlphanumeric(s[endIdx])) {
                sBackward += s[endIdx].toLowerCase();
            }

            startIdx++;
            endIdx--;
        }

        return sForward === sBackward;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const sMap = new Map<string, number>();

        // populating sMap
        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (sMap.has(char)) {
                sMap.set(char, sMap.get(char) + 1);
            } else {
                sMap.set(char, 1);
            }
        }

        // checking t against sMap
        for (let i = 0; i < t.length; i++) {
            const char = t[i];

            if (sMap.has(char) && sMap.get(char) !== 0) {
                sMap.set(char, sMap.get(char) - 1);
            } else {
                return false;
            }
        }

        return true;
    }
}

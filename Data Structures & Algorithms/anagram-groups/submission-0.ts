class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const strsCopy = [...strs];
        const strsMap = new Map();

        for (let i = 0; i < strsCopy.length; i++) {
            const str = strsCopy[i];
            const sortedStr = str.split("").sort().join("");

            if (strsMap.has(sortedStr)) {
                const el = strsMap.get(sortedStr);
                el.push(strs[i]);
            } else {
                strsMap.set(sortedStr, [strs[i]]);
            }
        }

        return Array.from(strsMap.values());
    }
}

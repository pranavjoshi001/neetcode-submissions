class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const master = new Map([
            ["]", "["],
            ["}", "{"],
            [")", "("],
        ]);

        if (!s || s.length % 2 !== 0) {
            return false;
        }

        const stack = [];

        for (const char of s) {
            if (master.has(char)) {
                if (stack.pop() !== master.get(char)) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}

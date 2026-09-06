class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isNumberValid(num: string): boolean {
        if (Number.isNaN(Number(num))) return false;
        if (!(Number(num) > 0 && Number(num) <= 9)) return false;
        return true;
    }

    isSubBoardValid(
        board: string[][],
        xStart: number,
        yStart: number,
        rows: Set<string>[],
        cols: Set<string>[],
    ) {
        const numSet = new Set();

        for (let i = yStart; i < yStart + 3; i++) {
            for (let j = xStart; j < xStart + 3; j++) {
                const num = board[i][j];

                if (this.isNumberValid(num) && !numSet.has(num)) {
                    if (rows[i].has(num)) return false;
                    if (cols[j].has(num)) return false;

                    numSet.add(num);
                    rows[i].add(num);
                    cols[j].add(num);
                } else if (num !== ".") {
                    return false;
                }
            }
        }

        return true;
    }

    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: board.length }, () => new Set<string>());
        const cols = Array.from({ length: board.length }, () => new Set<string>());

        for (let i = 0; i < board.length; i += 3) {
            for (let j = 0; j < board.length; j += 3) {
                const isValid = this.isSubBoardValid(board, i, j, rows, cols);

                if (!isValid) return false;
            }
        }

        return true;
    }
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    traverseList(slow: ListNode | null, fast: ListNode | null) {
        if (!slow || !fast) return false;
        if (slow === fast) return true;

        return this.traverseList(slow.next, fast.next?.next);
    }

    hasCycle(head: ListNode | null): boolean {
        if (!head) return false;

        return this.traverseList(head, head.next);
    }
}

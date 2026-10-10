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
     * @return {ListNode}
     */
    traverseAndReverseList(node: ListNode | null, prevNode: ListNode | null) {
        if (!node) return prevNode;

        const nextNode = node.next;
        node.next = prevNode;

        return this.traverseAndReverseList(nextNode, node);
    }

    reverseList(head: ListNode | null): ListNode {
        return this.traverseAndReverseList(head, null);
    }
}

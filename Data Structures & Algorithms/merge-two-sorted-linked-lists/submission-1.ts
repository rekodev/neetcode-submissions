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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    traverse(
        l1: ListNode | null,
        l2: ListNode | null,
        h: ListNode | null = null,
        t: ListNode | null = null,
    ) {
        const isL1ValGreater = l1?.val > l2?.val;

        const head = h || new ListNode();
        const tail = t || head;

        if (!l1 && !l2) return head.next;
        if (!l1 || isL1ValGreater) {
            tail.next = new ListNode(l2.val);
            return this.traverse(l1, l2.next, head, tail.next);
        }
        if (!l2 || !isL1ValGreater) {
            tail.next = new ListNode(l1.val);
            return this.traverse(l1.next, l2, head, tail.next);
        }
    }

    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (!list1 && !list2) return null;
        if (!list1) return list2;
        if (!list2) return list1;

        return this.traverse(list1, list2);
    }
}

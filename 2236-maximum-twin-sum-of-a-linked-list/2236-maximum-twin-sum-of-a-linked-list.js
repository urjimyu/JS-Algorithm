/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
	let maxVal = 0;
	let reversed = [];

	while (head !== null) {
		reversed.push(head.val);
		head = head.next;
	}

	for (let i = 0; i < reversed.length / 2; i++) {
		let sum = reversed[i] + reversed[reversed.length - i - 1];
		maxVal = Math.max(maxVal, sum);
	}
	return maxVal;
};

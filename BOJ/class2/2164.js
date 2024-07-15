const fs = require("fs");
const cardNum = fs.readFileSync("/dev/stdin").toString().trim();

// 노드 클래스 생성
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

// 연결리스트 클래스 생성
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	add(value) {
		const node = new Node(value);

		// 기존 노드가 있을 때
		if (this.head) {
			this.tail.next = node;
			node.prev = this.tail;
		} else {
			this.head = node;
		}
		this.tail = node;
		this.length++;
		return node;
	}

	remove() {
		this.head = this.head.next;
		this.head.prev = null;
		this.length--;
	}

	getHead() {
		return this.head.value;
	}
}
function findCard(cardNum) {
	const cards = new LinkedList();
	for (let i = 1; i < +cardNum + 1; i++) cards.add(i);

	while (cards.length > 1) {
		cards.remove();
		cards.add(cards.getHead());
		cards.remove();
	}
	return console.log(cards.getHead());
}

findCard(cardNum);

const fs = require("fs");
const [n, k] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

function Josephus(n, k) {
	const answer = [];
	const queue = [];
	let count = 1;

	// 1 ~ N 채우기
	for (let i = 1; i <= n; i++) {
		queue.push(i);
	}

	// 큐를 이용해 정답 구하기
	while (queue.length) {
		const item = queue.shift();
		if (count % k === 0) {
			answer.push(item);
		} else {
			queue.push(item);
		}
		count += 1;
	}
	console.log(`<${answer.join(", ")}>`);
}

Josephus(n, k);

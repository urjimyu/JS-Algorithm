const fs = require("fs");
const [n, k] = fs
	// .readFileSync("/dev/stdin")
	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class2/test.txt")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

function Josephus(n, k) {
	const answer = [];
	const arr = [];
	let lastIdx = 0;

	// 1 ~ N 채우기
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}

	for (let j = 1; j <= n; j++) {
		// 남은 순회 횟수
		const leftOver = arr.length - lastIdx - 1;

		// 마지막 도착 지점 계산
		if (k <= leftOver) targetIdx = lastIdx + k;
		else if ((k - leftOver) % arr.length === 0) {
			targetIdx = arr.length - 1;
		} else {
			targetIdx = ((k - leftOver) % arr.length) - 1;
		}
		// 정답에 넣고 추출하기
		answer.push(arr[targetIdx]);
		arr.splice(targetIdx, 1);
		// 멈춘 위치 저장
		lastIdx = targetIdx;
	}
	console.log(`{${answer.join(", ")}}`);
}

Josephus(n, k);

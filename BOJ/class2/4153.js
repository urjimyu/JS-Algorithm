const fs = require("fs");
const [...cases] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((line) => line.split(" ").map(Number));

function triangle(arr) {
	const answer = [];
	for (let i = 0; i < arr.length - 1; i++) {
		let currentCase = arr[i];
		const max = Math.max(...arr[i]);
		const maxIdx = currentCase.indexOf(max);
		currentCase.splice(maxIdx, 1);
		if (currentCase == [0, 0, 0]) break;
		if (max ** 2 === currentCase[0] ** 2 + currentCase[1] ** 2) {
			answer.push("right");
			continue;
		}
		answer.push("wrong");
	}
	console.log(answer.join("\n"));
}

triangle(cases);

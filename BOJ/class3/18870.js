const [n, vals] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const xArr = vals.split(" ").map(Number);
const answer = new Array(n).fill(0);
const setX = new Set([...xArr].sort((a, b) => a - b));
const sortedArr = [...setX];

for (let i = 0; i < n; i++) {
	const idx = sortedArr.findIndex((x) => x === xArr[i]);
	answer[i] = idx;
}
console.log(answer.join(" "));

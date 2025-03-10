const fs = require("fs");
const [info, scores, ...ranges] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const [n, k] = info.split(" ").map(Number);
const score = scores.split(" ").map(Number);
const range = ranges.map((x) => x.split(" ").map(Number));
const answer = [];

for (let i = 0; i < k; i++) {
	let result = 0;
	let start = range[i][0];
	let end = range[i][1];
	let nums = score.slice(start-1, end);
	for (let num of nums) result += num;
	result /= nums.length;
	answer.push((Math.round(result*100)/100).toFixed(2));
}

console.log(answer.join("\n"));

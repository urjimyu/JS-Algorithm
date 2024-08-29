const fs = require("fs");
// const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputs = fs
	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class3/test.txt")
	.toString()
	.trim()
	.split("\n");
const [n, m] = inputs.shift().split(" ").map(Number);
const nums = inputs.shift().split(" ").map(Number);
const [...ranges] = inputs.map((item) => item.split(" ").map(Number));

const solution = (n, m, ranges, nums) => {
	const answer = [];
	const memo = Array.from({ length: n + 1 }).fill(0);
	nums.forEach((v, idx) => (memo[idx + 1] = memo[idx] + v));

	for (let i = 0; i < ranges.length; i++) {
		const [start, end] = ranges[i];
		let sum = memo[end] - memo[start - 1];
		answer.push(sum);
	}

	return console.log(answer.join("\n"));
};

solution(n, m, ranges, nums);

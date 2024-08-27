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

	for (let i = 0; i < ranges.length; i++) {
		const [start, end] = ranges[i];
		let sum = 0;
		for (let j = start - 1; j <= end - 1; j++) {
			sum += nums[j];
		}
		answer.push(sum);
	}

	return console.log(answer.join("\n"));
};

solution(n, m, ranges, nums);

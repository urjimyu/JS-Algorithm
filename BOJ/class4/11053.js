const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const n = +input[0];
const nums = input[1].split(" ").map(Number);

const memo = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
	const values = [1];
	for (let j = 0; j < i; j++) {
		if (nums[i] > nums[j]) {
			values.push(memo[j] + 1);
		}
	}
	memo[i] = Math.max(...values);
}

console.log(Math.max(...memo));

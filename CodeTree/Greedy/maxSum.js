const fs = require("fs");
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.split(" ").map(Number);

function sums(n, arr) {
	let maxSum = -Infinity;
	let currentSum = 0;
	for (let i = 0; i < n; i++) {
		currentSum += arr[i];
		if (currentSum > maxSum) maxSum = currentSum;
		if (currentSum < 0) currentSum = 0;
	}
	return maxSum;
}

console.log(sums(n, arr));

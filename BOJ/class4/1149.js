const [n, ...costs] = require("fs")
	// .readFileSync("/dev/stdin")
	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class4/test.txt")
	.toString()
	.trim()
	.split("\n");

const costArr = costs.map((x) => x.split(" ").map(Number));

let dp = Array.from({ length: n }, () => Array(3).fill(0));

dp[0] = costArr[0];

for (let i = 1; i < n; i++) {
	dp[i][0] = costArr[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
	dp[i][1] = costArr[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
	dp[i][2] = costArr[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

let minCost = Math.min(...dp[n - 1]);

console.log(minCost);
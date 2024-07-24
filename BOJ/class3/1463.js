const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim();

function calcNum(n) {
	const dp = [0, 0];

	let i = 2;
	while (i <= n) {
		// 1 빼는 경우
		dp[i] = dp[i - 1] + 1;
		// 3으로 나누는 경우
		if (i % 3 === 0) {
			dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
		}
		// 2로 나누는 경우
		if (i % 2 === 0) {
			dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
		}
		i += 1;
	}
	return dp[n];
}

const answer = calcNum(+n);
console.log(answer);

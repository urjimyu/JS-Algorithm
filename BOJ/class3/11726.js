const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim();

const MOD = 10007;

const memo = new Array(Number(n) + 1).fill(0);
memo[1] = 1;
memo[2] = 2;

function countWays(n) {
	if (n <= 2) return memo[n];

	for (let i = 3; i <= n; i++) {
		memo[i]= (memo[i - 1] + memo[i - 2]) % MOD;
	}

	return memo[n];
}

const answer = countWays(+n);
console.log(answer);

const fs = require("fs");
const [t, ...cases] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

function sums(cases) {
	const memo = [0, 1, 2, 4];
	const answer = [];

	for (let i = 4; i <= Math.max(...cases); i++) {
		memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
	}
	cases.forEach((test) => answer.push(memo[test]));
	console.log(answer.join("\n"));
}

sums(cases);

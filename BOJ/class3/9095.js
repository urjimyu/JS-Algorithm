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

// 복습2
const [_, ...cases] = require("fs")
	.readFileSync("./dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map(Number);

const countCases = () => {
	const max = Math.max(...cases);
	const memo = Array.from({ length: max + 1 }, () => -1);
	const answer = [];
	memo[1] = 1;
	memo[2] = 2;
	memo[3] = 4;

	for (let i = 4; i < max + 1; i++) {
		memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
	}

	for (const num of cases) {
		answer.push(memo[num]);
	}
	return answer;
};

const result = countCases();
console.log(result.join("\n"));

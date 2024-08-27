// 시간초과 해결
const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = inputs.shift().split(" ");

const solution = (n, m, input) => {
	const nSet = new Set();
	const mSet = new Set();

	input.forEach((item, idx) => {
		if (idx < n) {
			nSet.add(item);
		} else {
			mSet.add(item);
		}
	});
	const answer = [...nSet].filter((item) => mSet.has(item));
	answer.sort((a, b) => a.localeCompare(b));
	return console.log([answer.length, ...answer].join("\n"));
};

solution(+n, +m, inputs);

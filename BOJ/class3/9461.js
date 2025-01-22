const [n, ...cases] = require("fs")
	// .readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class3/test.txt")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const answer = [];
const max_n = Math.max(...cases);
const pado_arr = new Array(max_n).fill(0);

pado_arr[0] = 1;
pado_arr[1] = 1;
pado_arr[2] = 1;

for (let i = 3; i < max_n; i++) {
	pado_arr[i] = pado_arr[i - 3] + pado_arr[i - 2];
}

for (let j = 0; j < n; j++) {
	answer.push(pado_arr[cases[j] - 1]);
}

console.log(answer.join("\n"));

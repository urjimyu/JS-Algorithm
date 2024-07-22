const fs = require("fs");
const [n, k] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

function factorial(num, end) {
	if (num === end) return num;
	if (num === 0) return 1;
	return num * factorial(num - 1, end);
}

function binomial(n, k) {
	if (n === k) return console.log(1);
	console.log(factorial(n, k + 1) / factorial(n - k, 1));
}

binomial(n, k);

const fs = require("fs");
const [n, ...tests] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map(Number);

function fibonacciCount(num) {
	for (let i = 0; i < num; i++) {
		const fibo = [
			[1, 0],
			[0, 1],
		];

		for (let j = 2; j <= tests[i]; j++) {
			fibo[j] = [
				fibo[j - 1][0] + fibo[j - 2][0],
				fibo[j - 1][1] + fibo[j - 2][1],
			];
		}
		console.log(fibo[tests[i]].join(" "));
	}
	return;
}

fibonacciCount(+n);

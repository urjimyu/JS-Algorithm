const [n, p] = require("fs")
	.readFileSync("./dev/stdin")
	.toString()
	.trim()
	.split("\n");

const numP = p.split(" ").map(Number);
const solution = () => {
	let answer = 0;
	const times = new Array(n).fill(0);
	const sortedP = numP.sort((a, b) => a - b);
	times[0] = sortedP[0];
	for (let i = 1; i < n; i++) {
		times[i] = times[i - 1] + sortedP[i];
		continue;
	}
	answer = times.reduce((acc, cur) => (acc += cur));
	return console.log(answer);
};

solution();

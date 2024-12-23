// 유기농 배추
const [t, ...inputs] = require("fs")
	// .readFileSync("./dev/stdin")
	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class3/test.txt")
	.toString()
	.trim()
	.split("\n");
let vals = [...inputs];

for (let i = 0; i < t; i++) {
	const [m, n, k] = vals[0].split(" ").map(Number);
	const maps = Array.from({ length: n }, () => new Array(m).fill(0));

	for (let j = 1; j < k + 1; j++) {
		const [x, y] = vals[j].split(" ").map(Number);
		maps[y][x] = 1;
	}

	vals = vals.slice(k + 1);
	console.log("vals", vals);
	console.log("maps", maps);
}

const solution = () => {
  let answer = 0;


}

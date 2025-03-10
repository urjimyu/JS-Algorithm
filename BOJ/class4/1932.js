const fs = require("fs");
const [n, ...triangle] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const nums = triangle.map((x) => x.split(" ").map(Number));
const answers = [];

const dfs = (lev, idx, sum) => {
	if (lev === n - 1) {
		sum += v;
		answers.push(sum);
		sum = 0;
		return;
	}
	sum += v;
	console.log("lev", lev);
	console.log("v", v);
	console.log("idx", idx);
	dfs(lev + 1, nums[lev][idx], idx);
	dfs(lev + 1, nums[lev][idx + 1], idx + 1);
};

dfs(1, nums[0][0], 0, 0);

console.log(Math.max(...answers));

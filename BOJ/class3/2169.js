const [inputs, ...maps] = require("fs")
	// .readFileSync("./dev/stdin")
	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class3/test.txt")
	.toString()
	.trim()
	.split("\n");
const [n, m] = inputs.split(" ").map(Number);
const map = maps.map((v) => v.split(" ").map(Number));

// 좌, 우, 하
const dx = [-1, 1, 0];
const dy = [0, 0, -1];

const solution = () => {
	const visited = Array.from({ length: n }, () => Array(m).fill(false));
	const answer = [];
	let sum = 0;

	const dfs = (y, x) => {
		visited[y][x] = true;
		sum += map[y][x];
		for (let k = 0; k < 3; k++) {
			const newX = x + dx[k];
			const newY = y + dy[k];
			if (
				newX >= 0 &&
				newY >= 0 &&
				newX < m &&
				newY < n &&
				!visited[newY][newX]
			) {
				dfs(newY, newX);
			}
		}
		return sum;
	};

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
      sum = 0;
			if (visited[i][j] === false) {
				dfs(i, j);
				console.log("SUM", sum);
				answer.push(sum);
			}
		}
	}
	console.log("ANSWER", answer);
	return Math.max(...answer);
};

const result = solution();
console.log(result);

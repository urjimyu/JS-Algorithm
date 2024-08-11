const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);

input.map((line) => line.split(" ").map(Number));
const visited = Array(n + 1).fill(false);
const graph = [...Array(n + 1)].map(() => []);

function solution(n, m, input) {
	let count = 0;
	// 양방향/무방향 그래프로 만들기
	input.map(([from, to]) => {
		graph[from].push(to);
		graph[to].push(from);
	});

	const dfs = (start) => {
		for (const vertax of graph[start]) {
			if (!visited[vertax]) {
				visited[start] = true;
				dfs(vertax);
			}
		}
	};

	for (let i = 1; i <= n; i++) {
		if (!visited[i]) {
			dfs(i);
			count += 1;
		}
	}
	console.log(count);
}

solution(n, m, input);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);

input.map((line) => line.split(" ").map(Number));
const visited = Array(n + 1).fill(false);
const graph = [...Array(n + 1)].map(() => []);

function solution(n, m, input) {
	// 무방향 그래프 만들어주기
	input.map(([from, to]) => {
		graph[from].push(to);
		graph[to].push(from);
	});

	const bfs = (start) => {
		let count = 0;
		const queue = [start];

		while (queue.length) {
			const cur = queue.shift();
			for (const vertax of graph[cur]) {
				if (!visited[vertax]) {
					visited[vertax] = true;
					queue.push(vertax);
				}
			}
		}
	};

	for (let i = 1; i <= n; i++) {
		if (!visited[i]) {
			bfs(i);
			count += 1;
		}
	}
	console.log(count);
}

solution(n, m, input);

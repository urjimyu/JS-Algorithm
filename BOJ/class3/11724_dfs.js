const [info, ...arr] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const [n, _] = info.split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const visited = new Array(n + 1).fill(false);

function countComponent(arr) {
	let count = 0;

	const arr_info = arr.map((item) => item.split(" ").map(Number));
	arr_info.map(([from, to]) => {
		graph[from].push(to);
		graph[to].push(from);
	});

	const dfs = (start) => {
		visited[start] = true;
		for (const node of graph[start]) {
			if (!visited[node]) {
				dfs(node);
			}
		}
	};

	for (let i = 1; i < n + 1; i++) {
		if (!visited[i]) {
			dfs(i);
			count += 1;
		}
	}
	console.log(count);
}

countComponent(arr);

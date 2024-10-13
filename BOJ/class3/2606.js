const [n, m, ...relations] = require("fs")
	.readFileSync("./dev/stdin")
	.toString()
	.trim()
	.split("\n");

const rel = relations.map((v) => v.split(" ").map(Number));

const connected = Array.from({ length: +n + 1 }, () => []);
const visited = Array.from({ length: +n + 1 }, () => 0);

let cnt = 0;

for (let i = 0; i < +m; i++) {
	const [a, b] = rel[i];
	connected[a].push(b);
	connected[b].push(a);
}

const virus = () => {
	const dfs = (start) => {
		visited[start] = 1;
		for (const node of connected[start]) {
			if (visited[node] !== 1) {
				cnt += 1;
				dfs(node);
			}
		}
	};

	dfs(1);
	console.log(cnt);
};

virus();

const fs = require("fs");
const [N, k, ...matches] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const N_num = Number(N);
const k_num = Number(k);

const graph = Array.from(Array(N_num + 1), () => []);
const visited = Array.from(Array(N_num + 1), () => false);
// 무조건 1번 컴퓨터에서 출발하므로
visited[1] = true;
let count = 0;

function dfs(start) {
	// 시작 지점과 연결된 노드들 세기
	for (let i of graph[start]) {
		if (visited[i] === false) {
			visited[i] = true;
			count++;
			dfs(i);
		}
	}
}

function countVirus(k, matches) {
	// 서로 연결되어 있는 노드 입력
	for (let i = 0; i < k; i++) {
		const [first, second] = matches[i].split(" ").map(Number);
		graph[first].push(second);
		graph[second].push(first);
	}

	dfs(1);
}

countVirus(k_num, matches);

console.log(count);

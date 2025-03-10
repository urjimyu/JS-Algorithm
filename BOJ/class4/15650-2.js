let fs = require("fs");
let [N, M] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

const arr = Array(M).fill("");
const visited = Array(N + 1).fill(false);
dfs(0, 1);

function dfs(lev, start) {
	if (lev === M) {
		console.log(arr.join(" "));
		return;
	}
	for (let i = start; i < N + 1; i++) {
		if (visited[i]) {
			continue;
		}
		arr[lev] = i;
		visited[i] = true;
		dfs(lev + 1, i);
		visited[i] = false;
	}
}

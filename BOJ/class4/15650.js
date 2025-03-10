const [n, m] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

function solution(n, m) {
	let arr = Array.from({ length: n }, (v, i) => i + 1);
	let visited = new Array(n).fill(false);
	let selected = [];

	let answer = "";
	function dfs(arr, depth) {
		if (depth === m) {
			let result = []; // 순열 결과 저장
			for (let i of selected) result.push(arr[i]);
			for (let x of result) answer += x + " ";
			answer += "\n";
			return;
		}
		for (let i = 0; i < arr.length; i++) {
			if (visited[i]) continue;
			selected.push(i);
			visited[i] = true;
			dfs(arr, depth + 1);
			selected.pop();
			visited[i] = false;
		}
	}
	dfs(arr, 0);
	return answer;
}

console.log(solution(n, m));

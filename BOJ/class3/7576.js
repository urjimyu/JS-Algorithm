const { count } = require("console");
const fs = require("fs");
const [info, ...box] = fs
	// .readFileSync("/dev/stdin")
	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class3/test.txt")
	.toString()
	.trim()
	.split("\n")
	.map((line) => line.split(" "));

const [n, m] = info.map(Number);

// 상하좌우 좌표
const DX = [0, 0, -1, 1];
const DY = [1, -1, -1, 1];


function countTomatoDays(n, m, boxInfo) {
  const visited = Array.from(new Array(m), () => new Array(n).fill(0));
  const queue = [];
	const days = 0;
	let curBox = boxInfo;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			// 토마토가 전부 익으면 끝내기
			if (curBox.filter((item) => item.includes(0)).length === 0) return days;
			if (boxInfo[i][j] === 0) continue;
			days += 1;
			visited[i][j] = 1;
			compareTomato(i, j, curBox);
		}
	}
	return console.log(days);
}

function compareTomato(y, x, cur) {
	for (let k = 0; k < 4; k++) {
		if (cur[y + DY[k]][x + DX[k]] === 1) {
			continue;
		}
		cur[y + DY[k]][x + DX[k]] = 1;
	}
	return;
}
countTomatoDays(n, m, box);

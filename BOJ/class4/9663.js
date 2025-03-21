const n = require("fs")
	// .readFileSync("/dev/stdin")
	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class4/test.txt")
	.toString()
	.trim()
	.split("\n")
	.map(Number);

// 퀸이 서로 공격할 수 없으려면 좌우상하 같은 x,y값인지 검사 + 대각선도 체크
const checkLine = (visited, x, y) => {
	visited.map((v, i) => {
		if (i === x) v = true;
		v[y] = true;
	});
};

const checkDiagonal = (visited, x, y) => {
	visited.map((v, i) => {
		if (i === x) v = true;
		v[y] = true;
	});
};

function nQueen(n) {
	let answer = 0;
	let startX = 0;
	let startY = 0;
	let queens = 0;

	const visited = Array.from((length = n), () => new Array(n).fill(false));

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
      if (queens === n) {
        answer += 1;
        return;// 임시
      }
			if (!visited[i][j]) {
				visited[i][j] = true;
				queens += 1;
				checkLine(startX, startY);
				checkDiagonal(startX, startY);
			}
		}
	}
	return answer;
}

nQueen(n);

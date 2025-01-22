const [n, r, c] = require("fs")
	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class3/test.txt")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

let cnt = 0;

const divide = (row, col, size) => {
	// 현재 위치가 목표 좌표인 경우
	if (row === r && col === c) {
		console.log(cnt);
		return;
	}

	if (r >= row && r < row + size && c >= col && c < col + size) {
		// 목표 좌표가 현재 영역 내에 있을 때
		size = parseInt(size / 2); // 영역 4등분하기
		divide(row, col, size);
		divide(row, col + size, size);
		divide(row + size, col, size);
		divide(row + size, col + size, size);
	} else cnt += size * size; // 영역 안에 좌표 없을 때
};

divide(0, 0, Math.pow(2, n));

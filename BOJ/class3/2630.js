const [n, ...board] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const N = parseInt(n);
const colors = board.map((val) => val.split(" ").map(Number));

let whiteNum = 0;
let blueNum = 0;

const isOneColor = (x, y, len) => {
	let color = colors[x][y];
	for (let i = x; i < x + len; i++) {
		for (let j = y; j < y + len; j++) {
			if (colors[i][j] !== color) {
				return false;
			}
		}
	}
	return true;
};

// 분할 정복 함수 부분
const divideUnite = (x, y, size) => {
	if (isOneColor(x, y, size)) {
		if (colors[x][y] === 0) {
			whiteNum++;
		} else {
			blueNum++;
		}
	} else {
		const newSize = size / 2;
		divideUnite(x, y, newSize); // 왼쪽 위
		divideUnite(x, y + newSize, newSize); // 오른쪽 위
		divideUnite(x + newSize, y, newSize); // 왼쪽 아래
		divideUnite(x + newSize, y + newSize, newSize); // 오른쪽 아래
	}
};

divideUnite(0, 0, N);

console.log(whiteNum);
console.log(blueNum);

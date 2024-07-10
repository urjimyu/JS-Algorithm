const fs = require("fs");
const [[N, M], cards] = fs
	.readFileSync("dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((line) => line.split(" ").map(Number));

function blackJack(N, M, cards) {
	let sum = [];

	for (let i = 0; i < N - 2; i++) {
		for (let j = i + 1; j < N - 1; j++) {
			for (let k = j + 1; k < N; k++) {
				const total = cards[i] + cards[j] + cards[k];
				if (total < M) sum.push(total);
				// 최댓값과 일치하는 경우 빠른 반환
				if (total === M) return console.log(total);
			}
		}
	}
	return console.log(Math.max(...sum));
}

blackJack(N, M, cards);

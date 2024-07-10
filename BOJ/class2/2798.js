const fs = require("fs");
const [[N, M], cards] = fs
	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class2/test.txt")
	.toString()
	.trim()
	.split("\n")
	.map((line) => line.split(" ").map(Number));

function blackJack(N, M, cards) {
	let answer = 0;
	cards.sort((a, b) => b - a);
	cards.forEach((card) => +card);

	for (let i = 0; i < N - 2; i++) {
		answer = cards[i] + cards[i + 1] + cards[i + 2];
		if (answer <= M) return console.log(answer);
		else answer = 0;
	}
	return console.log(answer);
}

blackJack(N, M, cards);

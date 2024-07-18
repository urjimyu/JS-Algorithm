const fs = require("fs");
const [n, cards, m, targets] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((line) => line.split(" ").map(Number));

function countCards(n, cards, m, targets) {
	const answer = [];
	const cardCounts = {};
	cards.forEach((card) => (cardCounts[card] = 0));
	cards.forEach((card) => (cardCounts[card] += 1));

	for (let i = 0; i < m; i++) {
		answer.push(cardCounts[targets[i]] ? cardCounts[targets[i]] : 0);
	}
	console.log(...answer);
}

countCards(n, cards, m, targets);

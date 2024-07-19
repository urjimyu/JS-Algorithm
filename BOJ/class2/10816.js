const fs = require("fs");
const [n, cards, m, targets] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((line) => line.split(" ").map(Number));

function countCards(n, cards, m, targets) {
	const cardCounts = {};
	cards.forEach((card) => (cardCounts[card] || 0) + 1);

const answer = targets.map((target) => cardCounts[target] || 0);
	console.log(...answer);
}

countCards(n, cards, m, targets);

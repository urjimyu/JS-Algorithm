const fs = require("fs");
let [input, ...board] = fs
	// .readFileSync("/dev/stdin")
	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class2/test.txt")
	.toString()
	.trim()
	.split("\n");
const [row, col] = input.split(" ").map(Number);
board = board.map((line) => line.split(""));

const CHESS_W = [
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
];
const CHESS_B = [
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
];

function checkWhite(x, y, board) {
	let caseAnswerWhite = 0;
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (board[i + x][j + y] !== CHESS_W[i][j]) caseAnswerWhite++;
		}
	}
	return caseAnswerWhite;
}

function checkBlack(x, y, board) {
	let caseAnswerBlack = 0;
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (board[i + x][j + y] !== CHESS_B[i][j]) caseAnswerBlack++;
		}
	}
	return caseAnswerBlack;
}

function drawChess(row, col, board) {
	const answer = [];

	for (let i = 0; i < row - 7; i++) {
		for (let j = 0; j < col - 7; j++) {
			answer.push(checkWhite(i, j, board));
			answer.push(checkBlack(i, j, board));
		}
	}
	return console.log(Math.min(...answer));
}

drawChess(row, col, board);

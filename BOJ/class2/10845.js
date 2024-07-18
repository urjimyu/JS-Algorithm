const fs = require("fs");
const [n, ...commands] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let queueArr = [];
let answer = [];

function queuePop() {
	if (queueArr.length === 0) return answer.push(-1);
	answer.push(queueArr[0]);
	queueArr.splice(0, 1);
}

function queueSize() {
	answer.push(queueArr.length);
}

function queueEmpty() {
	if (queueArr.length === 0) return answer.push(1);
	answer.push(0);
}

function queueFront() {
	if (queueArr.length === 0) return answer.push(-1);
	answer.push(queueArr[0]);
}

function queueBack() {
	if (queueArr.length === 0) return answer.push(-1);
	answer.push(queueArr[queueArr.length - 1]);
}

function queuePush(x) {
	queueArr.push(x);
}

function useQueue(n, commands) {
	queueArr = [];
	answer = [];
	for (let i = 0; i < n; i++) {
		switch (commands[i]) {
			case "pop":
				queuePop();
				break;
			case "size":
				queueSize();
				break;

			case "empty":
				queueEmpty();
				break;

			case "front":
				queueFront();
				break;

			case "back":
				queueBack();
				break;

			default:
				const x = commands[i].split(" ");
				queuePush(x[1]);
				break;
		}
	}
	console.log(answer.join("\n"));
}

useQueue(n, commands);

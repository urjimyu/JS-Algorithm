const fs = require("fs");
const times = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const times = fs
// 	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class3/test.txt")
// 	.toString()
// 	.trim()
// 	.split("\n");
const n = times.shift();

function maxMeeting(n, arr) {
	const answer = [];
	const meetingInfo = arr.map((item) => item.split(" ").map(Number));

	meetingInfo.sort((a, b) => a[1] - b[1]);
	answer.push(meetingInfo[0]);
	for (let i = 1; i < n; i++) {
		if (answer[answer.length - 1][1] > meetingInfo[i][0]) {
			continue;
		}
		answer.push(meetingInfo[i]);
	}

	return console.log(answer.length);
}

maxMeeting(n, times);

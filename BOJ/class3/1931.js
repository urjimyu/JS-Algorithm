const fs = require("fs");
const times = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const times = fs
// 	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class3/test.txt")
// 	.toString()
// 	.trim()
// 	.split("\n");
const n = times.shift();

function maxMeeting(n, arr) {
	const meetingInfo = arr.map((item) => item.split(" ").map(Number));

	meetingInfo.sort((a, b) => a[1] - b[1]);

	let endTime = 0;
	let count = 0;

	for (let i = 0; i < n; i++) {
		const [start, end] = meetingInfo[i];
		if (start >= endTime) {
			endTime = end;
			count++;
		}
	}
	return console.log(count);
}

maxMeeting(+n, times);

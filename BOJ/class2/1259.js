const fs = require("fs");
const [...tests] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// 마지막 0 제거
tests.splice(tests.length - 1, 1);

function palindrome(words) {
	const answer = [];
	words.forEach((word) => {
		let flag = true;
		for (let i = 0; i < word.length; i++) {
			if (word[i] !== word[word.length - i - 1]) {
				flag = false;
				break;
			}
		}
		answer.push(flag ? "yes" : "no");
	});
	console.log(answer.join("\n"));
}

palindrome(tests);

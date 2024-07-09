const fs = require("fs");
const [N, input] = fs.readFileSync(0, "utf-8").toString().trim().split(`\n`);
const scores = input.split(" ");

function solution(N, scores) {
	let answer = 0;
	// 자기 점수 중 최댓값 고르기
	const maxScore = Math.max(...scores);
	// 모든 점수를 (점수/M*100)으로 고치기
	const newScores = scores.map((score) => (+score / +maxScore) * 100);

	// 새로운 평균 구하기
	newScores.forEach((score) => (answer += +score));
	answer /= N;
	if (!(answer % 1)) answer = answer.toFixed(1);
	return console.log(answer);
}

solution(N, scores);

//Level 1 - 3진법 뒤집기
function solution(n) {
	var answer = 0;
	answer = parseInt(n.toString(3).split("").reverse().join(""), 3);
	return answer;
}

//다른 풀이 - 화살표 함수, seperate operation
const solution = (n) => {
	return parseInt([...n.toString(3)].reverse().join(""), 3);
};

//다른 풀이 2 - 내장함수 없이 구현하기

function solution(n) {
	const answer = [];
	while (n !== 0) {
		answer.unshift(n % 3);
		n = Math.floor(n / 3);
	}
	return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}

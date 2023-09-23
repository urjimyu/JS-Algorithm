//Level 1 - 콜라츠 추측 문제 풀이
function solution(num) {
	let i = 0;
	if (num === 1) {
		return 0;
	}
	while (num !== 1 && i <= 500) {
		if (num % 2 === 0) {
			num = num / 2;
		} else {
			num = num * 3 + 1;
		}
		i++;
	}
	if (i === 501) {
		return -1;
	}
	return i;
}

//다른 풀이 1 - 내 풀이와 비슷하지만 좀 더 간결
function collatz(num) {
	var answer = 0;
	while (num != 1 && answer != 500) {
		num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
		answer++;
	}
	return num == 1 ? answer : -1;
}

//다른 풀이 2 - 함수 분리
const solution = (num) => collatzGuessCount(num, 0);

const collatzGuessCount = (num, acc) =>
	num === 1
		? acc > 500
			? -1
			: acc
		: collatzGuessCount(processCollatz(num), acc + 1);

const processCollatz = (num) => (num % 2 === 0 ? num / 2 : num * 3 + 1);

//다른 풀이 3 - 재귀함수 활용
function collatz(num, count = 0) {
	return num == 1
		? count
		: count >= 500
		? -1
		: solution(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}

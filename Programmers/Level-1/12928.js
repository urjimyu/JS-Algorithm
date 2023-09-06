//Level 1 - 약수의 합 문제 풀이
function solution(n) {
	let divisor = [];
	let answer = 0;

	for (let i = 1; i <= n; i++) {
		if (n % i == 0) {
			divisor.push(i);
		}
	}

	for (let j = 0; j < divisor.length; j++) {
		answer += divisor[j];
	}

	return answer;
}

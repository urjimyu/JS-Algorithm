//Level 1 - 약수의 개수와 덧셈 문제 풀이
function solution(left, right) {
	let sum = 0;
	for (i = left; i < right + 1; i++) {
		//     제곱근이 정수이면 약수의 개수가 홀수
		sum = Number.isInteger(Math.sqrt(i)) ? sum - i : sum + i;
	}
	return sum;
}

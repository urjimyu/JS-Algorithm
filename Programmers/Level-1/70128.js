//Level 1 - 내적 문제 풀이
function solution(a, b) {
	let answer = 0;
	for (i = 0; i < a.length; i++) {
		answer += a[i] * b[i];
	}
	return answer;
}

//다른 풀이 - reduce 활용하기
function solution(a, b) {
	return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

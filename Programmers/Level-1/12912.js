//Level 1 - 두 정수 사이의 합 문제 풀이
function solution(a, b) {
	let sum = 0;
	let min = Math.min(a, b);
	let max = Math.max(a, b);
	for (i = min; i < max + 1; i++) {
		sum += i;
	}
	return sum;
}

//다른 풀이 1 - 같은 방식인데 더 간결하게
function adder(a, b, s = 0) {
	for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
	return s;
}

//다른 풀이 2 - 수학 이용
function adder(a, b) {
	var result = 0;
	return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

//다른 풀이 3 - 삼항연산자 활용
function adder(a, b) {
	var result = a < b ? a : b;
	while (a != b) {
		result += a < b ? ++a : ++b;
	}
	return result;
}
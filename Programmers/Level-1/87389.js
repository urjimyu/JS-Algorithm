//Level 1 - 나머지가 1이 되는 수 찾기 문제 풀이
function solution(n) {
	for (i = 1; i < n; i++) {
		if (n % i === 1) {
			return i;
		}
	}
}

//Level 1 - 정수 제곱근 판별 문제 풀이
function solution(n) {
	for (i = 1; i <= n; i++) {
		if (i ** 2 === n) {
			return (i + 1) ** 2;
		}
	}
	return -1;
}

//다른 풀이 1 - Math.sqrt 이용
return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;

//다른 풀이 2 - Math.pow 이용
function nextSqaure(n) {
	switch (n % Math.sqrt(n)) {
		case 0:
			return Math.pow(Math.sqrt(n) + 1, 2);
		default:
			return "no";
	}
}

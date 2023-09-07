//Level 1 - 자릿수 더하기 문제 풀이
function solution(n) {
	let answer = 0;
	let num = n;

	//length는 숫자에 바로 쓸 수 없다
	for (i = 1; i <= n.toString().length; i++) {
		answer = answer + (num % 10);
		num = parseInt(num / 10);
	}
	return answer;
}

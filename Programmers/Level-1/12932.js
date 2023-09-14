//Level 1 - 자연수 뒤집어 배열로 만들기 문제 풀이
function solution(n) {
	var answer = [];
	let string = n.toString();
	for (i = string.length - 1; i >= 0; i--) {
		answer.push(parseInt(string[i]));
	}
	return answer;
}

//다른 풀이
function solution(n) {
	// 문자풀이
	// return (n+"").split("").reverse().map(v => parseInt(v));

	// 숫자풀이
	var arr = [];

	do {
		arr.push(n % 10);
		n = Math.floor(n / 10);
	} while (n > 0);

	return arr;
}

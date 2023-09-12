//Level 1 - x만큼 간격이 있는 n개의 숫자 문제 풀이

function solution(x, n) {
	var answer = [];
	//1부터 시작해서 x*i 하는 게 더 깔끔,,
	for (i = 0; i < n; i++) {
		answer.push(x + x * i);
	}
	return answer;
}

//다른 풀이
function solution(x, n) {
	return Array(n)
		.fill(x)
		.map((v, i) => (i + 1) * v);
}

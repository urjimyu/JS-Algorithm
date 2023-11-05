//Level 1 - 콜라 문제
function solution(a, b, n) {
	let get = n;
	let sum = 0;
	let leftover = n;
	while (leftover >= a) {
		get = Math.floor(leftover / a) * b;
		sum += get;
		leftover = get + (leftover % a);
	}
	return sum;
}

//다른 풀이 - 수학
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;

//다른 풀이 - 비슷한데 더 간단
//매개변수 변형 가능한지?
function solution(a, b, n) {
	let answer = 0;
	while (n >= a) {
		answer += parseInt(n / a) * b;
		n = parseInt(n / a) * b + (n % a);
	}
	return answer;
}

//Level 1 - 최대공약수, 최소공배수
function solution(n, m) {
	var answer = [];
	let temp = [];
	//최대공약수
	for (i = 2; i <= Math.min(n, m); i++) {
		if (n % i === 0 && m % i === 0) {
			temp.push(i);
		}
	}
	if (!temp[0]) {
		answer.push(1);
	} else {
		answer.push(Math.max(...temp));
	}

	//최소공배수
	answer.push((n * m) / answer[0]);
	return answer;
}

//다른 풀이 1 - for문 다르게 활용
function gcdlcm(a, b) {
	var r;
	for (var ab = a * b; (r = a % b); a = b, b = r) {}
	return [b, ab / b];
}

//다른 풀이 2 - 유클리드 호제법
function greatestCommonDivisor(a, b) {
	return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}
function leastCommonMultipleOfTwo(a, b) {
	return (a * b) / greatestCommonDivisor(a, b);
}
function gcdlcm(a, b) {
	return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
}

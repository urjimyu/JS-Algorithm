//Level 1 - 크기가 작은 부분 문자열
function solution(t, p) {
	let sum = 0;
	for (i = 0; i < t.length - p.length + 1; i++) {
		if (parseInt(t.slice(i, i + p.length)) <= parseInt(p)) {
			sum += 1;
		}
	}
	return sum;
}

//다른 풀이 - +로 숫자 변환
function solution(t, p) {
	let count = 0;
	for (let i = 0; i <= t.length - p.length; i++) {
		let value = t.slice(i, i + p.length);
		if (+p >= +value) count++;
	}
	return count;
}

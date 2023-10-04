//Level 1 - 가운데 글자 가져오기 문제 풀이
function solution(s) {
	if (s.length % 2 !== 0) {
		//[참고]string은 바로 인덱스로 접근 가능하다,,
		return s.slice((s.length + 1) / 2 - 1, (s.length + 1) / 2);
	}
	return s.slice(s.length / 2 - 1, s.length / 2 + 1);
}

//다른 풀이 - index 접근 사용
function solution(s) {
	const mid = Math.floor(s.length / 2);
	return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}

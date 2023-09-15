//Level 1 - 문자열을 정수로 바꾸기 문제 풀이
function solution(s) {
	return Number(s);
}

//JS의 자동 형변환 이용한 다른 풀이 1
function strToInt(str) {
	return str / 1;
}

//JS의 자동 형변환 이용한 다른 풀이 2
function strToInt(str) {
	return +str;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(strToInt("-1234"));

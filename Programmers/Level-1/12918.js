//Level 1 - 문자열 다루기 기본
//isNaN은 알아서 진법이나 지수를 자동 변환 처리 해주기 때문에 부적절
function solution(s) {
	let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	let inputs = s.split("");
	if (s.length === 4 || s.length === 6) {
		for (i = 0; i < s.length; i++) {
			if (!numbers.includes(inputs[i])) {
				return false;
			}
		}
		return true;
	} else return false;
}

//다른 풀이 - 정규식
function alpha_string46(s) {
	var regex = /^\d{6}$|^\d{4}$/;

	return regex.test(s);
}

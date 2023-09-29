//Level 1 - 핸드폰 번호 가리기 문제 풀이
function solution(phone_number) {
	//string to array
	let array_num = [...phone_number];
	for (i = 0; i < phone_number.length - 4; i++) {
		array_num[i] = "*";
	}
	//array to string
	return array_num.join("");
}

//다른 풀이 1 - 정규식 사용
//일반적으로 문자열의 길이가 길지 않은 경우에는 repeat와 slice를 사용하는 것이 더 직관적일 수 있다.
//정규표현식은 문자열의 패턴이나 조건이 복잡할 때 유용.
//replace 때문인지 좀 느린데 slice, padStart를 쓰면 속도가 개선된다고 함
function hide_numbers(s) {
	return s.replace(/\d(?=\d{4})/g, "*");
}

//다른 풀이 2 - slice, repeat 사용
//slice는 음수 지원이 됨
function hide_numbers(s) {
	var result = "*".repeat(s.length - 4) + s.slice(-4);
	return result;
}

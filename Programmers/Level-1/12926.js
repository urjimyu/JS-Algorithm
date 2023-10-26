//Level 1 - 시저 암호 문제 풀이

function solution(s, n) {
	let answer = [];
	//s.charCodeAt(i)를 변수로 빼주면 좋았을 것 같다.
	for (i = 0; i < s.length; i++) {
		if (s.charCodeAt(i) === 32) {
			answer.push(s[i]);
		} else if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
			answer.push(String.fromCharCode(65 + ((s.charCodeAt(i) + n - 65) % 26)));
		} else if (97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 122) {
			answer.push(String.fromCharCode(97 + ((s.charCodeAt(i) + n - 97) % 26)));
		}
	}
	return answer.join("");
}

//다른 풀이 - 아스키 코드 없이 배열로 풀기
function solution(s, n) {
	var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var lower = "abcdefghijklmnopqrstuvwxyz";
	var answer = "";

	for (var i = 0; i < s.length; i++) {
		var text = s[i];
		if (text == " ") {
			answer += " ";
			continue;
		}
		var textArr = upper.includes(text) ? upper : lower;
		var index = textArr.indexOf(text) + n;
		if (index >= textArr.length) index -= textArr.length;
		answer += textArr[index];
	}
	return answer;
}



//Level 1 - 짝수와 홀수 문제 풀이
function solution(num) {
	num % 2 === 0 ? (answer = "Even") : (answer = "Odd");
	return answer;
}

// 다른 풀이 : 0은 false라는 것을 이용
function evenOrOdd(num) {
	return num % 2 ? "Odd" : "Even";
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));

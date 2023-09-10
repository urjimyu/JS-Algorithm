//Level 1 - 평균 구하기 문제 풀이
function solution(arr) {
	let sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}

// reduce와 화살표함수를 사용한 다른 풀이
// function average(array) {
// 	return array.reduce((a, b) => a + b) / array.length;
// }

// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// var testArray = [5, 3, 4];
// console.log("평균값 : " + average(testArray));

//Level 1 - 행렬의 덧셈 문제 풀이
function solution(arr1, arr2) {
	let answer = [];
	for (i = 0; i < arr1.length; i++) {
		let array = [];
		for (j = 0; j < arr1[i].length; j++) {
			array.push(arr1[i][j] + arr2[i][j]);
		}
		answer.push(array);
	}
	return answer;
}

//다른 풀이 - map 활용
function sumMatrix(A, B) {
	return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2]));
}


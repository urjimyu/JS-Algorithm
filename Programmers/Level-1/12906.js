//Level 1 - 같은 숫자는 싫어

function solution(arr) {
	let answer = [];
	// 예전 풀이
	//     answer = arr;
	//     let i = 0;
	//     while (i < arr.length -1){
	//         if (answer[i] === answer[i + 1]){
	//             answer.splice(i+1, 1)}
	//         else i+=1;
	//     }

	//     console.log(answer);
	//     return answer;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i - 1]) {
			continue;
		} else if (arr[i] === arr[i + 1]) {
			answer.push(arr[i]);
			i += 1;
		} else {
			answer.push(arr[i]);
		}
	}
	return answer;
}
//다른 풀이 1 - filter
function solution(arr) {
	return arr.filter((val, index) => val != arr[index + 1]);
}

//다른 풀이 2
function solution(arr) {
	var answer = [arr[0]];

	for (let i = 1; i < arr.length; i++) {
		if (answer[answer.length - 1] !== arr[i]) {
			answer.push(arr[i]);
		}
	}

	return answer;
}

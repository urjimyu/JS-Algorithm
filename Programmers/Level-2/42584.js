// findIndex로 순회하는 부분 때문에 시간초과가 뜸
function solution(prices) {
	var answer = [];
	let tmp = [...prices];

	for (let i = 0; i < prices.length; i++) {
		let term = tmp.findIndex((val) => val < prices[i]);
		if (term === -1) {
			answer.push(prices.length - i - 1);
			tmp.shift();
		} else {
			answer.push(term);
			tmp.shift();
		}
	}

	return answer;
}

// 효율성 보완한 다른 풀이

function solution(prices) {
	const answer = [];
	const stack = [];

	for (let i = 0; i < prices.length; i++) {
    // 스택에 가격 안 떨어진 경우 넣어서 기간 계산
		while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
			const top = stack.pop();
			answer[top] = i - top;
		}
		stack.push(i);
	}

	while (stack.length > 0) {
		const top = stack.pop();
		answer[top] = prices.length - 1 - top;
	}

	return answer;
}

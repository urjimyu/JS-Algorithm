//Level 1 - 최소 직사각형 문제 풀이
function solution(sizes) {
	for (i = 0; i < sizes.length; i++) {
		sizes[i].sort((a, b) => b - a);
	}

	// 자꾸 iterate하는 current는 이중 배열이 아니라 하나의 배열 각각임을 까먹고 잘못된 인덱스로 접근한다..!
	let maxWidth = sizes.reduce((max, current) => {
		return Math.max(max, current[0]);
	}, sizes[0][0]);

	let maxHeight = sizes.reduce((max, current) => {
		return Math.max(max, current[1]);
	}, sizes[0][1]);

	return maxWidth * maxHeight;
}

//다른 풀이 - sort 대신 삼항연산자, reduce 대신 forEach 사용
function solution(sizes) {
	const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

	let maxSize = [0, 0];
	rotated.forEach(([w, h]) => {
		if (w > maxSize[0]) maxSize[0] = w;
		if (h > maxSize[1]) maxSize[1] = h;
	});
	return maxSize[0] * maxSize[1];
}

function solution(triangle) {
  // 삼각형 밑에서부터 큰 수만 골라서 거치도록 계산
	for (let i = triangle.length - 1; i > 0; i--) {
		for (let j = 0; j <= triangle[i].length - 1; j++) {
			triangle[i - 1][j] += Math.max(triangle[i][j], triangle[i][j + 1]);
		}
	}
	return triangle[0][0];
}

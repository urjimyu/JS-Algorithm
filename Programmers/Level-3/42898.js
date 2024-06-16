// 해설 참고
function solution(m, n, puddles) {
// 격자판 만들기
	const matrix = Array.from({ length: n }).map((v) =>
		Array.from({ length: m }).fill(1)
	);

	// 물에 잠긴 구간은 경로 0으로 초기화
	puddles.forEach(([m, n]) => {
		matrix[n - 1][m - 1] = 0;
	});

  // 해당 칸으로 오기까지의 경로의 수를 반영해서 누적
	const result = matrix.reduce((prev, row, i) => {
		return row.reduce((a, v, j) => {
			a[j] =
				(v === 0 ? v : i === 0 ? a[j - 1] ?? 1 : prev[j] + (a[j - 1] ?? 0)) %
				1000000007;
			return a;
		}, []);
	}, []);

	return result[m - 1];
}

/**
 * @param {number} n 선수의 수, 1~100
 * @param {number[][]} results 경기결과, [a, b] === a가 b를 이김
 * @returns {number} 정확하게 순위를 매길 수 있는 선수의 수
 */

// 모든 노드와 연결되어 있어야만 순위를 매길 수 있다.
// 플로이드 와샬 알고리즘 활용 문제 - 정답 풀이 참고(모든 지점에서 다른 모든 지점까지의 최단 경로 구해야 하는 경우)
const solution = (n, results) => {
	// 성적 기록하기
	const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
	results.map((val) => {
		const [win, lose] = val;
		graph[win][lose] = 1;
		graph[lose][win] = -1;
		graph[win][win] = 0;
		graph[lose][lose] = 0;
	});

	const rangeN = [...Array(n).keys()].map((e) => e + 1);

	// 플로이드 와샬 알고리즘 적용
	// 중간단계를 설정해서 승패 비교
	for (const mid of rangeN) {
		for (const a of rangeN) {
			for (const b of rangeN) {
				if (graph[a][mid] === 1 && graph[mid][b] === 1) graph[a][b] = 1;
				if (graph[a][mid] === -1 && graph[mid][b] === -1) graph[a][b] = -1;
			}
		}
	}

	// false => 순위 매길 수 없는 경우
	// 아니라면 ans + 1로 업데이트
	let ans = 0;
	for (const self of rangeN) {
		let hasFalse = false;
		for (const other of rangeN) {
			if (graph[self][other] === false) {
				hasFalse = true;
				break;
			}
		}
		ans += hasFalse ? 0 : 1;
	}

	return ans;
};

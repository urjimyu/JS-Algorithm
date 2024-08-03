function solution(genres, plays) {
	var dic = {};
  // 장르별 누적 재생횟수 기록
	genres.forEach((t, i) => {
		dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
	});

	var dupDic = {};
	return genres
  // 각 고유번호별 정보(장르, 재생수, 인덱스) 저장
		.map((t, i) => ({ genre: t, count: plays[i], index: i }))
		.sort((a, b) => {
      // 재생수 높은 장르별로 내림차순 정렬
			if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
			// 재생수 더 높은 곡으로 내림차순 정렬
      if (a.count !== b.count) return b.count - a.count;
      // 고유번호 오름차순으로 정렬
			return a.index - b.index;
		})
		.filter((t) => {
			if (dupDic[t.genre] >= 2) return false;
      // 가장 앞에 있는 두 개의 노래 선정하기
			dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
			return true;
		})
    // 해당 두 곡의 고유번호 반환
		.map((t) => t.index);
}

// 풀이 2 - reduce 활용
function solution(genres, plays) {
	const count = {};
	let answer = [];

	// 장르별 재생수 누적합 저장
	const acc = genres.reduce((a, c, i) => {
		debugger;
		count[c] ? count[c].push([i, plays[i]]) : (count[c] = [[i, plays[i]]]);
		return a.set(c, a.get(c) ? a.get(c) + plays[i] : plays[i]), a;
	}, new Map());


	[...acc]
// 각 노래 재생수 별 정렬
	.sort((a, b) => b[1] - a[1])
		.map((v) => {
			answer = answer.concat(
				count[v[0]].sort((c, d) => d[1] - c[1]).slice(0, 2)
			);
		});
	return answer.map((v) => v[0]);
}
//단어 변환
// 풀이 1 - 큐 없이 배열 사용

function solution(begin, target, words) {
  const visited = { [begin]: 0 };
  const queue = [begin];

  while (queue.length) {
    const cur = queue.shift();

    if (cur === target) break;

    for (const word of words) {
      // 한 철자만 다르면서 방문하지 않은 경우 큐에 넣어주기
      if (isConnected(word, cur) && !visited[word]) {
        visited[word] = visited[cur] + 1;
        queue.push(word);
      }
    }
  }
  return visited[target] ? visited[target] : 0;
}

const isConnected = (str1, str2) => {
  let count = 0;
  const len = str1.length;

  for (let i = 0; i < len; i++) {
    if (str1[i] !== str2[i]) count++;
  }

  return count === 1 ? true : false;
};

function solution(N, number) {
	if (N === number) return 1;

	const dp = Array.from({ length: 9 }, () => new Set());
	dp[1].add(N);

	for (let i = 2; i <= 8; i++) {
		dp[i].add(Number(N.toString().repeat(i)));

		for (let j = 1; j < i; j++) {
			for (const x of dp[j]) {
				for (const y of dp[i - j]) {
					dp[i].add(x + y);
					dp[i].add(x - y);
					dp[i].add(x * y);
					if (y !== 0 && y) dp[i].add(Math.floor(x / y));
				}
			}
			if (dp[i].has(number)) return i;
		}
	}
	return -1;
}
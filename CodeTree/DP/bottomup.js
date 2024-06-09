function fibbo(n) {
	let memo = Array.from({ length: n + 1 }, () => -1);
	memo[1] = 1;
	memo[2] = 1;

	for (let i = 3; i < n + 1; i++) {
		memo[i] = memo[i - 1] + memo[i - 2];
	}
	return memo[n];
}

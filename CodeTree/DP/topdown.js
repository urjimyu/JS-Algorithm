function fibbo(n) {
	let memo = Array.from({ length: n + 1 }, () => -1);

	if (memo[n] != -1) memo[n];
	else if (n < 3) memo[n] = 1;
	else {
		memo[n] = fibbo(n - 1) + fibbo(n - 2);
	}
	return memo[n];
}

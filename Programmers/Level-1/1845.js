function solution(nums) {
	const limit = nums.length / 2;
	let tmp = new Set(nums);
	let types = [...tmp].length;
	if (limit <= types) return limit;
	else return types;
}

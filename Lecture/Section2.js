function oxGame(n, scores) {
	let flattened_score = "";
	for (x of scores) {
		flattened_score += x;
	}

	console.log("FLATTENED", flattened_score);
	let new_array = flattened_score.split("0");
	let filtered_array = new_array.filter((item) => item);
	let answer = 0;

	for (i = 0; i < filtered_array.length; i++) {
		let items = filtered_array[i].length;
		answer += (items * (items + 1)) / 2;
	}
	return answer;
}

function calcRank(n, scores) {
	let rank = [];
	let new_order = [...scores].sort((a, b) => b - a);
	for (i = 0; i < n; i++) {
		rank[i] = new_order.indexOf(scores[i]) + 1;
	}
	return rank;
}

function maxValue(n, values) {
	let diagonal_sum_left = 0;
	let diagonal_sum_right = 0;
	// 배열 각각 초기화?
	let rows_sum = [];
	let columns_sum = [];
	let diagonals_sum = [];
  
	for (i = 0; i < n; i++) {
		let row_sum = 0;
		let column_sum = 0;

		for (j = 0; j < n; j++) {
			row_sum += values[i][j];
			column_sum += values[j][i];
		}

		diagonal_sum_right += values[i][n + 1 - i];
		diagonal_sum_left += values[i][i];
		rows_sum.push(row_sum);
		columns_sum.push(column_sum);

		diagonals_sum.push(diagonal_sum_right);
		diagonals_sum.push(diagonal_sum_left);

		row_sum = 0;
		column_sum = 0;
	}

	let maxSum =
		Math.max(...diagonals_sum) +
		Math.max(...columns_sum) +
		Math.max(...rows_sum);

	return maxSum;
}
// console.log(oxGame(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
// console.log(calcRank(5, [87, 89, 92, 100, 76]));
let arr = [
	[10, 13, 10, 12, 15],
	[12, 39, 30, 23, 11],
	[11, 25, 50, 53, 15],
	[19, 27, 29, 37, 27],
	[19, 13, 30, 13, 19],
];
console.log(maxValue(5, arr));

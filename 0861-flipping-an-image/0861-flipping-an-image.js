/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
	image.forEach((row) => {
		row.reverse();
		row.forEach((el, index) => {
			row[index] = el === 1 ? 0 : 1;
		});
		// row = row.map((el)=> (el === 1)? 0: 1);
	});

	return image;
};


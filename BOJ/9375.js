const [n, ...cases] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const countDays = () => {
	const answer = [];
	let leftCases = [...cases];

	for (let i = 0; i < n; i++) {
		const clothesNum = Number(leftCases.shift());
		const clothes = leftCases
			.slice(0, clothesNum)
			.map((item) => item.split(" "));

		const clothHash = {};

		clothes.forEach(([name, type]) => {
			if (!clothHash[type]) {
				clothHash[type] = [];
			}
			clothHash[type].push(name);
		});

		let sum = Object.values(clothHash).reduce(
			(acc, cur) => acc * (cur.length + 1),
			1
		);
		answer.push(sum - 1);

		leftCases = leftCases.slice(clothesNum);
	}
	console.log(answer.join("\n"));
};

countDays();

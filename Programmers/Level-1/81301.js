// Level 1 - 숫자 문자열과 영단어
function solution(s) {
	const NUMBERS = [
		{
			number: 0,
			alphabets: "zero",
		},
		{
			number: 1,
			alphabets: "one",
		},
		{
			number: 2,
			alphabets: "two",
		},
		{
			number: 3,
			alphabets: "three",
		},
		{
			number: 4,
			alphabets: "four",
		},
		{
			number: 5,
			alphabets: "five",
		},
		{
			number: 6,
			alphabets: "six",
		},
		{
			number: 7,
			alphabets: "seven",
		},
		{
			number: 8,
			alphabets: "eight",
		},
		{
			number: 9,
			alphabets: "nine",
		},
	];

	NUMBERS.forEach((letters) => {
		const { number, alphabets } = letters;
		if (s.includes(alphabets)) {
			s = s.replaceAll(alphabets, number);
		}
	});
	return Number(s);
}

//다른 풀이 1 - split과 반복문 사용
function solution(s) {
	let numbers = [
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
	];
	var answer = s;

	for (let i = 0; i < numbers.length; i++) {
		let arr = answer.split(numbers[i]);
		answer = arr.join(i);
	}

	return Number(answer);
}

//다른 풀이 2 - set 활용, 반복문
function solution(s) {
	let charSet = {
		zero: 0,
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
	};

	for (let [key, value] of Object.entries(charSet)) {
		let re = new RegExp(`${key}`, "g");
		s = s.replace(re, value);
	}
	return parseInt(s);
}

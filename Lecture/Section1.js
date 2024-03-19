function printSum(N) {
	let result = (N * (1 + N)) / 2;
	return result;
}

function checkCars(N, cars) {
	let car = cars.filter((car) => car % 10 === N);
	return car.length;
}

function findRealFamily(arr) {
	let result = [];
	let sum = 0;
	for (height of arr) {
		if (sum === 100) {
			return result;
		}
		sum += height;
		result.push(height);
	}
}

function noRepeat(str) {
	let result = "";
	for (x of str) {
		if (!result.includes(x)) {
			result += x;
		}
	}
	return result;
}

// 더 효율적인 중복문자 제거 방법 : Set
function noRepeat2(str) {
	// Set 객체를 사용하여 중복되지 않는 문자만 선택
	const uniqueChars = new Set(str);
	// Set을 다시 문자열로 변환하여 반환
	return [...uniqueChars].join("");
}

function noRepeatedWords(N, strings) {
	let answer = [];
	for (i = 0; i < N; i++) {
		answer.push(strings[i]);
	}
	return new Set(answer);
}

// console.log(printSum(7));
// console.log(checkCars(0, [12, 20, 54, 30, 87, 91, 30]));
// let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
// console.log(findRealFamily(arr));
// console.log(noRepeat("ksekkset"));
console.log(noRepeatedWords(5, ["good", "time", "good", "time", "student"]));

//Level 1 - 부족한 금액 계산하기 문제 풀이
function solution(price, money, count) {
	let cost = 0;
	//굳이 balance 안 만들고 그냥 cost랑 money 비교해도 된다
	let balance = 0;
	for (i = 1; i < count + 1; i++) {
		cost += i * price;
	}
	balance = money - cost;
	return balance < 0 ? -balance : 0;
}

//다른 풀이 1 - 가우스 공식 사용
function solution(price, money, count) {
	const tmp = (price * count * (count + 1)) / 2 - money;
	return tmp > 0 ? tmp : 0;
}

//다른 풀이 2 -

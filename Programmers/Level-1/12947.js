Level 1 - 하샤드 수 문제 풀이

//toString에 () 안 써서 결과가 이상했었다. 유의!
function solution(x) {
	let num = x;
	let sum = 0;
	for (i = 0; i < x.toString().length; i++) {
		sum += num % 10;
		num = Math.floor(num / 10);
	}
	return x % sum === 0;
}

//다른 풀이 1 - 숫자 접근이 문자보다 빠르다.
function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}

//다른 풀이 2
function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

//다른 풀이 3
var result = [...x.toString()].reduce((acc, curr) => +acc + +curr, 0);
//Level 1 - 서울에서 김서방 찾기 문제 풀이
function solution(seoul) {
	let location = seoul.indexOf("Kim");
	return `김서방은 ${location}에 있다`;
}

//비슷한데 다르게 return하기
function findKim(seoul) {
	var idx = seoul.indexOf("Kim");

	return "김서방은 " + idx + "에 있다";
}

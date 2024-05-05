function solution(phone_book) {
	phone_book.sort();

	for (let i = 0; i < phone_book.length - 1; i++) {
		let len = phone_book[i].length;
		if (phone_book[i] === phone_book[i + 1].slice(0, len)) return false;
	}
	return true;
}

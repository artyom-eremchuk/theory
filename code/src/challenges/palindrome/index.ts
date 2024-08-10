// ========== 1 ==========
// function palindrome(str: string): boolean {
// 	const reversed = str.split("").reverse().join("");

// 	return str === reversed;
// }

// ========== 2 ==========
function palindrome(str: string): boolean {
	return str.split("").every((char, i) => {
		return char === str[str.length - i - 1];
	});
}

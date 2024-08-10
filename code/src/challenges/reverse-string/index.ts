// ========== 1 ==========
// function reverse(str: string): string{
//   return str.split('').reverse().join('');
// }

// ========== 2 ==========
// function reverse(str: string): string {
// 	let reversed = "";

// 	for (const character of str) {
// 		reversed = character + reversed;
// 	}

// 	return reversed;
// }

// ========== 3 ==========
function reverse(str: string): string {
	return str
		.split("")
		.reduce((reversed, character) => character + reversed, "");
}

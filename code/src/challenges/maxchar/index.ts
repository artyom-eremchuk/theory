// ========== 1 ==========
interface CharMap {
	[key: string]: number;
}

export function maxChar(str: string): string {
	const charMap: CharMap = {};
	let max = 0;
	let maxChar = "";

	for (const char of str) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}

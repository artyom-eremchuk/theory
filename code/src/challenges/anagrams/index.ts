// ========== 1 ==========
// interface CharMap {
// 	[key: string]: number;
// }

// function buildCharMap(str: string) {
// 	const charMap: CharMap = {};

// 	for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}

// 	return charMap;
// }

// export function anagrams(stringA: string, stringB: string): boolean {
// 	const aCharMap = buildCharMap(stringA);
// 	const bCharMap = buildCharMap(stringB);

// 	if (Object.keys(aCharMap) !== Object.keys(bCharMap)) {
// 		return false;
// 	}

// 	for (let char in aCharMap) {
// 		if (aCharMap[char] !== bCharMap[char]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// ========== 2 ==========
export function anagrams(stringA: string, stringB: string): boolean {
	return cleanString(stringA) == cleanString(stringB);
}

function cleanString(str: string) {
	return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

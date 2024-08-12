// ========== 1 ==========
// export function chunk(array: number[], size: number): number[][] {
// 	const chunked: number[][] = [];

// 	for (const element of array) {
// 		const last = chunked[chunked.length - 1];

// 		if (!last || last.length === size) {
// 			chunked.push([element]);
// 		} else {
// 			last.push(element);
// 		}
// 	}

// 	return chunked;
// }

// ========== 2 ==========
export function chunk(array: number[], size: number): number[][] {
	const chuncked = [];
	let index = 0;

	while (index < array.length) {
		chuncked.push(array.slice(index, index + size));
		index += size;
	}

	return chuncked;
}

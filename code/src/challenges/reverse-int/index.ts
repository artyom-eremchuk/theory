// ========== 1 ==========
export function reverseInt(n: number): number {
	const reversed = n.toString().split("").reverse().join("");

	return parseInt(reversed) * Math.sign(n);
}

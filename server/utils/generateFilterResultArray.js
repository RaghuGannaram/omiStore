function generateFilterResultArray(products, targetProp) {
	let result_set = new Set();
	for (const p of products) {
		result_set.add(p[targetProp]);
	}
	return Array.from(result_set);
}

module.exports = generateFilterResultArray;

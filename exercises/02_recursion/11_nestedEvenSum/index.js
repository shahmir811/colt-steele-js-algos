// Write a recursive function called nestedEvenSum that returns the sum of all even numbers in an object which may contain nested objects.

const nestedEvenSum = obj => {
	let sumAllEven = 0;

	const helper = obj => {
		if (Object.keys(obj).length === 0) return sumAllEven;

		for (const key in obj) {
			if (typeof obj[key] === 'object') {
				helper(obj[key]);
			} else {
				const isEven =
					typeof obj[key] === 'number' && obj[key] % 2 === 0 ? obj[key] : 0;

				sumAllEven += isEven;
			}
		}
	};

	helper(obj);

	return sumAllEven;
};

module.exports = nestedEvenSum;

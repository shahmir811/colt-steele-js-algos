// Radix Sort Pseudocode
// 1 - Define a function that accepts list of numbers
// 2 - Figure out how many digits the largest number has
// 3 - Loop from k = 0 up to this largest number of digits
// 4 - For each iteration of the loop:
//     a - Create buckets (empty arrays) for each digit (0 to 9)
//     b - place each number in the corresponding bucket based on its kth digit
// 5 - Replace our existing array with values in our buckets (using spread operator), starting with 0 and going up to 9
// 6 - return list at the end!

const helper = require('./helper');
const getDigit = helper.getDigit;
// const digitCount = helper.digitCount;
const mostDigits = helper.mostDigits;

const radixSort = num => {
	const maxDigitCount = mostDigits(num);

	for (let k = 0; k < maxDigitCount; k++) {
		const digitBuckets = [];

		// Creating empty buckets from 0 - 9
		for (let j = 0; j < 10; j++) {
			digitBuckets.push([]);
		}

		// placing each letter in the corresponding bucket based on the digit
		for (let i = 0; i < num.length; i++) {
			const digit = getDigit(num[i], k);
			const bucket = digitBuckets[digit];
			bucket.push(num[i]);
		}

		// combining/concating the items back to num array
		num = [].concat(...digitBuckets);
	}

	return num;
};

module.exports = radixSort;

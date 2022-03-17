// Write a function sumZero which accepts a sorted array (sorted from lowest to highest) of integers.
// The function should find the first pair where the sum is zero.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Examples
// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined

// *******************************************************************************
// Time complexity - O(n)
// Space complexity - O(1)

const sumZero = arr => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
};

module.exports = sumZero;

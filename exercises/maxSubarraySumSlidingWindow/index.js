// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray
// with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below,
// [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// *********************************************************************** //
// Below solution is achieved using SLIDING WINDOW approach
// Following approach has time complexity - O(n)
// Space Complexity - O(1)

const maxSubarraySum = (array, num) => {
	if (array.length < num) return null;

	let maxSum = 0;
	let tempSum = 0;

	for (let i = 0; i < num; i++) {
		maxSum += array[i];
	}

	tempSum = maxSum;

	for (let i = num; i < array.length; i++) {
		tempSum = tempSum + array[i] - array[i - num];
		maxSum = Math.max(tempSum, maxSum);
	}

	return maxSum;
};

module.exports = maxSubarraySum;

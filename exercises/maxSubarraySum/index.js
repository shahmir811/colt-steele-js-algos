// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// *********************************************************************** //
// Following is a naive approach
// Time complexity - O(n ** 2)

// const maxSubarraySum = (arr, num) => {
// 	if (num > arr.length) {
// 		return null;
// 	}
// 	let max = -Infinity;
// 	for (let i = 0; i < arr.length - num + 1; i++) {
// 		temp = 0;
// 		for (let j = 0; j < num; j++) {
// 			temp += arr[i + j];
// 		}
// 		if (temp > max) {
// 			max = temp;
// 		}
// 	}
// 	return max;
// };

// *********************************************************************** //
// Following is a good approach
// Time complexity - O(n)

const maxSubarraySum = (arr, num) => {
	if (arr.length < num) return null;

	let maxSum = 0;
	let tempSum = 0;

	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	tempSum = maxSum;

	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum + arr[i] - arr[i - num];
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;
};

module.exports = maxSubarraySum;

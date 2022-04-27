// DIVIDE AND CONQUER PROBLEM
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes,
// which returns the number of zeroes in the array.

// Time Complexity - O(log n)

const countZeroes = arr => {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	if (arr[leftIndex] === 0) return arr.length;
	if (arr[rightIndex] === 1) return 0;

	let middle;

	while (leftIndex < rightIndex) {
		middle = Math.floor((leftIndex + rightIndex) / 2);

		if (arr[middle] === 1) {
			leftIndex = middle + 1;
		} else {
			rightIndex = middle;
		}
	}

	return arr.length - leftIndex;
};

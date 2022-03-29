// INSERTIONSORT PSEUDOCODE
// 1 - Start by picking the second element in the array.
// 2 - Now compare the second element with the one before it and swap if necessary.
// 3 - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion.
// (i-e the left side) to place the element in the correct place.
// 4 - Repeat until the array is sorted.

// ***************************************************************
// NOTE: Insertion sort is helpful when you have new records coming and you need to place the new data in a proper place

// ***************************************************************
// Time complexity - O(n^2)

const insertionSort = arr => {
	for (let i = 1; i < arr.length; i++) {
		let currVal = arr[i];
		let index = i;
		for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
			arr[j + 1] = arr[j];
			index = j;
		}
		arr[index] = currVal;
	}
	return arr;
};

insertionSort([2, 1, 9, 76, 4]);
module.exports = insertionSort;

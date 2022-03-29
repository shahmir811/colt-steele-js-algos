// SELECTIONSORT PSEUDOCODE
// 1 - Store the first element as the smallest value you have seen so far.
// 2 - Compare this item to the next item in the array until you find a smaller number
// 3 - If the smaller number is found, designate that smaller number to be the new "minimum" and continue
// until the end of the array.
// 4 - If the "minimum" is the not the value (index) you initially begin with, swap the two values
// 5 - Repeat this with the next element until the array is sorted

// ***************************************************************
// Time complexity - O(n^2)

const selectionSort = array => {
	for (let i = 0; i < array.length; i++) {
		let lowest = i;

		for (let j = i + 1; j < array.length; j++) {
			if (array[lowest] > array[j]) {
				lowest = j;
			}
		}

		if (i !== lowest) {
			// SWAP
			const temp = array[i];
			array[i] = array[lowest];
			array[lowest] = temp;
		}
	}

	return array;
};

module.exports = selectionSort;

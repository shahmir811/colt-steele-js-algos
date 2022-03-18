// Given a SORTED array of integers, write a function called search, that accepts a value and returns the index
// where the value passed to the function is located.
// If value is not found, return -1

// *********************************************************************** //
// Linear search
// Following is a naive approach
// Time complexity - O(n)

// const search = (array, value) => {
// 	let index = -1;

// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] === value) {
// 			index = i;
// 		}
// 	}

// 	return index;
// };

// *********************************************************************** //
// Binary search
// Following is a good approach
// Time complexity - O(log n)

const search = (array, value) => {
	let min = 0;
	let max = array.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		let currentElement = array[middle];

		if (currentElement < value) {
			min = middle + 1;
		} else if (currentElement > value) {
			max = middle - 1;
		} else {
			return middle;
		}
	}

	return -1;
};

module.exports = search;

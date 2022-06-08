// BUBBLESORT PSEUDOCODE
// 1 - Start looping from a variable called "i" from the end of the array towards the beginning
// 2 - Start inner loop with a variable called "j", start from beginning until i - 1
// 3 - If array[j] > array[j + 1], swap those two values
// 4 - Return the sorted array

// REMEMBER:
// Insertiong sort is useful when you are pretty sure that the list is almost sorted.

// ***************************************************************
// Time complexity - O(n^2)

// const bubbleSort = array => {
// 	for (let i = array.length; i > 0; i--) {
// 		for (let j = 0; j < i - 1; j++) {
// 			if (array[j] > array[j + 1]) {
// 				// swap
// 				const temp = array[j];
// 				array[j] = array[j + 1];
// 				array[j + 1] = temp;
// 			}
// 		}
// 	}

// 	return array;
// };

// ***************************************************************
// Following is the optimized way of using BubbleSort (with noSwaps)

const bubbleSort = array => {
	let noSwaps;
	for (let i = array.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (array[j] > array[j + 1]) {
				// swap
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				noSwaps = false;
			}
		}

		if (noSwaps) break;
	}

	return array;
};

// ***************************************************************
// Following is the Stephen Grider's implementation of Bubble Sort

// const bubbleSort = array => {
// 	let noSwaps;
// 	for (let i = 0; i < array.length; i++) {
// 		noSwaps = true;
// 		for (let j = 0; j < array.length - i - 1; j++) {
// 			if (array[j] > array[j + 1]) {
// 				const temp = array[j];
// 				array[j] = array[j + 1];
// 				array[j + 1] = temp;
// 				noSwaps = false;
// 			}
// 		}
// 		if (noSwaps) break;
// 	}

// 	return array;
// };

module.exports = bubbleSort;

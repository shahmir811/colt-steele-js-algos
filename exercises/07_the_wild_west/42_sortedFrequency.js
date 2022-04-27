// DIVIDE AND CONQUER PROBLEM
// Given a sorted array and a number, write a function called sortedFrequency, that counts the occurrences
// of the number in the array

// Time Complexity - O(log n)

const sortedFrequency = (arr, num) => {
	let count = 0;

	const helper = arr => {
		if (arr.length === 1) {
			if (arr[0] === num) count++;
			return;
		}

		let mid = Math.floor(arr.length / 2);

		helper(arr.slice(0, mid));
		helper(arr.slice(mid));
	};

	helper(arr);

	return count === 0 ? -1 : count;
};

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2);

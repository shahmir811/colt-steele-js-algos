// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists.
// If the value does not exist in the array, return -1.

// Don't use indexOf to implement this function!

// Time Complexity - O(n)

const linearSearch = (array, val) => {
	for (let index = 0; index < array.length; index++) {
		if (val === array[index]) return index;
	}

	return -1;
};

module.exports = linearSearch;

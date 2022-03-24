// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

const capitalizeWords = array => {
	const newArray = [];

	const helper = array => {
		if (array.length === 0) return newArray;
		const element = array[0].toUpperCase();
		newArray.push(element);

		helper(array.slice(1));
	};

	helper(array);
	return newArray;
};

module.exports = capitalizeWords;

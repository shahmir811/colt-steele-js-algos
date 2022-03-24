// Write a recursive function called capitalizeFirst which takes an array of strings, and capitalize the first letter of each string in the array.

const makeItCapital = letter => {
	const char = letter[0].toUpperCase();
	const remaining = letter.split('').slice(1).join('');
	return char + remaining;
};

const capitalizeFirst = array => {
	const newArray = [];

	const helper = array => {
		if (array.length === 0) return newArray;

		newArray.push(makeItCapital(array[0]));
		helper(array.slice(1));
	};

	helper(array);
	return newArray;
};

module.exports = capitalizeFirst;

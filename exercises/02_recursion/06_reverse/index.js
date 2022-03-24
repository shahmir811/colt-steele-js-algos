// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

const reverse = str => {
	let reverseStr = '';

	const helper = array => {
		if (array.length === 0) return reverseStr;

		const element = array.pop();
		reverseStr = reverseStr + element;
		helper(array);
	};

	helper(str.split(''));

	return reverseStr;
};

module.exports = reverse;

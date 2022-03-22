// Write a recursive function called isPalidrome which returns true if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

const isPalidrome = str => {
	let reverseStr = '';

	const helper = array => {
		if (array.length === 0) return reverseStr;

		const element = array.pop();
		reverseStr = reverseStr + element;
		helper(array);
	};

	helper(str.split(''));

	return reverseStr === str;
};

module.exports = isPalidrome;

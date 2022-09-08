// *********************************************************************** //
// ******************* 1st Helper Method ********************************* //
// *********************************************************************** //

// Write a function called getDigit that accepts a number and place (from end).
// Return the digit that comes at the mentioned place from the end (not from the start).

// Following is my solution

// const getDigit = (number, place) => {
// 	const strNum = number.toString();

// 	let requiredIndex = strNum.length - 1 - place;
// 	const requiredNum = strNum[requiredIndex];
// 	return requiredNum ? parseInt(requiredNum) : 0;
// };

// Following is Colt Steele solution

const getDigit = (num, place) => {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

// *********************************************************************** //
// ******************* 2nd Helper Method ********************************* //
// *********************************************************************** //

// Write a function called digitCount that accepts a number. You need to return the number of digits in the number

// Following is my solution

// const digitCount = num => {
// 	return Math.abs(num).toString().length;
// };

// Following is Colt Steele solution

const digitCount = num => {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// *********************************************************************** //
// ******************* 3rd Helper Method ********************************* //
// *********************************************************************** //

// Write a function called mostDigits that accepts an array of numbers and return the number of digits of the largest numbers in the array

const mostDigits = nums => {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
};

module.exports = {
	getDigit,
	digitCount,
	mostDigits,
};

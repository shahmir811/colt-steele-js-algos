// Write a function called same, which accepts 02 arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// Order is not matter but the frequency of values must be the same.

// same([1,2,3], [4, 1, 9]) // true
// same([1,2,3], [1, 9]) // false
// same([1,2,1], [4, 4, 1]) // false (must be same frequency)

// *********************************************************************** //
// Following is not a best approach. Time complexity - O(n ** 2)

// const same = (arr1, arr2) => {
// 	if (arr1.length !== arr2.length) {
// 		return false;
// 	}

// 	for (const element of arr1) {
// 		const index = arr2.indexOf(element * element);

// 		if (index === -1) {
// 			return false;
// 		}
// 		arr2.splice(index, 1);
// 	}

// 	return true;
// };

// *********************************************************************** //
// Following is a best approach. Time complexity - O(n)

const same = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;

	const obj1 = {};
	const obj2 = {};

	for (const element of arr1) {
		obj1[element] = ++obj1[element] || 1;
	}

	for (const element of arr2) {
		obj2[element] = ++obj2[element] || 1;
	}

	console.log(obj1);
	console.log(obj2);

	for (const key in obj1) {
		if (!(key ** 2 in obj2)) {
			return false;
		}

		if (obj1[key] !== obj2[key ** 2]) {
			return false;
		}
	}
	return true;
};

module.exports = same;

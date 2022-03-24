// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers
// and converts them to strings. Recursion would be a great way to solve this!

// Following is my solution
// const stringifyNumbers = oldObj => {
// 	// JSON methods carry a deep copy.
// 	const newObj = JSON.parse(JSON.stringify(oldObj));

// 	const helper = obj => {
// 		for (const key in obj) {
// 			if (typeof obj[key] === 'object') {
// 				helper(obj[key]);
// 			} else {
// 				if (typeof obj[key] === 'number') {
// 					obj[key] = obj[key].toString();
// 				}
// 			}
// 		}
// 	};

// 	helper(newObj);
// 	return newObj;
// };

// ********************************************************* //

// Following is Colt Steele solution
const stringifyNumbers = obj => {
	let newObj = {};
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			newObj[key] = obj[key].toString();
		} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			newObj[key] = stringifyNumbers(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj;
};

module.exports = stringifyNumbers;

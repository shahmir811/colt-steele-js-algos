// Write a function called areThereDuplicates which accepts a variable number of arguments and
// check whether there are any duplicates among the arguments passed in.
// You can solve this using the FREQUENCY COUNTER PATTERN or the MULTIPLE POINTERS PATTERN

// *********************************************************************** //
// Frequency counter pattern. Time complexity - O(n)

// const areThereDuplicates = (...args) => {
// const obj = {};

// for (const element of args) {
// 	obj[element] = ++obj[element] || 1;
// }

// for (const key in obj) {
// 	if (obj[key] > 1) {
// 		return true;
// 	}
// }

// return false;
// };

// *********************************************************************** //
// Multiple pointers pattern. Time complexity - O(n)

// const areThereDuplicates = (...args) => {
// 	// Two pointers
// 	args.sort();
// 	let start = 0;
// 	let next = 1;
// 	while (next < args.length) {
// 		if (args[start] === args[next]) {
// 			return true;
// 		}
// 		start++;
// 		next++;
// 	}
// 	return false;
// };

// *********************************************************************** //
// One Linear solution. Time complexity - O(n)

function areThereDuplicates() {
	return new Set(arguments).size !== arguments.length;
}

// areThereDuplicates('a', 'b', 'c', 'd', 'e', 'f', 'c');

module.exports = areThereDuplicates;

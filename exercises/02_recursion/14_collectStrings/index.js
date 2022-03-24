// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const collectStrings = obj => {
	const newArray = [];

	const helper = obj => {
		for (const key in obj) {
			if (typeof obj[key] === 'object') {
				helper(obj[key]);
			} else {
				newArray.push(obj[key].toString());
			}
		}
	};

	helper(obj);
	return newArray;
};

// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// *********************************************************************** //
// Following is a best approach. Time complexity - O(n)

const averagePair = (arr, avg) => {
	if (arr.length === 0) return false;

	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const calculateAvg = (arr[left] + arr[right]) / 2;
		if (calculateAvg === avg) {
			return true;
		} else if (calculateAvg < avg) {
			left++;
		} else {
			right--;
		}
	}
	return false;
};

module.exports = averagePair;

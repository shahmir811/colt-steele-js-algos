// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first
// string form a subsequence of the characters in the second string. In other words, the function should check whether
// the characters in the first string appear somewhere in the second string,

// *********************************************************************** //
// Following approach has time complexity - O(n + m)
// Space Complexity - O(1)

const isSubsequence = (str1, str2) => {
	var i = 0;
	var j = 0;
	if (!str1) return true;
	while (j < str2.length) {
		if (str2[j] === str1[i]) i++;
		if (i === str1.length) return true;
		j++;
	}
	return false;
};

// *********************************************************************** //
// Following is a rescursive approach. Time complexity - O(n + m)
// Space Complexity - Not O(1)

// const isSubsequence = (str1, str2) => {
// 	if (str1.length === 0) return true;
// 	if (str2.length === 0) return false;
// 	if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
// 	return isSubsequence(str1, str2.slice(1));
// };

module.exports = isSubsequence;

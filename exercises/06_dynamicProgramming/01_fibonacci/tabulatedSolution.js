// Bottom-top approach. Time complexity - O(n)

// Remember:
// Its better than memoized solution because if you calculate fib(10000) with memoized solution,
// you will encounter an error "Maximum call stack size exceeded".
// But you will not get any error by using the tabulated solution, rather you will get an Infinity (in javascript).

// Both have same time complexity (O(n)) but space complexity of memoized solution is worse than tabulated solution.

const fib = n => {
	if (n <= 2) return 1;
	let fibNums = [0, 1, 1];

	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}

	return fibNums[n];
};

fib(10);

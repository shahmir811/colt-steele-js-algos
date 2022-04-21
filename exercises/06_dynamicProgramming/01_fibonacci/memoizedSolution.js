// Big O Notation of following problem is - O(n) Linear

const fib = (n, memo = []) => {
	if (memo[n] !== undefined) return memo[n];
	if (n <= 2) return 1;

	let res = fib(n - 1, memo) + fib(n - 2, memo);
	memo[n] = res;

	return res;
};

fib(10);

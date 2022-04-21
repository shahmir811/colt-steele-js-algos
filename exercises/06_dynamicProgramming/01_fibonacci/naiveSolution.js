// Big O Notation of following problem is - O(2^n) Exponential

const fib = n => {
	if (n <= 2) return 1;

	return fib(n - 1) + fib(n - 2);
};

fib(5);

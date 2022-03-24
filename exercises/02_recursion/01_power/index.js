// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()
// Donot worry about the negative bases and exponents

const power = (base, exponent) => {
	if (exponent === 0) return 1;

	return base * power(base, exponent - 1);
};

module.exports = power;

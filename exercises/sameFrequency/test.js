const sameFrequency = require('./index');

test('sameFrequency function exists', () => {
	expect(typeof sameFrequency).toEqual('function');
});

test('Must be true for digits 182 and 281', () => {
	expect(sameFrequency(182, 281)).toBeTruthy();
});

test('Must be false for digits 34 and 14', () => {
	expect(sameFrequency(34, 14)).toBeFalsy();
});

test('Must be true for digits 3589578 and 5879358', () => {
	expect(sameFrequency(3589578, 5879358)).toBeTruthy();
});

test('Must be true for digits 22 and 222', () => {
	expect(sameFrequency(22, 222)).toBeFalsy();
});

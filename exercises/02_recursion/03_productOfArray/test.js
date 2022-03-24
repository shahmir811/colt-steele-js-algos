const productOfArray = require('./index');

test('productOfArray function exists', () => {
	expect(typeof productOfArray).toEqual('function');
});

test('product of elements in array[1, 2, 3] is equal to 6', () => {
	expect(productOfArray([1, 2, 3])).toEqual(6);
});

test('product of elements in array[1, 2, 3, 10] is equal to 60', () => {
	expect(productOfArray([1, 2, 3, 10])).toEqual(60);
});

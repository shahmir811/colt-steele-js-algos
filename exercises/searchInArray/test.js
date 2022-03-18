const search = require('./index');

test('search function exists', () => {
	expect(typeof search).toEqual('function');
});

test('[1, 2, 3, 4, 5, 6] returns an index of 3 for value 4', () => {
	expect(search([1, 2, 3, 4, 5, 6], 4)).toEqual(3);
});

test('[1, 2, 3, 4, 5, 6] returns an index of 5 for value 6', () => {
	expect(search([1, 2, 3, 4, 5, 6], 6)).toEqual(5);
});

test('[1, 2, 3, 4, 5, 6] returns -1 for value 11', () => {
	expect(search([1, 2, 3, 4, 5, 6], 11)).toEqual(-1);
});

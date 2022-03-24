const nestedEvenSum = require('./index');

const obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: 'yup',
		},
	},
};

const obj2 = {
	a: 2,
	b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
	c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
	d: 1,
	e: { e: { e: 2 }, ee: 'car' },
};

test('nestedEvenSum function exists', () => {
	expect(typeof nestedEvenSum).toEqual('function');
});

test('nestedEvenSum for obj1 is equal to 6', () => {
	expect(nestedEvenSum(obj1)).toEqual(6);
});

test('nestedEvenSum for obj2 is equal to 10', () => {
	expect(nestedEvenSum(obj2)).toEqual(10);
});

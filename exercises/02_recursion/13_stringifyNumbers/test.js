const stringifyNumbers = require('./index');

test('stringifyNumbers function exists', () => {
	expect(typeof stringifyNumbers).toEqual('function');
});

// obj1 and result1 are defined in "./dummyRecords"

test('stringifyNumbers(obj1) will be identical to result1', () => {
	expect(
		stringifyNumbers({
			num: 1,
			test: [],
			data: {
				val: 4,
				info: {
					isRight: true,
					random: 66,
				},
			},
		})
	).toEqual({
		num: '1',
		test: [],
		data: {
			val: '4',
			info: {
				isRight: true,
				random: '66',
			},
		},
	});
});

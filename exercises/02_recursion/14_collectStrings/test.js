const collectStrings = require('./index');

test('collectStrings function exists', () => {
	expect(typeof collectStrings).toEqual('function');
});

test('The output of collectStrings(obj1) will be identical to result1', () => {
	expect(
		collectStrings({
			stuff: 'foo',
			data: {
				val: {
					thing: {
						info: 'bar',
						moreInfo: {
							evenMoreInfo: {
								weMadeIt: 'baz',
							},
						},
					},
				},
			},
		})
	).toEqual(['foo', 'bar', 'baz']);
});

const capitalizeWords = require('./index');

test('capitalizeWords function exists', () => {
	expect(typeof capitalizeWords).toEqual('function');
});

test("['i', 'am', 'learning', 'recursion'] return ['I', 'AM', 'LEARNING', 'RECURSION']", () => {
	expect(capitalizeWords(['i', 'am', 'learning', 'recursion'])).toEqual([
		'I',
		'AM',
		'LEARNING',
		'RECURSION',
	]);
});

test("['work', 'trust', 'pray', 'generous', 'humble'] return ['WORK', 'TRUST', 'PRAY', 'GENEROUS', 'HUMBLE']", () => {
	expect(
		capitalizeWords(['work', 'trust', 'pray', 'generous', 'humble'])
	).toEqual(['WORK', 'TRUST', 'PRAY', 'GENEROUS', 'HUMBLE']);
});

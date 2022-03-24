const capitalizeFirst = require('./index');

test('capitalizeFirst function exists', () => {
	expect(typeof capitalizeFirst).toEqual('function');
});

test("capitalizeFirst(['car','taco','banana']) to return ['Car', 'Taco', 'Banana']", () => {
	expect(capitalizeFirst(['car', 'taco', 'banana'])).toEqual([
		'Car',
		'Taco',
		'Banana',
	]);
});

test("capitalizeFirst(['ball','foot','jack']) to return ['Ball', 'Foot', 'Jack']", () => {
	expect(capitalizeFirst(['ball', 'foot', 'jack'])).toEqual([
		'Ball',
		'Foot',
		'Jack',
	]);
});

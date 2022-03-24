const reverse = require('./index');

test('reverse function exists', () => {
	expect(typeof reverse).toEqual('function');
});

test("reverse('awesome') = 'emosewa'", () => {
	expect(reverse('awesome')).toEqual('emosewa');
});

test("reverse('rithmschool') = 'loohcsmhtir'", () => {
	expect(reverse('rithmschool')).toEqual('loohcsmhtir');
});

test("reverse('race') = 'ecar'", () => {
	expect(reverse('race')).toEqual('ecar');
});

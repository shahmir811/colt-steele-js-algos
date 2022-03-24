const isPalidrome = require('./index');

test('isPalidrome function exists', () => {
	expect(typeof isPalidrome).toEqual('function');
});

test("isPalindrome('awesome') returns false", () => {
	expect(isPalidrome('awesome')).toBeFalsy();
});

test("isPalindrome('foobar') returns false", () => {
	expect(isPalidrome('foobar')).toBeFalsy();
});

test("isPalindrome('tacocat') returns true", () => {
	expect(isPalidrome('tacocat')).toBeTruthy();
});

test("isPalindrome('amanaplanacanalpanama') returns true", () => {
	expect(isPalidrome('amanaplanacanalpanama')).toBeTruthy();
});

test("isPalindrome('amanaplanacanalpandemonium') returns true", () => {
	expect(isPalidrome('amanaplanacanalpandemonium')).toBeTruthy();
});

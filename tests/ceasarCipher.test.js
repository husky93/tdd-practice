import ceasarCipher from '../src/ceasarCipher';

test('Ceasar cipher is defined and is a function', () => {
  expect(ceasarCipher).toBeDefined();
  expect(typeof ceasarCipher).toBe('function');
});
test('Encrypts correctly', () => {
  expect(ceasarCipher('this is a test message', 4)).toBe(
    'xlmw mw e xiwx qiwweki'
  );
  expect(ceasarCipher('hello world', 10)).toBe('rovvy gybvn');
});
test('Keeps the same case', () => {
  expect(ceasarCipher('ZzZzZz AaAaAR', 5)).toBe('EeEeEe FfFfFW');
  expect(ceasarCipher('Hello World', 5)).toBe('Mjqqt Btwqi');
});
test('Works with punctuation', () => {
  expect(ceasarCipher('test puntuation!?!?', 5)).toBe('yjxy uzsyzfynts!?!?');
  expect(ceasarCipher('dot, and, comma.', 5)).toBe('ity, fsi, htrrf.');
});
test('Shifts from z to a', () => {
  expect(ceasarCipher('zzzzz', 1)).toBe('aaaaa');
});
test('Returns the same string if no key si specified', () => {
  expect(ceasarCipher('zzzzz')).toBe('zzzzz');
  expect(ceasarCipher('this is a test')).toBe('this is a test');
});
test('Throws an error when there are no arguments specified', () => {
  expect(() => ceasarCipher()).toThrow();
});
test('Throws an error when key value is too big', () => {
  expect(() => ceasarCipher('string', 96)).toThrow();
  expect(() => ceasarCipher('string', 29)).toThrow();
});
test('Throws error when arguments have a wrong type', () => {
  expect(() => ceasarCipher(134, { key: 96 })).toThrow();
  expect(() => ceasarCipher(['string'], 29)).toThrow();
});

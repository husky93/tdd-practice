import capitalize from '../src/capitalize';

test('Check if string type', () => {
  expect(typeof capitalize('string')).toBe('string');
});

test('Check if capitalized', () => {
  expect(capitalize('string')).toBe('String');
  expect(capitalize('string two')).toBe('String two');
});

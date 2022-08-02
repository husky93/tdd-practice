import reverseString from '../src/reverseString';

test('Check if string type', () => {
  expect(typeof capitalize('string')).toBe('string');
});

test('Check if reversed', () => {
  expect(capitalize('string')).toBe('gnirts');
  expect(capitalize('string two')).toBe('owt gnirts');
});

test('Check if case sensitive', () => {
  expect(capitalize('StRing')).toBe('gniRtS');
  expect(capitalize('strIng tWo')).toBe('oWt gnIrts');
});

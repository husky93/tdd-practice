import reverseString from '../src/reverseString';

test('Check if string type', () => {
  expect(typeof reverseString('string')).toBe('string');
});

test('Check if reversed', () => {
  expect(reverseString('string')).toBe('gnirts');
  expect(reverseString('string two')).toBe('owt gnirts');
});

test('Check if case sensitive', () => {
  expect(reverseString('StRing')).toBe('gniRtS');
  expect(reverseString('strIng tWo')).toBe('oWt gnIrts');
});

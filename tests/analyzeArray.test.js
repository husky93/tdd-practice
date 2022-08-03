import analyzeArray from '../src/analyzeArray';

test('Is defined and is a function', () => {
  expect(analyzeArray).toBeDefined();
  expect(typeof analyzeArray).toBe('function');
});

test('Returns an object', () => {
  expect(typeof analyzeArray([1, 2, 3])).toBe('object');
});

test('Returned object has avarage key', () => {
  expect(() => {
    const object = analyzeArray([1, 2, 3]);
    return object.average;
  }).toBeDefined();
});
test('Returned object has min key', () => {
  expect(() => {
    const object = analyzeArray([1, 2, 3]);
    return object.min;
  }).toBeDefined();
});
test('Returned object has max key', () => {
  expect(() => {
    const object = analyzeArray([1, 2, 3]);
    return object.max;
  }).toBeDefined();
});
test('Returned object has length key', () => {
  expect(() => {
    const object = analyzeArray([1, 2, 3]);
    return object.length;
  }).toBeDefined();
});
test('Function calculates correctly', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  const objectTwo = analyzeArray([5, 56, 3, 5, 0, 6, 7]);
  expect(objectTwo).toEqual({
    average: 12,
    min: 0,
    max: 56,
    length: 7,
  });
});
test('Throws error if argument other then array', () => {
  expect(() => analyzeArray(1)).toThrow();
  expect(() => analyzeArray('hello')).toThrow();
  expect(() => analyzeArray({ 1: 1, 2: 4, 4: 5 })).toThrow();
  expect(() => analyzeArray(null)).toThrow();
  expect(() => analyzeArray(undefined)).toThrow();
  expect(() => analyzeArray(true)).toThrow();
});
test('Throws error if argument array has other elements then nubmers', () => {
  expect(() => analyzeArray([1, 3, 4, 6, [5, 6, 7], 6])).toThrow();
  expect(() => analyzeArray([1, 3, '4', 5, '54'])).toThrow();
  expect(() => analyzeArray([0, 6, 'hello'])).toThrow();
  expect(() => analyzeArray([1, 3, null])).toThrow();
});

import calculator from '../src/calculator';

test('Is calculator is a defined object', () => {
  expect(calculator).toBeDefined();
  expect(typeof calculator).toBe('object');
});
test('Add method exists and is a function', () => {
  expect(calculator.add).toBeDefined();
  expect(typeof calculator.add).toBe('function');
});
test('Substract method exists and is a function', () => {
  expect(calculator.substract).toBeDefined();
  expect(typeof calculator.substract).toBe('function');
});
test('Divide method exists and is a function', () => {
  expect(calculator.divide).toBeDefined();
  expect(typeof calculator.divide).toBe('function');
});
test('Multiply method exists and is a function', () => {
  expect(calculator.multiply).toBeDefined();
  expect(typeof calculator.multiply).toBe('function');
});
test('Add method returns a number', () => {
  expect(typeof calculator.add(1, 4)).toBe('number');
});
test('Substract method returns a number', () => {
  expect(typeof calculator.substract(1, 4)).toBe('number');
});
test('Divide method returns a number', () => {
  expect(typeof calculator.divide(1, 4)).toBe('number');
});
test('Multiply method returns a number', () => {
  expect(typeof calculator.multiply(1, 4)).toBe('number');
});
test('Add method operates correctly', () => {
  expect(calculator.add(1, 4)).toBe(5);
  expect(calculator.add(2, 2)).toBe(4);
});
test('Substract operates correctly', () => {
  expect(calculator.substract(1, 4)).toBe(-3);
  expect(calculator.substract(6, 3)).toBe(3);
});
test('Divide operates correctly', () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(2, 2)).toBe(1);
});
test('Multiply operates correctly', () => {
  expect(calculator.multiply(1, 4)).toBe(4);
  expect(calculator.multiply(6, 2)).toBe(12);
});
test('Add method throws error if less then 2 numbers specified', () => {
  expect(() => calculator.add(1)).toThrow();
  expect(() => calculator.add()).toThrow();
});
test('Substract methods throw error if less then 2 numbers specified', () => {
  expect(() => calculator.substract(1)).toThrow();
  expect(() => calculator.substract()).toThrow();
});
test('Divide methods throw error if less then 2 numbers specified', () => {
  expect(() => calculator.divide(1)).toThrow();
  expect(() => calculator.divide()).toThrow();
});
test('Multiply methods throw error if less then 2 numbers specified', () => {
  expect(() => calculator.multiply(1)).toThrow();
  expect(() => calculator.multiply()).toThrow();
});
test('Add method throws error if more then 2 numbers specified', () => {
  expect(() => calculator.add(1, 6, 4, 7)).toThrow();
  expect(() => calculator.add(5, 6, 4, 2)).toThrow();
});
test('Substract methods throw error if more then 2 numbers specified', () => {
  expect(() => calculator.substract(6, 7, 45, 6)).toThrow();
  expect(() => calculator.substract(5, 6, 5)).toThrow();
});
test('Divide methods throw error if more then 2 numbers specified', () => {
  expect(() => calculator.divide(1, 5, 6, 3)).toThrow();
  expect(() => calculator.divide(4, 5, 6)).toThrow();
});
test('Multiply methods throw error if more then 2 numbers specified', () => {
  expect(() => calculator.multiply(1, 5, 6, 7, 4)).toThrow();
  expect(() => calculator.multiply(3, 4, 5)).toThrow();
});

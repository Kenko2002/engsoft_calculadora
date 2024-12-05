import { Calculator } from '../main/calculator';

describe('Calculator Operations', () => {
  test('add: should return the sum of two numbers', () => {
    expect(Calculator.add(5, 3)).toBe(8);
    expect(Calculator.add(-2, -4)).toBe(-6);
    expect(Calculator.add(0, 10)).toBe(10);
  });

  test('subtract: should return the difference of two numbers', () => {
    expect(Calculator.subtract(10, 4)).toBe(6);
    expect(Calculator.subtract(-5, -5)).toBe(0);
    expect(Calculator.subtract(0, 7)).toBe(-7);
  });

  test('multiply: should return the product of two numbers', () => {
    expect(Calculator.multiply(3, 4)).toBe(12);
    expect(Calculator.multiply(-3, 3)).toBe(-9);
    expect(Calculator.multiply(0, 100)).toBe(0);
  });

  test('divide: should return the quotient of two numbers', () => {
    expect(Calculator.divide(12, 4)).toBe(3);
    expect(Calculator.divide(-12, 3)).toBe(-4);
    expect(Calculator.divide(0, 5)).toBe(0);
  });

  test('divide: should throw an error when dividing by zero', () => {
    expect(() => Calculator.divide(10, 0)).toThrow('Division by zero is not allowed.');
  });

  test('power: should return the power of a base raised to an exponent', () => {
    expect(Calculator.power(2, 3)).toBe(8);  // 2^3 = 8
    expect(Calculator.power(5, 2)).toBe(25); // 5^2 = 25
    expect(Calculator.power(10, 0)).toBe(1); // 10^0 = 1
    expect(Calculator.power(0, 5)).toBe(0);  // 0^5 = 0
    expect(Calculator.power(-2, 3)).toBe(-8); // (-2)^3 = -8
  });
  
});

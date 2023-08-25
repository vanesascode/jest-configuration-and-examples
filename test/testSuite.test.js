const { add, subtract } = require('../src/testSuite');

//'Test suite' named "Calculator Tests"

describe('Math operations', () => {

  //Nested 'describe' block for the add function.
  describe('add', () => {

    // 'It' blocks that define individual test cases.
    it('should correctly add two numbers', () => {
      const result = add(2, 3);
      expect(result).toBe(5);
    });

    it('should correctly add negative numbers', () => {
      const result = add(-2, -3);
      expect(result).toBe(-5);
    });
  });

  //Nested 'describe' block for the subtract function.
  describe('subtract', () => {
    it('should correctly subtract two numbers', () => {
      const result = subtract(5, 2);
      expect(result).toBe(3);
    });

    it('should correctly subtract negative numbers', () => {
      const result = subtract(-5, -2);
      expect(result).toBe(-3);
    });
  });
});
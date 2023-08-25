// toBe matcher --  look at the maths.test.js file

///////////////////////////////////////////////

// toEqual matcher --  look at the fetchData.test.js file

///////////////////////////////////////////////////

// toContain matcher:

const { fruits, sentence } = require('../src/matchers');



it('should check if an array contains a value', () => {
  expect(fruits).toContain('banana'); // Passes
  expect(fruits).toContain('grape'); // Fails
});



it('should check if a string contains a substring', () => {
  expect(sentence).toContain('fox'); // Passes
  expect(sentence).toContain('cat'); // Fails
});

////////////////////////////////////////////////////

// toThrow matcher: 

const { divide } = require('../src/matchers');

it('should throw an error when dividing by zero', () => {
  expect(() => divide(10, 0)).toThrow(); // Passes
});

it('should not throw an error when dividing by a non-zero number', () => {
  expect(() => divide(10, 2)).not.toThrow(); // Passes
});

//////////////////////////////////////////////////////

// toMatch matcher:
// It is used to check if a value matches a regular expression pattern.

const { sentence2 } = require('../src/matchers');

it('should match a regular expression pattern', () => {
  expect(sentence2).toMatch(/quick/); // Passes
  expect(sentence2).toMatch(/cat/); // Fails
});

/////////////////////////////////////////////////////////

// toHaveProperty matcher:

const { person } = require('../src/matchers');

it('should check if an object has a property', () => {
  expect(person).toHaveProperty('name'); // Passes
  expect(person).toHaveProperty('age'); // Passes
  expect(person).toHaveProperty('address'); // Passes
  expect(person).toHaveProperty('address.city'); // Passes
  expect(person).toHaveProperty('address.country'); // Passes
  expect(person).toHaveProperty('address.postalCode'); // Fails
});


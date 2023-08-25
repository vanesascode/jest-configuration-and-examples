// toBe matcher --  look at the maths.js file

// toEqual matcher --  look at the fetchData.js file

// toContain matcher:

const fruits = ['apple', 'banana', 'orange'];
const sentence = 'The quick brown fox jumps over the lazy dog';

module.exports = { fruits, sentence };

// toThrow matcher: 

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

module.exports = { divide };

// toMatch matcher:
// It is used to check if a value matches a regular expression pattern.

const sentence2 = 'The quick brown fox jumps over the lazy dog';

module.exports = { sentence2 };


// toHaveProperty matcher:

const person = {
  name: 'John',
  age: 25,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

module.exports = { person };

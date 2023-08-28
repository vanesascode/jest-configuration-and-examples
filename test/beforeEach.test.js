const beforeEachCounter = require('../src/beforeEach');

describe('Counter', () => {
  beforeEach(() => {
    // Reset counter to 0 before each test
    beforeEachCounter.counter.value = 0;
  });

  afterEach(() => {
    beforeEachCounter.counter.value = 0;
  });

  it('should increment the counter', () => {
    beforeEachCounter.incrementCounter();
    expect(beforeEachCounter.counter.value).toBe(1);
  });

  it('should decrement the counter', () => {
    beforeEachCounter.decrementCounter();
    expect(beforeEachCounter.counter.value).toBe(-1);
  });
});


// The test should increment the counter and should decrement the counter failed due to a TypeError indicating that there was an assignment to a constant variable.

// The error occured because the counter variable was imported using destructuring with the const keyword, which makes it a constant and prevents reassignment.

// To fix this issue, I had to remove the destructuring and directly import the counter, incrementCounter, and decrementCounter variables without using destructuring. This allowed me to modify the counter variable within the beforeEach and afterEach hooks.

// To make the counter variable mutable, I had to use an object to wrap the counter variable in the beforeEach.js file

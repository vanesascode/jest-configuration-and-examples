const { add } = require('../src/mocking');

//The jest.mock() function is used to automatically mock the ../src/mocking module. This replaces the original implementation of the module with a mock implementation:
jest.mock('../src/mocking', () => ({
  //the add function is replaced with a mock function created using jest.fn():
  add: jest.fn(),
}));

describe('Math', () => {
  it('should add two numbers correctly', () => {
    //By providing a custom implementation for the add function using add.mockImplementation(), we can control what the mock function returns when it is called:
    add.mockImplementation((a, b) => {
      if (a === 0 || b === 0) {
        return 0;
      }
      return a + b;
    });

    //ASSERTIONS: 

    const result1 = add(2, 3);
    expect(result1).toBe(5);

    const result2 = add(0, 5);
    expect(result2).toBe(0);

    //expect(add).toHaveBeenCalledTimes(1) ensures that the add function was called exactly once.
    expect(add).toHaveBeenCalledTimes(2);
    //expect(add).toHaveBeenCalledWith(2, 3) checks that the add function was called with the arguments 2 and 3.
    expect(add).toHaveBeenCalledWith(2, 3);
    // expect(add).toHaveBeenCalledWith(0, 5) checks that the add function was called with the arguments 0 and 5.
    expect(add).toHaveBeenCalledWith(0, 5);

    // These assertions ensure that the add function is called as expected during the test and helps validate the behavior of the code being tested.
  });
});


// In the given example, mocking is used to isolate the behavior of the add function during the test case. By creating a mock version of the add function, we can control its implementation and observe how it is being used without relying on the actual implementation of the add function.
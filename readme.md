# Unit Testing with Jest in NodeJS

`Unit tests` help improve the quality and maintainability of code by catching bugs early, ensuring correctness, facilitating refactoring, improving code design, and enabling collaboration.

`Jest` is a powerful and feature-rich testing framework that provides an excellent developer experience. It is easy to set up and configure, includes useful features like mocking and snapshot testing, and performs well in terms of speed and efficiency.

---

## 🔹 Prepare your VSCode:

- [x] `npm init` (`-y` if we want to skip the questions) to create a package.json file

- [x] `npm i Jest` (to install Jest)

- [x] `npm i` (to install all dependencies from package.json)

---

## 🔹 Prepare the files:

when you create your functions, you then have to `export` them. E.g.:

```
module.exports = { sum, fromEuroToDollar, fromDollarToJapanYen, fromYenToPounds }

```

Then you create a file that includes the 'test' word in the file name, and `import` the fuctions. E.g.:

```
const { sum, fromEuroToDollar, fromDollarToJapanYen, fromYenToPounds } = require('./functions.js');

```

---

## 🔹 To run the tests:

- [x] In the package.json, modify the 'test' script into 'jest':

```
"scripts": {
    "start": "nodemon index.mjs",
    "test": "jest"
  },
```

- [x] Run the test: `npm run test`

---

👉 If you seem to have problems during the process, reinstall NODE with the latest recommended version. This happened to me that it didn't work at the beginning and after reinstalling it, it worked.

---

### I used this api for some tests:

https://jsonplaceholder.typicode.com/

---

### If you just want to run the .js files:

- [x] `npm install -g nodemon`

- [x] `nodemon index.js`

---

## 🔹 Why use Unit Testing?

Unit testing is an important practice in software development for several reasons:

- `Identifying bugs early`: Unit tests help identify bugs and issues early in the development process, making it easier and cheaper to fix them. By testing individual units of code in isolation, you can catch bugs before they propagate to other parts of the system.

- `Ensuring code correctness`: Unit tests provide a way to verify that individual units of code are working correctly. By defining expected inputs and outputs for each unit, you can ensure that the code behaves as intended.

- `Facilitating refactoring`: Unit tests provide a safety net when refactoring or making changes to the code. By running the tests after making changes, you can quickly identify if any unintended side effects or regressions have been introduced.

- `Improving code design`: Writing unit tests often leads to better code design. The process of writing tests forces you to think about the behavior and dependencies of your code, encouraging modular and decoupled designs.

- `Enabling collaboration`: Unit tests serve as a `form of documentation` and specification for the expected behavior of the code. They make it easier for multiple developers to collaborate on a codebase by providing clear expectations of how different parts of the code should work.

---

## 🔹 Why use Jest?

Jest is a popular JavaScript testing framework that is widely used for unit testing. Here are some reasons why Jest is a popular choice for unit testing:

- `Easy` setup and configuration: Jest is easy to set up and configure, making it accessible for developers of all skill levels. It provides a simple and intuitive API for writing tests, making it a good choice for beginners and experienced developers alike.

- `Built-in mocking and assertion features`: Jest provides built-in mocking capabilities, allowing you to easily simulate dependencies and control their behavior during tests. It also includes powerful assertion `methods` that make it easy to write expressive and readable test assertions.

- `Fast and parallel execution`: Jest is designed to be fast and efficient. It uses parallel test execution by default, allowing your tests to run concurrently and reducing the overall test execution time. Jest also includes features like intelligent test file selection and caching to further improve performance.

- `Snapshot testing`: Jest includes snapshot testing, which allows you to capture the output of a component or function and compare it against a stored snapshot. This makes it easy to detect unintended changes in the output, helping you catch regressions and ensure that your code is working as expected.

- `Code coverage reporting`: Jest provides built-in code coverage reporting, allowing you to see how much of your code is covered by tests. This can help you identify areas of your codebase that are not adequately tested and ensure that your tests are providing sufficient coverage.

- `Support for modern JavaScript` features: Jest has excellent support for modern JavaScript features, including support for ES6 modules, async/await, and TypeScript. It integrates seamlessly with popular tools like `Babel and TypeScript`, making it easy to write tests for code written in these languages.

## 🔹 Assertions:

Jest provides a wide range of assertions that you can use to test your code and verify its behavior.

- `expect(value).toBe(expectedValue)`: This assertion checks that the value is strictly equal (===) to the expectedValue. It is commonly used to compare primitive values like numbers, strings, booleans, and null.

- `expect(value).toEqual(expectedValue)`: This assertion checks that the value is deeply equal to the expectedValue. It performs a deep comparison of objects and arrays, ensuring that their properties and elements are equal.

- `expect(value).toBeTruthy()`: This assertion checks that the value is truthy, meaning it evaluates to true in a boolean context.

- `expect(value).toBeFalsy()`: This assertion checks that the value is falsy, meaning it evaluates to false in a boolean context.

- `expect(value).toBeDefined()`: This assertion checks that the value is defined and not undefined.

- `expect(value).toBeUndefined()`: This assertion checks that the value is undefined.

- `expect(value).toBeNull()`: This assertion checks that the value is null.

- `expect(value).toContain(expectedItem)`: This assertion checks that the value (an array, string, or iterable) contains the expectedItem.

- `expect(value).toHaveLength(expectedLength)`: This assertion checks that the value (an array or string) has the expectedLength number of elements or characters.

- `expect(value).toThrow(expectedError)`: This assertion checks that the value (a function) throws an error. The expectedError can be a specific error instance or a string representing the expected error message.

- `expect(value).toHaveBeenCalledWith()` assertion is used to check whether a mocked function or spy has been called with specific arguments.

- `expect(value).toHaveBeenCalledTimes()` assertion is used to verify that a mocked function or spy has been called a specific number of times.

---

## 🔹 Methods:

- `describe`: It is used to group related test cases together, creating a `test suite`. Takes two arguments: a string description and a callback function. The callback function contains the actual `test cases` that are part of the suite.

---

- `beforeAll`: This method is used to define setup code that should be executed once before all the tests in a test suite. It is commonly used to `initialize resources` or `set up test environment configurations`.

- `afterAll`: This method is used to define teardown code that should be executed once after all the tests in a test suite. It is commonly used to `clean up resources` or `restore test environment configurations`.

---

- `beforeEach`: This method is used to define setup code that should be executed before each individual test case in a test suite. It is commonly used to `reset variables` or prepare the system under test for the upcoming test.

```
let counter = 0;

beforeEach(() => {
  counter = 0;
});


it('should increment the counter', () => {
  counter++;
  expect(counter).toBe(1);
});

it('should decrement the counter', () => {
  counter--;
  expect(counter).toBe(-1);
});


```

---

## 🔹 Mocking:

Jest provides built-in mocking capabilities that allow you to create mock versions of dependencies and control their behavior during tests.

You can use methods like `jest.fn` to create a mock function, `jest.mock` to automatically mock a module, and `jest.spyOn` to create a spy on a function.

The `jest.mock()` function is used to automatically mock a mocking module. This replaces the original implementation of the module with a mock implementation. Then, the origianl function is replaced with a mock function created using `jest.fn()`:

```
jest.mock('../src/mocking', () => ({
  add: jest.fn(),
}));

describe('Math', () => {
  it('should add two numbers correctly', () => {
    add.mockImplementation((a, b) => {
      if (a === 0 || b === 0) {
        return 0;
      }
      return a + b;
    });

```

## 🔹 Snapshot testing:

It is a feature provided by Jest that allows you to capture the output of a component or function and compare it against a stored "snapshot".

Snapshot testing is particularly useful for testing components with `complex outputs`, such as React components or HTML markup generated by a function. It helps detect unintentional changes in the output, making it easier to catch regressions and unexpected behavior

However, it's important to note that snapshot testing is not suitable for every scenario. It is best used for `deterministic outputs where the same input always produces the same output`. It may not be ideal for components with dynamic or frequently changing outputs.

1. When you run a test that includes a snapshot assertion, Jest captures the output of the component or function being tested.

2. The captured output is then compared to the stored snapshot, which is a serialized representation of the expected output.

3. If a snapshot does not exist for the test, Jest creates a new snapshot and marks the test as "pending". You need to review and verify the snapshot manually.

4. If a snapshot already exists, Jest compares the captured output to the stored snapshot. If they match, the test passes. If they don't match, the test fails and displays a diff highlighting the differences.

5. When a test fails due to a snapshot mismatch, you have the option to update the snapshot. Jest provides a command-line option `--updateSnapshot` or a shortcut (u key) to easily update the snapshot.

### Things you can do once you have a snapshot generated:

1. `Commit the snapshot`: When you run the test suite for the first time, Jest will generate a snapshot file containing the expected output. You can commit this snapshot file to your version control system (e.g., Git) along with your code. This allows you to track changes to the snapshot over time and verify that the output remains the same.

2. Review and update snapshots: When you make intentional changes to the code that affect the output, Jest will detect the differences between the current output and the stored snapshot. It will provide you with a `diff` and prompt you to update the snapshot if the changes are expected. You can review the diff and decide whether to update the snapshot or `investigate the unexpected changes`.

3. Maintain snapshot integrity: It's important to keep the snapshot file up to date and ensure its integrity. If you make changes to the code that affect the output, remember to update the snapshot accordingly. This helps catch unintended changes and ensures that the test output remains consistent.

4. Use snapshots for `regression testing`: Snapshots are useful for regression testing. When you make changes to the code, you can run the test suite and compare the current output with the stored snapshot. If the output matches the snapshot, it indicates that the `code changes have not introduced any unintended side effects`.

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

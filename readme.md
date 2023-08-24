# Unit Testing with Jest in NodeJS

If you seem to have problems during the process, reinstall NODE with the latest recommended version. This happened to me that it didn't work at the beginning and after reinstalling it, it worked.

🔹 ## Prepare your VSCode:

- [x] `npm init` (`-y` if we want to skip the questions) to create a package.json file

- [x] `npm i Jest` (to install Jest)

- [x] `npm i` (to install all dependencies from package.json)

🔹 ## Prepare the files:

when you create your functions, you then have to `export` them. E.g.:

```
module.exports = { sum, fromEuroToDollar, fromDollarToJapanYen, fromYenToPounds }

```

Then you create a file that includes the 'test' word in the file name, and `import` the fuctions. E.g.:

```
const { sum, fromEuroToDollar, fromDollarToJapanYen, fromYenToPounds } = require('./functions.js');

```

🔹 ## To run the tests:

- [x] In the package.json, modify the 'test' script into 'jest':

```
"scripts": {
    "start": "nodemon index.mjs",
    "test": "jest"
  },
```

- [x] Run the test: `npm run test`

---

### I used this api for some tests:

https://jsonplaceholder.typicode.com/

### If you just want to run the .js files:

- [x] `npm install -g nodemon`

- [x] `nodemon index.js`

// import the functions: 

const { fromEuroToDollar, fromDollarToJapanYen, fromYenToPounds } = require('../src/currency.js');


//////////////////////////////////////////

// Test Function 1:

test("One euro should be 1.2 dollars", function () {

  // use the function like its supposed to be used
  const dollars = fromEuroToDollar(3.5)

  // if 1 euro are 1.2 dollars, then 3.5 euros should be (3.5 * 1.2)
  const expected = 3.5 * 1.2;

  // this is the comparison for the unit test
  expect(fromEuroToDollar(3.5)).toBe(4.2);

});
//////////////////////////////////////////

// Test Function 2:

test("One dollar should be 106.58 japan yens", function () {

  // use the function like its supposed to be used
  const japanYens = fromDollarToJapanYen(3.5)

  // if 1 dollar are japan yens, then 3.5 dollars should be (3.5 * 106.58)
  const expected = 3.5 * 106.58;

  // this is the comparison for the unit test
  expect(fromDollarToJapanYen(3.5)).toBe(373)

});

//////////////////////////////////////////

// Test Function 3:

test("One Yen should be 0.00625 Pounds", function () {

  // use the function like its supposed to be used
  const pounds = fromYenToPounds(3.5)

  // if 1 dollar are japan yens, then 3.5 dollars should be (3.5 * 0.00625)
  const expected = 3.5 * 0.00625;

  // this is the comparison for the unit test
  expect(fromYenToPounds(3.5)).toBe(0)

});
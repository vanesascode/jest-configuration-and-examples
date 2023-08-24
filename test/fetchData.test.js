// test/api.test.js

const { fetchData } = require('../src/fetchData');

test('fetchData should return the correct data', async () => {
  // use the function like its supposed to be used
  const expectedData = { id: 1, name: 'Example Data' };
  // Mock the API response
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(expectedData),
  });

  const data = await fetchData();
  expect(data).toEqual(expectedData);
});


// First, it sets up an expected data object that the function is supposed to return.  
 
// Then, it mocks the response of an API call using a Jest function called  spyOn . The  fetch  function is spied on and its resolved value is set to an object with a  json  property. The  json  property is also spied on and its resolved value is set to the expected data object.  
 
// After that, the  fetchData  function is called and its return value is stored in a variable called  data .  
 
// Finally, an assertion is made using the  expect  function to check if the  data  variable is equal to the expected data object. If the assertion fails, it means that the  fetchData  function is not returning the correct data.
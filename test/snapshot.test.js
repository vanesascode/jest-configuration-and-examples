const capitalizeString = require('../src/snapshot');

test('capitalizeString capitalizes the first letter of a string', () => {
  const input = 'hello';
  const result = capitalizeString(input);
  expect(result).toMatchSnapshot();
});

// In this example, we write a test case that passes the string 'hello' as input to the capitalizeString function. We capture the result and use the toMatchSnapshot() assertion to compare it against the stored snapshot.

// When you run this test for the first time, Jest will create a new snapshot since there is no existing snapshot. You can review the snapshot by navigating to the test output and inspecting the generated snapshot file.

// If you're satisfied with the generated snapshot, you can commit it to your version control system. On subsequent test runs, Jest will compare the captured output with the stored snapshot and pass the test if they match.

// If you make intentional changes to the function's output and want to update the snapshot, you can run Jest with the --updateSnapshot flag or press the u key when prompted. Jest will update the stored snapshot to reflect the new output.

// That's it! You can run the test using Jest, and it will perform the snapshot comparison and display the results.
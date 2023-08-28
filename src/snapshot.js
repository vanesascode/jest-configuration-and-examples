function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalizeString

//Run Jest once to create a snapshot

// Snapshot Summary
//  › 1 snapshot written from 1 test suite.

// Once you have generated a snapshot from a test suite, you can use it for future comparisons to ensure that the output remains consistent over time.
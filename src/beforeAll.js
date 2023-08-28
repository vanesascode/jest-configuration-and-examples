// expensiveResource.js
let expensiveResource;

function initializeExpensiveResource() {
  console.log('Initializing expensive resource...');
  // Simulating resource initialization that takes time
  return new Promise((resolve) => {
    setTimeout(() => {
      expensiveResource = 'Initialized resource';
      resolve();
    }, 2000); // Simulating a 2-second initialization process
  });
}

function cleanupExpensiveResource() {
  console.log('Cleaning up expensive resource...');
  // Cleanup logic for the expensive resource
  expensiveResource = null;
}

module.exports = {
  initializeExpensiveResource,
  cleanupExpensiveResource,
  getExpensiveResource: () => expensiveResource,
};


const { initializeExpensiveResource, cleanupExpensiveResource, getExpensiveResource } = require('../src/beforeAll');

beforeAll(async () => {
  await initializeExpensiveResource();
});

afterAll(() => {
  cleanupExpensiveResource();
});

describe('Feature', () => {
  it('should perform action A', () => {
    console.log('Running test: should perform action A');
    const resource = getExpensiveResource();
    // Test logic for action A that uses the expensive resource
    expect(resource).toBe('Initialized resource');
  });

  it('should perform action B', () => {
    console.log('Running test: should perform action B');
    const resource = getExpensiveResource();
    // Test logic for action B that uses the expensive resource
    expect(resource).toBe('Initialized resource');
  });
});

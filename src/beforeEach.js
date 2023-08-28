let counter = { value: 0 };

function incrementCounter() {
  counter.value++;
}

function decrementCounter() {
  counter.value--;
}

module.exports = {
  counter,
  incrementCounter,
  decrementCounter,
};

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

function logger(content) {
  console.log(content);
}

function adder(a, b, logger) {
  if (logger) {
    logger(a + b);
  }
  return a + b;
}

// let result = adder(1, 3); // OUTPUT: 4
let result = adder(1, 3, logger);
logger(result);

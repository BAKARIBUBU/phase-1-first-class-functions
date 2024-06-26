// index.js

// Function that receives a function and calls it
function receivesAFunction(callback) {
  callback();
}

// Function that returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    // named function body
  };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    // anonymous function body
  };
}

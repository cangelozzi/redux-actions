// ACTIONS
// Guess a number
// Generate Random number

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(number) {
  return {
    type: GUESS_NUMBER,
    number: number
  }
};

var GENERATE_RANDOM_NUMBER = 'GENERATE_RANDOM_NUMBER';
var generateRandomNumber = function(number) {
  return {
    type: GENERATE_RANDOM_NUMBER,
    number: number
  }
};

exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.GENERATE_RANDOM_NUMBER = GENERATE_RANDOM_NUMBER;
exports.generateRandomNumber = generateRandomNumber;

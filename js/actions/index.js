// ACTIONS
// Generate Random number
// Guess a number

var GENERATE_RANDOM_NUMBER = 'GENERATE_RANDOM_NUMBER';
var generateRandomNumber = function(number) {
  return {
    type: GENERATE_RANDOM_NUMBER,
    number: number
  }
};

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(guess) {
  return {
    type: GUESS_NUMBER,
    guess: guess
  }
};

exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.GENERATE_RANDOM_NUMBER = GENERATE_RANDOM_NUMBER;
exports.generateRandomNumber = generateRandomNumber;

'use strict';

// correctUserGuessCount increases with each 'Y' or 'YES' answer
var correctUserGuessCount = 0;

// get input from user
var user = prompt('Welcome to my page.  Please enter your name.');
// console.log('User name:', user);

var dogQuestion = prompt('Okay, ' + user + '.  Do you think I like dogs? (Y/N)').toUpperCase();
evalQuestion(dogQuestion);
// console.log('Likes dogs: ', dogQuestion);

var pizzaQuestion = prompt('Okay, ' + user + '.  Do you think I like pizza? (Y/N)').toUpperCase();
evalQuestion(pizzaQuestion);
// console.log('Likes pizza: ', pizzaQuestion);

var soccerQuestion = prompt('Okay, ' + user + '.  Do you think I like soccer? (Y/N)').toUpperCase();
evalQuestion(soccerQuestion);
// console.log('Likes soccer: ', soccerQuestion);

var hikingQuestion = prompt('Okay, ' + user + '.  Do you think I like hiking? (Y/N)').toUpperCase();
evalQuestion(hikingQuestion);
// console.log('Likes hiking: ', hikingQuestion);

var cardGameQuestion = prompt('Okay, ' + user + '.  Do you think I like card games? (Y/N)').toUpperCase();
evalQuestion(cardGameQuestion);
// console.log('Likes card games: ', cardGameQuestion);

// User attemps to guess the special number
questionGuessNum();

// Display custom message 
displayCustomMessage(correctUserGuessCount);


//
// FUNCTION SECTION
//

// function alerts user with correct/incorrect based of their guess
function evalQuestion(userGuess) {
  if (userGuess === 'Y' || userGuess === 'YES') {
    alert('That\'s correct!');
    correctUserGuessCount++;
  } else {
    alert('That\'s incorrect');
  }
}

// function interacts with user based of their guess of the special number of 17
function questionGuessNum() {
  // track num of guesses
  var numOfGuesses = 1;

  while (numOfGuesses <= 4) {
    // get user's guess
    var userNumberGuess = parseInt(prompt('Guess a number between 1 and 25.'));
    // eval guess
    if (userNumberGuess === 17) {
      alert('You win!  That\'s the special number.  It was 17!');
      break;
    } else if (userNumberGuess > 17) {
      alert('That\'s too high.  Guesses remaining: ' + (4 - numOfGuesses));
      numOfGuesses++;
    } else if (userNumberGuess < 17) {
      alert('That\'s too low. Guesses remaining: ' + (4 - numOfGuesses));
      numOfGuesses++;
    }
  }
  // tell user they didn't guess correctly and give them answer
  if (numOfGuesses > 4) {
    alert('Thanks for playing but you didn\'t get the number.  It was 17!');
  }
}

// function alerts user with final message based off the number of their correct answers
function displayCustomMessage(count) {
  if (count > 4) {
    alert('Hey, ' + user + '.  You answered most questions correctly.  Maybe you know me already!');
  } else if (count === 3) {
    alert('Hey, ' + user + '.  You answered some questions correctly.  Maybe I haven\'t talked enough to you!');
  } else if (count < 3) {
    alert('Hey, ' + user + '.  You answered most questions wrong.  You don\'t know me well, but that\'s cool!');
  }
}


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

// User interacts with prompt in attempt to guess the special number
questionGuessNum();

// User interacts with prompt in attempt to guess one of my favorite colors
guessColor()

// Display custom message based off how many answers user got right
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
      correctUserGuessCount++;
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


// function interacts with user as they attempt to guess my favorite color
function guessColor() {
  // list of my favorite colors
  var myFavColors = ['blue', 'cyan', 'seafoam green', 'purple', 'fuscia', 'green'];
  // track num of guesses
  var numOfGuesses = 0;
  // keep track if user has guessed right answer
  var flag;

  while (numOfGuesses < 6 && flag !== true) {
    // get user guess
    var userColorGuess = prompt('Try and guess my favorite color (guesses remaining: ' + (6 - numOfGuesses) + '):').toLowerCase();
    for (var guess=0; guess < myFavColors.length; guess++) {
      if (userColorGuess === myFavColors[guess]) {
        alert(userColorGuess + ' is one of my favorite colors!  Well done.');
        correctUserGuessCount++;
        flag = true;
      }
    }
    // user guessed wrong and guess count increases
    numOfGuesses++;
  }

  if(flag === false) {
    alert('You did not guess correctly within the guess cap. Sorry!')
  }

  // display all possible answers
  var colorsMsg = myFavColors[0];
  for (var color = 1; color < myFavColors.length; color++) {
    colorsMsg = colorsMsg + ', ' + myFavColors[color];
  }
  alert('Here are all my favorite colors: ' + colorsMsg);
}


// function alerts user with final message based off the number of their correct answers
function displayCustomMessage(count) {
  if (count > 4) {
    alert('Hey, ' + user + '.  You answered ' + correctUserGuessCount + '/7 questions correctly.  Well done!');
  } else if (count === 3) {
    alert('Hey, ' + user + '.  You answered ' + correctUserGuessCount + '/7 questions correctly.  Not bad...');
  } else if (count < 3) {
    alert('Hey, ' + user + '.  You answered ' + correctUserGuessCount + '/7 questions correctly  Refresh and try again!');
  }
}


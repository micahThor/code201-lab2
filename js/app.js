'use strict';

// function prompts user to guess question and alerts user with 'correct/incorrect' based of their guess
function personalQuestions(user) {

  var questionBank = ['Okay, ' + user + '.  Do you think I like dogs? (y/n)',
  'Okay, ' + user + '.  Do you think I like pizza? (y/n)',
  'Okay, ' + user + '.  Do you think I like soccer? (y/n)',
  'Okay, ' + user + '.  Do you think I like hiking? (Y/N)',
  'Okay, ' + user + '.  Do you think I like card games? (y/n)'];

  var userAnswer;
  // flag validates user input
  var flag = false;

  for (var question = 0; question < questionBank.length; question++, flag = false) {

    while (!flag) {
      userAnswer = prompt(questionBank[question]).toLowerCase();

      if (userAnswer === 'y' || userAnswer === 'n') {
        flag = true;
      } else {
        alert('Must be "y" or "n" answers only');
      }
    }

    if (userAnswer === 'y') {
      alert('That\'s correct!');
      correctUserGuessCount++;
    } else {
      alert('That\'s incorrect');
    }
  }
}

// function interacts with user based off their guess of the special number of 17
function questionGuessNum() {
  
  var allowableGuesses = 4;
  var numofGuesses;
  var userNumberGuess;

  for (numofGuesses = 1; numofGuesses <= allowableGuesses; numofGuesses++) {
    // get user's guess
    userNumberGuess = parseInt(prompt('Guess a number between 1 and 25.'));
    // eval guess
    if (userNumberGuess === 17) {
      alert('You win!  That\'s the special number.  It was 17!');
      correctUserGuessCount++;
      break;
    } else if (userNumberGuess > 17) {
      alert('That\'s too high.  Guesses remaining: ' + (4 - numofGuesses));
    } else if (userNumberGuess < 17) {
      alert('That\'s too low. Guesses remaining: ' + (4 - numofGuesses));
    }

    // tell user they didn't guess correctly and give them answer
    if (numofGuesses === 4) {
      alert('Thanks for playing but you didn\'t get the number.  It was 17!');
    }
  }
}

// function interacts with user as they attempt to guess my favorite color
function guessColor() {
  // list of my favorite colors
  var myFavColors = ['blue', 'cyan', 'seafoam green', 'purple', 'fuscia', 'green'];
  // track num of guesses
  var numOfGuesses = 0;
  // keep track if user has guessed right answer
  var flag = false;

  while (numOfGuesses < 6 && flag !== true) {
    // get user guess
    var userColorGuess = prompt('Try and guess my favorite color (guesses remaining: ' + (6 - numOfGuesses) + '):').toLowerCase();
    // iterate through list to see if user matches one of my colors
    for (var guess = 0; guess < myFavColors.length; guess++) {
      if (userColorGuess === myFavColors[guess]) {
        alert(userColorGuess + ' is one of my favorite colors!  Well done.');
        correctUserGuessCount++;
        flag = true;
      }
    }
    // user guessed wrong and guess count increases
    numOfGuesses++;
  }

  // User used up all guesses and gets message
  if (flag === false) {
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
function displayCustomMessage(user) {
  if (correctUserGuessCount > 4) {
    alert('Hey, ' + user + '.  You answered ' + correctUserGuessCount + '/7 questions correctly.  Well done!');
  } else if (correctUserGuessCount === 3) {
    alert('Hey, ' + user + '.  You answered ' + correctUserGuessCount + '/7 questions correctly.  Not bad...');
  } else if (correctUserGuessCount < 3) {
    alert('Hey, ' + user + '.  You answered ' + correctUserGuessCount + '/7 questions correctly  Refresh and try again!');
  }
}

// function drives the question game
function main() {

  // get name input from user
  var userName = prompt('Welcome to my page.  Please enter your name.');

  personalQuestions(userName);
  questionGuessNum();
  guessColor()
  displayCustomMessage(userName);
}

// correctUserGuessCount increases with each 'Y' or correct guess
var correctUserGuessCount = 0;
main();





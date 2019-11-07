'use strict';

// userCount increases with each 'Y' or 'YES' answer
var userCount = 0;

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

// Display custom message 
displayCustomMessage(userCount);


//
// FUNCTION SECTION
//

// function alerts user with correct/incorrect based of their guess
function evalQuestion(userGuess) {
  if (userGuess === 'Y' || userGuess === 'YES') {
    alert('That\'s correct!');
    userCount++;
  } else {
    alert('That\'s incorrect');
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
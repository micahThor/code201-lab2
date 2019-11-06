'use strict';

// userCount increases with each 'Y' or 'YES' answer
var userCount = 0;

// get input from user
var user = prompt("Welcome to my page.  Please enter your name.");
// console.log("User name:", user);

var dogQuestion = prompt("Okay, " + user + ".  Do you think I like dogs? (Y/N)").toUpperCase();
// console.log("Likes dogs: ", dogQuestion);
if (dogQuestion === "Y" || dogQuestion === "YES") {
  alert("That's correct!");
  userCount++;
} else {
  alert("That's incorrect");
}

var pizzaQuestion = prompt("Okay, " + user + ".  Do you think I like pizza? (Y/N)").toUpperCase();
// console.log("Likes pizza: ", pizzaQuestion);
if (pizzaQuestion === "Y" || pizzaQuestion === "YES") {
  alert("That's correct!");
  userCount++;
} else {
  alert("That's incorrect");
}

var soccerQuestion = prompt("Okay, " + user + ".  Do you think I like soccer? (Y/N)").toUpperCase();
// console.log("Likes soccer: ", soccerQuestion);
if (soccerQuestion === "Y" || soccerQuestion === "YES") {
  alert("That's correct!");
  userCount++;
} else {
  alert("That's incorrect");
}

var hikingQuestion = prompt("Okay, " + user + ".  Do you think I like hiking? (Y/N)").toUpperCase();
// console.log("Likes hiking: ", hikingQuestion);
if (hikingQuestion === "Y" || hikingQuestion === "YES") {
  alert("That's correct!");
  userCount++;
} else {
  alert("That's incorrect");
}

var cardGameQuestion = prompt("Okay, " + user + ".  Do you think I like card games? (Y/N)").toUpperCase();
// console.log("Likes card games: ", cardGameQuestion);
if (cardGameQuestion === "Y" || cardGameQuestion === "YES") {
  alert("That's correct!");
  userCount++;
} else {
  alert("That's incorrect");
}


// alert user with final message based off their answers
if (userCount > 4) {
  alert("Hey, " + user + ".  You answered most questions correctly.  Maybe you know me already!");
} else if (userCount === 3) {
  alert("Hey, " + user + ".  You answered some questions correctly.  Maybe I haven't talked enough to you!");
} else if (userCount < 3) {
  alert("Hey, " + user + ".  You answered most questions wrong.  You don't know me well, but that's cool!");
}
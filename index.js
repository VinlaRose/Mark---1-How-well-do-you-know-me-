var readlineSync = require('readline-sync');
var userName = readlineSync.question('Hi! Whats your name? ');
console.log("Welcome " + userName.toUpperCase());
var score = 0
var userQues = readlineSync.question('Do you want to play a quiz? (say yes or no)');
if (userQues.toUpperCase() === "YES") {

  var ques = [
    {
      question: "Whats my full name? ",
      answer: "Vinla Rose Poruthur Vincen"
    },
    {
      question: "Where was I born? ",
      answer: "Kerala"
    },
    {
      question: "In which year was I born? ",
      answer: "1998"
    }, {
      question: "What is my favourite food? ",
      answer: "Biryani"
    }, {
      question: "What is my favourite color?",
      answer: "Blue"
    }, {
      question: "In how many schools have I studied? ",
      answer: "4"
    }

  ]

  for (var i = 0; i < ques.length; i++) {
    var currQues = ques[i];
    game(currQues.question, currQues.answer)
  }

  var highestScore = 6;
  console.log("Highest score is ", highestScore)

  if (highestScore === score) {
    console.log("congratulations you are the highest scorer")
  }
} else {
  console.log("EXIT GAME")
}


function game(question, answer) {
  var userResponse = readlineSync.question(question);
  if (userResponse.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score = score + 1;
  } else {
    console.log("Wrong!")
  }
  console.log("Your score is ", score);
}










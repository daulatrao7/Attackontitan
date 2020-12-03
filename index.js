var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

var userName = readlineSync.question(chalk.red("Enter your name :"));

console.log(chalk.red('-- Welcome ') + chalk.yellow.bold(userName) + chalk.red(' to ') +('Attack On Titan Quiz') + chalk.red(' --'));

function play(question,options,answer){
  console.log('\n' + chalk.green(question));
  var userAnswer = readlineSync.keyInSelect(options);
  if (userAnswer !== -1) {
    if (options[userAnswer].toUpperCase() === options[answer].toUpperCase()) {
    console.log("Correct!");
    score = score + 1;
    } else {
      console.log("Wrong!");
    }
}

console.log(chalk.red('Current Score: ') + chalk.red(score));
  console.log(chalk.yellow('-----------------------'));
  console.log();
}

var questions = [{
  question: "What is humanity surrounded with?",
  options: ["walls","ocean","dark forest","desert"],
  answer: 0
},{
  question: "Who is the current collosal Titan?",
  options: ["reiner","Armin","erwin","Bertholdt"],
  answer: 1
},{
  question: "What is christa's original name?",
  options: ["Ymir","Historia","Mitsuha","Nezuko"],
  answer: 1
},{
  question: "Who is the squad leader after Erwin?",
  options: ["Levi","Armin","Eren","Hange"],
  answer: 3
},{
  question: "What is the name of the Smiling Titan?",
  options: ["Grisha","Frieda Reiss","Dina Fritz","Not named"],
  answer: 2
},{
  question: "What is the name of the comandant of cadet corps?",
  options: ["Grisha Yeager","Erwin smith","Hange","Keith Sadles"],
  answer: 3
},{
  question: "Who is kenny to levi?",
  options: ["Uncle","Brother","Father","Mentor"],
  answer: 0
},{
  question: "Who is ranked first in 104th division of trainiing corps?",
  options: ["Eren","Annie","Mikasa","Armin"],
  answer: 2
},{
  question: "Who finds out Annie's identity?",
  options: ["Levi","Erwin","Armin","Mikasa"],
  answer: 2
},{
  question: "Who was responsible for messing with Eren's equipment during training?",
  options: ["Erwin","Keith","Armin","Annie"],
  answer: 1
}
];
for (var i=0; i<questions.length; i++) {
  var curQuestion = questions[i];
  play(curQuestion.question, curQuestion.options, curQuestion.answer);
}

console.log("You scored "+ score+"/10");

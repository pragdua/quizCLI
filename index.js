const readlineSync = require("readline-sync");
const chalk = require("chalk");
const enterName = readlineSync.question("Welcome to the Quiz. Please enter your name : ");

console.log("Welcome " + chalk.bold(enterName) + " to " + chalk.bgCyan.black.bold("DO YOU KNOW ME!"));
console.log(" ");
readlineSync.question(chalk.red("Press any key to begin.... "));
console.log(" ");

let score = 0;
let score2 = 0;

const questionPannel = [
  {
    question : "What is my name? ",
    answer : "Pragun"
  },
  {
    question : "What is my fav thing to do? ",
    answer : "sleep"
  },
  {
    question : "Where do I live? ",
    answer : "New Delhi"
  },
  {
    question : "Name my favourite tv series ",
    answer : "psych"
  },
  {
    question : "name my favourite movie",
    answer : "GOTG"
  }
]

function quizQnA(question,answer){

  let inputAns = readlineSync.question(question);
  if (inputAns.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("You are right!!"));
    console.log(" ");
    score = score + 1;
  } else {
    console.log(chalk.red("Oops! You are wrong. The correct answer is : ") + chalk.green(answer));
    console.log(" ");
  }
  console.log(`-------------------`);
  
}

playAgain();

function playAgain() {
  for(let i = 0 ; i < questionPannel.length ; i++){
    quizQnA(questionPannel[i].question,questionPannel[i].answer);
  }
  let Pagain = readlineSync.question("Do you want to continue? Y or N : ");
  if(Pagain.toUpperCase() === "Y"){
    console.clear();
    if(score > score2){
      score2 = score;
    }
    // console.log("Your current score " + score2);
    score = 0;
    playAgain();
  }
}


console.log(" ");
console.log(chalk.yellow.bold(" Your score current is " + score));
console.log(" ");
console.log(chalk.yellow.bold(" Personal best : " + score2));
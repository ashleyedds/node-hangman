var inquirer = require("inquirer");
var isLetter = require("is-letter");

var Word = require("./word.js");

var remainingGuesses = 10;
var lettersGuesses = [];

var wordList = ["apline skiing", "biathlon", "bobsledding", "cross country skiing", "curling", "figure skating", "freestyle skating", "hockey", "luge", "nordic combined", "short track speed skating", "skeleton", "ski jumping", "snowboarding", "speed skating"];

var gameWord;

function startGame() {

    var targetWord = wordList[Math.floor(Math.random() * wordList.length)]

    console.log(targetWord);
    
    console.log("Welcome to Node Hangman: Winter Olympics Edition! See if you can go for gold and correctly guess the sporting event.\n")

    console.log("Guesses left: " + remainingGuesses +"\n\n");

    gameWord = new Word(targetWord);
    gameWord.getLetters();

    getUserGuess();
    
}

function getUserGuess() {
    console.log("\n");

    if(remainingGuesses > 0){
        inquirer.prompt([
            {
                type:"value",
                name: "letter",
                message: "Guess a Letter: "
            }
        ]).then(function(userInput){
            var userLetter = userInput.letter.toLowerCase();
            
            if(isLetter(userLetter) === false){
                console.log("Oops, " + userLetter + " is not a letter. Try again.");
            };        

        })
        }
    }


startGame();

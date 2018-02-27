var inquirer = require("inquirer");
var isLetter = require("is-letter");

var Word = require("./word.js");

var letterGuesses = [];
var gameWord = "";

var wordList = ["apline skiing", "biathlon", "bobsledding", "cross country skiing", "curling", "figure skating", "freestyle skating", "hockey", "luge", "nordic combined", "short track speed skating", "skeleton", "ski jumping", "snowboarding", "speed skating"];

var game = {

    remainingGuesses: 10,

    startGame: function () {

        var targetWord = wordList[Math.floor(Math.random() * wordList.length)]

        console.log(targetWord);
        
        console.log("Welcome to Node Hangman: Winter Olympics Edition! See if you can go for gold and correctly guess the sporting event.\n")

        console.log("Guesses left: " + this.remainingGuesses + "\n\n");

        gameWord = new Word(targetWord);
        gameWord.getLetters();

        getUserGuess();

    }
};

function getUserGuess() {
    console.log("\n");

    if (game.remainingGuesses > 0) {
        inquirer.prompt([
            {
                type: "value",
                name: "letter",
                message: "Guess a Letter: "
            }
        ]).then(function (userInput) {
            var userLetter = userInput.letter.toLowerCase();
            let guessArray = [];
            if (isLetter(userLetter) === false) {
                console.log("Oops, " + userLetter + " is not a letter. Try again.\n");
                console.log("Guesses left: " + game.remainingGuesses + "\n");
                console.log("Letters guessed: " + letterGuesses + "\n");

                getUserGuess();
                return;
            }
            
            if (isLetter(userLetter) === true && letterGuesses.indexOf(userLetter) != -1) {
                console.log("Gosh darn! You already guessed " + userLetter + " Try again please.");
                console.log("Guesses left: " + game.remainingGuesses + "\n");
                console.log("Letters guessed: " + letterGuesses + "\n");

                getUserGuess();
                return;
            } 
            
                letterGuesses.push(userLetter);

                gameWord.checkGuess(userLetter);
                gameWord.logWin();
                getUserGuess();        
            
        })
    }
}

game.startGame();


//Remaining game logic:
//Check for win 
//Check for lose as player incorrectly guesses and looses remaining plays
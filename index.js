var inquirer = require("inquirer");
var isLetter = require("is-letter");

var Word = require("./word.js");

var letterGuesses = [];
var gameWord = "";

var wordList = ["apline skiing", "biathlon", "bobsledding", "cross country skiing", "curling", "figure skating", "freestyle skating", "hockey", "luge", "nordic combined", "short track speed skating", "skeleton", "ski jumping", "snowboarding", "speed skating"];

var game = {

    remainingGuesses: 10,

    startGame: function () {

        var targetWord = wordList[Math.floor(Math.random() * wordList.length)];

        console.log("Welcome to Node Hangman: Winter Olympics Edition! See if you can go for gold and correctly guess the sporting event.\n")

        console.log("Guesses left: " + this.remainingGuesses + "\n\n");

        gameWord = "";
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

            function checkForWin() {
                for (let i = 0; i < gameWord.letters.length; i++) {
                    if (gameWord.letters[i].display === true) {
                        guessArray.push("true");
                        if (gameWord.letters.length === guessArray.length) {
                            console.log("Wow! A gold medal for you!");
                            return true;
                        }
                    }
                }
            }





            if (isLetter(userLetter) === false) {
                console.log("Oops, " + userLetter + " is not a letter. Try again.\n");
                console.log("Guesses left: " + game.remainingGuesses + "\n");
                console.log("Letters guessed: " + letterGuesses + "\n");
                game.remainingGuesses--;
                getUserGuess();
                return;
            }

            if (isLetter(userLetter) === true && letterGuesses.indexOf(userLetter) != -1) {
                game.remainingGuesses--;
                console.log("Gosh darn! You already guessed " + userLetter + " Try again please.");
                console.log("Guesses left: " + game.remainingGuesses + "\n");
                console.log("Letters guessed: " + letterGuesses + "\n");
                getUserGuess();
                return;
            }

            letterGuesses.push(userLetter);

            if (gameWord.rightOrWrong(userLetter) === false) {
                console.log("Aww too bad. The judges aren't going to like that move.");
                game.remainingGuesses--;
                console.log("Guesses left: " + game.remainingGuesses + "\n");
                console.log("Letters guessed: " + letterGuesses + "\n");

            } else {
                console.log("Nice! 10 points from the judges.");
                console.log("Guesses left: " + game.remainingGuesses + "\n");
                console.log("Letters guessed: " + letterGuesses + "\n");
            }


            gameWord.checkGuess(userLetter);
            if (checkForWin() === true) {
                letterGuesses = [];
                game.remainingGuesses = 10;
                game.startGame()
                return;
            } else {
                getUserGuess();
                return;
            }


        })

    } else {
        console.log("Aw too bad, you didn't make the podium this year. Better luck next time.");
        game.remainingGuesses = 10;
        letterGuesses = [];
        game.startGame();
    }
}

game.startGame();


//Remaining game logic:
//Check for win 
//Check for lose as player incorrectly guesses and looses remaining plays
//I'm sorry I failed you. I did my best.
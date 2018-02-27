var inquirer = require("inquirer");
var isLetter = require("is-letter");

var Word = require("./word.js");
var Letter = require('./letter.js');

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

            if (isLetter(userLetter) === false) {
                console.log("Oops, " + userLetter + " is not a letter. Try again.\n");
                console.log("Guesses left: " + game.remainingGuesses + "\n");
                console.log("Letters guessed: " + letterGuesses + "\n");

                getUserGuess();
            } else if (isLetter(userLetter) === true && letterGuesses.indexOf(userLetter) != -1) {
                console.log("Gosh darn! You already guessed " + userLetter + " Try again please.");
                console.log("Guesses left: " + game.remainingGuesses + "\n");
                console.log("Letters guessed: " + letterGuesses + "\n");
            } else {
                letterGuesses.push(userLetter);

                gameWord.checkGuess(userLetter);
                // gameWord.getLetters();

                // var letterInWord = Word.displayWord.checkLetter(userLetter);
                // console.log("This worked!" + game.gameWord.checkLetter(userInput));



                //I've spared you the struggle from this point. Had I been able to access the checkLetter() function waaayyy back in my letter.js file, the logic would have proceeded as thus:

                //some function to magically move through word.js to letter.js to check for letter true vs letter false to display the correct letter rather than the underscore

                //some function to render the new display with the blanks and the correctly guessed letters, and re-initialiizing the getUserGuess function to continue the inquirer prompts

                //if remainingGuesses === 0 : awww sorry, you loose, re-initialize startGame function for a new word

                //if remainingLetters === 0 : hoorraay! you did better than I did finishing this assignment. Gold medal for you. Use inquirer to ask if user wants to play again. If yes, re-initialze startGame to play again with a new random word, if now, console.log a goodbye, thanks for playing message

                //PS: sorry I failed you.


            }
        })
    }
}

game.startGame();

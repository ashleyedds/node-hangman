var Letter = require('./letter.js');

var letters = [];
var displayWord = "";
var correctGuesses = [];

function Word(wordTarget) {

    this.wordTarget = wordTarget;
    this.wordCorrect = false;

    this.getLetters = function () {
        for (var i = 0; i < wordTarget.length; i++) {
            var targetLetter = new Letter(this.wordTarget[i]);
            letters.push(targetLetter);
            let renderBlanks = targetLetter.letterShow();
            let combineWord = renderBlanks.toString();
            displayWord = displayWord.concat(combineWord + " ");
            if (i === wordTarget.length - 1) {
                showString();
            }
        }

        function showString() {
            console.log(displayWord);
        }
    };

    this.checkGuess = function (guess) {
        displayWord = "";
        for (var j = 0; j < letters.length; j++) {
            var word = letters[j];
            // console.log(word);
            word.checkLetter(guess);
            let renderBlanks = word.letterShow();
            let combineWord = renderBlanks.toString();

            displayWord = displayWord.concat(combineWord + " ");
            if (j === wordTarget.length - 1) {
                showString();
            }

            letters.every(this.checkForWin());
            
        }

        function showString() {
            console.log(displayWord);
        }

    };


//     this.checkForWin = function () {
//         for (var j = 0; j < letters.length; j++) {
//             var word = letters[j];
//         if (word.display === true) {
//             console.log("Win!");
//         }
//     }
// };

    // this.logWin = function(){
    //     letters.every(this.checkForWin());
    //     return;
    // };


};

module.exports = Word;

// var test = new Word("test");
// console.log('--------------------');
// console.log("Underlying Word: " + test.wordTarget);
// test.getLetters();
// console.log(letters);
// console.log(letters[0].display);
// test.checkGuess("t");
// console.log("is it working? " + letters[0].display);
// console.log("Test array " + test.letters[0].letter);
// console.log("Guessed? " + test.wordCorrect);
// console.log('--------------------');
// test.remainingLetters = 0;
// test.checkGuess("t");
// console.log(test.display);
// test.checkForWin();
// console.log("Guessed? " + test.wordCorrect);